# BOW Medium Kill List

Status: proposal, 2026-09-29. "Kill" means stop treating the item as a medium primitive, platform law or direction of work. It does not mean deleting product code: the product repositories were not touched, and every kill that affects them is a **founder decision**.

Each entry states what dies, why, the evidence, and what (if anything) replaces it. Label on every entry: **REJECTED**.

## A. Semantics and mechanisms

| # | Kill | Why | Evidence | Replacement |
|---|---|---|---|---|
| K1 | **Ordering a shared history by actor clock** (Live World sorts acts by `(t, id)` with a 10 s skew and re-derives seals over that order) | A late or backdated act changes seals a viewer already saw. This is the Bayou/Time Warp problem, and HLC and sequencers already solve it. It is the earliest crack under any scale. | 08 P2; 05 row 3; `live-world.src.html:400-403, 507-513` | Authority-assigned POSITION. World time becomes a label derived from position (Vocabulary §3) |
| K2 | **"The same World for everyone without a server"** as a claim | It still needs a shared store and a platform ACL for authority; it is "without a compute server" at best | 05 row 3; 04 #11 | Deterministic replay of a sequenced record, with verification basis REPLAYED |
| K3 | **`bow://…#hash8` addresses and the five coexisting `bow://` grammars** | 32-bit comparison is brute-forceable (birthday collisions near 10^4–10^5). There is no resolver, and five grammars means none. | 04 #1, #10; 05 row 5; 08 P1 | One address hypothesis with full digests and a declared frame (`BOW_PROTOCOL_HYPOTHESES_V0.md`) |
| K4 | **Three canonical-JSON functions in DF, six copies of `canonical()` in W, per-family canonicalization in DC** | Records cannot be compared across tools, so "verifiable" is unfalsifiable | 04 #10; 02; W2-A | One canonicalization (e.g. RFC 8785 JCS) plus one digest, with golden vectors |
| K5 | **The vocabulary "causal engine"** and any claim that a "why" trace shows causation | It is rule-cited derivation plus depth-2 search. Both products already *refuse* causal claims in code. | 05 row 11; 01 #16, #17; 02 causal projection | DERIVATION |
| K6 | **Hand-tagged epistemic statuses** (the seven textures enforced by critics rather than code) | Hand-made metadata decays; this is the Semantic-Web "Metacrap" failure. "Hatch on anything no model produced" was the most common truth failure, and one wrong payroll sat in eleven boards. | 04 #6; 06 §6, H6 | STATUS emitted from provenance by the engine; any status an author must tag by hand is a bug |
| K7 | **Global object IDs and universal person IDs** across instances or products | Both products already refuse them in writing. They would build a cross-context identity graph of children and institutions. | 01 #2 (`objectContinuity.ts:6`); 02 bridge; DC kernel `refs.ts:14` | Scoped OBJECT identity plus pairwise COUNTERPART or PAIRWISE REFERENCE |
| K8 | **Treating a "receipt" as proof of authenticity** | Unsigned and owner-editable. Replay proves internal consistency under a pinned model, not who acted or that anything happened. The DC doc says so; the word oversells. | 05 row 19; DC `DECISION_RECEIPT_V1.md:21` | CAPSULE + VERIFICATION BASIS (REPLAYED vs SIGNED vs ATTESTED vs CLAIMED) |
| K9 | **Browser-local label authority** (Harbor-style `actorId` and `authority.basis` as rule labels, `humanIdentityVerified:false`) as a basis for any *shared* World | "Someone controlling the browser can construct a new internally consistent fictional action history" (W ADR). That is acceptable for single-player, fatal for anything multi-party. | 02 (c) | Authority derived from an authenticated SEAT (the W NBA pattern) for any instance with more than one principal |
| K10 | **A universal event schema, universal Moment schema, universal receipt schema or common world-description language *now*** | The products refuse it: W's `types.ts:769` says "not a universal event schema", and DC's ADR says "not a universal protocol compiler". History agrees (VRML97, OpenDoc). Domain content stays per SYSTEM. | 01, 02; 06 H3 | A **thin envelope** only (entry, basis, status, unknown, head), with domain events opaque to it |
| K11 | **A general bargaining or negotiation engine** | Hand-rolled four times with different needs; W refuses ("no general bargaining engine") | 02 negotiation | Typed AGREEMENT pattern in the institutional profile |
| K12 | **"Every number knows why" as a universal promise** | It fails on feedback and simultaneity (equilibrium is not a DAG), on partly unknown mechanisms, and on federated knowledge | 07 §lineage | DERIVATION where a rule chain exists; UNKNOWN (not-modeled) where it does not |
| K13 | **Chemistry and Biology boards as evidence that "one truth, many representations" works for natural systems** | Chemistry's micro layer is *slaved* to the macro state with unseeded `Math.random`. Biology is an authored lookup table. | 07 code §1-2 | Keep them as illustration. The natural-system profile is SPECULATIVE FRONTIER. |

## B. Place and representation

| # | Kill | Why | Evidence | Replacement |
|---|---|---|---|---|
| K14 | **PLACE as canonical state or as a platform engine** | It would be a second truth. Coordinates and pose are presentation, W topology is a static constant, and each place adapter is per-place. | 03 §4 | Place index (HYPOTHESIS) plus representation laws R1–R5 |
| K15 | **Bespoke 3D as the proof of the medium** | Only Boston has a baked building (7.8 MB glb, 13-minute bake). The medium claim cannot depend on hand-built places that do not scale. DF already said "3D is a representation, not the medium". | 03; W2-C | 3D stays one representation family; Direct parity is the floor |
| K16 | **"No semantic prop without canonical truth" as worded** | It misses false absence, false precision (18,624 seats from a modeled split) and unknown drawn as a value (Harbor floor drawn pristine) | 03 §2 | R1 Claim · R2 Absence · R3 Precision · R4 Tier · R5 Cut (representation contract) |
| K17 | **Salient carriers that imply a mechanism the model lacks** (a funded-ticketing bowl that fills seats taught "paying fills seats") | A carrier's salience teaches a false mechanism | 03 §3 (D256) | Carrier choice must pass a counterfactual-pair test |

## C. Architecture, process and strategy

| # | Kill | Why | Evidence | Replacement |
|---|---|---|---|---|
| K18 | **Three unrelated state models inside Worlds, each with its own record** (NBA stored-state + journal; Harbor chapter act logs; Foundry JSON) *as the long-term shape* | There is no shared record, `canonical()` is copied six times, and replay is Harbor-only. Every cross-institution feature pays for it. | 02 ground truth | One record envelope beneath each (the minimal L0), with replay capability declared per instance |
| K19 | **DC's coexisting standalone Lab engine beside `decisionBranch`** | Two fork mechanisms in one product | 01 #6 | One BRANCH mechanism |
| K20 | **Parallel act-reference formats** (`#event-N`, `#shared-event-N`, `#branch-<hash>#event-N`, `caseId@version#event-N`, `event-${sequence}`) | Five hand-copied forms of the same reference | 01 #2 | One reference grammar scoped by instance (Protocol H-A) |
| K21 | **Five status vocabularies in W and four unknown vocabularies in DC** | They block any shared reader and any honest comparison | 02 (d)6; 01 #5 | One STATUS axis plus one UNKNOWN kind set, with per-product mapping tables (W2-A) |
| K22 | **`LessonModule` contract drift** (W added `acceptsControls` and `viewsShareState`; E-main did not) | Silent divergence of a shared contract | 02 (d)7 | Upstream the fields or fork the contract explicitly. Record it as a decision. |
| K23 | **"Foundry" meaning two different things** | Name collision (DC production/review grammar vs W declaration compiler) | 01 #12; 02 | Rename one before any shared spec |
| K24 | **More design-frontier board tournaments as the primary mode** | Screens and engines are copyable in 12–22 tool calls, the moat is zero until a canonical instance runs, and Packet2 already recommended "no new front doors" | 04 (c); T C1 | Engine and instance proof (Contract founder packet §9) |
| K25 | **An open reference host, federation spec, marketplace or rulebook language now** | Blind consensus of three advocates. Seat secrecy guards display, not inference. There are no two independent implementations. | Tournament C5, §3.2 | "Not yet", with triggers (Tournament §3.4) |
| K26 | **Wall-clock-paced world time as a default** (1 World day = 1 real hour) | Every product uses act-advanced time. Wall pacing plus actor-clock order is K1. | 02 (c); 08 P2 | `scheduled` clock kind whose ticks are recorded acts (HYPOTHESIS) |
| K27 | **Humans and models "in the same seat" with no declared time rules** | An AI seat acting in milliseconds wins every human window by construction | 08 P3; W2-D | Seat time rules (deliberation interval, sealed-until-deadline, act budgets) in the WARRANT |
| K28 | **W's `private` status code, which carries two opposite meanings** ("known to this seat only" and "hidden from this seat") | A status that maps to two contradictory kinds cannot be read by any shared reader, and invites a leak | W2-A §3e | Split into `Fact{audience: seat}` vs `Unknown{sealed-to-audience}` |
| K29 | **Mandating event sourcing as the medium's storage model** (the parent's own first candidate, `REPLAYABLE \| JOURNALED`) | NBA World One keeps no act log. The medium must standardize what systems export and prove, not how they compute. | W2-A §1 | `actLog: retained\|partial\|absent`; `derive: fold\|stored+invariants` |
| K30 | **Locale-dependent canonicalization** (`localeCompare` key sorting in 13 of DC's 17-plus canonical functions and in 6 Harbor copies) | Digests differ across machines, so cross-machine verification is impossible | W2-A §3c; W2-D §2.2 | RFC 8785 JCS (UTF-16 code-unit ordering) + SHA-256 with an `alg:` tag |
| K31 | **LLM-written Direct text for claim-bearing facts; AI-generated crowds and props implying unrecorded facts; live world-model views as places of record** | Unfaithful data-to-text; implied attendance or presence; no object ids; unrecorded nondeterminism | W2-C §6 | Templates for claim text; generative content only in a hash-verified atmosphere layer |

## D. Already killed upstream (carried here so they stay dead)

| Board | Killed because |
|---|---|
| Specimen cubes | a cost |
| ENTER E1 Narrowing | removed access, not knowledge |
| ENTER E4 Descent | a list carried the same understanding |
| Fan as fork | forecasts are not branches |
| Seat and Focus as landing pages; Sentence as front page | — |
| Network ledger | a filterable table |
| Field guide A2 | a card grid |
| Model terrain A4 | read as a forecast |
| Documentary PB3; Variation tree W5 | never built |
| Chemistry v1 dashboard | — |
| Fork v1 "modeled" bands | a guess drawn in a model's texture |
| "The Desk" | founder-rejected |

Source: 04 (b); DF `Packet2`, `CloneVerdict`.
