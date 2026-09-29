# BOW Open Questions v0

Status: 2026-09-29. These are the questions this run could not settle honestly. Each names:
- **who** must answer it (founder decision, evidence, or a specific experiment);
- the **cheapest evidence** that would settle it;
- what it **blocks**.

They are ordered by how much they block.

## A. Founder decisions (evidence cannot make these)

| # | Question | Why it is open | Blocks |
|---|---|---|---|
| A1 | **Is BOW a medium or a vertically integrated product family?** | The tournament showed the platform answer depends on this, and the Closed paper is fully right if BOW is not a medium (Tournament §4). The media-history test says a medium must be citable, portable and authorable by non-specialists (06). | Everything in L0–L2 openness; whether to publish an Experimental spec |
| A2 | **Should the two product lines converge on one record envelope now**, before either has users? | The unification (K4, K18, K20, K21) costs engineering time on two campaigns that are already INCOMPLETE and far from classroom proof. E-main §12 warns against extraction from two data points. The counter-argument: two consumers now exist, and the cost of divergence is compounding. | The act basis, capsules across products, any cross-product feature |
| A3 | **Which suffix policy is the default for WHAT IF?** (replay-unchanged, drop, redecide, fresh occupants) | The products disagree, and each is right for a different question (Time & Forks §7) | Fork semantics; what readers see |
| A4 | **What does "Foundry" mean?** | DC and W use the word for different things (K23) | Any shared spec or public vocabulary |
| A5 | **Who may promote a branch to a World, and does a promoted fork community get its own governance?** | Q7; public forks as communities | Public forks |
| A6 | **Do students' refused acts become entries?** DC yes, W no. | It is an assessment and privacy question as well as a semantic one | The record envelope's verdict field |

## B. Semantic questions that need evidence

| # | Question | Cheapest evidence | Blocks |
|---|---|---|---|
| B1 | **Does one minimal record envelope cover both products without product special-casing?** | W2-A paper mapping (done; see Contract §7), then the **spec-only implementer test**: a fresh agent given only the envelope spec and vectors builds a reader that verifies one DC capsule and one W delivery | Everything at L0–L2 |
| B2 | **What is the Unknown kind set?** At least nine product vocabularies exist. | Mapping tables from every product code to candidate kinds (W2-A §e); every unmappable code is a new kind or a bug | M7; representation L5 |
| B3 | **What is the STATUS value set?** The seven DF textures, plus ASSERTED; possibly OBSERVED with uncertainty. | Legibility test with real Grade 5–8 readers (never done); a provenance-emission audit in one product | M8; legend |
| B4 | **Does the act basis unify knowability, staleness, fairness, Moments and cross-instance acts without new fields?** | Derive a DC Moment and a W `LeagueMoment` from basis-bearing entries only | Contract §4 |
| B5 | **How is a validity envelope *described*, not just enforced by refusal?** | Write the envelope for one W Lab question and one DC branch family | M11; model forks |
| B6 | **Can per-audience projection guard inference, not just display?** Derived secrets, timing and existence leaks, what-if oracles. | Derived-secret taint prototype; what-if budget per seat (W2-D §1.4) | Any multi-seat World with private information; AI occupants |
| B7 | **Is status relative to the reading instance** (RECORDED in a fork = MODELED from the parent), and can representations show that without confusing readers? | One promoted-fork prototype, read from both frames | M8; public forks |
| B8 | **Does the natural-system profile need its own core additions** (instrument, measurement uncertainty, model forks, continuous time), or only profile extensions? | Express one chemistry equilibrium experiment and one cell pathway in core terms | Any science vertical |

## C. Time and order

| # | Question | Source |
|---|---|---|
| C1 | Is position enough as transaction time for exports, or is wall time with declared accuracy needed (RTS 25-style)? | W2-B Q1 |
| C2 | Who authors and versions the alignment tables between composed clocks (League stops vs club days)? | W2-B Q2 |
| C3 | Who holds tick authority when the clock device (e.g. the teacher's) is offline? | W2-B Q3 |
| C4 | May assessment Systems' rules read `time` inputs at all? This needs an assessment-law ruling (DC-main CLAUDE.md §2). | W2-B Q4 |
| C5 | Does sealing rivals' acts remove lessons that depend on visible rivals? Decide per lesson. | W2-B Q5 |
| C6 | Real-time FEED domains: is BOW only recorder and fork engine there, never time authority? | W2-B §3 |

## D. Portability, composition and occupancy

| # | Question | Source |
|---|---|---|
| D1 | Rules by digest: Wasm deterministic profile plus bundled libm, or pinned JS plus engine attestation (REPLAY-LOCAL)? | W2-D §2.2 |
| D2 | Does W's league simulation replay identically across JS engines, given engine-approximated `Math.exp`, `log` and `cos`? A cheap test: 10^6 draws under two engines. | W2-D falsifier 1 |
| D3 | Containment or federation for clubs in a League: when must a club's books be private from the League authority? | Portability §7 |
| D4 | What does a cross-instance transaction's coordinator look like? It must itself be an instance (C4), not a hidden lock. | Portability C4 |
| D5 | Delegation chains: does effective warrant = intersection hold across human → agent → sub-agent, and how is Sybil splitting bounded? | W2-D §1.1 |
| D6 | Model requirements as conformance probe suites: can a probe suite be written that is vendor-neutral and meaningful? | W2-D §2.4 |
| D7 | What must a portable bundle carry for student-derived runs, given the free-text and later-actions warning on Receipt v1? | W2-D §2.3 |

## E. Representation

| # | Question | Source |
|---|---|---|
| E1 | Does 3D place create learning or understanding value at all? Every visual verdict so far is an AI judging software-rendered frames. | 03; Representation §9 |
| E2 | Can R1–R5 be checked mechanically? The cheapest test is a counterfactual sweep over W-3D's nine Boston fixtures, counting fields that move no carrier and no Direct line. | W2-C falsifier |
| E3 | Where exactly is the carrier/atmosphere line for real-world content (real arenas, real people's likeness)? | 03 §2; rights |
| E4 | Is a representation router wanted, or do users prefer explicit choice? No router exists in BOW. | W2-C §4 |

## F. Place

| # | Question | Source |
|---|---|---|
| F1 | ~~Does PLACE need two meanings?~~ **Answered provisionally (Contract §6):** there are three meanings, and only the index is a medium place. Grounding is a Reality entity plus a typed reference in the record. Nothing place-specific enters protocol, address or composition. Promotion test in §6.3. | W2-E |
| F2 | **Namespace policy for grounding references.** QID, GERS, BIN, BBL and GTFS ids have different lifetimes (a BIN survives demolition; OSM ids do not survive reshaping). Which namespaces may a record cite, and how is churn handled in replayed capsules? | W2-E §3, §6.4 |
| F3 | **ODbL classification** of capsules that reference OSM-derived data. This needs counsel, not design. | W2-E §7 |

## G. Strategy

| # | Question | Cheapest evidence |
|---|---|---|
| G1 | Would buyers pay for records verifiable without BOW, or only for hosted Worlds? | Buyer test (Tournament §6) |
| G2 | What is BOW's killer genre, the incumbent artifact it makes instant (case study, cap sheet, game-film review)? | 06 H4: name one and test it |
| G3 | Can a non-BOW author ship a World unaided, and can a stranger fork it? | 06 H8 kill test |
| G4 | Does convergence among same-family models (workers, advocates, critics) hide shared bias? | One human expert review of this packet |
