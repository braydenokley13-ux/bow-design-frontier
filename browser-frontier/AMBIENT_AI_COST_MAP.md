# Ambient AI cost map — which Browser interactions need a model, and which never should

BOW Browser Founding Frontier · Wave 1 · 29 Sep 2026 · design reading, not a price list.
Sources: research F (Ambient AI + cost; its vendor price pages were accessed 29 Sep 2026), B, E, G, H;
the prototypes. Labels: **NO AI** (no model) · **SMALL** (small / cheap model) · **FRONTIER
OCCASIONAL** · **FRONTIER CONTINUOUS**.

## 1. The principle: a point is not a prompt

Nobody in BOW asks "the AI". A person asks the SYSTEM — points at an object, place, seat, moment or
number and picks a verb. Five of the six verbs research F found (TOUCHED, WHY, KNEW, BLOCKS, CHANGES)
are graph operations over the causal record; the sixth (IF) is a rules replay plus, sometimes, a named
model. Their answers are computed, land on the thing pointed at, and cost a cache read. Models enter
at three seams the rulebook cannot cross — **phrasing, modeled consequence, and actors' choices** —
plus two authoring seams (compiling a new system; writing a new model or kit). Each entry is labelled
by kind, stamped with model, version and cost, content-addressed so the second asker pays nothing, and
shaped so it cannot write a number or a quote.

"Models propose, rules dispose, the record remembers." Turn every model off and every reference ask
still works. That is not a fallback: BOW Economics Live's shipped runtime has no LLM calls by founder
ruling (D166), and its Season One charter excludes live student-facing generative AI (D179) — REAL.

## 2. The Ask Ladder (research F §2.12)

| Rung | What happens | Label | Typical use |
|---|---|---|---|
| R0 reference | point + verb → graph operation | NO AI | TOUCHED, WHY, KNEW, BLOCKS, CHANGES; every mark, door, seat |
| R1 catalog | words → nearest entry in the system's ask catalog (keyword, precomputed embedding) | NO AI at ask time | "why is our tax bill so big?" |
| R2 compile | a small model fills slots under a schema; the engine validates; the ask card is shown before anything runs | SMALL | ambiguous language; a fork spec from words |
| R3 model run | a named, versioned, metered, receipted model (often not an LLM: a seeded simulation) | NO AI (non-LLM) or FRONTIER OCCASIONAL | modeled outlook for a fork; an actor model |
| R4 authoring | frontier model writes an artifact that drops back to R0–R1 (a compiled system, a gloss, a model version, a kit) | FRONTIER OCCASIONAL | once per system / rule / domain, reviewed |

**Seven rules against every click becoming a request** (F): a point is not a prompt · prompts carry
ids and claim sets, never the World · gloss per rule, not per number · cache by content (system
version, state hash, cut, verb, args, model@version) · language compiles to a visible card before
anything runs, and the engine may refuse it · no budget, no run; no silent runs; an answer never
spawns another model call · every AI output is promoted (versioned, hashed, reviewed once, then a
lookup) or discarded.

## 3. The map — every major interaction proposed this wave

Grouped by where it appears. "Amortized by" says why the second person pays nothing.

### Substrate (all models)
| Interaction | Label | Why | Amortized by | With AI off |
|---|---|---|---|---|
| Press a true mark; typed doors open (Because · Meanwhile · Who · Here · Who says yes · What's different) | NO AI | reverse-dependency, clock, seat, place, consent and assumption indexes | per (address) lookups; hub top-k by deterministic rank | same |
| WHY of any number (derivation drawer) | NO AI | backward closure + formula; ends at an act, a dated source or a rule id | per (node, state hash); glosses per rule × reading level, written once (SMALL, batch, reviewed) | same; gloss falls back to rule text |
| TOUCHED (what an act reached) | NO AI | forward closure on the dependency graph | per (hash, node) | same |
| KNEW / a cut (bitemporal read, seal) | NO AI | floor query over an append-only log | snapshot per (system, cut) | same |
| BLOCKS (refusal naming the rule + nearest legal variants) | NO AI | rules engine + bounded reverse search | per (hash, proposal) | same |
| Address / Reading with check words; Offer; redemption | NO AI | codec + capability service | stateless | same |
| Parsing loose speech into a Reading | SMALL | fuzzy match before read-back | none needed | typed entry |
| Truth tokens, covers, Concordance agreement check | NO AI | path metadata; ShownSet diff | per (view, state) | same |

### M1 · The Institution (P1)
| Interaction | Label | Why | Amortized by | AI off |
|---|---|---|---|---|
| Maquette → door → rail → sit → sign (frost, covered view) | NO AI | seat scope diff drives frost and ledger | per (seat class, hash) | same |
| The room answers WHY (tags on touched fixtures) | NO AI | causal edges the engine holds | per (hash, act) | same |
| Four ways not to know | NO AI | typed UNKNOWN reasons on fields | schema metadata | same |
| Unbrick → scaffold branch; see the record through the window | NO AI | branch = base hash + changed act, replayed | per (record hash, change) | same |
| Compiled Room for a system nobody drew | NO AI (deterministic compile through a kit) | typed surface → kit slots | per (schema, kit, tier) | Ledger + Direct only |

### M2 · The Cut (P2)
| Interaction | Label | Why | Amortized by | AI off |
|---|---|---|---|---|
| Horizon rail, four planes, seal refusal, hindsight ledger | NO AI | profile + floor + personal ledger | per cut; ledger per person | same |
| Door questions and "asked before the cut" slots | SMALL (drafts) + human review; mining pre-cut sources FRONTIER OCCASIONAL | authoring only | once per moment | hand-authored doors |
| Branch, coupling, seam verdicts | NO AI | declarations vs recorded facts | pending-declaration index | same |
| Council "Model" actor at the cut | FRONTIER OCCASIONAL (or CHEAP with a cached archetype) | an actor's choice is not in the rulebook | per (fork, actor, model@version) | Recorded / Declare / Unknown remain |

### M3 · The Jurisdiction (P3)
| Interaction | Label | Why | Amortized by | AI off |
|---|---|---|---|---|
| Pin across sheets; hinges; plane that strikes verbs | NO AI | projections of one ledger | per (hash, pin) | same |
| Instrument (N-party form), rehearse (dry run), ground change | NO AI | lines derived from rulebooks; RULE-yes by engine | per (hash, proposal) | same |
| A counterparty's WILL-yes played by a model | SMALL (stippled stand-in) | discretion is not a rule | archetype per role type | a human seat, scripted policy, or UNKNOWN |

### M4 · The Guest (P4)
| Interaction | Label | Why | Amortized by | AI off |
|---|---|---|---|---|
| Claim card inside a host; `verify` of a sentence | NO AI at BOW (the assistant pays its own tokens) | claim set + numeral match | public claim sets cached at every layer | reads unaffected |
| Rings, standing orders, the Round, seat diffs | NO AI | timers, rules, stamps | per seat | same |
| Drafting standing orders from your past acts | SMALL | suggestion only, you sign | per person, rare | write them by hand |
| An external assistant running a what-if | NO AI at BOW for rules; modeled layers metered | `whatif(spec)` → Fork Receipt | per fork hash | model layers "unavailable" |

### M5 · The Bench (P5)
| Interaction | Label | Why | Amortized by | AI off |
|---|---|---|---|---|
| Question → named dynamic + part shortlist | SMALL | classification over a catalog | per question cluster | pick a dynamic from a list |
| Typed-port assembly, Loom, push to edge, unbolt, plate | NO AI | executor with ablation and edge search | per (recipe hash, parameters) | same |
| A coupling with no declared port | FRONTIER OCCASIONAL | writing new structure | per recipe, reviewed once | the socket stays dashed |
| Open-world compile (semiconductors) | **FRONTIER CONTINUOUS during the compile** (agentic, minutes; research E estimates ~10⁶ tokens per compile — dollars, not cents, verify prices) then NO AI | reading sources, extracting claims, proposing structure | per question × freshness window; reviews rare and earned | "not compiled"; registry search works |
| Review per knot, hindcast | human + NO AI | people sign; the hindcast is a deterministic run | per promoted system | same |
| Want dedupe | SMALL | near-duplicate detection | per anchor | exact-match only |

### M6 · Take It Out (P6) and M7 · The Parting (P7)
| Interaction | Label | Why | Amortized by | AI off |
|---|---|---|---|---|
| Lift an act; weights; dashes; put back | NO AI | deterministic replay of backward slices, luck keyed per event | memoized per (record hash, omitted act, engine version) | same |
| The sheet of many worlds; pile-ups; first parting; crux | NO AI | sketches per (door, fact); hash-chain walk | per door | same |
| Naming a crux in words | SMALL | phrasing only | per (door, pair class) | show the act, no sentence |
| Seeded worlds for thin doors | FRONTIER OCCASIONAL, offline, stamped GENERATED | cold start | per door | show "too few worlds" |

### Agents and actors
| Interaction | Label | Why | Amortized by | AI off |
|---|---|---|---|---|
| Actor (position) model about a real person | CHEAP with a cached archetype; FRONTIER OCCASIONAL otherwise | a person's choice is not a rule | per (fork, actor, model@version) | Model disabled; Recorded / Declare / Unknown |
| An AI agent holding a seat under a warrant | BOW side NO AI; FRONTIER CONTINUOUS only if BOW hosts the brain, inside the warrant's budget | inference is the agent's, authority is BOW's | O(1) warrant verify; budget-capped | warrant suspends; stock policy or human |

## 4. What must work with no AI at all (the floor)

Following Reality and Worlds · every mark, door, cut and seal · every reference ask (TOUCHED, WHY, KNEW,
BLOCKS, CHANGES) · refusals with the rule and nearest legal variants · seats, offers, handovers,
warrants, rings, standing orders, the Round · every fork's rules layer and any seeded (non-LLM)
simulation · Concordance and the Downshift · compiled Direct, Ledger and kit Rooms · addresses,
Readings, sharing · the classroom on one machine offline (REAL today: D12). Degradation is monotone:
every AI feature overlays a typed action that already exists; a lesson step that cannot finish with AI
off is a defect. With AI off nothing spins: the ask line goes typed-only; a modeled slot reads
"MODELED, not run — the rulebook part is complete above. Queue it."

## 5. The AI costs that are unavoidable

1. **Open-world compilation** (M5, SPECULATIVE) — minutes of agentic frontier work per question, plus
   scarce human review. Unavoidable if BOW wants to meet questions it has no system for; bounded by
   caching per freshness window and by earning review only for popular questions.
2. **Authoring** new model versions, kits, glosses, door questions — frontier occasional, amortized
   across every future user of the artifact.
3. **Actors' choices** in forks (a counterparty, a player's position) — cheap with archetypes, frontier
   occasionally; never required (Declare and Unknown exist).
4. **Hosted agents in seats** — continuous only if BOW runs the brain, and then inside a warrant's
   budget; otherwise the agent's owner pays.
5. **Language in, words out** — small models for routing and phrasing; optional everywhere.

## 6. Illustrative arithmetic (research F, list prices as read 29 Sep 2026; assumptions F's, not a forecast)

Cheapest listed tiers were $0.05–$1 input / $0.40–$5 output per million tokens; top tiers about
$10 / $50; cache reads about 0.1× on most Anthropic models; batch about half price (Anthropic, OpenAI,
Google pages as read by F; prices move — design on ratios, and every receipt records the price at run
time). On those numbers F estimates: one R2 compile ≈ $0.0006; one R4 authoring run ≈ $1.40 (about
2,000× an R2 call); a class of 30 × 40 asks where every click were an uncached frontier call carrying
the World's state ≈ $72 a session and seconds per click, versus ≈ $0.07 with the ladder at 10%
language asks, and $0 under the classroom default (D179). One class is tens of dollars, not thousands,
so **cost is not the strongest argument against per-click AI — correctness, latency, offline classrooms
and student privacy are.** Cost decides at district scale and at billions of systems.

## 7. Who pays (hypotheses)

Fan: a plan allowance counted in weights (instant, a moment, a minute, heavy). Student: nothing; the
class default has no model spend. Operator of a system: per-system precompute, shown as a ledger of
rows (rung × count × cost × hit rate), plus asks the catalog could not answer and refusals per rule as
rulebook QA. Agent: the warrant's budget. External assistant: its own tokens plus BOW quotas.

## 8. How the Browser improves as models improve — without requiring them

Tiers are routed by a golden corpus, not by model name (utterance → ask pairs; fork specs → expected
rules layers; stance papers with planted violations). A model that passes at lower cost replaces a
tier; the receipt names which. Better models move work DOWN the ladder (more asks resolved at R1, more
compiles cached) and never change semantics; a recompile shows a diff for review; GENERATED STRUCTURE
becomes AUTHORED once reviewed. The floor never moves.

## 9. Falsifiers

- Fewer than half of real questions from fans and students map to the reference verbs: the ladder
  collapses toward R4.
- People cannot sort rulebook numbers from modeled ones: ambient marking fails; words must return.
- In a real cohort most sessions reach R3: the ladder is not holding.
- Visible cost chills asking.
- Any lesson step cannot finish with AI off.
