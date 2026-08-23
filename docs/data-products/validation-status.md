---
title: Validation Status
sidebar_position: 3
description: Human-facing evidence and readiness board for empirical products, experiments, observability, and commissioning.
date: "2026-08-23"
---

# Validation Status

This page is the human-facing evidence ledger for the active FCV scientific instrument.

The project now has **three different evidence lanes** that must remain separate:

1. **current contract-backed architecture** — whether the rebuilt empirical + experiment machinery behaves coherently;
2. **observability / external commissioning** — whether the instrument can recover known injected or external behavior;
3. **recovered real-data calibration** — historical/reconstruction-backed E1/E2 evidence that predates the fully contracted stack.

None of these lanes is interchangeable with substantive causal evidence.

See [Africa Observability Lab](../experiments/observability-lab.md), [Calibration Benchmark Catalog](../experiments/calibration-benchmark-catalog.md), and [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md).

## Evidence vocabulary

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| **Software / synthetic acceptance** | Code and boundary logic behave as declared on controlled fixtures. | Real-source acceptance or a real effect. |
| **Empirical materialization / QA** | A source-backed product exists with provenance, hashes, coverage, and QA. | Correct experiment role or identification. |
| **Experiment gate run** | A declared design has support, coverage, timing, and diagnostics on real data. | Automatic causal validity. |
| **Synthetic observability** | Known injected truth can or cannot be recovered with a certain probability/quality. | That the real treatment effect exists. |
| **External commissioning** | The instrument reproduces an authoritative external measurement/pattern at declared recovery levels. | A new FCV substantive result. |
| **Estimator result** | A declared estimator produced an estimate for a gated experiment. | Robust causal truth. |

For restricted data, synthetic acceptance is not protected-source acceptance. For DHS, codebook-backed empirical meaning is not experiment-role assignment.

## Status vocabulary

| Status | Meaning |
|---|---|
| **GREEN / PASS** | The named required gate or recovery target passed. Permission to continue, not causal validation. |
| **YELLOW** | Usable diagnostic evidence exists but a material caveat remains. |
| **RED / FAIL** | A required gate or recovery level failed. |
| **NOT RUN** | The relevant real-data or benchmark execution has not occurred. |
| **BLOCKED** | A required empirical/scientific capability is not ready enough to run meaningfully. |
| **SYNTHETIC PASS** | Controlled implementation acceptance only. |

## Track A — Current contract-backed architecture

### A1. Shared foundations

`empirical-data-contracts` and `spatial-data-foundation` provide shared contracts, geography/time, membership, and provenance.

**Status: INFRASTRUCTURE AVAILABLE**

### A2. FCV empirical kernel and source verticals

Contract-backed source snapshots, natural grains, output hashes, QA, coverage, and failure visibility are implemented across current empirical verticals.

**Status: IMPLEMENTED / SYNTHETIC PASS**

### A3. ACLED → harness projection

```text
ACLED source-native measurement
→ validated bundle
→ explicit taxonomy/value/timing projection
→ experiment frame
```

**Status: SYNTHETIC PASS**  
**Canonical real current-artifact E1/E2 run: NOT YET RECORDED**

### A4. Contracted investment → treatment derivation

The harness can derive treatment downstream from a projected contracted empirical measurement under explicit eligibility and derivation rules.

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Real fully contracted investment → ACLED reference run: NOT YET RECORDED**

### A5. DHS empirical stack

Implemented and synthetically accepted:

- HR household Silver with truthful physical `source_row_id` grain;
- GC cluster measurements and temporal semantics;
- GE/GPS reported-coordinate geography with displacement evidence;
- HR/GC/GPS integration QA without a mega-table;
- initial DHS-VII codebook-backed household semantic measurements.

Initial semantic measurements:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

**Status: EMPIRICAL STACK + INITIAL SEMANTICS IMPLEMENTED / SYNTHETIC PASS**  
**Protected real-source integrated acceptance: NOT RUN / NOT RECORDED**  
**Current DHS scientific experiment: NOT RUN**

## Track B — Africa Observability Lab

Track B asks whether the apparatus can recover known behavior. Every benchmark is explicitly `purpose = calibration`.

### B1. Calibration Lab kernel

The harness now has a source-agnostic calibration benchmark substrate with:

- `commissioning`;
- `positive_control`;
- `negative_control`;
- `synthetic_injection`;
- `measurement_agreement`.

Recovery is tracked independently at:

```text
Level 1 — pipeline
Level 2 — qualitative behavior
Level 3 — quantitative compatibility
```

Sanitized calibration manifests/results record benchmark spec hash, empirical dataset identities, parameters, seed/code revision where supplied, and result hash without persisting protected tables or local paths.

**Status: IMPLEMENTED / SYNTHETIC PASS**

### B2. Instrument-health reporting

A suite can be summarized across:

- source/contract integrity;
- commissioning;
- positive controls;
- negative controls;
- synthetic detectability;
- measurement agreement;
- known limitations.

There is deliberately no aggregate instrument score.

**Status: IMPLEMENTED**

### B3. Reusable E2 observability instrument

The old single `0.20 SD` signal-recovery check is now a caller-declared effect-size grid over the existing E2 design.

For each repetition/effect size it can record effect recovery, SE/CI, sign recovery, rejection, joint detection, CI coverage, recovery error, sample size, clusters, outcome SD, and support.

Durable outputs include a detection curve and null-calibration summary.

**Status: IMPLEMENTED / SYNTHETIC PASS**

The fully contracted investment + ACLED E2 reference path is explicitly covered by synthetic acceptance.

### B4. Synthetic null calibration

`delta = 0` is a first-class known synthetic null for calibrating false-positive behavior and CI coverage around zero.

**Status: IMPLEMENTED / SYNTHETIC PASS**

This does not assert that the real FCV social relationship is null.

### B5. Official DHS commissioning

First recommended target:

```text
Nigeria DHS 2018
household electricity = 59.4%
```

This benchmark tests survey/release identity, `HV206`, `HV005` weighting, denominator definition, and missing-value handling.

Additional designed Nigeria 2018 targets include detailed drinking-water categories and urban de jure wealth-quintile distribution.

**Status: DESIGNED / NOT RUN**

#### Current blocker

Harness issue #16 is the shared prerequisite: calibration needs a generic provenance-validated **auxiliary dataset** input in addition to semantic measurement bundles.

The kernel should accept source-native HR facts through verified `DatasetRef + RunManifest + bytes` without fabricating a `MeasurementContract`; DHS joins/weights/denominators remain adapter logic.

**Status: BLOCKED ON GENERIC AUXILIARY-INPUT SEAM + PROTECTED LOCAL EXECUTION**

### B6. Briggs (2017) published positive control

The first recommended published-study survey benchmark tests DHS weighting/denominators, survey-region geography, donor-project aggregation, and published regression behavior.

Required first acceptance is qualitative recovery of the reported rich-region aid-targeting pattern; Level-3 coefficient compatibility is conditional on exact historical source/design recovery.

**Status: IMPLEMENTATION HANDOFF READY AFTER DHS COMMISSIONING + ISSUE #16**

### B7. Breckner & Sunde (2019)

This complementary ACLED/weather positive control stresses event coverage, event-to-space assignment, structural zeros, external weather alignment, regular-grid geography, monthly periods, and fixed-effects estimation.

Its native design is `0.75° grid × month`.

Current reusable time/geography foundations do not yet represent that design truthfully.

**Status: DEFERRED / BLOCKED ON SHARED REGULAR-GRID + MONTHLY PERIOD CAPABILITIES**

The project should not fake grid cells as GADM or months as annual periods.

## Track C — Recovered/legacy-backed real-data calibration

The recovered area-period system has genuine real-data E1/E2 calibration evidence and remains scientifically useful as a historical instrument checkpoint.

### Real E2 calibration matrix

| Treatment source/definition | Role | Real-data gate state |
|---|---|---|
| WBad `record_present` | PRIMARY | hard gates passed |
| WBkg `record_present` | PRIMARY | hard gates passed |
| WBad `amount_positive` | STRESS | hard gates passed; YELLOW within-period caveat in 2013–2014 |
| WBkg `amount_positive` | STRESS | hard gates passed |

Common model sample:

```text
24,852 area-periods
4,142 GIDs
```

Historical one-point synthetic recovery at the predeclared `0.20 SD` truth was `30/30` in every cell.

That old check remains evidence, but the new reusable observability instrument is a broader characterization API rather than merely this one historical point.

### Calibration estimates

| Cell | Effect | SE | Effect SD | Approx. MDE80 SD |
|---|---:|---:|---:|---:|
| WBad `record_present` | +0.3180 | 0.2474 | +0.0178 | 0.0387 |
| WBkg `record_present` | -0.0744 | 0.2390 | -0.0042 | 0.0374 |
| WBad `amount_positive` | +0.1591 | 0.2250 | +0.0089 | 0.0352 |
| WBkg `amount_positive` | +0.0665 | 0.2506 | +0.0037 | 0.0392 |

All reported 95% intervals included zero; observed effect sizes were below the approximate detectable scale reported at that checkpoint.

### Measurement agreement

For historical WBad/WBkg `record_present`:

```text
exact area-period agreement  ~0.889
treated-union Jaccard        ~0.600
```

This is now naturally interpretable as a `measurement_agreement` calibration lane, while remaining recovered-data evidence.

## Current readiness summary

| Surface / instrument test | Current state |
|---|---|
| Fully contracted GeoGCDF → ACLED experiment | **IMPLEMENTED / REAL RUN PENDING** |
| Fully contracted E2 observability curve | **IMPLEMENTED / SYNTHETIC PASS / REAL CURRENT-ARTIFACT CHARACTERIZATION PENDING** |
| Nigeria 2018 DHS electricity commissioning | **DESIGNED / BLOCKED ON #16 + LOCAL DATA** |
| Briggs 2017 positive control | **READY AFTER DHS COMMISSIONING PREREQUISITES** |
| Breckner–Sunde 2019 positive control | **DEFERRED — GRID + MONTHLY SUPPORT NEEDED** |
| DHS scientific exposure experiment | **PARTIAL — empirical semantics exist; protected acceptance + cross-grain scientific use pending** |
| Recovered WB → ACLED E2 | **REAL CALIBRATION COMPLETED — RECOVERED LANE** |

## Next evidence transitions

The highest-value evidence transitions are now:

1. close calibration auxiliary-input issue #16;
2. execute the Nigeria 2018 electricity commissioning benchmark locally;
3. record one real protected DHS integrated acceptance without protected values;
4. run current durable GeoGCDF + ACLED artifacts through the fully contracted experiment and observability path;
5. implement Briggs only after the survey instrument has passed simpler external commissioning;
6. let calibration discrepancies determine the next engineering/scientific bottleneck.

## Interpretation rule

> **The purpose of this board is to state exactly what the instrument has demonstrated—not to collapse software tests, commissioning, experiment gates, and substantive inference into one claim that “the pipeline works.”**
