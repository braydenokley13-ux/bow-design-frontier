# 03 — Spatial / 3D: PLACE as a representation of canonical state

Read-only; nothing was run, so every "code does" claim is from reading. **EARNED** means implemented (test-covered where cited), not valued by students: W's doc says "human desire to return: unknown", and every visual critic so far is an AI judging SwiftShader frames.

## Bottom line

- A place is truthful when it is a **disclosure discipline**, not a scene: a pure function from a labelled state cut to carriers, each bound to an object id and source path, with a Direct reading of the same words and no authority. **EARNED** (W-3D, W).
- "NO SEMANTIC PROP WITHOUT CANONICAL TRUTH" points the right way but is unenforceable as worded. The code already hit three cases it misses: false absence, false precision, unknown drawn as a value. Section 2 gives a five-rule rewrite. **HYPOTHESIS** (each rule is EARNED somewhere).
- The inverse is already a product law (D253) and paid off. It fails when a carrier's salience implies a mechanism the model lacks, or its resolution exceeds its source.
- **PLACE verdict:** canonical state **REJECTED**; thin state-free address/index **HYPOTHESIS** (same shape in W and DC); representation family **EARNED locally**, and as a platform item only "the laws", **HYPOTHESIS**. Not an engine.

Where the code disagrees with the brief: topology is a static schema constant (`HARBOR_SPATIAL_PLACES/EDGES`), not saved state. Narrow screens and reduced motion do not switch Boston to Direct (a chosen tier there). W opens picture mode when WebGL fails or a saved pose is blocked.

## 1. What makes a place truthful (code)

1. **One projection, two readers.** Props come from pure story functions (`floorStory`, `historyStory`, `arenaStory`, `stepLines`); Direct reads the same ones, and tests assert Direct carries each line with its path. EARNED.
2. **Binding by id.** Groups carry `objectId`/`sourceIds` (`repair-zone:<id>`, `tagged("department:<id>")`); a "Why is this here?" panel shows the path. DC's Avery room binds by substring (`obligationId.includes("rent")`), the weak form. EARNED, with that contrast.
3. **Carrier kind follows state kind.** Stock becomes countable objects (one cart per available worker). A promise becomes a stamped paper, a schedule calendar slots, capability a lit room versus drawn blinds, condition surface wear, the past a monument, scar or absence. Presence becomes a figure only for `kind: person, status: present`. W names six forms: document, calendar, equipment, surface, archive, person. Unfunded bays "stay empty" (`nbaWorldSpace.ts:562`). EARNED.
4. **Gaps are typed, not painted.** `physical: "unknown"` is a literal type, so no code can build "present". Also `exactGameDay: "unknown"`, `paidAtOffer: false`, `Fact<T> | Unknown`, `capacity.status: "modeled"`. A scheduled institution becomes road cases, never a person. "A paid department is capability, not evidence that anyone is in a room." Direct lists "Not in the model yet"; God View says "Not in this room / Not in this save". EARNED.
5. **Look-by-knowledge (D256–D259).** Played: people at the exact saved count. Forecast: flat marks on a cover, capped at the crowd's brightness and saturation. Unknown: a cover with words. The test is comparative: two saves differing only in what the owner knows must differ only in that look. Gate A-3 itself said "dark ticketing leaves the bowl empty", which teaches "paying fills seats"; a critic caught it. EARNED.
6. **Cut named in place.** `lifecycle: current | retained | archived`; "never use the retained archive as today's arena"; the arena opens on the last played night and says "A played night · on file"; Inez leaves when the day advances. EARNED.
7. **No authority in the scene.** Adapters never import a reducer, write storage or advance time; activation returns to host navigation. W's walking paper does submit, but via the shared save-first path, rejecting a stale revision and non-legal options: authority sits in the paper, not the scene. DC: the scene "never owns a world machine"; `KitPlace` takes actions as injected slots. EARNED, RECURRING W↔DC.
8. **Lifecycle.** W pauses hidden/offscreen and caps 30 fps; the Boston engine renders only when dirty. The NBA mount's `versionKey` keeps the GPU across unchanged polls, remounts on change, and guards `destroyed` after the lazy import. Boston's `show()` awaits the level load with no in-flight or disposal guard and repaints every update, so overlapping calls could load twice (reading only). EARNED (W) / RISK (Boston).

## 2. Attacking the rule

Counterexamples from the code:
- **State-conditioned atmosphere.** The repair zone's sander, boards and pails exist because days are closed but are authored; `cases = dates.length * 2` invents a count. Only the sign is true.
- **Unknown drawn as a value.** Harbor's unknown floor is drawn at condition 100 (pristine) while the paper says "not recorded"; unknown crew draws zero carts. That is D256's failure, repeated.
- **Absence with no source.** `no-coach-seat` has `sourceIds: []`; "not yet reached" looks like "declined".
- **Silent truncation.** `slice(0, 8)` on history; scars are ordered last, so they drop first.
- **Precision laundering.** 18,624 individual seats, but capacity is a dated snapshot figure, sections are `round(cap × share)`, and W labels capacity "modeled".
- **Light as a time claim.** Boston's fixed morning is house style (time of day is unknown); Harbor's light varies with state, so there it is a claim.
- **External facts.** The real 2025-26 record and arena capacity are dated sources, not the save; a standing line says "real clubs and players, a simulated season".
- **Decorative crowds** are safe only where no attendance state exists; the frontier already refuses "crowds with no reason to be there".

What the rule must say:
- **R1 Claim.** An element is claim-bearing if its presence, count, form, text, colour or emptiness varies with state, or a Grade 5–6 student comparing two saves could read it as fact. It carries objectId, source path and epistemic class (actual, modeled/estimate, unknown, rule, dated-external). All else is atmosphere, identical across histories at the same cut.
- **R2 Absence.** Empty, dark, "none" and neutral defaults are claims: they need negative provenance, and unknown gets its own look.
- **R3 Precision.** Carrier resolution must not exceed source resolution; otherwise label it "arrangement, not record".
- **R4 Tier.** Tiers change fidelity, never existence, count or look of claim-bearing elements. Code: "state, marks, variants and structure never are [dropped]"; "same seats, same count". Harbor's generic bowl thins seats only because it carries no count.
- **R5 Cut.** Each claim-bearing group names its cut and is rebuilt and disposed on cut change.

Enforce by counterfactual pairs: render two fixtures differing in one fact; changed elements must equal the carriers registered to that fact, and knowledge-only pairs may change only epistemic markers. `describe()` on the props is a proto-registry. HYPOTHESIS.

## 3. The inverse: important state should have a perceptible carrier

Already law: D253 ("a spending choice that changes a place must be visible from that place's first arrival view"); the critic measured the rail changing 25% between invested histories (a doc claim, not a repo test); D255 makes ticketing a crowd you can stand in front of; W's arrivals face papers within 4.1 m.

Harmful or costly when:
- **Salience implies a mechanism.** The funded-ticketing bowl taught "paying fills seats"; it only buys information (D256).
- **Resolution exceeds source** (the seat-by-seat bowl).
- **Private carriers reach `/board`** (E-main §11).
- **Budget.** School under 250 draws; arena 7.8 MB glb plus 2.5 MB manifest; 13-minute bake.
- **Sprawl.** Cash and community trust have "no recorded cause", so they get no carrier.

"Important" should require all of: decision-attributable ("our decision caused that?"), history-divergent across the three reference histories, answers a written player question (NB-001 style), and has a recorded cause. Then pick the cheapest sufficient carrier: paper text, lit/dark variant, morphology, population. Carrier-less state is tracked as debt: GV-002 (two of ten steps "not in this room"), OC-001, HM-001.

## 4. Does PLACE deserve platform status?

**For.** The same constraints appeared independently: in DC across at least five families (`KitPlace` in live, Moment, Teacher and Home; SecondRoom; FirmCounter; Avery; District) and in W/W-3D. Both keep a state-free address (W: id, role, purpose, no coordinates; DC: `connectsTo`, "no assessment facts"). Both host a place at a live and a historical cut, and both say looking starts nothing. W's founding law (an object shows something happened, promised, owed or decidable) is DC's obligation model. Place adds co-visibility ("transparency is the organization"), which a paper cannot.

**Against.** No shared code; adapters are per-place (`harborFacts`, `bostonFacts`). Codex split topology from metres so coordinates are not shared. DC treats the room image as atmosphere and keeps evidence in semantic HTML. E-main §12 forbids extraction from two data points. W keeps 2.5D, 3D and picture side by side until players decide.

**Verdict.**
- Canonical state: **REJECTED**. It would be a second truth; coordinates and pose are presentation.
- Thin index (id, role/purpose, adjacency; things attach to addresses): **HYPOTHESIS**. Extract the rule, not the code.
- Representation family: **EARNED locally**; as a platform item **HYPOTHESIS**, and only as R1–R5 plus parity plus no authority.
- Suggested sentence: "A place is a state-free address plus carrier slots keyed by canonical object id; a place view is a pure function of a labelled state cut, with a Direct reading of the same words and no authority." Confidence: medium.

## Refusals to generalize

- Only Boston has a baked building; other clubs keep the host's space.
- Topology is Codex's; metres are the renderer's.
- E-main §10, §12: no shared engine, no motif system.
- DC: the district address holds "no assessment facts or student history"; looking around "starts no work".

## Sources

- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/ARCHITECTURE_REQUESTS.md:13-27,32,61,95
- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/VISUAL_OWNERSHIP.md
- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/ART_DIRECTION.md:70-82
- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/VISUAL_EVIDENCE.md:389-408
- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/PERFORMANCE_LEDGER.md
- W-3D:docs/PRODUCT_DECISIONS.md:9310-9410 (D251–D259)
- W-3D:runtime/src/client/world/frontier/stateProps.ts:1-15,29-41,108-118,180
- W-3D:runtime/src/client/world/frontier/historyProps.ts:1-17,86,114,224
- W-3D:runtime/src/client/world/frontier/causalView.ts:1-14,73
- W-3D:runtime/src/client/world/frontier/bostonArenaFacts.ts:1-6,31-36,56,80
- W-3D:runtime/src/client/world/frontier/bostonFacts.ts:16,49,130
- W-3D:runtime/src/client/world/frontier/bostonBuilding.ts:137,371,479-491,515-519,580
- W-3D:runtime/src/client/world/frontier/bostonWorldSpace.ts:1-8,51
- W-3D:runtime/src/client/world/frontier/bostonArena.ts:315,341-346
- W-3D:runtime/src/client/world/frontier/engine.ts:18,206-214
- W-3D:runtime/src/client/world/frontier/bakedLevel.ts:56,210
- W-3D:runtime/src/client/world/frontier/arena.ts:96,136
- W-3D:runtime/src/client/world/frontier/harborFacts.ts:44-46
- W-3D:runtime/src/client/world/frontier/harborWorldFacts.ts:9-15
- W-3D:runtime/src/client/world/frontier/bakedWorld.ts:190,210,214
- W-3D:runtime/src/client/hq/nbaWorldSpace.ts:1-8,30,534,562-571,663,708,736-741,766-771,781-786
- W-3D:runtime/src/modules/worldOne/nbaActorRoleProjection.ts:15-18
- W-3D:runtime/src/modules/worldOne/arenaV4.ts:35-40
- W-3D:runtime/src/test/nbaActorRoleProjection.test.ts:16-40
- W-3D:runtime/src/test/bostonArena.test.ts:49,69
- W-3D:runtime/src/test/bostonGodView.test.ts:126
- W:docs/campaign/bow-worlds-complete-ultra-20260925/SPATIAL_WORLD.md:5
- W:docs/campaign/bow-worlds-complete-ultra-20260925/3D_CHALLENGER.md:20,38
- W:docs/campaign/bow-worlds-complete-ultra-20260925/ENVIRONMENTAL_MEMORY.md (Limits)
- W:runtime/src/client/world/harborPlaceTopology.ts:1-29
- W:runtime/src/client/world/harborSpatialLayout.ts:1
- W:runtime/src/client/world/harborSpatialProjection.ts:14,43-44
- W:runtime/src/client/world/harborActorPresence.ts:14,47-51,92-93
- W:runtime/src/client/world/walkingPaper.ts:19,25-38,49-59
- W:runtime/src/client/world/arena3dChallenger.ts:8-13,1311,1362,1433,1446
- W:runtime/src/modules/worldOne/nbaInstitutionMorphology.ts:59,98,129,140-146
- W:runtime/src/modules/worldOne/nbaArenaProjection.ts:1,7-8,27,75,85-88
- DC:src/stages/budgeting/P1V6ResponsibilityWorld.tsx:8,46-58,153,415,430-436
- DC:src/student/StudentPlaceScene.tsx:18,32-34
- DC:src/student/districtGeography.ts:1-3
- DC:src/consequential/secondRoom/SecondRoomPlace.tsx:9
- DC:src/consequential/system/secondRoomV1.ts:120-140,217
- DC:src/consequential/kitReturn/KitPlace.tsx:29
- DC:docs/campaign/bow-consequential-os-ultra-20260925/NEXT_SESSION_START_HERE.md:9
- E-main:CLAUDE.md#10,#11,#12
