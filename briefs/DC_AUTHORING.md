# Authoring rules for BOW Design Frontier artboards (read fully before writing)

You are writing one or more artboards for a Design canvas. Each artboard is ONE self-contained
`.dc.html` file ("Design Component" format). A runtime renders it; many mistakes FAIL SILENTLY, so
follow these rules exactly. You write files only; you never publish, render, screenshot, open a
browser, install anything, or touch files other than the ones assigned to you.

## 1. Exact skeleton

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Short screen name</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link href="https://fonts.googleapis.com/css2?family=Font+One:wght@400;600&amp;family=Font+Two&amp;display=swap" rel="stylesheet">
<style>
body{margin:0;background:#......;color:#......;font-family:'Font Two',serif}
a{color:#......}a:hover{color:#......}
/* a few classes allowed: truth textures, hover/transition states, focus rings */
</style>
</helmet>
<div style="width: 1440px; height: 900px; box-sizing: border-box; position: relative; overflow: hidden; ...">
  ... all UI as markup ...
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1440,"height":900}}'>
class Component extends DCLogic {
  componentDidMount() { /* optional timers */ }
  componentWillUnmount() { /* clear timers */ }
  renderVals() {
    const s = this.state || {};
    return { /* every value and handler the template uses */ };
  }
}
</script>
</body>
</html>
```

- Keep `<script src="./support.js"></script>` EXACTLY as written.
- The root element has a FIXED size equal to the board (1440×900 unless told otherwise) and the
  same `$preview`.
- Do not write a constructor. Read state as `const s = this.state || {};` and default every field
  (`const step = s.step || 0;`). Change it with `this.setState({...})`.

## 2. Template syntax (the only syntax that works)

- `{{ path }}` is a DOTTED LOOKUP ONLY: `{{title}}`, `{{item.name}}`, `{{$index}}`, `{{true}}`.
  NEVER an expression: no `{{a + b}}`, `{{!x}}`, `{{x ? a : b}}`, `{{fn()}}`, `{{a || b}}`,
  `{{x.length}}` is fine only as a lookup of an existing property. Compute EVERYTHING in
  `renderVals()` and expose it by name.
- Attributes: `x="literal"` → string; `x="{{path}}"` → the raw value; `x="a {{p}} b"` →
  interpolated string. Style with live values by interpolation:
  `style="left: {{d.x}}px; background: {{d.fill}}; opacity: {{d.op}}"`. NEVER bind a whole
  `style="{{obj}}"`.
- Events: `onClick="{{handler}}"` (JSX camelCase, whole-value hole), where `handler` is a function
  returned from `renderVals()`. Inputs: `<input value="{{q}}" onChange="{{onQ}}">` — the handler
  receives the event (`e.target.value`). Per-item handlers: attach in `renderVals()`:
  `items: xs.map((x, i) => ({ ...x, pick: () => this.setState({ sel: i }) }))`, then
  `onClick="{{item.pick}}"` inside the loop.
- Repeat: `<sc-for list="{{items}}" as="item" hint-placeholder-count="3"> ... </sc-for>`.
  Nested loops use a different `as` name. `{{$index}}` is available.
- Branch: `<sc-if value="{{cond}}" hint-placeholder-val="{{true}}"> ... </sc-if>`. For an
  else-branch, expose the negation from renderVals (`notCond`) and use a second `<sc-if>`.
  ALWAYS set the `hint-*` attributes.
- Do NOT put `<sc-for>` or `<sc-if>` inside an `<svg>`. For charts inside SVG, precompute strings
  (`<polyline points="{{g.pts}}"></polyline>`, `<path d="{{g.d}}"></path>`) — or build the
  visual with absolutely positioned `<div>`s inside an `<sc-for>` (preferred for many marks).
- Close EVERY non-void element explicitly, including SVG (`<path ...></path>`,
  `<circle ...></circle>`, `<line ...></line>`, `<rect ...></rect>`). Quote every attribute.
  Void elements (`<input>`, `<br>`, `<img>`, `<meta>`, `<link>`) need no close.
- `class` is fine (auto-mapped). `for` on labels is fine.
- No `innerHTML`, no `document.createElement`, no building UI in script, no `window.X`
  components, no `<iframe>`/`<object>`/`<embed>`, no global keydown handlers, no network calls
  except the Google Fonts `<link>`.
- `data-props` is single-quoted JSON. If it ever contains `&` write `&amp;`, a single quote `&#39;`.
  Keep it to `{"$preview":{...}}` unless a tweak is genuinely useful (one or two levers max).
- Timers: `componentDidMount() { this.t = setInterval(() => this.setState({ tick: (this.state && this.state.tick || 0) + 1 }), 50); }`
  and `componentWillUnmount() { clearInterval(this.t); }`. Keep per-frame work light (≤ ~150
  animated elements).
- Transitions: put `transition: ...` on elements whose interpolated style changes; the change then
  animates. This is the cheapest good motion.
- Text in the template is literal markup where it is copy; bind with holes only when it is data.
- Escape `&` in text as `&amp;` and `<` as `&lt;`.

## 3. The BOW truth grammar (shared across ALL artboards; the skin changes, the grammar does not)

Every value, mark, line or region that makes a claim has one of seven epistemic states. Express it
through TEXTURE / LINE, not color alone and not by stamping words on everything:

| state | meaning | texture |
|---|---|---|
| OBSERVED | measured or reported from outside BOW (real world, now or historical) | solid fill / solid line |
| RECORDED | written into BOW's own canonical history (an act inside a World or run) | solid with an inner double rule |
| AUTHORED | a rule or number someone chose on purpose | outline only (no fill), square |
| COMPUTED | follows exactly from known rules + state | toned solid (mid value) |
| MODELED | a bounded simulation's answer; shown as a RANGE, never a point pretending to be fact | 135° hatch |
| GENERATED | representational artifact made by AI or a generator (voice, image, phrasing) | stipple / dotted |
| UNKNOWN | the system genuinely does not know; a marked hole, never silently filled | dashed outline, empty |

CSS you can reuse (recolor to your palette):
```css
.t-obs{background:INK}
.t-rec{background:INK;box-shadow:inset 0 0 0 3px INK,inset 0 0 0 5px PAPER}
.t-aut{background:transparent;border:2px solid INK}
.t-com{background:MIDTONE}
.t-mod{background:repeating-linear-gradient(135deg,INK 0 1.5px,transparent 1.5px 7px);border:1px solid INK}
.t-gen{background:radial-gradient(circle,INK 1.1px,transparent 1.4px) 0 0/7px 7px;border:1px dotted INK}
.t-unk{background:transparent;border:2px dashed INK}
```
Words appear ON REQUEST: give each board a "How do we know?" affordance (a toggle that reveals the
provenance words and sources, or a per-item reveal). Two absolute rules:
1. A modeled result never wears the texture of an observed one.
2. A fork (the user's branch) never wears the ink of the record: it is visibly a different hand,
   stamped with where/when it diverged ("Your branch · diverged <date/moment>"), and lists its
   assumptions. Recorded history is never overwritten.

## 4. Status labelling (required on every board, small, one corner)

One quiet line, e.g. `PROTOTYPE · DESIGN PROPOSAL · data: prototype, dated, verify before use`.
Use the right word: EXISTS TODAY (only if a BOW repo really has it) · DESIGN PROPOSAL ·
PLATFORM HYPOTHESIS · SPECULATIVE FRONTIER. Real-world figures carry an as-of date. Anything you
are not sure is true is either marked UNKNOWN, written as a bracketed placeholder like
`[verify: exact date]`, or left out. Never invent statistics, quotes, user counts or results and
present them as fact. Approximate public figures say "approx." and "verify".

## 5. Design bar

- Build the ACTUAL interaction, not a landing screen: initial state → the user acts → a visible
  consequence that propagates across the board. Several steps deep is better than wide and shallow.
- Each board has its OWN named art direction (given in your brief). Do not drift toward a shared
  house look. Commit: 1–3 typefaces (Google Fonts), a toned ground, 0–2 accents.
- Banned: dark navy everywhere, purple/blue glow, glassmorphism, gradient washes, rows of rounded
  cards, KPI tiles, a chat sidebar or chat as the primary interaction, generic node-link graphs,
  metaverse/holographic panels, cyberpunk, game HUDs on educational material, LMS conventions,
  emoji, fonts Inter / Roboto / Arial / Space Grotesk / Poppins / Montserrat / Helvetica-as-web.
- Motion only where it communicates state, scale, time, causality or transition.
- Accessibility as drawn: real `<button type="button">` for everything clickable (never onClick on
  a div/span), `aria-label` on icon-only buttons, `aria-pressed` on toggles, targets ≥ 44px tall
  where practical, text contrast ≥ 4.5:1 (3:1 at 24px+), never color alone to separate states
  (the textures help). Icons: inline stroke SVG only.
- Copy: human, concrete, specific, short. No startup voice, no marketing voice, no "unlock",
  "seamless", "empower", "journey". Never describe a learner's choice as a mistake or wrong.
- Layout: flex/grid with `gap`; absolute positioning is fine for diagrams. Everything must fit in
  the fixed root without scrolling; if content is long, design a focused view, not a scroll.

## 6. Before you finish

Self-check each file: grep your own file for `{{` and confirm every hole is a plain dotted path;
confirm no `/>` on non-void HTML or custom tags (SVG elements closed explicitly too), every
`<sc-for>` has `as=` and `hint-placeholder-count`, every `<sc-if>` has `hint-placeholder-val`,
no emoji, and the root size matches. Then report back (≤ 200 words per board): the concept in one
line, the interaction steps implemented, the weakest part, and every fact you were unsure of.
