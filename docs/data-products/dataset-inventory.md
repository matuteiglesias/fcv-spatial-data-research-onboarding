---
title: Dataset Inventory
sidebar_position: 2
description: Inventory of known dataset families, observed locations, sizes, and current validation status.
---

# Dataset Inventory

This page inventories the main recovered dataset families observed so far across two areas:

- `2023_Duke/`, the main recovered 2023 generalized pipeline;
- `spatial_data/`, the earlier project-level spatial feature and product store.

The goal is not yet to declare every file canonical. The goal is to make the archive legible enough that future work can distinguish between:

- source-like inputs;
- processed intermediate outputs;
- reusable data products;
- empirical-analysis datasets;
- matching outputs;
- files that still need validation before reuse.

## Inventory status

Current status:

`substantial recovered inventory, not yet fully validated`

The dataset families below are observed on disk. Their existence does not automatically mean they are ready for renewed analysis. Each family still needs a validation pass before being treated as canonical.

Recommended status labels:

| Status | Meaning |
|---|---|
| `reusable after validation` |  useful and structured, but row counts, keys, and provenance still need to be checked. |
| `inspectable` | Useful for understanding past work, but not yet safe for direct reuse. |
| `intermediate` | Pipeline product used to build other outputs. |
| `empirical working data` | Downstream data for matching/regression work. Useful, but tied to analysis assumptions. |
| `legacy/product store` | Reusable from older project-level work, but not necessarily part of the generalized 2023 pipeline. |
| `needs canonical selection` | Multiple versions exist; one must be selected or regenerated. |

## Continuation links for investment data

For the forward-looking source update plan, see [Source Data Inventory and Update Strategy](../continuation/source-data-inventory-update-strategy.md). For the project-level labels needed to turn source records into treatment categories, see [Annotation and Project Classification Protocol](../continuation/annotation-project-classification-protocol.md).



| Dataset family | Files | Size | Main location | Current status |
|---|---:|---:|---|---|
| GADM GeoJSON | 6 | 235.94 MB | `2023_Duke/01_GADM_standarise/geojson/` | reusable after validation |
| GADM info tables | 6 | 1.99 MB | `2023_Duke/01_GADM_standarise/info/` | reusable after validation |
| GADM out data | 3 | 0.01 MB | `2023_Duke/01_GADM_standarise/out_data/` | reusable after validation |
| Violence yearly aggregates | 6 | 5.43 MB | `2023_Duke/03_violence/out_data/` | reusable after validation |
| Violence point-GID mappings | 6 | 69.46 MB | `2023_Duke/03_violence/out_data/` | intermediate |
| ACLED point-GID mappings | 6 | 103.45 MB | `2023_Duke/03_violence/out_data/` | intermediate |
| Violence GeoJSON | 1 | 32.40 MB | `2023_Duke/03_violence/out_data/` | inspectable |
| ACLED GeoJSON | 1 | 47.88 MB | `2023_Duke/03_violence/out_data/` | inspectable |
| DHS clusters/info | 24 | 125.56 MB | `2023_Duke/04_DHS/info/` | reusable after validation |
| DHS GC out data | 5 | 135.36 MB | `2023_Duke/04_DHS/out_data/` | needs canonical selection |
| DHS long format | 13 | 2699.81 MB | `2023_Duke/04_DHS/out_data/long_format/` | needs canonical selection |
| Afrobarometer raw rounds | 35 | 182.26 MB | `2023_Duke/06_afrobarometer/data/` | source / processed source |
| Afrobarometer GID means | 30 | 9.51 MB | `2023_Duke/06_afrobarometer/data/` | reusable after validation |
| Afrobarometer places/info | 9 | 17.13 MB | `2023_Duke/06_afrobarometer/info/` | intermediate / reusable after validation |
| Empirical reg data | 108 | 800.67 MB | `2023_Duke/08_Empirical Study_ Investment & Violence/data/reg_data/` | empirical working data |
| Empirical matches | 120 | 6.11 MB | `2023_Duke/08_Empirical Study_ Investment & Violence/data/matches/` | empirical working data |
| Spatial ACLED products | 118 | 758.62 MB | `spatial_data/ACLED/` | legacy/product store |
| Spatial OSM products | 48 | 2.33 MB | `spatial_data/OSM/` | legacy/product store |
| Spatial climate products | 9 | 0.20 MB | `spatial_data/climate/` | legacy/product store |
| Spatial distance to borders | 8 | 0.85 MB | `spatial_data/distance_borders/` | legacy/product store |
| Spatial distance to cities | 8 | 0.08 MB | `spatial_data/distance_cities/` | legacy/product store |
| Spatial village GeoJSONs | 42 | 27.73 MB | `spatial_data/geojson/` | legacy/product store |

## Authority model

The inventory has two different layers.

### Generalized 2023 pipeline datasets

These live mostly under `2023_Duke/`.

They are organized around Africa-wide GADM-derived administrative units and are meant to support the generalized empirical pipeline:

- standardized geography;
- population;
- violence;
- DHS geocovariates;
- Afrobarometer;
- empirical investment/violence panels;
- matching and regression outputs.

These should be the main focus for understanding the 2023 generalized work.

### Project-level spatial products

These live mostly under `spatial_data/`.

They are organized around project or location-level units:

- villages;
- project sites;
- household GPS points;
- imadas;
- Egypt ELIIP locations;
- DRC STEP CDD locations;
- Tuungane locations;
- DRC rural/urban PWP locations;
- Afrobarometer places.

These are valuable but should not be automatically treated as outputs of the `2023_Duke` pipeline. They are more  a product store from the earlier project-specific spatial-analysis phase.

## 2023_Duke dataset families

## GADM standardized geography

Main locations:

| Family | Location |
|---|---|
| GADM GeoJSON | `2023_Duke/01_GADM_standarise/geojson/` |
| GADM info tables | `2023_Duke/01_GADM_standarise/info/` |
| GADM out data | `2023_Duke/01_GADM_standarise/out_data/` |

Observed files include:

| Family | Example files |
|---|---|
| GADM GeoJSON | `africa_a1_0.001.geojson`, `africa_a2_0.001.geojson`, `africa_a3_0.001.geojson`, `africa_l1_0.001.geojson`, `africa_l2_0.001.geojson`, `africa_l3_0.001.geojson` |
| GADM info tables | `africa_a1_0.001.csv`, `africa_a2_0.001.csv`, `africa_a3_0.001.csv`, `africa_l1_0.001.csv`, `africa_l2_0.001.csv`, `africa_l3_0.001.csv` |
| GADM out data | `GADM_area_stats.csv`, `adaptive_levels.csv`, `level_reference.csv` |

Interpretation:

This is the geography backbone for the 2023 pipeline. The repeated geography variants `a1`, `a2`, `a3`, `l1`, `l2`, and `l3` are used throughout downstream files.

 use:

- define the spatial unit of analysis;
- join source data to GADM-derived units;
- produce maps;
- aggregate violence, DHS, Afrobarometer, and investment/project data.

Validation needed:

1. define exactly what `a1`, `a2`, `a3`, `l1`, `l2`, and `l3` mean;
2. check unique key fields, especially `GID`;
3. verify country coverage;
4. verify geometry validity;
5. confirm whether `0.001` refers to geometry simplification or tolerance;
6. confirm which geography variant should be preferred for renewed analysis.

Current status:

`reusable after validation`

## Violence and ACLED products in 2023_Duke

Main location:

`2023_Duke/03_violence/out_data/`

Observed families:

| Family | Files | Size | Example files |
|---|---:|---:|---|
| Violence yearly aggregates | 6 | 5.43 MB | `violence_africa_a1_0.001_yr.csv`, `violence_africa_a2_0.001_yr.csv`, `violence_africa_l1_0.001_yr.csv` |
| Violence point-GID mappings | 6 | 69.46 MB | `violence_ptsGID_africa_a1_0.001.csv`, `violence_ptsGID_africa_a2_0.001.csv`, `violence_ptsGID_africa_l1_0.001.csv` |
| ACLED point-GID mappings | 6 | 103.45 MB | `acled_ptsGID_africa_a1_0.001.csv`, `acled_ptsGID_africa_a2_0.001.csv`, `acled_ptsGID_africa_l1_0.001.csv` |
| Violence GeoJSON | 1 | 32.40 MB | `violence_info.geojson` |
| ACLED GeoJSON | 1 | 47.88 MB | `acled_info.geojson` |

Interpretation:

This stage contains both event-level spatial files and administrative-area aggregates.

The point-GID mapping files  record which violence or ACLED events fall into which GADM-derived area variant. The yearly aggregate files  summarize violence by area and year.

 use:

- construct conflict/violence outcomes;
- construct violence exposure variables;
- inspect event distributions;
- generate area-year panels;
- compare results across geography variants.

Validation needed:

1. distinguish `violence_*` from `acled_*` files;
2. confirm whether `violence_info.geojson` combines ACLED and UCDP or uses another definition;
3. inspect event ID uniqueness;
4. verify area-year coverage;
5. check whether deaths/fatalities/event counts are aggregated consistently;
6. verify whether point-GID mappings are many-to-one or many-to-many;
7. confirm the canonical violence measure for empirical use.

Current status:

- yearly aggregates: `reusable after validation`;
- point-GID mappings: `intermediate`;
- GeoJSON files: `inspectable`.

## DHS products

Main locations:

| Family | Location |
|---|---|
| DHS clusters/info | `2023_Duke/04_DHS/info/` |
| DHS GC out data | `2023_Duke/04_DHS/out_data/` |
| DHS long format | `2023_Duke/04_DHS/out_data/long_format/` |

Observed families:

| Family | Files | Size | Example files |
|---|---:|---:|---|
| DHS clusters/info | 24 | 125.56 MB | `DHSID_GID_africa_a1_0.001.csv`, `DHSID_HHcluster_GID_africa_a1_0.001.csv`, `DHS_clusters.csv`, `GPS_points.geojson` |
| DHS GC out data | 5 | 135.36 MB | `DHSGC.csv`, `DHSGC_v2.csv`, `DHS_GC_africa_l1_0.001_GIDmeans.csv`, `DHS_GC_africa_l2_0.001_GIDmeans.csv` |
| DHS long format | 13 | 2699.81 MB | `DHSGC_GID_africa_l1_0.001_TSinterpolated.csv`, `DHSGC_GID_africa_l2_0.001_TSinterpolated.csv`, `DHSGC_long.csv` |

Interpretation:

This is one of the largest recovered product families. It appears to include:

- DHS cluster metadata;
- cluster-to-GID mappings;
- household-cluster-to-GID mappings;
- DHS geocovariate files;
- area-level means of DHS geocovariates;
- long-format and time-interpolated DHS covariate panels.

 use:

- add socioeconomic and geographic covariates to area-level panels;
- link DHS clusters and household recode information to GADM-derived areas;
- build area-time covariates;
- support matching and regression controls.

Validation needed:

1. identify the canonical DHS geocovariate file: `DHSGC.csv`, `DHSGC_v2.csv`, `DHSGC_long.csv`, or one of the GID-level long files;
2. confirm whether time-interpolated files are intended for empirical analysis;
3. verify DHS round/country/year coverage;
4. inspect missingness by GID and year;
5. check whether cluster coordinates are displaced and whether that affects area intersections;
6. confirm whether household recode-derived variables are included in current canonical outputs;
7. check file sizes and memory constraints before loading the largest long-format files.

Current status:

`needs canonical selection`

Important caveat:

The DHS long-format family is very large, roughly 2.7 GB. These files should not be casually loaded into memory without sampling, chunking, or column selection.

## Afrobarometer products

Main locations:

| Family | Location |
|---|---|
| Afrobarometer raw rounds | `2023_Duke/06_afrobarometer/data/` |
| Afrobarometer GID means | `2023_Duke/06_afrobarometer/data/` |
| Afrobarometer places/info | `2023_Duke/06_afrobarometer/info/` |

Observed families:

| Family | Files | Size | Example files |
|---|---:|---:|---|
| Afrobarometer raw rounds | 35 | 182.26 MB | `afb_full_r2.csv`, `afb_full_r3.csv`, `afb_full_r4.csv`, `afb_full_r5.csv`, `afb_full_r6.csv` |
| Afrobarometer GID means | 30 | 9.51 MB | `afb_full_r2_GID_africa_a1_means.csv`, `afb_full_r2_GID_africa_l1_means.csv`, `afb_full_r6_GID_africa_l3_means.csv` |
| Afrobarometer places/info | 9 | 17.13 MB | `afb_places.csv`, `afb_places_GID_africa_a1_0.001.csv`, `afb_survey_times.csv`, `outcomes_of_interest.csv` |

Interpretation:

This product family links Afrobarometer survey rounds to the standardized geographic framework.

It appears to include:

- raw or processed full survey rounds;
- GID-level means by geography variant and survey round;
- place-level mapping files;
- survey timing metadata;
- selected outcomes of interest.

 use:

- construct survey-based outcomes;
- aggregate attitudes, perceptions, or civic indicators by GID;
- merge Afrobarometer outcomes into empirical panels;
- inspect survey timing relative to treatments or events.

Validation needed:

1. separate raw full rounds from derived GID means;
2. verify which rounds are included;
3. inspect survey timing in `afb_survey_times.csv`;
4. inspect `outcomes_of_interest.csv`;
5. check the number of observations per GID and round;
6. distinguish between missing survey coverage and true missing outcome values;
7. choose a canonical geography variant for empirical merges.

Current status:

- raw rounds: `source / processed source`;
- GID means: `reusable after validation`;
- places/info: `intermediate / reusable after validation`.

## Empirical analysis datasets

Main locations:

| Family | Location |
|---|---|
| Empirical regression data | `2023_Duke/08_Empirical Study_ Investment & Violence/data/reg_data/` |
| Empirical matches | `2023_Duke/08_Empirical Study_ Investment & Violence/data/matches/` |

Observed families:

| Family | Files | Size | Example files |
|---|---:|---:|---|
| Empirical regression data | 108 | 800.67 MB | `africaa1T22000_DHSGC.csv`, `africaa1T22001_DHSGC.csv`, `africaa1T32000_DHSGC.csv`, `africaa1T32001_DHSGC.csv` |
| Empirical matches | 120 | 6.11 MB | `matches11_pairs_CN_JC123_0_africaa2T22000.csv`, `matches11_pairs_CN_JC123_0_africaa2T22001.csv`, `matches11_pairs_CN_JC123_0_africaa2T32000.csv` |

Interpretation:

These are downstream working datasets for the empirical investment/violence analysis.

The regression data filenames encode what appear to be:

- geography variant, such as `africaa1`, `africaa2`, `africaa3`, `africal1`, etc.;
- time or window parameter, such as `T2`, `T3`, `T4`;
- base year, such as `2000` or `2001`;
- covariate source, such as `DHSGC`.

The matching files encode treatment or project source variants, such as:

- `CN`,  Chinese investment/project exposure;
- `WB`,  World Bank exposure;
- `JC1`, `JC3`, `JC123`,  job-classification or project-classification variants;
- geography and time-window variants.

 use:

- inspect the old empirical analysis;
- reproduce matching diagnostics;
- identify treatment/control samples;
- merge matched pairs with outcome data;
- reconstruct regression tables.

Validation needed:

1. decode filename conventions fully;
2. identify the treatment definitions used in each file;
3. confirm the meaning of `T2`, `T3`, `T4`;
4. confirm whether base year `2000` versus `2001` is a sample or treatment-window choice;
5. verify how `CN`, `WB`, and `JC*` treatment variants were defined;
6. inspect unit of observation and keys;
7. connect each file to the notebook that produced it;
8. confirm which outputs, if any, were intended for final analysis.

Current status:

`empirical working data`

Important caveat:

These files should not be treated as neutral data products. They encode analysis decisions. They are useful, but they must be interpreted together with the empirical-study notebooks.

## Spatial_data product families

The `spatial_data/` folder contains project-level spatial products. These are useful but belong to a different layer than the generalized `2023_Duke` data products.

## Spatial ACLED products

Main location:

`spatial_data/ACLED/`

Observed:

| Files | Size |
|---:|---:|
| 118 | 758.62 MB |

Example files:

- `spatial_data/ACLED/vills_ACLED_join_all_COD_50km_about365days.csv`
- `spatial_data/ACLED/vills_ACLED_join_all_COD_50km_about365days_Tuungane.csv`
- `spatial_data/ACLED/vills_ACLED_join_all_COD_50km_about365days_drc_rural.csv`
- `spatial_data/ACLED/vills_ACLED_join_all_COD_50km_about365days_drc_urban.csv`

Interpretation:

These are ACLED violence exposure products around villages or project locations. They vary by:

- country;
- project/source dataset;
- buffer radius;
- timing window;
- event-level versus summary output.

Current status:

`legacy/product store`

Validation needed:

1. distinguish `join_all` from `join_sum`;
2. verify radius and time-window logic;
3. check whether event-level rows duplicate project locations;
4. confirm project-specific IDs;
5. select canonical products only after defining the target analysis.

## Spatial OSM products

Main location:

`spatial_data/OSM/`

Observed:

| Files | Size |
|---:|---:|
| 48 | 2.33 MB |

Example files:

- `spatial_data/OSM/OSM_DRC_STEP_CDD_amenity_amenity_2km.csv`
- `spatial_data/OSM/OSM_DRC_STEP_CDD_amenity_amenity_5km.csv`
- `spatial_data/OSM/OSM_DRC_STEP_CDD_highway_highway_2km.csv`
- `spatial_data/OSM/OSM_DRC_STEP_CDD_highway_highway_5km.csv`

Interpretation:

These are OpenStreetMap feature products around project or village locations.

Feature groups include:

- amenities;
- shops;
- highways;
- road surfaces.

Current status:

`legacy/product store`

Validation needed:

1. check whether files are cumulative feature tables or single-feature tables;
2. verify radius;
3. identify the stable project-location key;
4. check whether missing categories mean zero or missing extraction.

## Spatial climate and ruggedness products

Main location:

`spatial_data/climate/`

Observed:

| Files | Size |
|---:|---:|
| 9 | 0.20 MB |

Example files:

- `spatial_data/climate/imadas_climate.csv`
- `spatial_data/climate/points_R1_climate.csv`
- `spatial_data/climate/vills_DRC_STEP_CDD_climate.csv`
- `spatial_data/climate/vills_DRC_STEP_CDD_ruggedness.csv`

Interpretation:

These are climate and ruggedness features at the project/location level.

Observed climate variables include:

- `temp_jan`;
- `pr_jan`;
- `temp_jul`;
- `pr_jul`.

Current status:

`legacy/product store`

Validation needed:

1. separate climate from ruggedness products;
2. verify source raster/data product;
3. confirm whether values are point extracts or buffer averages;
4. check coordinate/projection assumptions.

## Distance-to-border products

Main location:

`spatial_data/distance_borders/`

Observed:

| Files | Size |
|---:|---:|
| 8 | 0.85 MB |

Example files:

- `spatial_data/distance_borders/Egypt_IE_individual_final_dist_border.csv`
- `spatial_data/distance_borders/imadas_dist_border.csv`
- `spatial_data/distance_borders/vills_DRC_STEP_CDD_dist_border.csv`
- `spatial_data/distance_borders/vills_DRC_rural_30kBL_filled_dist_border.csv`

Interpretation:

These files compute distance from a project/village/location to an international border.

Typical variable:

- `dist_border_km`

Current status:

`legacy/product store`

Validation needed:

1. confirm border source;
2. confirm distance metric and projection;
3. verify location unit;
4. check whether geometries are points or polygons.

## Distance-to-city products

Main location:

`spatial_data/distance_cities/`

Observed:

| Files | Size |
|---:|---:|
| 8 | 0.08 MB |

Example files:

- `spatial_data/distance_cities/Egypt_IE_individual_final_dist_city.csv`
- `spatial_data/distance_cities/imadas_dist_city.csv`
- `spatial_data/distance_cities/vills_DRC_STEP_CDD_dist_city.csv`
- `spatial_data/distance_cities/vills_DRC_rural_30kBL_filled_dist_city.csv`

Interpretation:

These files compute distance from project/village/location units to cities.

Typical variables:

- location identifier;
- `city`;
- `dist_km`.

Current status:

`legacy/product store`

Validation needed:

1. determine whether each location appears once or once per city;
2. identify the relevant nearest-city rule;
3. confirm city source list;
4. confirm distance metric and projection.

## Spatial village and project GeoJSONs

Main location:

`spatial_data/geojson/`

Observed:

| Files | Size |
|---:|---:|
| 42 | 27.73 MB |

Example files:

- `spatial_data/geojson/GHSL/population.geojson`
- `spatial_data/geojson/afrob-places/points_R1.geojson`
- `spatial_data/geojson/households-GPS/DRC-STEP-CDD_EA_HH.geojson`
- `spatial_data/geojson/households-GPS/DRC_rural.geojson`

Interpretation:

These files store project/location geometries and enriched spatial products.

Subfamilies include:

- village/project geometries;
- population-enriched village geometries;
- night-time-lights-enriched village geometries;
- household GPS geometries;
- Afrobarometer places;
- GHSL population geometry.

Current status:

`legacy/product store`

Validation needed:

1. classify files by unit: village, household, imada, Afrobarometer place, GHSL cell/geometry;
2. verify coordinate reference system;
3. identify original source dataset;
4. distinguish raw geometry from enriched geometry products;
5. select canonical location files for each project.

## Dataset families not yet fully located

Some expected components remain under-retrieved or not yet fully classified.

## Investment/project source and preprocessing layer

The empirical study clearly depends on investment or project exposure data, including Chinese development finance and World Bank geocoded projects.

Evidence exists in exports and empirical filenames, but the clean source-to-processed investment pipeline has not yet been inventoried as a first-class dataset family.

Known clues include references to:

- Chinese development finance;
- AidData;
- World Bank geocoded research release;
- investment by admin area;
- Chinese and World Bank coexisting locations;
- job-related investment classification;
- `CN` and `WB` treatment variants in matching files;
- `JC1`, `JC3`, and `JC123` classification variants.

Current status:

`needs retrieval`

Needed next step:

Locate investment source files, preprocessed investment files, and treatment-construction notebooks/scripts.

## Population products inside 2023_Duke

The `02_population/` folder exists and is important, but the current dataset-family retrieval did not produce a clean population inventory row comparable to GADM, violence, DHS, or Afrobarometer.

Current status:

`needs inventory`

Needed next step:

Inventory `2023_Duke/02_population/` outputs and determine whether population is stored as GeoJSON, CSV attributes, or merged into geography files.

## 2024 DHS reactivation material

The `2023_Duke/11_2024/` folder contains many DHS-like raw formats:

- `.csv`;
- `.dat`;
- `.dct`;
- `.do`;
- `.frq`;
- `.frw`;
- `.map`;
- `.sas`.

This  represents a later reactivation or exploration. It should not be merged into the 2023 dataset inventory until its purpose is clarified.

Current status:

`later exploration, not canonical`

## Validation priorities

The next validation pass should be done in this order.

## Priority 1: geography keys

Without stable geography definitions, downstream data cannot be interpreted.

Check:

- `GID` uniqueness;
- area variant definitions;
- country coverage;
- geometry validity;
- relationship between `a*` and `l*` variants.

## Priority 2: canonical DHS products

The DHS family is large and has multiple variants. Select or reconstruct a canonical product family before using it in empirical analysis.

Check:

- raw versus processed files;
- cluster-level versus area-level outputs;
- wide versus long format;
- interpolated versus observed values;
- missingness and coverage.

## Priority 3: investment/project treatment construction

The empirical analysis depends on project exposure. This is currently the biggest missing inventory component.

Check:

- raw source;
- geocoding;
- project classification;
- `CN` and `WB` definitions;
- `JC*` definitions;
- area-period aggregation;
- treatment timing.

## Priority 4: empirical regression and matching datasets

These files encode analysis choices, so they should be interpreted after the upstream data definitions are clear.

Check:

- unit of observation;
- treatment columns;
- covariate columns;
- outcome columns;
- time-window definitions;
- matching-pair structure;
- relationship between `reg_data/` and `matches/`.

## Priority 5: project-level spatial products

The `spatial_data/` products are valuable, but they belong to a different layer.

Check:

- project-specific unit;
- ID columns;
- spatial radius;
- time window;
- projection/distance method;
- duplicate products;
- whether a product is raw geometry, enriched geometry, or analysis-ready covariate table.

## Minimal canonical inventory table to build next

The next iteration of this page should convert the observed families into a table with these columns:

| Column | Meaning |
|---|---|
| `family_id` | Stable short identifier, such as `gadm_geojson`, `dhs_long`, `empirical_matches`. |
| `archive_path` | Folder or glob pattern. |
| `n_files` | Number of observed files. |
| `size_mb` | Total size. |
| `unit` | GID, GID-year, village, project location, household GPS, matched pair, etc. |
| `key_columns` | Candidate merge keys. |
| `time_columns` | Year, time period, intervention date, survey round, etc. |
| `producer_notebook` | Notebook or script believed to produce the family. |
| `consumer_notebook` | Notebook or script believed to use the family. |
| `status` | Canonical, inspectable, intermediate, empirical working data, legacy, or needs rebuild. |
| `validation_notes` | Known caveats. |

## Current bottom line

The recovered archive contains enough data products to support a serious recovery and onboarding manual.

The most reusable generalized data families are:

- GADM standardized areas;
- violence aggregates and point-GID mappings;
- DHS geocovariate outputs;
- Afrobarometer GID means and place mappings.

The most important empirical working datasets are:

- `08_Empirical Study_ Investment & Violence/data/reg_data/`;
- `08_Empirical Study_ Investment & Violence/data/matches/`.

The most important project-level reusable products are:

- `spatial_data/ACLED/`;
- `spatial_data/OSM/`;
- `spatial_data/climate/`;
- `spatial_data/distance_borders/`;
- `spatial_data/distance_cities/`;
- `spatial_data/geojson/`.

The biggest unresolved gap is the investment/project exposure layer, especially the source and preprocessing path behind the `CN`, `WB`, and `JC*` treatment variants.