# NYC Lane A: Geography and Data Scout (Reality City substrate)

Author: Lane A scout, Sonnet. Date: 29 Sep 2026. Every "checked" date below is 2026-09-29 unless stated.
No code, no prototype. Evidence tags on every claim:

- **[P]** I read the primary page, registry or API this session.
- **[M]** I measured it myself today (query, header check, download, count).
- **[S]** Search snippet only. Treat as a lead. **Verify** before relying.

Design implications are labelled REAL (exists, checked), PROPOSED (buildable on known tech) or SPECULATIVE.

## 0. Bottom line

1. **The geometry BOW would hand-model already exists, free of licence restrictions.** NYC's own building footprints: 1,083,062 buildings [M], refreshed weekly [P], roof height on 99.93% [M], each keyed by BIN (building) and BBL (tax lot). PLUTO adds land use, class, year built, owner type per lot. NYC Open Data law requires no licence, registration or usage restriction [P].
2. **There is no current official 3D city mesh.** The city's only 3D model is a one-time capture from 2014 aerials [P]. So the cheapest honest 3D is procedural massing: footprint x measured height. Roof shapes and facades are BOW's or nobody's.
3. **Photoreal exists in one usable form, Google Photorealistic 3D Tiles, and it is view-only** (no caching, no offline, no extraction, mandatory disclosure of what is Google's) [P]. Usable as an optional lens. Wrong as a substrate.
4. **Live Reality feeds are few.** MTA GTFS-realtime, Citi Bike GBFS and DOT speeds are live. Everything else (parcels, facilities, permits, hospitals, museums) is a dated snapshot. Most Port Authority open-data sets were last updated in 2015-2016 [M].
5. **Biggest trap: a parcel is not an institution.** PLUTO lists Madison Square Garden's lot as owned by Amtrak, year built 0, building area 0 [M]. Open data supplies the ground truth of structures, not the authority of the systems inside them. Second trap: terms that forbid derived data (Google), infect share-alike (ODbL) or force server-side mirroring (MTA).

## 1. Candidate table

Columns: what it is, licence and obligations, freshness, 2D/3D, runtime form, browser fit, what BOW reuses, what BOW must add, risk. "Browser fit" is reasoning plus my payload measurements. **No Chromebook was tested.**

### 1a. Building geometry and imagery

| Name | What / licence / obligations | Freshness | 2D-3D and form | Browser fit | Reuse / must add / risk |
|---|---|---|---|---|---|
| **NYC Building Footprints** (OTI; Open Data 5zhs-2jue) | One polygon per building with BIN, roof height, ground elevation, construction year, BBL keys, status. **Licence:** none imposed (Local Law 11: no registration, licence or usage restriction) [P]. Terms: as-is; City may require source, version and modification to be stated on republication; older versions not retained [P]. | Weekly per metadata; rows updated 2026-09-27; newest feature edit 2026-09-25 [M]. 93.1% photogrammetric (+/-2 ft), 6.9% manual [M/P]. | 2D polygons plus `height_roof` (missing/0 on 722 = 0.07%) and `construction_year` (missing/0 on 10,074 = 0.9%) [M]. Units not stated in text I read; sample values imply feet (verify). GeoJSON, Shapefile, SODA API. | Midtown box (about 2 x 2.2 km): 4,142 footprints = 2.5 MB GeoJSON, 0.59 MB gzip [M]. Whole city extrapolates to about 650 MB raw: tile to PMTiles. | **Reuse:** geometry, heights, BIN/BBL keys. **Add:** semantics, authority, time (source keeps only latest), truth kinds. **Risk:** silent weekly change; a footprint is a structure, not an institution. |
| **NYC 3D Building Model** (OTI 2016; DCP by community district 2018-19) | Massing of every building in the 2014 aerial survey. **Licence:** Open Data terms; DCP "informational purposes only", no warranty [P]. | README: "one time capture", based on 2014 photos [P]. CityGML zip last modified 7 Apr 2016 [M]. | Hybrid CityGML LoD1/LoD2 [P]; about 100 iconic buildings at LoD2 [S]. CityGML (916 MB) [M], Multipatch, DGN, Rhino .3dm. | Not web-ready. Needs conversion to glTF/3D Tiles. | **Reuse:** a frozen "NYC in 2014" state; iconic roof shapes. **Add:** web tiling. **Risk:** 12 years old; later buildings missing, demolished ones present. |
| **Prior NYC 3D conversions** (TUM Munich; georocket "enhanced"; Cesium 2017 demo) | Re-encodings of the 2014 model. TUM: "copyright remains with the original providers", NYC.gov terms, no licence text [P]. georocket: "free for informational use with attribution", as-is, PLUTO joined by location [P]. Cesium tileset: download and licence unstated [P]. | TUM LoD1 sets dated 2015-09-07 [P]; georocket on PLUTO 20v5 [P]; Cesium blog 5 May 2017 [P]. | CityGML/KML/COLLADA/glTF; LoD2 buildings 2.4 GB (TUM); 1,083,437 buildings, 874.5 MB gz (georocket) [P]. | Proves CityGML to glTF to 3D Tiles works at 1.1M buildings. | **Reuse:** nothing directly. **Risk:** licence gaps; georocket says a few percent of joins are wrong and "not for productive use". Do your own BIN/BBL join. |
| **NYC orthoimagery** (OTI, WMTS) | Official aerial photos. **CC BY 4.0** (attribution) [P]. | Every 2 years since 2004; 2024 set flown 14-24 Mar 2024 at 6 in; 1924 and 1951 sets manually georeferenced [P]. | 2D raster tiles. | Cheap raster. I could not pull an ortho tile in this sandbox (redirect to a blocked host), so the tile URL pattern is unverified [M]. | **Reuse:** dated photographic underlay; time-travel rasters. **Add:** attribution, cache plan. **Risk:** a capture date, not "now"; building lean and shadow. |
| **NYC terrain and street layers** (2017 LiDAR, 1-ft DEM, planimetric sidewalk/roadbed, centerline) | **Licence:** Open Data terms. | LiDAR flown May 2017, 180 GB [P]. Planimetrics updated 2024-04-24; centerline weekly [M]. | Point cloud/rasters; vector polygons and lines. | LiDAR not for browsers. Derive a coarse DEM; street vectors are light. | **Reuse:** street and sidewalk geometry for L3 ground. **Add:** derived low-res terrain. |
| **Google Photorealistic 3D Tiles** | Textured photogrammetry via Map Tiles API. **Terms** (policies page updated 2026-09-24) [P]: no pre-fetch, index, store or cache except as terms allow; visualization only (no image analysis, machine interpretation, object detection, geodata extraction or resale, no offline); own 3D objects may overlay only if not "extracted, traced, or otherwise derived" from the tiles; hybrid scenes must say which parts are Google's; Google logo and per-tile attribution visible. **Price:** Enterprise SKU; 1,000 free root-tileset requests a month, then $6.00 per 1,000 [P]. | Google "regularly updates"; capture dates not exposed [S]. NYC coverage assumed, not checked. | OGC 3D Tiles, textured glTF meshes. | CesiumJS, deck.gl, three.js via 3d-tiles-renderer. Streaming only; frame time on school Chromebooks unmeasured. | **Reuse:** backdrop. **Add:** all semantics on BOW's own layer. **Risk:** lock-in; needs live connection; undated; photoreal makes AUTHORED read as real. |
| **Cesium ion** (+ Cesium OSM Buildings, asset 96188) | Hosted 3D Tiles. Community plan is for personal, non-commercial, unfunded educational use; commercial plan needed above $50K revenue or funding, for government work, or funded educational research; $149/mo individual [P]. "Contact us" to integrate ion into solutions used outside your organization [P]. MLA: no offline copies of output (ordinary HTTP caching allowed); output cannot be displayed after the term ends [P]. OSM Buildings: ODbL, "(c) OpenStreetMap contributors" [P]. | OSM Buildings global, quarterly, 350M+ buildings [P]. Community: 1,000 Google root tiles a month [P]. | 3D Tiles; height recorded or 3 m x levels [P]. | Good with CesiumJS. | **Risk:** vendor lock-in; a schools product probably needs a negotiated licence. |

### 1b. Open map data and rendering stack

| Name | What / licence / obligations | Freshness | 2D-3D and form | Browser fit | Reuse / add / risk |
|---|---|---|---|---|---|
| **OpenStreetMap, NYC** | Roads, labels, transit, POIs, buildings. **ODbL 1.0**: credit "(c) OpenStreetMap contributors"; share-alike on Derivative Databases; rendered tiles and images are Produced Works (any licence, but offer the data on request); independent datasets kept apart are a Collective Database; internal server use has no share-alike [P]. | Continuous. NYC buildings were imported 2013-14 from the city's footprints with `height` (m) and `nycdoitt:bin` [S/P]. My Midtown probe: 4,420 building ways; 4,021 (91%) have `height`, 592 (13%) `building:levels`, 348 features carry `wikidata` [M]. | 2D, height tags. PBF/Overpass. | Consumed as tiles. | **Reuse:** roads, labels, Wikidata bridges. **Risk:** ODbL infection if BOW joins its fields into OSM building tables; heights often 2013-vintage. |
| **Overture Maps** (buildings, places, base) | Buildings theme **ODbL** (OSM, Esri Community Maps CC BY 4.0, Microsoft ML ODbL, Google Open Buildings CC BY 4.0). Places theme CDLA Permissive 2.0. Credit "(c) OpenStreetMap contributors, Overture Maps Foundation" [P]. | Release 2026-09-23.1 present on S3 [M]. | 2.5D: height, levels, roof attributes (sparse) [S]. GeoParquet, PMTiles, DuckDB. | PMTiles into MapLibre [S]. | **Reuse:** a cross-city fallback. **Risk:** ODbL; NYC-specific source mix unstated. For NYC prefer the city's own footprints. |
| **MapLibre GL JS, PMTiles, Protomaps, OpenMapTiles** | MapLibre 6.11.2 BSD-3 (npm, 2026-09-24) [P]; pmtiles 4.5.0 BSD-3; @protomaps/basemaps 5.7.2 BSD-3 [P]. Protomaps daily planet build is an ODbL Produced Work, OSM credit required, about 120 GB, regional extract by CLI [P]. OpenMapTiles: schema BSD + CC-BY, credit "(c) OpenMapTiles (c) OpenStreetMap contributors", self-generation allowed [P]. | Protomaps: daily. | Vector tiles, `fill-extrusion` for 3D buildings [P]. One static PMTiles file, HTTP range requests, no tile server. | WebGL2. Chromebook fit plausible by design, untested. | **Reuse:** the whole L1/L3 stack. **Add:** BOW layers and style. |
| **Other renderers** | deck.gl 9.4.0 MIT; three 0.186.1 MIT; 3d-tiles-renderer 0.5.3 Apache-2.0 (three.js; Google tiles and ion supported); CesiumJS 1.145.0 Apache-2.0 [P]. | npm, 2026-08/09. | | | Pick one; MapLibre plus three covers all tiers. |

### 1c. Structural state (parcels, facilities, change)

| Name | What / licence / obligations | Freshness | Fields and form | Browser fit | Reuse / add / risk |
|---|---|---|---|---|---|
| **PLUTO / MapPLUTO** (DCP) | Tax-lot land use and building data. **Licence:** Open Data terms; DCP "informational purposes only" [P]. | Quarterly. Portal: "Current version 26v2", rows updated 2026-08-24; 858,284 lots [P/M]. (A search snippet said 25v4: stale.) | 70+ fields: BBL, BldgClass, LandUse (11 classes), YearBuilt, OwnerType, OwnerName, NumFloors, BldgArea, zoning, Landmark, HistDist, version, DCPEdited [P]. CSV, API, Shapefile. | Light per neighbourhood. | **Reuse:** what is really on a lot. **Caveats:** `YearBuilt` "accurate for the decade" (0 on 40,317 lots = 4.7%, read as unknown) [P/M]; one record per lot, condos merged to a billing BBL [P]; `OwnerName` present on 566,788 of 566,810 one- and two-family lots [M]. **Risk:** privacy; parcel is not institution. |
| **Facilities Database, FacDB** (DCP) | 30,000+ government-funded, licensed or certified facilities. Open Data terms. | 26v1, rows updated 2026-07-16; every 6 months [P/M]. | Name, BBL, BIN, operator, operator type, capacity, source. Groups incl. Health care 3,059; Cultural 2,393; Transportation 3,544; Historical sites 1,095 [M]. | Light. | **Reuse:** real operators per BBL. **Caveats:** `capacity` reads 0 on Bellevue and Columbia rows (almost certainly not reported; verify) [M]. One BBL carries many operators: Bellevue's lot appears under HHC, Correction and NYS Mental Health sources [M]. |
| **Landmarks, DOB filings, ACRIS** | Landmarks, historic districts, building permits, recorded property documents. Open Data terms. | Landmark sites 2026-06-30; DOB filings 2026-09-29 (daily); ACRIS 2026-09-08 [M]. | Tables and maps. | Light. | **Reuse:** change events ("permit filed", "designated", "deed recorded"). **Risk:** party and owner names (not inspected): privacy. |
| **NYS Health facilities** (DOH) | Article 28 hospitals, nursing homes, clinics. | Rows updated 2026-09-01 [M]. No licence field in metadata; NYS terms not read. | Table + map. | Light. | **Reuse:** hospital identity and location. **Add:** operations. |
| **Port Authority (PANYNJ) open data** | Air passengers, bridge and tunnel volumes, port containers, auto imports on data.ny.gov. No licence field. | Last rows **2015-2016** for most datasets; only crash data updated 2026-04-16 [M]. Current volumes via panynj.gov pages and press releases [S]. | SODA/CSV. | Light. | **Verdict:** a dated snapshot, not a feed. **Add:** annual/monthly figures by hand with sources. |
| **NOAA MarineCadastre AIS** | US Coast Guard vessel tracks, **CC0** [S]. | Broadcasts 2009-2026; daily CSV, 1-minute filtered, since 2015 [S]. | CSV, GeoParquet. | Heavy raw; pre-aggregate. | **Verdict:** historical replay only; no open real-time AIS found (not checked). |
| **IPEDS** (NCES) | US college survey data. | Provisional about 1 year, final about 2 years after collection [S]. | CSV. | Light. | Licence unread. Universities also appear in FacDB (`nysed_activeinstitutions`) [M]. |

### 1d. Live feeds

| Name | What / licence / obligations | Freshness | Form | Browser fit | Reuse / add / risk |
|---|---|---|---|---|---|
| **MTA GTFS static + GTFS-realtime** | Subway, LIRR, Metro-North, bus. Free. **Terms** (updated 13 Mar 2024) [P]: host the data on a non-MTA server; users must not be served directly from MTA servers; no modifying or deleting data (subsets allowed); no claim it is accurate, complete or timely; say so if lag exceeds 1 minute; no implied MTA licence; MTA may terminate or change terms any time; logos, maps and symbols need a licence (free for free MTA-approved apps; commercial use may be charged). | Static: subway regular 27 Aug 2026, supplemented (hourly, 7-day changes) 29 Sep 2026, LIRR 28 Sep, Metro-North 29 Sep, Manhattan bus 2 Sep [M]. Realtime ACE feed: HTTP 200, no key, header stamp 12 s before fetch, CORS `*` [M]. Bus realtime needs a Bus Time key [P]. | GTFS zip; GTFS-RT protobuf with NYCT/MTARR extensions. | Decoding is easy; terms force a BOW mirror anyway. | **Reuse:** trains as observed moving entities, stations as anchors. **Add:** mirror with lag stamp; MTA as a separate authority. |
| **Citi Bike GBFS** | Bike and dock status. Lyft licence: perpetual, non-exclusive, use/modify/distribute in your product for lawful purposes; may not host or publish the data as a stand-alone dataset; terminable at will [P]. | TTL 60 s; `station_status` stamped 22:12:10Z when I fetched about 22:12Z; 2,520 stations [M]. | JSON. | Trivial. | **Risk:** revocable; cannot archive as a public dataset. |
| **NYC DOT traffic speeds; NYC Ferry** | DOT: Open Data terms; "data changes several times per minute"; rows updated 22:07:11Z, checked about 22:12Z [M]. Ferry GTFS-RT listed on the operator's developer page [S]; terms unread. | Live. | SODA; GTFS-RT. | Trivial. | Verify Ferry terms. |

### 1e. History and culture

| Name | What / licence / obligations | Freshness | Form | Reuse / risk |
|---|---|---|---|---|
| **Met Museum Open Access** | **CC0** dataset and API; no key; 80 requests/s [P]. Live count 502,881 objects [M]. Images only for works marked public domain/CC0 (`isPublicDomain`) [P]. | Object metadata dated 2026-07-29 in my sample [M]. | JSON API, CSV. | **Reuse:** artifacts with places and dates. **Risk:** copyrighted works: metadata only. |
| **MoMA, Cooper Hewitt** | **CC0** data. MoMA: 160,700 artworks, 15,933 artists, images excluded, "not curatorially approved", asks for citation [P]. Cooper Hewitt: JSON for about 75% of collection, images not included; API status unknown [P]. | MoMA: irregular updates. | CSV/JSON on GitHub. | **Risk:** image rights held elsewhere. |
| **NYPL** | Metadata **CC0**; 187,000+ public-domain items released Jan 2016 [P]. Repository API: **non-commercial** unless you contact NYPL [P]. Digital Collections pages were unreachable in my sandbox (bot wall). | Snapshot Dec 2015 [P]. | CSV/JSON; API. | **Risk:** the API terms suit a free classroom tool only if BOW is non-commercial; ask. |
| **Old maps and photos** | NYPL Map Warper **archived April 2021** [P]. David Rumsey: **CC BY-NC-SA 3.0**, non-commercial, commercial use by request; some post-1924 maps still in copyright [P]. OldNYC: code Apache-2.0 [S]; photos are NYPL Milstein items and "the Library retains the copyright for many" [P]. 1940 tax photos (NYC Municipal Archives, 722,485 images) [S]: reuse terms not verified. | Static archives. | IIIF/web/API. | **Risk:** share-alike and non-commercial clauses; treat as link-out, not ingest. |
| **Wikidata** | **CC0** structured data; IDs (QIDs) link OSM, museums and authorities [S]. | Continuous. | JSON/SPARQL. | **Reuse:** the ID bridge (348 Midtown OSM buildings already carry one [M]). |
| **City digital-twin work** | I found **no public citywide NYC digital twin**. NYC 3D Underground: announced Nov 2025, $10M, secure sharing among agencies and utilities, target early 2028 [S]. Columbia intersection twins: research [S]. | | | Not a BOW source. Verify with OTI. |

## 2. Design implications

### 2.1 Cheapest honest substrate, three tiers

**L1 2D map (PROPOSED; every input REAL).** MapLibre plus self-hosted PMTiles. Buildings from the city footprints, parcel and facility semantics by BBL/BIN, roads and labels from Protomaps (ODbL Produced Work, OSM credit) or the city's own centerline. Optional dated ortho raster. Zero licence fees. A neighbourhood is under 1 MB gzipped [M]; ship borough packs, not one city file.

**L3 procedural massing (PROPOSED).** Extrude footprint x `height_roof` (99.93% present [M]) with MapLibre `fill-extrusion` or three.js. Flat roofs, no facades, ground elevation for the base. Honest because every prism is a recorded BIN with a source date and a measured height, and it reads as COMPUTED, never as photographed. Roof shape and facade detail are GENERATED (stipple) or AUTHORED for the few iconic places; the 2014 model can supply iconic roofs as a dated historical layer.

**Photoreal.** REAL: Google's tiles are the only citywide source. They are allowed as a view-only backdrop under the conditions in section 4, and affordable: after 1,000 free root requests a month, $6 per 1,000 [P]. Example arithmetic [computed]: 20 classes a day x 30 seats x 30 days = 18,000 sessions, about $102 a month. Cost is not the blocker. The blockers are no offline use, no derived data, undated imagery and honesty. PROPOSED stance: **photoreal is an optional "As photographed" lens on Reality, never the substrate.** The city's own dated orthophoto (CC BY 4.0) is the honest photographic option. SPECULATIVE: photogrammetry BOW owns (own capture) is out of scope.

### 2.2 Keeping REALITY distinct from authored Worlds

No source marks anything fictional, so the distinction is a BOW invariant made checkable by the data below (PROPOSED):

- **Identity keys.** Every real building has a BIN and every lot a BBL. A BOW-authored structure has no BIN. Authored things cite a BBL as a *site* ("BOW tenancy on BBL x"), never as identity. Namespaces stay apart (`nyc:bin:1082908` vs `bow:world:...`).
- **Overlap test.** An authored footprint that intersects a real BIN footprint cannot render as a building. It renders as a tenancy or annex of the real one, or as an authored proposal beside the visible real structure.
- **Vacancy test.** PLUTO land use 11 (vacant; 24,663 lots [M]) is where an authored building displaces nothing. It is still stamped AUTHORED.
- **Time tests.** `YearBuilt`, footprint `last_status_type` (68 "Marked for Demolition", 58 "Marked for Construction" [M]), DOB filings and the PLUTO `version` give the as-of. An authored world date earlier than a building's year built is an anachronism the checker can flag.
- **Institution test.** FacDB lists real operators per BBL. A fictional club claiming a lot FacDB shows under another operator must display both.
- **Truth kinds by field.** Footprint, height, PLUTO fields = RECORDED with as-of (registry-derived, not "observed"). GTFS-RT positions = OBSERVED with lag stamp. `YearBuilt` 0, FacDB `capacity` 0 and roof height 0 = UNKNOWN (dashed), never zero. Massing = COMPUTED. Authored HQ = AUTHORED outline. Forks in their own ink.

Worked cases [M]. **Madison Square Garden:** footprint BIN 1082908, roof 145.64, no construction year, last edited 2017-08-22. Its lot BBL 1007810001 is PLUTO class U6, owner National Railroad Passenger Corp, year built 0, building area 0. PLUTO records the lot's rail owner; the arena's own operator and rights do not appear (inference: the arena sits above Penn Station; verify). **Barclays Center:** BIN 3398156, built 2011, roof 138; PLUTO lot 3011180001, 660,000 sq ft, owner "ARENA NOMINEE SUB B," (a holding-entity name, not the team), owner type X (fully tax-exempt under PLUTO's rule). Owner, operator and team are three different things that BOW must model.

### 2.3 Live Reality feeds versus snapshots

| Source | Cadence | Gate | Verdict |
|---|---|---|---|
| MTA GTFS-RT (subway, LIRR, MNR, alerts) | seconds | mirror on BOW server; lag stamp; no modification; revocable | **LIVE (PROPOSED)** |
| Citi Bike GBFS | 60 s | no stand-alone dataset; revocable | **LIVE** |
| DOT traffic speeds | minutes | Open Data terms | **LIVE** |
| NYC Ferry GTFS-RT | live [S] | terms unread | verify |
| MTA static, bus | hourly to quarterly | as above | scheduled snapshot |
| Footprints; DOB filings | weekly; daily | none | near-live structural change |
| PLUTO quarterly; FacDB 6-monthly; NYS health facilities; ACRIS; LPC | months | none | snapshot |
| Port, AIS, museums, historical maps | annual or static | see section 4 | snapshot / archive |

Only the top three rows are Reality-as-a-clock. Everything else moves the "as of" stamp, not a live pulse.

### 2.4 Rights and terms traps

1. **Google tiles.** No cache or offline; no image analysis, object detection or geodata extraction; own 3D overlays only if not traced or derived from the tiles [P]. BOW logic (parcel picking, height for mechanics, AI "looking at" the city) must run on BOW's own footprints. Hit-testing against tiles for selection is ambiguous: verify. Not checked: Google terms for child-directed use; NYC coverage.
2. **Cesium ion.** Community plan covers personal, non-commercial or unfunded educational use only; delivering to schools likely needs a commercial or negotiated plan [P]. No offline copies; content stops displaying when the term ends [P].
3. **ODbL share-alike.** If BOW merges its own fields into an OSM or Overture building table and publishes it, that whole database must be ODbL. Rule: keep BOW layers as separate Collective Databases joined by ID at runtime. Rendered tiles are Produced Works (credit; data on request) [P]. Best avoidance: use the city's footprints (no share-alike) for buildings; use OSM only for basemap.
4. **MTA terms.** BOW must serve users from its own mirror, may not alter the data, must state lag over 1 minute, may not imply accuracy, and can be cut off any time [P]. Route bullets, maps and symbols are MTA property and need a licence (fee possible for commercial use) [P].
5. **Citi Bike.** Cannot publish or stream the data as a stand-alone dataset; revocable [P].
6. **Open Data drift.** Portals can overwrite at any time and do not keep old versions [P]. Any Reality fixture needs its own dated, hashed snapshot and the required source/version/modification statement.
7. **Privacy.** PLUTO names owners on 566,788 one- and two-family lots [M], and DOB/ACRIS carry names (not inspected). This is a grades 5-6 product. Drop personal names and street addresses for one- and two-family lots at ingest; show class and place, not residents.
8. **Culture rights.** Metadata is mostly CC0; images are not. Met images only when `isPublicDomain`; MoMA and Cooper Hewitt exclude images; Rumsey is non-commercial and share-alike; OldNYC photos are largely still NYPL-copyrighted [P]; NYPL API is non-commercial by default [P]. Ingest metadata, link out to images.
9. **Names and marks.** Facts (names, addresses, dates) come from public records. MTA, museum and team logos and marks are separate rights. A BOW-run "museum" or "arena" system using a real institution's name with authored finances must read AUTHORED and never imply endorsement.

### 2.5 What BOW must build no matter what

- **The semantic layer:** a system registry that maps BIN, BBL, FacDB uid, OSM id and Wikidata QID to BOW system ids, with typed relations (owns, leases, operates, serves, hosts). One parcel hosts many authorities.
- **Authority and time:** who may act, what clock each system keeps, as-of stamps on every field. Sources keep only the latest; BOW must archive.
- **Ingest, snapshot and diff:** hash each pull, record source, version and modification, detect change (a demolished building, a new operator).
- **The truth-grammar renderer:** RECORDED vs AUTHORED vs COMPUTED vs GENERATED vs UNKNOWN as texture on the map, enforced so authored layers cannot use Reality fills or write to Reality tables.
- **Live-feed mirror** with lag stamps and revocation fallback.
- **Privacy filter** at ingest; **rights ledger** per source and per asset.
- **Iconic assets:** arenas, interiors and the few landmarks worth hand-made geometry. Footprints do not provide them.
- **The executable systems themselves:** rules, finances, actors. Open data gives ground truth and no mechanics.
- **Device truth:** frame-time and load tests on real Chromebooks. Nothing here has been run on one.

## 3. Not checked, verify next

Google tiles NYC coverage and child-directed-use terms; Cesium licence for a schools product; NYC.gov Terms of Use text (page returned 404); NYC ortho tile URL and NYC basemap terms; NYPL Repository API terms for CC0 items; 1940 tax-photo reuse terms; MapPLUTO nyc.gov page (does not render for fetch); DOB/ACRIS field-level privacy; NYC Ferry terms; IPEDS licence; Chromebook performance of any renderer; height units in footprints (feet inferred).

## 4. Sources (all checked 2026-09-29)

**[P] primary or registry read:**
- https://data.cityofnewyork.us/api/views/5zhs-2jue.json and /resource/5zhs-2jue (footprints; counts, bbox, status)
- https://github.com/CityOfNewYork/nyc-geo-metadata (Metadata_BuildingFootprints.md; Metadata_AerialImagery.md)
- https://data.cityofnewyork.us/api/views/64uk-42ks.json and /resource/64uk-42ks (PLUTO 26v2)
- https://data.cityofnewyork.us/api/views/ji82-xba5.json and /resource/ji82-xba5 (FacDB 26v1)
- https://data.cityofnewyork.us/api/views/u5j4-zxpn.json (3D model by CD) and its ReadMe attachment
- http://maps.nyc.gov/download/3dmodel/DA_WISE_GML.zip (HEAD only)
- https://cityofnewyork.github.io/opendatatsm/publicpolicies.html (Local Law 11 terms)
- https://api.us.socrata.com/api/catalog/v1 (catalog surveys); https://data.ny.gov and https://health.data.ny.gov metadata (PANYNJ, DOH)
- https://developers.google.com/maps/documentation/tile/policies (updated 2026-09-24); /usage-and-billing; https://developers.google.com/maps/billing-and-pricing/pricing
- https://cesium.com/platform/cesium-ion/pricing/; https://cesium.com/legal/terms-of-service/; https://cesium.com/platform/cesium-ion/content/cesium-osm-buildings/
- https://osmfoundation.org/wiki/Licence/Licence_and_Legal_FAQ; https://github.com/osmlab/nycbuildings
- https://docs.overturemaps.org/attribution/; /guides/buildings/; s3://overturemaps-us-west-2/release/ listing
- https://docs.protomaps.com/basemaps/downloads; https://openmaptiles.org/docs/; https://registry.npmjs.org (maplibre-gl, pmtiles, deck.gl, three, 3d-tiles-renderer, @protomaps/basemaps, cesium)
- https://www.mta.info/developers; https://www.mta.info/developers/terms-and-conditions; https://rrgtfsfeeds.s3.amazonaws.com/ (GTFS zips, HEAD); https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace (live GET)
- https://gbfs.citibikenyc.com/gbfs/gbfs.json; https://citibikenyc.com/data-sharing-policy
- https://collectionapi.metmuseum.org/public/collection/v1/objects; https://github.com/metmuseum/openaccess
- https://github.com/MuseumofModernArt/collection; https://github.com/cooperhewitt/collection
- https://github.com/NYPL-publicdomain/data-and-utilities; https://api.repo.nypl.org/terms_conditions; https://www.nypl.org/digital-research/projects/map-warper
- https://www.davidrumsey.com/about; https://www.oldnyc.org/about.html
- https://www.asg.ed.tum.de/en/gis/projects/3d-city-model-of-new-york-city/; https://github.com/tum-gis/3d-model-new-york-city; https://github.com/georocket/new-york-city-model-enhanced; https://cesium.com/blog/2017/05/05/nyc-3dtiles/
- Overpass (mirror maps.mail.ru/osm/tools/overpass, base 2026-09-29T22:21Z) for the OSM Midtown probe

**[S] search snippet only, verify:**
- https://www.nyc.gov/mayors-office/news/2025/11/mayor-adams-announces--10-million-platform-to-map-new-york-city- (URL truncated in the result; "3D Underground") and https://www.apam.columbia.edu/digital-twin-new-york-city-smart-city-project-named-winner-idc-smart-cities-north-america-awards
- https://www.panynj.gov press release "2024 volumes" and airport statistics pages
- https://coast.noaa.gov / https://github.com/ocm-marinecadastre/ais-vessel-traffic (AIS, CC0)
- https://nces.ed.gov/ipeds (release cadence)
- https://www.ferry.nyc/developer-tools/ (Ferry GTFS-RT)
- https://www.nypl.org/help/about-nypl/legal-notices/repository-api; https://nycrecords.access.preservica.com/1940s-tax-photographs/; https://github.com/danvk/oldnyc (Apache-2.0)
- https://www.wikidata.org/wiki/Wikidata:Licensing
- https://catalog.data.gov/dataset/3-d-building-model and the TU Delft 3D Open Cities catalog (source of the "about 100 iconic buildings at LoD2" figure; the NYC README itself says only "hybrid LoD1/LoD2")
