import { loadOrig, loadClone } from './c12_load.mjs';
const O = loadOrig(), C = loadClone();
const toC = (m) => m.t === 'room' ? { k: 'trade', pid: m.pid, team: m.team } : m.t === 'swap' ? { k: 'swap', pid: m.pid, d: 'ABC'.indexOf(m.den.slice(3)) } : m.t === 'waive' ? { k: 'waive', pid: m.pid } : { k: 'decline' };
const rows = []; const seen = new Set();
for (const tg of O.TARGETS) {
  const r = O.reverseSearch(O.initialState(), tg);
  for (const d of r.doors) {
    const k = O.describeSeq(d.moves); if (seen.has(k)) continue; seen.add(k);
    const st = O.applySeq(O.initialState(), d.moves).state, v = O.compute(st, true).vals;
    let B = C.W; d.moves.forEach(m => { B = C.apply(B, toC(m)); });
    if (!B) { rows.push({ k, cloneIllegal: true }); continue; }
    const N = C.buildGraph(B, C.WG).N;
    const o = { pay: v.payroll, status: v.apronStatus.toUpperCase(), tools: v.tools.length, tb: v['tool.takeBack'], legal: v.legalMoves };
    const c = { pay: C.payroll(B), status: N.apron.valTxt, tools: N.tools.val, tb: C.takeBack(C.payroll(B)), legal: N.legal.val };
    rows.push({ k, o, c });
  }
}
const diff = (f) => rows.filter(r => r.o && String(r.o[f]).replace('UNDER TAX','UNDER THE APRONS').replace('OVER TAX','UNDER THE APRONS') !== String(r.c[f]));
console.log('distinct doors across 4 targets', rows.length, 'clone-illegal', rows.filter(r => r.cloneIllegal).length);
for (const f of ['pay', 'status', 'tools', 'tb', 'legal']) { const d = diff(f); console.log(f, 'mismatch in', d.length, 'branches', d.slice(0, 3).map(r => r.k + ' | orig ' + r.o[f] + ' clone ' + r.c[f])); }
console.log('any mismatch at all:', rows.filter(r => r.o && ['pay','status','tools','tb','legal'].some(f => diff(f).includes(r))).length);
// Initial state figures
const v0 = O.compute(O.initialState(), true).vals, N0 = C.WG.N;
console.log('initial ORIG', v0.payroll, v0.worldTax, v0.apronStatus, v0.tools.length, v0.legalMoves, '| CLONE', C.payroll(C.W), N0.tax.val, N0.apron.valTxt, N0.tools.val, N0.legal.val);
// payroll sweep on tools: independent tool rules vs both
const L = { first: 209015, second: 221686 };
const indepTools = (p) => [p <= L.second, p <= L.first, p <= L.second, p + 15044 <= L.first, p + 6064 <= L.second].filter(Boolean).length;
let om = 0, cm = 0, ex = [];
for (let p = 190000; p <= 225000; p += 50) {
  const s = O.initialState(); s.dead = p - 214000 - s.pending; const ov = O.compute(s, false).vals.tools.length;
  if (ov !== indepTools(p)) om++;
  if (C.toolsOf(p) !== indepTools(p)) { cm++; if (ex.length < 1 || p % 5000 === 0) ex.push(p + ':' + C.toolsOf(p) + '≠' + indepTools(p)); }
}
console.log('tools sweep 190.0–225.0 step 0.05: ORIG mismatches', om, 'CLONE mismatches', cm, ex.slice(0, 8));
