---
title: Experimental Design Status
sidebar_position: 2
description: Current authority overlay for experiment design, scientific roles, estimator choices, and their boundary with calibration.
last_verified: "2026-09-08"
---

# Experimental Design Status

**Document status: CURRENT DESIGN AUTHORITY OVERLAY**

The detailed [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md) remains useful design history. Read it through the current architecture.

The compact rules remain:

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

## Active design principles

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

## What changed on September 8, 2026

The DHS HR measurement system moved from synthetic/implemented to **real external commissioning**.

Three authoritative releases were materialized from canonical `.DAT + .DCT` source representations, semantic measurements were produced, and the commissioning suite recovered:

```text
Nigeria  4 / 4 GREEN
Uganda   2 / 2 GREEN
Zambia   2 / 2 GREEN
-------------------
TOTAL    8 / 8 GREEN
```

This directly commissions survey identity, `HV206`, `HV270`, `HV201`, `HV005`, `HV012`, `HV025`, denominator construction, and release-local category handling.

Therefore **basic DHS measurement commissioning is no longer the design bottleneck**.

It does not mean that a substantive DHS exposure design is ready. The remaining work there is cross-grain scientific projection, displacement-aware exposure semantics, timing, and survey-design-aware inference.

## Current contracted experiment capability

The harness validates contract-backed empirical bundles, keeps absence semantics explicit, projects measurements under declared roles/timing, and derives treatment downstream from contracted investment measurements.

The GeoGCDF + ACLED reference path is implemented and synthetically accepted.

The missing scientific transition is now a **real current-artifact experiment run**.

## Next real-design gate packet

The next reference run should expose at least:

### Data / lineage integrity

- exact input DatasetRefs / hashes;
- grain/key coherence;
- geography and period contract compatibility;
- one-for-one projection row accounting;
- unresolved/outside-coverage states visible rather than dropped.

### Treatment / comparison support

- treated and control counts;
- support by period / stratum;
- effective identifying sample;
- collapse or near-universality diagnostics;
- unavailable measurement distinct from control.

### Outcome coverage

- outcome availability after timing projection;
- structural-zero authority;
- zero inflation / sparsity;
- missing versus absent record accounting.

### Pretreatment / falsification

- pre-outcome differences;
- prior-outcome placebo;
- shifted/fake timing where meaningful;
- alternative pretreatment windows or negative-control diagnostics.

A GREEN gate means permission to investigate the estimator, not proof of causal validity.

## Observability after the gate run

The same real prepared frame should feed the reusable observability engine.

The required characterization should include:

- a caller-declared effect-size grid;
- `delta = 0` synthetic-null behavior;
- sign recovery;
- rejection / joint detection;
- CI coverage;
- recovery error;
- sample/cluster/support context.

This tells us what effect scale the actual current design can resolve. It should not be used to tune the empirical specification toward significance.

## DHS substantive design frontier

The HR measurement arm is commissioned. The substantive DHS path still needs:

1. explicit scientific role selection over commissioned semantic measurements;
2. household ↔ cluster projection;
3. named investment/exposure measurement;
4. displacement-aware spatial uncertainty rule;
5. survey/exposure timing;
6. weight / PSU / strata strategy;
7. linkage/support/displacement-sensitivity gates;
8. a survey-compatible estimator.

Public DHS GPS coordinates remain displaced measurements. Reported-coordinate geography is not true-location authority.

## Calibration boundary after DHS commissioning

Briggs (2017) is now scientifically unlocked as the next published-study positive control, subject to exact historical source/design recovery.

Harness issue #16 remains relevant as a generic Calibration Lab auxiliary-input capability, especially for multi-input benchmark adapters, but it is no longer a blocker to the completed DHS commissioning runs.

Breckner–Sunde remains deferred until regular-grid geography and monthly/subannual period semantics exist truthfully.

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

Candidate families include descriptive comparisons, OLS calibration, matching, longitudinal/staggered designs, count/rate/hurdle models where warranted, and future spatial/spillover-aware methods.

Estimator complexity should never repair a design that fails basic measurement or support gates.

## Current design priorities

1. **Run the real current-artifact GeoGCDF → ACLED reference experiment and gate packet.**
2. **Run the observability curve on that exact real prepared frame.**
3. Interpret the estimator only in light of the gate + observability evidence.
4. Use failures to decide whether the next bottleneck is measurement, geography, timing, support, or model design.
5. Recover exact sources/design for Briggs and run it as a published positive control.
6. Advance DHS spatial exposure only through explicit cross-grain/displacement-aware scientific design.
7. Broaden estimator families only when the instrument and design justify it.
