# Open vs Closed tournament — shared brief (identical for all three advocates)

You are one of three **independent** advocates. You must not read any other file in `medium/research/tournament/` except this brief, and you must not read the other advocates' output. You may read anything else in `/home/user/bow-design-frontier` (for example `econ/bow-economic-architecture.html`, which says "never charge for the format"; `canvas/Commercial.dc.html`; `canvas/CloneVerdict.dc.html`) and `medium/research/wave1/04_DESIGN_FRONTIER.md` and `06_MEDIA_HISTORY.md`.

## The company and its thesis

BOW started in education: grades 5–8 economics and personal finance, with sports-business settings. It is now exploring a much larger thesis.

- **Human thesis:** a new medium for understanding and interacting with reality.
- **Technical thesis:** make systems executable.
- **Product principle:** any system that matters should be able to become executable, and humans or intelligence should be able to enter, understand, operate, change, fork and share it.
- **Platform thesis:** BOW may become infrastructure through which institutions, knowledge, simulations, software, AI agents, creators and real-world operations interoperate as executable systems.
- BOW will **not** build a frontier foundation model. External intelligence providers are interchangeable occupants, so BOW must own the structured substrate *around* intelligence.

## Facts about today (dated 2026-09-29, verified by the parent)

- There are **two education products**, both unreleased. Neither has been used in a real classroom. Both are on long-running agent-built branches with source proof, not user proof.
  - **Decision Challenges** is personal-finance performance assessment.
  - **Economics Live / Worlds** is persistent sports-business institutions, including a server-owned NBA "World One" League with seasons, a Commissioner-controlled clock, recorded "Court" games, "Film" replay and 3D places.
- **Decision Challenges** has a "Decision Receipt v1": a portable JSON capsule of one act. It carries decision-time information, cut before the act, plus the whole history, and another browser verifies it by replaying under a pinned model. It is synthetic-only and says so. The product explicitly refuses to build "a generic integration kernel".
- **Worlds** has `bow-bridge-1`, a versioned cross-product contract (League ↔ Decision Challenges). It is "synthetic rehearsal only; companion compatibility is not verified".
- **A design-research repository** has about 60 prototype boards (never used by people). Among them:
  - a hash-chained World record with `bow://…` addresses and verifiable forks;
  - a lockstep fold (seed plus act log, giving the same state everywhere);
  - seat-scoped knowledge, where each role sees only its facts;
  - a causal "why" engine;
  - a seven-status truth legend: OBSERVED, RECORDED, AUTHORED, COMPUTED, MODELED, GENERATED, UNKNOWN;
  - a "Live World" with seat leases and real deadlines, which has not yet run on a real shared store.
- **Clone test:** an AI copier rebuilt four engine boards from screenshots alone in 12–22 tool calls each. It missed what screenshots hide (unprinted numbers, derived-secret leaks, exact hashing), so a copy could not verify against the original record.
- There is no external developer, creator, customer or third-party runtime today. The team is small, and agents do much of the building.

## Candidate platform layers (neutral; argue about them, change them if you like)

| Layer | What it is |
|---|---|
| L0 | **Record format**: event/act log, cuts, epistemic statuses, typed unknowns, provenance |
| L1 | **Address/reference grammar**: pointing at a World, branch, time, object or perspective |
| L2 | **Rulebook/system definition** plus a deterministic execution contract |
| L3 | **Runtime/host**: authoritative sequencing, seats, time authority, identity |
| L4 | **Representation**: Browser, role-scoped projections, representation packs (document, 3D, timeline, audio…) |
| L5 | **Network/composition**: cross-World contracts, federation, cross-system transactions |
| L6 | **Reality connectors**: licensed live feeds and sources; writeback into real operations |
| L7 | **Intelligence occupancy**: AI actors in seats, with external models interchangeable |
| L8 | **Creator tools and marketplace**: authoring, templates, representation packs |
| L9 | **Verticals**: education (today), later enterprise, science, media |

## What your paper must cover

Cover each of these: adoption; monetization; developer ecosystem; moat; security; trust; network effects; historical analogies (be specific and accurate, and name the cases); failure modes of **your own** strategy.

Also cover:
1. A **per-layer call**: open spec, open source, closed, or "not yet", with the reason.
2. **What you would do in the next 12 months** given today's facts.
3. **The strongest objection to your position and your answer to it.**

Keep architecture primary and do not write a pricing deck. Say plainly when you are speculating.

Write at most about 1,500 words of body, plus a short Sources/analogies list. Write it only to the path your task names. Your final message to the parent is at most 120 words.
