// usage: node render.mjs <File.dc.html> <height> [steps.json]
// steps: [{"click":"text"}, {"wait":ms}, {"shot":"name"}, {"fill":["css","value"]}]
import { chromium } from 'playwright-core';
import fs from 'fs';
const [,, file, h = '900', stepsFile] = process.argv;
const steps = stepsFile ? JSON.parse(fs.readFileSync(stepsFile, 'utf8')) : [{ wait: 1800 }, { shot: 'initial' }];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: Number(h) } });
const errs = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ': ' + m.text().slice(0, 300)); });
page.on('pageerror', e => errs.push('pageerror: ' + e.message.slice(0, 300)));
await page.goto('http://127.0.0.1:8765/' + file, { waitUntil: 'networkidle' }).catch(e => errs.push('goto: ' + e.message));
const base = file.replace('.dc.html', '');
fs.mkdirSync('shots', { recursive: true });
for (const s of steps) {
  try {
    if (s.wait) await page.waitForTimeout(s.wait);
    if (s.press) { await page.keyboard.press(s.press); await page.waitForTimeout(400); }
    if (s.range) { await page.locator(s.range[0]).first().evaluate((el, v) => { const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(el, String(v)); el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }, s.range[1]); await page.waitForTimeout(s.after || 700); }
    if (s.js) { const ok = await page.evaluate((t) => { const b = [...document.querySelectorAll('button')].find(x => x.innerText.replace(/\s+/g,' ').trim().toLowerCase().startsWith(t.toLowerCase())); if (b) { b.click(); return true; } return false; }, s.js); if (!ok) errs.push('js click not found: ' + s.js); await page.waitForTimeout(s.after || 700); }
    if (s.css) { const ok = await page.evaluate(([sel, n]) => { const el = document.querySelectorAll(sel)[n || 0]; if (el) { el.click(); return true; } return false; }, s.css); if (!ok) errs.push('css click not found: ' + s.css); await page.waitForTimeout(s.after || 700); }
    if (s.click) { await page.getByRole('button', { name: s.click, exact: s.exact || false }).nth(s.nth || 0).click({ timeout: 3000, force: !!s.force }); await page.waitForTimeout(s.after || 700); }
    if (s.clickText) { await page.getByText(s.clickText, { exact: false }).first().click({ timeout: 3000, force: !!s.force }); await page.waitForTimeout(s.after || 700); }
    if (s.fill) { await page.locator(s.fill[0]).first().fill(s.fill[1]); await page.waitForTimeout(700); }
    if (s.shot) await page.screenshot({ path: `shots/${base}-${s.shot}.png`, clip: s.clip ? { x: s.clip[0], y: s.clip[1], width: s.clip[2], height: s.clip[3] } : undefined });
  } catch (e) { errs.push('step ' + JSON.stringify(s) + ': ' + e.message.split('\n')[0]); }
}
const bodyText = await page.evaluate(() => document.body.innerText.length);
const buttons = process.env.LIST ? await page.evaluate(() => [...document.querySelectorAll('button')].map(b => b.innerText.replace(/\s+/g,' ').trim()).filter(Boolean)) : undefined;
const overflow = await page.evaluate(() => { const r = document.querySelector('body > div, #root > div, [data-dc-root] > div') ; const all=[...document.querySelectorAll('div')].filter(d=>d.style && d.style.width==='1440px'); const root = all[0]; if(!root) return 'no root'; const kids=[...root.querySelectorAll('*')]; let maxB=0; for(const k of kids){const b=k.getBoundingClientRect(); if(b.bottom>maxB) maxB=b.bottom;} return {rootH: root.getBoundingClientRect().height, contentBottom: Math.round(maxB)}; });
console.log(JSON.stringify({ file, textChars: bodyText, overflow, buttons, errors: errs.filter(e=>!e.includes('404')).slice(0, 12) }, null, 1));
await browser.close();
