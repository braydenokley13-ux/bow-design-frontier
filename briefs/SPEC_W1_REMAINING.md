# Wave 1 — remaining boards (exact specs; implement, don't redesign)

Context: BOW is inventing a medium of "executable worlds" — you open SYSTEMS, not pages: enter them
at a moment, in a role, at a scale, in a representation; fork them; ask "how do we know?".
Founder taste: rejected navy/gold/glass, cinematic backdrops, tan desk with rotated papers, HUD
tiles, disclaimer prose walls. Likes light, coherent, bold, immersive.

## BrowserRiver.dc.html — "THE RIVER" (time is the front door) · EDITORIAL / DOCUMENTARY
Searching a system returns its LIFE, drawn as one horizontal river of time across the board.
Recorded history is a solid band (thickness varies with how much is recorded — precompute an SVG
path, or positioned div segments). A vertical NOW line near the right. Right of NOW the river fans
into a hatched, widening cone (modeled futures, ranges). Public forks are thin lines peeling off
ABOVE the river at their divergence points, drawn in a different "hand" (dashed pencil grey), each
with a stamp "fork · diverged <date>" and author "[author]" (no fake counts). DOORS — enterable
moments — stand on the river as small upright markers with dates.
Interaction: (1) choose a system → the river draws (transitions). (2) hover/focus/click a door →
a documentary title card near it: date in small caps + one or two sentences in a film-title voice
("17 June 2017. Boston holds the first pick. Philadelphia wants it."). (3) "Enter this moment" →
the river zooms around that door (scale the time axis with a CSS transform; other doors slide
away) and a threshold panel opens: "You arrive the morning of the call." + choose one of 3 seats +
"Enter". (4) Arrival: full-bleed title card ("Boston · 17 June 2017 · morning") + "You are in the
seat of the President of Basketball Operations. Reality continues above you." with the river as a
thin strip at top with a YOU-ARE-HERE mark, and "Back to the river". (5) A "How do we know?" toggle
reveals texture words and sources on the river (off by default).
Queries (clickable suggestions + controlled input, case-insensitive prefix match; else "BOW has no
executable model of “<query>” yet."): American Revolution · Boston Celtics · cellular respiration
· semiconductor supply chain.
Content (dates must be right; hedge "verify" where noted):
- Boston Celtics: 1946 founded (BAA); 1957 first championship; 1986 championship; 2008
  championship; 17 Jun 2017 No. 1 pick agreed to Philadelphia (door); 17 Jun 2024 championship,
  beat Dallas 4–1 (door); 12 May 2025 Tatum's Achilles (door); NOW (29 Sep 2026, live, "[feed]");
  modeled cone to 2030. Forks above: "Fultz stays in Boston · diverged 17 Jun 2017 · [author]";
  "Holiday kept · diverged Jun 2025 · [author]".
- American Revolution: 1763 Treaty of Paris / Proclamation Line; 1765 Stamp Act; 1770 Boston
  Massacre; 1773 Tea (door); 1775 Lexington and Concord (door); 1776 Declaration (door); 1781
  Yorktown; 1783 Treaty of Paris; 1787 Constitutional Convention (door). Fork: "Conciliation
  accepted · diverged Feb 1775 (Lord North's Conciliatory Proposal) · [author]". The river ENDS at
  1789 — no modeled future — with "Recorded history ends here; branches are yours." (a historical
  system has no NOW).
- cellular respiration: the river is HOW WE CAME TO KNOW — doors are experiments: 1780s Lavoisier
  and Laplace, ice calorimeter; 1937 Krebs, citric acid cycle; 1961 Mitchell, chemiosmosis (Nobel
  1978); 1990s ATP synthase structure (Walker; Nobel 1997 with Boyer and Skou); NOW. Note: "For a
  scientific idea, the river is the history of the evidence." No forks; open questions to the
  right as UNKNOWN dashed markers.
- semiconductor supply chain: Dec 1947 point-contact transistor, Bell Labs; 1958–59 integrated
  circuit (Kilby, Noyce); 1987 TSMC founded; Mar 2021 Renesas Naka fab fire (door); 2021 shortage
  (door); NOW; modeled cone. Fork: "30-day shipping pause · scenario · [author]".
Look: documentary title design on a light ground — cream (#F1ECE2), charcoal ink (#221F1B), one
warm umber accent for the river (#7A4A1E); big italic display serif for titles (Libre Caslon
Display / Libre Caslon Text); small-caps dates in DM Mono. Opening-of-a-great-documentary feel,
not a timeline widget. Status: PROTOTYPE · DESIGN PROPOSAL.

## BrowserSeat.dc.html — "THE SEAT" (role is the front door) · THEATRICAL / HUMAN
Searching returns not topics but SEATS — the people you could be inside the system at a
consequential moment. The system appears as a seating plan (a curved chamber/house plan — rows of
seats in an arc, SVG or positioned divs), specific to that system and moment. Each seat is a
role. Selecting a seat shows its KNOWLEDGE HORIZON as four short lists side by side: YOU KNOW · YOU
CAN · YOU CAN'T · NOBODY IN THIS SEAT KNOWS (the last uses the UNKNOWN dashed texture). Some seats
are occupied by source-grounded actor models (stippled seat + note "actor model, not the person —
source-grounded, inspectable"); others are open to you. A second category: "Seats you can observe
but not take" — for dignity and truth, some positions are studied through sources, not role-played
— drawn in outline with "Observe with sources". This is a deliberate design point about the ethics
of ROLE.
Interaction: (1) choose a system → chamber draws with a caption naming the moment. (2) select seats
→ horizon updates (animate). (3) "Take this seat →" → arrival: a first-person threshold paragraph +
the first real choice in view (shown, not played) + "You are in the seat; you are not <real
person>." (4) Back.
Content (hedge; "verify" where needed):
- American Revolution — 18–19 April 1775, Massachusetts ("Lexington Green, before dawn"). Seats:
  Massachusetts militiaman at Lexington; Boston merchant; Crown customs commissioner; Loyalist
  printer; British regular officer under General Gage; delegate-to-be to the Second Continental
  Congress. Actor models: Samuel Adams, Thomas Gage. Observe with sources: an enslaved man in
  Boston; a Wampanoag community leader.
- Boston Celtics — late June 2025, the "apron summer" after Tatum's injury (verify). Seats: President
  of Basketball Operations; Head coach; Capologist; Jrue Holiday's agent; Portland's general manager;
  Season-ticket holder; NBA league office (cap enforcement). E.g. capologist KNOWS every contract and
  the 2025–26 apron lines (reported: cap ≈ $154.6M, tax ≈ $187.9M, first apron ≈ $195.9M, second
  apron ≈ $207.8M — verify), CAN build trade scenarios, CAN'T make the call; NOBODY KNOWS when Tatum
  returns.
- cellular respiration — "In a process, a seat is a vantage point." Seats: the runner; a leg-muscle
  fibre; a mitochondrion; the physiologist with a gas analyser; the coach. E.g. mitochondrion KNOWS
  local oxygen and ADP, CAN'T sense the race.
- semiconductor supply chain — 19 March 2021, after the fire at Renesas's Naka fab (verify). Seats:
  fab operations manager; automaker procurement VP; chip broker; government trade official; a car
  buyer waiting for delivery. NOBODY KNOWS the restart date (at that moment).
Queries as in River (same four, clickable + input).
Look: a playbill / theatre plan on bone paper (#F2EDE3), oxblood (#6B1D1D) and ochre (#8C6418)
accents, Bodoni Moda display + Libre Franklin body. Seats feel like seats (numbered, in rows), not
cards. Status: PROTOTYPE · DESIGN PROPOSAL · actor models: PLATFORM HYPOTHESIS.

## BrowserFocus.dc.html — "THE FOCUS" (scale is the front door) · SCIENTIFIC INSTRUMENT
A partial file exists at this path, cut off mid-script. Read it, keep its markup/look if it is
sound, and COMPLETE it (or rewrite the script cleanly) so the board works end to end.
Spec: the browser is an instrument with a focus control. A system opens at its widest scale. A
vertical FOCUS LADDER on the right lists the system's scale levels like the stops of a microscope
turret. Turning focus (click a level, or ▲/▼ buttons) transitions the main viewport: the current
level's drawing scales UP toward a highlighted region (a reticle marks which part contains the next
level) and the next level emerges (CSS transform scale + opacity crossfade, ~500ms). The level you
came from stays as a small inset with the reticle — orientation never lost. At every level: a
simple precise diagram, 2–3 readings with truth textures, and "At this scale you can: …" (verbs
change with scale). "Enter at this depth →" produces an arrival line with the full coordinate.
Levels:
- Boston Celtics: League (30 teams) → Conference → Franchise → Front office → Roster → Player →
  Contract → Clause. Readings e.g. Contract: "Jayson Tatum: 5-year supermax extension signed July
  2024, reported ≈$314M (observed, verify)"; Clause: "second-apron restrictions (authored by the 2023
  CBA)".
- semiconductor supply chain: Globe → Region (East Asia) → Company → Fab → Production line → Tool
  (EUV scanner) → Wafer → Transistor. "A leading-edge fab costs tens of billions of dollars
  (observed, reported, verify)"; "EUV scanners come from one supplier, ASML (observed)".
- cellular respiration: Organism → Organ (leg muscle) → Tissue → Cell → Mitochondrion → Inner
  membrane → ATP synthase. "Resting oxygen uptake ≈ 3.5 mL/kg/min (observed, textbook)"; "ATP
  synthase makes about 3 ATP per full rotation (observed structure)".
- American Revolution: Atlantic world → Thirteen colonies → Massachusetts → Boston → Town meeting →
  A merchant's ledger → One chest of tea. "342 chests destroyed, 16 Dec 1773 (observed, verify)";
  "What most Bostonians thought: UNKNOWN — no poll exists; sources are partisan".
Look: cool pale grey body (#E6E9E7), graphite ink (#1E2322), hairline rules and ticks, one
instrument-orange accent (#B83D12) for the reticle and current stop. IBM Plex Sans Condensed + IBM
Plex Mono. Status: PROTOTYPE · DESIGN PROPOSAL.

## ApushNotes.dc.html — "THE NOTES" (the record is the world) · EDITORIAL / DOCUMENTARY
The world you enter IS the primary source: Madison's notes for Saturday 30 June 1787 laid out as a
fine-press manuscript edition page; each paragraph is a "moment" you can step into.
Use ONLY these quotations verbatim (each marked "verify against Farrand, Records of the Federal
Convention (1911), vol. 1"); everything else is marked "[paraphrase]":
- Bedford (Madison's notes): "The Large States dare not dissolve the confederation. If they do the
  small ones will find some foreign ally of more honor and good faith, who will take them by the
  hand and do them justice."
- Bedford (Robert Yates's notes): "I do not, gentlemen, trust you."
- Franklin: "When a broad table is to be made, and the edges of planks do not fit the artist takes a
  little from both, and makes a good joint."
- Madison: the states "were divided into different interests not by their difference of size, but
  by other circumstances; the most material of which resulted partly from climate, but principally
  from the effects of their having or not having slaves."
Interaction:
1) The page: 5–7 short paragraphs (Madison; Wilson or Ellsworth [paraphrase]; Bedford; King's reply
   [paraphrase]; Franklin).
2) HOW DO WE KNOW? is the native gesture: select a paragraph → a provenance chain in the margin:
   spoken in the room (exact words UNKNOWN) → written by Madison that day (recorded, abbreviated) →
   revised by Madison over later decades (observed) → published 1840, four years after his death
   (observed) → Farrand 1911 (observed). Even the record has provenance.
3) "Other witnesses" toggle → a parallel column slides in with Yates's version; Bedford's two
   versions are linked by a connecting mark and the difference highlighted (CONFLICTING SOURCES —
   neither is "the truth"; show both).
4) Ask the actor model (Bedford): three structured question buttons ("What do you want from the
   vote?", "What will you do if you lose?", "What did you privately believe?") → a three-layer
   answer in a mechanical typeface in the margin: SOURCE-SUPPORTED (solid), INTERPRETATION (hatched:
   "historians generally read…"), UNKNOWN (dashed: "No surviving source records his private view.").
   Never imitate the manuscript hand.
5) "Write in the margin" (WHAT IF?) → choose one of: "Franklin does not speak", "Bedford does not
   threaten", "Madison's slavery argument is accepted as the line of division". Your branch appears
   as a SEPARATE LEAF beside the page, stamped "YOUR BRANCH · not in any record · diverged 30 June
   1787", in a different ink and typeface, with a short MODELED consequence (hatched, 2–3 lines) and
   one UNKNOWN. It never inserts itself into Madison's text.
Once, briefly, after an act: "What you just saw has a name: …" (e.g. "conflicting primary sources").
Look: fine-press edition on laid cream paper (#F4EFE3), iron-gall ink (#2A211B), rubrication red
(#9B2D20) for marginal numerals and dates; source text EB Garamond; actor-model voice JetBrains Mono;
your branch in blue-black (#1F3A5F) Work Sans. Status: PROTOTYPE · DESIGN PROPOSAL · quotations:
verify against Farrand.

## Biology.dc.html — "THE SCALE SPINE" (P4) · NATURAL-HISTORY PLATE
Move through SCALE without losing orientation while ONE state (the runner's pace) propagates
through every scale. Topic: cellular respiration in a runner.
Layout: a vertical SCALE SPINE on the left (7 stops): Organism (runner) → Organ (quadriceps) → Tissue
(muscle fibres + capillaries) → Cell (fibre with mitochondria) → Mitochondrion (cristae) → Inner
membrane (electron transport chain) → ATP synthase. The selected level fills the main field as an
illustrated plate (inline SVG line drawing, flat watercolour-like fills; simple, correct
structures). The level ABOVE remains as a small inset "where you came from" with a reticle. Moving
between levels animates (scale + crossfade).
THE ONE STATE: a pace control at top (Rest · Walk · Run · Sprint) updates EVERY level:
- Organism: METs rest 1 (= 3.5 mL O₂/kg/min, standard definition), walk ≈3.5, run (10 km/h) ≈10,
  sprint exceeds VO₂max (capped; extra energy anaerobic — MODELED). COMPUTE O₂ uptake for a 60 kg
  runner = METs × 3.5 × 60 mL/min (COMPUTED). Heart rate ranges MODELED ("typical"): rest 60–80,
  walk 90–110, run 140–170, sprint 180+.
- Organ: blood flow to working muscle rises many-fold (relative bar, not fake precision).
- Tissue: more capillaries drawn open at higher pace; oxygen delivery arrows thicken.
- Cell: glucose and fatty-acid uptake; at Sprint lactate accumulates (MODELED).
- Mitochondrion: electron-transport flux (arrow density).
- Inner membrane: protons pumped; oxygen accepted at Complex IV → water.
- ATP synthase: rotation animation speed scales with pace (illustrative); fact: ~3 ATP per rotation.
FOLLOW THE OXYGEN toggle: oxygen highlighted in one blue at EVERY level — breath → haemoglobin →
diffusion into the fibre → Complex IV → water — with a one-sentence caption per level.
Scale bars per plate (approx.): organism ~1.7 m, fibre ~50–100 µm, mitochondrion ~1 µm, ATP synthase
~10 nm. Say once: "drawings are representational, not to scale between levels".
At Sprint: "Why does lactate build up?" → a 3-step causal walk down the spine (demand > oxygen
supply → mitochondria can't keep pace → glycolysis continues, pyruvate → lactate), each step lighting
its level.
Look: natural-history plate on cream (#F5EFE2), fine black linework, madder red (#A8402F) for
blood/muscle, ochre (#9A7424) for fuel, sage (#5F7454) for membranes, oxygen blue (#2A5DA8) ONLY for
oxygen. Crimson Pro + Karla. Status: PROTOTYPE · DESIGN PROPOSAL · values: textbook approximations,
verify.
