# SPEC — BOW · Live World: the first World that actually exists

Output: scratchpad/live/live-world.html. This is a standalone Artifact page, NOT a canvas board.

## Why

The Wave 3 clone test showed that every engine board could be copied from screenshots in 12–22
tool calls. The critics concluded that code shipped to a browser is not a moat. What a copy
cannot be is THE SAME WORLD: its state never agrees with BOW's, it cannot hold BOW's seats, and
it has none of BOW's history.

So this page is not a prototype of a World. It is one real, persistent, shared World:
- people join it and occupy seats in it;
- they act in it;
- everyone sees the same state, verified by hash, across real devices;
- its history accumulates from the moment it starts.

It uses the platform's real capabilities:
- `db` — a shared persistent store with access rules and private per-viewer subtrees;
- `room` — who is here right now, and presence;
- `user` — identity.

## Page contract (Artifact tool rules — follow exactly)

- Write page content only. No `<!doctype>`, `<html>`, `<head>` or `<body>` tags; the tool wraps
  it.
- Start with `<title>Live World</title>`, then `<style>`, then content, then `<script>`.
- Fonts: Google Fonts only ("Inter Tight", "IBM Plex Mono"), each with a real fallback stack.
- No external scripts are needed. Everything else is inline.
- Theme tokens:
  - Define every colour as a CSS variable on `:root` (light values).
  - Redefine them under `@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]){…; color-scheme: dark} }`.
  - Redefine them again under `:root[data-theme="dark"]{…}`.
  - `body` sets `background: var(--bg); color: var(--fg)`.
- Responsive: it must work at 400px wide. Use a 16px side gutter via `padding-inline` on one
  wrapper. Layouts stack to one column when narrow. Nothing scrolls horizontally except a hash,
  which wraps with `word-break: break-all`.
- Any `localStorage` access goes inside try/catch.
- No `alert`, `confirm` or `prompt`; build confirmation steps into the page.

## Capabilities (the publisher, not you, declares these; write the code to match)

```
{ db: { rules: [
    { path: "world", read: "interact", write: "owner" },
    { path: "acts",  read: "interact", write: "interact" },
    { path: "seats", read: "interact", write: "interact" }
  ] },
  room: {},
  user: { scopes: ["profile"] } }
```

`data/users/{self}` stays private by default: each viewer's own subtree, unreadable by anyone
else, the owner included.

Obtain the namespaces with `await window.claude.use("db")`, `use("room")` and `use("user")`.
- Each may resolve `null`. `window.claude` itself may be undefined when the file is opened
  outside the viewer (e.g. in our local test harness).
- When db is unavailable, run in LOCAL MODE:
  - use an in-memory shim that implements the subset you use (doc get/set/update/onSnapshot,
    collection add/get/onSnapshot/orderBy, doc.acquire);
  - show a thin banner: "Local mode — not connected to the shared World. Open the published page
    to join it."
  - In local mode ONLY, show a dev panel "Simulate a second person", so the multi-person logic can
    be tested: it acts as user "local-2" in the same shim.

## Data model

**`world/canon`** — ONE document, written only by the owner. Seed it once. The page also creates
it if the owner opens the page and it is missing, with a "Start this World" button that only the
owner sees.

```
{ name: "Boston · Year Two", version: 1,
  epoch: <ISO time the World started>,          // World day 0 begins here
  pace: "1 World day = 1 real hour",
  seed: 2026,
  lines: { cap:164.961, tax:200.428, apron1:209.015, apron2:221.686 },
  worldTaxRule: { base:200.0, rate:1.5, label:"World rule: flat 1.5× (authored)" },
  roster: [ ... the SHARED WORLD ROSTER from SPEC_W3_EXECUTE.md, with ids ... ],
  extra: { deadMoney:6.4, pendingTwoWay:2.4 },
  denver: { contracts:[ {id:"den-2.1", salary:2.1}, {id:"den-6.0", salary:6.0}, {id:"den-11.0", salary:11.0} ], picks:["2028 2nd","2029 2nd"] },
  matters: [   // open matters, each with a deadline in World days from epoch
    { id:"denver-call", title:"Denver called about your backup guard", deadlineDay:0.083, ... },   // ≈2 real hours
    { id:"two-way", title:"Two-way call-up pending", deadlineDay:1.5 },
    { id:"owner-note", title:"Under the second apron by the deadline", deadlineDay:5 } ] }
```

**`seats/<seatId>`**, where seatId is "boston-gm" or "denver-gm":

```
{ holder:<user id>|null, since:<ISO>, note:<handover text>|null }
```

Claiming follows the platform idiom for "claim a slot":
1. `acquire({holder: myId, ttlMs: 5000})`;
2. `get()`;
3. `set` your claim only if holder is null;
4. let the lease lapse.

`{acquired:false}` → "Someone is claiming this seat right now — try again in a moment."

**`acts/<autoId>`** — one document per act, never edited or deleted by the page:

```
{ t:<ISO, actor's clock>, by:<user id>, seat:<seatId>|"observer",
  kind:"claim-seat"|"leave-seat"|"offer"|"counter"|"accept"|"decline"|"call-up"|"hold"|"note-public",
  payload:{…}, prev:<hash8 of the act chain before this act, as the actor saw it> }
```

**`data/users/<myId>/private`** — ONE document per viewer:
- the internal board for the seat they hold (free text, 500-character limit);
- `lastSeen` (ISO).
Unreadable by anyone else, the owner included; this is enforced by the platform. Say so on the
page.

## The engine (pure functions; same code in every browser)

`fold(canon, acts, nowISO)` returns state. It:
- sorts acts by `(t, id)`;
- walks World days from epoch to now, deterministically;
- applies acts in order, with VALIDATION computed identically by everyone:
  - an act from a seat counts only if `by` held that seat at `t`, derived from the claim and leave
    acts in the same log;
  - an offer counts only while "denver-call" is open;
  - accept requires a standing offer or counter from the other seat;
  - rules are checked with the X1 engine rules. At over the second apron: no aggregation, and no
    taking back more salary than sent. Implement the small subset needed for this deal.
- Invalid acts stay in the record but are marked "not counted · rule R-x" and change nothing.
- Lapses: when a matter's deadline passes with no counted act, it records NO ACT against whoever
  held the responsible seat at that moment, or "the seat · vacant". It must never leave a phantom
  charge. The known X3 bug was that a lapsed call-up left the $2.4M pending; a lapse sets
  pending to 0, the same as "hold".
- Games: on World days 2, 4 and 6 …, a toy model (mulberry32 seeded by `hash(seed, day)`) gives a
  result. It wears the GENERATED stipple and says "toy model · seed 2026".

State includes: payroll, apron status, roster, the World tax (labelled World rule), open matters
with status, the record (acts with counted / not-counted), and the games.

**State hash.** `SHA-256(canonicalJSON(state at the current World tick))` via crypto.subtle, with
sorted keys. Show all 64 hex characters on request, and the first 12 by default.

**Act chain.** Each act's hash8 = the first 8 of `SHA-256(prevHash8 + canonicalJSON(act without
prev))`. Show a per-act seal in the record.

## Presence and agreement (the heart of the page)

- Each viewer publishes `room.presence({ tick, hash12, seat, lastAct })` every time their computed
  state changes.
- `onPeers` renders: "Here now: <names> (you)". For each peer, show their seat and whether their
  hash12 at the same tick equals yours: ✓, or ≠ "catching up" if their tick differs.
- The line reads: "3 people here · all 3 see the same World at World day 1.42 · 3f9a1c07e2b4".
- If `room` is null: "Presence unavailable — your hash is 3f9a…".

## The screen (look: the Browser shell language from Wave 2)

- Near-white `--bg` #F7F7F4 (dark mode #121212), ink `--fg` #111 (dark mode #EDEDED).
- One meaning per colour:
  - ultramarine #2B3FD6 = computed answer;
  - fork/branch orange #C2410C (unused here unless you add a branch);
  - green #007A33 = yours (your seat, your acts);
  - amber #E8A317 as a fill with black text = your running clocks.
- Clock digits in IBM Plex Mono.
- No cards; hairlines and white space only.

Sections, top to bottom (one column on phones):
1. **Header.**
   - "Boston · Year Two — a live World" and "World day 1.42 · Tue 19:04 (World time)".
   - "Started <epoch, local time> · <n> acts recorded".
2. **Agreement line** (presence), as above.
3. **Your place.**
   - Your identity (name via `user.profiles`).
   - Your seat, or "Observer".
   - Seat buttons: "Take the Boston GM seat" / "Take the Denver GM seat", each showing its current
     holder's name or "vacant".
   - "Leave the seat": either hand over with a one-line note, or vacate.
   - The handover note is public; the private board stays yours.
4. **The World now.**
   - Payroll vs the four lines (a simple bar with ticks).
   - Roster count.
   - World tax with its label.
   - Open matters with live countdowns: amber if they belong to your seat, grey otherwise.
   - "Since you last looked: …", computed from `lastSeen`: new acts, lapses, games.
5. **Act.** Only when you hold a seat, and only the acts that seat can take now:
   - Boston: "Offer Denver the backup guard ($2.7M) for their 2029 2nd" · "Call up the two-way" ·
     "Hold".
   - Denver: "Counter: 2028 2nd" · "Accept" · "Decline".
   - Each act writes to `acts`.
   - The outcome shows for everyone as soon as their fold includes it: e.g. "Deal done · payroll
     $220.1M · roster 14 · under the second apron (computed)".
6. **Your seat's private board** (only if you hold a seat).
   - A textarea saved to your private doc.
   - Label: "Only you can read this — not the other GM, not the page's owner. Enforced by the
     platform, not by this page."
7. **The record.**
   - Every act, newest first, with: time, who (name) and seat, what, its seal (hash8), and
     "counted" or "not counted · rule".
   - Lapses appear as hollow "NO ACT" lines.
   - This is the World's history, and it cannot be copied because it happened.
8. **How do we know?** (collapsible) What is real here:
   - The shared store.
   - Platform-enforced privacy.
   - Seat leases.
   - Identical fold in every browser.
   - SHA-256 over canonical state.

   What is not:
   - No cryptographic signature by BOW. The founding record's authority is the platform's access
     rule (only the owner can write it).
   - Act times come from each actor's clock.
   - Toy game model.
   - World facts are authored.
9. **Footer.** "A persistent BOW World · prototype · World facts authored, not NBA history ·
   figures: league lines 2026–27 (verify)".

## Engine self-tests (run on load; show "ENGINE · n/n")

At least 12 tests, e.g.:
- the same `(canon, acts, now)` folds to the same hash twice;
- acts after now are ignored;
- an act from a non-holder is not counted;
- accept without an offer is not counted;
- the deal math is 222.8 → 220.1;
- a lapse is recorded once and zeroes pending;
- claim/leave derivation;
- the act chain is deterministic;
- canonical JSON orders keys.

## Verify locally before handing back

The harness serves `scratchpad/render/` at http://127.0.0.1:8765/. Symlink the file there as
`live-world.html`. There `window.claude` is undefined, so the page runs in LOCAL MODE.

Using the "Simulate a second person" panel, exercise:
- you take Boston, local-2 takes Denver;
- offer → counter → accept → the state updates for both;
- a lapse by setting a debug "pretend it is later" (local mode only);
- leave with a handover note;
- the record shows seals;
- the agreement line shows both hashes equal.

Take screenshots at 1440 and at 400 wide (the harness takes a viewport height; for width, write a
small variant script, or use `page.setViewportSize`). Read them.

Keep the file under about 80 KB.

## Report (≤ 300 words)

Include:
- what works in local mode;
- the self-test list;
- the exact db paths written;
- anything you could not test (everything that needs the real viewer).
