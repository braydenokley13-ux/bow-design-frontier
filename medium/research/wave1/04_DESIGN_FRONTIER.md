# 04 · Design Frontier archaeology (DF @ a9b7b1c2)

## Scope and honesty

DF only, `medium/` excluded. I read the README, every brief and repair list, the packets, CloneVerdict, Research, Archaeology, the four X3 engines and the Live World source in full, the clone probes, and the boards that carry each discovery. **I read code and ran nothing** (brief), so every "n/n checks" below is the board's design, not my result. (C) = I read it in code. (D) = a doc or board copy claims it. "Critics" are fresh-context model agents (CRITIC_RUBRIC:3, CRITIC_W2:62). No person has used any of it (README:5). Critic screenshots are not in the snapshot, so critic findings reach me only through repair lists and packets. Packet2's "forty boards" is stale: canvas.json lists 58. **Nothing here is EARNED** (per brief).

## Bottom line

DF holds three things: interface rules that survived several critic rounds; five small deterministic engines showing which rules can be computed rather than drawn; a clone test showing none of it is protected as code. The critics' answer to "is this a new medium?" is "not yet in one place" (README:83). The flagship "ticks; it doesn't execute" (REPAIR_FLAGSHIP:11), and its one-act propagation repair has not been re-judged.

**Computes (C):** X3Engine (28 tests), X3Seats (25), X3Lockstep (23), X3Proof (15), Live World (20, local shim only); smaller real models in Chemistry (`kp`/`aeq`), WhatIfPull (bracket tax, rule predicates), AtlasMechanism (rule simulator), the 1787 roll call (vote arithmetic).
**Only depicts (C):** WhatIfLiving (`build()` is hand-authored rows per declaration), Lens (authored cause chain), Handshake (scripted stages, per-option check strings), DevWorldtools ("none of this API exists"), Foundry, Agent (all occupants act identically), Atlas "assembly" (fixed `nets()`), BrowserProposed (one act moves three derived lines via `worldOf`), EnterHandover (`calc` = 222.8 − 2.7).

## Discoveries

Format: idea · novelty · label · basis. CODE≠DOC marks where the code disagrees with a doc.

1. **Browser shell.** Home = presences that each keep their own kind of time (live, calendar, stopped, diverged, counter). A question *arrives* you in the answering state with four edges (provenance, river of doors, seats, WHAT IF?). One editable address. "Back" = leave / rewind / back-to-branch-point. Clocks and Arrive NEW DEFAULT; Tracks MODE; Floor COMPONENT; Borders LENS; Specimen KILL (REPAIR_BROWSER2:3-16). Kind-by-time: NOVEL (weak). Arrive: RECOMBINATION (answer engine + deep link). Address: RENAMED. HYPOTHESIS. (C) navigation prototypes on authored data with authored refusals. At least five `bow://` grammars coexist (Clocks:1001, Proposed:669, Fork:414, Council:481, X3Proof:326); clock legibility unmeasured.
2. **Doors and seats.** Wave 1's four front doors (Sentence, River, Focus, Seat) collapsed to River → Seat threshold → first real choice, address across, scale lens inside (Packet:162). A door is named by its question, outcome only on request (River repairs present in code). A seat states know / can / can't / nobody knows. Real people are observed, not worn. RECOMBINATION (predict-before-reveal, information sets, role briefs). HYPOTHESIS. Dissent: Wave 1 critic made River the default door, Wave 2 made the Clock Hall home (Packet2:295).
3. **ENTER.** Winner E2 Handover: take or hand back named matters, sign, your clock beside the World's, "you gave up / you got", NO ACT recorded as absence and charged to whoever held the seat (interim, KM or vacant, depending on how you left: EnterHandover:279, BrowserProposed:574), leaving is an act. E3 runner-up. E1 killed (removed access, not knowledge; donates the ledger). E4 killed (a plain list carried the same understanding). Transfers: 1787 computes Strong's silence into a 5–5 tie (EnterTransfer1787:635); Harrow's own thesis admits Boston's form "carried over almost unchanged" (EnterTransferHarrow:285). RECOMBINATION (shift handover, relief in place, workflow timeouts). HYPOTHESIS. Untested: does signing read as a EULA (Packet2:187)?
4. **WHAT IF?** A fork is a frame in its own ink with a stamp, never a fill; hatch is banned for branches (REPAIR_WHATIF2:44-56). Fork: other actors declared or left unknown; the address carries the declarations (Fork:414). Council: seats Recorded / Declare / Model / Unknown, refusals name their rule, Keep blocked while a seat is unset. CODE≠DOC: it blocks on *any* unset seat (WhatIfCouncil:468). Pull: release and nothing forks. Living: ledger HELD / DIVERGED / IMPOSSIBLE / UNKNOWN / INDEPENDENT-assumed, each arriving event fits or raises a re-declare flag; a frozen branch has no NOW. Undo: let go, back to Reality, X3Engine "undo branch" test. Rank: Council default, Living mode, Pull component, Fan killed as a fork (REPAIR_WHATIF2:5-17). RECOMBINATION (assumptions register, git rebase, goal-seek). HYPOTHESIS. It answers E-live's killed "THE FORK" (32/100, Archaeology:72). Living's statuses are authored, not computed (C).
5. **One truth, many drawings.** Chemistry: one `sim` state drives syringe colour, molecules, curves, Q vs K algebra and prose, with predict-then-act (C, computed). Biology and Focus carry one pace or salary across scales. RECOMBINATION (linked views, PhET, explorables). HYPOTHESIS. CODE≠DOC: Packet/Map say texture "changes as the system settles"; Chemistry assigns fixed textures per panel (Chemistry:99,164).
6. **Truth grammar.** Seven textures, words on request. Binding rules: hatch = MODELED only; authored numbers wear outline; unmodeled future sealed, not hatched; actor models stippled; refusals name their rule (W2_BAR:98-117). RENAMED: it unifies three existing dialects (Archaeology:106). HYPOTHESIS. Built in 6/6 verticals (Packet2:225) but enforced by critics, not code. "Hatch on anything no model produced" was the commonest failure; one wrong payroll sat in eleven boards. Child legibility untested. GENERATED now also covers seeded toy output (SPEC_W3_EXECUTE:32), a stretch. HOW DO WE KNOW? is a toggle on 55/58 boards but a computed query only in X3Engine `whyLines` and X3Proof `verify`.
7. **Seat-scoped knowledge (X3Seats).** Facts carry `visibleTo` from a rules table (V-1..V-6); seat reasoning receives only its filtered list; a render gate counts leaks; a diff shows what one seat knows that another doesn't. RECOMBINATION (information sets, need-to-know, noninterference tests). HYPOTHESIS; critic tag INNOVATIVE, THIN MOAT. Holes found: fact-id gaps and timing reveal existence; laundering through acts or module constants passes all checks (CloneVerdict:109-117).
8. **Causal lineage (X3Engine).** Every number is a graph node with formula, texture and dated source; WHY walks to leaves; reverse search enumerates all 1- and 2-move sequences (88 candidate moves), keeps legal ones that meet a target, groups by cost, never scores. RECOMBINATION (spreadsheet trace-precedents, goal-seek, online trade machines). HYPOTHESIS. Legality is Boston-only and judged on the pre-trade apron status (X3Engine:344-350).
9. **Lockstep (X3Lockstep).** `worldAt(seed, log, t)` is a pure fold with per-tick mulberry32; acts after t never change state(t); lapses recorded once. RECOMBINATION (event sourcing, RTS lockstep). Self-labelled SPECULATIVE FRONTIER. CODE≠DOC: the shipped board still leaves the lapsed $2.4M call-up on the books (X3Lockstep:380); "runs while away" is a slider.
10. **Proof (X3Proof).** SHA-256 chain from genesis `bow:celtics:reality`; address `bow://celtics@date#parent8/branch:author-slug?head=head8`; verify recomputes; verdicts VALID, RECORD MISMATCH, BRANCH ALTERED AFTER SHARING, CANNOT READ (rule A-1). RECOMBINATION (git/Merkle, content-addressed links). HYPOTHESIS. Compare is 32-bit (8 hex); the record is an in-page constant with no anchor; the first three OBSERVED entries say `[source to cite]`; three non-identical canonical-JSON functions exist across X3Lockstep, X3Proof, Live World.
11. **Live World.** (C) An owner-written canon doc plus a per-act log; `fold(canon, acts, now)` on wall-clock ticks (1 World day = 1 real hour: Denver call closes at 2 h, call-up 1.5 h, owner note 5 h). A seat claim takes a platform `acquire` lease, then writes a `claim-seat` act; the fold, not the lease, decides holders (S-1..S-3). A missed deadline records NO ACT against the holder at that moment or "vacant" and zeroes pending (fixes the X3 bug, live-world:416). Each viewer publishes a 12-hex state hash via `room.presence`; peers are judged same, catching up or diverged at the peer's own tick. Private board at `data/users/<id>/private`. RECOMBINATION. **SPECULATIVE FRONTIER: it has not run on the real shared store** (README:49). `db/room/user` are shimmed from the spec (`makeHub`:657), e2e scripts are local with scratch paths and no committed results, `canon.seed.json` (epoch placeholder) is never loaded, act times are actor clocks with 10 s skew, and authority is the host platform's ACL ("no cryptographic signature by BOW").
12. **Rest.** Handshake KEEP (scripted draft-to-atomic-commit, three records, League sees filings not books; its lens toggle is a labelled prototype aid, NetworkHandshake:78). Agent weak. Foundry a wizard. Atlas A1 has a real small simulator on authored networks. Publisher: story-with-door wins, Moment card is the unit that travels. Textbook: J2 class reveal KEEP; critic caught a false economics lesson, repaired; teacher-transfer test not run. HYPOTHESIS or SPECULATIVE FRONTIER.

## Clone test

Copier: model agent, 7 screenshots, ~35-call budget (CLONE_TEST:22).
- **Copied:** all four boards in 12–22 calls. X1: same 33 doors from 4,699 combinations. X4: identical seals, since the page prints its formula. X3: real fold, same hashes across loads.
- **Missed:** what no screenshot shows. X1: an invented $205.0M first-apron line, "tools left" wrong on 26 of 72 branches. X2: 16 of 25 checks hard-coded, seat "reads" fixed strings. X3: hashed a summary; its hashes never match ours. X4: invented branch-head scheme, so copy and original can't verify each other.
- **COPY lines (D):** X1 "only unprinted numbers wrong"; X2 "guards displayed facts only; derived secrets can still leak"; X3 "a copy can never be this World"; X4 "nobody signs its head yet."
- **Caveats:** same model family as builders; four boards, one copier each; probe outputs not committed (only scripts with scratch paths), so counts are CloneVerdict's; clones print the original's "WHAT A COPY WOULD MISS" verbatim; the test copies engines, not the published ideas.

## Canon candidates, open questions, recurrence

Packet2 canon candidates (founder-only): truth grammar, address, Clock Hall, search-is-arrival, ENTER's five changes, WHAT IF? grammar, fork red lines, real people observed, absence, acts propagate, one sourced store (:258). Open questions (:304): first screen, signing as stakes or friction, Worlds that run while away, cut-with-hindsight, who owns the rules engine, agent discretion, child legibility of seven textures, rights posture, Council vs Pull, smallest falsifier of "new medium", how much propagation counts as executable. Recommendation: no new front doors; converge one Boston week in real code; five fans, one class, one operator; one sourced store (:317).
Recurrence is inflated: one builder family under shared briefs prescribed rules like NO ACT (SPEC_ENTER E3) and named refusals (W2_BAR:107). Built in 5/6 verticals: NO ACT, named refusals; 4: sealed hindsight, frame-ink-stamp, two clocks, give-up ledger (Packet2:225). DF's archaeology says DC/E-live already hold typed absence, refused-act receipts, knowable-at-the-time, dated basis tags (Archaeology:56,83) (D; parent to verify).
**Refusals to generalize:** "APIs illustrative, not a design commitment" (DevWorldtools:180); STANDARDIZE log, tags, role schema, fork semantics, time model but LEAVE OPEN domain rules, models, renderers, UI (SPEC_PLATFORM:40-43); "3D is a representation, not the medium" (W2_BAR:19); shared grammar, different skin per domain (W2_BAR:11); refuse merge as the goal of branching (Research:57); Foundry and Agent cross DC's "no LLM-authored money, terms" line, flagged as a founder call (Archaeology:109).

## (a) Five strongest surviving ideas

1. **Absence and responsibility.** Signed matters, NO ACT charged by seat, leaving as an act. Survived ENTER; computed in two folds. HYPOTHESIS.
2. **Honest fork.** Frame-ink-stamp, declared others, refusals that name a rule, sealed hindsight. Survived E-live's kill. HYPOTHESIS.
3. **Derivation ledger plus reverse search.** The only "why" that computes; fails as a moat, needs a sourced rulebook. HYPOTHESIS.
4. **Seat horizon plus visibility rules.** The four-column horizon is legible; the leak auditor is display-only. HYPOTHESIS.
5. **Self-proving record and canonical World.** Hash chain, addresses, Live World. Highest strategic value, least proven. SPECULATIVE FRONTIER.
Not listed: the seven-texture grammar recurs most but is critic-enforced, drifted, and unread by any child.

## (b) Kill list and reasons

Specimen cubes (a cost; WEIGH kept). Descent E4 (list won). Narrowing E1 (access, not knowledge). Fan as fork (forecasts). Seat and Focus as landing pages (folded). Sentence as front page (it is the address). Network ledger (a filterable table). Hatch on anything unmodeled (commonest truth failure). Field guide A2 (card grid). Model terrain A4 (read as a forecast). Documentary PB3, Variation tree W5 (never built). Chemistry v1 dashboard; Fork v1 "modeled" bands (a guess in a model's texture); "The Desk" (founder-rejected).

## (c) What the clone test implies for BOW's moat

HYPOTHESIS (four copies plus critics, no users): screens, grammar and engine code are copyable in a day, and printing formulas is right ("transparency stays", CloneVerdict:~123). The moat is instance and data: a canonical World and record others verify against, a sourced dated rulebook right on both sides of every trade, and accumulated acts, lapses and branches that "actually happened". The critics rank the smallest builds A run one World, B both-sides rules plus 10–15 real dated trades, C signed head with full 64-hex, D taint derived secrets (CloneVerdict:118-122). Today that moat is zero: history starts at first start, and canonical authority is borrowed from a host platform's ACL, in tension with E-main's one-process posture (D12). The open-format advice ("never charge for the format") agrees.

## Sources

Paths under DF = `/home/user/bow-design-frontier` (@ a9b7b1c2). Line numbers are file lines.
- DF:README.md:5,35,49,50,83
- DF:briefs/CRITIC_RUBRIC.md:3; DF:briefs/w2/CRITIC_W2.md:3,62; DF:briefs/DC_AUTHORING.md:92-122
- DF:briefs/w2/W2_BAR_AND_FIXTURES.md:11,19,42-55,98-117; DF:briefs/w2/SPEC_ENTER.md; DF:briefs/w2/SPEC_BROWSER2.md; DF:briefs/w2/SPEC_WHATIF2.md; DF:briefs/w2/SPEC_PLATFORM.md:40-43
- DF:briefs/w3/SPEC_W3_EXECUTE.md:8-20,22-49; DF:briefs/w3/CLONE_TEST.md:6-22; DF:briefs/w3/CRITIC_W3.md:9,49-60; DF:briefs/w3/SPEC_LIVE_WORLD.md:5-21,67-153
- DF:briefs/repairs/REPAIR_BROWSER2.md:3-21; REPAIR_ENTER.md:5-27; REPAIR_WHATIF2.md:5-56; REPAIR_FLAGSHIP.md:3-12; REPAIR_TEXTBOOK.md:3-7; REPAIR_BIO_RIVER_SEAT.md:49-118
- DF:canvas/Packet.dc.html:162; DF:canvas/Packet2.dc.html:29,43,184-210,215,225,258,271,285,295,304,317
- DF:canvas/CloneVerdict.dc.html:98-102 (rows), 104-108 (moat), 109-117 (bugs), 118-122 (next builds)
- DF:canvas/Archaeology.dc.html:56,72,83,106,109; DF:canvas/Research.dc.html:57; DF:canvas/Main.dc.html:122-126
- DF:canvas/X3Engine.dc.html:217,223-580 (`graph`:273, `checkTrade`:344, `reverseSearch`:417, `whyLines`:453, `selfTests`:471)
- DF:canvas/X3Seats.dc.html:154,187,199,234,242,303,396,405,512
- DF:canvas/X3Lockstep.dc.html:242,302,322,349,380,449
- DF:canvas/X3Proof.dc.html:223,313,326,327,338,355,377
- DF:live/live-world.src.html:264,373,416,505,507,596,657,688,739,809; DF:live/canon.seed.json:4; DF:live/e2e.mjs, DF:live/e2e2.mjs
- DF:evidence/w3-clone-test/probes/c12_x1mut.mjs, c12_x2inject.mjs, x4grind.mjs, x3pay.mjs; DF:evidence/w3-clone-test/clones/*.dc.html
- DF:canvas/EnterHandover.dc.html:279,296,314; DF:canvas/BrowserProposed.dc.html:538,574,669; DF:canvas/Browser2Clocks.dc.html:908,1001,1013
- DF:canvas/EnterTransfer1787.dc.html:635; DF:canvas/EnterTransferHarrow.dc.html:285,367
- DF:canvas/Fork.dc.html:414; DF:canvas/WhatIfCouncil.dc.html:261,468,481; DF:canvas/WhatIfLiving.dc.html:235; DF:canvas/WhatIfPull.dc.html:274,283
- DF:canvas/Chemistry.dc.html:99,164,213,215,242; DF:canvas/AtlasMechanism.dc.html:215
- DF:canvas/DevWorldtools.dc.html:180; DF:canvas/NetworkHandshake.dc.html:78; DF:canvas/Agent.dc.html:113
- DF:canvas/canvas.json (58 boards); DF:econ/bow-economic-architecture.html ("Never charge for the format")
