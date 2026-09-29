# 08 · Radical futures: architectural pressures on BOW's core semantics

Premise: BOW succeeds dramatically (billions of systems, nesting, AI actors, multi-year branches, devices, writeback, foreign runtimes, creators, executable media). Method: take a semantic BOW has today, push one condition, find the break. Nothing below is EARNED. Today's facts are marked **(code)** or **(doc)**.

Ground facts:
- **(code)** One log per World. Order is `(actor-clock t, id)`; acts up to 10 s ahead are admitted; seals are *recomputed over that sorted order*; an act's `prev` is only annotated "concurrent" (live-world.src.html:400-403, 507-513, 1132). A derived order, not a write-time commitment.
- **(code)** Two clock models coexist: wall-paced fold, 1 day = 1 hour (X3Lockstep), and Commissioner-advanced `stop` with server `seq` (W league.ts:173).
- **(code)** Fold purity is checked by the author's own regex scan (X3Lockstep.dc.html:470); the runtime never inspects module state (E-main lessonModule.ts:1-25).
- **(doc)** No model ran in the agent board (Agent.dc.html:350); AI actor trial "not run"; "only typed actions may enter saved game state" (W AI_ACTOR_RND.md:3-5). No writeback; receipts prove consistency "under the pinned model, not authenticity" (DC receipt:21, 29). Bridge: symmetric HMAC, recognition-only (bridge README:103-121).

## Pressures

**P1 · One chain per World vs composition and nesting.** *Where:* `h=sha(h+canon(ev))`, per-World genesis, `bow://…#hash8` (X3Proof.dc.html:308-316, 141). *Failure:* a linear chain orders one World only. A cross-World act (Handshake's "atomic, 3 books") lands in two chains and neither hash covers the other. A parent nesting children must fold every child act into its head (Merkle churn) or stop proving the child. `hash8` is 32 bits: birthday collisions near 10^4–10^5 addresses. *At:* first shared act between Worlds. *Survives:* per-World chains, plus bilateral signed cross-references (A#n ↔ B#m, full hashes) forming a DAG of heads, never a merged chain. **HYPOTHESIS.**

**P2 · One clock vs composed clocks.** *Where:* "state at t includes only acts ≤ t" (SPEC_W3_EXECUTE.md:308); actor-clock sort (live-world.src.html:400-403). *Failure:* paced and stop-advanced clocks share no "at T". A late act with an earlier `t` re-sorts the log, so seals a viewer already saw change; `nextActTime` protects only honest clients (:521-523). *At:* any offline actor or drift beyond the skew; any two clock kinds composed. *Survives:* order by causal position (log index plus heads seen); time becomes a derived label from a declared clock kind per World. **HYPOTHESIS.**

**P3 · Seat leases and decision-time information at 1000× speed.** *Where:* lease guards only claiming (`ttlMs:5000`, SPEC_LIVE_WORLD.md:95-101); first-counted-act rules M-3/M-4 (live-world.src.html:274-275); human-scale deadlines (denver-call ≈2 real hours). *Failure:* an AI seat sees each new visible fact and acts in milliseconds, winning every human window by construction. It can flood offers and split orders under a per-order warrant (Agent.dc.html:344-345 refuses splits within one morning only). *At:* first AI seat facing a human deadline. *Survives:* fairness as a fold-visible property of the seat or matter: minimum deliberation interval, per-seat act budget, sealed-until-deadline resolution, rolling aggregate limits in the warrant. **HYPOTHESIS.**

**P4 · Nondeterministic LLM actors vs replay.** *Where:* fold "reads no Math.random/Date" (X3Lockstep:470); "replays under the pinned model" (DC receipt:11). *Failure:* the actor cannot be in the fold, so replay proves what was done, never why; a what-if on an AI seat cannot be replayed; deprecated models cannot be re-run. *At:* first what-if on an AI seat. *Survives:* actors stay outside the fold; the log holds typed acts plus observation digest, model id and version; after a fork a fresh actor's acts are GENERATED, never OBSERVED. **HYPOTHESIS.**

**P5 · Fork explosion.** *Where:* "a fork never overwrites the record"; Lab replay (W LAB.md:3); receipts carry the whole transcript, capped 1 MiB / 1,000 commands (DC receipt:11). *Failure:* every fork needs the parent prefix, and `bow://` addresses circulate in articles, so reachability is unknowable and garbage collection unsafe. 30 students × 10 Moments = 300 branches per class; 10^5 classes = 3×10^7. Prefix dedup saves storage, not replay compute. *Survives:* branch = `(parent head, delta, rules hash)`, content-addressed; retention classes (anchored versus ephemeral); an expired branch resolves to a tombstone head (UNKNOWN, not deleted). **HYPOTHESIS.**

**P6 · Rule and schema evolution over years.** *Where:* "same-label source edit refuses the proof" (DC receipt:11, **doc**); acts carry no rules hash (live-world.src.html:401). *Failure:* `fold(rules_vN, log)` needs vN forever, and each retained version is executable code with bugs. Upgrading a branch changes past outcomes: v1's or v3's? *At:* first rule edit to a World with live branches (already visible: DC refuses edits). *Survives:* immutable content-addressed rule sets, each state citing its hash; migration is an attributable act yielding a new branch; no pooling across versions (DC-main CLAUDE.md §2). **HYPOTHESIS.**

**P7 · Provenance and liability when acts write back (devices included).** *Where:* "a modeled alternative is never a second actual history" (LAB.md:3); "Undo branch returns" (SPEC_W3_EXECUTE.md:167); bridge `effect: recognition-only` (bridge README:49-55). *Failure:* a real payment cannot be undone; a fork before it is a counterfactual the real world contradicts. Only compensating acts exist. Needed: intent → authority → effect id → confirmation, which may never arrive (DC receipt:9). Devices add latency. *At:* first real action. *Survives:* two-phase acts (intent, effect receipt, UNKNOWN between), idempotency keys, compensation-as-append, warrants capping irreversible exposure, a class marker so forks cannot "actualize" a writeback World. **HYPOTHESIS.**

**P8 · Identity, attestation, delegation.** *Where:* `by: user id` (SPEC_LIVE_WORLD.md:103-109); occupant kind "AI MODEL" is a label (Agent.dc.html:298-299); "no cryptographic signature by BOW" (:208-209); "a seat is not a person" (bridge README:32-36). *Failure:* human → agent → sub-agent → tool collapses to one `by`; sub-agents multiply seats (Sybil) past a per-seat warrant; symmetric keys let either side forge both. *At:* first delegating agent. *Survives:* act = (seat, warrant version, occupant chain, executor signature); delegation only narrows. Chains **SPECULATIVE FRONTIER**; typed occupants **HYPOTHESIS.**

**P9 · Seat-scoped privacy; inference across forks.** *Where:* leak auditor checks displayed fact ids (X3Seats); public state hash. *Failure:* a hash over a small state space is an oracle; a fork of seat-scoped state must carry private facts to fold; an agent with 1000× what-ifs (X3Engine reverse search) infers hidden variables from outcome differences. *At:* first shared branch containing private acts. *Survives:* salted per-seat commitments, selective-disclosure logs, a what-if budget per seat. **HYPOTHESIS.**

**P10 · Licensed live Reality feeds.** *Where:* OBSERVED status; public verifiable "Reality" chain (X3Proof); NBA-facing route "not licensed" (W SOURCE_RIGHTS_MODEL_CARD.md:5-7, **doc**). *Failure:* logging a feed into a publicly verifiable chain is redistribution; verification needs plaintext; forks are derivatives; licences lapse but logs are append-only; vendor corrections do not append. *At:* first licensed feed. *Survives:* chain commits to digests, payload held under licence; each OBSERVED fact carries licence id and permitted uses (record, replay, fork, redistribute), a rights axis separate from epistemic status; correction events; forks expire with the licence. **HYPOTHESIS.**

**P11 · Malicious creator systems.** *Where:* pure-by-convention modules; lockstep means every viewer runs the creator's code. *Failure:* a hostile `reduce` loops, bloats state or reads ambient time; each `studentView` is a data channel for another seat's fact; indirect calls likely defeat the regex scan (reasoned, not run). *At:* first non-team creator. *Survives:* deterministic sandboxed modules with fuel (so replicas agree on termination), no ambient effects, state caps (DC's 1 MiB is a start), runtime-applied view redaction. **HYPOTHESIS.**

**P12 · Representation compute at billions.** *Where:* "compute is spent only when someone looks" (SPEC_W3_EXECUTE.md:358). *Failure:* recompute-from-seed per viewer costs O(ticks×acts): 8,760 ticks a year at Live pace, ~10^7 acts a year at 1000×; AI viewers never stop looking. *Survives:* checkpoints `(head, state hash, rules hash)`, incremental fold, sampled verification. **HYPOTHESIS.**

**P13 · Discovery over executable systems.** *Where:* reverse search over <5,000 authored combinations, "never ranked by a made-up score" (SPEC_W3_EXECUTE.md:129-135). *Failure:* behaviour is not text-indexable; ranking becomes unavoidable, hence governance and gaming. *Survives:* search over verified typed claims with a verification tier per result; plural, disclosed rankings. **SPECULATIVE FRONTIER.**

**P14 · Trust in third-party runtimes.** *Where:* "identical fold in every browser" (same code); "fixture exchange proves compatibility only" (bridge README:13-15). *Failure:* a foreign runtime diverges on floats, tie-breaks, canonical JSON; without shared golden vectors "compatible" is unfalsifiable. *Survives:* a conformance vector suite as the spec; a trust tier per record (RE-EXECUTED, ATTESTED, CLAIMED). **HYPOTHESIS.**

**P15 · Governance of shared public systems.** *Where:* `world/canon` owner-written (SPEC_LIVE_WORLD.md:69-70); Commissioner advances time (W league.ts:91). *Failure:* rule-author, clock-advancer and canon-writer are single points; a rule change reinterprets the past (P6). *Survives:* rule, clock and canon changes as acts under a declared amendment procedure; fork-as-exit always available. **HYPOTHESIS.**

## (a) Five pressures likely to force core-semantic change EARLY

1. **P2 clocks and order:** visible with two devices; backdating already re-sorts seals.
2. **P3+P4 AI seat:** one bot plus one human deadline exposes the race and the replay hole.
3. **P6 rule pinning:** one rule edit with live branches; acts carry no rules hash.
4. **P7 writeback:** the first real action makes fork and undo semantics false.
5. **P11 hostile module:** the first outside creator turns a convention into an attack surface.

## (b) Semantics that survive all pressures

- Append-only log of typed acts is the only truth; state is a pure fold over `(rules hash, log)`; actors, feeds and devices sit outside it.
- Seat = authority + information scope + history; occupants swap; refusals are recorded.
- A fork never overwrites; branch = `(parent head, delta, rules pin)`; modeled is never actual.
- Typed absence and UNKNOWN are first-class; every statement carries status, source, version.
- Boundaries are pairwise, revocable, closed-schema, marked "not evidence". Refusals hold: no merged chain, no universal learner id.

## (c) One cheap experiment per top pressure (proposed; none run)

1. **Clocks:** deliver an act with `t` 9 s early after a viewer sealed later acts; diff the seals. Try one act spanning a paced and a stop-advanced toy World.
2. **AI seat:** script a 0 ms bot Denver in local mode; count human wins over 20 offers. Try expressing "sealed until deadline" in the R/S/M rules; if impossible, no time-fairness primitive exists.
3. **Rule pin:** change roster 15→14, refold a 50-act log; count `counted` flips; check whether the fold can say which rules an act was made under.
4. **Writeback:** add an act kind posting to a local sink that can fail; fork before it, undo; check whether the record can express intent, unknown effect, compensation.
5. **Hostile module:** a 20-line reducer (busy loop, huge state, view leaking another seat's fact, indirect Date) through the regex scan and a fold harness.

## Sources

- DF:briefs/w3/SPEC_W3_EXECUTE.md:129-135, 167, 308, 358
- DF:briefs/w3/SPEC_LIVE_WORLD.md:69-70, 95-109, 208-209
- DF:live/live-world.src.html:274-275, 400-403, 507-513, 521-523, 1132
- DF:canvas/X3Proof.dc.html:141, 308-316
- DF:canvas/X3Lockstep.dc.html:470
- DF:canvas/Agent.dc.html:113, 298-299, 344-350
- DF:canvas/NetworkHandshake.dc.html:263-265, 333 (Network.dc.html is parked, superseded by Handshake)
- DC:docs/campaign/bow-consequential-os-ultra-20260925/DECISION_RECEIPT_V1.md:9, 11, 21, 29
- DC-main:CLAUDE.md §2
- W:docs/campaign/bow-worlds-complete-ultra-20260925/{AI_ACTOR_RND.md:3-5, LAB.md:3, SOURCE_RIGHTS_MODEL_CARD.md:5-7}
- W:contracts/bridge/bow-bridge-1/README.md:13-15, 28-36, 49-55, 103-121
- W:runtime/src/modules/worldOne/league.ts:91, 173
- E-main:runtime/src/shared/lessonModule.ts:1-25
