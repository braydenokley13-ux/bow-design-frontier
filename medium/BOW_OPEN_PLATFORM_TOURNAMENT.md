# BOW Open Platform Tournament — Open vs Closed vs Hybrid

Status: parent comparison of three blind papers, 2026-09-29. All three advocates received an identical brief (`research/tournament/00_TOURNAMENT_BRIEF.md`) and none saw the others' output. Full papers: `research/tournament/{OPEN,CLOSED,HYBRID}_ADVOCATE.md`.

**Label of this whole document: HYPOTHESIS.** No market test, customer interview or outside developer stands behind any of it. All three advocates, and the parent, are the same model family, so convergence can be shared bias. That limit is real, and §6 names the test that would expose it.

---

## 1. The three positions in one paragraph each

**OPEN — "Open the thin waist; keep the canonical instance."**
- *Open:* the record format, address grammar, execution contract, truth legend and a public conformance suite, published now as a draft with an open verifier.
- *Keep:* canonical Worlds and the time authority (L3), trust roots (signed heads, transparency log, certification), licensed Reality (L6) and the verticals.
- Every record gets a **verification basis** tag: REPLAYED, SIGNED, ATTESTED or CLAIMED. Assessment counts only REPLAYED.
- Kill criterion: no outside implementer, author or verifier by month 12 means archive the spec.

**CLOSED — "Own the World, publish the receipts."**
- Closed *authority*, not hidden logic: BOW writes, sequences, verifies and curates, and anyone may read, cite and replay receipts.
- The strongest argument: *the only friction the clone test measured is the unprinted part, and a public write-spec prints it.* That manufactures compatible rivals that mint records shaped like BOW's.
- Seat secrecy, child data (FERPA/COPPA) and licensed feeds each need one accountable operator.
- Optionality asymmetry: opening later is cheap and welcomed, while closing later forks the community (OpenSearch, OpenTofu, Valkey).
- Publish a read/replay spec only when two tripwires fire:
  - a non-BOW author ships a World and a stranger forks it;
  - a paying institution needs a second reader;
  - a rival open format shows adopters.

**HYBRID — "Verification open, authority operated."**
- Decision rule, per layer: open the **source** only if openness raises the credibility of BOW's own claims *and* a reseller of that layer would not consume BOW revenue. Open the **spec** if a second implementer is plausible within about 24 months.
- *Open:* L0 (Apache-2.0), L1, and the L2 determinism contract with a reference verifier and vectors.
- *Closed or operated:* the host, the registry, rulebooks as content, and feeds.
- *Not yet:* the rulebook language, projection contract, L5 federation, marketplace and non-education verticals.
- Six evidence triggers (T1–T6) move layers, and a *Layer Charter* makes shipped rights irrevocable.

## 2. Convergence map: what three blind advocates all asserted

These are the strongest signals the tournament produced. Each was argued independently from the same facts.

| # | Blind consensus | Consequence |
|---|---|---|
| C1 | **Code, screens and grammar are not the moat.** The moat is the *canonical instance, its accumulated history, dated sourced rulebooks, signing keys and trust operations, licences*. All three add: **today that moat is zero** ("history starts at first start"). | Every month without a real running World is lost moat. Running World One for real on a real shared store is the most urgent *strategic* act, not a product nicety. |
| C2 | **Authority is operated, not published.** Time, seats, identity, secrets and canonical heads belong to an accountable operator. | L3 stays BOW's in every scenario. |
| C3 | **Verification must be possible without BOW's servers.** Even Closed ships a read-open verifier, static exports and escrow. | See §3.1: this makes L0 de facto public. |
| C4 | **Unify first.** There are five `bow://` grammars and three non-identical canonical-JSON functions; DC Receipt v1 and the World record disagree; `hash8` is 32 bits; there is no signed head. | Work item 0 in every paper. It is the cheapest, highest-value internal step (see the Contract's founder packet). |
| C5 | **No federation (L5), marketplace (L8) or rulebook language now.** Standardize after two independent implementations or three independent rulebooks exist, never before (the VRML97/OpenDoc/Xanadu lesson). | These are "not yet" by consensus. |
| C6 | **Licensed Reality is a contract moat and travels as provenance, never as payload.** | L6 closed in all three papers. |
| C7 | **Adopt existing agent protocols; do not invent one.** "An agent is a seat." | L7 is seat semantics plus adapters, not a new protocol. |
| C8 | **Student data never enters a public address space.** | This is a privacy invariant, not a strategy choice. |

## 3. Disagreement map, and the parent's adjudication

### 3.1 Fault line A: publish the *write* spec for L0 now, or only a read/replay verifier?

- Open and Hybrid: publish an Experimental L0/L1/L2 spec now.
- Closed: keep writing closed, and ship a read-open verifier plus escrow.

**Adjudication.** The Closed position contradicts itself on this line. A public verifier that replays a receipt *is* a specification of the record: its source states the canonicalization, hash, statuses and fold contract, which are exactly what the clone test found unprinted. Once BOW ships "anyone can verify", the write format is public in fact, whatever the licence says.

So the real choice is not open vs closed format. It is whether **BOW promises stability** (a compatibility obligation) and whether **BOW governs it alone**. On both, all three agree in substance: no stability promise before evidence (Open: "two implementations before v1"; Hybrid: T1; Closed: tripwires).

**Parent call:**
- Publish L0/L1 and the L2 determinism contract as **Experimental, with no compatibility promise, but with a public verifier and tamper vectors**, once the internal unification (C4) is done.
- The Closed argument that this "manufactures compatible rivals" is answered by the moat structure itself (C1). A rival can mint records *shaped* like BOW's but cannot mint records *signed into BOW's canonical heads*. Shape-compatibility makes a rival's records legible and comparable, which a medium needs and which does not threaten authority.
- Label: HYPOTHESIS.
- Dissent preserved: Closed may be right that the spec's existence invites a better-distributed rival to standardize first (its failure mode 4). That risk exists under every option. Closed concedes it cannot rule it out either.

### 3.2 Fault line B: a reference runtime or host (L3)?

- Open: an open single-node reference runtime now.
- Hybrid: not yet, and AGPL-from-day-one when triggered.
- Closed: never before tripwires.

**Adjudication: Closed and Hybrid are right on timing.** Closed's argument decides it: *standardizing a multi-host protocol before BOW can close seat leaks on one host is the wrong problem.* Wave-1 evidence confirms that seat secrecy today guards display, not inference (04 §7; 08 P9; 05 row 8).

A reference host would publish a confidentiality promise BOW cannot keep. Seat-scoped secrecy, child data and time authority need one accountable operator until derived-secret tainting exists. The Open paper's "classroom escrow" goal is met more cheaply by export plus a replay verifier plus written escrow. Label: HYPOTHESIS.

### 3.3 Fault line C: the trust model

- Open: a **verification-basis** axis (REPLAYED, SIGNED, ATTESTED, CLAIMED).
- Closed: **central signed heads**.
- Hybrid: both, plus an external log.

**Adjudication: these are complementary, not rival.** The verification-basis axis is the single best *architectural* idea the tournament produced. It is orthogonal to the seven epistemic statuses: those say *what kind of claim* a value is, while verification basis says *how a reader can check it*. The cross-domain report independently needs a related split (08 P14: RE-EXECUTED, ATTESTED, CLAIMED; 07 on sensors and custody).

Promoted to **CANON-CANDIDATE** in the Vocabulary: independently arrived at by three workers (Open, 08, 07), and demanded by correctness once any third-party runtime exists.

### 3.4 Fault line D: governance timing

**Adjudication:** Hybrid's trigger T2 is the only concrete proposal: neutral governance when two unfunded conformant implementations exist, or implementers name sole-editorship as the blocker. Adopt T2 as written. Neither Open nor Closed proposes a foundation now.

### 3.5 What the parent did *not* do

The parent did not "pick the hybrid". On the two decisions that matter:
- **A:** the write spec's existence is conceded by all three; the stability promise is refused by all three.
- **B:** Closed's timing wins.

The result resembles the Hybrid paper because the Hybrid advocate drew the boundary where the Closed advocate's own concessions and the Open advocate's own reservations meet. That is convergence under blind conditions, not compromise. Where Hybrid proposed something neither other paper supports (AGPL for a future host), it stays a proposal.

## 4. What must be open if this is a medium

The media-history evidence (06 §1, §4, §6) supports one test:
- A medium is **citable without the author's help** (an address anyone can mint and resolve);
- its record is **portable** (another tool reads it after the first dies);
- it is **authorable by non-specialists**.

Neither Flash nor HyperCard survived a single runtime.

So, *if* BOW claims the medium thesis, these must eventually be open. They need not be open now, but they must never be closed off:
1. **The record format** (L0): events, cuts, epistemic status, verification basis, typed unknowns, provenance and licence tags.
2. **The address grammar** (L1): permissionless minting, frame-declaring, content-derived.
3. **The replay/determinism contract** (L2 contract only): what a conforming fold must do, and the vectors that prove it.
4. **The legend** (the epistemic statuses): what each mark means, so any renderer can draw it honestly.
5. **A conformance suite**, meaning the tests are the spec.

Everything else can be a company: hosts, canonical Worlds, time authority, rulebooks as content, representation packs, licensed feeds, intelligence orchestration, authoring tools, verticals.

**If BOW decides it is *not* a medium but a vertically integrated product family, the Closed paper is correct in full.** The founder decision is therefore upstream of the platform decision (see Contract, founder decision 1).

## 5. Business architecture per layer

This is architecture, not pricing. Legend: ●● = strong, ● = some, ○ = none or negative.

| Layer | What compounds | Copyable? | Should be free | Monetizable | Switching cost | Network effect | Dev ecosystem | Expensive to operate |
|---|---|---|---|---|---|---|---|---|
| L0 record | Records that verify anywhere, and the archive | Trivially (clone test) | Yes: reading and verifying | ○ (charging kills it) | ●● once histories exist | ● verification network (PDF-reader-like) | Verifiers, converters | ○ |
| L1 address | Citations into histories: articles, courses, forks pointing in | Yes | Yes: minting and resolving | Name registry and resolution at scale (later) | ●● (links rot if you leave) | ●● every citation raises value | Embeds, link previews | ● resolver |
| L2 contract / rulebooks | *Content*: dated, sourced, both-sides-correct rulebooks plus regression corpora | Contract yes; sourced rulebooks costly to replicate | Contract free; rulebook *reading* free | Licensing and certification of rulebooks; model qualification | ● | ● shared rulebooks across Worlds | Rulebook authors (later) | ●● curation and sourcing |
| L3 host / authority | **The canonical instance's history**: time that actually passed, acts that actually happened, signed heads | **No: time cannot be copied** | Single-player Moments embedded anywhere | ●● hosting persistent Worlds, seats, identity, deadlines | ●● history and identity | ●● shared canonical Worlds | Operators later (T3) | ●● always-on, compliance, child safety |
| L4 representation | Representation packs and generation pipelines; the Browser's audience | Screens yes; *pipelines* less so | The Direct/accessible view | ● premium representations (3D, film) | ● | ○ | Pack creators (later) | ●● 3D and film generation compute |
| L5 network | Cross-World contracts and transactions | Protocol yes | — | ● transaction and verification fees at scale (speculative) | ●● | ●● (the Internet analogue) | Federation implementers | ● |
| L6 Reality | Licences, source relationships, dated corrections | **No: contracts do not fork** | Provenance metadata | ●● | ●● | ● | Connector builders under licence | ●● licensing cost |
| L7 intelligence | Seat-scoped evaluation data: how occupants behave in seats | Orchestration yes | — | ● orchestration and occupancy services | ● | ○ | Agent builders against the seat contract | ●● inference cost |
| L8 creators | Supply of Worlds and Moments; creator reputations | Tools yes | Basic authoring | ● take rate (later, T6) | ● | ●● two-sided (later) | Yes, the main one | ● review and moderation |
| L9 verticals | Institutional relationships; evidence validity; curricula | Features yes; *validity evidence* no | — | ●● today's only revenue path | ●● | ● | — | ●● sales and support |

What the table says:
- **The only uncopyable compounding assets are time-bound or contract-bound:** L3 history, L6 licences, L2 sourced-rulebook curation, L9 validity evidence. Everything code-shaped is copyable.
- **The expensive layers (L3, L4, L6, L7) are exactly the monetizable ones.** That is healthy: BOW charges for what costs money to run and gives away what costs nothing to copy.

## 6. The test that would expose shared bias

All three papers, written by one model family, praise "verification" and "canonical history". Two cheap tests could falsify the consensus.

1. **Buyer test.** Ask three district or enterprise buyers which they would pay for:
   - (a) a record they can verify without BOW;
   - (b) a hosted World that keeps running;
   - (c) neither.

   If no buyer values (a), fault line A reverts to Closed.
2. **Spec-only clone test** (Hybrid's proposal, echoed by Open). An unrelated model, given only the Experimental spec and vectors, must build a verifier that passes every vector and rejects every tamper case.
   - If it fails, the spec does not yet exist, whatever is published.
   - If it passes, and a rival then *does* mint BOW-shaped records, Closed's risk has materialized and §3.1 should be revisited.
