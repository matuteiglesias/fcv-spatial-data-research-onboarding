---
title: Experiment Surface Catalog
sidebar_position: 1
description: Human-facing catalog of FCV research questions that are executable, historically exercised, or currently blocked.
last_verified: "2026-08-23"
---

# Experiment Surface Catalog

**Document status: CURRENT SCIENTIFIC SURFACE CATALOG**  
**Last verified: 2026-08-23**

This page answers:

> **What research questions can the current system actually support, what has already been run, and what is still blocked?**

A scientific surface is not an upstream treatment table. It is a declared relationship between empirical measurements plus experiment-level choices about projection, treatment derivation, timing, eligibility, outcomes, controls, and gates.

For empirical availability, start with the [Empirical Product Catalog](../data-products/product-catalog.md). For detailed gate evidence, see [Validation Status](../data-products/validation-status.md).

## Status vocabulary

| Surface status | Meaning |
|---|---|
| **REAL CALIBRATION COMPLETED — RECOVERED LANE** | A real-data run exists on the reconstructed historical empirical system. It is evidence, but not proof that the current contract-backed path has been run. |
| **IMPLEMENTED — REAL RUN PENDING** | The current contract-backed empirical and harness capabilities needed for the surface exist, but a canonical real durable-artifact run has not yet been recorded. |
| **PARTIAL — MISSING EMPIRICAL MEASUREMENT** | Source facts exist, but a required geography/time measurement or linkage is not yet available. |
| **PARTIAL — EMPIRICAL STACK IMPLEMENTED / SCIENTIFIC USE NEEDED** | Source-native empirical products exist, but experiment projection, role assignment, uncertainty policy, harness integration, or real-data acceptance remains. |
| **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** | The architecture can support the design, but a named scientific definition or validated derived empirical object is still missing. |
| **BLOCKED — SOURCE INGESTION NEEDED** | The reusable substrate exists, but the source-native vertical has not yet been built. |

## At a glance

| Research surface | Treatment-side empirical state | Outcome-side empirical state | Current status |
|---|---|---|---|
| **China GeoGCDF commitments → ACLED violence** | contracted GeoGCDF geography-period measurement exists | contracted ACLED measurement + projection exists | **IMPLEMENTED — REAL RUN PENDING** |
| **World Bank projects → ACLED violence** | WB source-native project Silver exists; current spatial measurement not yet asserted | contracted ACLED exists | **PARTIAL — MISSING EMPIRICAL MEASUREMENT** |
| **Pooled China + World Bank → ACLED violence** | source families exist independently; no canonical pooled upstream product | contracted ACLED exists | **BLOCKED / DESIGN + WB MEASUREMENT NEEDED** |
| **Jobs-related investment → ACLED violence** | annotation review infrastructure exists; validated jobs-use measurement not yet established | contracted ACLED exists | **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** |
| **Afrobarometer respondent/EA design** | survey substrate exists; source-native ingestion absent | outcome/exposure depends on named design | **BLOCKED — SOURCE INGESTION NEEDED** |
| **DHS household/cluster design** | HR + GC + GPS + integration QA implemented; initial household semantic measurements exist | experiment role/exposure/harness use not yet defined | **PARTIAL — EMPIRICAL STACK IMPLEMENTED / SCIENTIFIC USE NEEDED** |
| **Recovered WB → ACLED calibration** | recovered WBad/WBkg area-period surfaces | recovered ACLED analysis surface | **REAL CALIBRATION COMPLETED — RECOVERED LANE** |

---

## Surface 1 — China GeoGCDF commitments → ACLED violence

**Status: IMPLEMENTED — REAL RUN PENDING**

### Research question shape

Can a declared geography-period measure of Chinese development-finance project commitments be used as an experiment-specific treatment/exposure and related to subsequent violence against civilians?

### Required empirical measurements

**Investment side:** [AidData GeoGCDF](../data-products/products/aiddata-geogcdf.md), with source geometry, shared geography relation, shared period assignment, contracted commitment-period Gold, and explicit structural-zero coverage rules.

**Violence side:** [ACLED](../data-products/products/acled.md), projected explicitly to the selected native event taxonomy/value/timing.

### Experiment choices that still remain choices

The harness must declare treatment value/threshold, eligibility window, treatment timing, ACLED taxonomy/value, outcome timing, target lattice, comparison policy, gate thresholds, and estimator.

### Current implementation support

The harness supports a `FullyContractedPanelExperimentSpec` in which treatment and outcome arrive as validated empirical bundles. Treatment derivation is explicit downstream.

### Major caveats

- commitment timing is not automatically implementation onset;
- source-reported amount is not local administrative-unit spending;
- polygons may expose multiple units without allocating/multiplying finance;
- structural zeros depend on explicit GeoGCDF coverage conditions;
- a real current-artifact run still needs to be recorded.

### Next evidence-producing action

Run the durable GeoGCDF + ACLED artifacts through the fully contracted harness and persist support/gate outputs.

---

## Surface 2 — World Bank projects → ACLED violence

**Status: PARTIAL — MISSING EMPIRICAL MEASUREMENT**

### Research question shape

Can World Bank project presence or a declared source measurement be used to construct a WB-only investment contrast and relate it to subsequent ACLED violence?

### What exists now

[World Bank Projects API Silver](../data-products/products/worldbank-projects.md) provides authoritative project facts at one-project-per-source-ID grain with source dates, amounts, raw reconstructible representation, and provenance.

The ACLED contracted outcome path is available.

### What is missing

The current product catalog does **not** assert a World Bank project-location → shared geography → shared period contracted measurement comparable to GeoGCDF.

Therefore source-native Silver cannot simply be relabeled as a WB treatment table.

### Historical evidence

Recovered WBad/WBkg area-period measurements were used in real E1/E2 calibration. That belongs to the recovered lane and does not prove acceptance of the rebuilt WB Projects API path.

### Next evidence-producing action

Build or identify an authoritative World Bank spatial/temporal measurement product, preserve coverage semantics, then express treatment derivation downstream.

---

## Surface 3 — Pooled China + World Bank → ACLED violence

**Status: BLOCKED / DESIGN + WB MEASUREMENT NEEDED**

The current empirical architecture intentionally keeps China/AidData and World Bank as independent source families. It does not assert cross-source sameness, additivity, common spatial spending interpretation, source absence as no investment, or a universal `cnwb_pooled` upstream column.

A current pooled experiment would need independent contracted measurements, explicit overlap semantics, a downstream union/multi-arm derivation, source-specific coverage, and the normal ACLED projection/gates.

Historical vocabulary such as `cnwb_pooled`, `wb_only`, and `cn_only` remains useful design vocabulary, not required upstream schema.

---

## Surface 4 — Jobs-related investment → ACLED violence

**Status: BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED**

`fcv-empirical-data` has a derived annotation-candidate review surface downstream of source-native Silver. Empirical annotations may later include `jobs_direct`, `jobs_indirect`, `jobs_any`, or `locally_implemented` with explicit provenance.

Even a validated `jobs_any = true` would not by itself imply `GID × period treatment = 1`. The experiment must still declare timing, geography, ambiguity handling, eligibility, comparison groups, and treatment derivation.

### Next evidence-producing action

Complete a validated current annotation product for a named source measurement, then bind it to an explicit experiment rule.

---

## Surface 5 — Afrobarometer respondent / EA design

**Status: BLOCKED — SOURCE INGESTION NEEDED**

The [Survey-Native Substrate](../data-products/products/survey-substrate.md) can represent respondent/EA grains, survey files/snapshots, sampling metadata, source weights, variable metadata, temporal semantics, and uncertain geography.

Still missing are source-native Afrobarometer ingestion, current codebook mapping, geography-link materialization, named exposure/timing design, downstream variable roles, and estimator/weight choice.

The design should not begin by forcing respondents into the recovered GID × period panel.

---

## Surface 6 — DHS household / cluster design

**Status: PARTIAL — EMPIRICAL STACK IMPLEMENTED / SCIENTIFIC USE NEEDED**

### Research question shape

Can DHS household outcomes be related to a declared spatial exposure while respecting household/cluster grain, cluster covariates, survey timing, displacement uncertainty, and sampling design?

### What exists now

The [DHS Empirical Stack](../data-products/products/dhs-overview.md) has now closed its first integrated empirical mini-wave.

**Source-native products**

- [DHS Household Recode (HR)](../data-products/products/dhs-hr.md): household observations with source design facts and a truthful durable `source_row_id` grain while preserving defective/missing source household IDs as anomalies.
- [DHS Geospatial Covariates (GC)](../data-products/products/dhs-gc.md): cluster-level covariates with explicit temporal semantics and no area-period coercion.
- [DHS GE/GPS Geography](../data-products/products/dhs-gps.md): reported-coordinate geography plus displacement/uncertainty metadata, with no true-location claim.

**Cross-product integration QA**

The empirical layer can now verify HR + GPS + GC together without constructing a mega-table:

- one explicit `SurveyCatalogEntry`;
- truthful `DatasetRef` grain claims;
- HR-only / GPS-only / GC-only cluster support preserved;
- `DHSCLUST` kept distinct from `DHSID`;
- textual identity mismatches such as `001` versus `1` surfaced rather than silently normalized.

This means the experiment layer no longer has to invent its own hidden source-linkage assumptions merely to know whether the three empirical products line up.

**Initial codebook-backed household semantic measurements**

The empirical repository now exposes [DHS Household Semantic Measurements](../data-products/products/dhs-household-measurements.md):

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

These are documented empirical meanings, not experiment roles.

The materialized semantic product uses `source_row_id × measurement_id`, verifies the content-hashed HR input, preserves explicit missing/unmapped statuses, and emits `MeasurementContract` evidence.

### What is no longer the blocker

The current DHS surface is **not** blocked by:

- absence of HR ingestion;
- absence of GC cluster measurements;
- absence of reported-coordinate geography;
- lack of any safe cross-product QA layer;
- total absence of reusable variable semantics.

Those capabilities now exist synthetically.

### What still blocks a scientific experiment

1. **Named scientific question and survey/release.** A concrete DHS experiment must still choose its population and survey scope.
2. **Experiment role assignment.** The initial semantic registry tells us what selected variables mean; it does not decide whether electricity access, wealth quintile, water source, or another future measurement is the outcome/control/moderator.
3. **Additional variables only if needed.** The registry is deliberately small; new definitions/recode families should be pulled by the chosen question rather than generated indiscriminately.
4. **Household ↔ cluster scientific projection.** Source linkage evidence exists, but the harness still needs an explicit cross-grain projection for the analysis.
5. **Exposure measurement.** Investment/conflict/environmental exposure must be named and linked explicitly.
6. **Spatial uncertainty.** Reported DHS coordinates may be displaced; nearest/radius designs require a displacement-aware uncertainty/sensitivity rule.
7. **Timing.** Survey fieldwork, GC temporal semantics, and treatment/exposure timing must be reconciled in the experiment spec.
8. **Survey design.** Source weights/PSU/strata remain source facts; analysis weights and variance strategy remain downstream choices.
9. **Protected real-data acceptance.** GitHub synthetic acceptance does not substitute for a local real-source run.

### A plausible first forward-looking DHS path

```text
verified DHS survey
   │
   ├─ HR household Silver
   │      ↓
   │  codebook-backed household measurements
   │      ↓
   │  experiment selects role
   │
   ├─ GC cluster Silver
   │      ↓
   │  experiment selects controls/moderators if justified
   │
   └─ GPS cluster Silver
          ↓
      reported-coordinate geography

HR + GC + GPS
      ↓
integration QA
      ↓
protected real-source acceptance
      ↓
household ↔ cluster experiment projection
      ↓
displacement-aware exposure linkage
      ↓
survey-design-aware gates / estimator
```

### Next evidence-producing action

Pick one named DHS survey/release and one concrete scientific question. Run HR + GC + GPS locally, generate the integration report, materialize the initial household semantic measurements, and record only non-sensitive lineage/support/QA evidence.

Then implement the smallest harness-side projection and exposure rule required for that question.

That is now the shortest path from the current empirical stack to a genuinely testable DHS experiment.

---

## Surface 7 — Recovered WB → ACLED calibration

**Status: REAL CALIBRATION COMPLETED — RECOVERED LANE**

This is the strongest existing real-data calibration evidence, but it predates the fully source-native contracted upstream architecture.

The common E2 model sample reported:

```text
24,852 area-periods
4,142 GIDs
```

Four predeclared WB measurement cells passed hard gates; WBad `amount_positive` carried a YELLOW within-period support caveat because 2013–2014 had zero treated units.

Synthetic 0.20-SD signal recovery was `30/30` in every calibration cell. All reported 95% coefficient intervals included zero and estimated effects were below the approximate detectable scale reported by that calibration.

This evidence provides real-data gate/calibration history and measurement-agreement evidence, but should not be relabeled as a current contract-backed run.

See [Validation Status](../data-products/validation-status.md) for the detailed matrix and estimates.

## How new surfaces enter this catalog

A proposed research question should be added here only when it can name:

1. the empirical measurement(s) it requires;
2. their natural grain and coverage semantics;
3. the explicit experiment projection/linkage;
4. the treatment/outcome/timing choices owned downstream;
5. the present blocker or evidence state;
6. the next run that could change that state.

This keeps the catalog centered on executable science rather than a wishlist of regressions.
