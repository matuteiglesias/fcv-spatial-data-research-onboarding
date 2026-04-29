---
title: 2023 Duke Overview
sidebar_position: 1
description: Overview of the main recovered 2023 working pipeline and its internal stages.
---

# 2023 Duke Overview

`2023_Duke` is the main recovered working pipeline for the 2023 phase of the spatial data and empirical analysis work.

It should be treated as the primary entry point for understanding the generalized Africa-scale pipeline. Earlier folders contain important predecessor work and source material, but `2023_Duke` is the most organized recovered work package: it contains staged notebooks, data outputs, generated reports, dataset documentation, empirical-analysis files, and debug/reconstruction material.

The folder name may eventually be changed. For now, this manual keeps the historical name so that paths remain easy to match against the archive.

## Role in the archive

The broader archive contains several generations of work:

1. earlier project-specific spatial feature engineering around DRC, Tunisia, Egypt, Nigeria, public works, villages, and RCT-style datasets;
2. reusable spatial products and project-level feature stores;
3. broader research and literature material;
4. the later generalized `2023_Duke` pipeline.

`2023_Duke` belongs to the fourth category. It appears to consolidate earlier spatial-analysis work into a more systematic pipeline built around common African administrative units.

In practical terms:

| Folder | Role |
|---|---|
| `2023_Duke` | Main recovered 2023 generalized pipeline |
| `spatial_data` | Project-level reusable spatial feature/product store |
| `Machine Learning and Spatial Analysis` | Predecessor research and spatial-analysis sandbox |
| `sources` | Raw or near-raw source archive |
| `Conflict-Service Delivery-Civic Engagement-and-Development in FCV` | Research/admin/literature context |
| `PW_Violence`, `Nigeria` | Earlier project-specific analysis lines |

For onboarding, start with `2023_Duke`, then inspect `spatial_data`, and only then go back into legacy folders if a specific missing input, method, or historical explanation is needed.

## High-level pipeline

The folder is organized as a staged pipeline:

```text
2023_Duke/
  01_GADM_standarise/
  02_population/
  03_violence/
  04_DHS/
  06_afrobarometer/
  07_Regressions on Mock data/
  08_Empirical Study_ Investment & Violence/
  11_2024/
  86 - Produce Matching Outputs.ipynb
  _debug/
  docs/
  functions/
  html/
  matching/
  pdfs/
```

The conceptual flow is:

```text
standardized geography
→ population
→ violence
→ DHS geocovariates and survey-linked data
→ Afrobarometer survey data
→ investment and project exposure
→ analysis panels
→ matching / regression modules
→ dataset documentation and review exports
```

The most important idea is that many different data sources were linked through a shared spatial framework. The matching and regression work is downstream of that broader data-integration infrastructure.

## Folder summary

The current scan of `2023_Duke` gives the following stage-level summary:

| Subfolder                                   | Files |    Size | Latest activity | Main file types                                               | Interpretation                                                                                                            |
| ------------------------------------------- | ----: | ------: | --------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `.vscode`                                   |     1 |    0 MB | 2023-02-14      | `.json`                                                       | Editor metadata. Ignore for research purposes.                                                                            |
| `01_GADM_standarise`                        |    18 |  240 MB | 2023-05-04      | `.csv`, `.geojson`, `.ipynb`, `.jpg`                          | Standardized geography backbone.                                                                                          |
| `02_population`                             |     9 |  252 MB | 2023-06-11      | `.geojson`, `.jpg`, `.ipynb`                                  | Population layer based on GHSL raster aggregation.                                                                        |
| `03_violence`                               |    31 |  263 MB | 2023-10-03      | `.csv`, `.ipynb`, `.geojson`, `.jpg`                          | Violence preprocessing and aggregation.                                                                                   |
| `04_DHS`                                    |    55 |  3.1 GB | 2024-11-07      | `.csv`, `.ipynb`, `.json`, `.geojson`                         | DHS geocovariates, cluster mappings, survey-linked outputs.                                                               |
| `06_afrobarometer`                          |   100 |  296 MB | 2023-10-21      | `.csv`, `.png`, `.html`, `.ipynb`, `.txt`, `.pdf`, `.json`    | Afrobarometer rounds, codebook parsing, place mappings, GID aggregates, maps.                                             |
| `07_Regressions on Mock data`               |    32 |    5 MB | 2023-03-16      | `.csv`, `.ipynb`, `.py`                                       | Mock-data test bench for matching, diagnostics, and regression logic.                                                     |
| `08_Empirical Study_ Investment & Violence` |   356 |  870 MB | 2023-10-03      | `.csv`, `.ipynb`, `.png`, `.html`, `.jpg`, `.py`, `.zip`      | Main empirical-analysis area. Contains panels, matching outputs, outcome merges, diagnostics, and regression-ready files. |
| `11_2024`                                   |    88 |  875 MB | 2024-11-07      | `.csv`, `.dat`, `.dct`, `.do`, `.frq`, `.frw`, `.map`, `.sas` | Later 2024 DHS-related reactivation or exploration. Keep separate from the original 2023 pipeline until validated.        |
| `_debug`                                    |     5 | 0.22 MB | 2023-03-27      | `.ipynb`, `.py`, `.csv`, `.txt`                               | Dependency/path archaeology and notebook testing material.                                                                |
| `docs`                                      |    16 | 0.04 MB | 2023-09-29      | `.md`, `.ipynb`, `.py`                                        | Dataset documentation layer.                                                                                              |
| `functions`                                 |     1 |    0 MB | 2023-03-27      | `.py`                                                         | Shared helper functions.                                                                                                  |
| `html`                                      |    51 |   94 MB | 2023-03-31      | `.html`                                                       | Exported notebook reports for review.                                                                                     |
| `info`                                      |     0 |    0 MB | n/a             | n/a                                                           | Empty placeholder.                                                                                                        |
| `matching`                                  |    43 |  116 MB | 2023-02-02      | `.csv`, `.jpg`, `.png`, `.ods`, `.tpl`, `.svg`                | Earlier matching outputs and diagnostic assets.                                                                           |
| `pdfs`                                      |    52 |  8.5 MB | 2023-03-09      | `.pdf`                                                        | Exported notebook reports for review.                                                                                     |

## Main pipeline stages

### 1. Geography: `01_GADM_standarise`

This is the spatial backbone of the 2023 pipeline.

Key notebooks:

```text
2023_Duke/01_GADM_standarise/10 - GADM Standardize.ipynb
2023_Duke/01_GADM_standarise/11 - Map of Admin Areas.ipynb
```

Observed notebook sections include:

```text
Load GADM files for all countries
Compute Adaptive areas file, save reference file
Create file for african continent at adapted level
Example. Map of Admin Areas
Load areas file
Show map
```

This stage creates standardized African administrative areas. These areas are later used as the common geography for population, violence, DHS, Afrobarometer, investment/project data, and empirical panels.

Important outputs include GeoJSON files and metadata tables for alternative area definitions.

The repeated variants are:

```text
a1, a2, a3, l1, l2, l3
```

These variants need a clear definition before external sharing. They are central to how the pipeline defines geographic units.

### 2. Population: `02_population`

This stage links GHSL population raster data to the standardized geographic units.

Key notebook:

```text
2023_Duke/02_population/20 - GHSL Population.ipynb
```

Observed notebook sections include:

```text
GHSL Population Raster Data Aggregation
Prepare the input files
Population in areas in Africa
Compute population
Show Maps
Population Density
```

This layer creates population measures and population-density visualizations by geographic unit.

Population is important both as a substantive variable and as a normalization factor in downstream analysis.

### 3. Violence: `03_violence`

This stage processes violence event data and aggregates it to the standardized administrative areas.

Key notebooks:

```text
2023_Duke/03_violence/30 - Preprocess Violence Info.ipynb
2023_Duke/03_violence/31 - Preprocess Violence Info - ONLY ACLED.ipynb
2023_Duke/03_violence/32 - Treatments - Points in areas.ipynb
2023_Duke/03_violence/33 - Explore Violence Info.ipynb
```

Observed notebook sections include:

```text
Preprocessing of Violence Information
UCDP
Concatenate
Time evolution: events and victims
Spatial Join: Violence Points to Areas
Read in list of GADM area files
Function: intersect and save
Loop and compute all intersections and save
Example, aggregate by year and GID
Number of victims per country
Country - Years with the most victims in ACLED / UCDP data
```

This stage has several responsibilities:

1. preprocess violence event sources;
2. produce event-level spatial files;
3. intersect violence points with the GADM-derived areas;
4. aggregate violence by geographic unit and year;
5. generate exploratory maps and time-series diagnostics.

The violence layer is one of the strongest recovered components because it has both pipeline notebooks and concrete outputs.

### 4. DHS: `04_DHS`

This is one of the largest and most valuable parts of the recovered pipeline.

Key notebooks:

```text
2023_Duke/04_DHS/40 - DHS Geo Covariates Pre Processing.ipynb
2023_Duke/04_DHS/41 - Process DHS GC.ipynb
2023_Duke/04_DHS/42 - DHS Points Intersection Analysis.ipynb
2023_Duke/04_DHS/43 - DHS GC. Long format, GID. TS interpolate.ipynb
2023_Duke/04_DHS/44 - DHS Survey - Points to Admin Areas.ipynb
2023_Duke/04_DHS/45 - DHS HR. Categoricals to numeric.ipynb
```

Observed notebook sections include:

```text
Gather info of all GE shapefiles
Years and Countries included in each round
Gather info of all GC Geo Covariates files
Gather info of all HR files
Bring together the info from recodes
Load, concatenate and save All GPS data from DHS
DHS Geo Covariates: Process and save
Reduce the number of DHS Geo covariates
Mean value of Geo Covariates, by admin areas
Correlation of covariates
Value of covariates: Map + Histogram
DHS Points Intersection Analysis
Generate files for Clusters in ADM areas
Check: How many points per area
years in name variables into a variable named year
Store DHS GC in long format
DHS Survey - Points to Admin Areas
Copy each Household Recode (HR) file from DAT format to CSV format
Households in GIDs
Column names (codebook info) from DCF file
Use Wealth index to sort categories
Load and link to Geo Places
Take means by area
Save means by GID
```

This layer appears to cover several different DHS-related tasks:

1. inventory of DHS geographic files and recode files;
2. processing of DHS geocovariates;
3. DHS GPS cluster handling;
4. cluster-to-admin-area intersections;
5. household recode conversion and aggregation;
6. long-format DHS geocovariate outputs;
7. interpolation or time-series reshaping of DHS covariates.

The folder is large, about 3.1 GB in the current scan, and contains 42 CSV files and 8 notebooks.

There is also a later notebook:

```text
2023_Duke/04_DHS/49 - 2024 DHS Explore.ipynb
```

This appears to be a later reactivation or extension from November 2024, focused on household characteristics, living conditions, services access, agricultural assets, livelihoods, and wealth-related variables. It should be treated as a separate later exploration until validated against the original 2023 pipeline.

### 5. Afrobarometer: `06_afrobarometer`

This stage processes Afrobarometer survey rounds and links them to the common spatial framework.

Key notebooks:

```text
2023_Duke/06_afrobarometer/60 - Afrob. Exploration.ipynb
2023_Duke/06_afrobarometer/60 - exploration.ipynb
2023_Duke/06_afrobarometer/61 - Afrobarometer PDF cbks. to CSV.ipynb
2023_Duke/06_afrobarometer/62 - Intersect GADM areas.ipynb
2023_Duke/06_afrobarometer/63 - Cross Section Map.ipynb
```

Observed notebook sections include:

```text
Afrobarometer
Data Pre-processing
Diagnostic Summary
Distribution of values for each of the variables. Across rounds.
Restricted to outcomes of interest
Show full list
Summary Stats
Afrobarometer PDF to Excel converter
Functions for Cleaning the Text files
Export from Pdf to Txt
Process Txts
Parse into json
Afrobarometer Data Processing
Load data
Save Afrobarometer survey times
Save Afrobarometer places
ADM Areas
Loop: compute intersection, save file
Show Maps
Cross Section Map
```

This stage has several roles:

1. load and inspect raw Afrobarometer rounds;
2. preprocess survey variables;
3. identify outcomes of interest;
4. parse codebooks from PDF/text;
5. save survey timing metadata;
6. geolocate or map Afrobarometer places;
7. intersect places with GADM-derived areas;
8. create GID-level aggregate outputs and cross-sectional maps.

This is a relatively mature folder, with 100 files, 45 CSVs, 36 PNGs, 8 HTML files, and 5 notebooks.

### 6. Mock regression and matching test bench: `07_Regressions on Mock data`

This folder appears to be a controlled testing environment for matching, balance diagnostics, covariate checks, and regression logic before applying those methods to the empirical datasets.

Key notebooks:

```text
2023_Duke/07_Regressions on Mock data/70 - Mock data for tests.ipynb
2023_Duke/07_Regressions on Mock data/72 - Sample Selection Checks.ipynb
2023_Duke/07_Regressions on Mock data/73 - Covariate Checks.ipynb
2023_Duke/07_Regressions on Mock data/74 - KNN Matching.ipynb
2023_Duke/07_Regressions on Mock data/74 - KNN Matching Diagnosis.ipynb
2023_Duke/07_Regressions on Mock data/75 - Regression Analysis.ipynb
2023_Duke/07_Regressions on Mock data/76 - Regression - Designed coeffs to ATE.ipynb
```

Observed notebook sections include:

```text
Create Mock Data
Balance Checks
Calculate SMD for each covariate between treatment and control groups
SMD values should ideally be less than 0.1 for a balanced sample
Overlap Checks
Subgroup Analyses
T tests for each outcome
Covariate Checks - Confounding
Correlation
Variance Inflation Factor
Visualizations
Hypothesis testing
KNN Matching
Matching Diagnostics
Regression Analysis
Fit OLS Models
Explanation for the relationship between the TE coefficient and the ATE
Run Experiments and save
Plot results
```

This is not the main empirical result folder. It is better interpreted as a methods test bench.

Its role is useful for onboarding because it shows how the empirical machinery was being tested in a controlled setting before use on real data.

### 7. Empirical study: `08_Empirical Study_ Investment & Violence`

This is the main empirical-analysis folder.

Key notebooks:

```text
2023_Duke/08_Empirical Study_ Investment & Violence/09 - OLS regressions.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/80 - Preprocess Data.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/81 - Outcome Variables.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/82 - Sample Selection Checks.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/83 - Covariate Checks.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/84 - KNN Matching.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/85 - KNN Matching Diagnosis.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/86 - Outcomes Merge.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/87 - Regression Analysis 2.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/88 - Regression Analysis.ipynb
2023_Duke/08_Empirical Study_ Investment & Violence/89 - Explore Cross Section - (all time periods).ipynb
```

Observed notebook sections include:

```text
Load data
World Bank Investment Treatment
Violence level
Geographical Covariates
Regression Data
Regression results
Aggregation of data
Aggregate Afrobarometer
Aggregate ACLED
Outcome Variables
Sample Selection
Initial imbalance
Percentage of treated areas, by treatment
Covariate Checks - Confounding
Number of areas by treatment condition, and available covariates info
Matching
Example of the matches dataset
Compute Trios
Matching Diagnostics
Sample Sizes
Mean difference in covariates between treated and control units
Graphical check of covariate balance
Mean absolute difference within match
Map for lagged time periods for outcomes
Check number of units with information
After Matching
Merge to final datasets (matches + outcomes)
Impact of Infrastructure Investment
Empirical Setting
Regression Analysis
Fit OLS Models
```

This folder is where the generalized data infrastructure is turned into analysis datasets.

It includes:

1. aggregation of source data into area-period datasets;
2. treatment construction from investment/project exposure;
3. sample selection and covariate checks;
4. KNN matching;
5. matching diagnostics;
6. outcome merges;
7. regression-ready datasets;
8. OLS and regression-analysis notebooks;
9. cross-sectional exploration.

This is the folder most directly connected to Eric’s interest in matching and regression work.

However, it should be treated carefully. The matching work is a downstream empirical vertical. It depends on the quality and coverage of the investment/project data, violence data, DHS covariates, Afrobarometer outcomes, and geographic definitions.

The current recovery view is:

```text
08_Empirical Study_ Investment & Violence = main empirical analysis module
matching = one empirical strategy inside that module
```

### Important caveat: investment preprocessing

The empirical study clearly depends on geocoded investment/project data, including World Bank and Chinese-funded projects. The available exports include references to:

```text
China OSM exploration
AidData’s Global Chinese Development Finance Dataset
World Bank Geocoded Research Release
Investment by admin area (GID)
Chinese and WB coexisting locations
AidData vs Kaggle
Explore for Job-Related Investments
WB Projects info to Doc
```

These appear in the HTML and PDF review exports.

However, the expected source/preprocessing folder for investments has not yet been recovered as a clean `05_investments` folder inside `2023_Duke`.

That means the downstream empirical datasets may exist, but the raw-to-processed investment pipeline still needs to be located, reconstructed, or explicitly marked as missing.

### 8. Consolidated matching output notebook

There is also a root-level notebook:

```text
2023_Duke/86 - Produce Matching Outputs.ipynb
```

Observed sections include:

```text
Produce Matching Outputs
Functions
Matching
Compute Trios
```

This appears to be a compact or consolidated workflow for producing matching outputs. It should be treated as a useful conceptual entry point into the matching vertical, but not yet as a guaranteed executable `main` file.

Reasons to be cautious:

1. it  assumes a particular working directory;
2. it may depend on downstream files inside the empirical-study folder;
3. it appears focused on matching outputs rather than the entire pipeline;
4. it may not cover all geographic variants or all data-source construction steps.

## Support and documentation layers

### `_debug`

The `_debug` folder contains:

```text
2023_Duke/_debug/00 - automated testing.ipynb
2023_Duke/_debug/01 - in - out meta.ipynb
2023_Duke/_debug/functions.py
2023_Duke/_debug/io_information.csv
2023_Duke/_debug/io_information.txt
```

This is valuable for reconstruction because it appears to track notebook inputs and outputs.

The earlier dependency scan identified many notebook-file relations. That makes `_debug` one of the most useful places for pipeline archaeology.

This folder should not be treated as public-facing documentation, but it is important for recovery.

### `docs`

The `docs` folder contains the dataset documentation layer.

Important files include:

```text
2023_Duke/docs/doc_template.md
2023_Duke/docs/final_dataset_documentation.md
2023_Duke/docs/generate_dataset_docs.ipynb
2023_Duke/docs/generate_dataset_docs.py
2023_Duke/docs/dataset_md/
```

This layer is important because it shows that the pipeline was already moving toward reusable documented data products.

The documentation layer includes dataset-family descriptions and generated markdown files for datasets such as:

```text
DHSGClong_GID_africa_a1_0_documentation.md
DHSGClong_GID_africa_a2_0_documentation.md
DHSGClong_GID_africa_a3_0_documentation.md
DHSGClong_GID_africa_l1_0_documentation.md
DHSGClong_GID_africa_l2_0_documentation.md
DHSGClong_GID_africa_l3_0_documentation.md
violence_africa_a1_0_documentation.md
violence_africa_a2_0_documentation.md
violence_africa_a3_0_documentation.md
violence_africa_l1_0_documentation.md
violence_africa_l2_0_documentation.md
violence_africa_l3_0_documentation.md
```

This is not complete documentation for the whole project, but it is a strong starting point.

### `html` and `pdfs`

The `html` and `pdfs` folders contain exported notebook reports.

They are useful because a collaborator can inspect many notebooks without rerunning code.

Examples include:

```text
2023_Duke/html/10 - GADM Standardize.html
2023_Duke/html/20 - GHSL Population.html
2023_Duke/html/30 - Preprocess Violence Info.html
2023_Duke/html/40 - DHS Geo Covariates Pre Processing.html
2023_Duke/html/41 - Process DHS GC.html
2023_Duke/html/42 - Intersect DHS GPS points to ADM areas.html
2023_Duke/html/60 - exploration.html
2023_Duke/html/62 - Intersect GADM areas.html
2023_Duke/html/80 - Preprocess Data.html
2023_Duke/html/84 - KNN Matching.html
2023_Duke/html/85 - KNN Matching Diagnosis.html
```

There are also investment-related exports:

```text
2023_Duke/html/501 - China OSM exploration.html
2023_Duke/html/502 - Exploration - AidData’s Global Chinese Development Finance Dataset.html
2023_Duke/html/503 - Exploration - World Bank Geocoded Research Release..html
2023_Duke/html/52 - Investment by admin area (GID).html
2023_Duke/html/53 - Chinese and WB coexisting locations.html
2023_Duke/html/54 - AidData vs Kaggle. Merge Analysis.html
2023_Duke/html/57 - Explore for Job-Related Investments.html
2023_Duke/html/58 - WB Projects info to Doc.html
```

These exports are especially valuable for inspecting the missing or displaced investment layer.

### `matching`

The `matching` folder appears to contain earlier matching outputs, diagnostic figures, and related files.

It includes CSVs, figures, an ODS spreadsheet, an SVG pipeline scheme, and a notebook template file.

This folder  predates the more organized empirical-study work, but it may contain useful historical outputs or diagnostics.

It should be treated as an earlier matching artifact area, not necessarily as the current canonical matching output folder.

### `11_2024`

This folder is a later reactivation or exploration,  related to DHS household recode files and 2024 work.

It contains many raw-like DHS file formats:

```text
.csv
.dat
.dct
.do
.frq
.frw
.map
.sas
```

It should not be merged into the original 2023 pipeline without validation.

For now, treat it as:

```text
later DHS exploration / possible reactivation material
```

## Most important recovered assets

The strongest recovered assets in `2023_Duke` are:

1. **standardized Africa administrative geography outputs**;
2. **population aggregation workflow**;
3. **violence event preprocessing and GID/year aggregates**;
4. **DHS geocovariates and long-format area-time covariate outputs**;
5. **Afrobarometer preprocessing, codebook parsing, place-GID mapping, and GID aggregates**;
6. **empirical-analysis panels and matching/regression outputs**;
7. **HTML/PDF notebook exports for inspection**;
8. **dataset documentation layer**;
9. **debug/dependency material for recovery**.

## What is not yet fully resolved

Several parts still need validation or reconstruction.

### 1. Geographic variant definitions

The variants `a1`, `a2`, `a3`, `l1`, `l2`, and `l3` appear throughout the pipeline. They need a clear explanation.

The  interpretation is that they represent alternative administrative-area definitions or levels, but the precise meaning should be confirmed from the GADM standardization notebook and output tables.

### 2. Canonical DHS version

The DHS layer contains multiple outputs and versions. We need to decide which are canonical for reuse:

```text
DHSGC.csv
DHSGC_v2.csv
DHSGClong_GID_*.csv
DHS cluster-GID mappings
household-GID mappings
later 2024 exploration files
```

### 3. Investment/project preprocessing

The empirical study depends on investment/project data, but the clean source/preprocessing folder is not currently visible as a standard `05_investments` stage.

The review exports suggest that there was substantial work on Chinese development finance, World Bank geocoded data, AidData, investment-by-GID aggregation, project/job classification, and merging alternative investment sources.

This layer is a priority for reconstruction if renewed empirical analysis requires full reproducibility from raw project data.

### 4. Matching output status

The matching tools and outputs exist, but need validation:

```text
treatment definitions
covariate sets
sample sizes
balance diagnostics
geographic levels
outcome merge logic
regression-ready files
```

The matching vertical should be preserved and documented, but not treated as the whole project.

### 5. Executability

The notebooks are valuable, but they may rely on historical relative paths, local state, or missing folders. The first recovery goal should be inventory and documentation, not immediate rerunning of the full pipeline.

## Recommended use for new collaborators

A new collaborator should use `2023_Duke` in this order:

1. read this overview;
2. inspect `docs/` to understand dataset families;
3. inspect HTML exports before running notebooks;
4. review the core pipeline notebooks in stage order;
5. use `08_Empirical Study_ Investment & Violence` only after understanding the data layers;
6. treat matching as an empirical module built on top of the data infrastructure;
7. avoid modifying or rerunning notebooks until paths, inputs, and expected outputs are documented.

## Recommended next documentation steps

The next pages should deepen this overview:

| Page                   | Purpose                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `geography.md`         | Explain GADM standardization and area variants.                                         |
| `population.md`        | Explain GHSL population aggregation.                                                    |
| `violence.md`          | Explain violence preprocessing and area-year aggregation.                               |
| `dhs.md`               | Explain DHS geocovariates, clusters, household mappings, and long-format outputs.       |
| `afrobarometer.md`     | Explain Afrobarometer rounds, codebooks, places, GID mapping, and outcomes.             |
| `empirical-study.md`   | Explain panels, investment exposure, matching, outcomes, and regression-ready datasets. |
| `matching-vertical.md` | Explain matching as an optional empirical strategy, including diagnostics and caveats.  |
| `notebook-guide.md`    | Provide a tiered guide to notebooks and exports.                                        |
| `dataset-inventory.md` | Convert expected and observed dataset families into a validation table.                 |

## Current recovery status

Current status:

```text
recoverable and highly structured, but not yet fully validated or executable
```

Recommended immediate stance:

```text
Use 2023_Duke as the main recovered 2023 pipeline.
Use docs and exports for orientation.
Use data outputs for inspection only after validation.
Do not promise full reproducibility until the investment layer, geographic variants, and canonical DHS outputs are clarified.
```

```
