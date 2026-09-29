# SPEC — J · Native Textbook continuation (three boards)

Read W2_BAR_AND_FIXTURES.md and ../DC_AUTHORING.md first. They bind every line below.

Wave 1 made single textbook MOMENTS: the Room, the Notes, the Arithmetic (APUSH), the syringe
(Chemistry) and the scale spine (Biology). None of them answered what makes a native textbook a
BOOK: sequence, carried state, a class of students, the explicit naming of the idea, the transfer
test and the teacher. Wave 2 answers those, using the one course that EXISTS TODAY: BOW Economics
Live, Track 101 (grades 5–6), Module 1 "The Cap".

About the existing lesson (for the builder's context; do not copy its UI):
- M1 L1 "THE WINDOW" (repo bow-economics-live, `runtime/src/modules/sameLine/l1.ts`, D48) is
  July, with one league, one board, three signing days. Every desk (a pair of students) holds a
  position against five real lines drawn in the same place for everyone.
- Pairs pick a player, pick how to pay, type a number and commit, or pass. The board keeps emptying.
- A player's printed figure is the least he will accept, not his price.
- Its five lines are five different KINDS of object:
  - the minimum team salary, a COMPULSION;
  - the cap, a PERMISSION SYSTEM with exceptions;
  - the tax line, a PRICE;
  - the first apron, a CONFISCATION of tools;
  - the second apron, a PROHIBITION.
- Its intellectual reveals are "THE SAME PLAYER COST EVERY DESK A DIFFERENT THING" and "THE SAME
  MOVE, TWO BOOKS".
- L2 "The Season" and L3 "The Deadline" carry the desk's books forward, so yesterday's choice
  creates today's problem.
- Loop: experience → consequence → adaptation → class evidence → argument → explicit naming.
- No XP, badges or leaderboards.
- Student names on shared screens are fictional ("Desk 7").

2026–27 lines (fixture, verify):
- cap $164.961M;
- tax $200.428M;
- first apron $209.015M;
- second apron $221.686M;
- minimum team salary = 90% of the cap = $148.465M (COMPUTED from the 2023 CBA rule; verify).

Tax, simplified and labelled so on screen ("simplified: the real brackets are indexed each year"):
- $1.50 per $1 for the first $5M over the tax line;
- $1.75 for the next $5M;
- $2.50 for the next $5M;
- $3.25 for the next $5M.

Shared look for J (a textbook skin, NOT the research-canvas cream and NOT the Cap Room's dark
register) is SPORTS ALMANAC PRINT, bright and bold, made for 11-year-olds:
- ground: newsprint off-white #F6F4EE; ink: #111111;
- #007A33 green only for the student's own desk;
- signal orange #E4572E for the five lines;
- type: Archivo Black (heads), Source Serif 4 (reading), IBM Plex Mono (numbers, tabular);
- big numerals, thick rules, generous hit targets (≥44px), and no card grids.

Each board is 1440×900 and interactive. It has the bottom-left COMMERCIAL LENS line and the
bottom-right status line, and it ends with a one-line thesis in small type ("A native textbook, in
this model, is …").

------------------------------------------------------------------------------------------------
## J1 · THE CHAPTER IS A ROUTE — "a chapter is a route through one system; the lesson is what the
## system did to you"
File: TextbookChapter.dc.html · Status: DESIGN PROPOSAL (the lesson it draws on EXISTS TODAY)

TOP BAND: THE ROUTE. The chapter "M1 · The Cap" is drawn as a route across ONE league-year, not as
a table of contents. Three stops sit on a horizontal season calendar:
- JUL "The Window";
- DEC "The Season";
- FEB "The Deadline".

Under the calendar runs YOUR DESK'S THREAD, one continuous green line carrying your books from stop
to stop. A small note at each join: "Your July roster is December's problem."

The current stop is July, open. Future stops are sealed (dashed). "You'll get there by living July."

CENTER: THE FIVE LINES, drawn as five different kinds of object on one vertical payroll scale
($140M–$230M). Each object is a different drawing, not five coloured bars:
- the floor ($148.465M) as a pushing floor-plate with arrows up ("must reach");
- the cap ($164.961M) as a gate with two small side doors labelled "exceptions";
- the tax line ($200.428M) as a meter that starts running, with a coin slot and a tally;
- the first apron ($209.015M) as a rack where three tool shapes hang and get removed when you
  cross it ("sign-and-trade · taxpayer MLE · …", AUTHORED short list, verify);
- the second apron ($221.686M) as a wall.

Your desk is a green marker at its payroll. Start at $158.2M (AUTHORED: "a July desk, illustrative").

THE ACT: one free agent on the board, "a starting-calibre wing". Use a real-looking name only if
it is marked "illustrative" (prefer "Wing A · asks at least $14.0M"). The student types a number
(a stepper from $14.0M to $22.0M in $0.5M steps) and commits, or passes. On commit:
- the marker moves;
- every line the marker crosses REACTS as its kind (the gate closes behind you, the meter starts
  and shows the COMPUTED tax, tools come off the rack);
- a small receipt freezes beside the scale: "You paid $X. The distance to your next line was $Y.
  That distance is gone."

A toggle "Another desk" shows the SAME player signed at the same number by a desk starting at
$196.0M (AUTHORED). Its marker crosses the tax line, and its receipt shows the COMPUTED tax.
Headline: "The same player cost two desks two different things."

RIGHT RAIL: THE LADDER OF MEANING. Five rungs fill one at a time, only after the act that earns
each rung. This is the medium's version of "the teacher names it":
1. Your moment (RECORDED): "You paid $16.5M for Wing A and lost your room under the cap."
2. The class (placeholder, dashed: "fills when the class reveal runs").
3. Real sports (OBSERVED, with source line): Boston's apron summer, June 2025. Holiday and
   Porziņģis were moved partly to get under the second apron (fixture facts, verify).
4. The name: "What you just gave up has a name: OPPORTUNITY COST." The formal term appears ONLY
   here, only after the act.
5. Outside sports (AUTHORED example): "A family with $1,200 left this month: the new phone is
   also the three months of guitar lessons it replaces."

Rungs 1, 4 and 5 fill in the prototype. Rung 2 stays dashed with a note pointing to J2.

LEAVING THE STOP: a button "Close July". The thread carries your ending payroll forward to the
December stop (unsealed now, showing "December opens with your books: $X · tax meter running /
not running").

Thesis line: "A native textbook, in this model, is one system you keep living in, where each
chapter hands you the state you left and the idea gets its name only after you felt it."

COMMERCIAL LENS: "Hypothesis: schools buy courses, not simulations. The unit is a course seat per
student per year; the carried thread is what makes it a course and not a game."

------------------------------------------------------------------------------------------------
## J2 · THE CLASS REVEAL — "fourteen desks, one set of lines: the class is the dataset"
File: TextbookReveal.dc.html · Status: DESIGN PROPOSAL

This is the PROJECTOR surface of the same moment, plus a teacher's director strip. There are
fourteen desks (pairs), named "Desk 1" … "Desk 14" only: no student names, no private data.

MAIN (projector, huge type, legible from the back row):
- One horizontal payroll scale, with the five lines drawn as the same kinds of object as J1,
  simplified for distance.
- Fourteen markers sit on the scale where each desk ENDED July. Their starting positions are
  ghosted (outlined). All values are AUTHORED, illustrative, and labelled so once.
- Three reveals, triggered by the teacher:
  1. REVEAL ENDINGS: markers slide from start to end, one desk at a time, in about 3 s with a skip
     option.
  2. THE SAME PLAYER: Wing A was signed by three desks at three prices ($14.5M, $17.0M, $21.0M).
     Draw three receipts side by side. Each shows what that signing cost THAT desk: cap room
     lost; tax COMPUTED with the simplified brackets for the desk over the line; tools lost for
     the desk over the first apron. Headline: "Same player. Three desks. Three different
     prices."
  3. THE PASSERS: two desks passed on Day 1. Show what they were able to do on Day 3 that others
     couldn't ("Desk 9 still had the cap-room exception on Day 3"). Absence of an act is recorded
     as a choice with a consequence: "Passing is a choice. It cost them the Day 1 board and
     bought them Day 3."

TEACHER DIRECTOR STRIP (left, narrow, visibly separate: a clipboard edge; it would be on /teach,
not on the projector; label it "Teacher's screen, not projected"). Six short fields for the
current reveal: NOW · WATCH FOR · DON'T EXPLAIN YET · ASK · TRIGGER · SYNTHESIS. Example for
reveal 2:
- ASK: "Desk 4 and Desk 11 paid almost the same. Why did it hurt Desk 11 so much more?"
- DON'T EXPLAIN YET: "Don't say 'opportunity cost' until a student describes it."
- SYNTHESIS: "Then name it."

Buttons on the strip trigger the reveals. Each reveal has a manual fallback ("Step through by
hand"); none is timer-only.

Thesis line: "A native textbook, in this model, is a class of people living the same system, so
the class itself becomes the evidence the idea is built from."

COMMERCIAL LENS: "Hypothesis: the reveal is what a teacher shows the principal. Classroom
licences sell on the room, not on the individual screen."

------------------------------------------------------------------------------------------------
## J3 · THE EXERCISE IS A DOOR — "the end-of-chapter question is a sealed moment in a different
## system"
File: TextbookTransfer.dc.html · Status: DESIGN PROPOSAL · the evidence rules EXIST TODAY in BOW
Decision Challenges

TRANSFER WORLD (AUTHORED, fictional, outside sports, labelled so): "Ada's Bakery · Saturday ·
one oven · 6 hours".
- Two promises and a few rules, drawn as the same five KINDS of object as J1, now in a kitchen:
  - COMPULSION: the café's standing order, 4 trays of rolls by 10:00;
  - PERMISSION: the oven's 6 hours, with an "exception" for a second shelf that costs heat time;
  - PRICE: after 4 hours the electricity rate doubles, so a meter starts;
  - CONFISCATION: after 5 hours the oven's second shelf is lost (too hot);
  - PROHIBITION: the inspector's 6-hour limit, a wall.
- Oven time is a strip of 24 quarter-hour slots. Rolls, pies and bread take 2, 4 and 3 slots.
- The student fills the strip by dragging trays. The keyboard alternative is required: select a
  tray, then press Place.

THE SEALED QUESTION (before any outcome shows): "The café calls at 08:30: can you add 2 trays of
rolls? Before you answer, say what you'd give up." The student must first pick WHAT GIVES (one
of the trays already placed, or "nothing: I'd use the second shelf"), then answer yes/no. Then the
outcome computes (COMPUTED): it shows the forgone trays and the meter.

EVIDENCE STRIP (right, the teacher's view, visibly separate; label "What the teacher sees").
Follow the BOW evidence laws exactly:
- A trace, not a score: "Named the forgone tray before seeing the outcome: yes (at first
  opportunity, standard tools)."
- Rubric wording from Decision Challenges: level 5 = correct at first opportunity with standard
  tools. The prototype shows the level ONLY as the sentence, never as a number or a percent.
- If the student skips the "what gives" step, the strip says "Not observed. The question was
  answered without naming a trade-off." It never says zero, never "mistake", "wrong", "careful"
  or "risky".
- Show a link from each observation back to the student's act ("from: 08:31 placed pie over
  rolls").
- One line: "Written explanations are read by the teacher, not scored by BOW."

Thesis line: "A native textbook, in this model, tests an idea by dropping you into a different
system where it's still true, and the teacher sees how you thought, not just what you chose."

COMMERCIAL LENS: "Hypothesis: evidence is what a district pays for. Transfer tasks across worlds
are the assessment product; the course is the engagement product."

Look for J3: the same almanac print family, but the kitchen is warmer:
- flour white #FBF8F2; oven black #1C1A17;
- heat orange #E4572E stays the line colour.
The evidence strip is plain white paper with black text. Nothing green, because green is the desk.
