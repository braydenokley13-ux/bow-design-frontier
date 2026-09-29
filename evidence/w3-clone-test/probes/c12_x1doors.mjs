import { loadOrig, loadClone } from './c12_load.mjs';
const O = loadOrig(), C = loadClone();
for (const id of ['owner', 'mle', 'tax25']) {
  const r = O.reverseSearch(O.initialState(), O.TARGETS.find(t => t.id === id));
  console.log('\nORIG', id, r.doors.map(d => `[${d.tier}] ${O.describeSeq(d.moves)} | pay ${d.payroll} tax ${d.tax} roster ${d.roster}`).join('\n  '));
  const q = C.search(C.GOALS.find(g => g.id === id), C.W);
  console.log('CLONE', id, q.results.length, 'e.g.', q.results.slice(-4).map(x => x.moves.map(C.moveTitle).join(' then ') + ' | pay ' + C.payroll(x.st)).join('\n  '));
}
