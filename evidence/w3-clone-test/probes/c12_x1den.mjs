import { loadOrig } from './c12_load.mjs';
const O = loadOrig();
const denMax = (out) => out <= 7500 ? 2 * out + 250 : out <= 29000 ? out + 7750 : Math.floor(out * 1.25) + 250;
for (const id of ['owner','mle','tax25']) {
  const r = O.reverseSearch(O.initialState(), O.TARGETS.find(t => t.id === id));
  const bad = r.doors.filter(d => d.moves.some(m => m.t === 'swap' && O.ROSTER.find(p => p.id === m.pid).sal > denMax(O.DEN.find(x => x.id === m.den).sal)));
  console.log(id, 'doors', r.doors.length, 'need Denver to take back beyond real over-cap matching:', bad.length);
}
