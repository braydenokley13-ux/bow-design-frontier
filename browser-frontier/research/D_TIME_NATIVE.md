# D · Time-native navigation
RESEARCH · 29 Sep 2026 · design reading, not evidence of use

## 0. The claim

**In BOW Browser you do not travel through time; you stand at a cut.** A cut is not a timestamp. It is a sealed cross-section of a system as one knower could have known it: what was on the books, what was on the desk, and, drawn as part of the room, what was not yet. The rest follows. No global scrubber, because a moment needs three coordinates (when it was true, who could know it then, what we have learned since). No single Back, because a person carries three histories with different laws (their path, the system's record, their own acts). A branch is not an undo or a merge: it starts beside Reality on its own clock, and Reality later arrives and grades it, one way only. Bitemporal data, Memento and Git supply the substrate; they stop where the human problem starts: whose knowledge, what is sealed, what you cannot un-know, what must never merge. On an open founder question: a branch **may** be cut with hindsight; the hindsight is stamped on it, never gated.

## 1. What the incumbents get wrong or leave out

**1.1 Wave 2's "kind of time tells the kind of system."** Keep: each system is a presence with its own time. Break:

1. **A system keeps several times at once.** Boston Reality has a live tick, a season calendar, a deadline countdown and a record that lags the wall clock. Each system needs a *time profile*, not one of five clock kinds (C2).
2. **Two instruments, two spoiler laws.** In the Clock Hall board a Moment is "STOPPED · the future half is sealed"; Rewind is one slider over the record ("k of N") with no seal and no knower.
3. **A date is not an address.** The fixture dates Simons-to-Chicago at the 5 Feb 2026 deadline; a press report dated 3 Feb 2026 carries the same trade (Boston.com, citing Charania on X) [verify]. A cut labelled "5 Feb" already knows. The door needs a knowledge frame.
4. **"Back is three things" picked the wrong three.** Leave, Rewind and Back-to-branch-point are verbs on the system. Missing: my acts, and my path as a tree.
5. **No scheduled future.** Only "sealed" and "advances Monday". Lifestreams (Freeman and Gelernter, 1996) put calendar items on the same line as the past: right for the scheduled, wrong for the sealed.
6. **Pinned and free clocks are blurred.** Living-fork reconciliation needs a branch whose dates are Reality's; "Year Two · Week 9" has been decoupled since Year 0.
7. **No anchor.** Return is per presence; nothing keeps Reality in view during a cut, and showing its content there would spoil.

**1.2 Is a scrubber the right instrument? Not as the global one.** It moves one cursor along one axis and treats every instant as equal. It fits a pure fold with a computed future: Bret Victor's 2012 "Inventing on Principle" demos, Elm and Redux time-travel debuggers, a replay of a played game. It fails here: (a) a moment needs three coordinates; (b) a season's meaning sits in a handful of instants; (c) dragging is free look forward, the opposite of a seal; (d) it cannot say whose time moves; (e) it suggests the real past is editable (in Braid, objects marked green ignore your rewind; Reality is that). Keep one inside a bounded segment, notched by events: the Reel (C5). Proportion survives as a static ruler of gaps.

**1.3 Is this fundamentally different from version history (Git, Docs history, Time Machine)? Yes in four places; no in the plumbing.**

*Same plumbing:* append-only log, content-addressed states, cheap fork pointers, deterministic replay (event sourcing, Fowler 2005; Git). The Live World page's act-log fold with SHA-256 is the same idea (REAL, not yet run on a real store).

*Different:*
1. **A knower.** Version history has one time: when someone saved. Bitemporal data adds valid time, when a fact was true in the world (Snodgrass and Ahn, SIGMOD 1985; SQL:2011, Kulkarni and Michels 2012; Fowler 2021: "actual history" vs "record history", "how our knowledge of history changes"). BOW needs a third coordinate: *whose* knowledge. Transaction time is the database's; a seat's is a separate set (the "interpreted systems" view, Fagin, Halpern, Moses and Vardi, 1995). At the deadline the trade was true before it was knowable.
2. **A seal.** Git, Docs history and Time Machine leave every later version one click or flag away; none can hide a past's own future. Memento (RFC 7089, 2013) leaves selection "at the server's discretion" (nearest in time, or nearest in the past) and says nothing on embedded resources. Jones and Nelson (IJDL 2018) found nearest-in-time leaks spoilers in fan wikis and proposed a past-only bound ("minpast"); Ainsworth et al. (Hypertext 2015): "Only One Out of Five Archived Web Pages Existed as Presented". So: floor, never nearest, one instant across every component.
3. **A Reality that never merges.** Version history exists to restore and merge; a branch's destiny is main. Reality accepts nothing; it arrives, and grades.
4. **Consequences, not edits.** A Git branch is an edited copy. A BOW branch is a changed act re-run through the rules, with other actors' declared responses, on its own clock: a running system, not a stored artifact.

*For humans:* the reader's hindsight is part of the system. People who learn an outcome inflate what they would have predicted and do not notice (Fischhoff, 1975). So the past needs a ledger of what you have been shown, with later facts, corrections and arguments kept apart.

## 2. Concepts

### C1 · The Cut: a moment is a sealed cross-section, not a timestamp
**Interaction (B2–B3).** A door names a question; opening it lands you in a still room of four planes: **On the books** (what was true), **On the desk** (what this seat could know: dated sources, the rulebook in force, the legal action space), **Not yet** (dashed), **Since** (closed; opens only on ask). Laws:
- **Floor, never nearest.** Latest state not after the cut, every component at one instant; an uncertain date counts only once its whole interval precedes the cut.
- **Anachronism guard.** Rules, thresholds and derived counters are versioned by the cut: a 5 Feb 2026 cut never shows the 2026–27 lines.
- **Ask-before-cut.** A sealed slot exists only if a source dated on or before the cut raised the question, or a calendar then scheduled it. Everything else is unlisted, and the horizon says it is not a list.
- **A cut names its knower.** Other seats' desks are drawn, closed.
- **Hindsight is a mark and a ledger.** Sealed by default; a fan may declare "I know how this goes"; the mark rides on every branch cut afterwards, so hindsight and sealed branches never share a comparison.

**Canonical / redraw.** Canonical: the address (system, valid instant, frame, seat), the floor query, the ledger entry. Redraw: every plane.
**Segments.** ARRIVE, ORIENT, KNOWLEDGE + AUTHORITY CHANGE, WHY?, WHAT IF?.
**Scale.** A computed address (log position + frame, folded over a snapshot), never stored; cost follows cuts viewed. The runtime, not a third-party author, enforces the floor. Unsolved: authoring doors and asked-before-cut slots across billions.
**Cross-domain.** Chemistry: at 3 s, concentrations on the books, the sensor's lagged readout on the desk, steady state *withheld* (computable, held back by policy: a different "not yet" than Boston's *unknown*). Supply chain: on-hand vs promised ETAs vs the fab fire (true before knowable).
**Label.** PROPOSED PLATFORM CAPABILITY on a REAL base (dated `asOf` rows, CBA engine, the arena bowl's PLAYED / ESTIMATE / NOT KNOWN nights). AI: NO AI REQUIRED to render; SMALL / CHEAP MODEL drafts door questions; FRONTIER MODEL OCCASIONAL mines asked-before-cut questions (authoring only, human-reviewed; fully automatic is SPECULATIVE FRONTIER).
**Fails if.** Sealing reads as withholding; four planes overload a 10-year-old; the sealed plane is so empty it looks broken; dated sources do not exist.
**Test.** Paper cut of the deadline morning with real dated sources [verify]; six people (two fans, two non-fans, two aged 10–12): "What did Boston know that morning?" "What happens next?" Fails if a non-fan infers an outcome from layout alone, or two of four non-fans cannot separate books from desk in 60 seconds.

### C2 · The Horizon Rail: every system carries a time profile; one rail keeps Reality in view
**Interaction (B0, B1, B7, B9).** A persistent edge, never a page. It shows this system's edge (live tick, calendar, stopped, counter, own clock); how far its record reaches (**recorded through**: NOW is the record's edge with an age, as old as the oldest source the view needs); commitments ahead (a game, the deadline, a vote: outline solid, outcome dashed; a deadline is a *closing edge*: acts shut there); and, when you are elsewhere, **Reality's window, shuttered**: clock, lag and the season's light come through, content does not. Tap to return. **Motion is attributed:** every moving thing carries its clock's ink; a stopped room moves only in the window.

Profiles (edge · rate · ahead · sealed; the fifth field is how far the record reaches):
- Boston Reality: live · wall clock · games, deadline, vote · outcomes, the unasked.
- A cut: stopped · none · what the seat knew was scheduled · everything after, by rule.
- Year Two World: calendar · own, runs while away · open acts · its future.
- Your branch: own clock · paced, pinned or free · its scheduled items · its future.
- 1985–86: none · none · none · nothing, for observers.
- Chemical equilibrium: model seconds, settles · model rate · none · steady state, by policy.
- Supply chain: order time · days · commitments maturing over 8 weeks · shocks.

**Canonical / redraw.** Canonical: each system's declared profile, subscriptions (Following). Redraw: the rail.
**Segments.** ORIENT, FOLLOW, RETURN TO CANONICAL.
**Scale.** Five fields per system. There is no global clock, only couplings between clocks; NOW is one head subscription per open system.
**Cross-domain.** Chemistry: the edge settles ("steady since 9 s: more time changes nothing"). Supply chain: "ahead" is a commitment ladder with consequence latency ("a change today shows in week 8").
**Label.** PROPOSED PLATFORM CAPABILITY (a live Reality feed does not exist; fixtures with an age do). AI: NO AI REQUIRED.
**Fails if.** Banner blindness; the shutter frustrates ("just show me"); third parties misdeclare profiles.
**Test.** After NOW → cut → branch, ask eight people "Where is Reality, and how do you get back?" Fails if three or more cannot answer unaided, or press Back expecting Reality.

### C3 · The Three Backs: Trail, Record, Acts
**Interaction (B8).** Three histories, three laws. **Trail** (pencil): mine, private, discarded freely; Back / Forward. **Record** (print): the system's, public, never changed; Earlier / Later, and Later stops at the horizon and is ledgered. **Acts** (signature): mine, attributable, append-only; no Back, only acting.

**Direct answer on Back/Forward: no, not as one pair.** They keep one meaning: the Trail. Session history is a linear list that prunes forward entries; here it is a tree, drawn as a folded strip, not a node-link graph. **Back names its destination and never crosses a signature.** The system's past gets Earlier / Later, by change rather than clock. Acts get **Re-take** (fork from before the act; the old branch is retained and retired, never deleted) and **Amend** (a new compensating act). Reality has no Undo.
**Canonical / redraw.** Canonical: Trail (local only), Record (system's log), Acts (branch log, signed). Redraw: the sheet.
**Segments.** ACT, FORK, CONTINUE ALTERNATE HISTORY, RETURN.
**Scale.** The Trail is local, O(person); Record and Acts are logs each system already has.
**Cross-domain.** Chemistry: Earlier / Later in relaxation times; Re-take = fork before the reagent went in. Supply chain: Amend = cancel the order (costed); Re-take = a world where you never placed it.
**Label.** PROPOSED PLATFORM CAPABILITY (act-log fold is REAL in the Live World page). AI: NO AI REQUIRED.
**Fails if.** Three verbs cause mode confusion; Re-take litters the wall; Later's ledger feels punitive.
**Test.** Eight people, five tasks including "undo your trade" and "go back to where you were". Two arms of four: this sheet, or one Back with better labels. Fails if the plain arm makes no more wrong-Back presses.

### C4 · The Seam: a branch runs beside Reality; Reality arrives one way
**Interaction (B4–B6).** Coupling is the missing choice. **Pinned:** branch dates are Reality's dates; Reality's recorded events arrive as weather while acts stay yours, and arrival grades your declared assumptions: **stitched** (held), **pulled** (diverged), **torn** (impossible), **open** (re-declare). **Paced:** advances when you act (a run counter). **Free:** its own calendar, decoupled at divergence (Year Two): no seam, only "since you left". A branch cut in the past releases Reality's already-recorded record at the branch clock's pace (a replay, labelled as one); a branch cut at NOW can run ahead of Reality, and the rail states the lead. A public fork gets the same seam in its author's ink, verdicts computed identically, no popularity number. A branch is not a forecast; a mark is not a score.
**Canonical / redraw.** Canonical: branch clock, coupling, assumptions, verdict events (declared vs recorded), never written to Reality. Redraw: seam marks.
**Segments.** FORK, CONTINUE ALTERNATE HISTORY, COMPARE, RETURN TO RECORDED, FOLLOW.
**Scale.** Pending declarations indexed by date; an arriving fact wakes only forks with one due, so cost follows due declarations, not forks.
**Cross-domain.** Chemistry: "Reality" is a lab reading, clocks mostly free, seam trivial. Supply chain: the forecast (branch at week 12) meets the actual delivery (Reality at week 8); the lead is the point.
**Label.** PROPOSED PLATFORM CAPABILITY (catch-up is buildable from dated fixtures; live arrival needs a Reality feed). AI: NO AI REQUIRED to grade; FRONTIER MODEL OCCASIONAL for Council "Model" actors (Wave 2 design).
**Fails if.** A torn seam reads as personal failure; two clocks overload; pinned vs free stays unclear; a branch ahead of Reality is read as prediction.
**Test.** Catch-up branch, six people, unlabelled screenshot at the arrival: "Which lane is Reality?" "Why did the seam tear?" Fails if two cannot tell the lanes in 60 seconds, or blame their own act for an event they did not cause.

### C5 · The Reel: replay that stops at decisions; the scrubber demoted
**Interaction.** Inside a cut or a played segment, notches sit on a *ruler of gaps* (proportion, not a drag handle). The Reel advances by events and **halts at each open decision**: commit a guess or an act, and the next notch unseals. Observers ask to unseal (ledger). Boston: "Replay deadline week" stops wherever a seat could act [verify]; at the end the class's commits sit beside Reality's record, the classroom loop's "class evidence" step made navigable.
**Canonical / redraw.** Canonical: commits, ledger entries. Redraw: playhead.
**Segments.** ACT, WHY?, COMPARE.
**Scale.** Derived from a system's own log; notch significance authored, or drafted by a small model and reviewed.
**Cross-domain.** Chemistry: notches at 1, 2, 3 time constants, "rise or fall?". Supply chain: notches at maturity dates; empty weeks skipped.
**Label.** PROPOSED PLATFORM CAPABILITY. AI: NO AI REQUIRED; SMALL / CHEAP MODEL may draft notch significance.
**Fails if.** Forced stops annoy fans; commits read as a quiz.
**Test.** Same segment, scrubber vs Reel, ten people (5/5): "What did Boston know before the move?" "Why?" Fails if the scrubber arm cites what was known as often, and prefers it.

### C6 · The Why-Walk: navigate time by cause
**Interaction.** At the cut, tap the projected tax (≈$39.5M [verify]). Its history opens as *changes with causes*, each a door into that instant: from the tax figure to the payroll lines behind it, to the late-June-2025 "apron summer" moves that produced them [verify]. Forward, "What did this touch?", stops at the horizon in a dashed link. The jump length is the lesson.
**Canonical / redraw.** Canonical: derivation links (each computed number knows its cause). Redraw: the walk.
**Segments.** WHY?, ORIENT, COMPARE.
**Scale.** Cause metadata stays local to each system; cross-system chains need composition (SPECULATIVE FRONTIER).
**Cross-domain.** Chemistry: "why is [C] falling?" leads to the rate term. Supply chain: "why the stock-out in week 9?" leads to the week-1 order, eight weeks back in one tap.
**Label.** PROPOSED PLATFORM CAPABILITY (a causal engine exists only as a design). AI: NO AI REQUIRED for computed chains.
**Fails if.** Reality's causes are reported, not modeled, so narrative passes as cause ("resulting").
**Test.** "Why is the tax ≈$39.5M?" with and without the walk, six people. Fails if they cannot reach the payroll lines in three taps.

### 2.7 The Boston flow, state by state
Real Boston facts are from §4 of the shared brief and carry [verify]; search checks are in the ledger. **Four people, four defaults.** *Fan:* may declare "I know how this goes" (a mark, no unsealing) and add dated sources to the desk (memory is not a source). *Student who does not know basketball:* sealed; the desk is a few dated sources in plain words; the teacher holds the class's unseal key; two buttons, "Where I was" (Trail) and "Try it another way" (Re-take). *Operator of Year Two:* return is catch-up, not resume: "Week 9 → Week 12; two open acts lapsed, recorded as no decision." *Historian of 1985–86:* no tick; sources carry two dates (written on, about when); later accounts fold under the cut.

**B0 · NOW (live).** Rail: "Boston Celtics · Reality". A ticking clock in Reality's ink, the only moving thing, beside "recorded through [verify: 29 Sep 2026, time]"; the gap is drawn. Ahead of the edge, dated doors: next game, the 2026–27 deadline, a vote [verify dates]. You observe; you cannot act on the real team. *Canonical:* nothing. *Redraw:* tick, age.

**B1 · A scheduled door.** Tap "The trade deadline · [verify date]". You cannot enter. It shows what it commits (acts close here, closing hour [verify]), a countdown, an empty outcome, never hatched (no model ran). The same institution stands behind you as last year's door. Follow the arrival, or go back a year. *Canonical:* a subscription. *Redraw:* countdown.

**B2 · The cut.** Last year's door, named by its question: "5 Feb 2026 · What does Boston do about a ≈$39.5M tax bill?" Its interior is ordered by when things became knowable; enter "before anything was reported" [verify: first report ≈3 Feb]. A still room; only the window moves. **On the books:** roster; payroll against the *2025–26* aprons [verify lines]; projected tax ≈$39.5M, COMPUTED under the rulebook then; Tatum out since 12 May 2025, RECORDED. **On the desk:** dated sources on or before the cut (rumor slots [verify]); the legal action space from the rules engine; the rulebook in force, the 2026–27 lines absent and said to be. **Not yet:** the deadline's closing hour; games left [verify]; the postseason as scheduled, its result sealed; questions raised by pre-cut sources, e.g. when Tatum returns [verify source]; "This is not a list of what follows." Deviation from the brief, on purpose: Jaylen Brown's later trade is *not* listed unless a source dated on or before the cut asked about it; listing it would spoil that something happens [verify]. Address: `Boston Celtics · 2026 deadline, before first report · public record then · no branch · observer · cut`. *Canonical:* address and floor query. *Redraw:* all of it.

**B3 · The seal test.** Press Later, or drag the dashed edge. The refusal names its rule: "Nobody at this desk could know what comes next." **Ask as observer:** one way, written to *your* ledger, not the system's. **Since** opens: later facts, later corrections, later arguments, each dated, ruled in a different hand. *Canonical:* ledger entry "seen through <date>". *Redraw:* Since opens.

**B4 · WHAT IF?: the branch is born.** Enter the seat (Boston decision-maker). Choose an act from the legal action space, never from a list of what happened. The Council convenes only the actors that act touches (so the guest list cannot hint at the outcome), each Recorded / Declare / Model / Unknown; Keep is blocked while a needed seat is unset. On Keep the cut becomes the left frame in record ink; a new frame opens in its own ink: "Your branch · diverged 5 Feb 2026, before first report · by you · seat Boston · hindsight: none | self-declared | through <date>". Coupling chip: PINNED / PACED / FREE. *Canonical:* branch created (base = cut address, first act signed, assumptions, coupling). *Redraw:* frames.

**B5 · Two clocks, three anchors.** Left: Reality's record at the branch's date, shuttered beyond it; the divergence stays marked. Right: the branch. Edge: Reality NOW, shuttered, "about 8 months behind Reality". Two ticks move, each in its own ink. Advance the branch a week (PACED): its numbers recompute in branch ink; the left frame moves only its date. At no state after B2 is Reality's clock or the recorded past off screen. *Canonical:* branch reduce. *Redraw:* branch lane.

**B6 · Reality arrives.** The branch date crosses a date Reality's record speaks to (a game; Tatum's return [verify: 6 Mar 2026]). A seam mark appears: stitched, pulled, torn or open, both sources side by side: "Reality did X. Your branch assumed Y." A branch cut at NOW instead: the rail says "Reality reaches your first checkpoint in N days", and Following delivers the verdict on arrival. *Canonical:* verdict event, derived. *Redraw:* mark.

**B7 · Return to NOW.** Tap the shuttered window. The address rewrites to Reality · NOW · observer. Nothing is lost: the branch stays on the wall (PACED: paused; PINNED: still moving); "since you left" lists what Reality did; the ledger is unchanged. *Canonical:* a Trail entry. *Redraw:* everything.

**B8 · The three backs.** Open Backs: TRAIL (folded strip: NOW → door → cut → seal test → branch → NOW), RECORD (Earlier / Later at the horizon), ACTS (signed: "Kept: your branch"). Back goes to the previous address, named on the button. Re-take on the act forks from before it; the old branch is retained. *Canonical:* Re-take = a new branch. *Redraw:* the Trail.

**B9 · A system with no NOW.** Open "1985–86 Celtics". Rail: "No now. Closed [verify date]." Nothing ticks but the shuttered Reality window ("Reality, elsewhere"). The record is open to observers; a cut still seals the seat. *Canonical:* none. *Redraw:* rail.

## 3. Your two to prototype

### P1 · The Deadline Cut (C1 + C2; B0–B4, B7)
Mandatory states:
1. **NOW + Rail:** tick, recorded-through, dated doors ahead; one scheduled door opened (closing edge, empty outcome).
2. **Arrive:** last year's door named by its question; institution ladder (ahead / behind); interior cuts named by what was still open.
3. **The cut:** four planes; only the window moves; address line; the 2026–27 lines absent and said to be.
4. **The seal test:** refusal names the rule; observer-ask; Since opens; ledger mark appears.
5. **Leak audit (dev overlay), eight channels pass/fail:** rows recorded after the cut; later-year rules; derived numbers from today's model; door and address text; layout slots only a later arrival fills; source links dated after; previews and autocomplete; cross-system links and the Rail.
6. **WHAT IF?:** Council, Keep blocked, branch frame born with stamp and coupling chip; the cut stays left.
7. **Return:** tap the shuttered window; branch kept on the wall.

*Impossible moment:* pressing Later and being refused by the record's own rule, overruled only by writing to your own ledger, permanently, with a mark on everything you fork next. *Anti-pattern:* a horizontal timeline with a lock icon; three tabs so books, desk and not-yet are never seen together; a sepia "past" filter or rewind whoosh (the past is the same institution on another morning: lights on, clocks stopped); "what happened next" in a tooltip. AI: NO AI REQUIRED (doors and slots hand-authored).

### P2 · The Seam (C4 + C3; B4–B6, B8, B9)
1. **Branch birth:** stamp, coupling chip, assumptions from the Council.
2. **Two clocks:** branch beside Reality-at-the-branch-date; Reality NOW shuttered at the edge with lag; ticks in their own inks.
3. **Advance:** one paced week; branch numbers recompute in branch ink.
4. **Reality arrives:** stitched / pulled / torn / open, both sources side by side, no total.
5. **Backs sheet:** Trail, Record, Acts in pencil / print / signature; Back names its destination; Re-take makes a sibling and retires the old.
6. **Free clock:** Year Two · Week 9: "advances Monday regardless", since-you-left, "decoupled from Reality since Year 0", no seam.
7. **No clock:** 1985–86, rail closed, source dating, later accounts folded.

*Impossible moment:* the seam tearing by itself: you did nothing; your branch's clock crossed a date Reality had already recorded, and two histories were laid edge to edge and compared. *Anti-pattern:* a git-graph of nodes and edges (banned node-link), a split-screen KPI diff, a win / lose tally, a "prediction accuracy" badge. AI: NO AI REQUIRED; Council "Model" actors optional (FRONTIER MODEL OCCASIONAL).

## 4. What real runtime would have to exist
1. **A bitemporal, per-audience fact store:** valid interval, recorded-at (today's `asOf`), available-to-whom-since, source with its own date, kind (fact / correction / argument). The runtime, not a system's author, enforces the floor, so third-party systems cannot spoil or misdate.
2. **Effective-dated rulebooks:** the CBA engine takes (rule version, cut); derived numbers recompute per cut.
3. **Cut, fork and clock semantics as platform verbs:** floor queries, coherent components, branch coupling, a pending-declaration index, verdict events; pure-fold act logs, snapshots, content addressing (REAL in the prototype).
4. **A Reality head with freshness:** time-of-report per item, recorded-through per source stream. Today only dated fixtures exist.
5. **The person's ledger:** what BOW showed you, private; teachers see class-level "sealed through" only.
6. **Addresses that pin the record:** system · moment · frame · branch · seat · view · record-as-of, so a shared cut never silently changes.
7. **A five-field time-profile standard** with runtime checks for third-party systems.
8. **AI actors:** the same floor stops look-ahead leakage when an AI sits in a seat.
9. **The leak audit as a build gate.**

## 5. What would falsify this area's thesis
- **The split is too fine.** If half of non-fans cannot separate books from desk after 60 seconds *with* labels, collapse to two planes.
- **The seal is decoration.** Twelve people, sealed vs open cuts: if what they cite (what was known vs how it turned out) does not differ, keep the mark, drop the seal.
- **The scrubber wins.** If a plain scrubber matches the cut on comprehension and speed, "stand, don't travel" fails at the instrument.
- **Three backs are no better than one:** the wrong-Back rate does not fall.
- **The rail is noise,** or people never lose their place without it.
- **Pinned vs free** is not understood after one explanation.
- **Curation cost.** If a door takes an author over a day, or pre-cut sources do not exist for most moments, time-native is a feature of a few showpieces, not a medium.

### Verification ledger (web search, 29 Sep 2026; only Boston.com was fetched, the rest are search snippets)
- Simons to Chicago for Vučević: reported 3 Feb 2026 via Charania; tax ≈$39.5M to ≈$17.7M per Yossi Gozlan (Boston.com, 3 Feb 2026); matches §4. A 5 Feb piece (98.5 The Sports Hub) says further dumps left Boston about $0.84M under the tax line, so ≈$17M may be an intermediate state [verify].
- Tatum returned 6 Mar 2026 vs Dallas, W 120–100, 298 days after the injury (NBC, CBS); matches §4.
- 2025–26: 56–26, second in the East; lost round one 3–4 to Philadelphia after leading 3–1 (Wikipedia, Basketball-Reference) [verify].
- Brown to Philadelphia for Paul George and picks: reported 1 Jul 2026 (ESPN, Boston Globe), official 6 Jul per one snippet [verify]; another agreed-vs-official gap.
- Candidate *later argument* for Since: Forbes, 5 May 2026, "The Celtics' Luxury-Tax Dumps Came Back To Haunt Them Against The Sixers" (title only).
- Not checked: 2025–26 tax and apron lines; first-report time; pre-cut sources on Tatum's return; whether Brown's future was being asked before the cut.

Sources: dl.acm.org/doi/10.1145/318898.318921 (Snodgrass and Ahn) · dl.acm.org/doi/10.1145/2380776.2380786 (SQL:2011) · martinfowler.com/articles/bitemporal-history.html · rfc-editor.org/rfc/rfc7089.html · arxiv.org/abs/1506.06279 · dl.acm.org/doi/10.1145/2700171.2791044 · dl.acm.org/doi/10.1145/381854.381893 (Lifestreams).
