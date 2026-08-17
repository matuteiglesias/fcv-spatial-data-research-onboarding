---
title: Continuation Work Index
sidebar_position: 1
description: Forward-looking research notes for the active FCV empirical phase.
date: "2026-08-17"
---

# Continuation Work

This section contains the forward-looking working layer for the FCV spatial-data research project.

The archive-recovery work established what exists and how the main 2023 pipeline fits together. The current continuation phase uses that recovered foundation to define, test, and refine empirical experiments rather than jumping directly from old notebooks to new regression results.

For the shortest summary of the project now, start with [Current Research Status](../current-status.md).

## Current operating model

The renewed empirical work separates three layers:

```text
A — empirical infrastructure
    data, projects, geography, timing, outcomes, provenance

B — experiment specifications
    treatment, counterfactual, timing, geography, outcome, estimator

C — validation / calibration gates
    integrity, support, balance, falsification, sensitivity, signal recovery
```

See [Experimental Infrastructure and Validation](./experimental-infrastructure.md) for the current implementation and interpretation rules.

## Recommended reading order for active work

1. [Current Research Status](../current-status.md)
2. [Experimental Infrastructure and Validation](./experimental-infrastructure.md)
3. [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md)
4. [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md)
5. [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md)

The order is deliberately different from the June 2026 recovery sequence. The immediate bottleneck is now empirical feasibility: determining which candidate experiments the recovered data can actually support. Source updates and additional classification work should be pulled in where they resolve a concrete experimental limitation.

## Relationship between the continuation documents

### Experimental Infrastructure and Validation

Defines the current operating layer around the research: explicit experiment specifications, validation gates, real-data calibration, and the separate [FCV Experiment Harness](https://github.com/matuteiglesias/fcv-experiment-harness).

### Experimental Design and Regression Pipeline

Contains the detailed reconstruction of the investment-project empirical design, including area-period units, source-family treatments, jobs-related treatments, matching variants, time windows, geography, outcomes, and unresolved identification choices.

This is still valuable recovered design documentation, but it should not be read as saying that one matching/regression specification is already canonical.

### Annotation and Project Classification Protocol

Defines the project-level labels needed for jobs-related and local-implementation treatment families. Annotation remains upstream of those experiments but does not block calibration of the existing World Bank/China source-family treatments.

### Source Data Inventory and Update Strategy

Documents possible updates to World Bank, China/AidData, and other development-finance sources. It should guide source expansion when current coverage or project timing becomes a binding empirical limitation.

## Before running analysis

Keep the following archive-reference pages available:

- [Dataset Inventory](../data-products/dataset-inventory.md)
- [2023 Duke Overview](../main-pipeline/duke-overview.md)
- [Validation Status](../data-products/validation-status.md)
- [Notebook Guide](../notebooks/notebook-guide.md)
- [Archive Map](../archive-map.md)

The [Recovery Plan](../recovery-plan.md) remains useful for understanding how the archive was reconstructed. Current empirical priorities should be taken from this continuation section and the current-status page.

## Immediate continuation task

The first active task is to connect the experimental harness to the recovered `GID × TimePeriod` analysis surfaces, run the initial ACLED calibration lanes, and use the resulting diagnostics to decide which treatment, geography, timing, and counterfactual definitions merit deeper work.
