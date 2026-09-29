// Independent rulebook (written from the spec, not from either board), then audit both boards' doors.
import { loadOrig, loadClone } from './c12_load.mjs';
const O = loadOrig(), C = loadClone();
const SAL = { tatum:58500,butler:56800,guardA:24000,bigA:19500,hauser:10800,pritchard:7800,bigB:9900,wingC:8400,guardB:2700,rook1:5100,rook2:3300,min1:2400,min2:2400,min3:2400 };
const MINS = ['min1','min2','min3'], DEN = { denA:2100, denB:6000, denC:11000 }, ROOM = { R1:12000, R2:9000, R3:4000 };
const L = { cap:164961, taxLeague:200428, first:209015, second:221686, mleT:6064, mleN:15044 };
const init = () => ({ c: { ...SAL }, dead: 6400, pend: 2400, room: { ...ROOM }, den: { ...DEN }, picks: 0 });
const pay = (s) => Object.values(s.c).reduce((a, b) => a + b, 0) + s.dead + s.pend;
// pct(payroll, outgoing) -> max incoming. variant: 'orig125' | 'real'
function maxIn(p, out, variant) {
  if (p > L.second) return out;               // 2nd apron: <=100%
  if (p > L.first) return Math.floor(out * 1.1); // 1st apron: <=110%
  if (variant === 'orig125') return Math.floor(out * 1.25);
  // real 2023 CBA non-apron matching (2023-24 brackets; indexed later, so this is conservative)
  if (out <= 7500) return 2 * out + 250; if (out <= 29000) return out + 7500 + 250; return Math.floor(out * 1.25) + 250;
}
function apply(s, m, opt) {
  const n = { c: { ...s.c }, dead: s.dead, pend: s.pend, room: { ...s.room }, den: { ...s.den }, picks: s.picks };
  if (m.pid && !(m.pid in s.c)) return { ok: false, why: 'gone' };
  if (m.t === 'room') { if (s.c[m.pid] > s.room[m.team]) return { ok: false, why: 'room' }; n.room[m.team] -= s.c[m.pid]; delete n.c[m.pid]; n.picks++; }
  else if (m.t === 'swap') {
    if (!(m.den in s.den)) return { ok: false, why: 'den used' };
    const inc = s.den[m.den], out = s.c[m.pid];
    delete n.c[m.pid]; n.c[m.den] = inc; delete n.den[m.den];
    const p = opt.post ? pay(n) : pay(s);
    if (inc > maxIn(p, out, opt.variant)) return { ok: false, why: 'match' };
  } else if (m.t === 'waive') { if (!MINS.includes(m.pid)) return { ok: false }; n.dead += s.c[m.pid]; delete n.c[m.pid]; }
  else { if (!s.pend) return { ok: false, why: 'no pend' }; n.pend = 0; }
  const cnt = Object.keys(n.c).length; if (cnt < 13) return { ok: false, why: 'floor' }; if (cnt + (n.pend ? 1 : 0) > 15) return { ok: false, why: 'ceil' };
  return { ok: true, s: n };
}
const seq = (ms, opt) => { let s = init(); for (const m of ms) { const r = apply(s, m, opt); if (!r.ok) return r; s = r.s; } return { ok: true, s }; };
const oMoves = O.candidateMoves(O.initialState()).map(m => ({ t: m.t, pid: m.pid, team: m.team, den: m.den }));
const variants = { A_pre125: { post: false, variant: 'orig125' }, B_post125: { post: true, variant: 'orig125' }, C_postReal: { post: true, variant: 'real' } };
const key = (ms) => ms.map(m => [m.t, m.pid || '', m.team || m.den || ''].join(':')).join('>');
const legalSets = {};
for (const [vn, opt] of Object.entries(variants)) {
  const set = new Set();
  oMoves.forEach(a => { if (!seq([a], opt).ok) return; set.add(key([a])); oMoves.forEach(b => { if (key([a]) === key([b])) return; if (seq([a, b], opt).ok) set.add(key([a, b])); }); });
  legalSets[vn] = set;
}
const oSet = new Set(); const s0 = O.initialState();
oMoves.forEach(a => { const r = O.applyMove(s0, a); if (!r.ok) return; oSet.add(key([a])); oMoves.forEach(b => { if (key([a]) === key([b])) return; if (O.applyMove(r.state, b).ok) oSet.add(key([a, b])); }); });
for (const [vn, set] of Object.entries(legalSets)) {
  console.log(vn, 'legal', set.size, '| orig-only', [...oSet].filter(k => !set.has(k)).length, '| indep-only', [...set].filter(k => !oSet.has(k)).length);
  if (vn !== 'A_pre125') console.log('   indep-only examples:', [...set].filter(k => !oSet.has(k)).slice(0, 12));
}
// audit every door of every target in ORIGINAL against the three variants, and target meeting independently
const meets = { owner: (s) => pay(s) <= L.second, mle: (s) => pay(s) + L.mleT <= L.second, tax25: (s) => Math.round(1.5 * Math.max(0, pay(s) - 200000)) < 25000, cap: (s) => pay(s) <= L.cap && 'tatum' in s.c && 'butler' in s.c };
for (const tg of O.TARGETS) {
  const r = O.reverseSearch(O.initialState(), tg);
  const bad = {}; for (const vn in variants) bad[vn] = r.doors.filter(d => { const q = seq(d.moves, variants[vn]); return !q.ok || !meets[tg.id](q.s); }).map(d => O.describeSeq(d.moves));
  console.log('ORIG target', tg.id, 'doors', r.doors.length, 'illegal/unmet under', Object.fromEntries(Object.entries(bad).map(([k, v]) => [k, v.length])), bad.C_postReal.slice(0, 3));
  // doors the original misses under the real-CBA variant (unique books, not padded)
}
// what does the real-CBA variant add as doors for mle / tax25?
for (const id of ['owner','mle','tax25','cap']) {
  const opt = variants.C_postReal; const singles = new Set(); const books = new Map();
  const bk = (s) => JSON.stringify([Object.keys(s.c).sort(), s.dead, s.pend, Object.keys(s.den).sort(), s.picks]);
  oMoves.forEach(a => { const q = seq([a], opt); if (q.ok && meets[id](q.s)) { singles.add(key([a])); if (!books.has(bk(q.s))) books.set(bk(q.s), [a]); } });
  oMoves.forEach(a => { if (!seq([a], opt).ok) return; oMoves.forEach(b => { if (key([a]) === key([b])) return; const q = seq([a, b], opt); if (!q.ok || !meets[id](q.s)) return; if (singles.has(key([a])) || singles.has(key([b]))) return; if (!books.has(bk(q.s))) books.set(bk(q.s), [a, b]); }); });
  const orig = O.reverseSearch(O.initialState(), O.TARGETS.find(t => t.id === id));
  const ob = new Set(orig.doors.map(d => d.bk));
  const extra = [...books.entries()].filter(([k]) => { const p = JSON.parse(k); return !ob.has(JSON.stringify([p[0], p[1], p[2], p[3], p[4]])); });
  console.log('REAL-CBA doors', id, books.size, 'vs ORIG', orig.doors.length);
}
console.log('B orig-only:', [...oSet].filter(k => !legalSets.B_post125.has(k)));
console.log('C orig-only:', [...oSet].filter(k => !legalSets.C_postReal.has(k)), 'C indep-only count', [...legalSets.C_postReal].filter(k => !oSet.has(k)).length);
