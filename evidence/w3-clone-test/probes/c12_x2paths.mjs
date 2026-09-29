import { createRequire } from 'module'; const { chromium } = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/x.js')('playwright-core');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const region = (page, x0, x1) => page.evaluate(([x0, x1]) => { let t = ''; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) { const r = n.parentElement.getBoundingClientRect(); const cx = r.x + 5; if (r.y > 196 && r.y < 842 && cx >= x0 && cx < x1 && n.textContent.trim()) t += n.textContent.trim() + ' '; } return t.replace(/\s+/g, ' '); }, [x0, x1]);
for (const f of ['X3Seats', 'X3SeatsClone']) {
  for (const [nm, steps, x0, x1, re] of [
    ['after Boston turns down the counter, Denver read', [[30, 485, '^Offer'], [950, 1410, '^Counter'], [30, 485, '^Turn it down']], 950, 1410, /(UNKNOWN|Floor)[^.]{0,40}/],
    ['after checks, Boston room has a verdict?', [[30, 485, '^Offer'], [950, 1410, '^Counter'], [30, 485, '^Accept their'], [495, 950, '^Run the checks']], 30, 485, /League verdict[^.]{0,30}|$/],
    ['after Denver accepts directly, Boston read', [[30, 485, '^Offer'], [950, 1410, '^Accept$']], 30, 485, /YOUR READ OF THE OTHER SIDE[^¦]{0,120}/]]) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://127.0.0.1:8765/' + f + '.dc.html', { waitUntil: 'networkidle' }); await page.waitForTimeout(800);
    for (const [a, b, s] of steps) { await page.evaluate(([x0, x1, src]) => { const r = new RegExp(src); const b = [...document.querySelectorAll('button')].find(b => { const q = b.getBoundingClientRect(), cx = q.x + q.width / 2; return q.y > 190 && cx >= x0 && cx < x1 && r.test(b.innerText.trim()) && !b.disabled; }); b && b.click(); }, [a, b, s]); await page.waitForTimeout(250); }
    const t = await region(page, x0, x1);
    console.log(f.padEnd(13), nm.padEnd(52), '→', (t.match(re) || ['(none)'])[0].slice(0, 130) || '(no verdict)');
    await page.close();
  }
}
await browser.close();
