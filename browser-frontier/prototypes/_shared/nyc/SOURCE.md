# NYC Midtown building footprints — source statement

- Source: NYC Building Footprints, NYC Office of Technology and Innovation, NYC Open Data dataset
  `5zhs-2jue` (https://data.cityofnewyork.us/resource/5zhs-2jue), pulled 29 Sep 2026 by the Lane A scout.
- Version: the portal keeps only the latest; rows updated 2026-09-27, newest feature edit 2026-09-25
  (as read on the pull date).
- Licence: NYC Open Data (Local Law 11) — no registration, licence or usage restriction; data provided
  as-is. On republication the City may require source, version and modification to be stated: this file
  is that statement.
- Modification: clipped to a Midtown box (lon −73.998…−73.972, lat 40.742…40.762; 4,142 footprints);
  fields kept: `bin`, `base_bbl`, `height_roof` (units appear to be feet — verify), `ground_elevation`,
  `construction_year`; coordinates rounded to 6 decimal places. Nothing else changed.
- Truth kind in BOW: RECORDED (a city registry's record, with this as-of date), not OBSERVED; massing
  extruded from it is COMPUTED; missing or zero heights / years are UNKNOWN, never zero.
