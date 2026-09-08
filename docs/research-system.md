---
title: Research System Architecture
sidebar_position: 2
description: Human-facing map of FCV empirical production, scientific use, observability calibration, and sources of truth.
date: "2026-09-08"
---

# Research System Architecture

The FCV research system is best understood as a **scientific instrument with separate production, scientific-use, and characterization layers**.

The short rule is:

> **Facts are produced upstream; reusable empirical meaning is added with explicit provenance; scientific roles are assigned in experiments; the instrument is characterized against known behavior; readiness is summarized here.**

## System at a glance

```text
REUSABLE FOUNDATIONS — not FCV-specific

empirical-data-contracts
  identity / provenance / grain / geography / time /
  coverage / measurement / QA / run-manifest contracts

spatial-data-foundation
  geography authority / analytical geometry /
  period indexing / spatial membership / provenance

                    ↓ used by

FCV EMPIRICAL DOMAIN

fcv-empirical-data
  source-native facts
  reusable empirical measurements
  natural grains
  durable Silver / Gold
  coverage / QA / parity / integration evidence

                    ↓ contracted empirical boundary

FCV SCIENTIFIC USE

fcv-experiment-harness
  measurement projection
  treatment / outcome / covariate roles
  timing / eligibility / samples
  gates / estimators / falsification

                    ↓ same declared designs can feed

FCV INSTRUMENT CHARACTERIZATION

Africa Observability Lab
  commissioning benchmarks
  positive / negative controls
  synthetic injection curves
  measurement agreement
  Level 1 / 2 / 3 recovery
  instrument-health reports

                    ↓ summarized for people

THIS ONBOARDING SITE
  orientation / status / benchmark catalog /
  readiness / research memory / authority links
```

The calibration layer is not “below” ordinary experiments in an inferential hierarchy. It reuses empirical/experiment machinery to ask a different question: **can the apparatus recover known behavior?**

## Repository ownership

| Repository | Owns | Explicitly does not own |
|---|---|---|
| `empirical-data-contracts` | Reusable typed empirical contracts | FCV treatments, source adapters, estimators |
| `spatial-data-foundation` | Geography/time authority and spatial membership | FCV scientific roles or survey estimators |
| `fcv-empirical-data` | Source-native facts, reusable measurements, natural grains, materialization, provenance, QA, coverage | Treatment/control roles, counterfactuals, causal interpretation |
| `fcv-experiment-harness` | Scientific projection, treatment derivation, timing, eligibility, gates, estimators, observability/calibration | Raw source ingestion authority or a duplicate empirical-data platform |
| `fcv-spatial-data-research-onboarding` | Human orientation, current status, scientific framing, readiness summaries, archive memory | Canonical APIs, executable adapter semantics, generated run artifacts |

## Three important boundaries

### 1. Source fact → reusable empirical meaning

A source variable acquires reusable semantic meaning only when authoritative metadata supports it.

Example:

```text
DHS HV206
→ codebook-backed registry
→ household electricity access
```

This is still empirical production.

### 2. Empirical meaning → experiment role

An experiment may then choose whether that measurement is an outcome, control, subgroup, or unused variable.

The same separation applies to ACLED taxonomy selection, investment thresholds, timing offsets, and eligibility.

### 3. Experiment/design → calibration benchmark

A declared design can also be used in a known-behavior benchmark:

```text
prepared empirical / experiment substrate
→ known external target or injected truth
→ calibration adapter
→ recovery diagnostics
```

Every Observability Lab benchmark remains explicitly `purpose = calibration`.

## Contract-backed empirical input seam

Ordinary semantic measurements cross the harness boundary as:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
→ EmpiricalMeasurementBundle
```

The loader validates bytes, lineage, grain, geography, periods, and coverage before exposing a table. It does not reindex sparse data, zero-fill unknown absence, invent controls, or assign scientific roles.

Calibration adapters may also need source-native auxiliary facts. The generic long-term boundary remains a provenance-validated auxiliary `DatasetRef + RunManifest` seam rather than fabricated semantic contracts.

Harness issue #16 tracks that generic capability. After the September 8 DHS checkpoint it should be read as a **Calibration Lab integration capability**, not as a blocker to the already-completed DHS commissioning runs.

## Current empirical reference paths

### ACLED

```text
immutable source snapshot
→ event Silver
→ auditable geography membership
→ shared period membership
→ sparse contracted area × period × native-event measurement
→ harness projection
```

Key boundaries:

- source precision is data, not an automatic filter;
- zero-fatality events remain events;
- ambiguity remains explicit;
- sparse absence becomes zero only when coverage licenses it;
- taxonomy/value/timing selection is downstream.

### Investment

AidData CLG-LMIC, World Bank Projects API, and GeoGCDF remain independent empirical source families.

The current harness can derive treatment downstream from a contracted investment measurement under explicit eligibility and threshold rules.

A source project amount is not automatically local spending or treatment intensity.

### DHS

DHS remains an integrated survey family with separate natural-grain products:

```text
                         SurveyCatalogEntry
                                │
             ┌──────────────────┼──────────────────┐
             ▼                  ▼                  ▼
        HR household        GC cluster         GPS cluster
           Silver             Silver              Silver
             │                  │                  │
             └──────────────┬───┴──────────────────┘
                            ▼
                   integration QA
                            │
              ┌─────────────┴──────────────┐
              ▼                            ▼
     household semantic             reported-coordinate
       measurements                    geography
```

The initial semantic registry supports:

```text
HV206 → household electricity access
HV270 → survey-relative wealth quintile
HV201 → drinking-water source code
```

#### September 8 real-source checkpoint

Canonical HR source authority now uses DHS-distributed fixed-width `.DAT + .DCT` releases.

Real authoritative HR materialization passed for:

- Nigeria 2018 — 40,427 rows / 4,972 output columns;
- Uganda 2016 — 19,588 rows / 4,021 output columns;
- Zambia 2018 — 12,831 rows / 3,316 output columns.

Real semantic products passed for all three releases, and the official-report commissioning suite recovered **8 / 8 benchmarks GREEN**.

The benchmark wave commissions household weights, de-jure population weighting, domain selection, wealth semantics, and release-local water categories.

This establishes the HR **measurement arm**. It does not convert public displaced GPS coordinates into true locations or create a substantive household exposure design.

## Scientific-use reference path

A fully contracted panel experiment can now look like:

```text
contracted investment measurement
→ explicit projection + eligibility + derivation
→ experiment treatment

contracted ACLED measurement
→ explicit selector + timing
→ outcome / pre-outcome

→ gates
→ estimator
```

The current GeoGCDF→ACLED path is implemented and synthetically accepted. The important missing transition is the first canonical **real current-artifact** gate/estimator run.

## Africa Observability Lab

The harness supports benchmark kinds including:

- commissioning;
- positive control;
- negative control;
- synthetic injection;
- measurement agreement.

Recovery remains independent at:

```text
Level 1 — pipeline coherence
Level 2 — qualitative expected behavior
Level 3 — quantitative compatibility
```

There is deliberately no single instrument score.

### Current evidence

- reusable E2 observability engine: implemented / synthetic pass;
- `delta = 0` synthetic null: implemented / synthetic pass;
- DHS official-report commissioning: **8 / 8 GREEN across three real releases**;
- real current-artifact E2 observability curve: pending;
- Briggs published-study positive control: scientifically unlocked, exact source/design recovery pending;
- Breckner–Sunde: deferred until regular-grid/monthly support is truthful.

## Evidence levels

| Evidence | Meaning |
|---|---|
| **Software acceptance** | implementation behaves on controlled fixtures |
| **Empirical QA** | real source-backed product exists as declared |
| **Experiment gate run** | a declared design has real support/coverage/diagnostics |
| **Synthetic observability** | known injected truth has characterized recovery behavior |
| **External commissioning** | authoritative known measurement/pattern is recovered |
| **Estimator result** | an estimate exists for a specific gated experiment |

None automatically implies the next.

## Current scientific frontier

The next highest-value transition is:

```text
current GeoGCDF + ACLED durable artifacts
→ fully contracted experiment projection
→ real lineage/support/coverage/timing gates
→ placebo/falsification
→ estimator if permitted
→ observability curve on the exact same real frame
```

After that, Briggs (2017) is the preferred first published-study positive control.

A substantive DHS exposure experiment should advance only after explicit household↔cluster projection, displacement-aware exposure semantics, timing, and survey-design strategy are declared.

## Communication policy

Prefer claims that name the layer:

- **Empirical:** “The Nigeria 2018 HR release materialized from canonical `.DAT + .DCT` bytes.”
- **Commissioning:** “The DHS HR measurement arm recovered 8/8 official report benchmarks across three releases.”
- **Experiment:** “A declared GeoGCDF→ACLED design passed these real support/timing gates.”
- **Observability:** “That real prepared design recovers injected effects of this size at this rate.”
- **Substantive:** “The gated FCV experiment estimates X.”

These are different claims and should remain different in papers, PRs, and collaboration discussions.
