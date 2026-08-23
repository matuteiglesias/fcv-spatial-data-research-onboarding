---
title: Experimental Design Status
sidebar_position: 2
description: Current authority overlay for the recovered experimental-design and regression memo.
last_verified: "2026-08-23"
---

# Experimental Design Status

**Document status: CURRENT DESIGN AUTHORITY OVERLAY**  
**Last verified: 2026-08-23**

The detailed [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md) remains the main design-history and methods reference for the recovered FCV work. It should now be read through the current repository boundary.

The compact rule is:

> **Empirical repositories describe what was measured. Experiments decide how those measurements are used scientifically.**

For the full technical map, see [Research System Architecture](../research-system.md).

## Current scientific boundary

The active system is now:

```text
empirical-data-contracts
+ spatial-data-foundation
        ↓
fcv-empirical-data
    source facts / measurements
        ↓
contract-backed empirical input boundary
        ↓
fcv-experiment-harness
    measurement projection
    treatment/outcome roles
    timing / eligibility
    counterfactual / sample
    gates / estimator
    falsification / calibration
```

This matters when reading historical language such as:

```text
WB treatment
China treatment
jobs treatment
ACLED outcome
pure control
```

Those phrases are scientifically meaningful **inside a declared experiment**. They are not canonical properties of the upstream source datasets.

## What is current versus historical in the detailed memo

### CURRENT DESIGN PRINCIPLE

The following ideas remain current:

- treatment is experiment-specific;
- timing rules must be explicit;
- geography/exposure rules are scientific parameters;
- counterfactual families should be distinguished rather than mixed casually;
- effective identifying support matters more than total row count;
- validity gates precede substantive coefficient interpretation;
- placebo/falsification and signal-recovery checks are part of experiment construction;
- matching is one estimator family, not the definition of the research design;
- planned/future project locations are a candidate counterfactual family, not a universal default;
- different outcome families may require different grains and linkage rules.

### REFERENCE / DESIGN HISTORY

The detailed memo's reconstruction of:

- 2023 notebooks;
- historical source families;
- `GID × TimePeriod` panels;
- pair/trio matching designs;
- recovered treatment names;
- matching grids;
- regression prototypes;
- old covariate/outcome surfaces;

remains useful as design genealogy and recovered evidence.

It should not be interpreted as saying that those exact materialized files are the current source authority.

### SUPERSEDED IMPLEMENTATION ASSUMPTION

The old mental model:

```text
project source
→ area-period exposure table
→ treatment column
→ regression
```

is no longer the preferred architecture.

The current system inserts an explicit measurement boundary:

```text
source-native fact
→ contracted empirical measurement
→ experiment projection
→ scientific role / treatment derivation
→ gates
→ estimator
```

This prevents source engineering from silently absorbing causal-design choices.

## Current contracted experiment capability

The experiment harness now contains a generic validated empirical-input seam over:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable measurement artifact
```

The loader validates the artifact and its lineage before exposing an empirical measurement bundle to experiment code.

Experiment projection then makes scientific use explicit, including:

- taxonomy/category selectors;
- normalized value column;
- role in the experiment;
- timing offset;
- geography linkage;
- coverage interpretation;
- optional downstream transformations.

Unknown sparse absence is not converted into zero merely because an experiment would prefer a dense panel.

## Current treatment ownership

Treatment derivation now exists explicitly in the harness over contracted empirical measurements.

Conceptually:

```text
contract-backed investment measurement
        ↓
experiment projection
        ↓
declared treatment derivation rule
        ↓
treated / control / unavailable / outside eligibility
```

This is an important update to the older design memo.

A project, event, amount, or area-period record is not itself "treatment" upstream. The harness may derive treatment using a declared rule such as a threshold, category selector, source family, timing window, or future scientific mapping.

Likewise, a conflict measurement becomes an experiment outcome only when the experiment assigns it that role.

## Evidence state: do not merge two experiment histories

There are currently two evidence tracks.

### A. Current contract-backed path

Implemented and synthetically exercised:

- contract-backed empirical bundle loading;
- exact geography / period compatibility checks;
- ACLED measurement projection;
- coverage-aware structural-zero handling;
- downstream treatment derivation from contracted investment measurements;
- fully contracted experiment preflight interfaces;
- reuse of existing gate / estimator / signal-recovery machinery downstream.

A canonical human-facing real-data run using the new current source-native materializations is still a separate acceptance step and should be recorded explicitly when executed.

### B. Recovered real-data calibration path

The reconstructed panel produced real E1/E2 calibration evidence before the new source-native architecture was complete.

That evidence remains scientifically useful as:

- calibration history;
- measurement-stability evidence;
- a reference point for current real-data acceptance;
- a source of design lessons.

It must not be relabeled as if it had been generated from the current fully contracted upstream products.

See [Validation Status](../data-products/validation-status.md) for the two-track ledger.

## How to read historical treatment definitions

The detailed memo contains names such as:

```text
cnwb_pooled
wb_only
cn_only
jobs_any
jobs_direct
jobs_indirect
pure_control
```

Interpret these as one of three things:

1. **recovered experiment definitions** — what historical notebooks attempted;
2. **candidate experiment roles** — scientifically plausible definitions that may be re-expressed over current measurements;
3. **design vocabulary** — useful labels for discussing contrasts.

Do not interpret them as required columns in `fcv-empirical-data` or `empirical-data-contracts`.

If a definition becomes active again, it should be represented through explicit experiment configuration/projection and retain the measurement provenance used to derive it.

## Annotation boundary

Project classification remains scientifically relevant, but classification and treatment are distinct.

A project-level annotation such as:

```text
jobs_direct
jobs_indirect
locally_implemented
macro_policy
```

may be a derived empirical/review fact with its own provenance.

An experiment then decides whether that annotation participates in:

- treatment eligibility;
- treatment definition;
- subgroup analysis;
- exclusion rules;
- descriptive stratification.

An annotation convenience must not silently mutate source-native Silver or become causal meaning by default.

## Counterfactual status

No single counterfactual family is yet globally canonical.

Current candidate families include:

- never/pure controls where absence semantics and source coverage support that interpretation;
- covariate-matched controls;
- future/planned project locations;
- within-area longitudinal contrasts;
- multi-arm investment comparisons;
- combinations used for triangulation.

Each changes the estimand and identifying assumptions. They should be compared as distinct experiments rather than treated as interchangeable robustness switches.

## Estimator status

The current architecture deliberately keeps estimator choice downstream of measurement and preflight.

Recovered/current candidate families include:

- descriptive comparisons;
- OLS calibration;
- matching-based estimators;
- longitudinal / staggered-treatment designs;
- count/rate or hurdle-style models where outcome structure warrants them;
- future spatial/spillover-aware designs.

Estimator complexity should not be used to repair an experiment that lacks timing resolution, outcome coverage, treatment/control support, or credible counterfactual structure.

## Current design priorities

The next useful design work is driven by empirical bottlenecks rather than by expanding the estimator menu.

Near-term priorities are:

1. execute and record a real-data fully contract-backed experiment acceptance path;
2. compare its projection/support/coverage evidence with the recovered calibration history without requiring coefficient equality;
3. define the next concrete investment contrast over current measurements;
4. use the merged survey substrate to build a named DHS or Afrobarometer measurement only when a specific survey experiment is ready to consume it;
5. preserve explicit geography, period, coverage, and grain contracts as designs broaden beyond the recovered panel lane.

## Reading order

For current work:

1. [Research System Architecture](../research-system.md)
2. [Research Workflow and Validation](./experimental-infrastructure.md)
3. this page
4. [Validation Status](../data-products/validation-status.md)
5. detailed [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md) when design history or recovered implementation detail is needed.
