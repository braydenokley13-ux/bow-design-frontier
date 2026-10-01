# External invocation frontier — BOW as the executable layer other surfaces call

BOW Browser Founding Frontier · Wave 1 · 29 Sep 2026 · design reading. Sources: research B (System
Address: Offer, Reading, trust frames, unspoofable list), F (Ambient AI: the Guest contract, ClaimSet,
the Floor), H §H5 (On Call), A (Doorstep, the Round, `via`); prototype P4 `Guest.html`. Not a plugin
implementation plan.

## 1. The claim

Most people will first meet a BOW system somewhere else: inside an assistant's answer, a news story,
a message from a friend, a class's learning platform, a game, a voice speaker, a headset, another BOW
World. BOW should be the **executable layer those surfaces call** — the thing that makes a mentioned
system checkable, enterable and forkable — with one law:

> **Invoke by reference. Verify by resolver. Redeem by person.** (research B)

A surface may carry a *reference* to a cut (a Reading, a claim, an embed). BOW resolves it against
the canonical record and draws what is true. Anything that needs *authority* — holding a seat,
signing an act, keeping a branch — travels as a separate Offer and is redeemed by a present person
inside chrome only BOW may draw. **BOW hosts the seat, not the brain** (research F): an outside
assistant can read, verify and propose; it cannot sign.

## 2. The verbs, surface by surface

What a host surface can do without starting in BOW Browser (✓ can · ◐ can start, finishes in BOW ·
— cannot):

| Surface | OPEN SYSTEM | ENTER | ACT | WHAT IF | FORK | COMPARE | FOLLOW |
|---|---|---|---|---|---|---|---|
| AI assistant (any vendor) | ✓ claim card + `open_in_bow` | ◐ `handin` → Offer → BOW threshold | — (never signs; can propose) | ✓ rules layer via `whatif`, receipted; modeled layers metered | ◐ temporary lease; keeping it happens in BOW | ✓ receipt vs record | ◐ a follow is minted in BOW |
| News / publisher | ✓ true marks on figures; a door "named by its question" | ◐ copy-from Offer under the site's account | — | ✓ a reader's own copy | ◐ the reader's branch sits where comments go, in the reader's ink, never the masthead's | ✓ | ◐ |
| Sports media product (fictional) | ✓ live marks bound to a Reality feed (none exists) | — for Reality (observe only); ◐ for recorded moments | — | ✓ | ◐ | ✓ | ✓ follow a door |
| Learning platform (LMS) | ✓ roster-bound Offer | ◐ each student redeems | ◐ inside BOW | ✓ | ✓ copies per student, addressable as one set | ✓ class compare | results return as receipts, never in-seat state |
| Enterprise software | ✓ | ◐ warrant-scoped seats | ◐ acts signed in BOW chrome or by warrant | ✓ | ◐ | ✓ | ✓ rings |
| Game | ✓ "see the real version" deep link to a public cut | — | — | ✓ | — | ✓ | — |
| Voice | ✓ the Reading spoken, kind first, check words | ◐ hands off to a screen for signing | — (read-back before any act with stakes) | ✓ spoken receipt | — | ✓ | ✓ rings |
| Spatial device | ✓ same system, Room tier | ◐ BOW-owned threshold in the headset | ✓ inside the threshold | ✓ | ✓ | ✓ | ✓ |
| Another BOW World | ✓ read-only crossing (REAL seed: Harbor → NBA memory route) | — without its own Offer | — across authority | ✓ in your World | ✓ | ✓ | ✓ |

## 3. The contract (research F §2.10, B §2.8 — PROPOSED; no BOW server exists)

Six tools, the same schema over an assistant tool protocol (MCP; its 2026-07-28 spec adds output
schemas, error results routed back to the model, long-running tasks and sandboxed UI — external,
verify) and plain HTTPS:

1. `resolve(text)` → pinned cuts with their Readings (never a guess; "did you mean" on a miss).
2. `ask(address, verb, args)` → a **ClaimSet**: address; state hash; rulebook id and version;
   world kind (reality · world · fork · historical); valid time and knowledge time; `closed`
   (everything the engine can say for this ask at this hash); claims with id, value, unit, kind (the
   seven textures), provenance; typed unknowns with a reason and what would make them known (never
   null; SEALED for outcomes that arrive only by acting); refusals with rule id, clause, inputs and
   nearest legal variants; a receipt if a model ran; `open_in_bow`. Deltas ("$1.7M under") ship as
   claims so the assistant never subtracts.
3. `whatif(spec)` → a Fork Receipt (rules layer immediate; modeled layers named, metered, receipted).
4. `verify(text, claim ids)` → match · mismatch · unsupported, per sentence. (P4 shows an
   assistant saying "past the tax line" while the record shows cap payroll ≈ $203.6M and tax salary
   $198,722,406 — ≈ $1.7M under — flagged in place.)
5. `handin(address, seat)` → an Offer the user redeems in BOW.
6. `warrant(scope)` → a warrant the user signs in BOW (for an agent acting in a seat).

Signing and heavy asks go out of band (a URL the host and its model cannot inspect). The host draws
BOW's card in a sandbox so it cannot restyle the textures. BOW cannot force faithful quoting; it can
make truth cheap to quote exactly (closed text, claim ids, precomputed deltas), deviations cheap to
catch (`verify`; an unfurl of a `bow:claim/<hash>` link shows the record beside a paraphrase), and
refusals hard to paper over.

## 4. What must never be spoofable (research B §2.9)

The record (titles, dates, outcomes come from the resolver, never the referrer) · seat authority
(never inside an address) · branch authorship (signed root; renames never re-attribute) · kind and
standing of a system (registry + attestation, never a string) · the chrome (strip, frame, threshold,
Handover — unwritable by any system or invoker) · time ("now" and known-at from the record's clock) ·
privacy (nothing seat-scoped in an address; a private thing answers identically whether or not it
exists) · hindsight (no address carries an outcome) · consent (opening never acts; delegation is
logged "via") · the sender (from the authenticated channel).

## 5. What BOW Browser provides that no embedded surface can

1. **The threshold.** The only place a seat is taken, an Offer redeemed, an act signed, a warrant
   written — drawn in chrome no host can imitate.
2. **Continuity across systems.** The Round (a finite walk on return that ends "level with the
   record"), the Standing (what you hold, with end conditions), seat diffs, rings with defaults,
   standing orders. A host shows one system at a time; the Browser holds your relationships to all of
   them.
3. **The fork workbench.** Keeping, continuing, comparing and returning — branches in their own ink,
   graded by Reality at the seam, lifted acts, the crowd of worlds. Hosts can preview; only the
   Browser keeps.
4. **Concordance.** The same act in every representation at once with one act number and hash; the
   Downshift from Room to voice without losing authority. A host renders one card.
5. **Private boards and the hindsight ledger.** What your seat knows, what you have been shown, what
   you declared. None of it may leave BOW.
6. **Verification against the canonical record.** Anyone can check a hash; only the Browser shows the
   record, the branch and the drift side by side.

Commercial consequence (hypothesis, carried from Wave 2): **observing is wide and free and happens
mostly in other people's surfaces; occupying happens in the Browser and is what people pay for** —
persistent Worlds, seats with warrants, hosted agents, metered model runs, classroom licences.

## 6. Risks

- Value leakage: BOW becomes a data API and the hand-in is never pressed. The hand-in must be the
  reason to come (a seat, a fork, a class), not a link.
- Hosts skip the card and paraphrase: `verify` exists, but only helps where the host calls it.
- Ring fatigue and spam: only seats you accepted may ring; a hard ring budget; silence has a receipt.
- Rights: a sports-media partner's feed and marks are not BOW's; real people appear by public facts
  only; actor models speak ABOUT a person, never AS the person.
- Minors: free-text asks from grades 5–6 are off by default (D179); any host inside a classroom
  inherits that.

## 7. Labels
REAL CURRENT: no-LLM runtime posture (D166, D179); device-bound seats and rejoin, mishearing-safe
join codes (BOW Economics Live); seats by lease (Live World page, prototype-grade); the read-only
Harbor → NBA crossing (unmerged). PROPOSED: everything in §2–5. SPECULATIVE: assistants honouring the
card and quoting faithfully at scale; spatial devices with a BOW-owned threshold.

## 8. Corrections after the platform critique (`critique/CRITIC_2_PLATFORM.md` §3B)

1. **Inside a host, BOW truth is CLAIMED, not VERIFIED — unless claims are signed.** A sandbox protects
   BOW's card from restyling; it does nothing about the host drawing its own "Verified by BOW" beside it
   (the Guest's forged-card test). So the ClaimSet carries **signatures**, not bare hashes, and a
   verifier the reader controls (the Browser, or a small verifier extension) checks them. This makes the
   Browser part of the trust model, not merely a destination — and weakens "observing happens mostly in
   other people's surfaces" as a *truth* claim.
2. **A `seat` in an address is a viewpoint.** Six prototypes put a seat in the address line (following
   the Wave 2 canon). Opening an address with a seat must yield exactly what an observer may see, and
   say so; authority only ever travels as an Offer.
3. **"Now" comes from the record's clock**, never the device's (the Cut's Reality clock ticked from the
   device while claiming liveness).
4. **`resolve(text)` must never guess.** Bench turned "late" into a confident airline claim; Jurisdiction
   refused everything outside three questions. The law stands; neither prototype met it.
5. **Identical-under-enumeration is a server property** (timing, status, size) — one page cannot prove
   it. The Guest's "Not for you" demonstration is an illustration, not evidence.
6. **What BOW may republish from Reality is a decision, not an assumption.** Licensed feeds (official
   league data) cannot be "wide and free"; the free layer is BOW's own records, public facts with
   sources, and open data under its terms.
7. **In practice nothing can be invoked from outside yet**: no URL, no endpoint, no embed; every host in
   the Guest is drawn inside the BOW page. The cheapest real step: serve one signed claim set as JSON for
   the Live World record and check it from a second client.
