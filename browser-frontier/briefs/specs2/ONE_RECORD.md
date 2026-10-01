# ONE RECORD — the convergence proof (the ONE end-to-end flow)

File: `prototypes/OneRecord.html` (+ `.steps.json`). Read first: `briefs/00_PRIOR_ART.md`,
`briefs/PROTOTYPE_CONTRACT.md` (including §9), `briefs/CANON_AFTER_CRITIQUE.md` (your mandate),
`prototypes/_shared/boston-fixture.js`, and both critiques in `critique/` (what must be fixed). You MAY
read and copy code from the existing prototypes — `Jurisdiction.html` (the paper, kinds of yes,
League refusal, standing line, registers), `Guest.html` (ring, offer threshold, standing orders, the
Round), `Institution.html` (the Room — you may reuse its three.js scene or draw a lighter 2.5D room),
`Concordance.html` (views bound to one ledger, ShownSets, "Do these agree?", SHA-256), `TakeItOut.html`
(lift an act, luck fixed, dashes), `Cut.html` (seam, three backs), `Parting.html` (lockfile, closure).
Do not edit them.

## Exact design problem
Both critics said the pieces are new but "not yet in one place": no act made in one board appears in
another's record. Prove the medium in ONE place: a single canonical RECORD for "Boston · Year Two",
numbered from the fixture (next act 43), hashed with SHA-256, addressed in the URL, rendered by several
views at once, crossed by several authorities, reaching the person while they are away, and graded by
Reality — with every act in the flow visible in every surface that should see it, and invisible to those
that should not.

## The flow (mandatory states, in order; each screenshotted)
1. **Called, not navigated.** The page opens as a phone ring from the seat you hold (Guest E4): "Boston ·
   Year Two · Week 9 · you: GM — Denver's offer expires 11:00. If nobody acts: declined." (If you have
   not redeemed an Offer yet, the ring cannot reach you: show first the Offer threshold — who offers,
   which seat, what you'll see, what you give up, what stays private — and redeem it.)
2. **Pick up = enter.** The standing line rewrites: "You are in: Boston · Year Two · seat: GM · your word
   counts for: signing, trading, payroll · not for: approving trades, setting the tax line". Your clock
   starts beside the World's.
3. **The paper.** Denver's offer as a Jurisdiction form: send the backup guard (minimum deal) for a
   future second; lines BOSTON (yours) · DENVER (theirs — "not yours to fill") · LEAGUE (RULE-yes) ·
   PLAYER (struck, with the reason) · MEDIA (no line; learns). Add $0.5M cash (the wrong move offered
   as an option): sign your line → Denver signs on Denver's clock → **the League returns it naming the
   rule** (a team over the apron may not send cash in a trade — verify the rule text; label it) → the
   record shows "nothing changed on Boston's books" (no act number spent).
4. **Fix and resend.** Remove the cash, resend: the stamp names the rulebook version; **act 43** is
   appended to the ONE record; SHA-256 updates; three records (Boston · Denver · League) show it from
   three sides with no god view.
5. **Every view hears act 43 in the same frame.** A Room (lighter 2.5D or reused 3D) — the roster
   board and payroll change; a Table; a Direct text view (aria-live announces "Act 43. Recorded …"). All
   show "act 43 · <hash>". "Do these agree?" is computed from ShownSets and passes.
6. **A second client.** Open the same address in a second client (harness `open2`): it folds the same
   record to the same hash; its seat is a VIEWPOINT (observer), so it shows no private matters and says
   so. The address is in the URL; reload restores it.
7. **Away.** "Put the phone down for 14 days" (advance the World clock): a standing order YOU WRITE
   (edit at least one clause in the UI — the Guest critique said pre-written orders are not playable)
   answers Denver's second call; the act is stamped "by your standing order §2", never "by you"; one
   open matter lapses and is recorded as NO ACT.
8. **The Round.** On return: "N stops · 1 closes tonight"; stop 1 is a seat diff (what you can now see,
   can no longer do, what's due); stop 2 is the seam: a branch you kept earlier (keep one in state 4 or
   earlier — e.g., a redline) is graded by a Reality arrival (staged, labelled STAGED) with exactly
   HELD · DIVERGED · IMPOSSIBLE · RE-DECLARE; ends "Level with the record."
9. **Lift it out (WHY by experiment).** Lift act 43 (TakeItOut operator): the present re-forms, dependents
   dash, the hash changes; put it back — the hash matches the record again.
10. **Keep a fork and return.** Keep the lift as a fork (own ink, stamp "cut with hindsight", closed
    lockfile address), then return to the record; the fork stays reachable by its address.

## Rules
- ONE record object, ONE `act()`; every surface re-renders from it. Two logs (record vs trail).
- Every number read from the fixture or computed from it (kind propagation).
- Denver and the League are stand-ins (AUTHORED policies / the rule), labelled as such; no model runs.
- Art direction — "One desk, many windows": calm light paper ground; each authority keeps its own
  register where it appears (League ledger grey, Denver letterhead); BOW's threshold frame from Guest.
  Fonts from the prototypes you borrow.
- Capability labels: REAL — the act-log fold to SHA-256 (Live World page, prototype-grade), the CBA
  engine and dated fact store (econ live), seats by lease; PROPOSED — everything composed here; the
  shared store is a stand-in. AI: NO AI REQUIRED anywhere in the flow.
- Acceptance: all 10 states; one act number and hash visible in every surface after act 43; second
  client matches the hash; reload restores; harness clean at 1440×900, 1280×800, 1024×600, 390×844.
