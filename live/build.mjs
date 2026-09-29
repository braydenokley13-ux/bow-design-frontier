// Builds live-world.html (pure ASCII, comments and indentation stripped) from live-world.src.html.
import fs from 'fs';
const dir = new URL('.', import.meta.url).pathname;
const s = fs.readFileSync(dir + 'live-world.src.html', 'utf8');
const esc = (c, js) => { const cp = c.codePointAt(0); if (js) { if (cp > 0xffff) { const h = Math.floor((cp - 0x10000) / 0x400) + 0xd800, l = ((cp - 0x10000) % 0x400) + 0xdc00; return '\\u' + h.toString(16).padStart(4, '0') + '\\u' + l.toString(16).padStart(4, '0'); } return '\\u' + cp.toString(16).padStart(4, '0'); } return '&#x' + cp.toString(16) + ';'; };
const ascii = (txt, js) => txt.replace(/[^\x00-\x7f]/gu, (c) => esc(c, js));
const slim = (txt) => txt.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^[ \t]+/gm, '').replace(/[ \t]+$/gm, '').replace(/^\/\/.*$/gm, '').replace(/\n{2,}/g, '\n');
const out = s.split(/(<script>[\s\S]*?<\/script>|<style>[\s\S]*?<\/style>)/).map((part) => /^<(script|style)>/.test(part) ? ascii(slim(part), true) : ascii(part, false)).join('');
fs.writeFileSync(dir + 'live-world.html', out);
console.log('built live-world.html', out.length, 'bytes; non-ascii left:', /[^\x00-\x7f]/.test(out));
