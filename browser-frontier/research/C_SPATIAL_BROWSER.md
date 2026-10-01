# C · Spatial Browser: Absence, Made Architecture
RESEARCH · 29 Sep 2026 · design reading, not evidence of use

## 0. The claim

A table renders everything you do not know as one N/A and everything you gave up as nothing. A building renders them as conditions you can read across a room: frosted glass (someone knows, you don't), a dark room with a price on the door (you could know, for money), a sheeted bowl (nobody knows yet; if a named model ran, pencil marks lie on the sheet), a bricked arch (your act closed this), a cracked stair (this happened to you), an empty frame (it happened; nobody can source it). So place should not be the Browser's medium. It should be its index of responsibility and ignorance: the seat is a posture (stand to observe; sit and sign to answer for something), the outside view is an object that gets covered when you sign, and every other representation (chart, ledger, diff, list) is hosted in the room as an object. It has one bar to clear, the plain list, which already killed the Descent. So every fixture is one entry in a Place Manifest that also renders, unchanged, as a plan and as a schedule of text. Place earns its cost only where a list cannot follow: sightline as information boundary, absence as object, residue as memory, distance as latency.

## 1. What the incumbents get wrong or leave out

**1.1 Incumbents.**
- The Descent lost to a plain list, correctly. What died was depth-as-zoom on a 2.5D drawing, not place. No incumbent (Clock Hall, Arrive, Handover, Council) says what place adds; all are flat. The bar they set is right: beat the list or cost nothing.
- The seven textures are 2D. In a room, hatch and stipple vanish past about 6 m (mipmaps, projectors). Each class needs a coarse signature (value, finish, silhouette) as well.
- The grammar has one UNKNOWN. Place shows four different things, and economics has four different words for them (2.2).
- The Handover ledger says "You gave up: the outside view" but never draws it. 2.1 does.
- A fork as "a frame in its own ink" is flat. A fork you live in must let you see the record from inside it (2.3).
- The North Star images carry what we must not copy (seven floating cards radiating from a folder; OVR 87 and $178.4M; a Year 23 in full polish, a future finished beyond what any model earned) and what we should keep (the same waterfront across years; the object as origin; the League seen from Boston's window).

**1.2 An honest reading of the real Boston 3D.** Six stills from the unmerged interior, the art direction, and the trial note. No human verdict on the newer scenes, no frame times, no accessibility pass. I read stills, not the product.

*Does well.* (1) One frame carries an institution: from the rail, ops floor, court, harbour and arena share a composition, and the roster board reads at that distance and ties a number to an act ("Payroll $222.8M · $22.8M over the tax line · Projected tax $34.2M · Arrived by trade: Jimmy Butler"). (2) Absence is furniture: unfunded Analytics and Scouting sit dim behind glass, chairs stacked, price on the sign ("Not funded · $2.0M would open it"). (3) The Trade File is the best frame in the set: wood, green cover, both salaries, a SIGNED stamp, warm light, right scale. (4) Three kinds of night differ at a glance from the upper deck, and NOT KNOWN is caused by an unfunded room: information has a price, drawn. (5) Marks are addressable (`v4.arena.nights[0].forecast`). (6) Eight stations, one keypress each; nobody walks.

*Does badly.* (1) The chrome is a game HUD (title block, cash and payroll top-right) plus a floating card on inspect that clips the HUD; the text lives outside the place. (2) Eight bottom buttons are a menu; the building is eight photographs. (3) Text on surfaces fails: the Analytics sign is smeared, the seat-cover slogans alias into stripes. (4) The states needing most attention are darkest: ESTIMATE is dark blue, NOT KNOWN charcoal, close in value; a daylight classroom projector crushes both. (5) The played crowd is about 16,000 randomly coloured blocks: count-true, each an invented person, and noise. (6) Desk monitors show chart lines that may be bound to nothing: information-looking decoration breaks "every mark is true". (7) Interior is credible; harbour, trees and skyline are toy-grade, so the city in the window reads as backdrop. (8) HUD cash differs across frames ($15.5M, $17.7M, $20.0M under one stretch label); stills cannot say saves from a live number. (9) Court and wall carry the word CELTICS, a word mark, not only a public name: flag for the rights lane, do not sterilise. (10) No frame shows a seat, a time, a fork or an edge: one moment, one viewer.

*Proves.* A baked interior with CC0 materials reaches credible architecture inside ~15k triangles; state can re-texture surfaces and swap rooms; an object can be the door to a WHY; absence with a price and three epistemic classes are legible to me.
*Does not prove.* That anyone wants it; that it beats a list (Cockburn & McKenzie, CHI 2002: no spatial-memory advantage for 3D, slower retrieval in virtual 3D, though users preferred it; Krokos, Plaisant & Varshney 2019: headset memory palaces beat desktop, so any recall gain may need immersion, not a Chromebook); that a 10–12-year-old reads it; Chromebook frame time; accessibility; projector survival; that the "poor" verdict on the first 3D trial is reversed. It is a stage set with one great prop, not yet a representation.

## 2. Concepts

**2.0 Shared ground (every concept assumes these).**
1. **Place Manifest.** Per (system, moment, branch, seat): fixtures `{id, path, class, scope, sentence, actions, aliases}`, rooms, stations. Room, Plan and Schedule are three drawings of it. A build test fails if an information-looking 3D object has no fixture or a fixture has no Schedule row. Nothing that looks like information may be unbound.
2. **Truth Materials** (a physical translation of the candidate grammar; the manifest's `class` field is what is stable). OBSERVED = seen through glass, outside the room's light · RECORDED = brass, double border, SIGNED stamp · AUTHORED = stencil paint · COMPUTED = thermal-paper strip · MODELED = tracing paper with pencil hatch laid over the record · GENERATED = white foam-board, speckled stock · UNKNOWN = shadow-board outline, dust sheet, bare. Text that must be read is paper brought to the camera, never a texture at a grazing angle. The host owns materials; a creator declares a class and cannot paint one.
3. **Frost renders an absence; it never masks a presence.** A withheld fixture ships as a silhouette. A pane admits something exists; where existence is withheld, draw nothing.
4. **Light never carries meaning alone.** Lit/dark is chairs, sheets and signs first.
5. **Never requires walking:** owed matters, sign/leave, jump to any fixture by address, the WHY tour (skip costs 0 ms), branch or moment switch, every action at every tier. Stations are hops (cut, or ≤450 ms dolly, FOV fixed), never locomotion. Places thin with practice (Room, then Plan, then Schedule, by the operator's choice): the first hour has a building, the thousandth a ledger. Capacity is counted, not scaled: 18,624 seat instances, never a bigger room.
6. **Vocabulary budget.** Over about eight devices in one room and the legend at the door fails; introduce them as they appear.

**2.1 The Maquette and the Room. Observing, arriving, entering, occupying as one gradient of posture and sightline.**
- *Interaction (Boston · Year Two · Week 9).* (1) Outside: the warehouse as a cutaway (same scene, clip plane, long lens, paper ground); every room readable, nothing touchable; plate "A BOW World, diverged from Reality at Year 0. Authored building; Boston's real offices are not shown." Open Boston · Reality instead: the four department rooms are sheeted, because nobody outside knows their funding. The World knows more than Reality because someone wrote it. (2) Door: "Owed: 3. Lapsed while you were away: 1" (dust on the blotter, a hollow-bordered NO ACT stamp on one folder, no banner); legend; Look around · Take the seat. (3) Enter: the cut closes; standing eye at the rail; all glass clear; "Reading the record. Nothing here is yours." (4) Sit: seated eye at the desk; the blotter ledger previews ("Gave up: the outside view; the interim's tray. Got: 3 matters, your clock."). Sitting is a free rehearsal, not an act. (5) Sign (the pen): panes over what your scope no longer reads frost (the ledger's "gave up" list equals the frosted list, asserted by test); the in-tray fills with folders labelled by question; the door plate takes your fictional name; two clocks, the World's and yours; the outside view is covered. Standing again restores nothing. Leaving is an act.
- *Canonical vs representation.* Canonical: the handover act, accepted matters, lapses, scope. Only redraws: posture, cut plane, frost, lamp, clock faces.
- *Segments.* ARRIVE, ORIENT, ENTER, ROLE, KNOWLEDGE + AUTHORITY CHANGE, RETURN.
- *Scale.* Every system has an outside view, a door, seats; non-flagships get the same gradient as Plan.
- *Cross-domain.* Chemistry: bench and instrument list; weak. Supply chain: dispatcher's desk over a control-tower cutaway; strong.
- *Label.* Interior, desk and department bindings REAL CURRENT (unmerged); the rest PROPOSED PLATFORM CAPABILITY · NO AI REQUIRED.
- *Fails if.* Frost reads as a graphics bug or a paywall; a phone has no posture; sit-then-sign is felt as friction; the list ("you can read / you can't") does as well.
- *Cheapest test.* 10 people (5 aged 10–12), 3 minutes; after signing, predict for five fixtures "can I read this, and who can?" vs a control shown the list. Place must be more accurate or better retained at 24 h; else keep the ledger, drop the frost.

**2.2 Four Ways Not to Know. "Unknown" is four physical conditions.**
- *Interaction.* From the desk: **withheld** (information asymmetry): a frosted pane; on the League board a sleeved envelope, terms between other clubs not shown. **Unbought** (price of information): Scouting dark, "Not funded. $2.0M would open it." **Unlived** (uncertainty, forecast error): the next home night's bowl under pale linen; if a named model ran, tracing paper on the linen with hatch density equal to expected fill (premium 761 of 931, lower 7,450 of 7,450, upper 10,243 of 10,243), plate "Estimate. Ticketing forecast, ran Week 9. Not a played night"; with no model, bare grey seats and a plate saying so. Play the night: the sheet comes off, the pencil stays as chalk on the seats, so forecast and result share one place. Played seats are lowered and cushioned, the rest tip-up, no drawn crowd. **Untraced** (missing data, provenance): an empty frame on the history wall, dashed outline, "No record found." One lighting rig for all; only finish differs. An unfunded ticketing room causes the bare bowl; the funded room's forecast tray causes the hatch.
- *Canonical vs representation.* Canonical: funded flags, forecast rows with model id and run date, results, source gaps, scope. Redraws: frost, sheet, hatch, frame.
- *Segments.* ORIENT, KNOWLEDGE + AUTHORITY CHANGE, WHAT IF (modeled vs unknown), PLACE RESPONDS, COMPARE.
- *Scale.* Every unknown field carries a `why` from the four: words at T0, glyph at T1, material at T2.
- *Cross-domain.* Chemistry: proprietary purity / assay not run / unrun batch yield / lot with no certificate. Supply chain: supplier stock / tier-2 visibility not bought / next week's port delay / provenance gap. My most domain-general idea.
- *Label.* Arena three nights and lit/dark departments REAL CURRENT (unmerged); taxonomy, chalk residue, materials PROPOSED · NO AI REQUIRED (a forecast is a deterministic model; an AI-made one is GENERATED stock).
- *Fails if.* Four causes overload a child; a hatched bowl reads as "better" than a bare one (marks signal knowledge, not outcome); "unbought" teaches that everything knowable can be bought.
- *Cheapest test.* 12 sixth-graders, 8 stills, no words, pick a plain reason ("someone else knows / you could pay to find out / it hasn't happened / nobody wrote it down"), with and without a 2-minute legend. Under 60% with the legend: merge to two (known to someone, known to no one).

**2.3 The Doors. Options as architecture; a fork takes out one brick.**
- *Interaction.* Arches along the brick wall (converted harbour warehouses really carry bricked-up arches). Each door is a recorded moment named by its question. **Open**: still live (this week's owed matter). **Bricked**: closed by an act of yours; arch visible, infill paler, your ink tape on the mortar; plate "Week 6 · Golden State calls about Derrick White", never the answer, which sits under a hinged brass cover that stamps the plate when lifted. **Cracked**: a floor tile or stair nosing, "no act of yours precedes this" (record-based, not a cause claim). **Scaffolded**: someone's branch, author and divergence stamp, never sized by popularity. **Shutter**: a future moment; opens itself on its date. "What if?" on a bricked door lifts one brick; scaffold rises; the passage is the same building under your branch (2.4). A fork cut after lifting a cover carries "cut with hindsight" on its plaque: stamped, not forbidden. Opportunity cost is the arch you can still see; choice versus shock is brick versus crack.
- *Canonical vs representation.* One entity in four states (open, closed by act, shock, branch); the look follows. Nothing is drawn that the moment index does not hold.
- *Segments.* WHAT IF, FORK, CONTINUE ALTERNATE HISTORY, RETURN.
- *Scale.* A view of a system's moment index (curated moments); long histories group by season.
- *Cross-domain.* Chemistry: an irreversible step is bricked, contamination a crack; equilibrium itself, no. Supply chain: single-sourcing bricked, the fab fire a crack.
- *Label.* Moment index and branches PROPOSED; Harbor's MONUMENT / ABSENCE / TRADITION / SCAR history vocabulary is a REAL CURRENT seed (unmerged) · NO AI REQUIRED.
- *Fails if.* Bricks read as punishment; bricked arches become puzzles; a crack read as "not your fault" when workload caused it.
- *Cheapest test.* Corridor still, 90 seconds, no legend, 10 children: "Which can this club still change? Which did it choose? Which happened to it?" Under 70% on choice vs shock, or self-blame for cracks, kills it.

**2.4 Same Station, Other Years. Time as rephotography.**
- *Interaction.* A brass benchmark on the rail; every plate is taken from that camera matrix (asserted). Plates: Year One start, Year One end, Now. A visible seam wipes between plates (changes across a blank or cut go unseen even when large: Rensink, O'Regan & Clark 1997), then changed fixtures wear ink tape for 3 s and a list says "What the building remembers: 4 changes." Five residues, computed from the record, none authored: **accretion** (banners, plaques; recorded honours only), **wear** (stair treads, court finish; from counts), **mend** (a repair stays visibly repaired: bolted plate; "recoverable" made legible), **scar** (debt stamp, bricked window), **vacancy** (empty bay, tape outline: no act). Year One's Business-over-Basketball-Ops choice shows as dark rooms gathering dust for as many weeks as they went unfunded; a World that ran while you were away leaves dust and lapsed folders, not a scolding banner. The future is a plate: MODELED = tracing paper on Now, pencil only where a named projection moves something; UNKNOWN = blank plate, dashed border, "You find out by living it." Finish encodes certainty: the future is never prettier than the past.
- *Canonical vs representation.* State at t; versioned deterministic wear functions. Plates only redraw.
- *Segments.* FOLLOW, COMPARE, RETURN; time as navigation.
- *Scale.* A plate is a fixture set at t; any manifest yields plates.
- *Cross-domain.* Chemistry: a bench time-lapse is weak (equilibrium wants a curve). Supply chain: same dock across a disruption week; strong.
- *Label.* Harbor's `projectHarborInstitutionHistory` REAL CURRENT seed (unmerged); rest PROPOSED · NO AI REQUIRED.
- *Fails if.* Change blindness beats the wipe; wear reads as decoration; it is a scrubber with pictures; people skip to modeled plates and believe them.
- *Cheapest test.* 10 people, Year One to Now, with vs without wipe and tape: how many of 8 planted changes noticed, then next day "what did the club give up in Year One?" Under 1.5x: it is a slider.

**2.5 The Trace. WHY as a reading order inside the building.**
- *Interaction.* Pick up the trade file (REAL), press G. The room drops to work light (value drop; no blur, no navy). Numbered brass tags hang on touched fixtures in causal order; the camera visits each (skippable; the same chain is an ordered list). 1 Roster board: Butler's bar ($56.8M) with White's ($30.3M) dashed behind. 2 Cap wall: payroll $222.8M over the tax stripe, a ghost at $196.3M just under it (COMPUTED: 222.8 − (56.8 − 30.3); verify against the save): the trade is what crossed the line. 3 Tax ledger: thermal strip "22.8 × 1.5 = 34.2. World rule, authored." 4 Cash plate. 5 "Denver 112–115: the roster that played had Butler. Whether Butler changed the result: not determined." A shadow-board outline: the route ends where causality ends. Tags are meshes fixed to fixtures, never billboards; the tape joining them is labelled a reading order, not a pipe.
- *Canonical vs representation.* Canonical: the causal edges the engine holds (tag = state path + edge); nothing inferred. Route geometry is layout.
- *Segments.* ACT, CANONICAL STATE CHANGES, PLACE RESPONDS, WHY.
- *Scale.* Past about 7 hops tags group by room and the list takes over.
- *Cross-domain.* Supply chain: "what did the fab fire touch?" along a route map; good. Chemistry: "what did heat touch?" wants a graph; place is weak.
- *Label.* Text chain REAL CURRENT (unmerged); tags and ghosts PROPOSED · NO AI REQUIRED.
- *Fails if.* People watch lights, not numbers; a route implies plumbing where the link is accounting; the list is faster and as well understood (likely for practiced operators; the in-situ ghost deltas are what place adds).
- *Cheapest test.* After Trace vs the current text chain: "if Boston had sent White for a $10M player, name three things that would differ." Trace must win on accuracy at under +30% time; else keep the ghosts, cut the tour.

**2.6 Out, In, Across. Scale by threshold, not zoom.**
- *Interaction.* Up is out: through a window or door you arrive at another system's threshold; never a fly-through. Down is in: the object comes to your hands; the camera does not dive. Across is a hop. Each threshold has an etched unit plate ("Unit: one home night · 18,624 seats"). Native furniture per scale: object = paper; person = locker and file with a nameplate (Butler, White; no bodies, no likeness); department = room; game = bowl or film room; club = the maquette; League = counter and wall of slots; economy = a wall chart in the League's place, because place is worse there. **League**: across the water, one lit counter window; papers cross the slot (offer, signed, delivered are three trays), only signed facts are pinned on the public board, pending terms sit in sleeves, the vote box has a slot and a tally, never ballots. **Agent**: a chair with a nameplate across the desk and a handset with a lit button; a call is a sealed folder in the in-tray; what they say is on speckled stock (GENERATED; about the person, never as them). **Media**: the plaza outside the glass; clippings with outlet and date [verify], pinned beside the ledger they concern so they can disagree. An AI-held seat is a nameplate that says so (model, version), never a body. The window holds systems that are not yours: observed, never actionable, and discovery is by adjacency (League, agent's chair, forks across the slip), reached by address, never by walking.
- *Canonical vs representation.* Canonical: cross-system acts (both sides record; the League stamps once; no god-view). Redraws: counter, sleeve, slot.
- *Segments.* DISCOVER, ARRIVE, ORIENT, FOLLOW.
- *Scale.* A system declares interface types (door, counter, slot, window, phone, plaza); the host draws them; third parties cannot invent edge devices.
- *Cross-domain.* Supply chain: customs counter, bonded warehouse, port window; strong. Chemistry: sample slot and supplier dock; marginal.
- *Label.* Place form PROPOSED; League tables and vote record REAL CURRENT as DOM (NBA branch, unmerged) · NO AI REQUIRED except agent speech: SMALL / CHEAP MODEL (prefer authored templates).
- *Fails if.* "Window means up" is a private metaphor; many arrivals feel like app switching; the League across the water becomes a lobby of apps. Weakest as place, strongest as a grammar for edges.
- *Cheapest test.* After six minutes: "draw how a trade gets from Boston to Golden State." Count mechanism steps (paper, counter, stamp) vs room names. Mostly rooms: place taught geography.

**2.7 Room, Plan, Schedule. One manifest, three drawings; the outline is the building.**
- *Interaction.* **T0 Schedule**: an architect's room schedule as landmarks and headings; every sentence starts with its class ("Recorded." "Unbought." "Modeled by the ticketing forecast, ran Week 9."); actions inside the node; live region ("Next night: no forecast. Cause: Ticketing room unfunded."). **T1 Plan and Section** (SVG; phones, print). **T2 Room**: baked three.js on a Chromebook; stations, hover, keys 1–8. **T3 Headset**: same scene, WebXR at 1:1, seated or standing, teleport stations, no smooth locomotion, no avatars. **TP** `/board`: public-only Room, teacher-directed camera, plates at 3x. Keys at every tier: O owed, G why, S schedule, arrows between fixtures, Esc. Schedule is a mode, not a layer over the 3D. Optional room tone (funded hum, played murmur, sheeted rustle, unknown silence) panned from plan x; earcon per class; off by default. Fixtures are addressable (`boston/ops/ticketing/forecast[0]`), so a blind student and a sighted partner point at one thing. Five people: newcomer (maquette, legend, "lit = paid for, dark = not"); fan (lockers with names and numbers; depth optional); owner on Week 9 (door plate, in-tray, O); Chromebook pair (T2, fictional names on the board); blind user (Schedule plus address).
- *Canonical vs representation.* All manifest; renderers draw.
- *Segments.* All, for a person who cannot see a room.
- *Scale.* The default rendering of every system; authored Rooms are an upgrade, never a requirement.
- *Cross-domain.* Trivial by construction.
- *Label.* PROPOSED. WebXR: Safari on visionOS 2 enabled immersive-vr by default; Quest Browser and Chrome on Android XR support it (2026 summaries; verify) · NO AI REQUIRED (a "take me to" box is fuzzy match over aliases).
- *Fails if.* The Schedule becomes the product and the Room a skin nobody needs (legitimate, and the thesis's own falsifier); tiers drift; audio is classroom noise; W3C XAUR unmet (REQ 2a action without physical movement, 2b same input method everywhere, 16b no flicker above 3 Hz).
- *Cheapest test.* 3 blind or low-vision students with a teacher of the visually impaired, 3 sighted on the Room, four tasks (what is owed; why the bowl is bare; what the trade touched; what you cannot know about Denver). Schedule within 10% of Room's accuracy, plus time to a shared referent with a sighted partner.

**2.8 What place encodes better, and worse.**
*Better than any other representation:* sightline as information boundary; absence as an object; four kinds of not knowing without words; choice versus shock; distance as causality with latency (act at the desk, consequence across the water); residue as memory on the same object; capacity as a count you stand inside; ambient state for a practiced operator (Lean andon boards; Mackay 1999: Paris controllers' paper flight strips could not simply be replaced); the ritual weight of an act; one shared object of attention for 25 students.
*Worse:* exact magnitude comparison; many-to-many structure; long series; enumeration and search ("every trade since 2017"); parallel alternatives and diffs; the rules themselves; speed for practiced operators; billions-scale discovery; continuous dynamics; non-visual access without the twin. Roberts et al. (2021) argue 3D should not be shown alone. Rule: where place is worse, put the better representation in the room as an object (the roster board is a chart on a wall); never pretend the room encodes it.

## 3. Two to prototype

Priority 1 is Seat (2.1, 2.2, 2.5); priority 2 is Doors and Plates (2.3, 2.4). Both test what only place can carry, share one building, and reuse the existing baked interior. Not chosen: 2.6 (weakest place claim; test on paper first) and 2.7 (build the Schedule in parallel with blind users, not as a 3D prototype).

**Shared build spec.** three.js. `PerspectiveCamera` FOV 50, never animated; eye 1.65 m standing, 1.20 m seated; stations are authored transforms; hops ≤450 ms eased dolly, horizon level, cut under `prefers-reduced-motion`. Light: one low warm sun (about 12°, 5200 K) through the window wall, baked lightmaps per room so one room's lit/dark variant swaps alone; one live 2700 K desk lamp in seat mode; no real-time shadows, bloom, glow, vignette or LUT; neutral tone mapping; render on demand. Materials: lightmapped standard/lambert; brass, oak, brick, plaster, linen; vellum at 0.35 opacity with hatch pitch of 6 cm or more in world space (survives mipmaps); frost pane = pre-blurred, text-free backplate at 0.92 opacity, no backdrop-filter, no transmission pass; tape and dashed outlines as flat decals (`polygonOffset`). SDF text or paper meshes; every fixture mesh has `userData.fixtureId`. No HUD corners: cash and payroll live on the cap-wall plate and the Schedule's first line.

### P1 · The Seat (AUTHORED FIXTURE on REAL bindings; NO AI REQUIRED)
Bindings (branch paths): trade file `deals.closed[]`; cap wall `money.payrollK/taxLineK/payrollLimitK/projectedTaxK`; roster board `roster[]`; rooms `v4.departments[]`; arena `v4.arena.nights[]`; film room `v4.court.last`; history wall `memory[]`. New (PROPOSED): in-tray `seat.matters[]`, door plate `seat.holder`, League board `league.public[]`.

| # | State | On screen | Twin (Plan / Schedule) |
|---|---|---|---|
| 1 | Maquette | Cutaway, long lens (FOV 20°, 35° azimuth, 30° elevation), paper-white ground, rooms lit or dark, arena a massing block; plate and legend | Section sheet; "6 rooms, 4 working, 2 unfunded" |
| 2 | Door | Eye at the door; dust on the sill; plate "Owed 3, lapsed 1"; two handles | "Threshold" landmark, two buttons |
| 3 | Rail, observer | Station 1; all glass clear; rail plate "Nothing here is yours"; roster board and cap wall legible | "Ops floor" nodes |
| 4 | Desk, unsigned | Seated; blotter ledger preview; the pen; ghost outlines of what will frost | Ledger text + Sign |
| 5 | Signed | Maquette sheeted; frost slides on the listed panes (silhouettes, no text); in-tray fills; door plate; two clocks; O returns to the tray by cut | Live region "You hold the seat"; new nodes |
| 6 | Act: fund Scouting, $2.0M | PO slides off the blotter; Scouting swaps to its lit variant, chairs out, sign becomes brass "Funded · Week 9 · $2.0M"; cash plate ticks; draft board keeps outlines with a dated tag "First report due Week 11" (pending, not magic) | Node flips Unbought to Funded |
| 7 | Four ways | From the desk: League board sleeves; Analytics dark with price; window: next night sheeted with hatch beside the Week 10 tunnel shutter; history wall empty frame (authored gap, labelled) | Four lines starting with the cause |
| 8 | Why | G on the trade file: work light, five tags, ghost bars, ends in an outline; Esc leaves | Ordered list, "Show me" each |

*The moment that must feel impossible:* state 5. Signing narrows the building, and standing up again does not give the view back.
*Anti-patterns:* HUD corners or floating cards; frost as CSS blur (glassmorphism is banned; frost is a pane in the room); the station bar as primary navigation; people behind glass; sitting as a commit; dark meaning unknown; monitors with fake charts; lamp glow.

### P2 · Doors and Plates (AUTHORED FIXTURE; PROPOSED; NO AI REQUIRED)
Bindings: doors `memory[]` and a moment index (question, act flag, date); crack `shocks[]` (no preceding act; author one and label it); shutter `schedule[]`; scaffold `branches[]`; tape and ghost from a fixture-level diff of record vs branch; wear from games-played counts; plates `state@t`.

| # | State | On screen | Twin |
|---|---|---|---|
| 1 | Benchmark, Now | Station 1, same matrix in every plate (asserted); brass disc; plate "Boston · Year Two · Week 9 · your branch of Reality, diverged at Year 0" | Address line; Schedule root |
| 2 | Gallery of doors | Station along the brick wall: open (Week 9 matter), bricked x2 ("Business or Basketball Ops?" in Year One; "Golden State calls about Derrick White" in Week 6), cracked nosing, shutter (Week 10); plates are questions, hinged covers | "1 open, 2 closed by you, 1 happened to you, 1 sealed" |
| 3 | Plates | Year One start, Year One end, Now: 700 ms seam wipe, tape rings for 3 s (no flicker); dust on stacked chairs by weeks unfunded; "What the building remembers" list | Plan with three states; diff list |
| 4 | Modeled plate | Vellum on Now; pencil only for the projection's changes; stamp "MODELED · payroll projection v0.3 · ran Week 9 (authored)" | "Modeled" line |
| 5 | Sealed plate | Blank sheet, dashed border: "Year Three. Not modeled. You find out by living it." | "Unlived, unmodeled" |
| 6 | Unbrick | What if? on the Week 6 arch: cover lifts (stamp), brick out, scaffold rises 1.2 s; window: the record building across the slip in daylight | Address rewrites; "Branch: 4 fixtures differ" |
| 7 | Inside the branch, compare | Tape on roster board, cap wall, tax ledger, cash; dashed ghost of the Trade File on the desk; brass datum line in the floor; seam sweep between record and branch changes only differing fixtures | Existing / removed / added line weights; two-column diff |
| 8 | Return | Footbridge at the datum switches to the record; the branch stays as a scaffolded neighbour with a paper plaque; public forks appear the same way, never sized by popularity | Address line back |

*The moment that must feel impossible:* state 7. From inside your alternate history, through its own window, you see the record you diverged from, still standing and lit.
*Anti-patterns:* a timeline slider or flythrough; a fork as a tinted duplicate; a prettier future plate; crossfade instead of a wipe; bricks in punishment red; walking the gallery.

## 4. What real runtime would have to exist

- **Place Manifest, registry and parity harness:** versioned schema; addressable (`system · moment · branch · seat · view`, view = station or fixture); manifest to scene to plan to schedule parity in CI; seat-scope diff drives frost and ledger and is asserted equal.
- **Seat-scoped server reads.** Withheld fixtures leave the server as silhouettes. `/board` is structurally seatless (the classroom runtime already does this).
- **Host-owned Truth Materials.** A RECORDED fixture must cite a record hash; creators cannot supply epistemic materials. That is the trust answer for third-party places.
- **Moment index, branch registry, fixture-level diff, state-at-t service, versioned deterministic wear and accretion functions.**
- **Place kit and pipeline:** doors, arches, sheets, frost panes, scaffold, plates, lockers, counters, slots; Blender bake with per-room state-variant lightmap atlases; glTF, KTX2. An authored Room is the most expensive representation in the Browser [estimate: person-weeks per building until measured]; Schedule and Plan are near-free per system; generative 3D from a description is SPECULATIVE FRONTIER and must never author epistemic materials.
- **Tier negotiation:** WebXR, reduced-motion and frame-time probes drop T3 to T2 to T1 to T0 without changing state.
- **Measure first:** 30 fps on a 2–3-year-old classroom Chromebook with a baked scene at DPR 1.5 or less [UNKNOWN today]; headset budget separately.
- **Classroom:** `stations[]` carries script slots (NOW / WATCH FOR / ASK) so `/teach` can direct a camera; the legend and Schedule are what a random teacher needs.

## 5. What would falsify this area's thesis

1. **List parity.** In a blind comparison, the Schedule answers who-can-read-what, why-unknown, what-did-it-touch and what-closed as accurately and within 1.3x the time. Place adds nothing; keep 3D as skin only.
2. **Geography, not mechanism.** After Boston, children meet Denver's differently arranged building. If they answer the same economic question only when the layout matches, place taught rooms.
3. **Four collapse.** Under 60% on four causes with a legend (2.2).
4. **Change blindness wins.** Wipe and tape under 1.5x the unhighlighted group (2.4): time-in-place is a slider.
5. **Chromebook.** No 30 fps on a real classroom machine: place is for teacher and headset only.
6. **Thin by visit three.** Operators abandon the Room by the third visit. That makes place a tutorial, which may still justify grades 5–6 (each student is a newcomer every time) but not a daily medium.
7. **Teacher Transfer.** A fresh teacher cannot run the Room without a walkthrough.

Sources (checked 29 Sep 2026; Cockburn & McKenzie via abstract and secondary summaries, full text not opened): Cockburn & McKenzie, CHI 2002, pp. 203–210 · Rensink, O'Regan & Clark, Psychological Science 8:368–373, 1997 · W3C XR Accessibility User Requirements, Working Group Note, 25 Aug 2021 (w3.org/TR/xaur) · Mackay, ACM TOCHI 6(4):311–340, 1999 · Krokos, Plaisant & Varshney, Virtual Reality 23, 2019 · Roberts et al., arXiv 2108.04680, 2021 · WebXR support: 2026 search summaries, verify.
