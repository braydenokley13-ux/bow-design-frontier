# BOW Protocol Hypotheses v0

Status: **hypotheses only, 2026-09-29.** This is not an API, not a wire format and not a commitment. It explores what a BOW protocol layer might need, starting from what the products actually record. Evidence:
- `research/wave2/W2A_ONE_RECORD.md`: real DC and W data shapes mapped field by field;
- report 06 on address survival in past media;
- report 05 on precedents;
- report 08 on pressures;
- W2-B (time) and W2-D (portability).

Labels as in the Vocabulary. **Nothing here is EARNED except the code facts it cites.**

---

## 1. Starting fact: the record envelope is an interchange format, not a storage model

W2-A mapped seven real specimens into the parent's candidate record:
- a DC Market act;
- a DC v5 server act;
- a DC modeled branch;
- an NBA owner act plus a Commissioner advance;
- an NBA `LeagueMoment` and a Court possession;
- a Harbor chapter entry;
- a `bow-bridge-1` message.

**Verdict: YES WITH CHANGES.** There is no blocking mismatch, and one structural finding:

> **NBA World One has no act log.** Its server "journal" is truncated row snapshots ("no action semantics to re-derive"). Owner choices are last-write-wins slots (`sponsors.choice`, `castVote`). `reduce(state, action, ctx)` is pure, but its inputs are not kept. [EARNED, W2-A §1 S4, §3b]

**Consequence (HYPOTHESIS).** A BOW protocol cannot mandate event sourcing. The medium's L0 is an **interchange and verification format** that a system *exports*. Systems may run however they like, as event-sourced folds (DC, Harbor) or as stored state with invariants (NBA). The record states which (`actLog: retained | partial | absent`; `derive: fold | stored+invariants`).

This replaces the parent's earlier `REPLAYABLE | JOURNALED`, which W2-A showed is misnamed.

It also settles a founder question in advance: **the medium standardizes what systems can *show and prove*, not how they compute.** That matches the media-history lesson: standardize record, address and legend, and let engines compete (06 §3).

## 2. Revised minimal record envelope (HYPOTHESIS)

From W2-A §5, lightly edited. It covers both products' real shapes.

```
INSTANCE  id; context{rehearsal|institutional|personal}; lifecycle open|sealed@n
  system   [{from:pos, id, version|null, digest|null}…] + data pins        # null ≠ current; rule epochs allowed
  clock    {axes:[{name, kind: act-advanced|ticked|feed, authority}]}
  origin   null | {kind: fork|continuation, parent: id@head, cut: n,
                   edits:[act | edit{path,from,to,rule}],
                   suffix: replay-held|explicit|drop|closed-form, status: MODELED|CARRY}
  actLog   retained|partial|absent ; derive: fold|stored+invariants
ENTRY  (recorded acts only; stale/duplicate/sealed/rate refusals are request-level, never entries)
  pos n; requestId?; epoch?
  act{seat, attribution individual|team|unknown, origin actor|system|unstated, verb, args,
      basis{cut?{kind head|epoch|ordinal|round, token}, available[ref|Fact], opened[{ref,pos}] | Unknown}}
  verdict applied | refused(code|prose) | recorded
  inputs[{kind dice|time|imported-receipt|model-output|feed, derive?{fn,commit,label}, value|digest, released?}]
  effects[{object, before, after, rule: id@ver, reads[{path, ref|null}]}]
  events[{type, audience public|about[seat]|actor}]
  time{world:{axis:label}, recorded?:epoch-ms}; stateDigest? (alg:hex)
READ
  Fact{value|ABSENT, status, audience, source path|derivation|external{src,date,licence?}, cut}
  Unknown{kind not-yet|not-recorded|not-observable|not-modeled|sealed-to-audience|out-of-envelope|withheld-by-rights, reason}
  Refused{kind unsupported-version|integrity|out-of-envelope}
  Projection(cut, audience) -> [Fact|Unknown|Refused];  can(seat, cut) -> [act | refused(reason)]
EXPORT{ref resolvable|opaque-pairwise, cut|sealed, basis?, before?, after?, material?,
  verification{consistency REPLAYED|INVARIANTS|NONE, authenticity NONE|SIGNED|ATTESTED},
  limits{context, evidence:false?, effect, retention, nonClaims[]}}
```

**What changed against the parent's first candidate, and why:**

| Change | Why (W2-A evidence) |
|---|---|
| `effects` with cited rule and **reads** | Every product already records deltas with a cause and a rule (DC `causalChanges`, Harbor edges, NBA transfers, Foundry `resourceDeltas`). Knowability-per-input *needs* `reads`. |
| `origin.kind: continuation`, `status: CARRY` | Harbor chapters embed predecessors, and NBA Season Two computes a carry from Season One. These are non-modeled successors, not forks. |
| `requestId` | Idempotency keys exist in both products (DC `requestId`, W `clientActionId`), and they are also the natural address of an act (§3). |
| Refusals split in two | **Request-level** refusals (stale, duplicate, sealed, rate-limited) never become entries anywhere. **Recorded refusals** (DC Market) are entries. The verdict also means "the actor declined". |
| `basis.cut` optional, typed by grain | Accepted acts are always decided against the head, so a stored cut is a *request guard* and redundant on accepted entries. Its grain varies: revision, stop id, ordinal, round. |
| `Fact{ABSENT}` | DC's `absent` is a positive fact ("no receipt yet"), not an unknown. |
| `Unknown{not-observable}` | DC's `understanding`, `delivery`, `externalIdentity` and `outsideOutcome` are things the instrument cannot observe. |
| `Refused` as a third read result | Integrity and version refusals on read (DC has eight chronology refusal reasons). |
| **Verification as two axes** | *Consistency* (REPLAYED, INVARIANTS or NONE) and *authenticity* (NONE, SIGNED or ATTESTED) are independent. DC receipts are REPLAYED but unauthenticated; the bridge is unreplayable but HMAC-tagged. |
| `limits` on exports | The bridge carries use limits, retention and non-claims ("not evidence") that no other field expresses. |
| Per-system digest scope | One canonicalization can unify, but **digest scope cannot**: DC pins prose, while W's legacy replay strips prose keys. Scope must be a declared field set per SYSTEM. |

### 2.1 Revisions after the adversarial critics (Contract §11)

These changes apply to the envelope above. HYPOTHESIS.

- **Record-bearing is a declared precondition** (Critic 1, A3): `INSTANCE.recordBearing: yes | no`. Entries, and any consistency claim about acts, exist only where acts are retained with a position assigned *before* acknowledgement. Snapshot publishers export state plus INVARIANTS, never ENTRYs.
- **The basis is mandatory on every entry** (A4): `basis.cut{kind, token, seenAt}`, or `Unknown{not-recorded}`. The draft's "redundant on accepted entries" is withdrawn, because W auto-retries after a compare-and-set conflict.
- **Supersession** (A1):
  - a `supersede(to: cut)` verb by the authority;
  - `INSTANCE.epochs[{from: pos, kind: rule | supersession, head}]`;
  - a read result `Superseded{epoch}`;
  - "in effect" means in effect on the current epoch.
- **Commit-before-use inputs** (A7): `inputs[].derive{commit, reveal: pos | scheduled}`. A joint or beacon seed is required when the host is a stakeholder. **DRAWN** is a status.
- **Host inputs recorded** (A8): any host-side value a transition reads (for example a seat registry) is an input on that entry.
- **One head per position across audiences** (A5). Exports are projections of the same head. Unknown reasons cite a rule id that replay can check.
- **Salted commitments** (A6): every digest over a small domain is salted. For private-information instances, a non-host export's consistency is CLAIMED beyond the first stripped act.
- **Availability** (A13): `INSTANCE.availability{model, durableBeforeAck: true, failover: recorded-act}`.
- **Meta-rules** (A10, A11): `INSTANCE.metaRules` digest (amendment, succession, seat repair), fixed per lineage.
- **Cross-instance acts** (A12): a request/accept pair with a declared basis policy (strict or lookahead). Sagas carry deadlines with typed silence.
- **Grounding references** (A17): salted per instance by default. Only an explicit public-place or public-figure namespace is joinable.

**Known vocabulary defect to fix before any shared reader.** W's `private` status has **two opposite meanings**: "known to this seat only" (scouts' reads) and "hidden from this seat" (which club). It maps to nothing until split (W2-A §3e). This is added to the Kill List as K28.

## 3. Addressing: coordinates, not a URL

### 3.1 The design rules, from media that lasted (06 §4)

Addresses survive when they:
1. derive from **stable structure** (work, coordinates, timeline, grid, content hash), not layout or generated ids;
2. cost nothing to mint;
3. **name their frame** (edition, datum, frame rate, engine version, commit);
4. compose as **whole plus part**.

Addresses die when they point at position in the current layout (page, notebook cell `In [n]`, CAD `Face8`) or need a central registry (Xanadu tumblers).

Most survivors look nothing like a URL: `A1`, `01:00:05:12`, `John 3:16`, `231a`, a SHA.

### 3.2 Which founder coordinates are identity, and which are something else

| Coordinate | What it is | Why | Label |
|---|---|---|---|
| **SYSTEM** | **Frame**, the "datum" | It declares how to interpret everything else (like a map datum or a frame rate). A pinned head already implies it, so a *living* reference must declare it to survive rule changes. | HYPOTHESIS |
| **WORLD / INSTANCE (lineage)** | **Identity** | What history this is | HYPOTHESIS |
| **BRANCH** | **Identity, and not a separate coordinate** | A branch *is* an instance whose origin names its parent. Making "branch" its own axis creates two ways to say the same thing. | HYPOTHESIS |
| **TIME CUT** | **Position**: `now` · `pos:n` · `before:n` · `after:n` · `sealed` · `at:<label>` · `head:<digest>` | W2-A found every product needs named cuts (DC `beforeAct/afterAct/atSeal`, W `sealedAt`, stop labels). A label names a *span* of positions, so the end must be stated. | HYPOTHESIS |
| **MOMENT** | **An alias, not a coordinate** | A Moment is a named reference to an act plus its basis. It *resolves to* (instance, position, audience) and is itself an addressable object. | HYPOTHESIS |
| **OBJECT** | **Focus**: a path inside the cut | Paths must come from stable structure (role or entity keys), never generated ids. That avoids CAD's topological naming problem. W already has four focus grammars (`actions.3`, `games[3].result`, `/proposals/0`, `catalogue.teamOf(..)`), which must collapse to one. | HYPOTHESIS |
| **ROLE** | **Audience**, which is **capability-gated** | It names *whose view*, but naming it grants nothing. Resolution requires the viewer's credential. It must never be a capability URL for anything seat-private or student-derived. | HYPOTHESIS |
| **VIEW / REPRESENTATION** | **Negotiated, not addressed** | The same cut can be a table, a place or a timeline, so representation is chosen at view time (like HTTP content negotiation). **Exception:** an *authored* representation (a Film edit, a published story door) is its own object, with its own address, that *references* a cut. | HYPOTHESIS |
| **ACT** | **Focus by idempotency key**: `act:<requestId>` | W2-A: the one reference both products already resolve (W `lookupActionReceipt`, DC dedupe) | HYPOTHESIS |
| **QUESTION** | **Optional door text** | DF's design rule, now a protocol idea: "a door into a past moment is named by its question, never by its answer" | HYPOTHESIS |

**Answer to the founder's framing question: one address, orthogonal coordinates, or the wrong framing?**

It is one **typed tuple** with slots of *different kinds*, and it is **not one hierarchy**:

```
REF := frame (instance [@system-pin] [+ chain])
       · position (now | pos:n | before:n | after:n | sealed | at:<label> | head:<digest>)
       · audience (public | seat:<id> | role:<name> | authorized:<grant>)      # names a view; grants nothing
       · focus    (object path | act:<requestId> | record:<id>)                  # optional
       · question (text)                                                        # optional
REPRESENTATION: negotiated separately; never part of identity.
```

Identity is (frame, position, focus). Audience is a *request for a view* that the resolver must authorize. Question and representation are *presentation*. Mixing these kinds is how addresses leak (a capability in a link), rot (a layout position in a link) or lie (a view choice treated as a different thing). HYPOTHESIS.

### 3.3 Two regimes: living and pinned

- **Living**: `frame · now · …`. It resolves to the current head and is mutable. Use it for doorways: embeds in a course, "open my World".
- **Pinned**: `frame · head:<full digest> · …`. It is immutable and verifiable. Use it for **citations, capsules and forks**. Anything cited must be pinned.
- **`pin(living) → pinned`** is the one conversion, and every resolver must echo the position it resolved to (W2-B T10). The precedents are git refs vs commits, Memento, Datomic as-of and DOIs.
- **The 32-bit `hash8` is REJECTED** (K3). Use a full digest with an algorithm tag (`sha256:…`) over JCS-canonical bytes (RFC 8785).

### 3.4 Radical alternatives considered

| Alternative | What it would be | Verdict |
|---|---|---|
| **Query-as-address** (Datalog/Datomic-style: `as-of(head) · as(seat) · pull(path)`) | The address is a small query program | **Keep as the resolution model, not the citation form.** Query semantics are versioned, so a query address rots when the query language changes. |
| **Content-addressed claims only** (IPFS-style: everything is a hash of a capsule) | No names, only hashes | **Keep for pinned citations.** Alone it cannot express "now", and discovery needs an index. |
| **The history as its own address** (genesis plus act list: the "seed plus inputs" of games) | The ultimate content address | **Conceptual only.** A pinned head *is* its digest. Replay files show it is fragile across engine versions (Doom demos, Minecraft seeds). |
| **Indexical addresses** ("three acts ago", "Boston's last decision") | Relative to a context | **Useful inside representations; never shareable alone.** They must pin on share. |
| **Spatial addresses** ("Boston arena, section 12, at tip-off of Game 41") | Place plus time | **Resolves *through* a place index to (frame, position, focus).** Human-friendly and ambiguous, so it must pin on share. See Contract §6 for real-geography grounding. |
| **Timecode within an episode** ("Court possession 17") | A local coordinate inside a sub-history | **Keep.** It composes whole-plus-part: W's `court-possession:<league>:<seg>:<k>` is already this. |
| **Descriptive addresses** ("the trade that put Boston over the apron") | Resolved by search | **Door text only.** Never stable. |
| **Capability addresses** (the link grants access) | Access and address as one token | **REJECTED for anything private or student-derived** (links leak). Possibly acceptable for public forks. |

## 4. Cross-instance references

- A cross-instance reference is **pinned and bilateral**: `A@head#n ↔ B@head#m`, with full digests. It carries both SYSTEM digests and the origin basis (W2-B T15; Composition C3).
- Heads form a **DAG of heads, never a merged chain** (08 P1).
- **Opaque pairwise references** are required at trust boundaries. `bow-bridge-1`'s artifact reference is an HMAC, deliberately unresolvable by the other side (W2-A S7).
  - So the protocol needs *both* resolvable references and **opaque pairwise references** whose meaning only the issuing side can resolve.
  - A universal person or object identifier is REJECTED (K7).

## 5. Hypothetical protocol verbs (not an API)

These name the *semantic operations* any BOW surface or external caller would need. External AI assistants, publishers and other Worlds would call the same verbs.

| Verb | Input | Output | Authority needed | Note |
|---|---|---|---|---|
| **OPEN** | ref (living or pinned), audience, as-known-at, rules = recorded or reinterpreted | Projection: Fact, Unknown, Refused, plus the resolved position | the audience's credential | W2-B T10 |
| **WHY** (how do we know) | ref plus focus | derivation: effects with cited rules and reads, sources, verification basis | as OPEN | M12: derivation, never causation |
| **CAN** | ref, seat | affordances: legal acts, or refused with a reason | seat credential | W2-A: `can(seat, cut)`; DC and W both compute affordances |
| **ACT** | living ref, seat, requestId, basis token, verb, args | verdict plus entry position, or a request-level refusal | an authenticated seat (M13) | idempotent by `requestId` |
| **FORK** | pinned ref, edits, suffix policy, system pin | branch ref (content-derived), status MODELED | read access to the cut; forks run *where* the private material lives (W2-D §1.4) | never writes back (M10) |
| **EXPORT** | ref, level (L0–L4), audience | bundle with verification axes and limits | as OPEN; stripped spans become Unknowns with digests | Portability §3 |
| **VERIFY** | bundle | consistency (REPLAYED, INVARIANTS or NONE) and authenticity (NONE, SIGNED or ATTESTED) | none | Reader conformance level |
| **FOLLOW** | living ref, audience | new projected entries as they are appended | as OPEN | a subscription; never pushes private data to a public audience |

**Where AI fits.** None of these verbs needs a model. Runtime rules, state transitions, history, replay, forks, projections and most WHY chains are deterministic. Models appear only as *occupants* submitting ACTs through seats (M17), or as *clients* calling OPEN, WHY or FORK on a user's behalf. This keeps the substrate independent of any intelligence provider, as the thesis requires. HYPOTHESIS.

## 6. What is deliberately not protocol

- **Domain rules and content.** Every SYSTEM keeps its own events, and the envelope treats domain event types as opaque (K10).
- **Storage and computation.** Fold or stored state is the system's choice (§1).
- **Representations and UI.** Only the *laws* are shared (Representation Contract).
- **Identity providers.** Seats bind to whatever authentication the host trusts; only attestation *records* are standardized.
- **Ranking and discovery.** Search over systems is a product, and any ranking must be plural and disclosed (08 P13).

## 7. What would make these hypotheses true or false

1. **Spec-only implementer test.** A fresh agent receives only §2 and §3 plus golden vectors, and must build a reader that opens and verifies one DC capsule and one NBA advance-plus-Moment export. If it needs product code, the envelope is not yet a spec.
2. **One canonicalization.** Replace DC's 17-plus and W's 7 canonicalization functions with JCS + SHA-256 inside one product first, and confirm that stored digests are unchanged or deliberately re-issued.
3. **One real cross-instance act with bilateral pinned references:** the Harbor↔NBA scouting crossing.
4. **Address coverage.** Point at every W2-A specimen with the §3.2 grammar. Any specimen needing a new slot is a defect.
