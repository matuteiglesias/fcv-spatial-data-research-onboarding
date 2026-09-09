---
title: September 2026 Calibration Wave Closure
sidebar_position: 4
description: Closed evidence packet for current E2 R0–R5 characterization and the Briggs (2017) external positive control.
last_verified: "2026-09-09"
---

# September 2026 Calibration Wave Closure

**Status: CLOSED CHARACTERIZATION WAVE**  
**Purpose: scientific-instrument calibration, not substantive FCV inference**

This page records the completed September 8–9 characterization wave for the current GeoGCDF → ACLED E2 instrument and the first published-study external positive control.

The wave answered two different questions:

```text
A. On the exact real E2 design, what signal sizes and uncertainty procedures are credible?
B. Can independently rebuilt FCV machinery recover known behavior reported outside the FCV codebase?
```

The answer to A is now characterized through R0–R5. The answer to B is partially positive through Briggs (2017), with a particularly strong DHS measurement-level recovery and a qualitative published-pattern recovery under documented source/geography substitutions.

## R0–R5: current E2 characterization

Canonical scientific design remained fixed throughout:

```text
GADM 4.1 ADM2
AidData GeoGCDF v3.0.1 commitment exposure
PRIMARY treatment: project_count > 0
ACLED Violence against civilians fatalities at t+1
VAC fatalities at t-1
period FE + country FE
canonical ADM2-clustered covariance
47 treatment-authorized countries
38,520 ADM2-period rows
6,420 ADM2 units
```

No robustness wave was allowed to replace the canonical specification because it produced a more attractive coefficient.

### R0 — frozen reference identity

The exact analysis design and PRIMARY prepared frame were hash-bound before characterization. The locked real run retained 47 countries and the same 38,520-row PRIMARY analysis frame used by the gate run.

**Result: reference identity frozen.**

### R1 — real-frame detector resolution

The frozen synthetic truth grid was:

```text
0.00, 0.02, 0.05, 0.10, 0.20 outcome SD
200 repetitions
root seed 20260908
```

Canonical ADM2-clustered behavior on the real frame:

| Injected effect | Rejection / recovery | Reading |
|---|---:|---|
| 0.00 SD | 0.02 rejection; 0.98 CI coverage | null behavior reassuring |
| 0.02 SD | 0.25 | weak detector region |
| 0.05 SD | 0.96 | strongly observable |
| 0.10 SD | 1.00 | essentially certain detection |
| 0.20 SD | 1.00 | essentially certain detection |

The instrument therefore has an empirical resolution boundary: effects near `0.02 SD` are difficult to distinguish reliably, while effects around `0.05 SD` are usually observable under the frozen synthetic world.

### R2 — uncertainty calibration on the exact real frame

Three predeclared inference families were characterized on identical known-truth worlds:

- canonical ADM2-clustered normal-reference covariance;
- country-clustered finite-cluster Student-t inference;
- country-level Rademacher wild bootstrap.

Null rejection behavior:

```text
ADM2_CLUSTER             0.020
COUNTRY_CLUSTER_T        0.000
WILD_COUNTRY_BOOTSTRAP   0.045
```

At `0.02 SD`, detection was roughly `0.25`, `0.345`, and `0.325` respectively. At `0.05 SD`, it was `0.96`, `0.83`, and `0.70`.

Point estimates were identical across inference methods by construction; disagreement was about uncertainty, not the estimand. The country-t procedure was highly conservative in these simulations, while the wild bootstrap was closest to nominal null rejection. No method was selected because it had the smallest SE or highest power.

**Result: uncertainty behavior characterized, not optimized.**

### R3 — influence and concentration

Country leave-one-out, period leave-one-out, ADM2 influence screening, and exact high-influence ADM2 refits were run without changing the canonical design.

The coefficient was not manufactured by one country or one ADM2. The largest country omission moved the estimate by less than one canonical SE and did not flip its sign. High-influence ADM2 deletions also did not explain the entire result.

Temporal concentration was more important. Omitting `2011–2012` changed the canonical fatalities estimate from about `+0.550` to approximately `-0.138`, while other period omissions also moved it materially.

**Result: geographic concentration limited; temporal heterogeneity substantial.**

### R4 — falsification

The existing t−1 placebo remained small. Additional falsifications were also small:

```text
t−2 placebo             ≈ 0.0039 outcome SD
future-treatment placebo ≈ 0.0034 outcome SD
canonical real estimate  ≈ 0.0176 outcome SD
```

A structured null permuted complete ADM2 treatment histories within countries while preserving country membership, country-period treatment prevalence, and the distribution of serial treatment patterns.

The observed canonical coefficient was not especially extreme under that calibration null:

```text
observed beta              +0.550
empirical two-sided p       0.176
```

This is not a causal randomization-test p-value. It says the observed geographic pairing is not unusually extreme relative to this structured null.

**Result: fake timing is clean; canonical fatalities estimate remains compatible with a structured null.**

### R5 — sparse-outcome family

The fatalities outcome has zero share `0.9222`, which supplied a scientific reason to test representation rather than a coefficient-seeking excuse.

The canonical remained OLS fatalities. Three predeclared robustness representations were added:

| Representation | Natural result |
|---|---|
| OLS fatalities | `+0.550` fatalities; `+0.0176 SD` |
| OLS VAC event count | `+0.270` events; `+0.0549 SD` |
| LPM any VAC event | `+2.04` percentage points |
| PPML VAC event count | IRR `1.348`; average marginal contrast `+0.203` events |

Raw coefficients across these models are not commensurate and are not compared as if they shared units.

The alternative event-incidence/count representations point in the same positive direction and are clearer than the fatalities severity measure. This does not retroactively transfer every R1–R4 diagnostic to the alternative estimators, and it does not replace the canonical fatalities result.

**Result: coherent positive incidence/count pattern; weak fatalities severity signal.**

## Closed interpretation of current E2

The current instrument passes measurement/support/gate checks and can recover known signals. Its approximate real-frame resolution is now empirically known. The actual canonical fatalities estimate is only about `0.018 SD`, exactly in the weak-resolution region identified by the detector curve.

The appropriate interpretation is therefore:

> **The scientific apparatus is substantially healthier than the substantive evidence is strong. The canonical fatalities association is very small and imprecise; timing falsifications are clean; geographic concentration is limited; temporal heterogeneity matters; the structured-null result is not extreme; and alternative incidence/count representations show a clearer positive association.**

No strong causal effect claim follows from this characterization.

## Briggs (2017) external positive control

Briggs was used because internal synthetic recovery can miss a self-consistent implementation error. The benchmark therefore asked whether FCV could recover behavior that existed outside the FCV codebase.

### Statistical oracle

The supplied replication `.do` and `.dta` reproduce the published Table 3 values, including the preferred logged-value model:

```text
log richest share   +0.72034   SE 0.20316
log poorest share   +0.10460   SE 0.08568
within R²            0.23685
N = 195 regions, 17 countries
```

Those replication files were treated as evaluation oracles, not as inputs to the independent reconstruction.

### Strong DHS measurement positive control

The historical DHS transformation independently recovered published intermediate quantities essentially to rounding precision. Examples include Kenya and Ghana regional wealth-quintile shares such as Nairobi's share of Kenya's richest quintile, Rift Valley's share of Kenya's poorest quintile, Greater Accra's share of Ghana's richest quintile, and Northern Ghana's share of Ghana's poorest quintile.

The independently reconstructed rule used the published semantics:

```text
household wealth class: HV270
sample weight: HV005
de-jure household size: HV012
region: HV024
person-equivalent weight = HV005 × HV012
regional share within quintile = regional mass / country quintile mass
```

**Classification: `DHS_WEALTH_MEASUREMENT = STRONG_POSITIVE_CONTROL`.**

### Pragmatic source reconstruction

Exact historical parity was not available for every layer. The pragmatic lane documented rather than hid those substitutions:

- 7 retained countries and 65 regions versus Briggs's 17 countries and 195 regions;
- current GADM 4.1 regional geography instead of exact historical GAUL/survey-era entities;
- source-informed but not source-proven historical AidData parent/child semantics;
- replication data never used as an input.

The first independent analogue produced:

```text
log richest share   +2.3275
log poorest share   +0.9488
within R²            0.1419
N = 65 regions, 7 countries
```

This is not numerical parity. It is qualitative alignment: both coefficients are positive and the richest-share coefficient remains materially larger.

### Bounded closure diagnostics

Without changing any source rule, geography mapping, weight, estimator, or log offset:

- Briggs-style trim: richest coefficient `2.1651`;
- equal-country weighting: `2.3590`;
- seven leave-one-country-out richest coefficients: `1.8398–3.0837`;
- richest coefficient positive in every omission;
- poorest coefficient below richest in every bounded diagnostic;
- largest movement occurred when omitting Mozambique and strengthened rather than erased the richest association.

**Overall Briggs classification: `QUALITATIVE_POSITIVE_CONTROL`.**

Numerical parity is explicitly not claimed.

## What this calibration wave established

```text
DHS source/semantic commissioning        PASS
current E2 real gates                    PASS
real-frame detector resolution           CHARACTERIZED
uncertainty behavior                     CHARACTERIZED
geographic/unit influence                ACCEPTABLE
period stability                         HETEROGENEOUS
fake timing                              CLEAN
structured-null extremity                WEAK / NOT EXTREME
sparse-outcome representation            COHERENT INCIDENCE/COUNT PATTERN
Briggs DHS intermediate measurement      STRONG POSITIVE CONTROL
Briggs full independent analogue         QUALITATIVE POSITIVE CONTROL
```

This is not collapsed into one scalar instrument score.

## Residual caveat: numerical environment

The R0–R5 real runs used a system stack that emitted a SciPy/NumPy compatibility warning. A supported-environment rerun remains useful archival housekeeping before exact numerical packets are treated as final numerical authority. It no longer blocks closing the scientific characterization wave because analysis identities, frame identities, source artifacts, and qualitative conclusions are recorded.

## Next calibration frontier

The current E2 R0–R5 characterization and Briggs benchmark are closed. The next work should add genuinely different evidence rather than more specifications around the same coefficient.

Priority order:

```text
1. archive/reproduce the closed E2 packet in a supported numerical environment
   (housekeeping, not a new scientific frontier)

2. advance DHS spatial-exposure commissioning
   - household ↔ cluster projection
   - displacement-aware exposure
   - survey/exposure timing
   - PSU/strata/weight strategy
   - linkage/support/displacement gates

3. build a current World Bank spatial-period measurement only when it adds
   a genuinely independent donor comparison to the existing GeoGCDF path

4. Breckner & Sunde (2019) external positive control after truthful
   regular-grid geography + calendar-month infrastructure exists

5. add cross-source / convergent-validity benchmarks where two independent
   measurement systems can test the same latent empirical quantity
```

The rule remains: **prefer new calibration dimensions over specification proliferation on a benchmark that has already answered its question.**
