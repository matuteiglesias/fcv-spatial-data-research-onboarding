---
title: FCV Spatial Data Research Workspace
sidebar_position: 1
description: Orientation to the recovered FCV research archive and the active empirical work built on top of it.
---

# FCV Spatial Data Research Workspace

This site documents two things at once:

1. a recovered research archive built mainly between 2021 and 2023; and
2. the active continuation of that work into a more explicit empirical research program.

The recovery phase produced a usable foundation: the main folders are mapped, major dataset families are inventoried, the 2023 empirical pipeline has been reconstructed, and the original matching and regression logic can be inspected without starting from scattered notebooks.

The project is now moving beyond archive archaeology. Current work focuses on **empirical design, validation, and experiment selection**: deciding which treatment definitions, timing rules, geographic units, counterfactuals, outcomes, and estimators can be supported credibly by the recovered data.

## What exists now

The workspace has four layers.

| Layer | Role |
|---|---|
| **Current research status** | Short statement of what is active, what is known, and what remains open. |
| **Experimental infrastructure** | Operating model for separating canonical data, experiment specifications, and validity/calibration gates. |
| **Recovered 2023 work** | Documentation of geography, population, violence, DHS, Afrobarometer, project exposure, matching, regressions, notebooks, and spatial products. |
| **Historical recovery material** | Archive map, recovery plan, legacy folders, and earlier salvage notes retained for provenance and continuity. |

## Start here

For most readers, the recommended path is:

1. [Current Research Status](./current-status.md) — what the project is doing now.
2. [Experimental Infrastructure and Validation](./continuation/experimental-infrastructure.md) — how active experiments are organized and tested.
3. [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md) — the recovered design, candidate experiment families, estimators, and unresolved decisions.
4. [Validation Status](./data-products/validation-status.md) — what has actually been tested on real FCV data versus what is only defined or blocked.
5. [Archive Map](./archive-map.md) — where the recovered source material lives.

If the task is specifically to understand the old implementation, continue with the [2023 Duke Overview](./main-pipeline/duke-overview.md), [Dataset Inventory](./data-products/dataset-inventory.md), [Spatial Data Overview](./data-products/spatial-data-overview.md), and [Notebook Guide](./notebooks/notebook-guide.md).

## Active research model

The current empirical work deliberately separates three layers:

```text
A — empirical infrastructure
    projects, observations, geography, timing, outcomes, provenance

B — experiment specifications
    treatment, counterfactual, exposure rule, geography, timing, outcome, estimator

C — validation / calibration gates
    integrity, support, balance, placebo behavior, sensitivity, signal recovery
```

The purpose of this separation is to avoid treating a single recovered notebook, matching routine, or regression specification as the research design itself.

The active workflow is:

```text
canonical empirical data
    -> experiment specification
    -> analysis sample
    -> validity / measurement gates
    -> estimator family
    -> falsification and sensitivity
    -> research interpretation
```

A companion code repository, [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness), provides an initial executable implementation of this approach.

## Main recovered archive

The historical foundation remains important. The archive contains a substantial body of work around:

- standardized administrative geography for Africa;
- population aggregation;
- ACLED and UCDP violence data;
- DHS geocovariates and survey-linked products;
- Afrobarometer geographic mappings and summaries;
- World Bank and Chinese development-finance project exposure;
- jobs-related project classification work;
- area-period empirical datasets;
- matching outputs and diagnostics;
- regression prototypes;
- project-level spatial products built from ACLED, OpenStreetMap, climate, terrain, and distance measures.

The two most important historical surfaces are:

### `2023_Duke`

The main recovered 2023 working pipeline. It contains the strongest lineage from raw sources through geography, covariates, project exposure, empirical panels, matching, and prototype regressions.

### `spatial_data`

A reusable spatial product store from earlier project-level work, including ACLED exposure, OSM features, climate variables, distance measures, GeoJSON files, and map-ready products.

Older folders remain useful for provenance or when the main pipeline leaves a specific gap, but they are no longer the default starting point.

## What this site is for

This documentation should let a collaborator answer five practical questions quickly:

- What was recovered?
- What is active now?
- Which empirical infrastructure exists?
- Which experiment surfaces are currently testable or blocked?
- Where should historical detail be found when needed?

It is not meant to make every old notebook equally prominent or to imply that every recovered output remains scientifically current.

## Interpretation discipline

The archive contains valuable prior work, but recovered outputs and active experiments have different epistemic status.

Do not assume that:

- every old notebook belongs to the current pipeline;
- every historical output is canonical;
- every treatment or matching definition should be reused unchanged;
- a successful synthetic harness test is evidence about the real FCV data;
- a green validation gate is proof of causality;
- one geography or estimator should be forced across all outcome families.

The [Validation Status](./data-products/validation-status.md) page is the human-facing place to distinguish **available**, **defined**, **tested**, and **blocked** experiment surfaces.

## Historical recovery material

The [Recovery Plan](./recovery-plan.md) is retained as a historical record of how the archive was reconstructed. Much of its orientation phase has now been completed, and current research should use the active-research pages above rather than treating the recovery plan as the live project roadmap.

The archive is therefore no longer just a set of old folders. It is a documented research memory layer with an active empirical continuation built on top of it.
