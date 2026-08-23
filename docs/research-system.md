---
title: Research System Architecture
sidebar_position: 2
description: Human-facing map of FCV empirical production, scientific use, observability calibration, and sources of truth.
date: "2026-08-23"
---

# Research System Architecture

The FCV research system is now best understood as a **scientific instrument with separate production, use, and commissioning layers**.

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

Africa Observability Lab (inside harness)
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

The lower calibration layer is not “below” ordinary experiments in an inferential hierarchy. It reuses empirical/experiment machinery to ask a different question: **can the apparatus recover known behavior?**

## Repository ownership

| Repository | Owns | Explicitly does not own |
|---|---|---|
| [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) | Reusable typed empirical contracts | FCV treatments, source adapters, estimators |
| [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) | Geography/time authority and spatial membership | FCV treatment/outcome roles or survey estimators |
| [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) | Source-native facts, reusable measurements, natural grains, materialization, provenance, QA, coverage, parity, survey integration evidence | Treatment/control roles, counterfactuals, causal interpretation |
| [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) | Scientific projection, treatment derivation, timing, eligibility, gates, estimators, observability/calibration benchmarks | Raw source ingestion authority or a duplicate empirical-data platform |
| `fcv-spatial-data-research-onboarding` | Human orientation, status, scientific framing, benchmark/readiness summaries, archive memory | Canonical APIs, executable adapter semantics, generated run artifacts |

## Three important boundaries

### 1. Source fact → reusable empirical meaning

A source variable may acquire a reusable semantic measurement only when authoritative metadata supports it.

Example:

```text
DHS HV206
  ↓ codebook-backed registry
household electricity access
```

This is still empirical production.

### 2. Empirical meaning → experiment role

The experiment may then choose:

```text
household electricity access
  ↓ scientific specification
outcome / control / subgroup / unused
```

That role is not upstream truth.

The same applies to ACLED taxonomy selection, investment thresholds, timing offsets, and eligibility.

### 3. Experiment/design → calibration benchmark

A declared design can also be used in a known-behavior benchmark:

```text
prepared empirical / experiment substrate
        ↓
known external target or injected truth
        ↓
calibration adapter
        ↓
recovery diagnostics
```

The benchmark does not turn into a substantive result merely because it uses a regression or estimator.

Every Observability Lab benchmark declares:

```text
purpose = calibration
```

## Contract-backed empirical input seam

Ordinary semantic measurements cross the harness boundary as:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
        ↓
EmpiricalMeasurementBundle
```

The loader validates hashes, lineage, grain, geography, periods, and coverage before exposing the table.

It does not reindex sparse data, zero-fill unknown absence, invent untreated rows, or assign scientific roles.

### Current calibration extension point

Real commissioning can also require **source-native auxiliary facts** that are not themselves semantic measurements.

For example:

```text
HV206 semantic measurement
+
HR Silver HV005 household weight
```

The correct architecture is a generic auxiliary empirical dataset seam validated by `DatasetRef + RunManifest + content hash`, with source-specific joins and weighting inside the adapter.

This gap is currently tracked by harness issue #16. The calibration kernel should not learn DHS variable names or force auxiliary facts to masquerade as `MeasurementContract`s.

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

DHS is the first integrated survey family:

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

The integration report compares survey identity, declared grains, cluster support, source-only clusters, `DHSCLUST`/`DHSID`, and suspicious textual ID normalization without constructing an estimator-ready mega-table.

HR conceptual observations remain households, while unique `source_row_id` is the truthful physical durable grain when source `household_id` is defective.

The first semantic registry supports electricity access, survey-relative wealth quintile, and drinking-water source code.

Protected-source integrated acceptance remains pending.

## Scientific-use reference path

A fully contracted panel experiment can now look like:

```text
contracted investment measurement
        ↓ explicit projection + eligibility + derivation
experiment treatment

contracted ACLED measurement
        ↓ explicit selector + timing
outcome / pre-outcome

        ↓
gates
        ↓
existing estimator
```

The current architecture reuses estimator behavior rather than changing the estimator every time measurement plumbing changes.

## Africa Observability Lab

The merged harness now has a first-class calibration kernel that coordinates heterogeneous known-behavior checks over the same empirical boundary.

### Benchmark kinds

- commissioning;
- positive control;
- negative control;
- synthetic injection;
- measurement agreement.

### Recovery hierarchy

```text
Level 1 — pipeline coherence
Level 2 — qualitative expected behavior
Level 3 — quantitative compatibility
```

Level 3 can be `not_required` when exact numeric parity is scientifically unjustified.

### Status

Benchmark results can be `pass`, `yellow`, `fail`, or `not_run`; failed required recovery remains visible.

### Instrument health

The suite summarizes separate dimensions rather than collapsing them into a score:

```text
source integrity
commissioning
positive controls
negative controls
synthetic detectability
measurement agreement
known limitations
```

This makes disagreements useful diagnostic evidence.

## Reusable E2 observability

The former one-off synthetic signal check is now a reusable detector-characterization engine.

For each declared effect size and repetition it can report:

- injected truth;
- effect / SE / CI;
- sign recovery;
- rejection and joint detection;
- CI coverage;
- recovery error;
- sample/cluster/support context.

The caller chooses the effect-size grid.

`delta = 0` is an explicit synthetic null.

The output is an observability curve, not a single p-value or MDE ranking.

## External commissioning strategy

The current queue is intentionally diagnostic-first:

```text
issue #16 — generic auxiliary empirical input
        ↓
Nigeria DHS 2018 electricity = 59.4%
        ↓
additional DHS report statistic if useful
        ↓
Briggs (2017) published positive control
        ↓
reassess bottleneck
        ↓
Breckner–Sunde after grid/month support is justified
```

The first simple DHS statistic commissions the survey instrument before a multi-source published regression is attempted.

Breckner–Sunde is deferred because its natural `0.75° grid × month` design should not be represented through fake GADM units or fake annual periods.

## Evidence levels

The project now needs more than the old four-step ladder:

| Evidence | Meaning |
|---|---|
| **Software acceptance** | implementation behaves on controlled fixtures |
| **Empirical QA** | real source-backed product exists as declared |
| **Experiment gate run** | a declared design has real support/coverage/diagnostics |
| **Synthetic observability** | known injected truth has characterized recovery behavior |
| **External commissioning** | authoritative known measurement/pattern is recovered at declared levels |
| **Estimator result** | an estimate exists for a specific gated experiment |

None automatically implies the next.

## Current versus historical evidence

The recovered E1/E2 lane remains genuine real-data calibration evidence:

- 24,852 area-periods / 4,142 GIDs in the common model sample;
- four declared WB measurement cells passed hard gates;
- old one-point `0.20 SD` injection recovery was 30/30 in every cell;
- WBad/WBkg agreement diagnostics contextualize measurement instability.

Those results are not the same as:

- a current fully contracted real run;
- a new effect-size observability curve;
- an external commissioning benchmark.

## Where should a collaborator look?

| Question | Human-facing page | Technical authority |
|---|---|---|
| What exists now? | [Current Research Status](./current-status.md) | active repositories |
| How do the layers fit? | this page | repository architecture docs |
| What empirical products exist? | [Empirical Product Catalog](./data-products/product-catalog.md) | `fcv-empirical-data` |
| What experiments are currently runnable/blocked? | [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md) | `fcv-experiment-harness` |
| How is the instrument characterized? | [Africa Observability Lab](./experiments/observability-lab.md) | `CALIBRATION_LAB.md` / `OBSERVABILITY.md` |
| Which external benchmarks are next? | [Calibration Benchmark Catalog](./experiments/calibration-benchmark-catalog.md) | harness `docs/calibration/` |
| What has actually passed? | [Validation Status](./data-products/validation-status.md) | run artifacts / CI / reports |
| What did the old system do? | [Archive Map](./archive-map.md) | recovered archive |

## Communication policy

Prefer claims that name the layer:

- **Empirical:** “DHS electricity access now has a codebook-backed measurement.”
- **Experiment:** “A design chooses that measurement as an outcome.”
- **Observability:** “The E2 detector recovers a declared injected effect at this rate.”
- **Commissioning:** “The instrument reproduces the Nigeria DHS 2018 59.4% published statistic.”
- **Substantive:** “The gated FCV experiment estimates X.”

These are different claims and should remain different in papers, PRs, and collaboration discussions.
