// Side channels in the ORIGINAL engine (run in Node, pure functions)
import fs from 'fs';
const SP = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/';
const src = fs.readFileSync(SP + 'canvas/project/X3Seats.dc.html', 'utf8');
const a = src.indexOf('/* ===== ENGINE'), b = src.indexOf('class Component extends DCLogic');
const E = new Function(src.slice(a, b) + '; return {initState, apply, buildView, UI0, visibleFacts, getTests, verify, byId};')();
const run = (steps) => steps.reduce((s, [p, t]) => { const r = E.apply(s, p, t); if (!r.ok) throw new Error(p + t + r.why); return r.state; }, E.initState());
const bostonView = (s, how) => { const v = E.buildView(s, Object.assign({}, E.UI0, { how })); const rm = v.rooms.find(r => r.seat === 'BOSTON'); return rm.cells.map((c, i) => c.has ? i + ':' + c.id + ' ' + (how ? c.body.match(/\d\d:\d\d/)?.[0] : c.body.slice(0, 18)) : i + ':—'); };
const P1 = run([['BOSTON', 'offer'], ['DENVER', 'counter']]);
const P2 = run([['BOSTON', 'offer'], ['DENVER', 'note'], ['DENVER', 'counter']]);
console.log('Boston room, no Denver note  :', bostonView(P1, false).join(' | '));
console.log('Boston room, Denver noted    :', bostonView(P2, false).join(' | '));
console.log('times (how) no note          :', bostonView(P1, true).slice(3, 6).join(' | '));
console.log('times (how) Denver noted     :', bostonView(P2, true).slice(3, 6).join(' | '));
// is Boston's *visible fact set* identical apart from ids? (same content, different metadata)
const vt = (s) => E.visibleFacts('BOSTON', s).map(f => f.key + '@' + f.id + '@' + f.time);
console.log('Boston visibleFacts P1:', vt(P1).slice(-2).join(' '), '| P2:', vt(P2).slice(-2).join(' '));
