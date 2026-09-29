# W2-D DRAFT (in progress) — AI occupancy and portable execution

Status: skeleton saved early. Verified external facts so far (fetched 2026-09-29):
- ECMA-262 §21.3: exp/log/sin/cos/pow "not precisely specified"; Number::exponentiate "implementation-approximated"; Math.sqrt = correctly-rounded sqrt of the real value.
- Wasm 3.0 spec Profiles appendix (page dated 2026-09-21): deterministic profile = canonical positive NaN, relaxed-SIMD fixed; memory.grow/table.grow "technically remain non-deterministic".
- Wasmtime: fuel deterministic, epoch non-deterministic.
- RFC 8785 JCS: UTF-16 code-unit key sort, locale-independent; ES number serialization; NaN/Inf error.
- MCP spec 2026-07-28: Sampling DEPRECATED (SEP-2577); Roots deprecated; MCP donated to AAIF (LF) 2025-12-09.
- A2A v1.0.0, LF project since 2025-06-23; spec does not cover delegation chains/spend limits.
- BOW: W sim.ts:53 Math.exp; handover.ts:26 / draftV4.ts:65 Box-Muller (log, cos); DC domain has none; DC receipt canonical() and fingerprint use localeCompare + FNV-1a x4.
