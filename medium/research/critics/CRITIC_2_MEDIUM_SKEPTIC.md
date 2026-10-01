# CRITIC 2 · Medium Skeptic

Independent adversarial review, 2026-09-29.

**What I read.** The ten `medium/` deliverables, the wave-1 reports 00, 01 and 04–07, and the tournament summary. I read no other critic's file. Precedents come from my own knowledge; two were checked on the web this session (StarCraft II replay versioning, Palantir Foundry Scenarios). I am the same model family as the builders, so discount me accordingly.

**Mandate.** Prove BOW is **not** a new medium. Classes: **(a)** the same thing exists; **(b)** recombination, no new user capability; **(c)** genuinely new capability.

**Bottom line.** Every candidate in Contract §4 and §9 and in Time §3 lands in (a) or (b). The closest precedent is a **practice**: poker hand histories, a portable format many tools read, posted to forums, reviewed as "hero" knew each street, argued against "results-oriented thinking". Today, BOW is **hand histories, plus a trade machine, plus Football Manager, for institutions, with an audit log.**

---

## Objections

**S1 · FATAL · §9 offers constraints, not capabilities.**
- **Claim attacked.** "Enforced separations for human readers" (Contract §9).
- **The problem.** A medium is defined by what a person can newly *do*. With VisiCalc you change a number and the model recomputes. On the web you link to anything without asking permission.
- Every §9 item is either a **refusal** (cannot conflate, cannot write back, cannot claim causation, cannot upgrade status) or an unshown hypothesis (#3, #4).
- A regime of refusals is a *standard*, like GAAP, FHIR, SEC Reg G or CONSORT. It is not a medium.
- **The thesis verbs already exist for non-specialists.** Bret Victor's explorables, Nicky Case, PhET, SimCity and NetLogo (with its model library and BehaviorSpace) already let people enter, operate, change and fork systems.
- **Class:** (b) at best.
- **What would change my mind:** one *verb*, not a prohibition, performed by a user who could not do it with the incumbent kit (see below).

**S2 · MAJOR · "OPEN AT T" is already the default read of game replays.**
- **Claim attacked.** A pinned past cut, as an audience knew it, under the rules then in force, is "the native operation no page, spreadsheet or game offers together" (Time §3).
- **False for games:**
  - **StarCraft II.** A replay can be scrubbed to any position and viewed with one player's vision (fog of war is an audience projection). Since patch 2.0.10 (2013), the client loads each replay in the game version it was recorded under, within supported eras. That is era-faithful rules.
  - **Poker.** Hand replayers show hero's seat, with villain's cards unknown until showdown.
  - **Chess.** Lichess opens any move of any game.
- **Class:** (a) in games; (b), a domain transfer, for institutions.
- **What would change my mind:** non-gamers reaching for as-known-at *unprompted*.

**S3 · MAJOR · The knowability ladder is EHR audit trails and assessment process data.**
- **Claim attacked.** "Recomputable by a third party through replay" (§9.1). Report 05 calls it "the defensible piece".
- **Precedents:**
  - EHR audit logs show whether a clinician opened a lab result before placing an order. Malpractice discovery uses exactly this "available vs viewed" split.
  - NAEP and PISA log which resources a student opened.
  - FINRA CAT and MiFID II records hold the market state at order time.
  - A poker hand history stores hero's information set.
- **The "third party" has never existed.** Receipt v1 replays through an in-tree *label* (E29). "Opened" is client-asserted and forgeable (05 row 9). The only re-reader has been the same repository's code.
- **Class:** (b).
- **What would change my mind:** a spec-only stranger recomputes a DC basis (Protocol §7.1), *and* a teacher changes a judgment because of it in a way process logs could not.

**S4 · MAJOR · "Conflation made unrepresentable" is contradicted by BOW's own record.**
- **Claim attacked.** Actual, modeled and evidence are separated "by type and gate, not by metadata an author may forget" (§9.2).
- **The proposal's own counter-evidence.** Boston's flagship disclosure omits that its building is authored (E33): the conflation is represented today. Hand-tagged statuses failed (K6). W has five status vocabularies (K21) and a `private` code with opposite meanings (K28). Status-from-provenance is only HYPOTHESIS (M8).
- **What is actually gated is narrow:** DC's `not-evidence` literal and the Lab's lack of write authority.
- **Structural separation predates BOW:** the Anaplan/Hyperion Version dimension (Actual vs Budget vs Forecast, actuals loaded only from source), standard in finance planning for two decades; Metaculus forecasts vs resolutions; Reg G non-GAAP labelling; Jif taint tracking.
- **Class:** (b). "POSSIBLY NEW" overstates it.
- **What would change my mind:** an outside author *tries* to render a modeled value as recorded and cannot. That is 05's own condition.

**S5 · MAJOR · The act basis shrank to an audit log under its own falsifier.**
- **Claim attacked.** The basis is "the single change" that unifies the products and turns six things into derivations (§4).
- **What W2-A found.** The write half is a request guard, redundant on every accepted entry: HTTP `If-Match` returning 412. The read half is "log what was on screen when they decided".
- **Relabelling, not unification.** Calling bookmarks (Moments), sealed-bid auctions (fairness) and rebase conflicts (fork honesty) derivations of the basis unifies nothing.
- **Class:** (b).
- **What would change my mind:** B4 passes with zero new fields *and* the derived objects enable a user behavior that did not exist before.

**S6 · MAJOR · "One grammar across Challenge and World": chess already does it, and BOW's own laws break SHARE.**
- **Claims attacked.** One OPEN / WHY / WHAT IF / SHARE over bounded and persistent instances (§9.4); "a Challenge could be cut from a World at a Moment… no product does this yet" (§5 Q4).
- **Lichess already does it.** It builds its puzzles from positions in real games and links each puzzle back to its game. FEN is a cut, PGN variations are forks, and one link shares either.
- **BOW's own invariants disable SHARE for Challenges.** Student data "never enters a public address space" (Tournament C8), and evidence is unexpressible across boundaries (M14).
- So the shared grammar works only for the instance kind that has no buyer.
- **Class:** (a) as a grammar; unshown in BOW.
- **What would change my mind:** a DC Challenge actually cut from a W Moment, played by a class, whose capsule reaches a parent without a privacy exception.

**S7 · MAJOR · Honest forks are git rebase, the Lucas critique, Basketball GM and Palantir Scenarios.**
- **Claims attacked:** Time §7–8 and M10.
- **Precedents, one per feature:**
  - `redecide-required` is `git rebase` stopping at a commit whose base changed.
  - A suffix policy is the Lucas critique (1976) turned into a field.
  - PGN variations never merge into the main line.
  - Basketball GM's Real Players leagues start from any past NBA season's rosters and contracts, and its cap and luxury-tax settings can change mid-league. The proposal's HYPOTHESIS "Reality fork" and "rule fork" have been in fans' hands for years.
  - Palantir Foundry Scenarios are sandboxed ontology forks made by applying actions, compared, and merged only through a governed action. BOW's addition is to *refuse* the merge, and a refusal is not a capability.
- **Class:** (a)/(b).
- **What would change my mind:** readers of BOW forks judging counterfactual claims measurably more accurately than readers of Basketball GM or trade-machine output.

**S8 · MAJOR · Interchangeable occupants and sealed windows are Diplomacy plus CICERO.**
- **Claims attacked:** M17, T14 and T19.
- **Precedents.** Diplomacy's simultaneous sealed orders are the canonical sealed window. Meta's CICERO played 40 anonymous games on webDiplomacy (2022), in human seats, under unchanged rules. BOW: "No AI occupant has ever run".
- **Class:** (a). Keep it as hygiene, not as a novelty.

**S9 · MINOR · Verification axes and envelopes already have names.**
- **M9 (consistency vs authenticity)** matches ACM artifact badges (Available, Functional, Reproduced, Replicated), reproducible builds alongside Sigstore/SLSA provenance, and C2PA validation states.
- **M11's validity envelope** is a model card's "intended use / out of scope" section, enforced by refusal.
- **Class:** (a). Good hygiene.

**S10 · MAJOR · The medium test is forbidden, not just unbuilt, by the constitutions that supply all the evidence.**
- **Claim attacked.** Contract §1 treats citable, portable and authorable as *missing*. Several parts are in fact **prohibited**:
  - **Authoring.** DC requires founder approval for assessment semantics, Challenge DNA, and money from `src/domain/finance/`. E-main forbids world selectors and generic engines built "from two data points". Boston alone needed a 1,335-line level script.
  - **Citation.** Challenges are private. Living World addresses resolve only through a host that stays BOW's "in every scenario" (Tournament C2).
  - **Portability.** Licensed Reality travels "as provenance, never as payload" (C6), so exported NBA capsules fill with `withheld-by-rights`.
- **Consequence.** The medium would have to be a third product with zero evidence. The EARNED rows do not transfer to it.
- **What would change my mind:** a medium layer chartered outside both constitutions, then H13 passing (an outside author ships a World and a stranger forks it).

**S11 · MAJOR · The two-profile split is a dilemma, and it gives up the company.**
- **Horn 1: the universal CORE is textbook** (05; Ledger F2): Datomic, Temporal, git.
- **Horn 2: what is distinctive is institutional** (seats, deadlines, typed silence, obligations, knowability at the act), the design space of Football Manager (Continue-button time, expiring offers, scouting attribute ranges as typed Unknowns), EVE Online (player institutions, typed contracts, killmails as shareable act records) and Palantir's Ontology (governed actions, markings, lineage).
- **The concession.** §2 places "every current BOW product" in the institutional profile, and the natural-system profile is unbuilt. So the universal part is not new, and the new-ish part is not universal. BOW is an institution-simulation and assessment company whose thesis says "any system".
- **What would change my mind:** one natural-system model fork, scored against observation (B8), built with no institutional primitives.

**S12 · MAJOR · The honesty labels inflate exactly where novelty is claimed.**
- **(i) An undefined sixth label.** "CANON-CANDIDATE" is not among the Vocabulary's five labels. It is applied to M4 ("model outputs never tested") and M9 ("nothing is signed today"). Its justification is that three same-family workers converged on it, which is the shared-bias risk Ledger F6 names.
- **(ii) RECURRING rests on two data points.** RECURRING means two products built by one founder's agents. E-main §12 forbids extracting from two data points, yet the Contract proposes seventeen laws from them.
- **(iii) M15 overclaims.** Its RECURRING label leans on DC work that has "never rendered" (E20).
- **(iv) The §9.1 "third party" never happened** (see S3).
- **(v) "EARNED ×4" for act-advanced time** counts one idea every turn-based game has.
- **Fix:** relabel (i), (iii) and (iv) as HYPOTHESIS.

**S13 · MAJOR · At the scale of a medium, BOW is a typed log with a text viewer.**
- **What the proposal says.** Billions of systems are reachable "only through Direct-class families" (Representation §5), and K15 kills 3D as the proof of the medium.
- **Consequence.** At scale, BOW is text, tables, timelines and derivation graphs over a typed record: a Jupyter/Observable notebook, a git log, a cited Wikipedia article, Our World in Data's projection-vs-observation charts.
- The Worlds' places, the part that feels distinctive, are declared not to be the medium.
- **Class:** (b).

**S14 · MAJOR · None of M1–M17 would feel different to a real person.**
- **A 12-year-old.** "Our decision caused that?" comes from lesson design and reveal choreography, not from digests or suffix policies. The status legend has never been read by a child (B3).
- **A teacher.** Gets what NAEP or PISA process data already give.
- **A fan.** Will compare BOW with NBA 2K MyNBA and Basketball GM, and BOW's rights discipline gives the fan *less*: no likeness, and an authored arena.
- **An analyst.** Wants correct apron math, which is sourced content (Tournament C1), not a REPLAYED tag.
- **What would change my mind:** users preferring BOW over Football Manager or Basketball GM on a *law-driven* feature, not a content feature.

**S15 · MAJOR · Calling it a "medium" with zero users repeats the failure the proposal's own history report names.**
- **The evidence it cites.** Report 06 found that winners standardized only after "one small tool had real users", while Xanadu, VRML97 and OpenDoc specified first and stalled.
- **What this packet already specifies,** with no user or outside reader: conformance levels R/V/B/H, OCI and ZIP transports, an address grammar, eight composition laws and an airline worked example.
- **Its most developed World keeps no act log** (E23).
- **Inconsistency.** K24 and K25 kill more boards and federation specs; the same logic applies to this contract.
- **What would change my mind:** the next artifact being a user result, not a spec.

---

## What would convince me

**The smallest observable behavior: reply-by-fork between strangers.**
1. Person A posts an outcome-based verdict on a real decision: "that trade was a disaster."
2. Person B, who is neither on the BOW team nor instructed, replies with a BOW cut *as known then*, or a fork of one, instead of prose or a trade-machine screenshot.
3. Person A has never used BOW. A opens the cut and correctly says which values were known then, which came later, and which are modeled.
4. A then argues from what was knowable instead of from the outcome.

That is a new literacy passing between people with no help from its author: judging decisions by what was knowable, carried in a shareable executable artifact. Poker has it; institutions do not. A second observation, on a system BOW did not author, would move BOW from product to medium.

**The cheapest test** (about one week, under $500, no infrastructure):
- **Materials.** A static, hand-built capsule of one real NBA trade-deadline decision, using public facts only. It shows the basis, marks each value as known then or learned later, and offers one fork lever.
- **Design.** The outcome-bias design of Baron & Hershey (1988).
  - 60 fans (r/nba or Prolific), each randomized to a good or a bad outcome.
  - Control: a spotrac page, a trade machine and a Basketball GM league.
  - Treatment: the capsule.
- **Pre-registered success criteria:**
  1. the outcome-bias gap in rated decision quality shrinks by at least 50% against the control;
  2. in a "reply to a friend" task, at least 30% send a capsule or fork rather than prose;
  3. at least 80% of naive recipients classify three marked values correctly.
- **Reading.** (1) fails: an explainer at most. (2) fails: a Nicky-Case-class product. Both pass: a teacher authors a non-sports capsule from a template in ≤2 hours and a stranger forks it (H13).

---

## Verdict

On this packet's evidence, BOW is not a new medium. It is a disciplined recombination (game-replay semantics, budgeting software's actual-vs-forecast split, audit-log knowability, git-style forks, Palantir-style governed actions) applied to institutions and assessment, with an unusually strong ethic of refusal.

The proposal is more honest than most: it concedes zero mechanism novelty and says the thesis is "not yet true". But its remaining novelty claims are constraints rather than capabilities. Its best candidate, knowability at the act, has never been recomputed outside the repository. Its labels inflate at exactly those points. And its own constitutions forbid the authoring and citation that the medium test requires.

The products may still be good. The word "medium" simply has no referent yet. One live candidate for (c) remains: a shareable, as-known-then decision artifact that changes how non-specialists argue about decisions, a literacy poker players have and institutions lack. Test it with people before writing another law.
