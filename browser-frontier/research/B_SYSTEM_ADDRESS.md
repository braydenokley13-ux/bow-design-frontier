# B · System Address
RESEARCH · 29 Sep 2026 · design reading, not evidence of use

## 0. The claim

An address is not a place. It is a **cut**: one system at one point in its record, as the record then stood. It carries no authority. What a person may *do* there (occupy a seat, fork, join a room) travels separately as an **offer**, redeemed by a present person inside chrome only the Browser can draw. Three consequences. (1) There is no "now" address, only *snapshots* and *follows*; a follow carries what its sender saw, so a link opened three weeks late shows what moved. (2) Names are claims and identity is a checkable id: the sentence a person says or screenshots is derived by the resolver from the record, never supplied by the referrer. (3) A whole system's provenance can be perceived like the truth grammar, by material not label, if it lives on its own channel (the frame the Browser draws) and risk shows by presence, never by a missing cue.

## 1. What the incumbents get wrong or leave out

The incumbent (Wave 2 "Sentence": *Enter [system] [when] [as who] in [branch] and show me [view]*, one editable line rewritten on every move; `canvas/BrowserSentence.dc.html`) fails as an *address*:

- **Authority and presentation ride inside it.** Seat and view are slots: a teacher's line hands 28 students her seat and her 3D floor, and a phone or a voice has no floor. Rewriting on every move makes the shared thing the sender's cursor, not a citation (the web's address-bar-as-state gave us session ids in links).
- **The moment is a date string.** The board's own moments are `2017-06-17 morning`, `now`, `2025-06 [verify]`, `after now (sealed)`. Dates break on fuzzy periods and corrections (that 17 Jun row reads "agreed 17 Jun, completed 19 Jun 2017 (verify)"), and `now` means two things by the time it is read. No what-was-known coordinate, so no "what the sender saw".
- **Slots are independent; things are not.** A branch depends on a system, a seat on a World; a pre-divergence moment belongs to parent and fork alike. Two strings can name one cut.
- **"System" is one slot.** Boston in the League in the NBA economy is a graph, not a path, and at billions titles collide (Zooko's triangle).
- **Whoever draws the line can lie.** If a third-party runtime can write it, provenance is decoration. It reads badly aloud, ties nothing in a screenshot to a record, and never says what kind of thing you will get.

Scorecard: billions fails · nested fails · live Reality fails · third-party fails · spatial fails · voice half · assistants half.

**Verdict: split, don't scrap.** Keep the sentence form, "the sentence is where you arrive", and doors named by their question. Demote the line to the **Strip**: read-only, drawn by the Browser from resolver-verified fields, changing only when the *cut* changes, not the camera. Seat becomes an offer, view a hint. Typing or speaking goes through Arrive, never slot-editing.

## 2. Concepts

Six concepts, six verbs: **say · hold · hand over · ask · return · slide**.

### 2.0 Anatomy, clocks, worked addresses

```
CUT    lineage · record position · record edition   public · immutable · checkable
FOCUS  a thing inside the cut                       public iff the cut is
OFFER  what a present person may do                 private · leased · redeemed in Browser chrome
HINT   representation preference                    device-negotiated · droppable
ROUTE  how you arrived                              display only
```

Precedent: Software Heritage's SWHID (ISO/IEC 18670, Apr 2025) keeps an intrinsic hash apart from context qualifiers that never change identity: cut versus focus and route. Zenodo's concept DOI versus version DOI is follow versus snapshot.

A **Follow** ties you to a lineage's head and carries the sender's *seen-at* cut. Three clocks: *valid time* (when it happened; may be a period, may be [verify]); *record edition* (what-was-known; corrections add an edition, never overwrite: Fowler, "Bitemporal History", 2021; Memento, RFC 7089, 2013, quietly picks the nearest copy where a record must say which edition it is); *seat horizon* (what a seat may know: set by the seat, never by an address, which keeps hindsight sealed). Identity is a hash; the date is a label. A pre-divergence moment has one address, the parent's. The eight camera stations are named hints; the trade file on the desk is a focus.

Worked Readings, kind first (check words illustrative):

| Kind | Reading |
|---|---|
| Snapshot | Snapshot · Boston Celtics · as Reality stood 29 Sep 2026, 14:03 · maple-otter |
| Following | Following · Boston Celtics · Dana saw it 29 Sep 2026, 14:03 |
| Recorded | Recorded · Boston · Philadelphia calls about No. 1 · 17 Jun 2017 (reported) [verify] · harbor-linen |
| World | World · Boston · Year Two · Week 9, the Denver game · cedar-quill |
| Fork | Fork · "Keep No. 1 — Fultz" · by Dana R. · diverged 17 Jun 2017 · flint-sable |
| Offer | Offer from Mr. Levi · your own copy of the 17 Jun 2017 door · GM of Boston · until Friday |
| Chemistry | Modeled · N₂O₄ ⇌ 2 NO₂ · the moment the volume is halved · fork "halve it twice" |
| Supply chain | Recorded · Harrow Medical (fictional) · the week the single-source MCU fab burns · PO 4471 |

### 2.1 A · The Reading — an address you can say

A sentence in fixed order (kind, question, when, whose, check) that survives voice, print and screenshot, and fails loudly when misheard.

**In Boston.** On a call Dana says "Boston, the Philadelphia call, June 2017." The friend's Browser (or assistant) answers in the same order: "Recorded. Boston. Philadelphia calls about number one. Seventeen June, twenty seventeen, reported. Two public forks start here. Say *exact* for the check words." "Exact." "Maple, otter." Dana's Strip shows the same two words. Three tiers, each a prefix of the next (name; plus when and edition; plus check words): stop anywhere and be right, only less precise. Pasted into a text it degrades to its own sentence. A screenshot's Strip prints the exact tier as text; a picture is a pointer, not proof: type the words and the record answers.

**Canonical:** cut id and the registry's question-title. **Redrawn:** the sentence, re-titled from the record so no referrer can spoil the answer or rename a door. **Segments:** DISCOVER, ARRIVE, FOLLOW. **Scale:** names are unique only inside one system's record; the id is global; check words bind sentence to id, so no global name space is needed. Short readable codes are leases: the shipped join code, "BOW" plus 3 of 26 characters, is 26³ = 17,576 codes (`runtime/src/server/crypto.ts`): fine for a class hour, useless as identity. **Chem / supply:** see the Readings above.

**Protocol.** Check words: a truncated digest of (cut id + canonical sentence) mapped onto two alternating word lists (PGP word list, 1995: two-syllable words at even positions, three at odd, so a dropped, repeated or swapped word is audible). Two words is about 16 bits: it catches accident, not attack. what3words shows the cost of skipping this (arXiv 2308.16025, 2023: adding or dropping an "s" can land squares under 10 km apart). The same check makes addresses hallucination-safe: a misremembered one lands on "doesn't parse", not on a neighbor.

**Label:** REAL seed (Economics Live join codes drop I, O, S, Z, 0, 1, 5, 2 "so a code read aloud across a classroom cannot be misheard"); rest PROPOSED PLATFORM CAPABILITY. **AI:** NO AI REQUIRED; SMALL / CHEAP MODEL only to match loose speech before read-back.

**Fails if** people stop at the short tier or skip the words. **Test:** phone dictation, 12 pairs, six addresses each including near-twins (same-titled forks; moments two days apart). Falsified if silent wrong landings exceed 1 in 20 at *exact*, or under half use the words unprompted.

### 2.2 B · The Slip — an address you hold

Pointing makes the address: a Slip lifts out of any representation, lives in the Hand (a Browser tray that follows you across devices), and can be held, combined and dropped.

**In Boston.** From the mezzanine rail Dana points at the trade file on the owner's desk. A Slip lifts out: its face is the thing in the texture it wears (Recorded double-ruled, Modeled hatched), its foot the exact Reading. A second Slip of the same board at Week 6, set beside it, makes a *comparison*, itself addressable. Dropped on a friend: a public card (the Publisher's Moment card is its unfurled form). Dropped on a seat: an offer to *enter*, still needing the Handover. Voice: "hold that." Headset: grab. A Slip is a reference, not an asset: no ownership, scarcity or trading.

**Canonical:** cut plus focus (a number's why-chain is part of the cut). **Redrawn:** the Slip's face. **Segments:** ORIENT, WHY?, COMPARE, FOLLOW. **Scale:** minted on-device (cuts are content-addressed, so no round trip); the face stays dashed (UNKNOWN) until verified. A billion Slips cost the registry nothing; only following or redeeming does. **Chem / supply:** the concentration curve after the step; the one PO whose only source burned. **Protocol:** focus visibility inherits the cut's; a Slip of a private number reads "a number on a private board" for anyone but its holder.

**Label:** PROPOSED PLATFORM CAPABILITY (REAL unmerged seed: Boston spatial scene, surfaces bound to World state). **AI:** NO AI REQUIRED. **Fails if** screenshot-plus-words does as well; drop-on-seat reads as an act; the Hand becomes a wallet. **Test:** 10 people, a 2.5D scene: "send a friend exactly this; show how it differs from Week 6." Falsified if eight or more choose screenshot and words each time and the friend lands as accurately.

### 2.3 C · The Offer — an address you hand over

Authority travels apart from reference: a signed, scoped, expiring Offer names a cut and what its holder may do, and is redeemed in front of a person.

**In Boston.** Mr. Levi opens the 17 Jun 2017 door and presses *Hand out*. Three sentences, each with its consequence: "Everyone gets their own copy (28 branches; you compare outcomes after)", "Everyone joins one World (14 pairs trade with each other)", "Watch only." He picks the first. The board shows the Reading and three words. Students say them; each Browser draws the Handover (the incumbent ENTER, now with an authority object in front): who offers, which seat, what you will see, what you give up, what stays private. Signing binds the seat to that device in the record. The board shows presences filling, never seat state. Afterward the 28 branches are one addressable set, "forks of this cut by 3B", sharing a divergence stamp. An LMS, news site, assistant, game or voice system mints the same object.

**Canonical:** the grant (a lease in the record, bound to the redeemer) and the cohort. **Redrawn:** phrase, sentence, button; an offer holds no state. **Segments:** ENTER, ROLE, KNOWLEDGE + AUTHORITY CHANGE, COMPARE. **Scale:** offers are leases; the short phrase need be unique only among live offers; cost while live, nothing after. **Chem / supply:** each pair gets the same reaction with a different second change; twelve students each hold one supplier's seat.

**Protocol.** Macaroon-style capabilities (Google, NDSS 2014): delegate by appending restrictions only, so a teacher hands a TA "watch only" offline; delegation chain for invokers (OAuth token exchange, RFC 8693); device-bound redemption; revocation. Capability strings alone leak through logs, history and screenshots (W3C TAG note, 2014), so redemption always needs a present, authenticated person.

**Label:** PROPOSED PLATFORM CAPABILITY (REAL seeds in Economics Live: teacher key apart from the join code, D14; device-token hash; rejoin PIN with lockout; Live World prototype: GM seats by lease). **AI:** NO AI REQUIRED. **Fails if** teachers cannot say which mode they picked; the Handover reads as a permissions dialog; a single-use code jams at 8:05 with 28 children. **Test:** six teachers hand out to 10–28 phones; time-to-all-in, then "can they compare outcomes? see each other's seats?" Falsified if two of six answer wrongly or it takes over 3 minutes.

### 2.4 D · The Standing Question — an address you ask for

A description resolved against the record by rule, pinned on first answer, allowed to dangle.

**In Boston.** Dana, or an assistant, asks for "Boston, the last time payroll was under the tax line." The answer comes with its rule and its fork: "By tax salary: now, about $1.7M under [verify]. By cap payroll: [an earlier cut]." The fixture carries both numbers (cap payroll about $203.6M, tax salary $198.72M), so the address itself puts the economics on screen. She picks; the Browser pins a cut and prints a receipt (rule, resolver version, record edition). "The first day Boston is over the second apron" has no cut yet: it waits in the Clock Hall as a *standing question* and resolves when the record does (discovery by waiting). Answer-shaped words ("the moment Boston traded No. 1") resolve to the door named by its question and never confirm the answer.

**Canonical:** pinned cut plus receipt; the description lives only in your Keeping. **Segments:** DISCOVER, ARRIVE, ORIENT; WHAT IF? (a dangling future stays sealed). **Scale:** a query over one record; callers need no ids, which is what assistants have. **Chem / supply:** "the first time NO₂ passes 60%"; "the last week Harrow had two chip sources." **Protocol:** a small deterministic language (`last / first / at / after / as-known-at`); resolver version pinned in the receipt; outcomes: pinned, pending (condition, expiry), ended (tombstone).

**Label:** PROPOSED PLATFORM CAPABILITY. **AI:** SMALL / CHEAP MODEL to parse words into a description; evaluation deterministic; read-back before pinning. **Fails if** the resolver is treated as an oracle for "the moment"; unpinned descriptions resolve differently for two people. **Test:** 10 people, 10 descriptions, three answer-shaped, three ambiguous. Falsified if 30% miss a resolution they did not mean, or an answer leaks.

### 2.5 E · The Keeping — an address you return to

For what you kept, the address is your relationship to it (your name, where you left off, what you left open); returning shows what changed since.

**In Boston.** A year on, Dana says "my Fultz thing." Her Browser finds it from her own history (petname, last position), not global search. The Return Note, drawn in Browser chrome: "You left this at act 41, 3 Oct 2025. You wrote: 'If Philly offers two firsts, I still say no.' Since then Reality recorded 6 things: 2 of your assumptions held, 1 diverged, 1 is now impossible. You made this under rulebook v0.3; v0.5 changed 2 rules." Choices: stay as you were, re-declare, bring it to now. A headset shows the same Note: continuity is identity-synced, not link-synced. Drift is a difference, never a verdict.

**Canonical:** a private keeping record (branch root id, last position, your note, rulebook version, record edition). Renaming or deleting the branch changes nothing you kept; deletion leaves a tombstone with heirs. **Segments:** FOLLOW, CONTINUE ALTERNATE HISTORY, RETURN TO RECORDED. **Scale:** per person; drift is a diff between two pinned cuts. **Chem / supply:** the titration left when the reagent lot changed; the plan kept when a lead time moved. **Protocol:** records sync across devices; forwarding pointers and tombstones in the registry; pinned rulebooks stay runnable (§4). Petnames (Stiegler, 2005) escape Zooko's triangle: the name is yours, the id is secure.

**Label:** PROPOSED PLATFORM CAPABILITY (REAL seed: Economics Live's franchise passport, D131, a device-held opaque token resolving a returning child to last week's seat, teacher HAND BACK as fallback). **AI:** NO AI REQUIRED for drift; SMALL / CHEAP MODEL for "my Fultz thing"; FRONTIER MODEL OCCASIONAL for an optional GENERATED summary. **Fails if** drift reads as "you were wrong"; away-Worlds feel punishing (open founder question). **Test:** eight people with a 3-week-old fork (Reality change scripted): find it in 30 s by their own words? Call drift "Reality changed" or "I was wrong"? Falsified if under six find it or three read drift as error.

### 2.6 F · The Scale — an address you slide along

Nesting is a coordinate you slide along without changing time, branch or seat; in nested systems the address is a lockfile: an outer cut plus pinned inner lineages.

**In Boston.** In Dana's fork on the ops floor she says "the League's view." Valid time and record edition stay; the Strip's scale bar moves Boston, League, NBA economy. The League ledger shows her Boston in her ink and Denver as Recorded: "League at Week 9, Boston := Dana's branch at act 41, everyone else := Reality." Sliding changes how much, never what. If her Boston trades with Denver, Denver must be pinned too: an address is well-formed only when closed (the Council's rule, made a protocol rule).

**Canonical:** the composition. **Segments:** ORIENT, WHY?, WHAT IF?, COMPARE. **Scale:** containment is a relation, not a path: many parents, flat identity, route shown but never identity; a third-party system claiming to sit inside the NBA economy is a dashed edge until the container countersigns. **Chem / supply:** reaction, reactor, plant; PO, supplier, region. **Protocol:** lockfile composition (as Git submodule pins do); closure check; container-signed edges. **Label:** SPECULATIVE FRONTIER (REAL seed: the read-only Harbor-to-NBA route). **AI:** NO AI REQUIRED. **Fails if** closure overwhelms a 10-year-old or sliding out seems to change the date. **Test:** paper, "if you slide out, what stays the same?" Falsified if four of ten say time or branch.

### 2.7 Trust and provenance of a whole system, without badges

PROPOSED PLATFORM CAPABILITY · NO AI REQUIRED. Why not badges: Chrome swapped its padlock for a neutral "tune" icon in v117 (Sep 2023) after Google's study, as reported (Engadget, May 2023), found 89% of 1,880 users misread it; in a 2007 study none of 67 bank customers withheld a password when HTTPS indicators were removed (Schechter et al.). Persistent icons habituate; absent cues go unseen.

1. **The frame is the Browser's.** Edge, threshold, Strip and Handover are drawn only by the Browser; a system draws its interior. Provenance lives in the frame and at seams, never as an interior badge.
2. **Three axes, two new.** *Standing* (whose rulebook stands behind it) shows as frame ink and closure. *Lifetime* (persistent, temporary, archived) shows as frame grain. *Knowing* is already the seven textures and the Clock Hall's kinds, so LIVE REALITY and MODELED need no new mark. Marks compose.
3. **Risk is loud by presence;** trusted kinds are calm.
4. **Felt at thresholds** (arrival, signature, seam, share) as one plain sentence; "what stands behind this?" on request.
5. **Standing is a registry fact bound to a version digest** (the in-toto/SLSA attestation pattern): edit it and the changed parts drop to unchecked; upgrading means a new identity with a lineage link.
6. **Degrade to the lowest provable:** cannot verify, draw dashed.
7. **Seams show whose rule:** a guest system calling BOW's cap engine paints the engine's outputs in house ink.

| Kind | At the door, no words | Said first | At the threshold |
|---|---|---|---|
| OFFICIAL BOW | House ink; closed double rule; finished edge; calm | "BOW World." | One-line ledger. Official means BOW is accountable, not that it is right (D10). |
| THIRD-PARTY VERIFIED | Guest ink inside a rule BOW closes at one corner; calm | "Made by Dana Fields, checked by BOW, version 3." | Ledger: what was and was not checked; edited since, those parts unchecked. |
| THIRD-PARTY UNVERIFIED | Guest ink; raw, uncut edge; coarse ground | "Made by Dana Fields. Not checked by BOW." | One unskippable line before you act; travels with every share. |
| LOCAL | Your ink on plain ground; no BOW rule | "On this device." | Sharing means publishing a new identity; ledger says what leaves. |
| TEMPORARY | Thin, see-through frame; rule thins toward expiry; a number, not a name | "Temporary, until Friday." | Share warns the link dies; Keep copies into LOCAL; nothing persistent may depend on it. |
| LIVE REALITY | Observed-solid dominates; running clock | "Live." | No acting on the real team; fork only from recorded moments; sender's seen-at travels. |
| MODELED | 135° hatch on outputs; model named on request | "Modeled, by [model, version]." | Only after a named model ran; receipt shows model and input digest. |
| ARCHIVED | Glazed, matted frame; clock stopped at its end | "Archived since March." | Readable, citeable, forkable on its pinned rulebook; never live. |

Hues belong to Visual Experience; the roles are the requirement. Voice says the kind first; a headset's Browser-owned threshold carries ink and closure. **Test:** card sort, 12 people including 10–12-year-olds, eight wordless frames: "which could you cite; which could be gone next week; which could be lying about the rules?" Falsified if under nine rank official and verified above unverified and temporary.

### 2.8 External invocation

**Invoke by reference, verify by resolver, redeem by person.** (1) *Find*: the invoker sends an id or a description; the resolver returns pinned cuts with Readings. (2) *Mint*: the invoker asks BOW for an Offer; BOW records the invoker (an authenticated client, not a string) and the person it acts for; anything beyond watching needs that person's consent in Browser chrome. (3) *Carry*: link, on-screen sentence, spoken phrase, embed, deep link, nearby-device handoff: all encodings of one Offer (a URL is a carrier, not the concept). (4) *Arrive*: an Arrival Note (kind, sender, what the offer allows); opening never acts. (5) *Redeem*: the present person signs the Handover; the grant is written to the record, bound to their device. (6) *Receipt*: the invoker gets public facts only ("Dana entered as GM of Boston at cut X"), never in-seat state.

- **Assistants (ChatGPT, Claude).** BOW exposes cuts as URI-addressed resources plus two tools, find and mint-offer (MCP resources are URI-identified; the 2026-07-28 release candidate adds server-rendered UI; ChatGPT apps run on MCP [verify current status]). For a what-if it compiled (SPECULATIVE FRONTIER; FRONTIER MODEL OCCASIONAL, on the assistant's side) it requests a temporary lease. It cannot mint official or verified kinds, mint a seat without the person's consent screen, or sign an act; acts through it are logged "by Dana, via Claude."
- **News site:** public cut card; "take the seat" is a copy-from Offer under the site's account. **LMS:** roster-bound Offer; results return as receipts, not in-seat state. **Game:** deep link to a public cut ("see the real version"); no seats. **Voice:** says the Reading, resolves by description, hands off to a screen; the handoff carries the Offer, not the seat.

### 2.9 What must never be spoofable

1. **The record.** Titles, dates, outcomes, state come from the resolver's verified log (inclusion proof against a witnessed signed head, the Certificate Transparency pattern, RFC 9162, 2021), never the referrer. Unverifiable: dashed.
2. **Seat authority.** Never in an address; only a grant in the World's record, bound to the redeemer. A leaked phrase gets "not for you."
3. **Branch authorship.** Root signed by the author's key; the frame shows the verified author, not the title; renames never re-attribute.
4. **Kind and standing.** Registry entry plus attestation on a digest; never the string, manifest or referrer.
5. **The chrome.** Strip, frame, threshold, Handover: unwritable by any system or invoker.
6. **Time.** "Now" and known-at come from the record's clock; a follow carries its sender's seen-at.
7. **Privacy.** Nothing seat-scoped in any address; private things answer identically whether or not they exist; stamps carry no capability.
8. **Hindsight.** No address carries an outcome or grants a seat horizon.
9. **Consent.** Opening never acts; acts need the person's present signature; delegation is logged as "via."
10. **The sender.** Invoker identity comes from the authenticated channel.

### 2.10 The mandatory states

| State | What the Browser does |
|---|---|
| NOW, read later | A Follow opens at live now beside the sender's seen-at. A Snapshot opens as it stood with a drift stripe ("Reality recorded 4 things since; 1 touches this"). Never silently "now." |
| Someone else's branch | Frame in the author's ink, verified author, divergence stamp, their head versus the act pinned in the link. Options: observe; fork from here; take a seat in your own copy. Never theirs. |
| A seat you may not occupy | Resolves to the seat's public face (desk from outside, holder, what it may do) with: watch, take another, or, where the offerer allows, fork the cut and occupy it in your copy. |
| A private board | "Not available to you," identical whether or not it exists: no title, count or author. The holder can publish a copy field by field: a new public cut, not the board. |
| Spoken aloud | Kind first; three tiers; check words; the Browser reads back what it resolved and asks "exact?" before opening anything with stakes. |
| Archived or deleted | Four kinds of nothing, each a place: *doesn't parse* ("did you mean"); *not yet* (watchable); *ended* (tombstone: what it was, when, why (withdrawn, retired, rights), heirs); *not for you*. Archived stays readable and forkable. |
| AI-minted temporary model | Names the invoker and the person; "Temporary, until…"; generated-structure texture; sandboxed (its acts enter no record; nothing persistent depends on it); Keep copies to LOCAL; promotion mints a new identity. |

## 3. Two to prototype

**Choice.** The Reading-with-drift and the Offer carry the two load-bearing claims (a cut is not authority; there is no "now") and can be tested with real people this month. B is built only as one pointing gesture inside P1; D, E, F need a resolver, a year, and composition.

### P1 · The Cut and the Reading (fan, friend, return, screenshot, voice)

1. **Point.** In the ops-floor scene the person points at the trade file; a Slip lifts out; its foot prints the exact Reading; the Strip shows the same sentence, no seat, no view.
2. **Send.** A forced choice in words: "As it stood at 14:03" or "Follow, with what I saw"; a preview of exactly what the friend gets.
3. **Arrive.** Arrival Note: kind first, sender, what this is. The door is titled by the record's question even if the sender's message spoiled the answer. Double-ruled if verified, dashed if not.
4. **Three weeks later.** Same address; drift stripe; the room shows only what moved: the payroll board wears both figures, the sender's double-ruled, today's solid. Unchanged surfaces stay quiet.
5. **Someone else's fork.** Author's-ink frame, verified author, stamp, head versus pinned act; sitting in her seat is refused, naming the rule.
6. **Say it.** Three tiers, check words, read-back; one swapped word yields "did you mean," not a wrong landing.
7. **The picture.** A screenshot of state 4 with Strip and exact Reading legible; a cropped variant still carries it in the Slip foot.
8. **Nothing.** The four kinds of nothing, each a place, including an archived door that stays readable.

**Impossible elsewhere:** open Dana's three-week-old link and the *room* shows what moved since she looked: what she observed is now recorded, what is observed now is new. **Anti-pattern:** the incumbent line with a copy-link button, a share sheet, a "link copied" toast, a feed card, a "last updated" badge in place of the room showing the difference.

### P2 · The Offer at 28 (teacher, assistant, creator)

1. **Compose.** Teacher picks the 17 Jun 2017 cut and *Hand out*: three mode sentences with consequences (copy-from, join, watch), seats, expiry; the Offer reads as one sentence, no checkbox grid.
2. **Say it.** Board shows the Reading and three words; devices arrive; seats fill as presences, no private state.
3. **Redeem.** Browser-drawn Handover: offerer verified, seat, what you see, what you give up, what stays private; signing binds the seat to the device.
4. **A seat you may not occupy.** A student tries the teacher's or another pair's seat: public face plus alternatives.
5. **Private board.** A second device opens a leaked capability: "Not available to you," identical to a nonexistent one; the holder's publish-a-copy flow.
6. **Assistant-minted temporary.** "Made by an assistant for Dana; temporary until Friday; not checked by BOW"; generated-structure texture; sandbox line; Keep copies to LOCAL; citing it from a persistent World is refused, naming the rule.
7. **Spoof attempts.** Edit the seat in the string; redeem on a second device; relabel it official: each refused, the rule named.
8. **After.** The offer expires; the 28 branches remain as a set addressed by common origin, with the teacher's compare.

**Impossible elsewhere:** 28 people say the same three words and each lands alone in a private seat of the *same* moment; the teacher compares 28 outcomes that all say where they diverged; the phrase overheard in the hallway gives strangers "not for you." **Anti-pattern:** a game lobby (code plus player list), an admin permissions matrix, "anyone with the link."

## 4. What real runtime would have to exist

- **Three identity classes.** *Cuts* are intrinsic: hash-linked, verifiable by anyone with the data (SWHID pattern). *Systems* are extrinsic: registry-issued under delegated prefixes (Zenodo mints under 10.5281; BOW under its own), because standing, versions, containment and tombstones are registry facts. *Offers* are leases.
- **A record per lineage:** append-only, structurally shared (a fork costs its divergence, not its history), signed heads witnessed by the registry so a third-party host cannot rewrite or split history unseen; inclusion proofs. Seed: every browser folds one act log to one SHA-256 state (Live World prototype, not yet on a real shared store).
- **Three resolution classes:** definitions (immutable, cacheable, offline), instances (need a host), pointers (signed heads; follows). Temporaries live outside the registry and expire.
- **An offer service** (attenuable capabilities, delegation chain, device binding, seat leases; Economics Live seat rows are the seed) and **a resolver** (description language, check-word codec, uniform "not available," tombstones with reasons and heirs; erasure under legal order leaves a redaction node whose hash still verifies the chain).
- **Trusted-chrome discipline** in every client; third-party runtimes in an isolated surface with no chrome access; a Browser-owned threshold on spatial devices.
- **Long-term executability.** Forks of archived moments run only if the archived rulebook stays runnable or is re-hosted: the largest hidden cost.
- **Scale (estimate, arithmetic only).** 10⁹ registry rows at 1 KB is 1 TB: storage is trivial; names, moderation and dependency risk are scarce. If 1% of 10⁹ people mint ten temporaries a day, that is 10⁸ a day; they must die without registry rows.

## 5. What would falsify this area's thesis

- People cannot tell snapshot from follow after 30 seconds, or 30% act on a snapshot as if live: fall back to auto-follow plus drift.
- Dictated Readings silently mis-land above 1 in 20 even with check words: speech is not a transport; assistants carry pinned cuts by machine.
- Testers share by screenshot and chat and never touch Slips or Offers: the address is a non-event; value lies only on the receiving side.
- The wordless card sort fails: provenance cannot be texture-only; fall back to threshold sentences.
- Teachers insist on the seat inside the link: authority-in-link is what the market wants; single-use attenuated capabilities are the compromise.
- People insist the 3D floor and the cap timeline are different *things*: representation is not a hint.

Sources checked 29 Sep 2026: rfc-editor.org/rfc/rfc7089 and rfc9162; martinfowler.com/articles/bitemporal-history.html; zenodo.org/help/versioning; swhid.org/news/2025-04-23-swhid-standardized-as-iso-iec-18670; ndss-symposium.org (Macaroons); w3.org/2001/tag/doc/capability-urls; philzimmermann.com/docs/PGP_word_list.pdf; arxiv.org/abs/2308.16025; skyhunter.com/marcs/petnames/IntroPetNames.html; modelcontextprotocol.io/specification/2026-07-28/server/resources; nba.com/news/boston-celtics-philadelphia-76ers-trade-draft-picks-0. Repo seeds read: `runtime/src/server/crypto.ts`, `types.ts`.
