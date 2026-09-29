# Wave 1 shared brief (parent-written, preliminary)

Every wave-1 worker reads this file first. It is a **preliminary list of candidate concepts with pointers**. It is not a conclusion: it says what might be a BOW primitive and where to look, not what is true. Where the code disagrees with this list, the code wins. Say so explicitly.

## Sources (read-only; the SHAs are fixed for this run)

`$SP` = `/tmp/claude-0/-home-user/b41be0eb-b143-5871-a601-ee9ec7d839dc/scratchpad/src`. The snapshots are text-only: images, models and fonts were stripped.

| Name | Path | Repository @ SHA | Role |
|---|---|---|---|
| DF | `/home/user/bow-design-frontier` | design-frontier @ `a9b7b1c2` | Design research, prototypes, tournaments, clone test. Never used by people. |
| DC | `$SP/dc-os` | decision-challenges `codex/bow-consequential-os-ultra-20260925` @ `e1d05104` | Canonical DC frontier (Codex) |
| DC-61 | `$SP/dc-pr61` | decision-challenges `claude/wizardly-johnson-ow18to` @ `1c581593` | Claude PR #61. The founder now treats it as historical. |
| DC-main | `/home/user/bow-decision-challenges` | `main` @ `104085a2` | Older canonical docs baseline |
| W | `$SP/econ-worlds` | economics-live `codex/bow-worlds-complete-ultra-20260925` @ `a43679f2` | Canonical Worlds architecture (Codex owns "saved institutional truth") |
| W-3D | `$SP/econ-visual` | economics-live `claude/quirky-maxwell-s26mxx` @ `09051acf` | 3D/visual Worlds frontier (Claude owns "the 3D experience") |
| E-main | `/home/user/bow-economics-live` | `main` @ `556ec841` | Season One release line; `LessonModule` contract |

## Candidate concepts (neutral list with pointers)

**Design Frontier (DF):**
- ENTER, meaning entering a system at a moment or seat (`canvas/Enter*.dc.html`, `briefs/w2/SPEC_ENTER*.md`).
- WHAT IF?, the fork (`canvas/Fork.dc.html`, `WhatIf*.dc.html`, `briefs/w2/SPEC_WHATIF2.md`).
- HOW DO WE KNOW?, the provenance query.
- One truth drawn in many representations (`canvas/Chemistry.dc.html`).
- The truth grammar of seven epistemic statuses: OBSERVED, RECORDED, AUTHORED, COMPUTED, MODELED, GENERATED, UNKNOWN (`README.md`, `briefs/w2/W2_BAR_AND_FIXTURES.md`).
- Seat-scoped knowledge (`canvas/X3Seats.dc.html`).
- A causal engine with reverse search (`X3Engine`).
- Lockstep fold of seed plus act log (`X3Lockstep`).
- Hash-chained record, verifiable branches and the `bow://` address (`X3Proof`; `briefs/w3/SPEC_W3_EXECUTE.md`).
- Live World: seat leases, real deadlines, private boards, shared act log (`live/`, `briefs/w3/SPEC_LIVE_WORLD.md`).
- The Browser (`Browser*`, `BrowserProposed`).
- Atlas and Search, Publisher, Textbook, Foundry, Agent ("the seat and its warrant"), Network handshake.
- The clone test (`CloneVerdict`, `evidence/w3-clone-test/`).
- The founder packets (`Packet`, `Packet2`).

**Decision Challenges (DC):**
- Responsibility: held, bounded, versioned. See `docs/campaign/bow-consequential-os-ultra-20260925/RESPONSIBILITY_CONTRACTS.md`.
- Challenge and frozen package.
- Moment (`MOMENTS_AND_RECOGNITION.md`).
- Decision Receipt v1, an ex-ante capsule that is replay-verified and portable JSON (`DECISION_RECEIPT_V1.md`).
- Source availability versus source opening; knowability at the act; exact object time cuts (`DECISION_INFRASTRUCTURE_ADR.md`).
- The evidence chain: act → semantic event → observer → Evidence Requirement → rubric (`docs/ASSESSMENT_SYSTEM.md`).
- Support provenance; typed absence (null, not zero).
- Teacher exact reader and projection (`TEACHER_CONTROL_ROOM.md`).
- Lab (`LAB_SYSTEM.md`); Home (`BOW_HOME.md`); Foundry (`FOUNDRY_OUTPUT_AUDIT.md`).
- "Kernel" (`src/platform/kernel/`: `refs.ts`, `carry.ts`, `history.ts`, `audit.ts`); attempt provenance (`src/platform/provenance/`).
- `src/consequential/*`: objects, information, recognition, lab, system, transfer and others.
- The Avery v6 room, "a place with attached obligations and receipts".

**Worlds (W, W-3D):**
- World as a persistent institution with time.
- The Harbor browser-local club versus the server-owned NBA "World One" League.
- The Commissioner advances time; owners get authenticated projections (`hqView.*`).
- Court: recorded possessions with server dice, modeled versus played. Film: saved replay of Court.
- Moments that seal when later events cannot answer them.
- Lab: alternatives replayed from the same earlier state; "a modeled alternative is never a second actual history".
- Foundry: declarations compile into actions, obligations, Moments and Lab hooks. The Moment compiler validates known and unknown facts against action authority, audience and information-availability time.
- Negotiation (typed offer, counter, refusal, acceptance, deadline); counterparties and relationships; obligations.
- Cross-system causal record; two-operator shared events; `bow-bridge-1` (the League↔DC contract, synthetic rehearsal only; `contracts/bridge/bow-bridge-1/`).
- Save integrity and versioned old-save replay; source lock and rights model card.
- Place topology and morphology; environmental memory.
- The `LessonModule` contract: `phases`, `initialState`, a pure `reduce`, `studentView`/`teacherView`/`boardView`, `aggregate` (E-main `runtime/src/shared/lessonModule.ts`).
- Decisions log: `docs/PRODUCT_DECISIONS.md` (W to D250, W-3D to D259).

## Truth labels (mandatory on every conclusion)

- **EARNED:** directly supported by a working BOW implementation. Cite the code, not only a doc.
- **RECURRING:** independently required in multiple *materially different* BOW products. A single-repo worker may say "recurs within DC across families X, Y"; the parent decides cross-product recurrence.
- **HYPOTHESIS:** a plausible next platform law, not yet proved.
- **SPECULATIVE FRONTIER:** deliberately far out.
- **REJECTED:** investigated and found misleading, redundant, premature or weak.

## Report rules

- Write your report to the exact path your task names. Use at most about **1,500 words of body**, then a **Sources** section of precise references: `NAME:path:line` or `NAME:path#symbol`.
- Separate what **the code does** (cite code) from what **a doc claims** (cite the doc). Docs in these repos are candid but can overclaim; say which of the two you are relying on.
- Report explicit **refusals to generalize**, meaning places where a product says "this is not a platform" or "do not reuse this". They matter as much as the primitives do.
- Do not edit anything except your own report file. Do not commit. Do not spawn subagents. Run no builds, tests, servers or browsers in the product repositories.
- Your final message to the parent is **at most 150 words**: the path, then your three most important findings.
