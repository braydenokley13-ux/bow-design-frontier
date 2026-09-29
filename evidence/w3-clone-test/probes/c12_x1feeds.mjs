import fs from 'fs';
import { loadClone } from './c12_load.mjs';
const SP = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/';
const src = fs.readFileSync(SP + 'canvas/project/X3Engine.dc.html', 'utf8');
const O = new Function(src.slice(src.indexOf('/* ==== ENGINE BEGIN'), src.indexOf('/* ==== ENGINE END')) + '; return {initialState, compute, downstream, usedBy};')();
const C = loadClone();
const G = O.compute(O.initialState(), true);
const pairs = [['payroll', 'payroll'], ['c:butler', 'c_butler'], ['worldTax', 'tax'], ['dead', 'dead'], ['apronStatus', 'apron'], ['L.second', 'secondApron']];
for (const [o, c] of pairs) console.log(o.padEnd(12), 'ORIG downstream', O.downstream(G, o).length, '| CLONE shows', C.feeds(C.WG, c).cnt, '(true reachable in clone graph:', (() => { const N = C.WG.N, seen = {}, q = [c]; while (q.length) { const x = q.pop(); Object.keys(N).forEach(k => { if (N[k].kids.includes(x) && !seen[k]) { seen[k] = 1; q.push(k); } }); } return Object.keys(seen).length; })() + ')');
