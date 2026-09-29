import { chromium } from '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/node_modules/playwright-core/index.mjs';
const SH = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/live/shots/';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
let pass = 0, fail = 0;
const check = (name, ok, extra) => { if (ok) pass++; else fail++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (ok ? '' : '  :: ' + (extra === undefined ? '' : extra))); };
async function open(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: opts.w || 1440, height: 900 }, colorScheme: opts.dark ? 'dark' : 'light' });
  const page = await ctx.newPage(); const errs = [];
  page.on('console', (m) => { if ((m.type() === 'error' || m.type() === 'warning') && !/Failed to load resource/.test(m.text())) errs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => errs.push('pageerror: ' + e.message + (e.stack ? e.stack.split('\n').slice(0, 3).join(' | ') : '')));
  if (opts.stub) await page.addInitScript((o) => {
    window.claude = { use: async (n) => { const W = window.__world; if (!window.__h) { window.__h = W.makeHub(); if (o.preseed) await window.__h.dbFor('local-1').doc('data/users/local-1/private').set({ lastSeen: new Date(Date.now() - 1800000).toISOString(), boards: { 'boston-gm': 'from a past visit' } }); } const H = window.__h;
      if (n === 'db' && o.db !== false) return H.dbFor('local-1'); if (n === 'room' && o.room !== false) return H.roomFor('p1'); if (n === 'user' && o.user !== false) return H.userFor('local-1'); return null; } };
  }, opts.stub);
  await page.goto('http://127.0.0.1:8765/live-world.html', { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  return { page, errs, ctx };
}
const T = (page, sel) => page.locator(sel).first().innerText();
const clickIn = async (page, scope, name, wait = 500) => { const b = page.locator(scope + ' button', { hasText: name }).first(); await b.waitFor({ timeout: 4000 }); await b.click(); await page.waitForTimeout(wait); };

// ---- A. race, forged acts, skew, hash stability
{
  const { page, errs } = await open();
  await clickIn(page, '#gate', 'Start this World', 900);
  const hs = []; for (let i = 0; i < 3; i++) { hs.push(await page.evaluate(() => window.__world.APP.primary.hash12)); await page.waitForTimeout(1100); }
  check('state hash is stable between seconds (changes only with state)', new Set(hs).size <= 2 && hs[0] === hs[1] || hs[1] === hs[2], hs.join(','));
  const r = await page.evaluate(async () => { const A = window.__world.APP; const res = await Promise.all([A.primary.claimSeat('boston-gm'), A.sim.claimSeat('boston-gm')]); return res; });
  await page.waitForTimeout(900);
  check('simultaneous claim: exactly one wins, other told why', (r[0] === '') !== (r[1] === '') && /claiming this seat right now|already taken/.test(r.join('')), JSON.stringify(r));
  const rec = await page.evaluate(() => window.__world.APP.primary.state.record.map((x) => x.kind + ':' + x.counted + ':' + (x.rule || '')));
  check('the race left one counted claim and no refused claim in the record', rec.length === 1 && rec[0] === 'claim-seat:true:', JSON.stringify(rec));
  const who = await page.evaluate(() => { const A = window.__world.APP; return A.primary.state.seats['boston-gm'].holder; });
  const winner = r[0] === '' ? 'primary' : 'sim';
  // forged acts bypassing the UI
  await page.evaluate(async () => { const A = window.__world.APP; const loser = A.primary.state.seats['boston-gm'].holder === 'local-1' ? A.sim : A.primary;
    await loser.act('claim-seat', 'boston-gm', {}); await loser.act('offer', 'boston-gm', { give: ['guard-b'], get: { picks: ['2029 2nd'] } }); await loser.act('accept', 'denver-gm', {}); });
  await page.waitForTimeout(900);
  const rec2 = await page.evaluate(() => window.__world.APP.primary.state.record.map((x) => x.kind + ':' + x.counted + ':' + (x.rule || '')));
  check('forged acts stay on the record, marked not counted with a rule', rec2.length === 4 && rec2[1] === 'claim-seat:false:S-2' && rec2[2] === 'offer:false:S-1' && rec2[3] === 'accept:false:S-1', JSON.stringify(rec2));
  const rt = await T(page, '#record');
  check('record shows “not counted · rule”', /not counted · rule S-2/.test(rt) && /not counted · rule S-1/.test(rt), rt.slice(0, 400));
  await page.screenshot({ path: SH + 'A-forged.png', fullPage: true });
  // seats docs + act docs shape
  const docs = await page.evaluate(async () => { const A = window.__world.APP; const s = await A.primary.db.doc('seats/boston-gm').get(); const q = await A.primary.db.collection('acts').get(); return { seat: s.data(), fields: Object.keys(q.docs[0].data()).sort().join(','), n: q.size }; });
  check('seats/<id> is {holder,since,note}; acts/<autoId> is {by,kind,payload,prev,seat,t}', Object.keys(docs.seat).sort().join() === 'holder,note,since' && docs.fields === 'by,kind,payload,prev,seat,t' && docs.n === 4, JSON.stringify(docs));
  // show full hash
  await clickIn(page, '#agree', 'Show full hash', 400);
  check('full 64-hex hash on request', /[0-9a-f]{64}/.test(await T(page, '#agree')));
  // skew: person 2 clock 20 s ahead
  await page.evaluate(() => { const A = window.__world.APP; A.sim.skewMs = 20000; A.sim.bump(); });
  await page.waitForTimeout(1500);
  const ag = await T(page, '#agree');
  check('20 s of clock skew: agreement compares at the peer’s own tick', /all 2 see the same World|2 people/.test(ag), ag);
  const ag2 = await page.evaluate(() => { const A = window.__world.APP; return { p: A.primary.tick, s: A.sim.tick }; });
  check('skewed clients really are at different ticks', ag2.s - ag2.p >= 19, JSON.stringify(ag2));
  // a note from the skewed client is stamped 20 s ahead: invisible to the primary until the allowance covers it
  await page.evaluate(async () => { const A = window.__world.APP; await A.sim.act('note-public', A.sim.mySeat() || 'observer', { text: 'from the future' }); });
  await page.waitForTimeout(1200);
  const nA = await page.evaluate(() => ({ p: window.__world.APP.primary.state.record.length, s: window.__world.APP.sim.state.record.length }));
  const agNow = await T(page, '#agree');
  check('skewed act: a peer 20 s ahead includes it at its own tick, so the primary still agrees at that tick', nA.s === nA.p + 1 && /all 2 see the same World/.test(agNow), JSON.stringify(nA) + ' ' + agNow);
  await page.screenshot({ path: SH + 'A-skew.png', fullPage: false });
  await page.waitForTimeout(11000);
  const nB = await page.evaluate(() => ({ p: window.__world.APP.primary.state.record.length, s: window.__world.APP.sim.state.record.length }));
  const agB = await T(page, '#agree');
  check('after the skew allowance passes the primary catches up and agrees', nB.p === nB.s && /all 2 see the same World/.test(agB), JSON.stringify(nB) + ' ' + agB);
  // catching up: primary stops receiving acts, sim acts
  await page.evaluate(() => { const A = window.__world.APP; A.sim.skewMs = 0; A.primary.subs[1](); });
  await page.evaluate(async () => { const A = window.__world.APP; await A.sim.act('note-public', A.sim.mySeat() || 'observer', { text: 'you have not heard this yet' }); });
  await page.waitForTimeout(2500);
  const agC = await T(page, '#agree');
  check('a peer with an act I lack shows ≠ catching up (n vs n)', /catching up \(\d+ vs \d+ acts\)/.test(agC) && /1 of 2 confirmed/.test(agC), agC);
  await page.screenshot({ path: SH + 'A-catching-up.png', fullPage: false });
  // reset
  await clickIn(page, '#dev', 'Reset the local World', 900);
  check('reset returns to “not started”', /has not started/.test(await T(page, '#gate')));
  check('no page errors (A)', errs.length === 0, JSON.stringify(errs));
  await page.context().close();
}
// ---- B. "real" code path via a stub claude: db+room+user
{
  const { page, errs } = await open({ stub: {} });
  check('B: no local-mode banner, no dev panel', (await page.locator('#banner').isHidden()) && (await page.locator('#dev').isHidden()));
  await clickIn(page, '#gate', 'Start this World', 900);
  await clickIn(page, '#place', 'Take the Boston GM seat', 900);
  await clickIn(page, '#act', 'Hold — keep the guard', 300);
  await clickIn(page, '#act', 'Send it', 900);
  check('B: single-viewer agreement', /1 person here · all 1 see the same World/.test(await T(page, '#agree')), await T(page, '#agree'));
  check('B: hold recorded, deal closed', /no deal/.test(await T(page, '#record')) && /Boston held — no deal/.test(await T(page, '#now')), await T(page, '#now'));
  await page.screenshot({ path: SH + 'B-real.png', fullPage: true });
  check('B: no page errors', errs.length === 0, JSON.stringify(errs));
  await page.context().close();
}
// ---- C. room null: presence unavailable
{
  const { page, errs } = await open({ stub: { room: false } });
  await clickIn(page, '#gate', 'Start this World', 900);
  check('C: “Presence unavailable — your hash is 3f9a…”', /Presence unavailable — your hash is [0-9a-f]{4}…/.test(await T(page, '#agree')), await T(page, '#agree'));
  check('C: no page errors', errs.length === 0, JSON.stringify(errs));
  await page.context().close();
}
// ---- D. user null: observer only, no private board
{
  const { page, errs } = await open({ stub: { user: false } });
  check('D: not owner -> no Start button, told who can start', /Only the page.s owner can start it/.test(await T(page, '#gate')) && (await page.locator('#gate button').count()) === 0, await T(page, '#gate'));
  await page.evaluate(async () => { const W = window.__world; await window.__h.dbFor('local-1').doc('world/canon').set(W.makeCanon(new Date().toISOString())); });
  await page.waitForTimeout(1500);
  const pl = await T(page, '#place');
  check('D: identity unavailable -> can watch, cannot take a seat', /identity is not available/.test(pl) && (await page.locator('#place button[disabled]').count()) === 2, pl);
  check('D: private board hidden', await page.locator('#board').isHidden());
  check('D: no page errors', errs.length === 0, JSON.stringify(errs));
  await page.context().close();
}
// ---- E. db unavailable but claude present (all null) -> local mode
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } }); const page = await ctx.newPage(); const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.addInitScript(() => { window.claude = { use: async () => null }; });
  await page.goto('http://127.0.0.1:8765/live-world.html', { waitUntil: 'load' }); await page.waitForTimeout(1200);
  check('E: window.claude present but every use() null -> local mode banner', /Local mode — not connected/.test(await T(page, '#banner')));
  check('E: no page errors', errs.length === 0, JSON.stringify(errs));
  await ctx.close();
}
// ---- F. dark mode + since-you-last-looked
{
  const { page, errs } = await open({ dark: true });
  await clickIn(page, '#gate', 'Start this World', 900);
  await clickIn(page, '#place', 'Take the Boston GM seat', 900);
  await clickIn(page, '#dev', '+2 h', 1500);
  await page.screenshot({ path: SH + 'F-dark.png', fullPage: true });
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  check('F: dark theme applies (#121212)', bg === 'rgb(18, 18, 18)', bg);
  const sl = await page.evaluate(() => { const W = window.__world, A = W.APP.primary; return W.sinceLines(A.state, A.canon, Date.parse(A.canon.epoch) - 1, A.uid, (i) => i); });
  check('F: since-lines report lapses and games', sl.some((x) => /NO ACT/.test(x)) && sl.some((x) => /games? \(toy model\)/.test(x)), JSON.stringify(sl));
  check('F: no page errors', errs.length === 0, JSON.stringify(errs));
  await page.context().close();
}
// ---- G. lastSeen from the private doc; how-do-we-know open
{
  const { page, errs } = await open({ stub: { preseed: true } });
  await clickIn(page, '#gate', 'Start this World', 900);
  await clickIn(page, '#place', 'Take the Boston GM seat', 900);
  check('G: private board restored from the private doc', (await page.locator('#boardText').inputValue()) === 'from a past visit');
  check('G: heading says “Since you last looked” (lastSeen came from data/users/<id>/private)', /Since you last looked/i.test(await T(page, '#now')), (await T(page, '#now')).slice(-500));
  await clickIn(page, '#now', 'Mark as seen', 600);
  const ls = await page.evaluate(async () => { const s = await window.__h.dbFor('local-1').doc('data/users/local-1/private').get(); return s.data(); });
  check('G: Mark as seen writes lastSeen and keeps the board', ls.boards['boston-gm'] === 'from a past visit' && Date.now() - Date.parse(ls.lastSeen) < 5000, JSON.stringify(ls));
  check('G: nothing new after marking', /Nothing has happened since you last looked/.test(await T(page, '#now')));
  await page.locator('#how summary').click(); await page.waitForTimeout(300);
  const how = await T(page, '#how');
  check('G: how-do-we-know lists tests and rules', /Engine self-tests · 20\/20/.test(how) && /S-1/.test(how) && /No cryptographic signature by BOW/.test(how), how.slice(0, 300));
  await page.locator('#how').scrollIntoViewIfNeeded(); await page.screenshot({ path: SH + 'G-how.png', fullPage: true });
  check('G: no page errors', errs.length === 0, JSON.stringify(errs));
  await page.context().close();
}
console.log(`\n${pass} passed, ${fail} failed`);
await browser.close();
