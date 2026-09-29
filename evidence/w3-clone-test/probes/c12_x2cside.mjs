import { createRequire } from 'module'; const { chromium } = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/x.js')('playwright-core');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const pre of [[], [[950, 1410, '^Write internal']]]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:8765/X3SeatsClone.dc.html', { waitUntil: 'networkidle' }); await page.waitForTimeout(800);
  const click = (x0, x1, src) => page.evaluate(([x0, x1, src]) => { const r = new RegExp(src); const b = [...document.querySelectorAll('button')].find(b => { const q = b.getBoundingClientRect(), cx = q.x + q.width / 2; return q.y > 190 && cx >= x0 && cx < x1 && r.test(b.innerText.trim()) && !b.disabled; }); if (b) { b.click(); return 1; } return 0; }, [x0, x1, src]);
  for (const s of pre.concat([[30, 485, '^Write internal']])) { await click(...s); await page.waitForTimeout(400); }
  const ids = await page.evaluate(() => { const o = []; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) { const t = n.textContent.trim(); const r = n.parentElement.getBoundingClientRect(); if (/^F\d+$/.test(t) && r.x < 485 && r.y > 196) o.push(t + '@y' + Math.round(r.y)); } return o; });
  console.log(pre.length ? 'Denver noted first:' : 'no Denver note:   ', 'Boston room ids', ids.join(' '));
  await page.close();
}
await browser.close();
