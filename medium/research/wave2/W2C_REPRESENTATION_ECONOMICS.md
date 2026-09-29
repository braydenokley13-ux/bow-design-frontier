# W-2C — Representation generation economics

Read-only; nothing built or run. **EARNED** = BOW code read this session; **HYPOTHESIS** / **SPECULATIVE FRONTIER** = otherwise; **REJECTED**. External facts are dated (today 2026-09-29) with URLs in Sources; **[memory]** = not re-verified. Authoring-effort figures are my estimates.

## Bottom line

1. **Billions of systems are reachable only through Direct-class families.** Direct text, tables, timelines, documents and derivation graphs are pure functions of a typed projection: zero marginal authoring, and the record is the storage. Even at Marble's API price (US$1.20 per world, Aug 2026) a billion 3D worlds is US$1.2 billion. HYPOTHESIS (arithmetic on a cited price).
2. **3D place should be a pack, not a per-system asset.** State binds at runtime. EARNED in miniature: W-3D props "are rebuilt on every rebind from facts and never baked", so a different history is a different floor with no Blender rebuild (`stateProps.ts:1-15`).
3. **Generation compute is not the expensive layer; authoring, verification and rights review are.** A 13-minute CPU bake is about four cents of cloud time (my arithmetic on c7i.large US$0.089/h, doubled for 4 vCPU). Boston needed a 1,335-line hand-written Blender level script and many critic-repair loops (ledger repairs run to "repair 6"). HYPOTHESIS.
4. **Generative AI is safe only for a layer provably history-invariant.** Make that a hash check across counterfactual fixtures, not a promise. HYPOTHESIS.
5. **No router exists in BOW.** Five quality tiers exist (`presentation, full, balanced, school, direct-accessible`, `CAMPAIGN_STATE.json#qualityModes`), but they are user-chosen; per report 03 narrow screens and reduced motion do not switch Boston to Direct. EARNED (absence).

## 1. Representation families and authoring cost classes

**C0** function of projection alone; **C1** plus a per-system-type label schema; **C2** plus a per-vertical pack; **C3** bespoke per place; **C4** produced media.

| Family | From projection alone? | Class | Status |
|---|---|---|---|
| Direct / semantic text | Yes, given a sentence template per fact kind | C1 | EARNED as hand-written story functions (`floorStory` 4 kinds, `historyStory` 4 kinds x 7 forms, `arenaStory`); test "Direct says every line" (`bostonArena.test.ts`). Generic generator: HYPOTHESIS |
| Table, document | Yes | C0 | A Fact/Unknown row already has value, status, source, cut. HYPOTHESIS |
| Timeline | Yes, if events are typed and sequenced | C0 | Sequence order is CANON-CANDIDATE (synthesis #5) |
| Derivation graph | Yes, from cited rule and source path | C0-C1 | DC provenance edges, W causal projection (report 03) |
| Chart | Where measure and axis are typed | C1 | Vega-Lite precedent; its default descriptions are minimal, so ship a table beside it |
| Map | Only if a geo fact exists | C1 | Never invent geography |
| Audio / sonification | Numeric series | C1 | Untested in BOW. SPECULATIVE |
| Film / replay | From recorded inputs plus a vertical renderer | C2-C3 | EARNED for Court only (`possessionReplay.ts`, 756 lines) |
| 3D place | Template plus carrier registry | C2 pack / C3 flagship | Sections 3, 5 |
| Molecular | Needs instrument, uncertainty, rival models | C3 | Unbuilt (synthesis #44) |
| Spatial computing, physical device | Inherit the 3D pack or a table export | C2 | SPECULATIVE |

## 2. State of the art: production-usable versus demo

| Technology | Fact (date) | Verdict for BOW |
|---|---|---|
| Procedural: Houdini, CityEngine, Infinigen, ProcTHOR, WFC | CityEngine 2026 (2026-07-13): US$2,200/4,200 a year, exports FBX, Alembic, USD. Houdini Indie is for creators under US$100K revenue. Infinigen Indoors (BSD): constraint DSL plus solver. ProcTHOR: 10,000 houses from 1,633 assets. WFC: local constraints only. | **Production-usable, deterministic, reviewable.** Model for a compiler: typed spec plus fixed asset library |
| Text/image-to-3D | Meshy 20-35 credits, Tripo 20-50 credits at US$1 per 100; my arithmetic US$0.2-0.5 per raw asset. 2026 tooling focus is retopology, UV, conversion. | **Props only, after review.** Never count, presence or identity |
| Gaussian splats | glTF `KHR_gaussian_splatting`: README read 2026-09-29 says "Ratified" (Feb 2026 press expected Q2). Spark 2.0 (2026-04-14): streamed LoD on WebGL2, 0.5-2.5M splat budget, typical scenes 20-200 MB. | **Atmosphere.** Splats have no object identity |
| World models | Project Genie opened 2026-01-29 to US AI Ultra, 60-second limit. Marble exports splats and GLB. AMD announced buying World Labs 2026-09-28, silent on the API. Open video-diffusion costs about US$2.5-3.2 per generated minute on H100 rental (vendor estimate). | **Demo.** Continuity risk, nondeterminism, no object ids |
| OpenUSD | Core Spec 1.0, 2025-12-17. Variant sets fit "same place, N variants". | Authoring only; delivery stays glTF (EARNED in W-3D) |
| glTF delivery | Meshopt, KTX2 (one sample 43 to 29 MB). `EXT_mesh_features` / `EXT_structural_metadata` put ids and metadata inside an asset. | Production-usable. W-3D lists meshopt and KTX2 as "next cuts". Id extensions: candidate carrier binding, HYPOTHESIS |
| WebGPU, Chromebooks | ChromeOS since Chrome 113 only on Vulkan devices; Android 121+; Safari 26; Firefox 141 Windows. three.js r186 (2026-09-08) `WebGPURenderer` falls back to WebGL2. Typical school Chromebook listing: Celeron, 4 GB. | **WebGL2 is the floor.** EARNED: School budget (<250 draws) is measured on SwiftShader only, "not frame-time evidence" |

## 3. Semantic-to-spatial compilation

Today the compiler is hand-written conditionals: each `historyStory` case picks ids, invents a form, writes a sentence, then `slice(0, 8)` truncates silently (`historyProps.ts:86-122`). EARNED. A real one needs little:

- **Vocabulary (HYPOTHESIS).** `StateKind` (stock, promise, schedule, capability, condition, past, presence) maps to `CarrierKind`: W's six forms (document, calendar, equipment, surface, archive, person) plus countable and light-state. A **place template** is a state-free index (report 03) whose **slots** declare accepted object kind, capacity, allowed carriers and a Direct sentence template. "A paid department is a lit room", "one cart per available worker", "a promise is a stamped paper" become registry rows.
- **Emit both readers at once.** Carriers and their Direct line come from one pass, so parity holds by construction. Overflow becomes a declared summary carrier, never truncation. Facts with no slot go on a "not in this room" list (EARNED in Direct, GV-002).
- **R1-R5 as build checks (HYPOTHESIS; each EARNED somewhere as a hand-written test).**
  1. *Totality (R1).* A carrier whose slot reads state needs objectId, source and status, or the build fails. Classify by data flow: anything read from the projection is claim-bearing, whatever its author intended.
  2. *Counterfactual sweep (R1, R2).* Perturb each canonical field; changed nodes must equal the carriers registered to it. Unregistered fields are reported as carrier debt. Knowledge-only pairs change only epistemic markers (the D256 lesson).
  3. *Precision (R3).* Carrier count equals fact cardinality, or the slot declares "arrangement, not record". Today `manifest.seats.instances.length == saved seats` is checked by hand.
  4. *Tier invariance (R4).* Render every tier; the claim-bearing set must match.
  5. *Cut (R5).* Groups rebuild on cut change.
  6. *Atmosphere hash.* The non-claim subtree is byte-identical across fixtures at one cut. This licenses AI-made atmosphere.
- **Generative AI safe:** sky and skyline, materials, history-invariant dressing, draft template code (the W-3D level scripts were agent-written), all tagged GENERATED. **Unsafe:** anything whose presence, count, form, text, colour or emptiness varies with state.
- **Restraint.** E-main §12 forbids extracting an engine from two data points. Prototype once inside W-3D; extract the rule, not the code.

## 4. The router

**Inputs:** available projection kinds (with cut and audience), role, question ("what happened", "how do we know", "what if", "where"), device (viewport, WebGL2 or WebGPU, input), accessibility need, scale (object to league), task (audit, teach, present, decide). **Output:** an ordered plan with a reason per entry ("why this view?"). HYPOTHESIS.

- **Where it lives.** The **system spec** declares valid families and pack ids; **packs** declare capability and cost class; the **browser client** resolves the plan at view time. The server never routes: a server-chosen representation leaks audience and folds representation into the record, against the rule that representation is negotiated apart from identity (synthesis §4).
- **Hard rules.** Direct is always producible. An accessibility need is a constraint, not a preference. Device limits change fidelity tier only, never the existence of a claim-bearing element (R4). If a pack fails, fall back to Direct plus a still picture, as W does when WebGL fails.
- **User-controllable:** representation, tier, motion, audio, "show me the source", reading level, and a teacher pin for `/board` (EARNED pattern: teacher paces, manual fallback, E-main §11). No engagement-optimized routing.

## 5. Build economics

| | (a) Direct-only | (b) Templated pack | (c) Bespoke flagship (Boston) |
|---|---|---|---|
| One-time | Label schema, sentence templates. Hours to days (est.) | Kit, template, level script, bindings, 5+ reducer-built fixtures. Weeks (est.). Harbor: 504-line script, 20.5 MB (133 MB before instancing) | `boston_ops_level.py` 1,335 lines, arena 482, TS bindings 582 + 532 + 348; slices B1-B3, arena A4-A11 with repairs; 29 MB glb, 13-min bake (EARNED, ledger) |
| Per system | about zero | Binding map plus fixtures, tens to hundreds of lines (est.) | Not reusable: "only Boston has a baked building" |
| Compute | client-side | bake cents; raw AI props about US$10-100 per pack; review dominates | same, plus repeated critic and device passes |
| Delivery | none beyond the record | 10-30 MB cached; R2 US$0.015/GB-month, egress free | 30 MB plus 2.5 MB manifest |

**Expensive to operate:** verification (no Chromebook run of the School tier yet, V-01); rights review of anything real-world; vendor continuity (AMD/World Labs); live generation (30 students for 45 minutes at US$2.5 a generated minute is about US$3,000 a class period, order of magnitude, not a Genie price).

**Business shape (HYPOTHESIS).** Free: everything at C0-C1, which costs nothing to serve, and Direct parity is a truth-and-access law, not an upsell. Paid: curated packs and flagship places, licensed per vertical, baked once per pack version, served as content-addressed static files. No on-demand generation per view. The US Copyright Office (2025-01-29) found prompt-only AI output uncopyrightable, so generated assets may give no exclusivity; human-authored arrangement and code are the moat.

## 6. Rejected ideas

- **AI crowds, staff or fans as ambience.** Implies attendance or presence. W-3D refuses "crowds with no reason to be there" and shows "People: none yet" for lack of presence truth (`ART_DIRECTION.md`). EARNED.
- **Generated props implying unrecorded facts:** stacked cash, a full trophy case, a busy office, a filled bowl for a forecast. The funded-ticketing bowl taught "paying fills seats" (D256). EARNED.
- **LLM-written Direct lines for claim-bearing facts.** One 2025 study finds data-to-text inconsistency worsens with model size. Use templates. HYPOTHESIS, one study.
- **Live world-model views as a place of record:** no object ids, 60-second memory, unrecorded nondeterminism.
- **Splat scans of a real venue as state:** a captured instant is not the save's cut (R5), and a rights question.
- **Generated likeness of real named people** (the rights class report 03 separates from public facts), and **AI upscaling of low-resolution facts** (R3).
- **A shared generic compiler now** (E-main §12).

## Cheapest falsifier

Script the counterfactual sweep over W-3D's nine `fixtures/boston/*.json`: perturb each canonical field and count fields that move no registered carrier and no Direct line. That count is the carrier-debt baseline and shows whether R1-R5 are checkable at all.

## Sources

- DF:medium/research/wave1/03_SPATIAL_PLACE.md (R1-R5, carriers, budgets); PARENT_SYNTHESIS_W1.md rows #5, #7, #9, #25-27, #40, #44
- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/PERFORMANCE_LEDGER.md (draw budgets, payloads, bakes); ART_DIRECTION.md (pipeline, "must not copy", people none yet); VISUAL_OWNERSHIP.md; CAMPAIGN_STATE.json#qualityModes
- W-3D:tools/frontier/blender/{boston_ops_level,boston_arena_level,harbor_level,nba_office_level,bake}.py (line counts by `wc -l`)
- W-3D:runtime/src/client/world/frontier/{stateProps.ts:1-15, historyProps.ts:86-122, possessionReplay.ts, bostonBuilding.ts, bostonSurfaces.ts, bostonArena.ts, fixtures/boston/}; runtime/src/test/bostonArena.test.ts
- E-main:CLAUDE.md §11, §12
- Genie 3 / Project Genie: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/ ; https://9to5google.com/2026/01/29/google-project-genie/
- Marble: https://docs.worldlabs.ai/marble/export/gaussian-splat/index ; pricing via https://www.therundown.ai/tools/marble (secondary, as of 2026-08-28)
- AMD / World Labs (2026-09-28): https://www.cnbc.com/2026/09/28/amd-fei-fei-li-world-labs.html ; https://techcrunch.com/2026/09/28/amd-will-acquire-fei-fei-lis-world-labs-for-8-2-billion/
- Spark 2.0: https://www.worldlabs.ai/blog/spark-2.0
- KHR_gaussian_splatting: https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_gaussian_splatting/README.md ; https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release
- glTF metadata: https://cesium.com/blog/2022/05/31/fine-grained-metadata-in-3d-tiles-next/ ; compression: https://meshoptimizer.org/gltf/ ; https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md
- OpenUSD: https://aousd.org/news/core-spec-announcement/
- Meshy: https://docs.meshy.ai/en/api/pricing ; Tripo: https://docs.tripo3d.ai/get-started/pricing.html ; Meshy per-credit rate (third-party): https://stacksheriff.com/ai-tools/meshy-ai-pricing/ ; 2026 tool state: https://www.rundiffusion.com/ai-3d-model-generators
- CityEngine 2026: https://www.cgchannel.com/2026/07/esri-releases-cityengine-2026/ ; Houdini: https://www.sidefx.com/buy/ (Indie under US$100K; prices not shown)
- Infinigen Indoors: https://arxiv.org/abs/2406.11824 ; ProcTHOR: https://github.com/allenai/procthor ; WFC limits: https://www.iccs-meeting.org/archive/iccs2025/papers/159090105.pdf
- WebGPU: https://web.dev/blog/webgpu-supported-major-browsers (2025-11-25) ; https://developer.chrome.com/blog/webgpu-release ; three.js: https://www.utsubo.com/blog/threejs-2026-what-changed (secondary)
- Chromebook specs: retail listing https://www.amazon.com/HP-Chromebook-College-Students-Processor/dp/B0C85PJK8B (weak source)
- World-model GPU cost: https://www.spheron.network/blog/gpu-infrastructure-world-models-2026/ (vendor blog, estimates)
- Cloud pricing: https://developers.cloudflare.com/r2/pricing/ ; AWS c7i.large US$0.089/h via https://calculator.holori.com/aws/ec2/c7i.large (secondary)
- Data-to-text faithfulness: https://arxiv.org/abs/2502.12372 (2025-02-17)
- Copyright: https://www.copyright.gov/newsnet/2025/1060.html
- Vega-Lite accessibility: https://github.com/vega/vega-lite/issues/6603 ; https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.14833
- **[memory], not re-verified:** ProcTHOR/Infinigen details beyond the abstracts; Vega-Lite as grammar-of-graphics precedent; sonification precedent.
