---
title: Africa Observability Lab
sidebar_position: 2
description: Human-facing map of FCV instrument characterization, calibration benchmarks, synthetic detectability, and commissioning.
last_verified: "2026-09-08"
---

# Africa Observability Lab

**Status: REAL CURRENT-ARTIFACT E2 GATES PASSED; FULL REAL-FRAME DETECTOR CURVE IN PROGRESS**  
**External commissioning: DHS HR 8 / 8 GREEN ACROSS THREE RELEASES**  
**Purpose: calibration, not substantive FCV inference**

The Africa Observability Lab asks:

> **Given the empirical measurement system and a declared scientific design, what known behavior can the apparatus recover, at what effect scale, and with what uncertainty?**

## Benchmark kinds

The harness supports first-class `purpose = calibration` work for:

- commissioning;
- positive controls;
- negative controls;
- synthetic injection;
- measurement agreement.

Recovery remains separated into:

```text
Level 1 — pipeline coherence
Level 2 — qualitative known behavior
Level 3 — quantitative compatibility
```

## Real E2 checkpoint — September 8, 2026

The first current fully contracted GeoGCDF → ACLED real gate run is now recorded.

Reference surface:

```text
47 GeoGCDF-covered countries
6,420 GADM ADM2 units
38,520 unit-period rows
6 treatment periods
GeoGCDF project_count > 0
→ ACLED VAC fatalities at t+1
```

All declared E0–E6 PRIMARY gates were GREEN:

- no unresolved pre/post outcome rows;
- 7,667 treated and 30,853 controls;
- treated/control support in all 6 periods;
- outcome zero share 0.9222;
- pretreatment `|SMD| = 0.0040`;
- prior-outcome placebo = `0.0047` outcome SD;
- 0.20-SD known-signal recovery = 30 / 30.

The positive-reported-amount STRESS cell also passed all gates.

The real calibration estimate was approximately `+0.550` fatalities with SE `0.458` (`z ≈ 1.20`). This is not strong substantive evidence. The point of the checkpoint is that the instrument remains healthy even when the observed coefficient is not compelling.

The initial run used a system Python stack that emitted a SciPy/NumPy compatibility warning. Clean-environment numerical reproduction is therefore part of acceptance before the exact coefficient/SE packet is frozen.

## Reusable E2 observability

The one-point historical `0.20 SD` injection check has been generalized into a detector-characterization engine. For each declared effect size and repetition it reports:

- injected truth;
- estimate / SE / CI;
- sign recovery;
- rejection;
- joint sign + rejection recovery;
- CI coverage;
- recovery error;
- sample and cluster counts;
- outcome SD;
- treatment support.

`delta = 0` is a first-class synthetic null for false-positive and interval-coverage calibration.

The frozen real-frame grid is:

```text
0.00 SD
0.02 SD
0.05 SD
0.10 SD
0.20 SD
```

The same prepared PRIMARY frame that passed E0–E6 must feed this curve. The result characterizes detector resolution; it must not be used to optimize the empirical specification toward significance.

## The next observability layer: uncertainty calibration

For very small effects, detecting the point estimate is only half the problem. The uncertainty procedure itself must behave correctly.

The next reusable calibration family should compare a deliberately small set of variance/inference procedures on **identical injected truths and identical prepared frames**. Candidate families include:

- canonical ADM2-clustered covariance;
- country-clustered / finite-cluster-aware uncertainty;
- wild-cluster bootstrap inference;
- spatial-HAC / Conley-style covariance over predeclared distance bandwidths.

The output should be a calibration table over known null/non-null truths:

```text
method
× effect_size_sd
→ rejection rate
→ CI coverage
→ median CI width
→ recovery error
```

The goal is not to select the method with the smallest SE. It is to learn which uncertainty procedures have credible false-positive and coverage behavior on the actual FCV design.

## Stability / influence characterization

Tiny effects are vulnerable to hidden concentration. A reusable stability packet should report:

- leave-one-country-out estimates and support;
- leave-one-period-out estimates and support;
- influential/high-leverage units;
- change in treatment share and effective sample under each omission;
- normalized effect movement relative to outcome SD and canonical SE.

This is more informative than adding many arbitrary regression variants.

## Stronger falsification

The current prior-outcome placebo is very clean. The next falsification family should include, where scientifically meaningful:

- fake/shifted treatment timing;
- treatment leads;
- alternative pretreatment windows;
- permutation/randomization negative controls that preserve country/period support and clustering structure.

These should be declared before inspecting whether they make the real coefficient look better or worse.

## External positive controls

### Briggs (2017)

DHS commissioning has removed the basic survey-measurement prerequisite. Briggs remains the preferred next published-study positive control because it combines survey identity, weights, population denominators, survey-region geography, donor-project geography, fixed effects, and clustered uncertainty.

It provides evidence that internal injection cannot: whether the rebuilt system can recover known behavior reported outside the FCV codebase.

### Breckner & Sunde (2019)

Still deferred. Its native `0.75° grid × calendar month` design should wait for truthful regular-grid geography and monthly/subannual period infrastructure.

## Instrument-health view

Instrument health remains multidimensional:

- source / contract integrity;
- external commissioning;
- real experiment gate behavior;
- positive controls;
- negative controls;
- synthetic detectability;
- uncertainty calibration;
- influence/stability;
- measurement agreement;
- known limitations.

No single scalar instrument score should replace these dimensions.

## Current pull order

```text
1. clean-environment reproduction of the real E2 gate packet
2. full real-frame observability curve + delta=0
3. uncertainty-calibration suite
4. influence / country-period omission stability
5. stronger timing / negative-control falsification
6. Briggs (2017) external positive control
7. only then broaden model families where diagnostics justify it
8. Breckner–Sunde when grid/month infrastructure becomes shared capability
```

## Interpretation firewall

> **Synthetic recovery does not prove a real effect exists.**

> **A healthy detector can legitimately return a small, imprecise real coefficient.**

> **External commissioning does not create a new substantive FCV finding.**

> **Robustness and uncertainty checks characterize fragility; they are not a specification search for significance.**
