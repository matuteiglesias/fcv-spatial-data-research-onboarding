---
title: Validation Status
sidebar_position: 3
description: Human-facing evidence and readiness board for empirical products, experiments, observability, and commissioning.
date: "2026-09-08"
---

# Validation Status

This page is the human-facing evidence ledger for the active FCV scientific instrument.

The project maintains three distinct evidence lanes:

1. **current contract-backed architecture** — whether rebuilt empirical + experiment machinery behaves coherently;
2. **observability / external commissioning** — whether the instrument recovers known injected or external behavior;
3. **recovered real-data calibration** — historical/reconstruction-backed E1/E2 evidence that predates the fully contracted stack.

None is interchangeable with substantive causal evidence.

## Evidence vocabulary

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| Software / synthetic acceptance | Boundary logic behaves on controlled fixtures. | Real-source acceptance or a real effect. |
| Empirical materialization / QA | A source-backed product exists with provenance, hashes, coverage, and QA. | Correct experiment role or identification. |
| Experiment gate run | A declared design has real support, coverage, timing, and diagnostics. | Automatic causal validity. |
| Synthetic observability | Known injected truth has characterized recovery behavior. | That the real treatment effect exists. |
| External commissioning | The apparatus reproduces an authoritative external measurement/pattern at declared recovery levels. | A new FCV substantive result. |
| Estimator result | A declared estimator produced an estimate for a gated experiment. | Robust causal truth. |

## Status vocabulary

| Status | Meaning |
|---|---|
| **GREEN / PASS** | Required gate/recovery target passed. Permission to continue, not causal validation. |
| **YELLOW** | Usable evidence exists with a material caveat. |
| **RED / FAIL** | A required gate/recovery level failed. |
| **NOT RUN** | The relevant real-data execution has not occurred. |
| **BLOCKED** | A required empirical/scientific capability is not ready enough to run meaningfully. |
| **SYNTHETIC PASS** | Controlled implementation acceptance only. |

# Track A — Current contract-backed architecture

## A1. Shared foundations

`empirical-data-contracts` and `spatial-data-foundation` provide shared contracts, geography/time, membership, and provenance.

**Status: INFRASTRUCTURE AVAILABLE**

## A2. FCV empirical kernel and source verticals

Contract-backed source snapshots, natural grains, output hashes, QA, coverage, and failure visibility are implemented across current empirical verticals.

**Status: IMPLEMENTED / REAL-SOURCE EVIDENCE EXISTS ACROSS MULTIPLE VERTICALS**

## A3. ACLED → harness projection

```text
ACLED source-native measurement
→ validated bundle
→ explicit taxonomy/value/timing projection
→ experiment frame
```

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Canonical real current-artifact E1/E2 run: NOT YET RECORDED**

## A4. Contracted investment → treatment derivation

The harness can derive treatment downstream from projected contracted investment measurements under explicit eligibility and treatment rules.

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Real current-artifact GeoGCDF → ACLED reference run: NOT YET RECORDED**

## A5. DHS HR measurement stack

The initial DHS-VII semantic registry remains deliberately small:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

Canonical HR source authority is now the official fixed-width release representation (`.DAT + .DCT`), not convenience CSV derivatives.

Real protected-source HR materialization has passed for:

| Survey | Rows | Columns | State |
|---|---:|---:|---|
| Nigeria 2018 | 40,427 | 4,972 | GREEN |
| Uganda 2016 | 19,588 | 4,021 | GREEN |
| Zambia 2018 | 12,831 | 3,316 | GREEN |

Real semantic products also passed for all three releases:

| Survey | Semantic rows | Registry measurements | QA |
|---|---:|---:|---|
| Nigeria 2018 | 121,281 | 3 | GREEN |
| Uganda 2016 | 58,764 | 3 | GREEN |
| Zambia 2018 | 38,493 | 3 | GREEN |

No missing/source-missing/unmapped semantic rows were observed for these initial measurements in the commissioned releases.

**Status: REAL PROTECTED-SOURCE HR + INITIAL SEMANTIC ACCEPTANCE PASSED**

Important boundary: this does **not** yet validate a DHS spatial-exposure experiment. GPS displacement, household↔cluster projection, exposure timing, and survey-design-aware inference remain downstream scientific-use questions.

# Track B — Africa Observability Lab

## B1. Calibration Lab kernel

The harness provides source-agnostic calibration benchmark support for:

- commissioning;
- positive control;
- negative control;
- synthetic injection;
- measurement agreement.

Recovery remains separated into Level 1 pipeline, Level 2 qualitative behavior, and Level 3 quantitative compatibility.

**Status: IMPLEMENTED / SYNTHETIC PASS**

## B2. Instrument-health reporting

Instrument-health summaries remain multidimensional: source integrity, commissioning, positive/negative controls, synthetic detectability, measurement agreement, and known limitations.

**Status: IMPLEMENTED**

## B3. Reusable E2 observability instrument

Caller-declared effect-size grids and a first-class `delta = 0` synthetic null are implemented.

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Real current-artifact characterization: PENDING**

## B4. Official DHS commissioning

The originally planned first target—Nigeria 2018 household electricity at 59.4%—has now been exceeded by a three-release commissioning wave.

### Nigeria 2018 — 4 / 4 GREEN

- national household electricity;
- national de-jure electricity;
- urban de-jure wealth-quintile distribution;
- detailed drinking-water source distribution.

The drinking-water benchmark used an explicit release-local `HV201` mapping derived from distributed Nigeria release documentation. Every observed positive-weight source code was mapped; no improved/unimproved or safe/unsafe semantics were inferred.

### Uganda 2016 — 2 / 2 GREEN

- national household electricity;
- national de-jure electricity.

### Zambia 2018 — 2 / 2 GREEN

- national household electricity;
- national de-jure electricity.

### Combined result

```text
Nigeria  4 / 4
Uganda   2 / 2
Zambia   2 / 2
---------------
TOTAL    8 / 8 GREEN
```

All cells recovered within the predeclared ±0.05 percentage-point tolerance implied by one-decimal publication precision. Missing measurement weight and unmapped measurement/category weight were zero throughout. No joined protected microdata were persisted.

**Status: EXTERNAL COMMISSIONING PASSED — 8 / 8 GREEN ACROSS THREE RELEASES**

### Harness issue #16 after this checkpoint

Issue #16 remains a useful generic provenance-validated auxiliary-input seam for the Calibration Lab, especially for future multi-input/published-study adapters. It is **not** a blocker to the DHS commissioning evidence already produced through the governed empirical commissioning API.

## B5. Briggs (2017) published positive control

Briggs remains the preferred first published-study survey positive control because it stresses multiple DHS survey identities, survey weighting/denominators, survey-region geography, donor-project aggregation, country fixed effects, and clustered uncertainty.

The simpler DHS measurement system has now passed its prerequisite commissioning tests.

**Status: SCIENTIFICALLY UNLOCKED; EXACT HISTORICAL SOURCE/DESIGN RECOVERY STILL REQUIRED BEFORE EXECUTION**

## B6. Breckner & Sunde (2019)

The benchmark remains deferred because its native design is a `0.75° grid × calendar month` surface. FCV should not fake regular grid cells as GADM or months as annual periods.

**Status: DEFERRED / BLOCKED ON SHARED REGULAR-GRID + MONTHLY PERIOD CAPABILITIES**

# Track C — Recovered/legacy-backed real-data calibration

The recovered WB→ACLED E2 checkpoint remains genuine real-data calibration evidence.

Common model sample:

```text
24,852 area-periods
4,142 GIDs
```

Four declared WBad/WBkg cells passed hard gates; the old predeclared `0.20 SD` injection recovered 30/30 in every cell. WBad `amount_positive` retains its known YELLOW within-period support caveat in 2013–2014.

This remains recovered-lane evidence and should not be relabeled as current fully contracted acceptance.

# Current readiness summary

| Surface / instrument test | Current state |
|---|---|
| DHS HR real-source materialization | **PASS — 3 RELEASES** |
| DHS initial semantic measurements | **PASS — 3 RELEASES** |
| DHS official-report commissioning | **PASS — 8 / 8 GREEN** |
| Fully contracted GeoGCDF → ACLED experiment | **IMPLEMENTED / REAL CURRENT-ARTIFACT RUN PENDING** |
| Fully contracted E2 observability curve | **IMPLEMENTED / SYNTHETIC PASS / REAL FRAME CHARACTERIZATION PENDING** |
| Briggs 2017 positive control | **UNLOCKED AFTER DHS COMMISSIONING / SOURCE RECOVERY NEEDED** |
| Breckner–Sunde 2019 positive control | **DEFERRED — GRID + MONTHLY SUPPORT NEEDED** |
| DHS scientific exposure experiment | **PARTIAL — COMMISSIONED MEASUREMENT ARM; CROSS-GRAIN/SPATIAL SCIENTIFIC USE PENDING** |
| Recovered WB → ACLED E2 | **REAL CALIBRATION COMPLETED — RECOVERED LANE** |

# Next evidence transitions

1. **Freeze the DHS 8/8 commissioning checkpoint as completed evidence.**
2. Run current durable **GeoGCDF + ACLED** artifacts through the fully contracted real experiment gates.
3. Run the reusable observability curve, including `delta = 0`, on that exact real prepared frame.
4. Interpret any coefficient only after the gate and detector-characterization packets are visible.
5. Recover exact inputs/design for **Briggs (2017)** and implement it as the first published-study positive control.
6. Advance DHS substantive exposure only after household↔cluster linkage, displacement-aware exposure rules, timing, and survey-design strategy are declared.

## Interpretation rule

> **This board states exactly what the instrument has demonstrated. It does not collapse software tests, empirical QA, commissioning, experiment gates, observability, and substantive inference into one claim that “the pipeline works.”**
