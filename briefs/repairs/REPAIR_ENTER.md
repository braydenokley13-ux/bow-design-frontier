# ENTER tournament: result, repairs and transfer (from the independent critic)

## Ranking

1. E2 · THE HANDOVER is the winner. Entering is a line-by-line disposition of open matters and a
   signature recorded with its time. It is the only board where LEAVE is an act: you hand over in
   your own words, or vacate.
2. E3 · THE CLOCK STARTS is the runner-up. It makes the biggest perceptual change, and it is the
   only board that records absence as absence: "NO ACT · Denver's offer lapsed".
3. E1 is KILLED as a standalone model. It donates the "You gave up / You got" ledger and the
   hindsight reveal after you act.
4. E4 is KILLED. The plain list carried the same understanding faster.

## ENTER grammar (canon candidates; only the founder approves)

1. **Entry is signed acceptance of named open matters.** Each matter is taken or handed back, and
   the signature is recorded with its time.
2. **Time changes kind.** The scrubber leaves your hand, NOW locks, your matters count down, and
   the World clock stays beside yours.
3. **Knowledge changes shape, and the trade is accounted for.** Show a "You gave up / You got"
   ledger. What closes becomes dashed, with its reason. Anything you saw before entering is
   stamped on your acts.
4. **Your ink appears.** One seat colour, used only on what is yours. Every act and every lapse
   writes a line in the record. NO ACT is recorded as absence, never as a choice.
5. **Leaving is an act.** You hand over in your own words, or you vacate. Either is recorded.
   Lapses after you leave are charged to the seat, not to you. Hindsight unseals only for what
   you acted on.

## Repair list — E2 · EnterHandover.dc.html (winner)

1. **Acts in the "Yours" rows.** Every act writes a double-ruled log line, e.g. "Tue 09:14 · KM as
   GM · asked Denver for two seconds".
   - Denver: "Take their second / Ask for two / Decline". Terms: "2029 second for your backup guard
     ($2.7M, authored). If he goes: payroll $220.1M, roster 14 (computed)."
   - Roster: "Call up / Hold".
   - Butler: "Take the meeting / Not today".
2. **Lapses.** Add a "×60 speed · AUTHORED" toggle. At 11:00 with no act:
   - the numeral becomes dashed "LAPSED";
   - the log reads "Tue 11:00 · NO ACT · Denver's offer lapsed — against the seat held by KM",
     with a hollow double-rule mark.
3. **Handover copy.** "I have read this" becomes "Take this one". The counter reads "3 taken ·
   1 handed back · 1 open".
4. **The signature is the act.** Delete the "Take the seat" button; pressing Return in the initials
   field (or a small "Sign" button beside it) signs. Beside the field: "Signing makes these clocks
   yours from 09:13."
5. **Everything changes on one frame at signing.**
   - The header splits into "World clock" and "Your clock · started".
   - The rule "OBSERVER · … NONE OF THE CLOCKS BELOW IS YOURS" changes on the same frame as
     "Yours". The two must never show at once.
6. **Ledger under the black strip:** "You gave up: the outside view. You got: 4 matters, 4 clocks,
   the pen. Cannot: exceed the second apron without the owner (owner's rule)."
7. **Demo initials.** Use "KM". The strip reads "signed KM as GM · RECORDED 09:13:06" (time from
   the World clock).
8. **Vacate state.** The rows read "Leave with the owner". Lapses after vacating log "seat vacant".
9. **Rule copy.**
   - Replace "(CBA rule, authored)" with "(World rule modelled on the 2023 CBA's second-apron
     limits; authored)".
   - Add to the header: "your BOW World — not NBA history".
10. **Authored values.** Trade deadline "Week 14 · Thu 15:00"; Butler's meeting request "14:00".
11. **Visual bug.** The COMMERCIAL LENS line wraps to two lines and falls below the status line's
    baseline. Cut it to one line.

## Repair list — E3 · EnterClock.dc.html (runner-up)

1. **Remove the hatch.**
   - Draw the observer's future as an outline, labelled "illustrative range · authored · no model
     ran".
   - "PROJECTED" becomes "ILLUSTRATIVE".
   - Remove any "BOW model v0.3" label.
   - The legend's MODELED row becomes "No projection model runs on this World."
2. **Add a computed line** alongside the ranges: "If nothing changes by the Week 14 deadline:
   $222.8M · $1.1M over the 2nd apron · World tax $34.2M (computed, World rule)".
3. **Record leaving:** "TUE 11:01:44 · Left the seat · open: roster 16, owner's note" (times from
   the clocks).
4. **After LEAVE:**
   - NOW follows the World clock.
   - The stale "Five matters are waiting…" line becomes the true state, e.g. "Roster 16 · Denver
     lapsed 11:00".
5. **While you're away.**
   - "held for your return" becomes "running · sealed until you return".
   - Add: "Deadlines passing while you're away are recorded against the seat."
6. **Denver's offer terms:** "2029 second for your backup guard ($2.7M, authored)". Under ACCEPT:
   "payroll → $220.1M · $1.6M under the 2nd apron · roster 14 (computed)".
7. **Tax label:** "World rule: flat 1.5× over the line (authored). The NBA's real tax rises in $5M
   brackets."
8. **Entry.**
   - Replace "TAKE THE SEAT HERE" with dragging the scrubber handle into NOW; the clock starts on
     release.
   - Keyboard/click fallback button: "Start my clock at Tue 09:00".
9. **Accessibility.** Countdowns announce through aria-live at 10 minutes and at 0.
10. **Donation from E1.** On entry, show a one-line ledger: "You gave up: scrubbing the season.
    You got: the clock, 5 matters, the pen."

## Transfers (after the repair; see ../w2/SPEC_ENTER_TRANSFER.md for domain facts and looks)

### Philadelphia, 16 July 1787 → built on E3 (the Clock), with E1's ledger at entry

File: EnterTransfer1787.dc.html

- The clock is the ROLL CALL, north to south: NH absent, MA, RI absent, CT, NY absent, NJ, PA, DE,
  MD, VA, NC, SC, GA. The order is authored; mark it verify.
- On entry, the ledger reads: "You gave up: the outcome, Madison's notes (published 1840),
  historians' readings. You got: Caleb Strong's vote."
- COMPUTE the vote from the delegation (do not hard-code "divided"):
  - Massachusetts present: Gerry (aye), King (no), Gorham (no), and Strong (you).
  - Strong votes aye → MA divided 2–2 → the motion carries 5 ayes (CT, NJ, DE, MD, NC) to 4 noes
    (PA, VA, SC, GA).
  - Strong votes no → MA no 1–3 → 5–5, a tie, which fails.
  - Strong silent or absent when MA is called → the delegation present votes 1–2 → MA no → 5–5 →
    fails. Record it as "NO ACT · Strong did not vote when Massachusetts was called", as absence,
    and let the arithmetic show that the absence decided it.
  - State the delegation-quorum rule as authored ("[verify the Convention's rule]").
- After you act, or after the roll call ends, hindsight unseals only for this vote: "Recorded,
  16 July: carried, Massachusetts divided. Your branch: …". The branch is a frame + ink + stamp,
  never a fill over the record.
- LEAVE: "The Convention goes on without you: 17 July …" (sealed).

### Harrow Medical, VP Procurement, 06:40 → built on E2 (the Handover), with E3's clock inside

File: EnterTransferHarrow.dc.html

- The night-shift planner hands over at 06:40. Matters:
  - the Kaito fire (06:10);
  - two open purchase orders;
  - the day-11 stockout (COMPUTED: 2,300 MCUs at 210/day ≈ 11 days);
  - the five customer promises with COMPUTED at-risk dates;
  - the 11:00 spot-market quote.
- Take or hand back each matter, then sign.
- While occupied, the clock is the MCU reel unwinding: 2,300 at 210/day, drawn as a physical reel.
  The 11:00 spot quote can lapse and is recorded as NO ACT.
- The warrant's $250,000 order limit refuses a larger spot order and names the rule: "Refused by
  the warrant: orders over $250,000 need the CFO (II.5)".
- The occupant can be a person or an agent. Show that an agent's signature is a different
  material from a human's (e.g. a stamped seal with "agent · warrant v3" vs handwritten
  initials). No other difference in authority.
- LEAVE requires a handover to the next shift (auto-drafted, edited in one-line notes) or "Vacate:
  matters revert to the COO" (recorded).
