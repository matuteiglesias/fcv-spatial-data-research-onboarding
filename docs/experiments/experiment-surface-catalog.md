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

Calibration benchmarks remain separate. A reproduced DHS report statistic or published-study pattern is an instrument test, not a new FCV hypothesis.

## Status vocabulary

| Status | Meaning |
|---|---|
| **REAL CALIBRATION COMPLETED — RECOVERED LANE** | Real historical/reconstructed experiment-calibration evidence exists. |
| **IMPLEMENTED — REAL RUN PENDING** | Current empirical + harness pieces exist, but a canonical real durable-artifact run is not recorded. |
| **PARTIAL — SCIENTIFIC USE NEEDED** | Empirical stack exists but exposure, roles, timing, uncertainty, or estimator use remains. |
| **PARTIAL — MISSING EMPIRICAL MEASUREMENT** | Source facts exist but a required reusable measurement/linkage is absent. |
| **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** | Architecture exists but a scientific/derived input is not stable. |
| **BLOCKED — SOURCE INGESTION NEEDED** | Source-specific empirical vertical is absent. |

## At a glance

| Scientific surface | Empirical state | Harness/design state | Current status |
|---|---|---|---|
| **China GeoGCDF commitments → ACLED violence** | contracted investment + ACLED measurements exist | fully contracted projection/treatment path + observability exist | **IMPLEMENTED — REAL CURRENT-ARTIFACT RUN PENDING** |
| **World Bank projects → ACLED violence** | WB source-native Silver exists; no current WB spatial/period measurement | ACLED side exists | **PARTIAL — MISSING EMPIRICAL MEASUREMENT** |
| **Pooled China + World Bank → ACLED** | independent sources; no canonical pooled product | union/multi-arm semantics undeclared | **BLOCKED — WB MEASUREMENT + DESIGN NEEDED** |
| **Jobs-related investment → ACLED** | annotation review infrastructure exists | validated annotation/use rule incomplete | **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** |
| **Afrobarometer respondent/EA exposure** | reusable substrate only | source-specific scientific path absent | **BLOCKED — SOURCE INGESTION NEEDED** |
| **DHS household/cluster exposure** | HR measurement arm externally commissioned; GPS/GC substrate exists | cross-grain exposure + displacement/survey design remain | **PARTIAL — SCIENTIFIC USE NEEDED** |
| **Recovered WB → ACLED E2** | recovered area-period surfaces exist | real historical calibration executed | **REAL CALIBRATION COMPLETED — RECOVERED LANE** |

# Surface 1 — GeoGCDF commitments → ACLED violence

**Status: IMPLEMENTED — REAL CURRENT-ARTIFACT RUN PENDING**

This is now the highest-value scientific-readiness surface.

## What already exists

- contracted GeoGCDF commitment-period measurement;
- contracted ACLED area-period-native-event measurement;
- explicit harness projection;
- downstream treatment derivation under declared eligibility/threshold rules;
- existing E2 estimator/gates;
- reusable observability engine with effect-size grids and `delta = 0`.

## What remains scientific rather than plumbing

A real reference experiment must still declare and expose:

- investment value/threshold used for exposure;
- treatment eligibility window;
- commitment-timing interpretation;
- ACLED taxonomy/value and outcome timing;
- comparison/counterfactual policy;
- hard/diagnostic gate thresholds;
- estimator and uncertainty interpretation.

Commitment is not automatically implementation onset, project-reported amount is not local administrative-unit spending, and project geometry touching multiple units does not allocate or multiply finance by itself.

## Next evidence-producing action

Use exact durable hash-backed inputs and produce one coherent packet:

```text
GeoGCDF DatasetRef + contract + run artifact
+
ACLED DatasetRef + contract + run artifact
        ↓
explicit experiment projection
        ↓
lineage / geography / period accounting
        ↓
treated-control + within-period support
        ↓
outcome coverage / structural-zero accounting
        ↓
pretreatment balance + placebo/falsification
        ↓
estimator if hard gates permit
        ↓
observability curve on the exact same real frame
```

The acceptance target is scientific coherence and characterized resolution, not a desired coefficient.

# Surface 2 — World Bank projects → ACLED violence

**Status: PARTIAL — MISSING EMPIRICAL MEASUREMENT**

World Bank Projects API Silver provides source-native project facts, dates, amounts, provenance, and source IDs.

The missing forward-looking piece is a trustworthy project-location → shared geography → shared period measurement comparable to the GeoGCDF path. Source-native project rows cannot simply be relabeled as treatment.

Recovered WBad/WBkg area-period evidence remains useful historical calibration, not validation of the rebuilt API path.

# Surface 3 — Pooled China + World Bank → ACLED

**Status: BLOCKED — WB MEASUREMENT + DESIGN NEEDED**

The empirical architecture intentionally keeps source families independent.

A pooled experiment would need independent contracted measurements, explicit overlap/reconciliation policy, downstream union/multi-arm semantics, preserved source-specific coverage, and ordinary experiment gates.

Historical labels such as `cnwb_pooled`, `wb_only`, and `cn_only` remain design vocabulary rather than upstream truth.

# Surface 4 — Jobs-related investment → ACLED

**Status: BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED**

Annotation infrastructure can support versioned labels such as `jobs_direct`, `jobs_indirect`, `jobs_any`, or `locally_implemented` when backed by explicit evidence and review provenance.

Even validated annotation does not create treatment by itself. Geography, timing, ambiguity handling, eligibility, comparison groups, and treatment derivation still belong in the experiment.

# Surface 5 — Afrobarometer respondent / EA exposure

**Status: BLOCKED — SOURCE INGESTION NEEDED**

The generic survey substrate can represent respondent/EA grain, weights, temporal semantics, and uncertain geography, but current source-native Afrobarometer ingestion, semantic mappings, geography linkage, and named experiment use remain absent.

Respondents should not be forced into the recovered GID × period panel merely to reuse old code.

# Surface 6 — DHS household / cluster exposure

**Status: PARTIAL — SCIENTIFIC USE NEEDED**

The DHS status changed materially on September 8, 2026.

## Measurement arm now commissioned

Canonical authoritative HR products now exist for Nigeria 2018, Uganda 2016, and Zambia 2018 using distributed `.DAT + .DCT` releases.

Initial semantic measurements:

```text
HV206 → household electricity access
HV270 → survey-relative wealth quintile
HV201 → drinking-water source code
```

The measurement system has reproduced **8 / 8 official-report external checks** across the three releases, including source-native household weighting, de-jure population weighting, urban-domain selection, and Nigeria release-local water categories.

That means the earlier blockers:

```text
protected HR acceptance
basic semantic acceptance
official-report commissioning
```

are now **passed for the HR measurement arm**.

## What remains before a substantive DHS exposure experiment

The remaining frontier is genuinely scientific-use work:

1. choose a named outcome/control/subgroup role from commissioned semantic measurements;
2. bind households to cluster-level geography through explicit scientific projection;
3. name the investment/exposure measurement;
4. declare a displacement-aware exposure uncertainty rule;
5. declare survey/exposure timing;
6. declare the inferential use of source weights, PSU, and strata;
7. gate support, linkage, missingness, displacement sensitivity, and semantic comparability;
8. choose a survey-compatible estimator only after those gates.

Public DHS coordinates remain displaced measurements. A reported-coordinate membership is not a true-location claim.

## Recommended sequence

```text
commissioned HR measurement arm
+ GPS/GC integration evidence
→ explicit household ↔ cluster projection
→ displacement-aware exposure rule
→ timing + survey-design strategy
→ survey-compatible gates
→ estimator
```

# Surface 7 — Recovered WB → ACLED E2

**Status: REAL CALIBRATION COMPLETED — RECOVERED LANE**

This remains the strongest historical real-data experiment-calibration checkpoint:

```text
24,852 area-periods
4,142 GIDs
4 declared WBad/WBkg cells passed hard gates
old 0.20-SD injection recovery = 30/30 in every cell
```

The WBad `amount_positive` cell retains the known YELLOW within-period support caveat in 2013–2014.

This evidence remains useful but is not automatically evidence for the newer current-artifact contracted path.

# Current experiment priority

The current pull order should be:

```text
1. real current-artifact GeoGCDF → ACLED gate run
2. observability curve on that exact real frame
3. interpret the gated reference estimate conservatively
4. use failures to identify the next measurement/geography/time/support bottleneck
5. advance DHS spatial exposure only through explicit cross-grain/displacement-aware design
```

Briggs (2017) remains a calibration benchmark and therefore belongs in the Calibration Benchmark Catalog rather than this substantive experiment catalog.

## How a new substantive surface enters this catalog

A new experiment should be able to name:

1. empirical measurements and their authority;
2. natural grain and coverage;
3. explicit scientific projection/linkage;
4. treatment/outcome/timing choices;
5. comparison/counterfactual policy;
6. current blocker or evidence state;
7. the next gate/run that could change that state.
