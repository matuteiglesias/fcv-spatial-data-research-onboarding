---
title: Experiment Surface Catalog
sidebar_position: 1
description: Human-facing catalog of FCV scientific experiment surfaces that are executable, historically exercised, or currently blocked.
last_verified: "2026-09-08"
---

# Experiment Surface Catalog

**Document status: CURRENT SCIENTIFIC EXPERIMENT CATALOG**

This page answers:

> **Which substantive FCV experiment surfaces can the current system support, and what still blocks them?**

Calibration benchmarks remain separate. A reproduced report statistic or published-study pattern is an instrument test, not a new FCV hypothesis.

## Status vocabulary

| Status | Meaning |
|---|---|
| **REAL CURRENT-ARTIFACT GATE RUN COMPLETED** | Current hash-backed empirical chain has passed the declared experiment gates. |
| **REAL CALIBRATION COMPLETED — RECOVERED LANE** | Historical/reconstructed experiment-calibration evidence exists. |
| **PARTIAL — SCIENTIFIC USE NEEDED** | Empirical stack exists but exposure, roles, timing, uncertainty, or estimator use remains. |
| **PARTIAL — MISSING EMPIRICAL MEASUREMENT** | Source facts exist but a required reusable measurement/linkage is absent. |
| **BLOCKED** | A scientific, annotation, source, or shared-infrastructure prerequisite is absent. |

## At a glance

| Scientific surface | Empirical state | Harness/design state | Current status |
|---|---|---|---|
| **China GeoGCDF commitments → ACLED violence** | current governed treatment + certified outcome Gold exist | E0–E6 + estimator + observability + bounded robustness implemented | **REAL CURRENT-ARTIFACT GATE RUN COMPLETED** |
| **World Bank projects → ACLED violence** | WB source-native Silver exists; no current WB spatial/period measurement | ACLED side exists | **PARTIAL — MISSING EMPIRICAL MEASUREMENT** |
| **Pooled China + World Bank → ACLED** | independent sources; no canonical pooled product | union/multi-arm semantics undeclared | **BLOCKED** |
| **Jobs-related investment → ACLED** | annotation review infrastructure exists | validated annotation/use rule incomplete | **BLOCKED** |
| **Afrobarometer respondent/EA exposure** | reusable substrate only | source-specific scientific path absent | **BLOCKED** |
| **DHS household/cluster exposure** | HR measurement arm externally commissioned; GPS/GC substrate exists | cross-grain exposure + displacement/survey design remain | **PARTIAL — SCIENTIFIC USE NEEDED** |
| **Recovered WB → ACLED E2** | recovered area-period surfaces exist | real historical calibration executed | **REAL CALIBRATION COMPLETED — RECOVERED LANE** |

# Surface 1 — GeoGCDF commitments → ACLED violence

**Status: REAL CURRENT-ARTIFACT GATE RUN COMPLETED**

## Empirical authority

The current reference uses:

- GADM 4.1 ADM2 geography;
- AidData GeoGCDF v3.0.1 commitment-area-period Gold;
- coverage-certified ACLED area-period-native-event Gold.

GeoGCDF explicitly excludes 22 unresolved project geometries under `resolution_policy = exclude_unresolved`; no commitment-time projects were unresolved. ACLED structural zeros are licensed only within an explicit certified country/period surface. The experiment lattice is restricted to the 47 countries covered by the treatment MeasurementContract rather than extending treatment-zero semantics to the extra GADM country.

## Reference design

```text
periods: 2003–2004 ... 2013–2014
PRIMARY treatment: project_count > 0
STRESS treatment: positive_reported_amount_project_count > 0
outcome: ACLED Violence against civilians fatalities at t+1
pre-outcome: same VAC fatalities at t-1
estimator: OLS + pre-outcome + period FE + country FE
uncertainty: ADM2-clustered covariance
```

## Real gate result

PRIMARY:

```text
N = 38,520
units = 6,420
countries = 47
treated = 7,667
controls = 30,853
mixed-support periods = 6 / 6
```

All E0–E6 gates were GREEN. Outcome zero share was 0.9222; pretreatment `|SMD|` was 0.0040; prior-outcome placebo was 0.0047 outcome SD; the 0.20-SD injected positive control recovered 30 / 30.

The positive-reported-amount STRESS treatment also passed all gates.

## Reference estimate

```text
effect = +0.550 fatalities
SE = 0.458
z ≈ 1.20
```

This is not strong substantive evidence. The first run emitted a SciPy/NumPy compatibility warning, so clean-environment numerical reproduction is required before the exact coefficient/SE packet is frozen.

## Current scientific frontier for this surface

The central question is no longer whether the surface can run. It is whether very small signals can be distinguished robustly from noise and uncertainty misspecification.

Priority sequence:

```text
clean numerical reproduction
→ full observability curve (0 ... 0.20 SD)
→ uncertainty calibration
→ country/period influence stability
→ stronger timing / negative controls
→ bounded outcome/model sensitivities
```

Commitment remains a commitment-time measure rather than implementation onset. Project counts do not imply local spending. The current real gate pass is instrument-readiness evidence, not causal validation.

# Surface 2 — World Bank projects → ACLED violence

**Status: PARTIAL — MISSING EMPIRICAL MEASUREMENT**

World Bank Projects API Silver provides source-native project facts, dates, amounts, provenance, and source IDs.

The missing forward-looking piece is a trustworthy project-location → shared geography → shared period measurement comparable to the GeoGCDF path. Recovered WBad/WBkg evidence remains historical calibration rather than validation of a rebuilt current WB path.

# Surface 3 — Pooled China + World Bank → ACLED

**Status: BLOCKED**

A pooled experiment would need independent contracted measurements, explicit overlap/reconciliation policy, preserved source-specific coverage, and downstream union/multi-arm semantics. Do not pool sources merely to increase apparent sample size.

# Surface 4 — Jobs-related investment → ACLED

**Status: BLOCKED**

Annotation infrastructure can support versioned labels when backed by explicit evidence and review provenance. Geography, timing, ambiguity handling, comparison groups, and treatment derivation still belong in the experiment.

# Surface 5 — Afrobarometer respondent / EA exposure

**Status: BLOCKED**

The generic survey substrate can represent respondent/EA grain, weights, temporal semantics, and uncertain geography, but current source-native Afrobarometer ingestion, semantic mappings, geography linkage, and named experiment use remain absent.

# Surface 6 — DHS household / cluster exposure

**Status: PARTIAL — SCIENTIFIC USE NEEDED**

The DHS HR measurement arm has reproduced 8 / 8 official-report checks across Nigeria, Uganda, and Zambia. The remaining frontier is downstream scientific use:

1. choose a named outcome/control/subgroup role;
2. bind households to cluster geography explicitly;
3. name the investment/exposure measurement;
4. declare a displacement-aware exposure uncertainty rule;
5. declare survey/exposure timing;
6. declare weight / PSU / strata use;
7. gate linkage, support, displacement sensitivity, and semantic comparability;
8. choose a survey-compatible estimator only after those gates.

Public DHS coordinates remain displaced measurements; reported-coordinate membership is not true-location authority.

# Surface 7 — Recovered WB → ACLED E2

**Status: REAL CALIBRATION COMPLETED — RECOVERED LANE**

```text
24,852 area-periods
4,142 GIDs
4 declared WBad/WBkg cells passed hard gates
old 0.20-SD injection recovery = 30/30 in every cell
```

This remains useful historical calibration but is no longer the strongest evidence that the current stack itself can execute a real experiment; the current GeoGCDF→ACLED gate run now provides that evidence.

# Current experiment priority

```text
1. finish current GeoGCDF→ACLED clean replication + observability
2. calibrate uncertainty and influence for tiny effects
3. strengthen falsification before increasing estimator complexity
4. advance DHS spatial exposure through explicit displacement/cross-grain design
5. build a current WB spatial-period measurement only when that comparison adds scientific value
```

Briggs (2017) remains a calibration benchmark and belongs in the Calibration Benchmark Catalog rather than this substantive experiment catalog.
