---
title: Current Research Status
sidebar_position: 1
description: Current state of the FCV empirical system, experiment harness, observability lab, and immediate evidence-producing work.
date: "2026-08-23"
---

# Current Research Status

The FCV project has moved from archive recovery into **scientific-instrument construction and commissioning**.

The active stack now separates four questions that older workflows often collapsed:

```text
1. WHAT WAS MEASURED?
   source facts + empirical measurements

2. HOW IS IT USED SCIENTIFICALLY?
   experiment projection + roles + timing + eligibility

3. CAN THE DESIGN OBSERVE KNOWN SIGNALS?
   observability / calibration / commissioning

4. WHAT DOES THE SUBSTANTIVE ESTIMATE SAY?
   estimator output after the preceding gates
```

The recovered 2021–2023 pipeline remains important research memory and real calibration evidence, but it is no longer the architectural center of the project.

For orientation, see [Research System Architecture](./research-system.md), [Africa Observability Lab](./experiments/observability-lab.md), [Empirical Product Catalog](./data-products/product-catalog.md), and [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md).

## Current system state

### 1. Reusable foundations are external to FCV

[`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) owns reusable identity, provenance, grain, geography/time, coverage, measurement, QA, and run-manifest contracts.

[`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) owns reusable geography authority, analytical geometry, period indexing, spatial membership, source registration, and spatial provenance.

Neither package owns FCV treatment/outcome semantics or estimators.

### 2. `fcv-empirical-data` now produces source-native facts and reusable measurements

The empirical repository currently includes:

- AidData CLG-LMIC relational Silver;
- World Bank Projects API Silver;
- AidData GeoGCDF project geometry + contracted commitment-period measurements;
- ACLED source-native events + contracted area-period-native-event measurements;
- reusable survey substrate;
- DHS HR, GC, and GE/GPS verticals;
- DHS HR/GC/GPS integration QA;
- initial codebook-backed DHS household semantic measurements.

The current DHS mini-wave is materially mature:

```text
HR + GC + GPS
      ↓
integration QA
      ↓
codebook-backed household measurements
```

Initial DHS household meanings are:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

These are empirical meanings, not automatic outcome/control roles.

Protected real-source DHS acceptance is still pending.

### 3. `fcv-experiment-harness` now has a full contract-backed scientific-use seam

The harness validates durable empirical artifacts before scientific use:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
        ↓
validated EmpiricalMeasurementBundle
        ↓
explicit MeasurementProjectionSpec
        ↓
scientific role / timing / treatment derivation
        ↓
gates / estimator
```

The active E1/E2 path uses contracted ACLED measurements and can derive treatment downstream from contracted investment measurements.

Important firewall behavior remains explicit:

- unknown sparse absence does not become zero;
- unavailable treatment measurements do not silently become controls;
- geography and period identities are contract-checked;
- experiment selectors and timing live downstream;
- the existing estimator is reused rather than hidden inside source processing.

A canonical real current-artifact fully contracted experiment has still not been recorded in this human ledger.

### 4. The harness now contains a reusable observability instrument

The old one-off E2 `0.20 SD` synthetic recovery check has been generalized.

The new observability engine maps:

```text
known injected effect size
        ↓
probability + quality of recovery
```

for caller-declared effect-size grids on the actual prepared E2 design substrate.

It records sign recovery, rejection, joint detection, CI coverage, recovery error, estimate distribution, uncertainty, sample size, clusters, outcome scale, and treatment support.

`delta = 0` is a first-class synthetic null, allowing false-positive and interval-coverage calibration against **known zero truth** without claiming the real social effect is null.

The reference fully contracted investment + ACLED observability path passes synthetic acceptance.

This is now a real instrument-characterization capability, not merely a unit test.

### 5. The Africa Observability Lab calibration kernel is implemented

The harness now has a source-agnostic `CalibrationBenchmarkSpec` substrate for explicit `purpose = calibration` runs.

Supported benchmark kinds include:

- commissioning;
- positive control;
- negative control;
- synthetic injection;
- measurement agreement.

Recovery is represented independently at:

```text
Level 1 — pipeline recovery
Level 2 — qualitative known behavior
Level 3 — quantitative compatibility
```

The kernel writes sanitized benchmark manifests/results and can render a multidimensional instrument-health report across commissioning, controls, detectability, agreement, source integrity, and limitations.

There is deliberately **no single instrument score**.

The Calibration Lab is not a second estimator framework and does not turn calibration results into new FCV substantive findings.

See [Africa Observability Lab](./experiments/observability-lab.md).

## External commissioning is now designed, not hypothetical

The project now has concrete authoritative/published calibration targets.

### First DHS commissioning target

The cleanest first external measurement is:

> **Nigeria DHS 2018 — 59.4% of households have electricity**

This will test survey identity, `HV206` semantics, `HV005` household weighting, denominator construction, and missing-value handling against an official DHS publication.

The benchmark is designed but not yet executed on protected local data.

### Additional DHS report targets

The current research memo also defines:

- Nigeria 2018 detailed drinking-water source distribution;
- Nigeria 2018 urban de jure wealth-quintile distribution.

The latter stresses `HV270` plus source-native auxiliary facts such as weights, de jure household-member counts, and urban/rural domain selection.

### First published-study positive control

**Briggs (2017), _Does Foreign Aid Target the Poorest?_** is the recommended first published-study survey benchmark after basic DHS commissioning.

It tests survey weighting/denominators, survey-region geography, donor-project aggregation, and regression behavior across 17 African countries.

### Complementary event/time/geography benchmark

**Breckner & Sunde (2019)** is the recommended complementary ACLED/weather benchmark, but is intentionally deferred until reusable regular-grid geography and monthly/subannual period semantics exist.

The project should not fake 0.75° grid cells as GADM or months as year periods just to implement one benchmark.

See [Calibration Benchmark Catalog](./experiments/calibration-benchmark-catalog.md).

## The most important current calibration blocker

The first DHS commissioning consumer exposed one generic harness gap: **auxiliary provenance-validated empirical datasets**.

The benchmark needs both:

```text
semantic measurement
HV206 → household electricity access

and

source-native auxiliary fact
HV005 → household sample weight
```

The current Calibration Lab input seam accepts semantic measurement bundles. It does not yet have a generic way to pass HR Silver as an auxiliary `DatasetRef + RunManifest` input without fabricating a `MeasurementContract`.

Harness issue #16 tracks the correct source-agnostic extension.

The kernel should not learn DHS variable names; adapters should own joins, weighting, denominators, and source-specific transformations.

## Evidence now has three active lanes

### Lane A — current contract-backed architecture

Implemented and synthetically accepted:

- empirical bundle validation;
- ACLED projection;
- fully contracted treatment derivation;
- DHS integrated empirical/semantic substrate;
- reusable E2 observability instrument;
- calibration benchmark kernel.

A canonical real current-artifact fully contracted experiment remains **NOT RUN / not recorded here**.

### Lane B — observability / commissioning

Implemented now:

- synthetic effect-size observability curves;
- synthetic null calibration;
- source-agnostic benchmark/recovery kernel;
- instrument-health reporting.

Designed but not yet executed on real external data:

- Nigeria DHS 2018 commissioning;
- Briggs positive control;
- Breckner–Sunde benchmark.

These are **instrument tests**, not substantive FCV results.

### Lane C — recovered real-data calibration

The historical/reconstructed WB→ACLED E2 lane still provides genuine real-data calibration evidence:

```text
24,852 area-periods
4,142 GIDs
4 declared WB measurement cells passed hard gates
30/30 recovery for the old predeclared 0.20-SD injection in every cell
```

Those results remain useful but must not be relabeled as current fully contracted or Observability Lab commissioning results.

## What is now the highest-value next work?

The highest-value sequence is increasingly clear:

1. **close harness issue #16** with a generic provenance-validated auxiliary dataset seam;
2. **commission DHS on one authoritative statistic**, beginning with Nigeria 2018 household electricity;
3. record the first **real protected-source integrated DHS acceptance** with only non-sensitive hashes/counts/QA;
4. run the **fully contracted GeoGCDF → ACLED** real current-artifact reference experiment and observability characterization;
5. once basic DHS commissioning passes, implement **Briggs (2017)** as the first published-study survey positive control;
6. use instrument-health failures to decide which capability to strengthen next instead of adding sources or models indiscriminately;
7. revisit Breckner–Sunde only when shared regular-grid/monthly infrastructure is scientifically justified.

## Reading order

For current work:

1. [Research System Architecture](./research-system.md)
2. [Africa Observability Lab](./experiments/observability-lab.md)
3. [Calibration Benchmark Catalog](./experiments/calibration-benchmark-catalog.md)
4. [Empirical Product Catalog](./data-products/product-catalog.md)
5. [DHS Empirical Stack](./data-products/products/dhs-overview.md)
6. [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md)
7. [Research Workflow and Validation](./continuation/experimental-infrastructure.md)
8. [Validation Status](./data-products/validation-status.md)

## Interpretation policy

The current project needs several explicit non-equivalences:

> **A successful materialization is not automatically an experiment.**

> **A codebook-backed empirical meaning is not automatically an experiment role.**

> **A successful experiment run is not automatically causal evidence.**

> **Synthetic detectability is not evidence that the real effect exists.**

> **A calibration benchmark is not a new FCV substantive result.**

> **Failure to match an external benchmark should be diagnosed, not tuned away.**

That separation is increasingly the core strength of the rebuilt FCV scientific instrument.
