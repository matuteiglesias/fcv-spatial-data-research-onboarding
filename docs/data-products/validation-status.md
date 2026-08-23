---
title: Validation Status
sidebar_position: 3
description: Human-facing evidence and readiness board for FCV empirical measurements and experiment surfaces.
date: "2026-08-23"
---

# Validation Status

This page is the human-facing readiness and evidence ledger for active FCV empirical work.

The project has **two different evidence tracks** that must not be conflated:

1. **recovered/legacy-backed real-data calibration evidence** from the reconstructed area-period system; and
2. **current contract-backed architecture evidence** from the newer source-native empirical stack and harness boundary.

The first has real-data E1/E2 calibration results. The second has stronger provenance and scientific boundaries but has not yet been promoted here as a completed canonical real-data experiment run over the current upstream artifacts.

For the system map, see [Research System Architecture](../research-system.md). For empirical objects, see the [Empirical Product Catalog](./product-catalog.md). For DHS specifically, see [DHS Empirical Stack](./products/dhs-overview.md) and [DHS Household Semantic Measurements](./products/dhs-household-measurements.md).

## Evidence vocabulary

Four kinds of evidence should remain separate.

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| **Software / synthetic acceptance** | Code and scientific-boundary logic behave as declared on controlled fixtures. | Real FCV data quality or a substantive research effect. |
| **Empirical materialization / QA** | A source-backed measurement exists with declared provenance, hashes, coverage, and QA. | That the measurement is the right treatment/outcome for a particular experiment. |
| **Experiment gate run** | A declared design has measurable support, coverage, timing, and diagnostics on real data. | Automatic causal identification. |
| **Estimator / calibration result** | A declared estimator produced an estimate for that gated experiment. | Robust causal truth or policy relevance. |

For restricted sources such as DHS, two more distinctions now matter operationally:

- **synthetic acceptance is not protected-source acceptance**;
- **codebook-backed empirical meaning is not experiment-role assignment**.

## Status vocabulary

| Status | Meaning |
|---|---|
| **GREEN** | The named real-data gate passed for the stated experiment/specification. Permission to investigate further, **not causal validation**. |
| **YELLOW** | The gate or experiment is usable enough to inspect but a material caveat or unresolved sensitivity remains. |
| **RED** | The current experiment failed a required gate. |
| **NOT RUN** | The relevant real-data gate sequence has not yet been executed under the stated architecture. |
| **BLOCKED** | A required empirical object or scientific definition is not stable enough for a meaningful run. |
| **SYNTHETIC PASS** | The implementation path passes controlled synthetic acceptance; this is not a real-data readiness status. |

## Track A — Current contract-backed architecture

### A1. Shared contract and spatial foundations

`empirical-data-contracts` and `spatial-data-foundation` provide the shared contract, geography, period, membership, and provenance machinery.

**Status: INFRASTRUCTURE AVAILABLE**

### A2. FCV empirical-data kernel

`fcv-empirical-data` has contract-backed materialization, source snapshots, output hashes, QA, failure visibility, natural-grain support, and parity evidence.

**Status: SYNTHETIC PASS / IMPLEMENTED**

### A3. ACLED source-native measurement path

```text
ACLED snapshot
→ source-native Silver events
→ shared geography membership
→ shared period membership
→ sparse area × period × native-event measurement
→ MeasurementContract / CoverageContract / RunManifest
```

**Status: SYNTHETIC PASS; REAL CONTRACTED ACCEPTANCE NOT YET RECORDED HERE**

### A4. Contracted ACLED → harness experiment projection

The harness validates contract-backed empirical bundles and projects ACLED measurements into scientific roles explicitly.

**Status: SYNTHETIC PASS**  
**Real current-artifact E1/E2 run: NOT RUN / NOT YET RECORDED AS CANONICAL**

### A5. Contracted investment measurement → treatment derivation

The empirical repository contains source-native investment verticals including AidData CLG-LMIC, World Bank Projects API, and GeoGCDF. The harness can derive treatment downstream from a projected empirical measurement.

**Status: SYNTHETIC PASS / IMPLEMENTED**  
**Canonical real-data fully contracted investment → ACLED experiment: NOT RUN**

### A6. Survey-native empirical substrate

The reusable survey substrate is implemented without forcing household/respondent/cluster observations into area-period semantics.

**Status: IMPLEMENTED FOUNDATION / SYNTHETIC PASS**

### A7. DHS Household Recode (HR)

Implemented source path:

```text
external protected HR source
→ SourceSnapshotRef
→ verified DHS survey/file identity
→ household observations in Silver
→ QA + DatasetRef + RunManifest
```

The latest hardening makes the grain contract truthful:

- conceptual observations remain households;
- source `household_id` remains visible even when missing/duplicated;
- unique `source_row_id` is the durable physical `DatasetRef.grain`;
- source defects are audited rather than repaired merely to satisfy uniqueness.

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Protected real-source materialization reviewed here: NOT RUN / NOT RECORDED**

### A8. DHS Geospatial Covariates (GC)

Cluster-native wide Silver, optional long `survey × cluster × source_variable` view, registry-driven temporal semantics, and explicit cluster availability are implemented.

Identity fields remain identity; missing rows/values never become zero; no GID aggregation or fake survey-year assignment is performed.

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Protected/current real-source materialization: NOT RUN / NOT RECORDED**

### A9. DHS GE/GPS reported-coordinate geography

```text
external DHS GE/GPS source
→ cluster-coordinate Silver
→ survey/GPS identity audit
→ reported_coordinate_membership
→ SurveyGeographyLink + displacement/uncertainty metadata
```

The implementation does not claim reported coordinate = true location, perform de-displacement, or build displacement-buffer candidate geography.

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Protected/current real-source geography acceptance: NOT RUN / NOT RECORDED**

### A10. DHS HR + GC + GPS integration QA

The latest DHS mini-wave adds explicit integrated validation without creating an analysis mega-table.

`build_dhs_survey_integration_report` verifies that:

- HR, GPS, and GC resolve to one explicit `SurveyCatalogEntry`;
- optional dataset roles cannot masquerade as another product;
- declared `DatasetRef.grain` keys exist, contain no nulls, and actually uniquely identify supplied rows;
- HR-only, GPS-only, and GC-only clusters remain visible rather than disappearing through an inner join;
- GC uses `DHSCLUST` as the cross-product cluster link when available while keeping `DHSID` distinct;
- numeric-equivalent but text-distinct identities such as `001` and `1` remain unresolved evidence rather than being silently normalized.

The report contains support/count/provenance evidence only. It does not join household values, coordinates, or GC covariates into a scientific frame.

**Status: IMPLEMENTED / SYNTHETIC PASS**  
**Real protected one-survey integrated report: NOT RUN / NOT RECORDED**

### A11. DHS codebook-backed household semantic measurements

The initial DHS-VII HR registry defines three reusable empirical measurements:

| Source | Measurement | Evidence boundary |
|---|---|---|
| `HV206` | `dhs.household.electricity_access` | standard 0/1 semantics; documented missing stays missing; unsupported codes unresolved |
| `HV270` | `dhs.household.wealth_quintile` | ordered source quintile; explicitly survey-relative |
| `HV201` | `dhs.household.drinking_water_source_code` | source category preserved; no improved/safe-water harmonization |

The derived product:

```text
content-hashed HR Silver
→ versioned codebook-backed registry
→ source_row_id × measurement_id
→ MeasurementContract + QA + RunManifest
```

Measurement statuses distinguish `observed`, `missing_source_value`, `source_missing_code`, and `unmapped_source_code`. Unsupported codes never become zero.

The registry requires explicit codebook provenance and survey-phase compatibility. Unsupported historical notebook interpretations are not promoted to current semantics merely because old code used them.

**Status: IMPLEMENTED / SYNTHETIC PASS / L3**  
**Protected real-source semantic materialization: NOT RUN / NOT RECORDED**  
**Treatment/outcome/covariate roles assigned: NONE**

### A12. DHS empirical stack → scientific experiment

The empirical prerequisites have advanced materially:

```text
HR + GC + GPS
   ↓
integration QA
   ↓
codebook-backed household semantic measurements
   ↓
scientific-use projection   ← still pending
```

A current experiment still needs:

- named survey/recode scope;
- experiment role selection over one or more semantic measurements;
- household/person ↔ cluster projection;
- named treatment/exposure measurement;
- timing rules;
- displacement-aware geography/exposure policy;
- survey weight/PSU/strata use;
- harness support for the cross-grain design;
- protected-source acceptance summarized without exposing restricted values.

**Status: PARTIAL — EMPIRICAL STACK + INITIAL SEMANTIC MEASUREMENTS IMPLEMENTED / SCIENTIFIC USE PENDING**

This is a different state from Afrobarometer, where current source-native ingestion remains unimplemented.

## Track B — Recovered/legacy-backed real-data calibration

Before the new upstream architecture was complete, the recovered 2023 area-period surfaces were converted into a more explicit canonical analysis checkpoint and taken through E1/E2 real-data calibration.

This evidence remains useful, but should remain labeled as recovered/reconstruction-backed evidence rather than current fully contracted evidence.

### Real E2 calibration matrix

| Treatment source/definition | Role in calibration | Real-data hard-gate result |
|---|---|---|
| WBad `record_present` | PRIMARY | hard gates passed |
| WBkg `record_present` | PRIMARY | hard gates passed |
| WBad `amount_positive` | STRESS | hard gates passed with a **YELLOW within-period support caveat** because 2013–2014 had zero treated WBad units |
| WBkg `amount_positive` | STRESS | hard gates passed |

Common model sample:

```text
24,852 area-periods
4,142 GIDs
```

Synthetic recovery of the predeclared 0.20-SD injected signal was `30/30` in every cell.

### Calibration estimates

| Cell | Effect | SE | Effect SD | Approx. MDE80 SD |
|---|---:|---:|---:|---:|
| WBad `record_present` | +0.3180 | 0.2474 | +0.0178 | 0.0387 |
| WBkg `record_present` | -0.0744 | 0.2390 | -0.0042 | 0.0374 |
| WBad `amount_positive` | +0.1591 | 0.2250 | +0.0089 | 0.0352 |
| WBkg `amount_positive` | +0.0665 | 0.2506 | +0.0037 | 0.0392 |

All reported 95% coefficient intervals included zero, and observed effect sizes were below the approximate 80% detectable scale reported by the calibration.

### WB measurement agreement

Reported `record_present` agreement included approximately:

```text
exact area-period agreement  0.889
Jaccard among treated union  0.600
```

For `amount_positive`, treated-union Jaccard was lower and WBad 2013–2014 positive-amount treatment collapsed while WBkg retained treated cells.

## Why Track B is not automatically Track A

The recovered calibration used a reconstructed historical/canonical panel. The newer architecture instead aims for:

```text
source snapshot
→ source-native empirical materialization
→ shared contract-backed measurement
→ validated empirical bundle
→ explicit experiment projection
→ treatment/outcome roles
→ gates / estimator
```

A result from Track B should not be relabeled as a Track A result merely because the research question sounds similar. Historical coefficient equality is not an acceptance criterion.

## Current experiment surfaces

| Experiment surface | Current empirical state | Current readiness |
|---|---|---:|
| **Recovered WB → ACLED calibration** | Real recovered area-period E1/E2 checkpoint exists. | **REAL CALIBRATION COMPLETED**; recovered-lane evidence only. |
| **Contracted investment → contracted ACLED** | Upstream verticals + generic harness boundary + downstream treatment derivation exist. | **NOT RUN on canonical real current artifacts** |
| **GeoGCDF → ACLED** | Contracted GeoGCDF measurement path and contracted ACLED path exist. | **NOT RUN** as a declared real experiment |
| **Jobs-related investment → ACLED** | Annotation protocol exists; source facts are separate from jobs treatment semantics. | **BLOCKED** pending validated annotation/use design and contracted experiment projection |
| **Afrobarometer spatial experiment** | Survey-native substrate implemented; source-native respondent/EA ingestion absent. | **BLOCKED — SOURCE INGESTION NEEDED** |
| **DHS-linked experiment** | HR + GC + GPS + integration QA + initial household semantic measurements are implemented. | **PARTIAL — protected-source integrated acceptance + scientific-use/harness integration pending** |

## Core gate families

The active harness should continue to gate candidate experiments on:

1. data / lineage integrity;
2. timing;
3. treatment / comparison support;
4. outcome coverage and sparsity;
5. pretreatment balance / selection;
6. placebo / falsification behavior;
7. synthetic signal recovery;
8. spatial precision / ambiguity / bandwidth sensitivity where relevant;
9. survey linkage / design-weight / displacement sensitivity where relevant;
10. semantic comparability / unresolved-code diagnostics for survey measurements where relevant.

## What should be updated after the next real DHS run?

For one protected DHS survey, record only non-sensitive evidence such as:

- survey/release/file identities;
- source and output hashes;
- HR/GC/GPS row and cluster counts;
- integration support counts and source-only clusters;
- suspicious numeric-equivalent/text-distinct ID counts;
- missingness/QA counts;
- GPS membership-status counts and displacement-policy provenance;
- GC temporal-semantics/availability summaries;
- semantic registry hash and measurement-status counts;
- experiment projection/gate evidence once harness use exists.

Do not turn synthetic acceptance into a GREEN real-data gate, and do not expose protected household values merely to prove that a run occurred.

## Interpretation rule

The board exists to answer:

> **What exactly has been established, under which empirical architecture, and what is still permission rather than evidence?**

That is more useful than a single global statement that “the pipeline works.”
