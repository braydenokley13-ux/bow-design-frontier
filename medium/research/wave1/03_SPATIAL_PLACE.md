# 03 — Spatial / 3D representation: PLACE as a representation of canonical state (DRAFT 1, in progress)

Status: early draft saved for interruption safety. Findings so far (W-3D only; W and DC still to read):

- Props are built from a pure `story(facts)` function shared by the 3D props and the Direct view (`stateProps.floorStory`, `historyProps.historyStory`, `bostonArenaFacts.arenaStory`). EARNED.
- A prop/row whose fact the projection does not carry "is simply not drawn" (`historyProps.ts` header). EARNED.
- Presence is `unknown` for every NBA actor (NB-001), so the Boston building shows nobody standing; film is a coach's diagram (D252). EARNED.
- Arena crowd: played = exact saved count; forecast = flat marks on a cover; unknown = cover with words. D255–D259. EARNED.
- 3D adapter never writes state; every "open" goes to the host's navigation (`bostonWorldSpace.ts`, `nbaWorldSpace.ts`). EARNED.

(Full report to follow.)

## Sources
- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/ARCHITECTURE_REQUESTS.md
- W-3D:runtime/src/client/world/frontier/stateProps.ts
