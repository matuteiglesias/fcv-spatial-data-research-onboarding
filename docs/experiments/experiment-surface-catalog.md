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

**Next research line (QUEUED, not executed):** [Jobs–Stability Identification Feasibility](./jobs-stability-identification-feasibility.md) evaluates whether a credible J−N jobs-versus-no-investment comparison is possible given project-label evidence, placement selection, spatial interference, outcome alignment and observability. The [workgraph](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/workgraphs/jobs_stability_identification_feasibility_v0.json) is planning-only; W5–W8 completed results and evidence statuses are unchanged.

## Research handoff: W5–W8 completed benchmarks

**The current research frontier is now a completed ADM2 three-group comparison, alongside the earlier W5 donor and W7 sector fixed-effects benchmarks.** See the [current W5–W8 research report](./adm2-jon-comparisons-2026-11.md) for definitions, populations, coefficients, country-cluster uncertainty and previous-violence diagnostics.

1. **W5 — source-locked donor baseline DONE.** The China-only minus WB-only next-VAC contrast is +0.656 pp (95% CI [−1.699,+3.012], p=.578), in 44,940 ADM2-biennium observations / 47 countries.
2. **W6 — project identity bridge DONE.** Full 2,535 donor-qualified project ledger and 19,588 unique project–ADM2–period links; count conservation and source geography verified/flagged.
3. **W7 — harmonized sector-proxy models DONE.** Frozen broad/narrow candidate productive/employment sector contrasts with ADM2 and country×period fixed effects: broad **CN −0.025 pp** (p=.986) and **WB −1.502 pp** (p=.552), both inconclusive. Full-sector mapping audit passed; direct/indirect source-grounded jobs labels remain a separate measurement layer.
4. **W8 — common-support J/O/N ADM2 comparison DONE.** China 128 complete country-period strata, 39 countries, J/O/N **1,448 / 2,576 / 13,082** cells. WB 11 strata, 10 countries, **86 / 87 / 484** cells. Standardized China contrasts **J−N +0.09 pp**, **O−N +9.64 pp**, **J−O −9.55 pp**; the **previous-period J−O −9.96 pp** demonstrates the importance of baseline group composition. The WB sample is thin. No extra ADM3 design or timing shift was needed for this bounded result.

The study uses the current financing period and following ACLED VAC outcome. W8 uses **same J-target country-period weights across J/O/N**; the third contrast equals the first minus the second. It is a standardized descriptive mean comparison, not W7's fixed-effects coefficient. This keeps the scientific products distinguishable instead of counting them as competing evidence of the same estimand.

**Read in order:** [Current ADM2 results](./adm2-jon-comparisons-2026-11.md) → [Experimental Design Status](../continuation/experimental-design-status.md) → [Project Classification Status](../continuation/project-classification-status.md). Historical annotation instructions remain in the [coding protocol](../continuation/annotation-project-classification-protocol.md).


---

## Status vocabulary

| Status | Meaning |
|---|---|
| **REAL CURRENT-ARTIFACT CHARACTERIZATION COMPLETED** | Current hash-backed empirical chain has passed the declared gates and completed the bounded R0–R5 characterization wave. |
| **REAL CALIBRATION COMPLETED — RECOVERED LANE** | Historical/reconstructed experiment-calibration evidence exists. |
| **PARTIAL — SCIENTIFIC USE NEEDED** | Empirical stack exists but exposure, roles, timing, uncertainty, or estimator use remains. |
| **PARTIAL — MISSING EMPIRICAL MEASUREMENT** | Source facts exist but a required reusable measurement/linkage is absent. |
| **BOUNDED OBSERVATIONAL ANALYSIS COMPLETED** | Source-locked current analysis and influence audits completed; causal identification or equivalence not established. |
| **BOUNDED DESCRIPTIVE ANALYSIS COMPLETED / SCIENTIFIC JOBS LABELS OPEN** | Sector-proxy ADM2 J/O/N common-support means, uncertainty and prior-VAC diagnostics completed; evidence-based jobs/wages layer remains separate. |
| **STRUCTURAL BRIDGE COMPLETED / SCIENTIFIC LABELS OPEN** | Project/source-level categories propagate losslessly, but validated theory-specific annotations and a jobs-effect study remain open. |
| **BLOCKED** | A scientific, annotation, source, or shared-infrastructure prerequisite is absent. |

## At a glance

| Scientific surface | Empirical state | Harness/design state | Current status |
|---|---|---|---|
| **China GeoGCDF commitments → ACLED violence** | current governed treatment + certified outcome Gold exist | E0–E6 + R0–R5 characterization completed | **REAL CURRENT-ARTIFACT CHARACTERIZATION COMPLETED** |
| **World Bank projects → ACLED violence** | WB geocoded project Silver and source-locked ADM2 approval measurement now exist | WB can enter common source-native W5 panel; no independent causal effects established | **BOUNDED OBSERVATIONAL ANALYSIS COMPLETED (joint source study)** |
| **Pooled China + World Bank → ACLED** | source-locked 44,940 ADM2×biennia, two independent sources, certified subsequent VAC | W5 E0–E4, four donor-presence arms, 16 synthetic tests and exact main E0/E1 replay | **BOUNDED OBSERVATIONAL ANALYSIS COMPLETED** |
| **Sector composition and ADM2 J/O/N → ACLED** | W6 project ledger (2,535), W7 six-family sector proxy and W8 matched groups | W7 fixed-effects comparisons and W8 J/O/N standardized mean contrasts completed; direct/indirect employment review still open | **BOUNDED DESCRIPTIVE ANALYSIS COMPLETED / SCIENTIFIC JOBS LABELS OPEN** |
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

# Surface 4 — Sector composition and ADM2 J/O/N → ACLED

**Status: W6 PROJECT BRIDGE DONE / W7 SECTOR-PROXY VAC COMPLETE / W8 THREE-GROUP COMMON-SUPPORT COMPLETE / REVIEWED EMPLOYMENT LABELS OPEN**

The current source-qualified pipeline propagates **2,535 donor projects** into **19,588 project–ADM2–period links**, preserving 44,940 W5 area-period observations and per-donor project counts. A frozen sector crosswalk distinguishes candidate employment/productivity activity from complementary other sectors, while keeping mixed/multi-channel WB projects explicit. The outcome-blind crosswalk audit covered all source-mapped project identities and a 100-project nested semantic check, with no definite mapping errors.

**W7** estimates donor-specific candidate-only minus other-sector-only next-period VAC contrasts on the full panel with **ADM2 and country×finance-biennium fixed effects** and country-clustered CR1 uncertainty: **CN −0.025 pp** (CI [−2.913,+2.862], p=.986), **WB −1.502 pp** (CI [−6.551,+3.548], p=.552). The WB broad contrast has only 10 same-period co-supporting countries and 11 country-periods, qualifying its interpretation.

**W8** constructs exactly co-supported country×finance-biennium strata for each donor, comparing J = candidate-sector-only projects, O = other-sector-only, and N = no recorded China/WB donor exposure through the current period within observed history. All three groups are standardized using **one common J-target set of stratum weights**. China (128 strata, 39 countries) has standardized next-VAC means **13.54% / 23.08% / 13.45%** for J/O/N, yielding **J−N +0.09**, **O−N +9.64**, **J−O −9.55 pp**. The previous-VAC J−O gap is **−9.96 pp** on the same units and weights: the large subsequent level gap corresponds closely to an earlier area-risk difference. WB (11 strata, 10 countries) has J−O **−3.98 pp** under the broad rule, but the sample is thin and the narrow rule gives **+1.64 pp**.

The detailed [ADM2 comparison page](./adm2-jon-comparisons-2026-11.md) includes **Kish effective sample sizes**, bootstrap intervals, alternative control definitions, and W7/W8 estimand differences. Canonical [W8 source/results and tests](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W8_ADM2_JON_SCIENTIFIC_RESULTS_20261116.md) and [W7 technical results](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W7_FROZEN_PROXY_RESULTS_20261116.md) maintain versioned authority.

**Remaining evidence distinction:** W7/W8 J and O are source-sector categories, not proven locally paid employment. The project editorial ledger currently has 0/2,535 evidence-reviewed explicit/indirect jobs labels, so direct/indirect employment mechanisms and actual local wages remain a distinct scientific measurement question. The original 20-row sample and 120-row calibration queue do not substitute for a full reviewed project universe. Historical W6 high/low/uncertain counts and the preliminary −0.787 pp China screen are archived, superseded by the frozen W7 broad/narrow policies. Source-level geography mismatches are flagged, not silently deleted.

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
