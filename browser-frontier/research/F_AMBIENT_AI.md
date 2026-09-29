# F · Ambient AI

RESEARCH · 29 Sep 2026 · design reading, not evidence of use

## 0. The claim

Nobody in BOW should ask "the AI." A person asks the system: point at an object, place, seat, moment or number, and pick one of six verbs (TOUCHED, WHY, KNEW, BLOCKS, CHANGES, IF). Five are graph operations over the causal record, so the answer is computed, lands on the thing pointed at, and costs a cache read. Words are a door into that grammar: an ask line compiles them into a visible, editable ask card and moves you to the place that answers; it is never a room to chat in. Models enter at three seams the rulebook cannot cross (phrasing, modeled consequence, actors' choices). Each entry is labeled by kind, stamped with model, version and cost, content-addressed so the second asker pays nothing, and shaped so it cannot write a number or a quote. Models propose, rules dispose, the record remembers. Agents and outside assistants are guests holding seats under warrants the person signs; BOW hosts the seat, not the brain. Turn every model off and every reference ask still works. That is today's product, not a fallback: the shipped runtime has no LLM calls by founder ruling (D166) and the Season One charter excludes live student-facing generative AI (D179) (REAL).

## 1. What the incumbents get wrong or leave out

- **The magic moves are the expensive ones, and none is priced.** Arrive, Mechanism and the Council's "Model" setting each imply a model call per gesture, with no cache, budget, or "AI unavailable" state.
- **The truth grammar textures values, not sentences.** One sentence can hold a computed number and a generated verb; nothing stops stippled prose writing a number. The repo solved this once, unnamed: `deriveDevelopments` fills templates from state and `mediaAudit` fails any figure "the state cannot account for" (`runtime/src/shared/media.ts`, REAL). Make it a law of the medium.
- **"ABOUT, never AS" is a slogan.** It needs a mechanical test (2.8).
- **The Seat's Warrant board stops at institutional authority.** Board-authored CAN/CANNOT, swappable occupants, printed refusals; occupant discretion is "an open design question." Missing: a warrant a person issues that attenuates, expires and carries a budget, and how a person perceives an agent acting (a receipt tape is a document, not a presence).
- **The engine board names the seam and leaves it open.** "Partners are not modeled: a door is legal, not likely" is where a model must enter; nothing says how, at what cost, or marked how.
- **The 3D trade file answers on a card, not on the room.** "What did this trade touch?" is a button on an overlay; the trade touched the roster board, tax line, dark rooms and arena.
- **No external door.** Assistants will call BOW; "refusals name the rule" needs a machine shape.

## 2. Concepts

**Shared frame.** An ask card is the address line plus a verb: `Boston · Year Two · Wk 9 · Owner · books ▸ WHY projected tax`. State-bound surfaces already carry their state path (the trade paper prints `deals.closed[0]`), so pointing needs no language understanding. An answer is a claim set: typed claims with kind (the seven textures), provenance, as-of. It appears in the thing (a drawer), the place (bowl, glass) or the record (fork frame, seal), never in a sidebar. Three tells, so no one channel carries the burden. **Position:** BODY is the ruled column only the engine writes; MARGIN holds phrasing (stipple, weakest-link); INSET holds anything modeled, in its own frame with a receipt slip. **Texture:** the seven. **Stamp:** only AI announces itself (model@version, cost); determinism is unmarked. A fourth tell, the tap: a numeral opens into a derivation or a receipt, or is not admissible. No free numerals, no dead numbers. AI is six contractors, not a persona: compiler, phraser, modeler, actor, agent, author.

### 2.1 The Touch — lift the trade file; the room answers with the room
- **Does:** On the owner's desk you lift the file (White $30.3M out, Butler $56.8M in). TOUCHED is a tab on the file, not an overlay. The room dims to what the trade reached: the roster board's payroll cell takes a toned band (+$26.5M), the tax marker moves, the rail readout ($22.8M over) ticks; the rest recedes. Page two: "Reached N. Not reached M. Closed at state hash H: nothing else reads what this trade wrote." Tap an untouched surface: "Not reached: draft picks. None in the terms."
- **State vs redraw:** nothing changes canonically; closure comes from the dependency graph; lighting is redraw.
- **Segments:** WHY?, PLACE RESPONDS, ORIENT. **Scale:** closure per system, cached by (hash, node); at a system boundary it stops, with a door. **Chem / supply:** what 0.1 mol NaOH touched / what the Kaito fire touched.
- **Label:** PROPOSED PLATFORM (seed REAL: the trade-file chain). NO AI REQUIRED.
- **Fails if:** lighting reads as decoration; one trade's closure is the whole World (rank by computed magnitude, fade by hops).
- **Test:** 8 people (4 non-fans), printed file plus 10 surface cards; then an untouched card: "did it?" Pass: 7 of 8 answer correctly; paragraph arm as control.

### 2.2 The Empty Seats — ask a place
- **Does:** A played night reads "16,440 in the seats of 18,624": 2,184 empty. Point at them; the bowl sorts its empties by the World's demand terms, each block in its term's texture (toned: computed; dashed: no term, UNKNOWN). On the ESTIMATE bowl the same gesture says "expected, not played"; on the NOT KNOWN bowl, "no forecast, nothing to decompose." "Why is Scouting dark?" answers on its door: "Closed by decision: Year One, you funded Business over Basketball Ops [verify mapping]. $2.0M would open it."
- **State vs redraw:** none; decomposition replays the demand rule with each term neutralized.
- **Segments:** WHY?, PLACE RESPONDS. **Scale:** cached per (game, hash), shared. **Chem / supply:** why this beaker sits at pH 4.7 / why the dock is half empty.
- **Label:** PROPOSED (seed REAL: three arena nights; funded and dark rooms). NO AI REQUIRED.
- **Fails if:** few terms leave the bowl mostly dashed (honest; a rulebook finding); it reads as a 3D pie chart.
- **Test:** 8 fans, bowl with and without decomposition; each names one action to fill it. Pass: 6 of 8 name one that maps to a computed term.

### 2.3 The Glass — ask a seat: "what does the GM know that I don't yet?"
- **Does:** From the rail you look through glass at the GM's desk and point at the chair. Folders show kind and door, not contents: "Medical · opens: never"; "Pending offer · opens: when signed and delivered"; "Scouting board · opens: if Scouting is funded"; "Cap projections · opens: on taking the seat." "Yet" is a schedule of doors, each with the rule that opens it. Take the seat (the Handover) and they open, with the ledger of what you gave up and got. For a fan in Reality the glass is frosted: only the public trail (RECORDED, sourced); the rest UNKNOWN by construction.
- **State vs redraw:** ACLs and the disclosure schedule are canonical; views are built from the asker's seat, so secrets never reach the client to be hidden by paint (the media layer's types contain no positions: REAL pattern).
- **Segments:** ROLE, KNOWLEDGE + AUTHORITY CHANGE. **Scale:** ACL filter of a shared claim set. **Chem / supply:** which instruments the analyst may read / the Harrow VP's information wall.
- **Label:** PROPOSED (seed REAL: pending terms stay owner-scoped). NO AI REQUIRED.
- **Fails if:** the shape of ignorance leaks ("Denver offer" reveals an offer exists), so draw doors only for what the asker may know exists.
- **Test:** 8 students, two minutes: "what could the GM see that you couldn't, and when do you get it?" Pass: 6 of 8 name one rule-based door.

### 2.4 The Cut — ask history: "what was known on 5 Feb 2026?"
- **Does:** Address `Boston · Reality · 5 Feb 2026 · public · books`. Drag the knowledge clock; the room re-lights to what a public observer could know that morning: the board shows the reported ≈$39.5M projected tax [verify], with source and date. Later arrivals are absent, marked by a seam that names the question, never the answer ("Chicago calls about Simons"); "what changed since?" reveals it (sealed hindsight). Two clocks: valid time, knowledge time. Before BOW ingested, the room says "reconstructed from dated sources," not OBSERVED.
- **State vs redraw:** a bitemporal read; nothing forks unless you act at the cut (then IF).
- **Segments:** time as navigation, FORK, COMPARE. **Scale:** snapshots content-addressed per (system, cut), shared. **Chem / supply:** the notebook at a titration point / what procurement knew the morning of the fire.
- **Label:** PROPOSED (seed REAL: `asOf` per fact row). NO AI REQUIRED.
- **Fails if:** sparse pre-ingest records make the past look emptier than it was (keep UNKNOWN-to-record apart from UNKNOWN-to-world).
- **Test:** 8 people say what the front office could have done, sealed versus unsealed cut. Pass: the sealed arm cites fewer later facts.

### 2.5 The Ledger Drawer — WHY? of any value, with no AI
- **Does:** Tap "Projected tax $34.2M" (World rule: flat 1.5×). It opens in place: `34.2 = 1.5 × (222.8 − 200.0)`. Each operand opens again; 1.5 is "World rule R-tax, AUTHORED; the NBA's real tax is incremental." Every branch ends at a dated source, an act or a rule id, never a model. A reading-level gloss hangs on each rule, written once, the number a slot. Two WHYs never merge: STRUCTURE (computed) and MOTIVE (only reported reasons with sources, else dashed "no reason on record"). The 5 Feb fall from ≈$39.5M to ≈$17M is RECORDED with sources [verify]; "the trade cut tax by X under rule Y" is COMPUTED; "that was the motive" is UNKNOWN.
- **State vs redraw:** the derivation tree is the engine's; the drawer is redraw.
- **Segments:** WHY?, with CHANGES, ACT. **Scale:** trees cached per node and hash; glosses per rule × reading level, so authoring cost tracks the rulebook, not users. **Chem / supply:** why K = 1.8e-5 / why a shipment is held (change-control rule).
- **Label:** PROPOSED (seed: prototype "Every number knows why"). NO AI REQUIRED; glosses SMALL, once per rule, batched, reviewed.
- **Fails if:** depth swamps a ten-year-old (default one level, largest contributor first); "explain simpler" gets wired to a live model.
- **Test:** 10 students: "change one thing so the bill drops about $6M" (cut $4.0M of payroll). Pass: 7 of 10; paragraph arm as control.

### 2.6 The Ask Card — words are a door, not a room
- **Does:** You type or say "why is our tax bill so big?" into the ask line (no history, no paragraph replies). It becomes a card in plain words: "You are asking WHY of the projected tax, Week 9, as Owner. Instant: rulebook." Ambiguity shows two doors; a forbidden ask ("undo the Week 3 trade and keep the win") returns a refusal naming the rule. "Go" moves you to the place that answers, drawer open. Ladder: pickers and keyword search over the system's ask catalog (no model); nearest entry by precomputed embedding; then a small model fills slots under a schema and the engine validates. The prompt is a long stable prefix, billed at cache-read rates.
- **State vs redraw:** none; asks may log as semantic events (class evidence), never clickstream.
- **Segments:** DISCOVER, ARRIVE. **Scale:** catalog generated from node kinds at publish; embeddings on first language ask, so an unasked system costs storage. **Chem / supply:** same verbs, per-system catalog.
- **Label:** PROPOSED. SMALL/CHEAP. On-device is optional only: Chrome's Prompt API needs ~22 GB free disk and, on ChromeOS, a Chromebook Plus (S7).
- **Fails if:** people only type and it becomes chat; a plausible mis-compile. Free text from grades 5–6 is a privacy risk: off in class by default (D179); escalate to counsel.
- **Test:** 12 people, three arms (pickers; ask line to card; ask line to paragraph), planted ambiguity. Measure mis-compile catches and whether they can restate what they asked.

### 2.7 The Receipt — WHAT IF? that needs a model
- **Does:** Reality, late June 2025 [verify date]: "what if Boston had kept Holiday?" It compiles to a fork spec (cut before the Portland call; remove that act). The fork opens as a frame in its own ink. Rulebook consequences fill the body at once: cap sheet, tax, apron status, which rule would now have refused the Atlanta deal, rulebook version shown. Soft layers arrive as sealed slots with a weight in words: "Season outlook: a minute. Season model v0.3, 500 seeded runs, replayable"; "Portland's response: needs an actor model." You press to run; the room does the work where it lives (Analytics screens fill; the next home game's bowl redraws as ESTIMATE). A receipt slip clips to each modeled surface: model@version, seeds, replayable, cost, price at run time, who paid, "run once, read by N" or "private." Tap it: it opens its inputs like any node.
- **State vs redraw:** the fork is a hash-verified branch; results are artifacts on it, never merged into OBSERVED or RECORDED; a newer model makes a new artifact, so old stamps stay true. Living forks reconcile deterministically and re-model only on request.
- **Segments:** WHAT IF?, FORK, CONTINUE, COMPARE. **Scale:** key = hash(state at cut, change set, model@version, seeds); public questions converge on a few canonical forks; popular ones precompute in batch (half price on all three vendors, S1–S3). **Chem / supply:** pH +0.5 is a deterministic solver / a second source needs a lead-time model.
- **Label:** PROPOSED. Rules layer NO AI REQUIRED (metered CPU); season model non-LLM, seeded; compile SMALL; authoring a model version FRONTIER OCCASIONAL.
- **Fails if:** stamps become cookie banners; visible cost chills children.
- **Test:** 12 people sort five fork numbers into "rulebook alone" or "a model said." Pass: 10 sort at least four correctly. A/B asks-per-minute, cost tag shown or hidden.

### 2.8 The Position Model — an actor model, marked, about a real person
- **Does:** In the Council each touched actor is set Recorded / Declare / Model / Unknown; Model is never preselected. Set Jrue Holiday to Model and a stance paper appears in a hatched frame: "A model of a player in Holiday's position. Not a statement by him." Four parts: position facts (contract, cap effects; sourced); the feasible set the rules leave him and his club (COMPUTED); ranked considerations, each tied to a cited public statement or computed constraint, in conditional mood; what the model cannot know (private preference, health, family: dashed UNKNOWN). "Declare" overwrites it with your belief, in your ink. It never enters the record as fact.
- **"Never AS," mechanically:** third person, conditional only; no quotation marks except verbatim source quotes fetched by id in RECORDED texture; any claim without a source or constraint id is stripped; every option belongs to the deterministic feasible set; no health, private life or intent; no persona affordance (no "ask him" box, avatar, voice). Model the seat, not the soul.
- **State vs redraw:** an artifact on the fork, cached by (fork hash, actor, model@version).
- **Segments:** WHAT IF? (Council), KNOWLEDGE + AUTHORITY. **Scale:** cached by role type ("a capped club"); a named person adds only public statements. **Chem / supply:** no actors / a sole-source supplier's position (fictional people).
- **Label:** PROPOSED. CHEAP MODEL when the feasible set is small and the archetype cached; FRONTIER OCCASIONAL otherwise.
- **Fails if:** a stance reads as a quote or forecast; rights exposure on living people (unresolved; this lowers it, not removes it; escalate).
- **Test:** 12 people read stance papers (ABOUT versus a control written AS): "did he say this? will he do this?" Pass: at most 1 of 12 says yes to "did he say."

### 2.9 The Warrant — an AI agent holds a seat
- **Does:** Week 9, payroll $222.8M, projected tax $34.2M. The owner drafts a warrant on the desk, signed line by line (the Handover, reversed): seat GM; matter "tax under $25M by Week 12"; may propose, and sign changes of at most $5M payroll cumulatively; may not give a first-round pick; countersign above that; expires Week 12 or on taking the seat; silent N minutes suspends it (absence, never a choice); 30 heavy asks. The agent's inference is not BOW's bill.
- **Perceiving it, no avatar.** Agent activity passes through BOW, so presence can be true: a lamp lights on the GM's desk while it holds the lease; folders it opened bear its seal impression ("who has read this?" is a Touch); drafts are papers in your ink under its seal, with a stippled "stated reason: testimony, unverified"; limits are draining gauges on the paper's edge, cumulative so splitting cannot dodge them; irreversible acts stop at your empty signature line. A hand on the desk ends the lease.
- **Refusal: three stamps, three next steps.** The agent proposes dumping salary on Denver. The paper returns: NOT ACCEPTED, Denver's side, "incoming salary exceeds what a club over the cap may take back" [rule id: verify], inputs printed, nearest legal variants from the reverse search. Then "NOT PERMITTED BY WARRANT §2: no first-round picks," then "BUDGET: heavy asks 30 of 30." Rules bind everyone (change the deal); warrants bind this agent (widen it or act yourself); budgets lift. Refused attempts print on the seal and are the best test corpus a rulebook will get.
- **Seal:** runtime and policy hash, principal, warrant hash, assurance (attested if BOW-hosted, declared if external). Warrants only attenuate; seat admission is authored ("Owner seat is human-only"). An AI counterparty is the same object: offers are structured papers, prose a stippled note; default counterparties are scripted; an LLM one is opt-in and budget-boxed.
- **State vs redraw:** canonical: warrant, act log `{actor, principal, warrant, act}`, refused attempts; redraw: lamp, gauges, seals. **Segments:** ROLE, ACT, CANONICAL STATE CHANGES, WHY?. **Scale:** small signed objects, O(1) verify; exploration budget-bounded, deduped by fork hash. **Chem / supply:** lab robot refusing an unsafe mix / Harrow VP Procurement, limit per order.
- **Label:** PROPOSED (agents-in-seats is a platform hypothesis on its own board; prior art AP2 Intent and Cart Mandates, S8; RFC 8693; RFC 9396). BOW side NO AI REQUIRED; FRONTIER CONTINUOUS only if BOW hosts the brain, inside the warrant's budget.
- **Fails if:** warrants become terms of service nobody reads; over-delegation; the lamp reads as surveillance of a child.
- **Test:** 8 people write a warrant, leave (compressed five minutes), return: "what did it do, what could it have done, who refused this?" against a text log. Pass: better limit recall, correct rule-versus-agent attribution.

### 2.10 The Guest — an outside assistant invokes BOW
- **Scene:** A user asks an assistant, "Is Boston over the tax line?" It calls BOW, then says "past the tax line." BOW's card, drawn inside the transcript, shows both numbers side by side: cap payroll ≈ $203.6M; tax salary $198,722,406, about $1.7M under the $200.428M line [verify]. The sentence is flagged as not matching the record; "Enter as owner" hands the user into BOW.
- **Six tools** (MCP, same schema over HTTPS; WebMCP inside the browser): `resolve(text)` to addresses; `ask(address, verb, args)` to a ClaimSet; `whatif(spec)` to a Fork Receipt; `verify(text, claim ids)` to match, mismatch or unsupported; `handin(address, seat)` to a URL; `warrant(scope)` to a URL the user signs.
- **ClaimSet:** address; state hash; rulebook id, version, status; `world_kind` (reality | world | fork | historical); knowledge and valid time; `closed` (everything the engine can say for this ask at this hash); claims[] with id, value, unit, kind, provenance (act | source@date | rule@version | model@version+hash); unknowns[] typed with reason and what would make them known (never null; SEALED for outcomes that arrive only by acting); refusals[] (by rule | warrant | budget | seal, id, clause, inputs, nearest_legal); a receipt if a model ran; `open_in_bow`. Deltas (over/under) ship as claims so the assistant never subtracts.
- **On the wire (MCP 2026-07-28, S4):** `structuredContent` under an `outputSchema`; `content` is closed, quotable text with claim ids (the model sees `content`, not `structuredContent`, per the MCP Apps spec; S5, verify); refusals are `isError: true` results, which the spec routes to the model for self-correction, here carrying legal variants; public claim sets as resources with `ttlMs`/`cacheScope`; long forks as Tasks; the card as a sandboxed `ui://` app, so the host draws BOW's textures and the assistant cannot restyle them.
- **Authority:** truth is BOW's record; a paraphrase has none, and every response carries `open_in_bow`. Acts belong to seats and warrants; the assistant never signs. Signing and heavy asks go out of band (`input_required` with a URL-mode elicitation, which the client and model cannot inspect; S4). The assistant keeps selection and phrasing. BOW cannot force faithful quoting; it can make truth cheap to quote exactly (closed text, ids, deltas), deviations cheap to catch (`verify`; a BOW-side unfurl of `bow:claim/<hash>` links shows the record beside the paraphrase), refusals hard to paper over.
- **Segments:** DISCOVER, ARRIVE, WHY?, WHAT IF?, ENTER. **Scale:** stateless MCP behind a plain load balancer; public claim sets cache at every layer. **Chem / supply:** same six tools, other catalogs.
- **Label:** PROPOSED (MCP, MCP Apps, WebMCP exist externally; no BOW server does). NO AI REQUIRED at BOW for reads (the assistant pays its tokens); `whatif` metered.
- **Fails if:** hosts skip the card; assistants ignore closed text; BOW becomes a data API and value leaks, so the hand-in must be the reason to come.
- **Test:** 10 people, 20 Boston questions on their own assistant, with and without BOW; a proxy plants one wrong figure per answer. Measure catches and `verify`-scored fidelity. Falsified if the card does not beat plain text.

### 2.11 The Floor — AI unavailable
**Works with no AI:** following Reality and Worlds; every reference ask, refusals and legal variants; seats, Handover, act log, warrants, lockstep, hash checks; any fork's rules layer and seeded simulation; the typed ask card, addresses, sharing; scripted policies for empty seats; everything cached (glosses, narratives, earlier model results with receipts); the classroom on one machine, offline (D12; REAL: no runtime dependencies, no fetch calls in the server source); outside assistants' reads. **Degrades:** language asks, new phrasing, new modeled forks, actor models, hosted agents, open-world compile. It looks like this: the ask line goes typed-only with no error dialog; a modeled slot reads "MODELED, not run. The rulebook part is complete above. Queue it"; nothing spins; queued runs land when capacity returns; a silent agent's warrant suspends. Principle: monotone degradation. Every AI feature overlays a typed action that already exists; a lesson step that cannot finish with AI off is a defect. **Label:** REAL as posture (D166, D179); PROPOSED for the Browser. NO AI REQUIRED.

### 2.12 Cost architecture
**The Ask Ladder.** R0 reference: point, verb, graph op, no model. R1 catalog: words to the nearest ask. R2 compile: a small model fills slots; the engine validates. R3 model run: named, metered, receipted, content-addressed. R4 authoring: frontier, occasional; output drops back to R0–R1 as an artifact (compiled system, gloss, archetype, reviewed model version).

**Seven rules against every click becoming a request.** (1) A point is not a prompt. (2) Prompts carry ids and claim sets, never the World. (3) Gloss per rule, not per number. (4) Cache by content (system version, state hash, cut, verb, args, model@version); public answers shared, seat-scoped ones filtered. (5) Language compiles to a visible card before anything runs, and the engine may refuse it. (6) No budget, no run; no silent runs; an answer never spawns another model call. (7) Every AI output is promoted (versioned, hashed, reviewed once, then a lookup) or discarded.

**Drivers.** Tokens per interaction; hit rates at R0, the R2 prefix and the R3 fork hash; the amortization base (per system: catalog, glosses, mechanism tags, popular forks, per-interval narratives; per user: routing, private forks), so cost tracks systems × version churn, not users × clicks; the share of asks reaching R2 or above (UNKNOWN until a cohort runs).

**Prices (S1–S3, accessed 29 Sep 2026).** Cheapest listed tiers $0.05–$1 input, $0.40–$5 output per million tokens; top tiers $10/$50 (Anthropic, OpenAI; Google's Pro $2/$12). Cache reads 0.1× on most Anthropic models (0.05× Opus 5.5, 0.025× Fable 5.1); batch half price. Prices move: Anthropic's page says Sonnet 5's scheduled 1 Sep 2026 rise "will not occur"; Google lists rises from 1 Jan 2027; OpenAI shows promotional pricing to 21 Nov 2026. Design on ratios; the receipt records the price at run time.

**Illustrative arithmetic (list prices above; assumptions mine, not a forecast).** An R2 call, ~1,300 cached plus 200 fresh input tokens and 60 output at $1/$5, is ≈ $0.0006. R4 authoring, ~40k in and 20k out at $10/$50, is ≈ $1.40, about 2,000× an R2 call. A class of 30 × 40 asks = 1,200. If each were an LLM call carrying ~30k tokens of state at $2 per million input, uncached: ≈ $72 a session and seconds per click. Under the ladder with 10% language asks: ≈ $0.07; class default (D179): $0. One class is tens of dollars, not thousands, so cost is not the strongest argument. Correctness (a generated number can be wrong), latency, offline classrooms and student privacy are. Cost decides at district scale and at billions of systems.

**Who pays.** Fan: a plan allowance counted in weights (instant, a moment, a minute, heavy). Student: nothing; class default has no model spend. Operator: per-system precompute, shown in a ledger of rows (rung × count × cost × hit rate; asks the catalog could not answer; refusals per rule as rulebook QA). Agent: the warrant's budget. Outside assistant: its own tokens plus BOW quotas.

**Improves with models, requires none.** Tiers are routed by golden corpus, not by name (the repo's own harness rule): utterance-to-ask pairs, fork specs to expected rules layers, stance papers with planted violations. A model that passes at lower cost replaces the tier; the receipt names which. Better models move work down the ladder and never change semantics; a recompile shows a diff for review; stipple (GENERATED STRUCTURE) becomes outline (AUTHORED) once reviewed. The floor never moves.

### AI COST MAP

| Interaction | Label | Why | Cached / amortized | AI off |
|---|---|---|---|---|
| Lift file; TOUCHED | NO AI | forward closure on the dependency graph | per (hash, node), shared | same |
| WHY drawer | NO AI | backward closure plus formula | trees per node; glosses per rule × level, once (SMALL, batch) | same; gloss falls back to rule text |
| Ask a place | NO AI | demand rule replayed with a term neutralized; act lookup | per (game, hash) | same |
| Ask a seat | NO AI | ACL plus disclosure schedule | per (hash, seat class) | same |
| Cut; hindsight diff | NO AI | bitemporal read | snapshots per (system, cut) | same |
| BLOCKS refusal; CHANGES | NO AI | rules engine plus bounded reverse search (prototype: 88 candidates, 1–2 moves) | per (hash, proposal) | same |
| Ask line to card | SMALL | schema-constrained slot fill, engine-validated | catalog per system; cached prefix | pickers, keyword search |
| Phrase a claim set; "catch me up" | SMALL | slot-only template, numeral check | per (claim-set hash, level); per system-interval, not per user | deterministic template (the media layer's method) |
| IF: rules layer | NO AI (metered CPU) | engine replay on the fork spec | per fork hash | same |
| IF: modeled outlook | NO AI (non-LLM, seeded); FRONTIER OCCASIONAL to author a model version | seeded simulation, replayable | per (fork, model@version, seeds); popular forks batched; public shared | slot sealed "not run"; cached results still open |
| IF: compile from words | SMALL; FRONTIER OCCASIONAL if the change is a new rule | slot fill inside the parameter space | rule-variant library per system | typed fork builder (pick cut, pick act to undo) |
| Position (actor) model | CHEAP; FRONTIER OCCASIONAL | weighs a computed feasible set with cited statements | archetype by role type; per (fork, actor, model@version) | Model disabled; Recorded, Declare, Unknown remain |
| Agent acts in a seat | NO AI (BOW side); FRONTIER CONTINUOUS if BOW-hosted | warrant check, rules engine, act log | O(1) verify; budget-capped | warrant suspends; stock policy or human |
| Outside assistant: read, verify, whatif | NO AI at BOW; whatif metered | as above, over MCP | public `ttlMs`/`cacheScope`; Tasks for long runs | reads unaffected; model layers "unavailable" |
| Open-world compile | FRONTIER OCCASIONAL | authoring; GENERATED STRUCTURE until reviewed | search registry first, compile on miss; hashed; batched | "not compiled"; registry search works |
| Cross-domain explanation | NO AI join; FRONTIER OCCASIONAL prose | mechanism tags joined deterministically (the media layer already names each development's mechanism, REAL) | tag index per system; prose once per pair | the join lists "same mechanism" without prose |

### 2.13 Generality: Harrow Medical and chemical equilibrium

| Verb | Harrow (single-source part, fab fire) | Chemical equilibrium |
|---|---|---|
| TOUCHED | fire to parts, builds, shipments | added base to species, pH |
| WHY | order held: change-control rule (AUTHORED) | pH 4.7: K and concentrations |
| KNEW | what procurement knew that morning | what the analyst had measured by t |
| BLOCKS | substituted part cannot ship before validation | reaction blocked: ΔG > 0 |
| CHANGES | what second source clears the hold | how much base reaches pH 7 |
| IF | second source in 2023: MODELED | pH +0.5: solver, replayable, no LLM |
| Warrant | VP Procurement, limit per order | lab robot, N titrations, refuses unsafe mix |

Only nouns change. Where a verb needs a model (Harrow's IF), it is named and receipted as in Boston.

## 3. Your two to prototype

### A. "Ask the Room" (the NO-AI floor first)
States:
1. **Lift.** Trade file; TOUCHED lights the room (payroll band +$26.5M, tax marker, rail readout); the rest recedes; page two "Reached N / Not reached M / closed at hash."
2. **Untouched.** Tap the picks binder: "Not reached: none in the terms."
3. **Drawer.** Tap $34.2M: `34.2 = 1.5 × (222.8 − 200.0)`; operands open to act, source, rule id (AUTHORED); grade-level gloss; foot "No model ran."
4. **Place.** Played bowl sorts 2,184 empties by term; ESTIMATE and NOT KNOWN bowls answer differently; a door note on a dark room.
5. **Seat.** Glass wall, folders with doors; frosted in Reality.
6. **Cut.** Reality, 5 Feb 2026; a seam names the later question; "what changed since?"
7. **Ask card.** Words to a card with a weight tag; ambiguity as two doors; a forbidden ask refused by rule.
8. **One sentence, three kinds.** Margin sentence with a generated verb and a computed slot; a forged numeral struck and replaced by the engine's; the same figure in an inset with a receipt.
9. **AI off.** Same room; typed-only ask line; modeled slot sealed; cached artifacts open; nothing spins.

**Impossible moment:** you lift a file, the room answers with the room, then says it has told you all of it, at a hash you can check, with AI switched off. A chat cannot prove completeness.
**Anti-pattern:** a chat box in a 3D skin (ask bar to a paragraph in an overlay), a floating node-link graph, "Explain with AI" chips on numbers, captions a model writes at runtime.

### B. "The Warrant" (agent, refusal, receipt, guest)
States:
1. **Warrant** on the desk, written line by line.
2. **Working.** Lamp lit; seal impressions on folders; papers in your ink under the seal; "testimony" notes; gauges draining.
3. **Refused by rule.** Paper returns stamped with rule id, clause, inputs, nearest legal variants; attempt logged.
4. **Refused by warrant, then budget.** Two more stamps, different next steps.
5. **Countersign.** An irreversible act waits at an empty signature line.
6. **IF receipt.** Fork frame; rules layer in the body; modeled slot with model@version, cost, replayable, "read by N."
7. **Position paper** about a real person: hatched, third person, ABOUT seal, dashed UNKNOWN, Declare override.
8. **Guest.** An assistant transcript in a neutral frame (not BOW's UI) says "past the tax line"; BOW's card shows both numbers; `verify` flags it; "Enter as owner."
9. **AI unavailable.** Agent silent, warrant suspends, modeled slots seal, a stock policy or the human holds the seat, nothing lost.

**Impossible moment:** the paper comes back to your desk stamped with the rule, the numbers and the nearest legal deal, and the agent that tried it cannot argue with a stamp. Second: an assistant's wrong sentence audited in place.
**Anti-pattern:** an avatar and a chat log of "thinking"; refusal as a toast; per-act approval modals instead of cumulative gauges; the assistant transcript as BOW's primary UI.

## 4. What real runtime would have to exist to make this true

1. A causal graph with dependency edges and a bitemporal, content-addressed record (SHA-256 exists in the prototype): closure, derivation and as-of become queries keyed by state hash.
2. A rules engine returning structured refusals (rule id, clause, inputs, nearest legal set by bounded reverse search), correct on both sides of a trade.
3. A per-system ask catalog, golden-ask corpus and compile-validate loop; model tiers routed by eval.
4. A claim-set schema and a renderer enforcing no free numerals, no dead numbers, exact-quote checks against a source table. Provider citations and schema-constrained output cannot be combined in one call on at least one major API (Anthropic docs as bundled 25 Sep 2026), so the guarantee rests on slot templates plus a deterministic post-check, as `mediaAudit` does.
5. A model registry and receipts (id@version, input and output hash, seed, replayable, tokens or CPU, price at run time, payer); a content-addressed result cache with privacy scopes.
6. A warrant service: signed attenuating capabilities (AP2 mandates are signed W3C Verifiable Credentials, S8; RFC 8693; RFC 9396), seat admission in the rulebook, leases, act log, refused-attempt log, dead-man suspension.
7. The external door: a stateless MCP server (`outputSchema`, `isError` refusals, Tasks, `ui://` card, URL-mode hand-in), `verify`, quotas; WebMCP for in-browser assistants (origin trial from Chrome 149, announced 9 Jun 2026, experimental; S6).
8. Metering and budgets per person, class, system and warrant; the operator's ledger.
9. A degradation policy and run queue; the classroom node as cache; on-device small models only as an optional accelerator.
10. A review lane promoting GENERATED to AUTHORED; rights review for actor models of real people; a counsel-reviewed rule on free-text asks from minors.

## 5. What would falsify this area's thesis

- Fewer than half of the questions real fans and students ask (30 fans, 10 students, Wizard-of-Oz) map to the six verbs: asking is not reference for that population; the ladder collapses toward R4.
- People cannot sort rulebook numbers from modeled ones (2.7): ambient marking fails; words must return.
- In a real cohort, reference asks are under half of all asks, or most sessions reach R3: the ladder is not holding.
- Visible cost chills asking (2.7 A/B).
- The claim card does not beat text at catching planted errors, or assistants with BOW restate figures no more faithfully (2.10): the guest contract adds nothing.
- Gauges do not beat a text log for recall of an agent's limits (2.9): warrants are terms of service.
- Any lesson step that cannot finish with AI off: monotone degradation has failed.

**Sources (accessed 29 Sep 2026).** S1 platform.claude.com/docs/en/about-claude/pricing. S2 ai.google.dev/gemini-api/docs/pricing (page dated 24 Sep 2026). S3 developers.openai.com/api/docs/pricing (read via summarizer; verify model names). S4 blog.modelcontextprotocol.io/posts/2026-07-28/; modelcontextprotocol.io/specification/2026-07-28/server/tools and /client/elicitation. S5 blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/; github.com/modelcontextprotocol/ext-apps (specification/2026-01-26/apps.mdx). S6 developer.chrome.com/blog/ai-webmcp-origin-trial. S7 developer.chrome.com/docs/ai/prompt-api. S8 cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol; ap2-protocol.org. Repo: `docs/PRODUCT_DECISIONS.md` D12, D166, D179; `runtime/src/shared/media.ts`; canvas boards Agent (Seat's Warrant) and X3Engine; `browser-frontier/evidence/boston-spatial/` captures.
