# SPEC — Search / Atlas frontier (four concepts)

Browser answers "how do I enter and navigate systems?". Search/Atlas asks: "how do I FIND THE SYSTEM
BEHIND A QUESTION?" Traditional search retrieves pages; AI search synthesizes prose; BOW search
discovers, constructs or opens an executable system. None of these may be a node-link graph or a
results list. Each: 1440×900, interactive; COMMERCIAL LENS line bottom-left; status bottom-right; a
final one-line thesis ("SEARCH, in this model, is …").
Critical truth rule for search: anything BOW ASSEMBLES on the fly for a question (rather than an
official, reviewed system) must be marked GENERATED STRUCTURE — "assembled for this question from
[components] · unreviewed" — and each component shows where it came from.

------------------------------------------------------------------------------------------------
## A1 · THE MECHANISM ANSWER — "the answer to 'why' is a small running system you can push"
File: AtlasMechanism.dc.html
Query: "Why do airline delays spread?" (second query: "Why did my package take three extra days?"
→ the same mechanism assembled for parcel hubs; placeholder level of detail is fine).
The answer is not prose. BOW assembles a small executable air network from components and runs it:
one aircraft's day BOS→PHL→ORD→PHL→BOS (four legs, scheduled times authored), a crew with a duty
limit (AUTHORED simplified rule: 13 h duty day), passengers connecting at PHL and ORD, a minimum
turn time (45 min, AUTHORED). A 40-minute weather hold at ORD is the perturbation.
Interaction: press "Hold ORD 40 min" (or drag a hold slider 0–120 min) → the delay propagates along
the aircraft's day (each later leg shifts; slack at each turn absorbs some), connections miss
(passenger counts COMPUTED from authored loads), and at some slider value the crew hits its duty
limit and the last leg cancels — a threshold effect the user FINDS by dragging. Captions name the
three propagation channels as they fire: THE AIRCRAFT (rotation), THE CREW (duty limits), THE
PASSENGERS (connections). Text appears only as names and one-line explanations tied to what just
happened.
Provenance: each component carries its source: "rotation pattern: typical regional schedule
(AUTHORED)"; "13 h duty: simplified from FAA Part 117 (verify)"; "loads: AUTHORED". The whole is
stamped GENERATED STRUCTURE · "assembled for this question · unreviewed" with a button "Open BOW's
reviewed air-network system" (disabled: "not built yet").
Look: an airline operations board, light: white (#FAFBFC), leg bars on a time axis like a crew
pairing chart, delay in amber fill with black text (#F2B01E), cancellations as a cut line. Type:
IBM Plex Sans Condensed + IBM Plex Mono. Status: DESIGN PROPOSAL · PLATFORM HYPOTHESIS (on-the-fly
system assembly).
COMMERCIAL LENS: "Hypothesis: answering-by-system is free at small scale (it is the medium's front
door); reviewed, persistent systems behind popular questions are where publishers and licensors pay."

------------------------------------------------------------------------------------------------
## A2 · THE FIELD GUIDE OF DYNAMICS — "browse the world's systems by how they behave"
File: AtlasDynamics.dc.html
Idea: index systems by MECHANISM, not topic. The query "delays spread" maps to the dynamic
"propagation through shared resources" (also: cascade). The Atlas shows that dynamic as ONE small
animated motif (a chain of buffers; a shock enters; slack absorbs or passes it on) and, arranged
along a single behavioural axis — HOW TIGHTLY COUPLED (loose → tight) — its instances across
domains, each drawn as the same motif in its own skin:
  airline day (moderate) · hospital supply (Harrow Medical, fictional — tight: single source) ·
  NBA roster injuries (loose: depth absorbs) · a just-in-time car plant (tight) · a power grid
  (very tight) · a school bus route (loose). Each instance: 2 lines of what couples it + an "Open"
  (opens where available; placeholders are fine).
Neighbouring dynamics sit above/below the axis as related entries: QUEUEING (waiting lines), BUFFERS
(inventory, slack), BOTTLENECKS, CONTAGION. Selecting a neighbour re-arranges the instances along
that dynamic's own axis (e.g. queueing: "utilisation, 50% → 99%").
Interaction: a single "coupling" slider on the motif shows the dynamic itself (shock passes through
more stages as coupling tightens — COMPUTED toy); moving it highlights which real instances live at
that coupling. The user learns the concept once and sees where it lives in the world.
Look: a naturalist's field guide × physics demo — light (#F6F5EF), each instance a small framed
plate with its own mini-skin (colour and texture), the axis a long ruled line. Type: Fraunces
(entry names) + Karla. Status: SPECULATIVE FRONTIER.
COMMERCIAL LENS: "Hypothesis: the dynamics index is the Native Textbook spine — schools and learners
pay for the curriculum built on it; the index itself stays free."

------------------------------------------------------------------------------------------------
## A3 · THE EXCAVATION — "search starts where you stand and digs upstream through systems"
File: AtlasExcavation.dc.html
Query: "Why was my new car delayed in 2021?" The user is the starting point ("you: waiting for a
car, spring 2021"). The Atlas draws a vertical CROSS-SECTION like geological strata below the user:
each stratum is a system further upstream — Dealer → Automaker → Tier-1 supplier (electronics
module) → Chip designer/vendor → Fab (Renesas Naka fab fire, 19 Mar 2021 — observed, verify) — with
parallel strata for DEMAND (pandemic-era electronics demand surge — observed, general) and POLICY
(just-in-time inventory, small chip buffers — AUTHORED description of a common practice).
Interaction: "Dig" descends one stratum at a time (the section scrolls down); each stratum shows
what that system contributed to YOUR delay, with texture: observed facts solid, typical practice
outlined (AUTHORED), estimates hatched, and honest holes dashed ("which chip your car was missing:
UNKNOWN — automakers didn't say"). A drill line connects you to the deepest cause found; side
branches show causes that didn't apply to you. "Why me?" toggles between the general story and
what's knowable for YOUR case (much more UNKNOWN).
Look: a geological cross-section plate — light earth tones (strata in sand #E8DCC2, clay #D9B99B,
slate #B8C0C4, each with a distinct pattern), fine black labels, the user as a small figure at the
surface. Type: Alegreya + Alegreya Sans. Status: DESIGN PROPOSAL.
COMMERCIAL LENS: "Hypothesis: 'why did this happen to me' is a consumer front door; businesses pay
to have their part of the strata be official (and to see upstream risk)."

------------------------------------------------------------------------------------------------
## A4 · THE MODEL LANDSCAPE — "for contested questions, search returns the competing models, not an answer"
File: AtlasModels.dc.html
Query: "Will the US economy go into recession in the next twelve months?" BOW refuses to answer
with one number. It shows a LANDSCAPE of competing executable models, each as a terrain feature on
a single "time-to-recession" horizon, with its reading as a PLACEHOLDER from its feed (never invent
values): 
- "Yield-curve model" (inversion → recession probability; reading "[from the model feed]")
- "Sahm rule indicator" (a real rule: triggers when the 3-month average unemployment rate rises 0.5
  points above its 12-month low — observed rule; reading "[from BLS data feed]")
- "A structural macro model (DSGE-style)" (assumptions heavy; reading "[feed]")
- "Market-implied probability" (from prediction/futures markets; "[feed]")
- "Your own model (fork any of these)".
Each model: its mechanism in one line, its key assumptions (3 bullets), its RECORDED track record
("[calls since 1990 · from the model registry]" placeholder), and its disagreement with the others.
Interaction: select two models → "Stand between them" shows WHERE they disagree (which assumption)
as a split view; "Enter a model" opens its mechanism as a tiny runnable (e.g. the Sahm rule: a
slider for the unemployment path shows when it would trigger — COMPUTED from the stated rule).
Stamp: "BOW shows the models; it does not pick one."
Look: an editorial terrain (contour lines on light paper #F4F4F0), models as labelled ridges/peaks
along the horizon axis, each in its own texture. Type: Newsreader is reserved for research boards —
use Literata + IBM Plex Sans. Status: DESIGN PROPOSAL.
COMMERCIAL LENS: "Hypothesis: model publishers (banks, research shops, forecasters) pay to list
executable models; readers compare free; BOW earns on premium model access and data feeds."
