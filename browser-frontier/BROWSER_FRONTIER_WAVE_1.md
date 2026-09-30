# BOW Browser Founding Frontier — Wave 1

29–30 Sep 2026 · `bow-design-frontier/browser-frontier/` · branch `claude/zealous-sagan-cuy6jv`. The
commission: find the native human interface to executable reality, with Boston basketball as the first
flagship, and then — after the founder's update of 29 Sep — stress it on a Reality City (New York). This
page is the map of what was done, what came out, and where the evidence is. The answers are in
`BROWSER_FOUNDER_PACKET.md`.

**Status in one paragraph.** Design evidence only. Thirteen interactive prototypes were built and played
in real Chromium at four viewports. Two independent critics judged the first nine before any builder
explained them; the survivors were repaired, converged on one record, attacked in three other domains
and stress-tested on real New York geography; a third independent critic then judged the convergence
and city boards, and those were repaired again. **No person outside this process has used any of it.**
Nothing here is production Browser infrastructure, and there is no `bow-browser` repository, as
instructed.

## 1. What happened, in order

| Step | Who | Output |
|---|---|---|
| Prior art | parent | `briefs/00_PRIOR_ART.md` — Waves 1–3, what exists today (BOW Economics Live, NBA League World, Harbor Lights, the Boston 3D work, the Live World page), capability labels, banned clichés |
| Research wave | 8 independent researchers, A–H | `research/A_…` to `H_…` — Search Destroyer, System Address, Spatial, Time-native, Atlas/Scale, Ambient AI + cost, Representation Router + economics, Radical Interfaces |
| Parent synthesis | parent | `briefs/HYPOTHESIS_MAP.md`; seven mental models with twelve fields each (`BROWSER_MENTAL_MODEL_TOURNAMENT.md` §1) |
| Prototype wave | 9 builders | `prototypes/Institution`, `Cut`, `Jurisdiction`, `Guest`, `Bench`, `TakeItOut`, `Parting`, `EnterTournament`, `Concordance` (+ `.steps.json` each) |
| Browser truth | parent | every board played in headless Chromium (`critique/BROWSER_TRUTH_RUN.txt`) |
| Critique wave | 2 independent critics | `critique/CRITIC_1_MEDIUM.md` (interaction / medium), `critique/CRITIC_2_PLATFORM.md` (platform / scale) — renders judged before any builder self-report |
| Repair or kill | parent | `briefs/CANON_AFTER_CRITIQUE.md`, contract amendments (`briefs/PROTOTYPE_CONTRACT.md` §9), two repair passes over eight boards, `BROWSER_KILL_LIST.md` |
| Convergence | 1 builder | `prototypes/OneRecord.html` — the flow both critics named, on one record, two clients, address in the URL |
| Cross-domain attack | 2 builders | `prototypes/CrossJurisdiction.html`, `prototypes/CrossCut.html` — chemistry, a supply chain, Yellowstone |
| Reality City | 5 lanes, A–E | `research/NYC_A_…` to `NYC_E_…`, `prototypes/RealityCity.html` on 4,142 real Midtown footprints |
| Convergence critique | 1 independent critic | `critique/CRITIC_3_CONVERGENCE.md` — OneRecord PUSH, RealityCity COMBINE; a repair pass on both |
| Final documents | parent | the thirteen commissioned documents plus `REALITY_CITY_STRESS_TEST.md` |

## 2. What came out

**The Browser is a composition on one record, not a winning screen** (`BROWSER_MENTAL_MODEL_TOURNAMENT.md`
§4). Both critics found the same thing — "the pieces are new, but not yet in one place" — and the same
choice: a **record protocol** (addressed, signed act logs any surface renders as checked views) over a
destination people walk into. On that record:

- **ACT — Jurisdiction** (strongest): an act is a paper whose lines other systems hold; five kinds of
  yes; a wrong act comes back refused by another seat, naming the rule; three records, no god view.
- **TIME — the Cut and the Seam**: stand at a moment with only what the desk could know; the seal; a
  branch that Reality grades HELD · DIVERGED · IMPOSSIBLE · RE-DECLARE.
- **VIEWS — Concordance**: every representation a witness of one record; "Do these agree?"; the
  Downshift.
- **REACH — Guest** (strangest, most important): BOW inside other surfaces; the seat rings you;
  standing orders; the Round that ends "level with the record".
- **OPERATORS** — lift an act out (WHY by experiment); forks as lineages with closed lockfiles.
- **DISCOVERY** — press a true mark and typed doors open; the Bench for questions with no anchor; the
  Want for the honest hole.
- **SCALE** (New York) — change the system along a typed relation carrying one pinned quantity through
  a bridge.

**ENTER** is GRANT → REDEEM → LEASE (`ENTER_TOURNAMENT.md`). **WHAT IF** is a lineage graded by Reality
(`WHAT_IF_TOURNAMENT.md`). **TIME** is the Cut + Seam with the Round as the return path
(`TIME_NAVIGATION_TOURNAMENT.md`). **Place** is one view, never the index (`BROWSER_KILL_LIST.md`).

**The wave-2 results.**
- **Convergence** (`OneRecord.html`): the flow both critics named runs on one SHA-256-chained record,
  addressed in the URL, across two clients; a forged address is caught; a fresh client says what it
  cannot check. Browser stand-in for the server; authored counterparties; no real user. An independent third critic judged it PUSH: one act is in one place in one browser, but off the script
  the record split into two hashes and rewrote who acted (`critique/CRITIC_3_CONVERGENCE.md`). A bounded repair pass fixed those four lies, and the parent replayed the critic's path to check (packet §A15).
  Still not in one place: a second device, acts across boards, and forks that keep acting.
- **Cross-domain** (`BROWSER_CROSS_DOMAIN_ATTACK.md`): the grammars hold where someone holds the system
  (supply chain HELD), bend where nature answers instead of a seat (chemistry BENT), and break where
  nobody holds it (Yellowstone BROKE). Two rulings are put to the founder: a typed "no verdict" when
  Reality cannot grade, and how to show "contested".
- **Reality City** (`REALITY_CITY_STRESS_TEST.md`): the grammar navigates structure and authority on
  real footprints but not sums; SCALE is a native verb (change the system along a typed relation with a
  pinned quantity through a bridge); geography did real work for 4 of 13 systems; the city is cheap to
  draw and expensive to mean; the city is a directory, never a state.

## 3. The prototypes

Open any board through a static server rooted at `browser-frontier/` (the boards load
`_shared/boston-fixture.js`, vendored three.js and the NYC footprints by relative path). The harness
replays each board's script and screenshots every state:

```
cd browser-frontier/harness && npm install
node play.mjs OneRecord.html ../prototypes/OneRecord.steps.json --w 1440 --h 900
# the critic's off-script path, and a fresh browser opening a fork address:
node play.mjs OneRecord.html ../prototypes/OneRecord.offscript.steps.json --w 1440 --h 900
node play.mjs 'OneRecord.html#s=boston.year-two&at=42&h=13ca7fd4&b=lift.a43%4042.13ca7fd4&seat=gm&view=room' \
  ../prototypes/OneRecord.fresh.steps.json --w 1440 --h 900
```

It needs a Chromium binary (path in `play.mjs`); it serves `browser-frontier/` itself and writes
`shots/<name>/NN-*.jpg` plus `report.json` (console and page errors, failed steps, horizontal overflow,
unlabeled controls).

| Board | Model / job | Key moment | Label |
|---|---|---|---|
| `OneRecord.html` | **convergence proof** | the League returns the paper naming the rule; act 43 lands in every view and a second client with one hash; the Round grades a kept branch | PROPOSED |
| `Jurisdiction.html` | ACT grammar (strongest) | a wrong act refused by another seat, naming its rule; three records, no god view | PROPOSED |
| `Cut.html` | TIME grammar | stand at 2 Feb 2026 with only what the desk could know; keep a branch; Reality grades it | PROPOSED |
| `Concordance.html` | view contract (substrate) | one act in every view; "Do these agree?"; the Downshift | PROPOSED |
| `Guest.html` | reach (strangest, most important) | BOW inside an assistant, an article, a call; the seat rings; the Round | PROPOSED (hosts drawn inside the page) |
| `Institution.html` | the Room (one view, not the index) | rooms lit or dark with funding; sit, then sign | PROPOSED; 3D |
| `TakeItOut.html` | operator: lift an act | the present re-forms with luck fixed | PROPOSED |
| `Parting.html` | operator: fork lineage | a public fork with inhabitants and a closed lockfile | PROPOSED |
| `Bench.html` | discovery lane | a question becomes a named dynamic; the Want | PROPOSED; its compile SPECULATIVE |
| `EnterTournament.html` | seven ways to ENTER (parked) | Handover, Offer, Seal, Ring, Take a Face, Sit-then-Sign, Lever | PROPOSED |
| `CrossJurisdiction.html` | ACT grammar in 3 domains | "Nature does not say yes; it answers"; Yellowstone: "a chair for a fork, not a seat" | PROPOSED |
| `CrossCut.html` | TIME grammar in 3 domains | the photometer as a desk; the seam with no control | PROPOSED |
| `RealityCity.html` | the grammar on real NYC ground | site tests on real footprints; SCALE with a pinned crowd; a partial yes on another authority's clock | PROPOSED; real footprints RECORDED |

Every board carries a "What's real?" layer (REAL CURRENT PRODUCT CAPABILITY · PROPOSED PLATFORM
CAPABILITY · SPECULATIVE FRONTIER) and an AI-cost label on every interaction (NO AI · SMALL · FRONTIER
OCCASIONAL · FRONTIER CONTINUOUS). **None of them calls a model.** Visual styles differ on purpose (the
commission forbade converging on one permanent style).

**Known gaps after the repair passes** (each board's harness run is clean at all four viewports; these
are what the builders and the parent could still see):
- The address is not yet in the URL on `Guest`, `Bench`, `TakeItOut` and `Parting` (it is on `OneRecord`,
  `Cut`, `Jurisdiction`, `Concordance`, the cross-domain boards and `RealityCity`). `Concordance` restores an
  address but does not lock acting to read-only for whoever opens it; `Institution`'s Schedule row and
  camera pose are not addressed.
- The last marks that read as form controls were replaced by the parent after the repair passes:
  `Jurisdiction`'s and `CrossJurisdiction`'s "knowing now" circles and boxes are now solid and dashed bars;
  `Parting`'s radio-like pair pins are now lozenges.
- Tight layouts: at 1024×600 `OneRecord`'s fourth Round grade and `CrossCut`'s seam need a scroll; at
  1280×800 `CrossJurisdiction`'s Yellowstone buttons sit below the fold.
- Weight: `Institution`, `Bench`, `CrossCut` and `CrossJurisdiction` are 150–215 KB (target 150, cap 300);
  `RealityCity`'s L3 view draws 58,116 triangles (budget 30k). **Frame time on a real Chromebook has never
  been measured for any board.**
- A hover-contrast bug (white text on a hover background) was found on three boards and fixed.

## 4. The documents

| Document | Answers |
|---|---|
| `BROWSER_FOUNDER_PACKET.md` | the commission's sixteen questions and the update's fifteen; the decisions only the founder can make |
| `BROWSER_MENTAL_MODEL_TOURNAMENT.md` | the hypothesis map (seven models × twelve fields), critic rankings, verdicts, the commercial lens |
| `ENTER_TOURNAMENT.md` | seven ways across a threshold → GRANT → REDEEM → LEASE |
| `TIME_NAVIGATION_TOURNAMENT.md` | Boston NOW → last year's deadline → a branch; the Cut + Seam |
| `WHAT_IF_TOURNAMENT.md` | eleven fork mechanics → the lineage |
| `ATLAS_DISCOVERY_FRONTIER.md` | discovery past search and the home page; the external-reality frontier (semiconductors) |
| `REPRESENTATION_ROUTER_FRONTIER.md` | how Browser picks a representation; Concordance; the Downshift |
| `REPRESENTATION_ECONOMICS.md` | how representation scales in cost; the Fact correction |
| `AMBIENT_AI_COST_MAP.md` | every interaction's AI cost; the floor that works with no AI |
| `EXTERNAL_INVOCATION_FRONTIER.md` | BOW inside assistants, publishers, LMS, voice, games, spatial devices; signed claims |
| `BROWSER_CROSS_DOMAIN_ATTACK.md` | Jurisdiction and the Cut in chemistry, a supply chain and Yellowstone |
| `REALITY_CITY_STRESS_TEST.md` | New York: the grammar, SCALE, the knowledge city, the network, the economics |
| `BROWSER_KILL_LIST.md` | everything killed, parked, demoted or turned into law, with who and why |

Working papers: `briefs/` (contract, specs, critic brief, canon, the founder update), `research/`
(thirteen reports), `critique/` (two critics and the browser-truth run), `evidence/boston-spatial/`
(screenshots of the real Boston 3D work).

## 5. What is honest to claim

- **REAL today** (not built here): BOW Economics Live's no-LLM classroom runtime with device-bound seats
  and rejoin; its dated Boston fact store and CBA rules engine; the Live World page's SHA-256 act-log
  fold (not yet on the real shared store); Worlds' League Office, two-owner exchange, Harbor → NBA
  read-only crossing and Foundry's declaration compiler (unmerged branch). NYC Open Data footprints,
  PLUTO and FacDB exist and were read.
- **PROPOSED** (shown working in a prototype, on a browser stand-in for a server): the record protocol,
  the act and time grammars, Concordance, Offers, rings, standing orders, the Round, SCALE, the Site
  tests, signed claims.
- **SPECULATIVE**: a live Reality feed, open-world compilation, assistants quoting faithfully at scale,
  organisations declaring their own systems, a validated transit → attendance model.
- **Not claimed**: that anyone wants this; that a child can read the truth grammar; that any of it
  runs on a Chromebook (never measured); that any number here about cost is more than an estimate
  (Boston's hours were never recorded).

## 6. What would be next (the founder decides)

The founder packet ranks the decisions (`BROWSER_FOUNDER_PACKET.md` §C). The recommended next build
is the one production proof in §B15: **the Boston deadline as a served record** — OneRecord's flow on a
real runtime, with two people in two browsers, the real CBA engine as the League's line, a signed claim
set checked in an outside page, and a Round after real elapsed time — judged by people who did not
build it. The no-regret move today is to start the dated, hashed snapshot archive of New York's
registries and to meter human hours on every build.
