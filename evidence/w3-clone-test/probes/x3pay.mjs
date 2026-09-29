import { createRequire } from 'module';
const require = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/package.json');
const { chromium } = require('playwright-core');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
async function run(file, mode) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript(() => { const F = Date.now(); Date.now = () => F; });
  await page.goto('http://127.0.0.1:8765/' + file, { waitUntil: 'networkidle' }); await page.waitForTimeout(2000);
  const range = async (n, v) => { await page.locator('input[type=range]').nth(n).evaluate((el, v) => { const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(el, String(v)); el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }, v); await page.waitForTimeout(800); };
  await range(0, 0);
  if (mode === 'decline') { await page.evaluate(() => [...document.querySelectorAll('button')].find((b) => /^Don.t call up/.test(b.innerText.trim())).click()); await page.waitForTimeout(800); }
  await range(0, 4);
  const t = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' '));
  const pays = [...t.matchAll(/(\$\d{3}\.\dM) ((?:over|under)[^$]*?\$\d+\.\d{3}M(?: under the 2nd)?)/g)].map((m) => m[1] + ' ' + m[2]);
  const cu = [...t.matchAll(/(call-up: \w+)/g)].map((m) => m[1]);
  const since = (/(Since you looked[^]*?)(?:Mark seen|LAST 3|Last 3)/i.exec(t) || [])[1];
  console.log(file.padEnd(26), mode.padEnd(8), 'YOU pane:', pays[0], '|', cu[0]);
  await page.close();
}
for (const f of ['X3Lockstep.dc.html', 'X3LockstepClone.dc.html']) for (const m of ['lapse', 'decline']) await run(f, m);
await browser.close();
