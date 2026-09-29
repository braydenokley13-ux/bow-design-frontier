# Repair lists: BrowserFocus and ApushNotes, from the independent critic (Wave 1)

The critic's verdicts:
- **Focus: COMBINE.** Keep the ladder, the reticle and the "came from" inset as orientation grammar. Add one-state propagation, as in Biology.
- **Notes: PUSH FURTHER.** The provenance of the record is the idea to keep.

Fact-checks were made against:
- Farrand, *Records of the Federal Convention* (1911), vol. 1, the LOC scan;
- NBA and press reports.

Apply every item below. Coordinates refer to the board's own drawing helpers (H, V, R, C, P, lb, X), as they appear in its source.

## A. BrowserFocus.dc.html

**A0. One-state propagation (the COMBINE).** On the Contract stop, add a small control, "Try a different year-2 salary", as a stepper from $50M to $66M in $1M steps.

- Changing it recomputes Boston's payroll, which is fixture ≈ $203.6M plus (new − 58.5).
- When you go Wider to League, Boston's mark (see A1) sits at the new value. The tax reading at Franchise updates too (see A5).
- The changed value is drawn as a FRAME in branch ink with the stamp "YOUR WHAT IF · not the record". The recorded mark stays visible, in solid.
- This is the only interactivity added. It must show that one change propagates across scales.

**A1. Draw payroll against the lines at League.**

- Add a horizontal axis H(470,100,900), with x = 100 + (v − 150) × 10.
- Solid ticks V(x,452,478):
  - cap 164.961 at x 249.6;
  - tax 200.428 at x 604.3;
  - first apron 209.015 at x 690.2;
  - second apron 221.686 at x 816.9.
- Labels at y 446, kind 'm':
  - 'cap 165.0', centred at 250;
  - 'tax 200.4', right-aligned at 598;
  - '1st apron 209.0', left-aligned at 696;
  - '2nd apron 221.7', left-aligned at 822.
- Boston: a filled R(632,458,8,24), with the label 'Boston ≈ 203.6 (fixture, verify)' at (636,494), kind 'n', centred.
- Caption, centred at (500,522): 'other 29 payrolls are public but not loaded in this prototype'.
- Set League `first` to 'Boston’s payroll on one axis, with the cap, the tax line and both aprons drawn across it.'
- If this collides with the 30-square conference drawing, shrink the squares, or move them above y 430.

**A2. Bring the "now" facts up to date.**

- League, obs: '2026–27 lines: cap $164.961M, tax $200.428M, aprons $209.015M and $221.686M.' Src: 'Set by the league, June 2026 · verify'.
- Clause, obs: '2026–27 second apron: $221.686M.' Src: the same as League.
- Franchise, obs: 'Control passed to a group led by Bill Chisholm in Aug 2025, at a reported ≈ $6.1B valuation; the rest transfers in 2028.' Src: 'NBA approval 13 Aug 2025 · press reports · verify'.
- Player, unk: 'How he plays over a full season after the injury: UNKNOWN — only part of 2025–26 is observed.' Src: 'Returned 6 Mar 2026 vs Dallas (observed, verify)'.
- Player drawing: add C(X(2026.18),320,5) and V(X(2026.18),214,314), with the label 'Returned · 6 Mar 2026' at (660,222), kind 'm', left-aligned.

**A3. Hatch only where a model ran.**

- Front office: change `mod` to ['unk','Wins a trade would add: UNKNOWN — no season model has run.','Refused by the rule: hatch only for a model that ran; none is built'].
- Organism: change `mod` to ['aut','Heart rate at 10 km/h: 140–170 beats a minute (illustrative, authored).','Illustrative, authored for this prototype · no model ran'].
- Make sure an 'aut' outline texture exists in the reading-swatch CSS.

**A4. Contract chart.**

- Replace the flat lines with per-season lines:
  - 2025–26 values [154.647,187.895,195.945,207.824], drawn as H(480-2v,280,356);
  - 2026–27 values [164.961,200.428,209.015,221.686], drawn as H(480-2v,360,436);
  - the 2026–27 values continued as dashed 'u' lines over x 440–860.
- Right-hand labels: 'CAP 165.0', 'TAX 200.4', '1ST APRON 209.0', '2ND APRON 221.7'.
- Change sal[1] from 58.4 to 58.5.
- Add lb(398,333,'now · year 2','c','m').
- Replace the caption with 'Tatum’s salary · $M per season · Boston’s team lines on the same scale', and move it to y 14.
- Add lb(575,522,'lines for 2027–28 on are not set yet: dashed','c','m').

**A5. Compute what the rules allow.**

- Roster, com: 'Team payroll today ≈ $203.6M, the sum of every cap hit on the books.' Src: 'Computed · project fixture as of 29 Sep 2026, verify'.
- Franchise, com: 'Over the tax line by ≈ $3.2M: a bill of ≈ $4.8M at the $1.50 rate, ≈ $7.9M at the repeater $2.50 rate.' Src: 'Computed from fixture payroll · verify repeater status'.
  - When A0 changes the payroll, recompute. Use the simplified brackets, marked as simplified: $1.50 per $1 for the first $5M over the line, then $1.75, $2.50 and $3.25 for each further $5M.
- Roster caption: 'the other 14 names are not loaded in this prototype (roster as of 29 Sep 2026)'.

**A6. Visual bugs.**

- Replace lb(325,165,'0 · Tatum','c','w') with lb(325,152,'#0','c','w') and lb(325,178,'TATUM','c','w').
- Clause items: replace the square R(630,…,16,16) with C(638,150+i*50,8)+P([632,156+i*50],[644,144+i*50]), a "switched off" mark.
- Add lb(440,28,'a league rule, not a line in Tatum’s contract','c','m').
- Give the runner's "heart" label a leader line.

**A7. Header and refusals.**

- Remove 'BROWSER C ·' from the header.
- Empty state: append ' Rule: a system opens only when its stops and sources are built.'
- Revolution stop: change the franchise reading to '16 Dec 1773 was a meeting of “the Body of the People”, open to non-voters · verify'. Remove any "if you count as a voter" or property-test framing of that meeting.

## B. ApushNotes.dc.html

**B1. Replace the manufactured conflict.** The two witnesses corroborate each other; they are not independent.

- Extend Madison's Bedford quote with ' He did not mean by this to intimidate or alarm.”'
- In the Yates column, add: “Sooner than be ruined, there are foreign powers who will take us by the hand. I say not this to threaten or intimidate…”, citing Farrand, vol. 1, p. 501.
- Change the ≠ glyph to ≈.
- Underlines:
  - Shared phrases get a solid 2px rubric underline (text-underline-offset:4px): in Madison, "foreign ally… take them by the hand"; in Yates, "foreign powers who will take us by the hand".
  - "I do not, gentlemen, trust you." gets a dotted underline.
  - Add a 10px monospace key: 'solid: in both · dotted: only in Yates'.
  - There is NO hatch on any quote text.
- Replace the CONFLICTING SOURCES box. It sits in the Bedford row, under Yates, at 13px:
  - title 'TWO WITNESSES';
  - text 'Both wrote down the foreign-help line and Bedford’s “not a threat.” Only Yates kept “I do not, gentlemen, trust you.” Madison writes him in the third person; Yates keeps his “I”.'
- Change the naming string for `witness` to 'corroboration: two witnesses agree on what was said, and differ on the words.'
- To make room: .pb font-size 18 → 17px; Yates quote 18 → 15.5px; delete the 'notes kept by Yates… printed 1821' line (it moves to B2).

**B2. Give Yates his own provenance, and show the dependency.**

- In the How-do-we-know panel, add a strand switch: 'Madison’s strand · Yates’s strand'.
- Yates's strand:
  1. UNKNOWN — 'Spoken in the room'.
  2. UNKNOWN — 'Yates’s own notes, 1787' / 'Manuscript lost; Farrand found none.'
  3. RECORDED — 'Copied by John Lansing Jr.'
  4. OBSERVED — 'Printed in Albany, 1821' / '20 years after Yates died; Edmond Genêt arranged it and had used the notes against Madison in 1808.'
  5. OBSERVED — 'Farrand, 1911' / 'Reprinted from the 1821 print.'
- Madison's strand:
  - Step 2: 'Written by Madison in 1787' / 'Written out during the session or within days of its close, by his own account.'
  - Step 3: 'Revised by Madison after 1819' / 'In a later ink he matched votes to the printed Journal and, in over fifty places, added passages taken from Yates (Farrand, vol. 1, pp. xvii–xviii).' Drop "[paraphrase]".
  - Step 5, desc: 'The edition these quotations come from.'
- selNotes:
  - Bedford: 'Farrand marks the end of this paragraph “Taken from Yates”: Madison copied it in later (vol. 1, p. 492).'
  - King: 'Madison’s version of this reply was copied in later from Yates (vol. 1, p. 493, n. 17).'
  - Madison: 'Speaker and note-taker are one man. In this same speech he later crossed out “as a security agst. the encroachments of each other” (p. 486, n. 8).'

**B3. Retexture.**

- LAY[1] becomes ['t-aut','INTERPRETATION · AUTHORED SUMMARY']. Each interpretation string gets ' [authored summary; cite a historian before release]'.
- Remove the hatch from .sg-q and .sg-diff.
- .hbb becomes {padding:0;background:none;border:2px solid #1F3A5F}, with the label 'Illustrative, authored · no model ran'. The leaf's range is AUTHORED, not MODELED.
- Add .t-gen{background:radial-gradient(circle,#2A211B 1.1px,transparent 1.4px) 0 0/6px 6px;border:1px dotted #2A211B}.
  - Put a 16px .t-gen swatch before "Gunning Bedford Jr. · Delaware".
  - Give the answer block border-left:3px dotted #2A211B;padding-left:10px.
  - Subline: 'actor model, not the person · answers about Bedford, never as Bedford (rule: no imitating a real person’s voice) · sample answers authored; no model ran'.
- Q1 SOURCE: 'Delaware’s credentials barred its delegates from changing the Confederation’s one-state-one-vote article (read 25 May; Farrand, vol. 1, p. 4).'

**B4. Restore the record's order.**

- New order: Wilson, Ellsworth, Madison, Franklin, Bedford, King.
- Franklin text: 'Benjamin Franklin, before the day’s sharpest exchange, offers a picture from carpentry:'
- Code: isB: i===4; default sel=4; showWitBtn: sel===4; brMark [3,4,2][br]. Check every index that referred to the old order.
- Branch subs: 'Removes ¶4 and its picture of a joint.' and 'Removes the foreign-ally line in ¶5.'
- Franklin branch text: 'No carpentry picture is on the table when Bedford rises; the day still ends with King’s rebuke. Illustrative: the same 2 July tie, or a slower road to the committee.'

**B5. Actor answers.**

- Q2 SOURCE: 'On 5 July he said he had been misunderstood: foreign nations owed money would take the small states by the hand “in order to do themselves justice” (Farrand, vol. 1, p. 531).'
- Q2 UNKNOWN: 'Whether that 5 July account is what he meant on 30 June: UNKNOWN.'
- Q1 UNKNOWN: 'What he would have accepted on 30 June: UNKNOWN. On 2 July he was named to the committee that drafted the compromise (verify).'
- Answer text 11.5 → 13px.

**B6. Leaf anchor.** At the foot of the leaf, in iron-gall EB Garamond 13px with a 3px solid left rule: 'The record goes on: 2 July, a 5–5 tie; 16 July, the compromise passes (verify).'

**B7. Copy.**

- Replace the subtitle with 'Each paragraph has a history. Select one to trace it.'
- Replace each generic "verify against Farrand…" line with its page cite: pp. 486 / 488 / 492 / 500–501.
- Header: 'quotations: Farrand, Records (1911), vol. 1 · recheck page images before release'.
- Put a 9px Work Sans 'branch' caption under the gutter square.
