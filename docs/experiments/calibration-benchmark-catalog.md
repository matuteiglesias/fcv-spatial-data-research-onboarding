---
title: Calibration Benchmark Catalog
sidebar_position: 3
description: Human-facing catalog of FCV commissioning targets, published positive controls, and calibration prerequisites.
last_verified: "2026-09-08"
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
| Current GeoGCDF→ACLED `delta=0 ... 0.20 SD` grid | detector characterization | false positives, coverage, detection threshold | **IN PROGRESS** |
| Briggs (2017), aid targeting | published positive control | survey weighting, region geography, donor-project aggregation, regression | **UNLOCKED; SOURCE/DESIGN RECOVERY NEEDED** |
| Breckner & Sunde (2019) | published positive control | ACLED grid/month alignment, weather, FE estimation | **DEFERRED — GRID + MONTHLY SUPPORT NEEDED** |
| WBad ↔ WBkg treatment overlap | measurement agreement | inherited measurement stability | **REAL RECOVERED-LANE EVIDENCE** |

## DHS commissioning checkpoint — 8 / 8 GREEN

The initial DHS commissioning wave is complete across Nigeria 2018, Uganda 2016, and Zambia 2018. It commissions survey/release identity, source-native weights, de-jure population multipliers, urban-domain selection, wealth semantics, release-local drinking-water categories, denominator construction, and missing/unmapped accounting.

Published one-decimal percentages were tested at the implied ±0.05 percentage-point tolerance. All required cells recovered within tolerance. No joined protected microdata were persisted.

These are commissioning results, not FCV substantive findings.

## Current E2 real-frame calibration checkpoint

The current fully contracted GeoGCDF→ACLED reference has now passed its real E0–E6 gate run.

PRIMARY real frame:

```text
38,520 ADM2-period rows
6,420 ADM2 units
47 countries
6 treatment periods
7,667 treated
30,853 controls
```

Relevant known-behavior results:

- pretreatment `|SMD| = 0.0040`;
- prior-outcome placebo = `0.0047` outcome SD;
- 0.20-SD injected signal recovered 30 / 30 times.

The positive-reported-amount STRESS treatment also passed all gates and recovered the 0.20-SD signal 30 / 30.

This is the first current-artifact positive-control evidence on the exact real E2 frame. The full detector curve is still needed because one success point at 0.20 SD does not tell us the minimum useful resolution.

The first numerical run emitted a SciPy/NumPy compatibility warning. Clean-environment reproduction is required before the exact estimate/SE packet is treated as frozen numerical authority.

## Full detector characterization

The frozen real-frame grid is:

```text
0.00, 0.02, 0.05, 0.10, 0.20 SD
```

For each effect size the instrument should report:

- sign recovery;
- rejection / joint detection;
- CI coverage;
- recovery error;
- CI width;
- sample / cluster / treatment support.

`delta = 0` is an explicit synthetic null for false-positive and interval-coverage calibration.

## Next calibration family: uncertainty procedures

Once the detector curve is known, a small predeclared uncertainty suite should apply multiple inference procedures to the **same known-truth simulations**. Candidate families include:

- ADM2-clustered covariance;
- country-clustered or finite-cluster-aware inference;
- wild-cluster bootstrap;
- spatial-HAC / Conley-style covariance over a small declared bandwidth grid.

Selection must be based on null rejection and CI coverage behavior, not on which method gives the smallest SE on the observed coefficient.

## Briggs (2017) — preferred external published positive control

Briggs remains the preferred next external benchmark because internal synthetic recovery can still miss a self-consistent implementation error.

The benchmark stresses:

- multiple DHS survey identities;
- `HV270` wealth semantics;
- household weights and de-jure denominators;
- survey-region geography;
- historical donor-project geography/aggregation;
- country fixed effects;
- clustered uncertainty.

### Expected Level-2 behavior

- richer regional population share positively associated with aid allocation;
- poorest-quintile share does not show a corresponding stable pro-poor pattern.

### What remains

1. pin exact DHS surveys/releases;
2. recover historical donor-project releases;
3. reconstruct survey-region membership/denominators;
4. freeze reference regression and uncertainty procedure;
5. declare Level-2 recovery before execution;
6. require Level-3 coefficient compatibility only if source/design equivalence is strong enough.

## Breckner & Sunde (2019)

Still deferred. Its native `0.75° regular grid × calendar month` design should wait for truthful regular-grid geography and monthly/subannual period support.

## Recommended pull order

```text
1. reproduce the current E2 numerical packet in a supported environment
2. complete the real-frame 0 ... 0.20 SD observability curve
3. calibrate uncertainty procedures on known truths
4. add influence / omission and stronger falsification diagnostics
5. recover exact Briggs sources/design
6. run Briggs external positive control
7. reassess the instrument-health bottleneck
8. Breckner–Sunde only if grid/month infrastructure is then justified
```

## Definition of ready for a new external benchmark

Before execution, confirm:

- exact source/release identity;
- lawful/local data availability;
- truthful empirical-boundary representation;
- source-specific joins/weights/denominators outside the generic kernel;
- Level-1 diagnostics that localize failure;
- Level-2 expected behavior declared in advance;
- Level-3 target/tolerance justified or explicitly unnecessary;
- `purpose = calibration` recorded.
