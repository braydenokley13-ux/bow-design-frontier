# CRITIC 2: platform and scale

Lens: could this exist at the founder's scale (billions of systems, live Reality, nested systems,
humans and agents in seats, forks that last years, third-party runtimes, external invocation), and
what would it cost?

Method (Phase 1, before reading any spec or frontier doc): I looked at the builders' screenshots
(1440 and 1280), then played every board myself with my own step files in
`harness/shots/critic2-<Name>/` and `critic2-<Name>-b/`. I tried keyboard-only paths, off-script
questions, the wrong action from the wrong seat, both layers, and 1024×600 and 390×844 viewports.
The builders only ran 1440 and 1280, so their "overflowX false" says nothing about small screens. I
also read the source wherever a claim of computation needed checking. I tested both SHA-256
implementations (Concordance and Parting) against Node's crypto on four inputs, and both are
correct. With a separate probe I measured Institution at the maquette on software GL: 31 draw calls,
4,364 triangles, about 1.1 MB transferred, 10 MB JS heap, rendering only when something changes.

Three findings apply to every board, so I state them once here:
- **No board writes its state to the URL.** Every board draws an "address" line, but none reads or
  writes `location`, none has a copy-link action, and reloading returns every board to its start.
  The nine boards use at least five different address grammars.
- **One World, many truths.** "Boston · Year Two" shows a different cash figure on different boards:
  $20.0M in Institution, $4.08M in TakeItOut, $4.1M in Jurisdiction. Act numbers disagree too. In
  Institution, act 40 is the trade and act 42 is "Offered Butler's camp an extension meeting". In
  Concordance, act 42 is the trade being signed. So an address such as `…· act 42` already points to
  different acts depending on which board opens it.
- **No model runs anywhere.** Every AI function is an authored stand-in, and switching AI off breaks
  nothing, which is the right posture. The open question is whether each label prices the call that
  a real build would need.

---

## 1. Per board

### Institution
**What it actually is:** a three.js warehouse holding the state of "Boston · Year Two". You go from
maquette to door to rail to desk, sign to take the seat, fund a room, and lift a door's cover to
branch. Every fixture is mirrored in a "Schedule" table, opened with the S key, with addresses such
as `boston/ops/roster[]`.
**What it reduces to:** a point-and-click 3D showroom with a spreadsheet twin. That is the "3D shell"
risk; the twin is what rescues it.
**Moments no website has:** as an observer I pressed "Fund Analytics · $2.5M" in the Schedule:
"REFUSED BY RULE R-SEAT-4 · Only the seat holder writes to the World's books." The compare view
shows "$196.3M = 222.8 − (56.8 − 30.3)", and the ledger check says "(asserted)".
- REPRESENTATION ECONOMICS: bindings and poses are hand-placed, so #2 costs about as much as #1. #1,000 needs a kit; a billion is impossible: **WEAK**
- DISCOVERY AT SCALE: walking to a maquette needs a curated city at scale: **FAILS**
- SCALE MECHANISM: the fixture addresses (`boston/ops/v4.departments[0]`) are a real seed, but nothing compiles a room from them: **WEAK**
- AI COST HONESTY: "NO AI REQUIRED" is correct, and nothing breaks with AI off: **STRONG**
- ADDRESSING & PORTABILITY: `…· seat: gm (you) · desk` is not the URL, and it names the seat without saying what a recipient gets: **WEAK**
- EXTERNAL INVOCATION: nothing outside can open the desk: **FAILS**
- ACCESSIBILITY: the Schedule is a complete equivalent table; focus is visible, S and Esc work, it renders only on change, and it stays readable at 390px: **STRONG**
- CAPABILITY-LABEL HONESTY: "REAL … UNMERGED BRANCH, NO HUMAN VERDICT" stretches REAL: **OK**
- TRUTH / RIGHTS RISK: the "$20.0M (illustrative)" cash contradicts sibling boards, and the act numbering conflicts: **WEAK**

**Biggest failure:** the building is the index, and every new institution is a new build.
**Test with real people:** give a non-builder the same fixture schema and time how long they take to
stand up Denver's building.
**VERDICT: COMBINE**, as the hand-built Room view inside Concordance. As the Browser's navigation
model: KILL.
**Repairs:** (1) Make the Schedule address the URL, opening both row and pose. (2) Bind the room to
the shared act log and run Concordance's agreement check on it. (3) Fix the plaque wall: the "What's
real?" tags overlap and clip, and a diagonal shadow blotch covers the wall.

### Cut
**What it actually is:** an instrument for standing at a moment: a Reality panel with two payroll
numbers, a rail of doors named by their questions, and cuts in four planes (books, desk, not yet, a
closed "since"). A Council gates Keep, and a seam grades the branch's assumptions as Reality arrives.
**What it reduces to:** a carefully typeset scenario explainer with a branching form.
**Moments no website has:** "I already know how this goes" adds "Hindsight · self-declared" to the
address, and the mark stays on the branch. The seam reads: "PULLED diverged … Reality did something
your branch held fixed. You did not cause it." A cut on 5 Feb warns that "This cut knows it."
- REPRESENTATION ECONOMICS: each cut is curated by hand; the page says "no cut is authored for these" on four of five doors: **WEAK**
- DISCOVERY AT SCALE: the doors are per system, and question mining is "FRONTIER MODEL OCCASIONAL, human-reviewed": **WEAK**
- SCALE MECHANISM: "the latest state not after 2 Feb" is a real bitemporal query; "what the desk could know" is not: **OK**
- AI COST HONESTY: no model per click, and the cost is priced per moment: **STRONG**
- ADDRESSING & PORTABILITY: the best address grammar in the set (`cut 2 Feb 2026 · branch b1 · seat Boston (you) · pinned`), but it is not the URL: **OK**
- EXTERNAL INVOCATION: none: **FAILS**
- ACCESSIBILITY: focus is visible and aria names are set. At 390px the page overflows sideways: **OK**
- CAPABILITY-LABEL HONESTY: a ticking "14:03:05" implies liveness; only the footer admits "no live Reality feed exists": **OK**
- TRUTH / RIGHTS RISK: "over the line by ≈ $18.3M (implied)" is back-solved from the reported $39.5M through an authored first-time-payer table (`RATES=[1.5,1.75,2.5,…]`). If Boston was a repeat taxpayer [verify], it is wrong, yet it wears the computed tone: **WEAK**

**Biggest failure:** the time-bound knowledge boundary that makes a cut honest is curated by hand, per moment.
**Test with real people:** time a reviewer building one more cut (17 Jun 2017) end to end.
**VERDICT: KEEP** it as the time grammar, and COMBINE it with Parting's seam.
**Repairs:** (1) Show deadline payroll as UNKNOWN rather than inverting the tax. (2) Put the address
and hindsight flag in the URL. (3) Make "on the desk" a query over a source index dated by knowledge time.

### Jurisdiction
**What it actually is:** a registry counter. Three preset questions place you on a ledger pinned at
Boston's payroll, with hinges out to other sheets (PEERS, RUN BY, BOUND BY…). A form turns a deal
into lines, each a "kind of yes" held by a different seat on its own clock.
**What it reduces to:** a multi-party e-signature workflow with a rules check. That is also why it is
plausible.
**Moments no website has:** "Blocked on Denver · WILL-yes · … What you can change: what you ask
(RE-FORM), never their answer." At Denver's desk: "you can see: the paper you sent, nothing else".
"Struck: no no-trade clause applies … An absent line is information." "Media never says yes; it
learns."
- REPRESENTATION ECONOMICS: forms are compiled from typed kinds of yes, so a new deal costs data rather than design: **STRONG**
- DISCOVERY AT SCALE: a regex over three questions; "Who owns the Knicks?", "Why did Boston trade Jrue Holiday?" and "asdf qwerty" were all refused: **WEAK**
- SCALE MECHANISM: jurisdictions with their own ground, seats and clocks, composed by signed lines with no god view, as real interorganizational protocols are: **STRONG**
- AI COST HONESTY: "WILL-yes played by a model: SMALL / CHEAP; an AI holding a seat: FRONTIER OCCASIONAL", and Denver "modeled ABOUT Denver, not by them … nothing ran": **STRONG**
- ADDRESSING & PORTABILITY: `…· seat GM · form1`. Form IDs are local and the address is not the URL: **WEAK**
- EXTERNAL INVOCATION: a line is exactly what an outside party would sign, but nothing is exposed: **OK**
- ACCESSIBILITY: visible focus; rotated text strips; clipped at 390px: **OK**
- CAPABILITY-LABEL HONESTY: "RULE-yes uses the CBA rules engine (REAL)" reads as if the engine ran here. The dry run is actually a hand-coded apron check: **OK**
- TRUTH / RIGHTS RISK: real aprons on an authored World payroll, disclosed but misleading: **OK**

**Biggest failure:** discovery is the front door, and the front door is a regex.
**Test with real people:** Boston, Denver and a League reviewer in three browsers complete one trade;
ask each what the others could see.
**VERDICT: KEEP**. This is the protocol layer. COMBINE it with Guest and Concordance.
**Repairs:** (1) Make the form a shared-store object with per-seat signatures. (2) Send unknown
questions to Bench's Want. (3) Fix clipping and rotated text.

### Guest
**What it actually is:** ten simulated host surfaces (assistant, newspaper, text, voice, offer, ring
and more). BOW appears as frames inside other apps and becomes the full Browser only at thresholds.
**What it reduces to:** embeds, capability links, notifications and a models-off table: familiar
web plumbing, arranged with rare discipline.
**Moments no website has:** "'…past the tax line…' DOES NOT MATCH THE RECORD · True of cap payroll.
Not true of tax salary". "It can copy the words, not the frame." "The message holds a phrase, not
authority." "Not for you. This reads the same whether the seat is held by someone else, never
existed, or has ended."
- REPRESENTATION ECONOMICS: cards are templates over typed claims; near-zero marginal cost: **STRONG**
- DISCOVERY AT SCALE: it rides other surfaces' traffic, so it alone grows with the web (adoption is labelled SPECULATIVE): **STRONG**
- SCALE MECHANISM: `resolve("Boston tax line") → boston.reality`, closed text c1–c4 and a claim-set hash. But `verify(sentence) → mismatch` is hard-coded: **OK**
- AI COST HONESTY: "NO AI REQUIRED · the assistant pays its own tokens" holds only if hosts send structured claims; checking a free sentence costs a model call per sentence. The article marks never say who placed them. The Floor table is the most honest cost artifact in the set: **OK**
- ADDRESSING & PORTABILITY: separating carrier from authority is excellent. But "identical hash d749a5dc = d749a5dc" hashes the zero-argument `notForYou()` twice, a tautology, and the claim hash is 32-bit FNV: **OK**
- EXTERNAL INVOCATION: the whole board, every host mocked: **STRONG**
- ACCESSIBILITY: labelled tabs, visible focus; at 390px transcript, seam and record pile on each other: **FAILS** on phone, its own home ground
- CAPABILITY-LABEL HONESTY: "SPECULATIVE FRONTIER · ASSISTANTS HONOURING THE CARD AT SCALE" and "no BOW server does": **STRONG**
- TRUTH / RIGHTS RISK: fixture facts in a fictional paper; $12M is "No record … the Ledger's own projection": **STRONG**

**Biggest failure:** enforcement. BOW does not control a host's pixels, and the only defence shown is
visual.
**Test with real people:** feed c1–c4 to three real assistants; count faithful quotes vs paraphrases.
**VERDICT: KEEP** as the spine for external invocation. COMBINE with Jurisdiction and Concordance.
**Repairs:** (1) Sign claims (IDs plus state hash) so readers can verify without trusting the frame.
(2) Fix the phone layout. (3) Require structured claims, or label sentence parsing SMALL MODEL.

### Bench
**What it actually is:** a question sheet. Ask restates your question as a claim and assembles a
system from typed parts (an airline rotation as a Marey chart), which you can push, seat, fork,
review and discard to a tombstone. With no system, you get "No system for this" and can leave a Want.
**What it reduces to:** a modelling notebook with provenance, a review queue, and a feature-request
box.
**Moments no website has:** "BOW wrote no answer. A plausible paragraph is easy to generate, and
nobody would have checked it." A link discarded by its author still resolves, to a tombstone that
keeps "the list of 7 assumptions".
- REPRESENTATION ECONOMICS: a second system on the same parts is cheap. Each new domain needs parts, and the open-world compile is "FRONTIER MODEL CONTINUOUS (minutes)": **OK**
- DISCOVERY AT SCALE: "Why is Boston so close to the tax line?", which Jurisdiction answers, got "No system for this. No anchor found." "late" became a confident airline claim. Every Want, rent and Red Line included, is "Filed under … North Station" (hard-coded): **WEAK**
- SCALE MECHANISM: a registry of reviewed parts plus a review ladder where dissent stays on the knot. Plausible, but it depends on curators: **OK**
- AI COST HONESTY: labelled per region, and the regex is called "an authored stand-in for a small model": **STRONG**
- ADDRESSING & PORTABILITY: tombstones mean links never break, which is the right idea, but there is no URL: **OK**
- EXTERNAL INVOCATION: "Embed in a Moment" is text only: **WEAK**
- ACCESSIBILITY: sheets stay disabled until reached. At 390px the record pane covers the sheet: **WEAK**
- CAPABILITY-LABEL HONESTY: "REAL CURRENT PRODUCT CAPABILITY: none of the airline or semiconductor machinery exists": **STRONG**
- TRUTH / RIGHTS RISK: sources are marked "read from a search summary (page not opened)": **OK**

**Biggest failure:** its resolver cannot find the one system BOW actually has. Each board's discovery
is its own island.
**Test with real people:** 20 strangers' questions, scored right system / honest "no system" / wrong landing.
**VERDICT: PUSH.** Want, tombstone and the review ladder are platform primitives.
**Repairs:** (1) Use one registry across boards. (2) Ask a question back when the reading is weak.
(3) File each Want under the place the question names.

### TakeItOut
**What it actually is:** a strip of the World's acts. Lift one and the present refolds with luck
fixed per game, dependants dash, and putting it back restores the record hash. A Reality mode lifts
real acts with a salary stand-in and refuses to lift outcomes.
**What it reduces to:** a scenario manager over an event log. The fixed luck per game is the
non-trivial part.
**Moments no website has:** "Present hash 7d4d2e = the record's. The world is the record again."
"Run it again: Same present: aaa18b both times." "…Simons to Chicago … impossible without Jun 2025
Holiday trade". "2025–26 results UNKNOWN — results are not derived from rules, so they are not
guessed."
- REPRESENTATION ECONOMICS: a generic strip and dials over any act log that has deltas and dependencies: **STRONG** (Worlds)
- DISCOVERY AT SCALE: none, and it is not this board's job: **FAILS**
- SCALE MECHANISM: event sourcing, replay, and luck fixed per game (common random numbers). Real, O(acts) per lift. In Reality the per-act deltas do not exist: **STRONG** / **FAILS** (Reality)
- AI COST HONESTY: "modelling other clubs' replies would be FRONTIER MODEL OCCASIONAL": **STRONG**
- ADDRESSING & PORTABILITY: `record −w6` is a compact, shareable counterfactual ID, but not the URL: **OK**
- EXTERNAL INVOCATION: none: **WEAK**
- ACCESSIBILITY: Tab and Enter lift an act, and a click works instead of the hold. At 390px the strip collapses into overlapping vertical text, and at 1024×600 the footer overlaps: **WEAK**
- CAPABILITY-LABEL HONESTY: the hash is honestly "a small stand-in" (24 bits). But in Reality mode an "illustrative stand-in" slider (−$3.0M) produces results labelled COMPUTED: "$3.3M over", "the big MLE ($15.044M) stays open": **WEAK**
- TRUTH / RIGHTS RISK: invented World game scores against real clubs, labelled "toy engine": **OK**

**Biggest failure:** that label leak. As soon as you lift a Reality act, the stand-in inputs flow
into cap conclusions that look computed.
**Test with real people:** after the Holiday lift, ask five people "did Boston's MLE stay open?"
**VERDICT: KEEP** as the attribution instrument. COMBINE with Cut and Concordance.
**Repairs:** (1) Give each result the kind of its weakest input. (2) Use the Live World SHA-256
fold. (3) Fix the phone layout and the overlap at 1024×600.

### Parting
**What it actually is:** a sealed door; after you commit, dot piles show where eleven other pairs'
worlds went, and "Where they part" finds where two diverge. A Forks view holds public lineages,
agents under warrants, Reality arriving, and a League lockfile.
**What it reduces to:** a class results reveal combined with a git branch graph and a dependency
lockfile.
**Moments no website has:** "Adopt Sol & Bea's value for one assumption and re-run." "REFUSED · this
address is not closed · RULE · an address is well-formed only when closed". "Seal: model [model id]
· version [x] — a slot; no model ran here."
- REPRESENTATION ECONOMICS: sheets are generic over any template with numeric state: **STRONG**
- DISCOVERY AT SCALE: doors are "ordered by how far worlds spread at a door, never by how many came", so ranking improves as forks accumulate. It needs a shared schema: **STRONG**
- SCALE MECHANISM: a fork is a closed lockfile (`29 clubs := Reality (pinned) · read-only`), and Reality replays against declared assumptions: package-manager semantics. The cost: every real event needs authored preconditions: **STRONG**
- AI COST HONESTY: the other worlds are labelled "scripted (GENERATED)", but the source shows a hand-written `PAIRS` array. They are AUTHORED: **WEAK**
- ADDRESSING & PORTABILITY: the SHA-256 is real but covers navigation ("You — Went to Forks"), so it hashes the session, not the state: **WEAK**
- EXTERNAL INVOCATION: none: **WEAK**
- ACCESSIBILITY: Tab and Space choose a move. At 390px the page overflows sideways and header buttons are cut off: **OK**
- CAPABILITY-LABEL HONESTY: "no popularity number is drawn", yet a dot pile is a count. At a million forks it is a popularity histogram: **WEAK**
- TRUTH / RIGHTS RISK: a public lineage invents events for a real player ("Extension talks with Fultz's camp", "Traded Fultz to a rival"). At scale, public forks become user-written stories about real people: **WEAK**

**Biggest failure:** the piles make herding visible, and the hash covers navigation.
**Test with real people:** two classes play the door, and the second class sees the first class's
piles. Measure whether choices drift toward the pile (herding).
**VERDICT: KEEP** the lockfile and the Reality-arrives seam. Park the piles beyond class size.
**Repairs:** (1) Hash canonical acts only. (2) Relabel the scripted worlds AUTHORED. (3) Make the
closed lockfile both the fork format and the URL.

### EnterTournament
**What it actually is:** a comparison bench for seven ways to cross from observer to seat at one
moment. Each way is a four-step lane with an eight-change strip computed from lane state, and a
matrix compares all seven.
**What it reduces to:** a design-review instrument, not a product surface.
**Moments no website has:** "Observers cannot take this seat themselves: the seat opens only to
someone an Offer was made to." "The page does not change. The instrument does". "Stand up (restores
nothing)."
- REPRESENTATION ECONOMICS: each lane is built by hand: **WEAK**
- DISCOVERY AT SCALE: not applicable: **FAILS**
- SCALE MECHANISM: E3 Offer works as a capability token. E4 Ring plus standing orders is delegation. E6 Lever is the cheapest. The matrix row "An AI agent would enter by" (warrants with limits and an expiry) is the most useful platform text here: **OK**
- AI COST HONESTY: "FRONTIER … on the agent's side · NO AI REQUIRED on BOW's side": **STRONG**
- ADDRESSING & PORTABILITY: none: **WEAK**
- EXTERNAL INVOCATION: E3 and E4 imply outside carriers: **OK**
- ACCESSIBILITY: focus is visible and the dial has an aria label. At 390px the side panel covers the lane: **OK**
- CAPABILITY-LABEL HONESTY: the "Survives voice? spatial? screen reader?" column holds authored claims ("Screen reader: yes, each line is a button") placed beside a strip marked "COMPUTED FROM WHAT THE LANE ACTUALLY DID". Nothing was tested: **WEAK**
- TRUTH / RIGHTS RISK: "[verify: first report of ≈$39.5M]" appears against a cut dated before the report: **STRONG**

**Biggest failure:** seven entry ceremonies means seven things to learn. A platform needs one entry
protocol whose carriers can be swapped.
**Test with real people:** after entering, each person answers "what can you do now, what do you owe"
and is scored.
**VERDICT: PARK** the board. Harvest E3 and E6 into the protocol.
**Repairs:** (1) Test the "Survives" column or label it AUTHORED. (2) Fold the lanes into a single
grant → redeem → lease protocol. (3) Fix the phone layout.

### Concordance
**What it actually is:** a signal box. One ledger is drawn at once by a hand-built 3D Room, kit
Table and Timeline, compiled Voice and Ledger, and a text view, "Direct". Each view states what it
"CANNOT SHOW", "Do these agree?" checks every view against the record, a stale view fails closed, and
Harrow gets a Room compiled from its schema.
**What it reduces to:** a model-view architecture made visible. Here that is a compliment.
**Moments no website has:** "This view stopped matching the record at act 42 … It is not drawing
numbers it cannot check. Direct has the record." "…agree on 16 facts … it can't show the pixels are
right." "people → none: no presence truth exists."
- REPRESENTATION ECONOMICS: the only board that states tiers in the product itself: hand-built, kit, compiled (schema 1cad8d): **STRONG**
- DISCOVERY AT SCALE: routes views, not systems: **WEAK**
- SCALE MECHANISM: views register `{path, token, text}` and `mismatches()` checks each against the record; I read the code, it is real: **STRONG**
- AI COST HONESTY: "NO AI REQUIRED · a small model may propose types": **STRONG**
- ADDRESSING & PORTABILITY: the view is part of the address. But "What if…" always forks at act 41, even when the record is at act 42: **OK**
- EXTERNAL INVOCATION: Voice and Phone are simulated frames: **OK**
- ACCESSIBILITY: the first Tab stop is "Use Direct for screen readers and keyboard — remember it", the best in the set. At a real 390px the header wraps a word per line; the "Phone" mode is a picture of a phone: **OK**
- CAPABILITY-LABEL HONESTY: the "What's real?" tags overlap the top-right buttons (a visual bug). The labels themselves are good: **STRONG**
- TRUTH / RIGHTS RISK: the Denver figure is labelled "illustrative": **STRONG**

**Biggest failure:** it checks one page's in-memory ledger. There is no second client.
**Test with real people:** a Chromebook and a phone share one log; inject a stale view. Does the user
notice and recover through Direct?
**VERDICT: KEEP**. This is the platform architecture. COMBINE it with Institution as the Room, with
Guest as host views, and with Cut and TakeItOut as the Timeline.
**Repairs:** (1) Give phones a real responsive layout. (2) Fork from the current act. (3) Run the
check across two clients on the Live World fold, and fix the overlapping tags.

---

## 2. Across boards

**(a) The runtime that must exist first, smallest first.**
1. **An address written to the URL**, with one grammar (system · moment · branch · seat · view), and
   Guest's rule that an address never carries authority.
2. **One canonical act log per World**, with one numbering and a SHA-256 fold over canonical acts
   only. The seed exists in the Live World page. This would end act 42 meaning two different acts,
   and Parting's hash covering navigation.
3. **Kind propagation in the fact store**, so a result gets the kind of its weakest input. The store
   exists. Propagation does not, as TakeItOut and Cut show.
4. **Seats, leases and Offers as capability tokens**, with refusals that name a rule. Seeds exist in
   the classroom product.
5. **A view-binding contract and agreement check** (Concordance), so hand-built, kit, compiled and
   host views all run through one check.
6. **A fork as a closed lockfile** (Parting), with Reality events that state their preconditions.
7. **A signed, read-only claim API** (Guest).
8. **A registry and resolver** (Bench, Jurisdiction). This comes last, because it matters only once
   steps 1–7 hold for more than one system.

**(b) Fantasy at scale, which should be labelled as such.** Discovery by place across a billion
buildings. Knowledge cuts tied to time, curated by hand for arbitrary moments. Compiling an arbitrary
question into a working system. A Reality feed where every event states its preconditions. Lifting a
real act and getting computed consequences. "No popularity" when a million forks sit in the piles.
Seven entry ceremonies. And consistency itself: nine boards sharing one World already disagree about
cash three ways.

**(c) The cheapest thing to make real that proves the most.** Put the Live World fold on the real
shared store, address it by URL, and render it as Concordance's Table and Direct views plus one Guest
claim card served as JSON. Then run the agreement check across two browsers and the card. That
proves a canonical record, addressing, view agreement and external reads, with no AI and no 3D.
Second choice: a two-browser trade signed in Jurisdiction.

**(d) Network effects.**
- Mechanisms that improve as systems multiply: Parting (ranking by spread; lockfiles make forks
  composable), Bench (reviewed parts compound; Wants add up), Guest (every host adds reach),
  Jurisdiction (every jurisdiction adds another party that can say yes), Concordance (each compiler
  pays for itself across all systems).
- Mechanisms that get worse: Institution (linear build cost), Cut (curation per moment),
  EnterTournament (more to learn), TakeItOut in Reality (deltas nobody has), and Parting's piles
  (herding).

**(e) AI-cost traps.**
- Guest: verifying a free sentence costs a model call per sentence. Placing article marks costs an
  extraction per article.
- Bench: a restatement per question, a frontier compile lasting minutes for each new question, and
  deduplication per Want.
- Cut: question mining is "FRONTIER OCCASIONAL, human-reviewed" for every moment of every system.
  This is the biggest hidden cost, and it is human labour.
- Jurisdiction and Parting: an AI seat is labelled "OCCASIONAL". At a million seats, occasional
  becomes continuous.
- Guest: standing orders written in words need a small model for every ring.
- I found no hidden per-click model call anywhere.

**(f) Portability.** What an outside surface can do exists in design only: read a claim, verify it,
open a read-only cut, carry an Offer, receive a ring, and presumably sign a line. What only BOW can
do: sign or redeem a seat, hold or compare a branch, and draw the frame. In practice nothing can be
invoked from outside: there is no URL, no endpoint and no embed, and every "host" is drawn inside the
BOW page.

**(g) Accessibility.**
- Keyboard paths exist on all nine boards, focus is visible, and the harness found no unlabeled
  controls at the builders' viewports.
- Institution's Schedule and Concordance's Direct are exemplary, and Institution is light on
  resources.
- At 390px: Guest's text piles up, TakeItOut's strip collapses, Concordance's header wraps a word per
  line, Bench's record covers the sheet, Cut and Parting overflow sideways, Jurisdiction clips, and
  EnterTournament's panel covers the lane.
- Muted text contrast runs from 4.8 to 7.5:1. Parting's 3.0:1 appears on disabled buttons only.
- Reduced motion is handled in CSS but I did not test it. No screen-reader session was run.

**(h) The one platform decision the founder must make first.** Is BOW a destination people walk
into, or a **record protocol**: addressed, signed act logs that any surface renders as checked views?
The decision decides whether Institution is the front door or one renderer among several, and
whether Guest is peripheral or core. Choose the protocol. Its first law: **an address names state,
never grants authority**, and one log gives each act one number.

---

## 3. Phase 2 amendments

(Written after Phase 1 was saved. Sources read: `REPRESENTATION_ECONOMICS.md`,
`AMBIENT_AI_COST_MAP.md`, `EXTERNAL_INVOCATION_FRONTIER.md`, `briefs/specs/*`, and §2–3 of
`PROTOTYPE_CONTRACT.md`. Phase 1 above is unchanged.)

### A. The cost none of the three docs prices: facts per instance
`REPRESENTATION_ECONOMICS` §1 prices an **Instance** ("a fork, a class session, … Denver's books") as
"a data binding … nobody (compute only)". That is true only for state that BOW's own engine
produces: Worlds, forks, class sessions. For Reality, the binding is cheap and the **data** is the
cost: typed, sourced, dated and licensed facts, for each system over time. The prototypes show this
cost everywhere:
- Parting cannot pin Philadelphia: "UNKNOWN · no Philadelphia books in the shared store to pin".
- TakeItOut's Reality lift runs on "[verify: from the Reality feed] … an illustrative stand-in".
- Cut authored a knowledge plane for only one of its five doors.
- Jurisdiction's player line reads "[verify: 8+ years' service, 4+ with club]".

`AMBIENT_AI_COST_MAP` labels KNEW, the bitemporal read, "NO AI · floor query over an append-only
log". But for Reality, that log has to be built by ingesting dated sources that record when each fact
became known. The map prices the mining at "once per moment", and the number of moments is unbounded.

**Amendment:** add a fourth unit to the economics table, **Fact**, costing systems × time × sources,
paid in sourcing, verification and licensing. It breaks the doc's own rule that cost must never grow
with the number of systems, and it is where BOW's money goes at scale. A live feed of official league
data is a licensed product: I believe the NBA's is distributed exclusively through Sportradar
[verify]. None of the three docs has a row for it, and the external-invocation doc's "observing is
wide and free" assumes BOW may republish it.

### B. Attacks on specific claims
- **AMBIENT_AI_COST_MAP, row "Claim card; `verify` of a sentence — NO AI at BOW … claim set +
  numeral match".** The Guest's flagship mismatch ("Boston is past the tax line this season") has no
  number in it, so numeral matching cannot catch it. Checking free sentences costs a SMALL model call
  at BOW for every sentence, unless hosts send structured claims. The label is wrong for the very
  example it cites. This confirms my Phase 1 finding.
- **AMBIENT_AI_COST_MAP: "content-addressed so the second asker pays nothing" and "memoized per
  (record hash, …)".** This works only with collision-resistant hashes. Three boards use toy hashes
  for exactly this role: Guest's 32-bit FNV claim-set hash, TakeItOut's 24-bit `hex6`, and Bench's
  own mix. Only Concordance and Parting use SHA-256, and I verified both against Node. At a billion
  keys, 24 bits collides almost immediately. Make SHA-256, or a successor, a platform law rather than
  a per-board choice.
- **AMBIENT_AI_COST_MAP, Bench open-world compile: "bounded by caching per freshness window and by
  earning review only for popular questions".** Caching does not bound a long tail of questions that
  are mostly unique. Bench already holds the cheaper mechanism: "No system for this", then a Want.
  **Amendment:** compile only when a place's merged Wants cross a threshold. That turns the
  most expensive AI cost into a network effect and keeps the default answer honest. Bench must first
  stop filing every Want under North Station.
- **AMBIENT_AI_COST_MAP: "Seeded worlds for thin doors — FRONTIER OCCASIONAL, … stamped GENERATED".**
  At scale, every door starts thin, so a pile made mostly of seeded worlds is a synthetic crowd. The
  Parting spec (line 25) told builders to stipple hand-scripted pairs GENERATED. So my Phase 1 WEAK on
  Parting's label belongs to the spec, not the builder. It still teaches viewers that GENERATED means
  "illustrative", which erodes the one texture meant to say "a generator made this".
- **AMBIENT_AI_COST_MAP: "A counterparty's WILL-yes played by a model — SMALL … archetype per role
  type".** Caching a Denver archetype makes every fork's Denver answer the same way. The first
  player to find its acceptance boundary has a dominant strategy against every copy of Denver. An
  archetype needs a seeded, per-fork draw, like TakeItOut's luck per game, or it becomes an exploit.
- **AMBIENT_AI_COST_MAP, "An AI agent holding a seat — BOW side NO AI".** True for inference, but the
  map leaves out the load that agents move onto BOW. Agents turn "occasional" acts into streams, and
  every proposed act still costs a rules-engine check, a log append, a ring and storage. Warrants
  need act-rate budgets as well as scope.
- **EXTERNAL_INVOCATION §4, "seat authority (never inside an address)"; "privacy (nothing
  seat-scoped in an address)".** Six prototypes put a seat in the address line: Institution
  `seat: gm (you)`, Jurisdiction `seat GM`, Cut `seat Boston (you)`, TakeItOut `seat gm`,
  Concordance `GM seat`, Parting `seat: observer`. They are following the incumbent canon ("system ·
  moment · branch · seat · view", prior-art §2). So the frontier contradicts itself. **Amendment:**
  the seat in an address is a *viewpoint* ("as the GM would see it", with public scope only). Opening
  an address containing `seat` must yield exactly what an observer may see, and the address must say
  so. §4 also says "time ('now' … from the record's clock)", yet Cut's Reality clock ticks from the
  device.
- **EXTERNAL_INVOCATION §3, "The host draws BOW's card in a sandbox so it cannot restyle the
  textures."** A sandbox protects the card. It does nothing about the host drawing its own "Verified
  by BOW" beside it, which is the Guest's forged-card stage test. §5.6 then says "only the Browser
  shows the record … side by side". Both cannot hold. **Amendment:** inside host surfaces, BOW
  truth is *claimed*, not *verified*, unless claims are **signed** and checked by something the reader
  controls. That means signatures, not bare hashes, in the ClaimSet, and in practice a BOW verifier
  at the user agent. It makes the Browser, or a small verifier extension, part of the trust model and
  not merely a destination. It also weakens "observing … happens mostly in other people's surfaces"
  as a *truth* claim.
- **EXTERNAL_INVOCATION §3, `resolve(text)` "never a guess; 'did you mean' on a miss".** Bench
  guesses: "late" became a confident airline claim. Jurisdiction refuses everything outside three
  questions. The law is right, and neither prototype meets it.
- **REPRESENTATION_ECONOMICS §2, the Downshift with "a CI parity check per rung", and the CONCORDANCE
  spec's prohibition "responsive CSS passed off as a downshift".** The prohibition explains what I
  saw: the builders drew a phone *inside* the desktop page, and a real 390px viewport breaks.
  PROTOTYPE_CONTRACT §2 required only 1440 and 1280, so on eight of the nine boards the phone
  failures are outside the contract. That is not a builder failure, but it remains a platform
  failure. **Amendment:** the phone rung must be what a phone receives, chosen by detecting the
  device, not a button on a desktop page. Add 390×844 and 1024×600 to the contract.
- **REPRESENTATION_ECONOMICS §2, "Compiled Room … cached per schema × kit version × device tier,
  never per state".** Concordance's Harrow compile sets its layout from state (the shelf count is
  `ceil(onHand/unit)`). That is cheap, but the doc should say that the compile output is a
  parameterized template.
- **REPRESENTATION_ECONOMICS §4–5, "~15k triangles, one draw call".** This cites the unmerged baked
  pipeline. The Institution prototype does not use it: it runs real-time shadows with ACES tone
  mapping, and I measured 31 calls and 4.4k triangles at the maquette. It is light, but it is no
  evidence for the baking claims.
- **PROTOTYPE_CONTRACT §3, "Every act appends to an in-page record".** This explains why Parting's
  hash covers navigation and Cut's "Backs" counts toggles as acts. The contract merges the session
  trail with the canonical log. **Amendment:** keep two logs, a session trail that is never hashed
  and a canonical log that is.
- **P4_GUEST acceptance: "the second-device refusal is identical to a nonexistent" seat.** The builder
  met the letter of this by hashing the same function twice. Being identical under enumeration is a
  property of a server's responses, including timing, status and size, and one page cannot prove it.
  Relabel it as illustration, not evidence.

### C. Claims the docs make that the prototypes support
- The Concordance agreement check is real: a ShownSet diff, which the cost map calls NO AI. I read
  the code and forced it to fail.
- "Rooms are a luxury good with a job" matches my Phase 1 COMBINE for Institution.
- "Invoke by reference. Verify by resolver. Redeem by person." Guest's Offer demonstrates it
  convincingly ("The message holds a phrase, not authority").
- "The floor never moves" holds: nothing breaks with AI off on any board.

### D. Changes to Phase 1 verdicts
- No board verdict changes.
- **Guest:** the verify-label problem is confirmed by the cost map's own wording.
- **Parting:** the GENERATED mislabel is inherited from the spec.
- **Concordance:** my repair (1) becomes "choose the rung by detecting the device", not "add
  responsive CSS".
- **Cross-board (a):** insert step 0, **a sourced, dated, licensed fact pipeline for any Reality
  system that will be addressed**. Without it, steps 1–8 run only on BOW's own Worlds.
- **Cross-board (h):** unchanged. Adopting the protocol also means deciding what BOW may republish
  from Reality, because that is the free, wide layer the external-invocation doc sells.
