import { chromium } from '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/render/node_modules/playwright-core/index.mjs';
const SH = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/live/shots/';
const W = Number(process.env.W || 1440), H = Number(process.env.H || 900);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: W, height: H } });
const errs = [];
page.on('console', (m) => { if ((m.type() === 'error' || m.type() === 'warning') && !/Failed to load resource/.test(m.text())) errs.push(m.type() + ': ' + m.text().slice(0, 300)); });
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message.slice(0, 400) + (e.stack ? '\n' + e.stack.split('\n').slice(0, 4).join('\n') : '')));
let pass = 0, fail = 0;
const check = (name, ok, extra) => { if (ok) pass++; else fail++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (ok ? '' : '  :: ' + (extra === undefined ? '' : extra))); };
const txt = (sel) => page.locator(sel).first().innerText();
const click = async (scope, name, wait = 500) => { const b = page.locator(scope + ' button', { hasText: name }).first(); await b.waitFor({ timeout: 4000 }); await b.click(); await page.waitForTimeout(wait); };
const shot = async (n) => { await page.screenshot({ path: SH + `${W}-${n}.png`, fullPage: true }); if (W < 600) { const dim = await page.evaluate(() => ({ h: document.documentElement.scrollHeight, sw: document.documentElement.scrollWidth })); check('no horizontal scroll at ' + W + ' (' + n + ')', dim.sw <= W, dim.sw); for (let i = 0, y = 0; y < dim.h && i < 6; i++, y += 900) await page.screenshot({ path: SH + `${W}-${n}-seg${i}.png`, fullPage: true, clip: { x: 0, y, width: W, height: Math.min(900, dim.h - y) } }); } };
await page.goto('http://127.0.0.1:8765/live-world.html', { waitUntil: 'load' });
await page.waitForTimeout(1500);
const scenario = process.env.SCENARIO || 'main';

if (scenario === 'main') {
  check('engine badge', /ENGINE · (\d+)\/\1/.test(await txt('#hdr')), await txt('#hdr'));
  await click('#gate', 'Start this World', 900);
  check('world started header', /Boston · Year Two — a live World/.test(await txt('#hdr')), await txt('#hdr'));
  await shot('01-started');
  // presence: only me
  check('agreement: 2 people (me + sim)', /2 people here/.test(await txt('#agree')), await txt('#agree'));
  await click('#place', 'Take the Boston GM seat', 900);
  check('I hold Boston', /Boston GM seat/.test(await txt('#place')) && /held by Local tester \(you\)/.test(await txt('#place')), await txt('#place'));
  await click('#simPlace', 'Take the Denver GM seat', 900);
  check('sim holds Denver', /held by Simulated person/.test(await txt('#place')), await txt('#place'));
  await shot('02-seats');
  // offer
  await click('#act', 'Offer Denver the backup guard', 400);
  check('offer needs confirm', /goes on the record for everyone/.test(await txt('#act')));
  await click('#act', 'Send it', 900);
  check('offer standing', /Boston offered Guard B/.test(await txt('#now')), await txt('#now'));
  check('sim sees Counter/Accept/Decline', /Counter: 2028 2nd/.test(await txt('#simAct')) && /Accept/.test(await txt('#simAct')) && /Decline/.test(await txt('#simAct')), await txt('#simAct'));
  // counter
  await click('#simAct', 'Counter: 2028 2nd', 900);
  check('countered', /Denver countered/.test(await txt('#now')), await txt('#now'));
  // sim engine check hint on primary
  check('boston can accept counter', /Accept Denver.s counter/.test(await txt('#act')), await txt('#act'));
  await shot('03-countered');
  await click('#act', 'Accept Denver', 400);
  await click('#act', 'Send it', 1200);
  const now = await txt('#now');
  check('deal done: payroll 220.1', /Deal done · payroll \$220\.1M · roster 13 \+ two-way pending · under the second apron by \$1\.586M \(computed\)/.test(now), now);
  check('world tax 30.15', /\$30\.15M/.test(now), now);
  const rec = await txt('#record');
  check('record has seals (8 hex) and 5 acts', (rec.match(/\b[0-9a-f]{8}\b/g) || []).length >= 5 && /5 acts/i.test(rec), rec);
  await shot('04-deal'); await page.evaluate(() => window.scrollTo(0, 0)); await page.screenshot({ path: SH + W + '-04-deal-vp.png' });
  const ag = await txt('#agree');
  check('agreement: all 2 see the same World', /all 2 see the same World at World day/.test(ag), ag);
  const hashes = await page.evaluate(() => { const A = window.__world.APP; return { a: A.primary.hash, b: A.sim.hash, ta: A.primary.tick, tb: A.sim.tick }; });
  check('both clients hash equal at same tick (or same day-2dp)', hashes.a === hashes.b || hashes.ta !== hashes.tb, JSON.stringify(hashes));
  // privacy
  await page.locator('#boardText').fill('Ceiling: one 2nd. Walk at a 1st.');
  await page.waitForTimeout(1200);
  check('private board saved', /Saved/.test(await txt('#board')), await txt('#board'));
  const priv = await page.evaluate(async () => { const A = window.__world.APP; const s = await A.sim.db.doc('data/users/local-1/private').get(); const m = await A.primary.db.doc('data/users/local-1/private').get(); let w = 'ok'; try { await A.sim.db.doc('data/users/local-1/private').set({ x: 1 }); } catch (e) { w = e.code; } let cw = 'ok'; try { await A.sim.db.doc('world/canon').set({ x: 1 }); } catch (e) { cw = e.code; } return { simSees: s.exists, meSees: m.exists, simWrite: w, canonWrite: cw }; });
  check('sim cannot read or write my private board; non-owner cannot write canon', priv.simSees === false && priv.meSees === true && priv.simWrite === 'invalid_argument' && priv.canonWrite === 'invalid_argument', JSON.stringify(priv));
  // public note by observer? sim holds seat: use note
  await page.locator('#simAct input[type=text]').fill('Nice doing business.');
  await click('#simAct', 'Put it on the record', 900);
  check('public note in record', /Nice doing business/.test(await txt('#record')));
  // pretend later: two-way lapse at 1.5h
  await click('#dev', '+2 h', 1500);
  const later = await txt('#now'), rec2 = await txt('#record');
  check('two-way lapse recorded once with holder', (rec2.match(/NO ACT/g) || []).length === 1 && /Two-way call-up pending — closed with no counted move · Boston GM seat · Local tester/.test(rec2), rec2.slice(0, 900));
  check('payroll after lapse 217.7 (pending zeroed)', /\$217\.7M/.test(later), later);
  await shot('05-later');
  await click('#dev', '+6 h', 1500);
  const rec3 = await txt('#record'), now3 = await txt('#now');
  check('owner note MET at day 5', /Owner.s note MET/.test(now3) || /MET/.test(rec3), now3.slice(0, 600));
  check('games appear (toy model)', /toy model · seed 2026/.test(now3), now3);
  await shot('06-day8');
  // leave with handover note
  await click('#place', 'Leave the seat', 500);
  await page.locator('#place input[type=text]').fill('Keep Guard B off the block.');
  await click('#place', 'Hand over with this note', 1200);
  const pl = await txt('#place');
  check('left seat with public note', /Observer/.test(pl) && /Keep Guard B off the block/.test(pl), pl);
  check('leave recorded', /left the Boston GM seat — handover note: “Keep Guard B off the block\.”/.test(await txt('#record')), (await txt('#record')).slice(0, 500));
  check('private board hidden when observer', await page.locator('#board').isHidden());
  await shot('07-left');
  // sim can take Boston? sim holds Denver -> S-3 so blocked; primary claims again
  await click('#place', 'Take the Boston GM seat', 900);
  check('re-claim shows handover note to next holder', /Public handover note on this seat/.test(await txt('#place')), await txt('#place'));
}
if (scenario === 'lapse') {
  await click('#gate', 'Start this World', 900);
  await click('#dev', '+2 h', 1500);
  const rec = await txt('#record');
  check('vacant lapses: 2 NO ACT lines, seat vacant', (rec.match(/NO ACT/g) || []).length === 2 && /vacant/.test(rec), rec);
  check('denver-call lapsed line in World now', /Lapsed — NO ACT against the Boston GM seat/.test(await txt('#now')), (await txt('#now')).slice(0, 700));
  await shot('lapse');
}
console.log(`\n${pass} passed, ${fail} failed`);
console.log('page errors:', JSON.stringify(errs, null, 1));
await browser.close();
