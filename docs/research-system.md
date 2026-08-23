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

or, for a survey product:

```text
this is a DHS household observation
linked to this survey and cluster identity
with these source design facts
and this source/run provenance
```

It should not state, as an intrinsic source fact:

```text
this row is the outcome
this project is treatment
this missing row is control
this period is post-treatment
this survey variable is a regression covariate
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

A future DHS design can likewise explicitly choose an HR outcome variable, cluster-level GC controls, an exposure linkage, a displacement-aware spatial rule, survey timing, and a survey-design estimator without rewriting the upstream source products.

The same upstream measurement can therefore be reused by another experiment without rebuilding or relabeling the source data.

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

The loader checks artifact identity and declared structure before scientific use. It does not silently fill sparse data, reconstruct source-specific ingestion logic, or invent treatment/control meaning.

Survey experiments may require an additional explicit cross-grain projection seam because household/person observations, cluster covariates, and cluster geography do not naturally share an area-period grain. That seam belongs in scientific use; the empirical repository should not flatten those grains merely to fit the current panel machinery.

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

Implemented source paths include:

- AidData CLG-LMIC source-native Silver;
- World Bank Projects API source-native Silver;
- AidData GeoGCDF project-geometry Silver and contracted commitment-period measurements.

A project amount remains a source/project fact. It is not automatically local spending, treatment intensity, or a quantity that can be multiplied across project locations.

The harness may derive a treatment state from a contracted investment measurement using an explicit experiment rule. That derivation belongs downstream.

### Survey substrate

Complex surveys require a different natural architecture from area-period event panels.

The reusable FCV survey substrate is now implemented and can represent:

```text
DHS household / person / cluster observations
Afrobarometer respondent / EA observations
```

while keeping survey identity independent of any one file/snapshot and preserving sampling/design facts, weights, variable metadata, temporal semantics, and explicit geography-link states.

It does not force respondents or households into `GID × TimePeriod` rows and does not label survey variables as outcomes/covariates upstream.

### DHS empirical stack

DHS is now the first concrete survey family built on that substrate.

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
                                │                  │
                                ▼                  ▼
                       temporal semantics   reported-coordinate
                                            geography relation
```

The three products share verified survey/cluster identity but retain different natural grains.

**Household Recode (HR)** preserves household observations, cluster/PSU/stratum facts, source household weights unchanged, source-native variables, source snapshots, QA, and run provenance. It does not decide which variable is an outcome or how the survey weight should be normalized/used in an estimator.

**Geospatial Covariates (GC)** remain measurements associated with DHS clusters. The authoritative wide grain is `survey × cluster`, with an optional derived long `survey × cluster × source_variable` view. Temporal semantics are documentation/registry-driven; GC is not silently converted into a polygon-wide or area-period covariate panel.

**GE/GPS geography** preserves public reported cluster coordinates with explicit displacement metadata. The auditable geography relation is deliberately `reported_coordinate_membership`: it says where the reported public coordinate falls, not where the undisplaced true cluster is known to be. Boundary ambiguity, outside/invalid points, and linkage discrepancies remain visible.

A future uncertainty-aware `possible_geography_under_displacement` product could enumerate geography candidates consistent with documented displacement rules. It is separate from—and not implied by—the current reported-coordinate relation.

The forward-looking DHS blocker has therefore moved downstream. The source-native HR/GC/GPS stack exists; a scientific experiment still needs variable-role mapping, household/person ↔ cluster projection, named exposure and timing, displacement-aware uncertainty rules, survey-design/weight choices, harness integration, and protected real-source acceptance.

See [DHS Empirical Stack](./data-products/products/dhs-overview.md) for the collaborator-facing product map and [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md) for current scientific readiness.

Afrobarometer remains at the earlier stage: the substrate exists, but a current respondent/EA ingestion vertical has not yet been implemented.

## Evidence and status have different levels

A recurring source of confusion is treating all successful runs as the same kind of evidence. They are not.

The project should distinguish at least four levels:

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| **Software / synthetic test** | Code behaves as declared on controlled fixtures | Real FCV data are valid or a substantive hypothesis is supported |
| **Empirical materialization / QA** | A source-backed measurement was produced with declared provenance and QA | The measurement is an appropriate treatment/outcome for a specific design |
| **Experiment gate run** | A declared research design has measurable support, coverage, timing, and diagnostics | Causal identification or substantive truth |
| **Estimator / research result** | A declared estimator produced an estimate for a gated experiment | Automatic causal validity, robustness, or policy relevance |

For restricted sources such as DHS, another practical distinction is essential: **synthetic acceptance does not prove protected real-source acceptance**. Real-source validation should be summarized through non-sensitive identities, hashes, counts, QA, and linkage diagnostics rather than exposing protected values.

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

The new architecture deliberately allows rebuilt products to diverge from legacy outputs when the old pipeline applied filters, implicit zero-filling, lossy joins, source-specific assumptions, or collapsed survey/spatial uncertainty. Such divergence should be explained, not automatically removed.

## Where should a collaborator look?

| Question | Start here | Authoritative technical source |
|---|---|---|
| What is the project doing now? | [Current Research Status](./current-status.md) | Linked active repositories / PRs |
| How do the repositories fit together? | This page | Each repository's README / architecture docs |
| What empirical products exist now? | [Empirical Product Catalog](./data-products/product-catalog.md) | `fcv-empirical-data` product docs/run artifacts |
| What is the current DHS stack? | [DHS Empirical Stack](./data-products/products/dhs-overview.md) | `fcv-empirical-data` HR/GC/GPS docs and artifacts |
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
- **Empirical product:** “DHS HR, GC, and reported-coordinate GPS geography now have source-native materialization paths.”
- **Experiment readiness:** “The DHS empirical stack passes synthetic acceptance; protected real-source acceptance and harness-side scientific use are still pending.”
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
