# Critic 3 — Convergence (OneRecord, RealityCity)

Independent. I built neither board. Phase 1 was written from what I played and probed, before I opened any spec, brief (other than 00_PRIOR_ART and CRITIC_BRIEF), builder note or earlier critic file. My evidence: harness runs `shots/critic3-OneRecord-look`, `critic3-OneRecord-390`, `critic3-RealityCity-look`, `critic3-RealityCity-390`, and Playwright probes plus screenshots in my scratch dir (`critic3_*.png`). For OneRecord I read ~20 lines of page source, the hashing function, only to recompute the chain myself.

---

## PHASE 1

### 1. OneRecord

**What it is:** a four-pane page (Desk, Room, Table, Direct) over one SHA-256-chained act log kept in localStorage, walked through one scripted scenario ("Called · Enter · Paper · Landed · Away · Round · Lift").

**What it reduces to:** a guided management-sim tutorial on a synced dashboard. Other seats move only when you press "Let Denver's clock run · +6 min"; after 62 s the World clock still read "Wed 10:12".

**Moments a normal site or game would not have:**
- The League returns the paper: "A team over the second apron may not send cash in a trade… Ruled by a hand-coded check, not the CBA engine." Then: "No act number spent (next: 43)".
- Act 43 has the same hash, `b9f0a0c9`, in the bar, Room, Direct, Table and a live second tab. I recomputed it in Node and got the same value.
- A second tab becomes a viewpoint: "A lease never travels in an address."
- "The World clock ran 14 days… You did not do any of this." The lapses are recorded as "no act".

**Lens**
- ONE RECORD: WEAK. At act 44 the address reads `0a646ccb` and the head chip `0b0632a2`, and "Do these agree?" still says "They agree".
- ADDRESS: OK. It restores on reload and refuses authority. A fork or `lift=a40` address crashes a fresh browser ("One Record could not start"). The Holiday branch has no address.
- ENTER: OK. Offer ("YOU GIVE UP…"), pick up, your own clock. But redeeming relabels past acts #35–#42 as "you · GM seat". Closing the tab leaves the seat held with no way back.
- ACT ACROSS AUTHORITY: STRONG, with one hole. An observer can press "Restart the stand-in World", which erased act 43 from the holder's tab.
- TIME: OK. Away lapses are real; other clocks are buttons.
- WHAT IF / FORK: WEAK. Lift is a preview. A kept fork is a "CLOSED LOCKFILE" that still contains act 45, which cites the payroll of the lifted act.
- TRUTH GRAMMAR: WEAK. The Round says "Denver's second call was declined by your standing order (act 45)", but that call lapsed and act 45 was the owner's note. My "answer" to the owner was written for me.
- REALITY vs AUTHORED: OK.
- MEDIUM-NATIVENESS: OK.
- PHONE: OK.

**Biggest failure:** one act = one hash breaks at the second act, and its own checker certifies it.

**Truth/rights risks:** "Projected tax stays ≈ $39.5M (carried)" in the Holiday branch cannot carry if Holiday stays [verify]. An edited localStorage store was accepted: every window agreed on the tampered payroll.

**Test with real people:** one person plays to the Round, then a second opens the copied address. Ask both: "What did the GM decide, and not decide?" It fails if two of five say the GM declined Denver's second call, or funded Business in Year One.

**VERDICT: PUSH**

**Top 3 repairs**
1. One digest per act. Address and head must agree, a no-act head must be labelled as one, and "Do these agree?" must include the address line.
2. Never rewrite who acted or what an absence meant. Take the owner's-note answer in the person's words, or stamp it as drafted by BOW.
3. Take Restart away from observers, refuse bad addresses with a named reason instead of crashing, and let a closed tab give up the lease. Visual: the Holiday buttons and "Owed" are cut off under the action bar; "filed · act 4" is clipped; "phone down" overlaps "$2M would open it"; the 9.7 px "recorded" chip reads as a black bar.

---

### 2. RealityCity

**What it is:** a map of 4,142 real Midtown footprints with a stack of sheets. A "pin" (tonight's crowd) converts as you follow typed relations. There is one three-party train request and a checker for placing an invented club's HQ.

**What it reduces to:** a GIS parcel viewer, plus a scenario calculator, plus a three-question router.

**Moments a normal site or game would not have:**
- "18,000 people" → "× 55% by rail = 9,900 riders" → "1,900 still here at min 60" → "806" per hectare → City: "The pin stops here… That is an honest end." The earlier sheets fold into a visible spine.
- The transit desk: "RETURNED AT INTAKE · R-EV-1 … Their rule, their word." On yes: "Fee moved… (conserved)".
- Site A: "REFUSED · OVERLAP-1".
- My edit to the store was caught: "verified on load: MISMATCH".

**Lens**
- ONE RECORD: WEAK. Act #7 is `5dae80d7` in the arena log and `9d9b4540` in the transit log, with nothing linking them.
- ADDRESS: WEAK. The seat is refused ("observer's view only"), but a hash edit does not move the page, Back skips every hop, and a branch is reset without a word in a fresh browser.
- ENTER: WEAK. One click, yet the record says "an Offer redeemed by a present person". An observer is told "line 1 is yours", then refused.
- ACT ACROSS AUTHORITY: STRONG.
- TIME: WEAK. There is only the "WAIT FOR THE TRANSIT DESK'S CLOCK" button, and "This World has no calendar date".
- WHAT IF / FORK: WEAK. "KEEP AS A BRANCH" saves slider values. It is a scenario.
- TRUTH GRAMMAR: OK. Kinds propagate. But at 800 m the ring passes the excerpt's west edge, and about 410,000 m² with no data counts as "Open ground" under "COMPUTED FROM WHAT THE CITY RECORDED". "Arena operator UNKNOWN" is shown for a public fact.
- SCALE: STRONG. A hop changes the subject along a named relation; the L1/L3 buttons only move the camera.
- GEOGRAPHY: OK. The radius and overlap tests need geometry. The map never draws the crowd or the queue.
- REALITY vs AUTHORED: WEAK. "Penn Station transit" is one invented desk standing for three real operators, selling "$20,000 a train". A staged "3 trains · 12 s" sits under "OBSERVED SLOTS". "C Yard · MTA" sits on the Farley block [verify].
- MEDIUM-NATIVENESS: OK.
- PHONE: OK. The toolbar hides "What's real?".

**Biggest failure:** the ask box. "asdf" and "who owns 350 Fifth Avenue…" do nothing. "where is the Empire State Building?" → "Arrived at Club HQ." Enter does nothing. "What's real?" meanwhile claims every ask is "routed to a system or refused".

**Test with real people:** five New Yorkers. "What happens around the Garden after the game, and who decides?", then "Are the Lamplighters real? Did a rail operator really say yes?" It fails if anyone says yes.

**VERDICT: COMBINE.** Take the converting pin and the site checks into OneRecord's World. Park the map.

**Top 3 repairs**
1. Route or refuse every ask, with a reason, and make Enter submit.
2. Draw the excerpt boundary and mark partial ring statistics UNKNOWN.
3. Honour hash edits and Back; give each act one shared digest; make the ENTER wording true. Visual: "Still here at min 60" is cut off by the relation dock.

---

### Across both

**Is "not yet in one place" answered? Partly.** Inside one World, in one browser, act 43 is in one place: one number and one hash in four views and a live second tab, with a hash I could recompute myself. That is new, and it is the first time I have seen it hold.

**What is still not in one place:**
1. **Time along the record.** The next act already splits into two hashes (act 44).
2. **Forks.** The lift fork cannot be acted in. The Holiday branch has no address and no record. RealityCity's branch is a set of slider values. None of them continues.
3. **Devices.** A fresh browser cannot check an address. A fork address crashes it.
4. **The two boards.** They are two engines with two address grammars (`at/h/seat/view` against `m/vp/pin/r`), two ENTERs (Offer plus pick-up against one click) and two tamper behaviours (OneRecord accepts an edited store; RealityCity says MISMATCH). No act made in one appears in the other. Boston's desk and Midtown never touch.

**The single most important thing missing before a real person tries this:** a record that a second person on a second device can check, and that does not lie. Right now the log lives in one tab's localStorage. Any viewer can wipe it. It rewrites who acted ("you" on acts #35–#42), and it rewrites what an absence meant ("declined by your standing order"). Fix those four lies first, then put Boston and Denver in front of two real people on one shared store. Everything else can wait.

**What I would cut:**
- RealityCity's free-text ask box. It is a keyword router that misroutes without saying so.
- The front-desk city map as a landing page.
- RealityCity's pencil branch.
- The Holiday door inside the Year Two desk. It mixes a Reality branch into a World panel and carries a wrong number.
- "Restart the stand-in World" anywhere an observer can reach it.

**What I would keep:** the League's returned paper, the away lapses recorded as no act, and the pin converting along typed relations.

---

## Phase 2 amendments

Written after reading `CANON_AFTER_CRITIQUE.md` §4–6, `specs2/ONE_RECORD.md`, `nyc/NYC_LANES.md` (common rules and lane B) and both earlier critic files. For each behaviour the spec describes that I had not reached, I replayed the board (`critic3_p2_*`). Phase 1 above stands as written.

**OneRecord**

1. **The spec's path works, and my path does not.**
   - Spec state 7: I wrote clause 2 ("a second-round pick for a player on a minimum deal → decline"). Act 45 then reads "Answered Denver's second call: declined · by your standing order §2 · not by you". Address and head agree: `act 45 · 12e1f3f9`.
   - So both of my Phase 1 failures appear only off-script. When I struck clause 2, no clause answered the call and the head became a no-act. That is when the address and head split into two hashes. It is also when, after the owner's note, the Round said "declined by your standing order (act 45)".
   - The Round text is written for the scripted path. It becomes false as soon as the person uses the freedom the spec required: "edit at least one clause". Clause 1 still arrives pre-written and IN FORCE.
   - Phase 1 findings stand, re-scoped: the board is right on its script and wrong off it.
2. **Round stop 2 exists; I had not reached it.**
   - If you keep "Holiday stays", the return shows "2 stops". Stop 2: "STAGED — the 5 Feb 2026 trade deadline, replayed as if it had just arrived", then HELD / IMPOSSIBLE / DIVERGED / RE-DECLARE, with "Declare item 4" and "Keep the branch".
   - This is the living-fork seam the canon asked for. **WHAT IF / FORK: WEAK → OK.** TIME stays OK, but stronger. I withdraw "cut the Holiday door".
   - One verdict is still wrong. The fixture (`boston-fixture.js` l.145) defines ≈$39.5M as the real 2025–26 "Projected luxury tax (before any deadline move)", with Simons on the books. In a branch where Simons never arrives, "Projected tax stays ≈ $39.5M" cannot hold. So "DIVERGED … yours did not" is a verdict on a number the branch never had. The same card also says "Sealed · your branch's tax after this".
   - Repair: the branch's tax is sealed or UNKNOWN, so that line should be RE-DECLARE. The kept branch still has no address: the URL stays `b=main`.
3. **Spec states 9–10 verified.** "Put it back" returns the head to `act 43 · b9f0a0c9`. A kept fork reopens from its address in the same browser. The crash in a fresh browser stands.
4. **Earlier critics' complaints, checked.**
   - "A different cash figure on different boards" (Critic 2): fixed inside OneRecord. There is one "Cash $20.0M", from the fixture (l.215). "Do these agree?" still does not check cash.
   - 32-bit FNV hash and the tautological check (Critic 2): fixed. It is real SHA-256, which I reproduced myself.
   - "There is no second client" (Critic 2): fixed for a second tab in the same browser, which updates live. Not fixed for a second device.
   - Standing orders "not playable" (Critic 1): mostly fixed. "Refused: clause §2 is blank. A blank line would be a choice nobody made."
   - Truth textures read as checkboxes (Critic 1): fixed.
   - "Never silently replace user input" (Critic 1; canon §4 law 7): still broken. OneRecord rewrites `s=denver.year-two` to Boston, with a false note.
5. **"Not yet in one place".** OneRecord answers it by making one board with many views. It does not answer it across boards. My "partly" stands.

**RealityCity**

6. **Canon §4 law 7 is broken by the ask box, and it has gone backwards.** Critic 2 found that Jurisdiction's router refused "asdf". RealityCity ignores "asdf", and sends "where is the Empire State Building?" to Club HQ without a word. `b=b1` is also reset silently in a fresh browser. The biggest failure stands.
7. **Lane B asked SCALE to go further than it does.** The brief asked to push SCALE "much further than change of subject along a typed relation with one quantity pinned", and to handle chains such as contract → player → club → league → economy. The build is exactly that baseline, on one chain (arena → transit → neighbourhood → city). SCALE stays STRONG as a working verb, but it does not go past the baseline it was asked to beat.
8. **REALITY vs AUTHORED: WEAK → OK.** The brief allows real names used only as places. The board shows "OPERATED BY · the real operators · separate authorities; no sheet", which is honest. The "$20,000 a train" and "YES · 2 TRAINS" risk stays in the people test. The brief's "a parcel is not an institution" explains "Arena operator UNKNOWN". Keep the rule, but change the word to "not in this page's sources".

**Verdicts unchanged:** OneRecord PUSH · RealityCity COMBINE. I did not test 1280×800 or 1024×600.
