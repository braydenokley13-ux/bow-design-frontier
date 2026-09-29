import fs from 'fs';
const SP = '/tmp/claude-0/-home-user/f52fdf4a-05b5-5a92-af12-fa83ad11fa7e/scratchpad/';
export function loadOrig() {
  const src = fs.readFileSync(SP + 'canvas/project/X3Engine.dc.html', 'utf8');
  const a = src.indexOf('/* ==== ENGINE BEGIN'), b = src.indexOf('/* ==== ENGINE END');
  const code = src.slice(a, b);
  return new Function(code + '; return {LINES, ROSTER, DEN, TEAMS, initialState, applyMove, applySeq, candidateMoves, reverseSearch, TARGETS, judge, compute, selfTests, mvKey, describeSeq, describeMove, bookKey, checkTrade, statusFor};')();
}
export function loadClone() {
  const src = fs.readFileSync(SP + 'clones/X3EngineClone.dc.html', 'utf8');
  const a = src.indexOf('const ENG = (function'), b = src.indexOf('class Component extends DCLogic');
  const code = src.slice(a, b);
  return new Function(code + '; return ENG;')();
}
