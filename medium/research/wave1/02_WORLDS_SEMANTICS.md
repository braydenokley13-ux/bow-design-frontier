# 02 WORLDS SEMANTICS (DRAFT 1 - in progress)

W = econ-worlds @ a43679f2. Paths below are relative to W unless prefixed E-main.

## Preliminary findings (to be refined)
- Authority (NBA World One): reducer entry `runtime/src/modules/worldOne/index.ts` `worldOneModule.reduce`; `teacher:` prefix only from ctx.seatId==="teacher"; owner actions `w1.*` from OWNER_ACTIONS; Commissioner verbs are a closed list (`commissioner.ts` header: "Commissioner controls theatre and timing. The world controls truth.").
- Time: `state.clock` index into `state.stops`; only `advance(state, expectStop, ...)` increments clock (commissioner.ts:48-146); stale-screen guard `expectStop`.
- History: types.ts header "HISTORY IS APPEND-ONLY", money never a balance, only Transfers.
- Rules versioned: `rulesetId` stored at creation; "a league never changes rules" (league.ts:48,108).
- Moment: `LeagueMoment` types.ts:769 "World One's own record ... (not a universal event schema)".
- Knowledge enum: types.ts:764 `known|reported|estimated|private|unknown|not-modeled`.
