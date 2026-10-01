# ENTER TOURNAMENT — six new ways to cross from observer to participant, against the incumbent

File: `prototypes/EnterTournament.html` (+ `.steps.json`). Read first: `briefs/00_PRIOR_ART.md`
(§2: the incumbent Handover, runner-up Clock Starts, killed Narrowing and Descent),
`briefs/PROTOTYPE_CONTRACT.md`, `prototypes/_shared/boston-fixture.js` (`cuts.deadline2026`,
`world`), and these research sections: C §2.1 (sit and sign, frost), D §C1 (the cut, hindsight
ledger), B §2.3 (the Offer), H §H5 (On Call) and §H4 (The Paper) and §H3 (The Kit, the gauge that
becomes a lever), F §2.9 (the Warrant).

## Exact design problem
ENTER is not "open the 3D view". It is the semantic transition OBSERVER → PARTICIPANT. Build a
tournament board where seven approaches (the incumbent + six challengers) each carry a person across
the SAME threshold into the SAME seat, so a critic can compare what each one changes. For every lane
make visible which of eight things change: IDENTITY · ROLE · INFORMATION · AUTHORITY ·
RESPONSIBILITY · TIME · PLACE · AVAILABLE ACTIONS — and what the person gives up.

## The shared seat (identical in every lane)
A fork of the recorded moment "Deadline week · 2 Feb 2026, before the first report · the tax bill
is the problem" (fixture `cuts.deadline2026.beforeFirstReport`). Seat: Boston's decision-maker at
that cut. Before ENTER the person is an observer who can also open SINCE (what happened later —
fixture `sealed`). After ENTER: the desk knows only what was knowable then; three matters are open
(authored, illustrative: the owner wants a plan for the ≈$39.5M projected tax by Thursday; a bench
player's agent asks about his role; a club has called about a trade, identity withheld until you
answer); one act is available at the end of each lane: "Offer a bench salary plus a second-round
pick to shed tax" (authored, illustrative — never the real Simons move). Acts in this fork are
recorded in the fork, never in Reality.

## The seven lanes (each a complete mini-flow of 3–6 steps ending at "first act available")
- **E0 · THE HANDOVER (incumbent).** Sign for named open matters line by line (take / hand back);
  initials; your clock starts beside the World's; NO ACT recorded if a matter lapses; leaving is a
  handover or vacate.
- **E1 · SIT, THEN SIGN (posture).** A 2.5D room is fine (no WebGL needed): stand at the rail
  (observer), sit at the desk (free rehearsal: a blotter previews what you'll give up and get), sign
  with the pen: panes onto what the seat can't read FROST, the outside view is covered, the tray
  fills with folders named by question. Standing up restores nothing; the ledger's "gave up" list
  equals the frosted list.
- **E2 · THE SEAL (surrender hindsight).** The observer's view includes a SINCE drawer. To take the
  seat you seal it: the drawer closes and locks, NOT-YET turns dashed. If the person opened SINCE
  before entering, entry is still allowed but the seat is stamped "entered with hindsight through 29
  Sep 2026" and the stamp rides on every act and fork, visible to anyone who sees them.
- **E3 · THE OFFER (authority is given, redeemed in person).** The person cannot self-appoint. An
  Offer arrives from someone (the teacher "Mr. Levi" or the owner — fictional): "Offer · the Boston
  seat at 2 Feb 2026 · your own copy · until Friday". Redeeming opens a BOW-drawn threshold: who
  offers, which seat, what you'll see, what you give up, what stays private; sign; the seat binds to
  this device; a hallway copy of the phrase on another device gets "Not for you".
- **E4 · THE RING (the system calls you).** No navigation: the phone rings — "2 Feb 2026 · the
  owner: we need a tax plan by Thursday 3 p.m. If nobody acts: the ≈$39.5M bill stands." A 20-second
  brief (the gauge, the deadline, the default). Picking up is entering for the length of the call;
  hanging up is leaving; while away, a standing order you wrote answers (stamped as such).
- **E5 · TAKE A FACE (the paper).** The seat is found as an unheld face of a two-sided paper: "Boston
  owes the League luxury tax on salary above the line — projected ≈$39.5M — counted after the last
  game. If nobody acts: pay it." The League's face is held; Boston's face is open. Taking Boston's
  face narrows knowledge to that face (the League's face turns closed), and the other papers where
  Boston is a party land in your stack with their own clocks.
- **E6 · THE LEVER (affordance follows seat).** As an observer the tax gauge only READS ("≈$39.5M
  projected · $X above the line · flips if…"). Entering does not change the page: it changes the
  INSTRUMENT — the gauge becomes a lever; dragging it drafts the act that would do it; release and
  nothing forks until you keep it. Other instruments (probe, clock) change the same way.

## Common panel per lane (the scoring surface)
Beside each lane, after completion, a strip with eight marks (IDENTITY · ROLE · INFORMATION ·
AUTHORITY · RESPONSIBILITY · TIME · PLACE · ACTIONS): filled if this approach visibly changed it,
outlined if partly, empty if not — computed from what the lane actually did (not hand-set labels).
Plus: "You gave up: …", "Leaving is: …", "An AI agent would enter by: …" (e.g., a warrant the owner
signs; E4's standing orders), "Survives voice? spatial? screen reader?", "In a chemistry lab this is:
…", "In a supply chain this is: …" (one line each, authored).
A top-level comparison view shows all seven strips aligned (an exhibit table, not KPI tiles).

## Art direction — "Exhibits"
A light, calm tournament frame (like evidence exhibits A–G on a table), each lane drawn in its own
material: E0 paper sheet, E1 room section, E2 sealed drawer, E3 an envelope and a threshold, E4 a
phone and a call card, E5 a two-faced paper, E6 an instrument dial. Fonts: e.g. "Fraunces" +
"IBM Plex Sans".

## Capability labels
REAL CURRENT: seats by lease and device-bound rejoin (BOW Economics Live; Live World page prototype),
the dated fact store. PROPOSED: every lane's mechanism. AI: all lanes NO AI REQUIRED; an agent
entering under a warrant would be FRONTIER MODEL OCCASIONAL / CONTINUOUS on the agent's side, NO AI on
BOW's side.

## Prohibited
ENTER as a camera move into 3D; "portal" transitions; avatars; EULA-style checkbox walls; KPI tiles
for the scoring strip; any lane revealing what happened after 2 Feb 2026 without the seal logic.

## Acceptance criteria
Seven complete lanes, each playable by keyboard from observer to first act; the comparison view; the
eight-mark strips computed from lane state; the steps file screenshots every lane before/after ENTER
and the comparison view; harness clean at both viewports.
