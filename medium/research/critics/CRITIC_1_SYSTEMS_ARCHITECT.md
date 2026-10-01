# Critic 1: Systems Architect

Independent review, 2026-09-29. I read the eleven proposal files, W2-A, W2-B and W2-D, and the W source at `econ-worlds` (read-only). Nothing was run. "Read in code" means I read the source; everything else is reasoning. I label each objection by the claim it attacks: an **EARNED/RECURRING** claim the evidence contradicts, or a **HYPOTHESIS** the packet overstates.

---

### A1 · FATAL as stated (repairable) · attacks EARNED "append-only RECORD", M10, Q16
**Claim.** RECORD "is append-only" (Vocabulary §1). "History never merges. Two different pasts cannot both be the past" (Time §9). "Append-only records forbid rollback" (T18).
**Failure.** W's teacher **Restore** is an authoritative rollback of canonical history. `sessionService.ts` (restore path, around lines 3090-3125) resets `state` and `log: cp.log` to a checkpoint and increments `restoreEpoch`. Its own comment reads "A RESTORE OPENS A NEW BRANCH OF THE ROOM'S HISTORY". Retried receipts return `superseded`, and a test asserts "a restore opens a new branch of the room's history". E-main CLAUDE.md §11 makes restore a mandatory control.
- Acts from epoch 0 satisfy all three Q16 conditions for "canonical", yet they are not in effect.
- A capsule of an epoch-0 Moment would verify as REPLAYED while the room's present denies it.
- "Due work is delivered once" (E11) fails across epochs: restore to before an advance, advance again, and the work is delivered twice.

**Own evidence.** W2-A §4 lists "superseded acts after teacher restore (`restoreEpoch`)" as *real but missing*. The revised envelope dropped it. No proposal file mentions restore.
**Repair.** Add an appended `supersede(to: c)` act that opens an authoritative epoch. Split SEQUENCED from IN-EFFECT. Add a SUPERSEDED read kind. Give each epoch its own heads. Redefine canonical as "in effect on the current epoch".

### A2 · MAJOR · attacks RECURRING POSITION and EARNED RECORD
**Claim.** POSITION is "a total order within one INSTANCE" (RECURRING). Each entry is "an adjudicated act at a POSITION". OPEN-at-T is "the basic read".
**Failure.** Read in code: an NBA owner act writes `sponsors[id].choice = {partner, at: state.clock, why}` (`sponsor.ts:212`). It has no sequence number and no seat, and it overwrites the prior answer. Suppose two co-owners flip the choice three times. The record keeps only the final value, so the order, the count and the authorship of those acts are unrecoverable. DC v5 keeps two sequences (W2-A S2), so "the" position is ambiguous there too. NBA "cannot serve an arbitrary past cut" (W2-A §2).
**Own evidence.** It contradicts itself: E23 and Ledger F1 are stated, yet the labels are kept.
**Repair.** Make POSITION and OPEN-at-T per-instance capabilities that are guaranteed only where `actLog: retained`.

### A3 · FATAL for M1's promise · attacks the HYPOTHESIS "interchange, not storage"
**Claim.** "The medium standardizes what systems can *show and prove*, not how they compute" (Protocol §1, M1).
**Failure.** Under `actLog: absent; derive: stored+invariants`, the host synthesizes entries after the fact from row snapshots. W2-A: "NBA entries can only be *synthesized*". Consistency=INVARIANTS certifies only that some state satisfies the declared invariants. A fabricated history that conserves money passes. The instance also declares its own storage mode, so the party being verified chooses its own test. For such instances the medium standardizes **showing**, not **proving**.
**Is NBA's missing act log a disqualifier?** For any claim above R/CLAIMED about *acts*, yes. It is cheap to fix. The reducer is pure and the action is in hand at the same fsync that writes the row snapshot (`journal.ts` header). The action was simply not written.
**Repair.** Two tiers: **record-bearing instances** (acts retained, position assigned before acknowledgement), required for V/B/H and any consistency claim other than NONE; and **snapshot publishers**, which never emit ENTRYs.

### A4 · MAJOR · attacks the §4 correction, M3 and T19
**Claim.** "The write half is a request guard… storing it adds nothing", because "every accepted act is decided against the head" (Contract §4.1, §4.3).
**Failure.** This conflates *applied at* the head with *decided against* it.
- W2-A says NBA owner acts carry **no basis**.
- W marks a CAS conflict as retryable ("this will be retried automatically", `sessionService.ts`), and the client outbox re-sends it (`outbox.ts:418`). No receipt was stored, so the retry re-reduces the act against a state the actor never saw, and the act is accepted.
- So on most W entries the actor's cut is unknown. It is not redundant, and M3 ("stale acts are refused") is false there.
- Internal contradiction: T19's fairness rule, "refuse if r(act) − r(basis) < Δ", needs a stored basis time.

**Repair.** Make `basis.cut` mandatory on every entry, recorded with its time, or `Unknown{not-recorded}` where it is missing.

### A5 · MAJOR · attacks H conformance and "signed heads"
**Claim.** The Host level "proves itself by attestation plus an external log of heads".
**Failure.**
- **Equivocation.** A host shows head X to the class and head Y to the district, and signs both. Per-audience exports are *meant* to differ, so a split view looks like legitimate projection.
- **Unchecked withholding reasons.** A host can hide an embarrassing act as `not-available-to-audience`. The digest proves *that* something was withheld, not *why*.
- **Missing key management.** "Key compromise", "rotation" and "revocation" appear nowhere in the packet.
- **Pre-signing rewrites.** Anything before the first signed head is host-authored.

**Own evidence.** Report 05 rejects "strangers can trust it" without "signed head + gossip". The Tournament gives the log to the operator (C2), so the log operator is the host.
**Repair.** Every audience export commits to one head per position; add inclusion and consistency proofs with non-BOW witnesses; define a key lifecycle; Unknown reasons cite a rule id that replay can check.

### A6 · MAJOR · attacks the Portability §3 honesty rule and Tournament C3
**Claim.** "Each stripped span appears as a typed Unknown with a digest… Nothing downgrades silently."
**Failure.**
1. **Digests leak.** A partner choice ∈ {patch, community, playoff, none} is recovered in four hash attempts. W2-D itself REJECTS "state hashes as public commitments", yet ENTRY carries `stateDigest?`. Salt is specified only for other seats' private acts.
2. **Dependence is transitive through a fold.** Every later state depends on each stripped act. "Falls to CLAIMED for anything that depends on a stripped span" therefore makes almost the whole suffix CLAIMED for every non-host audience of any multi-seat World with private information. "Verification without BOW's servers" survives only for single-seat or all-public instances.

**Repair.** Salt every commitment, and state that REPLAYED is host-audience-only for private-information Worlds unless zero-knowledge proofs or a trusted verifier are added.

### A7 · MAJOR · attacks M4 (labelled "CANON-CANDIDATE")
**Claim.** "Nondeterminism is recorded, never regenerated", with W's commit-reveal dice cited as the evidence.
**Failure.** Read in code: court dice are "derived from the league seed, never stored, never sent ahead" (`courtWorld.ts:127`). They are **regenerated** by HMAC from `state.seed`. The host picks the seed, so it can grind seeds before the commitment, and it knows every roll in advance. Until the reveal at the Reckoning, no third party can replay a live World. Consistency is therefore NONE exactly while disputes are live.
**Labels.** "CANON-CANDIDATE" is not one of the five defined labels. Ledger H4 caps verification basis (M9) at HYPOTHESIS, and M4 has no ledger row at all. Both labels exceed the ledger's declared ceiling.
**Repair.** Restate M4: each input is recorded by value, or derived from a prior commitment with a scheduled reveal. When the host is a stakeholder, the seed comes from a joint commit-reveal or a beacon.

### A8 · MAJOR · attacks EARNED T2 and Q13
**Claim.** The clock authority "owns *when*, never *what*". Advance is "a pure function of state… whoever pressed it and whenever".
**Failure.** Read in code: `advance(state, expectStop, registeredSeats)` at the draft stop calls `runDraft(state, registeredSeats)` (`commissioner.ts:48-54`, `league.ts:226-231`).
- The entrants are the **host's seat registry at the moment of pressing**. That registry is not in WorldState and is not recorded as an input.
- If the teacher presses early, a late-joining seat gets no franchise. The timing decides who owns Boston.
- More generally, under T13 the moment of a deadline decides which acts count, which is a "what".
- T19's "the time authority must never be a stakeholder" concedes this.

**Repair.** The clock authority chooses window boundaries, so boundaries need a declared policy or sealing; every host-side input to a transition is a recorded input.

### A9 · MAJOR · attacks the semantics of the spine (HYPOTHESIS definitions, but "RECURRING" claimed)
**Failures.**
- **(a)** An INSTANCE is "under one authority", while a BRANCH has "no independent authority". Who sequences an unpromoted fork? Q16's "canonical only inside the fork" has no recognized authority to refer to.
- **(b)** A WORLD is an INSTANCE, yet the EARNED example (World One, Season One→Two by carry) is *two* instances, a CONTINUATION. T20 also *prefers* successor instances. So a World is a **lineage**, not an instance.
- **(c)** A MOMENT is "a view, never a new record", yet it has append-only consequences and a seal. W's `LeagueMoment` stores `sealedAt`, and a pure view cannot be sealed.
- **(d)** W2-A maps seed-derived truth to GENERATED, the same status as a model hallucination. For a canonical dice roll, RECORDED vs GENERATED is undecidable. The STATUS set is called "eight-value" but lists seven.
- **(e)** "epoch" means a rule epoch (T20) in the packet and a restore epoch in W.

**Repair.** Make LINEAGE the World-level noun, give branches an explicit analysis sequencer, make MOMENT a record object with its own sub-log, and split DRAWN (committed randomness) from GENERATED.

### A10 · MAJOR · attacks the HYPOTHESIS L4 "fork with authority transfer"
**Failure: the escrow dilemma.** BOW shuts down and a school re-hosts World One.
- Signed by the old host: portability dies with the host.
- "ATTESTED by the new host": any importer crowns itself, so "importing alone never confers authority" is unenforceable.
- As a *fork*, the rescued World's whole future is MODELED forever, though CONTINUATION/CARRY exists for exactly this case.

**Repair.** Put a succession rule inside the SYSTEM (an escrowed or threshold key held by seat-holders). L4 then becomes a continuation authorized by that rule.

### A11 · MAJOR · attacks EARNED M13/E10 ("authority derived, never asserted")
**Failure.**
- **To a reader, `act.seat` *is* a host assertion.** Authentication is out of protocol (Protocol §6), and W receipts store `seatId` plus a fingerprint but no proof of authentication.
- **E10 is overstated.** The Commissioner's REPAIR verb reassigns seat→franchise (`commissioner.ts:330-348`), so "Teachers cannot act for owners" holds only modulo a logged repair and a device the teacher controls.
- **Governance can amend itself.** Governance acts change the SYSTEM that defines the amendment procedure, and nothing fixes which version adjudicates an amendment of the amendment rule. This is who authorizes the authorizer.

**Repair.** Occupants hold seat keys and each act carries an attestation. Meta-rules (amendment, succession, repair) are fixed per lineage, outside ordinary transitions. Seat repair is an authority event readers must see.

### A12 · MAJOR · attacks HYPOTHESIS C3, C4 and T15-T16
**Failures.**
- **Bilateral references cannot be atomic.** A's entry pins `B@head_b`, and B's reciprocal entry comes later, after B has moved.
- **M3 is silently suspended across instances.** T15 says "arrival position in the receiver is the order", so B does not enforce A's basis. If B did enforce it, a busy B would starve A.
- **Sagas may never end.** Compensation in B needs B's consent (C1), so a saga has no termination guarantee, and "Unconfirmed effects stay Unknown" has no deadline.
- **Consistent cuts are uncheckable where federation matters.** A cut "downward-closed under references" cannot be checked through opaque pairwise HMAC references (required at trust boundaries, §4) or into private club books.

**Repair.** A cross act is a request/accept pair with a declared basis policy (strict or lookahead). Sagas get deadlines with typed silence. A composite cut is CLAIMED unless every member instance is readable.

### A13 · MAJOR · attacks the unstated availability model (Q14 "single sequencer")
**Failure.** One sequencer per instance is a silent CP choice.
- **Offline occupants.** An offline Chromebook cannot act, or its local acts can only become MODELED branches or stale refusals (no merge; M3).
- **Offline clock.** When the teacher's device is offline, ACT and TICKED clocks halt (Open Q C3).
- **Durability before acknowledgement.** H conformance does not require it, although W's own journal header records "four of eight decisions the product had already told a child were taken did not come back".
- **Failover.** There is no story for handing over the sequencer, so "recognized authority" after a failover is undefined.

**Repair.** H requires a durable append before acknowledgement, a declared availability model, and failover as a recorded authority-transfer act.

### A14 · MAJOR · attacks the HYPOTHESIS L2 determinism target
**Failures.**
- **(a) Wasm replays a different program.** Wasm plus a bundled libm is not the V8 JS that produced World One (`Math.exp`, Box–Muller), so era-faithful L2 replay of *existing* W history is impossible. "Hash what runs" holds only if the host itself executes the pinned artifact, and only from then on.
- **(b) Fuel is not portable.** Fuel is engine- and instrumentation-specific, so "every replica agrees whether an act completes" holds only under a pinned metering pass.
- **(c) REPLAYED can omit what students read.** Digest scope is declared per SYSTEM, and W strips prose, so REPLAYED on W does not cover the text a student actually read. The text can be altered and replay still passes.

**Repair.** Pin the metering pass inside the artifact. Put presentation text into digest scope, or report consistency per field set.

### A15 · MINOR · attacks "the conformance vectors are the specification"
**Failure.** Golden vectors cannot specify hyperproperties: never widen, never upgrade status, non-interference. Nor can they specify authentication or authority at level H.
**Repair.** Pair vectors with normative prose, property-based and differential testing, and an audit for H.

### A16 · MINOR · attacks T9 "supersede in projection, never in the log"
**Failure.** A correction to an OBSERVED fact that a rule has already consumed leaves current state computed from the old value while the projection shows the new one. DERIVATION then cites a fact its own projection contradicts. The concrete case is TD Garden's capacity: 18,624 vs 19,156.
**Repair.** Derivations cite the input *entry*. A correction affects only later transitions or a MODELED retrospective fork.

### A17 · MAJOR · attacks the §6 grounding verdict (HYPOTHESIS)
**Failure.**
- **Transitivity by the back door.** COUNTERPART is "pairwise, non-transitive", yet two instances that each hold `is wikidata:Q…` join through the shared endpoint. The Browser join (§6.1) is the cross-context graph K7 kills; student protection becomes policy, not structure.
- **Labeling contradiction.** A record-level relation vocabulary containing `located-at` *is* place-specific protocol.
- **Id churn.** QID merges break pinned capsules (F2).

**Repair.** Salted per-instance grounding by default, an explicit public-figure/public-place namespace, and no claim of zero protocol footprint.

---

## Label overstatements
- **Undefined labels.** M4 and M9 are labelled "CANON-CANDIDATE", which is undefined and exceeds ledger ceiling H4.
- **POSITION and RECORD.** They are labelled RECURRING/EARNED against E23.
- **T2.** "A pure function of state", labelled EARNED ×4, is false at the draft stop.
- **E10.** It ignores REPAIR.
- **Evidence base.** It lists "two independent adversarial critics" before any has reported.

## The three objections that most threaten the proposal
1. **A1: authoritative rollback is unmodeled.** The classroom-mandated Restore breaks the append-only record, the definition of "canonical" and "history never merges".
2. **A3: interchange-not-storage proves nothing for stored-state instances.** BOW's flagship World can only *show*, not *prove*.
3. **A6 (with A5): private-information Worlds cannot be verified without the host.** Digests leak, stripping cascades to CLAIMED, and equivocation is undetectable.

**Verdict.** M1–M17 are coherent enough to test only after rollback epochs are modeled, record-bearing is made a precondition for any consistency claim, and `basis.cut` is always stored. Without those, the spec-only implementer test will pass on DC and silently mislabel NBA.
