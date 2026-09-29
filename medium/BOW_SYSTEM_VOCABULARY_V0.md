# BOW System Vocabulary v0

Status: **proposal**, 2026-09-29. Every term carries a truth label:

- **EARNED:** working BOW code does it.
- **RECURRING:** both products need it, independently enough (see caveat).
- **HYPOTHESIS:** a plausible law, not yet proved.
- **SPECULATIVE FRONTIER:** deliberately far out.
- **REJECTED:** investigated and dropped.

Every term also carries a platform class:

- **CORE:** every executable system.
- **INST:** the institutional profile, for agent worlds.
- **NAT:** the natural-system profile.
- **VERTICAL:** a product's own term.

The full evidence behind each classification is the 44-row conflict matrix in `research/PARENT_SYNTHESIS_W1.md` §2, with sources in the wave-1 and wave-2 reports.

**Independence caveat on RECURRING.** Decision Challenges (DC) and Economics Worlds (W) are built by overlapping agents under one founder and have cross-pollinated. For example, W's `bow-bridge-1` mirrors DC's kernel. RECURRING is claimed here only where the two products reach the same semantics through **different code**.

**Naming rule adopted.** Where computer science already has a precise word (report 05), BOW uses it internally and keeps its own word only where users see it ("WHAT IF?", "HOW DO WE KNOW?"). This prevents fake novelty and makes the spec legible to outside implementers.

---

## 1. The spine

| Term | Definition (v0) | Class | Label | Evidence | Precedent term |
|---|---|---|---|---|---|
| **SYSTEM** | A **versioned, executable definition** of a system:<br>• state schema and rules (the transition function)<br>• seats and roles (INST)<br>• information rules (who can see what, from when)<br>• declared clock kind<br>• validity envelope<br>• representation affordances<br>It is identified by `system-id @ version-digest`. A SYSTEM has no history; it can be instantiated zero, one or many times. | CORE | **RECURRING** (definition/instance split in both products); the unified form is HYPOTHESIS | DC frozen package + version tuple (01 #10); W rules version + `LessonModule` + Foundry declaration (02) | program, schema, model definition, FMU |
| **REFERENT** | The real thing a SYSTEM models (the NBA salary system, an airline, chemical equilibrium). When the thesis says "make *systems* executable", it means *write a SYSTEM whose instances can be entered*. BOW never contains the referent. | CORE | HYPOTHESIS (terminology) | — | — |
| **INSTANCE** | One **history-bearing execution** of a SYSTEM version under **one authority**. It has a record, a clock and (INST) seats. There are three kinds: WORLD, CHALLENGE and BRANCH. | CORE | **RECURRING** | DC attempt/run; W NBA `WorldState`, Harbor chapter chain (02) | process, aggregate, federate |
| **WORLD** | An INSTANCE with an **open horizon**:<br>• it persists across sessions<br>• it may have many seats<br>• its time continues whether or not a given occupant is present<br>• its SYSTEM version changes only through recorded governance acts<br>Path dependence accumulates in it. | INST (mostly) | EARNED in W (NBA World One, Harbor); the general definition is HYPOTHESIS | 02 | persistent world, shard |
| **CHALLENGE** | An INSTANCE with a **bounded horizon**:<br>• frozen SYSTEM version<br>• designed initial cut and information schedule<br>• one responsibility<br>• a seal (filing)<br>• attached **observers** that read it for evidence<br>A Challenge may be **cut from a World** (a bounded episode lifted at a Moment), but none is today. | VERTICAL (assessment) on a CORE shape | EARNED (DC) | 01 | test case, scenario, episode |
| **BRANCH** | A **MODELED** INSTANCE derived from a parent cut (see FORK). It never has authority over its parent or over Reality. | CORE | EARNED (DC `decisionBranch`, W Lab) | 01 #6, 02 Lab | speculative transaction (`d/with`), counterfactual |
| **RECORD** | The sequenced entries of one INSTANCE. It is append-only. Each entry is an adjudicated act at a POSITION. | CORE | EARNED (DC `sequence`, W `{at, seq}`, journal) | 01 #14, 02 | event log / command log, journal |
| **POSITION** | The authority-assigned index of an entry; a total order within one INSTANCE. **Wall time is metadata, never order.** | CORE | **RECURRING** | "Ordering comes from `sequence`" (DC); W `seq` | log sequence number |
| **HEAD** | A digest of the record up to a position. It is the *pinned* way to name a history state. | CORE | HYPOTHESIS (no product has a signed head; DF's is 32-bit) | 04, 05, 08 P1 | commit hash, tree head |
| **CUT** | (INSTANCE, POSITION): the state and knowledge **at** a position. Cuts are local today; a verifiable cross-instance cut reference is missing. | CORE | EARNED locally (DC `beforeAct/afterAct/atSeal`; W stop index, `lifecycle`) | 01 #3, 02 | snapshot, as-of, point-in-time |

## 2. Acting

| Term | Definition (v0) | Class | Label | Evidence | Precedent |
|---|---|---|---|---|---|
| **ACT** | An **attributable request** by a SEAT (or, in NAT, an observer) to change an INSTANCE. It names its BASIS. It may be refused. An act is not a fact until adjudicated. | CORE | **RECURRING** | DC opening is an act; W refuses stale acts | command |
| **VERDICT** | The authority's adjudication of an act: `accepted` or `refused(ruleId)`. Refusals are recorded where they matter for knowledge or evidence. | CORE | EARNED (DC records refusals; W stale refusal) | 01, 02 | command validation |
| **EVENT** | A typed fact the SYSTEM emits when an act is accepted or time advances. | CORE | EARNED | both | domain event |
| **ENTRY** | One record item: position + act + verdict + recorded inputs + emitted events + time labels. | CORE | HYPOTHESIS (unified shape) | W2-A | log entry |
| **BASIS** | What an act was decided against:<br>• the **cut** the actor saw (revision/stop/position)<br>• sources **available** to that seat then<br>• sources the occupant **opened** (each an act with a position)<br>• per-rule-input knowability<br>Comprehension is always UNKNOWN. | CORE | **RECURRING**: DC has the read half EARNED; W has the write half EARNED; nobody has unified them | 01 #4; 02 (`expectRevision`, `expectStop`); DC v5 `expectedRevision` | optimistic-concurrency version + information set |
| **RECORDED INPUT** | A nondeterministic input captured in the entry so replay never regenerates it: dice or seed reveal, model output, feed value, clock tick. | CORE | EARNED for dice (W HMAC commit-reveal); HYPOTHESIS for model outputs | 02 Court; 08 P4 | side-effect recording |
| **TYPED SILENCE** | Non-action as a recorded, typed outcome with a declared default: "if the owner does not answer, the usual five stay"; lateness recorded when time advances past due; `null` never zero. | INST | **RECURRING** | 01 #5; 02; DF NO ACT | timeout, default rule |

## 3. Time

| Term | Definition (v0) | Class | Label | Evidence |
|---|---|---|---|---|
| **CLOCK** | A SYSTEM declares a **clock kind** and a **clock authority**. Kinds:<br>• `act-advanced`: time moves only by an attributable act. EARNED in every product.<br>• `scheduled`: a scheduler seat advances on wall-clock ticks, recorded as acts. HYPOTHESIS.<br>• `external`: driven by a Reality feed. HYPOTHESIS. | CORE | see kinds | 02 (c); 01 #14; W2-B |
| **CLOCK AUTHORITY** | The seat or role allowed to advance time. It owns **when, never what**: it cannot change outcomes. | INST | EARNED (W Commissioner closed verb list); the separation principle is a HYPOTHESIS as law | 02 |
| **WORLD TIME** | A label in the declared clock ("Year Two · Week 9", "Tuesday", "stop 7"). **Derived from position**, never an ordering key. | CORE | EARNED (W: "BOW dates display only") | 02 |
| **KNOWLEDGE TIME** | What an audience could know at a cut; this is what "OPEN AT TIME T" usually means. | CORE | RECURRING (as basis) | 01 #4 |
| **COMMISSIONER** | W's clock-authority role. It is a league artifact. | VERTICAL | EARNED | 02; 07 "V" |

## 4. Seats, occupants and authority (institutional profile)

| Term | Definition (v0) | Class | Label | Evidence | Precedent |
|---|---|---|---|---|---|
| **ROLE** | A SYSTEM-defined type of seat: owner, commissioner, teacher, GM, steward. Role names are vertical vocabulary. | INST / VERTICAL | EARNED | 02; DC kernel refuses org/teacher roles as primitives (01 #9) | role |
| **SEAT** | An **occupiable, authenticated position** in an INSTANCE: "Boston owner seat". It is the unit of authority, of information access and of responsibility. | INST | **RECURRING**; authentication EARNED only in W NBA (Harbor seats are labels) | 02 (c), 01 #15 | principal, subject |
| **OCCUPANT** | Who or what sits in a seat: human, model, institution, scripted system or unknown. It carries an attestation, possibly through a delegation chain. Occupants change; seats persist. | INST | **HYPOTHESIS** (no AI occupant has ever run; Harbor `humanIdentityVerified:false`) | 02; 08 P8; W2-D | actor, agent |
| **AUTHORITY** | The capability to perform an act, **derived** from (seat, record facts, SYSTEM rules, time). It is **never asserted in the payload**. | INST | EARNED (W NBA; "legality is a ledger fact") | 02 | capability, ABAC decision |
| **WARRANT** | Limits the seat's grantor places on an occupant: scope, spend and irreversibility caps, time rules. It narrows and never widens. | INST | SPECULATIVE FRONTIER (DF Agent board only) | 04, 08 P3/P8 | delegated credential, macaroon caveats |
| **OBLIGATION / RIGHT** | A dated promise (`open → fulfilled / breached / expired`) or an individually held scarce unit. | INST | **RECURRING** | 02 (×3 in W); DC dated obligations (Avery, Kit) | ODRL duty, REA commitment |
| **AGREEMENT** | Typed offer, immutable versions, counter, expiry. Free text never settles. A general bargaining engine is **REJECTED** for now. | INST | RECURRING (hand-rolled ×4 in W; DC ride and credit terms) | 02 | FIPA-ACL, Contract Net |
| **RESPONSIBILITY** | What a seat is answerable for over a horizon. Today it is prose templates, not a checkable object. | INST | RECURRING as idea; HYPOTHESIS as a machine form | 01 #12 | — |

## 5. Knowledge, truth and reading

| Term | Definition (v0) | Class | Label | Evidence | Precedent |
|---|---|---|---|---|---|
| **AUDIENCE** | The principal a projection is computed for: a seat, the public, a teacher, a commissioner. The public audience **structurally never receives a seat identity**. | CORE | **RECURRING** | W `boardView`; DC teacher reader | principal |
| **PROJECTION** | A **pure function** `(cut, audience) → [Fact | Unknown]`. It cannot write. It replaces "seat-scoped knowledge" as the internal term. | CORE | **RECURRING** | W `hqView`/`boardView`; DC exact reader | CQRS read model, reference monitor |
| **AVAILABILITY** | Whether a source is visible to an audience at a position. It is computed from information rules, not stored. | CORE | RECURRING | DC `availableAt`; W `availableAtTick`, audiences | information-flow policy |
| **FACT** | `{value, status, source, cut}`. The source is a record path/position or an external `{source, date, licence}`. | CORE | **RECURRING** (shape differs) | W `{actual, value, sourcePath}`; DC object readings | provenance-annotated value |
| **UNKNOWN** | A typed value, never absence and never zero: `{kind, reason}`. Candidate kinds:<br>• not-yet<br>• not-recorded<br>• not-available-to-audience<br>• not-modeled<br>• out-of-envelope<br>• withheld-by-rights<br>• censored | CORE | Primitive **RECURRING**; the kind set is **UNRESOLVED** (≥9 product vocabularies) | 01 #5, 02 (d)6, 03 §1.4 | HL7 NullFlavor |
| **STATUS** (epistemic status; replaces "truth grammar") | What kind of claim a value is, **emitted from provenance, never hand-tagged**:<br>• RECORDED: happened in this instance<br>• OBSERVED: sourced from Reality<br>• ASSERTED: a party's claim or promise<br>• AUTHORED: a designer's stipulation<br>• COMPUTED: an exact consequence of stipulated rules<br>• MODELED: output of a model run, with an envelope<br>• GENERATED: output of an AI or a fresh occupant in a branch<br>UNKNOWN is a value kind, not a status. | CORE | The axis is **RECURRING**; the eight-value set is **HYPOTHESIS**; ASSERTED is added from 07 plus both products' "a promise is not a payment" | 04 §6; 07; 02 (d)6 | SDMX OBS_STATUS, PROV |
| **VERIFICATION BASIS** | *How* a reader can check a claim, orthogonal to STATUS: **REPLAYED** (re-executed under the pinned SYSTEM), **SIGNED**, **ATTESTED** (an identity or operator vouches) or **CLAIMED**. | CORE | **CANON-CANDIDATE by correctness** (B); arrived at independently by the tournament's Open advocate, 08 P14 and 07 | T; 08; DC "replay proves consistency, not authenticity" | CT, SCITT, VC |
| **DERIVATION** (replaces "causal engine") | The rule-cited lineage of a value ("because rule R applied to facts F"). **Causal claims about Reality are refused** unless a model declares them. | CORE | **RECURRING** | DC provenance "deliberately no inferred or caused"; W causal projection refusal | how-provenance, trace precedents |
| **VALIDITY ENVELOPE** | The declared domain where a SYSTEM's models hold. A modeled answer outside it is **withheld as Unknown (out-of-envelope)**, never guessed. | CORE | Refusal **RECURRING** (DC branch `null`; W Lab "unsupported rather than guessed"); the envelope *description* is HYPOTHESIS | 01 #6, 02 Lab; 07 #1 missing | VV&A, model card |
| **REALITY** | The referent as **observed**. It enters only as sourced, dated, licensed OBSERVED facts, and corrections arrive as new observations. **Reality is never forked and never written by a branch.** | CORE | EARNED in part (W real identity as a "frozen dated snapshot") | 02 | system of record, external feed |

## 6. Moments, forks and exports

| Term | Definition (v0) | Class | Label | Evidence | Precedent |
|---|---|---|---|---|---|
| **MOMENT** | A named reference to an act in a record, with that act's BASIS, its before/after cut and an **append-only** list of later consequences. It is optionally *sealed* when a declared question can no longer be answered by later events. **A view, never a new record: it grants no evidence.** | CORE | Concept **RECURRING**; shape **HYPOTHESIS** (DC pointer; W `LeagueMoment` with `known[]`, consequences, `sealedAt`; Harbor owner seal; Foundry before/after) | 01 #8, 02 | decision point + information set |
| **FORK** (user-facing: **WHAT IF?**) | Creating a BRANCH. It records:<br>• **lineage**: parent instance at head, plus the cut<br>• **interventions**: the changed or added acts, or a changed model<br>• **suffix policy**: what happens to parent acts after the cut<br>• **SYSTEM pin**<br>• **envelope check**<br>• **status MODELED**<br>Its id is content-derived. It **never writes back**. | CORE | **EARNED** (DC SHA-256 branch id; W Lab ×3); suffix policy **UNRESOLVED** | 01 #6, 02 | branch, counterfactual intervention |
| **SUFFIX POLICY** | One of:<br>• `replay-unchanged` (DC)<br>• `drop` (W Harbor Lab)<br>• `redecide(policy)` (supply chains need it)<br>• `fresh-occupants` (acts become GENERATED)<br>Every fork must declare one. | CORE | **UNRESOLVED**: the products disagree | 02 (d)3; 07 | fixed-policy vs equilibrium counterfactual |
| **CAPSULE** (DC product name: *Decision Receipt*) | A portable export of a Moment or cut: reference + basis + before/after + attached material + VERIFICATION BASIS. Unsigned capsules are REPLAYED or CLAIMED, never "proof of authenticity". | CORE | EARNED (DC, synthetic only, three families) | 01 #7 | replay file, reproducible artifact |
| **BOUNDARY EXPORT** | A derived, read-only, versioned object that crosses between instances or products. It is re-read fresh before use and **recognition-only unless a contract says otherwise**. Scores, money and evidence are **unexpressible** across it by type. | CORE | **RECURRING** | DC kernel carry + `not-evidence`; W institution crossing + `bow-bridge-1` | purpose limitation, contract test |
| **PAIRWISE REFERENCE** | Cross-boundary identity for a person or seat. There is **no universal person id**. | CORE | **RECURRING** (DC OIDC-style pairwise subject; W bridge pairwise HMAC subject) | 01, 02 | OIDC pairwise `sub` |

## 7. Objects and place

| Term | Definition (v0) | Class | Label | Evidence |
|---|---|---|---|---|
| **OBJECT** | A **scoped identity** that persists across cuts within one lineage (an instance and its branches). Its state is projected from the record, not stored separately. **A global cross-instance object ID is REJECTED** (both products refuse it). | CORE | RECURRING | DC `ObjectAddress` "never a cross-case object ID"; W objects are projections with identity and lifecycle |
| **COUNTERPART** | A declared link between objects in different instances ("World Jaylen Brown ↔ real Jaylen Brown"): pairwise, typed and non-transitive. | CORE | HYPOTHESIS | — |
| **PLACE** | A **state-free index**: id, role/purpose and adjacency. Carrier slots are keyed by object id. **PLACE is not canonical state (REJECTED).** A spatial attribute a rule reads (capacity, adjacency cost) is ordinary state. | INST, representation | Index **HYPOTHESIS**; canonical place **REJECTED** | 03 §4; W topology is a static constant |
| **REPRESENTATION** | A perceptible rendering of a projection for a device and modality. It has **no authority**. | CORE | RECURRING | 03 §1.7 |
| **CARRIER** | A claim-bearing element of a representation, bound to object id + source path + status + cut. | CORE (rep) | EARNED (W-3D) | 03 §1.2 |
| **ATMOSPHERE** | A non-claim-bearing element, identical across histories at the same cut. | CORE (rep) | EARNED (DC: the room image is atmosphere) | 03 §2 R1 |
| **DIRECT** | The universal semantic reading of a projection (accessible text/structure). Every richer representation must reach **parity** with it. | CORE (rep) | RECURRING | 03 §1.1; DC semantic HTML |

## 8. Profiles

| Term | Definition | Label |
|---|---|---|
| **CORE** | What every executable system needs:<br>• SYSTEM, INSTANCE, RECORD, POSITION, CUT, ACT, BASIS<br>• RECORDED INPUT, PROJECTION<br>• FACT and UNKNOWN, STATUS, VERIFICATION BASIS<br>• DERIVATION, VALIDITY ENVELOPE<br>• FORK and BRANCH, CAPSULE, BOUNDARY EXPORT<br>• the REPRESENTATION laws | HYPOTHESIS (each term labelled above) |
| **INSTITUTIONAL PROFILE** | For agent worlds:<br>• SEAT, ROLE, OCCUPANT, AUTHORITY, WARRANT<br>• CLOCK AUTHORITY<br>• OBLIGATION, AGREEMENT, RESPONSIBILITY, TYPED SILENCE | HYPOTHESIS; all current BOW products live here |
| **NATURAL-SYSTEM PROFILE** | Observer seat and instrument; measurement with uncertainty, censoring and freshness; rival models (model-forks); multi-scale coupling; continuous dynamics | SPECULATIVE FRONTIER (unbuilt; DF boards only depict) |

## 9. Terms dropped or demoted

| Old term | Status | Why | Use instead |
|---|---|---|---|
| "causal engine" | REJECTED | It is derivation plus depth-2 search (05) | DERIVATION |
| "act log" | REJECTED | It holds commands and their verdicts | RECORD / ENTRY |
| "lockstep, same World without a server" | REJECTED | It needs a shared store and orders by actor clock (05, 08) | replay of a sequenced record |
| "truth grammar" | Renamed | It is a taxonomy plus render enforcement | STATUS + legend |
| "seat-scoped knowledge" | Renamed | Reference monitor / information set | PROJECTION per AUDIENCE |
| `bow://…#hash8` | REJECTED as built | 32-bit, five grammars, no resolver | the address hypotheses in `BOW_PROTOCOL_HYPOTHESES_V0.md` |
| "Decision Receipt" (as a platform term) | Demoted to a product name | Unsigned; proves consistency, not authenticity | CAPSULE |
| "Court", "Film", "Commissioner", "League Office" | VERTICAL | Basketball and league artifacts (07 V) | multi-resolution episode (HYPOTHESIS); CLOCK AUTHORITY |
| "Foundry" | **UNRESOLVED name collision** | DC: production/review grammar. W: declarations compiled to a resource engine. | Pick one before any shared spec |
| "Lab" | Product surface | A UI for comparing BRANCHES | FORK / BRANCH |
| "World" as the universal noun | Narrowed | DC instances are not persistent institutions | INSTANCE (kinds: WORLD, CHALLENGE, BRANCH) |
