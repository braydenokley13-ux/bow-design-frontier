# BOW Portability and Composition v0

Status: proposal, 2026-09-29. It covers two things:
- how an executable system **leaves** its host (portability);
- how executable systems **combine** (composition, the "BOW Network").

Evidence: `research/wave2/W2D_OCCUPANCY_PORTABILITY.md` (portability facts), wave-1 reports 02, 05 and 08, and the product code they cite. Labels as in the Vocabulary.

---

# Part I: Portability

## 1. Portability is a level, and the level is a property of (bundle, audience)

No single "portable World" exists, and no single file format should be assumed. Portability comes in **levels**. A bundle's level also depends on **who is reading it**, because stripping private or licensed material lowers what that reader can verify.

| Level | What the bundle adds | Reader can… | Verification basis | BOW today |
|---|---|---|---|---|
| **L0 REFERENCE** | `system@digest`, instance, head, position, audience | cite and later resolve | CLAIMED | Five `bow://` grammars and a 32-bit `hash8`; **not yet** (K3) |
| **L1 CAPSULE** | the cut before the act, the act plus its BASIS, Facts, Unknowns, a non-evidence flag | inspect one moment honestly | CLAIMED, or REPLAYED if L2 material is attached | **EARNED, synthetic only:** DC Decision Receipt v1, `assessmentEligible:false` |
| **L2 REPLAY** | hash-chained record, recorded inputs, SYSTEM rules **by digest**, fuel/memory/state caps, golden vectors, expected head | re-derive every state and verdict without the host | REPLAYED | **Not portable today.** Receipt v1 replays through `ruleBundleId:"market-day-stock/frozen-v1"`, a label resolved to code *inside the reader's tree*. So it is a capsule with in-tree replay (W2-D, `decisionReceiptV1.ts:66,235-249`). |
| **L3 FORK-EXECUTABLE** | parent head, cut, interventions, suffix policy, occupant requirements, validity envelope, MODELED and no-writeback markers | continue it as a modeled branch | REPLAYED prefix; the suffix is MODELED, or GENERATED where fresh occupants act | DC `decisionBranch`, W Lab; **in-tree only** |
| **L4 HOSTABLE** | seat register (no keys), warrant versions, clock authority, rights terms, a migration act | stand up an authoritative instance with live occupants | ATTESTED by the new host | None |

**L4 is a fork with authority transfer.** The receiving host rebinds seats and keys and records an acceptance act. That creates a **new instance** whose `lineage.parent` is the imported head. **Importing alone never confers authority.** HYPOTHESIS (W2-D §2.1).

## 2. What blocks REPLAY portability today

These are EARNED facts from W2-D.

1. **Rules are named by label, not by digest.** DC's `ruleBundleId` is a string resolved to in-tree code. W saves record "birth rules" by version tag. Neither can be fetched and checked by a stranger.
   - Fix: content-address the rule bundle as the **bytes of the shipped artifact** (the Unison/Nix lesson: hash what runs).
2. **Floating-point transcendental functions are engine-approximated.** ECMA-262 §21.3 leaves `exp`, `log`, `sin`, `cos` and `pow` "not precisely specified". W's league simulation uses `Math.exp` (`sim.ts:53`, `agreements.ts:153`) and Box–Muller `log`/`cos` (`handover.ts:26`, `draftV4.ts:65`, `seasonTwo.ts:632`). Cross-engine replay of the League is **unproven**, and thresholded draws could flip.
   - DC's domain code has no transcendental calls, and its money is integer cents. **DC families are the cheapest first REPLAY target.**
3. **Canonicalization is locale-dependent.** DC's `canonical()` and `fingerprint` sort keys with `localeCompare` (the source admits it, `fingerprint.ts:10-11`), W has six copies of `canonical()`, and DF has three canonical-JSON functions.
   - Fix: **RFC 8785 JCS plus SHA-256**, with golden vectors.

**Deterministic execution target** (HYPOTHESIS, grounded in W2-D §2.2):
- rules compiled to a Wasm **deterministic profile**;
- `libm` compiled into the bundle, so transcendental results are pinned by hash;
- no nondeterministic host functions;
- **fuel metering**, so every replica agrees whether an act completes or traps. Out-of-fuel is a recorded `refused(out-of-fuel)`.

Even inside the deterministic profile, `memory.grow` and `table.grow` "technically remain non-deterministic", so memory caps belong in the pinned limits. DC caps bytes (1 MiB, 1,000 commands) but not compute, so a hostile loop is uncovered (08 P11).

## 3. What must never travel, and how a bundle degrades honestly

| Item | What replaces it | What the reader sees |
|---|---|---|
| Keys, credentials, seeds of unreleased random streams | Commitments plus already-released outputs. W releases dice one shot at a time, from a per-label HMAC; the earlier 32-bit FNV fold could be walked back and was fixed (`secret.ts:1-18`). A *closed* instance may carry its seed. | `Unknown{not-yet}` |
| Private seat knowledge beyond the reader's grant | Other seats' private acts as salted commitments | `Unknown{not-available-to-audience}` |
| Licensed feed payloads | Digest, licence reference and permitted uses (record / replay / fork / redistribute) | `Unknown{withheld-by-rights}` |
| External authority, including writeback connectors | Nothing. A class marker forbids "actualizing" a fork. | Effect `Unknown` until confirmed |
| Student identity and free text | Pairwise subject references. No whole-transcript inlining by default: DC's receipt warns the file holds "later actions and Avery's free text"; carry a prefix plus a head digest. | `Unknown{not-available-to-audience}` |

**The honesty rule:**
- The manifest states the highest level verifiable **for this audience**.
- Each stripped span appears as a typed Unknown with a digest, so a verifier can prove *that* something was withheld without seeing it.
- The verification basis for anything that depends on a stripped span falls to CLAIMED.
- **Nothing downgrades silently.**

HYPOTHESIS; each mechanism is EARNED somewhere (W2-D §2.3).

## 4. Model requirements without naming a vendor

A seat declares **testable** requirements instead of a model name:
- an acts-schema digest;
- a context floor;
- tool use and modalities;
- a latency class;
- a **conformance probe suite** the occupant must pass before it is seated.

Each act pins the actual occupant that made it. On replay without the model, acts replay and the occupant shows as `unavailable`. In a fork with `fresh-occupants`, any conforming model fills the seat, and its acts are **GENERATED**.

Models retire within months (a vendor's notice period is at least 60 days), so **replay may depend only on recorded outputs, never on re-querying**. Temperature 0 is not determinism: in one study, 1,000 temperature-0 samples gave 80 distinct completions. HYPOTHESIS, with external facts dated in W2-D.

## 5. Is there a single file format? No. The manifest is the format; containers are transport.

HYPOTHESIS (W2-D §2.5):
- **The format** is a JCS-canonical manifest plus content-addressed blobs with typed references.
- **L0–L2 transport:** a stored ZIP with the manifest first (the EPUB OCF pattern).
- **L3–L4 transport:** an OCI-style layout, because parent prefixes are shared and signatures and branches attach to a digest without changing it (OCI 1.1 `subject`/referrers).
- **Rejected as the exchange format:** SQLite (page layout is not canonical bytes; fine as a local store) and the USDZ pattern (it has no verification layer).

Contents by level:
- **L0:** `manifest.json`
- **L1:** + `capsule.json`
- **L2:** + `log.jsonl`, `inputs/`, `rules.wasm` (or pinned JS plus an engine attestation, labelled REPLAY-LOCAL), `limits.json`, `vectors/`, `expected.json`
- **L3:** + `branch.json`, with the parent prefix by digest
- **L4:** + `seats.json` (no keys), `clock.json`, `rights.json`, and a migration act

**The conformance vectors are the specification** (08 P14; Tournament §4).

---

# Part II: Composition

## 6. Four ways systems combine. Only one needs a network.

| Mode | Authorities | Clocks | Record | BOW evidence | Precedent |
|---|---|---|---|---|---|
| **Containment**: League contains clubs as sub-state | one | one | one | **EARNED**: W NBA `WorldState` holds all clubs under one reducer and one Commissioner clock | USD composition inside one stage; ECS |
| **Reference**: an instance reads another's pinned cut or boundary export | the reader's own; the source is never written | independent | separate | **EARNED**: Season Two computes its carry from Season One once, and "Season One is never rewritten"; W institution crossings are re-read fresh before use (02) | USD references/payloads; git submodules |
| **Contract**: effects cross only as messages the receiver accepts | two or more | independent | separate, bilateral cross-references | **EARNED (small):** "NBA-funded Scouting method prepares a relevant Harbor film session while keeping the two game records and their authority separate". `bow-bridge-1` is recognition-only, synthetic. | HLA federation; OAuth-style consent |
| **Transaction**: a multi-party change that must all happen or be compensated | two or more | independent | separate | **None.** DF's Handshake *depicts* "one atomic event, three books" through a League Office coordinator. | Sagas with compensation; two-phase commit |

**Laws of composition** (HYPOTHESIS; each is backed by at least one EARNED case or a refusal):

- **C1: Authority never crosses.** Each instance is authoritative only for its own record. Nothing in instance A can write instance B's record. W's ADR chose "separate institutions, narrow contracts" (option B) over a shared runtime.
- **C2: Only boundary exports cross, and they are closed-schema.** Exports are derived, read-only, versioned and recognition-only unless a contract says otherwise. Certain meanings are **unexpressible** across the boundary by type (score, money, evidence). EARNED: DC kernel guard; `bow-bridge-1`.
- **C3: Cross-references are bilateral and pinned.**
  - A cross-instance act names its basis in both instances (`A@head#n ↔ B@head#m`, full digests).
  - The heads form a **DAG of heads, never a merged chain** (08 P1).
  - There is no global order, only causal order through these references.
- **C4: Cross-instance "transactions" are sagas.**
  - Each step is an act in one instance.
  - Compensation is itself an act.
  - Unconfirmed effects stay `Unknown`.
  - Where a coordinator exists (a League Office, a clearing house), **it is itself an instance** with its own authority and record. It is never a hidden global lock.
  - Supply chains need exactly this; the League-as-coordinator is a league artifact (07).
- **C5: People and objects do not merge across instances.**
  - An occupant holds seats in several instances under **pairwise** references, with no universal person id (K7).
  - The "same" player in two Worlds is a pair of **counterparts**, not one object.
  - A career across instances is a *view* composed from each instance's records, as W's `nbaPlayerCareerTrace` already composes one within an instance.
- **C6: Conflicting models are compared, never reconciled automatically.**
  - Each claim carries its SYSTEM pin, status MODELED and envelope.
  - Comparison is a projection.
  - Reality observations score both (forecast-to-be-scored).
  - A **model-fork** (the same history under a rival mechanism) is the natural-system profile's version of WHAT IF (07). SPECULATIVE FRONTIER.
- **C7: Provenance composes by reference.**
  - A Fact in B derived from A carries `source = A@head + export id`.
  - Its verification basis is REPLAYED only if B (or the reader) can replay A's export; otherwise it is ATTESTED or CLAIMED.
  - Occupant knowledge crosses instances anyway (a human remembers), so the medium can govern **data** flow, never **mind** flow. What it can record is which cross-instance sources an act's basis opened.
- **C8: Composed clocks synchronize at declared points.** See `BOW_TIME_AND_FORKS_V0.md` §4.

## 7. Worked composition: the NBA

| System | Mode | Authority | What crosses |
|---|---|---|---|
| **League** (rules, cap, draft, schedule, Commissioner clock) | the coordinating instance | League Office / clock authority | registrations, approved transactions, public standings |
| **Clubs** | **Today: containment** in World One. **Alternative: federation.** Each club is an instance with private books, and the League "sees filings, not books" (DF Handshake). | each club's owner seat | filings (salary commitments, trade proposals) as boundary exports |
| **Players** | counterparts per instance; a career is a composed view | none (a person is not an instance; their *contracts* are agreements) | agreements, a career trace |
| **Arenas** | a contract with a venue-operator instance, or containment as today | venue operator | calendar rights, attendance as OBSERVED/RECORDED |
| **Media** | an external Reality source and contracts | the media company (external) | licensed feed digests, rights terms |
| **Markets / fans** | a MODELED demand system referenced by clubs | none (a model) | demand estimates with envelope |
| **Governance** (Board of Governors) | acts that **change the League SYSTEM version** through a recorded amendment procedure | governors' seats | new system digest; branches pin the old one |

**Containment vs federation is a real design choice, not a default.**
- *Containment* is simpler and **EARNED**: one authority sees everything.
- *Federation* matches the real league: clubs keep private books and the League Office approves transactions. It is what privacy between clubs requires once clubs are run by different people or institutions.

HYPOTHESIS: move a club out of containment only when its books must be private from the League authority, and not before.

## 8. Worked composition: an airline

| System | Mode | Clock kind | Notes |
|---|---|---|---|
| Airline operations control (crews, aircraft, schedule) | host instance | `external` (Reality time) or `scheduled` | Irregular operations: time does not wait (07) |
| Airport (gates, slots) | contract | own clock | A slot request is an airline act and an airport verdict (C3) |
| Weather | Reality feed | external | OBSERVED actuals and MODELED forecasts, with licence (L6) |
| Labor agreements | agreements (INST profile) | — | Duty-time rules are SYSTEM rules |
| Regulator | **external authority** | — | Its rules constrain the airline's SYSTEM version, and **the airline cannot amend them**. BOW has no primitive for this yet (07 #3). |
| Suppliers | contracts plus sagas | own clocks | Non-atomic; compensation (C4) |

What the airline case exposes:
- **external authority over the rulebook** (a regulator);
- **real-time clocks**;
- **writeback**: a real crew reassignment cannot be forked back.

All three are SPECULATIVE FRONTIER for BOW. The composition laws C1–C7 survive the case; the time model is tested separately in `BOW_TIME_AND_FORKS_V0.md`.

## 9. Is the BOW Network fundamentally a protocol for composition?

**Parent answer: yes. If a BOW Network exists, it is a composition protocol and not a product.** Its job would be to let independent authorities reference, contract with and transact against each other's instances, and to let any reader verify imported claims (C1–C7). That is the Internet's shape: it composes autonomous systems without global state (BGP). It is also HLA's shape for simulations: federations with time management.

**Distance, stated honestly:**
- Today there is **one** authority (the founder's), two products and a synthetic bridge. There is no cross-instance transaction and no independent host.
- The tournament's blind consensus puts L5 federation at **"not yet"**, with trigger T5: two independent hosts complete a cross-World transaction.
- Label: **HYPOTHESIS** for the claim that the Network *is* composition; **SPECULATIVE FRONTIER** for its existence.

**What must be true before a network is worth specifying:**
1. One record envelope and one canonicalization (K4; W2-A).
2. Signed heads.
3. Bilateral cross-references on one real cross-instance act. Harbor↔NBA scouting is the obvious candidate: it already crosses two instances with different authorities.
4. A second independent host.

Until then, "network" means **bilateral contracts** (`bow-bridge-1`), specified pairwise and verified by fixture exchange in both repositories. That is exactly the step the W `SHARED_SUBSTRATE_PROPOSAL.md` already names.
