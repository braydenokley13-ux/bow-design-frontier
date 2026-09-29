# Wave 3 · EXECUTE — four boards where the medium actually runs

Read ../w2/BUILDER_BRIEF.md and ../w2/W2_BAR_AND_FIXTURES.md first. Read the CORRECTION block in the
fixture too. Everything there still binds.

## Why this wave exists

The founder's bar: "make sure this is not something ChatGPT could copy in a day; it needs to be
truly innovative."

Any SCREEN we have drawn can be copied in a day. A person with a screenshot and a chatbot can
reproduce a layout, a palette and a click path.

What cannot be copied in a day is a system that EXECUTES CORRECTLY. That means rules that
compute, knowledge that is scoped by seat, a world that stays consistent for everyone without a
server, and a record that can prove itself. The Wave 2 flagship critic's verdict was "the systems
tick; they don't execute."

So every board in this wave has an ENGINE inside it, and the engine is the point. The drawing
exists to make the engine legible. It must not fake the engine.

## Hard rules for all four boards

1. **The engine is real code in the board**, as pure functions:
   - state in, state out;
   - no hard-coded strings per branch;
   - every displayed number is computed from state by a named function.
2. **The board runs its own tests on load and shows the result.** A small "ENGINE · n/n checks
   passing" line lists assertions the engine must satisfy, e.g. "payroll = Σ contracts", "a team
   over the second apron cannot aggregate salaries". If a check fails, the line turns red and
   names it. This is the board proving itself.
3. **No model is faked.**
   - Anything random uses a seeded PRNG (mulberry32), and the seed is shown.
   - Game results or other generated outcomes wear the GENERATED stipple and say "toy model ·
     seed N".
   - Authored inputs wear AUTHORED outlines.
4. **No node-link graphs, no dashboards of tiles, no chat.** Explanations of causality are
   ledgers and indented "because" lines, never a network diagram.
5. **1440×900, no scrolling inside the board.** The bottom-left COMMERCIAL LENS line and the
   bottom-right status line are required. Add a third small line above them: "WHAT A COPY WOULD
   MISS: …" — the builder's honest one-sentence guess at the part a screenshot cannot reveal.
6. **Fixtures:**
   - The persistent World "Boston · Year Two" (authored) uses the 2026–27 league lines: cap
     $164.961M, tax $200.428M, first apron $209.015M, second apron $221.686M.
   - The World's own tax rule is a flat 1.5× over $200.0M (authored). Label it "World rule: flat
     1.5× (authored) — the NBA's real tax is incremental".
   - For the World roster, use the SHARED WORLD ROSTER below, exactly, in every board that needs
     it.
   - Reality numbers only as given in the fixture CORRECTION block.

## SHARED WORLD ROSTER (Boston · Year Two · Week 9)

All values are authored, World facts, not NBA history. $M, current season.

| Player | Role | Salary | Contract |
|---|---|---|---|
| Jayson Tatum | wing | 58.5 | 3 yrs left |
| Jimmy Butler | wing | 56.8 | 1 yr left · acquired Week 6 for Derrick White + filler |
| Starter guard [authored name: "Guard A"] | | 24.0 | 2 yrs |
| Starter big [authored: "Big A"] | | 19.5 | 3 yrs |
| Sam Hauser | wing | 10.8 | 3 yrs |
| Payton Pritchard | guard | 7.8 | 2 yrs |
| Rotation big ["Big B"] | | 9.9 | 1 yr |
| Rotation wing ["Wing C"] | | 8.4 | 2 yrs |
| Backup guard ["Guard B"] | | 2.7 | 1 yr |

The last six rows are the minimum and rookie-scale players (authored):

| Player | Salary | Contract |
|---|---|---|
| "Rookie 1" | 5.1 | 3 yrs |
| "Rookie 2" | 3.3 | 3 yrs |
| "Min 1" | 2.4 | 1 yr |
| "Min 2" | 2.4 | 1 yr |
| "Min 3" | 2.4 | 1 yr |

These total **$214.0M** for the 14 players above.

Two further items are on the books (authored):
- "Dead money · waived Year One": 6.4
- "Two-way conversions pending": 2.4

**Payroll = $222.8M.** Check: 214.0 + 6.4 + 2.4 = 222.8.

Roster count = 14 standard contracts, plus a two-way call-up pending.

------------------------------------------------------------------------------------------------
## X1 · EVERY NUMBER KNOWS WHY — a causal engine with reverse search

File: X3Engine.dc.html · Status: PLATFORM HYPOTHESIS

### The idea

In BOW, a number is not a string on a page. It is the output of rules applied to sourced
inputs. So the medium can do two things no page and no spreadsheet UI does together:
- (a) Ask any number "why?" and get its live derivation down to dated sources.
- (b) Ask any conclusion "what would change you?" and get back EXECUTABLE sets of legal acts,
  found by search, not written by a person.

### Engine

**Nodes.** Every node has id, label, value, texture, formula text, input ids, and a
computeFn:
- contracts (leaves: World record · double-rule);
- payroll = Σ salaries + dead money + pending;
- overTax;
- worldTax (World rule);
- apronStatus: under tax / over tax / over first apron / over second apron;
- roster count;
- tools (the set of CBA tools still available, by apron status). Use the 2023 CBA as simplified:
  - over the first apron: no non-taxpayer MLE, no sign-and-trade in, no taking back >110% of
    outgoing in trades (verify);
  - over the second apron: no aggregating salaries in trades, no taking back more salary than
    sent, no taxpayer MLE, first-round pick 7 years out frozen (verify);
- ownerNoteMet = payroll ≤ second apron at the deadline;
- legalMoves.

**Move space (authored, small, labelled).**
- (1) Trade one player to a team with room for nothing back but a second-round pick. Teams with
  room are authored: "Team R1 · room $12M", "Team R2 · room $9M", "Team R3 · room $4M". A trade
  is legal only if the incoming salary fits the receiving team's room.
- (2) Trade player A for player B from a partner. There is one partner, "Denver", with three
  authored contracts: $2.1M, $6.0M, $11.0M. Legal only under the salary-matching rule for
  Boston's apron status.
- (3) Waive a 1-year minimum player: dead money stays, the roster drops. Simplified: the cap hit
  stays on the books.
- (4) Decline to call up the two-way: pending goes to 0.

**Reverse search.** On any boolean or threshold node:
- enumerate all single moves and all ordered pairs of moves (keep it < 5,000 evaluations);
- apply each to a copy of state;
- recompute;
- keep the combinations that make the target true AND break no rule.

Group results by what they cost, never ranked by a made-up score:
- players lost;
- picks gained;
- roster count after;
- tax after.

### The screen (look: a cost accountant's ledger)

- Ground: buff ledger paper #F1EEE3 with faint green rules #CFE0CF; ink #1C2A22.
- The ONE red #B3261E is used only for "fails".
- Type: IBM Plex Mono for figures, Source Serif 4 for text.

**Left (≈ 520px) · THE BOOKS.** The roster as ledger rows, the two extra lines, then the
computed rows: payroll, over tax, World tax, apron status, roster count, owner's note (met / not
met). Each value is clickable.

**Centre · WHY.** Clicking any value opens its derivation as an indented because-ledger:
- `World tax $34.2M = 1.5 × (payroll $222.8M − $200.0M) · World rule, authored`
- `└ payroll $222.8M = Σ 14 contracts $214.0M + dead money $6.4M + pending $2.4M · computed`
- `  └ Jimmy Butler $56.8M · World record, Week 6 · double-rule`

It is collapsible, with a texture swatch per line and every leaf showing its source and date.
Show at least 3 levels deep.

**Right · WHAT WOULD CHANGE THIS?**
- Select a target, e.g. "Owner's note: under the second apron by the deadline" (currently NOT
  MET, $1.114M over), or "Keep the taxpayer MLE", or "Tax under $25M".
- Press "Search".
- The engine reports "searched 3,412 combinations · 41 legal · 9 meet the target".
- Results appear as DOORS grouped by cost. Each door is one line: "Trade Big B to Team R1 for a
  2nd · roster 13 · tax $19.5M · 0 players back".
- Clicking a door applies it inside a BRANCH FRAME (orange #C2410C frame + stamp "your branch ·
  not the World record"). Every changed value in the books flashes and shows "was → now".
- "Undo branch" returns.
- If there are 0 results: "No 1- or 2-move combination in this move set meets the target. Wider
  searches need more moves (not built)."

**Engine line:** "ENGINE · 18/18 checks passing". Examples of checks:
- payroll sums;
- over-second-apron forbids aggregation;
- R1 room enforced;
- the reverse search never returns an illegal door;
- applying then undoing a branch restores the exact state.

**COPY line:** "WHAT A COPY WOULD MISS: the rules. A copy can draw these doors, but only a
correct rulebook knows which ones are legal."

**COMMERCIAL LENS:** "Hypothesis: a rulebook that can search itself is what capologists, agents
and media pay for; the public sees every number's why for free."

------------------------------------------------------------------------------------------------
## X2 · KNOWLEDGE IS A PROPERTY OF THE SEAT — an epistemic engine

File: X3Seats.dc.html · Status: PLATFORM HYPOTHESIS

### The idea

Every other product shows one screen to everyone, or lets an admin see everything. In BOW, what
you can know is computed from WHO you are and WHEN you are. The same state renders differently for
each seat, and the medium can PROVE that no seat is shown a fact it may not see. It can also show
the difference: "what Boston knows that Denver doesn't".

### Engine

**Fact store.** Each fact is `{ id, text, value?, visibleTo: [seats] | 'public', createdBy,
time, source, texture }`.
- Seats: BOSTON (GM), DENVER (GM), LEAGUE (office), PUBLIC.
- Initial facts, 12–16 (authored, World), e.g.:
  - Boston's payroll (public);
  - Boston's internal ceiling "we'd take one 2nd" (BOSTON only);
  - Denver's internal board "walks at a 1st · will pay two 2nds" (DENVER only);
  - Denver's roster count (public);
  - league rule texts (public);
  - an agent's call to Boston (BOSTON only);
  - a rumour "Denver wants a guard" (public, UNVERIFIED — dashed verdict).

**Visibility rules** are a small table:
- an OFFER is visible to both parties and the LEAGUE;
- an INTERNAL NOTE only to its author;
- a COMPLETED TRADE becomes public, with the time it unsealed;
- a LEAGUE CHECK is visible to the LEAGUE plus a verdict-only fact to both parties.

**Derived conclusions** are computed per seat, ONLY from that seat's visible facts:
- `bostonEstimateOfDenverCeiling()` uses only Boston-visible facts. It returns a range or UNKNOWN,
  e.g. "one or two 2nds · inferred from the rumour and their counter".
- Denver's pane shows Denver's actual ceiling, from its own internal fact.

The two differ by construction.

**Leak auditor.**
- On every render, for every pane, it checks every fact id displayed against `visibleTo(seat)`.
- It keeps a running counter: "renders checked 1,284 · leaks 0".
- A "Try to show Denver's board to Boston" button attempts it. The auditor refuses and logs
  "REFUSED · rule V-2: another seat's internal notes are never rendered to you".

### The screen (look: three glass-walled offices seen in plan, one per seat, plus a strip for
### PUBLIC)

- Ground: pale concrete #E7E6E1.
- Each office is a white room with a thin black wall; the seat colour is on the nameplate only:
  - Boston #007A33;
  - Denver #0E2240 (as a nameplate fill only, with white text);
  - League #6B6B6B.
- Type: Inter Tight + IBM Plex Mono.
- **Three columns:** BOSTON · LEAGUE · DENVER, each listing only its visible facts. Facts shared
  by more than one seat line up horizontally across the columns, so you can SEE what is shared
  and what is not.
- **A strip at the top:** PUBLIC facts (visible to all).

**Acts** (buttons inside each office, visible only there):
- Boston: "Offer: backup guard for a 2029 2nd" · "Write internal note".
- Denver: "Counter: a 2028 2nd instead" · "Accept" · "Decline".
- League: "Run the checks".

Each act creates facts with their visibility. Animate a new fact appearing in exactly the rooms
that may see it: it slides into those rooms only.

**THE DIFF.** A toggle "What does Boston know that Denver doesn't?" dims shared facts and
highlights the asymmetric ones in each room. It also works for any pair of seats.

**Conclusions.** In each room, "Your read of the other side" shows the per-seat computed
conclusion, with the facts it used listed: "based on: F3 rumour, F9 their counter".

**After the deal completes:** some facts unseal. They move into the PUBLIC strip with
"unsealed 10:14". Internal notes stay private forever.

**Engine line:** "ENGINE · 14/14 checks passing". Examples of checks:
- no pane renders a fact outside its set;
- Boston's estimate never reads Denver's internal fact;
- an offer appears in exactly 3 rooms;
- unsealing never reveals internal notes.

**COPY line:** "WHAT A COPY WOULD MISS: the guarantee. A copy can draw three rooms; only an
engine that checks every render can promise no seat sees what it shouldn't."

**COMMERCIAL LENS:** "Hypothesis: organisations pay for seats whose knowledge is provably
scoped — negotiations, audits, classrooms; the proof is the product."

------------------------------------------------------------------------------------------------
## X3 · THE SAME WORLD FOR EVERYONE, WITHOUT A SERVER — a lockstep engine

File: X3Lockstep.dc.html · Status: SPECULATIVE FRONTIER

### The idea

A persistent World must be the same World for everyone who opens it, and it must keep running
while nobody is looking. Games solve this with servers.

BOW can make the World's state a pure function: `state(t) = fold(rules, seed, publicActLog, t)`.
- Two people who open it at the same moment see the same World.
- Anyone can recompute and verify it.
- A world "running while you're away" is just the function evaluated later.

### Engine

**Time.**
- World time advances with real wall-clock time: 1 World day = 1 real hour (authored pace; shown
  as such). Tick = one World day.
- Epoch: World Week 9 · Tue 09:00 = 29 Sep 2026 09:00 local.
- For the prototype, a "clock offset" control lets the viewer move "now" forward 0–72 real hours.
  That is 0–72 World days; label it "pretend it is later".

**Per tick:** a seeded PRNG (mulberry32, seed = hash(worldSeed, tick)) generates World events:
- a game result on game days (toy model: win probability from a simple authored team rating;
  GENERATED stipple, "toy model · seed");
- an offer that may arrive with an expiry;
- an injury with low probability.

**Rules** apply deterministically:
- offers expire and are recorded as NO ACT if no seat acted before expiry;
- the roster must be ≤ 15 at tip-off;
- payroll against the lines.

**The public act log** is an append-only list of `{time, seat, act}`. State at time t includes
only acts with time ≤ t.

**State hash.** A short fingerprint of the full state at t. Use crypto.subtle.digest('SHA-256')
on canonical JSON; show the first 8 hex digits. If crypto.subtle is unavailable, fall back to
FNV-1a and say so.

### The screen (look: a railway timetable board)

- Ground: warm white #F6F4EF; black type.
- Split-flap style digits for times and hashes, drawn with CSS: black cells, white digits.
- One signal amber #E8A317 for "now".
- Type: "Space Mono" for flaps, "Inter" for text.

**TWO PANES side by side:**
- "YOU · opened at [now]"
- "A FRIEND · opens at [now + offset2]". The friend's offset is its own slider, 0–72h.

Each pane shows, computed for its own moment:
- World date;
- record W–L;
- the last 3 events;
- open matters with countdowns;
- payroll and roster;
- the STATE HASH.

**The agreement strip** between the panes:
- "At World time T, your state hash = friend's state hash ✓ 3f9a1c07".
- It evaluates both at the EARLIER of the two times and shows they match.
- A "Break it" button perturbs one pane's seed. The hashes diverge and the strip says "✗ different
  Worlds — this is what a server would otherwise have to prevent".

**Acts.**
- "YOU" can act on open matters (answer an offer, call up the two-way). Each act appends to the
  public log with the current time.
- The friend's pane, at a later time, includes your act. At an earlier time it doesn't, and shows
  "not yet" in dashed.

**While you were away.** Moving YOUR offset forward shows "Since you looked: 2 games (toy), 1
offer arrived and lapsed at Thu 11:00 · NO ACT recorded against the seat".

**Engine line:** "ENGINE · 12/12 checks passing". Examples of checks:
- same (seed, log, t) gives the same hash, run twice;
- acts after t never affect state(t);
- lapses recorded exactly once;
- the roster rule enforced.

**COPY line:** "WHAT A COPY WOULD MISS: determinism. A copy can show two screens that look alike;
only a pure World function makes them provably the same World."

**COMMERCIAL LENS:** "Hypothesis: persistent Worlds without per-World servers change the margin —
compute is spent only when someone looks, and anyone can audit the World."

------------------------------------------------------------------------------------------------
## X4 · THE RECORD CAN PROVE ITSELF — a verifiable history and verifiable forks

File: X3Proof.dc.html · Status: PLATFORM HYPOTHESIS

### The idea

BOW's first law is "a fork never overwrites the record". Wave 1 and 2 enforced it with drawing.
Here it is enforced with mathematics:
- the record is a hash chain;
- every fork's address carries the hash of the record it diverged from;
- anyone who receives a shared branch can check that the record it claims to come from is the
  record, unaltered.

This is what lets strangers trust a shared WHAT IF?.

### Engine

**The record.** Reality · Boston Celtics, from the fixture's recorded Moments, each with date,
text, source and a verify flag:
- 17 Jun 2017 · Boston and Philadelphia agree to trade the No. 1 pick.
- 19 Jun 2017 · The trade is completed.
- 22 Jun 2017 · Boston drafts Jayson Tatum at No. 3.
- 12 May 2025 · Tatum ruptures his right Achilles, Game 4 vs New York.
- Late Jun 2025 · Holiday to Portland for Simons and two 2nds.
- Late Jun 2025 · Porziņģis to Atlanta; Boston receives Niang and a 2031 2nd and sends a 2026
  2nd.
- 5 Feb 2026 · Simons to Chicago for Vučević.
- 6 Mar 2026 · Tatum returns vs Dallas.

**The chain.** `hash_i = SHA-256(hash_{i−1} + canonicalJSON(event_i))`, with genesis =
SHA-256("bow:celtics:reality"). Use crypto.subtle. Show 8 hex characters; the full hash is on
request.

**Forks.**
- A fork created at event k stores `{parentHash: hash_k, author, divergence, declared
  assumptions}`.
- Its address: `bow://celtics@<date>#<hash8>/branch:<author>-<slug>`.
- Its own events chain from hash_k.

**Verify.** Given an address, recompute the record's chain up to the divergence date and compare
hashes. Results:
- ✓ "diverged from the record as of 12 May 2025 · hash a41f09c2 matches";
- ✗ "the record this branch claims (a41f09c2) is not the record (7be2…) — either the record was
  altered, or the branch was".

### The screen (look: a notary's register)

- Ground: cream laid paper #F4F0E6; ink #1D1B18.
- The ONE colour is a notary-seal red #9E2A2B, used only for seals and verification marks.
- Type: "Libre Caslon Text" for entries, "IBM Plex Mono" for hashes.
- Each record entry is a register line with its seal: a small circular stamp showing the 8-char
  hash, drawn in SVG.
- Chain links run down a left margin as a continuous rule. Each link is labelled with the previous
  hash's first 4 characters, so you can see each entry sealing the one before.

**Actions.**
1. **"Fork here".** On any entry, create a branch (declared assumption, one line, typed or picked
   from 3 suggestions). It appears as a separate register in its own ink (orange #C2410C frame),
   with "sealed to the record at <hash8>".
2. **"Share"** shows the branch address. Beside it is an example "received from a friend" address
   with a "Verify" button.
3. **"Tamper with the record (demo)".** Edit one past entry's text: e.g. change "Game 4" to
   "Game 5", or the Niang pick year.
   - Every later seal visibly changes; recompute and animate the cascade.
   - Every fork sealed after that point shows a broken seal: "✗ parent no longer matches — the
     record changed after this branch was cut".
   - "Restore the record" puts it back, and all seals return.
4. **"Verify a received branch".** Three prefilled examples: one valid, one whose record was
   altered, and one whose own events were altered after sharing. Each gives a named result.

**Engine line:** "ENGINE · 10/10 checks passing". Examples of checks:
- genesis constant;
- chain recompute is deterministic;
- tampering changes all later hashes and no earlier ones;
- verify accepts the valid example and rejects the two invalid ones;
- a fork never changes any record hash.

**COPY line:** "WHAT A COPY WOULD MISS: the proof. A copy can draw seals; only a real chain lets a
stranger check that your branch came from the real record."

**COMMERCIAL LENS:** "Hypothesis: verifiable branches are what let publishers, schools and courts
of public opinion trust shared WHAT IFs — the record stays free; verification at scale is a
service."
