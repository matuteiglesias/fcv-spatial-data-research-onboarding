---
title: Current Research Status
sidebar_position: 1
description: Current state of the FCV spatial-data research project, active empirical work, and immediate next steps.
date: "2026-08-17"
---

# Current Research Status

The FCV spatial-data project has moved beyond archive recovery and back into active empirical research.

The recovered 2023 pipeline remains the main historical data foundation. It provides standardized administrative geography, population, violence, DHS, Afrobarometer, investment/project exposure, area-period datasets, matching outputs, and regression prototypes. The continuation work now focuses on deciding which empirical designs can be supported credibly by those data and what additional source or classification work is required.

This page is the short entry point for that active phase.

## What exists now

### Recovered empirical foundation

The archive contains a reusable `GID × TimePeriod` analysis surface built from the 2023 pipeline. Existing treatment conventions include pooled World Bank/China exposure, World Bank-only exposure, and China-only exposure, with alternative administrative levels and time-window definitions already represented in historical outputs.

The [2023 Duke Overview](./main-pipeline/duke-overview.md), [Dataset Inventory](./data-products/dataset-inventory.md), and [Archive Map](./archive-map.md) document that recovered foundation.

### Project-classification layer

A project-level annotation protocol has been reconstructed for treatment-relevant labels such as direct jobs, indirect jobs, locally implemented projects, non-jobs investment, and macro-policy-only projects.

The labels are intentionally assigned at the **project level** before being propagated to project locations and area-period exposure variables. See the [Annotation and Project Classification Protocol](./continuation/annotation-project-classification-protocol.md).

### Experimental validation infrastructure

A separate working package, [FCV Experiment Harness](https://github.com/matuteiglesias/fcv-experiment-harness), now provides a small reproducible environment for constructing candidate experiments and checking whether they are empirically usable before relying on more elaborate estimates.

The package is not a final econometric model. Its role is to make experimental choices explicit and to surface weak points in data quality, timing, support, counterfactual construction, falsification, and signal sensitivity.

See [Experimental Infrastructure and Validation](./continuation/experimental-infrastructure.md) for the operating model.

## Current empirical entry point

The first practical re-entry is deliberately conservative:

```text
recovered GID × TimePeriod panel
        +
recovered investment exposure
        +
ACLED violence outcome surface
        ↓
explicit experiment specification
        ↓
validation / calibration gates
        ↓
only then: baseline and more mature estimators
```

The initial calibration lane uses the existing area-period data rather than rebuilding the historical notebooks first. Candidate specifications can then be compared across administrative level, time window, source family, outcome definition, and treatment construction.

The first ACLED lane is a **calibration exercise**, not a final substantive result. A coefficient is not treated as evidence merely because a model can produce it.

## Main research questions still open

Several choices remain scientific decisions rather than settled pipeline defaults:

- which project date should define treatment timing;
- whether ADM2, ADM3, or another spatial exposure definition is most informative for a given outcome;
- whether the main counterfactual should be never-treated areas, matched controls, future/planned project locations, or a combination of designs;
- how jobs-related and non-jobs treatment categories should be refined after project annotation;
- which ACLED/UCDP measures should be treated as primary outcomes rather than diagnostics;
- how Afrobarometer should be linked spatially and temporally without forcing survey outcomes into the same aggregation design as conflict events;
- which estimator family is appropriate after measurement and support diagnostics are known.

These questions are expected to narrow as the real recovered datasets are passed through the experimental checks.

## Methodological direction

Recent reconstruction of the aid-location literature, especially the implementation logic used by Blair, Marty & Roessler and earlier spatial aid designs such as Briggs, motivates an additional counterfactual family:

```text
implemented / completed project locations
                versus
selected future / planned project locations
```

The attraction is that future project locations may capture part of the non-random process determining where development projects are placed.

This is **under investigation**, not yet the canonical FCV design. The existing matched-control designs remain useful candidate experiments, and the recovered area-period panel may support stronger longitudinal approaches for conflict outcomes.

## Immediate next work

The near-term sequence is:

1. scan the recovered area-period grid for actual treated/control support;
2. run one or more ACLED calibration specifications through the validation gates;
3. inspect failures in timing, coverage, overlap, sparsity, placebo behavior, or signal recovery;
4. use those diagnostics to choose which experimental designs deserve further development;
5. continue project classification and source updates only where they unlock a concrete experiment;
6. document real-data findings and unresolved decisions here as they become available.

## How to continue reading

For active work, continue with:

1. [Experimental Infrastructure and Validation](./continuation/experimental-infrastructure.md)
2. [Annotation and Project Classification Protocol](./continuation/annotation-project-classification-protocol.md)
3. [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md)
4. [Source Data Inventory and Update Strategy](./continuation/source-data-inventory-update-strategy.md)

For archive reconstruction and historical context, use the [Archive Map](./archive-map.md), [2023 Duke Overview](./main-pipeline/duke-overview.md), and [Recovery Plan](./recovery-plan.md).

## Current interpretation policy

The working standard for the active phase is simple:

> A successful pipeline run is not itself a research result.

A candidate experiment becomes worth interpreting only after its data, treatment timing, support, outcome coverage, falsification behavior, and sensitivity are understood well enough to know what the estimator is actually measuring.
