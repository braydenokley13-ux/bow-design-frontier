# Wave 2 — design bar and shared fixtures (read with DC_AUTHORING.md)

## The bar
Wave 1 proved BOW can be designed. Wave 2 asks: does BOW have an interaction model that deserves
to be called a NEW MEDIUM? Every board must contain at least one behavior that could only make
sense in a medium of executable systems (state, time, actors, roles, rules, causality, history,
models, sources, possible futures). If a board could exist unchanged as a website, dashboard,
search results page, LMS page, game menu or chat app, it has failed.

Founder rules for Wave 2:
- SHARED INTERACTION GRAMMAR, RADICALLY DIFFERENT VISUAL EXPRESSION BY DOMAIN. The cream
  "research canvas" look of the thesis boards is NOT the product look. Do not use it. Each board
  gets its own named art direction (given in the spec). Basketball may feel cinematic,
  institutional, physical and alive. Enterprise may feel like entering an operating organization.
  Browser may need an entirely new visual language.
- Light grounds are fine and the founder likes them; dark is allowed only where the spec says so,
  and never dark-navy-with-glow. No glassmorphism, no card grids, no KPI tiles, no chat sidebar,
  no generic node-link graph.
- 3D IS A REPRESENTATION, NOT THE MEDIUM. In this format use 2D/2.5D drawing (SVG, positioned
  divs, CSS transforms). Spatial depth only where place/embodiment matters.
- Truth discipline (the seven textures, "How do we know?", forks never impersonate the record,
  modeled never looks observed) is mandatory. See DC_AUTHORING.md §3.
- Every board carries, bottom-right, one quiet status line (PROTOTYPE · DESIGN PROPOSAL /
  PLATFORM HYPOTHESIS / SPECULATIVE FRONTIER · data notes) and, bottom-left, one quiet line
  starting "COMMERCIAL LENS ·" with the text given in the spec (label it a hypothesis).
- Copy: concrete, short, human. No marketing voice. Never "unlock", "seamless", "journey",
  "empower", "revolutionize".

## Shared fixture — "Boston basketball" (use exactly; mark as given)
Seven different KINDS of Boston system exist. Wave 2 boards must keep these kinds perceptibly
distinct. Types and what makes each one what it is:

1. CURRENT REALITY — "Boston Celtics · Reality". OBSERVED. Live: it keeps changing without you.
   As of 29 Sep 2026 (NOW): 2026–27 training camp [verify date]. You can observe and follow;
   you cannot act on the real team. You CAN enter its recorded Moments and fork them.
   2026–27 league lines (source: BOW Economics Live fixture, verify): cap $164.961M ·
   tax line $200.428M · first apron $209.015M · second apron $221.686M.
   Boston committed payroll ≈ $203.6M (same source, verify) — "past the tax line".
   Contracts (approx., public reporting, verify): Jayson Tatum ≈ $58.5M · Jaylen Brown ≈ $57.1M ·
   Derrick White ≈ $30.3M · Sam Hauser ≈ $10.8M · Payton Pritchard ≈ $7.8M ·
   rest of roster "[from the Reality feed]".
   CORRECTION (found by the Wave 2 textbook critic, 29 Sep 2026). BOW Economics Live's sourced
   fixture (runtime/src/modules/sameLine/world.ts, read 4 Sep 2026; verify) records:
   - Boston TAX SALARY $198,722,406 (salaryswish). The tax is charged on tax salary, so on that
     number Boston is ≈ $1.7M UNDER the tax line. The ≈ $203.6M figure is cap payroll. Never write
     "past the tax line" as plain fact: show both numbers, side by side, not averaged.
   - Jaylen Brown traded to Philadelphia for Paul George (hoopsrumors; verify). The contract list
     above may be stale; don't name other Boston contracts than Tatum's without checking.
   - 2026–27 exceptions: non-taxpayer ("big") MLE $15.044M (using it hard-caps the team at the
     first apron); room exception $9.366M; taxpayer ("small") MLE $6.064M (hard-caps at the second
     apron); minimum deal $2.449M (pr.nba.com via world.ts; verify). A team over the cap signs a
     free agent ONLY through an exception. Crossing the first apron removes the NON-taxpayer MLE.
   - The tax brackets keep rising past $20M over ($3.75, $4.25, … per $1; verify); repeat payers
     pay more. Label simplified rates "first-time payer".

2. RECORDED MOMENTS (enterable decision points in Reality's past), OBSERVED:
   - 17 Jun 2017 — Boston holds the No. 1 pick; Philadelphia wants it (agreed that weekend,
     finalized 19 Jun; Boston took Jayson Tatum at No. 3 on 22 Jun).
   - 12 May 2025 — Tatum ruptures his right Achilles (Game 4 vs New York).
   - Late Jun 2025 — the "apron summer": Jrue Holiday traded to Portland (for Anfernee Simons and
     two second-round picks); Kristaps Porziņģis to Atlanta in a three-team deal — Boston received
     Georges Niang and a 2031 second-round pick and sent a 2026 second (per NBA.com / Hoops Rumors; verify).
   - 6 Mar 2026 — Tatum returns from the Achilles injury vs Dallas (NBA.com; verify). Any "now"
     board must not say his return is unobserved.
   - Ownership: the NBA approved the sale to a group led by Bill Chisholm on 13 Aug 2025
     (≈$6.1B reported valuation; the remaining stake transfers in 2028; verify).
   - 5 Feb 2026 — Simons to Chicago for Nikola Vučević; Boston's projected tax fell from ≈$39.5M to
     ≈$17M (reported by ESPN / NBC Sports Boston; verify).
3. HISTORICAL STATES — frozen, fully recorded: "1985–86 Celtics", "2007–08 Celtics". They do not
   change. A historical system has no NOW.
4. BOW WORLD — "Boston · Year Two" — a persistent BOW World you run (built from Reality at Year 0,
   then diverged by your acts). RECORDED inside BOW. World time: "Year Two · Week 9" (authored).
   It keeps running on its own schedule; things happen while you're away. World facts (EXISTS
   TODAY as fixtures in the BOW Worlds branch, a World event, NOT NBA history):
   - Week 6: you traded Derrick White (and a backup big as salary filler) for Jimmy Butler.
   - Payroll after moves ≈ $222.8M vs the World's $200M tax line; projected tax ≈ $34.2M.
     THIS IS A WORLD RULE: a flat 1.5× over the line (authored; the BOW Worlds branch uses it).
     Always label it "World rule: flat 1.5× (authored) — the NBA's real tax is incremental"; never
     present $34.2M as what the NBA would charge (the real incremental bill at $22.8M over is far
     higher). Reality boards use the simplified incremental brackets in SPEC_TEXTBOOK/SPEC_WHATIF2.
   - Week 9: lost to Denver 112–115 at home; 20 recorded possessions; "Butler for three" twice;
     "Jokić scores" on the last possession after a switch left a big on a guard.
   - Year One: you funded Business over Basketball Ops (analytics staff cut).
5. YOUR ACTIVE HISTORY — your acts, in order, with timestamps (RECORDED): e.g. "Year One: funded
   Business"; "Week 6: accepted White-for-Butler"; "29 Sep 2026: forked 17 Jun 2017 — kept No. 1".
6. PUBLIC FORKS — branches other people made, each stamped with author "[author]" and divergence
   point, never with fake popularity numbers: "Keep No. 1 — Fultz (diverged 17 Jun 2017)";
   "Holiday kept (diverged Jun 2025)".
7. OTHER KINDS that may appear in results:
   - NATIVE TEXTBOOK — "BOW Economics · The Cap" — a course built on Boston's real books (the
     Track 101 lesson "The Window" EXISTS TODAY in BOW Economics Live).
   - MODEL — "Second-apron consequences · BOW model v0.3" (MODELED; runs on demand, has
     assumptions and a version).
   - CREATOR-BUILT SYSTEM — "Garden nights · arena economics · by [creator]" (unreviewed,
     community; must look different from official BOW systems).
   - LIVE EVENT — "[next preseason game · from the Reality feed]" (do not invent opponents/dates).

TRUTH-GRAMMAR RULES LEARNED IN WAVE 1 CRITIQUE (mandatory):
- Hatch means MODELED only. Never use hatch for a branch, a historian's interpretation, or an
  author's guess. A BRANCH is shown as a FRAME + its own ink + a stamp, never as a fill over the
  record; the record must stay fully readable beside or beneath it.
- Numbers authored for the prototype (no model actually ran) wear AUTHORED texture (outline) and say
  "illustrative, authored" — never MODELED texture.
- Don't write UNKNOWN where the stated rules could compute the answer; compute it.
- Actor models get their own mark (stippled GENERATED + "actor model"), never the solid
  "what a source says" swatch.
- Refusals name the rule that refused.
- A DOOR IS NAMED BY ITS QUESTION, NEVER BY ITS ANSWER. An enterable past moment is labelled with
  the situation a person in it faced ("17 Jun 2017 · Philadelphia calls about No. 1"), not with
  what happened next ("Boston trades No. 1"). The outcome is revealed only to observers who ask
  for it, or after the person in the seat acts (sealed hindsight).
- The unmodeled future is SEALED (dashed, "you find out by living it"), not hatched. Hatch on a
  future only when a named model with a version actually produced it.

Distinguishing the kinds: prefer the kind of TIME a system has (live clock / world calendar /
frozen date / run counter / divergence stamp) and its MATERIAL (solid / double-ruled / outlined /
hatched / stippled) over labels. Words on request.

## Second domains available for transfer tests
- Philadelphia, 16 Jul 1787 — the vote on equal state votes in the Senate: 5 ayes (CT, NJ, DE, MD,
  NC), 4 noes (PA, VA, SC, GA), Massachusetts divided (Gerry, Strong aye; King, Gorham no); New
  York absent; carried. A tie fails. Delegates knew only what had been said in the room so far —
  Madison's notes were published in 1840.
- Harrow Medical (fictional) — infusion-pump maker; single-source MCU supplier "Kaito
  Semiconductor" (fictional) has a fab fire at 06:10; 2,300 MCUs on hand ≈ 11 days at 210/day;
  five customer promises over eight weeks.
- Air network (for Search/Atlas): a regional airline, one aircraft rotation BOS→PHL→ORD→PHL→BOS,
  crew duty limits, passenger connections; a 40-minute weather hold at ORD propagates.
