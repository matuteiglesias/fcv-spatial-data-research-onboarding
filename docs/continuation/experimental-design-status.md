---
title: Experimental Design Status
sidebar_position: 2
description: Current authority overlay for experiment design, scientific roles, estimator choices, and their boundary with calibration.
last_verified: "2026-09-08"
---

# Experimental Design Status

**Document status: CURRENT DESIGN AUTHORITY OVERLAY**

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

## What changed on September 8, 2026

Two major real-data transitions are now complete:

1. DHS HR external commissioning passed 8 / 8 authoritative report checks across Nigeria, Uganda, and Zambia.
2. The current fully contracted GeoGCDF → ACLED E2 reference completed its first real gate run and passed E0–E6 for both the PRIMARY and positive-amount STRESS treatment definitions.

The real E2 PRIMARY frame contains 38,520 ADM2-period rows across 6,420 ADM2 units and 47 countries. Treated/control support exists in all six declared treatment periods. Pretreatment balance and prior-outcome placebo are very small, and the predeclared 0.20-SD positive control recovered 30 / 30 times.

The reference estimate is small/imprecise (`+0.550`, SE `0.458`, `z ≈ 1.20`). That is not a failure of the instrument; it is exactly why observability and uncertainty calibration must remain separate from substantive inference.

## Current design principles

- treatment is experiment-specific;
- timing is explicit;
- geography/exposure rules are scientific parameters;
- effective support matters more than row count;
- gates precede coefficient interpretation;
- falsification is part of design;
- observability is part of instrument characterization;
- standard-error calibration matters when target effects are small;
- robustness checks must be predeclared and cannot replace the canonical specification based on significance;
- survey weights/design facts remain upstream facts until an experiment chooses their inferential use;
- synthetic recovery targets are not substantive hypotheses.

## Current E2 reference status

The reference is now a real current-artifact design rather than a synthetic-only implementation.

```text
GeoGCDF project_count > 0 at t
→ ACLED VAC fatalities at t+1
+ VAC fatalities at t-1
+ period FE
+ country FE
+ ADM2-clustered covariance
```

The analysis universe is upstream-authority-bounded: the 47 GeoGCDF treatment-covered countries must also exist in governed GADM and certified ACLED coverage. Treatment-zero semantics are not extended to countries outside the GeoGCDF MeasurementContract.

The first numerical run emitted a SciPy/NumPy compatibility warning, so clean supported-environment reproduction is required before the exact coefficient/SE packet is frozen as canonical.

## Small-effect credibility ladder

The central design challenge is now **how to make very small effects scientifically interpretable in noisy, spatially correlated data**.

### 1. Detector characterization

Run the frozen real-frame effect grid:

```text
0.00, 0.02, 0.05, 0.10, 0.20 SD
```

Record rejection, sign recovery, joint detection, CI coverage, recovery error, and CI width.

### 2. Uncertainty calibration

The canonical estimator currently uses ADM2-clustered covariance. That is a reasonable baseline, but tiny-effect interpretation requires checking whether confidence intervals behave correctly under realistic dependence.

A bounded uncertainty suite should compare a small number of predeclared procedures on identical known-truth injections, such as:

- ADM2-clustered covariance;
- country-clustered / finite-cluster-aware inference;
- wild-cluster bootstrap inference;
- spatial-HAC / Conley-style covariance at a small declared bandwidth grid.

Acceptance should be based on false-positive and CI-coverage behavior, not whichever method produces the smallest SE.

### 3. Influence / concentration

Add declarative diagnostics for:

- leave-one-country-out;
- leave-one-period-out;
- high-leverage/high-influence ADM2 units;
- treated/control support changes;
- movement of the estimate in outcome-SD and canonical-SE units.

A tiny effect that is driven by one country or one period is not robust even when the pooled SE is small.

### 4. Stronger falsification

The existing prior-outcome placebo is clean. Next additions should be scientifically interpretable:

- shifted/fake treatment timing;
- treatment leads;
- alternative pretreatment windows;
- cluster/support-preserving permutation negative controls.

### 5. Model-family sensitivity only when warranted

The canonical VAC-fatalities outcome has zero share 0.9222. This justifies a bounded later comparison with:

- VAC event counts;
- any-VAC binary outcome;
- count/PPML or hurdle-style models if implementation and diagnostics support them.

These are different outcome/estimator families; they should not replace the canonical OLS because they look more significant.

## Counterfactual status

No global counterfactual is canonical beyond the current reference treatment/control definition.

Future candidate families include:

- never/pure controls where coverage justifies absence interpretation;
- future/planned project locations;
- within-area longitudinal contrasts;
- matched controls;
- multi-arm investment comparisons;
- triangulation across several designs.

Each defines a different estimand and assumption set.

## External calibration boundary

Internal injection can prove that the estimator recovers known truth generated inside the apparatus. It cannot by itself rule out a self-consistent implementation or measurement mistake.

Therefore Briggs (2017) remains the preferred next published-study positive control after the current E2 characterization. It stresses multiple DHS survey identities, weighting/denominators, region geography, donor-project aggregation, fixed effects, and clustered uncertainty.

Breckner–Sunde remains deferred until regular-grid geography and monthly/subannual period semantics exist truthfully.

## DHS substantive design frontier

The HR measurement arm is commissioned. The substantive DHS path still needs:

1. explicit scientific role selection;
2. household ↔ cluster projection;
3. named investment/exposure measurement;
4. displacement-aware spatial uncertainty;
5. survey/exposure timing;
6. weight / PSU / strata strategy;
7. linkage/support/displacement-sensitivity gates;
8. survey-compatible inference.

Public DHS GPS coordinates remain displaced measurements. Reported-coordinate geography is not true-location authority.

## Current design priorities

```text
1. clean-environment reproduction of the real E2 packet
2. full real-frame observability curve
3. uncertainty-calibration suite
4. country/period influence + stronger falsification
5. Briggs external positive control
6. bounded model-family sensitivity for sparse conflict outcomes
7. DHS displacement-aware spatial exposure
8. regular-grid/month infrastructure only when shared scientific demand justifies it
```

Estimator complexity should never repair a design that fails measurement, support, timing, falsification, or uncertainty calibration.
