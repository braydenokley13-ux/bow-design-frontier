import { createRequire } from 'module'; const { chromium } = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/x.js')('playwright-core');
const REG = { B: [30, 485], L: [495, 950], D: [950, 1410] };
// strings that may never appear in a region (text-level leak oracle; written from the spec's fact list)
const DEN_PRIV = [/Internal board/i, /walk away at a 1st/i, /guard rotation is thin/i, /spot 15 is held/i, /we countered/i, /we would pay two/i, /We can wait/i, /stretch to two/i, /spot 15 is our only/i, /never mention the 1st/i, /Denver GM, internal/i];
const BOS_PRIV = [/Internal ceiling/i, /Agent called/i, /Owner.s note/i, /Guard B out puts us/i, /which is our floor/i, /Nothing left to give/i, /hold at one 2nd/i, /owner wants us under/i, /other guard.s agent/i, /Boston GM, internal/i, /Boston owner, internal/i, /agent, secondhand/i];
const LEA_PRIV = [/League file/i, /League office, internal/i, /Check detail/i, /League check, computed/i];
const FILING = [/Denver.s books/i, /195\.4/, /Denver filing/i];
const BAN = { B: [...DEN_PRIV, ...LEA_PRIV, ...FILING], D: [...BOS_PRIV, ...LEA_PRIV], L: [...BOS_PRIV, ...DEN_PRIV], S: [...BOS_PRIV, ...DEN_PRIV, ...LEA_PRIV, ...FILING] };
async function regions(page) {
  return page.evaluate((REG) => {
    const out = { B: '', L: '', D: '', S: '', HDR: '' };
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) {
      const t = n.textContent.trim(); if (!t) continue; const el = n.parentElement; const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
      const r = el.getBoundingClientRect(); if (!r.width) continue; const cx = r.x + Math.min(r.width, 40) / 2, cy = r.y + r.height / 2;
      const k = cy < 96 ? 'HDR' : cy < 196 ? 'S' : cy > 842 ? 'HDR' : cx < REG.B[1] ? 'B' : cx < REG.L[1] ? 'L' : 'D';
      out[k] += t + ' ¦ ';
    }
    return out;
  }, REG);
}
async function click(page, reg, re) {
  return page.evaluate(([REG, reg, src]) => {
    const r = new RegExp(src, 'i');
    const bs = [...document.querySelectorAll('button')].filter(b => { const q = b.getBoundingClientRect(); const cx = q.x + q.width / 2; return q.y > 190 && (!reg || (cx >= REG[reg][0] && cx < REG[reg][1])) && r.test(b.innerText.trim()); });
    if (!bs.length) return 'NOTFOUND'; if (bs[0].disabled) return 'DISABLED'; bs[0].click(); return 'ok';
  }, [REG, reg, re.source]);
}
const topClick = (page, re) => page.evaluate((src) => { const r = new RegExp(src, 'i'); const b = [...document.querySelectorAll('button')].find(x => r.test(x.innerText.trim())); if (!b) return 'NOTFOUND'; b.click(); return 'ok'; }, re.source);
const PATHS = {
  MAIN: [['B', /^Offer/], ['D', /^Counter/], ['B', /^Accept their/], ['L', /^Run the checks/], ['L', /^Unseal/]],
  ALT: [['B', /^Write internal/], ['B', /^Offer/], ['D', /^Write internal/], ['D', /^Accept$/], ['L', /^Run the checks/], ['L', /^Unseal/]],
  NOTE_COUNTER_TURNDOWN_REOFFER: [['B', /^Write internal/], ['B', /^Offer/], ['D', /^Write internal/], ['D', /^Counter/], ['D', /^Write internal/], ['B', /^Turn it down/], ['B', /^Offer/], ['D', /^Accept$/], ['L', /^Run the checks/], ['B', /^Write internal/]],
  DECLINE_REOFFER: [['B', /^Offer/], ['D', /^Decline/], ['B', /^Offer/], ['D', /^Counter/], ['D', /^Write internal/], ['D', /^Write internal/], ['D', /^Write internal/], ['B', /^Write internal/]],
  LEAK_EVERYWHERE: [['-', /Try to show/], ['B', /^Offer/], ['-', /Try to show/], ['D', /^Counter/], ['B', /^Accept their/], ['-', /Try to show/], ['L', /^Run the checks/], ['L', /^Unseal/], ['-', /Try to show/]]
};
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const f of ['X3Seats', 'X3SeatsClone']) {
  console.log('\n######', f);
  for (const [pn, steps] of Object.entries(PATHS)) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errs = []; page.on('pageerror', e => errs.push(e.message));
    await page.goto('http://127.0.0.1:8765/' + f + '.dc.html', { waitUntil: 'networkidle' }); await page.waitForTimeout(900);
    const log = []; let leaks = [];
    const scan = async (tag) => {
      for (const how of [false, true]) {
        if (how) { await topClick(page, /^How do we know/); await page.waitForTimeout(250); }
        const R = await regions(page);
        for (const k of ['B', 'L', 'D', 'S']) for (const re of BAN[k]) if (re.test(R[k])) leaks.push(`${tag}${how ? '/how' : ''}: ${k} shows ${re}`);
        if (how) { await topClick(page, /^How do we know/); await page.waitForTimeout(250); }
      }
    };
    await scan('start');
    for (const [reg, re] of steps) {
      const r = reg === '-' ? await topClick(page, re) : await click(page, reg, re);
      log.push(reg + ' ' + re.source.replace(/[\^$]/g, '') + '=' + r);
      await page.waitForTimeout(reg === 'L' && /Unseal|checks/.test(re.source) ? 1700 : 450);
      await scan(re.source);
    }
    // diff mode across all pairs at the end state
    await topClick(page, /^What does/); await page.waitForTimeout(300);
    const SEATS = ['BOSTON', 'LEAGUE', 'DENVER', 'PUBLIC'];
    for (const A of SEATS) for (const B of SEATS) {
      if (A === B) continue;
      await page.evaluate(([A, B]) => { const chips = [...document.querySelectorAll('button')].filter(b => b.innerText.trim() === A || b.innerText.trim() === B); const as = chips.filter(b => b.innerText.trim() === A), bs = chips.filter(b => b.innerText.trim() === B); if (as[0]) as[0].click(); }, [A, B]);
      await page.waitForTimeout(120);
      await page.evaluate(([B]) => { const bs = [...document.querySelectorAll('button')].filter(b => b.innerText.trim() === B); if (bs[1]) bs[1].click(); }, [B]);
      await page.waitForTimeout(160);
      await scan('diff ' + A + '/' + B);
    }
    const hdr = (await regions(page)).HDR.match(/AUDITOR[^¦]*¦[^¦]*¦?[^¦]*/);
    const eng = await page.evaluate(() => document.body.innerText.match(/ENGINE · [^\n]*/)?.[0]);
    console.log(pn.padEnd(30), 'steps:', log.join(' | '));
    console.log(' '.repeat(30), 'text-leaks:', leaks.length ? [...new Set(leaks)].slice(0, 6) : 'none', '|', eng, '|', hdr ? hdr[0].replace(/\s+/g, ' ').slice(0, 110) : '', errs.length ? 'ERR ' + errs[0] : '');
    await page.close();
  }
}
await browser.close();
