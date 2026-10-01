# Representation economics — how BOW could draw billions of systems without drawing them by hand

BOW Browser Founding Frontier · Wave 1 · 29 Sep 2026 · design reading, not evidence of cost.
Sources: research G (Representation Router), C (Spatial), E (Atlas), F (AI cost), the real Boston
spatial pipeline on bow-economics-live `claude/quirky-maxwell-s26mxx` (art direction and
performance notes), and the Concordance and Institution prototypes. No figure here is a measured BOW
cost. Where a number appears it is either cited (with its date) or an order of magnitude labelled
"estimate".

## 1. The claim

Representation must cost in proportion to the number of distinct SHAPES of system and DOMAINS, never
to the number of systems, forks, classes or viewers. Three unit costs make that possible:

| Unit | Example | What it costs | Who pays it | How many |
|---|---|---|---|---|
| **Instance** | a fork, a class session, a season, Denver's books, your branch | a data binding: state bound to an existing schema and kit | nobody (compute only) | billions |
| **Schema** | a new *shape* of system: a hospital budget, a port, a reaction network | typing it into the semantic component library, a deterministic compile, one review | a creator or BOW, once | thousands (estimate) |
| **Domain kit** | "basketball club", "arena", "facility and transport", "lab bench" | weeks of skilled design and 3D work (estimate; Boston's real hours were not recorded — record them next time) | BOW or a creator, once per domain version | dozens (estimate) |

Billions of instances over thousands of schemas over dozens of kits is the only reason "billions of
systems" is affordable. Every representation decision below is judged by whether it keeps cost on
the left of that table.

## 2. The floor every system gets for free, and the ceiling only a few earn

Research G and C converged on the same ladder, from cheapest to dearest:

1. **Direct** (plain text: open matters as ordered acts, facts with lead words, refusals, spatial
   relations in words) — compiled deterministically from any typed system. It is the screen-reader
   view, the voice view, the AI-agent view and the oracle other views are checked against
   (Concordance). Cost: nothing per system beyond the schema.
2. **Ledger** views (table, timeline, Marey time–space chart, diagram, map) — procedural 2D in DOM /
   SVG, accessible by construction. Cost per system: copy quality (names, units, reasons).
3. **Compiled Room** — a place compiled from the typed surface through a domain kit (containment →
   rooms; budget → area; funded → lit and furnished; relation → adjacency; commitment → a paper on a
   desk; rule → a plaque). Stamped COMPILED. Only offered when the system has place primitives and a
   place-worthy question arises (lazy). Cost: milliseconds to seconds per compile, cached per schema ×
   kit version × device tier, never per state.
4. **Hand-built flagship Room** — the Boston ops floor and arena. Cost: the most expensive thing in the
   Browser (estimate: person-weeks per building until measured). Earned only where the Room *is* the
   experience (the flagship, a classroom set piece).

Promotion runs upward by use (compiled → kit → hand-built), each step restamped. Demotion runs downward
by device (the Downshift): desktop Room → Chromebook 2.5D → phone Ledger → voice Direct, losing fidelity
but never authority or truth (a CI parity check per rung: same acts, same refusals, same tokens).

## 3. The eleven levers

For each: what must be deterministic code, what can be a generated asset, where occasional frontier
AI helps, where continuous AI would be needed, and where the marginal cost of system n+1 comes from.
(Adapted from research G §2.7; judgments are design readings.)

| Lever | Deterministic code | Generated assets | Occasional frontier AI | Continuous AI | Marginal cost of system n+1 |
|---|---|---|---|---|---|
| Semantic component library (stock, flow, commitment, seat, rule, clock, place, actor, act, relation, token) | types, bind / validate, the Direct compiler | none | typing an untyped legacy system; proposing a new primitive (reviewed) | none | typing the schema; a missing primitive is rare and platform-level |
| Procedural 2D | Ledger, Table, Marey, Diagram, Map | fonts, icons (licensed / CC0) | none | none | copy quality; virtualization at size |
| Procedural 3D | instancing, level of detail, slot binder, bound-channel materials | optional textures | layout suggestions | none | per kit, not per system; risk of "10,000 bowls of oatmeal" sameness |
| System → space compile | containment, treemap area, lit/dark, adjacency, slots | the kit only | legend wording (reviewed) | none | ms–s per compile, cached per schema; humans only at promotion |
| Creator representation packs | manifest schema, sandbox, binding-only text, conformance CI | the creator's | authoring copilots | none | review per pack; abuse and rights handling |
| AI-generated static assets (decor only) | intake: de-light, tile, compress, hash, likeness screen | materials, facades, decals, props | the generation itself | none | curation, not compute; paid once per kit version |
| AI-generated interaction components | a typed catalog; the kernel as the only act channel | none | new catalog components at build time, reviewed | *runtime UI generation — refused for any surface that carries a fact or an act* | if runtime: inference + verification per session, which is why it is refused |
| Shared domain representations | kit runtime, skins, slot binder | kit assets | kit authoring assist | none | skin + binding (hours, estimate); the kit amortizes |
| Lazy generation | compile by focus and relation; semantic level of detail | per chunk if AI-made | none | none | cost follows what is visited, not what exists |
| Caching | key = schema hash × kit version × device tier × locale; invalidate on schema, never on state | cached assets | none | none | storage; hit rate rises with sharing |
| Device tiers | capability detection, frame-time monitor, parallel-DOM generator, 2.5D rung | per-tier textures | none | none | the test matrix (kits × tiers), not per-system authoring |

**Where AI stops.** Continuous frontier AI has no seat in these eleven levers. AI may make decor and
may pick components from a reviewed catalog; it may never draw a fact or offer an act, because neither
can be bound to a state path. Research G's reading of current generative-world and generative-UI work
(Genie 3, Aug 2025: minutes of interaction, legible text only when supplied; Google's Generative UI,
Nov 2025: occasional inaccuracies, generation that can take a minute; A2UI, Dec 2025: agents send
declarative descriptions rendered from a client's approved catalog) supports the A2UI shape as the safe
one and puts per-session generation out of the budget. A generated backdrop that anyone could read as
observed (the city in the window) carries the GENERATED stipple.

## 4. Truth survives baking — with three conditions

The real Boston pipeline (Blender-baked lightmaps, CC0 materials, live facts re-texturing bound
surfaces; ~15k triangles, one draw call — source-measured, no device frame time) proves one important
thing: a lightmap stores light, not colour, so a paper, a board or a court finish can change texture
from live state and stay correctly lit. Three conditions (research G §2.7):

1. **State-dependent light must be baked per light group** (each room's lamps as their own bake, summed
   at runtime — k rooms, k bakes, not 2^k) or a funded room's lamps freeze one state. Check what
   Boston did.
2. **Generated textures must be de-lit** (image-to-3D output often paints light into albedo) or kept to
   decor.
3. **Radiance assets (Gaussian splats, video-world captures) cannot re-texture live.** They store
   albedo × light; bound surfaces cannot sit on them. They are decor at most.

Kit rule: declare the bound channels (albedo, emissive, text, transform, light group); anything
undeclared is decor; bake neutral and colour at runtime so one bake serves every club.

## 5. The Boston data point, honestly

Authored per place: layout, UV and bake, the bound-surface manifest (which surfaces re-texture from
which state path), eight camera stations, copy. Shared: CC0 materials (Poly Haven), the bake pipeline,
the HUD, the station bar. Unknown: the hours it took, the frame time on a classroom Chromebook, a human
verdict (the founder judged the first 3D trial poor; newer scenes have automated screenshots only).
Research C's reading of those screenshots: one frame carries an institution; absence is furniture;
the trade file is the best object in the set; ESTIMATE and NOT KNOWN nights are too close in value for
a daylight projector; the text-on-surface fails at distance; the crowd of 16,000 coloured blocks is
count-true but noise. Consequence for economics: text belongs on paper brought to the camera or in the
Direct twin, not in baked textures — which also makes it cheaper.

## 6. What makes the whole thing economically plausible

- **The scarce resources are review and rulebooks, not pixels.** A reviewed part, a reviewed rule
  engine (the CBA engine), a reviewed kit: these are the assets that compound and that a copier cannot
  lift from screenshots (Wave 3 clone test). Representation should be cheap by construction so that
  spend goes to truth.
- **The floor is a promise, not a cost centre.** Every system gets Direct + Ledger + Concordance + the
  truth tokens, compiled. That is what makes BOW's long tail honest and accessible, and it is nearly
  free per system once the schema exists.
- **Rooms are a luxury good with a job.** A Room is built only where place does something a list
  cannot (sightline as information boundary, absence as object, four kinds of not knowing, choice vs
  shock, residue as memory — research C §2.8). Where place is worse (exact magnitudes, many-to-many,
  long series, rules, search, practiced speed), the better representation hangs *in* the room as an
  object.

## 7. What we do not know (and must measure before believing any of this)

| Unknown | Why it matters | Cheapest measurement |
|---|---|---|
| Hours per hand-built Room; per kit; per skin | the whole instance/schema/domain argument | rebuild Denver from a Boston kit against a timer (G's test); log hours |
| Chromebook frame time for a baked scene | whether place reaches classrooms at all | one 2–3-year-old classroom Chromebook, DPR ≤ 1.5, 30 fps target |
| Whether compiled Rooms beat a Table on any task | whether to compile Rooms or stop at Ledger | G's test: compiled room vs table, "what stops shipments if the fab is down?" |
| Review throughput for schemas and packs | the only human cost that grows with N | count reviewer-hours per promoted schema in a pilot |
| Whether people notice COMPILED vs hand-built | honesty of the compile | G's origin-marks test |

## 8. Falsifiers

- Denver built from the Boston kit, and Harrow by compile, cost as much human time as Boston did: the
  economics fail.
- Compiled Rooms are "oatmeal" and the Table wins every task: compile Direct, Ledger and Diagram only.
- Most new domains need a new primitive: the semantic library is premature extraction (CLAUDE.md §12
  restraint applies — derive it from three hand-built domains first).
- The Downshift loses authority or truth on some rung (a refusal missing on voice, a token lost on the
  phone): the floor promise is broken.

## 9. Corrections after the platform critique (`critique/CRITIC_2_PLATFORM.md` §3)

1. **A fourth unit: FACT.** The table in §1 priced an instance as "a data binding, nobody pays". That is
   true only for state BOW's own engine produces (Worlds, forks, class sessions). For **Reality**, the
   binding is cheap and the DATA is the cost: typed, sourced, dated, licensed facts, per system, over
   time — including *when each fact became known* (the Cut's knowledge frame). The prototypes show the
   gap everywhere (Parting cannot pin Philadelphia: "no Philadelphia books"; TakeItOut's Reality lift runs
   on stand-ins; the Cut authored a knowledge plane for one door of five). So:

   | Unit | Cost | Grows with |
   |---|---|---|
   | Fact | sourcing, verification, licensing, as-of and known-at stamping | systems × time × sources (breaks the "never per system" rule — and it is where the money goes at scale) |

   Live official league data is a licensed product (the critic believes NBA data is distributed
   exclusively through Sportradar — verify). "Observing is wide and free" (Wave 2's commercial line)
   holds only for what BOW may republish.
2. **A compiled Room is a parameterized template**, not a fixed per-schema asset: layout may read state
   (Concordance's shelf count is `ceil(onHand/unit)`). Cache per schema × kit × tier; state binds live.
3. **The Institution prototype is not evidence for the baking claims** in §4–5: it runs real-time
   shadows with tone mapping (measured: 31 draw calls, ~4.4k triangles at the maquette, ~1.1 MB, 10 MB
   heap). It is light, but the baked-lightmap economics rest on the unmerged Boston pipeline alone.
4. **The phone rung is what a phone receives**, chosen by detecting the device — not a picture of a phone
   inside a desktop page. At a real 390 px width, seven of nine boards broke; the contract now requires
   390×844 and 1024×600.
