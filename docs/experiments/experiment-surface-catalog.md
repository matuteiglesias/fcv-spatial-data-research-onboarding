---
title: Experiment Surface Catalog
sidebar_position: 1
description: Human-facing catalog of FCV scientific experiment surfaces that are executable, historically exercised, or currently blocked.
last_verified: "2026-08-23"
---

# Experiment Surface Catalog

**Document status: CURRENT SCIENTIFIC EXPERIMENT CATALOG**

This page answers:

> **Which substantive FCV experiment surfaces can the current system support, and what still blocks them?**

It now has a deliberate companion: the [Calibration Benchmark Catalog](./calibration-benchmark-catalog.md).

That separation matters:

```text
Experiment Surface Catalog
→ substantive scientific questions

Calibration Benchmark Catalog
→ known-behavior tests of the instrument
```

A Briggs replication or Nigeria DHS report statistic is not added here as a new FCV hypothesis. It belongs to calibration.

## Status vocabulary

| Status | Meaning |
|---|---|
| **REAL CALIBRATION COMPLETED — RECOVERED LANE** | Real historical/reconstructed experiment-calibration evidence exists. |
| **IMPLEMENTED — REAL RUN PENDING** | Current empirical + harness pieces exist, but a canonical real durable-artifact run is not recorded. |
| **PARTIAL — MISSING EMPIRICAL MEASUREMENT** | Source facts exist but a required reusable measurement/linkage is absent. |
| **PARTIAL — SCIENTIFIC USE NEEDED** | Empirical stack exists but projection, roles, exposure, timing, uncertainty, or harness integration remains. |
| **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** | Architecture exists but a scientific/derived input is not stable. |
| **BLOCKED — SOURCE INGESTION NEEDED** | Source-specific empirical vertical is absent. |

## At a glance

| Scientific surface | Empirical state | Harness/design state | Current status |
|---|---|---|---|
| **China GeoGCDF commitments → ACLED violence** | contracted investment + ACLED measurements exist | fully contracted treatment/outcome path + observability engine exist | **IMPLEMENTED — REAL RUN PENDING** |
| **World Bank projects → ACLED violence** | WB source-native Silver exists; no current WB spatial/period measurement | ACLED side exists | **PARTIAL — MISSING EMPIRICAL MEASUREMENT** |
| **Pooled China + World Bank → ACLED** | independent sources; no canonical pooled product | union/multi-arm semantics undeclared | **BLOCKED — WB MEASUREMENT + DESIGN NEEDED** |
| **Jobs-related investment → ACLED** | annotation review infrastructure exists | validated annotation/use rule incomplete | **BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED** |
| **Afrobarometer respondent/EA exposure** | reusable substrate only | source-specific scientific path absent | **BLOCKED — SOURCE INGESTION NEEDED** |
| **DHS household/cluster exposure** | HR + GC + GPS + integration QA + initial semantic measurements exist | commissioning + cross-grain exposure/estimator use pending | **PARTIAL — SCIENTIFIC USE NEEDED** |
| **Recovered WB → ACLED E2** | recovered area-period surfaces exist | real historical calibration executed | **REAL CALIBRATION COMPLETED — RECOVERED LANE** |

---

## Surface 1 — GeoGCDF commitments → ACLED violence

**Status: IMPLEMENTED — REAL RUN PENDING**

### Scientific question shape

Can a declared geography-period measurement of Chinese development-finance commitments be used as an experiment-specific exposure and related to subsequent violence against civilians?

### Current empirical/harness support

**Investment:** contracted GeoGCDF commitment-period measurement.

**Outcome:** contracted ACLED area-period-native-event measurement with explicit experiment projection.

**Treatment:** harness-side derivation from a contracted measurement under explicit eligibility/threshold rules.

**Estimator:** existing E2 calibration estimator can be reused after gates.

**Observability:** the reusable E2 injection engine can characterize recovery across a caller-declared effect-size grid once the real prepared frame exists.

### Remaining scientific choices

- which investment value/threshold defines exposure;
- whether commitment timing is appropriate for the specific question;
- treatment eligibility window;
- ACLED taxonomy/value;
- outcome timing;
- comparison/counterfactual policy;
- gate thresholds and final estimator interpretation.

### Major caveats

- commitment is not automatically implementation onset;
- project-reported amount is not local administrative-unit spending;
- project geometry can touch multiple units without allocating/multiplying finance;
- structural zeros require declared coverage authority.

### Next evidence-producing action

Run the real durable GeoGCDF + ACLED artifacts through:

```text
fully contracted experiment
→ gates
→ estimator
→ observability grid
```

and record both experiment readiness and detector characterization separately.

---

## Surface 2 — World Bank projects → ACLED violence

**Status: PARTIAL — MISSING EMPIRICAL MEASUREMENT**

World Bank Projects API Silver provides source-native project facts, dates, amounts, provenance, and exact source IDs.

The missing current forward-looking piece is a trustworthy project-location → shared geography → shared period measurement comparable to GeoGCDF.

The source-native project table cannot simply be relabeled as treatment.

Recovered WBad/WBkg area-period evidence remains useful historical calibration, not validation of the rebuilt API path.

### Next action

Build or recover a source-authoritative World Bank spatial/temporal measurement only when a concrete WB experiment is ready to consume it.

---

## Surface 3 — Pooled China + World Bank → ACLED

**Status: BLOCKED — WB MEASUREMENT + DESIGN NEEDED**

The current empirical architecture intentionally keeps source families independent.

It does not assert:

- cross-source project identity;
- amount additivity;
- common local-spending interpretation;
- row absence as no investment;
- a canonical upstream `cnwb_pooled` field.

A current pooled experiment needs independent contracted measurements, explicit overlap/reconciliation policy, downstream union/multi-arm semantics, preserved source-specific coverage, and ordinary experiment gates.

Historical labels such as `cnwb_pooled`, `wb_only`, and `cn_only` remain design vocabulary rather than upstream schema.

---

## Surface 4 — Jobs-related investment → ACLED

**Status: BLOCKED — SCIENTIFIC / ANNOTATION INPUT NEEDED**

Empirical annotation infrastructure can support versioned labels such as `jobs_direct`, `jobs_indirect`, `jobs_any`, or `locally_implemented` when backed by explicit evidence and provenance.

Even a validated annotation does not create treatment by itself.

The experiment must still define geography, timing, ambiguity handling, eligibility, comparison groups, and treatment derivation.

### Next action

Complete one validated current annotation product for a named source/measurement, then bind it to an explicit experiment spec.

---

## Surface 5 — Afrobarometer respondent / EA exposure

**Status: BLOCKED — SOURCE INGESTION NEEDED**

The generic survey substrate can represent respondent/EA grain, design metadata, weights, temporal semantics, and uncertain geography.

Still missing:

- source-native Afrobarometer ingestion;
- current codebook/semantic mappings;
- geography-link materialization;
- named exposure/timing design;
- experiment roles;
- survey estimator design.

Respondents should not be forced into the recovered GID × period panel merely to reuse old code.

---

## Surface 6 — DHS household / cluster exposure

**Status: PARTIAL — SCIENTIFIC USE NEEDED**

The DHS empirical frontier has moved substantially downstream.

### What now exists

**HR source product**

- household observations;
- truthful durable `source_row_id` grain;
- source household/cluster/PSU/stratum facts;
- source household weight preserved unchanged.

**GC**

- cluster-associated covariates;
- explicit temporal semantics;
- no polygon-wide authority or fake area-period expansion.

**GPS**

- reported public coordinates;
- explicit displacement metadata;
- `reported_coordinate_membership` rather than true-location claims.

**Integration QA**

- one survey identity across HR/GC/GPS;
- source-only cluster support retained;
- grain claims checked against actual rows;
- `DHSCLUST`/`DHSID` kept distinct;
- `001` versus `1`-type mismatches remain unresolved evidence.

**Initial semantic measurements**

```text
HV206 → household electricity access
HV270 → survey-relative wealth quintile
HV201 → drinking-water source code
```

These meanings are empirical and reusable, not automatically experiment outcomes/controls.

### New recommended first step: commission before exposing

The harness research now defines an authoritative DHS commissioning sequence.

Before building a complex FCV exposure model, the survey instrument should reproduce a simple external measurement:

```text
Nigeria DHS 2018
households with electricity = 59.4%
```

This tests survey identity, `HV206`, HR weighting (`HV005`), denominator semantics, and missing-value handling.

That benchmark belongs to the [Calibration Benchmark Catalog](./calibration-benchmark-catalog.md), not to substantive inference.

### Current generic harness blocker

Commissioning needs a semantic measurement plus source-native auxiliary HR facts.

Harness issue #16 tracks the source-agnostic missing seam for provenance-validated auxiliary datasets.

Once that is closed, the benchmark adapter—not the kernel—should own joins/weights/denominators.

### What still blocks the substantive DHS experiment

1. one named protected survey/release;
2. protected real-source HR/GC/GPS + semantic acceptance;
3. official-report commissioning pass or explained discrepancy;
4. scientific role selection over available semantic measurements;
5. household ↔ cluster experiment projection;
6. named treatment/exposure measurement;
7. displacement-aware spatial uncertainty rule;
8. survey/exposure timing;
9. analysis weight / PSU / strata strategy;
10. survey-compatible gates and estimator.

### Recommended sequence

```text
protected DHS empirical stack
→ integration QA
→ semantic household measurements
→ official DHS commissioning
→ choose substantive outcome/exposure
→ household ↔ cluster scientific projection
→ displacement-aware exposure
→ survey-design gates / estimator
```

That order makes later failures easier to diagnose.

---

## Surface 7 — Recovered WB → ACLED E2

**Status: REAL CALIBRATION COMPLETED — RECOVERED LANE**

This remains the strongest existing real-data experiment-calibration checkpoint.

Common model sample:

```text
24,852 area-periods
4,142 GIDs
```

Four predeclared WBad/WBkg measurement cells passed hard gates; WBad `amount_positive` retained the known YELLOW within-period support caveat.

Historical synthetic recovery at `0.20 SD` was `30/30` in every cell.

All reported 95% coefficient intervals included zero and observed effects were below the approximate detectable scale reported by that checkpoint.

WBad/WBkg treatment agreement provides a natural measurement-agreement diagnostic, but the historical run remains recovered-lane evidence.

The new reusable observability engine generalizes the old one-point injection check; it does not retroactively turn this historical run into a current Observability Lab suite.

## Calibration benchmarks are intentionally separate

The following should **not** be added as substantive experiment surfaces:

- Nigeria DHS report electricity recovery;
- Briggs (2017) aid-targeting recovery;
- Breckner & Sunde (2019) climate/conflict recovery;
- synthetic E2 injection grids.

They are calibration/commissioning benchmarks designed to characterize the instrument.

See [Africa Observability Lab](./observability-lab.md) and [Calibration Benchmark Catalog](./calibration-benchmark-catalog.md).

## How a new substantive surface enters this catalog

A new experiment should be able to name:

1. empirical measurements and their authority;
2. natural grain and coverage;
3. explicit scientific projection/linkage;
4. treatment/outcome/timing choices;
5. comparison/counterfactual policy;
6. current blocker or evidence state;
7. the next gate/run that could change that state.

Calibration targets should go to the benchmark catalog instead.
