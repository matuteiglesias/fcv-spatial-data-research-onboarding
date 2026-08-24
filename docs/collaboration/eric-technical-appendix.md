---
title: FCV Reconstruction — Technical Appendix for Eric
sidebar_position: 3
description: Optional implementation evidence supporting the Eric-facing scientific brief.
last_verified: "2026-08-23"
---

# FCV Reconstruction — Technical Appendix for Eric

**Use this only after the scientific brief.**

This page answers a narrower question:

> **What concrete implementation and evidence sit behind the scientific story?**

It is intentionally not the opening narrative.

## 1. Current repository split

| Layer | Repository | Role |
|---|---|---|
| Shared empirical contracts | [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) | Identity, provenance, grain, geography/time, coverage, measurements, QA, run manifests. |
| Shared spatial/time infrastructure | [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) | Geography authority, spatial membership, period indexing, spatial provenance. |
| FCV empirical domain | [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) | Source-native facts, durable measurements, source semantics, coverage, QA, integration evidence. |
| FCV scientific use | [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) | Measurement projection, scientific roles, treatment derivation, gates, estimators, observability, calibration benchmarks. |
| Human-facing research map | [`fcv-spatial-data-research-onboarding`](https://github.com/matuteiglesias/fcv-spatial-data-research-onboarding) | Status, architecture, scientific framing, readiness, research memory. |

The architecture is designed to prevent source engineering from silently assigning causal meaning.

## 2. Empirical reconstruction evidence

### ACLED

The rebuilt ACLED path preserves source-native events and explicit coverage semantics.

Important corrections relative to common inherited shortcuts include:

- zero-fatality events remain events;
- source geolocation precision remains data rather than becoming an automatic ingestion filter;
- ambiguous geographic membership remains explicit;
- sparse row absence does not automatically become zero;
- event taxonomy remains source-native until an experiment selects a scientific outcome.

Human summary: [ACLED product card](../data-products/products/acled.md).

### Investment data

Current investment work preserves source families independently rather than forcing an early pooled treatment table.

Current source paths include:

- AidData CLG-LMIC;
- World Bank Projects API;
- AidData GeoGCDF.

The GeoGCDF path preserves source project geometry and avoids multiplying a project's financial value across each geography it intersects.

Human summary: [Empirical Product Catalog](../data-products/product-catalog.md).

### DHS

The first integrated DHS empirical mini-wave now includes:

- Household Recode source-native Silver;
- cluster-level Geospatial Covariates with explicit temporal semantics;
- GE/GPS public reported-coordinate geography with displacement metadata;
- cross-product HR/GC/GPS integration QA;
- initial codebook-backed household semantic measurements.

The initial semantic registry includes:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

These are empirical meanings, not experiment roles.

Human summaries:

- [DHS Empirical Stack](../data-products/products/dhs-overview.md)
- [DHS Household Semantic Measurements](../data-products/products/dhs-household-measurements.md)

## 3. Experiment-boundary evidence

The harness consumes durable empirical measurements through a validated boundary rather than source-specific ingestion code.

Conceptually:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
        ↓
validated empirical input
        ↓
experiment-specific projection
```

A projection declares selectors, value use, timing, role, geography linkage, and coverage interpretation explicitly.

Treatment can also be derived downstream from a contracted investment measurement under an explicit experiment rule.

Key merged harness work:

- [PR #8 — contract-backed empirical input boundary](https://github.com/matuteiglesias/fcv-experiment-harness/pull/8)
- [PR #9 — E1/E2 on contracted ACLED measurements](https://github.com/matuteiglesias/fcv-experiment-harness/pull/9)
- [PR #10 — downstream treatment derivation](https://github.com/matuteiglesias/fcv-experiment-harness/pull/10)

## 4. Recovered real-data calibration evidence

Before the fully rebuilt upstream path existed, the reconstructed area-period system was taken through a real WB → ACLED calibration checkpoint.

Common E2 model sample:

```text
24,852 area-periods
4,142 GIDs
```

All four predeclared WB measurement cells passed hard gates, with a known YELLOW support caveat for WBad `amount_positive` in 2013–2014.

Reported effects were small relative to the approximate detectable scale, and all reported 95% coefficient intervals included zero.

The historical one-off `0.20 SD` positive-control injection recovered successfully in all declared cells.

This remains **recovered-lane real-data evidence**, not evidence that the newest source-native contracted stack has already completed a canonical real run.

Details: [Validation Status](../data-products/validation-status.md).

## 5. Reusable observability instrument

Harness [PR #11](https://github.com/matuteiglesias/fcv-experiment-harness/pull/11) generalized the earlier signal check into a reusable observability engine.

For caller-declared effect-size grids it records, among other diagnostics:

- injected truth;
- estimated effect and SE;
- confidence interval;
- sign recovery;
- rejection;
- joint sign + rejection recovery;
- CI coverage;
- absolute/relative recovery error;
- sample, cluster, outcome-SD, and treatment-support context.

`delta = 0` is a first-class synthetic null.

The engine retains the existing E2 estimator/design rather than creating a new substantive estimator.

Technical authority: [`OBSERVABILITY.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/OBSERVABILITY.md).

## 6. Africa Observability Lab kernel

Harness [PR #13](https://github.com/matuteiglesias/fcv-experiment-harness/pull/13) adds a source-agnostic calibration substrate.

Every benchmark declares:

```text
purpose = calibration
```

Supported benchmark kinds:

```text
commissioning
positive_control
negative_control
synthetic_injection
measurement_agreement
```

Recovery levels remain separate:

```text
Level 1 — pipeline recovery
Level 2 — qualitative expected behavior
Level 3 — quantitative compatibility
```

The result can therefore say that a qualitative pattern recovered while exact quantitative parity was not scientifically required.

The Lab produces sanitized benchmark manifests/results and a multidimensional health report. It intentionally does not collapse instrument quality into one score.

Technical authority: [`CALIBRATION_LAB.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/CALIBRATION_LAB.md).

## 7. Commissioning portfolio

### Official DHS report benchmark

Harness [PR #12](https://github.com/matuteiglesias/fcv-experiment-harness/pull/12) identifies the cleanest first real survey commissioning target:

```text
Nigeria DHS 2018
weighted national household electricity
59.4% yes / 40.6% no
```

It tests survey identity, `HV206` semantics, missing values, `HV005` weighting, and the household denominator.

Additional designed targets include detailed drinking-water categories and urban de jure wealth-quintile shares.

### Published-study positive controls

Harness [PR #14](https://github.com/matuteiglesias/fcv-experiment-harness/pull/14) recommends two complementary external standards.

**Briggs (2017), _Does Foreign Aid Target the Poorest?_**

Tests DHS weights/denominators/wealth semantics, survey-region geography, donor-project aggregation, and regression reconstruction.

It should follow simpler official-DHS commissioning so failures can be localized.

**Breckner & Sunde (2019), _Temperature extremes, global warming, and armed conflict_**

Tests ACLED event processing, structural-zero semantics, regular-grid geography, monthly time, weather alignment, and fixed-effects estimation.

It is intentionally deferred until reusable regular-grid and monthly-time capabilities exist.

Human summary: [Calibration Benchmark Catalog](../experiments/calibration-benchmark-catalog.md).

## 8. One remaining generic commissioning seam

The first DHS benchmark exposed a generic harness issue rather than a DHS-specific defect.

A weighted benchmark needs both:

```text
semantic measurement
HV206 → household electricity access

and

source-native auxiliary fact
HV005 → source household weight
```

The current Calibration Lab input seam is centered on semantic measurement bundles. Source-native HR facts should not be forced to pretend they have a `MeasurementContract` merely to enter a benchmark.

[Harness issue #16](https://github.com/matuteiglesias/fcv-experiment-harness/issues/16) therefore tracks a generic provenance-validated auxiliary-dataset input seam.

The intended boundary is:

```text
semantic measurement bundle
+
content-hashed auxiliary DatasetRef / RunManifest artifact
        ↓
benchmark adapter
        ↓
source-specific join / weight / denominator logic
```

The kernel remains source-agnostic.

## 9. Current evidence statement

The most precise current status is:

| Layer | State |
|---|---|
| Recovered research system | reconstructed and documented |
| Source-native empirical architecture | implemented across core ACLED/investment/DHS paths |
| Scientific-use boundary | implemented |
| Synthetic/adversarial acceptance | implemented |
| Reusable observability engine | implemented |
| Calibration Lab kernel | implemented |
| DHS commissioning design | specified |
| Published benchmark portfolio | specified |
| Full current real-source commissioning | **next gate** |

The scientific claim remains:

> **The instrument and calibration protocol are ready to be commissioned; complete real-data validation is not yet claimed.**

## 10. Suggested deeper reading order

Only if implementation detail is useful:

1. [Current Research Status](../current-status.md)
2. [Research System Architecture](../research-system.md)
3. [Africa Observability Lab](../experiments/observability-lab.md)
4. [Calibration Benchmark Catalog](../experiments/calibration-benchmark-catalog.md)
5. [Validation Status](../data-products/validation-status.md)
6. technical repository docs linked above

Return to the [Eric-facing scientific brief](./eric-scientific-brief.md).