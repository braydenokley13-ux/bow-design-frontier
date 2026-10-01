# BOW Time and Forks v0

Status: proposal, 2026-09-29. Evidence:
- `research/wave2/W2B_TIME_ORDER.md` (the full time model T1–T20, with code facts and precedents);
- wave-1 reports 01, 02, 04, 07 and 08;
- DC and W code as cited there.

Labels as in the Vocabulary. **The one EARNED law in this document is T2: act-advanced time, in four independent code paths.** Everything else is HYPOTHESIS unless marked.

---

# Part I: Time

## 1. The law BOW already obeys, and the one place it breaks

**Wall clock may trigger a time change. It may never be the coordinate of one.** (W2-B §0)

In every executable BOW line, world time moves only by a recorded, attributable act, and order is the authority-assigned position:

| Line | How time moves |
|---|---|
| W NBA | The Commissioner's `advance(state, expectStop)` over an authored stop list. It refuses when `expectStop` is stale, and the outcome is "exactly the same whoever pressed it and whenever". |
| W Harbor | The owner's `advance_day`. |
| W Foundry | `advance(state, steps)`. It settles due commitments tick by tick and refuses past the horizon. |
| DC learner | A learner `advance` command. DC's `sequence = log.length + 1`, and "Ordering comes from `sequence`". |

Wall time reaches W's reducer only as `ctx.now`, which is read only by the countdown. W calls the countdown "theatre that never closes anything". **EARNED ×4** (W2-B §1).

The single violator is DF's Live World:
- acts sort by actor-claimed `t`, with only the World's start as a lower bound;
- deadlines are computed per viewer and never committed as entries;
- seals are recomputed over the sorted record.

Reading the code: a backdated act stamped before a resolved deadline sorts ahead of it and rescues the lapse, and viewers with different clock skew disagree on whether a lapse happened. **REJECTED as built** (K1). The repair: make ticks and lapses entries. Wall time then decides *when the authority appends*, never *whether an act counts*.

## 2. Clock kinds (T1–T4)

A SYSTEM declares `clock: {kind, authority, resolution, horizon}`.

| Kind | Meaning | Status |
|---|---|---|
| **ACT** | The label moves only by an accepted `advance` from a named seat. The effect is *meant* to be a pure function of state (it does not matter who presses or when), **but W's draft stop reads the host's seat registry at the moment of pressing** (E35; Critic 1 A8). The law must therefore add: every host input is recorded, and window boundaries follow a declared policy or are sealed. Refusal is fail-closed. | **EARNED ×4** (act-advanced); "pure function" **not** EARNED |
| **TICKED** | A clock seat (a system occupant) appends `tick(n→n′)` on a declared schedule. Wall time triggers the tick, but the fold sees only recorded ticks. The System declares its catch-up policy (coalesce, skip or pause) and a maximum jump. This is Temporal.io's pattern: timers are history events, replay reads history instead of waiting. | HYPOTHESIS |
| **FEED** | The label is an external authority's time. Changes arrive as recorded inputs `{source, valid-time, ingest-position, licence}`, with a declared lateness and correction policy. A FEED joins an ACT clock only by an **adoption act** (for example, a teacher presses Advance when Reality passes). | HYPOTHESIS |

Countdowns and "live" flags are **theatre projections, never a clock kind**.

Rule of restraint: put the three-value enum in the header now, but implement only ACT until a System needs more (E-main §12).

## 3. Coordinates, and what "OPEN SYSTEM AT TIME T" must mean

**Two axes suffice for a record** (T5–T8):

- **Position `p`:** the only order, and total within an instance.
- **World label `w(p)`:** monotone in `p`. It moves only at advance, tick or feed entries. Deadlines and obligations are stated in `w`, and many positions share one `w`.
- **Record time `r(p)`:** metadata (sequencer wall time, clamped monotone). A rule may read it only as a recorded `time` input.
- **Knowledge is a position, not a clock.** A source available at `p_a` and opened at `p_o` is knowable at an act iff both are ≤ the act's basis cut. This is how the ACT BASIS of the Contract connects to time.
- **Valid time `v`** appears only for Reality facts. A correction is an entry `correct(fact, v-range, source)` that supersedes the fact *in projection*, never in the log. That is bitemporality without rewriting history (T9).

**OPEN (T10), the time-native opening of a system:**

```
OPEN( system@digest,
      instance | lineage,
      cut        = p | (w, start|end),        # a label names a *span* of positions, so say which end
      clock axis,                              # which clock's label, when several are composed
      audience,                                # capability-gated
      as-known-at = p_k   [default: p],        # what the audience could know, not what is true now
      rules      = recorded | reinterpreted )  # era-faithful (default) or MODELED reinterpretation
```

**`now` is never pinned.** It resolves to the current head position, and the answer must echo that position back. HYPOTHESIS.

**Is OPEN-AT-T as fundamental as opening a page?**

Parent answer: *yes for BOW, in a precise sense*. Opening a web page is opening `now` of a mutable document. Opening a BOW instance at `(p, audience, as-known-at)` is the basic read, and "now" is the special case. ~~That is the native operation no page, spreadsheet or game offers together~~ (withdrawn; see the correction below). The combination is:
- a pinned past cut;
- that past as a specific audience knew it then;
- under the rules in force then.

Each ingredient has a precedent (Datomic `as-of`, bitemporal SQL, information sets). The combination as the *default read* is what BOW would make ordinary. HYPOTHESIS; one half is EARNED per product (DC's knowability cut, W's season-aware reads).

**Correction after Critic 2 (S2).** The draft said no page, spreadsheet or *game* offers this combination. That is false for games. StarCraft II replays open any position, with one player's vision, in the game version the match was recorded under; poker hand replayers and Lichess do similar things. BOW's version is a **domain transfer to institutions and decisions**, not a new operation. It is also guaranteed only in record-bearing instances (Critic 1 A2).

**Time kinds in the founder brief, mapped (T11):**

| Asked for | BOW semantics |
|---|---|
| Historical state | `OPEN(p)` in the past, era-faithful |
| Current state | `OPEN(now)`, which resolves to head `p` |
| Future scheduled state | A recorded obligation whose due label is > `w(p)`. Its outcome is `Unknown{not-yet}`. |
| Forked future | A **MODELED** branch. It is never in the record. |
| Retrospective reconstruction ("what we know now about then") | A MODELED fork at `p_k` with later corrections applied. It never overwrites the era-faithful record. |
| What was knowable then | `as-known-at = p` for the audience, derived from the basis layers |
| What can be replayed | Anything REPLAYABLE whose rules for that epoch are retained. Otherwise `Unknown{out-of-envelope}` (T20). |
| Authoritative clock | The declared clock authority. It owns **when, never what**. |
| Forecast | An ex-ante act (a prediction committed before the outcome), resolved and scored later (07's "ex-ante commitment") |

## 4. Order, deadlines and composed clocks

- **Sequencer guard order (T12):** dedupe (requestId), then basis (expected cut), then rules, then append `accepted` or `refused(rule)`. EARNED in W and DC v5 (W2-B §1).
  - Unresolved: W does not record refusals as entries, while DC does.
- **A deadline is an act (T13).** The clock authority appends it at a position, and acts before it count. Silence becomes a typed **NO ACT** emitted at that entry. The System declares the close policy: hard, soft (extend) or sealed.
  - Eyeing an AI occupant: soft close is defeated by acting at the last instant (the eBay/Amazon ending-rule evidence, Roth & Ockenfels). **Sealed close is robust.**
- **Contested windows are sealed (T14).** No seat sees another's act on the matter until the closing entry, and resolution ignores arrival order. This reuses the knowability primitive: fairness *is* a knowability rule.
- **Cross-instance acts (T15)** carry:
  - seat and occupant;
  - the origin basis cut;
  - foreign references `(instance, pos, head)`;
  - an effective label in the target axis (at or after a declared lookahead);
  - a requestId;
  - both system digests.

  Arrival position in the receiver is the order there.
- **A composite cut is a vector of positions (T16).** It is valid iff downward-closed under the references (a consistent cut, as in Chandy–Lamport). A scalar "time T" across instances is only a display key (HLC-style), **never commit order**.
- **Joint events need a joint instance (T17)**, meaning an arbiter that sequences both parties. Otherwise the event is a saga with compensating acts. This matches Composition law C4.
- **Coupled clocks (T18)** use versioned alignment tables plus a sync mode:
  - **barrier**: no advance past the peer's granted cut (HLA conservative);
  - **rendezvous**: the effect lands at the next shared label. Age of Empires schedules a turn-1000 command for turn 1002; in BOW terms, "League stop N covers club days 60–66, and cross-club acts land at the next stop".
  - **optimistic**: MODELED previews only, because append-only records forbid rollback.

## 5. AI speed (T19)

**First to react wins every position race, so an AI occupant wins every human window by construction.**

Fairness is System data, in this order of preference:
1. **Sealed windows.** Arrival order stops mattering (the frequent-batch-auction logic).
2. A **minimum deliberation interval Δ**. Refuse if `r(act) − r(basis) < Δ`, using a recorded time input.
3. A **per-seat act budget**.
4. `occupant.kind` recorded on every entry.

Precedents with the same intent: OpenAI Five's 200 ms reaction delay, and AlphaStar's cap of 22 actions per 5 s.

**The time authority must never be a stakeholder.** An AI or a competing seat never holds `advance` unless the System declares it. HYPOTHESIS.

Reaction speed is never evidence of mastery (DC-main CLAUDE.md §2). In assessment Systems, timeouts become typed absence.

## 6. Version over time (T20)

Each entry is read under its epoch's system digest. The system version changes by:
- an attributable `system-changed` act; or
- preferably, a **successor instance with a computed carry**. W already does this: Season Two computes its carry once, and Season One is never rewritten (EARNED).

Replaying at `p` can be:
- **era-faithful** (the default);
- **reinterpreted** (MODELED);
- **refused** if that epoch's rules are gone (`Unknown{out-of-envelope}`).

Derived local times pin their time-zone database version.

---

# Part II: Forks (WHAT IF?)

## 7a. Corrections after the adversarial critics

- **Supersession (Critic 1, A1).** W's classroom Restore rolls a room back and "opens a new branch of the room's history" (E34). That is not a fork: it is the *authority* replacing what is in effect.
  - It must be a recorded `supersede(to: cut)` act that opens a **supersession epoch**.
  - Superseded entries stay readable as SUPERSEDED.
  - "Delivered once" holds per epoch.
  - Forks remain MODELED and never write back. Supersession is authority over one's *own* record, never over a parent or Reality.
- **Branch sequencer (A9a).** An unpromoted branch is sequenced by the process that computes it, answerable to its creator, with no authority over its parent.
- **Corrections to consumed facts (A16).** When an OBSERVED fact a rule already consumed is corrected, current state stays computed from the old value. Derivations must cite the input *entry*, and the correction affects only later transitions or a MODELED retrospective fork (refines T9).
- **Precedent (Critic 2, S7).** Suffix policies, `redecide-required`, rule forks and Reality forks all have precedents: `git rebase`, the Lucas critique, PGN variations, Basketball GM Real Players leagues, Palantir Foundry Scenarios. They are hygiene BOW needs, not novelty.



## 7. What a fork is (and why it is not Save As)

A **FORK** creates a **BRANCH**: a MODELED instance with the parts below. EARNED at the mechanism level in DC (`decisionBranch`, SHA-256 id) and W (Lab ×3). Everything beyond that is HYPOTHESIS.

| Part | Meaning | Evidence |
|---|---|---|
| **Lineage** | Parent instance at head, plus the cut position | DC branch id hashes the parent transcript (EARNED) |
| **Interventions** | What changed (see §8) | DC replaces one act (EARNED) |
| **Suffix policy** | What happens to parent acts after the cut: `replay-unchanged`, `drop`, `redecide(policy)` or `fresh-occupants` | **UNRESOLVED**: DC replays, the W Harbor Lab drops, supply chains need `redecide` (07) |
| **System pin** | The rules the branch runs under | EARNED (version discipline in both products) |
| **Validity envelope check** | Refuse, with Unknown, where the model does not hold | RECURRING refusal (DC `null`, W "unsupported rather than guessed") |
| **Status** | MODELED. Acts by fresh occupants are GENERATED. | EARNED (`modeled-analysis`; ACTUAL/MODELED/UNKNOWN) |
| **No writeback** | A branch can never write its parent, Reality or any other instance | RECURRING (DC branch cannot write attempts; W Lab "never the live World") |
| **Content id** | `(parent head, delta, rules pin)`, so identical forks share an id | DC EARNED; general HYPOTHESIS (08 P5) |

**A consequence W2-B found in code.** Reducers guard `expectRevision` by strict equality. So when an intervention changes a guarded revision, a replayed suffix act is **refused**, and that refusal is the right signal: the act was "decided against a world that no longer exists". The `replay-unchanged` policy must therefore report **`redecide-required`** instead of passing silently. The act basis makes forks honest automatically. HYPOTHESIS (reading, not run).

## 8. Kinds of intervention

| Intervention | Example | Profile | Status |
|---|---|---|---|
| **Act fork** | "What if Boston had not traded White?" | INST | EARNED (DC, W) |
| **Assumption fork** | Declare a value for an Unknown ("assume the rival accepts") | CORE | DF Council design (declared, modeled or unknown seats); HYPOTHESIS |
| **Rule fork** | Run the same history under a different SYSTEM version ("no second apron") | CORE | HYPOTHESIS (a policy what-if); needs era-faithful vs reinterpreted replay (T20) |
| **Model fork** | The same record under a rival mechanism | NAT | SPECULATIVE FRONTIER (07) |
| **Reality fork** | Fork from an OBSERVED Reality snapshot ("the real Celtics as of today") | CORE | W real identity as a "frozen dated snapshot" is the seed. HYPOTHESIS. |

## 9. Long-lived, collaborative, published forks

**Is a branch a World?**
- Structurally it is an instance with a record. By default it is an **analysis artifact**: no independent authority, no occupants, no running clock.
- A **promotion act** makes it a WORLD. It acquires a clock authority, seats and governance. Its lineage stays, and it stays **MODELED relative to its parent and to Reality** forever. HYPOTHESIS.
- **Epistemic status is relative to the reading instance.** An event RECORDED in a promoted fork reads as MODELED from its parent's frame. W already says this implicitly: "Actual always means recorded inside the simulation" (02). Cross-instance reads must translate status by frame. This is a new law candidate; HYPOTHESIS.

**Persistent, years-long forks.** The parent keeps moving, and a long-lived fork chooses a relation to it:
- **Frozen divergence:** it ignores the parent after the cut.
- **Tracking:** each arriving parent entry is classified against the fork as **HELD / DIVERGED / IMPOSSIBLE / UNKNOWN / INDEPENDENT-assumed**. This is DF's "Living" ledger, which is authored today, not computed. Where an entry conflicts, a re-declare flag is raised.
- **Rebase:** re-run the fork's interventions on newer parent entries ("what if, given everything that has actually happened since?"). This is possible only where the interventions replay. Guards will force `redecide-required` wherever the basis changed.
- **Reality comparison:** divergence between a branch and its parent, or Reality, is a *projection*, meaning a derived view, not stored truth. A forecast branch is scored when Reality resolves it.

**Merge semantics.** **History never merges.** Two different pasts cannot both be the past. Only three things cross from a fork, and none of them is history:
1. **Rule proposals.** A governance act in the parent adopts a rule the fork tested; the fork is cited as evidence.
2. **Findings.** Capsules from the fork are cited as MODELED evidence.
3. **Nothing else.** Parent → fork is optional rebase.

This is H12, confirmed; "merge" as git knows it is **REJECTED** for histories.

**Forks interacting with canonical Worlds.**
- A fork may *read* its parent at pinned heads.
- It may never write, transact or claim authority there (Composition C1).
- A *promoted* fork World can hold contracts with other Worlds as an independent authority. Its facts remain MODELED relative to the referent it diverged from.

**Public forks as communities.** A published fork with occupants is a World with its own governance. Its creator holds clock authority unless the fork declares otherwise. Lineage forms a public fork tree, like a repository network graph. Communities form around shared branch Worlds. SPECULATIVE FRONTIER. The design risk is that popularity makes a MODELED history *feel* actual, so status marks must survive every representation (Representation L3).

**Fork explosion.** At classroom scale, 30 students × 10 Moments is 300 branches per class, and 10^5 classes is 3×10^7 (08 P5). This requires:
- content-addressed branches;
- **retention classes** (anchored vs ephemeral);
- an expired branch resolving to a **tombstone head** that reads as `Unknown{not-recorded}`, never as silently missing.

Branches that run AI occupants pin the occupant model. Long-lived branches outlive models, so their acts replay from recorded outputs only (Portability §4). HYPOTHESIS.

## 10. Open time and fork questions (carried to `BOW_OPEN_QUESTIONS_V0.md`)

1. Is position enough as transaction time for exports, or do exports need wall time with a declared accuracy (MiFID II RTS 25-style)?
2. Who authors and versions alignment tables between composed clocks?
3. Must refused acts always be entries? DC yes, W no.
4. May assessment Systems' rules read `time` inputs at all?
5. Does sealing rivals' acts remove a lesson that depends on visible rivals? Decide per lesson.
6. Which suffix policy is the *default*, and can a reader always see which one a fork used?
7. What promotes a branch to a World, and who may do it?
