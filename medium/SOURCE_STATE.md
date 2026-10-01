# SOURCE_STATE — what the Medium & Protocol Frontier run inspected

Refreshed 2026-09-29, 19:47 UTC. `git fetch --all --prune` ran against GitHub in all three repositories. The SHAs below come from that fetch, not from any brief.

## bow-design-frontier (the only repository this run writes to)

| | |
|---|---|
| Remote default branch | `claude/admiring-newton-wc9vo1` @ `a9b7b1c2a063b3144cac4a17010e4be032aeba5e`. This is the only remote branch; there is no `main`. |
| Working branch | `claude/focused-allen-e4zf4e` @ the same SHA. The prune removed its remote ref, and this run's push recreates it. |
| State | Waves 1–3 are complete as design evidence. They produced the boards, `Packet`, `Packet2`, `CloneVerdict` and the Live World (`live/`). None of it has been used by people. |
| Handoff read | `README.md`, `briefs/w2/W2_BAR_AND_FIXTURES.md`, `briefs/w3/*` |
| Open PRs | none |

## bow-economics-live (read only)

| Role | Branch @ SHA | Notes |
|---|---|---|
| `main` | `556ec841d27d3c7c0ba82b4969c133d5b76143c5` | The Season One release line. The last decision is D179. |
| **Canonical Worlds architecture (Codex)** | `codex/bow-worlds-complete-ultra-20260925` @ `a43679f23096f8818a234eb281400c2ae2c31c4e` | 452 commits ahead of `main`; decisions up to D250. The product code is `50984f45`; `a43679f2` is a note-only handoff commit. The campaign is **INCOMPLETE**. |
| **3D / visual Worlds frontier (Claude)** | `claude/quirky-maxwell-s26mxx` @ `09051acf7258c8571353728370ff915893e70568` | 521 commits ahead; decisions up to D259 (Arena repair round 4). It contains `97434544`, the SHA the founder handoff names. It lacks 4 Codex commits: `df39748f`, `400249ef`, `50984f45`, `a43679f2`. It last merged Codex `b49ddf45`. |
| PR #27 head (draft) | `claude/admiring-johnson-xto4tn` @ `0bf88d1aac719f804fa5ef0665c97ed2c268127d` | An ancestor of `quirky-maxwell`; the PR head is stale relative to the visual work. |
| Worlds lineage | `codex/world-frontier-candidate-20260925` @ `9a6f9f9b` ← `claude/hopeful-franklin-3wuanw` ← `claude/eager-ritchie-tfff9o` ← `codex/visual-frontier` | These are all ancestors of both current frontiers. `archive/world-frontier-preliminary-20260925` @ `0940db47` (Harbor Lights) is archival. |

Handoffs read:
- `docs/campaign/bow-worlds-complete-ultra-20260925/FOUNDER_HANDOFF_2026-09-29.md`, `NEXT_SESSION_START_HERE.md` and `CAMPAIGN_STATE.json`. Status is INCOMPLETE. The last checks were Node 24 build plus 133/133 tests on the affected files: source proof only. There was no rendered, device, human, rights or full-suite proof.
- The division of labour, per that handoff: "Codex owns saved institutional truth; Claude owns the 3D experience."

## bow-decision-challenges (read only)

| Role | Branch @ SHA | Notes |
|---|---|---|
| `main` | `104085a2d1f91dbe6bbd002aec22eca429781c59` | |
| **Canonical frontier (Codex, "consequential OS")** | `codex/bow-consequential-os-ultra-20260925` @ `e1d05104c9da54c5f94751556d5a1ca6b4f194ed` | This is the Cycle 61 checkpoint and is 900 commits ahead of `main`. `CAMPAIGN_STATE.json` names its predecessor `c1522825` because a commit cannot contain its own SHA. The campaign is **INCOMPLETE**. Cycles 55–61 were source-only: the founder barred tests, builds and browsers on the Mac. |
| PR #61 head (draft; Claude) | `claude/wizardly-johnson-ow18to` @ `1c581593167149eab12ab74c1a0ed0f08f8d5644` | It diverged from Codex at `54d1842d` (Codex +11 commits since, Claude +41). The Codex handoff now reads: "the founder said Claude is no longer working on this; treat PR #61 as historical context". |
| Lineage | `codex/decision-system-frontier-sol-ultra-20260925` @ `b979819c` ← `earn-authoring-leverage` ← `p1-v5-first-bridge` ← `claude/determined-turing-p28ksn` ← `codex/campaign-ii-frontier` ← `main` | |

Handoffs read: `docs/campaign/bow-consequential-os-ultra-20260925/NEXT_SESSION_START_HERE.md` (Cycles 55–61) and `CAMPAIGN_STATE.json`. The product verdict recorded there is "NOT YET one coherent category-defining product". D26 Assign still has no offerable Budgeting Challenge.

## How it was inspected

- The four frontier tips above were exported with `git archive` into text-only snapshots in the session scratchpad. Images, 3D models, fonts, video and archives were excluded.
- Rendered claims in the product repos (screenshots, visual verdicts) are therefore **taken from their own reports and not re-witnessed**.
- No build, test, dev server or browser was run in either product repository, and neither product repository was edited.
- `main` checkouts were read in place.
