// Node-side audit of the X3 lockstep engines (original + clone), extracted verbatim from the boards.
import fs from 'fs';
import crypto from 'crypto';
const SP = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/';
const sha = (s) => crypto.createHash('sha256').update(s, 'utf8').digest('hex');

function extract(file, startRe, endRe, exportsList) {
  const src = fs.readFileSync(SP + file, 'utf8');
  const a = src.search(startRe), b = src.search(endRe);
  const code = src.slice(a, b);
  return new Function(code + '\nreturn {' + exportsList.join(',') + '};')();
}
const O = extract('canvas/project/X3Lockstep.dc.html', /const SEED = 2026/, /\/\* ---------- display helpers/, ['worldAt', 'canon', 'tryAppend', 'genTick', 'payroll', 'BASE', 'TMPL', 'fnv1a']);
const C = extract('clones/X3LockstepClone.dc.html', /const OPP = \['Miami'/, /\/\* ---------- presentation helpers/, ['fold', 'canon', 'tryAct', 'genEvents', 'genDay', 'sha256', 'fixtures']);

const D = 1440;
// 1. Hash of the states the browser probe will display (original): t = off*1440 (L frozen at 0)
const logO = [{ id: 'a1', t: 2 * D, seat: 'YOU', act: { type: 'callup' } }];
const out = {};
for (const [name, log, t] of [['O t0 empty', [], 0], ['O friend@1 (before act)', logO, 1 * D], ['O friend@1 empty log', [], 1 * D], ['O friend@3 (after act)', logO, 3 * D], ['O you@5 with act', logO, 5 * D], ['O broken friend@3 seed2027', logO, 3 * D]]) {
  const seed = name.includes('broken') ? 2027 : 2026;
  const st = O.worldAt(seed, log, t);
  out[name] = { sha8: sha(O.canon(st)).slice(0, 8), fnv: ('00000000' + O.fnv1a(O.canon(st)).toString(16)).slice(-8), wl: st.w + '–' + st.l, pay: O.payroll(st), roster: st.roster.length, callup: st.callup };
}
console.log('ORIGINAL node recompute:', JSON.stringify(out, null, 1));

// 2. Fuzz: acts after t never affect state(t); partial-log equivalence; prefix growth; with random legal logs
function rnd(seed) { let a = seed; return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let fails = { future: 0, partial: 0, prefix: 0, rerun: 0 }, trials = 0, actsMade = 0;
for (let trial = 0; trial < 300; trial++) {
  const r = rnd(trial + 1); let log = []; let t = 0;
  for (let step = 0; step < 8; step++) {
    t += Math.floor(r() * 1.5 * D);
    const st = O.worldAt(2026, log, t);
    const cands = [];
    if (st.callup === 'open') cands.push({ type: r() < .5 ? 'callup' : 'nocall' });
    Object.keys(st.offers).forEach((k) => { if (st.offers[k].status === 'open') cands.push({ type: 'answer', offer: k, choice: r() < .6 ? 'accept' : 'decline' }); });
    if (!cands.length) continue;
    const res = O.tryAppend(2026, log, t, cands[Math.floor(r() * cands.length)]);
    if (res.ok) { log = res.log; actsMade++; }
  }
  for (let k = 0; k < 25; k++) {
    const tt = Math.floor(r() * 20 * D); trials++;
    const full = O.canon(O.worldAt(2026, log, tt));
    if (full !== O.canon(O.worldAt(2026, log.filter((a) => a.t <= tt), tt))) fails.partial++;
    // add a bogus future act after tt: must not change state(tt)
    const fut = log.concat([{ id: 'z9', t: tt + 1 + Math.floor(r() * D), seat: 'YOU', act: { type: 'nocall' } }]);
    if (full !== O.canon(O.worldAt(2026, fut, tt))) fails.future++;
    if (full !== O.canon(O.worldAt(2026, log, tt))) fails.rerun++;
    const later = O.worldAt(2026, log, tt + Math.floor(r() * 5 * D)).events, now = O.worldAt(2026, log, tt).events;
    if (!now.every((e, i) => O.canon(e) === O.canon(later[i]))) fails.prefix++;
  }
}
console.log('ORIGINAL fuzz: 300 random legal logs,', actsMade, 'acts,', trials, 'probe times. failures:', JSON.stringify(fails));

// 3. Does the seed actually drive the World, or is it just in the hash? Strip the seed field and compare.
const noSeed = (st) => { const x = JSON.parse(O.canon(st)); delete x.seed; return JSON.stringify(x); };
let same0 = 0; for (let d = 0; d <= 40; d++) if (noSeed(O.worldAt(2026, [], d * D)) === noSeed(O.worldAt(2027, [], d * D))) same0++;
console.log('ORIGINAL: days (0..40) where seed 2026 and 2027 Worlds are identical apart from the seed field:', same0);

// 4. Lapse vs decline payroll (call-up window closes Fri 09:00, t=4320)
const lapse = O.worldAt(2026, [], 4 * D), dec = O.worldAt(2026, [{ id: 'a1', t: 100, seat: 'YOU', act: { type: 'nocall' } }], 4 * D);
console.log('ORIGINAL call-up LAPSED: callup=', lapse.callup, 'payroll=', O.payroll(lapse), 'roster=', lapse.roster.length, ' | DECLINED: payroll=', O.payroll(dec), ' | 2nd apron 221686');

// 5. Offers generated for seed 2026 in first 10 days; how many templates reachable
const offers = []; for (let k = 0; k < 20; k++) O.genTick(2026, k).forEach((e) => { if (e.kind !== 'game') offers.push(e.kind + ':' + e.id + (e.tmpl !== undefined ? ':' + O.TMPL[e.tmpl].who : '')); });
console.log('ORIGINAL events days 0-19 (non-game):', offers.join(' '));

// ---------------- CLONE ----------------
const logC = [{ id: 1, t: 2 * D + 1, kind: 'callup', mid: 'C', text: 'YOU called up the two-way' }];
const outC = {};
for (const [name, log, t, seed] of [['C t1 empty', [], 1, 2026], ['C friend@1 before act', logC, D + 1, 2026], ['C friend@3 after act', logC, 3 * D + 1, 2026]]) {
  const st = C.fold(seed, log, t); outC[name] = { sha8: C.sha256(C.canon(st)).slice(0, 8), nodeSha8: sha(C.canon(st)).slice(0, 8), wl: (14 + st.w) + '–' + (10 + st.l), pay: st.payroll };
}
console.log('CLONE node recompute:', JSON.stringify(outC));
// Clone: are seed-2026 days 0-5 generated by the seed or authored?
const fx = C.genEvents(2026, 5 * D + 600).map((e) => e.id).join(','), gen = [0, 1, 2, 3, 4, 5].flatMap((d) => C.genDay(2026, d)).map((e) => e.id).join(',');
console.log('CLONE seed 2026 days 0-5 displayed events:', fx, '| what mulberry32(seed 2026) would generate:', gen);
let cf = { future: 0 }, ct = 0;
for (let trial = 0; trial < 300; trial++) { const r = rnd(trial + 7); const tt = Math.floor(r() * 20 * D); const L = [{ id: 1, t: Math.floor(r() * tt), kind: 'skip', mid: 'C', text: 'x' }]; const full = C.canon(C.fold(2026, L, tt)); ct++; if (full !== C.canon(C.fold(2026, L.concat([{ id: 2, t: tt + 5, kind: 'callup', mid: 'C', text: 'x' }]), tt))) cf.future++; }
console.log('CLONE fuzz future-act failures:', JSON.stringify(cf), 'of', ct);
const cl = C.fold(2026, [], 4 * D), cd = C.fold(2026, [{ id: 1, t: 100, kind: 'skip', mid: 'C', text: 'x' }], 4 * D);
console.log('CLONE call-up LAPSED payroll=', cl.payroll, ' DECLINED payroll=', cd.payroll);
// Clone canonical JSON coverage: does the hash see game scores?
const s1 = C.fold(2026, [], 3 * D + 1); const s2 = JSON.parse(JSON.stringify(s1)); s2.entries.forEach((e) => { if (e.type === 'game') { e.ev = { ...e.ev, us: 0, them: 99 }; } });
console.log('CLONE hash unchanged after rewriting every game score in state:', C.canon(s1) === C.canon(s2));
const o1 = O.worldAt(2026, [], 3 * D); const o2 = JSON.parse(JSON.stringify(o1)); o2.events.forEach((e) => { if (e.kind === 'game') e.pts = [0, 99]; });
console.log('ORIGINAL hash unchanged after rewriting every game score in state:', O.canon(o1) === O.canon(o2));
