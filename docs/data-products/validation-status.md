---
title: Validation Status
sidebar_position: 3
description: Human-facing evidence and readiness board for empirical products, experiments, observability, and commissioning.
date: "2026-09-08"
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

## Reference estimator

PRIMARY calibration estimate:

```text
effect = +0.54999 fatalities
SE     = 0.45819
z      = 1.20
```

This is not strong substantive evidence. The first execution also emitted a SciPy/NumPy compatibility warning; a clean supported-environment reproduction is required before exact numerical estimates/SEs are frozen as canonical.

**Status: REAL ESTIMATE PRODUCED / NUMERICAL REPRODUCTION IN PROGRESS**

# Track C — Africa Observability Lab

## DHS external commissioning

```text
Nigeria  4 / 4 GREEN
Uganda   2 / 2 GREEN
Zambia   2 / 2 GREEN
-------------------
TOTAL    8 / 8 GREEN
```

**Status: EXTERNAL COMMISSIONING PASS**

## Real E2 positive control

The current real E2 frame recovered the predeclared `0.20 SD` synthetic treatment signal 30 / 30 times.

**Status: REAL-FRAME ONE-POINT OBSERVABILITY PASS**

## Full real-frame detector curve

Frozen grid:

```text
0.00, 0.02, 0.05, 0.10, 0.20 SD
```

This will characterize false-positive behavior, CI coverage, sign recovery, rejection, joint detection, and recovery error on the exact PRIMARY frame.

**Status: IN PROGRESS**

## Next observability capabilities

- uncertainty/inference calibration across a small predeclared covariance family;
- leave-one-country/period-out influence characterization;
- stronger timing / negative-control falsification;
- published positive control via Briggs (2017).

# Track D — Recovered/legacy-backed calibration

The recovered WB→ACLED E2 checkpoint remains genuine historical calibration evidence:

```text
24,852 area-periods
4,142 GIDs
4 declared WBad/WBkg cells passed hard gates
0.20-SD injection recovery = 30/30 in every cell
```

This is recovered-lane evidence, not a substitute for the now-completed current-artifact gate run.

# Current readiness summary

| Surface / instrument test | Current state |
|---|---|
| DHS HR real-source materialization | **PASS — 3 RELEASES** |
| DHS official-report commissioning | **PASS — 8 / 8 GREEN** |
| GeoGCDF current treatment Gold | **PASS — 22 EXPLICIT EXCLUSIONS** |
| ACLED certified outcome Gold | **PASS** |
| Current GeoGCDF → ACLED E0–E6 | **PASS — REAL FRAME** |
| Current reference estimate | **PRODUCED / CLEAN NUMERICAL REPLICATION PENDING** |
| 0.20-SD real-frame recovery | **PASS — 30 / 30** |
| Full real-frame observability curve | **IN PROGRESS** |
| Uncertainty calibration | **NEXT CAPABILITY** |
| Influence / omission stability | **NEXT CAPABILITY** |
| Briggs 2017 positive control | **UNLOCKED / SOURCE-DESIGN RECOVERY NEEDED** |
| Breckner–Sunde 2019 | **DEFERRED — GRID + MONTHLY SUPPORT NEEDED** |
| DHS spatial exposure experiment | **PARTIAL — SCIENTIFIC USE PENDING** |

# Next evidence transitions

1. Reproduce the current E2 numerical packet in a supported environment.
2. Complete the full real-frame observability curve including `delta = 0`.
3. Calibrate uncertainty procedures under known injected truths.
4. Add country/period omission and influence diagnostics.
5. Add stronger timing and negative-control falsification.
6. Run Briggs (2017) as the first published-study positive control.
7. Broaden estimator families only when the diagnostics show a specific need.

> **This board states what the instrument has demonstrated. It does not collapse materialization, experiment gates, detectability, uncertainty calibration, and substantive inference into one claim that “the pipeline works.”**
