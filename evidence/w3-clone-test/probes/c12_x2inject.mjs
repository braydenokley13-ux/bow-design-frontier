import fs from 'fs';
import { createRequire } from 'module'; const { chromium } = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/x.js')('playwright-core');
const SP = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/';
const O = fs.readFileSync(SP + 'canvas/project/X3Seats.dc.html', 'utf8'), C = fs.readFileSync(SP + 'clones/X3SeatsClone.dc.html', 'utf8');
const sub = (s, a, b) => { if (!s.includes(a)) throw new Error('pattern missing: ' + a.slice(0, 60)); return s.split(a).join(b); };
const CASES = [
  ['X3Seats', 'none (control)', O],
  ['X3Seats', 'render bypass: Denver board mounted in Boston room', sub(O, 'SEATS.forEach(p => { mounted[p] = lists[p].filter(f => g[p].ok.indexOf(f.id) >= 0); });', 'SEATS.forEach(p => { mounted[p] = lists[p].filter(f => g[p].ok.indexOf(f.id) >= 0); }); mounted.BOSTON = mounted.BOSTON.concat(st.facts.filter(f => f.key === "boardD"));')],
  ['X3Seats', 'rule table: INTERNAL also visible to BOSTON', sub(O, "vis: c => [c.by]}", "vis: c => uniq([c.by, 'BOSTON'])}")],
  ['X3Seats', 'laundering: unseal writes Denver ceiling into public trade fact', sub(O, "text: 'Trade done: Guard B to Denver for ' + pk(t)}", "text: 'Trade done: Guard B to Denver for ' + pk(t) + ' (Denver would have paid ' + s.facts.filter(f => f.key === 'boardD')[0].value.maxSeconds + ' 2nds; walks at a 1st)'}")],
  ['X3Seats', 'seat code reads authored constant DEN_PAY', sub(O, "return {kind: 'UNKNOWN', head: 'UNKNOWN price', detail: 'They want a guard, but no price has reached you yet.'", "return {kind: 'UNKNOWN', head: 'UNKNOWN price', detail: 'Their books say ' + M(DEN_PAY) + '; they walk at a 1st.'")],
  ['X3SeatsClone', 'none (control)', C],
  ['X3SeatsClone', 'render bypass: Denver board mounted in Boston room', sub(C, "const mine = roomFacts.filter((f) => f.vis.indexOf(d.key.charAt(0)) >= 0);", "const mine = roomFacts.filter((f) => f.vis.indexOf(d.key.charAt(0)) >= 0 || (d.key === 'boston' && f.id === 'F10'));")],
  ['X3SeatsClone', 'rule table: F10 Denver board visible to b', sub(C, "{ id: 'F10', kind: 'aut', pub: false, vis: 'd',", "{ id: 'F10', kind: 'aut', pub: false, vis: 'bd',")],
  ['X3SeatsClone', 'read text leaks Denver ceiling', sub(C, "body: 'They want a guard, but no price has reached you yet.'", "body: 'They walk at a 1st and will pay two 2nds.'")],
];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const [file, name, body] of CASES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.route('**/' + file + '.dc.html', (r) => r.fulfill({ status: 200, contentType: 'text/html', body }));
  await page.goto('http://127.0.0.1:8765/' + file + '.dc.html', { waitUntil: 'networkidle' }); await page.waitForTimeout(900);
  // drive the main path to the end so unseal-time injections fire
  const click = (x0, x1, src) => page.evaluate(([x0, x1, src]) => { const r = new RegExp(src); const b = [...document.querySelectorAll('button')].find(b => { const q = b.getBoundingClientRect(), cx = q.x + q.width / 2; return q.y > 190 && cx >= x0 && cx < x1 && r.test(b.innerText.trim()) && !b.disabled; }); if (b) { b.click(); return 1; } return 0; }, [x0, x1, src]);
  const boston0 = await page.evaluate(() => { let t = ''; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) { const r = n.parentElement.getBoundingClientRect(); if (r.y > 196 && r.y < 842 && r.x < 485 && n.textContent.trim()) t += n.textContent.trim() + ' '; } return t; });
  for (const [x0, x1, re] of [[30, 485, '^Offer'], [950, 1410, '^Counter'], [30, 485, '^Accept their'], [495, 950, '^Run the checks'], [495, 950, '^Unseal']]) { await click(x0, x1, re); await page.waitForTimeout(re.includes('checks') ? 1700 : 400); }
  const R = await page.evaluate(() => { const T = document.body.innerText.replace(/\s+/g, ' '); let strip = ''; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) { const r = n.parentElement.getBoundingClientRect(); if (r.y > 96 && r.y < 196 && n.textContent.trim()) strip += n.textContent.trim() + ' '; } return { eng: (T.match(/ENGINE · \S+( checks)? \w+/) || [''])[0], aud: (T.match(/AUDITOR · renders checked \S+ · leaks \S+/) || [''])[0], strip }; });
  const showsB = /Internal board|walk(s)? (away )?at a 1st|195\.4/.test(boston0), showsS = /walks at a 1st/.test(R.strip);
  console.log(file.padEnd(13), name.padEnd(62), '|', R.eng.padEnd(30), '|', R.aud.padEnd(42), '| private shown: Boston room ' + showsB + ', public strip ' + showsS);
  await page.close();
}
await browser.close();
