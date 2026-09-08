---
title: FCV Spatial Data Research Workspace
sidebar_position: 1
description: Orientation to the active FCV empirical system, experiment harness, Africa Observability Lab, and recovered research archive.
date: "2026-09-08"
---

# FCV Spatial Data Research Workspace

This site is the human-facing entry point to an active FCV scientific-instrument project built on top of a recovered research archive.

The current system separates five things that should not be collapsed:

```text
source facts
→ reusable empirical measurements
→ scientific experiment roles
→ instrument characterization / commissioning
→ substantive inference
```

## What changed most recently

Two major real-data milestones now exist.

### DHS measurement commissioning

The DHS HR measurement arm has reproduced **8 / 8 official report benchmarks** across Nigeria 2018, Uganda 2016, and Zambia 2018 using canonical `.DAT + .DCT` source authority.

This is external measurement commissioning, not a substantive DHS exposure result.

### Current GeoGCDF → ACLED real gate run

The rebuilt current-artifact E2 path has now crossed from synthetic acceptance to real experiment evidence.

The PRIMARY reference uses:

```text
47 GeoGCDF-covered countries
6,420 GADM ADM2 units
38,520 ADM2-period rows
6 treatment periods
GeoGCDF project_count > 0
→ ACLED VAC fatalities at t+1
```

All declared E0–E6 gates were GREEN. Treated/control support exists in all six periods; pretreatment balance and prior-outcome placebo are very small; the predeclared 0.20-SD injected signal recovered 30 / 30 times.

The real reference coefficient is modest and imprecise (`+0.550`, SE `0.458`, `z ≈ 1.20`). This is not strong substantive evidence. It demonstrates why instrument health and real signal strength must remain separate questions.

A clean supported-environment numerical replication and the full real-frame observability curve are now in progress.

## Current scientific frontier

The project is now climbing a **small-effect credibility ladder**:

```text
clean numerical reproduction
→ real-frame observability from 0 to 0.20 SD
→ uncertainty / interval calibration
→ influence + leave-one-country/period-out stability
→ stronger timing / negative-control falsification
→ external published positive control
→ bounded model-family sensitivity where justified
```

The goal is to know not merely whether a coefficient can be estimated, but whether very small signals can be distinguished from noise, spatial dependence, influential units, timing artifacts, and miscalibrated uncertainty.

## How to read this site

Start with:

1. [Current Research Status](./current-status.md) — what has actually passed and what is next;
2. [Research System Architecture](./research-system.md) — repository ownership and scientific boundaries;
3. [Validation Status](./data-products/validation-status.md) — evidence ledger;
4. [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md) — substantive scientific surfaces;
5. [Calibration Benchmark Catalog](./experiments/calibration-benchmark-catalog.md) — known-behavior commissioning and positive controls;
6. [Africa Observability Lab](./experiments/observability-lab.md) — detector and uncertainty characterization.

## Repository boundaries

- `empirical-data-contracts` owns reusable empirical contracts.
- `spatial-data-foundation` owns reusable geography/time authority and spatial membership.
- `fcv-empirical-data` owns source-native facts and reusable measurements.
- `fcv-experiment-harness` owns scientific roles, timing, eligibility, gates, estimators, falsification, and calibration execution.
- this repository owns collaborator orientation, status, scientific framing, readiness summaries, and research memory.

## Interpretation rules

> **A successful materialization is not automatically an experiment.**

> **A GREEN experiment gate is permission to investigate further, not causal validation.**

> **Synthetic detectability is not evidence that the real effect exists.**

> **A healthy instrument can legitimately produce a small, imprecise real coefficient.**

> **Robustness checks should characterize fragility, not search for significance.**
