# BOW Design Frontier

Design exploration for BOW as a medium of executable worlds. You enter a system, act inside it, fork it ("WHAT IF?") and ask "HOW DO WE KNOW?", and one underlying truth is shown in many representations.

These are prototypes and design evidence, not product code. None of it has been used by students, fans, teachers or operators. A verdict here is a design reading, not proof.

## What's here

- `canvas/` holds the artboards of the "BOW Design Frontier" Design canvas: one `*.dc.html` file per board, plus `canvas.json`, which lists the pages, board positions and titles. Each board is a self-contained interactive prototype (1440 px wide). Pages:
  - **Wave 1:**
    - Thesis, problems, archaeology and map (`Main`, `Problems`, `Archaeology`, `Map`)
    - The Browser tournament (`BrowserSentence`, `BrowserRiver`, `BrowserFocus`, `BrowserSeat`)
    - Native APUSH, Philadelphia 1787 (`ApushRoom`, `ApushNotes`, `ApushBalance`)
    - One truth, many representations (`Chemistry`)
    - WHAT IF? (`Fork`)
    - The frontier sweep (`Biology`, `Lens`, `Foundry`, `Enterprise`, `Agent`, `Network`)
    - The founder tournament packet (`Packet`)
  - **Wave 2:**
    - The sports medium proof (`SportsProof`)
    - Research and the commercial lens (`Research`, `Commercial`)
    - Browser Frontier 2 (`Browser2*`)
    - The ENTER tournament (`Enter*`)
    - WHAT IF? 2 (`WhatIf*`)
    - Search/Atlas (`Atlas*`)
    - Native textbook (`Textbook*`)
    - Publisher (`Pub*`)
    - Cloud and Network (`DevWorldtools`, `NetworkHandshake`)
    - The proposed Browser (`BrowserProposed`), which composes the critics' picks on one path
    - The Wave 2 founder packet (`Packet2`): the tournaments, grammar matrix, canon candidates, kill list, open questions and Wave 3 recommendation
  - **Wave 3 · EXECUTE (engines, not screens):**
    - `X3Engine`: every number knows why, with a causal engine and a reverse search for the moves that reach a target.
    - `X3Seats`: knowledge belongs to the seat, via an epistemic engine where each seat sees only its own facts.
    - `X3Lockstep`: the same World for everyone without a server, by folding a seed and an act log in lockstep.
    - `X3Proof`: the record proves itself, with a SHA-256 hash chain and forks that verify against it.
    - `CloneVerdict`: the Wave 3 verdict. A copier rebuilt all four boards from screenshots in about 12–22 tool calls each, and independent critics probed the originals and the copies. Each board's COPY line states that result honestly.
- `briefs/` holds the working briefs:
  - the file format for boards (`DC_AUTHORING.md`);
  - the critic rubric;
  - the Wave 2 bar and shared Boston fixture (`w2/W2_BAR_AND_FIXTURES.md`), which includes the binding truth-grammar rules;
  - one spec per tournament (`w2/SPEC_*.md`);
  - repair lists produced by independent critics (`repairs/`);
  - the Wave 3 specs, clone test, critic brief and Live World spec (`w3/`).
- `live/live-world.html` is the Live World, a standalone page and one persistent, shared World.
  - People take the Boston and Denver GM seats by lease, act before real deadlines and keep a private board.
  - Every browser folds the same act log to the same SHA-256 state and compares hashes live.
  - It uses the artifact platform's `db`, `room` and `user` capabilities.
  - Opened as a plain file, it runs in local mode with an in-memory stand-in and a "Simulate a second person" panel.
  - The source is `live-world.src.html`, built by `build.mjs`. `e2e*.mjs` are the local browser checks, and `canon.seed.json` is the founding record, with its start time left as a placeholder.
  - It has not yet run on the real shared store.
- `evidence/w3-clone-test/` holds the four screenshot-only copies and the critics' probe scripts.
- `econ/bow-economic-architecture.html` is the standalone "BOW Economic Architecture: Design Implications" page.
- `tools/render/render.mjs` is the render harness used to play each board in headless Chromium and screenshot every state for critique.
- `browser-frontier/` is the **BOW Browser Founding Frontier** (29–30 Sep 2026): what the native human interface to executable reality should be, with Boston basketball as the flagship and New York as a Reality City stress test.
  - Start with `browser-frontier/BROWSER_FOUNDER_PACKET.md` (the answers) and `browser-frontier/BROWSER_FRONTIER_WAVE_1.md` (what was done and where the evidence is).
  - `prototypes/` holds thirteen standalone interactive boards, including `OneRecord.html` (the convergence proof), `CrossJurisdiction.html` and `CrossCut.html` (the cross-domain attack) and `RealityCity.html` (real Midtown footprints). Serve `browser-frontier/` with any static server.
  - `harness/play.mjs` replays each board's `.steps.json` in headless Chromium at any viewport and writes screenshots plus a report of errors, overflow and unlabeled controls.
  - `research/`, `critique/` and `briefs/` hold the thirteen research reports, the independent critics and the working briefs.
  - Everything there is design evidence. There is no `bow-browser` repository and no production Browser infrastructure.

## Medium & Protocol Frontier (`medium/`), 29 Sep 2026

This is a research program on BOW as a medium of executable systems. It inspected all three repositories at exact SHAs (`medium/SOURCE_STATE.md`) and ran:
- eight wave-1 research reports and five targeted wave-2 reports;
- a blind open/closed/hybrid platform tournament;
- two independent adversarial critics.

Everything is labelled EARNED / RECURRING / HYPOTHESIS / SPECULATIVE FRONTIER / REJECTED. **Nothing in it is canon.** After the critics, the contract is framed as a convergence hygiene standard for the two products plus a test plan, **not** a spec to publish.

**Start with `medium/BOW_MEDIUM_CONTRACT_V0_PROPOSAL.md`.** Its §12 is the founder packet.

The companion documents:
- `BOW_SYSTEM_VOCABULARY_V0.md`
- `BOW_PROTOCOL_HYPOTHESES_V0.md`
- `BOW_REPRESENTATION_CONTRACT_V0_PROPOSAL.md`
- `BOW_PORTABILITY_AND_COMPOSITION_V0.md`
- `BOW_TIME_AND_FORKS_V0.md`
- `BOW_OPEN_PLATFORM_TOURNAMENT.md`
- `BOW_MEDIUM_EVIDENCE_LEDGER.md`
- `BOW_MEDIUM_KILL_LIST.md`
- `BOW_OPEN_QUESTIONS_V0.md`

Raw worker reports, tournament papers and critiques are in `medium/research/`.

## Truth grammar (summary)

Each value's epistemic status is drawn as a texture, and words appear on request:

- OBSERVED: solid
- RECORDED: double-ruled
- AUTHORED: outline
- COMPUTED: toned
- MODELED: 135° hatch, only when a model actually ran
- GENERATED: stipple
- UNKNOWN: dashed and empty

A fork is a frame in its own ink with a stamp, never a fill over the record. A door into a past moment is named by its question, never by its answer.

## Running a board locally

The boards load `./support.js`, the canvas runtime. It is not committed. Copy `artifact-type/dc-runtime.js` from the published Design artifact next to the boards as `support.js`, then serve the folder:

```
python3 -m http.server 8765
cd tools/render && npm install && node render.mjs Fork.dc.html 900 steps.json
```

`render.mjs` expects a Chromium binary (path at the top of the file) and the server above. Step files are JSON arrays of `{"wait":ms}`, `{"js":"button text"}`, `{"css":["selector",n]}`, `{"range":["selector",value]}` and `{"shot":"name"}`.

## Status

Waves 1 and 2 are complete as design evidence. Every board was built, played in a browser and judged by an independent critic, and then repaired or killed. The verdicts, preserved dissent and open questions are on `Packet` (Wave 1) and `Packet2` (Wave 2).

The critics' answer to the founder's question ("is this a new medium?") is "not yet in one place". The behaviours exist across boards. The flagship composition now propagates one act through its state, but that has not been re-judged by a critic or by people.

Real-world facts on the boards are dated 29 Sep 2026 and marked "verify" where they have not been checked against a source. Boston's Reality figures follow BOW Economics Live's sourced fixture (see the CORRECTION block in `briefs/w2/W2_BAR_AND_FIXTURES.md`).
