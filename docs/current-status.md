---
title: Current Research Status
sidebar_position: 1
description: Current state of the FCV empirical system, experiment harness, observability lab, and immediate evidence-producing work.
date: "2026-09-09"
---

# Current Research Status

The FCV project has moved from archive recovery into **closed first-wave scientific-instrument characterization**.

The active stack still separates four questions:

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

## September 8–9: first calibration wave closed

Three real-data checkpoints are now complete enough to freeze as research memory.

### 1. DHS HR external commissioning — PASSED

Canonical DHS HR ingestion uses official fixed-width `.DAT + .DCT` releases.

| Survey | HR rows | External checks |
|---|---:|---:|
| Nigeria 2018 | 40,427 | 4 / 4 GREEN |
| Uganda 2016 | 19,588 | 2 / 2 GREEN |
| Zambia 2018 | 12,831 | 2 / 2 GREEN |
| **Total** |  | **8 / 8 GREEN** |

This commissions survey identity, `HV206`, `HV270`, release-local `HV201`, `HV005`, `HV005 × HV012`, `HV025`, denominator construction, and missing/unmapped accounting. It does not establish a substantive DHS spatial-exposure design.

### 2. Current GeoGCDF → ACLED E2 — R0–R5 CHARACTERIZATION CLOSED

The modern current-artifact chain is exercised end to end:

```text
GADM 4.1 ADM2
+
AidData GeoGCDF v3.0.1 commitment-area-period Gold
+
coverage-certified ACLED area-period-native-event Gold
        ↓
47-country current E2 reference lattice
        ↓
E0–E6 gates
        ↓
R0–R5 characterization
```

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

All declared PRIMARY E0–E6 gates were GREEN. The canonical fatalities estimate remains small and imprecise:

```text
effect   +0.54999 fatalities
SE        0.45819
z         1.20
≈         0.0176 outcome SD
```

This is **not strong substantive evidence**.

The completed R0–R5 wave now adds the missing credibility map:

- detector resolution: `0.02 SD` is weakly detectable; `0.05 SD` is usually observable; `0.10+ SD` is essentially certain under the frozen synthetic worlds;
- uncertainty: ADM2-cluster, finite-country-cluster, and wild-country-bootstrap procedures have now been characterized rather than selected by favorable SE;
- influence: no one country or ADM2 explains the coefficient, but period dependence is material and omitting 2011–12 flips the fatalities sign;
- falsification: t−2 and future-treatment placebos are very small; the canonical coefficient is not extreme under the structured within-country treatment-history null (`p ≈ 0.176`, calibration interpretation only);
- sparse outcomes: the positive association is clearer for VAC occurrence/frequency than for fatality severity — OLS event count `+0.0549 SD`, LPM any VAC `+2.04 pp`, PPML IRR `1.348`.

The canonical fatalities model remains primary. Alternative outcome families do not replace it and were not chosen by significance.

### 3. Briggs (2017) external positive control — CLOSED

The replication package reproduces the published Table 3 oracle. FCV then attempted an independent reconstruction rather than feeding the replication table back into the benchmark.

The strongest result is at the DHS measurement layer: historical `HV005 × HV012` regional wealth-quintile shares reproduce published Briggs intermediate quantities essentially to rounding precision.

**DHS wealth measurement classification: STRONG POSITIVE CONTROL.**

The full pragmatic aid-targeting reconstruction necessarily used documented substitutions:

```text
Briggs: 17 countries / 195 historical regions
FCV analogue: 7 countries / 65 pragmatic regions
current GADM replaces exact historical region ontology
historical AidData parent/child semantics are source-informed approximations
```

The independent analogue produced:

```text
log richest share   +2.3275
log poorest share   +0.9488
within R²            0.1419
```

versus the published `+0.7203`, `+0.1046`, and `0.2369`.

Numerical parity is not claimed. The qualitative pattern survives all bounded closure diagnostics: richest remains positive under trimming, equal-country weighting, and every leave-one-country-out run (`1.8398–3.0837`), and poorest remains below richest throughout.

**Overall Briggs classification: QUALITATIVE POSITIVE CONTROL.**

## What is now concluded

The first observability/calibration frontier is no longer “next work.” It is completed evidence:

```text
real current E2 gates             PASSED
real-frame detector curve         CHARACTERIZED
uncertainty calibration           CHARACTERIZED
influence / concentration         CHARACTERIZED
stronger falsification            CHARACTERIZED
sparse-outcome family             CHARACTERIZED
Briggs external positive control  CLOSED — QUALITATIVE
DHS Briggs intermediate measure   STRONG POSITIVE CONTROL
```

The initial R0–R5 numerical executions emitted a SciPy/NumPy compatibility warning. A supported-environment rerun remains archival housekeeping before exact numerical packets are frozen as final numerical authority; it does not reopen the scientific characterization wave.

## Next calibration frontier

The next work should add **new dimensions of evidence**, not more variants around the already-characterized E2 coefficient.

```text
1. supported-environment reproduction of the closed packet
   — housekeeping / archival acceptance

2. DHS spatial-exposure commissioning
   — household↔cluster projection
   — displacement-aware exposure
   — timing
   — PSU/strata/weight strategy
   — linkage/support/displacement gates

3. current World Bank spatial-period measurement when it creates
   a genuinely independent donor comparison

4. Breckner & Sunde (2019) after truthful regular-grid geography
   and calendar-month infrastructure exists

5. cross-source / convergent-validity benchmarks where independent
   measurement systems can test the same latent quantity
```

## Interpretation policy

> **A successful experiment run is not automatically causal evidence.**

> **Synthetic detectability is not evidence that the real effect exists.**

> **A small coefficient can coexist with a healthy instrument.**

> **External positive-control recovery validates instrument components; it does not create a new FCV substantive finding.**

> **Once a calibration question has been answered, prefer a new calibration dimension over specification proliferation.**

See [September 2026 Calibration Wave Closure](experiments/calibration-wave-2026-09.md) for the frozen R0–R5 and Briggs evidence packet.
