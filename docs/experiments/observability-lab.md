---
title: Africa Observability Lab
sidebar_position: 2
description: Human-facing map of FCV instrument characterization, calibration benchmarks, synthetic detectability, and commissioning.
last_verified: "2026-09-09"
---

# Africa Observability Lab

**Status: FIRST CURRENT-E2 CHARACTERIZATION WAVE CLOSED THROUGH R5**  
**External controls: DHS commissioning PASS; Briggs (2017) QUALITATIVE POSITIVE CONTROL**  
**Purpose: calibration, not substantive FCV inference**

The Africa Observability Lab asks:

> **Given the empirical measurement system and a declared scientific design, what known behavior can the apparatus recover, at what effect scale, and with what uncertainty?**

## Benchmark kinds

The harness supports first-class `purpose = calibration` work for:

- commissioning;
- positive controls;
- negative controls;
- synthetic injection;
- measurement agreement;
- uncertainty calibration;
- influence/concentration characterization.

Recovery remains separated into:

```text
Level 1 — pipeline coherence
Level 2 — qualitative known behavior
Level 3 — quantitative compatibility
```

## Current E2: R0–R5 closed

Reference surface:

```text
47 GeoGCDF-covered countries
6,420 GADM ADM2 units
38,520 unit-period rows
6 treatment periods
GeoGCDF project_count > 0
→ ACLED VAC fatalities at t+1
```

All declared E0–E6 PRIMARY gates were GREEN. The positive-reported-amount STRESS cell also passed.

The canonical real fatalities estimate is approximately `+0.550` fatalities with SE `0.458`, equivalent to about `0.0176 outcome SD`. It is not strong substantive evidence.

### R0 — reference identity

The exact PRIMARY analysis frame and analysis identity were frozen before characterization. Robustness layers reuse the same declared design rather than silently changing the analysis universe.

### R1 — detector curve

The full frozen real-frame grid has now been executed:

```text
0.00 SD
0.02 SD
0.05 SD
0.10 SD
0.20 SD
```

Canonical ADM2-clustered results establish a useful empirical resolution boundary:

| Effect size | Joint detection / rejection |
|---|---:|
| 0.00 SD | 0.02 false rejection; 0.98 CI coverage |
| 0.02 SD | 0.25 |
| 0.05 SD | 0.96 |
| 0.10 SD | 1.00 |
| 0.20 SD | 1.00 |

The current design is therefore weakly informative around `0.02 SD`, usually informative by `0.05 SD`, and highly observable by `0.10 SD` under the frozen synthetic world.

### R2 — uncertainty calibration

Three predeclared procedures were applied to identical known-truth worlds:

```text
ADM2_CLUSTER
COUNTRY_CLUSTER_T
WILD_COUNTRY_BOOTSTRAP
```

Null rejection rates were approximately `0.020`, `0.000`, and `0.045`. The country-t procedure was highly conservative in this simulation; the wild bootstrap was closest to nominal null size. Point estimates were identical across methods; only uncertainty changed.

No procedure was selected because it produced a smaller SE or larger power.

### R3 — influence / concentration

Country omissions and exact high-influence ADM2 refits do not show one geographic unit manufacturing the result. Temporal dependence is materially stronger: omitting `2011–2012` flips the canonical fatalities coefficient, and several other period omissions move it substantially.

**Reading: geographic concentration limited; temporal heterogeneity important.**

### R4 — falsification

The t−1 placebo remains clean. Additional fake timing checks are also small:

```text
t−2 placebo              ≈ 0.0039 outcome SD
future-treatment placebo ≈ 0.0034 outcome SD
```

The structured within-country complete-treatment-history permutation null places the observed canonical coefficient inside an ordinary part of the null distribution (`empirical two-sided p ≈ 0.176`). This is calibration evidence, not a causal randomization test.

**Reading: timing falsification reassuring; canonical fatalities coefficient not unusually extreme under the structured null.**

### R5 — sparse-outcome representation

Outcome sparsity supplied a scientific reason to test representation. The canonical remains OLS fatalities.

| Representation | Natural summary |
|---|---|
| fatalities OLS | `+0.550` fatalities; `+0.0176 SD` |
| event-count OLS | `+0.270` events; `+0.0549 SD` |
| any-VAC LPM | `+2.04` percentage points |
| event-count PPML | IRR `1.348`; AME `+0.203` events |

Raw coefficients are not cross-model comparable. The incidence/count representations are directionally coherent and clearer than the fatalities severity measure, but they do not replace the canonical result and have not each inherited the full R1–R4 battery.

## Briggs (2017) external positive control — closed

Briggs supplied the first published-study test that did not originate inside the FCV apparatus.

Two results should remain distinct.

### DHS intermediate measurement

Independent historical DHS reconstruction using `HV270`, `HV005 × HV012`, and `HV024` reproduces published regional wealth-quintile quantities essentially to rounding precision.

**Classification: STRONG POSITIVE CONTROL.**

### Full pragmatic aid-targeting analogue

Exact historical parity was not available for every layer. The reconstruction therefore declared substitutions rather than tuning toward the published coefficient:

- 7 retained countries / 65 regions versus 17 / 195;
- GADM 4.1 rather than exact historical survey-era/GAUL geography;
- source-informed AidData parent/child heuristics;
- replication `.dta` never used as an input.

The analogue recovered the qualitative rich-over-poor ordering but not numerical parity. The richest-share coefficient remained positive under Briggs-style trimming, equal-country weighting, and every country leave-one-out run (`1.8398–3.0837`). The poorest coefficient remained smaller throughout.

**Classification: QUALITATIVE POSITIVE CONTROL; numerical parity not claimed.**

## Instrument-health view after the closed wave

| Dimension | State |
|---|---|
| source / contract integrity | real governed products |
| DHS official commissioning | **PASS — 8 / 8** |
| current E2 gates | **PASS** |
| detector resolution | **CHARACTERIZED** |
| uncertainty calibration | **CHARACTERIZED** |
| influence / concentration | **CHARACTERIZED** |
| timing falsification | **CHARACTERIZED / CLEAN** |
| structured-null extremity | **NOT EXTREME** |
| sparse-outcome family | **CHARACTERIZED** |
| Briggs DHS measurement | **STRONG POSITIVE CONTROL** |
| Briggs full analogue | **QUALITATIVE POSITIVE CONTROL** |

No scalar instrument score should replace these dimensions.

## What is no longer the active pull order

The previous ladder — detector curve, uncertainty calibration, influence, stronger falsification, Briggs, sparse-outcome family — is **complete for this wave**. Do not continue adding E2 specifications merely because more models are available.

## Next calibration pull order

```text
1. supported-environment rerun of the closed numerical packet
   — archival housekeeping, not a new calibration question

2. DHS spatial-exposure commissioning
   — household↔cluster projection
   — displacement-aware exposure
   — survey/exposure timing
   — survey-design-aware support/inference

3. current World Bank spatial-period measurement if it supplies
   a genuinely independent donor comparison

4. Breckner & Sunde (2019) once regular-grid geography and
   calendar-month periods exist truthfully

5. cross-source / convergent-validity benchmarks that test the
   same latent quantity with independent measurement systems
```

## Interpretation firewall

> **Synthetic recovery does not prove a real effect exists.**

> **A healthy detector can legitimately return a small, imprecise real coefficient.**

> **External commissioning or positive-control recovery does not create a new substantive FCV finding.**

> **Robustness and uncertainty checks characterize fragility; they are not a significance search.**

> **Once a calibration question has been answered, the next useful move is usually a different calibration dimension.**

See [September 2026 Calibration Wave Closure](calibration-wave-2026-09.md) for the detailed evidence packet.
