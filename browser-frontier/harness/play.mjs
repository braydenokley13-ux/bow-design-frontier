// BOW Browser Frontier — play a prototype in real Chromium, step by step, and keep the evidence.
//
// usage: node play.mjs <prototype.html> <steps.json> [--w 1440] [--h 900] [--out shots/<name>] [--png]
//   <prototype.html> is relative to browser-frontier/prototypes/.
//   The harness serves browser-frontier/ itself on a free port, so parallel runs never collide.
//
// steps.json is an array. Each step does one thing:
//   {"wait": 800}                                  pause (ms)
//   {"click": "Accessible name"}                    click a button/link by role+name (substring)
//   {"click": "Name", "exact": true, "nth": 1}
//   {"clickText": "visible text"}                   click the first element with that text
//   {"css": "selector", "nth": 0}                   click by CSS selector
//   {"at": [x, y]}                                  click at page coordinates (for canvas / 3D)
//   {"drag": [x1, y1, x2, y2], "steps": 12}         mouse drag (canvas orbit, sliders)
//   {"press": "Enter"} / {"press": "Tab"}           keyboard
//   {"type": ["selector", "text"]}                  type into an input (keystrokes)
//   {"fill": ["selector", "text"]}                  set an input's value
//   {"range": ["selector", 42]}                     set a range input and fire input/change
//   {"hover": "selector"}
//   {"viewport": [1280, 800]}                        resize
//   {"expectText": "text"}                          record whether the page shows this text
//   {"shot": "name"}                                screenshot (jpeg q82 by default)
//   {"shot": "name", "full": true}                  full-page screenshot
//   {"open2": "Other.html#addr"}                    open a SECOND client (same browser context: shares
//                                                  BroadcastChannel / localStorage) and make it current
//   {"use": 0} / {"use": 1}                         switch which client the next steps act on
//   {"reload": true}                                reload the current client (tests address-in-URL)
// Every click-like step waits `after` ms (default 700) for transitions.
//
// Output: <out>/NN-name.jpg and <out>/report.json (console errors, page errors, failed requests,
// failed steps, expectations, horizontal overflow, unlabeled controls, clickable non-buttons).
import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const args = process.argv.slice(2);
const file = args[0];
const stepsFile = args[1];
const opt = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const W = Number(opt('w', 1440)), H = Number(opt('h', 900));
const png = args.includes('--png');
const out = path.resolve(here, opt('out', 'shots/' + path.basename(file, '.html')));
if (!file || !stepsFile) { console.error('usage: node play.mjs <prototype.html> <steps.json> [--w] [--h] [--out] [--png]'); process.exit(2); }
const steps = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), stepsFile), 'utf8'));
fs.mkdirSync(out, { recursive: true });

const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.glb': 'model/gltf-binary', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (u === '/favicon.ico') { res.writeHead(204); res.end(); return; }
  const p = path.join(root, u);
  if (!p.startsWith(root) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port;

const exe = fs.existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome') ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : undefined;
const browser = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const pages = [await ctx.newPage()];
let page = pages[0];
const report = { file, viewport: [W, H], console: [], pageErrors: [], failedRequests: [], failedSteps: [], expectations: [], shots: [] };
const watch = (pg, tag) => {
pg.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') report.console.push(m.type() + ': ' + m.text().slice(0, 300)); });
pg.on('pageerror', e => report.pageErrors.push(e.message.slice(0, 400)));
pg.on('requestfailed', r => report.failedRequests.push(r.url().slice(0, 200) + ' ' + (r.failure() || {}).errorText));
};
watch(page);

const t0 = Date.now();
await page.goto(`http://127.0.0.1:${port}/prototypes/${file}`, { waitUntil: 'networkidle', timeout: 45000 }).catch(e => report.failedSteps.push('goto: ' + e.message.split('\n')[0]));
report.loadMs = Date.now() - t0;
let n = 0;
for (const s of steps) {
  const after = s.after ?? 700;
  try {
    if (s.wait) await page.waitForTimeout(s.wait);
    if (s.open2) { const p2 = await ctx.newPage(); watch(p2); await p2.goto(`http://127.0.0.1:${port}/prototypes/${s.open2}`, { waitUntil: 'networkidle', timeout: 45000 }); pages.push(p2); page = p2; await page.waitForTimeout(s.after ?? 700); }
    if (s.use !== undefined) { page = pages[s.use]; await page.bringToFront(); await page.waitForTimeout(300); }
    if (s.reload) { await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(s.after ?? 900); }
    if (s.viewport) { await page.setViewportSize({ width: s.viewport[0], height: s.viewport[1] }); await page.waitForTimeout(400); }
    if (s.click) { await page.getByRole(s.role || 'button', { name: s.click, exact: !!s.exact }).nth(s.nth || 0).click({ timeout: 4000, force: !!s.force }); await page.waitForTimeout(after); }
    if (s.clickText) { await page.getByText(s.clickText, { exact: !!s.exact }).nth(s.nth || 0).click({ timeout: 4000, force: !!s.force }); await page.waitForTimeout(after); }
    if (s.css) { await page.locator(s.css).nth(s.nth || 0).click({ timeout: 4000, force: !!s.force }); await page.waitForTimeout(after); }
    if (s.at) { await page.mouse.click(s.at[0], s.at[1]); await page.waitForTimeout(after); }
    if (s.drag) { const [a, b, c, d] = s.drag; await page.mouse.move(a, b); await page.mouse.down(); await page.mouse.move(c, d, { steps: s.steps || 12 }); await page.mouse.up(); await page.waitForTimeout(after); }
    if (s.press) { await page.keyboard.press(s.press); await page.waitForTimeout(s.after ?? 300); }
    if (s.type) { await page.locator(s.type[0]).first().click(); await page.keyboard.type(s.type[1], { delay: 20 }); await page.waitForTimeout(after); }
    if (s.fill) { await page.locator(s.fill[0]).first().fill(String(s.fill[1])); await page.waitForTimeout(after); }
    if (s.range) { await page.locator(s.range[0]).first().evaluate((el, v) => { const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(el, String(v)); el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }, s.range[1]); await page.waitForTimeout(after); }
    if (s.hover) { await page.locator(s.hover).first().hover(); await page.waitForTimeout(after); }
    if (s.expectText) { const ok = await page.getByText(s.expectText, { exact: false }).first().isVisible().catch(() => false); report.expectations.push({ text: s.expectText, ok }); }
    if (s.shot) {
      n += 1;
      const name = String(n).padStart(2, '0') + '-' + s.shot + (png ? '.png' : '.jpg');
      await page.screenshot({ path: path.join(out, name), fullPage: !!s.full, ...(png ? {} : { type: 'jpeg', quality: 82 }) });
      report.shots.push(name);
    }
  } catch (e) { report.failedSteps.push(JSON.stringify(s) + ' → ' + e.message.split('\n')[0]); }
}
report.checks = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const overflowX = document.documentElement.scrollWidth > vw + 1;
  const unlabeled = [...document.querySelectorAll('button, [role="button"], a[href], input, select, textarea')].filter(el => {
    const name = (el.getAttribute('aria-label') || el.getAttribute('title') || el.innerText || el.value || '').trim();
    const labelled = el.id && document.querySelector(`label[for="${el.id}"]`);
    return !name && !labelled && !el.getAttribute('aria-labelledby');
  }).length;
  const clickableNonButtons = [...document.querySelectorAll('div[onclick], span[onclick], li[onclick], td[onclick]')].length;
  const buttons = [...document.querySelectorAll('button')].map(b => b.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 80);
  return { overflowX, unlabeled, clickableNonButtons, buttonCount: buttons.length, buttons, textLength: document.body.innerText.length };
}).catch(e => ({ error: e.message }));
report.totalMs = Date.now() - t0;
fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
await browser.close();
server.close();
const bad = report.pageErrors.length + report.failedSteps.length + report.console.filter(c => c.startsWith('error')).length;
console.log(`${file}: ${report.shots.length} shots → ${path.relative(process.cwd(), out)} · pageErrors ${report.pageErrors.length} · consoleErrors ${report.console.filter(c => c.startsWith('error')).length} · failedSteps ${report.failedSteps.length} · failedRequests ${report.failedRequests.length} · overflowX ${report.checks.overflowX} · unlabeled ${report.checks.unlabeled}`);
if (report.failedSteps.length) console.log('  failed steps:\n   ' + report.failedSteps.join('\n   '));
if (report.pageErrors.length) console.log('  page errors:\n   ' + report.pageErrors.join('\n   '));
const expFail = report.expectations.filter(x => !x.ok);
if (expFail.length) console.log('  missing text: ' + expFail.map(x => JSON.stringify(x.text)).join(', '));
process.exit(bad ? 1 : 0);
