# Research wave — common rules (every research agent reads this after 00_PRIOR_ART.md)

## Independence
Eight researchers work in parallel on different questions. Do NOT open any other file in
`browser-frontier/research/` — only write your own. Do not coordinate. Disagreeing with the
incumbents (Wave 1–3 answers in 00_PRIOR_ART.md) is welcome when you can say why.

## What you may read
- `browser-frontier/briefs/00_PRIOR_ART.md` (required) and this file.
- The evidence your own brief names. Budget: no broad rereads of the repos. You may open one or
  two earlier boards in `bow-design-frontier/canvas/` if you need to see how an incumbent works
  (they are HTML; extract text, don't read 90 KB of markup).
- Bounded web research is allowed where it sharpens a concept (load WebSearch/WebFetch with
  ToolSearch). Cite source + date for any external fact. Never invent statistics, prices, user
  counts or results. If you estimate, say "estimate" and show the reasoning; prefer orders of
  magnitude and relative comparisons over fake precision.

## What you must not do
No code, no prototypes, no edits to any file except your own output. Do not create repositories.
Do not describe mocked behavior as existing: every concept carries a capability label —
REAL CURRENT PRODUCT CAPABILITY / PROPOSED PLATFORM CAPABILITY / SPECULATIVE FRONTIER.

## The sequence every Browser concept is ultimately judged against
DISCOVER → ARRIVE → ORIENT → ENTER → ROLE / RESPONSIBILITY → KNOWLEDGE + AUTHORITY CHANGE → ACT →
CANONICAL STATE CHANGES → PLACE / REPRESENTATIONS RESPOND → WHY? → WHAT IF? → FORK → CONTINUE
ALTERNATE HISTORY → COMPARE → RETURN TO RECORDED / CANONICAL HISTORY → FOLLOW THE SYSTEM.
If it feels like a sequence of unrelated app screens, it has failed. Say which segments each of
your concepts transforms.

## AI cost labels (mandatory per major interaction you propose)
NO AI REQUIRED · SMALL / CHEAP MODEL · FRONTIER MODEL OCCASIONAL · FRONTIER MODEL CONTINUOUS.
Prefer deterministic system semantics wherever possible.

## Output — write exactly one file (path given in your brief)
```
# <Letter> · <Title>
<one status line: RESEARCH · <date> · design reading, not evidence of use>

## 0. The claim (one paragraph: your single strongest idea)
## 1. What the incumbents get wrong or leave out (short, specific)
## 2. Concepts (at least the number your brief asks for). For EACH:
   - Name — one line
   - The interaction, step by step, in BOSTON (what the person sees, does, and what changes)
   - Canonical state vs representation: what actually changes in the system, what only redraws
   - Core-proof segments it transforms
   - Scale: survives billions of systems? how, concretely?
   - Cross-domain: survives chemical equilibrium? a supply chain? (one line each)
   - Capability label · AI cost label(s)
   - Why it could fail
   - Cheapest falsifying test with real people
## 3. Your two to prototype — for each: the mandatory states a builder must render (5–9 states,
   what is on screen in each), the one moment that must feel impossible on a normal website or in a
   normal game, and the anti-pattern a builder will be tempted into.
## 4. What real runtime would have to exist to make this true (platform implications)
## 5. What would falsify your area's thesis
```
Length 2,500–4,500 words. Terse, concrete, human. No filler, no marketing voice, no emoji.
Your final reply to the parent: ≤150 words — the file path, your strongest idea, your top two.
