---
title: FCV Spatial Data Research Workspace
sidebar_position: 1
description: Orientation to the active FCV research system, its current empirical architecture, and the recovered research archive.
date: "2026-08-23"
---

# FCV Spatial Data Research Workspace

This site is the human-facing entry point to an active research system that now has two distinct kinds of memory:

1. the recovered 2021–2023 FCV research archive; and
2. the newer contract-backed empirical and experiment architecture being built around it.

The recovery phase made the old work legible. The current phase is doing something more demanding: separating **source facts, reusable empirical measurements, scientific-use choices, and experiment evidence** so that changes in one layer do not silently rewrite another.

## Start here

For most collaborators, read in this order:

1. [Current Research Status](./current-status.md) — what exists now and what is still unresolved.
2. [Research System Architecture](./research-system.md) — where responsibilities and sources of truth live.
3. [Research Workflow and Validation](./continuation/experimental-infrastructure.md) — how measurements become candidate experiments and how those experiments are gated.
4. [Validation Status](./data-products/validation-status.md) — what has synthetic acceptance, what has real-data evidence, and what is still pending.
5. [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md) — the scientific design lineage and candidate experiment families.
6. [Archive Map](./archive-map.md) — where the recovered historical material lives.

If your task is mainly historical reconstruction, continue with the [2023 Duke Overview](./main-pipeline/2023-duke-overview.md), [Dataset Inventory](./data-products/dataset-inventory.md), [Spatial Data Overview](./data-products/spatial-data-overview.md), and [Notebook Guide](./notebooks/notebook-guide.md).

## The research system now has explicit boundaries

The active implementation is no longer one long recovered pipeline.

```text
reusable foundations

empirical-data-contracts
spatial-data-foundation
        ↓

FCV empirical domain

fcv-empirical-data
        ↓

FCV scientific use

fcv-experiment-harness
        ↓

human collaboration / status

this onboarding site
```

The two reusable foundations are intentionally not FCV-specific.

[`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) defines typed empirical contracts for identity, provenance, grain, geography/time, coverage, measurements, QA, and run manifests.

[`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) owns reusable geography authority, analytical geometry, period indexing, spatial membership, source registration, and spatial provenance.

The FCV-specific empirical producer, [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data), preserves source-native facts and natural observation grains and materializes durable contract-backed empirical products.

The scientific consumer, [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness), decides how those measurements are used in a particular research design.

The compact rule is:

> **Facts are produced upstream; scientific roles are assigned in experiments; readiness is summarized here.**

## Why the split matters scientifically

Older research pipelines often compress several decisions into one derived table. A project exposure column may already imply a treatment rule; a sparse conflict table may already encode a zero-filling convention; a survey aggregate may already assume the analysis geography.

The new architecture tries to keep those choices visible.

For example, an upstream empirical product can say:

```text
this is a source-backed measurement
at this natural or declared grain
with this geography and period scheme
with this coverage semantics
with this provenance
```

A downstream experiment can separately say:

```text
use this measurement as treatment
select this native category
apply this timing offset
restrict eligibility to these periods
compare these observations
estimate this contrast
```

That makes it possible to change the research design without silently rebuilding the source facts.

## What exists now

Several previously planned components are now real implementation surfaces.

### Reusable contracts and spatial/time infrastructure

The project has an independently consumable empirical contract package and a reusable spatial/time foundation. FCV repositories consume those rather than maintaining local copies of the same abstractions.

### FCV empirical-domain kernel

`fcv-empirical-data` now sits between the reusable foundations and the experiment harness. It owns source-native materialization, QA, coverage, parity, and provenance while enforcing a scientific firewall against treatment/control/estimator semantics.

### Source-native empirical verticals

Current implemented FCV empirical paths include:

- AidData CLG-LMIC source-native Silver;
- World Bank Projects API source-native Silver;
- ACLED source-native Silver plus shared geography/period membership and sparse contract-backed measurements;
- AidData GeoGCDF source-native project geometry plus contracted commitment-period measurements.

These are deliberately independent source verticals. They are not one pre-harmonized treatment table.

### Contract-backed experiment consumption

The harness now has a validated empirical input boundary and an explicit measurement-projection layer.

This means source-backed empirical measurements can cross into the harness as typed, hashed, provenance-rich inputs before acquiring scientific-use roles such as treatment or outcome.

The active harness can also derive treatment downstream from a contracted empirical measurement using an explicit experiment rule rather than requiring the upstream producer to label rows as treated/control.

### Survey architecture in progress

DHS and Afrobarometer are being handled as survey-native observation systems rather than being forced into the same `GID × TimePeriod` grain as area-period event panels.

The survey substrate work is intended to preserve household/person/respondent/cluster/EA identity, design metadata, variable metadata, and geography linkage while leaving outcome/covariate/treatment roles to later experiments.

## Evidence is layered

This site distinguishes four kinds of progress:

| Evidence | Meaning |
|---|---|
| **Synthetic/software acceptance** | The implementation behaves correctly on controlled fixtures. |
| **Empirical materialization/QA** | A source-backed measurement was produced with declared provenance and quality evidence. |
| **Experiment gate evidence** | A declared design has been tested for support, coverage, timing, placebo behavior, and related diagnostics. |
| **Estimator/research result** | A declared estimator has produced an estimate for a particular experiment. |

These levels should not be collapsed.

A synthetic test is not a real-data result. A successful materialization is not a causal design. A green gate is not proof of identification. An old coefficient is not automatically a current result under the new measurement architecture.

The [Validation Status](./data-products/validation-status.md) page is the human-facing ledger for those distinctions.

## The recovered archive still matters

The historical foundation remains scientifically important.

The archive contains substantial prior work around:

- standardized administrative geography for Africa;
- population aggregation;
- ACLED and UCDP violence data;
- DHS geocovariates and survey-linked products;
- Afrobarometer geographic mappings and summaries;
- World Bank and Chinese development-finance project exposure;
- jobs-related project classification;
- area-period empirical datasets;
- matching outputs and diagnostics;
- regression prototypes;
- project-level spatial products built from ACLED, OpenStreetMap, climate, terrain, and distance measures.

The two main historical surfaces remain:

### `2023_Duke`

The strongest recovered lineage from raw sources through geography, covariates, investment exposure, empirical panels, matching, and prototype regressions.

### `spatial_data`

A reusable project-level spatial product store from earlier work, including ACLED exposure, OSM features, climate variables, distance measures, GeoJSON files, and map-ready products.

Use these as research memory, parity evidence, and historical implementation detail. Do not assume every recovered output is the current canonical empirical product.

## What this site is for

A collaborator should be able to answer quickly:

- What is active now?
- How do the repositories fit together?
- Which layer owns a particular decision?
- Which source-backed empirical products exist?
- Which scientific experiment surfaces are currently runnable?
- What evidence supports a readiness claim?
- What remains historical, provisional, or blocked?
- Where should implementation detail be checked when needed?

This site should not become a duplicate API manual for the technical repositories. Its value is the **shared mental model** across researchers, data engineers, and empirical analysts.

## Interpretation discipline

Do not assume that:

- every historical output is canonical;
- every source measurement should be forced into the same grain;
- missing rows mean zero, untreated, no event, or no project;
- project amounts are local spending or can be multiplied across locations;
- a source variable has an intrinsic treatment/outcome/covariate role;
- one geography or estimator should be forced across all research questions;
- successful CI or synthetic gates are evidence about real FCV effects;
- recovered real-data calibration results are automatically equivalent to results from the newer contract-backed upstream measurement path.

The architecture exists largely to keep those distinctions explicit.

## Historical recovery material

The [Recovery Plan](./recovery-plan.md) remains available as a historical record of how the archive was reconstructed.

It is no longer the live project roadmap. Current work should start from the pages above and use the recovery documents only when historical reconstruction is actually needed.
