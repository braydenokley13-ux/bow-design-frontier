import { loadOrig, loadClone } from './c12_load.mjs';
const O = loadOrig(), C = loadClone();
const ok = (ms) => ms.map(m => m.t === 'room' ? 'room:' + m.pid + ':' + m.team : m.t === 'swap' ? 'swap:' + m.pid + ':' + m.den : m.t === 'waive' ? 'waive:' + m.pid : 'twoway').join('>');
const ck = (ms) => ms.map(m => m.k === 'trade' ? 'room:' + m.pid + ':' + m.team : m.k === 'swap' ? 'swap:' + m.pid + ':den' + 'ABC'[m.d] : m.k === 'waive' ? 'waive:' + m.pid : 'twoway').join('>');
for (const id of ['owner', 'mle', 'tax25']) {
  const a = new Set(O.reverseSearch(O.initialState(), O.TARGETS.find(t => t.id === id)).doors.map(d => ok(d.moves)));
  const b = new Set(C.search(C.GOALS.find(g => g.id === id), C.W).results.map(r => ck(r.moves)));
  console.log(id, 'orig', a.size, 'clone', b.size, 'identical representative sequences:', [...a].every(x => b.has(x)) && [...b].every(x => a.has(x)));
}
