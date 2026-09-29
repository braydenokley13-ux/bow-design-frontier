# SPEC — ENTER tournament (four challengers, basketball first)

The question: what perceptually changes when a person goes from OBSERVING a system to OCCUPYING A
ROLE inside it? ENTER must not be a CTA button. It is a medium-level transition that communicates
RESPONSIBILITY, not navigation. All four boards use the same situation so they can be compared:

SITUATION (from W2_BAR_AND_FIXTURES.md): Boston · Year Two (your BOW World), Week 9, the morning
after the 112–115 loss to Denver. Payroll ≈ $222.8M vs the World's $200M tax line (≈$34.2M
projected tax). The seat: General Manager (President of Basketball Operations). Open matters at
this moment (authored for the prototype, World facts): (1) Denver's GM has called about your
backup guard [name: "your backup guard"]; (2) roster must be at 15 or fewer before Week 10 games —
you're at 15 with a two-way call-up pending; (3) Jimmy Butler's agent wants a meeting about his
role in the fourth quarter; (4) the owner's note: "stay under the second apron by the deadline"
(World second apron $221.7M — you're ≈$1.1M over); (5) the analytics room has been unfunded since
Year One.

Each board: 1440×900, interactive; a clear OBSERVE state, the ENTER transition (animated, 1.5–4 s,
skippable), an OCCUPY state, and LEAVE (the reverse, which is also meaningful). Each board ends with
a one-line thesis in small type ("ENTER, in this model, means …"). The bottom-left COMMERCIAL LENS
line and bottom-right status line per W2_BAR_AND_FIXTURES.md.

------------------------------------------------------------------------------------------------
## E1 · THE NARROWING — "entering costs you omniscience; it pays you in agency"
File: EnterNarrowing.dc.html
OBSERVE: a league-wide observer view: all 30 teams as thin payroll bars against the tax/apron
lines (use Boston's real-looking World value and plausible authored values for the other 29 labelled
"World league · authored"), every team's reported rumours in a side list, and — because an
observer in BOW can open a World's records — Boston's private notes too. A counter: "You can see:
every public fact · every team's private notes (observer access)".
ENTER: the view NARROWS. Other teams' private notes collapse into dashed UNKNOWN boxes one by one
("Denver's internal board — you can't see this now"); rumours turn stippled ("unverified");
the 29 other bars fade to public-only; at the same time Boston's desk rises into the foreground:
the phone (three calls), your scouts' private reports (only yours), your authority ("you can
offer, accept, waive, call up; you cannot exceed the second apron without the owner").
The counter now reads "You can see: public facts · Boston's private notes. You gave up 29 teams'
private notes. You got the pen."
OCCUPY: the desk is usable (answer the Denver call → a single decision card appears; not a full
trade engine). LEAVE: the view widens again, but a line stays: "What you did while you were in the
seat is kept — attributed to you."
Look: a broadcast/scouting-department wall that becomes a desk: light concrete grey (#E9E8E4),
black type, one Celtics green used for YOUR seat only (#007A33), rumor stipple grey. Type: Barlow
Condensed (headlines) + Barlow. Status: DESIGN PROPOSAL.
COMMERCIAL LENS: "Hypothesis: observing is free and wide; occupying is the premium act — seats in
persistent Worlds are what people pay for."

------------------------------------------------------------------------------------------------
## E2 · THE HANDOVER — "entering is accepting responsibility for what's already in motion"
File: EnterHandover.dc.html
OBSERVE: you are looking at the front office from outside — the open matters (1–5 above) are
visible as items in motion (each with a deadline and a clock), owned by "the seat (vacant since
06:00 — the interim is Assistant GM [fictional])".
ENTER: a HANDOVER SHEET slides in, written by the outgoing occupant (the interim): each open matter
is a line with its deadline, its consequence if ignored (COMPUTED where possible: "If the roster is
at 16 at tip-off, the league refuses the lineup"; "If you stay over the second apron at the
deadline: you can't aggregate salaries in trades this season" — AUTHORED CBA rule in the World),
and a checkbox "I have read this". You must acknowledge each line (or explicitly "Hand back").
Then a SIGNATURE: type your initials in a field and press "Take the seat" — this is the ENTER act.
The signature is RECORDED with the time.
OCCUPY: the matters are now listed under "Yours" with running clocks; a strip shows "Responsible
since 09:14, Week 9". The interim becomes an advisor you can consult (a seat, not a chatbot).
LEAVE: you cannot just close the tab: "Leave the seat" asks you to hand over — writing a handover
sheet yourself (auto-drafted from your open matters, you edit the one-line notes), or "Vacate: open
matters revert to the owner" (recorded).
Look: an institutional document, crisp — white paper (#FFFFFF) on a warm grey desk (#DDD9D1), black
type, red only for deadlines (#B3261E). Type: IBM Plex Serif + IBM Plex Sans. Status: DESIGN
PROPOSAL.
COMMERCIAL LENS: "Hypothesis: handovers are the enterprise-grade feature — the same act lets a human
or an agent take a seat with accountability; organisations pay for accountable seats."

------------------------------------------------------------------------------------------------
## E3 · THE CLOCK STARTS — "observers can scrub; occupants have to wait"
File: EnterClock.dc.html
OBSERVE: a full timeline of the World season (Week 1 → Week 26) with a free SCRUBBER: you can drag
anywhere, including the future (the World's own projection, MODELED, hatched) and the past
(recorded weeks). Everything is available at once; nothing is at stake. Label: "Observer time:
free, reversible, weightless."
ENTER: the scrubber handle is taken from you — it snaps to NOW (Week 9, Tuesday 09:00), the future
half of the timeline seals (dashed, "sealed: you'll find out by living it"), the past becomes
read-only, and a single CLOCK starts ticking in the corner. Deadlines (Denver call expires 11:00;
roster decision before Wednesday's game) become countdowns. A line: "Occupant time: one direction,
one speed, and it doesn't wait."
OCCUPY: decisions have deadlines; if a countdown hits zero without an act, a RECORDED line appears:
"No decision by 11:00 — Denver's offer lapsed" (absence recorded as absence, not as a choice).
Provide a "×60 speed" toggle (prototype convenience) that is itself labelled AUTHORED.
LEAVE: the clock stops for you; the World's clock keeps running ("The World goes on without you;
you'll see what happened when you return").
Look: a sports-broadcast game clock language on light ground — white (#F8F8F6), black, shot-clock
amber (#E8A317 as fill only, black text on it), large tabular numerals. Type: Big Shoulders Text for
clocks + Work Sans for text. Status: DESIGN
PROPOSAL.
COMMERCIAL LENS: "Hypothesis: 'live-time' seats (Worlds that run while you're away) cost persistent
compute; this is where subscription value and marginal cost both live."

------------------------------------------------------------------------------------------------
## E4 · THE DESCENT — "entering is a change of altitude: from the city to your hands"
File: EnterDescent.dc.html
OBSERVE: altitude 1 — the city (a light skyline silhouette of Boston along the Charles, a pin on
the arena and the front-office building), with public facts floating at the altitude where they
are true (league standings, payroll vs lines).
ENTER: descend through four altitudes with a smooth scale/parallax transition (CSS transforms on
layered planes; this is 2.5D, not a 3D engine): CITY → BUILDING (floors as a section drawing: which
departments are lit/funded) → FLOOR (people at desks: coach, capologist, the empty analytics room)
→ DESK (first person: your hands' zone — phone with three calls, a folder, the owner's note, a pen).
At each altitude the available ACTIONS change (city: observe/follow; building: see who works here;
floor: talk to a person; desk: decide) and the available INFORMATION changes (altitude shows breadth;
the desk shows depth). A slim altitude gauge on the left shows where you are.
OCCUPY: at the desk, one decision is possible (answer Denver). LEAVE: ascend; the desk leaves a
small mark on the building ("GM's light on").
SIMPLER CHALLENGER (required by the founder's 3D rule): a toggle "Show as a list" collapses the four
altitudes into four indented sections of plain text with the same information and actions, so a
reviewer can judge whether the descent earns its cost.
Look: architectural section drawing + skyline, light — pale sky (#EEF2F4), building in plaster white
with black linework, people as simple silhouettes, desk objects drawn as top-down line drawings.
Type: Archivo + Archivo Narrow. Status: DESIGN PROPOSAL · the Boston building EXISTS TODAY as a 3D
slice in the BOW Worlds branch.
COMMERCIAL LENS: "Hypothesis: embodied entry sells premium Worlds (sports fans); it must beat the
plain list in comprehension or it's a cost with no return."

------------------------------------------------------------------------------------------------
## TRANSFER (built later, after critique picks the strongest two): the same two ENTER models applied
to (a) Philadelphia, 16 July 1787, as a Massachusetts delegate — the Narrowing removes Madison's
notes (published 1840), historians' interpretations and the outcome; the Clock seals the future and
starts the roll call — and (b) Harrow Medical's VP Procurement seat on the morning of the fire.
