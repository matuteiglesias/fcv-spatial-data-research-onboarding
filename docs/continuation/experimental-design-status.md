---
title: Experimental Design Status
sidebar_position: 2
description: Current authority overlay for experiment design, scientific roles, estimator choices, and their boundary with calibration.
last_verified: "2026-11-16"
---

# Experimental Design Status

**Document status: CURRENT DESIGN AUTHORITY OVERLAY**

The compact rules remain:

> **Empirical repositories describe what was measured. Experiments decide how those measurements are used scientifically. Calibration asks whether the resulting apparatus recovers known behavior.**

## November 2026: current W5–W8 ADM2 design status

The [W5–W8 study summary](../experiments/adm2-jon-comparisons-2026-11.md) is the current substantive experiment authority. **ADM2** is the principal geography; financing exposure is assigned in its original two-year bin and ACLED VAC is measured in the following biennium. The six-period September detector-calibration record below is a separate instrument study.

| Stage | Evidence now completed | Interpretation |
| --- | --- | --- |
| **W5** donor comparison | 44,940 ADM2×biennium cells, 47 countries; CN-only minus WB-only **+0.656 pp** (95% CI [−1.699,+3.012], p=.578) with ADM2 and country-period FE | Inconclusive source comparison |
| **W6** identity and geography | 2,535 donor-qualified projects; 19,588 deduplicated project–ADM2–biennium links; donor-count conservation | Source-project exposure bridge PASS |
| **W7** full-universe sector classification | Full 2,535-project ledger, 0 evidence-reviewed paid-employment labels; mapped six-family native sectors and outcome-blind bounded 100-project audit (0 clear mapping errors, 2 semantic ambiguities) | Sector proxy is accepted as a screening instrument, not measured job creation |
| **W7** FE VAC screen | Broad candidate-minus-other: **CN −0.025 pp** (CI [−2.913,+2.862], p=.986); **WB −1.502 pp** (CI [−6.551,+3.548], p=.552) | Inconclusive; broad WB support thin |
| **W8** common-support ADM2 J/O/N | Completed six donor/policy/control configurations with same-stratum J-target standardization, 1,999-country-block bootstrap and prior-VAC diagnostic | Descriptive three-group comparisons complete |

**W8 groups:** J = candidate employment/productivity sector-only; O = other-sector-only; N = no **China/WB source-recorded project** in or before the current financing period within W5's observed 2001–2014 history. Both/mixed projects remain separate in the master frame. For each donor, an exact country×finance-period stratum enters only if all J/O/N groups exist; shared weights yield three differences but only two independent contrasts: **J−O=(J−N)−(O−N)**.

| W8 broad / cleaner N | Strata | Countries | J/O/N ADM2-periods | Standardized J−N | O−N | J−O |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| **China** | 128 | 39 | 1,448 / 2,576 / 13,082 | **+0.09 pp** | **+9.64 pp** | **−9.55 pp** |
| **World Bank** | 11 | 10 | 86 / 87 / 484 | **+6.02 pp** | **+10.00 pp** | **−3.98 pp** |

**The main W8 diagnostic:** China J−O was **−9.96 pp in the preceding recorded VAC period**, versus **−9.55 pp subsequently** (a +0.41 pp change). Earlier investments occur in some J/O cells, so the previous outcome is not guaranteed pre-first-exposure, but this comparison shows a substantial persistent baseline-risk difference. China O has weighted Kish effective N≈83 despite 2,576 area-periods; WB O effective N≈34 and only 10 countries. The contrast is a country-period standardized *level* comparison and does **not** equal W7's ADM2-FE coefficient.

**Status gate:** W8 sample construction, shared weights, algebra, versioned v1 receipts, country-block bootstrap and code validation are **DONE**. A jobs-and-wages mechanism estimate is **not** claimed: explicit jobs objective / indirect local paid-work labels still await source-supported adjudication. ADM3, planned/completed stages, outcome-year shifts and person-weighting remain outside the frozen ADM2 design.

Canonical source: [W8 frozen design](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W8_ADM2_JON_SCIENTIFIC_DESIGN_V0.md), [W8 scientific results](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W8_ADM2_JON_SCIENTIFIC_RESULTS_20261116.md), and [18-contrast index](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/results/w8_jon_adm2_matched_contrasts_20261116.csv).


---

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

## Historical calibration wave: September 8–9, 2026

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

## Other design/calibration priorities (separate from Eric’s jobs study)

```text
1. supported-environment rerun of the closed E2 packet
   — archival numerical acceptance, not a new design search

2. DHS displacement-aware spatial exposure
   — the next major scientific-use and commissioning frontier

3. World Bank spatial-period measurement is available for the locked
   W5 research source period; further dates/releases require a new contract

4. Breckner–Sunde only after regular-grid geography and calendar-month
   semantics exist as truthful shared infrastructure

5. cross-source / convergent-validity benchmarks where independent
   empirical systems measure the same latent quantity
```

Estimator complexity should never repair a design that fails measurement, support, timing, falsification, uncertainty calibration, or external validation.

See [September 2026 Calibration Wave Closure](../experiments/calibration-wave-2026-09.md) for the detailed evidence packet.
