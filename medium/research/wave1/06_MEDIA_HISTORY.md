# 06 · Media and computing history: what made a medium, and what it implies for BOW

Agent 6, read-only history research, 2026-09-29.

**Scope and labels.** History only: no BOW code read, no repo archaeology. BOW statements rest on docs (`00_PARENT_BRIEF.md`, `DF:README.md`, and the two `CLAUDE.md` files loaded in my context), not code. History cannot make anything EARNED or RECURRING, so each answer ends with a **Pattern (HYPOTHESIS)** line, and every BOW implication is HYPOTHESIS, SPECULATIVE FRONTIER or REJECTED. Facts were checked on the web this session unless Sources tags them `[M]` (memory). The cases are my selection and "medium" has no agreed definition: analogy, never authority.

**Bottom line.** Medium status came from three things together: citable parts, a record that outlives its tool, and non-specialists authoring in the reader's own grammar. Winners standardized a thin waist (address, record, legend) after one small tool had real users. The stalled ones specified first (Xanadu, VRML, OpenDoc, Semantic Web) or died with one runtime (HyperCard, Flash).

## 1. Medium or feature?

Working test from the cases: a medium is (a) **citable** without the author's help, (b) **portable**, so another tool reads the record after the first dies, and (c) **authorable by non-specialists** in the reader's own grammar. Later signals: an unplanned genre ecosystem and a shared literacy.

- **Citable and authorable:** VisiCalc (Oct 1979): A1 addresses, accountants authoring. It began in spring 1978, when Bricklin watched a Harvard Business School professor erase and recompute a blackboard model.
- **All three:** the web: URL, plain-text HTML, CERN's public-domain release (30 Apr 1993).
- **Portable records that outlived tools:** PDF (1993; ISO 32000-1, 2008); MP4 (from QuickTime; ISO/IEC 14496-14:2003); CMX 3600 EDL (1970s; still every editor's lowest common denominator); DXF (Dec 1982); IFC (ISO 16739, 2013).
- **A feature:** Excel's Solver (Feb 1991) has no address or record outside workbook cells. **Authorable, not portable:** HyperCard, Flash (section 6).

**Pattern (HYPOTHESIS):** the test separates media from features in these cases; it is survivorship-biased.

## 2. Primitives that became universal

| Medium | Primitive |
|---|---|
| Documents | edition-independent locus (chapter:verse, Stephanus 1578) |
| Web | link + URL; one-way, breakable |
| Spreadsheet | A1 + recalculation by dependency (Lotus 1-2-3, 1983) |
| Maps | coordinates in a declared reference system; layer (McHarg 1969); z/x/y |
| Video | timecode (EECO 1967, SMPTE 1969); EDL |
| Games | seed; replay as input log (Doom demos) |
| Simulation | time step; stocks and flows (Forrester 1961) |
| CAD | constraint (Sketchpad 1963); feature-history tree (1988) |
| IDEs, OS | file:line:col; commit hash (Git 2005); file, process, pipe (POSIX 1988) |

Common core: an **address**, a **unit of composition**, a **replayable derivation** (recalc graph, feature tree, EDL, demo, commit DAG), **history**, and a **legend**.

**Pattern (HYPOTHESIS):** the executable feel comes from declared dependencies that recompute. Notebooks without them reproduced results only about 4% of the time (Pimentel 2019, over 800,000 GitHub notebooks).

## 3. Standardized versus implementation-specific

- **Standardized:** HTTP/HTML/URL, not browsers; MP4 and timecode, not editing UIs (HTML5 `<video>` mandates no codec); EPSG and GeoJSON, not renderers; IFC and DXF, not modelers; POSIX and LSP, not kernels or editors.
- **Left implicit, at a cost:** Excel keeps Lotus's 1900 leap-year error "for compatibility", and its type-guessing turned gene symbols into dates in 19.6% of 3,597 genomics papers (Ziemann 2016). Doom demos desync unless engine versions match, so source ports ship compatibility levels; a Minecraft seed gives different terrain before and after 1.18.
- **How standards arrived:** de facto first: DXF, EDL, Web Mercator (Google 2005, EPSG code 2008-09), z/x/y tiles, LSP. Specified before a genre, mostly stalled: VRML97 (ISO, Dec 1997), OpenDoc (coalition, 1992).

**Pattern (HYPOTHESIS):** standardize record, address and legend; let authoring UI, engine and style compete. Leave semantics implicit and the first compatibility bug becomes the standard.

## 4. Addressing

| Medium | Address | Outcome |
|---|---|---|
| Print | page number | edition-bound; scholars built loci that hold across editions (chapter:verse, Stephanus, Bekker 1831) |
| Xanadu, NLS | tumblers; NLS statement addresses (1968) | tumblers never deployed at scale; NLS numbers re-created for the web as "purple numbers" |
| Web | URL + `#fragment` | won by being free to mint. Permanence bolted on later: about 50% of URLs in US Supreme Court opinions, over 70% in law-review URLs, no longer led to the cited content (Zittrain 2014). Addressing parts the author never anchored came late: `#t=` (2012), annotation selectors (2017) |
| Spreadsheet | A1 on labelled axes | beat Multiplan's R1C1 |
| Maps | (lat, long, datum) + zoom; z/x/y | won: derived from coordinates and resolution |
| Video | HH:MM:SS:FF; `#t=` (YouTube 2008) | won; declares a frame rate (drop-frame skips numbers to reconcile NTSC's 29.97 fps) |
| Games | seed; demo | valid only for one engine or generator version |
| CAD | generated Face8/Edge2 names | failed: an early edit renumbers them (FreeCAD's topological naming problem, addressed only in 1.0, 2024) |
| VCS | commit SHA; permalink = SHA + path + `#L` | won: content-derived, composable |

**Survival rule (HYPOTHESIS):** addresses survive when they (1) derive from stable structure (work, coordinates, timeline, grid, content hash), not layout or generated ids; (2) cost nothing to mint; (3) name their frame (edition, datum, frame rate, engine version, commit); (4) compose as whole plus part. Failures point at position in the current layout (page, notebook `In [n]`, Face8) or need a registry (tumblers). Most survivors look nothing like a URL: A1, 01:00:05:12, John 3:16, 231a, a SHA.

## 5. Authors and first genres

- **VisiCalc:** MBAs and accountants, in the ledger's own grid.
- **HyperCard** (Aug 1987, free with every Mac): non-programmers; stacks included Voyager Expanded Books and the Whole Earth Catalog, then Myst (1993).
- **Web:** the 1990 browser was also an editor; from the mid-1990s "Document Source" made every page a how-to (Thompson, *Coders*).
- **Maps:** HousingMaps (Apr 2005) hacked Google Maps two months before its API: overlays on a trusted base map, not maps.
- **Games:** DotA (2003, Warcraft III's World Editor; origin of the MOBA) and Counter-Strike (1999; Valve hired the authors); Scratch (2007) made remix central.
- **CAD, simulation:** AutoCAD (Dec 1982) put drafting on a PC; SimCity (1989) made Forrester's *Urban Dynamics* a toy, and Starr (1994) warned of a closed model with a "hidden curriculum".

**Pattern (HYPOTHESIS):** the first genre re-mediates an incumbent artifact with a painfully slow iterate loop (ledger, paste-up, drafting board) in its own grammar. Authoring came as narrow grammars (grid, card, timeline, layer, block), never one general language, and spread through on-ramps that let you read the source of what you like.

## 6. Failures

| Case | Evidence | Cause (my reading) |
|---|---|---|
| Xanadu | begun 1960; first incomplete release 1998; Wired, 1995: "longest-running vaporware" | two-way links, transclusion, versioning and micropayments needed central coordination; the web's one-way, breakable links spread without permission. Yet the predicted cost, link rot, was real: right requirement, wrong scope and timing |
| VRML | 1994; ISO/IEC 14772, Dec 1997 | a standard before any everyday use; incomplete, unstable browsers |
| Second Life | about 2M accounts, Jan 2007 (secondary) | about 10 hours to feel competent, outages, most left within days: authoring barrier, no reason to be there. Stalled, not dead |
| HyperCard | free 1987; discontinued Mar 2004 | local-only, no true color in 2.0, format bound to its runtime; Atkinson later regretted not making it network-oriented |
| Flash | Jobs, "Thoughts on Flash", Apr 2010; ended Dec 2020 | one vendor's runtime, excluded from the iPhone, replaced by HTML5 |
| Semantic Web | 2001; Doctorow's "Metacrap" | hand-made metadata: people are lazy, lie, schemas are not neutral; survived only where a consumer paid (schema.org, 2011) |

**Pattern (HYPOTHESIS):** five killers: scope before a genre; tool equals format; author cost above author payoff; no address that leaves the runtime; owner strategy change (Claris; Adobe and iPhone; OpenDoc cancelled 1997).

## 7. Implications for BOW (analogy, never authority)

**H1 (cell reference) HYPOTHESIS.** An executable world's "A1" is a permissionless semantic address: frame of the whole + structural path + optional position in history (`world@state/seat/entity.field`), minted from roles, never generated ids. Falsifier: a fork renumbers an address that pointed at an unchanged thing.

**H2 (timecode) HYPOTHESIS.** It is a position in the act log (branch plus act index or hash), never wall-clock, and declares its frame: the semantics version. Undeclared frames drift (drop-frame) or desync (Doom demos, Minecraft seeds). Archive test: can a stranger replay a five-year-old branch from the spec and an archived engine? HyperCard stacks now survive mainly through emulation (Internet Archive, 2017).

**H3 (narrow waist) HYPOTHESIS.** Standardize only the versioned act-log record, address grammar, status legend, replay contract, and the rule that views derive from the record (BIM plans from one IFC model). Authoring UIs, engines and content stay free. That squares the medium thesis with the refusals to generalize in the constitutions I was given (E-main `CLAUDE.md` §10, §12; DC `CLAUDE.md` §1; docs, not code) if the shared layer stays thin, like X11's "mechanism, not policy". **REJECTED:** a common world-description language now (VRML97, OpenDoc).

**H4 (killer genre) HYPOTHESIS.** Name an incumbent artifact BOW makes instant and a spreadsheet cannot; candidates to test: case study, cap sheet, game-film review. VisiCalc began as what-if on a business-school case. With none nameable, BOW is Xanadu: a design for everything.

**H5 (fork) HYPOTHESIS.** The spreadsheet gave what-if without fork, history or provenance; the cost is documented (Reinhart-Rogoff's result was audited in 2013 only because the file was shared, and a range omitted five countries). Fork plus HOW DO WE KNOW? targets a real gap, but VisiCalc won on free direct manipulation, so both must be byproducts of acting, like undo or commit.

**H6 (legend) HYPOTHESIS.** The seven statuses work like a map legend (Bertin's seven visual variables include texture) only if the engine emits them from provenance and they stay few. Hand-tagged semantics is Metacrap. Falsifier: any status an author must tag by hand.

**H7 (on-ramp) HYPOTHESIS.** HOW DO WE KNOW? and WHAT IF? should be the authoring on-ramp, as view-source, mod editors and remix were: any world inspectable and forkable in place by a reader with no account, like HyperCard on every Mac or the public-domain web.

**H8 (failure BOW most resembles) HYPOTHESIS, README only.** Xanadu's scope (a coherent design, no unaided author: "None of it has been used") plus HyperCard's position (strong local runtime; Live World "has not yet run on the real shared store"), plus Semantic-Web risk in HOW DO WE KNOW?. Kill test: one non-BOW author ships a world unaided and a stranger forks it. VisiCalc took two people about two months.

**H9 (qualification) SPECULATIVE FRONTIER.** Flight simulators earned trust by qualification against flight data for declared uses (FAA AC 120-40 series, then 14 CFR Part 60, 2008), not realism; CMIP compares climate models by fixing protocol, not code. BOW analog: worlds qualified against recorded reality for a declared use.

## Sources

Tags: `[P]` primary or standards body, `[S]` secondary (Wikipedia, journalism, blogs), `[M]` memory, not re-checked. Web pages accessed 2026-09-29.

**BOW (docs only, no code read).** `Brief:00_PARENT_BRIEF.md:66-80` (labels, report rules); `DF:README.md:3` (medium claim), `:5` ("None of it has been used by students, fans, teachers or operators"), `:49` ("It has not yet run on the real shared store", Live World), `:54-64` (seven statuses), `:83` (critics' "not yet in one place"); E-main `CLAUDE.md` §10, §12 and DC `CLAUDE.md` §1, as loaded into this session's context.

**Spreadsheets.** VisiCalc, https://en.wikipedia.org/wiki/VisiCalc `[S]`; Bricklin, https://en.wikipedia.org/wiki/Dan_Bricklin `[S]`; "Brief History of Spreadsheets", https://www.dssresources.com/history/sshistory.html `[S]`; Lotus 1-2-3, https://en.wikipedia.org/wiki/Lotus_1-2-3 `[S]`; "How to Recalculate a Spreadsheet", https://lord.io/spreadsheets/ `[S]`; Multiplan (R1C1), https://en.wikipedia.org/wiki/Multiplan `[S]`; Microsoft, "Excel incorrectly assumes 1900 is a leap year", https://learn.microsoft.com/en-us/troubleshoot/microsoft-365-apps/excel/wrongly-assumes-1900-is-leap-year `[P]`; Ziemann, Eren, El-Osta, "Gene name errors are widespread in the scientific literature", Genome Biology, 2016, https://link.springer.com/article/10.1186/s13059-016-1044-7 `[P]`; Herndon, Ash, Pollin (2013), https://en.wikipedia.org/wiki/Thomas_Herndon and https://theconversation.com/the-reinhart-rogoff-error-or-how-not-to-excel-at-economics-13646 `[S]`; Excel Solver, Feb 1991, https://www.researchgate.net/publication/255673015_Design_and_Use_of_the_Microsoft_Excel_Solver `[S]`; Pimentel et al., MSR 2019, https://2019.msrconf.org/event/msr-2019-papers-a-large-scale-study-about-quality-and-reproducibility-of-jupyter-notebooks `[P]`.

**Documents, hypertext, web.** PDF, https://en.wikipedia.org/wiki/PDF `[S]` and https://pdfa.org/resource/iso-32000-1/ `[P]`; Project Xanadu, https://en.wikipedia.org/wiki/Project_Xanadu `[S]` and https://www.xanadu.com/HISTORY/ `[P]`; Wolf, "The Curse of Xanadu", *Wired* 3.06, Jun 1995, cited via the Xanadu article (Wired not fetchable) `[S]`; Engelbart demo, 9 Dec 1968, https://www.dougengelbart.org/mousesite/1968Demo.html `[P]`; Purple numbers, https://eekim.com/software/purple/purple.html `[P]`; CERN web history, https://web30.web.cern.ch/web-history.html `[P]`; WorldWideWeb browser-editor, https://en.wikipedia.org/wiki/WorldWideWeb `[S]`; Thompson, *Coders* (2019), on "Document Source", via Nielsen's "The Spirit of View-Source" (summary seen only) `[S]`; Zittrain, Albert, Lessig (2014), https://harvardlawreview.org/forum/vol-127/perma-scoping-and-addressing-the-problem-of-link-and-reference-rot-in-legal-citations/ `[P]`; W3C Media Fragments URI 1.0 (Sep 2012), https://www.w3.org/TR/media-frags/ `[P]`; W3C Web Annotation Data Model (Feb 2017), https://www.w3.org/TR/annotation-model/ `[P]`; YouTube time links, Oct 2008, https://techcrunch.com/?p=24329 `[S]`; Stephanus, https://en.wikipedia.org/wiki/Stephanus_pagination and Bekker, https://en.wikipedia.org/wiki/Bekker_numbering `[S]`; Semantic Web, https://en.wikipedia.org/wiki/Semantic_Web `[S]`; Doctorow, "Metacrap" (2001), http://www.well.com/~doctorow/metacrap.htm `[P]`; schema.org launch (2 Jun 2011), https://blogs.bing.com/search/June-2011/Introducing-Schema-org-Bing,-Google-and-Yahoo-Uni `[P]`.

**Maps.** Google Maps and HousingMaps, https://www.programmableweb.com/news/5-years-ago-today-web-mashup-was-born/2010/04/08 and https://en.wikipedia.org/wiki/Google_Maps `[S]`; Web Mercator and EPSG codes, https://wiki.openstreetmap.org/wiki/Web_Mercator, https://epsg.io/3857, https://epsg.io/900913 `[S]`; slippy tiles, https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames and https://en.wikipedia.org/wiki/Tiled_web_map `[S]`; GeoJSON, https://datatracker.ietf.org/doc/rfc7946/ `[P]`; Bertin (1967), https://historyofinformation.com/detail.php?id=3361 and https://en.wikipedia.org/wiki/Visual_variable `[S]`; McHarg (1969), https://metropolismag.com/viewpoints/mcharg-design-with-nature-50th-anniversary/ `[S]`.

**Video.** SMPTE timecode and drop-frame, https://en.wikipedia.org/wiki/SMPTE_timecode and https://www.philrees.co.uk/articles/timecode.htm `[S]`; MP4 and QuickTime, https://en.wikipedia.org/wiki/MP4_file_format and https://en.wikipedia.org/wiki/QuickTime_File_Format `[S]`; EDL and CMX 3600, https://en.wikipedia.org/wiki/Edit_decision_list and https://cutconvert.com/guides/what-is-an-edl `[S]`; HTML5 video without a mandated codec, https://en.wikipedia.org/wiki/HTML_video `[S]`.

**Games and simulation.** Doom demos and compatibility levels, https://doomwiki.org/wiki/Demo, https://doomwiki.org/wiki/Source_port_parameters, https://doomwiki.org/wiki/DSDA-Doom `[S]`; Minecraft seeds, https://minecraft.wiki/w/World_seed and https://minecraft.wiki/w/World_generation/History `[S]`; DotA, https://en.wikipedia.org/wiki/Defense_of_the_Ancients and Counter-Strike, https://en.wikipedia.org/wiki/Counter-Strike_(video_game) `[S]`; Scratch, https://museum.mit.edu/150/50 `[P]`; Forrester and system dynamics, https://en.wikipedia.org/wiki/System_dynamics `[S]`; SimCity and *Urban Dynamics*, https://www.filfre.net/2016/06/simcity-part-1-will-wrights-city-in-a-box/ `[S]`; Starr, "Seductions of Sim", *American Prospect*, Spring 1994, https://prospect.org/1994/04/01/seductions-sim-policy-simulation-game/ `[P]`; FAA, 14 CFR Part 60, https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-60 and AC 120-40B, https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentid/22762 `[P]`; CMIP, https://pcmdi.llnl.gov/mips/cmip/about-cmip.html `[P]`.

**CAD, IDEs, OS.** Sketchpad, https://en.wikipedia.org/wiki/Sketchpad `[S]`; Pro/ENGINEER, https://www.ptc.com/en/cad-software-blog/a-quick-history-of-ptc-and-ptc-creo `[P]`; DXF and AutoCAD 1.0, https://en.wikipedia.org/wiki/AutoCAD_DXF `[S]`; FreeCAD topological naming, https://github.com/FreeCAD/FreeCAD-documentation/blob/main/wiki/Topological_naming_problem.md `[P]`, https://www.ondsel.com/blog/toponaming-problem-is-history/ `[S]`, https://alternativeto.net/news/2024/11/freecad-1-0-launches-with-enhanced-ui-ux-built-in-assembly-workbench-and-tnp-fixes/ `[S]`; IFC, https://en.wikipedia.org/wiki/Industry_Foundation_Classes `[S]`; HyperCard, https://en.wikipedia.org/wiki/HyperCard and https://blog.archive.org/2017/08/11/hypercard-on-the-archive-celebrating-30-years-of-hypercard/ `[S]`; Flash, https://en.wikipedia.org/wiki/Thoughts_on_Flash and https://9to5mac.com/2021/01/12/adobe-flash-support-ends/ `[S]`; VRML, https://en.wikipedia.org/wiki/VRML `[S]` and https://www.web3d.org/documents/specifications/14772/V2.0/index.html `[P]`; Second Life, https://www.techradar.com/news/internet/whatever-happened-to-second-life-1030314 and https://fourweekmba.com/what-happened-to-second-life/ `[S]` (figures secondary only); OpenDoc, https://en.wikipedia.org/wiki/OpenDoc `[S]`; LSP, https://code.visualstudio.com/blogs/2016/06/27/common-language-protocol `[P]`; X11, https://en.wikipedia.org/wiki/X_Window_System_protocols_and_architecture `[S]`; POSIX, https://en.wikipedia.org/wiki/POSIX `[S]`; Git, https://lwn.net/Articles/715621/ `[S]`; GitHub permalinks, https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet `[P]`.
