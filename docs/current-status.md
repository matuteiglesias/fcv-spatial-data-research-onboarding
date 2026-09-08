---
title: Current Research Status
sidebar_position: 1
description: Current state of the FCV empirical system, experiment harness, observability lab, and immediate evidence-producing work.
date: "2026-09-08"
---

# Current Research Status

The FCV project has moved from archive recovery into **real scientific-instrument characterization**.

The active stack separates four questions:

```text
1. WHAT WAS MEASURED?
   source facts + reusable empirical measurements

2. HOW IS IT USED SCIENTIFICALLY?
   experiment projection + roles + timing + eligibility

3. CAN THE APPARATUS RECOVER KNOWN SIGNALS?
   observability / calibration / external commissioning

4. WHAT DOES THE SUBSTANTIVE ESTIMATE SAY?
   estimator output after the preceding gates
```

## September 8: two major real-data checkpoints

### 1. DHS HR external commissioning — PASSED

Canonical DHS HR ingestion uses official fixed-width `.DAT + .DCT` releases.

| Survey | HR rows | External checks |
|---|---:|---:|
| Nigeria 2018 | 40,427 | 4 / 4 GREEN |
| Uganda 2016 | 19,588 | 2 / 2 GREEN |
| Zambia 2018 | 12,831 | 2 / 2 GREEN |
| **Total** |  | **8 / 8 GREEN** |

This commissions survey identity, `HV206`, `HV270`, release-local `HV201`, `HV005`, `HV005 × HV012`, `HV025`, denominator construction, and missing/unmapped accounting. It does not establish a substantive DHS spatial-exposure design.

### 2. Real current-artifact GeoGCDF → ACLED E2 — GATES PASSED

The modern current-artifact chain now exists end to end:

```text
GADM 4.1 ADM2
+
AidData GeoGCDF v3.0.1 commitment-area-period Gold
+
coverage-certified ACLED area-period-native-event Gold
        ↓
47-country current E2 reference lattice
        ↓
E0–E6
        ↓
reference estimate
```

The upstream treatment product explicitly excludes 22 unresolved GeoGCDF project geometries under the governed `exclude_unresolved` policy; commitment time was fully resolved. ACLED structural zeros are licensed only through a separate explicit coverage-certified derivative. The reference lattice is scoped to the 47 countries for which GeoGCDF treatment coverage is actually licensed.

Reference frame:

```text
N                  38,520 ADM2-period observations
ADM2 units           6,420
countries                47
periods                    6
PRIMARY treated        7,667
PRIMARY controls      30,853
within-period support    6/6
```

### Gate result

All declared PRIMARY gates were GREEN:

| Gate | Result |
|---|---|
| E0 input universe / pre-post completeness | GREEN — 0 pre/post missing |
| E1 pooled treatment support | GREEN — 7,667 / 30,853 |
| E2 within-period support | GREEN — 6 / 6 |
| E3 VAC fatality sparsity | GREEN — zero share 0.9222 |
| E4 pretreatment balance | GREEN — `|SMD| = 0.0040` |
| E5 prior-outcome placebo | GREEN — `0.0047` outcome SD |
| E6 0.20-SD synthetic signal recovery | GREEN — 30 / 30 |

The positive-reported-amount STRESS treatment also passed all declared gates.

### Reference estimate

PRIMARY calibration estimate:

```text
effect   +0.54999 fatalities
SE        0.45819
z         1.20
```

This is **not strong substantive evidence of a real treatment effect**. That distinction matters: the instrument passed its support, falsification, and positive-control gates without requiring a desirable coefficient.

The first run emitted a SciPy/NumPy compatibility warning. A clean supported-environment reproduction is therefore required before freezing the numerical packet as canonical. The qualitative gate pattern is already real current-artifact evidence.

## Current frontier: tiny-effect credibility

The previous bottleneck was whether the current empirical chain could support a coherent real E2 experiment. That transition has now been crossed.

The next ladder is:

```text
1. reproduce the same gate packet in a supported numerical environment
2. run the full real-frame observability grid including delta = 0
3. characterize uncertainty estimators under known injected truth
4. run influence / leave-one-country-out / leave-one-period-out stability
5. strengthen timing falsification and negative controls
6. run Briggs (2017) as an external published positive control
7. add count/binary/spatial-correlation estimator sensitivities only where diagnostics justify them
```

The objective is not to accumulate specifications. It is to determine whether signals much smaller than 0.20 SD can be distinguished from:

- ordinary outcome noise;
- miscalibrated standard errors;
- spatial dependence;
- influential countries/periods/units;
- treatment-definition choices;
- timing artifacts;
- outcome-family choices;
- measurement uncertainty.

## Highest-value next machinery

### Real-frame observability

The existing observability engine already reports effect-size recovery, rejection, sign recovery, CI coverage, recovery error, sample/cluster counts, and a first-class `delta = 0` null. The current frozen grid is `0, 0.02, 0.05, 0.10, 0.20 SD`.

### Uncertainty calibration

For tiny effects, standard-error behavior becomes as important as point-estimate recovery. The next reusable instrument should compare a small predeclared uncertainty family on the **same injected real frame**, for example:

- canonical ADM2-clustered covariance;
- country-clustered / small-cluster-aware inference;
- wild-cluster inference;
- spatial-HAC / Conley-style covariance over a declared distance grid where scientifically justified.

The target is coverage and false-positive calibration, not choosing the smallest SE.

### Influence and stability

A tiny effect is not robust if one country or period determines it. Add a declarative stability packet for:

- leave-one-country-out;
- leave-one-period-out;
- high-leverage / high-influence units;
- treatment-support changes under each omission.

### Falsification

The existing prior-outcome placebo is clean. The next useful falsification family is explicit fake timing / lead treatment and permutation-style negative controls that preserve the relevant clustering/support structure.

### External controls

Briggs (2017) remains the preferred next published-study positive control because internal synthetic recovery can still miss a self-consistent implementation error. External known behavior is complementary evidence.

## Other FCV frontiers

- **DHS spatial exposure:** HR measurement is commissioned; household↔cluster projection, displacement-aware exposure, timing, survey design, and survey-compatible inference remain.
- **World Bank → ACLED:** current source-native Silver exists, but a current spatial/period measurement equivalent to the GeoGCDF path remains to be built.
- **Breckner–Sunde:** deferred until regular-grid geography and monthly periods exist truthfully.

## Interpretation policy

> **A successful experiment run is not automatically causal evidence.**

> **Synthetic detectability is not evidence that the real effect exists.**

> **A small coefficient can coexist with a healthy instrument.**

> **Robustness machinery should characterize uncertainty and fragility, not search for significance.**

That separation is now the central strength of the rebuilt FCV scientific instrument.
