// Drive X3 original and clone in two fresh browser contexts each; read hashes from the DOM.
import { createRequire } from 'module';
const require = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/package.json');
const { chromium } = require('playwright-core');
const FILES = process.argv.slice(2).length ? process.argv.slice(2) : ['X3Lockstep.dc.html', 'X3LockstepClone.dc.html'];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });

async function open(file, freeze) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  if (freeze) await page.addInitScript(() => { const F = Date.now(); Date.now = () => F; });
  const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  await page.goto('http://127.0.0.1:8765/' + file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  return { ctx, page, errs };
}
const read = (page) => page.evaluate(() => {
  const hexes = [];
  document.querySelectorAll('*').forEach((el) => {
    const kids = [...el.children].filter((k) => k.classList.contains('fl'));
    if (kids.length === 8 && kids.length === el.children.length && kids.every((k) => /^[0-9a-f]$/.test(k.textContent.trim()))) {
      const r = el.getBoundingClientRect(); hexes.push({ x: Math.round(r.left), y: Math.round(r.top), h: kids.map((k) => k.textContent.trim()).join('') });
    }
  });
  const byX = (a, b) => a.x - b.x || a.y - b.y; hexes.sort(byX);
  const txt = document.body.innerText.replace(/\s+/g, ' ');
  const sections = [...document.querySelectorAll('section, div')].filter((s) => { const r = s.getBoundingClientRect(); return r.width > 540 && r.width < 600 && r.height > 600; });
  const paneTxt = sections.map((s) => ({ x: Math.round(s.getBoundingClientRect().left), t: s.innerText.replace(/\s+/g, ' ') })).sort((a, b) => a.x - b.x);
  const pick = (t, re) => { const m = re.exec(t); return m ? m[1] : null; };
  const panes = paneTxt.map((p) => ({ x: p.x, date: pick(p.t, /(Week \d+ · \w+ \d+ \w+ · World day \d+)/), wl: pick(p.t, /W–L (\d+–\d+)/), pay: pick(p.t, /(\$\d+\.\dM [^$]*?)(?:\d+ of|Roster|ROSTER)/), notYet: /not yet, this pane is earlier/.test(p.t) }));
  const verdict = pick(txt, /((?:At World time )[^.]*?(?:✓ [0-9a-f]{8}|different Worlds?[^.]*))/);
  const engine = pick(txt, /(ENGINE · [^A-Z]*?(?:passing|FAILING[^·]*))/);
  return { hashes: hexes.map((h) => h.x + ':' + h.h).join(' '), panes, verdict, engine };
});
async function range(page, n, v) {
  await page.locator('input[type=range]').nth(n).evaluate((el, v) => { const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(el, String(v)); el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }, v);
  await page.waitForTimeout(900);
}
async function btn(page, t) {
  const ok = await page.evaluate((t) => { const b = [...document.querySelectorAll('button')].find((x) => x.innerText.replace(/\s+/g, ' ').trim().startsWith(t) && !x.disabled); if (b) { b.click(); return true; } return false; }, t);
  await page.waitForTimeout(900); return ok;
}
async function scenario(file, freeze) {
  const { ctx, page, errs } = await open(file, freeze);
  const R = {};
  if (!freeze) await btn(page, 'Live clock');
  R.s0_load = await read(page);
  await range(page, 1, 1); R.s1_friend1_noAct = await read(page);
  await range(page, 0, 2); R.callUp = await btn(page, 'Call up'); R.s2_you2_actDone_friend1 = await read(page);
  await range(page, 0, 5); await range(page, 1, 3); R.s3_you5_friend3 = await read(page);
  R.brk = await btn(page, 'Break it'); R.s4_broken = await read(page);
  await ctx.close(); R.errs = errs; return R;
}
for (const f of FILES) {
  const A = await scenario(f, true), B = await scenario(f, true);
  console.log('\n=====', f, '(Date.now frozen at load; two independent contexts)');
  for (const k of Object.keys(A)) {
    const same = JSON.stringify(A[k]) === JSON.stringify(B[k]);
    console.log(k, same ? '[load1 == load2]' : '[LOADS DIFFER]', JSON.stringify(A[k]));
    if (!same) console.log('   load2:', JSON.stringify(B[k]));
  }
}
// Unfrozen: two loads 6 s apart — what World time does each open at? (wall clock now: 29 Sep 2026, UTC)
for (const f of FILES) {
  const a = await open(f, false); const ra = await read(a.page); await a.page.waitForTimeout(6000);
  const b = await open(f, false); const rb = await read(b.page);
  console.log('\n', f, 'UNFROZEN wall', new Date().toISOString(), '\n  load A you:', ra.panes[0] && ra.panes[0].date, ra.hashes, '\n  load B you:', rb.panes[0] && rb.panes[0].date, rb.hashes);
  await a.ctx.close(); await b.ctx.close();
}
await browser.close();
