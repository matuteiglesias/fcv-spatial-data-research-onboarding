---
title: Research System Architecture
sidebar_position: 2
description: Human-facing map of the FCV research system, repository boundaries, sources of truth, and the path from source facts to experiments.
date: "2026-08-23"
---

# Research System Architecture

The FCV research system is no longer one recovered pipeline or one repository. It is now a small set of deliberately separated components with different responsibilities.

This page is the **human-facing map** of that system.

It explains:

- which repositories are reusable foundations and which are FCV-specific;
- where empirical facts end and scientific-use choices begin;
- which repository is authoritative for each kind of technical detail;
- how a source record becomes an experiment input without silently acquiring causal meaning;
- how collaborators should interpret status and validation claims across the project.

The short rule is:

> **Facts are produced upstream; scientific roles are assigned in experiments; readiness is summarized here.**

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
  source-native records and measurements
  natural observation grains
  source snapshots and hashes
  durable Silver / Gold materialization
  QA / coverage / parity evidence

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
| [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) | FCV empirical domain | Faithful source measurements, source-native semantics, natural grains, durable materialization, contracts, QA, coverage, parity | Treatment/control roles, counterfactuals, estimator choices, causal interpretation |
| [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) | FCV scientific use | Explicit measurement use, experiment projection, treatment derivation, timing, eligibility, samples, gates, estimators, falsification/calibration | Source ingestion authority, source-specific raw schemas, a second empirical-data platform |
| `fcv-spatial-data-research-onboarding` | Human collaboration layer | Orientation, current research status, scientific framing, decision context, readiness summaries, archive memory | Canonical schemas, package APIs, detailed materialization logic, generated run artifacts |

This separation is part of the scientific design of the project. It prevents a convenient preprocessing choice from becoming a hidden research assumption.

## The empirical/scientific boundary

The most important boundary is between **what was measured** and **how a research design uses that measurement**.

An upstream empirical product may legitimately state:

```text
this is an ACLED measurement
at geography G
and period scheme P
using native event taxonomy
with this coverage contract
and this source/run provenance
```

It should not state, as an intrinsic source fact:

```text
this row is the outcome
this project is treatment
this missing row is control
this period is post-treatment
this variable is a regression covariate
```

Those are experiment choices.

In the harness, a particular design can explicitly say:

```text
select native_event_type = "Violence against civilians"
use fatalities as an outcome
shift the requested measurement by +1 period
interpret an investment measurement > 0 as treatment
restrict treatment eligibility to declared periods
```

The same upstream measurement can therefore be reused by another experiment without rebuilding or relabeling the source data.

## What crosses the empirical boundary

The current harness boundary consumes a durable empirical artifact together with shared contract evidence:

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

The loader checks artifact identity and declared structure before scientific use. It does not silently fill sparse data, reconstruct source-specific ingestion logic, or invent treatment/control meaning.

Detailed executable semantics belong in the producing and consuming repositories. This site should explain the boundary and link to those repositories rather than copy their API documentation.

## Current reference paths

### ACLED violence

The current source-native path is:

```text
immutable ACLED source snapshot
        ↓
source-native Silver events
        ↓
shared geography membership
        ↓
shared period membership
        ↓
sparse area × period × native-event measurement
        ↓
MeasurementContract / CoverageContract / RunManifest
        ↓
validated harness bundle
        ↓
experiment selects taxonomy + value + timing + role
        ↓
gates / estimator / falsification / calibration
```

Important consequences:

- ACLED `GEO_PRECISION` is source data, not an automatic Silver filter;
- zero-fatality events remain events;
- ambiguous geography remains explicit rather than being duplicated into several areas;
- sparse row absence does not become zero unless the coverage contract explicitly licenses that interpretation;
- selecting violence-against-civilians fatalities as an outcome is a harness-side scientific choice.

### Investment data

Current FCV empirical work includes independent source verticals rather than one pre-harmonized treatment table.

Implemented or active source paths include:

- AidData CLG-LMIC source-native Silver;
- World Bank Projects API source-native Silver;
- AidData GeoGCDF project-geometry Silver and contracted commitment-period measurements.

A project amount remains a source/project fact. It is not automatically local spending, treatment intensity, or a quantity that can be multiplied across project locations.

The harness may later derive a treatment state from a contracted investment measurement using an explicit experiment rule. That derivation belongs downstream.

### Surveys

DHS and Afrobarometer require a different natural architecture from area-period event panels.

The current survey work is therefore moving toward a reusable FCV survey substrate that can represent, for example:

```text
DHS household / person / cluster observations
Afrobarometer respondent / EA observations
```

without forcing respondents or households into `GID × TimePeriod` rows and without labeling survey variables as outcomes/covariates upstream.

Survey identity, release/source identity, observation grain, design metadata, variable metadata, and geography-linkage metadata belong in the empirical domain. Exposure rules and outcome roles belong in experiment use.

## Evidence and status have different levels

A recurring source of confusion is treating all successful runs as the same kind of evidence. They are not.

The project should distinguish at least four levels:

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| **Software / synthetic test** | Code behaves as declared on controlled fixtures | Real FCV data are valid or a substantive hypothesis is supported |
| **Empirical materialization / QA** | A source-backed measurement was produced with declared provenance and QA | The measurement is an appropriate treatment/outcome for a specific design |
| **Experiment gate run** | A declared research design has measurable support, coverage, timing, and diagnostics | Causal identification or substantive truth |
| **Estimator / research result** | A declared estimator produced an estimate for a gated experiment | Automatic causal validity, robustness, or policy relevance |

The [Validation Status](./data-products/validation-status.md) page summarizes the current evidence state across experiment surfaces.

## Current versus historical authority

The recovered 2021–2023 archive remains scientifically valuable, but it has a different role from the new contract-backed stack.

Use the recovered archive for:

- reconstructing what was done;
- understanding historical variable definitions and analyses;
- parity and discrepancy evidence;
- recovering source files or design intent;
- identifying useful prior outputs.

Do not assume a recovered file is current canonical truth merely because it was used in an earlier notebook.

The new architecture deliberately allows rebuilt products to diverge from legacy outputs when the old pipeline applied filters, implicit zero-filling, lossy joins, or source-specific assumptions. Such divergence should be explained, not automatically removed.

## Where should a collaborator look?

| Question | Start here | Authoritative technical source |
|---|---|---|
| What is the project doing now? | [Current Research Status](./current-status.md) | Linked active repositories / PRs |
| How do the repositories fit together? | This page | Each repository's README / architecture docs |
| What exactly does a contract field mean? | High-level summary here only | `empirical-data-contracts` |
| What geography/period engine is authoritative? | High-level summary here only | `spatial-data-foundation` |
| How was an empirical source materialized? | Dataset/status summary here | `fcv-empirical-data` |
| Where is treatment/outcome timing defined? | Scientific design docs here | `fcv-experiment-harness` |
| Has an experiment actually been tested? | [Validation Status](./data-products/validation-status.md) | Harness run artifacts / CI / reports |
| What did the 2023 pipeline do? | [Archive Map](./archive-map.md) and recovered pages | Recovered archive / historical notebooks |

## Communication policy

Research updates should name the level at which a claim is being made.

Prefer statements such as:

- **Architecture:** “Treatment derivation now lives downstream of contracted investment measurements.”
- **Empirical product:** “The GeoGCDF commitment-period measurement has a contract-backed materialization path.”
- **Experiment readiness:** “The contracted ACLED path passes synthetic acceptance; the real current-artifact run is still pending.”
- **Historical evidence:** “The recovered E2 calibration ran on the legacy-backed canonical panel and produced these gate results.”

Avoid compressing those into a vague statement such as “the pipeline works.”

That precision is especially important when several layers are moving quickly at the same time.

## Maintenance rule for this site

This onboarding site should remain a **map, status surface, and research memory**, not a mirror of every implementation detail.

When a technical repository changes:

1. update this site if the change alters the collaborator-facing system map, research status, evidence state, or scientific boundary;
2. link to the technical source of truth;
3. avoid copying schemas or code-level documentation that will drift independently;
4. preserve older pages when they document genuinely historical work, but label their authority clearly.

This keeps the collaboration layer useful even as the implementation continues to evolve rapidly.
