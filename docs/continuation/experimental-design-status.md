---
title: Experimental Design Status
sidebar_position: 2
description: Current authority overlay for experiment design, scientific roles, estimator choices, and their boundary with calibration.
last_verified: "2026-09-09"
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

## What changed on September 8–9, 2026

The initial small-effect credibility ladder is now complete rather than aspirational.

1. DHS HR official-report commissioning passed 8 / 8 checks.
2. Current GeoGCDF → ACLED E2 passed E0–E6 on the real 47-country frame.
3. R0 froze the exact analysis identity and prepared frame.
4. R1 measured detector resolution across `0–0.20 SD`.
5. R2 calibrated a bounded inference family on known truth.
6. R3 characterized country/period/unit influence.
7. R4 added deeper timing and structured-null falsification.
8. R5 characterized sparse-outcome severity/incidence/count representations.
9. Briggs (2017) supplied the first external published positive control and is now closed.

The canonical fatalities estimate remains small/imprecise (`+0.550`, SE `0.458`, about `0.0176 SD`). The instrument's own detector curve says effects around `0.02 SD` are difficult to distinguish, while `0.05 SD` is usually observable under the frozen synthetic world.

This is exactly why observability remains separate from substantive inference.

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
- synthetic recovery targets are not substantive hypotheses;
- once a calibration question is answered, prefer a new validation dimension over additional specification search.

## Current E2 reference status

The reference is a real current-artifact design:

```text
GeoGCDF project_count > 0 at t
→ ACLED VAC fatalities at t+1
+ VAC fatalities at t-1
+ period FE
+ country FE
+ ADM2-clustered covariance
```

The analysis universe is upstream-authority-bounded: the 47 GeoGCDF treatment-covered countries must also exist in governed GADM and certified ACLED coverage. Treatment-zero semantics are not extended to countries outside the GeoGCDF MeasurementContract.

## Closed small-effect credibility results

### Detector characterization

```text
0.00 SD → null rejection ≈ 0.02
0.02 SD → weak detection
0.05 SD → usually observable
0.10+ SD → essentially certain under frozen synthetic worlds
```

### Uncertainty calibration

The predeclared ADM2-cluster, finite-country-cluster, and wild-country-bootstrap procedures disagree about rejection behavior without changing the point estimate. They were characterized, not selected by observed-data favorability.

### Influence / concentration

No one country or high-influence ADM2 explains the canonical coefficient. Period dependence is materially stronger; omitting 2011–12 flips the fatalities sign.

### Falsification

The t−2 and future-treatment placebos are very small. The canonical coefficient is not especially extreme under the structured within-country complete-treatment-history permutation null (`p ≈ 0.176`, calibration reading only).

### Sparse outcomes

The canonical remains fatalities OLS. Predeclared alternative representations show clearer positive incidence/count associations:

```text
OLS event count  +0.0549 SD
LPM any VAC      +2.04 percentage points
PPML event count IRR 1.348
```

These models have different natural units. They do not replace the canonical fatalities estimator because they produce stronger-looking statistics.

## External calibration boundary — Briggs closed

Internal injection can prove that the estimator recovers known truth generated inside the apparatus. It cannot rule out every self-consistent implementation or measurement mistake.

Briggs (2017) therefore supplied a complementary external test.

Two conclusions are now frozen:

1. **DHS wealth-location measurement = STRONG POSITIVE CONTROL.** Independent historical DHS calculations reproduce published intermediate quantities essentially to rounding precision.
2. **Full Briggs analogue = QUALITATIVE POSITIVE CONTROL.** Under explicitly documented source/geography substitutions, the richest-share coefficient remains positive and larger than poorest under trimming, equal-country weighting, and every country omission; numerical coefficient parity is not claimed.

This benchmark is closed. Do not tune historical geography, source semantics, or exclusions merely to move the analogue coefficient toward the published value.

## What is no longer a design priority

Do not continue the sequence below as if it were unfinished:

```text
full detector curve
uncertainty calibration
influence characterization
stronger timing falsification
Briggs positive control
sparse-outcome family
```

Those questions have been answered for this wave.

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

## Next design/calibration priorities

```text
1. supported-environment rerun of the closed E2 packet
   — archival numerical acceptance, not a new design search

2. DHS displacement-aware spatial exposure
   — the next major scientific-use and commissioning frontier

3. current World Bank spatial-period measurement when it supplies
   an independent donor comparison to GeoGCDF

4. Breckner–Sunde only after regular-grid geography and calendar-month
   semantics exist as truthful shared infrastructure

5. cross-source / convergent-validity benchmarks where independent
   empirical systems measure the same latent quantity
```

Estimator complexity should never repair a design that fails measurement, support, timing, falsification, uncertainty calibration, or external validation.

See [September 2026 Calibration Wave Closure](../experiments/calibration-wave-2026-09.md) for the detailed evidence packet.
