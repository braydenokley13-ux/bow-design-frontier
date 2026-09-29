# G · Representation Router
RESEARCH · 29 Sep 2026 · design reading, not evidence of use

## 0. The claim

A view is a witness, not a window. The Browser keeps one canonical Surface per system: typed facts (each with its truth token), the acts a seat may take, the rules that refuse them, the clocks. Every representation (Room, Timeline, Table, Direct, voice, molecules) is a compiled projection of that Surface and obeys one grammar: show only facts bound to the Surface, carry the kernel's tokens unchanged, expose the same acts or name the view that does, declare what you cannot show.

The router does not ask you to pick a view. It issues a Plan (lead view, companion, one sentence of why); you can swap, pin or pair. Sameness is proved, not asserted: one act number lands in every open view in the same frame, and a machine check compares what each view says it shows with the record and fails closed. Economics follows the same split: an instance costs a data binding, a schema costs typing and review, a domain costs a kit. The long tail gets compiled Direct and Ledger views, the head gets hand-built Rooms, and AI may make decor, never a fact.

## 1. What the incumbents get wrong or leave out

- **`view` is a slot, not a contract.** The address ends "… · seat · view", but nothing says what a view must preserve, how a person knows two views are one system, or what a view cannot show. A flagship that "ticks rather than executes" is a view that did not hear the act.
- **The texture grammar is visual-only.** Seven textures with "words on request" leave a blind user, a phone in sunlight and a voice user with nothing; "can a 10–12-year-old read seven textures?" is open. The Boston arena hints at the answer: its NOT KNOWN bowl prints words across the seats ("NO FORECAST · NOT KNOWN · NOT PLAYED YET"). When materials ran out, the 3D author reached for words. Words are the grammar's floor.
- **The Boston Room is a hybrid with no contract.** Every frame has a flat HUD, an eight-station bar and a text popover carrying a state path (`v4.arena.nights[0].forecast`); what lives where is decided by hand per scene. At rail distance the department signs read as headings; the Analytics sign is smeared and the reason line is nearly unreadable (`departments-glass.jpg`). Lit-versus-dark survives distance; the reason does not. A Room cannot carry exact text, and nobody wrote that down.
- **Generated-ness is stamped on systems, not views.** GENERATED STRUCTURE labels a mechanism; nothing says "this view was compiled by a machine", a different fact from how the facts are known.
- **Space is over-assumed.** Cockburn and McKenzie (CHI 2002, 69 subjects) found retrieval [deteriorated as freedom in the third dimension increased](https://dl.acm.org/doi/10.1145/503376.503413); Munzner's rule is [no unjustified 3D](https://www.routledge.com/Visualization-Analysis-and-Design/Munzner/p/book/9781466508910). Yet CodeCity, a system compiled to a city, beat Eclipse plus Excel by +24% correctness and −12% time (41 participants, [ICSE 2011](https://dl.acm.org/doi/10.1145/1985793.1985868)). Task fit decides. The first Boston 3D trial was judged poor; no device frame-time or accessibility pass exists.
- **Nobody priced representation.** The clone test copied screens in 12–22 tool calls; the moat is state, rulebook, history. Representation must be cheap by construction except where the Room is the experience.

## 2. Concepts

### 2.0 The shared grammar (every concept obeys it)

Ten clauses, each testable, binding every representation, origin and device.

1. **Frame.** Address; ledger position with fingerprint ("act 42 · 3f9c"); the view's origin (hand-built · kit · compiled · creator).
2. **Bound or decor.** A mark that asserts (number, name, status) is bound to a state path; all else is decor; no third kind. Mackinlay's test: [encode all the facts and only the facts](https://education.siggraph.org/static/HyperVis/concepts/exp_eff.htm) (1986).
3. **Tokens belong to the kernel.** Observed · recorded · authored · computed · modeled · generated · unknown, plus sealed future, come from path metadata. A view only realizes them in its modality; the lead word ("Recorded:", "Estimate:") is the floor. Never colour alone.
4. **Same acts.** Every act the seat may take is reachable in every view, or the view names the one that has it and hands off in one step.
5. **Refusals name the rule:** rule, text, source, what would allow it. Identical everywhere.
6. **Fork ink and sealed future** appear in every view.
7. **One clock name.** Shorten, never rename. (The Room's HUD says "Stretch 1 · Oct 20 – Nov 5"; the frontier fixture says "Year Two · Week 9". If both were views of one World, one name would win.)
8. **Declare what you cannot show** (R3).
9. **Echo the receipt** from state, never optimistically; fail closed if you can't (R2).
10. **Seat-safe.** A view gets only its seat's Surface; a shared display gets the public projection.

Direct is the spine: the seat's open matters as ordered acts, with facts, token lead-words, refusals and spatial relations as words. It is in every Plan (collapsed, docked or leading) and is the oracle other views are checked against. It is also the door for AI agents and third-party callers: agent-legible equals screen-reader-legible.

| Kind | Owns | Cannot show (declared) | Points to |
|---|---|---|---|
| Direct | exact wording, every act, relations as words | proportion at a glance, motion | Ledger, Room |
| Timeline | order, duration, amounts over time | who is where, adjacency | Room, Direct |
| Table | exact quantity, many-way comparison | causes, order | Timeline |
| Diagram | mechanism: stock, flow, rule, loop | who, exact timing | Timeline |
| Map | geography, distance | quantity, duration | Table |
| Room | adjacency, visibility, felt scale, opportunity cost through glass | exact text, precise amounts, many entities, anything with no presence truth | Direct, Ledger |
| Particle | population-scale mechanism | exact rates, K, history | Diagram |
| Replay | any kind at ledger position n | counterfactual, sealed hindsight | Fork |

Instance rule: a view may draw individuals from a count (16,440 seated fans; molecules) only if the count is bound, the individuals carry no facts, and the view says "drawn, not observed".

### 2.1 R1 · The Plan

*The router issues a lead view, a companion and a reason. The person keeps swap, pin and pair.*

- **Interaction.** Moment M: Boston · Year Two · Week 9, owner seat. The Golden State file (send Derrick White, get Jimmy Butler), signed in Week 6, lies on the desk. Payroll $222.8M against the World's $200.0M line (BOW World, not Reality); projected tax $34.2M under a World rule (flat 1.5×, authored).
  1. First paint is Direct-complete for everyone: browsers deliberately hide assistive-technology use ([W3C TAG §2.11](https://www.w3.org/TR/design-principles/), Note, 14 Sep 2026), so the page cannot know who is reading. The Plan then upgrades.
  2. *Newcomer* (a fan on a phone, link arrival, no seat history): the desk at object scale, one sentence ("This file is why payroll is $22.8M over the World's line"), Direct strip collapsed to "3 matters open". On a phone, a 2.5D card of the desk. A Room shows what kind of thing this is; small, because they need one thing.
  3. *Operator* (40 acts here, desktop): Timeline plus Table lead, Direct strip open with the acts, the Room one key away. Reason: "Timeline first: you're comparing payroll to a line. It can't show who is in the room; the desk can't show exact amounts."
  4. *Screen-reader user*: declares once at the first tab stop ("Direct view for screen readers and keyboard, remember it"); never detected. Direct leads: "Recorded: trade with Golden State, signed by both owners. Beyond the glass, Analytics and Scouting are dark: not funded, $2.5M would open Analytics." The Room's opportunity cost survives as a relation in words, built from the same place primitives (precedents: [PhET's parallel DOM](https://github.com/phetsims/phet-info/blob/main/doc/interactive-description-technical-guide.md), [Data Navigator](https://arxiv.org/abs/2308.08475)).
  5. *Override.* Tap the live `view` segment of the address: the Plan opens as a short list (why this, why not the others, what else can show this moment). Swap once; pin (this system, this device, everywhere); pair; reset. The router never changes a view under your hands; offers come at moment boundaries, except for a declared access need or a failed view (R2).
  Scale and task pick the kind: thirty clubs' books go to a Table, not a Room; "follow" goes to Replay.
- **State vs redraw.** Nothing in the system changes. The Plan is a pure function of (manifests, question, seat, device, declared profile, scale, task); overrides live in the person's profile, not the World. A shared address carries `view` as a request with a fallback.
- **Policies compared.** Device-first (ignores task and seat); seat-native (cheap, brittle, useless to newcomers); question-shaped (ask line plus small model: good for experts, misclassifies, chat cliché if primary); profile-only (honest, blind to task); computed Plan (chosen; rule and constraint choice already works for charts: [Show Me](https://doi.org/10.1109/tvcg.2007.70594), [Draco](https://idl.cs.washington.edu/files/2019-Draco-InfoVis.pdf)).
- **Segments.** ARRIVE, ORIENT, ENTER, ROLE, COMPARE.
- **Scale.** The Plan reads manifests, not systems. Every system has Direct and Ledger; a Room is offered only when the Surface has place primitives and the focus set is small.
- **Cross-domain.** Equilibrium: newcomer gets lab plus molecules (Johnstone's macro and submicro levels, which [students struggle to connect](https://files.eric.ed.gov/fulltext/EJ1205420.pdf)), operator graph plus equation, screen-reader user Direct with a sonified graph. Supply chain: newcomer the Marey shipment chart, operator the commitments table, screen-reader user Direct sorted by days to stockout.
- **Label.** PROPOSED PLATFORM CAPABILITY. NO AI REQUIRED (rule table, templated reasons); SMALL / CHEAP MODEL only to classify an ask.
- **Fail.** Newcomers override at once; reasons read as noise; the one-time declaration is missed; pins ossify.
- **Cheapest test.** Wizard-of-Oz, 12 newcomers plus 3 screen-reader users: first-minute overrides; time to a correct answer to "why is payroll over the line?" versus the best single fixed view.

### 2.2 R2 · The Concordance

*One act number lands in every open view in the same frame; facts can be followed across views; a machine check fails closed.*

How a person knows the views are one system: the same act number everywhere; any fact followable to its twins; the same tokens; "Do these agree?" is askable; disagreement fails closed; Direct is always there in plain words.

- **Interaction.** Room (desk) and Timeline paired, Direct strip docked. Re-enactment at Week 6, act 41: file unsigned; payroll ≈ $196.3M, $3.7M under the World's line (derived from the file's $56.8M in, $30.3M out; verify).
  1. Sign at the desk, or in either other view; all submit the same proposal.
  2. The kernel appends act 42, computes one Delta, stamps "act 42 · 3f9c".
  3. Every view redraws from state 42: SIGNED stamp on the paper and the Butler bar crossing the tax marker (Room); the payroll line stepping over $200.0M with a tick numbered 42 (Timeline); Direct announcing "Act 42. Recorded: trade signed. Computed: payroll $222.8M, $22.8M over. Authored World rule: projected tax $34.2M." Same tokens, native textures.
  4. Touch "$22.8M over" in the Timeline: the board lights in the Room, Direct takes focus, a tag reads "also in: board · Direct · Table". Drag it to the edge and the Room opens at the board.
  5. Ask "Do these agree?": "Room and Timeline agree on 14 facts. Only Timeline: payroll by week (3). Only Room: the sign on Analytics' door (2). Contradictions: none."
  6. Inject a stale binding: the Timeline's bound marks become a cover, "This view stopped matching the record at act 42", and Direct takes over.
- **State vs redraw.** State: act log, Delta, receipt. All else redraws; views keep no facts of their own.
- **Mechanism.** Each view exposes a ShownSet (path, token, text) from its bindings table; the kernel diffs it against Direct(state). It proves the view was told the right thing, not that pixels are right; browser truth stays mandatory. Prior art coordinates selection across views ([Baldonado et al., 2000](https://www.semanticscholar.org/paper/Guidelines-for-using-multiple-views-in-information-Baldonado-Woodruff/631b8ecb91442fecb78cb12f620cbe38d981eac8)); this coordinates acts and provenance, and operationalizes the North Star line "every mark in our frame is true".
- **Segments.** ACT, CANONICAL STATE CHANGES, REPRESENTATIONS RESPOND, WHY?, COMPARE.
- **Scale.** Cost per act is the number of open views, not systems. A third-party runtime that won't expose a ShownSet is marked UNCHECKED.
- **Cross-domain.** Equilibrium: compress the piston; halving V doubles every concentration, Q falls to K/4, the reaction shifts right; lab, molecules, equation and graph all carry act 7. Supply chain: expedite an order; dock, Marey line, commitment row and Direct all carry it.
- **Label.** PROPOSED. Lockstep folding to one SHA-256 exists at prototype grade in the Live World page (REAL CURRENT, never run on a shared store). NO AI REQUIRED.
- **Fail.** Nobody needs receipts; false positives erode trust; geometry-encoded facts slip past ShownSet; every view gets dearer to build.
- **Cheapest test.** Seeded defect, 12 people (2+ screen-reader): desk plus Timeline, one view silently shows $212.8M. With versus without receipts and Concordance, do they find it, how fast? No gain, drop it.

### 2.3 R3 · The Cover

*Every view carries a manifest of what it cannot show and puts a physical stand-in where the fact would be.*

- **Interaction.** At the owner's desk: (1) the wall plate for the World tax rule is frosted: "Exact rule text isn't shown here. Flat 1.5× over the line (World rule, authored). Open in Direct or Timeline." (2) Funded rooms show no people, which reads "nobody works here"; a dashed plate on each door says "People: not recorded". The arena already does this for seats: "covered means not played yet, not empty." (3) Timeline: a dashed margin band, "Not on this axis: who, where." (4) Direct: "Proportion isn't drawn here: Timeline." (5) Tap a cover and the router offers the complement whose manifest fills the gap, as a pair; pairs follow Ainsworth's complement, constrain, construct ([DeFT, 2006](https://www.sciencedirect.com/science/article/abs/pii/S0959475206000259)).
- **State vs redraw.** Coverage = Surface fact-classes minus the kind's manifest; only special phrases are authored.
- **Segments.** ORIENT, KNOWLEDGE + AUTHORITY CHANGE, WHAT IF? (sealed).
- **Scale.** Manifests are per kind, not per system.
- **Cross-domain.** Equilibrium: the bench covers K and Q (→ equation); the graph covers mechanism (→ molecules). Supply chain: the map covers inventory; the facility covers time in transit (→ Timeline).
- **Label.** PROPOSED; the arena cover is REAL CURRENT (unmerged, no human verdict). NO AI REQUIRED.
- **Fail.** Covers become cookie banners.
- **Cheapest test.** 10 people at the desk, with versus without covers: "Is anyone working in the funded Scouting room right now?" (right answer: not known). Measure false certainty.

### 2.4 R4 · The Downshift

*Five rungs: Room 3D · Room 2.5D · Ledger · Direct text · Direct voice. Moving down loses fidelity, never authority or truth. First paint is always the bottom rung.*

- **Interaction.**
  1. Desktop GPU: Room 3D.
  2. Same address on a Chromebook (the student): Room 2.5D (Harbor Lights already draws 2.5D rooms that change with saved state) or lite 3D. A strip says what carried (8 open matters, every act, refusals with rule names, tokens, act 42) and what shed (camera, spatial gestalt).
  3. Phone (the fan): Ledger plus Direct strip; sign in one gesture.
  4. Voice: "Three matters. One: Golden State file, signed. Say 'one'." Signing asks for read-back: "Send Derrick White, get Jimmy Butler. Payroll becomes $222.8M, $22.8M over the World's line. Say 'confirm'." Then "Act 42. Recorded." A refusal is spoken word for word as on screen.
  5. Sustained low frame rate offers a step down with undo, never silently; a declared access need switches at once.
  6. Headset: the same Room in stereo (Quest Browser; Safari on Vision Pro [since visionOS 2](https://www.uploadvr.com/visionos-2-apple-vision-pro-webxr/)), the file picked up by hand. Direct stays a paper on the desk, not a floating panel; the [W3C XR note](https://www.w3.org/TR/xaur/) asks for synchronized multi-modal output.
- **State vs redraw.** The kernel never learns the device. "No loss" is a CI parity check per rung: same acts, refusals, tokens.
- **Segments.** ARRIVE, ENTER, ACT, FOLLOW.
- **Scale.** The bottom three rungs compile from any Surface: the platform's floor promise to every system, device and person. Rooms are optional.
- **Cross-domain.** Equilibrium: bench, then graph plus equation line, then Direct sonifying the graph (PhET precedent). Supply chain: facility, then Marey chart plus commitments, then voice reading days to stockout.
- **Label.** PROPOSED; 2.5D rooms REAL CURRENT (unmerged). WebGPU ships in all major browsers since [25 Nov 2025](https://web.dev/blog/webgpu-supported-major-browsers) (Android only 12+ on Qualcomm/ARM), but WebGL2 stays the Chromebook floor [inference]. Chromebooks are roughly half of US K-12 shipments [secondary; verify]. NO AI REQUIRED; voice is SMALL / CHEAP MODEL on-device (Chrome 139 added [`processLocally`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)); a child's voice must not leave the device.
- **Fail.** Only the top rung gets tested; screen-reader users get a worse "accessible version"; voice fails in noisy rooms; devices form a lattice, not a ladder.
- **Cheapest test.** 3+ screen-reader users and 8 Chromebook students, one task (find why payroll is over, sign or decline): correctness, time, felt authority, Room plus Ledger versus Direct.

### 2.5 R5 · The Compile

*A system nobody drew arrives with deterministic views and a Room compiled from its typed surface, stamped COMPILED.*

- **Interaction.** Harrow Medical (fictional infusion-pump maker; single-source MCU supplier; fab fire). A creator publishes only a Surface: stocks (inventory, cash), flows (shipments), commitments (orders), rules (safety stock), clocks (lead time), places (fab, plant, port), a seat (procurement).
  1. Progressive arrival: Direct in milliseconds; then a Ledger: a Marey shipment chart (distance by time, slope is speed, flat is dwell; [Ibry/Marey, 1878](https://en.wikipedia.org/wiki/Charles_Ibry)) with the fire as a vertical cut, plus a commitments table.
  2. Only when a place-worthy question arises does a facility Room compile: containment → rooms; stock or budget → area ([squarified treemap](https://research.tue.nl/en/publications/squarified-treemaps)); stocked → full shelves, lit; relation → adjacency; kind → slot (stock → shelf, commitment → paper on a desk, rule → plaque, clock → wall clock). No people: no presence truth. The supplier's fab is a covered building: "no view inside".
  3. The frame carries COMPILED (stipple edge) and "What the compiler decided": stock as shelves, lead time as distance, single source as one thread. Creators can change each mapping; everyone can read them.
  4. Lazy: only visited stations materialize. Cache key = (schema hash, kit version, tier), never state.
- **State vs redraw.** The compile is a function of schema; state binds live.
- **Precedent and traps.** CodeCity; [CGA shape grammars](https://dl.acm.org/doi/10.1145/1179352.1141931) (2006). Compton's [10,000 bowls of oatmeal](https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator): compiled spaces are unique to the computer and identical to the eye, so make state, not geometry, the variety (lit/dark, full/empty). Compile only what the Surface has: no place primitives, no Room ("This system has no places; nothing is hidden").
- **Segments.** DISCOVER, ARRIVE, ORIENT for the long tail.
- **Scale.** Cost ∝ distinct schemas, not systems or forks. Promotion by use: compiled → kit → hand-built, restamped each time.
- **Cross-domain.** Equilibrium: Direct and Ledger compile fully; Room and Particle need a lab kit authored once. Supply chain: as above.
- **Label.** PROPOSED (deterministic compile); compiling arbitrary untyped systems is SPECULATIVE FRONTIER. NO AI REQUIRED for the compile; SMALL / CHEAP MODEL proposes types, human-confirmed; FRONTIER OCCASIONAL to author a kit.
- **Fail.** Oatmeal; arbitrary metaphors need a legend; forced space where space isn't the point (equilibrium); COMPILED ignored because 3D looks authoritative.
- **Cheapest test.** 12 people, two compiled systems plus one hand-built: name each origin from the marks; tell the compiled rooms apart after five minutes; answer "what stops shipments if the fab is down?" in Room versus Table. If Room doesn't beat Table, don't compile Rooms for that domain.

### 2.6 R6 · The Shelf

*Shared domain kits and creator packs, each with a manifest, an origin mark and a review state. The router auto-selects only reviewed ones.*

- **Interaction.** (1) Boston's ops floor and arena become basketball kit v1: geometry, neutral bake, CC0 materials, slot map, declared bound channels (albedo, emissive, text, transform, light group), station and parallel-DOM templates, cannot-show manifest, tier variants. (2) Denver arrives on the kit: name, colours, wordmark as text (no logos), payroll and departments bound. (3) A creator of a new domain (a legislative chamber) picks a kit or ships a pack that runs sandboxed: reads only its seat-scoped Surface, proposes acts through the kernel, draws text only through bindings. CI runs conformance: Concordance, accessibility tree, token distinctness, act parity, per-tier budget. (4) The frame shows origin: hand-built · kit · compiled · creator (unreviewed or reviewed). An unreviewed pack is never auto-selected; you may open it by choice.
- **State vs redraw.** Packs cannot write state.
- **Segments.** DISCOVER (trust marks), ARRIVE, FOLLOW.
- **Scale.** Amortized per kit. Review is the only human cost that grows with N: automated for all, human at promotion.
- **Cross-domain.** Equilibrium: bench and particle kits. Supply chain: facility and transport kits.
- **Label.** PROPOSED; an open creator ecosystem is SPECULATIVE FRONTIER. SMALL / CHEAP MODEL for rights and likeness triage; FRONTIER OCCASIONAL for creator copilots at authoring time only.
- **Fail.** Kits homogenize; BOW staff bottleneck; packs open abuse and rights surface; representation isn't the moat, so kit-sharing may not matter.
- **Cheapest test.** Build Denver from the Boston kit against a timer (hours, new objects needed). Eight fans of each club, names hidden: can they tell the clubs apart?

### 2.7 Representation economics

**Three unit costs.** An *instance* (a fork, a class, a season) costs a data binding, near zero. A *schema* (a new shape of system) costs typing, compile and review: hours to days [estimate]. A *domain* costs a kit: weeks of skilled work [estimate; Boston's real hours were not recorded, so record them]. Billions of instances need thousands of schemas and dozens of kits; that is the only reason "billions" is affordable.

| # | Lever | Deterministic code | Generated assets | Occasional frontier AI | Continuous AI | Marginal cost of system n+1 comes from |
|---|---|---|---|---|---|---|
| 1 | Semantic component library | primitive types, bind/validate, Direct compiler | none | typing an untyped legacy system; proposing a primitive (reviewed) | none | typing the schema; a missing primitive (rare, platform-level) |
| 2 | Procedural 2D | Ledger, Table, Marey, Diagram, Map in DOM/SVG (accessible by construction) | fonts, icons (CC0) | none | none | copy quality (names, units, reasons); virtualization |
| 3 | Procedural 3D | instancing, LOD, slot binder, bound-channel shader | optional textures | layout suggestions | none | per kit, not per system; oatmeal risk |
| 4 | System → space compile | containment, treemap area, lit/full, adjacency, slots | kit only | legend text (reviewed) | none | ms–s compile, cached per schema; humans only at promotion |
| 5 | Creator packs | manifest schema, sandbox, binding-only text, conformance CI | creator's own | authoring copilots | none | review per pack; abuse and rights handling |
| 6 | AI static assets (decor only) | intake: de-light, tile, compress, hash, likeness screen | materials, facades, decals, props | the generation ([TRELLIS.2 README](https://github.com/microsoft/TRELLIS.2): ~3 s at 512³ to ~60 s at 1536³, H100) | none | curation, not compute; paid once per kit version |
| 7 | AI interaction components | typed catalog, binding validator, the only act channel | none | new catalog components at build time, reviewed | runtime UI code (danger, below) | if runtime: inference plus verification per session; never for act- or fact-bearing surfaces |
| 8 | Shared domain kits | kit runtime, slot binder, skins | kit assets | kit authoring assist | none | skin plus binding: hours [estimate]; the kit amortizes |
| 9 | Lazy generation | compile by focus and relation; semantic LOD | per-chunk if AI-made | none | none | cost ∝ entries, not existence |
| 10 | Caching | key = schema hash × kit version × tier × locale; invalidate on schema, never state | cached assets | none | none | storage, invalidation; hit rate rises with sharing |
| 11 | Device tiers | capability detection, LOD, KTX2, 2.5D, parallel-DOM generator, frame-time monitor | per-tier textures | none | none (on-device speech is a small model) | test matrix (kits × tiers), not per-system authoring |

**Boston as a data point.** Authored per place: layout, UV and bake, the bound-surface manifest (which surfaces re-texture, from which path), eight stations, copy. Shared: CC0 materials ([Poly Haven: any purpose, no attribution](https://polyhaven.com/license)), bake pipeline, HUD, station bar. Budget ~15k triangles, one draw call; no device frame-time measured. Truth survives baking because a lightmap stores light, not colour (Cycles can bake direct and indirect [without the Color pass](https://docs.blender.org/manual/en/latest/render/cycles/baking.html)), so live albedo multiplies a fixed light. It fails three ways:
1. State-dependent light. If a funded room's lamps are baked on, one state is frozen. Bake each room's light as its own group and sum at runtime (light adds linearly: k rooms, k bakes, not 2^k) [inference; check what Boston did].
2. Generated textures with lighting painted into albedo, a recurring image-to-3D flaw per comparison guides [secondary]. De-light, or restrict to decor.
3. Splat and video-world assets store radiance (albedo × light). [Marble](https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/) (World Labs, 12 Nov 2025) exports Gaussian splats and meshes; re-lighting splats needs special methods ([TranSplat, 2025](https://arxiv.org/html/2503.22676v5)). Bound surfaces cannot re-texture live.

Kit rule: declare bound channels; anything undeclared is decor. Bake neutral (no coloured bounce), colour at runtime, so one bake serves every club [inference].

**Where AI stops.** Continuous frontier AI has no seat in these eleven levers. [Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) (DeepMind, Aug 2025): 720p, 24 fps, "a few minutes" of interaction, and "clear and legible text is often only generated when provided in the input world description": per-session cost, no state binding. Google's [Generative UI](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/) (18 Nov 2025) writes HTML/CSS/JS, with "occasional inaccuracies" and generation that "can sometimes take a minute or more". [A2UI](https://developers.googleblog.com/introducing-a2ui-an-open-project-for-agent-driven-interfaces/) (15 Dec 2025) is the safer shape: agents send declarative descriptions and the client renders from its own catalog of pre-approved components. BOW's line: AI may make decor and pick catalog components; it may never draw a fact or offer an act, because neither can be bound to a path. A generated backdrop (the city in the window) carries the GENERATED stipple if anyone could read it as observed.

## 3. Two to prototype

Both are single-page HTML with vendored three.js on one fixture. The kernel must be real (one act log, one fold), not a UI store.

### P1 · One Ledger, Many Rooms (R2 + R3)

Mandatory states (2–4 are the side-by-side act; 5 and 7 are declared limits):
1. *Arrive, one view.* Owner's desk Room, one-sentence caption, frame "Boston · Year Two · Week 6 · Owner · Desk · hand-built · act 41 · 7c2e" (fingerprints are placeholders; compute the real fold). File unsigned; board $196.3M, $3.7M under the line.
2. *Pair.* Hold the view segment, choose Timeline. Two panes and a seam listing each side's cannot-show.
3. *The act.* Sign in the Room. One frame: SIGNED stamp, bar crosses the tax marker, payroll line steps over $200.0M with tick 42, Direct speaks the same act number and tokens.
4. *Follow the fact.* Touch "$22.8M over" in the Timeline: the board lights in the Room, tag "also in: board · Direct · Table"; drag to the edge to open the Room there.
5. *Cover.* Frosted rule plate ("Exact rule text isn't shown here"); "People: not recorded" plates on funded rooms.
6. *Refusal parity.* An illustrative second file would break the World's $250.0M hard limit: identical refusal in Room (stamped paper), Timeline (annotation), Direct (announcement), same rule name.
7. *Fail closed* (builder toggle). Stale Timeline binding: cover, Direct replaces it, "Do these agree?" shows the mismatch.
8. *Screen-reader run.* Room removed, keyboard only, a real screen reader recorded (NVDA or VoiceOver): live-region text verbatim, plus the described place ("Owner's desk › Trade file, signed… Beyond the glass: Analytics, dark, not funded").

**The impossible moment.** You touch a number in the Timeline and a bar lights on a wall in a room; when you sign, a screen reader speaks the same act number in the same frame.

**Anti-pattern.** Faking sameness with a shared front-end store and optimistic updates; a decorative "views agree" badge; a tab bar of views; KPI tiles for receipts.

### P2 · Three Doors, One Floor (R1 + R4 + R5)

Mandatory states:
1. *Newcomer door.* Moment M; Room at the desk plus the Plan sentence; Direct strip collapsed to one line.
2. *Operator door.* Timeline plus Table lead; Direct strip open; "Step onto the floor" one key away; the reason names what each can't show.
3. *Screen-reader door.* First tab stop declares the need; Direct leads with spatial relations as words; the Plan is read as a heading.
4. *Override.* On state 1 ask "Why not Timeline?"; swap; pin "on this device"; the address rewrites; the router stays quiet until the next moment.
5. *Compile arrives.* Harrow Medical opens with Direct and Ledger at once; a facility Room compiles lazily with the COMPILED stipple edge and "What the compiler decided"; one mapping editable.
6. *Downshift.* One address on desktop 3D, Chromebook 2.5D, phone Ledger. Carried/shed strip; matters and acts identical; ledger position unchanged.
7. *Voice.* Spoken Direct with read-back before signing; "Act 42. Recorded."
8. *Voice refusal.* The same rule text as on screen.

**The impossible moment.** Three people land at one moment in three rooms, each can say why and swap; a system nobody built arrives usable and honest about itself; on a phone with no GPU you sign the same trade with the same words and receipt as on the 3D floor.

**Anti-pattern.** A "View: 3D | Timeline | Table" dropdown in a router's clothes; responsive CSS passed off as a downshift; the compile as an LLM call that invents a scene; polishing the compiled Room until it looks hand-built; screen-reader and voice as an afterthought overlay.

## 4. What real runtime would have to exist

1. **Surface contract**: typed primitives (stock, flow, commitment, seat, rule, clock, place, actor; plus act, relation, token), versioned, seat-scoped. Derive it from three domains (Boston, equilibrium, supply chain) by writing three Direct compilers first; extract nothing until they agree (Economics Live §12). PROPOSED.
2. **Kernel**: act ledger → state → Delta bus with receipts. PROPOSED; the lockstep fold is prototype-grade.
3. **Bindings table, ShownSet API, Concordance checker.** PROPOSED.
4. **Representation registry** with manifests: kinds rendered, cannot-show, inputs, tiers, origin, review state. PROPOSED.
5. **Router** with a local-first declared profile (access needs are sensitive: asked, never inferred) and an override store. PROPOSED.
6. **Compilers**: Direct, Ledger, Diagram, Map deterministic; Space through kits. PROPOSED.
7. **Kit registry and asset intake**: neutral bake, KTX2, likeness screen, hashing, content-addressed cache. The Boston pipeline is the seed (REAL CURRENT, unmerged).
8. **Parallel-DOM generator** from place primitives. PROPOSED.
9. **Tier detection, frame-time monitor, on-device voice with read-back.** PROPOSED.
10. **Pack sandbox, conformance CI, origin marks, promotion pipeline.** SPECULATIVE FRONTIER at open scale.

## 5. What would falsify this area's thesis

- Receipts and Concordance do not improve seeded-defect detection or trust (R2). Then sameness is felt without proof and the mechanism is waste.
- Screen-reader users find compiled Direct lacks what the Room gives (opportunity cost, adjacency). Then "translate the relation into words" fails.
- Compiled Rooms are oatmeal and Table wins the task. Then compile Direct, Ledger and Diagram only.
- Newcomers override the Plan's first choice within a minute in a large share of sessions (the founder sets the bar). Then the rule table is wrong.
- Covers go unread and false certainty is unchanged.
- Most of the three test domains need a new primitive. Then the Surface is premature extraction.
- Denver from the kit and Harrow by compile cost as much human time as Boston did. Then the economics fail. Measure first: hours per system, primitives that bent, override rate, time to first act on a Chromebook.
