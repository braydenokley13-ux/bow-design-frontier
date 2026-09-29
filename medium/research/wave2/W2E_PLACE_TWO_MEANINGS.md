# W2-E · Two meanings of place: a seven-domain test

Labels: **EARNED** (BOW code read, not run) · **HYPOTHESIS** · **SPECULATIVE FRONTIER** · **REJECTED**. External facts: **[V]** fetched or API-queried 2026-09-29 · **[S]** search snippet only · **[M]** memory. Nothing is EARNED except the code facts in §2. The pick is a hypothesis, not a promotion.

## 0. Bottom line

1. **THREE MEANINGS, one new medium object** (§4): (1) PLACE-INDEX; (2) grounding, which is a *Reality entity plus a reference to it*, not a kind of place; (3) spatial attributes a rule reads, which are ordinary state. HYPOTHESIS, medium confidence.
2. **Attachment belongs in option C:** a generic typed, dated, statused REFERENCE from an OBJECT or PLACE to a Reality entity, plus Reality datasets and a Browser index. No place-specific protocol, no coordinate in the address, no shared substrate instance. HYPOTHESIS.
3. **Cross-domain finding.** Every mature standard checked keeps the place record apart from the party or system at it, joined by a typed assignment, never a coordinate. Three registries also *removed* meaning from their place ids.
4. **Correction to the brief.** CIDOC E53 Place is explicitly *independent of time*. Time lives in presences, events and relations, so the attachment must be a dated claim.
5. **BOW today** carries real geography only as name strings and numbers (§2).

## 1. Matrix: domain × question

a shared real place and ids · b rules read geography · c time/history · d attachment is a claim · e privacy, rights · f would a protocol coordinate help

| Domain | a | b | c | d | e | f |
|---|---|---|---|---|---|---|
| **1 Sports city** | TD Garden = Wikidata Q432105 [V]; Delaware North owns it, Celtics rent, North Station beneath [S]. Ids: QID, OSM, GTFS, address. | Capacity and metro population only (§2). No distance or travel time read. | Weak. Item aliases include FleetCenter and "Boston Garden"; the 1928–97 building is separate Q894567 [V]. | Arena name and capacity are dated OBSERVED. The Boston front office is AUTHORED. | Names and capacities are public; logos are rights, not place. | No. Arena calendar couples Celtics and operator by contract. |
| **2 Museums, history** | Getty TGN (ODC-BY) [S], Pleiades (CC-BY 3.0) [S], Wikidata. "Independence Hall" labels one Philadelphia and two Tel Aviv items [V]. | Rarely. DF's 1787 board uses a label. | **Strongest.** Names and borders move. CRMgeo splits phenomenal from declarative places [S]. Linked Places dates names, geometry and relations [S]. | Yes. Findspots are ASSERTED, "approximate" [V]; a reconstructed room is AUTHORED. | Attribution; excavation coordinates can be sensitive [M]. | Discovery yes, coupling no. |
| **3 Chemistry labs** | Instruments and rooms only (PIDInst, RRID) [S]. Molecule identity is substance: InChI is computable from structure [S]. | Intra-system only: container volume, compartments (Biology: protons crowd the intermembrane space). | No. History is a calibration record. | Apparatus is AUTHORED ("an authored simplification"). | Hazard-inventory locations [M]. | No. Molecules have no geography; "place" is containment. |
| **4 Hospitals** | FHIR `Location` has one `managingOrganization`; `HealthcareService` points at it [V]. NHS ODS: each organisation can hold its own site code for a shared location [S]. | Yes: beds, catchment, ambulance drive time, jurisdiction, as sourced numbers. | Yes. Wards reconfigure; sites close (FHIR `status`) [V]. | Yes. An AUTHORED hospital on a real map must never read as real. | **Strongest.** HIPAA Safe Harbor treats street, city and ZIP as identifiers [S]. | Partial. Co-located organisations keep separate site records; coupling is by contract. |
| **5 Transit** | GTFS `stop_id` is unique only within a dataset [V]. NaPTAN: UK central registry, ~380,000 stop points [S]. NeTEx splits StopPlace from ScheduledStopPoint [S]. | Yes. Topology and travel time are the rules. | Yes. Stops move and close; global stop ids are missing [M]. | Yes. An authored line on a real street grid is AUTHORED. | Feeds licensed per agency [M]. OSM-derived networks bring ODbL. | Solved without a coordinate: NeTEx `PassengerStopAssignment` is a typed join; NaPTAN is an institution. |
| **6 Enterprise** | GS1 GLN allocates legal entity, function, physical and digital location as *separate categories* [S]. ERP "plants" are organisational units [M]. | Yes: lead time, distance, tax jurisdiction, capacity. | Yes. Sites open, close, restructure. | Yes. DF: "Kaito is fictional; modelled on the Renesas Naka fab fire, March 2021 (verify)". | Supplier sites are sensitive; GS1 numbers are licensed. | Partial. Coupling runs through orders (sagas, C4); geography is a risk overlay. |
| **7 Public reality** | OSM ids name database objects; no permanent-ID scheme adopted [V]. Overture GERS: random UUID in a stability registry [V]. NYC BBL is a tax lot, BIN a building [S]. H3 is a computed cell index [S]. | n/a. Datasets supply parameters. | **BIN never changes, even after demolition;** a new building at the old address gets a new BIN [S]. Address, lot and building have three lifetimes. | Reality is OBSERVED with source, date and licence. A BOW placement on it is AUTHORED. | **ODbL** (§7). Overture buildings, base, divisions and transportation are ODbL; places are permissively licensed [V]. | Reality *is* the discovery index. A coordinate adds nothing. |

**Cross-cutting.** Four of seven domains read real geography as state (sports, hospitals, transit, enterprise), always as sourced numeric parameters. In none does a system *write* the place, so no BOW system may be authoritative for it (C1).

## 2. What BOW's code does (EARNED; read, not run)

- **Topology is a static constant without coordinates.** W `harborPlaceTopology.ts:1-29`: 8 places, 13 edges. DC `districtGeography.ts:3`: "Public geography… no assessment facts". Both fictional.
- **Real geography enters as strings and numbers.** W-3D `nbaIdentity.ts:46`, BOS: `arena:"TD Garden"`, `arenaCapacity:18624`, `metroArea:"Boston–Cambridge–Newton, MA-NH MSA"`, `metroPopulation:5034221`, dated snapshot 2026-09-22. A grep of W, W-3D and DC source found no latitude, longitude, QID, OSM, BBL or GTFS identifier.
- **Rules read them: meaning (3).** `catalogue.ts:134` `marketFactorOf(metro)`; `arenaV4.ts:36-38` sections `round(cap×share)`; `views.ts:1074` metro rank. No rule reads distance or travel time.
- **One real arena, two dated values.** `fullHouse.ts:329-332`: TD Garden 19,156 (tdgarden.com, asOf 2026-09-14, `verified:true`) against 18,624 above. Each building carries a hand-rolled `{source, asOf, verified}`; no place id reconciles the two.
- **Real versus authored is partly typed.** `nbaInstitutionMorphology.ts:23,30` tags `nameSource: hqView.franchise.arena | presentation-map`; a test (`:97-110`) swaps in "Cedar Bay Pavilion", capacity unchanged. `physicalPresence:"unknown"` is a literal type (`nbaActorRoleProjection.ts:218`; `bostonFacts.ts:132`). But the building's authored status lives only in docs ("no real building is claimed", `ART_DIRECTION.md:90`). The on-screen `SIMULATED` line ("real clubs and players, a simulated season", `bostonFacts.ts:16`, shown at `bostonBuilding.ts:67,484` and `bostonArena.ts:179,305`) discloses the *season*, not the building. A small gap.
- **Working cross-system contracts ignore place.** `bow-bridge-1` and DC `kernel/refs.ts` contain no place, venue or geography field (grep).

## 3. Precedents

| Standard | Separation of place and system-at-place |
|---|---|
| W3C/OGC SDW (Note, 2023-09-19) [V] | BP1 "Use globally unique persistent HTTP URIs for Spatial Things"; BP11 "Provide information on the changing nature of spatial things". No BP is titled "reference well-known places". |
| CIDOC E53 [S], Linked Art [V] | Place is an "extent in space… independent from temporal phenomena and matter". Time attaches to presence and events. |
| Wikidata [V] | Coordinates are statements with qualifiers. TD Garden's P625 has **0 references**; Independence Hall has two OSM relation ids, each "applies to part". |
| CityGML `ExternalReference` [S] | (information-system URI, external object id): option C's exact shape. |
| IndoorGML 2.0, IfcSite, 3D Tiles 1.1, GeoJSON | IndoorGML layers join via `InterLayerConnection`, the nearest "substrate", but inside one dataset and authority [S]. IfcSite is containment plus an optional WGS84 point [S]. 3D Tiles indexes content payloads [S]. GeoJSON's Feature `id` is optional; it is silent on time [V]. None models who governs what sits at a place. |

**Three registries removed meaning from ids.** GERS dropped embedded H3 cell and theme in release 2025-06-25: "encoding meaning into an identifier cost more than it returned" [V]. NHS ANANA site codes no longer embed the parent trust [S]. OSM ids do not survive reshaping a feature [V]. A coordinate in a BOW address repeats the error.

## 4. Verdict and definitions

**THREE MEANINGS; one medium object.** HYPOTHESIS.

1. **PLACE** (Vocabulary §7, unchanged): a state-free per-system index (id, role, adjacency) plus carrier slots keyed by object id. The designer is the authority; it implies nothing external. EARNED locally.
2. **GROUNDING**: a REFERENCE from an OBJECT or PLACE to a **Reality spatial entity** with an id in an external namespace.
   - It carries a relation type (**is** / **located-at** / **modeled-on** / **depicts**), a STATUS (OBSERVED, ASSERTED, AUTHORED), an as-of cut, and source and licence.
   - The relation type guards question d: an AUTHORED *located-at* or *depicts* never renders as an OBSERVED *is*. Precedents: "real clubs and players" (is), Kaito (modeled-on), "not a literal depiction of… TD Garden" (depicts).
   - No geometry by default. BOW is authoritative only over the *claim*.
3. **SPATIAL ATTRIBUTE**: ordinary state or parameter (capacity, distance, travel time, adjacency cost, jurisdiction). Sourced from Reality, it is a RECORDED INPUT with source, date and licence, as `arenaCapacity` is.

**Co-reference is not coupling.** Two systems referencing Q432105 are not thereby coupled. A Browser may join on the shared key, opt-in and recognition-only. That keeps a "NYC" of club HQ, museum, hospital, agency and port from becoming one hidden world.

## 5. Where attachment belongs

| Option | For | Against |
|---|---|---|
| **A. Coordinate in every address** | Cheap co-location queries. | Most systems have no ground (chemistry, biology, both fictional topologies). Coordinates are not identity (one site, many organisations: ODS, GLN, GTFS). Embeds meaning (§3), spreads ODbL-derived coordinates, and builds a location graph (K7 by another door). **REJECTED.** |
| **B. Shared substrate instance** | IndoorGML layers, NeTEx StopPlace, NaPTAN. | C1: authority never crosses, so a substrate must be authoritative and BOW would own geography (god-simulation). No BOW case. The legitimate form is a governed registry that is itself an INSTANCE (C4). **SPECULATIVE FRONTIER.** |
| **C. Typed REFERENCE to Reality** | CityGML `ExternalReference` and Wikidata statement-with-reference shapes. Reuses STATUS, as-of cut, rights-by-type, recognition-only. COUNTERPART with a Reality endpoint. Covers all seven domains. | COUNTERPART is itself HYPOTHESIS, no code. Needs a namespace policy (QID, GERS, BBL, BIN differ in lifetime). Can sprawl into a knowledge graph. Status must come from provenance (K6). |
| **D. Browser and Reality only** | Five of seven domains couple without place. Discovery is a Reality query. | "This building is authored" would live in browser metadata; a capsule loses it, a silent downgrade. |
| **E. Other** | None found. | — |

**Pick: C for the claim, D for discovery.** HYPOTHESIS, medium confidence. C generalizes minimally what BOW already does by string (`arena:"TD Garden"`, `presentation-map`). The Browser builds its geographic index from references; the reference lives in the record because a capsule must carry its own honesty.

## 6. Promotion test

Promote above C (protocol or composition) only if **all** are *observed*:

1. Two independently governed systems whose rules or evidence change because of a shared place. Delete the link and re-express the coupling as a bilateral contract or Reality feed; if nothing is lost, it is not protocol-level.
2. At least three materially different domains hand-roll the same reference shape (namespace, as-of, status, rights). Today: one, a bare string.
3. A cross-system query ("all systems attached to X at cut T") that a Browser join over references answers wrongly against ground truth.
4. A grounding broken by id churn that corrupts a replayed capsule (a pinned Reality digest: L2 machinery, not place-specific).
5. A second independent host (trigger T5).

**Kill criterion** (stay at C or drop to D): every coupling re-expresses as a contract.

## 7. Risks

- **God-simulation drift.** Geography as a hidden global authority: if BOW curates "NYC" as an instance, it owns geography. Guard: Reality is read-only; references confer no authority (C1).
- **Metaverse drift.** Everything is somewhere and "look around" starts to act. E-main §10 binds.
- **Licensing (ODbL).** A design constraint, not a legal conclusion; escalate classification to counsel. A distributed derivative database is share-alike (§4.4); a Produced Work needs a notice (§4.3) [V]. OSMF horizontal-layer and collective-database guidelines turn on mixing sources within a feature type [S]; a capsule shipping OSM-derived geometry is redistribution. **Safe design:** reference by QID or GERS; store id, as-of, source and licence tag, never geometry; never use OSM ids as canonical ids.
- **Privacy.** Never place a student, patient or school (E-main §3: fictional names on shared screens). Place references are recognition-only, never evidence.
- **False physical implication.** An AUTHORED facility on a real map must not imply it exists. Enforce with relation type and status, not prose alone; Boston's on-screen line should disclose the building as authored.

## Sources

**BOW code and docs** (snapshot roots per the parent brief)
- W:runtime/src/client/world/harborPlaceTopology.ts:1-29
- W-3D:runtime/src/modules/worldOne/data/nbaIdentity.ts:1-46; catalogue.ts:134,186; arenaV4.ts:36-38; views.ts:1074
- W-3D:runtime/src/modules/fullHouse.ts:322-332
- W-3D:runtime/src/modules/worldOne/nbaInstitutionMorphology.ts:23,30,113,118; nbaActorRoleProjection.ts:79,85,218
- W-3D:runtime/src/test/nbaInstitutionMorphology.test.ts:97-110
- W-3D:runtime/src/client/world/frontier/bostonFacts.ts:16,132; bostonBuilding.ts:67,484; bostonArena.ts:179,305; bostonWorldSpace.ts:1-8
- W-3D:docs/campaign/opus55-worlds-aaa-visual-frontier/ART_DIRECTION.md:90-92; VISUAL_EVIDENCE.md:56
- W-3D:docs/campaign/visual-frontier/prototypes/hq/ART_PROVENANCE.md:7-8
- W:contracts/bridge/bow-bridge-1 (grep for place, venue, geo, location: no hits)
- DC:src/student/districtGeography.ts:3,13,30
- DF:canvas/ApushRoom.dc.html:46; Enterprise.dc.html:643; Biology.dc.html:233,274; Chemistry.dc.html:92; Map.dc.html
- Medium: BOW_SYSTEM_VOCABULARY_V0.md §7; BOW_PORTABILITY_AND_COMPOSITION_V0.md §6-7; BOW_REPRESENTATION_CONTRACT_V0_PROPOSAL.md §4; research/wave1/03, 07; E-main CLAUDE.md §3, §10, §12

**External (2026-09-29)**
- [V] Wikidata: wikidata.org/wiki/Special:EntityData/Q432105.json (rev 2540974206), Q390028.json (rev 2532929523), Q894567
- [V] OSM: wiki.openstreetmap.org/wiki/Permanent_ID; wiki.openstreetmap.org/wiki/Elements
- [V] ODbL 1.0: opendatacommons.org/licenses/odbl/1-0/
- [V] W3C/OGC SDW: w3.org/TR/sdw-bp/
- [V] Overture: docs.overturemaps.org/gers/; docs.overturemaps.org/attribution/
- [V] GTFS: gtfs.org/documentation/schedule/reference/
- [V] FHIR R5 Location: hl7.org/fhir/location.html
- [V] Linked Art: linked.art/model/place/
- [V] RFC 7946: rfc-editor.org/rfc/rfc7946
- [S] OGC 3D Tiles 1.1: ogc.org/announcement/ogc-adopts-3d-tiles-v1-1-as-community-standard/
- [S] CIDOC-CRM E53, CRMgeo: cidoc-crm.org/extensions/crmgeo/SP6_Declarative_Place
- [S] IfcSite: standards.buildingsmart.org/IFC/RELEASE/IFC4_3/HTML/lexical/IfcSite.htm
- [S] CityGML: docs.ogc.org/guides/20-066.html
- [S] IndoorGML 2.0: docs.ogc.org/is/22-045r5/22-045r5.html
- [S] Pleiades: pleiades.stoa.org
- [S] Linked Places Format: github.com/LinkedPasts/linked-places-format
- [S] Getty TGN: getty.edu/research/tools/vocabularies/tgn/
- [S] NaPTAN: en.wikipedia.org/wiki/NaPTAN
- [S] NeTEx: github.com/TransmodelEcosystem/NeTEx
- [S] GS1 GLN: gs1.org/standards/id-keys/gln
- [S] NHS ODS: odsdatasearchandexport.nhs.uk (NHS Trusts and NHS Trust Sites)
- [S] NYC Geosupport UPG §VI.3: nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/
- [S] HIPAA: law.cornell.edu/cfr/text/45/164.514
- [S] OSMF guidelines: osmfoundation.org (Collective Database, Horizontal Map Layers, Geocoding)
- [S] TD Garden lease: sportico.com/business/real-estate/2021/boston-celtics-td-garden-lease-extended-1234620759/
- [S] H3: h3geo.org/docs/
- [S] PIDInst, RRID, InChI: datascience.codata.org/articles/10.5334/dsj-2020-018; rrids.org
- [M] Wikidata CC0 (not relied on); ERP plant semantics; UN/LOCODE, IATA, ICAO; excavation-coordinate sensitivity; stop-id churn; hazard-inventory sensitivity
