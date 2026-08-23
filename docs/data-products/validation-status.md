---
title: Validation Status
sidebar_position: 3
description: Human-facing evidence and readiness board for FCV empirical measurements and experiment surfaces.
date: "2026-08-23"
---

# Validation Status

This page is the human-facing readiness and evidence ledger for active FCV empirical work.

The most important update is that the project now has **two different evidence tracks** that must not be conflated:

1. **recovered/legacy-backed real-data calibration evidence** from the reconstructed area-period system; and
2. **current contract-backed architecture evidence** from the newer source-native empirical stack and harness boundary.

The first has real-data E1/E2 calibration results. The second has stronger provenance and scientific boundaries but has not yet been promoted here as a completed canonical real-data experiment run over the current upstream artifacts.

That distinction is intentional.

For the system map, see [Research System Architecture](../research-system.md). For the operating model, see [Research Workflow and Validation](../continuation/experimental-infrastructure.md).

## Evidence vocabulary

Four kinds of evidence should remain separate.

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| **Software / synthetic acceptance** | Code and scientific-boundary logic behave as declared on controlled fixtures. | Real FCV data quality or a substantive research effect. |
| **Empirical materialization / QA** | A source-backed measurement exists with declared provenance, hashes, coverage, and QA. | That the measurement is the right treatment/outcome for a particular experiment. |
| **Experiment gate run** | A declared design has measurable support, coverage, timing, and diagnostics on real data. | Automatic causal identification. |
| **Estimator / calibration result** | A declared estimator produced an estimate for that gated experiment. | Robust causal truth or policy relevance. |

A successful CI run is therefore not equivalent to a successful real-data experiment.

## Status vocabulary

| Status | Meaning |
|---|---|
| **GREEN** | The named real-data gate passed for the stated experiment/specification. Permission to investigate further, **not causal validation**. |
| **YELLOW** | The gate or experiment is usable enough to inspect but a material caveat, weak margin, or unresolved sensitivity remains. |
| **RED** | The current experiment failed a required gate and should not be interpreted downstream until repaired or changed. |
| **NOT RUN** | The relevant real-data gate sequence has not yet been executed under the stated architecture. |
| **BLOCKED** | A required empirical object or scientific definition is not stable enough for a meaningful run. |
| **SYNTHETIC PASS** | The implementation path passes controlled synthetic acceptance; this is not a real-data readiness status. |

> **Green means permission to investigate further, not causal validation.**

## Track A — Current contract-backed architecture

This is the architecture that should become the forward-looking canonical path.

### A1. Shared contract and spatial foundations

Current state:

- `empirical-data-contracts` is an independently consumable shared package;
- `spatial-data-foundation` provides the reusable geography/time/spatial-membership layer;
- FCV repositories consume those rather than maintaining parallel contract or geography engines.

Status:

**INFRASTRUCTURE AVAILABLE**

This is a system capability, not an experiment gate.

### A2. FCV empirical-data kernel

`fcv-empirical-data` now has a contract-backed materialization kernel with source snapshots, output hashes, QA, failure visibility, natural-grain support, and parity evidence.

Status:

**SYNTHETIC PASS / IMPLEMENTED**

No claim is made here that every source vertical has completed real-data acceptance or earned research-validated authority.

### A3. ACLED source-native measurement path

Implemented path:

```text
ACLED snapshot
→ source-native Silver events
→ shared geography membership
→ shared period membership
→ sparse area × period × native-event measurement
→ MeasurementContract / CoverageContract / RunManifest
```

Important acceptance behavior includes:

- retention of all supplied source rows in Silver;
- retention of zero-fatality events;
- no default `GEO_PRECISION == 1` Silver filter;
- explicit boundary/overlap/missing-coordinate states;
- no ambiguous-event duplication into Gold;
- shared period semantics;
- unknown sparse absence remaining unknown unless coverage explicitly licenses zero.

Current human-facing status:

**SYNTHETIC PASS; REAL CONTRACTED ACCEPTANCE NOT YET RECORDED HERE**

### A4. Contracted ACLED → harness experiment projection

The harness now validates contract-backed empirical bundles and projects ACLED measurements into scientific roles explicitly.

For the current reference path, the harness can select:

```text
native_event_type = Violence against civilians
value = fatalities
role = outcome / pre-outcome
timing = +1 / -1 shared periods
```

The projection preserves `observed`, `structural_zero`, `outside_coverage`, and `unresolved` states.

Current status:

**SYNTHETIC PASS**

Real current-artifact E1/E2 run:

**NOT RUN / NOT YET RECORDED AS CANONICAL**

### A5. Contracted investment measurement → treatment derivation

The empirical repository now contains source-native investment verticals including AidData CLG-LMIC, World Bank Projects API, and GeoGCDF.

The harness now has a fully contracted panel path where treatment can be derived **downstream** from a projected empirical measurement using an explicit experiment rule and eligibility window.

This is the desired boundary:

```text
empirical investment measurement
        ↓
experiment projection
        ↓
explicit treatment derivation rule
        ↓
treated / control / unavailable
```

Current status:

**SYNTHETIC PASS / IMPLEMENTED**

Canonical real-data fully contracted investment → ACLED experiment:

**NOT RUN**

### A6. Survey-native empirical substrate

The current survey work is intended to support DHS household/person/cluster observations and Afrobarometer respondent/EA observations without forcing them into area-period panel semantics.

No real DHS/Afrobarometer ingestion belongs to this substrate PR.

Current status:

**IN PROGRESS / BLOCKED FOR REAL EXPERIMENT USE**

The experiment layer still needs real source-native survey materialization plus explicit exposure/timing/outcome design.

## Track B — Recovered/legacy-backed real-data calibration

Before the new upstream architecture was complete, the recovered 2023 area-period surfaces were converted into a more explicit canonical analysis checkpoint and taken through E1/E2 real-data calibration.

This evidence remains useful. It should be labeled correctly rather than discarded or silently promoted to the new architecture.

### What that checkpoint established

The recovered lane made several previously hidden choices explicit:

- the current analysis universe was declared rather than inferred from a union of sources;
- ACLED sparse-row interpretation was made explicit for the recovered aggregate surface;
- treatment `record_present` and `amount_positive` semantics were separated;
- WBad and WBkg source implementations remained distinct;
- treatment/control support was measured by period;
- outcome sparsity, pretreatment balance/placebo behavior, and synthetic signal recovery were gated before interpreting coefficients.

### Real E2 calibration matrix

The predeclared matrix was:

| Treatment source/definition | Role in calibration | Real-data hard-gate result |
|---|---|---|
| WBad `record_present` | PRIMARY | hard gates passed |
| WBkg `record_present` | PRIMARY | hard gates passed |
| WBad `amount_positive` | STRESS | hard gates passed with a **YELLOW within-period support caveat** because 2013–2014 had zero treated WBad units |
| WBkg `amount_positive` | STRESS | hard gates passed |

Common model sample reported by that checkpoint:

```text
24,852 area-periods
4,142 GIDs
```

Synthetic recovery of the predeclared 0.20-SD injected signal was reported as `30/30` in every cell.

### Calibration estimates

The recovered real-data calibration reported:

| Cell | Effect | SE | Effect SD | Approx. MDE80 SD |
|---|---:|---:|---:|---:|
| WBad `record_present` | +0.3180 | 0.2474 | +0.0178 | 0.0387 |
| WBkg `record_present` | -0.0744 | 0.2390 | -0.0042 | 0.0374 |
| WBad `amount_positive` | +0.1591 | 0.2250 | +0.0089 | 0.0352 |
| WBkg `amount_positive` | +0.0665 | 0.2506 | +0.0037 | 0.0392 |

All four reported 95% coefficient intervals included zero, and the observed effect sizes were below the approximate 80% detectable scale reported by the calibration.

The correct interpretation is therefore **not** “one source shows a positive effect and another shows a negative effect.” The calibration itself concluded that the estimates were imprecise relative to the current design's resolution.

### WB measurement agreement

The recovered E2 checkpoint also quantified disagreement between WBad and WBkg rather than selecting a preferred source from coefficient behavior.

Reported `record_present` agreement included approximately:

```text
exact area-period agreement  0.889
Jaccard among treated union  0.600
```

For `amount_positive`, treated-union Jaccard was lower and the WBad 2013–2014 positive-amount treatment collapsed while WBkg retained treated cells.

This is useful measurement evidence, not a reason to reconcile the sources upstream.

## Why Track B is not automatically Track A

The recovered calibration used a reconstructed historical/canonical panel and explicit policies around those inherited products.

The newer architecture instead aims for:

```text
source snapshot
→ source-native empirical materialization
→ shared contract-backed measurement
→ validated empirical bundle
→ explicit experiment projection
→ treatment/outcome roles
→ gates / estimator
```

A result from Track B should therefore not be relabeled as a Track A result merely because the experiment question sounds similar.

The next important evidence transition is to run the current contracted path on real durable artifacts and compare the resulting support/coverage/gate evidence with the recovered calibration.

Historical coefficient equality is not an acceptance criterion. Explained divergence is allowed when the measurement apparatus changed for defensible reasons.

## Current experiment surfaces

| Experiment surface | Current empirical state | Current readiness |
|---|---|---:|
| **Recovered WB → ACLED calibration** | Real recovered area-period E1/E2 checkpoint exists. | **REAL CALIBRATION COMPLETED**; interpret as recovered-lane evidence only. |
| **Contracted investment → contracted ACLED** | Upstream verticals + generic harness boundary + downstream treatment derivation exist. | **NOT RUN on canonical real current artifacts** |
| **GeoGCDF → ACLED** | Contracted GeoGCDF measurement path and contracted ACLED path exist. | **NOT RUN** as a declared real experiment |
| **Jobs-related investment → ACLED** | Annotation protocol exists; source facts are intentionally separate from jobs treatment semantics. | **BLOCKED** pending validated annotation/use design and contracted experiment projection |
| **Afrobarometer spatial experiment** | Survey-native substrate is being built; historical rounds/mappings exist in archive. | **BLOCKED** pending current source-native survey materialization and explicit exposure/outcome design |
| **DHS-linked experiment** | Survey substrate is designed to preserve household/person/cluster grains. | **BLOCKED** pending real ingestion + scientific-use specification |

## Core gate families

The active harness should continue to gate candidate experiments on:

1. **data / lineage integrity**;
2. **timing**;
3. **treatment / comparison support**;
4. **outcome coverage and sparsity**;
5. **pretreatment balance / selection**;
6. **placebo / falsification behavior**;
7. **synthetic signal recovery**;
8. **spatial precision / ambiguity / bandwidth sensitivity** where relevant.

The exact gate implementation can evolve in the harness. This page should remain the human-facing interpretation layer rather than duplicating every report schema.

## What should be updated after the next real contracted run?

When a current contract-backed real-data experiment is executed:

1. identify the exact upstream dataset/measurement/run artifacts;
2. identify the experiment specification and projection rules;
3. record projected observed/structural-zero/outside/unresolved counts;
4. record treated/control support and timing coverage;
5. record gate states before estimator interpretation;
6. link to the reproducible harness artifacts;
7. compare against recovered evidence where useful, but explain differences rather than forcing parity;
8. update only the statuses supported by that run.

Do not turn synthetic acceptance into a GREEN real-data gate.

## Interpretation rule

The board exists to answer:

> **What exactly has been established, under which empirical architecture, and what is still permission rather than evidence?**

That is more useful than a single global statement that “the pipeline works.”
