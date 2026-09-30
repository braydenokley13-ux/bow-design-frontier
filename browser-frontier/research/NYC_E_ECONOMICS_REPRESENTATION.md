# NYC Lane E: Economics and representation at scale (critic)

Lane E, adversarial critic, 30 Sep 2026. No code. Evidence tags:
**[P]** a primary page I read this session · **[M]** my own measurement this session · **[A]** lane A's
reading or measurement (29 Sep) · **[R]** read in the BOW repo · **[S]** search snippet only, verify.
Any untagged cost is an **estimate** from drivers: an order of magnitude, not a forecast. Units: PH, PW, PM and PY are person-hours, -weeks, -months and -years. Claim labels: REAL
CURRENT PRODUCT CAPABILITY / PROPOSED PLATFORM CAPABILITY / SPECULATIVE FRONTIER. AI labels: NO AI ·
SMALL · FRONTIER OCCASIONAL · FRONTIER CONTINUOUS.

## 0. Verdict

- **NYC is economically plausible at one depth only:** recorded ground for the whole city (L0/L1,
  L3 massing as context), plus a cluster of about 12 systems at L0–L2 with at most one L5 place and
  no L4 on real buildings. Most systems must be AUTHORED institutions on RECORDED ground; REALITY is
  affordable only where facts come from cheap authoritative sources (registries, filings, the CBA,
  the MTA feed). Not plausible: a city of executable institutions, or a premium 3D city.
- **In a Reality City the cost ladder runs opposite to the depth ladder.** Drawing New York is almost
  free: Midtown's 4,142 prisms are 0.59 MB gzipped [A], and hosting the whole city costs tens of
  dollars a month (estimate). Making New York mean something is expensive, because facts, site
  bindings, rulebooks and review all cost money. L0, the "free floor", is where REALITY's cost sits.
- **The frontier's unit table prices pixels.** A Reality City needs three more units: Fact, Site and
  Review. None of them amortizes across systems.
- **A connected cluster of different kinds of system is the worst case for kit amortization,** because
  every schema is first-of-its-kind. A cluster is cheaper per useful door only after the verticals
  exist, and only through RECORDED edges. The founder's showcase question ("how would this transit
  disruption affect tonight's arena?") needs a MODELED edge, which is the most expensive kind of door.
- **The biggest trap is that the city is cheap to draw and expensive to mean.** Drawing 1.08M
  buildings promises 1.08M doors, and BOW can afford to keep perhaps dozens.

## 1. The frontier's cost model, attacked

`REPRESENTATION_ECONOMICS` §1 prices three units: Instance, Schema and Kit. Critic 2 §3.A adds Fact.
Two more are missing: Site and Review.

| Unit | What it is | Paid in | Grows with | NYC exposure |
|---|---|---|---|---|
| Instance | fork, session, season | compute | viewers × forks | about free |
| Schema | one shape of system | design, deterministic compile, one review | domains | ~10–15 for the cluster (estimate) |
| Kit | domain representation | PW–PM (estimate; Boston's hours were never recorded) | domain families | ~6–9 families, ~4 of them new |
| **Fact** (Critic 2) | typed, sourced, dated, licensed value over time | sourcing, verification, licence | systems × fields × time × sources | the dominant recurring cost |
| **Site** (new) | binding a system to real ground: which BIN/BBL, which authority, which relation (owns · leases · operates · licenses · hosts), plus lane A's overlap, vacancy and institution tests | human judgement | systems, not buildings | minutes when clean; hours when a parcel is not an institution |
| **Review** (new; `REPRESENTATION_ECONOMICS` §7 names it but never prices it) | a human signature on a schema, kit, compile, generated asset or fact conflict | expert hours | everything promoted | the governor of growth |

**The Fact unit is already real in BOW's shipped code.** In
`runtime/src/modules/sameLine/world.ts` [R] (REAL CURRENT PRODUCT CAPABILITY):
- About 115 sourced rows cover 13 club seats and the league thresholds.
- `REFRESH` requires club positions to be re-checked "before any class, and after any trade deadline".
- "Three of the six rows re-checked on 2026-09-03 disagreed with what this file said."
- "Nearly every 2026 dollar figure … traces back through one publisher to one reporter, so 'two
  outlets' has never meant two sources."
- Two published payroll definitions differ by "up to ~$52M on one club".

That is one domain with one rulebook, in the best-documented sports league there is, and it already
needs a person before every class. New York multiplies that.

**The substrate names institutions but does not describe how they operate.** Measured today [M]:
- The Facilities Database lists 34,446 facilities citywide, and 1,306 inside lane A's Midtown box.
- 1,292 of those 1,306 (98.9%) record capacity as 0. Lane A's rule reads that as UNKNOWN.
- FacDB covers only government-funded, licensed or certified facilities [A]. The brief's media
  companies, banks, agencies and sponsors are not in it at all.

**Attacks on specific claims:**
- *"Cost in proportion to shapes and domains, never to the number of systems"* (RE §1): true for
  pixels, false for Fact, Site and Review, which are most of New York's bill.
- *"The floor is a promise, not a cost centre"* (RE §6): in a Reality City the floor is the cost
  centre, because facts live at L0 and every higher level only re-renders them.
- *"Cost follows what is visited, not what exists"* (RE §3): true for compute, false for knowledge
  time. A bitemporal record cannot be rebuilt from sources that overwrite and keep no versions, as
  footprints and PLUTO do [A]. Snapshots must precede visits; deferred, they are lost for good.
- *"Cached per schema × kit × tier, never per state"* (RE §2): live REALITY changes every 30 seconds
  (GTFS-RT), so compiles are parameterized templates (Critic 2) and the cache key carries the as-of.
- *"Cost is not the strongest argument"* (AMBIENT §6): right for a classroom; at city scale the unit
  becomes systems × refresh, not asks (§3).

## 2. The L0–L5 ladder, priced

Per system is given as first of its kind → nth instance. Per neighbourhood means a Midtown-sized box
(about 4k buildings and 1.3k facilities). Per city means 1.08M buildings, 858k lots and 34k facilities
[A][M]. All figures are estimates unless tagged.

| Level | Per system | Per neighbourhood | Per city | AI | Dominant driver |
|---|---|---|---|---|---|
| **L0 Direct / text / data** | schema + Direct compile: PW. A new domain's rulebook: PM–PY (the CBA engine is the precedent, hours unrecorded). A REALITY instance's facts: 10¹–10² PH per refresh cycle. An AUTHORED instance: ≈0 | registry rows, automated, privacy-filtered: ≈0 marginal | ingest, snapshot, diff and rights-ledger pipeline: 1–3 PM once, then 10⁰–10¹ PH a week | NO AI compile · SMALL batch glosses · FRONTIER OCCASIONAL extraction from filings, human-checked | **facts and rulebooks** |
| **L1 diagrams / maps / timelines** | ≈0 above L0, plus one Site binding: minutes if FacDB matches cleanly, hours on a multi-authority lot | under 1 MB gzipped [A]; seconds to build | PMTiles pipeline 1–4 PW; hosting ~10¹ $/month even at 10⁶ sessions (R2: $0.015/GB-month, free egress, $0.36 per million reads [P]) | NO AI | Site binding; label copy |
| **L2 domain representation** | kit: PW–PM (unmeasured). Nth system: hours (skin + binding) | not a unit: L2 is paid per domain, not per place | proportional to the number of domains (10¹), not buildings | FRONTIER OCCASIONAL authoring aid; NO AI at runtime | design + review. **Best value per dollar on the ladder** |
| **L3 procedural spatial** | compiled room through a spatial kit: kit PW–PM; compile ms–s, cached | massing ≈0 (4,142 prisms, 0.59 MB [A]) | 1.08M prisms, streamed: 2–8 PW of engineering. Chromebook frame time never measured | NO AI | device testing; honesty labels |
| **L4 AI-assisted spatial** | generation ~$0.4–0.8 per textured mesh (Meshy: 20–30 credits a mesh [P]; retail about $20 per 1,000 credits [S]). Curation (de-light, rights / likeness / marks screen, GENERATED stamp): 0.5–2 PH per accepted asset | façades for 4,142 real buildings: 10³–10⁴ PH, each a GENERATED skin on a RECORDED building. **Refuse** | **refuse** | FRONTIER OCCASIONAL, offline; runtime generation refused (RE §3) | human taste and rights. Compute is ≤5% of an L4 kit's bill (~10² assets: 10² PH against 10²–10³ $) |
| **L5 premium, creator-authored** | PW–PM per place, plus a device test and a rights review | 0–1 places | 1–3 places in total | copilots only | skilled hours; reuse (G's untested "Denver from the Boston kit") |

**The inversion.** L0 carries the most expensive thing, facts, at the cheapest rendering. L3 is the
cheapest thing to produce city-wide and also the most visible. L4 and L5 are expensive per unit, but
their count is bounded. A budget allocated by visual depth goes to the wrong place.

## 3. AI per level, and how "occasional" becomes continuous

Anthropic list prices per million tokens, input/output (skill price table cached 2026-09-25 [P]):
Haiku 4.5 $1/$5 · Sonnet 5.5 $2/$10 · Opus 5.5 $4/$20 · Fable 5.1 $10/$50. Batch is half price.

| Label | Where it belongs in NYC |
|---|---|
| **NO AI** (mandatory wherever truth is touched) | ingest, diff, massing, compile, the binding tests, truth textures, SCALE along typed relations, Concordance parity, the MTA mirror, every WHY or KNEW that ends at a snapshot |
| **SMALL** | routing words to verbs or the ask catalog; glosses per rule (batch, reviewed once); de-duplicating Wants; assisting the privacy screen (the rules still decide) |
| **FRONTIER OCCASIONAL** | extracting facts from filings (a 10-K, a Form 990, a budget), about $0.1–1 per document at list price and then checked by a person; help authoring a kit; L4 generation; drafting a coupling model, which then needs review |
| **FRONTIER CONTINUOUS** | nothing in representation. The one tempting product is a per-viewer "ask the city" guide, which is the **only AI cost that scales with audience rather than with systems**. Build it only if a test shows it beats typed doors |

**Occasional × N = continuous.** Research E puts one open-world compile at about 10⁶ tokens: at list
(0.9M in, 0.1M out) about $3 on Sonnet 5.5, $6 on Opus 5.5, $14 on Fable 5.1, half in batch. One pass
over FacDB's 34,446 facilities is about **$10⁵**; quarterly refresh, **$10⁵–10⁶ a year**. Review, not
compute, stops it: at 1–4 PH per system a pass is 3×10⁴–1.4×10⁵ PH, **about 20–70 person-years**
(estimate). Critic 2's Want threshold becomes a hard rule for NYC (SPECULATIVE FRONTIER: open-world
compile does not exist yet).

## 4. The 12-system cluster, system by system

"Geo works?" asks whether New York geography answers questions that a list could not.

| System | Honest posture | Cheapest authoritative facts | Geo works? | Depth worth paying for | Cost class |
|---|---|---|---|---|---|
| Club | REALITY through public facts, or an AUTHORED club (lane B's fictional HQ) | pr.nba.com thresholds; cap trackers, which come from one publisher and are refreshed by hand [R]; completed box scores; SEC filings of the Knicks' parent, MSG Sports [S] | no | L2 cap sheet; reuse the Boston L5 kit | kit exists; CBA engine REAL; facts recur |
| Arena | REALITY site; AUTHORED or MODELED operations | footprint BIN 1082908; lot BBL 1007810001, listed in PLUTO under the national rail corporation [A]. Arena owner and the clubs' licences: MSG Entertainment, arena licence agreements [S] | **yes** (crowd → street → transit) | L3 massing (COMPUTED) and L2 bowl (Boston's three kinds of night). **No L5 interior of the real Garden** | Site: four parties on one site |
| League | REALITY rules | CBA, pr.nba.com | **no.** The most powerful authority in the cluster has no useful geography | L0–L2 | engine REAL |
| Agency | AUTHORED | none public | no | L0–L2 | small schema |
| Media | AUTHORED; reported rights deals RECORDED with sources | reporting | no | L0–L2 | ledger family |
| Sponsors | AUTHORED | reporting | weak | L0–L1 | ledger family |
| Finance | AUTHORED | live market data is a licensed product [verify fee schedules] | no | L0–L2 | ledger family |
| Transit | REALITY, OBSERVED | MTA GTFS / GTFS-RT, free under mirror, no-modify and lag terms [A]. Nine subway feeds totalled 301 KB in one poll at 04:01 UTC [M] | **yes** (network, stations, headways) | L1 map + Marey chart (L2) | cheap facts; the mirror needs operations |
| Port | REALITY, snapshot | PANYNJ open data last updated 2015–16 [A]; press releases entered by hand; AIS (CC0) for history | **yes** (berths, channels) | L1 + L2 berth schedule | new kit; facts once a year, by hand |
| Hospital | AUTHORED operations on a real site; never implies the real operator | NYS DOH facility list [A]; federal cost reports [verify] | partly (catchment) | L0–L2 staffing board | new kit **and** new rulebook: expensive |
| University chem lab | AUTHORED | none | **no: pure decoration** | L2 molecules and equations: a premium domain notation, not a place | new kit and model; chemistry review |
| Museum | REALITY collection | Met Open Access: CC0 metadata, 502,881 objects, images only when public domain [A] | inside the building yes; the city weakly (provenance is global) | L1 timelines + L2 collection | cheap facts; new kit |
| Historical center | REALITY archive | NYPL metadata CC0; many old maps and photos are non-commercial, share-alike or still copyrighted [A] | yes (time-maps), but limited by rights | L1 | rights ledger does the heavy work |

Geography does real work for 4 of the 13 systems (arena, transit, port, historical maps) and some work
for 2 more (hospital, museum). **For 7 of 13 it is decoration.**

**Cluster estimate.** Each part:

| Part | Estimate |
|---|---|
| Substrate | 1–3 PM |
| Kits: ~6–9 families, ~4 new | 0.5–1.5 PY |
| New rulebooks or models: port, hospital, lab, transit coupling, commercial ledger | at least PM each; **the largest unknown** |
| Facts for ~6 REALITY systems | 10¹–10² PH per cycle each |
| Site bindings | 13 × hours |
| Edges: 15–30 | days each |

In total, **about 1–3 person-years** for a cluster that is honest at L0–L2. Drawing the city is under
5% of that (estimate). Nobody recorded what Boston cost, so measure before quoting any of this.

## 5. "All of New York"

| Meaning | Verdict | Why |
|---|---|---|
| Recorded ground: footprints, PLUTO, FacDB, landmarks, DOB change events, massing | **PLAUSIBLE** (PROPOSED) | PM once, PH per week, ~$10¹–10² a month. It is an atlas of structures, not a Browser of systems. Its doors are "Here" doors: what stands on this lot, since when, and on whose record |
| Photoreal or generated New York | **NOT PLAUSIBLE** | Terms, honesty and classrooms, not price. Google tiles: no caching, offline use or derived data; undated [A]. $6 per 1,000 root requests after 1,000 free [A], each buying up to three hours [P]: 10⁶ sessions ≈ $6k a month at list (volume tiers unread). Cesium ion output stops when the term ends [A]. An offline one-machine classroom (D12) can stand on neither |
| A city of executable institutions: 34,446 facilities plus every private firm | **NOT PLAUSIBLE** | Review costs 10¹ person-years per pass. Operating facts are missing (capacity 0 on 98.9% of Midtown rows [M]). The result would be GENERATED structure dressed as REALITY: a god simulation built up by accretion |

## 6. Where premium representation pays, and where geography is expensive decoration

**It pays in three places:**
1. **Domain-native notation (L2):** the cap sheet, a Marey chart, a berth schedule, a staffing board,
   a molecule or an equation. Here the representation *is* the knowledge. Each kit amortizes over
   every instance of its domain everywhere, not only in NYC.
2. **One place where place does work a list cannot** (Boston's rail: funded rooms lit, absence as
   furniture): an L5 set piece reused across sessions and on Moment cards.
3. **Geography where the system is itself spatial:** transit, the port, crowd flows, time-maps.

**It is decoration, cheap to draw but expensive to mean, in four cases:**
- **Massing behind systems whose economics are not spatial** (league, agency, media, finance, lab).
  The cost is not pixels but attention, frame budget and honesty: every prism looks like a door.
- **Interiors of real buildings** (the Garden, a hospital): they imply the real operator's state, and
  17 U.S.C. §120(a) frees pictorial representations of a building "located in or ordinarily visible
  from a public place" [P]; whether an interior reconstruction is covered is for counsel, not design.
- **L4 façades, props and crowds on real places:** stippled, they are noise; unstippled, they read as
  REALITY.
- **The league office's street address.** The authority matters; the building does not.

**Rule:** spend on representation in proportion to the measured questions it answers that a list
cannot (research C §2.8's test), never in proportion to how real it looks.

## 7. Connected clusters versus isolated Worlds, per useful door

**What counts as a useful door.** It is an address that opens onto state a person can act in or
question, where every mark shows its kind and every WHY ends at a source, an act or a rule. A lit
building with nothing behind it is not a door. A Want is an honest non-door.

Cost per useful door ≈ (first-of-kind schema + kit + rulebook, plus facts over time, plus Sites,
plus edges, plus review) ÷ the doors people actually open.

| Strategy | Fixed cost | Marginal cost per system | Doors per system | Trusted? | Cost per useful door |
|---|---|---|---|---|---|
| Vertical catalog: 30 NBA clubs on one schema, kit and CBA | one of each | facts only, linear | many (seats × moments) | yes | **lowest** |
| Isolated flagship (Boston) | highest per system | n/a | deepest | yes | medium; good if reused |
| Generic generated systems | low $ | compile + review | shallow | not until reviewed | **highest per trusted door** |
| First cluster, heterogeneous (NYC as briefed) | ~12 first-of-kind | facts + Site + edges | shallow, plus edge doors | mixed | **high** |
| Cluster built from existing verticals | low | Site + edges | edges add doors on systems already paid for | yes | **low; can beat verticals** |

**The edge is where the economics turn.**
- **RECORDED edges are cheap doors.** Examples: located-in, owns, licenses, serves ("the arena sits
  above Penn Station; the A, C and E stop at 34 St"). Each costs one Site binding and one source.
- **MODELED edges are the most expensive doors.** Examples: crowd → ridership, disruption →
  attendance. Each needs a named model, a validation story and review. A live event also cannot be
  hindcast (research E).

The founder's invocation example is MODELED. The cheap honest answer is the RECORDED lines at 34 St,
the OBSERVED delay with its lag stamp, "MODELED: not run. No model couples transit to attendance", and
a Want. It costs almost nothing. The modeled answer costs months and still reads "not validated for
this event".

**Verdict.** A first cluster built from heterogeneous systems is not cheaper per useful door than an
isolated World. Once the verticals exist, clusters become the cheapest source of doors, because a
cluster's marginal cost is then only Sites and RECORDED edges on schemas already paid for. The order
is: vertical → flagship → cluster from verticals. NYC's first cluster should come from what the
verticals already cover (club, arena, league), plus transit, whose facts are free. It should not start
from the full civilization list.

## 8. What STUDIO must provide (PROPOSED)

The chain is manifest → pack → procedural → AI-assisted assets → semantic binding → quality and
provenance gate. Studio needs six things:
1. **A manifest per schema:** levels offered (L0–L5), bound channels, truth kind per field, covers,
   device tiers, allowed Site relations.
2. **A pack registry with a rights line per asset** (source, licence, attribution, share-alike,
   non-commercial, expiry), so no unlicensed texture or mark ships.
3. **Procedural compilers as parameterized templates** keyed schema × kit × tier × locale, with state
   and as-of as parameters: massing (COMPUTED), rooms (COMPILED), Ledger, Marey, truth-textured maps.
4. **AI-asset intake:** de-light, compress, hash, screen for likenesses and logos, plus a
   **real-building screen**. A generated asset may bind to a real BIN only as stippled, reviewed
   decor.
5. **Semantic binding with lane A's tests run as CI:** the namespaces (`nyc:bin` versus `bow:world`)
   and the overlap, vacancy, time and institution tests. An authored footprint that intersects a real
   BIN fails the build unless it is declared as a tenancy, an annex or a proposal.
6. **A gate:** Concordance parity on every rung, a frame budget on a real Chromebook, projector
   legibility, the origin-marks test, a complete rights ledger and an as-of on every field. The gate
   also needs **a meter** recording human hours per kit, skin, binding and review. Without that meter,
   every number in this document stays an estimate for good.

## 9. What REALITY must provide (PROPOSED)

1. **Source registry and rights ledger.** Each source carries flags for what BOW may do with it:
   *render · derive · cache · offline · republish (external invocation) · feed to AI · commercial*.
   It also records obligations: attribution, share-alike, no-modify, mirror, lag notice, revocable,
   term end. Seed it with lane A's entries (footprints, ODbL, MTA, Citi Bike, Google, Met, NYPL [A])
   plus **NBA.com statistics** [P] (terms updated 13 Jul 2026): only "for legitimate news reporting or
   private, non-commercial purposes"; no sponsorship, gambling, fantasy or comprehensive database
   products without consent; prominent attribution to NBA.com.
2. **Snapshots.** Hash every pull, archive it (sources overwrite), diff to change events, and keep
   both valid time and knowledge time. **Start now.** Knowledge time that was never recorded cannot
   be recovered.
3. **An as-of date and a truth kind on every field,** with typed reasons for UNKNOWN. A capacity, year
   or height of 0 is UNKNOWN, never zero [A].
4. **A feed mirror** that stamps lag, keeps the as-received record apart from derived values (MTA
   forbids modification), and on revocation turns OBSERVED into RECORDED-as-of-last-pull, saying so.
   Storage is trivial: 301 KB per poll [M] at 30-second polling ≈ 1–3 GB a day, ≈ $10¹ a month after
   a year on R2 (estimate). The real cost is someone on call.
5. **A privacy filter at ingest.** Drop personal owner names (566,788 one- and two-family lots [A])
   and party names in DOB and ACRIS. Use fictional names on shared screens.
6. **An identity crosswalk and Site relations.** Map BIN, BBL, FacDB uid, OSM id and Wikidata QID to
   BOW ids, and allow many authorities per parcel. At MSG they are the rail corporation's lot [A],
   the arena owner, the club owner and a licence [S].
7. **The Fact pipeline, costed by tier:**

   | Tier | Cost | Examples |
   |---|---|---|
   | registry | free, bulk, automated | footprints, PLUTO, FacDB |
   | filings | free but unstructured; FRONTIER OCCASIONAL extraction plus a human check | 10-K, Form 990, budgets |
   | reported | a person sources each fact; aggregator terms apply | cap trackers, press |
   | licensed | money and exclusivity | official league data, market data |
   | private | unavailable, so AUTHORED or UNKNOWN | club operations, agency fees |

   Each field class also gets a refresh cadence (BOW's `REFRESH` pattern [R]), an independence check
   ("two outlets ≠ two sources" [R]), contested values held as contested, and a cost ledger.
8. **Official league data needs a licence decision.** Sportradar is "the exclusive provider of NBA
   data worldwide" from 2023-24 [P], through 2030-31 [S]. Until BOW holds a licence, REALITY for the
   NBA runs on dated public facts, the CBA and completed box scores. Whether any BOW use counts as
   "private, non-commercial" is a question for counsel, not an assumption. The external-invocation
   claim that "observing is wide and free" is false for league data.

## 10. The traps

1. **Cheap to draw, expensive to mean.** City-scale L3 is nearly free, so it gets built first, and it
   promises a door on every building: 1.08M prisms against about dozens of doors. Fix: draw the ground
   as RECORDED structure with no door affordance. Doors appear only where a system exists, and Wants
   mark the honest holes.
2. **The unpriced Fact unit.** "Live" is the photoreal of data: expensive, licensed and seldom needed.
3. **First-of-kind everywhere.** About 12 schemas with one instance each defeat amortization.
4. **Occasional × N = continuous** (§3).
5. **The rented substrate.** Photoreal and hosted tiles fail on offline use, derived data and term
   end. BOW must own its ground.
6. **Realism reads as truth.** L4 or L5 on real buildings and interiors implies REALITY and a real
   operator.
7. **Hand-made Site bindings.** A parcel is not an institution (MSG has four parties).
8. **Review grows with N,** and AI shifts more cost into it.
9. **The MODELED edge as showcase:** the most expensive door and the least validatable.
10. **Knowledge time deferred** is lost for good.
11. **Contagion through joins:** ODbL share-alike and MTA's no-modify rule.
12. **The per-viewer city guide:** the only AI cost that scales with audience.

## 11. Five economic decisions for the founder, ranked

1. **Truth posture per NYC system (the Fact budget).**
   - *Recommendation:* REALITY only where facts are cheap and authoritative (registries, the CBA,
     filings, the MTA feed); elsewhere AUTHORED institutions on RECORDED ground, no real operator
     implied.
   - *Would change if:* a one-month, two-system pilot measures fact hours per refresh under a
     founder-set ceiling (e.g. ≤10 PH per system per month); or a user test finds AUTHORED-on-real-ground
     misread as real.
2. **Build order: vertical → flagship → cluster from verticals, against cluster first.**
   - *Would change if:* Denver from the Boston kit costs nearly what Boston did (G's falsifier:
     verticals do not amortize); or a pilot shows edge doors opened more than system doors.
3. **Depth ceiling and substrate.**
   - *Recommendation:* own the ground (footprints + PMTiles); L3 as context only; L2 per domain;
     ≤1 L5 place reusing Boston's kit; no L4 on real buildings; photoreal only as an optional dated lens.
   - *Would change if:* L3 fails a real Chromebook frame-time test (drop to L1); a task test shows
     map or massing beating a list on a cross-system question (raise L3); Google or Cesium terms
     change for education or offline use.
4. **Liveness and licensing.**
   - *Recommendation:* dated snapshots by default, MTA as the one live pulse; no official league or
     market-data licence until a named product needs one.
   - *Would change if:* a test shows liveness changes what learners do or conclude; a licence quote
     fits the budget; counsel reads the NBA.com terms.
5. **Review capacity governs growth.**
   - *Recommendation:* a fixed monthly review budget; compile only past a Want threshold; no
     generated institution without review; Studio meters the hours.
   - *Would change if:* reviewer hours per promoted schema fall about tenfold; or Wants concentrate
     in a few heads, making precompiling cheap.

**No-regret, and not a decision:** start the dated, hashed snapshot archive of footprints, PLUTO,
FacDB and the MTA feeds today. It costs about $10¹ a month and cannot be done later.

## 12. Sources (checked 2026-09-30 unless marked)

- [M] FacDB SODA queries, `data.cityofnewyork.us/resource/ji82-xba5.json` (total; Midtown box count and
  capacity = 0), 04:03 UTC. [M] MTA GTFS-RT, nine `nyct%2Fgtfs*` feeds at
  `api-endpoint.mta.info/Dataservice/mtagtfsfeeds/`, 301,447 bytes, 04:01 UTC.
- [P] https://developers.google.com/maps/documentation/tile/usage-and-billing (only root requests
  billed; sessions up to three hours).
- [P] https://www.law.cornell.edu/uscode/text/17/120
- [P] https://www.globenewswire.com/news-release/2021/11/17/2336258/0/en/The-NBA-and-Sportradar-Announce-Landmark-Long-Term-Global-Partnership.html
  (17 Nov 2021). [S] end season 2030-31.
- [P] https://www.nba.com/termsofuse §9 (updated 13 Jul 2026).
- [P] https://developers.cloudflare.com/r2/pricing/
- [P] https://docs.meshy.ai/en/api/pricing · [S] https://www.meshy.ai/pricing
- [P] https://www.msgsports.com/our-company/ · [S] https://www.sec.gov/Archives/edgar/data/1636519/000163651923000009/msgs-20230630.htm
  and https://www.msgentertainment.com/our-company/ (arena owner, licence agreements).
- [P] Anthropic list prices, from the claude-api skill's table cached 2026-09-25.
- [R] `bow-economics-live/runtime/src/modules/sameLine/world.ts`.
- [A] `research/NYC_A_GEOGRAPHY_DATA_SCOUT.md`. Documents attacked: `REPRESENTATION_ECONOMICS.md`,
  `AMBIENT_AI_COST_MAP.md`, `critique/CRITIC_2_PLATFORM.md` §3.A; research E and F.
