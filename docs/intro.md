---
title: Research Archive Recovery Manual
sidebar_position: 1
description: Orientation page for the recovered research archive, its contents, and how to use this manual.
---

# Research Archive Recovery Manual

This manual documents and organizes a recovered research archive built between 2021 and 2023, with later additions in 2024. The archive contains a substantial body of data work around conflict, service delivery, civic engagement, public works, spatial data, survey data, and development projects.

The purpose of this manual is to make that work usable again.

The archive includes data products, notebooks, exported reports, maps, documentation, and older project folders. Much of the work was produced as part of a broader research effort involving development projects, violence, survey outcomes, and spatial analysis across African countries and specific project sites.

This manual turns the archive into a navigable research asset.

## What this manual is for

This manual helps researchers, collaborators, and assistants answer five practical questions:

1. What exists in the archive?
2. Where should a new person start?
3. Which folders contain the main recovered work?
4. Which files are reusable data products?
5. What needs to be checked before renewed analysis begins?

The manual is designed for both technical and non-technical readers. It explains the archive at several levels:

- a general overview of the work;
- a map of the main folders;
- a guide to the notebooks;
- an inventory of available datasets;
- a recovery plan for bringing the work back into active use.

## Main idea

The archive should be understood as a recovered research system.

It contains:

- a main 2023 data pipeline;
- reusable spatial data products;
- older research folders that provide context and predecessor work;
- notebooks and exported reports that explain what was done;
- empirical-analysis outputs related to investment, violence, matching, and regression analysis.

The immediate goal is not to rerun every file. The immediate goal is to make the archive clear, searchable, and trustworthy enough that future work can build on it without duplicating effort.

## Main parts of the archive

The archive has two central areas.

## 1. Main recovered pipeline: `2023_Duke`

The folder `2023_Duke` contains the main recovered working pipeline.

It includes work on:

- standardized administrative geography for Africa;
- population aggregation;
- violence and conflict data;
- DHS geocovariates and household/survey data;
- Afrobarometer survey data;
- empirical analysis of investment and violence;
- matching and regression workflows;
- exported HTML and PDF reports;
- generated dataset documentation.

This is the main starting point for understanding the 2023 research work.

## 2. Finished spatial data products: `spatial_data`

The folder `spatial_data` contains reusable spatial products from earlier project-level work.

It includes:

- ACLED violence exposure around villages and project locations;
- OpenStreetMap features such as amenities, shops, highways, and road surfaces;
- climate and ruggedness variables;
- distance to cities;
- distance to borders;
- village and household GeoJSON files;
- map helper files.

This folder is especially useful for project-level spatial analysis and map production.

## Other archive areas

The archive also contains older folders that support reconstruction and historical understanding.

These include:

- `Machine Learning and Spatial Analysis`, an earlier research and data sandbox;
- `Conflict-Service Delivery-Civic Engagement-and-Development in FCV`, an older project container with literature, instruments, meeting notes, writing, and scripts;
- `PW_Violence`, an earlier public works and violence project folder;
- `Nigeria`, a separate earlier country-level analysis;
- `sources`, a raw source archive;
- `mi_meta`, a small metadata and path-inventory experiment.

These folders are useful, but they are not the first place to start. They support recovery when a source, method, or historical detail is missing from the main pipeline.

## What the archive contains

The recovered work includes several types of material.

## Data products

The archive contains processed datasets and intermediate data products, including:

- standardized geographic areas;
- GADM-derived administrative units;
- population products;
- violence event files and area-year aggregates;
- ACLED and UCDP-related outputs;
- DHS cluster and geocovariate products;
- Afrobarometer survey-place mappings;
- Afrobarometer area-level summaries;
- empirical regression datasets;
- matching outputs;
- project-level spatial feature tables.

## Notebooks

The archive contains many Jupyter notebooks. These notebooks document and implement different stages of the work:

- data loading;
- cleaning;
- spatial joins;
- aggregation;
- diagnostics;
- map generation;
- matching;
- regressions;
- documentation generation.

The notebooks should be read through the notebook guide before being rerun.

## Exported reports

Many notebooks were exported to HTML or PDF. These exported reports are valuable because they allow a reader to inspect the work without executing code.

A good first step is to read the exported reports before opening or rerunning notebooks.

## Documentation

The archive includes generated dataset documentation and recovery notes. These help explain the structure of the outputs and the intended role of different datasets.

## How to use this manual

For most readers, the best path is:

1. Start with this page.
2. Read `archive-map.md` to understand the folder structure.
3. Read `2023-duke-overview.md` to understand the main recovered pipeline.
4. Read `spatial-data-products.md` to understand the reusable spatial products.
5. Read `dataset-inventory.md` to see the main dataset families.
6. Read `notebook-guide.md` before opening or rerunning notebooks.
7. Read `recovery-plan.md` to understand the next steps.

## Entry points by reader

| Reader | Recommended starting pages |
|---|---|
| Principal investigator or general stakeholder | `intro.md`, `archive-map.md`, `recovery-plan.md` |
| Research assistant | `archive-map.md`, `dataset-inventory.md`, `notebook-guide.md` |
| Data analyst | `2023-duke-overview.md`, `dataset-inventory.md`, `notebook-guide.md` |
| Spatial analyst | `spatial-data-products.md`, `geography.md`, `violence.md` |
| Empirical researcher | `empirical-study.md`, `matching-vertical.md`, `validation-status.md` |
| Project manager | `intro.md`, `archive-map.md`, `recovery-plan.md` |

## What to open first

The first files to inspect are not the raw notebooks. Start with the manual pages and exported reports.

Recommended first-pass inspection:

1. `archive-map.md`
2. `2023-duke-overview.md`
3. `dataset-inventory.md`
4. `notebook-guide.md`
5. exported reports in `2023_Duke/html/`
6. exported reports in `2023_Duke/pdfs/`

This avoids unnecessary reruns and gives readers a clearer picture of what was already produced.

## What not to assume

The archive contains valuable work, but the safest way to use it is through documentation and validation.

Do not assume that:

- every notebook is part of the main pipeline;
- every output is the final version;
- every old folder is still current;
- every empirical result should be interpreted before checking its input data;
- matching and regression files are neutral datasets;
- legacy folders should be used before the main recovered pipeline.

The manual separates current working material, reusable products, legacy material, and recovery tasks.

## Near-term objective

The near-term objective is to create a small but useful research platform around the recovered archive.

That means:

- the archive can be explained to a new collaborator;
- the main folders can be navigated;
- the core datasets can be identified;
- the notebook sequence can be understood;
- the next validation tasks can be assigned;
- renewed work can begin from a clear map rather than from scattered files.

The archive already contains a large amount of work. The next step is to make it understandable, trustworthy, and reusable.