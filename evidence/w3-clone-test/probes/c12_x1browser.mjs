import { createRequire } from 'module'; const { chromium } = createRequire('/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/x.js')('playwright-core');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const txt = (page) => page.evaluate(() => document.body.innerText.replace(/\s+/g, ' '));
const clickBtn = (page, re) => page.evaluate((src) => { const r = new RegExp(src); const b = [...document.querySelectorAll('button')].find(x => r.test(x.innerText.replace(/\s+/g, ' ').trim())); if (b) { b.click(); return b.innerText.replace(/\s+/g,' ').trim().slice(0,90); } return null; }, re.source);
for (const f of ['X3Engine', 'X3EngineClone']) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('http://127.0.0.1:8765/' + f + '.dc.html', { waitUntil: 'networkidle' }); await page.waitForTimeout(1500);
  let t = await txt(page);
  console.log('\n==', f, 'engine:', (t.match(/ENGINE · [^C]*checks passing|ENGINE · [0-9/]+ · FAILING[^…]*/) || [''])[0]);
  console.log('calc:', (t.match(/Payroll.{0,500}Legal moves now[^0-9]*[0-9]+ of [0-9]+/) || [''])[0].slice(0, 520));
  // search owner target
  console.log('click search:', await clickBtn(page, /^Search/)); await page.waitForTimeout(800);
  t = await txt(page); console.log('owner:', (t.match(/searched [0-9,]+ combinations · [0-9,]+ legal · [0-9,]+ meet the target.{0,160}/) || ['NONE'])[0]);
  // mle
  console.log('pick mle:', await clickBtn(page, /taxpayer MLE at the deadline/)); await page.waitForTimeout(400);
  console.log('click search:', await clickBtn(page, /^Search/)); await page.waitForTimeout(800);
  t = await txt(page); console.log('mle:', (t.match(/searched [0-9,]+ combinations · [0-9,]+ legal · [0-9,]+ meet the target/) || ['NONE'])[0]);
  // back to owner, search, apply a door "Trade Guard B to Team R1"
  await clickBtn(page, /^Owner’s note: under/); await page.waitForTimeout(300); await clickBtn(page, /^Search/); await page.waitForTimeout(800);
  // open bench group
  await clickBtn(page, /^▸ ?A bench player leaves/); await page.waitForTimeout(400);
  const doors = await page.evaluate(() => [...document.querySelectorAll('button')].map(b => b.innerText.replace(/\s+/g, ' ').trim()).filter(s => /^(Trade|Swap|Waive|Decline)/.test(s)));
  console.log('visible doors:', doors);
  const hit = await clickBtn(page, /^Trade Guard B to Team R1 for a 2nd/); console.log('applied:', hit); await page.waitForTimeout(900);
  t = await txt(page);
  console.log('branch calc:', (t.match(/Payroll.{0,520}Legal moves now[^0-9]*[0-9]+ of [0-9]+/) || [''])[0].slice(0, 560));
  // click Tools left value
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find(x => /of 5$/.test(x.innerText.trim())); b && b.click(); }); await page.waitForTimeout(600);
  t = await txt(page); const i = t.indexOf('WHY'); console.log('WHY tools:', t.slice(i, i + 700));
  console.log('errors:', errs.slice(0, 3));
  await page.close();
}
await browser.close();
