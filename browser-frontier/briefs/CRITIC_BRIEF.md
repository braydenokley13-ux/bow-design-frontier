# Critique wave — brief for the two independent critics

You are one of two independent, adversarial critics of the BOW Browser Founding Frontier. You did
not make these prototypes. Nine interactive prototypes exist in
`/home/user/bow-design-frontier/browser-frontier/prototypes/` (`Institution`, `Cut`, `Jurisdiction`,
`Guest`, `Bench`, `TakeItOut`, `Parting`, `EnterTournament`, `Concordance` — `.html`). Your job is to
find what is weak, false, confusing, generic or merely impressive, and to name what is genuinely new.
Praise only what you can point at in a screenshot or a state you reached yourself.

## Context (read only this and `briefs/00_PRIOR_ART.md` before judging)
BOW is exploring a new medium: MAKE SYSTEMS EXECUTABLE — ENTER, UNDERSTAND, OPERATE, CHANGE, FORK,
COMPARE, FOLLOW and SHARE a system rather than read about it. The Browser may become the native
interface to reality as systems (billions of them, some live, systems inside systems, humans and AI
agents in roles, forks that persist for years, third-party runtimes, other apps invoking BOW). Sports
/ basketball (Boston) is the first proving ground. The founder's core sequence: DISCOVER → ARRIVE →
ORIENT → ENTER → ROLE → KNOWLEDGE + AUTHORITY CHANGE → ACT → CANONICAL STATE CHANGES → PLACE /
REPRESENTATIONS RESPOND → WHY? → WHAT IF? → FORK → CONTINUE ALTERNATE HISTORY → COMPARE → RETURN TO
RECORDED HISTORY → FOLLOW. "If this feels like a sequence of unrelated app screens, the design has
failed." BOW Browser must NOT be: Chrome with BOW tabs, Google with World cards, ChatGPT with
buttons, Netflix for simulations, a dashboard, an app launcher, a file explorer, a 3D metaverse shell,
or a search bar plus immersive pages.

## Independence rules (strict)
- PHASE 1 — judge from the rendered product only. Do NOT open `briefs/specs/`,
  `briefs/HYPOTHESIS_MAP.md`, `research/`, or any builder note until you have written your Phase 1
  verdicts to your output file. Screenshots from the builders' own play scripts are in
  `browser-frontier/harness/shots/<Name>/` (1440×900) and `shots/<Name>-1280/`; each prototype also
  has a `<Name>.steps.json`. Do not trust the builder's path: PLAY each prototype yourself with the
  harness — write your own steps file in your scratch area and run
  `cd /home/user/bow-design-frontier/browser-frontier/harness && node play.mjs <Name>.html <your-steps.json> --out shots/critic<N>-<Name>`
  (step syntax is in the header of `harness/play.mjs`; `LIST=1` is not needed — the report lists the
  buttons on the page). Try what a real person would try, including the wrong thing. Use the "What's
  real?" and "How do we know?" layers each prototype has.
- PHASE 2 — only after Phase 1 is saved, you may read `briefs/specs/<spec>.md` for a board to check
  whether a behaviour you could not find exists. Record anything that changes your mind under a
  separate "Phase 2 amendments" heading; never rewrite Phase 1.
- Do not edit any prototype, spec or doc. Write only your output file and scratch files.

## Output
One file: `browser-frontier/critique/<your file name>.md` (name given in your prompt), structured:
1. **Per board** (≤ 400 words each), in this order: what it ACTUALLY is in one sentence · what it
   reduces to, if anything (name the familiar genre honestly) · the moments that could not exist on a
   normal website or in a normal game (quote on-screen text, name the state) · your lens-specific
   rubric (below), one line per item with a word verdict (STRONG / OK / WEAK / FAILS) · biggest
   failure · truth / provenance / rights risks you saw · one test with real people · VERDICT: KEEP ·
   PUSH · COMBINE (with what) · PARK · KILL · top 3 repairs, concrete, ordered by impact (include any
   visual bug you saw: overlap, clipping, unreadable text, broken 3D, dead buttons).
2. **Across boards**: your lens-specific cross questions (below).
3. **Phase 2 amendments.**
Be specific. Quote on-screen text. No filler. No marketing voice.

## Lens 1 — INTERACTION / MEDIUM critic (`critique/CRITIC_1_MEDIUM.md`)
Your question: is this actually a new interaction model — or merely search, a game, a dashboard,
chat, a 3D environment or a knowledge graph with new language?
Per-board rubric: MEDIUM-NATIVENESS (could it exist unchanged as a website / dashboard / LMS page /
game menu / chat app?) · EXECUTES OR TOURS (does one act visibly propagate through state and every
view, or does only the clicked widget change?) · CORE-SEQUENCE COVERAGE (which of the sixteen
segments truly happen) · ENTER (does crossing from observer to participant change what you know,
can do, owe, and when?) · TIME · WHAT IF / FORK (a fork or a duplicate / scenario / preview?) ·
TRUTH GRAMMAR (can you tell observed / recorded / authored / computed / modeled / generated / unknown
apart, and is the record never overwritten?) · COMPREHENSION in the first minute for a newcomer ·
EMOTIONAL PULL ("I am no longer reading about Boston; I have entered the Boston system") · RESTRAINT ·
ORIGINALITY.
Across boards: (a) rank the seven mental-model boards (Institution, Cut, Jurisdiction, Guest, Bench,
TakeItOut, Parting) by "new medium" evidence, with the reason each sits where it does; (b) which is
strongest; which is strangest but potentially most important; (c) ENTER tournament: rank the seven
lanes; which lane(s) should become canon and why; which to kill; (d) TIME: which time instrument wins
(the cut with four planes, the seam, the scrubber baseline, plates in place, lifting acts); (e) WHAT
IF: which fork model is not a duplicate / scenario / preview, and which one grows to forks that
persist, host people and agents, fork again and compose; (f) which ONE end-to-end flow across boards
would make a stranger say "this is a new kind of thing"; (g) what these boards still reduce to,
honestly; (h) the one interaction that feels impossible to explain as a normal website or game.

## Lens 2 — PLATFORM / SCALE critic (`critique/CRITIC_2_PLATFORM.md`)
Your question: could this exist at the scale the founder describes (billions of systems, live Reality,
nested systems, humans and agents in seats, forks for years, third-party runtimes, external
invocation), and what would it cost?
Per-board rubric: REPRESENTATION ECONOMICS (what does board #2, #1,000 and #1,000,000,000 cost to
make — hand-built, kit, compiled?) · DISCOVERY AT SCALE (does its discovery mechanism survive a
billion systems, or does it need a curator?) · SCALE MECHANISM (named and plausible, or hand-waved?)
· AI COST HONESTY (are its "What's real?" / AI-cost labels right; is any per-click model call hidden;
what breaks with AI off?) · ADDRESSING & PORTABILITY (can the state be shared, cited, resumed,
embedded, spoken; does the address carry authority it should not?) · EXTERNAL INVOCATION (can another
surface open, enter, act, fork, compare, follow without starting in BOW?) · ACCESSIBILITY (keyboard
path, screen-reader equivalent, contrast, targets, reduced motion, Chromebook weight — check the
harness report's unlabeled / overflow numbers and try the keyboard) · CAPABILITY-LABEL HONESTY
(anything mocked presented as existing?) · TRUTH / RIGHTS RISK (real people, marks, invented facts;
facts not from the shared fixture `prototypes/_shared/boston-fixture.js`).
Across boards: (a) the runtime that must exist before ANY of these is real, smallest first; (b) what
here is fantasy at scale and should be labelled so; (c) the cheapest thing to make real that proves
the most; (d) which boards' mechanisms get BETTER as more systems exist (network effects) and which get
worse; (e) the AI-cost traps you found; (f) portability: what an external surface can do vs what only
BOW Browser can; (g) accessibility verdict across the set; (h) the one platform decision the founder
must make first.
