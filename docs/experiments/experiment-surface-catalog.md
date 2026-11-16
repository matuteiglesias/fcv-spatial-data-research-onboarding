---
title: Experiment Surface Catalog
sidebar_position: 1
description: Human-facing catalog of FCV scientific experiment surfaces that are executable, historically exercised, or currently blocked.
last_verified: "2026-11-16"
---

# Experiment Surface Catalog

**Document status: CURRENT SCIENTIFIC EXPERIMENT CATALOG**

This page answers:

> **Which substantive FCV experiment surfaces can the current system support, and what still blocks them?**

Calibration benchmarks remain separate. A reproduced report statistic or published-study pattern is an instrument test, not a new FCV hypothesis.

## Status vocabulary

| Status | Meaning |
|---|---|
| **REAL CURRENT-ARTIFACT CHARACTERIZATION COMPLETED** | Current hash-backed empirical chain has passed the declared gates and completed the bounded R0–R5 characterization wave. |
| **REAL CALIBRATION COMPLETED — RECOVERED LANE** | Historical/reconstructed experiment-calibration evidence exists. |
| **PARTIAL — SCIENTIFIC USE NEEDED** | Empirical stack exists but exposure, roles, timing, uncertainty, or estimator use remains. |
| **PARTIAL — MISSING EMPIRICAL MEASUREMENT** | Source facts exist but a required reusable measurement/linkage is absent. |
| **BOUNDED OBSERVATIONAL ANALYSIS COMPLETED** | Source-locked current analysis and influence audits completed; causal identification or equivalence not established. |
| **STRUCTURAL BRIDGE COMPLETED / SCIENTIFIC LABELS OPEN** | Project/source-level categories propagate losslessly, but validated theory-specific annotations and a jobs-effect study remain open. |
| **BLOCKED** | A scientific, annotation, source, or shared-infrastructure prerequisite is absent. |

## At a glance

| Scientific surface | Empirical state | Harness/design state | Current status |
|---|---|---|---|
| **China GeoGCDF commitments → ACLED violence** | current governed treatment + certified outcome Gold exist | E0–E6 + R0–R5 characterization completed | **REAL CURRENT-ARTIFACT CHARACTERIZATION COMPLETED** |
| **World Bank projects → ACLED violence** | WB geocoded project Silver and source-locked ADM2 approval measurement now exist | WB can enter common source-native W5 panel; no independent causal effects established | **BOUNDED OBSERVATIONAL ANALYSIS COMPLETED (joint source study)** |
| **Pooled China + World Bank → ACLED** | source-locked 44,940 ADM2×biennia, two independent sources, certified subsequent VAC | W5 E0–E4, four donor-presence arms, 16 synthetic tests and exact main E0/E1 replay | **BOUNDED OBSERVATIONAL ANALYSIS COMPLETED** |
| **Jobs-related investment → ACLED** | W6 project identity/sector-proxy bridge: 2,535 projects, 19,588 project-area-period links | source counts exactly conserved; project-level direct/indirect jobs annotations and estimation not yet done | **STRUCTURAL BRIDGE COMPLETED / SCIENTIFIC LABELS OPEN** |
| **Afrobarometer respondent/EA exposure** | reusable substrate only | source-specific scientific path absent | **BLOCKED** |
| **DHS household/cluster exposure** | HR measurement arm externally commissioned; GPS/GC substrate exists | cross-grain exposure + displacement/survey design remain | **PARTIAL — SCIENTIFIC USE NEEDED** |
| **Recovered WB → ACLED E2** | recovered area-period surfaces exist | real historical calibration executed | **REAL CALIBRATION COMPLETED — RECOVERED LANE** |

# Surface 1 — GeoGCDF commitments → ACLED violence

**Status: REAL CURRENT-ARTIFACT CHARACTERIZATION COMPLETED**

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

## Canonical estimate

```text
effect = +0.550 fatalities
SE = 0.458
z ≈ 1.20
≈ +0.0176 outcome SD
```

This is not strong substantive evidence.

## Closed R0–R5 characterization

The central question is no longer whether the surface can run or whether its small-effect credibility ladder still needs to be built. That ladder is now executed.

### Detector resolution

```text
~0.02 SD → weak detector region
~0.05 SD → usually observable
~0.10 SD → essentially certain under frozen synthetic worlds
```

### Uncertainty

ADM2-cluster, finite-country-cluster, and wild-country-bootstrap procedures were characterized on identical known-truth worlds. They differ in null size/power without changing the point estimate; no procedure was selected because it produced a favorable observed-data SE.

### Influence

No one country or high-influence ADM2 explains the canonical coefficient. Period dependence is materially stronger; omitting 2011–12 flips the fatalities sign.

### Falsification

Deeper pre-treatment and future-treatment placebos remain small. The canonical coefficient is not especially extreme under a structured within-country complete-treatment-history permutation null (`p ≈ 0.176`, calibration interpretation only).

### Sparse outcomes

The canonical remains fatalities OLS. Alternative predeclared representations are directionally positive and clearer on incidence/count margins:

```text
OLS event count  +0.0549 SD
LPM any VAC      +2.04 percentage points
PPML event count IRR 1.348
```

These do not replace the canonical model.

## Scientific interpretation for this surface

The instrument is healthier than the substantive fatalities evidence is strong. The actual canonical estimate lies in the same approximately `0.02 SD` range that the detector itself says is difficult to distinguish reliably. Timing falsification is reassuring; temporal heterogeneity and the structured-null result constrain stronger interpretation.

The next useful work for FCV should therefore add a different empirical/calibration dimension rather than continue proliferating E2 models.

A supported-environment rerun of the exact numerical packet remains archival housekeeping because the original R0–R5 executions emitted a SciPy/NumPy compatibility warning.

Commitment remains a commitment-time measure rather than implementation onset. Project counts do not imply local spending. The completed characterization is instrument evidence, not causal validation.

# Surface 2 — World Bank projects → ACLED violence

**Status: BOUNDED OBSERVATIONAL ANALYSIS COMPLETED (W5 donor-source comparison)**

In addition to the broader World Bank Projects API, the AidData World Bank Geocoded v1.4.2 source now has a source-locked project, geography and approval-period measurement joined to a common ADM2×biennium frame alongside AidData China GeoGCDF v3.0.1. The certified VAC outcome is measured subsequently. The WB spatial source is independently versioned; this is not a generic current WB API-to-location solution for all future years.

The bounded W5 E0–E4 comparison is runnable from the [FCV Experiment Harness](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/W5_CN_WB_VAC.md). Its first-run estimates are observational: no causal donor effect or donor equivalence is established. Earlier WBad/WBkg calibration remains a separate historical reference.

# Surface 3 — China + World Bank source-comparison → ACLED

**Status: BOUNDED OBSERVATIONAL ANALYSIS COMPLETED (W5 E0–E4; not causal)**

W5 has a balanced 44,940 ADM2×two-year panel in 47 African countries, with explicit China-only, WB-only, both-source and neither-source-recorded project-presence groups and country-clustered subsequent VAC models. The primary adjusted association China-only minus WB-only is +0.656 percentage points (95% CI −1.699 to +3.012; p=.578). Both donor-specific estimates are negative and nonsignificant. No finding of zero effects or equivalence follows from this result.

The complete code, 16 targeted passing synthetic tests, full GitHub CI and locked historic aggregate [result index](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/results/w5_china_wb_vac_20261115.json) are integrated in the canonical harness. Its E0/E1 exact empirical replay matched original coefficients, covariance, confidence intervals, p-values and source/frame hashes. E4 influence checks support a bounded incidence conclusion, but fatality magnitudes and asymmetric donor geocoding remain sensitive. The private inputs, location records and full numerical outputs are not redistributed.

# Surface 4 — Jobs-related investment → ACLED

**Status: STRUCTURAL BRIDGE COMPLETED / SCIENTIFIC LABELS OPEN (W6)**

Eric's core comparison—explicit/direct and plausible indirect employment-relevance versus other projects—remains the next substantive research target. Historical annotation rules and a 20-project calibration sample are available, but neither is a complete current project-level classification. The current W6 source-native sector policy is a **coarse screening proxy**, not validated direct/indirect jobs evidence.

W6 now links 2,535 source projects through 21,440 source-location records to 19,588 deduplicated project–ADM2–period exposures, conserving original source-specific project counts in each of the 44,940 W5 panel cells. It retains mixed/uncertain categories and flags 1,022 cross-recipient-country project mappings (174 Chinese projects). This data-structure gate passed; no employment-effect regression, matched design or Afrobarometer jobs outcome has been estimated.

See the [W6 project classification bridge contract](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W6_JOBS_CLASSIFICATION_BRIDGE.md) and the [classification status](../continuation/project-classification-status.md). The next scientific gate is support/uncertainty review, followed by a predeclared jobs-related comparison. Raw source-derived project and area-period data remain outside public Git.

# Surface 5 — Afrobarometer respondent / EA exposure

**Status: BLOCKED**

The generic survey substrate can represent respondent/EA grain, weights, temporal semantics, and uncertain geography, but current source-native Afrobarometer ingestion, semantic mappings, geography linkage, and named experiment use remain absent.

# Surface 6 — DHS household / cluster exposure

**Status: PARTIAL — SCIENTIFIC USE NEEDED**

The DHS HR measurement arm has reproduced 8 / 8 official-report checks across Nigeria, Uganda, and Zambia. The historical Briggs measurement benchmark also independently recovered regional wealth-location quantities essentially to rounding precision.

The remaining frontier is downstream scientific use:

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

This remains useful historical calibration but is no longer the strongest evidence that the current stack itself can execute a real experiment; the current GeoGCDF→ACLED gate and R0–R5 wave now provide that evidence.

# Current experiment priority

```text
1. reconcile 2023 jobs-related classification guidance and the 20-example review sample
2. use the W6 source-locked project identity/sector proxy bridge to quantify support and uncertainty
3. adjudicate only the project-level classification decisions needed for a defensible direct/indirect/any-jobs exposure
4. predeclare a jobs-versus-other-project VAC comparison and its counterfactual/measurement gates
5. assess matched designs and Afrobarometer extensions as separate follow-on decisions
```

The donor-only W5 work is a documented baseline, not the central research hypothesis. Do not run additional donor-only specifications just to generate movement.

Briggs (2017) is now a closed calibration benchmark and belongs in the Calibration Benchmark Catalog rather than this substantive experiment catalog. Breckner–Sunde remains a future calibration benchmark contingent on truthful grid/month infrastructure.
