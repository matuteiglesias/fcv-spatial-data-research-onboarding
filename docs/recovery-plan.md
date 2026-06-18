---
title: Recovery Plan
sidebar_position: 7
description: Practical plan for turning the recovered archive into a usable research platform.
---

# Recovery Plan

This page defines the recovery plan for the research archive.

The objective is to turn the recovered files into a usable research platform: clear enough for new collaborators, structured enough for renewed work, and safe enough that future analysis does not depend on guesswork.

The recovery plan is not a full rewrite of the archive. It is a staged process:

1. make the archive navigable;
2. identify the main data products;
3. validate the core datasets;
4. document the empirical workflow;
5. decide what to reuse, rerun, or rebuild.

## Recovery objective

The objective is to create a minimal reliable operating layer around the archive.

That means:

- researchers can understand what exists;
- new collaborators can onboard without opening dozens of notebooks blindly;
- datasets can be located and described;
- notebooks can be inspected in the right order;
- outputs can be classified as reusable, intermediate, legacy, or requiring validation;
- renewed analysis can begin from a documented foundation.

The immediate goal is documentation and validation, not heavy empirical production.

## Current archive structure

The recovery is organized around two central areas.

| Area | Role |
|---|---|
| `2023_Duke` | Main recovered 2023 working pipeline. |
| `spatial_data` | Reusable spatial product store from earlier project-level work. |

Supporting areas include:

| Area | Role |
|---|---|
| `Machine Learning and Spatial Analysis` | Legacy research and data sandbox. |
| `Conflict-Service Delivery-Civic Engagement-and-Development in FCV` | Older project container, literature, instruments, notes, writing, and scripts. |
| `PW_Violence` | Earlier public works and violence predecessor folder. |
| `sources` | Raw source archive. |
| `Nigeria` | Separate earlier country-level analysis. |
| `mi_meta` | Metadata and path-inventory experiment. |

The recovery plan keeps these areas separate. The main pipeline should not be mixed with legacy folders until the archive map and validation status are stable.

## Recovery principles

## 1. Document before rerunning

The first task is to understand what exists. Rerunning notebooks comes later.

Before rerunning any notebook, document:

- what it reads;
- what it writes;
- what stage it belongs to;
- whether it overwrites outputs;
- whether the output already exists;
- whether it is core, diagnostic, empirical, legacy, or scratch work.

## 2. Inspect exports before notebooks

The exported HTML and PDF reports are the fastest way to understand the work.

Start with:

- `2023_Duke/html/`
- `2023_Duke/pdfs/`
- `2023_Duke/06_afrobarometer/html/`
- exported reports inside empirical-analysis folders.

Use the notebooks only after the exported reports raise a specific question.

## 3. Separate current, reusable, legacy, and accidental material

The archive contains different generations of work.

Use these categories:

| Category | Meaning |
|---|---|
| Main pipeline | Current recovered 2023 working structure. |
| Reusable product | Processed data product that can be inspected and validated. |
| Empirical working data | Dataset tied to a specific analysis choice. |
| Legacy material | Older work that helps recover methods or context. |
| Source archive | Raw or semi-raw inputs used for rebuilding. |
| Ignore | Accidental or unrelated material. |

## 4. Validate keys before interpreting results

Many outputs are joined through spatial and temporal keys.

Before interpreting results, validate:

- geographic keys;
- time-period keys;
- treatment definitions;
- outcome definitions;
- covariate coverage;
- sample selection;
- missingness.

## 5. Keep matching and regression downstream

Matching and regression notebooks are important, but they are downstream outputs.

Before treating them as active analysis, document:

- treatment construction;
- unit of observation;
- covariates used for matching;
- outcome merge;
- time windows;
- balance diagnostics;
- sample sizes.

## 6. Preserve the original archive

Do not reorganize the original archive immediately.

Instead:

- document the current layout;
- build manual pages around it;
- create validation reports outside the raw archive;
- make any future cleaned version as a derived layer.

This protects the old work while making it usable.

## Recovery phases

## Phase 0 — Freeze and map the archive

Status: mostly complete.

Goal:

Create a stable map of the archive before changing anything.

Tasks:

- record the top-level folder tree;
- classify each folder;
- identify the main recovered pipeline;
- identify the reusable spatial product store;
- mark legacy and support folders;
- mark unrelated files;
- create the initial manual scaffold.

Evidence:

- `intro.md`
- `archive-map.md`
- top-level tree output;
- folder counts;
- initial Docusaurus structure.

Main outcome:

The archive now has a stable high-level map. New readers can distinguish the main pipeline, spatial products, legacy folders, and support material.

## Phase 1 — Build the orientation manual

Status: active.

Goal:

Create a small manual that makes the recovered work understandable without requiring a reader to inspect the whole archive manually.

Core pages:

| Page | Purpose |
|---|---|
| `intro.md` | Explains what the archive is and how to start. |
| `archive-map.md` | Maps the top-level folders and their roles. |
| `2023-duke-overview.md` | Explains the main recovered 2023 pipeline. |
| `spatial-data-products.md` | Explains the reusable spatial data products. |
| `dataset-inventory.md` | Lists the main dataset families and their locations. |
| `notebook-guide.md` | Explains the notebooks and recommended reading order. |
| `recovery-plan.md` | Defines the next recovery and validation steps. |

Tasks:

- finish the core manual pages;
- keep language readable for both technical and non-technical readers;
- describe the archive positively and clearly;
- avoid presenting unvalidated outputs as final research findings;
- link related pages together;
- use stable folder names and file paths.

Evidence:

- Docusaurus pages exist;
- the site builds;
- a new collaborator can follow the reading path;
- the manual explains the archive without requiring direct assistance.

Deliverable:

A short, useful research archive manual that can be shared with Eric and future collaborators.

## Phase 2 — Create dataset validation reports

Status: next major phase.

Goal:

Determine which datasets are ready to reuse, which need inspection, and which should be rebuilt.

Main dataset families to validate:

| Family | Main location | Validation priority |
|---|---|---:|
| GADM standardized geography | `2023_Duke/01_GADM_standarise/` | High |
| Population products | `2023_Duke/02_population/` | Medium-high |
| Violence and ACLED products | `2023_Duke/03_violence/` | High |
| DHS geocovariates and cluster files | `2023_Duke/04_DHS/` | Very high |
| Afrobarometer products | `2023_Duke/06_afrobarometer/` | High |
| Empirical regression datasets | `2023_Duke/08_Empirical Study_ Investment & Violence/data/reg_data/` | High |
| Empirical matching outputs | `2023_Duke/08_Empirical Study_ Investment & Violence/data/matches/` | High |
| Spatial ACLED products | `spatial_data/ACLED/` | Medium |
| Spatial OSM products | `spatial_data/OSM/` | Medium |
| Spatial climate products | `spatial_data/climate/` | Medium |
| Spatial distance products | `spatial_data/distance_borders/`, `spatial_data/distance_cities/` | Medium |
| Spatial GeoJSON products | `spatial_data/geojson/` | Medium |

For each dataset family, produce a small validation report with:

| Field | Meaning |
|---|---|
| `family_id` | Stable short name for the dataset family. |
| `paths` | Folder or file pattern. |
| `n_files` | Number of files. |
| `size_mb` | Total size. |
| `unit` | Area, area-year, point, village, household, project, matched pair, etc. |
| `key_columns` | Columns used for merging or identifying observations. |
| `time_columns` | Year, time period, survey round, intervention date, or other time variable. |
| `row_counts` | Row counts by file. |
| `missingness` | Basic missing-value summary. |
| `duplicates` | Duplicate key checks. |
| `producer` | Notebook or script that created the files. |
| `consumer` | Notebook or script that uses the files. |
| `status` | Reusable, inspectable, intermediate, empirical, legacy, or rebuild. |
| `notes` | Caveats and interpretation notes. |

Evidence:

- small CSV or JSON validation reports;
- updated `validation-status.md`;
- dataset inventory enriched with validation statuses.

Important rule:

Do not rerun full notebooks during this phase unless a small validation check requires it.

## Phase 3 — Recover the investment and treatment layer

Status: key bottleneck.

Goal:

Document how investment/project exposure was constructed.

This layer is central because the empirical analysis depends on treatment variables and project classifications.

Main questions:

1. What are the raw investment/project sources?
2. How were Chinese development finance and World Bank project data processed?
3. How were project locations assigned to administrative areas?
4. How were treatments defined?
5. What do `CN`, `WB`, `JC1`, `JC3`, and `JC123` mean?
6. How were time windows constructed?
7. Which files feed the empirical regression datasets?
8. Which files feed the matching outputs?

Known relevant material includes exports and notebooks related to:

- Chinese development finance;
- AidData;
- World Bank geocoded project data;
- investment by administrative area;
- Chinese and World Bank coexisting locations;
- job-related project classification;
- empirical treatment files;
- matching outputs.

Relevant exports to inspect:

- `2023_Duke/html/501 - China OSM exploration.html`
- `2023_Duke/html/502 - Exploration - AidData’s Global Chinese Development Finance Dataset.html`
- `2023_Duke/html/503 - Exploration - World Bank Geocoded Research Release..html`
- `2023_Duke/html/52 - Investment by admin area (GID).html`
- `2023_Duke/html/53 - Chinese and WB coexisting locations.html`
- `2023_Duke/html/54 - AidData vs Kaggle. Merge Analysis.html`
- `2023_Duke/html/57 - Explore for Job-Related Investments.html`
- `2023_Duke/html/58 - WB Projects info to Doc.html`

Outputs of this phase:

- treatment-definition table;
- source-to-treatment lineage;
- map of files feeding `reg_data/`;
- map of files feeding `matches/`;
- explanation of `CN`, `WB`, and `JC*` variants;
- decision on whether to reuse or rebuild treatment construction.

Evidence:

- `empirical-study.md` updated;
- `matching-vertical.md` updated;
- validation note for empirical datasets;
- one clear diagram or table linking sources to treatment variables.

### Supporting continuation notes

The recovery process now has three continuation memos that define how the project should resume: source-data updating, project annotation, and the empirical matching/regression design. Use them as the operating layer after this phase identifies the investment and treatment bottlenecks:

- [Source Data Inventory and Update Strategy](./continuation/source-data-inventory-update-strategy.md)
- [Annotation and Project Classification Protocol](./continuation/annotation-project-classification-protocol.md)
- [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md)

## Phase 4 — Decide reuse, rerun, or rebuild

Status: after validation.

Goal:

Make explicit decisions for each main component.

Decision categories:

| Decision | Meaning |
|---|---|
| Reuse | Existing output is clear and passes validation. |
| Rerun | Existing pipeline is clear and should be rerun to regenerate outputs. |
| Rebuild | Existing output is useful as reference, but a cleaner implementation is needed. |
| Archive only | Keep for history, but do not use for renewed analysis. |
| Defer | Not needed for the next research step. |

Decision table to produce:

| Component | Current location | Decision | Reason | Next action |
|---|---|---|---|---|
| GADM geography | `2023_Duke/01_GADM_standarise/` | TBD | Validate keys and geometry first. | Run geography validation. |
| Population | `2023_Duke/02_population/` | TBD | Inventory outputs first. | Identify canonical population product. |
| Violence | `2023_Duke/03_violence/` | TBD | Validate ACLED/UCDP processing and area aggregation. | Check event IDs and area-year files. |
| DHS | `2023_Duke/04_DHS/` | TBD | Multiple large variants exist. | Select canonical DHS product family. |
| Afrobarometer | `2023_Duke/06_afrobarometer/` | TBD | GID means and place files exist. | Validate survey timing and area coverage. |
| Investment exposure | `2023_Duke/08_Empirical Study_ Investment & Violence/` | TBD | Treatment construction must be documented. | Recover investment layer. |
| Matching | `2023_Duke/08_Empirical Study_ Investment & Violence/data/matches/` | TBD | Downstream of treatment and covariate choices. | Validate after treatment layer. |
| Regressions | `2023_Duke/08_Empirical Study_ Investment & Violence/` | TBD | Final interpretation depends on upstream validation. | Inspect after matching and outcome merge. |
| Spatial products | `spatial_data/` | TBD | Useful project-level products. | Validate by product family. |

Evidence:

- decision table completed;
- manual pages updated;
- core components assigned a status.

## Phase 5 — Build a renewed research platform

Status: later phase.

Goal:

Build a cleaner layer for future work.

Possible outputs:

- cleaned pipeline repository;
- data catalog;
- dataset cards;
- static documentation site;
- searchable export library;
- notebook export viewer;
- lightweight validation scripts;
- onboarding guide for research assistants;
- reproducible scripts for selected canonical products;
- research-group knowledge base;
- future empirical-analysis notebooks.

This phase should begin after the archive map, inventory, and validation statuses are stable.

## Near-term deliverable for collaborators

The near-term deliverable is a compact Docusaurus manual.

It should include:

1. `intro.md`
2. `archive-map.md`
3. `2023-duke-overview.md`
4. `spatial-data-products.md`
5. `dataset-inventory.md`
6. `notebook-guide.md`
7. `recovery-plan.md`

This deliverable shows that:

- the old work is recoverable;
- the archive has a coherent structure;
- the main pipeline can be explained;
- the reusable spatial products can be located;
- the notebooks can be navigated;
- the next validation tasks are clear;
- new collaborators can onboard without starting from zero.

## Immediate next actions

## Action 1 — Finish the first manual version

Complete the seven core pages and build the Docusaurus site.

Expected evidence:

- all pages exist;
- sidebar works;
- site builds without broken links;
- pages are readable by both technical and non-technical collaborators.

## Action 2 — Add validation status page

Create `validation-status.md`.

Initial sections:

- geography;
- population;
- violence;
- DHS;
- Afrobarometer;
- investment/project exposure;
- empirical regression data;
- matching outputs;
- spatial products.

Each section should include:

- current status;
- known outputs;
- validation checks required;
- next action.

## Action 3 — Create a dataset validation script

Create a small script that can inspect dataset families and produce a report.

Minimum checks:

- file exists;
- file size;
- row count;
- column count;
- column names;
- candidate key columns;
- duplicate keys;
- missingness summary;
- date/time coverage where relevant.

The script should not transform data. It should only inspect and report.

## Action 4 — Recover treatment definitions

Create a short treatment-definition note covering:

- Chinese project exposure;
- World Bank project exposure;
- job-related project categories;
- `CN`;
- `WB`;
- `JC1`;
- `JC3`;
- `JC123`;
- time-window variables;
- geography variants.

## Action 5 — Choose the first validated path

Pick one narrow path and validate it end-to-end.

A good first candidate:

`GADM geography → violence area-year aggregate → DHS covariates → empirical reg_data sample`

The goal is not to produce final results. The goal is to prove that one path through the archive can be explained and checked.

## Stop conditions

Use these limits to prevent the recovery from turning into uncontrolled rebuilding.

Do not start full reruns until:

- the relevant notebook has documented inputs and outputs;
- the current output files have been inspected;
- overwrite behavior is known;
- the data family has a validation report.

Do not interpret empirical coefficients until:

- treatment definitions are documented;
- outcomes are documented;
- covariates are documented;
- sample selection is documented;
- matching diagnostics are reviewed.

Do not reorganize original folders until:

- the archive map is stable;
- the dataset inventory is stable;
- the manual has a first complete version;
- a derived clean structure has been designed.

Do not treat legacy folders as current pipeline material until:

- the main 2023 version is understood;
- the legacy material fills a specific gap;
- the recovered information is documented.

## Current bottlenecks

## 1. Investment and treatment construction

This is the most important unresolved layer for empirical interpretation.

The main task is to document how project data became treatment variables.

## 2. DHS canonical selection

The DHS family contains several large variants. A canonical product family must be selected before renewed analysis.

## 3. Empirical matching assumptions

Matching outputs encode choices about geography, covariates, treatment categories, and time windows. They require validation before reuse.

## 4. Notebook reproducibility

The notebooks are informative and valuable. Their current executability still needs to be checked one by one.

## 5. Legacy folder distraction

Legacy folders contain useful material, but they can slow recovery if they are explored without a specific question.

## First completed recovery milestone

The first recovery milestone is complete when:

- the manual builds;
- the seven core pages exist;
- the archive map is clear;
- the dataset inventory identifies major families;
- the notebook guide gives a reading order;
- the recovery plan defines next validation steps.

At that point, the archive is no longer just a set of old folders. It becomes a usable research memory system.

## Second recovery milestone

The second milestone is complete when:

- core data families have validation reports;
- the investment/treatment layer is documented;
- one end-to-end path is validated;
- each major component has a reuse/rerun/rebuild decision.

At that point, renewed analysis can start from a documented foundation.

## Bottom line

The archive contains a large amount of prior work. The recovery plan turns that work into a structured, inspectable, and reusable research platform.

The right next move is to finish the manual, validate the main data families, recover the treatment construction layer, and then make explicit decisions about what to reuse, rerun, or rebuild.