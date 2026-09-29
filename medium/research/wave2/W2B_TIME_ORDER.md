# W2-B — Time, order and clocks

Labels: **EARNED** = read in running BOW code this session (`NAME:path:line`). **HYPOTHESIS** = proposed law. Precedents: *(verified)* = checked on the web this session; *(memory)* = not. Nothing was run.

## 0. Verdict

1. Wave 1 holds. In every executable BOW line, world time is a recorded act, order is authority position, wall time is metadata. Medium law: **wall clock may trigger a time change, never be the coordinate of one.** DF Live World alone violates it.
2. Two axes suffice for the record: **position** and **world label**. Knowledge is a *position*, not a clock. Wall time is annotation. Valid time is needed only for Reality feeds.
3. Act-advanced reaches non-waiting domains only through a **recorded tick**; beyond that BOW is recorder and fork engine, not time authority. The best AI-speed fix is a knowability rule (sealed windows), not a clock rule.

## 1. Code facts (EARNED)

- **W NBA.** `clock` indexes authored `stops`; only `advance(state, expectStop)` increments it, refusing on `expectStop !== stop.id` (W:commissioner.ts:48-50,129). Outcome is "exactly the same whoever pressed it and whenever" (:14-16). One `nextSeq` serves events, Commissioner log and repairs (W:league.ts:173-178). A Moment stores `at:{clock, stop, date, seq}`: label plus position (W:types.ts:780). `Stop.date` is "display only" (:54). Obligation `dueAt` is a stop index (:248); due work is delivered once after advance, which refuses if the source changed (W:seasonTwo.ts:419-431).
- **Wall time in W** reaches the reducer only as `ctx.now` (W:index.ts:203-204), read only by `countdown`, theatre that "never closes anything" (commissioner.ts:254-260).
- **W host order:** `clientActionId` receipt → `stale_round` → reduce → CAS on `session.version`, auto-retried (W:sessionService.ts:2063-2095, 2181, 2151, 2221). Refusals leave no log entry. Recovery is a last-write-wins row journal (W:journal.ts header): JOURNALED, not replayed.
- **Other ACT clocks.** Harbor `advance_day` (W:seasonFiveOperatingWeek.ts:787); Foundry `advance(state, steps)` settles due commitments tick by tick and refuses past the horizon (W:foundry/compiler.ts:412-435).
- **DC.** `sequence = log.length+1`; `timestamp = max(at, meta.updatedAt)` (DC:src/domain/machine/reducer.ts:43-50); "Ordering comes from `sequence`" (DC:src/domain/evidence/types.ts:236). v5 server is `DC:server/v5Attempt.ts` (not `src/server/`): `now` from the handler (DC:server/handler.ts:956); order is requestId replay (:202) → `expectedRevision` (:211) → sealed check → reducer → CAS (:240). Refused receipts are journaled (:206-208). `advance` is a learner command (:30,36). `dueAt` is stored but "nothing in the service reads it back" (DC:src/platform/classes/types.ts:312-318). An 80 requests/5 min ceiling leaves no entry (v5Attempt.ts:47,115).
- **DF Live World.** `tick = floor((now−epoch)/1000)` (DF:live/live-world.src.html:372-376). Acts sort by actor `(t, id)` (:403); dropped only if `t > tau+skew` (:400); only lower bound is the World's start (:427). Deadlines are computed in the fold at the *viewer's* `tau` and never become an entry (:394,405,407). Seals are recomputed over the sorted record (:507); `nextActTime` (:521) protects honest clients only. Reading, not run: a backdated act stamped before a resolved deadline sorts ahead of it and rescues the lapse; viewers with different skew disagree on lapse status.

## 2. Proposed time model v0 (HYPOTHESIS)

```
CLOCK
T1  Each System declares clock:{kind, authority, resolution, horizon}; kind ∈ ACT | TICKED | FEED.
    Countdowns and "live" flags are theatre projections, never a kind.
T2  ACT: label moves only by an accepted `advance` from a named seat; effect is a pure function of
    state (pressing-invariant); refusal is fail-closed. [EARNED x4: NBA, Harbor, Foundry, DC learner]
T3  TICKED: a Clock seat (system occupant) appends tick(n→n') on a declared schedule. Wall time
    triggers; the fold sees only recorded ticks. Declares catch-up (coalesce|skip|pause), max jump.
T4  FEED: label = external authority's time; changes arrive as recorded inputs {source, valid-time,
    ingest-position, licence}; declares lateness and correction policy. A FEED joins an ACT clock
    only by an adoption act (the teacher presses Advance when reality passes).
COORDINATES
T5  position p: authority-assigned, total within an instance; the only ordering.
T6  label w(p): monotone in p; moves only at advance/tick/feed entries; deadlines and obligations
    are stated in w. Many positions share one w.
T7  record time r(p): sequencer wall time, clamped monotone; metadata. A rule may read r only as a
    recorded `time` input.
T8  knowledge is a position: available@p_a, opened@p_o; knowable-at-act = those <= act.basis.cut.
T9  Reality facts add valid time v. Bitemporal pair = (p, v). A correction is an entry
    correct(fact, v-range, source) that supersedes in projection, never in the log.
OPEN
T10 OPEN(system@digest, instance|lineage, cut = p | (w, start|end), clock axis, audience,
    as-known-at = p_k [default p], rules = recorded|reinterpreted). `now` is never pinned: it
    resolves to head p and the answer must echo p.
T11 "What we know now about then" = MODELED fork at p_k with corrections applied. Scheduled future =
    recorded obligation, due label > w(p), outcome UNKNOWN(not-yet). Forked future = MODELED, never
    in the record. Forecast = ex-ante act, resolved later.
ORDER
T12 Sequencer guard order: dedupe(requestId) → basis(expected cut) → rules → append accepted|refused(rule).
T13 A deadline is an act by the clock authority at a position; acts before it count; silence becomes
    a typed NO ACT emitted at that entry. Policy declared: hard | soft(extend) | sealed.
T14 Contested windows are sealed: no seat sees another's act on the matter until the closing entry;
    resolution ignores arrival order.
T15 Cross-instance act carries: seat+occupant, origin basis cut, foreign refs [(instance,pos,head)],
    effective label in the target axis >= declared lookahead, requestId, both system digests.
    Arrival position in the receiver is the order there.
T16 A composite cut is a vector of positions, valid iff downward-closed under refs. A scalar T is a
    derived display key (HLC-style), never commit order.
T17 Joint events need a joint instance (an arbiter sequencing both parties); otherwise a saga with
    compensating acts.
T18 Coupled axes use versioned alignment tables plus a sync mode: barrier (no advance past the
    peer's granted cut) | rendezvous (effect at the next shared label) | optimistic (MODELED previews only).
SPEED
T19 Fairness is System data: sealed windows first; then min-deliberation Δ (refuse if r(act) − r(basis)
    < Δ, via recorded time input); per-seat act budget; occupant.kind on every entry. A stakeholder
    seat or an AI never holds `advance` unless declared.
VERSION
T20 Each entry is read under its epoch's system digest. Epochs change by an attributable
    `system-changed` act or, preferred, a successor instance with computed carry. Replay at p:
    era-faithful (default) | reinterpreted (MODELED) | refuse if that epoch's rules are gone
    (UNKNOWN, out-of-envelope). Derived local times pin their tz database version.
```

## 3. Answers beyond the model lines

**Kinds in BOW today.** ACT: four. TICKED, FEED: none. Live World is a fourth thing, a *derived-from-wall* clock with no recorded tick or "now": REJECTED as built. Repair: make tick and lapse entries, so wall time decides only *when the authority appends*, never *whether an act counts*. Put the three-value enum in the header now; implement only ACT until a System needs more (E-main:CLAUDE.md §12).

**Deadlines without races.** (1) *Clock-authority act* (NBA): one sequencer decision settles the race; a late act is refused as stale. Cost: the authority chooses when; W keeps the countdown as theatre and E-main:CLAUDE.md §11 mandates a manual fallback. (2) *Sealed-until-deadline* removes the value of arriving first, but still needs "in the window" defined, which is (1); they compose. (3) *Live World lapse* is derived, not committed: it flips on a late earlier-stamped act and differs by viewer. Hard versus soft close is a declared policy: Roth and Ockenfels found heavy last-minute bidding on eBay's fixed end and less on Amazon's extension until ten minutes pass without a bid *(verified)*. An AI that acts at the last instant defeats soft close; sealed is robust.

**Non-waiting domains.** Airline training on ACT works: stops are decision points, duty accumulators fold over the label, slots are obligations with open and close labels; it loses events that ignore your pace. A live exercise uses TICKED; Temporal records timers as history events and replays from history instead of waiting *(verified)*: "scheduler seat, ticks as acts". Lost: order finer than the declared resolution and free pausing (a pause is an act). Real operations are FEED-driven and ACT breaks: time authority is external, cannot refuse to advance, and feed data arrives late and revised. Survivors: position order, basis, knowability cuts, projections. Anchors: FAA Part 117 Table B limits vary with acclimated start time and segment count; EUROCONTROL slot tolerance is [−5, +10] min around CTOT *(both verified)*; local time is a derived label needing a pinned tz database *(memory)*. Supply chains: position vectors, consistent cuts (Chandy–Lamport 1985, *memory*), sagas. Markets already match BOW inside one venue (engine sequence is the order); MiFID II RTS 25 requires UTC traceability of 100 µs (high-frequency) or 1 ms only to reconstruct across venues *(verified)*.

**AI speed.** First to react wins every position race, so an AI wins every human window. IEX delays inbound orders 350 µs (38 miles of coiled fibre historically; SEC approval 17 June 2016), aimed at latency arbitrage, not human parity *(verified)*. Budish, Cramton and Shim propose uniform-price batch auctions "for example, every tenth of a second", so priority is price, not speed *(verified)*. OpenAI Five ran with a 200 ms artificial reaction delay and saw every fourth frame; AlphaStar's final agents were capped at 22 actions per 5 s *(both verified)*. BOW mapping: sealed windows reuse the knowability primitive (T14); Δ and budgets are System rules whose refusals must be entries. DC's transport-level rate ceiling leaves no entry, so it is not this.

**Composition.** HLA fits: a time-regulating federate promises lookahead; a time-constrained one requests advance and is granted only when no earlier-stamped message can still arrive *(verified)*. Optimistic sync (Jefferson 1985, *memory*) rolls back, which append-only records forbid, so it is MODELED-only. Age of Empires schedules a turn-1000 command for turn 1002 *(verified)*: a rendezvous contract, the pattern for "League stop N covers club-days 60-66; cross-club acts land at the next stop". HLC (Kulkarni et al., OPODIS 2014, *verified*) gives a causality-consistent scalar near wall time: merged timelines only. Live World's `nextActTime` is a partial HLC whose guarantee vanishes at fold time.

**Replay and fork.** Reducers guard `expectRevision` by strict equality (W:filmPartnership.ts:62; staffLoan.ts:149). A fork whose intervention changes a guarded revision will refuse replayed suffix acts: the right signal, "decided against a world that no longer exists". Suffix policy `replay` must report `redecide-required`, not pass silently.

## 4. Stress cases

| Case | Result | Why |
|---|---|---|
| Two students act before advance | Works | position order; late act refused by `expectStop` (EARNED) |
| Retry, same requestId | Works | replay check precedes CAS (DC:v5Attempt.ts:202,211) |
| Countdown hits 0, authority waits | Works, UX risk | theatre never closes; declare per stop |
| Live World: backdated act before resolved deadline | Breaks | sort by claimed t rescues lapse (reading) |
| Live World: viewers with skewed clocks | Breaks | lapse derived per viewer, not committed |
| Airline exercise, ACT or TICKED | Works | folded accumulators; loses pace or sub-tick order |
| Real airline shadow (FEED) | Core works, ACT breaks | authority external |
| Forecast amended later | Works | valid time plus supersede; retrospective = MODELED fork |
| Supply chain, shipment in transit | Works as saga | causal refs; no atomic cross-instance act |
| "Open at T" over two instances | Scalar breaks, vector works | consistent cut |
| AI seat vs human deadline | Breaks on position order | sealed window fixes; Δ and budgets partial |
| AI seat holds `advance` | Breaks fairness | time authority must not be a stakeholder |
| Rule change at p0, replay at T>p0 | Works if rules retained | era-faithful; reinterpretation MODELED; else refuse |
| Time as assessment evidence | Must not | DC-main CLAUDE.md §2: reaction speed is never mastery; timeouts become typed absence |

## 5. Open questions

1. Is position enough as transaction time, or do exports need wall time with declared accuracy (RTS 25 style)?
2. Who authors and versions alignment tables between axes?
3. Who holds tick authority when the teacher device is offline?
4. May rules read `time` inputs in assessment Systems? Needs an assessment-law ruling.
5. Does sealing rivals' acts remove the visible-rival lesson? Decide per lesson.
6. Cost of foreign refs on every cross act; who validates cuts.
7. Must refused acts be entries everywhere (DC yes, W no)?

Labels: T2 and the four ACT clocks EARNED; T3-T20 HYPOTHESIS; Live World as built and scalar commit time REJECTED.

## Sources

Code: W:runtime/src/modules/worldOne/{commissioner.ts:14-16,48-50,129,254-260; league.ts:173-178; types.ts:54,248,661-666,780; seasonTwo.ts:419-431; index.ts:203-204; filmPartnership.ts:62; staffLoan.ts:149}; W:runtime/src/server/{sessionService.ts:2063-2095,2151,2181,2221; journal.ts header}; W:runtime/src/client/world/{seasonFiveOperatingWeek.ts:723,787,795; foundry/compiler.ts:412-435}. DC:server/{v5Attempt.ts:30,36,47,115,202-212,240; handler.ts:956}; DC:src/domain/machine/reducer.ts:43-50; DC:src/domain/evidence/types.ts:236; DC:src/platform/classes/types.ts:312-318. DF:live/live-world.src.html:372-376,394-407,427,507,521; DF:briefs/w3/SPEC_LIVE_WORLD.md:210. DC-main:CLAUDE.md §2. E-main:CLAUDE.md §11, §12. Wave 1: 02 §(c); 01 #14; 08 P2-P4, P6, P12; 07 "Time"; 05 lockstep and Commissioner rows.
Web (verified this session): iex.io/technology; qz.com/709271; Budish–Cramton–Shim, QJE 130(4):1547-1621 (academic.oup.com/qje/article/130/4/1547/1916146); Kulkarni et al., OPODIS 2014 (link.springer.com/chapter/10.1007/978-3-319-14472-6_2); Roth and Ockenfels, AER 92(4):1093-1103 (aeaweb.org/articles?id=10.1257/00028280260344632); docs.temporal.io/workflow-definition; eurocontrol.int/prudata/dashboard/metadata/atfm-slot-adherence; Bettner and Terrano, GDC 2001 (gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond); Fujimoto, HLA time management (sites.cc.gatech.edu/computing/pads/PAPERS/HLA_Time_Mgmt_DIS.pdf); openai.com/index/openai-five; Vinyals et al., Nature 575 (2019); MiFID II RTS 25 summaries (online-ntp-validator.com, pico.net); ecfr.gov 14 CFR Part 117.
From memory, unverified: Lamport 1978; Chandy–Lamport 1985; Jefferson 1985; SQL:2011 and Snodgrass; Spanner TrueTime; Dataflow watermarks; IANA tz versioning; chess time controls; IEEE 1516 term GALT for LBTS.
