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
| **PARTIAL — MISSING EMPIRICAL MEASUREMENT** | Source facts exist, but a required geography/time measurement or linkage is not yet available in the current architecture. |
| **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** | The architecture can support the design, but a named scientific definition or validated derived empirical object is still missing. |
| **BLOCKED — SOURCE INGESTION NEEDED** | The reusable substrate exists, but the real source-native survey/data vertical has not yet been built. |

## At a glance

| Research surface | Treatment-side empirical state | Outcome-side empirical state | Current status |
|---|---|---|---|
| **China GeoGCDF commitments → ACLED violence** | contracted GeoGCDF geography-period measurement exists | contracted ACLED measurement + projection exists | **IMPLEMENTED — REAL RUN PENDING** |
| **World Bank projects → ACLED violence** | WB source-native project Silver exists; current spatial measurement not yet asserted | contracted ACLED exists | **PARTIAL — MISSING EMPIRICAL MEASUREMENT** |
| **Pooled China + World Bank → ACLED violence** | source families exist independently; no canonical pooled upstream product | contracted ACLED exists | **BLOCKED / DESIGN + WB MEASUREMENT NEEDED** |
| **Jobs-related investment → ACLED violence** | annotation review infrastructure exists; validated jobs-use measurement not yet established | contracted ACLED exists | **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** |
| **Afrobarometer respondent/EA design** | survey substrate exists; real source-native ingestion absent | outcome/exposure depends on named design | **BLOCKED — SOURCE INGESTION NEEDED** |
| **DHS household/person/cluster design** | survey substrate exists; real source-native ingestion absent | outcome/exposure depends on named design | **BLOCKED — SOURCE INGESTION NEEDED** |
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

The harness must declare, rather than inherit from the sources:

- treatment value column;
- threshold / derivation rule;
- treatment eligibility window;
- treatment timing relative to commitment;
- ACLED taxonomy selector;
- outcome value (`fatalities`, count, or another supported measurement);
- outcome timing offset;
- target analysis lattice and geography linkage;
- counterfactual / comparison policy;
- gate thresholds and estimator.

### Current implementation support

The harness now supports a `FullyContractedPanelExperimentSpec` in which both treatment and outcome arrive as validated empirical bundles. Treatment derivation is an explicit downstream rule and fully contracted calibration reuses the existing gate/estimator machinery.

### Major caveats

- commitment timing is not automatically implementation onset;
- source-reported amount is not local administrative-unit spending;
- polygons may expose multiple units without allocating/multiplying finance;
- structural zeros depend on explicit GeoGCDF coverage conditions;
- a real current-artifact run and its gateboard evidence still need to be recorded.

### Next evidence-producing action

Run the durable GeoGCDF + ACLED artifacts through the fully contracted harness, persist projection/support/gate outputs, and update [Validation Status](../data-products/validation-status.md).

---

## Surface 2 — World Bank projects → ACLED violence

**Status: PARTIAL — MISSING EMPIRICAL MEASUREMENT**

### Research question shape

Can World Bank project presence or a declared source measurement be used to construct a WB-only investment contrast and relate it to subsequent ACLED violence?

### What exists now

[World Bank Projects API Silver](../data-products/products/worldbank-projects.md) provides authoritative project facts at one-project-per-source-ID grain with source dates, amounts, raw reconstructible representation, and provenance.

The ACLED contracted outcome path is available.

### What is missing in the current forward-looking path

The current product catalog does **not** assert a World Bank project-location → shared geography → shared period contracted measurement comparable to GeoGCDF.

Therefore the current source-native Silver cannot simply be relabeled as a WB treatment table.

### Historical evidence

Recovered WBad/WBkg area-period measurements **have** been used in real E1/E2 calibration. That evidence belongs to the recovered lane and is summarized below; it does not prove acceptance of the rebuilt WB Projects API path.

### Next evidence-producing action

Build or identify an authoritative World Bank spatial/temporal measurement product, preserve its coverage semantics, and only then express WB treatment derivation in the harness.

---

## Surface 3 — Pooled China + World Bank → ACLED violence

**Status: BLOCKED / DESIGN + WB MEASUREMENT NEEDED**

### Research question shape

Does an experiment comparing any qualifying China/World Bank investment exposure against a declared comparison group produce a useful violence contrast?

### Why this is not an upstream product

The current empirical architecture intentionally keeps China/AidData and World Bank as independent source families.

It does not assert that:

- records across sources describe the same projects;
- sources are additive;
- amounts have a common spatial spending interpretation;
- source-row absence means no investment;
- a universal `cnwb_pooled` column should exist upstream.

### What a current pooled experiment would need

1. independent contracted investment measurements for each source family;
2. explicit cross-source experiment-use semantics;
3. a declared rule for overlap / duplicate project candidates if relevant;
4. a downstream union or multi-arm treatment derivation;
5. source-specific coverage retained rather than erased by pooling;
6. ACLED outcome projection and normal gate sequence.

### Historical design vocabulary

`cnwb_pooled`, `wb_only`, and `cn_only` remain useful recovered experiment vocabulary. They should be re-expressed as experiment specifications over current measurements rather than restored as canonical upstream columns.

---

## Surface 4 — Jobs-related investment → ACLED violence

**Status: BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED**

### Research question shape

Do projects with an explicitly reviewed jobs/local-implementation annotation produce a different violence response from other declared investment exposures?

### What exists now

`fcv-empirical-data` has a derived annotation-candidate review surface downstream of source-native Silver. It preserves source family/project identity, review text, mapping provenance, source amount bases, and annotation-schema identity.

The architecture also permits empirical annotations such as `jobs_direct`, `jobs_indirect`, `jobs_any`, or `locally_implemented` when they are produced with explicit provenance.

### What does not yet follow automatically

Even a validated `jobs_any = true` annotation would **not** by itself imply:

```text
GID × period treatment = 1
```

The experiment still has to declare:

- which annotations count for treatment eligibility;
- which project timing fact anchors exposure;
- how project geography maps to the experiment lattice;
- how ambiguous locations behave;
- whether direct/indirect categories are pooled or separate;
- comparison groups and exclusion rules.

### Next evidence-producing action

Complete a validated current annotation product for a named source measurement, then bind that annotation to an explicit experiment treatment-derivation rule.

---

## Surface 5 — Afrobarometer respondent / EA design

**Status: BLOCKED — SOURCE INGESTION NEEDED**

### Research question shape

Can respondent-level attitudes or outcomes be linked to a declared spatial/temporal investment or conflict exposure while preserving Afrobarometer respondent and EA sampling structure?

### Current capability

The [Survey-Native Substrate](../data-products/products/survey-substrate.md) can represent respondent/EA natural grains, survey files/snapshots, sampling metadata, source weights, variable metadata, temporal semantics, and ambiguous/unmatched geography links.

### Missing pieces

- real source-native Afrobarometer ingestion;
- current survey variable metadata/codebook mapping;
- explicit geography-link materialization;
- a named exposure and timing design;
- outcome/covariate roles assigned downstream;
- survey-weight / estimator choice.

The design should **not** begin by forcing respondents into the recovered GID × period panel.

---

## Surface 6 — DHS household / person / cluster design

**Status: BLOCKED — SOURCE INGESTION NEEDED**

### Research question shape

Can DHS household/person outcomes be related to a declared spatial exposure while respecting cluster geography, survey timing, displacement/precision limitations, and sampling design?

### Current capability

The survey substrate can preserve household/person/cluster grains independently, link several source files to one survey identity, record source weights and normalized-weight methods, retain explicit variable timing semantics, and represent uncertain geography.

### Missing pieces

- real DHS ingestion;
- file/recode mappings for the chosen survey/release;
- cluster/geography materialization;
- source-specific displacement/precision interpretation;
- named exposure and outcome design;
- downstream weighted estimator and uncertainty strategy.

No DHS scientific variable is assigned outcome/treatment/covariate meaning upstream.

---

## Surface 7 — Recovered WB → ACLED calibration

**Status: REAL CALIBRATION COMPLETED — RECOVERED LANE**

This is the strongest existing real-data calibration evidence, but it predates the fully source-native contracted upstream architecture.

### Empirical surface

Recovered/canonical area-period analysis universe with WBad/WBkg investment implementations and recovered ACLED outcome semantics.

### Real-data evidence

The common E2 model sample reported:

```text
24,852 area-periods
4,142 GIDs
```

Four predeclared WB measurement cells passed hard gates; WBad `amount_positive` carried a YELLOW within-period support caveat because 2013–2014 had zero treated units.

Synthetic 0.20-SD signal recovery was reported as `30/30` in every calibration cell. All reported 95% coefficient intervals included zero and estimated effects were below the approximate detectable scale reported by that calibration.

### Why keep this surface visible

It provides:

- genuine real-data gate/calibration history;
- measurement-agreement evidence across WBad/WBkg;
- a baseline for comparing current contracted support and coverage;
- design lessons about within-period treatment support and sparse outcomes.

It should not be relabeled as a current contract-backed GeoGCDF/WB/ACLED run.

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
