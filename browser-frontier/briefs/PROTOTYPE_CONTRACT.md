# Prototype contract — every builder reads this after 00_PRIOR_ART.md and before writing a line

You are building ONE interactive challenger prototype for the BOW Browser Founding Frontier. It is
design evidence, not product code. Nothing here becomes production Browser infrastructure.

## 1. File and runtime
- One self-contained page: `browser-frontier/prototypes/<Name>.html`. Vanilla HTML/CSS/JS, no
  framework, no build step. Target ≤ 150 KB; hard limit 300 KB.
- Facts come ONLY from the shared store: `<script src="_shared/boston-fixture.js"></script>` exposes
  `window.BOW_FIXTURE` (read `prototypes/_shared/boston-fixture.js` first — every value carries its
  kind, source, as-of date and a verify flag). Never paste a real-world number into your markup;
  read it. A fact you need that is not in the store becomes a visible `[verify: …]` slot or an
  UNKNOWN hole. Values you invent for the prototype are AUTHORED and say "illustrative".
- 3D (only if your spec asks for it): three.js r160, vendored. Use exactly:
  ```html
  <script type="importmap">{ "imports": { "three": "./_shared/vendor/three/three.module.min.js",
    "three/addons/": "./_shared/vendor/three/addons/" } }</script>
  <script type="module"> import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/OrbitControls.js'; … </script>
  ```
  Only OrbitControls is vendored; write anything else yourself. Procedural geometry and canvas
  textures only (no external models, textures or images). Budget: ≤ 30k triangles, ≤ 60 draw
  calls, idle render loop paused when nothing moves. It must render in headless Chromium with a
  software GL — keep shaders simple (MeshStandardMaterial / MeshLambertMaterial are fine).
- Fonts: Google Fonts `<link>` only (1–3 families). Banned: Inter, Roboto, Arial, Space Grotesk,
  Poppins, Montserrat, Helvetica-as-web. No other network requests. No localStorage dependence
  (wrap any use in try/catch; the page must work without it).

## 2. Viewport and layout
- Designed at 1440×900. Must also work at 1280×800 with no horizontal scroll and every control of
  the current step visible without scrolling. The central event of each step is never below the
  fold. Long content gets a focused view, not a scroll wall.

## 3. It must EXECUTE, not tour
- Keep ONE canonical state object and ONE `act(kind, payload)` function. Every act appends to an
  in-page record (the event log: who, what, when in which clock, in which history) and then every
  representation on screen re-renders from state. A board where an act changes only the widget you
  clicked is a tour and fails.
- Required minimum across your flow (your spec may ask for more): DISCOVER → ARRIVE → ENTER → ACT →
  STATE CHANGE (visible in more than one place) → WHY? (traced to recorded causes, not prose) →
  WHAT IF? → FORK (a branch in its own ink and frame, with divergence stamp and assumptions; the
  record stays readable beside it) → COMPARE (branch vs record) → RETURN to the record.
- Deterministic: the same clicks give the same result. If you simulate "AI", the text is an
  AUTHORED stand-in and is marked as such in the reveal layer (never pretend a model ran).

## 4. Truth grammar (mandatory, from 00_PRIOR_ART.md §2)
- Seven kinds by TEXTURE, not colour alone: OBSERVED solid · RECORDED solid with inner double rule
  · AUTHORED outline · COMPUTED toned · MODELED 135° hatch (only when a named, versioned model ran;
  show a range) · GENERATED stipple · UNKNOWN dashed-empty.
- Words on request: a "How do we know?" control reveals kind + source + as-of for what is on
  screen (per item or as a layer). Don't stamp labels everywhere by default.
- A fork is a frame in its own ink with a stamp ("Your branch · diverged <moment>") listing its
  assumptions; it never recolours or overwrites the record. The unmodeled future is SEALED
  (dashed, "you find out by living it"), never hatched. A door into the past is named by its
  QUESTION, never its answer; outcomes stay sealed until the seat acts or an observer asks.
- A refusal names the rule that refused. Real people: public facts with sources; no photos,
  likenesses, logos, league marks; an actor model is stippled and speaks ABOUT a person, never AS
  the person.

## 5. Capability and cost honesty (mandatory)
- A "What's real?" control overlays, on each region/interaction, one of: REAL CURRENT PRODUCT
  CAPABILITY · PROPOSED PLATFORM CAPABILITY · SPECULATIVE FRONTIER — and, where the interaction would
  need AI in a real product, its cost class: NO AI REQUIRED · SMALL / CHEAP MODEL · FRONTIER MODEL
  OCCASIONAL · FRONTIER MODEL CONTINUOUS. Off by default; one quiet status line always visible
  (e.g., "PROTOTYPE · <mental model> · data: shared fixture, dated, verify").
- Never imply that a mocked platform behaviour exists. When unsure, label it PROPOSED or
  SPECULATIVE.

## 6. Accessibility as built
Real `<button type="button">` for every clickable thing (never onclick on a div/span); visible
focus; full keyboard path through the core flow; `aria-live="polite"` region announcing state
changes; `aria-pressed` on toggles; targets ≥ 44 px tall where practical; text contrast ≥ 4.5:1;
never colour alone; honour `prefers-reduced-motion`. Any 3D view has a text/Direct equivalent
with the same acts (an object list or a plain list of choices) — same state, same record.

## 7. Banned
Dark navy everywhere; purple/blue glow; glassmorphism; gradient washes; rows of rounded cards;
KPI tiles; chat sidebar or chat as the primary interaction; generic node-link graphs; metaverse or
holographic panels; floating cards over 3D; cyberpunk; game HUDs; LMS conventions; feeds / "for
you" rails; emoji; marketing or startup voice ("unlock", "seamless", "empower", "journey",
"revolutionize"). Copy is human, concrete, short. Never call a person's choice a mistake.
Your spec gives you a NAMED ART DIRECTION. Commit to it; do not drift toward a house look.

## 8. Deliverables and self-check
1. `prototypes/<Name>.html`.
2. `prototypes/<Name>.steps.json`: a play script that walks your full mandatory flow and takes a
   screenshot at every mandatory state (see `harness/play.mjs` header for step syntax; prefer
   `{"click": "<button accessible name>"}`).
3. Run it: `cd /home/user/bow-design-frontier/browser-frontier/harness && node play.mjs <Name>.html
   ../prototypes/<Name>.steps.json` (add `--w 1280 --h 800 --out shots/<Name>-1280` for the small
   viewport). Fix until: 0 page errors, 0 console errors, 0 failed steps, overflowX false,
   unlabeled 0. Look at your own screenshots (Read tool) and fix overlap, clipping, unreadable text.
   This is bug-fixing, not acceptance: independent critics judge.
4. Touch no other file. Do not publish, commit or push.
5. Reply (≤ 250 words): the concept in one line; the steps implemented; what is REAL / PROPOSED /
   SPECULATIVE; the weakest part; every fact you were unsure of; the harness result line for both
   viewports.
