# Repair lists: Biology, BrowserRiver, BrowserSeat (+ small fixes to Balance, Sentence, Enterprise)

These come from an independent critic. Line numbers ("L466") refer to each file as it stood when
the critic read it. Use them as hints only, and find the code by its content.

Rules that apply to all boards:
- No model runs on any of these boards, so none may show hatch.
- UNKNOWN means a real gap in knowledge, never "nothing loaded yet".

## A. Biology.dc.html (verdict: PUSH FURTHER, BOW's scale lens)

1. **Textures** (readings around L466–475, HEADS around L487–494).
   - Set t:'aut' on: Heart rate, Blood flow, Share of cardiac output, Fuel burned, and Lactate.
   - Oxygen taken from 100 mL of blood → ['obs','aut','aut','obs'].
   - Effort at Sprint, and Supply-vs-demand at Sprint (the last array item), → 'aut'.
   - HEADS rows 1 and 3: x:'mod' → 'aut'.
   - Start each such `p` with "AUTHORED · illustrative, authored:".
   - In the legend, replace the MODELED row with "MODELED · none on this board: no model runs here".
   - The AUTHORED swatch must be an outline, never a hatch.
2. **Honest labels per scale.**
   - HEADS[4] → 'body oxygen ×…', and the label near L477 → "Whole-body oxygen, against rest".
   - Replace the Mitochondrion "Electron flow" reading with {l:'In a working thigh fibre', v:'many-fold more', d:'far above the whole-body ratio; resting organs barely change', t:'aut', p:'AUTHORED · illustrative, authored: no per-fibre number on this board.'}.
   - HEADS[6] → 'drawn ' + ROTS[p] + '/s · real ≈100/s'.
   - HEADS[5] → WAT[p] + ' g water/min, body', and the label near L480 → "Water made at Complex IV, whole body".
   - The counter label → "Turns drawn since you arrived: {{d6.cnt}} (slowed)", with cnt: String(Math.floor(ang/360)). That also fixes the blank shown at 0.
3. **Sprint formula** (near L584) → "Sprint · capped at this runner's VO₂max, 50 mL/kg/min (authored) × 60 kg = 3,000 mL O₂/min".
4. **Lactate walk** (near L496–500):
   - Step 1 (level 2): "Oxygen delivery hits its ceiling" — "Uptake is capped at 3,000 mL/min. The legs ask for more energy than that oxygen can pay for."
   - Step 2 (level 4): "Mitochondria are at full speed" — "They cannot take in pyruvate any faster."
   - Step 3 (level 3): "Glycolysis keeps going: pyruvate becomes lactate" — "Turning extra pyruvate into lactate frees NAD⁺, so glycolysis keeps running. Lactate is made at every pace; at Sprint it is made faster than it is cleared."
5. **Collisions.**
   - "intermembrane space…" y=116 → y=96.
   - "γ shaft" → <text x="250" y="240">, start-anchored; delete its leader M154 222L226 224.
   - "next: the quadriceps" → x=40 y=312, text-anchor=start, with a leader M190 308L293 312.
   - Re-check all ATP synthase plate labels: "c-ring" must not touch "intermembrane space", and "matrix: fewer protons" must not touch "γ shaft".
6. **Status-line overprint.**
   - ATP `ox` → "No oxygen here. It was used upstream, at Complex IV."
   - Give the Follow/"This plate" block max-height:180px.
   - Give the status line background:#F5EFE2.
   - Nothing may cross y 872.
7. **Follow contrast:** dim: follow ? 0.6 : 1.
8. **Capillaries:**
   - Values 5/6/7/8 of 8 (in flowsFor and HEADS[2]).
   - Label → "Capillaries carrying red cells".
   - p → "AUTHORED · illustrative, authored: most capillaries in resting muscle already carry some flow; exercise mainly adds red-cell traffic (verify)."
9. **Walk wording:** "brisk walking" → "walking about 5 km/h".
10. **Fibres recruited:** p → "OBSERVED · textbook generalisation (size principle); a real runner's mix varies (verify)."

## B. BrowserRiver.dc.html (verdict: PUSH FURTHER, the default front door once sealed)

1. **Seal the doors.**
   - Door labels name the SITUATION, not the outcome:
     - 2017 → "The No. 1 pick: keep or trade?"
     - 2024 → "Game 5, up 3–1"
     - 2025 → "Game 4 · Tatum goes down"
   - Show outcomes only when "How do we know?" is on, as RECORDED notes, e.g. "Recorded: agreed 17 Jun, completed 19 Jun 2017 (verify)".
   - In the threshold, set opacity 0 on every milestone, door and fork with x > the chosen door's x.
   - Under the threshold title, in 12px mono: "SEALED · what happens after this morning stays hidden while you are in the seat."
   - Arrival strip: clip the river path at the YOU ARE HERE x. Draw the rest as a 1px hairline at 40% opacity labelled "SEALED". Remove the NOW marker and the hatched cone from the strip.
2. **Remove the cone.**
   - Delete the hatched "modeled range" divs, both the main river and the arrival strip.
   - Remove the 't-mod' legend entry and its tags.
   - The label near NOW → "no model has run past here". The river ends in a flat mouth at NOW.
3. **Forks as frames.**
   - .t-fork → border-top:2px solid #3F5A73.
   - The fork stroke → #3F5A73, with no dasharray.
   - Stamp box: 1.5px solid #3F5A73, with "FORK" in a filled tab (#3F5A73 background, #F1ECE2 text).
   - Fork 1 text → "Boston keeps the No. 1 pick"; widen its box 200 → 250.
   - Fork 2: x 1188 → 1160, width 222 → 240. It must not pass x 1400.
   - Legend note → "someone's branch, in its own ink. Never inked onto the record."
   - The stamp's date must not wrap: widen it, or put the date on one line.
4. **Real occupants.**
   - Add a `real` field per seat:
     - 2017: Danny Ainge / Brad Stevens / Bryan Colangelo (verify). Rename seat 3 "Philadelphia's president of basketball operations".
     - 2024: Joe Mazzulla / composite fan / Nico Harrison (verify).
     - 2025: Brad Stevens / composite capologist; the league office becomes "The rulebook (computed, not a person)".
   - In the threshold, under each seat name, in small mono: "held in reality by Danny Ainge".
   - Arrival line → "You are in the seat of {seat}. You are not {real}. The record stays as it happened; what you do here is your branch."
5. **Threshold horizon** (borrowed from The Seat). Under the chosen seat, add four compact columns: KNOW / CAN / CAN'T / NOBODY IN THIS SEAT KNOWS. For 2017 President:
   - "You hold No. 1. Philadelphia wants it."
   - "Keep it, trade down, or ask for more."
   - "Make Philadelphia pay your price."
   - "How any 19-year-old will turn out."
   - Write equally short, hindsight-free sets for the other seats.
   - Textures: KNOW solid, CAN and CAN'T outline, NOBODY KNOWS dashed.
6. **Arrival:**
   - Replace the "PROTOTYPE · the room behind this door is not built" line with "THE FIRST REAL CHOICE · SHOWN, NOT PLAYED" and "Philadelphia wants No. 1. What do you ask for?"
   - Options, drawn outlined: A "Keep it and draft" · B "Trade down for a future first" · C "Hold out for more".
   - Write equivalent situation-only choices for the 2024 and 2025 doors.
7. **Empty state:** "NO SYSTEM OPEN" (not "UNKNOWN UNTIL YOU ASK"). Change the dashed rule to a solid 1px #221F1B line at 25%.
8. **Width key,** under the kicker: "Width = how much is written down, not how well the team did."
9. **Contrast and wrapping:**
   - Stamp text #8A857C → #5B544A.
   - Add text-wrap:balance on the title card and the "Time is not to scale" note.

## C. BrowserSeat.dc.html (verdict: COMBINE; its horizon and gallery become the River's threshold)

Still repair it so it stands on its own as evidence:

1. **Seat types.**
   - Jrue Holiday's agent → observe only (kind V). Tag "A player's agent". Sub: "Observed through sources, not role-played. An agent's talks with a client are private; no source records what Holiday wanted."
   - Portland's GM → actor model (kind A). Name "A rival general manager", tag "Rival GM · actor model". Sub: "Held by an actor model built from public reporting, not any real GM. Which team stays sealed until you leave this moment."
   - NBA league office → a new kind 'rule', toned to mean COMPUTED: .k-rule{background:#8C8374;color:#F2EDE3}. Tag "The rulebook". Sub: "Not a person. Its answers are computed from the 2023 CBA." Replace its choices with a computed readout: "Over the second apron, a team cannot combine salaries in a trade or take back more salary than it sends (verify)."
   - Add an owner seat in row 0 (move pres to ang:52 and put the owner at ang:128), kind A. Tag "Ownership · actor model". Sub: "Pays the tax bill. The team's sale was pending (verify)."
   - Legend gains "Toned: computed from the rules. Not a person."
   - Every kind A seat always shows "ACTOR MODEL", not only in how-mode.
2. **Pin the date:** caption → "Sunday 22 June 2025 · after Tatum's injury, before the first trade [verify]". Drop the quotes around apron summer.
3. **Copy.**
   - President sub → "You make the trades. Ownership pays the tax."
   - The question → "Boston is over the second apron (reported, verify). What do you do?"
   - Lines note → "the 2025–26 lines, as projected: … (final numbers due 30 Jun, verify)".
   - Portland/rival line → "You can take on long money Boston wants gone."
4. **Labels vs arcs:** give each seat label span display:inline; background:#F2EDE3; padding:0 4px; box-decoration-break:clone, so the arcs never strike through text.
5. **Crowded title:** arc radii R = [90,168,232], so C2 clears the caption. h1 top 168 → 172, font-size 46 → 42.
6. **Empty state:** "NO SYSTEM OPEN". Ghost seats and stage use 1px solid rgba(34,26,22,.25), not dashed.
7. **Arrival:** take "[verify]" out of the display sentence. It becomes "You are in the seat; you are not Brad Stevens.", plus a small-caps meta line "REAL PRESIDENT OF BASKETBALL OPERATIONS · JUNE 2025 · VERIFY".
8. **Row meaning:** show the row labels: "ROW A · DECIDES" / "ROW B · ADVISES AND ENFORCES" / "ROW C · OUTSIDE THE BUILDING".
9. **Seat shape:** add a .seat::before seat-back bar (44×8, top:-11px).

## D. Small fixes found by the orchestrator

- **ApushBalance.dc.html**
  - The "Pass the room?" rows (likely yes / contested / likely no) are the designers' readings of Madison's notes, not a model. Change their hatch to the AUTHORED outline.
  - Relabel the legend row "Pass the room? — authored. Positions read from Madison's notes by the designers (Farrand, Records, 1911), each marked verify. A reading, not a forecast."
  - Change the "MODELED" row label on the left rail to "AUTHORED".
  - The caption under "full" ("full — more seats for the states that enslaved people; no rights for the people counted") collides with the rule line below it. Move the rule down or shorten the caption, so nothing overlaps.
- **BrowserSentence.dc.html**
  - The WHEN slot and timeline must name the SITUATION, not the outcome, and use the right date:
    - slot text "17 June 2017, the call about No. 1";
    - timeline door "17 JUN 2017 · Philadelphia calls about No. 1";
    - the address "2017-06-17 morning".
  - The outcome ("agreed 17 Jun, completed 19 Jun") appears only when "How do we know?" is on.
  - Other timeline doors also name situations: "12 MAY 2025 · Game 4 at New York"; "JUN 2025 · Boston is over the second apron".
  - The "2027 · MODELED · Futures, drawn as ranges" hatched segment → a dashed SEALED segment labelled "after NOW · sealed; no model has run".
- **Enterprise.dc.html**
  - contentBottom is 903 at 900 height. Reduce so nothing passes y 896: shrink the bottom footer line, or trim 8px of vertical padding.
  - Its legend: "hatched: modeled broker timing" → "outlined: authored broker timing (no model ran)". Change the LAB branch bars' hatch to an outline in branch blue, so the texture matches.
