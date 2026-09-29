# W2-A: One record, two products (paper falsification of the §4 candidate)

Labels: EARNED = cited code shows it. HYPOTHESIS = my proposal. Paper test only; nothing was run. DC = dc-os @ e1d05104, W = econ-worlds @ a43679f2. `←` marks what §4 cannot currently say. Paths are in Sources.

## Verdict: YES-WITH-CHANGES

No blocking mismatch, but nine edits (§5) and one structural finding. **NBA World One has no act log** [EARNED]. Its server "journal" is truncated row snapshots ("no action semantics to re-derive"), owner choices are last-write-wins slots, and the reducer `reduce(state, action, ctx)` is pure but its inputs are not kept. So `replay: REPLAYABLE | JOURNALED` is mis-named, and "entry" can only be *synthesized* for NBA's append-only sub-records. L0 must be an interchange and verification format, not a storage model.

## 1. Specimens, mapped

**S1. DC Market, act 2 of `marketFixture`** (`receipt-market01`)
```
pos 2 (0-based)  act{seat:"learner", verb:order, args:{supplierId:small},
  basis{cut:← implicit prefix 0..1; available:[cash-tin,supplier-sheet,market-note @planning] ← derived on read, never stored;
        opened:[{supplier-sheet,pos:0}]; support{available:[calculator],used:[]} ←}}
verdict accepted (pos 1, order:missing, was a RECORDED refusal, reason = English sentence, no ruleId)
effects ← [{cash-tin 12000→8000},{stock 0→8},{supplier-receipt:2 ∅→…}] rule market-v1/pay-supplier-and-add-stock
time{world:"planning"}  unknowns[outside-market-demand, source-understanding]
```
**S2. DC v5 server attempt**
```
request{requestId ←, expectedRevision:3, command}; failures (dup, stale, sealed, 429, 413) make NO entry
pos 3→4 by compare-and-set; act{seat: seatCode+membership via token; basis{cut:3 ← not persisted, always == pos-1}}
receipt{id=requestId, sequence=journal.length+1, rawCommand, status, effect, reason:string, before, after}
+ EvidenceEvent{sequence=log.length+1, timestamp=server now} ← a second sequence; request-support also emits 2 system events
```
**S3. DC modeled branch** (`decisionBranch`, `modelMarketCashPerturbationV1`)
```
lineage{parent, cut:k (prefix length), id=SHA-256(canonical{identity, events, final, k, commands}),
  interventions: (a) explicit alternative acts | (b) ← an EDIT {cash-tin 12000→x, rule bow.analysis.cash-at-checkpoint/1}, not an act,
  suffix: (a) caller supplies the whole continuation (b) replay held actor inputs; status modeled-analysis|modeled-perturbation}
parent must be sealed ←; positions continue the parent's index space ("#branch-<hash>#event-N")
```
**S4. NBA owner act + Commissioner advance** (The Bill)
```
owner: seat→franchise BOS, verb w1.sponsor{partner:patch}; basis NONE (only gate stop.kind==bill)
  refusal = Result{ok:false, reason:prose}, never stored; dedupe = clientActionId + sha256 fingerprint on the session row
  stored as sponsors.BOS.choice{partner, at:<stop index>} ← overwritable: no seq, prior answer erased (same for castVote, which can delete)
advance: seat teacher, args{expectStop:"bill"} = basis.cut as a stop id ←; ONE atomic step emits
  transfers[{seq,stop,from,to,kind,ref}], events[{seq,stop,about,public}], obligations, Moment partner:BOS, clock+1,
  commissionerLog{seq, stop:<arrival stop>, verb:advance}   (consequences carry the departure stop)
```
**S5a. NBA LeagueMoment `partner:BOS`**
```
pin{world-one-v2, rulesetId, identitySnapshotId, arc}; actor{kind:owner-seat|no-answer, seats:[…]} ← a team, never a person
at{clock,stop,date,seq = nextSeq AT SETTLEMENT, not at the owner's act}
known[{label, value:PROSE, knowledge}] ← materialized basis, hand-written per Moment kind; no sourceId; nothing "opened"
committed{refused:bool} ← the owner's own decline, not a system refusal; coords{…} ← closed-form what-if, no replay
consequences[{seq,…,text}] append-only; sealedAt:<clock index>|null
```
**S5b. NBA Court possession** `court-possession:<league>:<seg>:<k>`
```
act{seat: franchise; args{segment, possession:k ← ordinal basis == possessions.length, log:"compact input log" ← nested replayable log}}
pending{k,log,shots} ← partial act stored on the segment; prefix irrevocable once a shot is up; next shot's dice released only after
inputs: dice = HMAC-SHA256(seed,"court:<seg>:<k>:<shot>") ← NEVER stored (only rolls:n); seedHash public at creation, seed revealed at Reckoning
verification: server replays the log at act time; segment pins provenance.engineId
```
**S6. Harbor chapter entry** (`season-five-week`, action 3)
```
chain founder→s3→s4→s5-opening→s5-week, each embeds its predecessor ←; pin = model.version + legacy*ActionCount ← rule epochs by prefix
actions[3]={type:advance_day, expectedRevision:3}; no seat, no verdict (refusal throws; a counterparty refusal is an ACCEPTED act with status:"refused")
outcomes[{id, actionIndex:3, day, effects}]; time{planningDay, arenaDayId?} ← two axes; book_league_film embeds a foreign receipt in args ←
replay: fold actions from initial(sourceOpening); canonical(replay)===canonical(saved) else null (all-or-nothing, no index)
```
**S7. bow-bridge-1 (W→DC)**
```
bundle{context:"synthetic-rehearsal", evidence:false, subject{ref:HMAC(secret, session|seat|binding|"bow-bridge-1")}, artifact{ref:opaque HMAC ←,
  momentRef{id:"premium:BOS", sealed:true, at{stop,date,seq:36}}}, projection ← authorised per Moment, retention{expiresAt}, issuedAt: ISO string}
DC envelope{contractDigest, grantId+revision, ticketDigest, issuedAt: epoch ms, fact:HistoryFact{recordId: rec-sha256(JSON[…]), origin, evidenceStatus:"not-evidence"}}
```

## 2. Field by field

| §4 field | Verdict | Evidence |
|---|---|---|
| instance.id | FITS WITH CHANGE | DC attemptId is random and browser-editable, so it must pair with a head digest. Harbor has no id: chapters embed predecessors (S6). |
| system @ digest | FITS WITH CHANGE | DC: 3 versions plus 7 capability refs, `version:null` = legacy. W: 4 pins plus dated data snapshot. Digests: DC `versionDigest` nullable, nothing in W. Harbor changes rules mid-instance. Needs a list of pins with epochs. |
| clock | FITS | Act-advanced everywhere. `scheduled`/`external` have no specimen. Harbor week has two axes. |
| lineage | FITS WITH CHANGE | Intervention may be an edit (S3b); no slot for non-modeled continuation (Harbor chain, NBA Season Two carry). Status is hard-coded MODELED. |
| replay | DOES NOT FIT | NBA: pure reducer, no retained acts, journal truncated at compaction (S4). |
| pos, prev | pos FITS WITH CHANGE; prev SPECULATIVE | 0-based (DC Market) vs 1-based (DC school, Harbor revision). NBA `seq` is one counter across four lists. No product hash-chains entries. |
| act.seat | FITS WITH CHANGE | Attribution varies: DC `individual`, W seat = team, Harbor role label; Foundry never persists actor. |
| act.occupant | SPECULATIVE | Only human or system occur; DC has `origin: actor\|system\|unstated`. |
| basis.cut | FITS WITH CHANGE | Equality-checked token of any grain: revision (DC v5, Harbor), stop id (advance), ordinal (Court), exchange revision. Absent for NBA owner acts. On accepted DC v5 entries it always equals pos-1. |
| basis.available | FITS in DC, DOES NOT FIT NBA | DC derives ids from stage. Foundry stores ids. NBA stores labelled prose values. |
| basis.opened | FITS in DC only | NBA has only a per-seat `ackSeq` watermark; Foundry and Harbor record nothing. |
| verdict | FITS WITH CHANGE | Recorded refusals: DC Market, v5. Never recorded: Credit (returns state unchanged), Harbor, NBA, Foundry. Reasons are prose. "refused" also means the actor's decline (S5a). |
| inputs | FITS WITH CHANGE | Dice are derived, not stored. `time` appears (`ctx.now`, countdown). `imported-receipt` needed; `model-output`/`feed` unused. |
| emits | FITS WITH CHANGE | Every product records deltas with cause and rule (DC causalChanges, Harbor edges, NBA transfers, Foundry resourceDeltas). §4 has none. |
| time | FITS | DC `stage`, NBA `{clock,stop,date,seq}`, Harbor `planningDay`. Wall time: ISO string (bridge) vs epoch ms (DC). |
| Fact / Unknown / Projection | FITS WITH CHANGE | See (e). NBA cannot serve an arbitrary past cut, only append-only lists. |
| Export | FITS (DC receipt), DOES NOT FIT (bridge) | Receipt has before/after/basis/material. Bridge ref is opaque, has no material, adds use-limits. |

## 3. The five tests

**(a) Act basis.** DC records `available` and `opened` on the read side only, by derivation; the exact `cut` is implicit in the prefix (S1). Where stored, it is engineered: `exposure: open-event-recorded|request-event-recorded|not-recorded` (attemptChronology.ts:33). W records the *write* side (`expectStop`, `expectRevision`, ordinal `k`) for commissioner, film, staff-loan and Court acts only; regular owner acts carry none. NBA's read side is materialized prose (`known[]`) because a stored-state system cannot re-derive it. **Finding: basis is derived under a fold and must be materialized under stored state.** Neither product ever accepts an act whose basis is not head, so a stored `cut` is redundant on accepted entries; it matters only as a request guard. [EARNED]

**(b) NBA's stored-state model.** Breaks three §4 assumptions: entries exist (no), replay verifies (no, only money conservation, Moment `coords` recompute and Court replay at act time), pos identifies a cut (only for append-only lists: transfers, events, commissionerLog, deal versions, moments). A `cut` on overwritten state must return Unknown{not-recorded}, which §4 already allows. [EARNED]

**(c) One canonicalization.** DC has at least 17 locale- or code-unit-sorted canonical functions (13 use `localeCompare`; 4 sort by code unit, including the branch id and bridge); W has 7 (6 Harbor `localeCompare`, server `actionFingerprint` code-unit sha256). Stored digests already lean code-unit (branch id, bridge, W action fingerprint); locale variants are equality-only, except DC's pinned FNV-1a x4. So one function plus an `alg:hex` tag is cheap. **Digest scope cannot unify**: DC pins prose content and refuses edits; W's legacy replay strips prose keys (`stableLegacyState`). The scope must be a per-system declared field set. [EARNED; recommendation HYPOTHESIS]

**(d) Address.** Resolvable: S1 (needs `head:`), S2 (needs `act:<requestId>` because W and DC both look up by request id), S3 (content-hash frame fits well), S5b (`court-possession:` is already frame.path.ordinal). Not resolvable: S4 owner act (only `stop`), NBA `seq` (a record id, not a cut, and it does not say which list). Needs: **epoch/named-cut grammar** (`at:<stop>`, `before:n`, `after:n`, `sealed`; DC `beforeAct|afterAct|atSeal`, W `sealedAt`), **chain frame** (Harbor chapter), **role/authorized audience** (teacher, Commissioner, board, per-Moment authorization) and **opaque pairwise refs** (S7, deliberately non-dereferenceable). Focus paths already come in four W grammars (`actions.3`, `games[3].result`, `/proposals/0`, `catalogue.teamOf(..)`).

**(e) Vocabulary mapping**

| Product code | Candidate | Note |
|---|---|---|
| DC `actual-replay`; W `actual`, `recorded`, `known` | RECORDED | never OBSERVED |
| DC/W/Harbor `modeled*` | MODELED | W also labels a catalogue constant of real origin `modeled` (should be OBSERVED) |
| DC `authored-*`, Foundry `known` | AUTHORED | |
| DC `reconstructed-from-frozen-…` | COMPUTED | |
| W `reported` | ASSERTED | |
| DC plan, promise, forecast; Harbor `promised`, `conditional` | ASSERTED | fee/plan/promise "is not payment" codes are guards, not Unknowns |
| W `estimated`, Foundry `estimate` | MODELED or ASSERTED | ambiguous |
| W `private` | **no map** | means "known to this seat only" (scouts' reads) AND "hidden from this seat" (which club), draft `types.ts:764` |
| seed-derived truth (prospect, lottery) | GENERATED | no code exists |
| DC `unmodeled`, Credit outside-help, creditor-relief, credit-reporting, unmodeled-future-shifts, unpaid-grocery-effects; W `not-modeled`; Foundry `unknown` | not-modeled | |
| DC `absent` | **no map** | positive fact (a receipt not yet created), not Unknown |
| DC `source-understanding`, `understanding|delivery|externalIdentity|outsideOutcome:"unknown"` | **no kind** | instrument cannot observe: propose `not-observable` |
| DC `not-recorded`, `not-captured-by-instrument`; NBA `{unknown, reason}`; Harbor `revision:null`, `actionSource:null`, presence unknown | not-recorded | reasons are prose |
| W `unknown` ("not known until the Reckoning") | not-yet | same code also covers sealed seed truth |
| DC `available:false` (spoilage term) | not-available-to-audience | |
| DC 8 `AttemptChronologyUnavailableReason`, `null` reads | **no map** | read-side refusal (integrity, version), not a world Unknown |
| `censored`, `withheld-by-rights`, `out-of-envelope` | unused | products refuse instead |

## 4. No place in §4, and unneeded by any specimen

**Real but missing:** idempotency key plus fingerprint (`requestId`, `clientActionId`); door refusals vs recorded refusals; deltas with cited rule and rule inputs (needed for knowable-per-input); continuation/carry between instances; partial and nested acts (Court pending, input log); per-event audience (DC `visibility`, W `public`+`about`) and disclosure acts (`board`, Moment authorization, `CarryGrant`); context/lane (`synthetic`, `evidence:false`) with export non-claims and retention; instance and per-record seal; seat attribution (individual/team) and `unstated` origin; rule epochs and data-snapshot pin; affordances (`institutionOptions`, `reducerAllows`, Foundry `availableActions`); superseded acts after teacher restore (`restoreEpoch`); typed absence; verification is two axes (consistency, authenticity), not four values: DC receipt = REPLAYED + no authenticity, bridge = no material + symmetric HMAC.

**Speculative in §4:** `prev` chain; `occupant.kind/attestation`; clock `scheduled|external`; suffix `redecide|fresh-occupants`; inputs `model-output|feed`; `censored`, `withheld-by-rights`; `ADDRESS.representation`; asymmetric SIGNED and ATTESTED (bridge is symmetric HMAC only).

## 5. Revised minimal record (HYPOTHESIS, 36 lines)

```
INSTANCE  id; context{rehearsal|institutional|personal}; lifecycle open|sealed@n
  system   [{from:pos, id, version|null, digest|null}…] + data pins        # null != current; epochs allowed
  clock    {axes:[{name, kind:act-advanced, authority}]}
  origin   null | {kind:fork|continuation, parent:id@head, cut:n, edits:[act|edit{path,from,to,rule}],
                   suffix:replay-held|explicit|drop|closed-form, status:MODELED|CARRY}
  actLog   retained|partial|absent ; derive fold|stored+invariants          # replaces REPLAYABLE|JOURNALED
ENTRY (recorded acts only; stale/duplicate/sealed/rate refusals never make one)
  pos n (0-based); requestId?; epoch?
  act{seat, attribution individual|team|unknown, origin actor|system|unstated, verb, args,
      basis{cut?{kind head|epoch|ordinal, token}, available[ref|Fact], opened[{ref,pos}]|Unknown}}
  verdict applied|refused(code|prose)|recorded
  inputs[{kind dice|time|imported-receipt, derive?{fn,commit,label}, value|digest, released?}]
  effects[{object,before,after,rule:id@ver,reads[{path,ref|null}]}]
  events[{type, audience public|about[seat]|actor}]
  time{world:{axis:label}, recorded?:epoch-ms}; stateDigest?  (alg:hex)
READ
  Fact{value|ABSENT, status, audience, source path|derivation|external{src,date,licence?}, cut}
  Unknown{kind not-yet|not-recorded|not-observable|not-modeled|sealed-to-audience, reason}
  Refused{kind unsupported-version|integrity|out-of-envelope}
  Projection(cut,audience)->[Fact|Unknown|Refused]; can(seat,cut)->[act|refused(reason)]
EXPORT{ref resolvable|opaque-pairwise, cut|sealed, basis?, before?, after?, material?,
  verification{consistency REPLAYED|INVARIANTS|NONE, authenticity NONE|SIGNED|ATTESTED},
  limits{context, evidence:false, effect, retention, nonClaims[]}}
ADDRESS frame instance[@pin]+chain; position now|pos:n|before:n|after:n|sealed|at:<label>|head:<digest>;
  audience public|seat|role|authorized:<grant>; focus path|act:<requestId>|record:<id>; question
```

## Sources

DC = `/tmp/claude-0/-home-user/b41be0eb-b143-5871-a601-ee9ec7d839dc/scratchpad/src/dc-os`, W = `.../src/econ-worlds`.
- DC:src/consequential/system/decisionTrace.ts:19-48 (`same`, replay, "diverged at event"); archiveV1Market.ts:45-55,98-137 (event, recorded refusal); archiveV1Credit.ts:132-137 (invalid command returns run, no event); marketEpisodeV1.ts:21-31,43-60,167-194 (info derived), 222-227 (`contentId`), 309-365 (branch), 372-440 (perturbation, held inputs :385, rule :391); decisionBranch.ts:70-82,133,140-143; decisionReceiptV1.ts:19-29,58-60,104,235-271; decisionRuleInputsV1.ts:14-16,119-122; creditObjectReading.ts:4-7; syntheticArchive.ts:29-54,57-74 (`status` :70),91-105; decisionReceiptV1.test.ts:25-43 (fixture).
- DC:src/consequential/objects/objectContinuity.ts:7-41; platform/decisionCase/attemptChronology.ts:14-33,105-118,145-176,194-200,385; packageTypes.ts:19-46; operationChronologyContract.ts:112-114; platform/fingerprint.ts:13-36; platform/kernel/refs.ts:26-72; kernel/carry.ts:22-38; platform/bridge/contract.ts:20-26,38-52; domain/evidence/types.ts:233-260; domain/budgeting/authored.ts:19.
- DC:server/v5Attempt.ts:50-61,202-247. Other DC canonicalizers: grep `function stable|canonicalJson` in `src/platform/{journeys,decisionCase,financialOperations,learning,bridge}`, `src/authoring/foundryCaseHandoffModel.ts`, `src/consequential/collaboration/archiveV2RepairCafe.ts`.
- W:runtime/src/modules/worldOne/types.ts:114 (Transfer),217 (Deal),507,543,606-674 (`seedHash` :621, `nextSeq` :674),764-791,904-950; commissioner.ts:41-50,129; sponsor.ts:196-216,272-300; partnerArc.ts:320-357,377; index.ts:90-100,189-200; reckoning.ts:42-52; courtWorld.ts:132-136,269-344; secret.ts:21-39; nbaArenaProjection.ts:7-8,40-90; data/nbaIdentity.ts:23-28; filmPartnership.ts:25,62.
- W:runtime/src/server/journal.ts:1-57; sessionService.ts:2060-2100,2170-2190; actionReceipts.ts:20-35; bridge/contract.ts:88-98.
- W:runtime/src/client/world/institution.ts:273-300,449,487-513; seasonFiveOperatingWeek.ts:252,613-661; harborInstitutionHistory.ts:11-20,35; harborWorldProjection.ts:25-52,116-124; harborCausalProjection.ts:3-25; twoOperatorSharedEvent.ts:64,99; founderShowcase.ts:477-486; foundry/schema.ts:58-66,152-172; foundry/compiler.ts:361,396-410,428; six Harbor `canonical`: institution.ts:487, leagueExchange.ts:48, seasonFiveOpening.ts:52, seasonFiveOperatingWeek.ts:167, twoOperator.ts:43, nextSeason.ts:68.
- W:contracts/bridge/bow-bridge-1/{README.md, fixtures/valid/league-artifact-bundle-rehearsal.json}.
