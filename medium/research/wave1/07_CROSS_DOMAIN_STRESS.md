# 07 · Cross-domain stress test (Agent 7: Science + Enterprise)

**Labels.** Every matrix cell is **HYPOTHESIS** (reasoned from specs, docs and a few code reads; nothing was run) unless a claim is tagged **EARNED** (I read code that does it). No cross-product **RECURRING** claim is made; that is the parent's call. Codes: **S** survives · **M** survives with modification · **F** fails · **V** vertical-specific pretending to be universal.

**Bottom line.** No primitive survives all five domains unmodified. What survives is a generalized core: state + rules + typed clocks + append-only record + per-value epistemic status + ex-ante commitment + model-only forks. Everything about *agency* (actor, role, authority, obligation, negotiation) is universal only across the social domains and absent in chemistry and biology. The Commissioner is a league artifact.

## Matrix

| Primitive | Chem | Bio | Air | Supply | Org |
|---|---|---|---|---|---|
| System / World | M model, not institution | M coupled models | M open; truth is outside | M federation | S |
| Actor | F (only the experimenter) | F | S (+automation) | M firms, agents | S |
| Role | F | F | M statutory | M relational | M formal ≠ real |
| Authority | F | F | M external, overridable | M consent, unenforced | M informal |
| Seat-scoped knowledge | M instrument channel | M model-relative | M add staleness | S | M tacit follows person |
| Action vs event | M interventions only | M events unloggable | S | S | S |
| Authoritative clock | M multi-rate | M multi-rate | F many clocks | F no global now | M |
| Commissioner-as-time | V | V | V | V | V |
| History / record | M path-independent | S | M custody | M N records | M precedent |
| Moment | M predict-commit | M question opens | S | S | S |
| Fork / WHAT IF | S real replicates | M fork the model | M no writeback | M others react | M |
| Lab "never a 2nd actual history" | M inverted | S | S essential | M fix "others unchanged" | S |
| Truth grammar (7) | M | M | M | M | M |
| Knowability-at-act | M | M | S | S | M |
| Causal lineage | M cycles | F authored | S | M nobody sees all | M |
| One truth → many views | S (caveat) | M coarse-graining | S | M records differ | M |
| Place / spatial carrier | M apparatus | S | S | M network | V metaphor |
| Responsibility | F | F | S | S | S |
| Negotiation / agreement | F | F | M request→clearance | M non-atomic | M |
| Receipt / provenance | M | M | M custody, identity | M two-party | S |
| Court/Film (multi-resolution episode) | M | M | M | M | M |

## What the code showed (EARNED unless noted)

1. **Chemistry's "one truth, many views" is one model plus slaved illustration.** Macro `alpha` relaxes toward `aeq(T,V)`. The micro layer is *derived from it*: `targetM = 2*round(40*alpha)`, then particles are split or merged with unseeded `Math.random` (Chemistry.dc.html:245-252). Micro does not produce macro; 40 particles cannot show a law of large numbers. The page says "the same gas, magnified", and the file never marks the particles GENERATED (no `generated`/stipple hit). W3 rule 3 requires seeded PRNGs. The two clocks are an authored disclosure, not an engine (line 127).
2. **Biology has no multi-scale engine.** It is a lookup `READ[scale][reading][pace]` with a texture tag per cell (Biology.dc.html:463-484). OBSERVED is applied to textbook consensus ("older books say 36–38 (verify)"). The lactate walk is labelled authored. UNKNOWN (line 481) means "this board doesn't know", not "nobody knows".
3. **The engines are discrete.** `LessonModule` is `phases` plus a pure `reduce` (W:runtime/src/shared/lessonModule.ts:173-181). X3Engine is a DAG of `computeFn` nodes (SPEC_W3_EXECUTE.md:102-103), with no cycles. Court dice are server-sealed HMAC-seeded streams (secret.ts:23) and a possession is never re-rolled (courtWorld.ts:3-17).
4. **W already has a model-boundary refusal** (doc claim): Lab reports "unsupported rather than guessed" (LAB.md:11). That seeds missing primitive #1.

## Findings by cluster

**Two mediums under one name.** Institutional worlds have actors. Natural-system worlds have an *investigator, an instrument and a model*. Chemistry's real primitive is "predict, then act, keep the guess beside the result": an ex-ante commit by an observer seat, not a decision by an actor. The "institution remembers" thesis (WORLD_THESIS) is a property of *some* worlds; equilibrium is path-independent by design, so the record survives but "history matters" does not.

**Time.** Airline needs typed clocks (UTC vs local, duty-time accumulators, clearance expiry, slots) and time that does not wait. Supply chains have no global "now". Chemistry is stiff. W's ADR already found Harbor and NBA calendars and authority differ (ADR:11). Split what W fuses: **time authority** (who advances; sports-only) and **time cut** (what was knowable at t; universal). Caveat (reasoned, untested): X3Lockstep hash agreement needs bit-exact folds, but ECMAScript's `Math.exp` is implementation-approximated and Chemistry calls it.

**Truth grammar.** The idea survives everywhere; the seven do not. (i) COMPUTED means "exact consequence of stipulated rules" (a cap table). Empirical laws (ideal gas, weather) are always MODELED with an envelope, so that boundary is a constitutive-rules assumption. (ii) OBSERVED has no uncertainty, resolution, censoring ("below detection limit") or age. (iii) Forecasts are MODELED statements to be scored against actuals; no resolve-against link exists. (iv) A counterparty's claim (a supplier's ship date) is neither AUTHORED nor OBSERVED; it needs an attributed **ASSERTED** status. (v) Composite values ("43 min modeled + 5 recorded") need a weakest-link propagation rule. (vi) UNKNOWN conflates sealed future, board ignorance and nobody-knows.

**Fork / Lab.** Airline makes "never a second actual history" essential: fork must be structurally unable to write back, and a fork of "now" is stale on arrival. Chemistry inverts it: a physical replicate *is* another actual history, so the split becomes RECORDED-replicate vs MODELED-run. Supply chain breaks Lab's intervention rule, "later recorded decisions replayed unchanged" (LAB.md:11), because counterparties react to your changed order; forks need a declared reaction policy for others. Biology needs a **model-fork** (same history, rival mechanism); W forks vary acts, not models.

**Authority and writeback.** Airline authority is layered, external and overridable with after-the-fact justification; BOW's check is binary ACCEPTED/REFUSED against a closed, world-owned rulebook. Supply-chain "authority" is peer consent; breach *happens* and is recorded, not prevented. Both need a **typed, gated, irreversible commit port distinct from the fork** (Enterprise board: "locked · requires authorization, not connected"). Harbor↔League is the earned precedent for federation over merger, but it avoids "a distributed payment transaction" (ADR). Supply chain needs exactly that, long-running with compensation. The Handshake's "one atomic event" (SPEC_PLATFORM.md:76) leans on a League Office coordinator that supply chains lack. *V.*

**Seat-scoped knowledge** is the strongest agency survivor: cockpit vs dispatch vs ATC; bullwhip *is* inference from downstream orders. But X3Seats' leak auditor (SPEC_W3_EXECUTE.md:224) presumes a complete god's-eye fact store, which real supply chains lack. In science the ACL becomes an observation channel with noise. In organizations knowledge partly travels with the occupant, contradicting "the seat keeps its history" (Agent board).

**Court/Film generalizes, probably.** It is a **multi-resolution episode**: coarse model everywhere, a fine recorded episode at the point of consequence, replayable, coupled back through a declared interface. Real practice: kinetic Monte Carlo inside mean-field chemistry, Gillespie inside pathway ODEs, a recovery sim inside a fleet plan. W's interface is one scalar (score at handover); elsewhere it is a flux or distribution needing closure. *HYPOTHESIS; best candidate for a genuinely new universal, earned only in sports.*

**Lineage and receipts.** "Every number knows why" fails on feedback and simultaneity (equilibrium constraints are not a DAG), partly unknown mechanism (authored narrative) and federated knowledge (no seat traces the whole why). A hash chain proves the *log* is unaltered, not that the sensor or signer was honest; DC says so ("not authenticity, real identity, institutional custody"). Airline and organizations need identity and custody, which BOW refuses today; supply chains need two-party attestation.

## Explicit refusals to generalize (they bind this exercise)

- E-main CLAUDE.md §10: other domains are "separate products/courses", "build no world selector, motif system". §12: no shared engine "from two data points". This test informs DF/platform research only.
- W ADR: no "universal club runtime". W LAB: "Do not label the current feature a general-purpose simulation Lab".
- DC receipt: no connector, writeback or "generic integration kernel". SPEC_ENTER_TRANSFER: say so when a transfer only pastes Boston furniture.

## (a) Survivors across all five, as generalized cores

1. State + rules + record, stripped of "institution/owner/persistent".
2. Per-value epistemic status (needs the splits above).
3. **Ex-ante commitment**: prediction or decision committed before the outcome and kept beside it.
4. **Time cut**, decoupled from time authority.
5. **Model-only fork** with a hard no-writeback invariant.
6. Receipt as tamper-evidence, with the sensor/identity limit named.
7. Typed absence (NO ACT, null-not-zero, SPEC_W3_EXECUTE.md:304), extended with censoring.
8. Seat as an *observation position* (needs channel, noise, staleness).

## (b) Exposed as vertical-specific

Commissioner-as-time-authority; League Office as referee and atomic-commit coordinator; the closed world-owned rulebook (COMPUTED = exact); "history matters" as a law; server dice as the source of randomness; place as a world primitive (a renderer choice); `phases`/`reduce` as world contract; agency primitives as universal (true only for agent worlds).

## (c) Missing primitives, ranked

1. **Model validity envelope and out-of-envelope refusal**, distinct from authority refusal. Every domain's what-if outside its envelope is fabricated confidence. Seed exists (LAB.md:11).
2. **Quantified uncertainty and freshness**: error, resolution, censoring, age, ensembles, forecast-to-be-scored.
3. **External authority plus physical-world writeback boundary** (gated, irreversible commit port).
4. **Multi-scale coupling**: declared coarse-graining maps, closures, composite-status propagation (generalizes Court/Film).
5. **Typed multiple clocks; time that does not wait.**
6. **Federated multi-party records with reconciliation**; sagas, not atomic commit.
7. **Continuous dynamics and numerical determinism**, including cyclic/constraint lineage.
8. **Competing models vs observation** (model-fork, falsification).
9. Tacit knowledge and precedent as normative history: probably stays outside the medium (UNKNOWN by design).

## Sources

- DF:README.md (truth grammar; boards); DF:briefs/w2/W2_BAR_AND_FIXTURES.md:98-114; DF:briefs/w2/SPEC_ENTER_TRANSFER.md (thesis-honesty rule, Harrow); DF:briefs/w2/SPEC_PLATFORM.md:76 (Handshake); DF:briefs/w3/SPEC_W3_EXECUTE.md:102-103, 224, 304.
- DF:canvas/Chemistry.dc.html:127,215-216,245-252; DF:canvas/Biology.dc.html:463-484; DF:canvas/Enterprise.dc.html, Agent.dc.html, Network.dc.html (visible text).
- DC:docs/campaign/bow-consequential-os-ultra-20260925/DECISION_RECEIPT_V1.md; RESPONSIBILITY_CONTRACTS.md (doc claims).
- W:docs/campaign/bow-worlds-complete-ultra-20260925/WORLD_THESIS.md; LAB.md:11; MOMENTS.md; INSTITUTION_RELATIONSHIP_ADR.md:11 (doc claims).
- W:runtime/src/shared/lessonModule.ts:173-181; W:runtime/src/modules/worldOne/secret.ts:23; W:runtime/src/modules/worldOne/courtWorld.ts:3-17.
- E-main:CLAUDE.md §10, §12 (refusals).
