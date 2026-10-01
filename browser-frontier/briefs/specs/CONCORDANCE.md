# CONCORDANCE — the representation router and its proof of sameness

File: `prototypes/Concordance.html` (+ `.steps.json`). Read first: `briefs/00_PRIOR_ART.md`,
`briefs/PROTOTYPE_CONTRACT.md`, `prototypes/_shared/boston-fixture.js` (`world`, `world.tradeFile`,
`world.hardLimit`, `domains.supply`), and research `research/G_REPRESENTATION_ROUTER.md` (your main
source: §2.0 shared grammar, R1 Plan, R2 Concordance, R3 Cover, R4 Downshift, R5 Compile, and §3 P1 +
P2). Look at `evidence/boston-spatial/` for the real Room.

## Exact design problem
A Browser that chooses representations from system, question, seat, device, accessibility need,
scale and task — while the person keeps agency (swap, pin, pair) and can KNOW that every view is the
same canonical system: one act lands in every open view in the same frame with the same act number
and the same truth tokens; a fact can be followed across views; a view declares what it cannot show;
a view that stops matching the record fails closed. And a system nobody drew arrives usable,
honest about being compiled.

## User
A newcomer on a phone; the operator at a desktop; a screen-reader user (declared once, never
detected); a Chromebook student; a voice user.

## System
The BOW World "Boston · Year Two", re-enacting Week 6, act 41: the Golden State trade file on the
desk is UNSIGNED; payroll $196.3M (fixture `world.tradeFile.payrollBefore`), $3.7M under the World's
$200M line. Plus Harrow Medical (fictional; `domains.supply`) as a system with no hand-built view.

## Views (all read ONE state and ONE act log; none keeps facts of its own)
ROOM (a small three.js desk + board; or 2.5D if you must — say which) · TIMELINE (payroll by week
against the lines) · TABLE (roster and money) · DIRECT (plain text: open matters as ordered acts,
facts with lead words "Recorded:", "Computed:", "Authored World rule:", refusals, spatial relations as
words) · VOICE (a transcript of what would be spoken). Each view carries its frame: address, act
number + short state hash (compute a real hash of the folded state), origin (hand-built · kit ·
compiled).

## Mandatory states
1. **Plan for a newcomer.** The router issues a lead view + a companion + one sentence of why ("The
   desk shows what kind of thing this is; it can't show exact amounts — the Table can."). Direct is
   always present (collapsed to one line: "3 matters open").
2. **Plan for an operator and for a screen-reader user.** Operator: Timeline + Table lead, Direct
   open, Room one key away. Screen-reader: at the first control, "Use Direct for screen readers and
   keyboard — remember it" (declared, never detected); Direct leads with relations in words ("Beyond
   the glass, Analytics and Scouting are dark: not funded").
3. **Override.** "Why not the Timeline?" opens the Plan's reasons; swap, pin (this device), pair;
   the address's view segment rewrites; the router stays quiet until the next moment.
4. **The act lands everywhere.** Sign the trade in ANY view: the kernel appends act 42 and every open
   view redraws from state 42 in the same frame — Room: SIGNED stamp, Butler's bar crosses the tax
   marker; Timeline: the line steps over $200.0M with a tick numbered 42; Table: rows change; Direct
   announces (aria-live) "Act 42. Recorded: trade signed. Computed: payroll $222.8M, $22.8M over.
   Authored World rule: projected tax $34.2M." Same act number, same hash, same tokens everywhere.
5. **Follow a fact across views.** Touch "$22.8M over" in the Timeline: the board lights in the Room,
   Direct takes focus, a tag reads "also in: board · Direct · Table".
6. **"Do these agree?"** A button: "Room and Timeline agree on 14 facts. Only Timeline: payroll by
   week (3). Only Room: the sign on Analytics' door (2). Contradictions: none." (compute from each
   view's ShownSet — the list of (path, token, text) it renders — diffed against Direct.)
7. **Covers.** Each view declares what it cannot show, with a physical stand-in where the fact would
   be: a frosted rule plate in the Room ("Exact rule text isn't shown here — open Direct"); "People:
   not recorded" on funded rooms; a dashed margin band on the Timeline ("Not on this axis: who,
   where"); Direct: "Proportion isn't drawn here — Timeline". Tapping a cover offers the complementary
   view as a pair.
8. **Refusal parity.** A second, illustrative file that would push payroll past the World's $250M
   hard limit is refused identically in Room (stamped paper), Timeline (annotation), Direct
   (announcement), Voice — same rule name and text.
9. **Fail closed.** A builder toggle "Inject a stale binding": the Timeline's bound marks become a
   cover — "This view stopped matching the record at act 42" — Direct takes over; "Do these agree?"
   names the mismatch.
10. **Downshift.** The same address on: desktop Room 3D → Chromebook (2.5D or lite) → phone (Table +
    Direct) → voice. A strip says what CARRIED (open matters, every act, refusals with rule names,
    tokens, act 42) and what was SHED (camera, spatial gestalt). Authority and truth never shed.
11. **Compile arrives.** Open Harrow Medical: Direct and a Ledger (a Marey-style shipment chart with
    the fab fire as a vertical cut + a commitments table) appear at once; a facility Room compiles
    lazily with a COMPILED stipple edge and "What the compiler decided" (stock → shelves, lead time →
    distance, single source → one thread, the supplier's fab → a covered building "no view inside";
    no people). One mapping is editable.

## Art direction — "Signal box"
Like a railway interlocking room: views are instruments on one frame, wired to one ledger; act
numbers are the lever numbers; receipts like signal tickets. Light ground, black and one signal red,
brass. Fonts: e.g. "IBM Plex Sans Condensed" + "IBM Plex Mono".

## Capability labels
REAL CURRENT: the lockstep act-log fold to one SHA-256 (Live World page, prototype-grade); the
Boston Room's state-bound surfaces and the arena's "covered means not played yet" (unmerged);
Harbor's 2.5D rooms that change with saved state (unmerged). PROPOSED: the Plan, ShownSets and
Concordance check, covers, refusal parity, downshift parity, the deterministic compile. SPECULATIVE:
compiling arbitrary untyped systems. AI: router, concordance, covers, downshift, compile NO AI
REQUIRED; classifying a typed ask SMALL / CHEAP MODEL; on-device voice SMALL; authoring a kit
FRONTIER MODEL OCCASIONAL.

## Prohibited
A "View: 3D | Timeline | Table" dropdown as the whole idea; a decorative "views agree" badge; faking
sameness with optimistic UI; KPI tiles for receipts; responsive CSS passed off as a downshift;
polishing the compiled room until it looks hand-built.

## Acceptance criteria
All 11 states in the steps file; act 42 visibly lands in every open view in one frame (screenshot);
the agreement check is computed, not hard-coded (a stale-binding injection must make it fail); harness
clean at both viewports.
