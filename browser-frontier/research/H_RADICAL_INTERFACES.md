# H · Radical Interfaces
RESEARCH · 29 Sep 2026 · design reading, not evidence of use

## 0. The claim

The web's verbs (link, back, bookmark, search) assume the far end is a document that does not change when touched. An executable system has state, time, cause, actors and rules, so its natural verbs are physical ones: lift, turn over, point, walk to where two worlds part, pick up. My strongest idea is **TAKE IT OUT: navigate a system by removing things from it.** A person's history in a system is not a list to scroll but a row of acts they can lift out one at a time while the present re-forms; what changes is what that act did. Authority is what you can lift. Path dependence is what turns to dashes. "Our decision caused that?" is answered by experiment, not narration. It is also the smallest falsifier of "new medium": can someone learn by intervening on the past what they cannot learn by reading it? Four more models redefine the other verbs (THE PARTING, THE KIT, THE PAPER, ON CALL). One rule runs through all five: **affordance follows seat**.

## 1. What the incumbents get wrong or leave out

- **Doors, not movement.** Clock Hall, Arrive, Handover, Council, Mechanism and Handshake are ways in, into a role, into a fork. Inside, movement reverts to page habits: edges, lists, a river of doors, an address line. That is "ticks rather than executes" in interaction terms. Wave 3 was right to stop inventing front doors; these models are about what you do inside.
- **History is scrubbed, never touched.** Council and Pull edit values or declare actors; the Living fork reconciles forward. No incumbent lets a person remove a decision and see what it did, so attribution falls to narration or guesswork.
- **Disagreement is one fork against Reality.** Nothing serves two people's forks, or a hundred. What every world agrees on despite different choices is the best evidence of a rule, and it goes unused.
- **Responsibility is entered once.** Handover ends at the signature; Clock Hall reports what lapsed afterwards. Nothing says how a system reaches you, who covers your seat, or how far that cover's authority runs.
- **Truth lives in the picture.** The seven textures are representation; a third-party runtime that draws the picture can draw a lie. Trust has to be read through a protocol. Also: Council's "Keep is blocked while a needed seat is unset" puts a chore in front of a newcomer's curiosity; here you see consequence first.

## 2. Concepts

Each model replaces a web verb with a gesture that survives voice ("take out the Week 6 swap") and spatial hands. All five pass the no-basketball test by construction: their surfaces are sentences, dates, money and dials.

| Model | A link becomes | Back becomes | Follow becomes | Search becomes |
|---|---|---|---|---|
| H1 Take It Out | lifting an act | putting it back | watching which acts still count | which of my acts counted |
| H2 The Parting | the place two worlds part | the last place we agreed | watching Reality walk through the crowd | doors where worlds part most |
| H3 The Kit | pointing an instrument | compass (record) or probe tail (cause) | clamping an instrument | who else reads like this |
| H4 The Paper | turning the paper over | the clause that created it | holding a paper | papers with no holder |
| H5 On Call | a ring | the return report | holding a seat (capped) | being needed |

### H1 · TAKE IT OUT — lift any act out of a record; the present re-forms without it

**Pitch.** Pull any decision out of your history. The world replays without it. What changed is what that decision did.

**Beats the obvious at** attributing an outcome to one act. A what-if panel edits the present; an impact paragraph narrates. A lift runs the experiment with luck held fixed and shows which later acts needed the one you pulled. Ablation and selective undo are established techniques; new here is making them how a person moves through their own record, with seat-scoped authority. Council asks "what if this were different?" one cut at a time and makes you set every actor first; a lift asks nothing, and whatever depended on the act says so. Council suits needing an alternative; this suits attribution.

**Walk (Boston · Year Two, then Reality)**
1. **First contact** (newcomer): a strip of your acts in plain sentences ("Week 6 · you swapped Derrick White for Jimmy Butler", a BOW World act) under the present (payroll ≈ $222.8M; projected tax ≈ $34.2M, authored World rule). Prompt: "Hold an act to lift it out." Money and a score need no basketball.
2. **Orientation:** the strip is the address. Left end: where this world left Reality. Notch: Week 9. Your seat's acts inked; Reality's record ghosted beneath. "What counted" orders acts by how many facts each touched, never by good or bad.
3. **Entering a role** (operator): your seat is the set of acts you may lift. Outcomes (Denver's win) are not acts; a League ruling is another seat's act and is locked: "not your act." Authority is what you can take out.
4. **Act and propagation:** shed salary in Week 10. Needles move and earlier acts re-weigh: the Week 6 swap now counts for less.
5. **WHY?:** tap the tax figure. The engine lifts each act in turn; those that moved it stay inked, ordered by size; the rest go grey: "nothing changed." A zero is a finding.
6. **WHAT IF? / fork:** the lift is the fork. Keep it: "Your branch · Week 6 swap omitted · cut with hindsight."
7. **Compare:** two needles per dial, yours and without-it. Only the act's footprint differs. Later acts that needed it turn to dashes: "impossible without Week 6."
8. **Return to the record:** put it back; the act snaps in and the state hash matches the record. On Reality (fan) a lift answers rules-derived facts (COMPUTED); other clubs' later moves go UNKNOWN, dashed, never guessed.
9. **Following over weeks:** weights stay live. Clamp one: "tell me when Year One's funding choice stops reaching the score." A student predicts before each lift; an agent's acts are liftable and stamped as its own.

**Canonical vs representation.** Canonical: act log, reducer, per-event random keys, engine version. A lifted world is derived and becomes a fork only when kept. Redraw only: strip order, bars, dashes, needles.

**Scale.** A lift is (base hash, omitted act). Counterfactuals are deterministic, so they memoize on (record hash, omitted act, engine version): a public record's counterfactuals are computed once for every viewer, private ones per owner. Replay only the backward slice of the queried fact (Weiser, "Program Slicing", ICSE 1981), so cost tracks the fact's ancestry, not world size. A person's record is tens of acts, so weighing all is tens of slice-replays (estimate).

**Cross-domain.** Chemistry: the lab notebook is the record; lift "heated to 60 °C" and the equilibrium position falls back, ceteris paribus as a gesture. Supply chain: lift "single-sourced the MCU" (yours), not "the fab fire" (locked): what was in your hands and what was not.

**Label.** PROPOSED PLATFORM CAPABILITY (seed: the Live World page folds one act log to one SHA-256 state; built, not run on the real store). Lifting on-court outcomes on Reality: SPECULATIVE FRONTIER. **AI cost:** lift, replay, weights NO AI REQUIRED; plain-words summary SMALL / CHEAP MODEL; a named model for other actors' moves FRONTIER MODEL OCCASIONAL. **Segments:** ORIENT · ACT→STATE · WHY · WHAT IF · FORK · COMPARE · RETURN · FOLLOW.

**Fails because.** (1) Luck: with one random stream, removing an act reshuffles luck and the weight measures noise; every draw must be keyed to its event, so both runs use the same draw for the same purpose (common random numbers). (2) Overdetermination: two acts that decide only together look weightless alone; pairs cost O(n²). (3) On Reality only rules-derived facts can be lifted. (4) Weight reads as blame to a 10-year-old: say "counted", never "cost us".

**Cheapest falsifying test.** Wizard-of-Oz on a pre-computed Year Two record of about nine acts (authored beyond the fixture's two). 16 people, 8 per arm, half with no basketball. One arm gets the plain chronological record and final state; the other gets lifting from a lookup table. Ask which act made the tax bill and what lifting another would change. My bar: lifters name a non-obvious cause and predict a side effect in ≥ 6 of 8 against ≤ 3 of 8 readers, and lift a second act unprompted. Kill if not.

### H2 · THE PARTING — go to where worlds first part; what never moves is the rule

**Pitch.** Don't compare two worlds side by side. Go to where they first part. Lay a hundred on top of each other: what never moves is the rule; what spreads is the choice.

**Beats the obvious at** compare and the class reveal. A side-by-side lists N differences with no order; a leaderboard ranks outcomes and teaches "win". This orders differences by where they begin and separates what was forced from what was chosen. Council and Arrive's WHAT IF edge make one fork; this reads many at once and navigates by disagreement.

**Walk**
1. **First contact** (student, newcomer): a door named by its question, sealed: "Year Two · Week 6 · Golden State calls about Butler." No crowd, no counts. You act; then the sheet opens. Lines are money and wins; no basketball needed.
2. **Orientation:** header "Boston · Year Two · from Week 6 · 12 pairs' worlds · yours ringed." One line per derived fact (payroll, projected tax, wins); a tick for Reality where the door is on the record, dots for worlds. Given facts are not drawn.
3. **Entering a role:** tap a dot: "Sit where she sat." You enter that world at the parting with her knowledge and none of yours; a ledger says what you gained and lost. Names on shared screens stay fictional.
4. **Act and propagation:** as Weeks 7 to 9 run, dots move along their lines. Facts that stack although choices differed are drawn outlined as a rule: "same in every world."
5. **WHY?:** dots pile up just under the tax line. Tap the pile: the rule that makes it appears, with its source. The teacher, not the screen, names the economics.
6. **WHAT IF? / fork:** tap a spread line: it scrolls to the first act where dots separate, in words (the crux). "Try her move" forks you there.
7. **Compare:** pick two worlds. The browser walks to the last place they agreed, then the first place they parted, and offers a concession: "adopt her value for this assumption." Did the gap close? If not, it was not the crux; go on. Human against agent works the same.
8. **Return to the record:** Reality's tick is on every line; one tap goes to the nearest recorded moment.
9. **Following over weeks:** follow a door. As Reality arrives its tick walks through the crowd; when it leaves every world's range the line says "no world here had this." Fan example: "17 Jun 2017 · Philadelphia calls about No. 1."

**Canonical vs representation.** Canonical: each fork (base hash + acts) and per-door sketches; first parting and agreement are computed from logs. Redraw only: the sheet.

**Scale.** Forks are content-addressed with shared prefixes, so storage tracks distinct acts. First parting of two forks: walk both hash chains from the shared root (git's merge-base does this for commits). The crowd sheet reads a mergeable sketch per (door, fact), updated when a fork ticks; it never scans forks. "Worlds like mine": simhash over act sets. Manku, Jain and Das Sarma (WWW 2007) ran simhash over a multi-billion-page repository (8 billion pages, 64-bit fingerprints, Hamming distance ≤ 3).

**Cross-domain.** Chemistry: two hundred students start from different concentrations and every world's Q converges on one K at a given temperature; the constant is what all worlds agree on. Supply chain: everyone's response to the fab fire agrees on the binding lead time and parts over freight versus spot buy.

**Label.** PROPOSED PLATFORM CAPABILITY (seed: /board class reveals in BOW Economics Live). **AI cost:** parting, agreement, pile-ups NO AI REQUIRED; naming a crux in words SMALL / CHEAP MODEL; seeded worlds for thin doors FRONTIER MODEL OCCASIONAL, offline, labelled GENERATED. **Segments:** DISCOVER (doors where worlds part most, ranked by spread, never popularity) · ROLE · WHAT IF · FORK · COMPARE · RETURN · FOLLOW.

**Fails because.** (1) Cold start: three forks show nothing; seeded worlds are stippled and counted apart. (2) Herding: a crowd seen before acting biases the act; hence sealed. (3) Popularity as authority: no mean, rank or "best world"; worlds are self-selected, so the sheet says "worlds people made". (4) Trivial agreement: only derived facts count as evidence. (5) Saez (2010) found bunching at some tax kinks and none at others, so an absent pile-up is a finding, not a bug.

**Cheapest falsifying test.** 16 adults, 8 per arm, make the Week 6 choice under one ruleset. One arm then sees a ranked table, the other the sheet, and is asked "what did the rules force on everyone; what was a choice?" My bar: the sheet arm names the pile-up as rule-caused unprompted in ≥ 6 of 8 against ≤ 3 of 8, and the door shows at least one derived fact that agrees though choices differed. Kill if no door does.

### H3 · THE KIT — the browser is what you hold: five instruments, pointed at anything

**Pitch.** You carry a gauge (how close to a line), a probe (what made this, what it touches), a clock (when it comes due), a loupe (how we know it) and a compass (which way is the record, how far). Point any at anything: a contract, a department, a club, the League. Scale is which thing you point at, not which tool you hold.

**Beats the obvious at** learning and following across many systems. A dashboard makes every system teach its own screen; an inspector hides behind F12. Here the inspector is the front door and the system is drawn however its runtime likes. A number never stands alone: each reading is a distance to a named line plus the smallest change that would flip it (Wachter, Mittelstadt and Russell, 2018). New versus the seven textures and Mechanism: they draw epistemic state inside the picture; the Kit reads it through a protocol and carries it between systems.

**Walk**
1. **First contact** (newcomer): a hand holding the gauge, aimed at the nearest line. "Tax salary $198.72M against a tax line of $200.428M: $1.7M under. Teams pay a penalty above the line. Flips if net salary added exceeds $1.7M." Cap payroll (≈ $203.6M) reads on a second gauge, against a different line [verify all figures].
2. **Orientation:** compass and clock, not an address bar. Needle steady: on the record. Swing: a fork, length = distance. The ring names the kind of place (Reality, recorded moment, frozen state, World, your fork, public fork, model); the clock names the system's own time. The address line stays as the string you share.
3. **Entering a role:** hold a seat and the gauge becomes a lever; the needle moves only for the seat's holder. Drag it across the line; the system drafts the act that would do it; release and nothing forks until you keep it. An agent uses the same instruments through the same protocol.
4. **Act and propagation:** the act moves needles and starts clocks; the probe's tip lights what it touched. Propagation is felt as instruments moving, not a page redrawing.
5. **WHY?:** point the probe tail-first for upstream, tip-first for downstream. Back means why; forward means so what.
6. **WHAT IF? / fork:** hold the reading, push the needle, the compass swings. Keep it and it is stamped.
7. **Compare:** on a fork each dial has two needles, white for the record, ink for here. Two systems' gauges read the same relation side by side (Boston's headroom, Golden State's).
8. **Return to the record:** tap the compass needle; it leads the shortest way back, one divergence at a time. Optional clicks, louder near differences, give an eyes-free reading.
9. **Following over weeks:** clamp a gauge on the thing. It sits in that thing's own place (a ring on the roster board in the room, a lamp in voice, a mark on a paper) and speaks only when the needle crosses its line; pick it up to see its trace.

**Canonical vs representation.** Canonical: the system's state and its reading manifest; a clamp is per-person state. Readings are derived; needles redraw.

**Scale.** Each system publishes a manifest of typed relations (lines with margins, causes, clocks, sources, seats); instruments are typed queries over it. A billion systems cost the person nothing new to learn and the platform nothing per system to draw. Precedent: the accessibility tree. WAI-ARIA 1.2 (W3C Recommendation, 6 Jun 2023) lets one screen reader operate pages it has never seen; it reads meaning, not pixels, so 2D, voice and spatial all work. The cost moves to whoever writes the manifest; for authored systems it is a by-product of the rulebook (a line is already a rule, a clock already a deadline).

**Cross-domain.** Chemistry: gauge = buffer capacity before pH leaves its band; probe = what was added; clock = time to equilibrium; compass = which fork (temperature). Supply chain: gauge = safety stock before the line stops; clock = lead time; probe tail = the fab fire.

**Label.** PROPOSED PLATFORM CAPABILITY for authored systems; SPECULATIVE FRONTIER for compiled ones, and for the loupe held over an article's number (media: source, date, does the rules engine reproduce it). Seeds: Boston spatial's state-bound surfaces and PLAYED / ESTIMATE / NOT KNOWN arena nights (unmerged). **AI cost:** readings NO AI REQUIRED; voice request to instrument and target SMALL / CHEAP MODEL; manifests for unauthored systems FRONTIER MODEL OCCASIONAL. **Segments:** ARRIVE · ORIENT · KNOWLEDGE+AUTHORITY · ACT · WHY · COMPARE · RETURN · FOLLOW.

**Fails because.** (1) It becomes a HUD strip of gauges, which is a dashboard: instruments live on the thing read, and only readings tied to a line exist. (2) Five may be too many to keep; three might do. (3) A system with no typed relations cannot be read: the Kit says "cannot read" and stops. (4) The lever invites tinkering over reasoning. (5) One instrument across systems can imply false equivalence; units print on the dial.

**Cheapest falsifying test.** Cold-card transfer, paper only. 8 newcomers get a one-page card of the five instruments and a paper mock of Boston Reality, then, with no further instruction, a mock of Harrow's fab fire and one of a buffer solution. Bar: ≥ 6 of 8 use ≥ 3 instruments correctly on the new system without asking what one is. Control: a tile dashboard of the same numbers, which should do worse on "what would flip it?" Kill if transfer < 5 of 8.

### H4 · THE PAPER — the only link is a paper with two sides and a clock

**Pitch.** Everything a system requires or promises is a paper: who owes what to whom, by when, and what happens if nobody acts. You move by turning papers over.

**Beats the obvious at** deadlines and bargaining. An inbox lists tasks someone wrote; a paper is derived from the rules, so nothing is forgotten, it shows the other side, and it prints its default. Handover signs open matters at entry and Handshake is one signed act; the paper is the persistent two-sided object before and after either, and you can read both faces before signing one.

**Walk**
1. **First contact** (newcomer): "Boston Celtics · Reality" opens on one paper. "Boston owes the League tax on payroll above $200.428M, counted after the last game. Tax salary today $198.72M: $1.7M under, so today $0. If nobody acts: $0." Others fan beneath: contracts, a 2031 second-round pick from the three-team Porziņģis deal [verify who owes it], a roster minimum. Who owes what to whom, by when: no basketball needed.
2. **Orientation:** the paper's edge is its address: world stamp (Reality or your fork), clock, and which face you read from.
3. **Entering a role:** take a side. As Boston you hold the papers where Boston is debtor; knowledge narrows to that face. A paper whose side is unheld is open, which is how you find a seat.
4. **Act and propagation:** settle, assign or waive; the paper changes on the other face and a new paper lands in the counterparty's stack with its own clock. You see only what the shared paper says: no god view.
5. **WHY?:** turn to the origin: the clause (source, authored or computed) and the acts behind the amount. Year Two: "$34.2M = 1.5 × $22.8M over the $200M line; authored World rule; the Week 6 swap is one of the acts behind it."
6. **WHAT IF? / fork:** redline. Edit a clause; both faces re-execute; each side's rules annotate in their own voice. An agent may hold the other face; its edits are marked. Lapse is the built-in what-if: the paper always prints "if nobody acts."
7. **Compare:** recorded and redlined papers face up; the difference is the redline, with consequences in each side's margin.
8. **Return to the record:** fold the redline away; the signed paper is stamped RECORDED underneath.
9. **Following over weeks:** hold a paper you have no side in. Its clock paces you; the parties' marginalia since you last looked show on its edge. A pick due in 2031 is a paper that outlives any session.

**Canonical vs representation.** Canonical: obligation records (parties, amount as a function of state, clock, default, source clause, performance). A redline is a draft fork of the paper until both sides sign. Redraw only: the paper and its faces.

**Scale.** Papers are sparse typed rows keyed by party; a person's working set is hundreds however large the world (estimate: 10^9 systems × ~10 open papers ≈ 10^10 rows, sharded by party). Due times run on hierarchical timing wheels (Varghese and Lauck, SOSP 1987: O(1) start and stop; Kafka uses them). No global graph: two systems are adjacent only through a shared paper, which is also privacy.

**Cross-domain.** Chemistry (weakest): conservation and K behave like standing obligations, "the mixture owes Q = K", but nature has no debtors and the metaphor may mislead. Supply chain (native): purchase orders, lead times, take-or-pay; the fire lapses one paper and each dependent paper shows its new default.

**Label.** PROPOSED PLATFORM CAPABILITY where a formal rulebook exists (seeds: the CBA engine, proven by exhaustive sweep; two-sided league tables, offer → signed → delivered, in the unmerged World branch); SPECULATIVE FRONTIER without one. **AI cost:** derivation, defaults, rule annotations NO AI REQUIRED; an agent on the other face FRONTIER MODEL OCCASIONAL. **Segments:** DISCOVER (open papers) · ENTER/ROLE · KNOWLEDGE+AUTHORITY · ACT · WHY · WHAT IF · COMPARE · FOLLOW.

**Fails because.** (1) Only rulebook-complete systems have papers. (2) It reads as an inbox, homework, a World that punishes. (3) Physics has no debtors. (4) A flipped face leaks if seat knowledge is not enforced. (5) Deadline pressure on a 10-year-old.

**Cheapest falsifying test.** 8 newcomers, 60 seconds on the printed Boston tax paper, then three questions: what happens if nothing changes; who could change it; what happens first if Boston signs a $3M contract. Bar: ≥ 6 of 8 answer all three from the paper alone and can say what the League wants after seeing its face. Control: the same numbers as tiles. Kill if the control matches.

### H5 · ON CALL — hold a few seats; systems ring you; standing orders answer when you can't

**Pitch.** You hold at most three seats. When a seat's clock needs a person, its system rings with a 20-second brief, a deadline and what happens if you don't answer. Away, your standing orders answer. Back, you read what was done in your name.

**Beats the obvious at** following over weeks and putting agents in seats. A notification says "something happened"; a chat agent acts for you with no boundary. A ring carries its own default, the away case is answered by authority you wrote, and every covered act is stamped by whom. Clock Hall reports what lapsed afterwards; this answers before it lapses, bounds the answer, and reports after.

**Walk**
1. **First contact** (newcomer, fan): no page opens. A friend, an article or a teacher rings: "It is 5 Feb 2026, minutes to the deadline. Chicago calls about Simons." You are in a fork of that recorded moment (Reality cannot be acted on). The brief: the offer, the gauge (tax margin), the deadline, the default if you say nothing. No basketball vocabulary.
2. **Orientation:** every ring opens with a spoken five-slot line: "Boston · Year Two · Week 10 · your branch · you: Owner," then your last act there.
3. **Entering a role:** picking up is entering, for the length of the call. You see what the seat sees; a ledger says what you give up.
4. **Act and propagation:** the call ends with a receipt, not a page: what your act put on other seats' desks and what moved on yours.
5. **WHY?:** every ring says why it rang: the rule and the clock ("deadline in minutes; this paper defaults to decline").
6. **WHAT IF? / fork:** "Hold" is a dry run: your answer runs in a private fork and reads back its receipt before you commit (Datomic's `d/with` returns a database value including speculative facts without committing).
7. **Compare:** each answer you give by hand is also run through your standing orders. Where they differ the browser says so; the exceptions show what you actually decide on.
8. **Return to the record:** while you were away your orders answered two rings; each is a door to its moment with the clause that fired. Take one out (H1) or ratify it.
9. **Following over weeks:** to take a fourth seat you put one down: to a person, to orders, or to an agent covering under written limits. Silence has a receipt: "Nothing has needed you since Thursday. Watching 3 lines; nearest: tax margin $1.7M."

**Canonical vs representation.** Canonical: seat registry, standing orders (bounded authority), ring log, and every act stamped by you, by orders, by an agent, or by default. Redraw only: the call and its receipt.

**Scale.** Push is indexed by seat, not system: system → timing wheel → per-seat inbox. A person holds a capped handful; vacant seats fall to orders or defaults, so billions of systems need no attention they have not earned. Ring budget: control rooms treat up to 12 new alarms an hour as the most an operator can manage (EEMUA 191 / ISA-18.2 / IEC 62682, as summarised by Chemical Engineering); a personal browser should be orders of magnitude quieter.

**Cross-domain.** Chemistry: reactor operator on call; alarm at the pressure line, interlock as standing order, shift log as return report (industrial alarm management is the precedent). Supply chain: reorder-point policy as standing order: below the safety-stock line, spot-buy up to a limit, else ring the buyer.

**Label.** PROPOSED PLATFORM CAPABILITY; an agent holding a seat is SPECULATIVE FRONTIER (production AI actors in seats do not exist; seed: Live World's seats by lease). **AI cost:** rings, timers, orders that are rules NO AI REQUIRED; drafting orders from your past acts SMALL / CHEAP MODEL; discretion when no clause applies FRONTIER MODEL OCCASIONAL. **Segments:** ARRIVE (by call) · ROLE · ACT · RETURN · FOLLOW.

**Fails because.** (1) Alarm fatigue: control rooms had to learn this; it needs a hard ring budget. (2) Consent and liability: acts done in your name need explicit bounds and stamps; impersonation risk. (3) A World that runs while you are away may punish, not compel. (4) A seat cap annoys power users. (5) Third-party systems could ring as spam; only seats you accepted may.

**Cheapest falsifying test.** Three weeks, SMS only. 6 adults (3 with no basketball) each hold one seat in a hand-run Year Two; a person plays the engine. Rings carry brief, default and deadline; a form takes standing orders; a Monday email is the return report. Measure answer rate, reports read, orders edited after exceptions, "ah, that's why" remarks. Kill if fewer than half of rings are answered by week 2 or reports go unread.

### Ranking (usefulness × originality, 1–5 each; my judgments, not measurements)

| Rank | Model | U | O | U×O | Why |
|---|---|---|---|---|---|
| 1 | H1 Take It Out | 5 | 4 | 20 | Payoff is the classroom's success sentence, "Our decision caused that?"; needs only deterministic replay. Ablation is known, which dents originality. |
| 2 | H2 The Parting | 4 | 4 | 16 | The class reveal and two-person disagreement done properly; cold start and herding are real. |
| 3 | H3 The Kit | 4 | 3.5 | 14 | Broadest, and the one that must survive chemistry and supply chains; a HUD is one bad sprint away. |
| 4 | H4 The Paper | 4 | 3 | 12 | Contract-lifecycle tools already track obligations; new are derivation from rules, the flip, the printed default. |
| 5 | H5 On Call | 3.5 | 3 | 10.5 | Notifications, on-call rotas and standing orders exist; new are the seat cap, authored absence, orders versus judgment. |

If H1's test shows no gain over the plain record it falls below 9 and H3 leads. Strongest billions cases: H3 (a protocol, nothing per system to draw) and H2 (content addressing, sketches, simhash).

**Considered and folded or cut.** A priced timeout in a World that won't wait (into H5); the challenge flag, adjudicating a fact from the record (into the loupe); must / may / can seat sheets after Hohfeld (into H4); stacked transparent forks whose stacking order shows path dependence (into H2); search by situation, "who has been in this jam" (into H2's nearest worlds and H3); same-instant seat swap (into H4's flip and H2's "sit where she sat"); an ambient silent browser (into H5).

## 3. Your two to prototype: H1 and H2

Highest two scores; they share a fixture (Year Two, Week 6) and a fork format (base hash + acts), so the second is cheap once the first exists; both have a path to real students in a BOW Economics Live class. For breadth over depth, swap H2 for H3: its paper transfer test costs an afternoon.

### H1 TAKE IT OUT: mandatory builder states
Fixture: Year Two. It has two operator acts; the builder authors six or seven more, labelled AUTHORED.
1. **Record at rest:** strip of ≥ 8 acts in plain sentences; present at right with figures; Reality's record ghosted beneath; divergence at Year 0.
2. **Weighed:** "What counted" reorders by facts touched; tapping a fact orders by effect on it; bars marked COMPUTED; zero-effect acts kept, grey, "nothing changed".
3. **Predict, then lift:** tap an act; a dial asks "what will the tax be?"; hold to lift; the act rises and the present re-forms live; prediction and result sit on one dial.
4. **Dashes:** later acts that needed the lifted one turn dashed with the reason; tapping one shows which lifted act it needed.
5. **Locked:** lifting a League ruling is refused with whose act it is and how to fork with their seat set.
6. **Kept:** the stamp "Your branch · Week 6 swap omitted · cut with hindsight"; a gap in the strip; play on; new acts append.
7. **Two at once:** lift two; if the pair differs from the sum of singles the screen says "these matter only together".
8. **Put back, then weeks later:** acts snap in; hash matches the record; after new acts, weights carry "then / now" marks.

**The moment that must feel impossible:** holding an act out of your own past while the present re-forms around the hole and later acts that needed it turn to dashes, with luck held fixed so the difference is the act and nothing else.

**Anti-pattern:** a what-if form of sliders on the present; a time scrubber (it moves time, not causes); an AI paragraph in place of replay; ranking acts as good or bad; reseeding luck so every lift looks different.

### H2 THE PARTING: mandatory builder states
Fixture: the Week 6 door; 12 pairs' worlds, or scripted stand-ins labelled GENERATED.
1. **Sealed door:** the moment named by its question; no crowd, no counts; "you'll see how other worlds went after you act."
2. **Your act:** the moves (keep, swap, counter), unranked; your dot is committed.
3. **The sheet opens:** one line per derived fact; dots for worlds, yours ringed, Reality's tick if on the record; given facts absent; agreeing lines outlined as rules.
4. **Where they part:** tap a spread line; it scrolls to the first act where dots separate, in plain words.
5. **Pile-up:** dots bunch under the tax line; tap; the rule appears with its source; no explanation of behaviour.
6. **Two worlds, one crux:** pick two dots; walk to the last place they agreed, then the first place they parted; concede one assumption and re-run; gap closed or not.
7. **Sit where she sat:** enter another fork at its parting; ledger of gain and loss; fictional names.
8. **Reality arrives / thin crowd:** Reality's tick moves on the lines and the sheet marks "no world here had this"; with few worlds the sheet says so and stipples GENERATED ones apart.

**The moment that must feel impossible:** the rule appearing as a shape made of people's choices: a dozen worlds pile up under a line nobody drew for them, and tapping the pile names the rule.

**Anti-pattern:** a leaderboard or "best world"; an average line; a tree or network of forks; headline percentages ("62% swapped"); showing the crowd before the person acts.

## 4. What real runtime would have to exist

1. **Deterministic executable systems:** typed acts, versioned engine and rulebook, per-event random keys, content-addressed act logs; a fork is (base hash, acts). Seeds: Live World's fold, the CBA engine, the sourced fact store with `asOf` dates.
2. **Dependency metadata:** each act declares what it reads and writes, giving backward slices; a counterfactual cache keyed by (record hash, edit, engine version).
3. **Reading manifests and an instrument protocol:** typed relations (line, cause, clock, source, seat, record-distance); provenance read from signed or reviewed manifests, so a runtime can draw but cannot certify.
4. **Obligations in the rules layer:** parties, amount as a function of state, clock, default, source clause; two-faced papers with seat-scoped knowledge.
5. **Seat registry and ring service:** capped seats per person; standing orders as bounded authority; act stamps (you / orders / agent / default); timing wheels; ring budget; opt-in per seat.
6. **Population layer:** per-(door, fact) sketches, simhash over act sets, privacy tiers.
7. **Honest absence as a result:** UNKNOWN, "cannot read", "cannot derive".

Cheapest: 1 and 2, mostly seeded. Hardest and least like anything built: 3 (who writes manifests) and 5 (consent and liability of covered acts).

## 5. What would falsify your area's thesis

Thesis: the native movement grammar of an executable-systems browser is made of act-level verbs (lift, turn over, point, part, pick up), not page-level ones. It fails if:
1. People learn no more from lifting an act than from reading the record (H1 test, no gain).
2. Counterfactual weights are unstable or uninterpretable in real Worlds (luck drift, overdetermination), so the median lift teaches a false lesson.
3. A plain "why" paragraph beats the lift and the instruments for speed and accuracy with 10–12-year-olds, or the median person always prefers being told.
4. The verbs only work where a complete rulebook exists and open-world compilation never yields typed acts, obligations or manifests; then all five collapse into flagship fixtures.
5. Seats and rings fail an attention test: alarm fatigue by week two.
6. The minute test: a person cannot say, one minute after first contact, what the thing in front of them lets them do.

**Sources checked 29 Sep 2026.** Manku, Jain, Das Sarma, "Detecting Near-Duplicates for Web Crawling", WWW 2007 (research.google.com/pubs/archive/33026.pdf). Weiser, "Program Slicing", ICSE 1981, pp. 439–449 (dl.acm.org/doi/10.5555/800078.802557). Varghese and Lauck, "Hashed and Hierarchical Timing Wheels", SOSP 1987 (dl.acm.org/doi/10.1145/41457.37504). Wachter, Mittelstadt, Russell, "Counterfactual Explanations without Opening the Black Box", Harvard J. Law & Tech. 31(2), 2018 (arxiv.org/abs/1711.00399). Saez, "Do Taxpayers Bunch at Kink Points?", AEJ: Economic Policy 2(3), 2010 (aeaweb.org/articles?id=10.1257/pol.2.3.180). W3C, WAI-ARIA 1.2, Recommendation 6 Jun 2023 (w3.org/TR/wai-aria-1.2/). Chemical Engineering, "Alarm Management By the Numbers" (chemengonline.com/alarm-management-numbers/). Datomic docs, Transaction Model, `d/with` (docs.datomic.com/transactions/model.html). Common random numbers: PMC3725537. All Boston figures are the shared fixture's and carry its [verify].
