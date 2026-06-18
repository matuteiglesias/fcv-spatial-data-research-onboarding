---
title: Notebook Guide
sidebar_position: 3
description: Guide to the recovered notebooks, exported reports, and their role in the research archive.
---

# Notebook Guide

This page explains how to navigate the recovered notebooks in the archive.

The notebooks are not all equal. Some are core pipeline notebooks, some are diagnostics, some are empirical-analysis notebooks, some are older experimental work, and some are small scratch notebooks. The goal of this guide is to help a new collaborator avoid opening 100 notebooks blindly.

The practical rule is:

`read exported HTML/PDF first, inspect notebooks second, rerun only after validating inputs and paths`

## Main notebook groups

The recovered notebooks fall into six broad groups.

| Group | Main location | Role |
|---|---|---|
| Core 2023 pipeline | `2023_Duke/01_*` to `2023_Duke/06_*` | Builds geography, population, violence, DHS, and Afrobarometer products. |
| Empirical 2023 analysis | `2023_Duke/08_Empirical Study_ Investment & Violence/` | Builds analysis data, matching outputs, outcome merges, and regressions. |
| Matching / regression method tests | `2023_Duke/07_Regressions on Mock data/` | Tests balance checks, matching, and regression logic on mock data. |
| Spatial product generation | `spatial_data/notebooks/` and related folders | Generates project-level ACLED, OSM, distance, ruggedness, and map products. |
| Legacy spatial and ML work | `Machine Learning and Spatial Analysis/`, `PW_Violence/`, `Nigeria/` | Earlier experiments, project-specific pipelines, variable selection, causal forests, and spatial methods. |
| Recovery/debug/documentation | `2023_Duke/_debug/`, `2023_Duke/docs/`, `mi_meta/` | Helps reconstruct dependencies, inputs, outputs, and documentation. |

## Recommended reading order

For onboarding, do not read notebooks alphabetically. Use this sequence instead.

| Order | Read | Why |
|---:|---|---|
| 1 | `2023_Duke/html/` exports | Fastest way to inspect previous work without rerunning anything. |
| 2 | `2023_Duke/01_GADM_standarise/` | Geography is the base layer for almost everything. |
| 3 | `2023_Duke/03_violence/` | Violence products are core outcomes/exposures. |
| 4 | `2023_Duke/04_DHS/` | DHS covariates are large and central to matching/regression controls. |
| 5 | `2023_Duke/06_afrobarometer/` | Survey outcomes and places are important, but downstream of geography. |
| 6 | `2023_Duke/08_Empirical Study_ Investment & Violence/80 - Preprocess Data.ipynb` | Main empirical data construction. |
| 7 | `2023_Duke/08_Empirical Study_ Investment & Violence/84-86` | Matching and outcome merge. |
| 8 | `2023_Duke/08_Empirical Study_ Investment & Violence/87-88` | Regression analysis. |
| 9 | `spatial_data/notebooks/` | Earlier project-level spatial products. |
| 10 | legacy notebooks | Only after a specific missing method, source, or historical question arises. |

## Core 2023 pipeline notebooks

These notebooks are the main recovered pipeline. They are the best starting point for understanding the generalized 2023 work.

## Geography

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/01_GADM_standarise/10 - GADM Standardize.ipynb` | 23 | 3 | Loads GADM files for African countries, computes adaptive levels, saves standardized area files. |
| `2023_Duke/01_GADM_standarise/11 - Map of Admin Areas.ipynb` | 6 | 3 | Demonstrates and maps the standardized administrative areas. |

Observed headers:

- `Load GADM files for all countries`
- `Compute Adaptive areas file, save reference file`
- `Create file for african continent at adapted level`
- `Example. Map of Admin Areas`
- `Load areas file`
- `Show map`

Interpretation:

These notebooks define the spatial backbone of the 2023 pipeline. Before using any downstream output, the GADM variants need to be understood.

Important downstream concepts:

- `africa_a1_0.001`
- `africa_a2_0.001`
- `africa_a3_0.001`
- `africa_l1_0.001`
- `africa_l2_0.001`
- `africa_l3_0.001`
- `GID`

Validation priority:

`high`

## Population

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/02_population/20 - GHSL Population.ipynb` | 14 | 6 | Aggregates GHSL population raster data to African area units and creates maps. |

Observed headers:

- `GHSL Population Raster Data Aggregation`
- `Prepare the input files`
- `Population in areas in Africa`
- `Compute population`
- `Show Maps`

Interpretation:

This notebook links raster population data to the area units. Population can be used as a covariate, denominator, exposure adjustment, or normalization factor.

Validation priority:

`medium-high`

Open question:

The dataset inventory has not yet isolated a clean population CSV family comparable to GADM, violence, DHS, or Afrobarometer. The outputs may be GeoJSON-based or merged into other files.

## Violence

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/03_violence/30 - Preprocess Violence Info.ipynb` | 16 | 6 | Preprocesses violence data, including UCDP and combined event information. |
| `2023_Duke/03_violence/31 - Preprocess Violence Info - ONLY ACLED.ipynb` | 8 | 2 | ACLED-only preprocessing variant. |
| `2023_Duke/03_violence/32 - Treatments - Points in areas.ipynb` | 10 | 6 | Spatially joins violence points to GADM-derived areas. |
| `2023_Duke/03_violence/33 - Explore Violence Info.ipynb` | 13 | 10 | Explores events, victims, maps, country-year patterns, and large conflicts. |

Observed headers:

- `Preprocessing of Violence Information`
- `UCDP`
- `Concatenate`
- `Time evolution: events and victims`
- `Spatial Join: Violence Points to Areas`
- `Read in list of GADM area files`
- `Function: intersect and save`
- `Loop and compute all intersections and save`
- `Number of victims per country`
- `Country - Years with the most victims in ACLED / UCDP data`

Interpretation:

This group creates the violence source layer and the violence-by-area products used downstream.

Main outputs  include:

- event GeoJSONs;
- point-to-GID mapping files;
- GID-year violence aggregates.

Validation priority:

`high`

## DHS

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/04_DHS/40 - DHS Geo Covariates Pre Processing.ipynb` | 33 | 7 | Inventories DHS shapefiles, geocovariates, recodes, GPS data, and metadata. |
| `2023_Duke/04_DHS/41 - Process DHS GC.ipynb` | 17 | 8 | Processes DHS geocovariates and computes area-level means. |
| `2023_Duke/04_DHS/42 - DHS Points Intersection Analysis.ipynb` | 23 | 11 | Intersects DHS GPS points/clusters with administrative areas. |
| `2023_Duke/04_DHS/43 - DHS GC. Long format, GID. TS interpolate.ipynb` | 20 | 3 | Converts DHS geocovariates into long format and time-series/interpolated structures. |
| `2023_Duke/04_DHS/44 - DHS Survey - Points to Admin Areas.ipynb` | 10 | 4 | Converts Household Recode files and maps households/clusters into GIDs. |
| `2023_Duke/04_DHS/45 - DHS HR. Categoricals to numeric.ipynb` | 25 | 10 | Converts categorical household variables into numeric summaries, often sorted using wealth information. |
| `2023_Duke/04_DHS/49 - 2024 DHS Explore.ipynb` | 28 | 10 | Later 2024 exploration of demographic, household, services, wealth, and livelihood variables. |

Observed headers:

- `Gather info of all GE shapefiles`
- `Years and Countries included in each round`
- `Gather info of all GC Geo Covariates files`
- `Gather info of all HR files`
- `Bring together the info from recodes`
- `DHS Geo Covariates: Process and save`
- `Reduce the number of DHS Geo covariates`
- `Mean value of Geo Covariates, by admin areas`
- `DHS Points Intersection Analysis`
- `Generate files for Clusters in ADM areas`
- `DHS Survey - Points to Admin Areas`
- `Copy each Household Recode (HR) file from DAT format to CSV format`
- `Column names (codebook info) from DCF file`
- `Use Wealth index to sort categories`

Interpretation:

This is one of the most important and most complex notebook groups. It constructs the covariate backbone for downstream analysis.

It includes both geocovariate and survey/household processing. The largest dataset family in the inventory is the DHS long-format family.

Validation priority:

`very high`

Special caution:

Some DHS files are extremely large. Inspect schemas and row counts before loading full files.

The 2024 notebook should be treated separately from the 2023 pipeline until validated.

## Afrobarometer

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/06_afrobarometer/60 - Afrob. Exploration.ipynb` | 16 | 4 | Explores Afrobarometer data, preprocessing, diagnostics, and value distributions. |
| `2023_Duke/06_afrobarometer/60 - exploration.ipynb` | 20 | 7 | Earlier or alternate Afrobarometer exploration, including outcomes of interest. |
| `2023_Duke/06_afrobarometer/61 - Afrobarometer PDF cbks. to CSV.ipynb` | 13 | 9 | Parses Afrobarometer PDF codebooks into CSV/structured text. |
| `2023_Duke/06_afrobarometer/62 - Intersect GADM areas.ipynb` | 11 | 7 | Maps Afrobarometer places to GADM-derived areas and saves survey timing/place info. |
| `2023_Duke/06_afrobarometer/63 - Cross Section Map.ipynb` | 3 | 2 | Produces cross-sectional map outputs. |

Observed headers:

- `Afrobarometer`
- `Data Pre-processing`
- `Diagnostic Summary`
- `Distribution of values for each of the variables. Across rounds`
- `Restricted to outcomes of interest`
- `Afrobarometer PDF to Excel converter`
- `Functions for Cleaning the Text files`
- `Export from Pdf to Txt`
- `Process Txts`
- `Parse into json`
- `Afrobarometer Data Processing`
- `Save Afrobarometer survey times`
- `Save Afrobarometer places`
- `ADM Areas`
- `Loop: compute intersection, save file`
- `Show Maps`

Interpretation:

This notebook group makes Afrobarometer usable as a spatially linked survey outcome source.

Validation priority:

`high`

## Empirical 2023 analysis notebooks

These notebooks build and analyze the investment/violence empirical datasets.

They are downstream of geography, violence, DHS, Afrobarometer, and the still-partly-unresolved investment/project exposure layer. Before rerunning them, read the continuation notes on [source updates](../continuation/source-data-inventory-update-strategy.md), [project annotation](../continuation/annotation-project-classification-protocol.md), and the [empirical design/regression pipeline](../continuation/experimental-design-regression-pipeline.md).

## Empirical preprocessing and outcomes

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/08_Empirical Study_ Investment & Violence/09 - OLS regressions.ipynb` | 26 | 6 | Early OLS/regression workflow using World Bank investment treatment, violence, and covariates. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/80 - Preprocess Data.ipynb` | 30 | 15 | Main empirical preprocessing notebook: aggregates Afrobarometer, ACLED, and other data into analysis structures. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/81 - Outcome Variables.ipynb` | 0 | 1 | Conceptual or stub notebook for outcome variables. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/89 - Explore Cross Section - (all time periods).ipynb` | 7 | 4 | Cross-sectional exploration across time periods. |

Observed headers:

- `Load data`
- `World Bank Investment Treatment`
- `Violence level`
- `Geographical Covariates`
- `Regression Data`
- `Regression results`
- `Aggregation of data`
- `Aggregate Afrobarometer`
- `Aggregate ACLED`
- `Outcome Variables`

Interpretation:

These notebooks are central for understanding how the raw and processed sources became empirical-analysis data.

The most important notebook here is likely:

`2023_Duke/08_Empirical Study_ Investment & Violence/80 - Preprocess Data.ipynb`

Validation priority:

`very high`

## Sample selection, covariates, and matching

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/08_Empirical Study_ Investment & Violence/82 - Sample Selection Checks.ipynb` | 5 | 4 | Checks sample selection, initial imbalance, and treatment share. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/83 - Covariate Checks.ipynb` | 8 | 2 | Checks confounding and covariate availability by treatment. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/84 - KNN Matching.ipynb` | 15 | 5 | Produces KNN matches and trios. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/85 - KNN Matching Diagnosis.ipynb` | 11 | 7 | Diagnoses matching quality, sample sizes, balance, and examples. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/86 - Outcomes Merge.ipynb` | 9 | 4 | Merges matched units with outcome variables. |
| `2023_Duke/86 - Produce Matching Outputs.ipynb` | 6 | 4 | Root-level matching output generator,  a compact production-oriented matching workflow. |

Observed headers:

- `Sample Selection`
- `Initial imbalance`
- `Percentage of treated areas, by treatment`
- `Covariate Checks - Confounding`
- `Number of areas by treatment condition, and available covariates info`
- `Matching`
- `Example of the matches dataset`
- `Compute Trios`
- `Matching Diagnostics`
- `Sample Sizes`
- `Mean difference in covariates between treated and control units`
- `Graphical check of covariate balance`
- `Mean absolute difference within match`
- `Map for lagged time periods for outcomes`
- `After Matching`
- `Merge to final datasets (matches + outcomes)`
- `Produce Matching Outputs`

Interpretation:

This is the matching vertical. It is important, but it should not be mistaken for the whole project. It is one empirical strategy built on top of the data pipeline.

The matching work appears substantial, but it needs careful validation because matching quality depends heavily on geography, covariate coverage, treatment definition, and outcome availability.

Validation priority:

`very high, but only after upstream data definitions are clarified`

## Regression analysis

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/08_Empirical Study_ Investment & Violence/87 - Regression Analysis 2.ipynb` | 24 | 3 | Main impact/regression notebook framing infrastructure investment and empirical setting. |
| `2023_Duke/08_Empirical Study_ Investment & Violence/88 - Regression Analysis.ipynb` | 21 | 2 | OLS regression analysis. |

Observed headers:

- `Impact of Infrastructure Investment`
- `In this notebook`
- `Empirical Setting`
- `Regression Analysis`
- `Fit OLS Models`

Interpretation:

These are downstream of all prior construction steps. They should not be the first files opened.

Before interpreting coefficients, validate:

1. treatment definitions;
2. matching construction;
3. outcome merge;
4. sample selection;
5. covariate coverage;
6. unit of observation;
7. time-window meaning.

## Mock-data and methods notebooks

These notebooks are in:

`2023_Duke/07_Regressions on Mock data/`

They are not final empirical analysis notebooks. They are a controlled testing environment for causal/matching/regression machinery.

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `70 - Mock data for tests.ipynb` | 2 | 1 | Creates mock datasets. |
| `72 - Sample Selection Checks.ipynb` | 7 | 9 | Tests balance checks, SMD, overlap checks, subgroup analyses, and t-tests. |
| `73 - Covariate Checks.ipynb` | 6 | 5 | Tests confounding checks, correlation, VIF, visualization, and hypothesis testing. |
| `74 - KNN Matching.ipynb` | 5 | 4 | Implements KNN matching on mock data. |
| `74 - KNN Matching Diagnosis.ipynb` | 5 | 4 | Diagnoses matching on mock data. |
| `75 - Regression Analysis.ipynb` | 19 | 2 | Fits OLS models on test data. |
| `76 - Regression - Designed coeffs to ATE.ipynb` | 18 | 7 | Studies relationship between designed coefficients and ATE, with experiments and plots. |

Use this group when you need to understand the intended statistical machinery without immediately dealing with noisy real data.

Do not use this group as evidence of empirical results.

## Spatial_data notebooks

These notebooks generate or inspect project-level spatial products in `spatial_data`.

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `spatial_data/notebooks/ACLED 01 - Lookup and Save files.ipynb` | 52 | 18 | Main ACLED product-generation notebook for lookup, joining, parameters, and project-level outputs. |
| `spatial_data/notebooks/ACLED 03 - Lookup and Save STEP CDD - COVID.ipynb` | 21 | 7 | STEP CDD ACLED exposure generation with intervention and COVID date logic. |
| `spatial_data/notebooks/Compute distance to cities and borders.ipynb` | 10 | 6 | Computes distance to cities and borders using helper datasets. |
| `spatial_data/notebooks/Elevation and Ruggedness.ipynb` | 17 | 3 | Computes elevation and ruggedness features. |
| `spatial_data/geojson/villages/geojson.ipynb` | 18 | 1 | Global map and geometry-related work. |
| `spatial_data/misc_maps/01 - Maps.ipynb` | 6 | 0 | Map-specific work,  Egypt/Tunisia. |

Observed headers:

- `Load ACLED`
- `Basic exploration of ACLED`
- `Eg. Restricted to Tunisia`
- `ACLED join to imadas`
- `Functions`
- `Parameters setup`
- `STEP CDD`
- `Intervention date`
- `Distance to Cities and Distance to Borders computer`
- `Dataset of neighbor country pairs`
- `Elevation`
- `Ruggedness`
- `Global Map`

Interpretation:

These notebooks are important for the `spatial_data` product store, especially if a collaborator wants to understand or regenerate earlier project-level spatial features.

They are not the main generalized 2023 pipeline.

Validation priority:

`medium, unless reusing spatial_data products directly`

## Legacy notebooks: Machine Learning and Spatial Analysis

This folder is a predecessor lab. It includes spatial analysis, project-specific feature engineering, causal forests, lasso, variable selection, Duflo-Chernozhukov style generic ML explorations, DHS/GADM work, Afrobarometer work, and many country/project-specific notebooks.

This folder should be used selectively. It is not the first place to start.

## Legacy spatial-analysis notebooks

Important groups include:

| Area | Example notebooks | Role |
|---|---|---|
| DHS | `DHS Maps.ipynb`, `DHS geo vars.ipynb`, `DHS standard data exploration.ipynb`, `Files Downloader.ipynb` | Early DHS exploration and extraction. |
| Project GPS / villages | `GPS 01 - Households GeoJson.ipynb`, `GPS 02 - Village GeoJSON.ipynb`, `GPS Mapping.ipynb` | Earlier project-level geometry creation. |
| Violence | `Violence - Processing.ipynb`, `Violence - data explorer.ipynb`, `ACLED - by country and year.ipynb`, `UCDP.ipynb` | Earlier conflict/violence processing. |
| OSM | `OSM 01 - Amenities.ipynb`, `OSM 03 - Lookup.ipynb` | Earlier OSM feature extraction. |
| Population and night-time lights | `GHS Pop Density...`, `DMSP-OLS Nighttime Lights...` | Raster processing and village-level features. |
| Climate/ruggedness | `Compute climate variables`, `Elevation and Ruggedness` | Environmental features. |
| DRC/Tunisia/Egypt project files | Tunisia household/admin notebooks, DRC STEP CDD, Egypt ELIIP notebooks | Project-specific preprocessing. |

Relevant notebooks and observed roles:

| Notebook | Role |
|---|---|
| `Notebooks/01 - Tunisia Households in Admin Areas.ipynb` | GPS points to GADM, Tunisia data restricted to Jendouba, households by delegation, imadas GeoJSON. |
| `Notebooks/02 - Jendouba Infrastructure in OSM.ipynb` | OSM amenities and highways for Jendouba. |
| `Notebooks/STEP CDD Exploration.ipynb` | STEP CDD exploratory work. |
| `Notebooks/THIMOR2018 'list sampling' Exploration.ipynb` | DRC rural list-sampling exploration, IDs, georef, treatments, demographics, column groups. |
| `Notebooks/Violence - Processing.ipynb` | Defines indicators and links ACLED/violence around DRC rural and village data. |
| `Notebooks/Violence - data explorer.ipynb` | Explores STEP CDD, Tuungane, DRC urban, and DRC rural violence-related data. |
| `Notebooks-SA/GPS 02 - Village GeoJSON.ipynb` | Aggregates village-level geometries for STEP CDD, Egypt ELIIP, Rural PWP, 30K sampling, Urban PWP, Tuungane. |
| `Notebooks-SA/Gathering of Spatial Variables - 01 - DRC Rural.ipynb` | Joins ACLED, NTL, and OSM features. |
| `Notebooks-SA/Gathering of Spatial Variables - 03 - Egypt ELIIP.ipynb` | Joins ACLED, NTL, and OSM features for Egypt. |
| `Notebooks-SA/Dongil 02 - Aggregation at GADM.ipynb` | Aggregates DHS GEO, DHS standard data, VDEM, Afrobarometer, and custom GADM-related data. |

Interpretation:

This folder contains many of the methods and source-specific ideas that later appear in cleaner form in `spatial_data` and `2023_Duke`.

Use it for archaeology, not as the first canonical source.

## Legacy ML and causal-inference notebooks

Important groups include:

| Group | Example notebooks | Role |
|---|---|---|
| Causal forests | `Causal Forests - 01 - Davis Heller.ipynb`, `Causal Forests - 02 - DH. w. Nulls.ipynb` | Causal forest and heterogeneity exploration. |
| Lasso / variable selection | `D. Lasso...`, `Variable Selection 02`, `Variable Selection 04 Full routine`, `Variable Selection 05 Full routine` | Variable selection and predictive feature engineering. |
| Generic ML / Duflo-Chernozhukov | `DRC ML 06`, `DRC ML 07`, `DRC ML 08` | Generic ML / heterogeneous treatment-effect experiments and diagnostics. |
| Outcomes exploration | `DRC ML 04 - Outcomes.ipynb`, `Tunisia Outcomes Exploration.ipynb` | Project-specific outcomes and transformations. |

These notebooks are useful for methodological history. They should not be treated as current outputs unless explicitly revived.

## Legacy Afrobarometer notebooks

The legacy `Machine Learning and Spatial Analysis/afrobarometer-data/` folder contains earlier Afrobarometer exploration and spatial linkage work.

Examples:

| Notebook | Role |
|---|---|
| `00 - Exploration 0.ipynb` | Explores Round 7 merged data and dates of interviews. |
| `01 - Exploration 1.ipynb` | Explores Round 1 data, geographic points, identifiers, and structure. |
| `02 - Merge ACLED events.ipynb` | Merges ACLED events with custom point data. |
| `03 - Afrobarometer responses by Violence Condition.ipynb` | Compares Afrobarometer responses by violence condition. |
| `05 - Create Place Matches.ipynb` | Creates place matches by country. |
| `06 - GADM handling.ipynb` | Saves custom size levels and fixed levels. |
| `07 - Check - Points in GADM areas.ipynb` | Checks point-in-GADM area logic. |
| `Afrobarometer maps.ipynb` | Map generation. |

Interpretation:

This is  a predecessor to the more structured `2023_Duke/06_afrobarometer/` folder.

Use this if something is missing from the 2023 Afrobarometer pipeline, especially place-matching or GADM-handling logic.

## PW_Violence notebooks

The `PW_Violence` notebooks are sparse in the current inventory but may contain early predecessor logic.

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `PW_Violence/Notebooks/Exploration of UCDP.ipynb` | 15 | 0 | Early UCDP exploration. |
| `PW_Violence/Notebooks/Untitled.ipynb` | 7 | 1 | ACLED-Afrobarometer exploration. |
| `PW_Violence/03. Data files/+archiveSep2022/ACLED/take ACLED samples.ipynb` | 5 | 0 | Early ACLED sampling. |
| `PW_Violence/03. Data files/+archiveSep2022/06-Tunisia-CWLP/Explorations.ipynb` | 10 | 0 | Tunisia archived exploration. |
| `PW_Violence/03. Data files/+archiveSep2022/07-Egypt-ELIIP/Untitled.ipynb` | 4 | 0 | Egypt archived exploration. |

Interpretation:

This is historical context and possibly source-specific salvage material, not the main path.

## Nigeria notebooks

The `Nigeria` folder appears to be a separate earlier country/project analysis.

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `Nigeria/Causal Forest.ipynb` | 17 | 1 | Causal forest / ITT work. |
| `Nigeria/Exploration.ipynb` | 14 | 0 | General data exploration. |
| `Nigeria/Variable Selection.ipynb` | 16 | 6 | Variable selection, transformation, category ordering, R2 contributions. |

Interpretation:

This is probably not part of the 2023 generalized pipeline. Use it as methodological or project-specific precedent only.

## Recovery and documentation notebooks

These notebooks help reconstruct the archive.

| Notebook | Code cells | Markdown cells | Role |
|---|---:|---:|---|
| `2023_Duke/_debug/00 - automated testing.ipynb` | 11 | 2 | Tools to edit notebooks and automated testing. |
| `2023_Duke/_debug/01 - in - out meta.ipynb` | 8 | 0 | Input/output metadata reconstruction. |
| `2023_Duke/docs/generate_dataset_docs.ipynb` | 9 | 0 | Generates dataset documentation. |
| `mi_meta/meta.ipynb` | 11 | 0 | Meta/path inventory experiment. |

Important companion files:

- `2023_Duke/_debug/io_information.csv`
- `2023_Duke/_debug/io_information.txt`
- `2023_Duke/docs/generate_dataset_docs.py`
- `2023_Duke/docs/final_dataset_documentation.md`
- `2023_Duke/docs/dataset_md/`

Interpretation:

These files are very useful for recovery, but not for stakeholder-facing research results.

## Exported HTML and PDF reports

The archive includes exported reports in:

- `2023_Duke/html/`
- `2023_Duke/pdfs/`
- `2023_Duke/06_afrobarometer/html/`
- selected project folders.

These exports are important because they make the old work inspectable without executing notebooks.

Recommended use:

1. Open HTML/PDF exports first to understand outputs.
2. Use notebooks only when you need code, path, or exact transformation logic.
3. Rerun only after path and dependency checks.

Important exported reports include:

| Export | Why inspect it |
|---|---|
| `10 - GADM Standardize.html` | Geography pipeline output. |
| `20 - GHSL Population.html` | Population aggregation. |
| `30 - Preprocess Violence Info.html` | Violence preprocessing. |
| `32 - Treatments - Points in areas.html` | Event-to-area spatial joins. |
| `33 - Explore Violence Info.html` | Violence diagnostics and maps. |
| `40 - DHS Geo Covariates Pre Processing.html` | DHS inventory and preprocessing. |
| `41 - Process DHS GC.html` | DHS geocovariate processing. |
| `42 - Intersect DHS GPS points to ADM areas.html` | DHS cluster/point intersections. |
| `45 - DHS HR. Categoricals to numeric.html` | Household recode categorical handling. |
| `60 - exploration.html` | Afrobarometer exploration. |
| `62 - Intersect GADM areas.html` | Afrobarometer spatial intersection. |
| `80 - Preprocess Data.html` | Empirical data preprocessing. |
| `84 - KNN Matching.html` | Matching workflow. |
| `85 - KNN Matching Diagnosis.html` | Matching diagnostics. |
| `86 - Outcomes Merge.html` | Matched data and outcomes merge. |
| `87/88 Regression Analysis` exports | Regression analysis. |
| investment-related exports | Inspect missing investment/project pipeline clues. |

Investment-related exports to inspect:

- `501 - China OSM exploration.html`
- `502 - Exploration - AidData’s Global Chinese Development Finance Dataset.html`
- `503 - Exploration - World Bank Geocoded Research Release..html`
- `52 - Investment by admin area (GID).html`
- `53 - Chinese and WB coexisting locations.html`
- `54 - AidData vs Kaggle. Merge Analysis.html`
- `57 - Explore for Job-Related Investments.html`
- `58 - WB Projects info to Doc.html`

These may be the best current clues for reconstructing the missing investment/project exposure layer.

## Which notebooks are  canonical?

This is a working classification, not a final authority table.

## Tier 1: core orientation

Start here.

| Notebook | Status |
|---|---|
| `01_GADM_standarise/10 - GADM Standardize.ipynb` | core |
| `02_population/20 - GHSL Population.ipynb` | core |
| `03_violence/30 - Preprocess Violence Info.ipynb` | core |
| `03_violence/32 - Treatments - Points in areas.ipynb` | core |
| `04_DHS/40 - DHS Geo Covariates Pre Processing.ipynb` | core |
| `04_DHS/41 - Process DHS GC.ipynb` | core |
| `04_DHS/42 - DHS Points Intersection Analysis.ipynb` | core |
| `04_DHS/43 - DHS GC. Long format, GID. TS interpolate.ipynb` | core |
| `06_afrobarometer/62 - Intersect GADM areas.ipynb` | core |
| `08_Empirical Study_ Investment & Violence/80 - Preprocess Data.ipynb` | core empirical |

## Tier 2: diagnostics and validation

Use after reading the core pipeline.

| Notebook | Status |
|---|---|
| `03_violence/33 - Explore Violence Info.ipynb` | diagnostics |
| `04_DHS/45 - DHS HR. Categoricals to numeric.ipynb` | DHS feature engineering / diagnostics |
| `06_afrobarometer/60 - Afrob. Exploration.ipynb` | diagnostics |
| `08_Empirical Study_ Investment & Violence/82 - Sample Selection Checks.ipynb` | empirical validation |
| `08_Empirical Study_ Investment & Violence/83 - Covariate Checks.ipynb` | empirical validation |
| `08_Empirical Study_ Investment & Violence/85 - KNN Matching Diagnosis.ipynb` | matching validation |
| `08_Empirical Study_ Investment & Violence/86 - Outcomes Merge.ipynb` | empirical validation |

## Tier 3: empirical method implementation

Use only after upstream data definitions are understood.

| Notebook | Status |
|---|---|
| `08_Empirical Study_ Investment & Violence/84 - KNN Matching.ipynb` | empirical method |
| `86 - Produce Matching Outputs.ipynb` | matching output generator |
| `08_Empirical Study_ Investment & Violence/87 - Regression Analysis 2.ipynb` | empirical method |
| `08_Empirical Study_ Investment & Violence/88 - Regression Analysis.ipynb` | empirical method |
| `08_Empirical Study_ Investment & Violence/09 - OLS regressions.ipynb` | older/early empirical method |

## Tier 4: tests and prototypes

Useful for understanding ideas, not final outputs.

| Notebook group | Status |
|---|---|
| `07_Regressions on Mock data/` | method test bench |
| `Machine Learning and Spatial Analysis/Notebooks-ML/` | older ML/causal/variable-selection experiments |
| `Nigeria/` notebooks | separate earlier project analysis |
| `PW_Violence/` notebooks | earlier predecessor work |

## Tier 5: recovery tools

Useful for rebuilding documentation and dependency maps.

| Notebook | Status |
|---|---|
| `_debug/00 - automated testing.ipynb` | recovery/debug |
| `_debug/01 - in - out meta.ipynb` | recovery/debug |
| `docs/generate_dataset_docs.ipynb` | documentation generator |
| `mi_meta/meta.ipynb` | path/meta inventory |

## Practical onboarding path

For a new research assistant or collaborator, the first task should not be to run notebooks. It should be to understand what exists.

Suggested sequence:

1. Read `archive-map.md`.
2. Read `2023-duke-overview.md`.
3. Read `dataset-inventory.md`.
4. Inspect these exports:
   - `10 - GADM Standardize.html`
   - `30 - Preprocess Violence Info.html`
   - `40 - DHS Geo Covariates Pre Processing.html`
   - `41 - Process DHS GC.html`
   - `42 - Intersect DHS GPS points to ADM areas.html`
   - `62 - Intersect GADM areas.html`
   - `80 - Preprocess Data.html`
   - `85 - KNN Matching Diagnosis.html`
5. Open the corresponding notebooks only if the export raises a specific question.
6. Document every notebook opened with:
   - purpose;
   - inputs;
   - outputs;
   - whether it ran historically;
   - whether it should be rerun now;
   - current canonical status.

## Rerun policy

Before rerunning any notebook, check:

1. working directory assumptions;
2. relative path assumptions;
3. required source files;
4. expected outputs;
5. whether outputs already exist;
6. whether the notebook overwrites files;
7. memory requirements;
8. package/environment requirements;
9. whether the notebook was a scratch/test notebook or a pipeline notebook.

Recommended statuses:

| Status | Meaning |
|---|---|
| `inspect only` | Read notebook/export, do not rerun. |
| `safe to sample` | Safe to run schema/sample cells, not full pipeline. |
| `candidate to rerun` | Can be rerun after path and environment validation. |
| `do not rerun yet` | Depends on missing sources, large files, or unclear overwrite behavior. |
| `legacy only` | Keep for historical/methodological context. |

## Current bottom line

The notebooks show that the work was not just a set of ad hoc analyses. It had a layered structure:

1. spatial standardization;
2. source-specific preprocessing;
3. point-to-area linking;
4. area-level and area-time products;
5. survey and covariate integration;
6. empirical panel construction;
7. matching and regression workflows;
8. documentation and exports.

The strongest recovered notebook groups are:

- `2023_Duke/01_GADM_standarise/`
- `2023_Duke/03_violence/`
- `2023_Duke/04_DHS/`
- `2023_Duke/06_afrobarometer/`
- `2023_Duke/08_Empirical Study_ Investment & Violence/`
- `spatial_data/notebooks/`

The biggest current caution is that the notebooks are recoverable and informative, but not yet proven reproducible in the current environment. Treat them as a knowledge map first and as executable pipeline code only after validation.