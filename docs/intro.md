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

The DHS HR measurement arm is now **commissioned on real protected-source data**, rather than merely implemented synthetically.

Three authoritative DHS releases have been materialized from their distributed fixed-width `.DAT + .DCT` representation:

- Nigeria 2018;
- Uganda 2016;
- Zambia 2018.

The initial semantic registry remains deliberately small:

```text
HV206 → household electricity access
HV270 → survey-relative wealth quintile
HV201 → drinking-water source code
```

Across those three releases, the rebuilt instrument reproduced **8 / 8 official DHS report benchmarks** within the predeclared publication-rounding tolerance.

The commissioning wave exercises household weights, de-jure population multipliers, urban-domain selection, wealth-quintile semantics, and release-local drinking-water categories. No joined protected microdata were persisted in the benchmark outputs.

This is external commissioning evidence. It is not a new FCV substantive result and it does not yet validate a DHS spatial-exposure experiment.

## Current scientific frontier

The highest-value readiness transition is now the first **real current-artifact GeoGCDF → ACLED fully contracted experiment**, followed by observability characterization on the exact same prepared frame.

The desired sequence is:

```text
hash-backed empirical inputs
→ explicit experiment projection
→ coverage / support / timing gates
→ placebo / falsification diagnostics
→ estimator if hard gates permit
→ effect-size observability curve + delta=0 calibration
```

The goal is not to obtain a preferred coefficient. The goal is to know whether the current scientific apparatus is coherent on real data and what signal scale it can reliably resolve.

## How to read this site

Start with:

1. [Current Research Status](./current-status.md) — what has actually passed and what is next;
2. [Research System Architecture](./research-system.md) — repository ownership and scientific boundaries;
3. [Validation Status](./data-products/validation-status.md) — evidence ledger;
4. [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md) — substantive scientific surfaces;
5. [Calibration Benchmark Catalog](./experiments/calibration-benchmark-catalog.md) — known-behavior commissioning and positive controls;
6. [Africa Observability Lab](./experiments/observability-lab.md) — instrument characterization machinery.

For historical reconstruction, use the archive/recovery pages separately.

## Repository boundaries

- `empirical-data-contracts` owns reusable empirical contracts.
- `spatial-data-foundation` owns reusable geography/time authority and spatial membership.
- `fcv-empirical-data` owns source-native facts and reusable measurements.
- `fcv-experiment-harness` owns scientific roles, timing, eligibility, gates, estimators, falsification, and calibration execution.
- this repository owns collaborator orientation, status, scientific framing, readiness summaries, and research memory.

## Interpretation rules

> **A successful materialization is not automatically an experiment.**

> **A codebook-backed measurement is not automatically an outcome or control.**

> **A GREEN experiment gate is permission to investigate further, not causal validation.**

> **Synthetic detectability is not evidence that the real effect exists.**

> **External commissioning is evidence about the instrument, not a new substantive FCV finding.**

The value of the rebuilt architecture is increasingly that these statements can remain true simultaneously while evidence advances from one layer to the next.
