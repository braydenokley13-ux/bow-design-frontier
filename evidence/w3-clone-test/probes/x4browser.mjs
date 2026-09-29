// X4: read the displayed chain, recompute every seal in Node, tamper, fork, verify — original and clone.
import { createRequire } from 'module';
import crypto from 'crypto';
const require = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/package.json');
const { chromium } = require('playwright-core');
const sha = (s) => crypto.createHash('sha256').update(s, 'utf8').digest('hex');
const canon = (x) => (x === null || typeof x !== 'object') ? JSON.stringify(x) : Array.isArray(x) ? '[' + x.map(canon).join(',') + ']' : '{' + Object.keys(x).sort().map((k) => JSON.stringify(k) + ':' + canon(x[k])).join(',') + '}';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const FILES = [['X3Proof.dc.html', '.sealbtn'], ['X3ProofClone.dc.html', '.rowbtn']];

for (const [file, selSel] of FILES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  await page.goto('http://127.0.0.1:8765/' + file, { waitUntil: 'networkidle' }); await page.waitForTimeout(3500);
  const body = () => page.evaluate(() => document.body.innerText.replace(/\s+/g, ' '));
  const click = async (t, n = 0) => { const ok = await page.evaluate(([t, n]) => { const bs = [...document.querySelectorAll('button')].filter((x) => x.innerText.replace(/\s+/g, ' ').trim().startsWith(t) && (t === 'Verify' || !x.disabled)); if (bs[n]) { bs[n].click(); return true; } return false; }, [t, n]); await page.waitForTimeout(700); return ok; };
  const readChain = async () => {
    const out = [];
    for (let i = 0; i < 8; i++) {
      await page.evaluate(([s, i]) => document.querySelectorAll(s)[i].click(), [selSel, i]); await page.waitForTimeout(250);
      const t = await body();
      const m = /ENTRY (\d\d) · FULL SEAL ([0-9a-f]{64}) = SHA-256\( PREVIOUS SEAL ([0-9a-f]{64}) \+ JSON \) JSON, KEYS SORTED (\{.*?"v":"\[verify\]"\})/.exec(t);
      out.push(m ? { n: m[1], seal: m[2], prev: m[3], json: m[4] } : { err: t.slice(0, 200) });
    }
    return out;
  };
  const check = (ch) => { const g = sha('bow:celtics:reality'); let ok = 0; const notes = []; ch.forEach((e, i) => { const prevOk = e.prev === (i ? ch[i - 1].seal : g); const sealOk = sha(e.prev + e.json) === e.seal; const jsonOk = canon(JSON.parse(e.json)) === e.json; if (prevOk && sealOk && jsonOk) ok++; else notes.push(i + 1 + ':' + [prevOk, sealOk, jsonOk]); }); return ok + '/8 seals recomputed in Node' + (notes.length ? ' FAIL ' + notes.join(' ') : ''); };
  const verdict = async () => { const t = await body(); const m = /((?:VALID|RECORD MISMATCH|BRANCH ALTERED AFTER SHARING|CANNOT READ THIS ADDRESS) · (?:guest-[abc]|your branch|you)) (.{0,170})/.exec(t); return m ? m[1] + ' — ' + m[2] : 'none'; };
  const status = async () => { const t = await body(); const m = /(ALTERED \(demo\).*?broken|Restored · [^.]*\.|The record is intact[^.]*\.)/.exec(t); return m ? m[1] : 'none'; };
  const forkV = async () => { const t = await body(); const m = /(the record still seals to [0-9a-f]{8}.*?head [0-9a-f]{8}|parent no longer matches.*?\))/.exec(t); return m ? m[1] : 'none'; };
  const addrs = async () => [...(await body()).matchAll(/bow:\/\/celtics@\S+/g)].map((m) => m[0]);

  console.log('\n=====', file);
  const t0 = await body(); console.log('engine:', (/ENGINE · [^S]*?passing/.exec(t0) || ['?'])[0], '| head:', (/RECORD HEAD · ([0-9a-f]{8})/.exec(t0) || [])[1]);
  const base = await readChain();
  console.log('seals8:', base.map((e) => e.seal && e.seal.slice(0, 8)).join(' '), '|', check(base));
  console.log('received addresses:', (await addrs()).join('  '));
  for (const k of [1, 2, 3]) { await click('Verify', k); console.log('  verify intact record ->', await verdict()); }

  // Tamper Game 4 -> 5
  await click('Game 4→5'); await click('Alter the record'); await page.waitForTimeout(2500);
  const tam = await readChain();
  console.log('TAMPER entry 4 status:', await status());
  console.log('  seals8:', tam.map((e) => e.seal.slice(0, 8)).join(' '), '|', check(tam));
  console.log('  unchanged entries:', tam.map((e, i) => (e.seal === base[i].seal ? i + 1 : null)).filter(Boolean).join(','), '| changed:', tam.map((e, i) => (e.seal !== base[i].seal ? i + 1 : null)).filter(Boolean).join(','));
  console.log('  tampered JSON 4:', tam[3].json);
  for (const k of [1, 2, 3]) { await click('Verify', k); console.log('  verify on Game-5 record ->', await verdict()); }
  await click('Restore the record'); await page.waitForTimeout(2500);
  const rest = await readChain();
  console.log('RESTORE status:', await status(), '| all 8 equal original:', rest.every((e, i) => e.seal === base[i].seal));

  // Fork at entry 4, share, recompute head
  await click('Fork here', 3); await click('Tatum stays healthy in Game 4'); await click('Cut the branch'); await page.waitForTimeout(1200);
  await click('Share'); await page.waitForTimeout(600);
  const own = (await addrs()).find((a) => a.includes('/branch:you-')) || 'none';
  const m = /#([0-9a-f]{8})\/branch:(.*?)\?head=([0-9a-f]{8})/.exec(own);
  const parent = base[3].seal, text = 'Tatum stays healthy in Game 4';
  const headO = sha(parent + canon({ at: '2025-05-12', by: 'you', kind: 'assumption', t: text })).slice(0, 8);
  const headC = sha(parent + JSON.stringify({ a: text, by: 'you' }, ['a', 'by'])).slice(0, 8);
  console.log('FORK address:', own, '\n  parent8 == Node seal4:', m && m[1] === parent.slice(0, 8), '| head8', m && m[3], 'vs Node(original scheme)', headO, 'vs Node(clone scheme)', headC);
  console.log('  fork verdict intact:', await forkV());
  await click('Verify', 0); console.log('  verify own ->', await verdict());
  await click('2031→2030'); await click('Alter the record'); await page.waitForTimeout(2500);
  console.log('  tamper entry 6 (after cut):', await status(), '| fork:', await forkV());
  await click('Restore the record'); await page.waitForTimeout(2500);
  await click('No. 3→2'); await click('Alter the record'); await page.waitForTimeout(2500);
  console.log('  tamper entry 3 (before cut):', await status(), '| fork:', await forkV());
  await click('Verify', 0); console.log('  verify own ->', await verdict());
  await click('Restore the record'); await page.waitForTimeout(2500);
  console.log('  after restore fork:', await forkV(), '| status:', await status());
  // Type-your-own tamper: same text but trailing space (invisible edit)
  await page.evaluate(([s]) => { const bs = [...document.querySelectorAll('button')].filter((b) => b.innerText.trim() === 'Alter'); bs[7].click(); }, [selSel]); await page.waitForTimeout(400);
  const inp = page.locator('input[placeholder="press Alter on an entry, or pick a preset"]');
  await inp.fill('Tatum returns vs Dallas. '); await page.waitForTimeout(400); const altered = await click('Alter the record'); await page.waitForTimeout(2500);
  console.log('INVISIBLE EDIT (trailing space, entry 8): applied', altered, '| status:', await status());
  console.log('errors:', errs.slice(0, 3));
  await page.close();
}
await browser.close();
