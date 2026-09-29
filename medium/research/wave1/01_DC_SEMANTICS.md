# 01 DC semantics (DRAFT v0, being refined)

Status: skeleton saved early. Findings so far (code-cited) are in the notes below; the full report replaces this file.

- DC has NO cross-family act/event/object address scheme. Refs are attempt-local strings: `${attemptId}#event-${index}` (DC:src/consequential/system/syntheticArchive.ts#eventId), branch-scoped `${episodeId}#branch-${id}#event-N` (marketEpisodeV1.ts), recognition refs `${caseId}@${version}#event-N`, school `EvidenceEvent{id,sequence,timestamp}`. `ObjectAddress` is declared "a display address inside one replay-verified synthetic attempt, never a cross-case object ID" (objectContinuity.ts).
- `bow-kernel-1` (platform/kernel/refs.ts) shares Artifact/Context/Subject/Provenance refs only, for recognition-only carry; it has no act address.
- Replay = `replayVerifiedTrace` (decisionTrace.ts): pinned reducer re-derives every event byte-for-byte (JSON.stringify equality), refuses mutation of prior state.
- Knowability: `informationAtAct.openedSourcesBeforeAct: {sourceId,eventRef}[]`, `knowableBeforeAct:{sourceId,available,openedEventRef}` per rule input (decisionRuleInputsV1.ts, schema rule-inputs/2).
- DC-61 shares byte-identical infra files with DC (diff 0) except receipt reader; PR-61 is a consumer, not a semantic fork.
