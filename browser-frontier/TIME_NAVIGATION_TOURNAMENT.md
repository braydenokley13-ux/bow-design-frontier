# Time navigation tournament

BOW Browser Founding Frontier · Wave 1 · 29 Sep 2026 · design reading of rendered prototypes judged
by independent critics; no person has used any of this. Sources: research D (Time-native), C §2.3–2.4
(doors and plates), A §C (Meanwhile), B §2.0 (snapshot / follow), H §H1 (Take It Out); prototypes
P2 `Cut.html` (the founder's scenario), P1 `Institution.html` (time in place), P6 `TakeItOut.html`
(time by causes), P7 `Parting.html` (seams on a lineage), P4 `Guest.html` (the Round).

## 1. The question
Make TIME as fundamental as location: historical state, now, the scheduled future, a forked future,
what was knowable then, replay. Does Back/Forward still make sense? Is this different from version
history? The founder's test: OPEN BOSTON · NOW → MOVE TO the trade deadline last year → show what
state existed, what was known, what had not happened → WHAT IF? from that cut → Reality stays
perceptually anchored.

## 2. The answer this wave converged on
**You do not travel through time; you stand at a cut.** A cut is not a timestamp. It is a sealed
cross-section of a system as one knower could have known it: what was on the books, what was on the
desk, and — drawn as part of the room — what was not yet. It needs three coordinates, not one: when
it was TRUE (valid time), what could be KNOWN then and by whom (knowledge time, per seat), and what
we have LEARNED since (hindsight, kept in the person's own ledger). (Research D; independently B's
"record edition" and F's two clocks.)

### Is it different from version history? Yes in four places, no in the plumbing (research D §1.3)
Same plumbing: append-only log, content-addressed states, cheap fork pointers, deterministic replay
(event sourcing, Git; the Live World page's SHA-256 fold is the same idea). Different:
1. **A knower.** Version history has one time: when someone saved. Bitemporal data adds when a fact
   was true (Snodgrass and Ahn 1985; SQL:2011). BOW needs a third coordinate: *whose* knowledge.
   At the 2026 deadline the Simons trade was reported on 3 Feb (Boston.com citing Charania, verify),
   two days before the deadline — a cut "on 5 Feb" already knows it. So the door offers "2 Feb,
   before the first report".
2. **A seal.** Git, document history and Time Machine leave every later version one click away; none
   can hide a past's own future. Memento-style "nearest in time" leaks spoilers (Jones and Nelson,
   2018). BOW's law: *floor, never nearest* — the latest state not after the cut, every component at
   one instant; rules versioned by the cut (a 2026 cut never shows 2026–27 lines).
3. **A Reality that never merges.** Version history exists to restore and merge; a BOW branch's
   destiny is not main. Reality accepts nothing; it arrives, and grades.
4. **Consequences, not edits.** A Git branch is an edited copy. A BOW branch is a changed act re-run
   through the rules, with other actors' declared responses, on its own clock.
And for humans: the reader's hindsight is part of the system (people who learn an outcome inflate what
they would have predicted — Fischhoff 1975), so the past needs a ledger of what you have been shown.

### Back and Forward: not as one pair (research D C3)
Three histories, three laws: **Trail** (your path — pencil, private; Back names its destination and
never crosses a signature) · **Record** (the system's — print; Earlier / Later, and Later stops at the
horizon) · **Acts** (yours — signature; no Back, only Re-take (a sibling fork; the old one retired,
never deleted) or Amend (a compensating act)). Reality has no Undo.

## 3. Contestants
| # | Instrument | Source | Where it runs | What it is |
|---|---|---|---|---|
| T0 | Scrubber (baseline) | — | P2 toggle | one cursor on one axis; no knower, no seal; the P2 toggle counts leaks |
| T1 | **The Cut** (four planes: books · desk · not yet · since) | D C1 | P2 | stand at a sealed cross-section; Later refused by the record's own rule |
| T2 | **Horizon Rail** | D C2 | P2 | each system's time profile; Reality's window shuttered but always in view |
| T3 | **Three Backs** | D C3 | P2 | trail / record / acts |
| T4 | **The Seam** (pinned · paced · free) | D C4, A §F Fracture | P2, P7 | a branch beside Reality; Reality arrives one way: stitched / pulled / torn / open |
| T5 | **The Reel** | D C5 | (paper) | replay that halts at every open decision |
| T6 | **Why-Walk** | D C6 | P1, P2 (WHY) | navigate time by cause |
| T7 | **Plates** (rephotography) | C 2.4 | P1 | the same camera across years; residue (wear, mend, scar, vacancy); the unmodeled future is a blank plate |
| T8 | **Doors in the wall** (open · bricked · cracked · scaffolded · shutter) | C 2.3 | P1 | choice vs shock as architecture; a fork takes out one brick |
| T9 | **Meanwhile** | A §C | (P4 marks) | time as the join key: what else is on the same clock |
| T10 | **Take It Out** | H1 | P6 | move through causes, not clock; luck held fixed |
| T11 | **Snapshot vs Follow + drift** | B §2.0 | P4 | an address to "now" read later shows what moved since the sender looked |
| T12 | **The Round** | A §H | P4 | return after absence as a finite walk that ends "level with the record" |
| inc. | Clock Hall kinds of time; River of doors; sealed hindsight | Waves 1–2 | — | carried as the time-stamp on every line and as doors named by their question |


## 4. What the critics found

- **Critic 1 (medium):** "The Cut with four planes wins for standing at a moment, and the Seam wins for
  time after divergence. Treat them as one instrument. The scrubber baseline is the control that proves
  the cut ('LEAK COUNTER 4' against 0) — keep it as a test, not as UI. Plates-in-place (bricked arches)
  is decoration. Lifting acts is a causal operator, not time navigation. Missing from the list and
  necessary: Guest's Round — how time you did not spend reaches you." The Cut had the widest
  core-sequence coverage in the set (about 14 of 16). Its moments: "Later ▸ → Nobody at this desk could
  know what comes next"; the shuttered Reality window "about 8 months ahead of this cut"; the three
  Backs ("Trail · pencil — Mine. Private. Discarded freely / Record · print — Never changed / Acts ·
  signature — Append-only. No Back, only acting"). Its weakness: the act at the cut is a three-item
  menu, and four of the five doors behind you are refused.
- The single interaction Critic 1 judged **impossible to explain as a website or a game**: **the Seam** —
  a fork of recorded history graded by real history arriving on its own dates ("TORN — Reality did
  something your branch has no room for. You did not cause it."). "A game cannot do this, because its
  world does not continue without it. A website cannot, because nothing it shows is yours." It is also
  the interaction most dependent on a live Reality feed that does not exist.
- **Critic 2 (platform):** "the latest state not after 2 Feb" is a real bitemporal query; "what the desk
  could know" is not — it is curated by hand, per moment, and question mining is frontier-model work
  plus human review for every moment of every system: "the biggest hidden cost, and it is human
  labour." The tax at the cut was back-solved from a reported figure through an authored rate table yet
  wore the computed tone (repair: show deadline payroll as UNKNOWN; kind propagation). A ticking
  "14:03:05" implied liveness that only the footer denied. The Cut's address grammar was the best in the
  set but was not in the URL.

## 5. Verdict

| # | Instrument | Verdict |
|---|---|---|
| T1 + T4 | **The Cut and the Seam, as one instrument** | **CANON (time grammar)** — stand at a cut (books · desk · not yet · since; floor, never nearest; the seal and the hindsight ledger); a branch born there runs beside Reality (pinned · paced · free) and Reality grades it with exactly **HELD · DIVERGED · IMPOSSIBLE · RE-DECLARE** |
| T2 | Horizon Rail | **KEEP** — Reality's window always in view, shuttered at a cut; must never tick from the device clock while claiming "live" |
| T3 | Three Backs (trail · record · acts) | **CANON** — and it becomes a platform law: two logs, only the record is hashed |
| T12 | The Round | **CANON (the return path)** — how time you did not spend reaches you; the seam should reach the person on return ("a branch you kept has broken · one cause, three doors") rather than wait to be visited |
| T11 | Snapshot vs Follow + drift | **KEEP** (address semantics) |
| T0 | Scrubber | **KEEP AS A TEST ONLY** — the leak counter proves the seal; never the navigation |
| T6 | Why-Walk | **FOLD** into WHY (marks → Because) |
| T10 | Take It Out | **RECLASSIFY** — a causal operator (WHY by experiment), not time navigation |
| T7, T8 | Plates, doors in the wall | **PARK** — atmosphere inside the Room view, not a time instrument |
| T5, T9 | Reel, Meanwhile | **UNTESTED** — Reel for classrooms (replay that halts at decisions); Meanwhile as a discovery door |

**Back/Forward:** retired as a pair. Back belongs to the trail (it names its destination and never
crosses a signature); the record has Earlier / Later that stop at the horizon; acts have Re-take and
Amend, never Undo; Reality has no Undo.

**Different from version history?** Yes — a knower, a seal, a Reality that never merges, consequences
instead of edits. The plumbing (append-only log, content addressing, cheap forks, replay) is the same,
and that is good news: it is buildable.

**The honest cost:** the bitemporal *record* is cheap; the *knowledge frame* ("what could the desk
know then") is curated per moment. BOW should build cuts where they earn it (the flagship moments, the
classroom moments) and let every other moment degrade to "the record then, without a desk" — labelled.

**Next evidence:** the cross-domain test (`CrossCut.html`) runs the same grammar in chemistry, a supply
chain and an ecology with no control group — see `BROWSER_CROSS_DOMAIN_ATTACK.md`.
