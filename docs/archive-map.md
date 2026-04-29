---
title: Archive Map
sidebar_position: 2
description: Folder-level map of the recovered research archive and how each area should be used.
---

# Archive Map

This page maps the recovered archive at the folder level.

It explains what each main folder contains, how it should be used, and where a new reader should start.

The archive has one main recovered pipeline, one main spatial product store, and several older folders that provide context, source material, methods, and predecessor work.

## Main classification

| Folder | Classification | Priority | Description |
|---|---|---:|---|
| `2023_Duke` | Main recovered working pipeline | 1 | Main 2023 pipeline for geography, population, violence, DHS, Afrobarometer, investment/violence analysis, matching, regressions, and exports. |
| `spatial_data` | Finished and reusable spatial data products | 2 | Project-level spatial products, including ACLED exposure, OSM features, climate, distances, GeoJSONs, and map helper files. |
| `Machine Learning and Spatial Analysis` | Legacy research and data sandbox | 3 | Earlier exploratory work on spatial analysis, machine learning, causal forests, variable selection, DRC, Tunisia, Egypt, DHS, Afrobarometer, ACLED, and UCDP. |
| `Conflict-Service Delivery-Civic Engagement-and-Development in FCV` | Older project container and research archive | 4 | Background documents, literature, survey instruments, data files, meeting notes, writing, R scripts, and project material. |
| `PW_Violence` | Earlier public works and violence project folder | 4 | Earlier project-specific work on public works, violence, literature, data, code, instruments, notes, and background documents. |
| `sources` | Raw source archive | 4 | Raw or semi-raw source material, including ACLED, DHS, UCDP, Afrobarometer, and climate-related files. |
| `Nigeria` | Separate earlier country analysis | 5 | Nigeria-specific exploration, causal forest work, and variable-selection notebooks. |
| `mi_meta` | Metadata and path inventory experiment | 5 | Small folder used to reconstruct paths and metadata across the archive. |
| `DIME - Test 1` | Training and test material | 6 | DIME statistical software test material. Not part of the research pipeline. |
| `n_empleo_SIPA_BA.csv` | Unrelated accidental file | Ignore | Ignore for this archive. |

## How to read the archive

Use the folders in this order:

1. Start with `2023_Duke`.
2. Use `spatial_data` for finished project-level spatial products.
3. Use `Machine Learning and Spatial Analysis` when older method or source logic is needed.
4. Use `Conflict-Service Delivery-Civic Engagement-and-Development in FCV` and `PW_Violence` for background, literature, and predecessor project context.
5. Use `sources` when raw source material is needed.
6. Ignore unrelated or training-only files unless a specific reason arises.

## Main recovered pipeline: `2023_Duke`

`2023_Duke` is the main recovered working pipeline.

It contains the clearest version of the 2023 research infrastructure and should be treated as the main entry point for the technical recovery.

The folder includes:

| Subfolder or file | Role |
|---|---|
| `01_GADM_standarise` | Standardizes African administrative geography using GADM-derived area files. |
| `02_population` | Aggregates GHSL population data to geographic areas. |
| `03_violence` | Processes violence data, including ACLED and UCDP-related products, and joins events to areas. |
| `04_DHS` | Processes DHS geocovariates, clusters, household recode data, and area mappings. |
| `06_afrobarometer` | Processes Afrobarometer survey data, codebooks, places, survey timing, and area-level summaries. |
| `07_Regressions on Mock data` | Tests matching, balance checks, covariate checks, and regression logic on mock data. |
| `08_Empirical Study_ Investment & Violence` | Main empirical analysis layer for investment, violence, covariates, matching, outcomes, and regressions. |
| `11_2024` | Later DHS-related exploration and reactivation material. |
| `86 - Produce Matching Outputs.ipynb` | Compact notebook for producing matching outputs. |
| `commands.txt` | Small command note file. |
| `_debug` | Debugging, automated testing, and input/output metadata reconstruction. |
| `docs` | Generated dataset documentation and documentation-generation scripts. |
| `functions` | Small shared processing functions. |
| `html` | Exported HTML reports from notebooks. |
| `pdfs` | Exported PDF reports from notebooks. |
| `matching` | Earlier matching outputs, figures, and related files. |
| `tree.txt` | Stored tree snapshot of the folder. |

## Suggested reading path inside `2023_Duke`

For a new reader, use this sequence:

1. `html/` and `pdfs/` exports for a fast visual overview.
2. `01_GADM_standarise` to understand the geography backbone.
3. `03_violence` to understand conflict and violence products.
4. `04_DHS` to understand covariates and survey/household processing.
5. `06_afrobarometer` to understand survey outcome products.
6. `08_Empirical Study_ Investment & Violence` to understand empirical analysis.
7. `07_Regressions on Mock data` to understand the matching and regression test bench.
8. `_debug` and `docs` when reconstructing inputs, outputs, and documentation.

## Finished spatial products: `spatial_data`

`spatial_data` contains reusable spatial products from project-level work.

This folder is especially useful for maps, village-level features, project-location features, and spatial covariates.

| Subfolder or file | Role |
|---|---|
| `ACLED` | Violence exposure products around villages and project locations. |
| `OSM` | OpenStreetMap features around project locations, including amenities, shops, highways, and road surfaces. |
| `climate` | Climate and ruggedness products. |
| `distance_borders` | Distance from project or village locations to borders. |
| `distance_cities` | Distance from project or village locations to cities. |
| `geojson` | GeoJSON files for villages, households, Afrobarometer places, population, and map layers. |
| `misc_maps` | Map helper files and rendered map outputs. |
| `notebooks` | Notebooks used to generate spatial products. |
| `sources` | Small source tables used by spatial product generation. |
| `for_egypt_ELIIP_map.csv` | Small map-ready file for Egypt ELIIP. |

## How `spatial_data` should be used

Use `spatial_data` when the question is about:

- project-level maps;
- village-level spatial features;
- ACLED exposure around locations;
- OpenStreetMap features near locations;
- distance to cities;
- distance to borders;
- climate or ruggedness variables;
- reusable GeoJSON map layers.

Do not confuse `spatial_data` with the generalized 2023 pipeline. It is a product store from project-level spatial work.

## Legacy research sandbox: `Machine Learning and Spatial Analysis`

`Machine Learning and Spatial Analysis` is an older research and data sandbox.

It contains earlier experiments and methods that later informed the main recovered pipeline and spatial product store.

It includes:

- ACLED exploration;
- DRC project data;
- Tunisia project data;
- Egypt ELIIP project data;
- DHS exploration;
- Afrobarometer exploration;
- GADM and geography handling;
- OpenStreetMap feature extraction;
- GHSL population processing;
- night-time lights;
- climate variables;
- UCDP;
- V-Dem;
- variable selection;
- causal forests;
- lasso;
- Duflo-Chernozhukov style machine learning experiments.

Use this folder when:

- a method is missing from `2023_Duke`;
- an older source-specific transformation needs to be recovered;
- a project-level product in `spatial_data` needs to be explained;
- a previous ML or variable-selection experiment needs to be understood.

Do not use this as the first source of truth for the 2023 pipeline.

## Older project container: `Conflict-Service Delivery-Civic Engagement-and-Development in FCV`

This folder is an older project container and research archive.

It includes:

- background documents;
- literature;
- survey instruments;
- data files;
- do-files and R scripts;
- talks and presentations;
- writing;
- meeting notes;
- project-level documents.

This folder is useful for understanding the broader research agenda around conflict, service delivery, civic engagement, and development in fragile and conflict-affected settings.

Use it for:

- project history;
- research framing;
- literature;
- instruments;
- meeting notes;
- older scripts;
- background context.

## Earlier public works and violence project: `PW_Violence`

`PW_Violence` is an earlier project-specific predecessor.

It includes:

- background documents;
- instruments;
- data files;
- code;
- writing;
- presentations;
- literature;
- notes;
- notebooks;
- UCDP-related files.

This folder is useful for historical context and project-specific methods, especially around public works and violence.

Use it when recovering:

- earlier research design;
- public works project context;
- violence-related literature;
- older project-specific code;
- previous notes and presentations.

## Raw source archive: `sources`

`sources` contains raw or semi-raw source material.

It includes folders for:

- ACLED;
- Afrobarometer;
- DHS;
- UCDP;
- climate data.

Use this folder when rebuilding or validating processed outputs from original source files.

This is not the first place to start for orientation. It is a support layer for validation and rebuilding.

## Separate Nigeria analysis: `Nigeria`

`Nigeria` is a separate earlier country/project analysis.

It includes:

- `Causal Forest.ipynb`;
- `Exploration.ipynb`;
- `Variable Selection.ipynb`;
- a large Stata dataset;
- variable-selection outputs.

Use this folder as a separate methodological or country-specific precedent.

It is not part of the main 2023 recovered pipeline.

## Metadata experiment: `mi_meta`

`mi_meta` is a small folder used for metadata and path reconstruction.

It includes:

- path inventories;
- history files;
- a small notebook;
- output text files.

Use it when reconstructing file paths or understanding previous attempts to map the archive.

## Training and unrelated material

## `DIME - Test 1`

This folder contains DIME statistical software test materials:

- test instructions;
- baseline data;
- questionnaire.

It is not part of the research pipeline.

## `n_empleo_SIPA_BA.csv`

This file is unrelated to the archive and should be ignored.

## Navigation rules

Use these rules to avoid wasting time or misreading the archive.

## Rule 1: Start from the manual, not from raw files

Start with the manual pages before opening notebooks or data files.

Recommended first pages:

1. `intro.md`
2. `archive-map.md`
3. `2023-duke-overview.md`
4. `spatial-data-products.md`
5. `dataset-inventory.md`
6. `notebook-guide.md`
7. `recovery-plan.md`

## Rule 2: Open exports before notebooks

The exported reports in `2023_Duke/html/` and `2023_Duke/pdfs/` are the fastest way to understand prior work.

Use them before opening or rerunning notebooks.

## Rule 3: Treat `2023_Duke` as the main recovered pipeline

When the question is about the 2023 generalized analysis, start with `2023_Duke`.

## Rule 4: Treat `spatial_data` as the reusable spatial product store

When the question is about project-level maps, villages, ACLED buffers, OSM features, distances, or GeoJSONs, start with `spatial_data`.

## Rule 5: Use legacy folders only when needed

Legacy folders are valuable, but they can distract from the main recovery.

Use them to answer specific questions:

- Where did this method come from?
- How was this source handled before?
- Is there an older version of this product?
- Is there background literature or project context?
- Is there source-specific code missing from the main pipeline?

## Rule 6: Do not rerun notebooks before checking inputs and outputs

Before rerunning a notebook, identify:

- what it reads;
- what it writes;
- whether it overwrites existing files;
- whether it depends on old paths;
- whether it requires large files;
- whether it belongs to the main pipeline or to a scratch experiment.

## Rule 7: Keep empirical outputs downstream

Matching and regression outputs are downstream analysis products.

Before interpreting them, confirm:

- geography definitions;
- treatment definitions;
- covariates;
- outcomes;
- sample selection;
- time windows;
- matching rules.

## Current bottom line

The archive is organized around a clear central structure:

- `2023_Duke` is the main recovered working pipeline;
- `spatial_data` is the main reusable spatial product store;
- `Machine Learning and Spatial Analysis`, `PW_Violence`, and `Conflict-Service Delivery-Civic Engagement-and-Development in FCV` provide predecessor work and background context;
- `sources` supports validation and rebuilding;
- `Nigeria`, `mi_meta`, and `DIME - Test 1` are secondary or separate.

The next step is to use this map to complete the recovery pages, validate the main dataset families, and decide which components should be reused, rerun, or rebuilt.