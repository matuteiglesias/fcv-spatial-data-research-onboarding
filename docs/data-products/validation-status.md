---
title: Validation Status
sidebar_position: 3
description: Human-facing evidence and readiness board for empirical products, experiments, observability, and commissioning.
date: "2026-09-09"
---

# Validation Status

This page is the human-facing evidence ledger for the active FCV scientific instrument.

The project keeps distinct evidence lanes:

1. **current contract-backed architecture**;
2. **real experiment gate evidence**;
3. **observability / external commissioning**;
4. **recovered real-data calibration**;
5. **substantive estimator output**.

None is interchangeable with causal evidence.

## Evidence vocabulary

| Evidence | Establishes | Does not establish |
|---|---|---|
| Software / synthetic acceptance | Boundary logic behaves on controlled fixtures. | Real-source validity or a real effect. |
| Empirical materialization / QA | Source-backed product exists with provenance, hashes, coverage, QA. | Correct scientific role. |
| Real experiment gate run | Declared design has real support, coverage, timing, and falsification evidence. | Automatic causal validity. |
| Synthetic observability | Known injected truth has characterized recovery behavior. | That the real effect exists. |
| External commissioning | Apparatus reproduces authoritative external measurements/behavior. | A new FCV substantive result. |
| Estimator result | Declared estimator produced an estimate after gates. | Robust causal truth. |

# Track A — Current contract-backed architecture

## Shared foundations

`empirical-data-contracts` and `spatial-data-foundation` provide shared contracts, geography/time, membership, and provenance.

**Status: AVAILABLE / REAL EMPIRICAL USE**

## Current GeoGCDF treatment measurement

AidData GeoGCDF v3.0.1 has a governed commitment-area-period Gold product over GADM 4.1 ADM2.

Key policy:

```text
resolution_policy = exclude_unresolved
unresolved geography projects = 22
unresolved commitment time = 0
excluded unresolved projects = 22
```

Structural zeros are licensed relative to the resolved eligible project universe. The 22 exclusions remain explicit rather than silently repaired.

**Status: REAL MATERIALIZATION GREEN WITH EXPECTED YELLOW RESOLUTION-EXCLUSION QA**

## ACLED outcome measurement

The source-native sparse Gold remains conservative with `absent_row_semantics = unknown`.

A separate coverage-certified derivative licenses structural zeros only inside an explicit 48-country / full-period certification surface.

**Status: REAL SPARSE + CERTIFIED MEASUREMENTS GREEN**

# Track B — Real current-artifact E2 experiment

Reference analysis scope is the 47-country GeoGCDF treatment-authorized universe intersected with governed GADM and certified ACLED coverage.

Primary model frame:

```text
38,520 ADM2-period rows
6,420 ADM2 units
47 countries
6 treatment periods
7,667 treated
30,853 controls
```

## Gate ledger

| Gate | State | Real metric |
|---|---|---|
| E0 input universe | GREEN | 0 pre/post missing; declared coverage resolved |
| E1 treatment support | GREEN | 7,667 treated / 30,853 controls |
| E2 within-period support | GREEN | 6 / 6 periods mixed |
| E3 outcome sparsity | GREEN | 0.9222 zero share |
| E4 pretreatment balance | GREEN | `|SMD| = 0.0040` |
| E5 pre-outcome placebo | GREEN | `0.0047` outcome SD |
| E6 0.20-SD recovery | GREEN | 30 / 30 |

The positive-reported-amount STRESS treatment also passed all gates.

**Status: REAL CURRENT-ARTIFACT E0–E6 PASS**

## Canonical estimator

```text
effect = +0.54999 fatalities
SE     = 0.45819
z      = 1.20
effect ≈ +0.0176 outcome SD
```

This is not strong substantive evidence.

**Status: REAL ESTIMATE PRODUCED / SMALL-IMPRECISE CANONICAL SIGNAL**

# Track C — Current E2 R0–R5 characterization

## R0 reference lock

The exact analysis identity and PRIMARY frame were frozen before characterization.

**Status: COMPLETE**

## R1 detector curve

| Injected truth | Canonical rejection / detection |
|---|---:|
| 0.00 SD | 0.02; CI coverage 0.98 |
| 0.02 SD | 0.25 |
| 0.05 SD | 0.96 |
| 0.10 SD | 1.00 |
| 0.20 SD | 1.00 |

**Status: COMPLETE — EMPIRICAL RESOLUTION BOUNDARY CHARACTERIZED**

## R2 uncertainty calibration

Predeclared families:

```text
ADM2 cluster              null rejection ≈ 0.020
country cluster + t       null rejection ≈ 0.000
wild country bootstrap    null rejection ≈ 0.045
```

Point estimates were identical; uncertainty behavior differed. No procedure was selected because it gave a more favorable SE.

**Status: COMPLETE — CHARACTERIZED**

## R3 influence / concentration

No single country or high-influence ADM2 explains the canonical coefficient. Period dependence is materially stronger; omitting 2011–12 flips the fatalities sign.

**Status: COMPLETE — GEOGRAPHIC CONCENTRATION LIMITED / TEMPORAL HETEROGENEITY MATERIAL**

## R4 falsification

```text
t−2 placebo              ≈ 0.0039 outcome SD
future-treatment placebo ≈ 0.0034 outcome SD
structured-null p        ≈ 0.176
```

The empirical structured-null probability is calibration evidence only, not a causal randomization-test p-value.

**Status: COMPLETE — TIMING CLEAN / CANONICAL NOT EXTREME UNDER STRUCTURED NULL**

## R5 sparse-outcome family

| Outcome representation | Natural result |
|---|---|
| fatalities OLS | `+0.0176 SD` |
| VAC event-count OLS | `+0.0549 SD` |
| any-VAC LPM | `+2.04 pp` |
| VAC event-count PPML | IRR `1.348`; AME `+0.203` events |

The canonical fatalities result is not replaced. Raw coefficients are not cross-model comparable.

**Status: COMPLETE — POSITIVE INCIDENCE/COUNT PATTERN CLEARER THAN FATALITY SEVERITY**

# Track D — External commissioning / positive controls

## DHS official-report commissioning

```text
Nigeria  4 / 4 GREEN
Uganda   2 / 2 GREEN
Zambia   2 / 2 GREEN
-------------------
TOTAL    8 / 8 GREEN
```

**Status: EXTERNAL COMMISSIONING PASS**

## Briggs (2017): DHS wealth measurement

Independent historical DHS reconstruction using `HV270`, `HV005 × HV012`, and `HV024` recovers published regional wealth-quintile quantities essentially to rounding precision.

**Status: STRONG POSITIVE CONTROL**

## Briggs (2017): full aid-targeting analogue

Published oracle:

```text
log richest  +0.72034
log poorest  +0.10460
within R²     0.23685
N = 195 / 17 countries
```

Independent pragmatic analogue:

```text
log richest  +2.3275
log poorest  +0.9488
within R²     0.1419
N = 65 / 7 countries
```

Known divergences are explicit: current GADM instead of exact historical region ontology, source-informed AidData parent/child semantics, and a reduced defensible country/region set.

The rich-over-poor ordering survives trimming, equal-country weighting, and every leave-one-country-out run; richest LOO range `1.8398–3.0837`.

**Status: QUALITATIVE POSITIVE CONTROL / NUMERICAL PARITY NOT CLAIMED / CLOSED**

# Track E — Recovered/legacy-backed calibration

The recovered WB→ACLED E2 checkpoint remains genuine historical calibration evidence:

```text
24,852 area-periods
4,142 GIDs
4 declared WBad/WBkg cells passed hard gates
0.20-SD injection recovery = 30/30 in every cell
```

This is recovered-lane evidence, not a substitute for current-artifact characterization.

# Current readiness summary

| Surface / instrument test | Current state |
|---|---|
| DHS HR real-source materialization | **PASS — 3 RELEASES** |
| DHS official-report commissioning | **PASS — 8 / 8 GREEN** |
| GeoGCDF current treatment Gold | **PASS — 22 EXPLICIT EXCLUSIONS** |
| ACLED certified outcome Gold | **PASS** |
| Current GeoGCDF → ACLED E0–E6 | **PASS — REAL FRAME** |
| R0 exact reference lock | **COMPLETE** |
| Full real-frame observability curve | **COMPLETE / CHARACTERIZED** |
| Uncertainty calibration | **COMPLETE / CHARACTERIZED** |
| Influence / omission stability | **COMPLETE / CHARACTERIZED** |
| Timing / structured-null falsification | **COMPLETE / CHARACTERIZED** |
| Sparse-outcome family | **COMPLETE / CHARACTERIZED** |
| Briggs DHS measurement | **STRONG POSITIVE CONTROL** |
| Briggs full analogue | **QUALITATIVE POSITIVE CONTROL / CLOSED** |
| Supported-environment exact numerical rerun | **ARCHIVAL HOUSEKEEPING PENDING** |
| DHS spatial exposure experiment | **PARTIAL — SCIENTIFIC USE PENDING** |
| Current World Bank spatial-period measurement | **PARTIAL — MISSING EMPIRICAL MEASUREMENT** |
| Breckner–Sunde 2019 | **DEFERRED — GRID + MONTHLY SUPPORT NEEDED** |

# Next evidence transitions

1. Reproduce the closed numerical packet in a supported environment for archival acceptance.
2. Advance DHS spatial-exposure commissioning with explicit displacement, cross-grain linkage, timing, and survey design.
3. Build a current World Bank spatial-period measurement only when it supplies an independent donor comparison.
4. Undertake Breckner–Sunde only after regular-grid geography and calendar-month semantics exist truthfully.
5. Prefer cross-source / convergent-validity benchmarks over more E2 specification variants.

> **This board states what the instrument has demonstrated. It does not collapse materialization, experiment gates, detectability, uncertainty calibration, external controls, and substantive inference into one claim that “the pipeline works.”**

See [September 2026 Calibration Wave Closure](../experiments/calibration-wave-2026-09.md) for the detailed closed packet.
