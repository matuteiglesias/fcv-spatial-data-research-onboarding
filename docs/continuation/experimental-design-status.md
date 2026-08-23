---
title: Experimental Design Status
sidebar_position: 2
description: Current authority overlay for experiment design, scientific roles, estimator choices, and their boundary with calibration.
last_verified: "2026-08-23"
---

# Experimental Design Status

**Document status: CURRENT DESIGN AUTHORITY OVERLAY**

The detailed [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md) remains useful design history. Read it through the current architecture.

The compact rules are now:

> **Empirical repositories describe what was measured. Experiments decide how those measurements are used scientifically. Calibration asks whether the resulting apparatus recovers known behavior.**

## Current scientific boundary

```text
empirical-data-contracts
+ spatial-data-foundation
        ↓
fcv-empirical-data
  source facts + reusable measurements
        ↓
fcv-experiment-harness
  experiment projection
  treatment/outcome/covariate roles
  timing / eligibility / comparison sample
  gates / estimator / falsification
        ↓
Africa Observability Lab
  commissioning / controls / injection / agreement
```

The calibration layer is inside the harness but should remain conceptually distinct from substantive experiment design.

## Current design principles

The following remain active:

- treatment is experiment-specific;
- timing is explicit;
- geography/exposure rules are scientific parameters;
- counterfactual families are distinct designs;
- effective support matters more than row count;
- gates precede coefficient interpretation;
- falsification is part of design;
- matching is one estimator family, not the design itself;
- survey weights/design facts remain upstream facts until an experiment chooses their inferential use;
- codebook-backed survey meaning is not an experiment role;
- calibration recovery targets are not substantive hypotheses.

## Current contracted experiment capability

The harness validates:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
        ↓
EmpiricalMeasurementBundle
```

Experiment projection then owns:

- selectors/categories;
- value column;
- scientific role;
- timing offset;
- geography linkage;
- coverage interpretation;
- downstream transforms.

Treatment derivation can operate over contracted investment measurements with explicit eligibility and threshold/rule semantics.

Unknown absence does not become zero and unavailable measurement does not silently become control.

## Observability is now an explicit design diagnostic

The old question:

> can the E2 estimator recover a single 0.20-SD injected signal?

has become:

> across a declared effect-size grid, what is the probability and quality of recovery under the existing design?

The reusable observability engine characterizes:

- sign recovery;
- rejection;
- joint detection;
- interval coverage;
- estimate distribution;
- recovery error;
- sample/support context.

This is stronger design evidence than one MDE or one injected effect point, but it still does not prove that the real effect exists.

## Calibration benchmark boundary

A `CalibrationBenchmarkSpec` is not another substantive experiment spec.

It declares `purpose = calibration` and a known-behavior target such as:

- official DHS report statistic;
- published positive-control pattern;
- negative control;
- synthetic injected truth;
- measurement agreement.

Recovery is tracked independently at Level 1 pipeline, Level 2 qualitative, and Level 3 quantitative compatibility.

A benchmark may use a regression while still being calibration rather than substantive inference.

## Evidence state: three lanes

### A. Current contract-backed experiment path

Implemented/synthetic:

- empirical bundle validation;
- ACLED projection;
- coverage-aware timing/absence handling;
- contracted treatment derivation;
- existing gates/estimator reuse.

Real current-artifact canonical run remains pending.

### B. Observability / commissioning

Implemented:

- E2 effect-size observability engine;
- synthetic null calibration;
- generic calibration benchmark kernel;
- instrument-health reporting.

Designed/not run:

- Nigeria DHS 2018 commissioning;
- Briggs 2017 positive control;
- Breckner–Sunde benchmark.

### C. Recovered real-data calibration

Historical WBad/WBkg → ACLED E2 remains genuine real-data calibration evidence and design genealogy.

It is not automatically current contracted or external commissioning evidence.

## Historical treatment vocabulary

Names such as:

```text
cnwb_pooled
wb_only
cn_only
jobs_any
jobs_direct
jobs_indirect
pure_control
```

should be read as recovered/candidate experiment vocabulary, not required upstream columns.

If revived, they should be explicitly derived from current measurements and retain provenance.

## Annotation boundary

Project annotations may be derived empirical/review facts.

An experiment decides whether they affect:

- eligibility;
- treatment;
- subgroup analysis;
- exclusions;
- descriptive stratification.

Annotation is not causal meaning by default.

## Counterfactual status

No global counterfactual is canonical.

Candidate families include:

- never/pure controls where coverage justifies absence interpretation;
- matched controls;
- future/planned project locations;
- within-area longitudinal contrasts;
- multi-arm investment comparisons;
- triangulation across several designs.

These define different estimands and assumptions.

## Estimator status

Estimator choice remains downstream of measurement, support, timing, and observability.

Candidate families include:

- descriptive comparisons;
- OLS calibration;
- matching estimators;
- longitudinal / staggered-treatment designs;
- count/rate/hurdle models where warranted;
- future spatial/spillover-aware methods.

Estimator complexity should not repair a design that fails basic measurement or commissioning tests.

## Current design priorities

The latest harness work changes the priority order.

1. close the generic calibration auxiliary-input seam tracked in issue #16;
2. commission the DHS survey measurement system against Nigeria 2018 electricity before building a complex DHS exposure design;
3. run the real current-artifact GeoGCDF → ACLED reference experiment and observability curve;
4. use failures/discrepancies to decide whether the next bottleneck is measurement, geography, time, support, or model design;
5. implement Briggs after simpler DHS commissioning passes;
6. broaden estimator families only when the instrument and design justify it.

## Reading order

1. [Research System Architecture](../research-system.md)
2. [Africa Observability Lab](../experiments/observability-lab.md)
3. [Research Workflow and Validation](./experimental-infrastructure.md)
4. [Calibration Benchmark Catalog](../experiments/calibration-benchmark-catalog.md)
5. this page
6. [Validation Status](../data-products/validation-status.md)
7. [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md) for detailed historical design genealogy.
