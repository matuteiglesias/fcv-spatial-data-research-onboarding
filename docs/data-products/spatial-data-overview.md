---
title: Spatial Data Overview
sidebar_position: 1
description: Overview of the spatial_data folder as a reusable project-level spatial feature and data product store.
---

# Spatial Data Products

The `spatial_data` folder appears to be a reusable spatial feature and data product store from the earlier project-specific phase of the research work.

It should not be treated as merely raw data, and it should not be treated as a direct final-output folder for the whole `2023_Duke` pipeline. It is better understood as a computed product layer for project-level or village-level spatial features, mostly around DRC, Tunisia, Egypt, and related public works or infrastructure projects.

In contrast:

| Folder | Main unit of analysis | Main role |
|---|---|---|
| `spatial_data` | villages, project sites, household/project GPS locations, imadas, Afrobarometer places | project-level spatial feature products |
| `2023_Duke` | Africa-wide administrative areas / GADM-derived units | generalized admin-unit pipeline and empirical-analysis infrastructure |
| `sources` | raw source files | rebuild and validation inputs |
| `Machine Learning and Spatial Analysis` | mixed project-specific notebooks and source folders | predecessor spatial-analysis lab |

## How to read this folder

`spatial_data` contains computed outputs such as:

- ACLED violence exposure around villages or project locations;
- OSM features around locations;
- climate variables;
- ruggedness / elevation-derived variables;
- distance to borders;
- distance to cities;
- project and village GeoJSON files;
- map-specific helper files;
- notebooks used to generate some of these products.

This makes the folder valuable for reusing prior feature engineering, especially for project-specific analyses. However, before treating any file as canonical, the product family, unit of analysis, spatial radius, time window, and source project should be checked.

## Current product-family summary

The current scan found 266 files, with the following top-level structure:

| Folder or file | Files | Size | Interpretation |
|---|---:|---:|---|
| `ACLED/` | 118 | 758.62 MB | Violence exposure products around village or project locations. This is the largest product family. |
| `geojson/` | 55 | 29.40 MB | GeoJSON locations and map geometries: villages, household GPS, population buffers, night-time lights, Afrobarometer places, GHSL. |
| `OSM/` | 48 | 2.33 MB | OpenStreetMap feature products, mostly amenities, shops, highways, and surfaces within distance buffers. |
| `climate/` | 9 | 0.20 MB | Climate and ruggedness features by project/location unit. |
| `misc_maps/` | 9 | 2.05 MB | Map helper files and outputs, especially Egypt/Tunisia map material. |
| `distance_borders/` | 8 | 0.85 MB | Distance-to-border products by project/location unit. |
| `distance_cities/` | 8 | 0.08 MB | Distance-to-city products by project/location unit. |
| `notebooks/` | 6 | 0.76 MB | Product-generation notebooks and helper scripts. |
| `sources/` | 4 | 0.02 MB | Small source/helper tables, such as city lists or neighbor-country tables. |
| `for_egypt_ELIIP_map.csv` | 1 | ~0 MB | Standalone Egypt ELIIP map helper file. |

The folder is therefore strongly product-oriented: almost everything is a spatial feature, a geometry file, a map artifact, or a notebook/script used to generate those products.

## Product family: ACLED exposure products

The `ACLED/` folder is the largest product family. It contains 118 CSV files and roughly 759 MB of outputs.

The filenames follow a mostly systematic pattern:

```text
vills_ACLED_join_{all|sum}_{country}_{radius}_{timing}{window}_{dataset}.csv
```

Typical filename components include:

| Token | Meaning |
|---|---|
| `vills` | village or project-location based unit |
| `ACLED` | violence event source |
| `join` | spatial join between locations and ACLED events |
| `all` | event-level joined output |
| `sum` | aggregated summary output |
| `COD`, `TUN`, `EGY` | country: DRC, Tunisia, Egypt |
| `5km`, `10km`, `50km` | spatial buffer radius |
| `before365days`, `after365days`, `about365days` | short time-window relation to project/intervention date |
| `before1826days`, `after1826days`, `about1826days` | approximate five-year window relation to project/intervention date |
| `STEP_CDD`, `Tuungane`, `drc_rural`, `egypt_ELIIP` | project or source dataset |
| `COVID` | COVID-period-specific variant for some STEP CDD files |

Frequent filename tokens include:

| Token | Count |
|---|---:|
| `vills` | 144 |
| `ACLED` | 118 |
| `join` | 118 |
| `50km` | 67 |
| `EGY` | 64 |
| `all` | 60 |
| `sum` | 58 |
| `5km` | 48 |
| `COD` | 43 |
| `egypt` / `ELIIP` | 40 each |
| `before365days` | 36 |
| `before1826days` | 30 |
| `STEP` / `CDD` | 14 each |
| `TUN` | 11 |
| `COVID` | 6 |

This suggests the ACLED products were designed to answer questions like:

- how much violence occurred near a project or village;
- whether violence occurred before or after an intervention date;
- whether exposure differs by radius, such as 5 km versus 50 km;
- whether exposure differs across projects or countries.

### ACLED product variants

There are two main output types:

| Type | Meaning | Typical use |
|---|---|---|
| `join_all` | event-level joined data, keeping ACLED event information around each village/project location | inspection, event-level diagnostics, custom aggregation |
| `join_sum` | summarized exposure indicators by village/project location | direct use as covariates or outcomes |

Example files include:

```text
spatial_data/ACLED/vills_ACLED_join_all_COD_50km_before365days_STEP_CDD.csv
spatial_data/ACLED/vills_ACLED_join_sum_COD_50km_before365days_STEP_CDD.csv
spatial_data/ACLED/vills_ACLED_join_all_EGY_50km_before1826days_egypt_ELIIP.csv
spatial_data/ACLED/vills_ACLED_join_sum_TUN_10km_about180days_tunisia.csv
```

Sampled ACLED files have columns such as:

```text
lat
lng
datetime_vill
number
data_id
event_id_cnty
event_id_no_cnty
event_date
year
time_precision
```

Project-specific location identifiers vary by source dataset. For example:

| Source/project | Example ID or location columns |
|---|---|
| DRC rural | `a1_village`, `a1_province`, `a1_territory` |
| DRC STEP CDD | `q7h_village`, `pro_id`, `province`, `q7b_territoire` |
| Tuungane | `em7_idvconfirm`, `em8_village_name` |
| Egypt ELIIP | `Village_EN`, `District`, `Gov` |
| DRC urban | `lott_Quartier`, `lott_Ville` |

### Caution

The ACLED products are large and  useful, but they should not be treated as a single homogeneous dataset. They vary by:

- country;
- project/source dataset;
- buffer radius;
- time-window definition;
- event-level versus summary output;
- pre/post/about timing relative to intervention dates;
- location identifier schema.

Before reuse, each intended product should be checked for:

1. unit of observation;
2. treatment or intervention date logic;
3. event inclusion window;
4. duplicate events;
5. whether `join_all` or `join_sum` is appropriate;
6. project-specific ID consistency.

## Product family: OpenStreetMap features

The `OSM/` folder contains 48 CSV files and about 2.33 MB of outputs.

These files appear to contain feature counts or extracted OSM attributes around project or village locations.

Frequent filename tokens include:

| Token | Count |
|---|---:|
| `OSM` | 48 |
| `DRC` | 40 |
| `highway` | 36 |
| `5km` | 32 |
| `amenity` | 24 |
| `shop` | 24 |
| `PWP` | 16 |
| `2km` | 16 |
| `surface` | 12 |
| `STEP` / `CDD` | 8 each |
| `egypt` / `ELIIP` | 4 each |
| `tunisia` / `imada` / `centroids` | 4 each |

The filenames follow a pattern such as:

```text
OSM_{country_or_project}_{feature_group}_{feature_subgroup}_{radius}.csv
```

Examples:

```text
spatial_data/OSM/OSM_DRC_STEP_CDD_amenity_amenity_2km.csv
spatial_data/OSM/OSM_DRC_STEP_CDD_shop_shop_5km.csv
spatial_data/OSM/OSM_DRC_STEP_CDD_highway_highway_5km.csv
spatial_data/OSM/OSM_DRC_STEP_CDD_highway_surface_5km.csv
spatial_data/OSM/OSM_egypt_ELIIP_amenity_amenity_5km.csv
spatial_data/OSM/OSM_tunisia_imada_centroids_highway_highway_5km.csv
```

Observed feature groups include:

| Feature group | Interpretation |
|---|---|
| `amenity` | OSM amenities around locations |
| `shop` | OSM shop categories around locations |
| `highway` | OSM road/highway categories around locations |
| `surface` | road-surface related OSM attributes |

Sampled OSM files include project-location columns plus generated feature columns. For example:

```text
q7h_village
pro_id
province
q7b_territoire
q3_gpslatitude
q3_gpslongitude
geometry
place
gpslat
gpslng
amenity_2km
```

Some files contain many columns. For example, sampled STEP CDD OSM files ranged from 31 to 100 columns depending on feature group and radius.

### Caution

The OSM feature files appear to be project-specific and may contain cumulative columns from previous joins. Some sampled files include `amenity_2km` even in highway or shop files, suggesting that some files may contain merged feature sets rather than only the feature named in the filename.

Before reuse, check:

1. whether the file contains only the named feature group or a cumulative feature table;
2. which radius was used;
3. whether the coordinate columns are original or standardized;
4. whether the project-location ID is unique;
5. whether missing OSM categories imply true zeros or no extracted features.

## Product family: climate and ruggedness

The `climate/` folder contains 9 CSV files.

These files include climate features and at least some ruggedness outputs.

Common climate columns include:

```text
temp_jan
pr_jan
temp_jul
pr_jul
```

Observed files include:

```text
spatial_data/climate/imadas_climate.csv
spatial_data/climate/points_R1_climate.csv
spatial_data/climate/vills_DRC_STEP_CDD_climate.csv
spatial_data/climate/vills_DRC_rural_30kBL_filled_climate.csv
spatial_data/climate/vills_DRC_rural_EL_climate.csv
spatial_data/climate/vills_DRC_rural_baseline_climate.csv
spatial_data/climate/vills_egypt_ELIIP_climate.csv
```

There are also ruggedness files:

```text
spatial_data/climate/vills_DRC_STEP_CDD_ruggedness.csv
spatial_data/climate/vills_DRC_STEP_CDD_ruggedness_copy.csv
```

Example ruggedness columns include:

```text
lat
lng
ruggedness
```

### Interpretation

This family provides environmental or geographic covariates for project-level analyses. These features are  useful as controls or heterogeneity variables.

### Caution

Climate and ruggedness are currently stored together under `climate/`, so the folder name is slightly broader than its contents. The ruggedness files should be explicitly marked in the inventory.

## Product family: distance to borders

The `distance_borders/` folder contains 8 CSV files.

These products compute distance from project or village locations to international borders.

Observed files include:

```text
spatial_data/distance_borders/Egypt_IE_individual_final_dist_border.csv
spatial_data/distance_borders/imadas_dist_border.csv
spatial_data/distance_borders/vills_DRC_STEP_CDD_dist_border.csv
spatial_data/distance_borders/vills_DRC_rural_30kBL_filled_dist_border.csv
spatial_data/distance_borders/vills_DRC_rural_EL_dist_border.csv
spatial_data/distance_borders/vills_DRC_rural_baseline_dist_border.csv
spatial_data/distance_borders/vills_DRC_urban_dist_border.csv
spatial_data/distance_borders/vills_egypt_ELIIP_dist_border.csv
```

Most files include:

```text
lat
lng
geometry
dist_border_km
```

The project-specific ID columns differ by dataset.

### Interpretation

These products are useful for:

- controlling for border proximity;
- identifying conflict exposure risk;
- geographic heterogeneity;
- studying spillovers near international borders.

## Product family: distance to cities

The `distance_cities/` folder contains 8 CSV files.

These products compute distance from project or village locations to named cities.

Observed files include:

```text
spatial_data/distance_cities/Egypt_IE_individual_final_dist_city.csv
spatial_data/distance_cities/imadas_dist_city.csv
spatial_data/distance_cities/vills_DRC_STEP_CDD_dist_city.csv
spatial_data/distance_cities/vills_DRC_rural_30kBL_filled_dist_city.csv
spatial_data/distance_cities/vills_DRC_rural_EL_dist_city.csv
spatial_data/distance_cities/vills_DRC_rural_baseline_dist_city.csv
spatial_data/distance_cities/vills_DRC_urban_dist_city.csv
spatial_data/distance_cities/vills_egypt_ELIIP_dist_city.csv
```

Sampled files have a compact schema:

```text
location_id
city
dist_km
```

The location identifier differs by dataset. Examples include:

```text
vil_id
imada_str
q4_cddid
IDV
a1_village
a014_id_village
lott_Quartier
Village_EN
```

### Interpretation

These files are  long-format nearest-city or city-distance tables. They may contain one or more city-distance rows per location.

Before merging into analysis panels, check whether each location appears once or multiple times.

## Product family: GeoJSON and spatial geometries

The `geojson/` folder contains 55 files and about 29.4 MB.

The subfolders are:

| Subfolder | Files | Size | Interpretation |
|---|---:|---:|---|
| `villages/` | 25 | 8.17 MB | Main village/project location geometries and map assets. |
| `vills-pop/` | 16 | 2.01 MB | Village/project locations enriched with population features. |
| `vills-NTL/` | 8 | 0.87 MB | Village/project locations enriched with night-time lights features. |
| `households-GPS/` | 4 | 10.07 MB | Household GPS GeoJSON files. |
| `afrob-places/` | 1 | 0.62 MB | Afrobarometer place geometry. |
| `GHSL/` | 1 | 7.66 MB | GHSL population geometry/product. |

Examples include:

```text
spatial_data/geojson/villages/vills_DRC_STEP_CDD.geojson
spatial_data/geojson/villages/vills_DRC_rural_baseline.geojson
spatial_data/geojson/villages/vills_egypt_ELIIP.geojson
spatial_data/geojson/villages/imadas.geojson
spatial_data/geojson/vills-pop/vills_DRC_STEP_CDD_pop5km.geojson
spatial_data/geojson/vills-NTL/vills_DRC_STEP_CDD_NTL50.geojson
spatial_data/geojson/households-GPS/DRC_rural.geojson
spatial_data/geojson/afrob-places/points_R1.geojson
spatial_data/geojson/GHSL/population.geojson
```

There are also map images added later:

```text
spatial_data/geojson/villages/Egypt_data_map.png
spatial_data/geojson/villages/DRCU_data_map.png
spatial_data/geojson/villages/Tunisia_data_map.png
spatial_data/geojson/villages/DRCR_data_map.png
```

### Interpretation

This is the geometry backbone for project-level spatial features. It stores the point or polygon geometries used to generate ACLED, OSM, population, night-time lights, climate, and distance features.

### Caution

The folder includes both source-like geometry files and enriched geometry products. It should be inventoried by subfolder and by project before being declared canonical.

## Product family: miscellaneous maps

The `misc_maps/` folder contains map helper files and outputs.

Observed files include:

```text
spatial_data/misc_maps/for_egypt_ELIIP_map.csv
spatial_data/misc_maps/imadas_dist_border.csv
spatial_data/misc_maps/gadm41_EGY_1.json
spatial_data/misc_maps/gadm41_EGY_2.json
spatial_data/misc_maps/gadm41_TUN_1.json
spatial_data/misc_maps/egypt_map.png
spatial_data/misc_maps/egypt_map_indicator_0.png
spatial_data/misc_maps/tunisia_map_coloring.png
spatial_data/misc_maps/01 - Maps.ipynb
```

This appears to be a small map-production area, especially for Egypt and Tunisia.

The standalone top-level file:

```text
spatial_data/for_egypt_ELIIP_map.csv
```

appears to duplicate or relate to:

```text
spatial_data/misc_maps/for_egypt_ELIIP_map.csv
```

This should be checked before use.

## Product-generation notebooks

The `notebooks/` folder contains notebooks and helper code used to create product families.

Observed notebooks include:

```text
spatial_data/notebooks/ACLED 01 - Lookup and Save files.ipynb
spatial_data/notebooks/ACLED 03 - Lookup and Save STEP CDD - COVID.ipynb
spatial_data/notebooks/Compute distance to cities and borders.ipynb
spatial_data/notebooks/Elevation and Ruggedness.ipynb
```

There is also:

```text
spatial_data/notebooks/spatial_tools.py
spatial_data/notebooks/Compute distance to cities and borders.html
```

The notebook headers show the intended functions:

| Notebook | Observed role |
|---|---|
| `ACLED 01 - Lookup and Save files.ipynb` | Load ACLED, explore ACLED, join ACLED to imadas, define functions, configure radius/time-window parameters, run Egypt ELIIP products. |
| `ACLED 03 - Lookup and Save STEP CDD - COVID.ipynb` | Load ACLED, define functions, set parameters, process STEP CDD, intervention date, COVID date, inspect results. |
| `Compute distance to cities and borders.ipynb` | Compute distance to cities and borders using neighbor-country and city datasets. |
| `Elevation and Ruggedness.ipynb` | Generate elevation/ruggedness features. |
| `geojson/villages/geojson.ipynb` | Global map / geometry-related material. |
| `misc_maps/01 - Maps.ipynb` | Map creation,  Egypt/Tunisia-specific. |

These notebooks are useful for reconstructing product logic, but they should not yet be treated as guaranteed runnable scripts.

##  projects and datasets represented

From filenames and schemas, `spatial_data` appears to cover several projects or study-unit families:

| Project or dataset family | Evidence |
|---|---|
| DRC STEP CDD | `vills_DRC_STEP_CDD`, `OSM_DRC_STEP_CDD`, `STEP_CDD`, `q7h_village`, `pro_id` |
| DRC rural PWP / rural baseline | `vills_DRC_rural_baseline`, `drc_rural`, `a014_id_village`, `a1_village` |
| DRC urban PWP | `vills_DRC_urban`, `drc_urban`, `lott_Quartier`, `lott_Ville` |
| Tuungane | `Tuungane`, `Tuung`, `em8_village_name` |
| DRC rural 30k baseline | `rural_30kBL`, `IDV` |
| DRC rural endline | `rural_EL`, `a1_village` |
| Tunisia / imadas | `imadas`, `tunisia`, `imada_centroids` |
| Egypt ELIIP | `egypt_ELIIP`, `Egypt_IE_individual_final`, `Village_EN`, `District`, `Gov` |
| Afrobarometer places | `points_R1`, `afrob-places` |
| GHSL population | `GHSL/population.geojson` |

This confirms that the folder is a cross-project spatial product store, not a single project dataset.

## Relationship with `2023_Duke`

`spatial_data` and `2023_Duke` appear to operate at different levels of abstraction.

`spatial_data` is mostly project-specific and location-level:

```text
villages
households
project GPS points
imadas
Afrobarometer places
```

`2023_Duke` is mostly generalized and admin-unit based:

```text
GADM-derived African administrative units
area-year panels
DHS geocovariates by GID
violence by GID-year
Afrobarometer by GID
investment exposure by area-period
```

The  historical relation is:

1. earlier work developed spatial feature engineering around villages and project sites;
2. many reusable outputs accumulated in `spatial_data`;
3. later, `2023_Duke` generalized the approach into an Africa-wide administrative-unit framework.

This means some `spatial_data` products may have been superseded for the 2023 generalized analysis, but they remain valuable for project-level analyses or for reconstructing earlier design choices.

## Recommended use

Use `spatial_data` when you need to:

- inspect previously computed project-level spatial covariates;
- recover ACLED exposure products around project locations;
- recover OSM, climate, population, night-time lights, ruggedness, or distance features;
- understand how DRC/Tunisia/Egypt project locations were represented spatially;
- reproduce or audit older project-level feature engineering;
- prepare maps or project-specific onboarding material.

Do not start here when you need to:

- understand the generalized 2023 Africa-wide pipeline;
- interpret the final empirical study in `2023_Duke`;
- rebuild raw ACLED, DHS, UCDP, or Afrobarometer sources from scratch;
- identify the canonical matching/regression outputs from 2023.

For those tasks, start with:

| Task | Better starting point |
|---|---|
| Generalized 2023 pipeline | `2023_Duke/` |
| 2023 empirical analysis | `2023_Duke/08_Empirical Study_ Investment & Violence/` |
| Matching outputs | `2023_Duke/08_Empirical Study_ Investment & Violence/` and `2023_Duke/86 - Produce Matching Outputs.ipynb` |
| Raw source rebuild | `sources/` and selected legacy folders |
| Earlier project context | `Machine Learning and Spatial Analysis/`, `PW_Violence/`, and project-specific folders |

## Validation checklist

Before promoting any `spatial_data` file into a current analysis, check:

1. **Unit of observation**
   - Is the unit a village, household, project site, imada, Afrobarometer place, or something else?

2. **Project/source dataset**
   - Which project does this file belong to: DRC STEP CDD, Tuungane, DRC rural PWP, Egypt ELIIP, Tunisia, Afrobarometer, or another source?

3. **Identifier column**
   - What is the stable ID column?
   - Examples include `q4_cddid`, `pro_id`, `q7h_village`, `IDV`, `a1_village`, `a014_id_village`, `Village_EN`, `vil_id`, `imada_str`.

4. **Coordinate columns**
   - Are coordinates stored as `lat`/`lng`, `gpslat`/`gpslng`, project-specific GPS columns, or embedded in `geometry`?

5. **Spatial radius**
   - For ACLED and OSM products, confirm whether the file uses 2 km, 5 km, 10 km, or 50 km.

6. **Time window**
   - For ACLED products, confirm whether the file uses before, after, or about relative to intervention date, and whether the window is 365 days or 1826 days.

7. **Aggregation level**
   - For ACLED files, distinguish `join_all` event-level files from `join_sum` summarized exposure files.

8. **Column accumulation**
   - For OSM files, check whether the file contains only the feature named in the filename or a cumulative set of previously merged features.

9. **Version and duplication**
   - Check possible duplicate or near-duplicate products, such as the top-level `for_egypt_ELIIP_map.csv` and the copy under `misc_maps/`.

10. **Canonical status**
   - Mark each reused file as one of:
     - canonical for current reuse;
     - inspectable but not canonical;
     - legacy only;
     - needs rebuild.

## Current recovery status

Current status:

```text
high-value product store, not yet fully inventoried or canonically validated
```

Recommended immediate stance:

```text
Use spatial_data as a reusable project-level spatial feature store.
Document product families before using individual files.
Do not collapse it into the 2023_Duke pipeline without checking unit of analysis and provenance.
```

## Next documentation steps

The next pass should produce a compact inventory table with one row per product family:

| Product family | Folder | Unit | Countries/projects | Key parameters | Status |
|---|---|---|---|---|---|
| ACLED exposure | `spatial_data/ACLED` | village/project location | COD, EGY, TUN | radius, time window, all/sum | inspectable, needs canonical selection |
| OSM features | `spatial_data/OSM` | village/project location | DRC, Egypt, Tunisia | category, radius | inspectable |
| Climate | `spatial_data/climate` | village/project/place | DRC, Egypt, Tunisia, Afrobarometer R1 | temp/precip variables | inspectable |
| Ruggedness | `spatial_data/climate` | village/project location | DRC STEP CDD | ruggedness | inspectable |
| Distance to borders | `spatial_data/distance_borders` | village/project/location | DRC, Egypt, Tunisia | kilometers to border | inspectable |
| Distance to cities | `spatial_data/distance_cities` | village/project/location-city pair | DRC, Egypt, Tunisia | kilometers to city | inspectable |
| GeoJSON locations | `spatial_data/geojson` | geometry | DRC, Egypt, Tunisia, Afrobarometer, GHSL | point/polygon/enriched geometries | inspectable |
| Maps | `spatial_data/misc_maps` | map helper / output | Egypt, Tunisia | map JSON/PNG/CSV | inspectable |