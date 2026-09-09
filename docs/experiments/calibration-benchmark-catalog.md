---
title: Calibration Benchmark Catalog
sidebar_position: 3
description: Human-facing catalog of FCV commissioning targets, published positive controls, and calibration prerequisites.
last_verified: "2026-09-09"
---

# Calibration Benchmark Catalog

**Document status: CURRENT CALIBRATION TARGET CATALOG**  
**Purpose: instrument validation, not new FCV substantive inference**

This page answers:

> **Which known-behavior benchmarks has the FCV instrument reproduced, what did they test, and what should be commissioned next?**

## At a glance

| Benchmark | Kind | What it primarily tests | Current status |
|---|---|---|---|
| Nigeria DHS 2018 household electricity | commissioning | survey identity, `HV206`, `HV005`, denominator | **GREEN** |
| Nigeria DHS 2018 de-jure electricity | commissioning | `HV005 × HV012` | **GREEN** |
| Nigeria DHS 2018 drinking-water distribution | commissioning | release-local `HV201`, weights, category map | **GREEN** |
| Nigeria DHS 2018 urban de-jure wealth | commissioning | `HV270`, `HV025`, population weights | **GREEN** |
| Uganda DHS 2016 household electricity | commissioning | cross-release identity/weights | **GREEN** |
| Uganda DHS 2016 de-jure electricity | commissioning | cross-release population weighting | **GREEN** |
| Zambia DHS 2018 household electricity | commissioning | cross-release identity/weights | **GREEN** |
| Zambia DHS 2018 de-jure electricity | commissioning | cross-release population weighting | **GREEN** |
| Current GeoGCDF→ACLED 0.20-SD injection | real-frame synthetic positive control | detector recovery on the actual prepared E2 design | **GREEN — 30 / 30** |
| Current GeoGCDF→ACLED detector grid | detector characterization | false positives, coverage, detection threshold | **CLOSED / CHARACTERIZED** |
| Current E2 uncertainty family | inference calibration | null size, coverage, CI width, power | **CLOSED / CHARACTERIZED** |
| Current E2 influence + falsification | robustness calibration | concentration, fake timing, structured null | **CLOSED / CHARACTERIZED** |
| Current E2 sparse-outcome family | representation sensitivity | severity vs incidence vs count intensity | **CLOSED / CHARACTERIZED** |
| Briggs historical DHS wealth distribution | published measurement positive control | historical survey decoding, `HV005 × HV012`, `HV270`, `HV024` | **STRONG POSITIVE CONTROL** |
| Briggs (2017), full aid-targeting analogue | published positive control | survey weighting, region geography, donor-project aggregation, regression | **QUALITATIVE POSITIVE CONTROL / CLOSED** |
| Breckner & Sunde (2019) | published positive control | ACLED grid/month alignment, weather, FE estimation | **DEFERRED — GRID + MONTHLY SUPPORT NEEDED** |
| WBad ↔ WBkg treatment overlap | measurement agreement | inherited measurement stability | **REAL RECOVERED-LANE EVIDENCE** |

## DHS commissioning checkpoint — 8 / 8 GREEN

The initial DHS commissioning wave is complete across Nigeria 2018, Uganda 2016, and Zambia 2018. It commissions survey/release identity, source-native weights, de-jure population multipliers, urban-domain selection, wealth semantics, release-local drinking-water categories, denominator construction, and missing/unmapped accounting.

Published one-decimal percentages were tested at the implied ±0.05 percentage-point tolerance. All required cells recovered within tolerance. No joined protected microdata were persisted.

These are commissioning results, not FCV substantive findings.

## Current E2 calibration family — CLOSED THROUGH R5

The current fully contracted GeoGCDF→ACLED reference passed its real E0–E6 gate run and then completed the first bounded characterization wave.

PRIMARY real frame:

```text
38,520 ADM2-period rows
6,420 ADM2 units
47 countries
6 treatment periods
7,667 treated
30,853 controls
```

### Detector resolution

Frozen grid:

```text
0.00, 0.02, 0.05, 0.10, 0.20 SD
```

Canonical ADM2-clustered behavior:

```text
0.00 SD → rejection 0.02, coverage 0.98
0.02 SD → detection 0.25
0.05 SD → detection 0.96
0.10 SD → detection 1.00
0.20 SD → detection 1.00
```

The useful reading is an empirical resolution boundary, not a power-optimized specification: approximately `0.02 SD` is difficult, `0.05 SD` is usually observable, and `0.10+ SD` is essentially certain under the frozen synthetic worlds.

### Uncertainty calibration

Three predeclared inference families were characterized on the exact real frame:

- ADM2 cluster;
- country cluster with finite-cluster Student-t reference;
- country-level wild bootstrap.

Null rejection rates were approximately `0.020`, `0.000`, and `0.045`. No method was selected because it gave the smallest SE.

### Influence and falsification

No one country or high-influence ADM2 explains the canonical fatalities result. Period dependence is stronger: omitting `2011–2012` flips its sign.

The t−2 and future-treatment placebos are small, while the structured within-country treatment-history permutation null gives an empirical two-sided calibration-null `p ≈ 0.176`. This is not a causal randomization test.

### Sparse-outcome family

The canonical remains OLS fatalities (`+0.0176 SD`). Alternative predeclared representations are directionally coherent:

```text
OLS event count  +0.0549 SD
LPM any VAC      +2.04 percentage points
PPML event count IRR 1.348; AME +0.203 events
```

Raw coefficients across these estimators are not commensurate.

**Status: R0–R5 characterization closed.**

## Briggs (2017) — closed external positive control

Briggs supplied the first published-study benchmark where the target existed outside the FCV codebase.

### Exact statistical oracle

The supplied replication package reproduces the preferred published logged-value model:

```text
log richest share  +0.72034   SE 0.20316
log poorest share  +0.10460   SE 0.08568
within R²           0.23685
N = 195 regions / 17 countries
```

The replication data were kept evaluation-only.

### DHS measurement result

The independently rebuilt historical DHS regional wealth-quintile calculation using `HV270`, `HV005 × HV012`, and `HV024` reproduces published intermediate quantities essentially to rounding precision.

**Status: STRONG POSITIVE CONTROL.**

This is stronger than a generic “same sign” check: it independently validates historical source decoding, wealth semantics, person-equivalent weighting, region semantics, and country-within-quintile denominators.

### Full pragmatic analogue

Exact source/geography parity was not available for every layer. The final independent analogue therefore remained explicitly approximate:

```text
FCV analogue: 7 countries / 65 regions
Briggs:       17 countries / 195 regions
```

Known divergences include current GADM instead of exact historical survey-era/GAUL geography and source-informed historical AidData parent/child semantics.

The first analogue produced:

```text
log richest  +2.3275
log poorest  +0.9488
within R²     0.1419
```

Numerical parity is not claimed. The richest coefficient remained positive after Briggs-style trimming, equal-country weighting, and every country leave-one-out run (`1.8398–3.0837`). The poorest coefficient remained below richest in every bounded diagnostic.

**Status: QUALITATIVE POSITIVE CONTROL / CLOSED.**

Do not tune geography, source semantics, weights, or exclusions merely to move `2.3275` toward `0.7203`.

## What should be calibrated next

The current E2 and Briggs questions have been answered. The next queue should favor independent dimensions of evidence.

### 1. DHS spatial-exposure commissioning

Needed evidence includes:

- household↔cluster projection;
- displaced-coordinate-aware exposure;
- survey/exposure timing;
- PSU/strata/weight strategy;
- linkage/support/displacement-sensitivity gates;
- survey-compatible inference.

### 2. Current World Bank spatial-period measurement

Only worth advancing when it creates a genuinely independent donor comparison against the current GeoGCDF treatment path rather than another source-processing exercise with no new calibration question.

### 3. Breckner & Sunde (2019)

Still deferred. Its native `0.75° regular grid × calendar month` design should wait for truthful regular-grid geography and monthly/subannual period support.

### 4. Cross-source / convergent-validity benchmarks

Prefer cases where two independent measurement systems observe the same latent empirical quantity. This adds a different form of validity evidence than synthetic injection or published coefficient recovery.

## Residual archival task

The closed E2 real runs emitted a SciPy/NumPy compatibility warning. A supported-environment rerun is still required before exact numerical packets are treated as final numerical authority. This is archival acceptance work, not a reason to reopen R0–R5 or Briggs.

## Definition of ready for a new external benchmark

Before execution, confirm:

- exact source/release identity where available;
- lawful/local data availability;
- truthful empirical-boundary representation;
- any unavoidable substitution declared before comparing outcomes;
- source-specific joins/weights/denominators outside the generic kernel;
- Level-1 diagnostics that localize failure;
- Level-2 expected behavior declared in advance;
- Level-3 target/tolerance justified or explicitly unnecessary;
- `purpose = calibration` recorded.

See [September 2026 Calibration Wave Closure](calibration-wave-2026-09.md) for the detailed closed packet.
