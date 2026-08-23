---
title: Research System Architecture
sidebar_position: 2
description: Human-facing map of the FCV research system, repository boundaries, sources of truth, and the path from source facts to experiments.
date: "2026-08-23"
---

# Research System Architecture

The FCV research system is no longer one recovered pipeline or one repository. It is a small set of deliberately separated components with different responsibilities.

The short rule is:

> **Facts are produced upstream; reusable empirical meaning may be added with explicit provenance; scientific roles are assigned in experiments; readiness is summarized here.**

## System at a glance

```text
REUSABLE FOUNDATIONS — not FCV-specific

empirical-data-contracts
  identity / provenance / grain / geography / time / coverage /
  measurement / QA / run-manifest contracts

spatial-data-foundation
  geography authority / analytical geometry / period indexing /
  spatial membership / source registration / spatial provenance

                    ↓ used by

FCV EMPIRICAL DOMAIN

fcv-empirical-data
  source-native records
  reusable empirical measurements
  natural observation grains
  source snapshots and hashes
  durable Silver / Gold materialization
  QA / coverage / parity / integration evidence

                    ↓ contracted empirical boundary

FCV SCIENTIFIC USE

fcv-experiment-harness
  experiment projections
  treatment / outcome / covariate roles
  timing and eligibility rules
  counterfactuals and analysis samples
  gates / falsification / calibration / estimators

                    ↓ summarized for people

THIS ONBOARDING SITE
  research orientation
  current status
  scientific questions and decisions
  readiness / validation summaries
  archive memory
  links to authoritative implementation docs
```

The arrows describe dependency and interpretation flow. They do **not** mean every source must be forced into a common table, grain, geography, or experiment design.

## Repository ownership

| Repository | Scope | Owns | Explicitly does not own |
|---|---|---|---|
| [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) | Reusable foundation | Typed identity, provenance, grain, geography/time, coverage, measurement, QA, run-manifest contracts | FCV concepts, source-specific transformations, treatments, outcomes, matching, regressions |
| [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) | Reusable foundation | Geography authority, analytical geometry, period indexing, spatial membership, source registration, spatial provenance | FCV treatments/outcomes, survey harmonization, estimators |
| [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) | FCV empirical domain | Faithful source facts, codebook-/source-backed reusable empirical meanings, natural grains, durable materialization, contracts, QA, coverage, parity, integration evidence | Treatment/control roles, counterfactuals, estimator choices, causal interpretation |
| [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) | FCV scientific use | Explicit measurement use, experiment projection, treatment derivation, timing, eligibility, samples, gates, estimators, falsification/calibration | Source ingestion authority, source-specific raw schemas, a second empirical-data platform |
| `fcv-spatial-data-research-onboarding` | Human collaboration layer | Orientation, current research status, scientific framing, decision context, readiness summaries, archive memory | Canonical schemas, package APIs, detailed materialization logic, generated run artifacts |

This separation prevents convenient preprocessing or historical variable use from becoming hidden scientific assumptions.

## The empirical/scientific boundary

The most important boundary is between **what was measured** and **how a research design uses that measurement**.

An upstream empirical product may legitimately state:

```text
this is an ACLED measurement
at geography G and period scheme P
with this coverage and provenance
```

or:

```text
this DHS-VII HR variable has a codebook-backed empirical meaning
with this comparability status, missing-code policy, registry hash,
and source/run provenance
```

It should not state, as an intrinsic empirical fact:

```text
this row is the outcome
this project is treatment
this missing row is control
this period is post-treatment
this survey measurement is a regression covariate
```

Those are experiment choices.

The DHS mini-wave makes this distinction particularly concrete:

```text
HV206
  ↓ codebook-backed empirical registry
DHS household electricity access
  ↓ experiment-specific scientific choice
outcome / control / subgroup / unused
```

The first arrow can live in `fcv-empirical-data`; the second belongs downstream.

## What crosses the empirical boundary

The current panel-oriented harness boundary consumes a durable empirical artifact together with shared contract evidence:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable data artifact
        ↓
validated empirical measurement bundle
        ↓
explicit experiment projection
```

Survey experiments may require an additional explicit cross-grain projection seam because household observations, cluster covariates, and cluster geography do not naturally share an area-period grain. That seam belongs in scientific use; the empirical repository should not flatten those grains merely to fit the current panel machinery.

## Current reference paths

### ACLED violence

```text
immutable ACLED snapshot
→ source-native Silver events
→ shared geography membership
→ shared period membership
→ sparse area × period × native-event measurement
→ MeasurementContract / CoverageContract / RunManifest
→ validated harness bundle
→ experiment selects taxonomy + value + timing + role
```

Important consequences:

- source precision is data, not an automatic Silver filter;
- zero-fatality events remain events;
- ambiguous geography remains explicit;
- sparse absence does not become zero without coverage authority;
- selecting violence-against-civilians fatalities as outcome is downstream.

### Investment data

Current FCV empirical work includes independent AidData CLG-LMIC, World Bank Projects API, and GeoGCDF verticals rather than one pre-harmonized treatment table.

A project amount remains a source/project fact. It is not automatically local spending, treatment intensity, or a quantity that can be multiplied across locations.

### Survey substrate

The reusable FCV survey substrate represents household/person/respondent/cluster/EA grains while keeping survey identity independent of one source file and preserving design facts, weights, variable metadata, temporal semantics, and explicit geography-link states.

It does not force survey observations into `GID × TimePeriod` rows.

### DHS empirical stack

DHS is now the first concrete integrated survey family built on that substrate.

```text
                         SurveyCatalogEntry
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
        HR source           GC source          GE / GPS source
             │                  │                  │
             ▼                  ▼                  ▼
 household-native      cluster covariate      cluster-coordinate
     Silver                 Silver                 Silver
             │                  │                  │
             └──────────────┬───┴──────────────────┘
                            ▼
                   DHS integration QA
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
      HR variable registry        reported-coordinate
              │                   geography relation
              ▼
 household semantic measurements
              │
              ▼
      experiment projection
```

#### Source-native products remain separate

- **HR** preserves household observations and source design facts.
- **GC** preserves cluster-associated measurements and temporal semantics.
- **GPS** preserves reported coordinates and displacement evidence.

They are not flattened into a canonical DHS analysis table upstream.

#### Integration QA is now explicit

The empirical layer now has a dedicated cross-product QA operation that verifies:

- all products belong to one explicit survey;
- `DatasetRef` grain claims are true for supplied rows;
- HR-only, GPS-only, and GC-only clusters remain visible;
- `DHSCLUST` and `DHSID` are not conflated;
- numeric-equivalent textual identities such as `001` and `1` remain unresolved rather than silently normalized.

The integration report carries support/count/provenance evidence only. It is not a mega-table or an experiment frame.

#### HR grain truthfulness

The HR integrated audit found that source household IDs can be missing/duplicated while the earlier durable contract had treated the natural key as unique.

The current model distinguishes:

```text
conceptual observation     household
source identity            household_id
physical durable identity  source_row_id
```

The physical `source_row_id` is the unique `DatasetRef.grain`; source household-ID anomalies remain visible evidence.

#### Codebook-backed empirical meaning

A deliberately small DHS-VII HR registry now defines:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

The resulting [household semantic measurement](./data-products/products/dhs-household-measurements.md) product is keyed by `source_row_id × measurement_id`, verifies its content-hashed HR input, carries registry/codebook provenance, comparability and temporal semantics, and preserves explicit missing/unmapped states.

It creates `MeasurementContract` objects without assigning treatment/outcome/covariate roles.

This means the forward-looking DHS blocker has moved again. It is no longer source ingestion, no longer basic HR/GC/GPS integration, and no longer total absence of variable semantics. The remaining frontier is protected-source integrated acceptance plus experiment projection, exposure/timing, displacement-aware uncertainty, survey design, and estimator choice.

See [DHS Empirical Stack](./data-products/products/dhs-overview.md), [DHS Household Semantic Measurements](./data-products/products/dhs-household-measurements.md), and [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md).

Afrobarometer remains at the earlier stage: the substrate exists, but a current respondent/EA ingestion vertical has not yet been implemented.

## Evidence and status have different levels

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| **Software / synthetic test** | Code behaves as declared on controlled fixtures | Real FCV data are valid or a substantive hypothesis is supported |
| **Empirical materialization / QA** | A source-backed measurement or integration report exists with declared provenance and QA | That the measurement has the right experiment role |
| **Experiment gate run** | A declared research design has support, coverage, timing, and diagnostics | Automatic causal identification |
| **Estimator / research result** | A declared estimator produced an estimate | Automatic causal validity or robustness |

For restricted DHS data, synthetic acceptance does not prove protected real-source acceptance. For codebook-backed DHS measurements, reusable empirical meaning does not prove scientific-role appropriateness.

## Current versus historical authority

The recovered 2021–2023 archive remains scientifically valuable for reconstruction, parity, historical definitions, and design genealogy.

Do not assume a recovered file is current canonical truth merely because it was used in an earlier notebook. The new architecture deliberately allows explained divergence when legacy pipelines used filters, zero-filling, lossy joins, collapsed uncertainty, or unsupported semantic shortcuts.

## Where should a collaborator look?

| Question | Start here | Authoritative technical source |
|---|---|---|
| What is the project doing now? | [Current Research Status](./current-status.md) | Linked active repositories / PRs |
| How do the repositories fit together? | This page | Each repository's architecture docs |
| What empirical products exist now? | [Empirical Product Catalog](./data-products/product-catalog.md) | `fcv-empirical-data` product docs/run artifacts |
| What is the current DHS stack? | [DHS Empirical Stack](./data-products/products/dhs-overview.md) | `DHS_INTEGRATED_SUBSTRATE.md` + HR/GC/GPS docs |
| What do selected DHS household variables mean empirically? | [DHS Household Semantic Measurements](./data-products/products/dhs-household-measurements.md) | `fcv-empirical-data` DHS variable registry/contracts |
| What geography/period engine is authoritative? | High-level summary here | `spatial-data-foundation` |
| Where is treatment/outcome timing defined? | Scientific design docs here | `fcv-experiment-harness` |
| Has an experiment actually been tested? | [Validation Status](./data-products/validation-status.md) | Harness run artifacts / reports |
| What did the 2023 pipeline do? | [Archive Map](./archive-map.md) | Recovered archive / historical notebooks |

## Communication policy

Prefer claims that name their level:

- **Architecture:** “DHS integration QA now validates HR/GC/GPS support without flattening grains.”
- **Empirical product:** “The initial DHS-VII registry materializes three codebook-backed household measurements with MeasurementContracts.”
- **Experiment readiness:** “DHS source/integration/semantic paths pass synthetic acceptance; protected-source acceptance and harness-side scientific use remain pending.”
- **Historical evidence:** “Recovered E2 calibration remains legacy-backed real-data evidence.”

Avoid compressing those into “the DHS pipeline works.”

## Maintenance rule for this site

Update this site when a technical change alters collaborator-facing architecture, status, evidence state, or scientific boundary. Link to technical authority; do not duplicate detailed APIs; preserve older pages when they document genuine history but label their authority clearly.
