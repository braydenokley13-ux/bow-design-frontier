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
    - More boards are added as they are built.
- `briefs/` holds the working briefs:
  - the file format for boards (`DC_AUTHORING.md`);
  - the critic rubric;
  - the Wave 2 bar and shared Boston fixture (`w2/W2_BAR_AND_FIXTURES.md`), which includes the binding truth-grammar rules;
  - one spec per tournament (`w2/SPEC_*.md`);
  - repair lists produced by independent critics (`repairs/`).
- `econ/bow-economic-architecture.html` is the standalone "BOW Economic Architecture: Design Implications" page.
- `tools/render/render.mjs` is the render harness used to play each board in headless Chromium and screenshot every state for critique.

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

This is a working checkpoint: Wave 2 is in progress. Real-world facts on the boards are dated 29 Sep 2026 and marked "verify" where they have not been checked against a source.
