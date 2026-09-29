# BOW Medium Contract v0: proposal

Status: **proposal, 2026-09-29. Nothing in this document is canon.** It is written for the founder, who alone can promote any of it.

**What this is.** A proposed semantic contract for BOW as a medium of executable systems. It separates what current BOW products have **earned** from what the medium would need and what is only ambition. Every law and answer carries one of the truth labels **EARNED · RECURRING · HYPOTHESIS · SPECULATIVE FRONTIER · REJECTED**, defined in `BOW_SYSTEM_VOCABULARY_V0.md`. The founder's matrix classes (CANON-CANDIDATE, VERTICAL-SPECIFIC, UNRESOLVED) are kept in a separate column and are never truth labels.

**How to read it after the critics.** An adversarial critic (§11, S15) argued that specifying a medium with zero users repeats Xanadu's failure. The parent accepted that. This document is therefore:
1. a **convergence hygiene standard** for the two existing products, useful whether or not BOW is a medium;
2. a **test plan** whose decisive experiments are in §12, item 9.

It is **not a specification to publish.** The medium thesis currently has no demonstrated new capability (§9).

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

## 3. The proposed laws (revised after both critics)

Each law has two independent columns:
- a **truth label** (EARNED, RECURRING, HYPOTHESIS, SPECULATIVE FRONTIER or REJECTED);
- a **matrix class** from the founder's synthesis categories (CANON-CANDIDATE, RECURRING, VERTICAL-SPECIFIC, UNRESOLVED, REJECTED).

**CANON-CANDIDATE is a classification, never a truth label.** Critics 1 and 2 caught the draft mixing the two (A7, S12).

Two further points about these laws:
- **EARNED means "BOW code does it", not "new".** Act-advanced time is EARNED and also as old as turn-based games (S12v).
- **These laws are proposals to test, not extraction mandates.** RECURRING rests on two products built by one founder's agents. E-main §12 warns against extracting an engine from two data points (S12ii), so none of these laws authorizes building a shared engine.

Revision marks: **[C1-An]** and **[C2-Sn]** point to the objection that changed a row (§11).

| # | Law | Truth label | Class | Evidence | Counter-evidence / limit |
|---|---|---|---|---|---|
| **M1** | **Definition vs instance.** A SYSTEM is a versioned executable definition. An INSTANCE (World, Challenge or Branch) is one history-bearing execution of a SYSTEM version under **one authority**.<br>The medium standardizes what an instance can **show**, and what it can **prove** depends on whether it bears a record:<br>• **Record-bearing instances** retain their acts and assign each a position before acknowledging it. They may make consistency claims about *acts*.<br>• **Snapshot publishers** keep stored state only. They may claim at most INVARIANTS about *state*, never which acts happened. **[C1-A3]** | RECURRING (definition/instance split); two-tier stance HYPOTHESIS | CANON-CANDIDATE | DC frozen package vs attempt; W rules version plus `LessonModule`/Foundry vs `WorldState`/chapters | **NBA World One keeps no act log** (E23), so today it is a snapshot publisher. The fix is cheap: its reducer is pure and the action is in hand at the same fsync (C1-A3). |
| **M2** | **Order is position; time moves only by recorded acts.** Order is the authority-assigned position within one instance. Wall time is metadata that may trigger a time change but never coordinates one. **Every host-side input to a transition is a recorded input.** The time authority chooses window boundaries, so boundaries need a declared policy or sealing. **[C1-A8]** | Act-advanced time **EARNED ×4** (W NBA, Harbor, Foundry, DC learner); universal law HYPOTHESIS | CANON-CANDIDATE | `advance(expectStop)`; DC `sequence` | **"Pure function of state" is false at the NBA draft stop.** `advance(state, expectStop, registeredSeats)` reads the host's seat registry, which is neither in state nor recorded (E35). POSITION is guaranteed only where acts are retained (C1-A2). DF Live World fails (K1). |
| **M3** | **Every entry records its act basis:**<br>• the cut the actor decided against, with its time;<br>• what was available to the seat;<br>• what the occupant opened.<br>Where the basis was not captured it is `Unknown{not-recorded}`, never assumed. Stale requests are refused. **[C1-A4]** | RECURRING in halves; unified HYPOTHESIS | CANON-CANDIDATE | DC read side; W write side (`expectRevision` ×4); DC v5 `expectedRevision` | W auto-retries a request after a compare-and-set conflict and re-reduces it against a state the actor never saw (E37), so the *write half is not redundant* and must be stored. It is not a novelty: it is `If-Match` plus an audit log (C2-S5). |
| **M4** | **Nondeterminism is committed before use.** Each nondeterministic input is either recorded by value, or derived from a *prior commitment* with a scheduled reveal. Where the host is a stakeholder, the seed comes from a joint commit-reveal or a public beacon. Replay by outsiders is possible only after reveal. **[C1-A7]** | HYPOTHESIS | CANON-CANDIDATE (correctness) | W publishes a seed hash at creation and reveals at the Reckoning | W court dice are **regenerated** by HMAC from a host-held seed, "never stored" (E36). A host can grind seeds before committing, and no outsider can replay a live World before reveal. |
| **M5** | **Pinned versions.** Every entry is read under its *rule epoch's* SYSTEM digest. Old records are refused or withheld, never silently migrated, and `null` never means "current". | RECURRING | CANON-CANDIDATE | DC `version:null` explicit legacy; W save keeps birth rules | Rules are pinned by *label*, not digest (E29) |
| **M6** | **Reads are pure projections for an audience.** The public audience structurally never receives a seat. | RECURRING | CANON-CANDIDATE | W `hqView`/`boardView`; DC teacher exact reader | Guards display, **not inference** (04; 08 P9) |
| **M7** | **Fact, typed Unknown or Refused, never bare absence.** A known absence is `Fact{ABSENT}`. Unknown kinds include `not-observable`. **Superseded** is a read result. **[C1-A1]** | RECURRING (shape); kind set UNRESOLVED | CANON-CANDIDATE | DC and W codes; W2-A mapping | At least nine vocabularies (K21); W `private` has two opposite meanings (K28) |
| **M8** | **Status comes from provenance and is relative to the reading instance.** It is never hand-tagged. RECORDED in a branch reads as MODELED from the parent. **DRAWN** (committed randomness) is distinct from GENERATED (model output). **[C1-A9d]** | HYPOTHESIS | UNRESOLVED (value set) | W "'Actual' means recorded inside the simulation"; K6 | Legend never read by a child (B3). The **conflation is represented today**: Boston discloses the season but not the authored building (E33; C2-S4). |
| **M9** | **Verification on two axes.** Every export states consistency (REPLAYED, INVARIANTS or NONE) and authenticity (NONE, SIGNED or ATTESTED). | HYPOTHESIS (was mislabelled) | CANON-CANDIDATE (trust) | DC "replay proves consistency, not authenticity"; the bridge is HMAC-tagged but unreplayable | Nothing is signed. It is not new: ACM artifact badges, SLSA and Sigstore, C2PA states (C2-S9). |
| **M10** | **Branches are modeled and never write back.** A branch is MODELED, declares its interventions and suffix policy, has an explicit analysis sequencer and no authority over its parent, and never writes its parent, Reality or any other instance. History never *merges*.<br>**An authority may supersede its own history:** a recorded `supersede(to: cut)` act opens a new **supersession epoch**. Earlier entries stay sequenced and readable as SUPERSEDED, and "in effect" means in effect on the current epoch. **[C1-A1, A9a]** | Mechanism EARNED; supersession HYPOTHESIS | CANON-CANDIDATE; suffix policy UNRESOLVED | DC `decisionBranch`; W Lab ×3 | **W's classroom-mandated Restore rolls canonical history back today** ("a restore opens a new branch of the room's history", `sessionService.ts:3108`) and resets the log (E34). A retried receipt returns `superseded`. "Delivered once" holds only per epoch. |
| **M11** | **Refuse outside the envelope.** | RECURRING (refusal); envelope description HYPOTHESIS | CANON-CANDIDATE | DC branch `null`; W Lab "unsupported rather than guessed" | It is a model card's out-of-scope section enforced by refusal (C2-S9) |
| **M12** | **Derivation, not causation.** Derivations cite their input **entries**. A later correction affects only later transitions or a MODELED retrospective fork. **[C1-A16]** | RECURRING | CANON-CANDIDATE | DC provenance "no inferred or caused"; W causal-claim refusal | Lineage fails on feedback loops and simultaneity (07) |
| **M13** | **Authority is derived, attested and never crosses instances.** Authority comes from an authenticated seat plus record facts plus rules plus time.<br>To a reader, a seat on an entry is a host *assertion* until acts carry occupant attestations.<br>**Meta-rules** (amendment, succession, seat repair) are fixed per lineage, outside ordinary transitions. **Seat repair is a visible authority event.** **[C1-A11]** | EARNED (derivation in W NBA); attestation and meta-rules HYPOTHESIS | CANON-CANDIDATE | W "legality is a ledger fact" | The Commissioner's REPAIR verb reassigns seat→franchise (E10 corrected). Harbor and DC synthetic families are unauthenticated labels (K9). |
| **M14** | **Closed boundaries.** Only derived, read-only, versioned, closed-schema exports cross instances. Identities cross only as pairwise references. A cross-instance act is a **request/accept pair** with a declared basis policy, and sagas carry deadlines with typed silence. **[C1-A12]** | RECURRING (cross-pollinated); cross-act form HYPOTHESIS | CANON-CANDIDATE | DC kernel guard; `bow-bridge-1` | Synthetic only |
| **M15** | **Representation laws** (L1–L13 of the Representation Contract). | EARNED in W-3D (tested); DC source-only; RECURRING at source level only **[C2-S12iii]** | CANON-CANDIDATE | W-3D story functions plus Direct tests | DC's room was never rendered (E20). Counterexamples exist in code (03 §2). |
| **M16** | **Reality is observed, never forked or written.** Reality enters as sourced, dated, licensed OBSERVED facts. Grounding references to Reality entities are salted per instance by default, except in an explicit public-place and public-figure namespace. **[C1-A17]** | HYPOTHESIS (partly EARNED) | CANON-CANDIDATE | W dated identity snapshot | Without salting, a shared public endpoint rebuilds the cross-context graph K7 kills |
| **M17** | **Occupants are interchangeable.** Models stay outside the fold, fairness is a sealed-window rule, and the time authority is never a stakeholder. | HYPOTHESIS | CANON-CANDIDATE (hygiene) | 08; W2-B; W2-D | No AI occupant has run in BOW. It is not new: Diplomacy orders plus Meta's CICERO (C2-S8). |
| **M18 (new)** | **Availability and durability are declared.** Each instance declares its availability model: one sequencer, consistent, and unavailable when partitioned. Acts are durably appended before acknowledgement. Failover is a recorded authority-transfer act. Offline acts become MODELED branches or stale refusals. **[C1-A13]** | HYPOTHESIS | CANON-CANDIDATE (correctness) | W journal header: "four of eight decisions the product had already told a child were taken did not come back" | No product declares this today |
| **M19 (new)** | **One head per position, for every audience.** A host commits to one head per position across all audience exports, so different audiences see different *projections* of the same head, never different heads. Keys have a lifecycle (rotation, revocation, compromise). **[C1-A5]** | HYPOTHESIS | CANON-CANDIDATE (trust) | Report 05: "strangers can trust it" needs a signed head plus gossip | Nothing is signed. The draft said nothing about equivocation or key compromise. |

**A limit the laws cannot remove [C1-A6].** For an instance with private information, a non-host audience **cannot** obtain REPLAYED consistency. Stripped acts leave the rest of the fold CLAIMED, and small-domain digests can be guessed unless salted. "Verification without BOW's servers" (Tournament C3) therefore holds for single-seat or all-public instances only, unless zero-knowledge proofs or a trusted verifier are added. HYPOTHESIS; stated as a limit, not a law.

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

1. ~~The write half is a request guard, redundant on accepted entries.~~ **Reversed by Critic 1 (A4).** *Applied at* the head is not *decided against* it. W marks a compare-and-set conflict as retryable, and its client outbox re-sends the request, which is then re-reduced against a state the actor never saw and accepted (E37). NBA owner acts carry no basis at all. So on most W entries the actor's cut is **unknown**, not redundant.
   - **The write half must be stored on every entry, with its time**, or recorded as `Unknown{not-recorded}`.
   - T19's fairness rule needs it anyway.
2. **The read half** covers what was *available* to the seat and what the occupant *opened*, at the basis cut.
   - Under a **fold** (DC), availability is derived on read and openings are recorded acts.
   - Under **stored state** (NBA), it must be **materialized at act time**. NBA's `LeagueMoment.known[]` is such a materialization, but as hand-written prose with no source ids and no "opened" record.
3. **So the act basis, stated precisely:** *every entry records the cut its actor decided against (with its time), and lets a reader recover what was available to that seat and what its occupant opened at that cut, whether derivable (fold) or materialized (stored state). Where not captured, the basis is `Unknown{not-recorded}`.*
   - Grain varies (revision, stop, ordinal, round) and must be typed.
   - Comprehension is always `Unknown{not-observable}`.

**What the act basis is *not* (Critic 2, S5, accepted).** It is not a novel capability. Mechanically it is an `If-Match` precondition plus an audit log of what was on screen. EHR audit trails, NAEP/PISA process data, MiFID II order records and poker hand histories keep the same split. The claim that it "unifies" Moments, sealed windows and rebase conflicts is a claim of **shared bookkeeping, not new ability**.

It remains the answer to "the most important missing primitive" for a narrower reason: it is the **one record field whose absence makes four current bugs possible**:
- stale retries accepted silently (E37);
- fairness unenforceable for fast occupants;
- forks that replay decisions the actor never faced;
- Moments whose "what they knew" is unsourced prose.

HYPOTHESIS; the halves are EARNED in DC and W respectively.

## 5. The 25 deep questions

Answers are labelled. "Open" means explicitly left unresolved in `BOW_OPEN_QUESTIONS_V0.md`.

1. **What is SYSTEM?** A versioned executable definition: schema, rules, seats and roles, information rules, clock kind, validity envelope and representation affordances. It is named by `system-id @ version-digest`. It is *not* the real thing (that is the REFERENT) and *not* a running history (that is an INSTANCE). RECURRING (definition/instance split); unified form HYPOTHESIS.
2. **What is WORLD?** An INSTANCE with an **open horizon**:
   - it persists across sessions;
   - it may have many seats;
   - its time continues whether or not a given occupant is present;
   - its SYSTEM changes only by recorded governance.

   EARNED in W; the general definition is HYPOTHESIS. "World" is **not** the universal noun, because DC's instances are not persistent institutions. The universal noun is INSTANCE.

   **Revised after Critic 1 (A9b):** a WORLD is a **LINEAGE**, not a single instance. W's own example, World One, runs Season One and then Season Two as a *continuation* carried from a sealed predecessor, and T20 prefers successor instances. A World is therefore a named lineage of continuations sharing one identity, governance and meta-rules. Branches hang off it. HYPOTHESIS.
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

   It grants no evidence. The concept is RECURRING (DC pointer; W `LeagueMoment` with `known[]` and consequences). Its shape is HYPOTHESIS; W says it is "not a universal event schema".

   **Revised after Critic 1 (A9c):** the draft called a Moment "a view, never a new record". That contradicts its own append-only consequences and seal (W stores `sealedAt`). A Moment is a **record object with its own append-only sub-log** (consequences and seal) that *references* an act. It never alters that act.
6. **What is a FORK?** The creation of a MODELED BRANCH, recording:
   - lineage (parent at head, plus the cut);
   - interventions (act, assumption, rule, model or Reality snapshot);
   - suffix policy;
   - SYSTEM pin;
   - validity check;
   - no writeback;
   - a content-derived id.

   It is not Save As. EARNED (mechanism); suffix policy **open**.
7. **Is a branch itself a World?** Not by default. A branch is an analysis instance. Its **sequencer is the process that computes it**, answerable to the branch's creator, and it has no authority over its parent (Critic 1, A9a: an unpromoted fork still needs *someone* to sequence it).

   A **promotion act** gives it a clock authority, seats and governance, making it a World lineage that stays MODELED relative to its parent and to Reality forever.

   **Escrow is different (Critic 1, A10).** If BOW shuts down and a school re-hosts World One, a rescue must not be a fork, because a fork's future would be MODELED forever. It must be a **continuation authorized by a succession rule written into the World's meta-rules** (for example, an escrowed or threshold key held by seat-holders). Import alone confers nothing. HYPOTHESIS.
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
13. **Who owns TIME?** The SYSTEM's declared **clock authority**. Advancing time is itself an attributable act. For TICKED clocks the clock seat is a scheduler; for FEED clocks the external authority owns the label and BOW records it. EARNED for ACT clocks; HYPOTHESIS for TICKED and FEED.

    **Correction after Critic 1 (A8).** "Owns *when*, never *what*" is false as stated. Choosing *when* a window closes decides *which acts count*. At W's draft stop, the host's seat registry at the moment of pressing decides who gets a franchise, and that registry is neither in state nor recorded. The honest law has two parts:
    - window boundaries follow a declared policy or are sealed;
    - every host-side input to a transition is recorded;
    - and the time authority is never a stakeholder.
14. **What provides authoritative event ordering?** The instance's single sequencer (its authority), guarding in the order dedupe → basis → rules → append. **Across instances there is no global order**, only causal order through pinned cross-references. A composite cut is a *vector* of positions (T16). EARNED within record-bearing instances; HYPOTHESIS across.

    **Added after Critic 1 (A13).** One sequencer per instance is a deliberate *consistent-and-unavailable-when-partitioned* choice. It must be declared (M18). Offline occupants' acts become MODELED branches or stale refusals, never merges. Acts are durably appended before acknowledgement. Failover is a recorded authority-transfer act.
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

    **Revised after Critic 1 (A1).** W's classroom-mandated Restore rolls a room back to a checkpoint and opens "a new branch of the room's history" (E34). Acts that meet all three conditions above can therefore stop being in effect.
    - Canonical splits into **sequenced** (recorded by the authority) and **in effect** (on the current supersession epoch).
    - A restore must be a recorded `supersede(to: cut)` act.
    - Superseded entries stay readable with the read result SUPERSEDED.
    - "Delivered once" holds per epoch.
    - Today W's restore resets the log, so the superseded suffix is not retained as a record. That is a product-lane gap.
17. **What does PROVENANCE attach to?** Two things, which DC already keeps separate:
    - **record provenance** on every entry: seat, occupant, basis, SYSTEM version, recorded inputs, external sources with date and licence;
    - **derivation lineage** on every projected value: a source path into the record plus the rule that computed it.

    STATUS is a *summary* of provenance and VERIFICATION BASIS says how it can be checked. RECURRING.
18. **What is canonical STATE versus a PROJECTION?** STATE is the authority's state at a cut. It is re-derivable from the record in **record-bearing** instances, and only stored and invariant-checked in **snapshot publishers** (today, W NBA). A PROJECTION is a pure, read-only function of (cut, audience) returning Facts, Unknowns and Refusals. RECURRING.
19. **What is a REPRESENTATION?** A perceptible rendering of a projection for a device, modality, question and task. It is made of **carriers** (bound to object, source, status and cut) and **atmosphere** (identical across histories at the same cut). It has no authority. RECURRING.
20. **What may a representation NEVER do?** Laws L1–L13 of the Representation Contract. It may never write, widen, upgrade status, exceed source precision, draw unknown as value or absence as fact, change claims across tiers, show a stale cut as current, imply a mechanism the model lacks, lose Direct parity, or put seat-private carriers on a public surface. RECURRING (core); HYPOTHESIS (full set).
21. **Is PLACE only a representation, or can it be canonical state?**
    - A place's *geometry and topology* are **never canonical state**: REJECTED, see K14.
    - A spatial attribute that a rule reads (capacity, travel time) is ordinary state.
    - A place used to organize a system is a **state-free index** (HYPOTHESIS).
    - *Externally grounded* place (real geography that many systems attach to) is **not a place in the medium**. It is a Reality entity plus a typed, dated, statused reference (§6).
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

## 6. Place: the founder's two-meanings test

**Question (founder, mid-run).** Does PLACE/GEOGRAPHY need two separate meanings?
- (1) a representation of one system, such as Boston's office;
- (2) an externally grounded spatial substrate, such as actual NYC geography that many autonomous systems attach to.

And does attachment to real place belong in the protocol, address or composition layer, or stay a Browser/Reality concern? Promote nothing without cross-domain evidence.

**Test.** Seven domains, each asked the same six questions: sports city, museums/history, chemistry labs, hospitals, transit, enterprise and public Reality.
- Checked against mature standards: OGC/W3C SDW, CIDOC-CRM/Linked Art, Wikidata, OSM, Overture GERS, CityGML, IndoorGML, IfcSite, GTFS, NeTEx, NaPTAN, FHIR `Location`, NHS ODS, GS1 GLN and NYC BBL/BIN.
- Checked against BOW's code.
- Source: `research/wave2/W2E_PLACE_TWO_MEANINGS.md`.

### 6.1 Verdict: the founder's two meanings are real, but there are **three**, and only one is a medium "place"

| Meaning | Definition | Who is authoritative | Label |
|---|---|---|---|
| **1. PLACE (index)** | A state-free, per-system index (id, role, adjacency) plus carrier slots keyed by object id. It implies nothing about the outside world. | The system's designer | EARNED locally (W Harbor topology: 8 places, 13 edges, no coordinates; DC district geography, fictional); medium object HYPOTHESIS |
| **2. GROUNDING** | **Not a kind of place.** A **Reality spatial entity** (an id in an external namespace: Wikidata QID, Overture GERS, NYC BIN or BBL, a GTFS stop within its feed, an FHIR `Location`, a GS1 GLN) plus a **typed, dated, statused REFERENCE** from an OBJECT or PLACE to it. The reference carries:<br>• a relation: **is** / **located-at** / **modeled-on** / **depicts**<br>• a STATUS: OBSERVED, ASSERTED or AUTHORED<br>• an as-of cut<br>• source and licence<br>• no geometry by default | Reality owns the entity; BOW is authoritative **only over its own claim** | HYPOTHESIS |
| **3. SPATIAL ATTRIBUTE** | Ordinary state or parameter that a rule reads: capacity, distance, travel time, jurisdiction, adjacency cost. When sourced from Reality it is a recorded input with source, date and licence. | The system (if authored) or Reality (if observed) | EARNED (W rules read arena capacity and metro population; no rule reads distance or travel time today) |

**Why grounding is a reference and not a substrate.** Every standard checked keeps the place record apart from the party or system at that place, joined by a **typed assignment**, never by a coordinate:
- FHIR `Location.managingOrganization`;
- NHS ODS, where each organisation holds its own site code for a shared location;
- GS1 GLN, which allocates legal entity, function, physical and digital location as separate categories;
- NeTEx `PassengerStopAssignment`;
- CityGML `ExternalReference`.

Three registries also *removed* meaning from their place ids (Overture GERS dropped the embedded H3 cell in 2025; NHS site codes dropped the parent trust; OSM ids do not survive reshaping). CIDOC-CRM defines a place as time-independent, so **time lives in the reference** ("located at X *as of* T"), not in the place. HYPOTHESIS, with external facts dated in W2-E.

**Co-reference is not coupling.** Two systems that reference the same real building are *not thereby connected*. In five of seven domains, systems at the same place couple through **contracts and feeds**, not through geography:
- an arena calendar between club and operator;
- orders in supply chains;
- co-located hospital organisations keeping separate site records.

A Browser may *join* on a shared reference for discovery (opt-in, recognition-only). This is what keeps a city of club, museum, hospital, agency and port from becoming one hidden god-simulation. HYPOTHESIS.

### 6.2 Where attachment belongs

| Option | Verdict | Reason |
|---|---|---|
| A. A spatial coordinate in every address | **REJECTED** | Most systems have no ground: chemistry, biology and both fictional topologies. A coordinate is not identity, because one site hosts many organisations (ODS, GLN, GTFS). It embeds meaning in ids, the error three registries reversed. It would spread licence-bound coordinates and build a location graph of people and institutions, which is K7 by another door. |
| B. A shared "substrate" instance that systems attach to | **SPECULATIVE FRONTIER** | Composition law C1 says authority never crosses. A substrate would have to be authoritative, and BOW would then own geography. The only legitimate form is a **governed registry that is itself an instance**, as NaPTAN is an institution. No BOW case exists. |
| **C. A typed REFERENCE to a Reality entity, carried in the record and in exports** | **Chosen (HYPOTHESIS, medium confidence)** | It covers all seven domains. It reuses STATUS, cuts, the licence axis and recognition-only boundaries. It is the COUNTERPART mechanism with a Reality endpoint. **It must live in the record**, because a capsule shared outside the Browser must carry its own honesty ("this building is authored"). If it lived only in Browser metadata, exports would silently downgrade. |
| **D. Browser and Reality handle discovery** | **Chosen for discovery** | "What is at this place?" is a Reality query joined against references, i.e. a product feature, not protocol |

**So:** the *claim* of attachment is a generic record-level reference (C). *Navigating by geography* is a Browser/Reality capability (D). **Nothing place-specific enters the protocol, the address or the composition layer.** The founder's second meaning is accommodated by the Reality layer plus a reference type, not by a new medium primitive.

### 6.3 Promotion test: what would move grounding above C

Promote to the protocol or composition layer only if **all** of these are *observed* (W2-E §6):
1. Two independently governed systems whose rules or evidence change *because of* a shared place, and the coupling **cannot** be re-expressed as a bilateral contract or a Reality feed.
2. At least three materially different domains hand-roll the same reference shape (namespace, as-of, status, rights). Today there is **one**, as a bare string.
3. A cross-system query ("all systems attached to X at cut T") that a Browser join over references answers *wrongly* against ground truth.
4. A grounding broken by id churn that corrupts a replayed capsule.
5. A second independent host (trigger T5).

**Kill criterion:** if every coupling re-expresses as a contract, grounding stays at C or drops to D.

### 6.4 What BOW's code shows, and one honesty gap to hand to the product lanes

- Real geography enters BOW only as **strings and numbers**: `arena:"TD Garden"`, `arenaCapacity:18624`, metro area and population, with a dated snapshot 2026-09-22. There is no place id, coordinate, QID, OSM or GTFS identifier anywhere in W, W-3D or DC source.
- **The same real arena carries two dated capacities with nothing reconciling them.** 18,624 in the identity snapshot; 19,156 elsewhere (`fullHouse.ts:329-332`, tdgarden.com as of 2026-09-14). This is a small concrete case for a grounding reference with as-of and source.
- **Gap:** Boston's on-screen disclosure reads "real clubs and players, a simulated season". It discloses the *season* as simulated, but not the *building* as authored; the building's authored status lives only in a design doc (`ART_DIRECTION.md:90`). Under relation type **depicts / AUTHORED**, the scene would say so. This is a product-lane fix, **not made here**: this run edits no product repository.

**Risks named and bounded:**
- god-simulation drift (answered by C1 and co-reference ≠ coupling);
- metaverse drift (E-main §10);
- **ODbL share-alike** on OSM-derived geometry. Store ids, as-of, source and licence, never geometry; never use OSM ids as canonical ids; escalate classification to counsel;
- privacy: never ground a student, patient or school; references are recognition-only;
- false physical implication: enforce by relation type and status, not prose alone.

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

Proposed levels (HYPOTHESIS). They follow portability levels L0–L4.

**The specification is golden vectors, *plus* normative prose, property-based and differential tests, and an audit for H.** Vectors alone cannot specify hyperproperties such as never widening, never upgrading status and non-interference (Critic 1, A15).

| Level | Must implement | Proves itself by |
|---|---|---|
| **R — Reader** | • JCS canonicalization plus SHA-256<br>• resolve an L0 reference and open an L1 capsule<br>• project Fact, Unknown, Refused and Superseded for an audience<br>• render Direct<br>• report consistency *per declared field set* and authenticity honestly | Vectors, tamper cases, property tests |
| **V — Verifier** | Everything in R, plus replay of an L2 bundle **from a record-bearing instance**:<br>• under a digest-pinned rule artifact, with the **metering pass pinned inside the artifact**<br>• in a deterministic sandbox with fuel and memory caps<br>• digest scope includes the presentation text a reader saw, or consistency is reported per field set<br>• refusal on divergence<br>Era-faithful L2 applies only **from the point a host began executing the pinned artifact**. There is none for existing W history computed in V8 JavaScript (A14). | Reproduce the expected head exactly; differential testing across two engines |
| **B — Brancher** | Everything in V, plus:<br>• fork with declared interventions and suffix policy<br>• an explicit analysis sequencer<br>• envelope refusal<br>• MODELED, GENERATED and DRAWN status<br>• no writeback<br>• content-addressed branch ids<br>• `redecide-required` reporting | Fork vectors (same fork, same id) |
| **H — Host** | Everything in B, plus:<br>• **record-bearing** (acts retained, position assigned before acknowledgement, **durable append before acknowledgement**)<br>• a declared availability model; failover as a recorded authority transfer<br>• seats with authentication, and attestation on acts<br>• derived authority; meta-rules fixed per lineage<br>• basis stored on every entry; stale refusal<br>• clock authority, with every host input recorded<br>• commit-before-use randomness<br>• audience projections; boundary exports<br>• **one signed head per position across all audiences**<br>• inclusion and consistency proofs with non-BOW witnesses<br>• a key lifecycle (rotation, revocation, compromise)<br>• `supersede` acts that keep superseded entries readable | Attestation, external witnesses, audit |

**What no conforming runtime may do:**
- write across instances;
- silently migrate versions;
- regenerate an input that was not committed before use;
- upgrade status;
- render beyond a projection;
- present different heads to different audiences;
- discard superseded history.

## 9. What is actually new (rewritten after Critic 2)

**The honest answer: nothing in this packet is yet a new capability.**

- The CS critic (05) found **no new mechanism**.
- The medium skeptic (Critic 2) found an existing precedent for every candidate the draft offered:

| Draft candidate | Existing precedent | Class |
|---|---|---|
| OPEN at a past cut, as one audience knew it, under the rules then | StarCraft II replays: scrub to any point, one player's vision, loaded in the recorded game version; poker hand replayers; Lichess | (a) in games; a domain transfer for institutions |
| Knowability ladder (available / opened / knowable at the act) | EHR audit trails ("opened the lab result before ordering?"); NAEP/PISA process data; MiFID II order records; poker hand histories | (b) recombination. **No third party has ever recomputed a BOW basis**, so the draft's "recomputable by a third party" was unshown and is withdrawn. |
| Conflation made unrepresentable | The Anaplan/Hyperion Version dimension (actual vs budget vs forecast); Reg G labelling; taint tracking. **And BOW does not yet achieve it:** Boston discloses the simulated season, not the authored building (E33); five status vocabularies; `private` with two meanings. | (b), and not yet true |
| The act basis as a unifier | `If-Match` plus an audit log | (b): shared bookkeeping, not a new ability |
| One grammar across Challenge and World | Lichess builds puzzles from real games and links them back. **BOW's own privacy law disables SHARE for Challenges**, since student data never enters a public address space. | (a); unshown in BOW |
| Honest forks, suffix policies, rule forks and Reality forks | `git rebase`; the Lucas critique; PGN variations; Basketball GM Real Players leagues; Palantir Foundry Scenarios | (a)/(b) |
| Interchangeable human and AI occupants; sealed windows | Diplomacy's simultaneous orders; Meta's CICERO in anonymous human games | (a) |
| Verification axes; validity envelopes | ACM artifact badges, SLSA/Sigstore, C2PA; model cards | (a) |

**What remains:**

1. **A discipline.** An unusually strict ethic of refusal (no conflation, no causation, no writeback, no status upgrade), applied to institutions and learning. It is valuable, and it is what makes the products trustworthy. But **a regime of refusals is a *standard*** (like GAAP, FHIR or CONSORT), **not a medium** (Critic 2, S1).
2. **One live candidate for a genuinely new capability**, named by the skeptic: *a shareable, executable, as-known-then decision artifact that changes how non-specialists argue about decisions, passing between strangers without its author's help.* Poker players have this literacy (hand histories, and arguing against "results-oriented thinking"); institutions and the public do not. **HYPOTHESIS, untested.**

**The medium claim now rests entirely on this capability being observed** (§12, item 9). Everything else in this packet is either known computer science in a new combination, or hygiene that the products need whether or not BOW is a medium.

**Two structural cautions from Critic 2:**
- **S10.** The two product constitutions that produced all the EARNED evidence **forbid** parts of the medium test:
  - non-specialist authoring of assessments needs founder approval and Challenge DNA;
  - student work is never public;
  - licensed Reality never travels as payload.

  So the capability test must run on **public, non-student, non-assessment instances**, and a medium, if pursued, needs a charter outside both constitutions.
- **S13.** At scale the medium is Direct-class (text, tables, timelines, derivations over a typed record). That is consistent with how media standardize record, address and legend rather than renderers (06). It also means the distinctive 3D places are **product, not medium**.

## 10. Distance ladder

| Distance | What |
|---|---|
| **Earned now** (in at least one product) | • act-advanced time<br>• order by sequence *in record-bearing instances* (DC, Harbor)<br>• replay with refusal (DC, Harbor)<br>• knowability at the act (DC)<br>• stale refusal (W, DC v5)<br>• audience projections<br>• Fact or Unknown<br>• modeled branches<br>• envelope refusal<br>• derivation without causation<br>• boundary guards<br>• representation without authority, with Direct parity (W-3D tested)<br>• synthetic capsules |
| **Next** (founder decision plus weeks) | • NBA retains its acts<br>• the basis stored on every entry<br>• Restore as a recorded `supersede`<br>• one canonicalization and digest<br>• one Unknown kind set and status axis (split `private`; add DRAWN)<br>• rules pinned by digest<br>• salted commitments<br>• Boston's authored-building disclosure<br>• **the two cheap falsifiers in §12, item 9** |
| **Later** (needs users and a second party) | • a spec-only outside implementer<br>• signed heads with non-BOW witnesses<br>• an outside author shipping a World<br>• a real shared-store World with occupants<br>• an AI occupant in a sealed window<br>• a portable L2 replay across runtimes<br>• one real cross-instance act with bilateral references |
| **Far** (SPECULATIVE FRONTIER) | • the natural-system profile<br>• writeback ports<br>• delegation chains<br>• federation among independent hosts<br>• public fork communities<br>• Reality feeds with licence axes<br>• succession and escrow for rescued Worlds<br>• billions of instances |

## 11. Critic objections and responses

Both critics were independent Opus agents, and neither saw the other. Full texts: `research/critics/CRITIC_1_SYSTEMS_ARCHITECT.md` and `research/critics/CRITIC_2_MEDIUM_SKEPTIC.md`. The parent's verdict on each objection, and what changed:

### Critic 1 (systems architect): 17 objections, of which 2 FATAL

| # | Objection | Verdict | What changed |
|---|---|---|---|
| A1 | FATAL. W's classroom Restore rolls canonical history back, which breaks "append-only", "canonical" and "delivered once". | **Accepted** (verified at `sessionService.ts:3108`) | M10 supersession epochs; SUPERSEDED read result (M7); Q16 splits sequenced from in-effect; `supersede` in the envelope; E34; product-lane gap (the log is reset, not retained) |
| A2 | POSITION is not a total order in NBA (last-write-wins choices). | **Accepted** | POSITION and OPEN-at-T guaranteed only in record-bearing instances; labels corrected |
| A3 | FATAL. "Interchange, not storage" proves nothing for stored state. | **Accepted** | M1 two tiers (record-bearing vs snapshot publisher); consistency claims about acts require retained acts; recommend NBA retain actions (cheap: pure reducer, same fsync) |
| A4 | Applied-at-head ≠ decided-against-head; auto-retry re-reduces. | **Accepted**; reverses the W2-A correction | §4 and M3: basis stored on every entry with its time, or `Unknown{not-recorded}` |
| A5 | Equivocation, withheld-reason abuse, no key lifecycle, pre-signing rewrites. | **Accepted** | M19 one head per position across audiences; H conformance adds witnesses and a key lifecycle; Unknown reasons cite checkable rule ids (Protocol) |
| A6 | Stripped-span digests leak; stripping cascades to CLAIMED. | **Accepted** | Limit stated under §3: non-host REPLAYED only for single-seat or all-public instances; all commitments salted (Portability §3); Tournament C3 qualified |
| A7 | Dice are regenerated from a host-held seed; label errors. | **Accepted** | M4 restated as commit-before-use with a joint seed when the host is a stakeholder; labels separated from classes; E36 |
| A8 | "When, never what" is false: the draft reads the host's seat registry. | **Accepted** (verified at `commissioner.ts:48-54`) | M2 and Q13 corrected; every host input recorded; boundaries follow a policy or are sealed; E35; Time §1 |
| A9 | Semantics: branch sequencer; World vs lineage; Moment as view; DRAWN vs GENERATED; "epoch" ambiguity. | **Accepted, all five** | Q7 analysis sequencer; WORLD = lineage; Moment = record object with a sub-log; DRAWN status; rule epoch vs supersession epoch (Vocabulary) |
| A10 | The escrow dilemma breaks L4. | **Accepted** | Succession rule in meta-rules; L4 = a continuation authorized by it (Q7; Portability §1) |
| A11 | A seat is a host assertion; REPAIR reassigns seats; governance can amend itself. | **Accepted** | M13 attestation plus meta-rules fixed per lineage; E10 corrected |
| A12 | Bilateral references are not atomic; sagas may not end; consistent cuts are unverifiable across opaque references. | **Accepted** | M14 request/accept pair with a basis policy; saga deadlines with typed silence; composite cuts CLAIMED unless all members are readable (Portability C3/C4) |
| A13 | The single sequencer is a silent availability choice; no durability or failover. | **Accepted** | New M18 |
| A14 | Wasm replays a different program; fuel is not portable; prose sits outside the digest. | **Accepted** | §8 V; Portability §2 |
| A15 | Vectors cannot specify hyperproperties. | **Accepted** | §8: vectors plus prose, property and differential tests, and an audit |
| A16 | A correction to a consumed fact makes derivation inconsistent. | **Accepted** | M12: derivations cite input entries; corrections affect later transitions or a MODELED retrospective fork |
| A17 | Grounding is joinable through shared endpoints; `located-at` *is* place-specific; id churn. | **Accepted** | M16 salted grounding by default plus a public namespace; §6 claim narrowed ("no spatial coordinate or substrate", not "nothing place-specific"); churn stays open (F2) |
| — | Label overstatements. | **Accepted** | Truth labels separated from matrix classes; RECORD/POSITION, T2, E10 and M15 relabelled |

### Critic 2 (medium skeptic): 15 objections, of which 1 FATAL

| # | Objection | Verdict | What changed |
|---|---|---|---|
| S1 | FATAL. §9 offers constraints, not capabilities; a regime of refusals is a standard. | **Accepted** | §9 rewritten; the medium claim now rests on one named capability and one test |
| S2 | OPEN-at-T is the default read of game replays (StarCraft II). | **Accepted** | Time §3's claim that no game offers it is withdrawn; BOW's version is a domain transfer |
| S3 | The knowability ladder is EHR audit trails and process data; no third party ever recomputed it. | **Accepted** | §9; "recomputable by a third party" withdrawn |
| S4 | "Conflation unrepresentable" is contradicted by BOW's own record. | **Accepted** | §9; M8 counter-evidence cites E33 |
| S5 | The act basis shrank to an audit log. | **Accepted in part** | Novelty claim withdrawn. It stays the most important missing *record field* for correctness (A4), not as a capability. |
| S6 | One grammar is Lichess, and BOW's privacy law disables SHARE for Challenges. | **Accepted** | §9 |
| S7 | Honest forks exist already (git rebase, Lucas critique, Basketball GM, Palantir Scenarios). | **Accepted** | §9 (hygiene, not novelty) |
| S8 | Occupants and sealed windows are Diplomacy plus CICERO. | **Accepted** | M17 note |
| S9 | Verification axes and envelopes already have names. | **Accepted** | M9 and M11 notes |
| S10 | The constitutions that supply the evidence forbid the medium test. | **Accepted: the strongest structural finding of the run** | Founder decision 1 now includes a charter outside both constitutions; the capability test must use public, non-student instances |
| S11 | The two-profile split concedes an institution-simulation company. | **Accepted as an honest description** | Founder decision 5 (thesis scope); B8 is the way out |
| S12 | Labels inflate where novelty is claimed. | **Accepted** | Labels fixed; EARNED ≠ novel stated; laws framed as test proposals |
| S13 | At scale BOW is a typed log with a text viewer. | **Accepted in part** | That is what media standardize (06), so it does not refute the thesis. It does make 3D places product, not medium (§9). |
| S14 | No law would feel different to a real person. | **Accepted** | User difference must be shown by the behavioral test (§12, item 9) |
| S15 | Specifying with zero users repeats Xanadu. | **Accepted** | This contract is reframed as a **test plan plus a convergence hygiene standard for the two products, not a spec to publish**. Tournament §3.1 now gates any external publication on a user-level result *and* the spec-only test. |

**Nothing was rejected outright.** Two objections were accepted only in part: S5 (the basis keeps its correctness role) and S13 (a text-first medium is still a medium, if the capability exists).

## 12. Founder packet

### 1. The ten strongest emerging laws (after the critics)

| # | Law | Label |
|---|---|---|
| 1 | Within a record-bearing instance, order is position and time moves only by recorded acts. Every host input to a transition is recorded. (M2) | Act-advanced time EARNED ×4; law HYPOTHESIS |
| 2 | Claims about *acts* require retained acts. Snapshot-only instances can prove invariants about state, never which acts happened. (M1) | HYPOTHESIS |
| 3 | Every entry records its **act basis**: the cut decided against (with its time), what was available and what was opened, or says Unknown. (M3) | Halves EARNED; unified HYPOTHESIS |
| 4 | Branches are MODELED, never write back and never merge. An authority may supersede its own history only by a recorded act that keeps the superseded record readable. (M10) | Mechanism EARNED; supersession HYPOTHESIS |
| 5 | Reads are pure projections for an audience; the public never receives a seat; every audience sees projections of **one** head per position. (M6, M19) | RECURRING / HYPOTHESIS |
| 6 | Every value is a Fact (including ABSENT), a typed Unknown, a Refusal or Superseded, never bare absence. (M7) | RECURRING shape; kinds open |
| 7 | Status comes from provenance, never from hand-tagging, and is relative to the reading instance. Verification is stated separately, as consistency × authenticity. (M8, M9) | HYPOTHESIS |
| 8 | Derivation, not causation. Refuse outside the envelope. (M11, M12) | RECURRING |
| 9 | Authority is derived and attested, and never crosses instances. Only closed-schema exports and pairwise references cross, and meta-rules are fixed per lineage. (M13, M14) | Derivation EARNED; rest HYPOTHESIS |
| 10 | Representations never write, widen, upgrade status or invent. They keep Direct parity, and an authored thing on real ground must look authored. (M15, M16, §6) | EARNED in W-3D; RECURRING at source level |

### 2. What is actually novel

- **No new mechanism.**
- **No demonstrated new capability.** Every candidate has a precedent (§9).
- The ethic of refusal is a valuable *standard*, not a medium.
- **One live candidate for a genuinely new capability:** a shareable, executable, as-known-then decision artifact that changes how non-specialists argue about decisions between strangers. HYPOTHESIS, untested.

### 3. What is mostly known computer science in a new combination

| Area | Precedents |
|---|---|
| Records and replay | Event sourcing and CQRS; Temporal-style deterministic replay and version pinning; game replay files |
| Time and knowledge | Bitemporal data (Datomic as-of, SQL:2011); EHR audit logs and process data |
| Integrity | Git and content addressing; Certificate Transparency |
| Projections | Reference monitors and information-flow control |
| Counterfactuals | Pearl counterfactuals; Datomic `d/with`; Palantir Scenarios |
| Composition | HLA federation; BGP-style composition; sagas |
| Portability | JCS, Wasm deterministic profiles, fuel metering |
| Labelling | PROV, HL7 NullFlavor, model cards, C2PA |
| Fairness | Diplomacy's sealed orders; frequent batch auctions |

### 4. The biggest thing current BOW gets wrong

**It is building the medium's representations and vocabulary ahead of its record.**

- **Three dialects of one idea.**
  - At least 17 canonicalization functions in DC and 7 in W, many locale-dependent.
  - Five `bow://` grammars in DF.
  - At least nine Unknown vocabularies.
  - A `private` code with two opposite meanings.
- **The most developed World keeps no act log**, and its classroom Restore rewrites history without a record.
- **Nobody outside the repositories has ever re-read a BOW record.**
- **The medium has no chartered home.** The "two real consumers" trigger for shared infrastructure fired long ago, but nobody pulled it, and both product constitutions forbid the authoring and citation a medium needs.

### 5. The most important missing primitive

**The act basis, stored on every entry,** together with the retained act itself (NBA drops both).

Runner-up: **supersession epochs**, so authoritative rollback (a classroom necessity) becomes a recorded act instead of silent rewriting.

### 6. Which current product concepts should die

These are founder decisions; this run changed no product repository.

- Live World's actor-clock ordering (K1) and its "without a server" claim (K2).
- `bow://…#hash8` and the five grammars (K3).
- Locale-dependent canonicalization and its duplicate copies (K4, K30).
- W's two-meaning `private` code (K28).
- Last-write-wins owner choices with no retained act (K35).
- Restore that resets the log without a `supersede` record (K36).
- Label-only authority for anything shared (K9).
- "Receipt" as proof of authenticity (K8); "causal engine" (K5); hand-tagged statuses (K6).
- DC's second Lab engine (K19); parallel act-reference formats (K20).
- Bespoke 3D as proof of the medium (K15); more board tournaments as the primary mode of work (K24).
- **Fix, not kill:** Boston's on-screen line must disclose that the *building* is authored (E33).

### 7. What must be open if this is a medium

Eventually: the record envelope, the address grammar, the replay and determinism contract, the status legend and verification axes, and the conformance suite. None of these may ever be closed off.

**Not published until all three gates pass:**
- (a) the two products converge internally;
- (b) the spec-only implementer test passes;
- (c) a user-level result exists (Critic 2, S15).

After that: Experimental, with no stability promise.

### 8. What BOW should probably own

The time-bound and contract-bound assets, because everything code-shaped is copyable:
- canonical instances and their history;
- sequencing, hosting and child-data operations;
- signing keys and trust operations;
- sourced, dated rulebooks;
- licences and Reality relationships;
- representation packs and pipelines;
- the verticals and their validity evidence;
- the name registry.

### 9. The cheapest proof that could falsify the medium thesis

There are two halves, and both are cheap. Run them on **public, non-student instances** (S10).

**(a) Technical: the spec-only two-product reader.**
- Materials:
  - a two-page envelope spec plus golden vectors;
  - one DC Market capsule (integer money, no transcendental math);
  - one NBA advance-plus-Moment export (after NBA retains its acts).
- A fresh implementer (ideally another model family, or a human engineer) builds a reader from the spec alone. It must:
  - verify both exports;
  - project them for two audiences;
  - fork the DC capsule with a declared suffix policy.
- Days of work.
- **It falsifies "one record for many systems"** if the core needs product special cases or the vectors cannot be matched.

**(b) Human: the reply-by-fork test** (Critic 2's design, adopted).
- Materials: one hand-built, public-facts capsule of a real NBA trade-deadline decision. It shows the basis, marks each value as known then, learned later or modeled, and offers one fork lever.
- Design:
  - 60 fans, randomized to a good or a bad outcome;
  - control: spotrac, a trade machine and Basketball GM;
  - treatment: the capsule;
  - the outcome-bias design of Baron & Hershey (1988).
- Pre-registered pass criteria, all three required:
  1. the outcome-bias gap shrinks by at least 50% against the control;
  2. at least 30% reply to a friend with a capsule or fork rather than prose;
  3. at least 80% of naive recipients correctly classify three marked values.
- Cost: about one week and under $500.
- **It falsifies "new medium"** if people do not use the artifact to argue differently. That makes it the decisive test; (a) only tests the substrate.

### 10. The five founder decisions that matter most next

1. **Medium or product family?** If medium, **charter a medium layer outside both product constitutions** for public, non-student, non-assessment instances. The constitutions forbid the medium test (S10).
2. **Converge DC and Worlds on one record envelope now, and name one cross-product owner.** Convergence means:
   - one canonicalization;
   - the basis stored on every entry;
   - acts retained in NBA;
   - Restore as `supersede`;
   - one Unknown and status vocabulary.
3. **Run both falsifiers in item 9 before writing any more specification.** This contract is a test plan, not a spec.
4. **Publication gate:** L0–L2 stay unpublished until the three gates in item 7 pass.
5. **Thesis scope:** "any system that matters", or institutions and decisions? Either fund one natural-system model fork scored against observation (B8), or narrow the thesis. The core is textbook, and the distinctive part is institutional (S11).

### Answers to the founder's mid-run questions

- **Place (§6).** There are three meanings, and only the per-system index is a medium "place". Real geography is Reality plus a typed, dated, salted reference in the record: relation, status, as-of and licence. It is **not** a coordinate in addresses (REJECTED) and **not** a shared substrate (SPECULATIVE FRONTIER). Discovery by geography is a Browser/Reality feature. Promotion requires the §6.3 test.
- **The Browser / New York update** was withdrawn by the founder before any work began. No New York lanes were run. The parallel Browser Frontier branch (`claude/zealous-sagan-cuy6jv`) was not touched.
