# BOW Medium Evidence Ledger

Status: 2026-09-29. This ledger lists every claim the Medium Contract relies on, the evidence behind it, and its label. **Nothing is promoted by this document.** A claim's label here is its ceiling everywhere else.

## How to read it

- **Source keys:**
  - `01`–`08`: wave-1 worker reports in `research/wave1/`
  - `W2A`–`W2D`: wave-2 reports in `research/wave2/`
  - `T`: the tournament papers
  - `DC`: `bow-decision-challenges` @ `e1d05104`
  - `W`: `bow-economics-live` Worlds @ `a43679f2`
  - `W-3D`: the visual branch @ `09051acf`
  - `DF`: `bow-design-frontier` @ `a9b7b1c2`
- **Code citations** come from worker reports, which read the code. The parent spot-checked the handoffs and receipt docs directly (`SOURCE_STATE.md`).
- **Evidence limits that apply to every row:**
  - No build, test, server or browser was run in either product repository during this run. Product-side "tests pass" claims are the products' own reports.
  - Rendered or visual claims were not re-witnessed (the snapshots are text-only).
  - No BOW medium concept has been used by a real student, teacher, fan, operator or third-party developer. **Classroom-proven: nothing.**
  - All workers and critics are the same model family as the builders.

---

## A. EARNED: working code does it

| ID | Claim | Evidence | Scope limit |
|---|---|---|---|
| E1 | DC re-derives a run from a pinned start plus recorded events with the family reducer. It refuses on any divergence, mutation or unsupported record, and never falls back to stored numbers. | 01 #1: `consequential/system/decisionTrace.ts:22-45`, `syntheticArchive.ts:355,390,410`, `platform/decisionCase/attemptChronology.ts:168,684` | Five or more families, separate reducers; synthetic and held packages |
| E2 | DC separates source availability, opening (an accepted act with an event ref) and per-rule-input knowability at an act. Comprehension and delivery are literal `"unknown"`. | 01 #4: `attemptChronology.ts:339`, `marketEpisodeV1.ts:27`, `decisionRuleInputsV1.ts:12-30`, `decisionReceiptV1.ts:27`, `foundry/production.ts:138` | Market, Credit, school authored forms; Avery keeps IDs only |
| E3 | DC exact object cuts use typed presence: `present / absent / unmodeled` at `beforeAct / afterAct / atSeal`. | 01 #3: `objects/objectContinuity.ts:37,144` | Market and Credit lineages |
| E4 | DC modeled branches replace one act, replay the suffix and label the result `modeled-analysis`. The id is SHA-256 of parent transcript, final state, fork and commands; the branch cannot write attempts. | 01 #6: `decisionBranch.ts:85,140` | Market, Credit, Shift; command caps (16, or 64 with refusals) |
| E5 | DC exports a portable capsule of one act with its information at the act and the whole history. Another browser re-reads it in empty storage and compares canonical JSON. | 01 #7: `decisionReceiptV1.ts:248` | Synthetic only; unsigned; three attached formats |
| E6 | DC's server-owned v5 attempts use server `now`, `requestId` idempotency and `expectedRevision` compare-and-set. | 01 #14: `server/v5Attempt.ts:211-214` | Held P1 v5 only |
| E7 | DC ordering comes from `sequence`; the wall-clock timestamp is metadata. | 01 #14: `domain/evidence/types.ts:236` | — |
| E8 | DC version discipline: exact tuples; `version:null` is explicit legacy and "never means use current"; old or unknown records are withheld, never rewritten. | 01 #10: `packageTypes.ts:21,50,190`, `fingerprint.ts:27` | Fingerprints are "a drift check, not a signature" |
| E9 | DC's boundary guard makes score, rank and money keys unexpressible in carried history (`evidenceStatus:"not-evidence"`). References across products are pairwise subject refs. | 01 #9; 05 row 17: `kernel/carry.ts:93`, `history.ts:9-36`, `refs.ts:104` | No production consumer outside tests and the bridge |
| E10 | W NBA derives authority from the authenticated seat and ledger facts, never from the payload. Teachers cannot act for owners **except through the logged REPAIR verb, which reassigns seat→franchise** (Critic 1 A11). The Commissioner's verbs cannot edit cash, results or terms. | 02 (c): `worldOne/index.ts:104,202-206`, `commissioner.ts`, `server/sessionService.ts:328,2633` | NBA only; Harbor has no authentication |
| E11 | W time advances only by an explicit act: `advance(state, expectStop)` or Harbor `advance_day`. Due work is delivered once, and advance refuses if the source changed. No product has wall-clock world time. | 02 (c): `commissioner.ts:50,129`, `seasonTwo.ts:417-439`, `harborWorldTimeResponsibilities.ts:51` | — |
| E12 | W refuses stale acts: every mutating act carries the version it was read at (four guards). | 02: `filmPartnership.ts` `expectRevision`, Harbor `expectedRevision`, `sessionService.ts:2181,2232` | — |
| E13 | W audience-scoped reads: `hqView(state, seat)`, `commissionerView`, `boardView` (never given a seat). | 02: `worldOne/views.ts:887,1194,1441,493`; E-main `lessonModule.ts:241` | — |
| E14 | W projected facts are `{actual, value, sourcePath}` or `{unknown, reason}`. Physical presence is always unknown unless a saved event exists. | 02: `nbaArenaProjection.ts:7`, `nbaActorRoleProjection.ts:85`, `harborActorPresence.ts:14` | Five status vocabularies coexist |
| E15 | W Lab returns ACTUAL / MODELED / UNKNOWN plus assumptions for one changed intervention, withheld when undefined, "never the live World, never a hidden seed". | 02: `founderShowcase.ts:499`, `institution.ts:505`, `partnerArc.ts:377` | Harbor Lab drops later acts (02 (d)3) |
| E16 | W Court dice are an HMAC of a sealed seed, released one shot at a time; a possession is never re-rolled. | 02: `secret.ts:36`, `courtWorld.ts:3-17,132,339` | Basketball-specific |
| E17 | W keeps a save's birth rules. An absent tag means old behaviour; unsupported versions are refused, not migrated. | 02: `league.ts:48,108`, `index.ts:83`, `institution.ts:274` | Long-term replay "unsolved" (CRITIC_DISSENTS) |
| E18 | W-3D place views are pure functions of a labelled state cut to carriers bound to object id and source path. Direct reads the same story functions, and adapters never import a reducer or write storage. | 03 §1.1–1.2, 1.7: `frontier/stateProps.ts`, `historyProps.ts`, `bostonArenaFacts.ts`, `nbaWorldSpace.ts` | Tests assert Direct parity; human value unknown |
| E19 | W-3D encodes gaps as types (`physical:"unknown"`, `exactGameDay:"unknown"`, `capacity.status:"modeled"`) and draws played, forecast and unknown differently (D256–D259). | 03 §1.4–1.5 | Counterexamples exist (03 §2) |
| E20 | DC's Avery v6 room treats the image as atmosphere; papers, money, messages, actions and receipts remain live semantic HTML, and the scene "never owns a world machine". | 03 §1.7: `P1V6ResponsibilityWorld.tsx`, `KitPlace.tsx:29`; DC Cycle 61 handoff | Source only; never rendered on the Mac |
| E21 | DF X3 engines compute: a derivation graph with depth-2 reverse search, per-seat visibility filtering, a seed-plus-log fold, and a SHA-256 chain. The Live World folds a canon plus an act log. | 04 #7–#11 | DF prototypes; Live World never ran on the real shared store |
| E22 | W `bow-bridge-1` is a versioned League↔DC contract: pairwise HMAC subject, `evidence:false`, `effect:"recognition-only"`, "synthetic rehearsal only; compatibility not verified". | 02; 05 row 17; W `contracts/bridge/bow-bridge-1/README.md` | Not a connected bridge |
| E23 | **NBA World One keeps no act log.** Its server journal is truncated row snapshots; owner choices are last-write-wins slots; the reducer is pure, but its inputs are not kept. | W2-A §1 S4, §3b: `server/journal.ts:1-57`, `sponsor.ts:196-216`, `types.ts:674` | This is the most developed World |
| E24 | Every product records effect deltas with a cause and a rule (DC `causalChanges`, Harbor edges, NBA transfers, Foundry `resourceDeltas`). | W2-A §2 "emits" | Shapes differ |
| E25 | Canonical-JSON functions: at least 17 in DC (13 `localeCompare`, 4 code-unit) and 7 in W (6 Harbor `localeCompare`, server `actionFingerprint` code-unit SHA-256). | W2-A §3c; W2-D §2.2 (`fingerprint.ts:10-17`) | Locale variants mostly serve in-memory equality, except DC's pinned FNV fingerprint |
| E26 | Idempotency keys exist in both products (DC `requestId`, W `clientActionId` plus a SHA-256 fingerprint). Request-level refusals (duplicate, stale, sealed, rate-limited) make no entry in either. | W2-A S2, S4; W2-B §1 | — |
| E27 | Every executable BOW clock is act-advanced (NBA, Harbor, Foundry, DC learner). Wall time reaches the W reducer only as `ctx.now`, read only by a countdown that "never closes anything". | W2-B §1: `commissioner.ts:14-16,48-50,129,254-260`, `index.ts:203-204` | DF Live World is the only wall-derived clock, and it is rejected (K1) |
| E28 | W's league simulation uses engine-approximated `Math.exp`, `log` and `cos`; DC domain code uses none, with integer-cent money. | W2-D §2.2: `sim.ts:53`, `handover.ts:26`, `draftV4.ts:65`, `seasonTwo.ts:632`; DC grep | Cross-engine League replay unproven |
| E29 | DC Receipt v1 replays through `ruleBundleId`, a label resolved to in-tree code, not a digest. It is a capsule with in-tree replay, not a portable replay. | W2-D §2.1: `decisionReceiptV1.ts:66,235-249` | — |
| E30 | W-3D place props are rebuilt on every rebind from facts and never baked. Only Boston has a baked building (1,335-line level script; 29 MB glb). | W2-C §5; `stateProps.ts:1-15` | — |
| E31 | Real geography enters BOW only as strings and numbers (`arena:"TD Garden"`, `arenaCapacity:18624`, metro area and population, dated 2026-09-22). There is no place id, coordinate, QID, OSM or GTFS id in W, W-3D or DC source, and `bow-bridge-1` and DC `refs.ts` have no place field. | W2-E §2: `nbaIdentity.ts:46`, grep | — |
| E32 | The same real arena carries two dated capacities (18,624; 19,156 from tdgarden.com as of 2026-09-14), each with a hand-rolled `{source, asOf, verified}`, and no id reconciles them. | W2-E §2: `fullHouse.ts:329-332` | — |
| E34 | **W's teacher Restore resets `state` and `log` to a checkpoint and increments `restoreEpoch`** ("A RESTORE OPENS A NEW BRANCH OF THE ROOM'S HISTORY"). Retried receipts return `superseded`. | Critic 1 A1; parent verified `sessionService.ts:3108,3120` | Restore is classroom-mandated (E-main §11) |
| E35 | **NBA `advance(state, expectStop, registeredSeats)` at the draft stop calls `runDraft(state, registeredSeats)`.** The seat registry is the host's at the moment of pressing, and it is not in state and not recorded. | Critic 1 A8; parent verified `commissioner.ts:48-54` | Corrects E11's "pure function of state" |
| E36 | **Court dice are "derived from the league seed, never stored, never sent ahead"**, regenerated by HMAC from a host-held seed. The seed hash is published at creation and revealed at the Reckoning. | Critic 1 A7; parent verified `courtWorld.ts:127` | Corrects row #14 / M4 "never regenerated" |
| E37 | W marks a compare-and-set conflict as retryable, and the client outbox re-sends the request, which is re-reduced against a newer state and accepted. | Critic 1 A4: `sessionService.ts`, `outbox.ts:418` (critic's reading; not re-verified by the parent) | The basis cut is not redundant on accepted W entries |
| E33 | Boston's on-screen disclosure ("real clubs and players, a simulated season") discloses the season, not the authored building; the building's authored status lives only in a design doc. | W2-E §2: `bostonFacts.ts:16`, `bostonBuilding.ts:67,484`, `ART_DIRECTION.md:90` | Product-lane fix, not made here |

## B. RECURRING: both products reach the same semantics through different code

| ID | Claim | DC mechanism | W mechanism | Independence |
|---|---|---|---|---|
| R1 | Pinned-definition replay with refusal on divergence | E1 | Harbor loads only if canonical-equal to replay (02) | Different code; **NBA does not replay**, so it is a capability, not a universal |
| R2 | Exact version discipline: refuse, never migrate silently | E8 | E17 | Different code |
| R3 | Act basis | Read side E2; write side E6 | Write side E12; `availableAtTick` and audiences in Foundry; `known[]` on `LeagueMoment` | Complementary halves in different code |
| R4 | Explicit, attributable time advance; ordering by sequence | E7, learner `advance` | E11 | Different code |
| R5 | Audience-scoped pure projections; the public view is never given a seat | teacher exact reader; per-actor redaction | E13 | Partly shared ancestry (E-main contract) |
| R6 | Fact-or-Unknown with typed reasons; `null` never zero | E3, coded unknowns | E14 | Different code, **different vocabularies** |
| R7 | Modeled branch that can never become a second actual history | E4 | E15 | Different code; **suffix semantics differ** |
| R8 | Refusal outside the supported domain (validity envelope) | branch returns `null` when unsupported | Lab "unsupported rather than guessed" | Different code |
| R9 | Boundary exports are derived, read-only and recognition-only; certain meanings are unexpressible | E9 | E22, institution crossing | **Cross-pollinated** (mirror designs) |
| R10 | Pairwise references across boundaries; no universal person or object id | `refs.ts` pairwise, `ObjectAddress` "never cross-case" | bridge pairwise HMAC subject | Cross-pollinated |
| R11 | Derivation with a cited rule; causal claims refused | provenance edges "deliberately no inferred or caused" | causal projection "neither a general causal inference engine" | Different code |
| R12 | Promise ≠ fact (ASSERTED ≠ RECORDED) | "a plan or promise is not payment", "an assessed fee is not payment" | "the offer is not a payment" | Different code |
| R13 | Typed silence with declared defaults | typed absences | "if the owner does not answer, the usual five stay"; lateness at advance | Different code |
| R14 | Representation has no authority; atmosphere vs semantic layer; Direct parity | E20 | E18 | Different code |
| R15 | Obligations and rights with dated lifecycles; agreements with typed versions | dated obligations (Avery, Kit, ride terms) | ×3 obligations, ×4 negotiation | Different code |
| R16 | Moments as named references to acts with context | `MomentRef` pointer | `LeagueMoment` with `known[]`, consequences, `sealedAt` | Different code, **different shapes** |

## C. HYPOTHESIS: argued, not proven. Each row names the cheapest test.

| ID | Hypothesis | Best evidence | Cheapest test |
|---|---|---|---|
| H1 | One minimal record envelope (entry, basis, status, unknown, head) covers both products without product special-casing in its core | R1–R16; W2A mapping | A spec-only implementer builds a reader that verifies one DC capsule and one W NBA delivery (Contract §9) |
| H2 | The ACT BASIS is the missing unifying primitive (knowability, staleness, fairness, Moments and cross-World acts all derive from it) | R3 | Re-express DC info-at-act and W `expectRevision` as one basis object; derive a Moment from it without new fields |
| H3 | STATUS must be emitted from provenance and never hand-tagged | K6; 06 H6 | Grep every status assignment in a rulebook: any literal status on a value is a failure |
| H14 | A shareable as-known-then decision artifact changes how non-specialists argue about decisions between strangers: **the one live candidate for a genuinely new capability** | Critic 2 (constructive part); poker hand histories as precedent literacy | The reply-by-fork outcome-bias test (Contract §12, item 9b) |
| H4 | VERIFICATION BASIS (consistency × authenticity) is needed as a second axis beside STATUS | T-Open; 08 P14; 07 | Attempt one third-party verification of a DC capsule. Does the verifier need to say *how* it checked? |
| H5 | Agency primitives are profile-specific, not core | 07 matrix | Express a chemistry equilibrium and an airline IRROPS episode in core terms only |
| H6 | Place is a state-free index plus carrier slots, never canonical state | 03 §4 | Rebuild one Harbor room from the index plus projection with no other state |
| H7 | Every fork must declare a suffix policy, and the products' disagreement is a missing declaration, not a bug | 02 (d)3; 07 | Run the same intervention under replay-unchanged vs drop, and show readers the difference |
| H8 | Humans and models can occupy the same seat if the warrant declares time rules and outputs are recorded acts | 08 P3–P4; W2-D | Local mode: a 0 ms bot plus a human on one deadline, with and without sealed-until-deadline |
| H9 | Addresses need orthogonal coordinates (frame, position, audience, focus, question) in two regimes (living, pinned); representation is negotiated, not addressed | 06 §4; 05 | Point at every W2-A specimen with one grammar |
| H10 | Portability has five levels (reference, capsule, replay, fork-executable, hostable), and only the first three are near-term | E5; W2-D | Export one Harbor chapter at the replay level and replay it in a second runtime |
| H11 | The moat is the canonical instance, its history, sourced rulebooks, keys and licences; code is not the moat | DF clone test; T consensus C1 | Buyer test (Tournament §6) |
| H12 | Composition is federation of authorities through boundary exports and bilateral cross-references, never a shared chain | E22; 08 P1; W ADR option B | One cross-World act whose basis names heads in both instances |
| H13 | A medium needs a citable, portable, non-specialist-authorable record plus a killer genre; BOW has neither yet | 06 §1, H4, H8 | One non-BOW author ships a World unaided and a stranger forks it |

## D. SPECULATIVE FRONTIER

| ID | Idea | Pressure it answers |
|---|---|---|
| S1 | Natural-system profile (observer seat, instrument, uncertainty, rival models, multi-scale coupling) | 07 missing primitives 1, 2, 4, 7, 8 |
| S2 | Writeback / irreversible commit port (intent → authority → effect → confirmation, compensation instead of rollback) | 07 #3; 08 P7 |
| S3 | Warrant delegation chains for AI occupants | 08 P8 |
| S4 | Multi-resolution episodes (Court/Film generalized) | 07 |
| S5 | Licence and rights axis on OBSERVED facts, with forks expiring when the licence lapses | 08 P10 |
| S6 | Qualification of Worlds against recorded Reality for a declared use (the flight-simulator precedent) | 06 H9 |
| S7 | Search and discovery over verified typed claims with a verification tier per result | 08 P13 |

## E. REJECTED

See `BOW_MEDIUM_KILL_LIST.md` K1–K27. Each entry carries its evidence.

## F. Counter-evidence the contract must carry openly

1. **The NBA World does not replay.** Its truth is stored state plus a journal. Any law that says "state is a fold of the record" is false for BOW's most developed World (02).
2. **Nothing new at the mechanism level.** Every BOW mechanism is RENAMED or RECOMBINATION (05). Novelty, if any, is in enforced separations and in the knowability ladder.
3. **Moat is zero today.** History starts at first start, authority is a borrowed host ACL, and the clone test rebuilt engines from screenshots (04 (c); T).
4. **No product has an AI occupant, a cross-World transaction, a signed head, a real shared-store World or a user.** Every claim about them is at most HYPOTHESIS.
5. **"Classroom-proven" applies to nothing** (economics D10; DC's "NOT YET" product verdict).
6. **Same-family judgment.** Builders, workers, advocates and critics share a model family, and convergence can be shared bias (Tournament §6).
7. **Authoritative rollback exists.** W's Restore rewrites canonical history today (E34), so no "append-only" claim holds for W without supersession epochs.
8. **Precedent exists for every candidate novelty** (Critic 2, S1–S9). No BOW record has ever been re-read outside its own repository.
9. **The product constitutions forbid parts of the medium test** (Critic 2, S10): non-specialist assessment authoring, public student work, and licensed payload travel.
