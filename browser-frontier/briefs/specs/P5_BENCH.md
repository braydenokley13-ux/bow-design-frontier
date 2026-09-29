# P5 · THE BENCH — discovery / Atlas-first Browser (find the system behind the question)

File: `prototypes/Bench.html` (+ `.steps.json`). Read first: `briefs/00_PRIOR_ART.md`,
`briefs/PROTOTYPE_CONTRACT.md`, `prototypes/_shared/boston-fixture.js` (`domains.air`), and research
`research/E_ATLAS_SCALE.md` §E1 Bench, §E2 Loom, §E3 Plate, §E6 Unfixed Print, and §3 P1 (your main
source); A §G "The Want"; F's AI cost map rows for open-world compile.

## Exact design problem
A person asks a question BOW has no page for. Browser finds the SYSTEM behind it — shows what the
mechanism is made of, which parts are reviewed / generated / assumed / missing, where it connects to
larger systems — and lets the person find its edge by pushing, without a node graph or a chat
answer. Then the harder case: an open-world question with no reviewed system (SPECULATIVE FRONTIER):
a temporary compiled model whose temporariness and generated-ness are perceptible, whose only
what-if levers are its own admitted assumptions, and which can be promoted through review or
discarded. And the honest failure: a question BOW cannot answer becomes a Want, not a paragraph.

## User
A traveler whose flight is late; an analyst deciding whether to trust a compiled model; a
10–12-year-old.

## System
(1) A regional airline rotation BOS→PHL→ORD→PHL→BOS with a 40-minute ORD weather hold (fixture
`domains.air`, illustrative), crew duty limits, passenger connections at PHL. (2) "Why are
semiconductor shortages happening?" (open world). (3) An unanswerable question ("Will the Green Line
run after the game?"). Use E's sourced facts only with their "verify" marks (14 CFR 117.19 allows an
extension of a duty period up to 2 h for unforeseen circumstances; crew report time not public;
BTS lists late-arriving aircraft as a standard delay cause; the Jan 2022 US Commerce RFI reported
buyers' median chip inventory falling from about 40 days in 2019 to under 5 in 2021). Everything
else about the airline day is AUTHORED ("a typical day, illustrative").

## Mandatory states
1. **Ask.** A question line (typed or one of three example questions). BOW restates it as a claim to
   test ("delay at one airport shows up later, elsewhere"), names the dynamic PROPAGATION THROUGH
   SHARED RESOURCES, and keeps two rejected neighbours as tabs (AIR-TRAFFIC PROGRAMS, AIRLINE-WIDE
   OUTAGE).
2. **The bench (progress is provenance).** An empty time × airport frame fills as parts arrive with
   their origin printed on them: REVIEWED parts solid with reviewer + version (rotation, turn
   buffers, duty clock, connection bank — reviewer names `[reviewer]`); tonight's ORD hold as a thin
   slip (AUTHORED "typical day" — no live feed exists); couplings stippled GENERATED until reviewed;
   a missing input as a dashed socket ("crew report time: no public source"). A count line: "4
   reviewed · 3 generated couplings · 2 assumed · 1 gap". "Run what you have" works from the first
   second. No progress bar.
3. **The Loom.** The frame becomes a Marey/Ibry time–space chart: rows BOS, PHL, ORD; the aircraft's
   day is one zig-zag thread; turns are flat runs (dark = minimum, light = slack); the crew is a bar
   ending at a limit tick; the PHL bank a vertical band that passenger threads join and leave; the
   ORD hold a closed band; the schedule a ghost thread. A caption computed from the run.
4. **Push to the edge.** Drag the hold longer: the thread shears right, slack absorbs, and at the
   edge the crew bar meets its tick and leg 4 is cut ("At N min leg 4 is cut; at N−1 it still
   runs" — computed). The edge wears a hand: "A person can extend this, up to 2 h (14 CFR 117.19,
   verify)" — "Who holds it?"
5. **Enter at the edge.** "Who holds it?" opens the crew-scheduling desk as a PRACTICE SEAT (an
   authored day; nobody acts on a real airline): the ground changes, the standing line says what
   this seat can and cannot do. ACT: extend the duty period 30 minutes (within the rule): leg 4 runs;
   the crew's next-day rest shrinks (state changes in two places); the record logs the act in your
   ink.
6. **Unbolt (WHY by removal) and WHAT IF.** Press-and-hold a part to run the day without it inside a
   pencil frame ("part removed — not how the network is"): lift the aircraft rotation (a fresh
   aircraft each leg) and the spread stops. Roles compute as labels: SPREADS (aircraft), ABSORBS
   (turn slack), CUTS (crew clock), CONVERTS minutes into missed connections (bank). Put it back.
   "Keep as a branch" turns a push/unbolt into a stamped fork; COMPARE shows the two threads.
7. **The plate (turn it over).** The back of the mechanism: parts with truth signatures and
   versions; couplings SOURCED or ASSERTED; PORTS on the perimeter as tabs, not lines (WEATHER ·
   SLOTS · RULE: FAA duty limits · REBOOKING), each LIVE / FIXTURE / ASSUMED / EMPTY. "Where would I
   distrust this?" marks the knot with most assumptions (computed). One tab steps out to a stub
   "FAA duty limits" sheet carrying the pin (the minutes), and back with a revision cloud.
8. **The plural question (SPECULATIVE FRONTIER).** "Why are semiconductor shortages happening?" →
   "This is several questions" (AI-driven memory demand; automotive parts after the Nexperia
   dispute; the 2021 shortage — trade press, verify). Pick the 2021 one. An open bench: source slips
   clipped to an observed ground, each stamped PRIMARY DATA / OFFICIAL STATEMENT / REPORTING /
   ANALYST ESTIMATE with date and the claim it supports; one slip unread (blank, never paraphrased).
   Every slip is an AUTHORED stand-in for a compile — the chrome says so.
9. **The working model on tracing paper.** Graphite model lines over the observed ground; a TITLE
   BLOCK inside the border that survives a screenshot: "WORKING MODEL · NOT REVIEWED · compiled 29
   Sep 2026 · 11 sources (9 read) · 4 reviewed parts · 3 generated couplings · 7 assumed · 4 unknown ·
   hindcast: none · CHECKED: — · APPROVED: —"; a 72-hour life ticking at the edge. The WHAT IF is the
   assumptions ledger: sockets along the bottom, each an assumption with a range; drag one and the
   answer moves as a band stamped "scenario on a working model, not a forecast"; past the evidence
   range: OUTSIDE EVIDENCE. A lever with no part behind it is refused, naming the missing part. It
   cannot be followed, embedded, or used as a seat's ledger (refusals name that rule).
10. **Promote or discard.** Status ladder SKETCH → ISSUED FOR REVIEW → REVIEWED v1 → SUPERSEDED.
    Issue for review: named reviewers sign per knot (SOURCED / AUTHORED by reviewer / STRUCK); the
    ledger shrinks ("7 assumed → 2 assumed · 3 reviewer-authored · 2 sourced"); dissent stays on its
    knot. Discard leaves a tombstone; a shared link resolves to the frozen sketch "DISCARDED BY ITS
    AUTHOR".
11. **The Want.** "Will the Green Line run after the game?": no generated answer. The nearest true
    anchor, "no system for this", the SHAPE of the missing thing ("needs: line status, post-game
    timetable, who can hold a train"), and "Leave a want" filed under the place.

## Art direction — "Drafting table"
Warm white paper, graphite, a vermilion reviewer's pencil, tracing-paper overlays that really look
translucent (layered, not blurred), a title block like an engineering drawing. Not a blueprint blue.
Fonts: e.g. "Chivo Mono" + "Newsreader".

## Capability labels
REAL CURRENT: none of the airline or semiconductor machinery exists; the nearest real thing is BOW
Economics Live's sourced fact store and CBA engine (a narrow, hand-verified domain) — say so.
PROPOSED: bench, loom, push, unbolt, plate, ports, practice seat at the edge, the Want. SPECULATIVE
FRONTIER: open-world compile, working models, per-knot review at scale. AI: assembly from typed
ports NO AI REQUIRED; question → dynamic SMALL / CHEAP MODEL; a coupling without a declared port
FRONTIER MODEL OCCASIONAL; the open-world compile FRONTIER MODEL CONTINUOUS during the compile (minutes)
then NO AI; Want dedupe SMALL.

## Prohibited
A chat pane with citations; a progress bar for the bench; a node graph of parts; a faked live feed;
a polished dashboard for the working model; generated prose explaining "why".

## Acceptance criteria
All 11 states in the steps file; provenance visible part by part; the edge found by pushing, with a
computed threshold; the working model's temporariness perceptible in a screenshot; harness clean at
both viewports.
