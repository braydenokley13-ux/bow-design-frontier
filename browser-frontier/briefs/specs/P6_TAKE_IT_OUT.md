# P6 · TAKE IT OUT — radical Browser: navigate by intervention (Boston deep)

File: `prototypes/TakeItOut.html` (+ `.steps.json`). Read first: `briefs/00_PRIOR_ART.md`,
`briefs/PROTOTYPE_CONTRACT.md`, `prototypes/_shared/boston-fixture.js` (`world.record`,
`world.payrollStartYearTwo`, `world.taxLine`, `world.taxRule`, `moments`), and research
`research/H_RADICAL_INTERFACES.md` §0, §H1 and §3 "H1 mandatory builder states" (your main source).

## Exact design problem
A person's history inside a system is not a list to scroll but a row of ACTS they can lift out one
at a time while the present re-forms. What changes is what that act did. Authority is what you can
lift. Path dependence is what turns to dashes. Answer the classroom's success sentence — "Our
decision caused that?" — by experiment, not narration. This is also the cheapest falsifier of "new
medium": can someone learn by intervening on the past what they cannot learn by reading it?

## User
A newcomer with no basketball knowledge (the surfaces are sentences, dates, money and a score); the
operator of "Boston · Year Two"; a fan looking at Reality.

## System
The BOW World "Boston · Year Two · Week 9". Use `world.record` (8 acts: 2 RECORDED, 6 AUTHORED —
keep their kinds visible). Write ONE small deterministic reducer (AUTHORED, labelled "illustrative
engine, authored") that folds the record into the present: payroll (sums the record's payroll
deltas from `payrollStartYearTwo` → $222.8M), projected tax (World rule flat 1.5× over $200M →
$34.2M), cash, premium seats per night, and a Weeks 1–9 game record. Game results use per-event
random keys fixed per game (common random numbers: the same draw for the same game in every run),
so lifting an act changes only what that act reaches; the recorded Week 9 loss to Denver 112–115 is
RECORDED in the real record, and any recomputed result under a lift is AUTHORED output of the toy
engine (outline texture, never hatch). Acts with `needs` (Week 7, Week 8 need the Week 6 trade)
turn dashed when their need is lifted.

## Mandatory states
1. **Record at rest.** A strip of the 8 acts in plain sentences, in your ink (RECORDED vs AUTHORED
   visible), with the present at the right (payroll, tax, cash, premium seats, wins–losses). Reality's
   record ghosted beneath the strip; the divergence point "Year 0" marked at its left end. Prompt:
   "Hold an act to lift it out."
2. **Weighed.** "What counted": reorders acts by how many present facts each one reaches; tap a
   fact (e.g., projected tax) to order acts by their effect on it; bars COMPUTED; zero-effect acts
   kept, grey, "nothing changed" — a zero is a finding.
3. **Predict, then lift.** Tap the Week 6 trade; a dial asks "What will the tax be without it?";
   the person sets a prediction; hold (or press "Lift") and the act rises out of the strip while the
   present re-forms live (payroll $196.3M, tax $0 under the World rule, results recomputed with luck
   fixed); prediction and result sit on one dial.
4. **Dashes.** Week 7 and Week 8 turn dashed: "impossible without Week 6"; tapping one shows which
   lifted act it needed.
5. **Locked.** Try to lift a League ruling or another seat's act (include one: "League · approved
   the Week 6 trade", or Denver's Week 9 result): refused, naming whose act it is ("not your act —
   the League's") and offering "fork with their seat set" instead.
6. **Kept (the lift IS the fork).** "Keep this world": stamp "Your branch · Week 6 trade omitted ·
   cut with hindsight · by you"; a gap in the strip; play on one week; new acts append in branch ink.
7. **Two at once.** Lift Week 1 (minimum signing) and Week 4 (prices) together; if the pair differs
   from the sum of singles, the screen says "these matter only together" (compute it; if they don't
   interact, say "no interaction — the pair equals the sum").
8. **Compare.** Two needles per dial: the record's (white) and this world's (your ink). Only the
   lifted act's footprint differs.
9. **Put back.** The act snaps in; the state hash (a small deterministic hash of the folded state,
   shown as 4–6 hex chars) matches the record's again. After new acts, weights carry "then / now"
   marks.
10. **Reality.** Switch to "Boston Celtics · Reality" (fan): a strip of recorded moves from the
    fixture (June 2025 Holiday trade; Feb 2026 Simons trade). Lift the June 2025 Holiday trade: only
    RULES-DERIVED facts recompute (payroll against lines — show them as COMPUTED, simplified,
    labelled); the Feb 2026 Simons trade turns DASHED ("impossible without Jun 2025 — Simons arrived
    in that trade"); other clubs' later moves and all game results go UNKNOWN (dashed, never
    guessed). The refusal to lift an on-court outcome names the rule ("outcomes are not acts").
11. **Follow.** "Clamp" a weight: "Tell me when Year One's funding choice stops reaching the score" —
    it appears as a small clamp mark on the fact, with its condition in words.

## Art direction — "Composing stick"
Acts are physical slugs of type in a composing stick: set in a row, liftable, with a visible gap when
lifted. The present is a set of instrument dials with needles (not tiles). Cream paper, black ink,
one warm ink for your world. Fonts: e.g. "Old Standard TT" (acts) + "DM Mono" (numbers).

## Capability labels
REAL CURRENT: the Live World page folds one act log to one SHA-256 state (prototype-grade, not run
on a shared store). PROPOSED: lifting acts, weights by ablation, dashes by dependency, locked acts by
seat, keep-as-fork, clamps. SPECULATIVE FRONTIER: lifting on-court outcomes on Reality (not allowed
here). AI: lifting, replay and weights NO AI REQUIRED; a plain-words summary would be SMALL / CHEAP
MODEL; modeling other actors' responses FRONTIER MODEL OCCASIONAL (not used here).

## Prohibited
A what-if form of sliders on the present; a time scrubber (it moves time, not causes); an AI
paragraph instead of replay; ranking acts as good or bad ("counted", never "cost us"); reseeding luck
so every lift looks different; hatch on toy-engine output.

## Acceptance criteria
All 11 states in the steps file; luck provably fixed (the same act lifted twice gives the same
present); dashes appear for dependents; put-back restores the hash; harness clean at both viewports.
