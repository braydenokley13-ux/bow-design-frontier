// How strong is an 8-hex (32-bit) seal? Grind a doctored entry 8 whose seal shares a prefix with the real record head.
import crypto from 'crypto';
const sha = (s) => crypto.createHash('sha256').update(s, 'utf8').digest('hex');
const seal7 = process.argv[2], target = process.argv[3], bits = +process.argv[4];
const hexN = bits / 4, want = target.slice(0, hexN);
const t0 = Date.now(); let n = 0;
for (;; n++) {
  // invisible nonce: a run of zero-width spaces / zero-width non-joiners encoding n in binary
  const nonce = n.toString(2).replace(/0/g, '​').replace(/1/g, '‌');
  const text = 'Tatum returns vs Denver.' + nonce; // doctored fact + invisible nonce
  const json = JSON.stringify({ d: '6 Mar 2026', k: '2026-03-06', src: 'NBA.com', t: text, v: '[verify]' });
  const h = sha(seal7 + json);
  if (h.startsWith(want)) { const s = (Date.now() - t0) / 1000; console.log(JSON.stringify({ bits, tries: n + 1, secs: s, rate_per_s: Math.round((n + 1) / s), seal8: h.slice(0, 8), realHead8: target.slice(0, 8), textShown: 'Tatum returns vs Denver.', invisibleChars: nonce.length })); break; }
}
