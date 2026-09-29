import { loadOrig, loadClone } from './c12_load.mjs';
const O = loadOrig(), C = loadClone();
// --- 1. self tests
const ot = O.selfTests(); console.log('ORIG selfTests', ot.filter(t=>t.ok).length + '/' + ot.length, ot.filter(t=>!t.ok).map(t=>t.name+': '+t.err));
const ct = C.checks(); console.log('CLONE checks', ct.pass + '/' + ct.out.length, ct.out.filter(x=>!x.ok).map(x=>x.t));
// --- 2. search summaries per target
for (const tg of O.TARGETS) {
  const r = O.reverseSearch(O.initialState(), tg);
  const g = C.GOALS.find(x => x.id === tg.id); const q = C.search(g, C.W);
  console.log(tg.id.padEnd(6), 'ORIG eval', r.evaluated, 'legal', r.legal, 'meetRaw', r.meetRaw, 'redundant', r.redundant, 'merged', r.merged, 'doors', r.meet, '| CLONE eval', q.evals, 'legal', q.legal, 'rawMet', q.rawMet, 'beaten', q.beaten, 'merged', q.merged, 'doors', q.results.length);
}
// --- 3. enumerate every legal sequence in both, map to a common key
const oKey = (ms) => ms.map(m => m.t === 'room' ? 'room:'+m.pid+':'+m.team : m.t === 'swap' ? 'swap:'+m.pid+':'+m.den : m.t === 'waive' ? 'waive:'+m.pid : 'twoway').join('>');
const cKey = (ms) => ms.map(m => m.k === 'trade' ? 'room:'+m.pid+':'+m.team : m.k === 'swap' ? 'swap:'+m.pid+':den'+'ABC'[m.d] : m.k === 'waive' ? 'waive:'+m.pid : 'twoway').join('>');
const oLegal = new Set(), cLegal = new Set();
const s0 = O.initialState(), oc = O.candidateMoves(s0);
oc.forEach(a => { const r = O.applyMove(s0, a); if (!r.ok) return; oLegal.add(oKey([a])); oc.forEach(b => { if (O.mvKey(a) === O.mvKey(b)) return; const r2 = O.applyMove(r.state, b); if (r2.ok) oLegal.add(oKey([a,b])); }); });
const cc = C.cands(C.W);
const ck = m => m.k + ':' + (m.pid||'') + ':' + (m.team || m.d || '');
cc.forEach(a => { const s = C.apply(C.W, a); if (!s) return; cLegal.add(cKey([a])); cc.forEach(b => { if (ck(a) === ck(b)) return; const s2 = C.apply(s, b); if (s2) cLegal.add(cKey([a,b])); }); });
console.log('legal sequences ORIG', oLegal.size, 'CLONE', cLegal.size);
console.log('ORIG-only:', [...oLegal].filter(k => !cLegal.has(k)));
console.log('CLONE-only:', [...cLegal].filter(k => !oLegal.has(k)));
// clone mkey bug check: d=0 -> falsy -> '' 
console.log('clone mkey for d=0:', ck({k:'swap',pid:'x',d:0}), 'for trade R1', ck({k:'trade',pid:'x',team:'R1'}));
