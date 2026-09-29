# 07 · Cross-domain stress test (Agent 7: Science + Enterprise)

**Labels.** Every matrix cell is **HYPOTHESIS** (reasoned from specs, docs and a few code reads; nothing was run) unless a claim is tagged **EARNED** (I read code that does it). No cross-product **RECURRING** claim is made; that is the parent's call. Cell codes: **S** survives · **M** survives with modification · **F** fails · **V** vertical-specific pretending to be universal.

**Bottom line.** No primitive survives all five domains *unmodified*. What survives is a generalized core: **state + rules + typed clocks + append-only record + per-value epistemic status + ex-ante commitment + model-only forks**. Everything about *agency* (actor, role, authority, obligation, negotiation) is universal only across the social domains; it is absent in chemistry and biology. The Commissioner is a league artifact.

## Matrix

| Primitive | Chem | Bio | Air | Supply | Org |
|---|---|---|---|---|---|
| System / World | M model, not institution | M lattice of coupled models | M open; truth is outside | M federation of Worlds | S |
| Actor | F (only the experimenter) | F | S (+automation) | M firms, agents | S |
| Role | F | F | M statutory, credentialed | M relational (by contract) | M formal ≠ real |
| Authority | F | F | M external, overridable | M consent, unenforced | M informal |
| Seat-scoped knowledge | M instrument channel | M model-relative | M add staleness | S | M tacit follows person |
| Action vs event | M interventions only | M events unloggable | S | S | S |
| Authoritative clock | M multi-rate | M multi-rate | F many clocks, no pause | F no global now | M |
| Commissioner-as-time | V | V | V | V | V |
| History / record | M path-independent by design | S | M custody | M N records | M precedent |
| Moment | M predict-commit | M question opens | S | S | S |
| Fork / WHAT IF | S real replicates | M fork the model | M no writeback | M others react | M |
| Lab "never a 2nd actual history" | M inverted | S | S essential | M fix "others unchanged" | S |
| Truth grammar (7) | M | M | M | M | M |
| Knowability-at-act | M | M | S | S | M |
| Causal lineage | M cycles, constraints | F authored | S | M nobody sees it all | M |
| One truth → many views | S (caveat) | M coarse-graining | S | M records differ | M |
| Place / spatial carrier | M apparatus | S | S | M network | V metaphor |
| Responsibility | F | F | S | S | S |
| Negotiation / agreement | F | F | M request→clearance | M non-atomic | M |
| Receipt / provenance | M | M | M custody, identity | M multi-party | S |
| Court/Film (multi-resolution episode) | M | M | M | M | M |

## What the code showed (EARNED unless noted)

1. **Chemistry's "one truth, many views" is one model plus slaved illustration.** The macro state `alpha` relaxes toward `aeq(T,V)`. The micro layer is *derived from it*: `targetM = 2*round(40*alpha)`, then particles are split or merged with unseeded `Math.random` (Chemistry.dc.html:245-252). Micro does not produce macro. Forty particles cannot show a law of large numbers. The page says "the same gas, magnified" and never marks the particles GENERATED (no `generated`/stipple hit in the file). W3's own rule requires seeded PRNGs for random content. Two clocks are handled by an authored disclosure, not an engine (line 127).
2. **Biology has no multi-scale engine.** It is a lookup table `READ[scale][reading][pace]` with a texture tag per cell (Biology.dc.html:463-484). "OBSERVED" is applied to textbook consensus ("OBSERVED: current textbook estimate; older books say 36–38 (verify)"). The lactate walk is labelled "authored". UNKNOWN is used honestly (line 481) but means "this board doesn't know", not "nobody knows".
3. **The engines are discrete.** `LessonModule` is `phases` plus a pure `reduce` (W:runtime/src/shared/lessonModule.ts:173-181). X3Engine is a DAG of `computeFn` nodes (spec X1), with no cycles. Court dice are server-sealed HMAC-seeded streams (W:…/worldOne/secret.ts:23), and a possession is never re-rolled (courtWorld.ts:3-17).
4. **W already has a model-boundary refusal.** Lab returns "unsupported rather than guessed" (LAB.md, doc claim). That is the seed of the top missing primitive below.

## Findings by cluster

**Two mediums hide under one name (M/F rows above).** Institutional worlds have actors; natural-system worlds have an *investigator, an instrument and a model*. Chemistry's real BOW primitive is "predict, then act, and keep the guess beside the result" (Chemistry board). That is an ex-ante commit by an observer seat. It is not a decision by an actor. *HYPOTHESIS.* The "institution remembers" thesis (W:WORLD_THESIS) is a *property of some worlds*: equilibrium is path-independent by design, so record survives but "history matters" does not.

**Time.** Airline, supply chain and chemistry break "one authoritative clock advanced by a Commissioner". Airline needs typed clocks (UTC vs local, duty-time accumulators, clearance expiry, slot times) and time that *does not wait*. Supply chain has no global "now"; each firm has its own cutoffs and lead times. Chemistry is stiff (multi-rate). W's own ADR already found that Harbor and NBA "calendars … authority are different" (INSTITUTION_RELATIONSHIP_ADR). Split two ideas that W fuses: **time authority** (who advances; sports-only) and **time cut** (what was knowable at t; universal). Numerical caveat: X3Lockstep's SHA-256 state-hash agreement assumes bit-exact folds. `Math.exp` is implementation-approximated in ECMAScript and the Chemistry board calls it, so continuous folds may hash differently across engines. *HYPOTHESIS, reasoned, untested.*

**Truth grammar.** The *idea* (per-value epistemic texture) survives everywhere; the *seven* do not. Gaps: (i) COMPUTED means "exact consequence of stipulated rules" (a cap table, a contract). Empirical laws (ideal gas, Beer–Lambert, weather) are always MODELED with an envelope, so the COMPUTED/MODELED line is a constitutive-rules assumption and sports-specific. (ii) OBSERVED has no uncertainty, resolution, censoring ("below detection limit") or age. (iii) Forecasts (weather, demand) are MODELED statements *scheduled to be scored against actuals*; there is no resolve-against link. (iv) A counterparty's claim (a supplier's ship date, a rival's statement) is neither AUTHORED-by-BOW nor OBSERVED; it needs an attributed **ASSERTED** status. (v) Composite values ("43 min modeled + 5 min recorded") have no status; a weakest-link propagation rule is needed. (vi) UNKNOWN conflates *sealed future*, *this board doesn't know* and *nobody knows*.

**Fork / Lab.** Airline is where "a modeled alternative is never a second actual history" is essential: real actions cannot be forked back, so fork must be *structurally unable to write back*, and a fork of "now" is stale on arrival. Chemistry *inverts* the rule: a physical replicate **is** another actual history, so ACTUAL vs MODELED must be replaced by RECORDED-replicate vs MODELED-run. Supply chain breaks the Lab's own intervention rule: "later recorded decisions replayed unchanged" (LAB.md) is false when counterparties react to your changed order (that is the bullwhip). Forks need a declared *reaction policy for others* (declared, modeled or UNKNOWN). Biology needs a **model-fork** (same history, rival mechanism), which W's forks do not vary.

**Authority and writeback.** Airline authority is layered, external and *overridable with after-the-fact justification* (pilot-in-command, ATC clearance); BOW's rule check is binary ACCEPTED/REFUSED against a closed, world-owned rulebook. Supply-chain "authority" is consent between peers; breach *happens* and is recorded, not prevented. Both need a **typed, gated, irreversible commit port distinct from the fork** (Enterprise board: "locked · requires authorization, not connected"; DC receipt: "no … writeback"). The Harbor↔League seam is the earned precedent for *federation over merger* but explicitly avoids "a distributed payment transaction" (ADR). Supply chain needs precisely that, and it is long-running with compensation, not atomic. SPEC_PLATFORM's Handshake "atomic commit" leans on a League Office coordinator that supply chains lack. *V.*

**Seat-scoped knowledge** is the strongest survivor of the agency set. It maps cleanly onto airline (cockpit vs dispatch vs ATC) and supply chain (bullwhip *is* inference from downstream orders). But X3Seats presumes a complete god's-eye fact store for its leak auditor, and real supply chains have none. In science the ACL becomes an *observation channel with noise*. In organizations, knowledge partly travels with the *occupant*, which contradicts "the seat keeps its history" (Agent board). Handover is lossy by construction.

**Court/Film generalizes, probably.** It is a **multi-resolution episode**: coarse model everywhere, a fine-grained recorded episode at the point of consequence, replayable, coupled back through a declared interface. That is real practice (kinetic Monte Carlo inside mean-field chemistry, Gillespie inside pathway ODEs, a tactical recovery sim inside a fleet plan, a warehouse sim inside S&OP). W's interface is one scalar (score at handover). Outside sports the interface is a flux or distribution and needs a *closure* and a bias check. Chem/bio: randomness is physical (OBSERVED), not server-dice (GENERATED). *HYPOTHESIS, best candidate for a genuinely new universal, earned only in sports.*

**Causal lineage** ("every number knows why") fails on feedback and simultaneity: in equilibrium, constraints determine all variables at once, and a DAG of `computeFn` cannot show that. Where mechanism is partly unknown (biology) the walk is authored narrative. Where knowledge is federated (supply chain) no seat can trace the whole why.

**Receipts.** A hash chain proves the *log* was not altered. It does not prove the sensor, the signer or the party was honest. DC states this outright ("not authenticity, real identity, institutional custody"). Verification stops at the sensor in all five domains. Airline and organizations need authenticated identity and custody, which BOW refuses today. Supply chain needs *two-party* attestation (three-way match).

## Explicit refusals to generalize (they bind this exercise)

- E-main CLAUDE.md §10: other domains are "separate products/courses … not selectable motifs"; "build no world selector, motif system". §12: "Don't extract a shared 'economics engine' … from two data points". This stress test informs DF/platform research only.
- W ADR: "does not support … installing one universal club runtime"; W LAB: "Do not label the current feature a general-purpose simulation Lab".
- DC receipt: no connector, writeback or "generic integration kernel". DF `SPEC_ENTER_TRANSFER`: say so when a transfer only pastes Boston furniture.

## (a) Survivors across all five, as generalized cores

1. State + rules + record, with "institution/owner/persistent" stripped (M in all five).
2. Per-value epistemic status (needs splits above).
3. **Ex-ante commitment** (Moment → prediction/decision committed before the outcome and kept beside it).
4. **Time cut** (what was knowable at t), decoupled from time authority.
5. **Model-only fork** with a hard no-writeback invariant.
6. Receipt/provenance *as tamper-evidence*, with the sensor/identity limit named.
7. Typed absence (NO ACT / null-not-zero), extended with censoring.
8. Seat as an *observation position* (needs channel, noise, staleness).

## (b) Exposed as vertical-specific

Commissioner-as-time-authority; the League Office as single referee and atomic-commit coordinator; the closed, world-owned rulebook (COMPUTED = exact); "history matters" as a law; server-authored dice as the source of randomness; place as a world primitive (it is a renderer choice); `phases`/`reduce` as the world contract; and actor/role/authority/obligation/negotiation as universal (true only for agent worlds).

## (c) Missing primitives, ranked

1. **Model validity envelope + out-of-envelope refusal**, distinct from authority refusal. Every domain's what-if outside its envelope is fabricated confidence. Seed exists (Lab "unsupported").
2. **Quantified uncertainty and freshness**: error, resolution, censoring, age, ensembles, forecast-to-be-scored.
3. **External authority + physical-world writeback boundary**, with a gated irreversible commit port.
4. **Multi-scale coupling**: declared coarse-graining maps, closures, composite-status propagation (generalizes Court/Film).
5. **Typed multiple clocks; time that doesn't wait.**
6. **Federated multi-party records with reconciliation**; sagas, not atomic commit.
7. **Continuous dynamics and numerical determinism**, including constraint/cyclic lineage.
8. **Competing models vs observation** (model-fork, falsification).
9. Tacit knowledge and precedent as normative history: probably should stay outside the medium (UNKNOWN by design).

## Sources

- DF:README.md (truth grammar summary; boards list); DF:briefs/w2/W2_BAR_AND_FIXTURES.md (truth-grammar rules); DF:briefs/w2/SPEC_ENTER_TRANSFER.md (thesis-honesty rule, Harrow); DF:briefs/w2/SPEC_PLATFORM.md (Handshake, DevWorldtools); DF:briefs/w3/SPEC_W3_EXECUTE.md (X1-X4).
- DF:canvas/Chemistry.dc.html:127,215-216,245-252; DF:canvas/Biology.dc.html:463-484; DF:canvas/Enterprise.dc.html (visible text); DF:canvas/Agent.dc.html (visible text); DF:canvas/Network.dc.html (visible text).
- DC:docs/campaign/bow-consequential-os-ultra-20260925/DECISION_RECEIPT_V1.md; …/RESPONSIBILITY_CONTRACTS.md (doc claims).
- W:docs/campaign/bow-worlds-complete-ultra-20260925/{WORLD_THESIS,LAB,MOMENTS,INSTITUTION_RELATIONSHIP_ADR}.md (doc claims); W:runtime/src/shared/lessonModule.ts:173-181; W:runtime/src/modules/worldOne/secret.ts:23; W:runtime/src/modules/worldOne/courtWorld.ts:3-17; W:runtime/src/modules/worldOne/league.ts:91.
- E-main:CLAUDE.md §10, §12 (refusals).
