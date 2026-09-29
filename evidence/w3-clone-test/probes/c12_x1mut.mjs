import fs from 'fs';
const SP = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/';
const osrc = fs.readFileSync(SP + 'canvas/project/X3Engine.dc.html', 'utf8');
const ocode = osrc.slice(osrc.indexOf('/* ==== ENGINE BEGIN'), osrc.indexOf('/* ==== ENGINE END'));
const csrc = fs.readFileSync(SP + 'clones/X3EngineClone.dc.html', 'utf8');
const ccode = csrc.slice(csrc.indexOf('const ENG = (function'), csrc.indexOf('class Component extends DCLogic'));
const runO = (code) => { try { const r = new Function(code + '; return selfTests();')(); return r.filter(t => !t.ok).length + ' fail'; } catch (e) { return 'THROW ' + e.message.slice(0, 60); } };
const runC = (code) => { try { const E = new Function(code + '; return ENG;')(); const k = E.checks(); return (k.out.length - k.pass) + ' fail'; } catch (e) { return 'THROW ' + e.message.slice(0, 60); } };
const M = [
  ['first apron 209.015 -> 205.0', ['first: 209015', 'first: 205000'], ['FIRST = 205000', 'FIRST = 209015']],
  ['2nd-apron take-back 100% -> 110%', ["'over second apron' ? 100", "'over second apron' ? 110"], ['pay > SECOND ? 100', 'pay > SECOND ? 110']],
  ['1st-apron take-back 110% -> 125%', [": status === 'over first apron' ? 110", ": status === 'over first apron' ? 125"], ['pay >= FIRST ? 110', 'pay >= FIRST ? 125']],
  ['room check allows $1K over', ['if (c.sal > st.rooms[mv.team])', 'if (c.sal > st.rooms[mv.team] + 1000)'], ['if (p.sal > st.room[m.team]) return null', 'if (p.sal > st.room[m.team] + 1000) return null']],
  ['roster floor 13 -> 12', ['FLOOR = 13', 'FLOOR = 12'], ['st.players.length - 1 < 13) return null;\n      n.players.splice(i, 1); n.room', 'st.players.length - 1 < 12) return null;\n      n.players.splice(i, 1); n.room']],
  ['Denver contract reusable', ["if (st.den.indexOf(mv.den) < 0)", "if (false)"], ['|| st.den[m.d]) return null', ') return null']],
  ['waive removes cap hit', ['s.dead += c.sal;', 's.dead += 0;'], ['n.dead += p.sal;', 'n.dead += 0;']],
  ['tax rate 1.5 -> 1.25 (tax only)', ['const RATE = 1.5', 'const RATE = 1.25'], ['Math.round(1.5 * Math.max', 'Math.round(1.25 * Math.max']],
  ['search drops 2-move doors', ['take([f.a, b], r.state, j);', ''], ["else raw.push({ moves: [a.m, m2], st: s2 });", "else {}"]],
  ['taxpayer MLE uses first apron', ["g('payroll') + g('L.mleT') <= g('L.second')", "g('payroll') + g('L.mleT') <= g('L.first')"], ['MLE = 215622', 'MLE = 202951']],
];
console.log('mutation'.padEnd(36), 'ORIG'.padEnd(12), 'CLONE');
for (const [name, o, c] of M) {
  const oc = ocode.includes(o[0]) ? runO(ocode.split(o[0]).join(o[1])) : 'n/a(pattern)';
  const cc = ccode.includes(c[0]) ? runC(ccode.split(c[0]).join(c[1])) : 'n/a(pattern)';
  console.log(name.padEnd(36), oc.padEnd(12), cc);
}
