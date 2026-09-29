# SPEC — Browser Frontier 2 (six challengers)

Wave 1 Browser challengers made one dimension the front door (Sentence = all coordinates, River =
time, Focus = scale, Seat = role). Wave 2 challengers must differ at the level of mental model,
navigation, interaction and information architecture. Each answers, in its own way: what replaces
a page, a search result, tabs, an address, "open", "back", "follow", and the home screen; and how
the seven kinds of Boston system (see W2_BAR_AND_FIXTURES.md) stay distinct. The primary query is
"Boston basketball". Each board also accepts one non-sports query to show the model generalizes
(given per board). Every board is 1440×900, interactive, and must demonstrate at least: search →
the system(s) appear in this model's native form → open/enter → one medium-native behavior →
back/leave, with the kind of system always perceptible.

BASELINE TO BEAT. Wave 1 critique fused its four challengers into one composite, which is now the
baseline every Wave 2 Browser model must beat or clearly differ from:
- RIVER: the system's life with doors at moments, each door named by its question.
- THRESHOLD: a seat with a knowledge horizon (know / can / can't / nobody knows).
- ARRIVAL: the first real choice, with the future sealed.
- Across it all, THE ADDRESS: an editable line every door writes into.
- Inside it, a SCALE LENS: one state carried from league to clause.
Do not rebuild that composite. Each model below must change what a page/result/tab/home IS.

------------------------------------------------------------------------------------------------
## B2-1 · THE CLOCKS — "you don't have tabs; you have presences, and each keeps its own time"
File: Browser2Clocks.dc.html
Core idea: the kind of TIME a system has tells you what kind of system it is. Home is a wall of
clocks — every system you are in or follow. Tabs are replaced by presences; each presence keeps
ticking (or not) while you are elsewhere.
Clock faces (one per kind; all drawn with SVG/divs; hands rotate via interpolated
`transform: rotate(...)` with transitions; the live one ticks with a timer):
1. "Boston Celtics · Reality" — a real wall clock with a sweeping second hand (live). Face note:
   "29 Sep 2026 · live". Since-you-looked pulse: "2 changes since you looked" (describe as
   "[from the Reality feed]" — do not invent the changes; show "training camp opened [date]" as a
   placeholder).
2. "Boston · Year Two" — a calendar dial (52 week ticks, a hand at Week 9) — a World on its own
   schedule: "advances Mondays · while you were away: 1 game — lost 112–115 to Denver".
3. "17 Jun 2017" — a Moment — a stopped clock at the morning, with a wax-seal-like lock over the
   future half of the dial (hindsight sealed until you act).
4. "Your fork · Keep No. 1" — two hands that diverge from one pivot (Reality hand and branch hand)
   with a small "diverged 17 Jun 2017 · horizon 3 seasons" engraving.
5. "1985–86 Celtics" — a face with no hands, only an engraved date: history has no NOW.
6. "Second-apron model v0.3" — an odometer / run counter instead of hands: "run 0" — it only moves
   when you run it.
7. "BOW Economics · The Cap" (Native Textbook) — a dial showing your progress "paused at step 4 of
   9" — it waits for you.
Interactions:
- Search field at top ("Boston basketball" or "semiconductor supply chain") — the wall fills with
  the clocks for that query (for semiconductors: Reality "Global chip supply · live", a Moment
  "19 Mar 2021 · Naka fab fire", a model "Lead-time model v0.2", a creator-built "Fab 101 by
  [creator]").
- Select a clock → a reading panel: what kind of time it keeps, what you can do there
  (observe / follow / enter a Moment / act / fork / run), what changed since you left.
- OPEN a clock → the clock enlarges to become the frame (scale transition) and the system is
  shown in its own time mode. Implement at least three open states:
  a) Reality: a live strip of observed state (payroll vs apron lines with the fixture numbers,
     "you can't act on the real team"), and FOLLOW: "Follow payroll vs second apron" adds a
     COMPLICATION (a small sub-dial) to this clock on the wall (watch-complication metaphor —
     following = adding a complication, not subscribing to a feed).
  b) World: a week calendar with "Advance to Week 10" disabled until "your acts this week" are
     done; shows that the World does not wait forever ("advances Monday regardless").
  c) Moment: frozen scene, "Act" cuts a new fork — a NEW clock (type 4) appears on the wall.
- BACK semantics, shown explicitly with two different controls inside an opened clock:
  "Leave — back to the wall" (presence stays; the clock keeps its time) vs "Rewind" (read-only
  replay of this system's recorded past; you cannot change it). In the fork: "Back to the branch
  point" returns you to the parent at the divergence.
Look: a railway-station clock hall — pale limestone ground (#E6E5E1), black enamel hands, one
signal-red second hand (#C8102E, only for live time), faces white. Type: Red Hat Display
(clock numerals, headings) + Red Hat Mono (engravings). Status: DESIGN PROPOSAL.
COMMERCIAL LENS line: "Hypothesis: following systems and entering shared Moments is free; keeping
a persistent World running on its own clock is the paid thing (it costs compute while you're away)."

------------------------------------------------------------------------------------------------
## B2-2 · THE SPECIMEN — "a system is an object you can hold: turn it, open it, cut it, weigh it"
File: Browser2Specimen.dc.html
Core idea: search returns objects, not links. Each system is a specimen whose MATERIAL tells its
kind; its six FACES are its representations; you act on the object with physical verbs:
TURN (change representation), OPEN (enter through the face you're looking at — the face decides
your entry role), CUT (fork: the object splits along a seam into the record and your branch),
WEIGH (compare two specimens on one variable), TAG (follow).
Specimens (materials, drawn as CSS-3D cubes with `transform-style: preserve-3d` and
`rotateX/rotateY` on a parent, faces 260px, transitions .6s):
- Reality — solid ink-dark faces with a slow moving grain (animated background-position) = live.
- World — solid faces with an inner double rule (recorded, yours).
- Moment — a smaller cube with a seal band across it.
- History (1985–86) — stone-grey, perfectly still.
- Model v0.3 — wireframe: transparent faces with hatched edges (modeled).
- Creator-built — stippled paper faces with an author tag "[creator] · unreviewed".
- Public fork — a cube visibly made of two glued halves with a seam.
Faces of the Boston Reality specimen: PLACE (a simple arena/front-office plan drawing), PEOPLE
(roster names), MONEY (payroll bar with tax/apron lines — fixture numbers), RULES (second-apron
restrictions list, AUTHORED by the 2023 CBA), TIME (mini timeline with the recorded Moments),
SOURCES (where each number comes from, dated).
Interactions:
- Query "Boston basketball" (or "cellular respiration": specimens = "Runner · live physiology
  model", "Mitochondrion · textbook system", "Krebs 1937 · historical state") → specimens stand on a
  long plinth line (not a card grid: objects of different size/material on one shelf, casting
  soft shadows).
- Click a specimen → it slides to the center stage, the rest recede.
- TURN: ◀ ▶ ▲ ▼ buttons rotate the cube; the facing side is named below ("You're looking at:
  MONEY").
- OPEN: "Open through MONEY" → arrival text: "You enter as the capologist — you can see every
  contract; you can build scenarios; you can't sign." Through PEOPLE → "as the head coach". Through
  TIME → "as a historian: read-only". The face chooses the role.
- CUT: the cube splits into two halves that separate (translateX) — left half keeps the record's
  material, right half takes your branch's material with a seam stamp "your branch · cut
  29 Sep 2026 · diverges from Reality at [chosen Moment]".
- WEIGH: pick a second specimen → both sit on a two-pan balance; choose a variable (payroll) →
  the beam tilts by the computed difference (Reality ≈$203.6M vs World ≈$222.8M).
Look: a clean product-photography studio — white seamless sweep (#F7F7F5 to #ECECEA floor line),
soft contact shadows, objects are the only color. Type: Hanken Grotesk + Fragment Mono.
Status: DESIGN PROPOSAL · SPECULATIVE FRONTIER (object metaphor).
COMMERCIAL LENS line: "Hypothesis: specimens are the shareable unit — anyone can turn and open a
public one free; creators pay to publish specimens with persistent state."

------------------------------------------------------------------------------------------------
## B2-3 · ARRIVE — "no results page; the question places you in the state that answers it"
File: Browser2Arrive.dc.html
Core idea: the invisible browser. Ask in plain language; BOW does not answer with prose or links —
it PLACES you in the system state that answers, at the right time, in the right role and
representation. Chrome is absent until your intent approaches an edge: the four edges are the
four navigation dimensions and reveal themselves when approached (onMouseEnter + onFocus on thin
edge buttons; also keyboard reachable):
TOP = How do we know? (provenance of what you see) · BOTTOM = time (a rail with this system's
moments) · LEFT = who am I (seats) · RIGHT = what if (the branch field: cut here / public forks).
The address stays hidden; "Share" (small, top-right) pulls it down as a readable coordinate.
Arrivals to implement (suggested questions as small grey text under the ask line):
1. "Can Boston keep this roster under the second apron?" → arrive in REALITY 2026–27 at the cap
   sheet: payroll bar ≈$203.6M against tax $200.428M / first apron $209.015M / second apron
   $221.686M (fixture, verify). The gap to each line is COMPUTED and shown. Whisper line at top:
   "Boston Celtics · Reality · 29 Sep 2026 · observer". Answer is the state, plus one sentence.
2. "What if Boston had kept Jrue Holiday?" → arrive at the late-June 2025 Moment, with a branch
   STAGED but not cut: a dashed outline of the branch on the right edge and a single question
   "Cut here?" — nothing forks until you say so.
3. "Why did we lose to Denver?" → arrive in your WORLD at the last possession (a coach's diagram:
   X's and O's, the switch, "Jokić scores"), with a "because…" handle.
4. "Show me Boston in 1986" → arrive in the HISTORICAL state: frozen, sepia-free (no nostalgia
   filter) but with a plain note "recorded history · nothing here changes".
5. Non-sports: "Why do airline delays spread?" → arrive at a small air-network state (one aircraft
   rotation BOS→PHL→ORD→PHL→BOS with a 40-minute hold at ORD) — a note "assembled for this
   question from BOW's air-network model · not a reviewed system" (GENERATED structure).
Each arrival animates in (the previous state slides away; no page reload feel), and the kind of
system is readable from material/time, not labels.
Look: invisible — near-white (#FAFAF7), content set very large, black ink, a single accent only
for the thing that answers (a strong ultramarine #2C3FD6 used sparingly — not glow). Edges show a
2px ruler when approached. Type: Instrument Sans (UI and big type) + Instrument Serif italic for
the one-sentence answers. Status: DESIGN PROPOSAL.
COMMERCIAL LENS line: "Hypothesis: asking and arriving is free (it spreads the medium); running
deep models or persistent branches from an arrival is metered."

------------------------------------------------------------------------------------------------
## B2-4 · TRACKS — "a system is an editable timeline of parallel histories"
File: Browser2Tracks.dc.html
Core idea: borrow the non-linear video editor, not the web: every system opens as stacked TRACKS
on one time axis — each track is a history: REALITY (observed, extends to a live right edge),
YOUR WORLD (branched from Reality at Year 0), YOUR FORKS (each from its Moment), PUBLIC FORKS
(a collapsed group you can expand), MODEL RUNS (hatched tracks that stop at their horizon).
Moments are clip markers on the Reality track. A PLAYHEAD is your "now inside the system"; a
MONITOR window above shows the state of the selected track at the playhead (roster summary,
payroll vs lines, last result). "Back" is split in two: undo navigation (↶) vs move the playhead.
Interactions:
- Query "Boston basketball" → tracks slide in; the axis spans 2017 → 2027 (World years mapped:
  World Year 0 = Jul 2025, Year Two = 2026–27).
- Drag the playhead (range input across the timeline width) → monitor updates for the selected
  track; track headers show what is TRUE there (e.g. at 2018 on "Your fork · Keep No. 1": "roster:
  Fultz, not Tatum · COMPUTED").
- SOLO / MUTE buttons on each track header (like audio tracks).
- A/B: choose two tracks → the monitor splits and shows the DIFFERENCE at the playhead (payroll,
  roster, last result), with a line "a difference between histories — not proof of cause".
- CUT: on any track at the playhead, "Cut a branch here" → a new track appears beneath its parent,
  indented, stamped "diverged <date> · by you".
- Model tracks end in a dashed "horizon" cap; past it the track is an empty dashed lane.
- Non-sports query: "Philadelphia 1787" → tracks: Recorded history (ends Sept 17, 1787), "Your
  branch · Strong votes no (16 Jul)" , "Public fork · Franklin silent (30 Jun) · [author]".
Look: a professional editing tool in a LIGHT theme — cool light grey panels (#ECEDEB, #F7F7F6),
precise 1px dividers, timecode in mono; track colours: Reality black, World deep teal (#0F6E6A),
your forks orange (#C2410C), public forks grey-violet (#6A5F8C), models hatched grey. Type: Barlow
Semi Condensed + JetBrains Mono. Status: DESIGN PROPOSAL.
COMMERCIAL LENS line: "Hypothesis: tracks for Reality and your own forks are free; persistent
public tracks and model runs cost storage and compute — creators and studios pay."

------------------------------------------------------------------------------------------------
## B2-5 · THE FLOOR — "a system is a building: rooms are representations and roles; windows are Reality"
File: Browser2Floor.dc.html
Core idea: search returns a place you can walk into. Inside is your WORLD; through the WINDOWS
you always see REALITY (live, observed, outside). Each ROOM is at once a representation and a
role: Front office (cap sheet — GM), Film room (possessions — coach), Business office (revenue —
president of business), Locker room (people — players), Archive (recorded Moments — historian;
its doors lead into Reality's past), League annex (rules — observer). Lights encode time and
money: rooms you funded are lit; rooms you didn't fund have blinds drawn (this "visual economics"
rule EXISTS TODAY in the BOW Worlds branch, D253). Walking between rooms changes both what you see
and what you are allowed to do.
Interactions:
- Query "Boston basketball" → an axonometric cutaway of the building draws in (floor by floor);
  windows along one side show a simple live city strip with an observed ticker ("Reality ·
  29 Sep 2026 · [feed]").
- Hover/focus a room → its role and representation are named on the floor ("Film room · you would
  be the coach · possessions").
- Enter a room → the camera scales into it (CSS transform scale + translate on the building group)
  and the room's representation opens inside the room walls: Front office shows World payroll
  ≈$222.8M vs the World's tax line $200M with your authority listed; Film room shows the last
  possession vs Denver; Archive shows three doors labelled with Reality Moments (17 Jun 2017 · Jun
  2025 · 5 Feb 2026) — opening one says "You are leaving your World for Reality's past. Anything you
  change there becomes a fork, not your World."
- The Business office is dark (blinds drawn): "You funded Basketball Ops in Year One." (fixture
  says Business was funded — so instead draw the Analytics room with blinds drawn: "Analytics:
  unfunded since Year One").
- A persistent "window" strip on every room keeps Reality visible: WORLD inside, REALITY outside.
- Non-sports: "Harrow Medical" → the same grammar as a plant: Receiving dock (suppliers —
  procurement), Line 2 (production — plant manager), QA lab, Dispatch (customer promises), with
  windows onto the Reality of the supply market.
Look: an architectural axonometric competition drawing — thin black lines, flat light fills
(plaster white #F4F2EE, parquet #D9C3A0, glass pale #DCE8EA), one team accent (#007A33, small),
people as simple silhouettes. NOT a rendered 3D game. Type: Archivo (labels, headings) + Archivo
Narrow. Status: DESIGN PROPOSAL · the Boston building EXISTS TODAY as a 3D slice in the Worlds
branch; this is a 2D alternative.
COMMERCIAL LENS line: "Hypothesis: the building is the premium World (subscription); the
windows onto Reality need licensed data — a cost line, and possibly a partner revenue line."

------------------------------------------------------------------------------------------------
## B2-6 · BORDERS — "links are shared state: you travel between systems along what they share"
File: Browser2Borders.dc.html
Core idea: hyperlinks connect documents. BOW connects SYSTEMS through the state they share.
The browser shows the system you are in as a territory, clipped by the viewport, with
neighbouring systems' territories at the edges. Every BORDER is a shared variable or contract,
labelled with its current value and direction of flow. Crossing a border = following that
variable into the neighbour, arriving where it LIVES there. History is the path of borders
crossed (a breadcrumb of variables, not pages).
Territories and borders for "Boston basketball":
- Boston Celtics (center) ⟷ NBA League: "salary cap $164.961M · tax $200.428M" (the League
  computes them; Boston is bound by them).
- Boston ⟷ Players' union / agents: "Tatum contract ≈$58.5M" (shared obligation).
- Boston ⟷ Arena operator (TD Garden): "lease & arena revenue [terms: not public — UNKNOWN]".
- NBA League ⟷ Media partners (Disney/ESPN, NBC, Amazon): "11-year rights deal ≈$76B from
  2025–26 (reported, verify)".
- Boston ⟷ City of Boston: "[permits, taxes — UNKNOWN in this prototype]".
Interactions:
- Query → Boston's territory draws; borders pulse gently in the direction value flows.
- Click a border → the map pans (transform on the map group) so the neighbour becomes the center;
  arrive where the variable lives: crossing "salary cap" lands in the League at the cap
  computation: "cap = share of basketball-related income under the CBA; growth limited to 10% a
  season (2023 CBA, verify)" — with a further border to Media partners.
- The path at the top grows: Boston —cap→ League —media rights→ Broadcasters. Click any step to
  jump back (back = retrace a border).
- WHAT IF at a border: "What if the media deal had stayed flat?" → the change flows back across
  borders as hatched consequence marks: League cap growth (MODELED, "illustrative"), then into
  Boston's territory (which lines Boston would be over — COMPUTED from a stated assumed cap, clearly
  AUTHORED). Stamp "LAB · not reality".
- Official vs creator territories differ in ink: a creator-built system territory "Garden nights ·
  by [creator]" appears with stippled ink and "unreviewed".
- Non-sports: "semiconductor supply chain" → territories: a fab, its equipment supplier, a chip
  designer, an automaker; borders: "EUV scanners (one supplier)", "wafer starts", "allocation".
Look: cartographic, light — a Swiss-topographic palette (pale green #E8EFE3, sand #F1EBDD, water
#DCE9F0), borders as heavy dashed-and-solid lines, territory names in spaced small caps. Type:
Alegreya Sans SC (territory names) + Alegreya Sans (text). No node-link diagram: these are areas
with shared edges, clipped by the frame. Status: DESIGN PROPOSAL · SPECULATIVE FRONTIER
(system-to-system linking).
COMMERCIAL LENS line: "Hypothesis: borders are where BOW Network value appears — official
institutions pay to publish authoritative shared state; everyone else follows it free."
