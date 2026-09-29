# BOW Medium Contract v0: proposal

Status: **proposal, 2026-09-29. Nothing in this document is canon.** It is written for the founder, who alone can promote any of it.

**What this is.** A proposed semantic contract for BOW as a medium of executable systems. It separates what current BOW products have **earned** from what the medium would need and what is only ambition. Every law and answer carries one of the truth labels **EARNED · RECURRING · HYPOTHESIS · SPECULATIVE FRONTIER · REJECTED**, defined in `BOW_SYSTEM_VOCABULARY_V0.md`.

**What this is not.** It is not a kernel, not an API, not Browser code, and not a decision. Neither product repository was edited.

**Evidence base:**
- Three repositories refreshed at exact SHAs (`SOURCE_STATE.md`).
- Eight wave-1 reports, five wave-2 reports and three blind tournament papers (`research/`).
- A 44-row conflict matrix (`research/PARENT_SYNTHESIS_W1.md`).
- Two independent adversarial critics (§11).

The companion documents hold the detail:
- Vocabulary: `BOW_SYSTEM_VOCABULARY_V0.md`
- Protocol: `BOW_PROTOCOL_HYPOTHESES_V0.md`
- Representation: `BOW_REPRESENTATION_CONTRACT_V0_PROPOSAL.md`
- Portability and composition: `BOW_PORTABILITY_AND_COMPOSITION_V0.md`
- Time and forks: `BOW_TIME_AND_FORKS_V0.md`
- Platform tournament: `BOW_OPEN_PLATFORM_TOURNAMENT.md`
- Evidence: `BOW_MEDIUM_EVIDENCE_LEDGER.md`
- Kills: `BOW_MEDIUM_KILL_LIST.md`
- Open questions: `BOW_OPEN_QUESTIONS_V0.md`

---

## 1. The thesis as claims that could be false

| Thesis | Testable claim | Where it stands |
|---|---|---|
| "A new medium for understanding and interacting with reality" | A reader can enter, question, fork and share **any** executable system with **one grammar**, and a non-specialist can author one. Operationally, a medium is **citable** without its author, **portable** beyond its first tool, and **authorable** by non-specialists (report 06 §1). | **Not yet true.** No stable address, no portable record, no outside author, no user (06 H8; Ledger F). |
| "Make systems executable" | A system's rules, record and seats can be separated from any one product and run, replayed and forked by a conforming runtime. | **Partly earned inside each product, not across them.** DC replays five-plus families; W's Harbor replays; W's NBA World does *not* replay (stored state plus journal). |
| "Enter, understand, operate, change, fork, share" | These map to OPEN (with audience and cut), PROJECTION plus DERIVATION ("how do we know?"), ACT with BASIS, SYSTEM governance acts, FORK, and CAPSULE/REFERENCE. | Every verb has an EARNED mechanism in at least one product (§3). None has a shared, cross-product one. |
| "External intelligence providers are interchangeable occupants" | An AI can occupy a seat under the same rules as a human, and swapping providers changes only occupant metadata. | **No AI occupant has ever run in BOW.** HYPOTHESIS (§5 Q12). |

## 2. The shape of the medium: one core, two profiles

The cross-domain stress test (07) sorted the candidate primitives cleanly. **Agency is not universal.** Forcing actors and obligations onto chemistry is the sports-specific concept "pretending to be universal" that the founder asked this run to expose.

| Layer | Contents | Where BOW lives |
|---|---|---|
| **CORE** (every executable system) | SYSTEM and INSTANCE · RECORD, POSITION, CUT · ACT with BASIS · RECORDED INPUTS · PROJECTION per AUDIENCE · FACT and UNKNOWN · STATUS · VERIFICATION BASIS · DERIVATION · VALIDITY ENVELOPE · FORK and BRANCH · CAPSULE and BOUNDARY EXPORT · the representation laws | Both products implement pieces of it, in incompatible dialects |
| **INSTITUTIONAL PROFILE** (agent worlds: leagues, classrooms, firms, airlines, supply chains) | SEAT, ROLE, OCCUPANT, AUTHORITY, WARRANT · CLOCK AUTHORITY · OBLIGATION, AGREEMENT, RESPONSIBILITY · TYPED SILENCE | **Every current BOW product lives here** |
| **NATURAL-SYSTEM PROFILE** (chemistry, cells, climate) | Observer seat and instrument · measurement uncertainty, censoring, freshness · rival models (model forks) · multi-scale coupling · continuous dynamics | **Unbuilt.** DF's Chemistry board is "one model plus slaved illustration" and Biology is "an authored lookup table" (07). SPECULATIVE FRONTIER. |

**Platform layers** (L0–L9 from the tournament) sit on this core. The layers where openness, closure and monetization are decided are argued in `BOW_OPEN_PLATFORM_TOURNAMENT.md` §5.

## 3. The proposed laws

Each law gives its label, the strongest evidence and the strongest counter-evidence. A law labelled RECURRING is independently enforced in both products today (subject to the independence caveat in the Vocabulary). No law is canon until the founder says so.

| # | Law | Label | Evidence | Counter-evidence / limit |
|---|---|---|---|---|
| **M1** | **Definition vs instance.** A SYSTEM is a versioned executable definition. An INSTANCE (World, Challenge or Branch) is one history-bearing execution of a SYSTEM version under **one authority**. The medium standardizes what an instance can **show and prove** (an exported record envelope), **not how it computes**: event-sourced folds and stored state with invariants are both allowed, provided the instance declares which. | RECURRING (split); the interchange-not-storage stance is HYPOTHESIS | DC frozen package vs attempt; W rules version plus `LessonModule`/Foundry vs `WorldState`/chapter chain. **NBA World One keeps no act log** (W2-A), so mandating event sourcing would exclude BOW's most developed World. | W holds three unrelated instance models (02) |
| **M2** | **Order is position; time moves only by recorded acts.** Order is the authority-assigned position. Wall time is metadata that may *trigger* a time change but is never its coordinate. | **EARNED ×4** for act-advanced time; HYPOTHESIS as a universal law | W NBA `advance(expectStop)`; Harbor `advance_day`; Foundry `advance`; DC learner `advance`; DC `sequence` | DF Live World violates it and breaks (K1). Real-time domains need TICKED/FEED clocks (W2-B). |
| **M3** | **Every act names its basis:** the cut it was decided against, what was available, and what was opened. Stale acts are refused. | RECURRING in halves; unified HYPOTHESIS | DC read side (available, opened with ref, knowable per input); W write side (`expectRevision` ×4); DC v5 `expectedRevision` | Nobody has unified the halves; comprehension is always UNKNOWN |
| **M4** | **Nondeterminism is recorded, never regenerated.** Dice reveals, model outputs, feed values and ticks are recorded inputs. | CANON-CANDIDATE (correctness) | W HMAC commit-reveal dice released one shot at a time | Model outputs never tested in BOW; temperature-0 LLMs are not deterministic (W2-D) |
| **M5** | **Pinned versions.** Every entry is read under its epoch's SYSTEM digest. Old records are refused or withheld, **never silently migrated**. `null` never means "current". | RECURRING | DC `version:null` explicit legacy; W save keeps birth rules; unsupported versions refused | Rules are pinned by *label*, not digest, in both products (W2-D) |
| **M6** | **Reads are pure projections for an audience.** The public audience structurally never receives a seat. | RECURRING | W `hqView`/`boardView`; DC teacher exact reader; E-main contract | Guards display, **not inference**: derived secrets and timing leak (04, 08 P9) |
| **M7** | **Fact, typed Unknown or Refused, never bare absence.** Every projected value is one of three things:<br>• `Fact{value, status, source, cut}`, where a *known absence* is a positive fact (`ABSENT`, e.g. "no receipt yet")<br>• `Unknown{kind, reason}`, with kinds including `not-observable` for what the instrument cannot see (comprehension, delivery)<br>• `Refused{kind}` for integrity or version refusals<br>Absence is never zero. | RECURRING (shape); kind set UNRESOLVED | DC present/absent/unmodeled and coded unknowns; W `{actual, value, sourcePath}` or `{unknown, reason}`; W2-A mapping table | At least nine incompatible vocabularies (K21). W's `private` means two opposite things (K28). |
| **M8** | **Status comes from provenance and is relative to the reading instance.** STATUS is emitted by the engine, never hand-tagged. An event RECORDED in a branch reads as MODELED from its parent. | HYPOTHESIS | W: "'Actual' always means recorded inside the simulation"; DF hand-tagging failed repeatedly (K6) | The seven- or eight-value set is untested for legibility |
| **M9** | **Verification is stated on two axes, separate from status.** Every exported claim says how it can be checked: **consistency** (REPLAYED, INVARIANTS or NONE) and **authenticity** (NONE, SIGNED or ATTESTED). | CANON-CANDIDATE (trust) | DC: "replay proves consistency, not authenticity". The bridge is HMAC-tagged but unreplayable (W2-A), which is why these are two axes, not one scale. Three independent arrivals at the idea (T, 08, 07). | Nothing is signed today |
| **M10** | **Branches are modeled and never write back.** A branch is MODELED, declares its interventions and **suffix policy**, and can never write its parent, Reality or any other instance. **History never merges**; only rule proposals and cited findings cross back. | EARNED (mechanism); suffix policy UNRESOLVED | DC `decisionBranch`; W Lab ×3 | The products disagree on suffix semantics (replay vs drop) |
| **M11** | **Refuse outside the envelope.** A modeled answer outside the SYSTEM's validity envelope is refused as `Unknown{out-of-envelope}`, never guessed. | RECURRING (refusal); envelope description HYPOTHESIS | DC branch `null`; W Lab "unsupported rather than guessed" | Neither product *describes* its envelope |
| **M12** | **Derivation, not causation.** "How do we know?" walks rule-cited lineage. Claims that something *caused* something in Reality are refused unless a declared model makes them, and then they are MODELED. | RECURRING | DC provenance "deliberately no inferred or caused"; W "no saved fact proves the job caused a basket" | Lineage fails on feedback loops and simultaneity (07) |
| **M13** | **Authority is derived and never crosses instances.** Authority comes from an authenticated seat plus record facts plus rules plus time, and is never asserted in the payload. Nothing in one instance can write another. | EARNED (W NBA); HYPOTHESIS as law | W authority is derived, "legality is a ledger fact"; W ADR option B | Harbor and all DC synthetic families are unauthenticated labels (K9) |
| **M14** | **Closed boundaries.** Only derived, read-only, versioned, closed-schema **boundary exports** cross instances. Certain meanings (score, money, evidence) are unexpressible across them, and identities cross only as pairwise references. | RECURRING (cross-pollinated) | DC kernel guard; W `bow-bridge-1` | Synthetic rehearsal only; no production consumer |
| **M15** | **Representation laws.** Representations never write, widen, upgrade status, exceed source precision, draw unknown as value, change claims across tiers, show stale cuts, or imply mechanisms the model lacks, and they reach **Direct parity**. | RECURRING (core parts) | W-3D story functions plus Direct tests; DC "room image is atmosphere" | Counterexamples in code (03 §2); human value unknown |
| **M16** | **Reality is observed, never forked or written.** Reality enters only as sourced, dated, licensed OBSERVED facts. Corrections arrive as new observations that supersede in projection, never by rewriting. | HYPOTHESIS (partly EARNED) | W real identity is a frozen dated snapshot; E-main dates real facts | No live feed exists; the licence axis is unbuilt |
| **M17** | **Occupants are interchangeable.** Humans and models occupy seats under the same rules. Models stay outside the fold (outputs are recorded inputs), fairness is a sealed-window rule, and the time authority is never a stakeholder. | HYPOTHESIS | 08 P3/P4; W2-D; W2-B T19 | No AI occupant has ever run |

## 4. The most important missing primitive: the ACT BASIS

Each product records **half** of the same thing:

- **DC** records the **read side** of a decision: what was available, what was opened (each opening an act with a position), what was knowable per rule input, and "comprehension: unknown" (01 #4).
- **W** records the **write side**: the revision or stop the act was decided against, with stale acts refused (02 (c); DC's v5 server does the same).

No product joins them into one object that travels with the act:

> *This act was made by this seat, occupied by this occupant, against this cut, with these sources available and these sources opened.*

With the basis made first-class, several things become **derivations instead of per-product machinery**:

- **Knowability** ("what did they know?") is the basis itself.
- **Staleness** ("was this decided on old state?") is the basis cut against the head.
- **Fairness** for AI occupants is a constraint on basis-to-act latency, or a sealed window (T14, T19).
- **Moments** are an act plus its basis plus later consequences. No new record is needed, and a Moment "grants no evidence" (DC).
- **Capsules** are exports of an act-with-basis (DC Receipt v1 already carries both halves for one family).
- **Fork honesty**: a replayed suffix act whose basis no longer holds is refused as `redecide-required` (W2-B §3).
- **Cross-instance acts** name their basis in both instances, forming the bilateral cross-reference of Composition C3.

Label: **HYPOTHESIS**, with each half EARNED in one product. It is the single change that would make the two products' semantics composable.

**Correction from the wave-2 falsifier (W2-A).** The two halves are *not symmetric*, and the primitive is narrower than first drafted:

1. **The write half is a request guard, not a record.** Neither product accepts an act whose basis is not the head, so on every *accepted* entry the cut is simply the previous position; storing it adds nothing. The write half matters for requests that are refused as stale, which never become entries. (NBA owner acts carry no basis at all. Only Commissioner, film, staff-loan and Court acts do.)
2. **The read half is the substance.** It covers what was *available* to the seat and what the occupant *opened*, at that position.
   - Under a **fold** (DC), availability is derived on read and openings are recorded acts.
   - Under **stored state** (NBA), the read half must be **materialized at act time**, because it cannot be re-derived later. NBA's `LeagueMoment.known[]` is exactly such a materialization, but as hand-written prose with no source ids and no "opened" record.
3. **So the act basis, stated precisely:** *every accepted act is decided against the head, and the record must let a reader recover what was available to that seat and what its occupant opened at that position, either derivable (fold) or materialized (stored state).*
   - Grain varies (revision, stop, ordinal, round) and must be typed.
   - Comprehension is always `Unknown{not-observable}`.

This is still the missing unifying primitive (for Moments, capsules, fairness and fork honesty). What it needs from W is not a new mechanism but **materialized, sourced availability and opening at act time**. HYPOTHESIS.

## 5. The 25 deep questions

Answers are labelled. "Open" means explicitly left unresolved in `BOW_OPEN_QUESTIONS_V0.md`.

1. **What is SYSTEM?** A versioned executable definition: schema, rules, seats and roles, information rules, clock kind, validity envelope and representation affordances. It is named by `system-id @ version-digest`. It is *not* the real thing (that is the REFERENT) and *not* a running history (that is an INSTANCE). RECURRING (definition/instance split); unified form HYPOTHESIS.
2. **What is WORLD?** An INSTANCE with an **open horizon**:
   - it persists across sessions;
   - it may have many seats;
   - its time continues whether or not a given occupant is present;
   - its SYSTEM changes only by recorded governance.

   EARNED in W; the general definition is HYPOTHESIS. "World" is **not** the universal noun, because DC's instances are not persistent institutions. The universal noun is INSTANCE.
3. **Does every World have a System, or vice versa?** Every World runs under exactly one SYSTEM version at each position; versions change only by a recorded act or a successor instance. A SYSTEM may have zero, one or many instances (DC runs one per attempt). HYPOTHESIS, consistent with both products.
4. **What distinguishes WORLD from CHALLENGE?**

   | | Challenge | World |
   |---|---|---|
   | Horizon | Bounded | Open |
   | System version | Frozen | Governed |
   | Opening | Designed initial cut and information schedule | Arises from history |
   | Responsibility | One | Many |
   | End state | Sealed/filed | Continues |
   | Readers | **Observers** read it for evidence | Occupants live in it |

   Structurally both are INSTANCES. A Challenge could be **cut from a World** at a Moment (a bounded episode lifted with a frozen state), but no product does this yet. EARNED (DC Challenge); the cut-from-World relation is HYPOTHESIS.
5. **What is a MOMENT?** A **named reference** to an act in a record, carrying:
   - its BASIS;
   - its before/after cut;
   - an append-only list of later consequences;
   - optionally, a seal once a declared question can no longer be answered.

   It is a **view, never a new record**, and grants no evidence. The concept is RECURRING (DC pointer; W `LeagueMoment` with `known[]` and consequences). Its shape is HYPOTHESIS; W says it is "not a universal event schema".
6. **What is a FORK?** The creation of a MODELED BRANCH, recording:
   - lineage (parent at head, plus the cut);
   - interventions (act, assumption, rule, model or Reality snapshot);
   - suffix policy;
   - SYSTEM pin;
   - validity check;
   - no writeback;
   - a content-derived id.

   It is not Save As. EARNED (mechanism); suffix policy **open**.
7. **Is a branch itself a World?** Not by default: a branch is an analysis instance with no independent authority. A **promotion act** gives it a clock authority, seats and governance, making it a World that stays MODELED relative to its parent and to Reality forever. HYPOTHESIS.
8. **What is an OBJECT?** A **scoped identity** that persists across cuts within one lineage, with state projected from the record. **Global object IDs are REJECTED**; both products refuse them. Objects in different instances relate only through typed, pairwise COUNTERPART links. RECURRING / HYPOTHESIS.
9. **Is ROLE separate from AUTHORITY?** Yes.
   - ROLE is a vertical vocabulary of seat types.
   - SEAT is an occupiable, authenticated position.
   - AUTHORITY is *derived* from seat, record facts, rules and time (W: "legality is a ledger fact"; co-owners share authority).
   - WARRANT narrows what an occupant may do.

   EARNED (W NBA) for derivation; HYPOTHESIS as law.
10. **Where does KNOWLEDGE live?** In three places, and never as a stored "facts known" list:
    - **truth** is the record;
    - **availability** is *computed* by information rules for an audience at a position;
    - **exposure** is *recorded* as opening acts.

    Knowability at an act is the basis. EARNED (DC); RECURRING (W `availableAtTick`, audiences, `known[]`). What a *person* understood is always UNKNOWN.
11. **What is an ACTOR?** An external identity (human, model, institution or scripted system) that **occupies** a seat and submits acts. It is authenticated and attested outside the instance; the seat is inside it. BOW's word is OCCUPANT. HYPOTHESIS: only W NBA authenticates, and no model occupant has run.
12. **Can humans and models occupy the same ROLE without changing semantics?** Yes for the role and seat rules. What differs lives *around* the seat (W2-D §1.1):
    - attestation (a delegation chain, each link narrowing);
    - warrant (scope, spend and irreversibility caps);
    - time rules (sealed windows, minimum deliberation, act budgets, declared in the System);
    - replay class (outputs recorded, never re-queried; fresh-occupant acts in forks are GENERATED).

    Rules may distinguish occupant kinds only explicitly. HYPOTHESIS.
13. **Who owns TIME?** The SYSTEM's declared **clock authority**, which owns *when, never what*. Advancing time is itself an attributable act. For TICKED clocks the clock seat is a scheduler; for FEED clocks the external authority owns the label and BOW records it. EARNED for ACT clocks; HYPOTHESIS for TICKED and FEED.
14. **What provides authoritative event ordering?** The instance's single sequencer (its authority), guarding in the order dedupe → basis → rules → append. **Across instances there is no global order**, only causal order through pinned cross-references. A composite cut is a *vector* of positions (T16). EARNED within an instance; HYPOTHESIS across.
15. **What is an ACTION versus an EVENT?**
    - An ACT is a request that may be refused.
    - An EVENT is a typed fact the SYSTEM emits once the authority accepts an act or time advances.
    - An ENTRY is the act, its verdict, the recorded inputs and the emitted events.

    RECURRING. The CS term is command vs event; "act log" is REJECTED vocabulary.
16. **What makes an event canonical?** Three conditions:
    - it was sequenced by the instance's recognized authority;
    - under the pinned SYSTEM version;
    - with all nondeterministic inputs recorded.

    **Canonical is relative to an instance, never a claim about Reality**, and a fork's events are canonical only inside the fork. HYPOTHESIS, consistent with EARNED practice.
17. **What does PROVENANCE attach to?** Two things, which DC already keeps separate:
    - **record provenance** on every entry: seat, occupant, basis, SYSTEM version, recorded inputs, external sources with date and licence;
    - **derivation lineage** on every projected value: a source path into the record plus the rule that computed it.

    STATUS is a *summary* of provenance and VERIFICATION BASIS says how it can be checked. RECURRING.
18. **What is canonical STATE versus a PROJECTION?** STATE is the authority's state at a cut, re-derivable from the record where the instance is REPLAYABLE and journaled where it is not (W NBA). A PROJECTION is a pure, read-only function of (cut, audience) returning Facts and Unknowns. RECURRING.
19. **What is a REPRESENTATION?** A perceptible rendering of a projection for a device, modality, question and task. It is made of **carriers** (bound to object, source, status and cut) and **atmosphere** (identical across histories at the same cut). It has no authority. RECURRING.
20. **What may a representation NEVER do?** Laws L1–L13 of the Representation Contract. It may never write, widen, upgrade status, exceed source precision, draw unknown as value or absence as fact, change claims across tiers, show a stale cut as current, imply a mechanism the model lacks, lose Direct parity, or put seat-private carriers on a public surface. RECURRING (core); HYPOTHESIS (full set).
21. **Is PLACE only a representation, or can it be canonical state?**
    - A place's *geometry and topology* are **never canonical state**: REJECTED, see K14.
    - A spatial attribute that a rule reads (capacity, travel time) is ordinary state.
    - A place used to organize a system is a **state-free index** (HYPOTHESIS).
    - Whether *externally grounded* place (real geography that many systems attach to) is a separate meaning is tested in §6.
22. **What is REALITY?** The referent **as observed**: sourced, dated, licensed OBSERVED facts, corrected by new observations, **never forked, never written by a branch, never contained by BOW**. A World may start from a Reality snapshot and diverge, and then its facts are RECORDED in the World, not OBSERVED. HYPOTHESIS, partly EARNED (W real identity as a frozen dated snapshot; the "real clubs and players, a simulated season" disclosure).
23. **How should BOW represent UNKNOWN?** As a typed value with a reason, never absence, zero or a default look. Candidate kinds:
    - not-yet
    - not-recorded
    - not-available-to-audience
    - not-modeled
    - out-of-envelope
    - withheld-by-rights
    - censored

    Stripped material in portable bundles appears as Unknowns with digests, so a reader can prove *that* something was withheld. The primitive is RECURRING; the kind set is **open**.
24. **What is the minimum semantic unit that can be shared?** Two answers:
    - The minimum *reference* is `(system@digest, instance, head, position, audience)`, i.e. portability level L0.
    - The minimum *meaningful* shareable unit is a **CAPSULE**: one act with its basis, the before/after cut, typed Unknowns and a stated verification basis (L1).

    DC Receipt v1 is a synthetic instance of the capsule. EARNED (synthetic); HYPOTHESIS as the medium's unit.
25. **What would a BOW-compatible runtime have to implement?** §8.

## 6. Place in two meanings

**Result of the founder's targeted test (W2-E).** This section is filled from `research/wave2/W2E_PLACE_TWO_MEANINGS.md` and the parent's adjudication. It appears in the final version below.

*(Pending the W2-E report at the time of drafting; see the final section 6 below.)*

## 7. One record for two products (W2-A): the cheapest falsifier, run on paper

**Test.** Seven real specimens were mapped field by field into the parent's candidate record: DC Market act, DC v5 server act, DC modeled branch, NBA owner act with Commissioner advance, NBA `LeagueMoment` and Court possession, Harbor chapter entry, and a `bow-bridge-1` message.

**Verdict: YES WITH CHANGES.** There is no blocking mismatch. Nine groups of edits produced the revised envelope in `BOW_PROTOCOL_HYPOTHESES_V0.md` §2. HYPOTHESIS: the mapping is on paper; nothing was run.

**What the test established (EARNED facts):**
- **NBA World One has no act log.** It keeps stored state and row snapshots, and owner choices are last-write-wins slots. So the envelope is an **export and verification format**, not a storage mandate (M1).
- **Every product already records effect deltas with a cause and a rule** (DC `causalChanges`, Harbor edges, NBA transfers, Foundry `resourceDeltas`). The first candidate had no place for them. Now `effects[{object, before, after, rule, reads}]` does, and `reads` is what knowability-per-input needs.
- **Continuations are not forks.** Harbor chapters embed predecessors, and NBA Season Two carries from Season One. `origin.kind: continuation` with status `CARRY`.
- **Refusals come in two kinds.** Request-level refusals (stale, duplicate, sealed, rate-limited) never become entries anywhere. Recorded refusals do become entries (DC Market).
- **Canonicalization is badly fragmented.** DC has at least **17** canonical-JSON functions (13 using `localeCompare`, which is locale-dependent) and W has **7**. One function plus an algorithm tag is cheap. **Digest scope is not unifiable** and must be declared per SYSTEM (DC pins prose, while W's legacy replay strips it).
- **Vocabulary defects:**
  - W's `private` status means two opposite things.
  - DC's `absent` is a positive fact, not an Unknown.
  - "What the instrument cannot observe" had no kind, so `not-observable` is added.
- **Address needs:** named cuts (`before:n`, `after:n`, `sealed`, `at:<label>`), a chain frame (Harbor), authorized audiences, opaque pairwise references (the bridge), and act references by idempotency key.

**What the test did not establish.** That an outside implementer can build a reader from the spec alone. That is the next falsifier (§12, item 9).

## 8. Conformance: what a BOW-compatible runtime must implement

Proposed levels (HYPOTHESIS). They follow portability levels L0–L4 (`BOW_PORTABILITY_AND_COMPOSITION_V0.md`), and **the conformance vectors are the specification** (Tournament §4).

| Level | Must implement | Proves itself by |
|---|---|---|
| **R — Reader** | JCS canonicalization and SHA-256; resolve an L0 reference; open an L1 capsule; project Facts and Unknowns for an audience; render Direct; report the verification basis honestly | Golden vectors plus tamper cases (refuse altered records) |
| **V — Verifier** | Everything in R, plus replay of an L2 bundle under a digest-pinned rule artifact in a deterministic sandbox with fuel and memory caps; era-faithful replay; refusal on divergence | Reproduce the expected head exactly |
| **B — Brancher** | Everything in V, plus fork with declared interventions and suffix policy, envelope refusal, MODELED/GENERATED status, no writeback, content-addressed branch ids, `redecide-required` reporting | Fork vectors (same fork, same id) |
| **H — Host** | Everything in B, plus: authoritative sequencing; seats and authentication; derived authority; basis checks and stale refusal; clock authority; recorded inputs; audience projections; boundary exports; signed heads | Attestation plus an external log of heads (T C3) |

**What no conforming runtime may do:** write across instances, silently migrate versions, regenerate recorded inputs, upgrade status, or render beyond a projection.

## 9. What is actually new

Wave 1's CS critic (05) found **no new mechanism**: every algorithm is textbook. What survived as possibly new is a set of **enforced separations for human readers**:

1. **The knowability ladder bound to human decision attribution.** Available vs opened vs knowable-per-input at an act, recomputable by a third party through replay. RECOMBINATION, with the combination aimed at a new purpose.
2. **Conflation made unrepresentable.** Actual vs modeled vs evidence, promise vs fact, and authored vs observed are separated *by type and gate*, not by metadata an author may forget. POSSIBLY NEW as an application constraint.
3. **The act basis as the unifying object**, if §4 survives. HYPOTHESIS.
4. **One grammar across instance kinds**: the same OPEN / WHY / WHAT IF / SHARE over a bounded evidence episode (Challenge) and a persistent institution (World). HYPOTHESIS; this is exactly what the two products have *not* yet shown.

Everything else — event sourcing, version pinning, per-audience projections, counterfactual branches, hash chains, content addressing, federated composition — is known computer science in a new combination. That combination is aimed at a new audience: people who are not programmers, asking "what happened, how do we know, and what if?".

## 10. Distance ladder

| Distance | What |
|---|---|
| **Earned now** (in at least one product) | Act-advanced time; order by sequence; replay with refusal (DC, Harbor); knowability at act (DC); stale refusal (W, DC v5); audience projections; Fact or Unknown; modeled branches; envelope refusal; derivation without causation; boundary guards; representation without authority, with Direct parity; synthetic capsules |
| **Next** (founder decision plus weeks of work) | One canonicalization and digest; the unified act basis; one address grammar; rules pinned by digest; signed heads; one Unknown kind set and status axis with mapping tables; one real cross-instance act with bilateral references (Harbor↔NBA scouting) |
| **Later** (needs users and a second party) | A spec-only outside implementer; an outside author shipping a World; a real shared-store World with occupants; an AI occupant in a sealed window; a portable L2 replay across runtimes |
| **Far** (SPECULATIVE FRONTIER) | Natural-system profile; writeback ports; delegation chains; federation among independent hosts; public fork communities; Reality feeds with licence axes; billions of instances |

## 11. Critic objections and responses

*(Filled after the two independent Opus critics report.)*

## 12. Founder packet

*(Written last, after the critics.)*
