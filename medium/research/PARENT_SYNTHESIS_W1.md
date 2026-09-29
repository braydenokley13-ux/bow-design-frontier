# Parent synthesis after wave 1

This is a working document: the parent's read of reports 01–08 plus the tournament papers. The final deliverables in `medium/` supersede it. Its jobs are to classify every candidate concept, to state which pre-registered hypotheses survived, and to name the concrete gaps wave 2 must close.

## 0. What wave 1 did to the parent's pre-registered hypotheses (`scratchpad PARENT_PREREGISTERED.md`)

| # | Pre-registered | Verdict after evidence |
|---|---|---|
| H1 | System (definition) vs World (instance) | **Held, sharpened.** Both products split a pinned definition from a history-bearing instance: DC's frozen package vs attempt/run; W's rules version plus `LessonModule`/Foundry declaration vs `WorldState`/chapter chain. "World" as *persistent institution* is W-only. DC's attempt is a bounded instance of the same shape. |
| H2 | Knowledge in three layers | **Confirmed, EARNED in DC** (available / opened-with-eventRef / knowable-per-input). **RECURRING in W**: Foundry `availableAtTick` plus audiences, and NBA `LeagueMoment.known[]` with knowledge labels. |
| H3 | Seat as the hinge | **Held.** W derives authority from the authenticated seat plus ledger facts, never from the payload. DC's kernel refuses org/teacher roles as primitives. Harbor exposes the gap: its actors are labels, `humanIdentityVerified:false`. |
| H4 | Bitemporal plus perspective; authority-owned clock | **Held, but corrected by 08/07.** Every product advances time only by an explicit act (the Commissioner's `advance`, Harbor's `advance_day`, the DC learner's `advance`). No product has wall-clock world time. Ordering is `sequence`, and wall time is metadata. DF's Live World orders by actor clock, which **fails** (08 P2, 05 row 3). Time *authority* (who advances) is vertical; time *cut* (what was knowable at position p) is universal (07). |
| H5 | Act vs event is CQRS; refusals recorded | **Held.** DC records refusals, and an opening is itself an act. W refuses stale acts. The CS critic says DF's "act log" is a command log. |
| H6 | The CUT is the missing primitive | **Partly refuted.** Cuts *exist* in both products (DC `beforeAct/afterAct/atSeal`; W `{at, seq}`, stop index, `lifecycle`), but each is local. What is missing is **a shared, verifiable reference to a cut across instances and products**. DC has no global act address and refuses one in writing (01 #2). That is an addressing gap, not a missing concept. See §3: the genuinely missing primitive is the **act basis**. |
| H7 | Orthogonal addressing, two regimes | **Supported by 06** (address survival rules: derived from stable structure, free to mint, naming its frame, composing whole plus part) **and 05** (`ref@digest`). **Contradicted by practice**: five `bow://` grammars, attempt-local strings, 32-bit `hash8`. |
| H8 | Representation law; Direct parity | **EARNED locally in W-3D and RECURRING W↔DC** (03 §1.1, §1.7). The rule "no semantic prop without canonical truth" is refined into R1–R5 (03 §2). |
| H9 | Place conditional | **Converged with 03.** PLACE as canonical state is REJECTED. Spatial attributes that rules read are ordinary state, not "place". A thin state-free place index is a HYPOTHESIS. |
| H10 | Portability levels | Not tested by wave 1. DC Receipt v1 is level 2 (claim plus replay material), synthetic only. **Gap → W2-B.** |
| H11 | Composition as federation | **Supported:** W ADR chose "separate institutions, narrow contracts"; the bridge is recognition-only; 08 P1 proposes bilateral signed cross-references (a DAG of heads). No product has a cross-World *transaction*. |
| H12 | Forks never merge history | **Supported and refined.** Forks must declare a **suffix policy**. DC replays later acts unchanged, the W Harbor Lab drops them, and supply chains need reacting counterparties (07). |
| H13 | Three dialects of one medium | **Strongly confirmed, and worse:** W alone has three unrelated state models, `canonical()` copied six times, and five status vocabularies. DC has four unknown vocabularies and at least four act-ref forms. DF has five `bow://` grammars and three canonical-JSON functions. |
| H14 | Cheapest falsifier: one record for DC plus W, verified by a fresh implementer | **Endorsed independently** by Open and Hybrid ("spec-only clone test") and by 06 ("a stranger replays a five-year-old branch from the spec"). → W2-A performs the paper version now. |

## 1. Structural result: one core, two profiles

The cross-domain stress test (07) plus the two product archaeologies produce the most important structural finding of wave 1. BOW's candidate primitives split cleanly:

- **CORE (every executable system):**
  - a pinned definition and a history-bearing instance;
  - a sequenced record with basis-carrying acts and recorded nondeterministic inputs;
  - cuts;
  - audience-scoped projections returning Fact-or-Unknown;
  - per-value epistemic status;
  - modeled forks that can never write back;
  - validity-envelope refusal;
  - exports with a verification basis.
- **INSTITUTIONAL PROFILE (agent worlds: leagues, firms, airlines, supply chains, classrooms):** seats, occupants, derived authority, obligations/rights, agreements/negotiation, responsibility and typed silence (NO ACT), time-authority roles.
- **NATURAL-SYSTEM PROFILE (chemistry, cells, climate):** observer seat, instrument, measurement with uncertainty/censoring/freshness, rival models, multi-scale coupling, continuous dynamics. **Almost entirely unbuilt in BOW.** The DF Chemistry and Biology boards are "one model plus slaved illustration" and "an authored lookup table" (07 §code).

Agency primitives are not universal (07). Forcing "actor/obligation" onto chemistry is the sports-specific concept "pretending to be universal" that the founder asked to have exposed. Only the core earns medium-level status. The institutional profile is where every BOW product lives today. HYPOTHESIS, with the core items individually labelled below.

## 2. Semantic conflict matrix

Classification rule (founder's): a concept is **CANON-CANDIDATE** only if (A) at least two materially different product contexts independently require it, or (B) correctness, security, privacy or identity demands platform-level semantics.

**Independence caveat.** DC and W are built by overlapping agents under one founder, and they cross-pollinate: W's `bow-bridge-1` mirrors DC's kernel, and DC's `adapters/econLiveFranchise.ts` mirrors W. Recurrence is therefore *partially* independent. A concept counts as A only where the two mechanisms are demonstrably different code arriving at the same semantics.

Source keys: 01 DC, 02 W, 03 spatial, 04 DF, 05 CS, 06 media, 07 cross-domain, 08 futures, T = tournament.

| # | Concept | DC | W (NBA / Harbor / Foundry) | DF | Stress (07/08) | Precedent (05) | **Class** | Why |
|---|---|---|---|---|---|---|---|---|
| 1 | **Pinned-definition fold / verified transition** (state re-derived from pinned rules plus log; refuse on divergence) | EARNED ≥5 families | Harbor EARNED (loads only if canonical-equal to replay); **NBA not replayed** (stored state plus journal) | X3Lockstep | survives; fuel/sandbox needed (08 P11) | Event sourcing, Temporal | **CANON-CANDIDATE** (A+B) as a **declared capability** (REPLAYABLE vs JOURNALED), not a universal invariant | Two mechanisms, same semantics; NBA shows not every World replays |
| 2 | **Exact version discipline** (acts and records pinned to definition versions; refuse, never silently migrate; `null` never means current) | RECURRING | RECURRING (save keeps birth rules; unsupported refused) | acts carry no rules hash (gap) | 08 P6 | Temporal versioning, Unison | **CANON-CANDIDATE** (A+B) | Identical stance, different code |
| 3 | **Act basis** (every mutating act names the state it was decided against; stale acts refused) | v5 server `expectedRevision` CAS plus `requestId` idempotency; info-at-act | `expectRevision`/`expectStop` ×4 guards | — | 08 P2 (causal order) | optimistic concurrency, MVCC | **CANON-CANDIDATE** (A+B) | Write-side twin of knowability (§3) |
| 4 | **Knowability at the act** (available / opened-with-ref / knowable-per-input; comprehension always unknown) | EARNED | RECURRING (`availableAtTick`, audiences, `known[]` labels) | X3Seats horizon | survives in social domains; "observation channel" in science | bitemporal, IFC; **POSSIBLY NEW combination** | **CANON-CANDIDATE** (A) | The CS critic's strongest novelty candidate |
| 5 | **Time advances only by attributable act; ordering by authority-assigned sequence; wall time is metadata** | EARNED (learner `advance`; `sequence`) | EARNED (Commissioner `advance`, Harbor `advance_day`, `{at, seq}`) | Live World wall-paced, actor-clock order: **fails** | airline needs non-waiting time; supply chain has no global now | HLA conservative sync; Lamport | **CANON-CANDIDATE** for sequence ordering (A+B); **clock kind** must be declared per System (act-advanced EARNED; scheduled/external **HYPOTHESIS**) | |
| 6 | **Time-authority role ≠ outcome authority** (Commissioner owns WHEN never WHAT) | none (learner advances) | EARNED (closed verb list) and E-main teacher pacing | — | 07: Commissioner is a league artifact | HLA time management | Commissioner **VERTICAL-SPECIFIC**; the separation principle is a **HYPOTHESIS** (fairness law) | One product line only |
| 7 | **Audience-scoped projection** (pure `view(cut, audience)`; public board never receives a seat) | EARNED (teacher exact reader; private notes redacted per actor) | EARNED (`hqView`, `commissionerView`, `boardView`) | X3Seats | survives | CQRS read models, reference monitor | **CANON-CANDIDATE** (A+B privacy) | Rename "seat-scoped knowledge" → per-audience projection |
| 8 | **Fact-or-Unknown with source path** | present/absent/unmodeled; coded unknowns; `null` not zero | `{actual, value, sourcePath}` or `{unknown, reason}`; `physical:"unknown"` literal | UNKNOWN texture | needs censoring, freshness, uncertainty | HL7 NullFlavor | Primitive **CANON-CANDIDATE** (A); **code set UNRESOLVED** (≥9 vocabularies) | |
| 9 | **Per-value epistemic status axis** | `modeled-analysis`, `not-evidence` | five vocabularies; "actual" = recorded inside the simulation | seven textures (critic-enforced, not code) | needs ASSERTED, quantified uncertainty; UNKNOWN kinds split | SDMX OBS_STATUS, PROV | Axis **CANON-CANDIDATE** (A); **seven-value set HYPOTHESIS**; must be emitted from provenance, never hand-tagged (06 H6) | |
| 10 | **Verification basis** (REPLAYED / SIGNED / ATTESTED / CLAIMED), orthogonal to status | "replay proves consistency, not authenticity" | journal vs replay split | hash chain unsigned | 08 P14 | CT, SCITT, VC | **CANON-CANDIDATE** (B trust), T-derived | Three independent arrivals (T-Open, 08, 07) |
| 11 | **Modeled branch, never a second actual history; no writeback** | EARNED 3 families; SHA-256 branch id | EARNED ×3 Lab (ACTUAL/MODELED/UNKNOWN, withheld when undefined) | honest-fork grammar | essential in airline (07) | `d/with`, SCM counterfactual | **CANON-CANDIDATE** (A+B) | |
| 12 | **Fork suffix policy** (what happens to acts after the intervention) | replay suffix unchanged (fixed policy) | Harbor Lab drops later acts | Living: HELD / DIVERGED | supply chain: counterparties react | CRN vs equilibrium | **UNRESOLVED**: must be *declared per fork*; the options are the open question | Conflict between the products |
| 13 | **Validity envelope / out-of-envelope refusal** | branch returns `null` when unsupported | Lab "unsupported rather than guessed", withheld when undefined | — | 07's #1 missing primitive | DoD VV&A, model cards | **CANON-CANDIDATE** (A) as refusal; the envelope *description* is HYPOTHESIS | Both products refuse; neither describes the envelope |
| 14 | **Recorded nondeterministic inputs** (dice, model outputs, feeds as recorded inputs, never regenerated) | frozen tuples; Avery command recordings | HMAC commit-reveal dice, released one shot at a time | seeded PRNG | 08 P4: AI outputs recorded, post-fork fresh actors GENERATED | Temporal side effects | **CANON-CANDIDATE** (B correctness of replay) | |
| 15 | **Typed silence** (NO ACT, default on no answer, lateness recorded at advance) | typed absences (`not-observed`, `answered-for`, `incomplete`) | "if the owner does not answer, the usual five stay"; lateness recorded at advance | NO ACT in 5/6 verticals | survives in agent worlds | workflow timeouts | **CANON-CANDIDATE** (A) in the institutional profile | |
| 16 | **Seat** (authenticated occupiable position; authority derived from seat plus ledger facts plus rules plus time) | actor authority attached to act; kernel refuses org roles as primitives | EARNED NBA; Harbor labels only | seat horizon, leases | survives in agent worlds; science needs observer seats | RBAC/ABAC, capabilities | **CANON-CANDIDATE** (A+B security) in the institutional profile; role vocabularies **VERTICAL** | |
| 17 | **Occupant/actor kinds and attestation** (human / model / institution / system) | "recorded-local-command-only" | Harbor `humanIdentityVerified:false` | Agent board labels only | 08 P3/P8 | OIDC, delegation chains | **HYPOTHESIS** (no AI occupant has ever run) | |
| 18 | **Object identity** (stable within one lineage, derived by projection, never global) | `ObjectAddress` "never a cross-case object ID" | objects are projections with identity, lifecycle and source paths | — | — | DDD entity | **CANON-CANDIDATE** (A) *as scoped identity*; a **global object ID is REJECTED** (both products refuse it) | |
| 19 | **Pairwise references across boundaries; no universal person id** | kernel `pairwiseSubjectRef` (OIDC-style) | bridge pairwise HMAC subject | — | 08 P8 | OIDC §8.1 | **CANON-CANDIDATE** (B privacy) | |
| 20 | **Boundary exports are derived, read-only, versioned and recognition-only; some meanings unexpressible** (score, money, evidence) | kernel carry, `not-evidence` literal, key-scan firewall | institution crossing receipt; `bow-bridge-1` | Handshake: League sees filings, not books | — | purpose limitation, Pact | **CANON-CANDIDATE** (A+B) | |
| 21 | **Moment** | pointer (attempt + event + objects + versions); grants no evidence | three shapes; NBA pins model, seats, `known[]`, consequences, `sealedAt` | Moment card "the unit that travels" | Moment = predict-commit in science | decision point plus information set | **RECURRING** (concept); canonical shape **HYPOTHESIS** | "not a universal event schema" (W) |
| 22 | **Portable capsule / receipt** | EARNED synthetic, three families, three formats | cross-institution receipt | verifiable branch | 07: receipt proves the log, not the sensor | reproducible builds | **RECURRING**; the term "receipt" oversells unless signed (05) | |
| 23 | **Derivation lineage with cited rule; causal claims refused** | provenance edges "deliberately no inferred or caused"; consequence `{causeEventRef, ruleId}` | causal projection "neither a general causal inference engine" | X3Engine "why" | fails on cycles and simultaneity (07) | how-provenance | **CANON-CANDIDATE** (A) as *derivation*; "causal engine" vocabulary **REJECTED** | |
| 24 | **Type/gate separation of actual, modeled and evidence** | `not-evidence`, `assessmentEligible:false` | Lab has no write authority; status required to render | render-time grammar | — | taint/IFC | **CANON-CANDIDATE** (A+B); POSSIBLY NEW as an application constraint (05 §b.2) | |
| 25 | **Representation has no authority; Direct parity; R1–R5** | scene "never owns a world machine"; `KitPlace` injected slots; room image is atmosphere | adapters never import reducers; Direct reads the same story functions | "3D is a representation, not the medium" | — | MVC | **CANON-CANDIDATE** (A) | |
| 26 | **Place as canonical state** | — | topology is a static schema constant | Floor/Seat boards | 07: place is a renderer choice | — | **REJECTED** | |
| 27 | **Place index** (state-free id / role / adjacency; carriers keyed by object id) | district address holds "no assessment facts" | `HARBOR_SPATIAL_PLACES/EDGES` | — | — | scene-graph index | **HYPOTHESIS** | |
| 28 | **Obligation / right with dated lifecycle** | dated obligations (Avery, Kit deposit) | ×3 (NBA, Harbor, Foundry) | ENTER matters | agent worlds only | ODRL, REA | **RECURRING**, institutional profile (**CANON-CANDIDATE within profile**) | |
| 29 | **Agreement / negotiation** | ride agreement, credit terms | ×4 hand-rolled; "no general bargaining engine" | Handshake | supply chain: non-atomic | FIPA-ACL | **RECURRING**; general engine **REJECTED** (premature) | |
| 30 | **Resource ledger (conservation)** | finance-object grammar (receipt ≠ plan ≠ fee) | NBA two-sided transfers; Harbor single-entry | — | — | double-entry | **VERTICAL** (rulebook content), not a medium primitive | |
| 31 | **Responsibility contract** | prose template, three key sets, three checks | portfolio doc | ENTER Handover | agent-only | — | **RECURRING** as idea; machine form **HYPOTHESIS** | |
| 32 | **Court/Film** | — | EARNED, basketball | — | generalizes as **multi-resolution episode** (07) | LVC | Court/Film **VERTICAL**; multi-resolution episode **HYPOTHESIS** | |
| 33 | **Commit-reveal sealed randomness** | — | HMAC seed, released per shot | mulberry32 | — | commit-reveal | **HYPOTHESIS** (only W); folded into #14 | |
| 34 | **Hash-chained record / `bow://` (as built)** | fingerprints "drift check, not a signature" | `canonical()` ×6 | five grammars, 32-bit | 08 P1: DAG of heads | CT, Git | Current form **REJECTED**; content-addressed heads plus one canonicalization **CANON-CANDIDATE** (B identity) | |
| 35 | **Wall-clock Live World with actor-clock ordering** | — | — | built, unrun on a real store | earliest crack (08) | Bayou problem | **REJECTED** as built | |
| 36 | **Assessment chain** (rubric, support caps, denominators, evidence modes) | EARNED | — | — | — | — | **VERTICAL** (never a medium primitive) | |
| 37 | **`LessonModule` as world contract** | not used | extended with `acceptsControls`, `viewsShareState` (drift) | — | 07 V | Elm plus CQRS | **VERTICAL** (Economics runtime) | |
| 38 | **"Foundry"** | production/review grammar | declarations → numeric-resource engine | wizard board | — | — | **UNRESOLVED: name collision.** Two different things share one word. | |
| 39 | **Lab** | modeled branch, 3 consumers | one intervention, three shapes | — | — | `d/with` | Merged into #11/#12 as a product surface | |
| 40 | **Seven-texture legend as rendering** | — | — | critic-enforced | child legibility untested | Bertin | **HYPOTHESIS** (representation law candidate, not core) | |
| 41 | **ASSERTED status** (a party's claim or promise, neither fact nor author's stipulation) | "a plan or promise is not payment" | "the offer is not a payment" | — | supply-chain ship dates | — | **CANON-CANDIDATE** (A): both products already enforce promise ≠ fact; add it to the status axis | |
| 42 | **Licence/rights axis on OBSERVED facts** | — | source-rights model card; dated real identity snapshot | — | 08 P10 | ODRL | **HYPOTHESIS** (B legal once feeds exist) | |
| 43 | **Writeback / irreversible commit port** | refused ("no writeback") | refused (bridge recognition-only) | Enterprise "locked" | 07 #3, 08 P7 | sagas | **SPECULATIVE FRONTIER**; only the *negative* invariant (forks never write back) is canon | |
| 44 | **Natural-system profile** (instrument, uncertainty, rival models, continuous dynamics) | — | — | slaved illustration | 07 | system dynamics | **SPECULATIVE FRONTIER** (unbuilt) | |

### 2.1 Tallies

- **CANON-CANDIDATES in the core (17):** #1, #2, #3, #4, #5 (sequence), #7, #8, #9 (axis), #10, #11, #13, #14, #18, #19, #20, #23, #24.
- **CANON-CANDIDATES in the institutional profile (4):** #15, #16, #25 (the representation law, a separate contract), #28.
- **UNRESOLVED:** #12 (suffix policy), the #8 code set, #38 (Foundry name).
- **REJECTED:** #26, #34 (as built), #35, the "causal engine" vocabulary, a global object ID, a general bargaining engine.
- **VERTICAL:** #6 (Commissioner), #30, #32, #36, #37.

## 3. The most important missing primitive (provisional, for the critics to attack)

**The ACT BASIS.** Every product independently records half of the same thing:

- DC records the **read side** of a decision: what was available, opened, and knowable per rule input at the act.
- W records the **write side**: the revision or stop the act was decided against, with stale acts refused.
- DF's "decision-time information" and ENTER's handover try to show it.

Nobody has made it one object that travels with the act: *this act was made by this seat, against this cut, with this information available and this information opened*.

With it, the following become derivations instead of per-product machinery:
- knowability ("what did they know?"), staleness ("was it decided on old state?") and fairness ("did the AI see it first?");
- Moments (a Moment is an act plus its basis plus later consequences);
- receipts (an export of an act-with-basis);
- AI-occupancy fairness (seat time rules become constraints on basis-to-act latency);
- composition (a cross-World act names its basis in both Worlds, the bilateral cross-reference of 08 P1).

HYPOTHESIS; the evidence for each half is EARNED in one product each.

## 4. Candidate L0 record and address, deliberately concrete so wave 2 can break them

```
INSTANCE HEADER
  instance      : id                                   # history-bearing instance (World, attempt, run)
  system        : system-id @ version-digest           # pinned definition (rules, schema, seats, info rules)
  clock         : { kind: act-advanced | scheduled | external, authority: seat-role | none }
  lineage       : null | { parent: instance @ head-digest, cut: pos,
                           interventions: [act…], suffixPolicy: replay | drop | redecide(policy) | fresh-occupants,
                           status: MODELED }
  replay        : REPLAYABLE | JOURNALED               # can state be re-derived from (system, entries)?

ENTRY (one per authority-assigned position)
  pos           : n                                    # total order within the instance
  prev          : digest(entry n-1)                    # chain; head = digest(last entry)
  act           : { seat, occupant: {kind, attestation?}, verb, args,
                    basis: { cut: pos-or-revision-seen, available: [sourceId], opened: [{sourceId, pos}] } }
  verdict       : accepted | refused(ruleId)
  inputs        : [{ kind: dice | model-output | feed | time, value-or-digest, source }]
  emits         : [typed events defined by the system]
  time          : { world: label-in-declared-clock, recorded: wall-time (metadata) }

READ SIDE
  Fact    = { value, status: RECORDED|OBSERVED|ASSERTED|AUTHORED|COMPUTED|MODELED|GENERATED,
              source: pos/path | external{source, date, licence}, cut }
  Unknown = { kind: not-yet | not-recorded | not-available-to-audience | not-modeled |
                    out-of-envelope | withheld-by-rights | censored, reason }
  Projection = pure f(cut, audience) → [Fact | Unknown]

EXPORT / CAPSULE
  { ref, cut, basis, before, after, verification: REPLAYED | SIGNED | ATTESTED | CLAIMED, material }

ADDRESS (not a URL; orthogonal coordinates, two regimes)
  frame     : lineage-name | instance-id  [@ system-version]         # "datum": declares semantics version
  position  : now | pos:n | head:<digest>                            # living vs pinned
  audience  : public | seat:<id>   (capability-gated, never granted by the address itself)
  focus     : object path (optional)
  question  : optional
  representation: negotiated separately (Accept-like), never part of identity
```

## 5. Gaps that justify wave 2 (and only these)

| Lane | Gap from synthesis | Why the parent cannot close it alone |
|---|---|---|
| **W2-A** (lanes H+F): one record, two products | Does §4 survive contact with real DC and W data shapes (DC `decisionReceiptV1`, `marketEpisodeV1`, `objectContinuity`, v5 server attempt; W NBA `WorldState` events, `LeagueMoment`, Harbor chapter act logs, Foundry, `bow-bridge-1`)? This is the cheapest falsifier, run on paper. | Needs careful code reading of type definitions across two repos. |
| **W2-B** (lane A): time, order and clocks | Clock kinds, bitemporal corrections, composed clocks and "open at T" must be tested against NBA stops, DC stages and v5 server time, Harbor chapters, Live World, airline IRROPS and supply chains. | Needs precise precedent facts (HLA, Temporal, bitemporal SQL:2011, HLC) mapped onto code. |
| **W2-C** (lane D): representation generation economics | How can billions of systems be represented without bespoke 3D? W-3D costs (7.8 MB glb, 13-min bake, Boston-only building) need comparison with 2026 state-of-the-art procedural and AI generation, plus automatic Direct/document/timeline generation. | Needs current external facts and cost figures. |
| **W2-D** (lanes E+B): AI occupancy and portable execution | No AI occupant has ever run in BOW. Seat fairness precedents (speed bumps, sealed bids, turn budgets), recording model outputs, deterministic sandboxing (WASM float/NaN determinism, fuel metering), portability levels. | Needs precise technical facts; the risk of confident error is high. |

Not run, and why:
- **Composability/network (C):** 08 P1 plus 05 HLA/Matrix plus the tournament's C5 already cover it. The parent synthesizes.
- **Open-vs-closed synthesis (G):** done in `BOW_OPEN_PLATFORM_TOURNAMENT.md`.
- **Cross-domain falsification (H):** folded into W2-A (product shapes) and the §1 profile split.
