# BOW Representation Contract v0 (proposal)

Status: proposal, 2026-09-29. It governs how any BOW instance becomes perceptible (3D, Direct, document, timeline, graph, map, film, audio, spatial computing, device) without ever becoming a second source of truth.

Labels follow the Vocabulary. A law marked **RECURRING** is enforced today, in different code, in both Decision Challenges and Worlds. **HYPOTHESIS** means proposed.

## 1. The pipeline

```
SYSTEM version ─► INSTANCE record ─► CUT (instance, position)
                                         │
                            PROJECTION(cut, audience)          ← what may be known, by whom (pure, no writes)
                                         │   [Fact | Unknown] with status, source, cut
                                         ▼
                REPRESENTATION(projection, question, device, access need, scale, task)   ← how it is perceived
                                         │
                   carriers (claim-bearing, bound)  +  atmosphere (history-invariant)
```

Three separations carry the whole contract:

1. **Projection ≠ representation.** A projection decides **what** an audience may know at a cut. A representation decides **how** that is perceived. Every leak and every lie in the evidence came from blurring the two. RECURRING: W `hqView`/`boardView` feeding W-3D adapters; DC Teacher exact reader feeding pages. Sources: 02, 03.
2. **Carrier ≠ atmosphere.** A carrier is any element whose presence, count, form, text, colour or emptiness **varies with state**, or that a Grade 5–6 student comparing two saves could read as fact. Everything else is atmosphere and must be identical across histories at the same cut. EARNED in W-3D; DC treats "the room image as atmosphere". Source: 03 §2 R1.
3. **Representation ≠ authority.** Nothing drawn can act. RECURRING. W-3D adapters "never import a reducer, write storage or advance time". DC's scene "never owns a world machine", and `KitPlace` takes actions as injected slots. Source: 03 §1.7.

## 2. Laws: what a representation must never do

| # | Law | Enforcement (how to test it) | Label |
|---|---|---|---|
| **L1** | **Never write.** A representation may *relay* an occupant's act only through the instance's ordinary action path, with the act's BASIS attached. It may never mutate, advance time or choose. | The adapter has no import path to reducers or storage (static check). W's walking paper submits through the shared save-first path and rejects a stale revision. | RECURRING |
| **L2** | **Never widen.** Show nothing the projection did not grant, and leak nothing through layout, count, ordering, animation timing, occlusion or the existence of an empty slot. | Render the same cut for two audiences; the representation diff must be a subset of the projection diff. Known hole: id gaps and timing reveal existence (04 #7). | Display-level RECURRING; **inference-level not achieved** (08 P9) |
| **L3** | **Never upgrade status.** A MODELED value never looks RECORDED; an ASSERTED promise never looks paid; a forecast never looks played. | Knowledge-only counterfactual pairs may change only epistemic markers (D256–D259). | EARNED (W-3D) |
| **L4 (R1 Claim)** | Every carrier is bound to **object id + source path + status + cut**. Anything read from the projection is claim-bearing, **whatever its author intended** (classify by data flow). | Build fails if a state-reading slot lacks a binding (totality check). | HYPOTHESIS; each part EARNED somewhere |
| **L5 (R2 Absence)** | Emptiness, darkness, "none" and neutral defaults are claims. They need negative provenance, and UNKNOWN has its own look, **never a default value**. | Counterexample to remove: Harbor's unknown floor is drawn pristine (condition 100). | HYPOTHESIS (counterexamples in code, 03 §2) |
| **L6 (R3 Precision)** | Carrier resolution must not exceed source resolution. Otherwise label it "arrangement, not record". | Counterexample: 18,624 individual seats drawn from a modeled capacity split. Check: carrier count = fact cardinality, or a declared arrangement. | HYPOTHESIS |
| **L7 (R4 Tier)** | Fidelity tiers (presentation, full, balanced, school, direct-accessible) change fidelity only. They never change the existence, count or look of a claim-bearing element. | Render every tier; the claim-bearing sets must be equal. | EARNED where tested ("same seats, same count") |
| **L8 (R5 Cut)** | Each claim-bearing group names its cut, is rebuilt and disposed when the cut changes, and is **never shown as current when it is not**. | "Never use the retained archive as today's arena"; "A played night · on file". Known risk: Boston `show()` has no in-flight or disposal guard (03 §1.8). | EARNED (W), with a known risk |
| **L9 Salience** | A carrier must not imply a mechanism the SYSTEM does not contain. | Counterexample: the funded-ticketing bowl taught "paying fills seats" when funding only bought information (D256). Check: counterfactual pair on the *mechanism* (funding with and without attendance change). | HYPOTHESIS (lesson EARNED) |
| **L10 Direct parity** | For every (cut, audience), the **Direct** reading is complete. Every richer representation's claim-bearing inventory is a subset of Direct's, and the same words back both. | Emit carrier and Direct line from one pass (parity by construction). Today's hand test: "Direct says every line". | RECURRING (W-3D story functions; DC semantic HTML) |
| **L11 Viewer control** | The viewer can always switch representation, tier, motion and audio, and can always reach Direct and "show me the source". An accessibility need is a constraint, never a preference to be optimized away. | UI audit; the E-main pattern of a teacher pin and manual fallback for `/board`. | HYPOTHESIS |
| **L12 Atmosphere honesty** | Generated or decorative content may appear **only** in the atmosphere layer and is tagged GENERATED. It never shows counts, people, attendance, identity or state. | **Atmosphere hash:** the non-claim subtree must be byte-identical across counterfactual fixtures at one cut. | HYPOTHESIS (W2-C) |
| **L13 Public audience** | Public surfaces (projector, embed, publication) never receive a seat identity and never render seat-private carriers. | Structural: the public view function takes no seat parameter. | EARNED (E-main `boardView`; W) |

**What happened to the draft rule.** "NO SEMANTIC PROP WITHOUT CANONICAL TRUTH" points the right way but cannot be enforced as worded, and it misses false absence, false precision and unknown drawn as a value (03 §2). L4–L9 replace it.

## 3. The inverse law: important state gets a perceptible carrier

"Important canonical state should have a perceptible carrier when that creates real value." It is already law in W (D253): *a spending choice that changes a place must be visible from that place's first arrival view*.

**"Important" means all four of the following** (03 §3; HYPOTHESIS):
1. It is **decision-attributable** ("our decision caused that?").
2. It is **history-divergent** across the reference histories.
3. It answers a **written player or learner question**.
4. It has a **recorded cause**.

Then choose the **cheapest sufficient carrier**: paper text, then a lit/dark variant, then morphology, then population.

**When the inverse is harmful:**
- when salience implies a false mechanism (L9);
- when resolution exceeds the source (L6);
- when a private carrier would reach a public surface (L13);
- when there is no recorded cause (W's cash and trust have none, so they get no carrier).

State that deserves a carrier but lacks one is tracked as **carrier debt**. W already tracks GV-002 (two of ten steps "not in this room"), OC-001 and HM-001.

## 4. Place

**Verdict:**
- **PLACE is not canonical state.** REJECTED; see K14.
- A spatial attribute that a rule reads (capacity, adjacency cost, travel time) is ordinary state in the SYSTEM schema.
- **Place as a thin, state-free index** is a HYPOTHESIS (03 §4): id, role/purpose and adjacency. Carrier **slots** declare the object kind they accept, their capacity, the allowed carrier kinds and a Direct sentence template. Things attach to places by object id.

The same shape appears independently in both products. W's `HARBOR_SPATIAL_PLACES/EDGES` has no coordinates. DC's district geography holds "no assessment facts or student history" and says "looking around starts no work".

**What place adds that a page cannot:** co-visibility, meaning several states seen together in one glance ("transparency is the organization"). That is its only defensible claim to value. Human value is **unknown**: no student has walked a BOW place (03).

**Suggested sentence:** *"A place is a state-free address plus carrier slots keyed by canonical object id. A place view is a pure function of a labelled state cut, with a Direct reading of the same words and no authority."*

**Real geography (from the founder's two-meanings test, Contract §6).** Drawing a system on real geography is a representation of **grounding references**. The rules below are HYPOTHESIS; the base-geography reuse is subject to licence.

- **Base geography** (streets, footprints) is Reality, shown as OBSERVED with its source, date and licence. It is **atmosphere unless a rule reads it**.
- **An authored facility placed on real ground** (a BOW-authored headquarters on a real street) is a carrier with relation **located-at** or **depicts** and status **AUTHORED**. It must be perceptibly different from observed buildings, and its Direct line must say it is authored. **3D realism must never imply physical existence** (L3, L9).
- **Two systems at one real site are drawn as co-located, never as connected**, unless a recorded contract or feed connects them (co-reference is not coupling).
- Geometry from share-alike sources (OSM/ODbL) is streamed from its source at view time, not stored in records or capsules (K34).

## 5. Representation families and their build economics

From W2-C. Cost classes:
- **C0:** a pure function of the projection.
- **C1:** plus a label schema per SYSTEM type.
- **C2:** plus a pack per vertical.
- **C3:** bespoke per place.
- **C4:** produced media.

| Family | Class | Can it reach billions of systems? | Status |
|---|---|---|---|
| Direct / semantic text | C1 (sentence templates per fact kind) | **Yes** | EARNED as hand-written story functions; generic generator HYPOTHESIS |
| Table, document | C0 | **Yes** | HYPOTHESIS (a Fact/Unknown row already has value, status, source, cut) |
| Timeline | C0 (typed, sequenced events) | **Yes** | HYPOTHESIS |
| Derivation graph ("how do we know?") | C0–C1 | **Yes** | DC provenance edges and W causal projection EARNED per product |
| Chart | C1 | Yes, where measures are typed (ship a table beside it) | HYPOTHESIS |
| Map | C1 | Only if a geo fact exists; **never invent geography** | HYPOTHESIS |
| Film / replay | C2–C3 | Per vertical renderer over recorded inputs | EARNED for Court only (`possessionReplay.ts`) |
| 3D place | C2 pack / C3 flagship | **Only as packs.** A bespoke flagship is not reusable ("only Boston has a baked building") | EARNED in miniature: W-3D props "are rebuilt on every rebind from facts and never baked" |
| Molecular, spatial computing, device, audio | C2–C3 | Unbuilt | SPECULATIVE FRONTIER |

**The economics, from W2-C (HYPOTHESIS):**
- **Billions of systems are only reachable through Direct-class families (C0–C1).** They cost nothing to author per system, and the record is the storage.
- 3D does not scale per system: at a cited API price of US$1.20 per generated world, a billion worlds costs US$1.2B. It must be a **pack**: an authored template plus carrier registry, with state bound at runtime.
- **Generation compute is not the expensive layer. Authoring, verification and rights review are.** A 13-minute bake costs about four cents of cloud time. Boston needed a 1,335-line hand-written level script and repair loops up to "repair 6".
- **Business shape (consistent with the Tournament):**
  - Free: every C0–C1 representation. Direct parity is a truth-and-access law, not an upsell.
  - Paid: curated packs and flagship places, licensed per vertical, baked once per pack version and served as content-addressed static files.
  - Never: per-view on-demand generation.
- US copyright guidance (2025) says prompt-only AI output is not copyrightable, so generated assets give no exclusivity. Human-authored arrangement and code are the moat.

## 6. Semantic-to-spatial compilation

This is how packs are built without hand-conditionals (HYPOTHESIS). It is a **rule to extract, not an engine to build now**: prototype once inside W-3D, per E-main §12.

1. **Vocabulary.** A `StateKind` (stock, promise, schedule, capability, condition, past, presence) maps to a `CarrierKind`. W's six forms are document, calendar, equipment, surface, archive and person; add countable and light-state. Rows like "a paid department is a lit room", "one cart per available worker" and "a promise is a stamped paper" become **registry rows**, not code.
2. **One pass emits both readers.** The carrier and its Direct line come from the same registry row, so parity holds by construction. **Overflow becomes a declared summary carrier, never truncation.** (Remove today's `slice(0, 8)`, which drops scars first.) Facts with no slot go on a visible "not in this room" list, as W's Direct already does.
3. **R1–R5 as build checks:**
   - totality;
   - counterfactual sweep (perturb each canonical field; changed nodes must equal registered carriers, and anything else is carrier debt);
   - precision;
   - tier invariance;
   - cut rebuild;
   - **atmosphere hash**.
4. **Generative AI:**
   - *Safe* for sky and skyline, materials, history-invariant dressing and draft template code, all tagged GENERATED, all in the atmosphere layer.
   - *Unsafe* for anything whose presence, count, form, text, colour or emptiness varies with state.
   - **Rejected:** AI crowds or fans as ambience (they imply attendance); generated props implying unrecorded facts; LLM-written Direct lines for claim-bearing facts; live world-model views as a place of record (no object ids, nondeterministic); splat scans of real venues as state; generated likenesses of real people.

## 7. The representation router

Router inputs:
- the projection kinds available (with cut and audience);
- role;
- the question: what happened, how do we know, what if, where;
- device and input;
- accessibility need;
- scale, from object to league;
- task: audit, teach, present, decide.

**Output:** an ordered plan with a reason for each entry ("why this view?"). No router exists in BOW code today; five quality tiers exist but are user-chosen (W2-C). HYPOTHESIS.

**Where it lives:**
- The **SYSTEM spec** declares valid families and pack ids.
- **Packs** declare capability and cost class.
- The **viewer's client** resolves the plan at view time.
- **The server never routes.** A server-chosen representation would leak audience and fold representation into the record, which is identity; representation must be negotiated separately (Protocol H-A).

**Hard rules:**
- Direct is always producible.
- A device limit changes tier only (L7).
- If a pack fails, fall back to Direct plus a still picture. W already does this when WebGL fails.
- No engagement-optimized routing.

## 8. Lifecycle and staleness

Representations are disposable caches of (cut, audience, pack version):
- a mount is keyed by the cut's version;
- keep GPU resources across unchanged polls (the W NBA `versionKey` pattern);
- remount on change;
- guard late asset loads after disposal;
- pause when hidden.

EARNED (W), with a known Boston risk. A representation that outlives its cut must show that cut. It must not quietly update or quietly freeze (L8).

## 9. What this contract does not decide

- Visual taste and art direction, which stay in product lanes.
- Whether 3D creates value for learners. Unknown: every visual judgment so far is an AI judging software-rendered frames (03).
- The seven-texture legend's legibility for children. Untested (04 #6); the legend is HYPOTHESIS, and only the STATUS axis is canon-candidate.
- Chromebook frame-time on real devices. No run exists; WebGL2 is the floor (W2-C).
