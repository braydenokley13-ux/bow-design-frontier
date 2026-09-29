# SPEC — Cloud/Developer frontier and Network frontier

------------------------------------------------------------------------------------------------
## H · WORLDTOOLS — "devtools for an executable world"
File: DevWorldtools.dc.html · 1440×900 · interactive
Question: what does it mean for another developer or company to BUILD ON the medium? Design the
developer experience enough to expose which primitives BOW must STANDARDIZE and which it should
leave OPEN. Not production infrastructure. Not a code editor clone.
Subject World: "Boston · Year Two" (fixture) — the same World everyone else sees in this canvas.
Layout (three columns + a bottom console):
1. LEFT · THE WORLD DEFINITION as typed objects (a tree): World → Actors (Boston Celtics, Denver
   Nuggets, League office, Owner, Players…) → Roles (GM, Head coach, Capologist, Owner, League
   office) → Authority per role (e.g. GM: offer, accept, waive, call up; cap: may not exceed second
   apron without Owner) → Rules (CBA simplified, AUTHORED) → Resources (payroll, picks, staff
   budget) → Time (World calendar, advances Mondays) → Models attached (Court sim v2, Crowd model
   v0.4 …). Each node shows its provenance texture.
2. CENTER · THE EVENT LOG — the World's history as state transitions (this is the source of truth):
   rows like
   #1041 Wk6 Tue · submitAction · role:GM · "accept trade White+backup big → Butler" · ACCEPTED ·
   diff: roster ±2, payroll +$8.9M (COMPUTED) · rule check: salary matching ✓
   #1042 Wk6 Tue · submitAction · role:GM · "sign free agent $4M" · REFUSED · rule: second apron ·
   #1057 Wk9 Sat · advanceTime · Court sim v2 ran game · RECORDED 112–115 · 20 possessions
   Select a row → the right panel shows the full STATE DIFF (before/after) and which rule/model
   produced each changed value.
3. RIGHT · VALUE INSPECTOR — pick any value (e.g. "payroll $222.8M", "last result 112–115",
   "crowd 19,156 [authored]") → its provenance chain: which event wrote it, which rule computed
   it, which model generated it (model id, version, provider, seed), what it depends on. Truth tag
   shown as texture + word.
4. BOTTOM · CONSOLE — pseudo-API calls with responses (monospace), clickable presets:
   `world.fork({ at: "#1041", assume: { denver: "declared:keeps-backup" } })` → response JSON with
   a new branch id, divergence event, and a provenance summary; the log shows a BRANCH row;
   `world.submitAction({ role: "GM", action: "offer", … })` → ACCEPTED/REFUSED with the rule;
   `world.attachModel({ slot: "court", provider: "[any]", model: "[id]", version })` → shows that
   switching the Court model provider changes every future Court value's provenance, not past ones;
   `world.replay("#1057", { renderer: "third-party:tactical-board" })` → shows the renderer contract:
   "renderers read canonical state and must display truth tags; a renderer that drops tags fails
   the contract" (a small CONTRACT CHECK list with pass/fail).
   `world.cost()` → a plain breakdown per day: simulation ticks, model calls (by provider), stored
   branches, data feeds — labelled AUTHORED ESTIMATES (no fake precision: ranges).
5. A small panel "STANDARDIZE vs LEAVE OPEN" (the point of the board): STANDARDIZE — event/state log
   format, provenance tags (the seven kinds), role & authority schema, fork semantics (divergence
   point + declarations), time model, renderer truth contract. LEAVE OPEN — domain rules, models &
   providers, renderers & art, UI, pricing of third-party content.
Interaction: click log rows, values, presets; the panels update consistently (one state!).
Look: a light, precise developer tool — NOT a dark IDE: white (#FFFFFF) and cool grey (#F3F4F6)
panes, ink #111827, one accent for BRANCH (#C2410C) and one for REFUSED (#B91C1C, with a
text label). Type: IBM Plex Sans + JetBrains Mono. Status: PLATFORM HYPOTHESIS · SPECULATIVE
FRONTIER (APIs are illustrative, not a design commitment).
COMMERCIAL LENS: "Hypothesis: developers pay for runtime (ticks, stored branches), model execution
pass-through with margin, and hosted data feeds; the World format and truth tags stay open so the
medium spreads."

------------------------------------------------------------------------------------------------
## I · THE HANDSHAKE — "a decision in one World becomes real state in another"
File: NetworkHandshake.dc.html · 1440×900 · interactive
Question: what is it like when institutions that each run their own World interact? Not a
visualization — an actual cross-institution INTERACTION with information asymmetry, commitment, and
consequences recorded in each World from its own point of view.
Scenario (BOW World league, fictional deal inside real team identities — label "World event"):
Three Worlds, each in its own pane AND its own skin: BOSTON (your World · Celtics green accent,
front-office paper), DENVER (another player's World — you see only what Denver shows you; its pane
is mostly UNKNOWN to you), LEAGUE OFFICE (rules; neutral grey institutional). A fourth thin pane:
a SPONSOR (for the second scenario) — optional.
Flow for scenario 1 — a trade:
1. You draft an OFFER in Boston's pane (a contract object: Boston sends "your backup guard
   ($2.1M, authored)"; Denver sends "a 2029 second-round pick"). The contract object is a physical
   object (a folded sheet with two signature lines and a league-stamp box).
2. SEND: the object travels across the border into Denver's pane. Denver's pane shows what Denver
   sees of it — and you (as Boston) see only that it was received ("delivered 10:02 · reading").
   Denver's internal evaluation is UNKNOWN to you (dashed).
3. Denver COUNTERS (scripted: asks for a 2028 second instead) — the object comes back with a
   marked-up line; you accept or decline.
4. BOTH SIGN → the object goes to the LEAGUE OFFICE pane: rule checks run visibly (salary matching,
   roster limits, apron restrictions — COMPUTED against each team's state; Boston is over the second
   apron: "can't take back more salary than sent — PASSES (you take back $0)").
5. COMMIT: one atomic event; three Worlds change at once: Boston roster −1, pick +1; Denver roster
   +1, pick −1; League transaction log +1. Each World RECORDS the same event in its own words and
   from its own side ("Boston: traded backup guard for a 2028 second" / "Denver: acquired backup
   guard" / "League: Transaction #2211 approved 10:14"). Show the three records side by side: same
   event, three histories.
6. Consequences that cross later: a small "follow-on" line: "Boston's roster is now 14 — the
   two-way call-up can be converted" (a new option appears in Boston's pane only).
Then a toggle "Same interaction, other domains" re-skins the SAME protocol for:
- SUPPLY CHAIN: Harrow Medical (buyer) · Kaito Semiconductor (supplier) · a logistics carrier —
  a purchase order with allocation, a customs/rules check, three records.
- CREATOR ECOSYSTEM: a creator's World ("Garden nights · by [creator]") · a publisher · BOW's
  marketplace — a licence to embed a Moment, a revenue-share rule check, three records.
Show that the protocol steps (draft → send (asymmetric) → counter → sign → rule check → atomic commit
→ each side records) are identical; only skins and rules change.
Look: three distinct panes in three skins that visibly belong to three institutions (Boston:
white paper + green; Denver: pale gold #F4E8C8 with navy-free dark blue-grey text #23303B (their
colors, not glow); League: light institutional grey #EEEEEC with black). The contract object in
white with fold shadow. Type: IBM Plex Serif (contract) + IBM Plex Sans (UI). Status: PLATFORM
HYPOTHESIS · SPECULATIVE FRONTIER.
COMMERCIAL LENS: "Hypothesis: the network is where transaction fees become possible (per committed
cross-World contract); leagues/platforms pay to host the rulebook node; it only works if the
protocol is open."
