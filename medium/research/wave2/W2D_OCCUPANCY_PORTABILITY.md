# W2-D · AI occupancy and portable execution

Labels: EARNED (BOW code) · HYPOTHESIS · SPECULATIVE FRONTIER · REJECTED. External facts: **[V]** fetched 2026-09-29; **[M]** memory only. "Reasoned" = not run.

## 0. Bottom line

1. Humans and models can share a seat without changing its rules (HYPOTHESIS). DF only renders this ("only the name on the receipt changes"; occupant discretion "an open design question", `Agent.dc.html:113`; "no model ran", `:350,572`). Differences live in four records *around* the seat: attestation, warrant, decision window, replay class.
2. Fairness belongs to the matter's window in world time (batch at close), not a per-occupant throttle. IEX is the wrong analogy for act-advanced worlds; frequent batch auctions fit (HYPOTHESIS).
3. A model is never inside the fold. Outputs are recorded inputs. Replay proves acts, never reasons.
4. BOW needs a seat contract, not a wire protocol. MCP and A2A can carry it; neither expresses warrant, basis or projection soundness.
5. Portable REPLAY is blocked today by three BOW facts: `ruleBundleId` is a label, not a digest; W's league sim uses engine-approximated `Math`; canonicalization is locale-dependent.
6. Portability level is a property of (bundle, audience); stripping degrades it via typed Unknowns.

## PART 1 · Human + AI occupancy

### 1.1 What must differ (everything else is identical)

| Axis | Added for a model occupant |
|---|---|
| Attestation | `occupant = {kind, chain[]}`; each link a principal with its own warrant version. Effective warrant = **intersection** along the chain; every link kept. Macaroon caveats "only restrict, never expand" [V]. RFC 8693 calls nested prior actors "informational only" for access control [V]; BOW must invert that. |
| Trust today | CLAIMED only: `actorClaim:"recorded-local-command-only"` (DC `decisionReceiptV1.ts:62`); Harbor `humanIdentityVerified:false` (EARNED). |
| Warrant | Per-order limit plus aggregate "no splitting" refusal (`Agent.dc.html:341-345,449`, EARNED as prototype). Add: aggregate over the whole delegation tree (Sybil), irreversibility cap, act-rate and what-if budgets. |
| Window, replay | 1.2 and 1.3. |

Swapping occupants is an act; earlier receipts keep their names (`Agent.dc.html:393`). Cicero's opponents were not told it was an AI [V]; BOW should default to disclosure in class (HYPOTHESIS, product call).

### 1.2 Time rules

Precedents:
- **IEX** [V]: 350 µs delay (about 38 miles of coiled fibre); SEC approved the exchange 2016-06-17 and allowed sub-1 ms bumps. Equalizes *latency*.
- **Frequent batch auctions** (Budish–Cramton–Shim, QJE 130(4):1547–1621, 2015) [V]: discrete time, uniform-price batches "for example every tenth of a second". Arrival order inside the interval stops mattering.
- **Cicero** [V]: 40 games, 82 anonymous humans; blitz play used 5-minute turns, which commentary says favor machines [V, secondary].

BOW (EARNED): time advances only by attributable act, ordered by authority-assigned sequence. In W "the usual five stay" if unanswered, and lateness is recorded at advance. DF Live World orders by actor clock and admits acts 10 s ahead, which **fails** (wave 1, 08 P2). So an AI wins only where order inside a window counts (`live-world.src.html:274-275`). Rules (HYPOTHESIS):
1. Windows resolve **at close**, sealed and order-independent. Ties break by a recorded lottery input, never arrival.
2. Minimum deliberation interval and per-seat act budget are world-time rules binding all occupants; humans never hit them.
3. Basis-to-act latency is metadata, never authority.
4. The clock authority opens each AI window. An AI turn is an event in the fold, not a free-running thread.

### 1.3 Replay

- Each entry holds the typed act, a digest of the projection handed over, the **resolved** model snapshot string, decoding params, prompt-template digest and response digest.
- **Never re-query to replay.** Temperature 0 is not determinism: 1,000 temp-0 samples of Qwen3-235B gave 80 distinct completions, fixed only by batch-invariant kernels [V]. OpenAI `seed` is "best effort" [V]. Anthropic retires models after at least 60 days' notice and retired models fail [V].
- **Replays:** state, verdicts, refusals, consequences, the occupant's inputs. **Cannot:** an output's derivation, reasoning, counterfactual occupant behaviour.
- After a fork, fresh occupant acts are GENERATED, logged in the branch, never OBSERVED.
- EARNED analogue: W dice are HMAC-SHA256(seed, label), so they replay (`secret.ts:21,36-38`). Model outputs are not derivable, so they are recorded.
- `AI_ACTOR_RND.md:3-5` (not run): "only typed actions may enter saved game state", with principal, goal, known facts, allowed and forbidden actions, memory, stop rule: the seat contract minus attestation and replay. Adopt it.

### 1.4 Projection only, and laundering

The seat exposes `observe(cut) → [Fact|Unknown]`, `propose(act, basis) → verdict`, `warrant()`. No `state()`, no `fork()` over hidden state.

| Channel | Control (HYPOTHESIS unless noted) |
|---|---|
| Refusal reasons vary with hidden state | Project reasons to the seat's audience; uniform out-of-scope refusal (as `Agent.dc.html:357`). |
| What-if oracle (1000× forks, 08 P9) | Forks run server-side and return only the seat's projection. Per-seat what-if budget (privacy-budget analogy [M]). |
| Derived-secret **taint** | A Fact computed from anything outside the seat's projection carries a taint set; render and export refuse it to audiences outside the set. |
| Public commitments over small state | Salted commitments only. EARNED warning: `rngFrom` folds a seed into one 32-bit FNV state, so public streams could be walked back to sealed ones; fixed by per-label HMAC (`secret.ts:1-18`). |
| Sybil, timing | Budgets bind the seat, not the executor. Fixed response windows. |

### 1.5 Protocols

BOW owns a **SeatPort** contract (observe, propose, warrant, attest) plus adapters. A BOW wire protocol is REJECTED as premature. Resources carry projections (audience from session, never a URI parameter). Tool schemas come from the pinned system definition, not the occupant's server; MCP treats tool annotations as "untrusted" [V].

- **MCP** [V]: latest spec 2026-07-28; stateless, per-request capability negotiation. **Sampling and Roots are DEPRECATED** (SEP-2577; earliest removal on or after 2027-07-28): "integrate directly with LLM provider APIs". So MCP sampling cannot anchor model-needs declarations. The spec "cannot enforce these security principles at the protocol level". Donated to the Agentic AI Foundation (Linux Foundation) 2025-12-09; platinum members include Anthropic, OpenAI, Google, Microsoft, AWS.
- **A2A** [V]: Linux Foundation project since 2025-06-23; spec 1.0.0; Agent Cards carry capabilities, skills, security schemes. The summarized spec showed no delegation-chain or spend-limit mechanism; re-check the primary text.
- Neither carries warrant, basis, refusal-as-record or a projection guarantee.

## PART 2 · Portable execution

### 2.1 Levels

| Level | Bundle adds | Verification | BOW today |
|---|---|---|---|
| REFERENCE | `system@digest, instance, head, pos, audience` | CLAIMED | Five `bow://` grammars, 32-bit `hash8`: not yet. |
| CAPSULE | Ex-ante cut, act plus basis, Facts, Unknowns, non-evidence flag | CLAIMED | DC Receipt v1, synthetic, `assessmentEligible:false` (EARNED). |
| REPLAY | Hash-chained log, recorded inputs, rule bundle **by digest**, caps, golden vectors, expected head | REPLAYED | Not portable. Receipt v1 replays via `ruleBundleId:"market-day-stock/frozen-v1"`, a label resolved to code in the reader (`decisionReceiptV1.ts:66,235-249`): a CAPSULE with in-tree replay (EARNED). |
| FORK-EXECUTABLE | Parent head, cut, intervention, suffixPolicy, occupant requirements, validity envelope, MODELED and no-writeback marker | REPLAYED prefix, GENERATED suffix | DC `decisionBranch`, W Lab: in-tree only. |
| HOSTABLE | Seat register, warrant versions, clock authority, rights terms, migration act. **No keys.** | ATTESTED by host | None. |

HOSTABLE is a fork with authority transfer: the host rebinds seats and keys and records an acceptance act, creating a **new instance** with `lineage.parent = imported head`. Import alone never confers authority (HYPOTHESIS).

### 2.2 Deterministic execution facts

- **JS** [V, ECMA-262 §21.3]: `+ − × ÷`, `sqrt` (`𝔽(√ℝ(n))`), `Math.imul`, `fround` are exact. `exp/log/sin/cos/pow` are "not precisely specified"; `**` is "implementation-approximated"; fdlibm is only recommended.
  - EARNED: W uses `Math.exp` (`sim.ts:53`, `agreements.ts:153`) and Box–Muller `log`/`cos` (`handover.ts:26`, `draftV4.ts:65`, `seasonTwo.ts:632`). Cross-engine league replay is unproven; thresholded draws could flip (reasoned).
  - EARNED: `grep` finds no transcendental `Math` in DC `domain/`, `consequential/`, `platform/`; money is integer cents. DC families are the cheapest REPLAY targets. `mulberry32` is integer-only (`secret.ts:24-32`).
- **Wasm** [V, Wasm 3.0 Profiles page dated 2026-09-21; Wasmtime docs]: outside the deterministic profile NaN sign and payload vary; relaxed SIMD is architecture-dependent; even inside it `memory.grow`/`table.grow` "technically remain non-deterministic"; expose no non-deterministic host functions. Core Wasm has no `exp/log/cos` [M], so a bundle compiles its libm in and results become hash-pinned. CosmWasm rejects floats; NEAR canonicalizes NaN [V, secondary].
- **Fuel** [V]: Wasmtime fuel gives the same complete-or-trap outcome from the same start; epoch interruption is non-deterministic. Fuel, memory and state caps join the pinned rules; out-of-fuel is a recorded `refused(out-of-fuel)`. DC caps bytes (1 MiB, 1,000 commands, receipt `:16`), not compute, so a hostile loop is uncovered (08 P11).
- **Canonical bytes** [V, RFC 8785]: keys sorted by UTF-16 code units "independent of locale settings"; ES number serialization; NaN, Infinity, lone surrogates are errors; integers above 2^53 as strings.
  - EARNED: DC `canonical()` (`decisionReceiptV1.ts:235-238`) and `fingerprint` (`fingerprint.ts:17`, FNV-1a×4, "drift check, not a signature") use `localeCompare`; the source admits it (`fingerprint.ts:10-11`). In-process verify is self-consistent; cross-machine digests would not be. Use JCS plus SHA-256.
- **Content addressing** [V]: Unison hashes definitions' syntax trees (SHA3-512); Nix hashes *inputs* by default. Hash the **artifact bytes** of a shipped bundle.

### 2.3 What must not travel, and how it degrades

| Item | Replaced by | Typed Unknown |
|---|---|---|
| Keys, credentials, seeds of unreleased streams | Commitment plus released outputs (W releases dice per shot). A *closed* instance may carry its seed (HYPOTHESIS). | `not-yet` |
| Private seat knowledge beyond a grant | Other seats' private acts as commitments | `not-available-to-audience` |
| Licensed feed payloads | Digest, licence ref, permitted uses | `withheld-by-rights` |
| External authority, writeback | Nothing; a class marker forbids "actualizing" a fork | Effect Unknown until confirmed |
| Student identity, free text | Pairwise subject refs. Receipt warns the file holds "later actions and Avery's free text" (`DECISION_RECEIPT_V1.md:21`), so no whole-transcript inlining by default; prefix plus head digest (HYPOTHESIS). | `not-available-to-audience` |

The header states the highest level verifiable **for this audience**. Each stripped span appears as an Unknown with kind and digest, so a verifier can prove *that* something was withheld without seeing it; its basis falls to CLAIMED. Nothing downgrades silently.

### 2.4 Model requirements without a vendor

The seat declares **testable** requirements: acts-schema digest, context floor, tool use, modalities, latency class, and a **conformance probe suite** the occupant passes before seating. Shape precedents: A2A Agent Card capabilities and skills [V]; MCP `modelPreferences` [M], tied to deprecated Sampling [V]. Each act pins the actual occupant. Replay without the model: acts replay, occupant `unavailable`. In a fork, `fresh-occupants` names the requirement, any conforming model fills it, and the branch records which (GENERATED). Models retire within months [V], so REPLAY may depend only on recorded outputs.

### 2.5 One file format?

| Precedent | Lesson |
|---|---|
| OCI 1.1 [V] | Content-addressed descriptors; `artifactType`; `subject` plus referrers attach signatures and branches to a digest unchanged. Model for attestations and forks. |
| EPUB OCF [V] | ZIP, first entry a stored `mimetype`, `container.xml` points at renditions. One bundle, many renditions. |
| USDZ [V] | Uncompressed, unencrypted, 64-byte-aligned ZIP; no verification layer. |
| Jupyter [M] | Code and outputs travel, environment does not: pin the engine inside. |
| SC2 replay [V] | Inputs only, same build required. Acceptable only if the engine ships in the bundle. |
| SQLite [V] | Long-term compatible, Library of Congress recommended. **REJECTED as exchange**: page layout is not canonical bytes (reasoned); hostile-file caveat. Fine as local store. |

**Recommendation (HYPOTHESIS): the manifest is the format; containers are transport.** JCS manifest plus content-addressed blobs with typed references. Stored ZIP with manifest first for REFERENCE through REPLAY; OCI-style layout for FORK and HOSTABLE, where prefixes are shared.

- **L0:** `manifest.json` (system@digest, head, pos, audience, CLAIMED).
- **L1:** + `capsule.json`.
- **L2:** + `log.jsonl`, `inputs`, `rules.wasm` (or pinned JS plus engine attestation, labelled REPLAY-LOCAL), `limits.json`, `vectors/`, `expected.json`.
- **L3:** + `branch.json`; parent prefix by digest.
- **L4:** + `seats.json` (no keys), `clock.json`, `rights.json`, migration act; host adds signature and acceptance entry.

Conformance vectors are the spec (08 P14).

## Refusals, frontier, falsifiers

REJECTED: state hashes as public commitments; carrying live seeds or keys; informational-only delegation history (plus the wire protocol and SQLite exchange above). SPECULATIVE FRONTIER: multi-hop signed delegation; HOSTABLE import.

Cheapest falsifiers: (1) W's `pHomeWin` plus Box–Muller for 10^6 draws under two JS engines, diff outputs and thresholded outcomes; (2) a Receipt v1 `fingerprint` under two ICU locales; (3) a hostile reducer in a Wasm fuel harness versus the regex purity scan.

## Sources

BOW code (paths are relative to the snapshots named in the brief):
- W:docs/campaign/bow-worlds-complete-ultra-20260925/AI_ACTOR_RND.md:3-5
- W:runtime/src/modules/worldOne/secret.ts:1-39
- W:runtime/src/modules/worldOne/{sim.ts:53, handover.ts:26, draftV4.ts:65, seasonTwo.ts:632}
- W:runtime/src/shared/agreements.ts:153
- DC:src/consequential/system/decisionReceiptV1.ts:16,62,66,235-249
- DC:src/platform/fingerprint.ts:10-17
- DC:docs/campaign/bow-consequential-os-ultra-20260925/DECISION_RECEIPT_V1.md:11,21,29
- DF:canvas/Agent.dc.html:113,341-350,357,393,449,572
- Wave 1 report 08 (P2, P3, P9, P11, P14); PARENT_SYNTHESIS_W1.md rows #1, #2, #10, #14, #16, #17, #19, #20 and §3-4.

External, fetched 2026-09-29 unless marked:
- ECMA-262 living standard §21.3 and Number::exponentiate: https://tc39.es/ecma262/
- WebAssembly 3.0 spec, Profiles appendix: https://webassembly.github.io/spec/core/appendix/profiles.html
- Wasmtime deterministic execution: https://docs.wasmtime.dev/examples-deterministic-wasm-execution.html
- Wasmtime `Config::consume_fuel`: https://docs.wasmtime.dev/api/wasmtime/struct.Config.html
- RFC 8785 (JCS): https://www.rfc-editor.org/rfc/rfc8785
- RFC 8693 (token exchange, `act`): https://www.rfc-editor.org/rfc/rfc8693
- MCP spec 2026-07-28 and deprecated registry: https://modelcontextprotocol.io/specification/2026-07-28/deprecated and https://modelcontextprotocol.io/specification/latest
- Linux Foundation AAIF release, 2025-12-09: https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
- A2A spec 1.0.0: https://a2a-protocol.org/latest/specification/
- LF A2A launch, 2025-06-23: https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents
- Budish, Cramton and Shim, QJE 2015: https://academic.oup.com/qje/article/130/4/1547/1916146
- IEX speed bump (search summary, CNBC 2016-06-17): https://www.cnbc.com/2016/06/17/sec-gives-its-blessing-to-the-iexs-speed-bump-trading.html
- Cicero, Science 2022: https://www.science.org/doi/10.1126/science.ade9097. Blitz commentary (secondary): https://www.lesswrong.com/posts/3TCYqur9YzuZ4qhtq/meta-ai-announces-cicero-human-level-diplomacy-play-with
- Thinking Machines, "Defeating Nondeterminism in LLM Inference": https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/
- OpenAI seed guidance: https://cookbook.openai.com/examples/reproducible_outputs_with_the_seed_parameter
- Anthropic model deprecations: https://platform.claude.com/docs/en/about-claude/model-deprecations
- CosmWasm floats: https://book.cosmwasm.com/basics/fp-types.html
- Macaroons (NDSS 2014): https://research.google/pubs/pub41892/
- OCI 1.1: https://opencontainers.org/posts/blog/2024-03-13-image-and-distribution-1-1/
- EPUB OCF: https://www.w3.org/TR/epub-33/
- USDZ spec: https://openusd.org/dev/spec_usdz.html
- SQLite as application file format: https://sqlite.org/appfileformat.html
- Unison: https://www.unison-lang.org/docs/the-big-idea/. Nix store path: https://nix.dev/manual/nix/2.22/protocols/store-path
- SC2 replay determinism (forum and wiki summaries): https://wiki.sc2ai.net/Troubleshooting
