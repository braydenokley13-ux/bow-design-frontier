# P1 · THE INSTITUTION — place-first Browser (3D, Boston deep)

File: `prototypes/Institution.html` (+ `Institution.steps.json`). Read first: `briefs/00_PRIOR_ART.md`,
`briefs/PROTOTYPE_CONTRACT.md`, `prototypes/_shared/boston-fixture.js`, and research
`research/C_SPATIAL_BROWSER.md` §2.0–2.5 and §3 (your main source), plus F §2.1 "The Touch" and §2.3
"The Glass". Look at the real Boston spatial screenshots in `evidence/boston-spatial/` (what exists
today — beat it; do not copy its HUD corners or bottom station bar).

## Exact design problem
The Browser as an institution you are allowed into. Show that PLACE can carry what no list can:
sightline as information boundary, absence as an object, four kinds of not knowing, choice vs shock,
residue as memory, the ritual weight of taking a seat. One person must feel "I am no longer reading
about Boston. I have entered the Boston system." It must also show that the same building is ONE
canonical state: a plain-text twin (the Schedule) carries every fixture and every act, and acting
in either changes both.

## User
A newcomer who has never seen Boston's books, and the World's operator (GM seat) returning on
Week 9. Both use keyboard or mouse on a laptop; a blind user uses the Schedule.

## System
The BOW World "Boston · Year Two · Week 9" (fixture `world`). An authored building (say so): a
converted harbour warehouse — brick walls, timber columns, oak floor, plaster, brass. Mezzanine
rail with the owner's desk; below, the ops floor with the roster/cap board ("Who we pay" — payroll
$222.8M, $22.8M over the World's $200M line, projected tax $34.2M under the World rule, arrived by
trade: Jimmy Butler); four department rooms behind glass from `world.departments` (Analytics and
Scouting DARK — chairs stacked, a price on the door: "Not funded · $2.0M would open it"; Ticketing
and Partnerships LIT); a film room (last game: lost to Denver 112–115, RECORDED); a window wall onto
water with the arena massing and, across the slip, the League Office as one lit counter window (a
neighbouring system: observed, never actionable here); a brick wall with arches (doors, below); a
history wall. People are NOT drawn (no presence truth).

## Mandatory states (in order; each is a screenshot in your steps file)
1. **Maquette (observing the system as an object).** Cutaway of the whole building on a paper-white
   ground, long lens, every room readable, nothing touchable. Plate: "A BOW World, diverged from
   Reality at Year 0. Authored building; Boston's real offices are not shown." A switch "Show
   Boston · Reality instead": the four department rooms become SHEETED (nobody outside knows their
   funding) — the World knows more than Reality because someone wrote it.
2. **Door (arrive).** Eye height at the entrance. Door plate: "Owed: 3 · Lapsed while you were
   away: 1" (dust on one folder with a hollow "NO ACT" stamp — no banner). Two buttons: "Look
   around" and "Take the seat".
3. **Rail (entered the place, not the role).** Standing eye at the mezzanine rail; the board and
   rooms legible; rail plate "Reading the record. Nothing here is yours."
4. **Desk, unsigned (rehearsal).** Seated eye at the desk; a blotter ledger preview: "You give up:
   the outside view (the maquette), everything after Week 9 (sealed). You get: 3 matters, the pen,
   your clock." The pen. Sitting is free.
5. **Signed (occupy).** One act, five changes on one frame: the maquette inset is sheeted; later
   plates lock; the in-tray fills with three folders named by their QUESTION (from
   `world.openMatters`); glass onto other seats' material shows DOORS with the rule that opens each
   ("Owner's budget folder · opens: never, it is the owner's"; "Scouting board · opens: if Scouting
   is funded"); two clocks: "World · Year Two · Week 9 · Tue 09:13" and "Your clock · started
   09:13". The ledger's "gave up" list must equal what actually got covered/locked (assert it in
   code). Standing up again restores nothing; leaving is an explicit act ("Hand over" or "Vacate").
6. **Act: fund Scouting ($2.0M).** A purchase order slides off the blotter; Scouting swaps to lit,
   chairs out, sign becomes brass "Funded · Week 9 · $2.0M"; the cash plate ticks down; the draft
   board shows a dated tag "First report due Week 11" (pending, not magic); the record gets act 43
   (your ink). The Schedule twin changes in the same frame.
7. **Four ways not to know (from the desk).** WITHHELD: the League counter across the water shows
   sleeved envelopes ("terms between other clubs — not shown"). UNBOUGHT: Analytics dark with its
   price. UNLIVED: the next home night's bowl (through the window or a film-room screen) under pale
   linen with pencil hatch = "Estimate · Ticketing forecast · about 18,454 of 18,624 · ran Week 9 ·
   not a played night" (MODELED — the funded ticketing room is what makes the forecast exist).
   UNTRACED: an empty frame on the history wall, dashed, "No record found." Selecting each brings a
   paper to the camera with one sentence starting with its cause.
8. **WHY (the room answers with the room).** Pick up the trade file on the desk (fixture
   `world.tradeFile`: send White $30.3M, get Butler $56.8M, signed by both owners). The room drops
   to work light; numbered brass tags hang on touched fixtures in causal order: 1 roster board
   (Butler's bar with White's dashed behind), 2 cap wall (payroll $222.8M over the line, a ghost at
   $196.3M just under it — COMPUTED), 3 tax ledger ("22.8 × 1.5 = 34.2 · World rule, authored — the
   NBA's real tax is incremental"), 4 cash plate, 5 film room ("Lost to Denver 112–115. The roster
   that played had Butler. Whether Butler changed the result: not determined" → a shadow-board
   outline: the route ends where causality ends). Page two: "Reached 5 · Not reached: draft picks
   (none in the terms)". Esc returns.
9. **WHAT IF (unbrick).** The brick wall holds arches named by their question: "Year One ·
   Business or Basketball Ops?" (bricked by your act), "Week 6 · Golden State calls about Derrick
   White" (bricked by your act), "Week 9 · Denver asks about a second-round pick" (open), "Week 10"
   (a shutter: opens on its date). Press "What if?" on the Week 6 arch: a brass cover lifts (stamp
   "cut with hindsight" — you know how it went), one brick comes out, scaffold rises. You are in
   "Your branch · Week 6 trade not made · diverged Week 6" in its own ink; fixtures that differ wear
   ink tape (board: White back, payroll $196.3M, under the line; tax $0 under the World rule; the
   trade file a dashed ghost).
10. **Compare and return.** Through the branch's window the record building stands lit across the
    slip (the record is never overwritten). A two-column diff (record | branch) in the Schedule
    twin. "Back to the record" crosses a footbridge; the branch stays as a scaffolded neighbour with
    a paper plaque.
11. **The Schedule twin** (a mode, reachable at any state by one button and key S): the building as
    an architect's room schedule — landmarks, every line starting with its kind ("Recorded.",
    "Unbought.", "Estimate by the ticketing forecast, ran Week 9."), every act available as a
    button, act numbers identical to the Room's. Acting here changes the Room.

## Art direction — "Harbour warehouse, working morning"
Light, not dark: plaster white, pale oak, brick, blackened steel, brass accents, the club's green
only as large calm fields on boards. Low warm sun through the window wall; no bloom, glow,
vignette. Text that must be read is PAPER brought to the camera or DOM plates beside the canvas,
never tiny textures at a grazing angle. No HUD corners, no bottom station bar as primary
navigation (stations exist as keyboard hops 1–8 and as buttons inside the side panel). Fonts: e.g.
"Archivo" (plates) + "Newsreader" (papers). Procedural geometry and canvas textures only.

## Capability labels for the "What's real?" layer
REAL CURRENT (unmerged branch, no human verdict): a state-bound Boston ops-floor interior; lit/dark
funded rooms; three kinds of arena night; the trade file and its "What did this trade touch?"
chain. PROPOSED: maquette/door/sit/sign posture gradient, frost-as-seat-boundary, four ways not to
know, tags-on-fixtures WHY, unbrick/scaffold forks, the Schedule twin with act parity. AI: every
interaction here is NO AI REQUIRED — say so.

## Prohibited
Game HUD corners; floating cards over the 3D; glassmorphism (frost is a pane IN the room, never a
CSS blur); people behind glass; monitors with fake charts; walking as a chore (stations are hops
≤ 450 ms or cuts under reduced motion); dark meaning unknown by itself (dark is chairs, sheets and
signs first); bricks in punishment red; a timeline slider.

## Acceptance criteria
- All 11 states reachable by keyboard and by the steps file; screenshots show each clearly.
- One canonical state object; the Room and the Schedule both re-render from it; act numbers match.
- The four absences are visibly different in finish, not just colour.
- The fork never recolours the record; the record building stays visible from the branch.
- Harness: 0 page errors, 0 console errors, 0 failed steps, no horizontal overflow at 1440×900 and
  1280×800. Render on demand; ≤ 30k triangles.
- Priority if time runs short: build the Schedule/state machine FIRST (all acts working in text),
  then the Room as its projection; states 1–6, 8, 9 are musts; 7, 10, 11 are strong shoulds.
