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

## November 2026: W5 baseline → W6 project bridge → W7 jobs experiment

**Current scientific target:** employment-relevant versus other projects, conditional on donor and source geography, followed by subsequent ACLED VAC. The September calibration record below documents instrument health but is not a substitute for this research comparison.

| Layer | Actual state | Scientific interpretation |
| --- | --- | --- |
| **W5 China vs World Bank** | **DONE**: 44,940 ADM2×biennium observations, next VAC, source-locked code; adjusted CN-only minus WB-only +0.656 pp (95% CI [−1.699, +3.012]; p=.578). | Observational donor baseline, not an employment effect. |
| **W6 data structure** | **DONE**: 2,535 projects, 19,588 deduplicated project–ADM2–period exposures, exact per-cell donor-count conservation. | A reliable project-level annotation insertion point; native-sector proxies remain high / low / uncertain. |
| **W7 coding definitions** | **CLOSED**: Eric's narrow explicit employment objective, plausible indirect productive channel and their union; our local implementation and financing-only exclusions remain separate evidence fields. | No need for another general clarification email. Coding definitions can be implemented. |
| **W7 source coverage and proxy support** | **DONE**: all 2,535 project identities indexed; outcome-blind donor/category/geography screen; 120-project bounded review queue. Source Silver has titles and sectors, **not full project objectives/descriptions**. | The proxy support is measurable; validated direct/indirect jobs labels still require evidence. |
| **W7 exploratory sector-proxy VAC** | **DONE, NOT A JOBS EFFECT**: one frozen China high-only minus low-only sector comparison: **−0.787 pp**, 95% CI **[−3.952, +2.379]**, p=.619, 47-country clustered nested-FE LPM. | A statistically inconclusive source-sector sensitivity, not evidence about created jobs or a causal impact. |
| **Real jobs-vs-other VAC; ADM3 matching; Afrobarometer** | **NOT YET ESTIMATED** | Validated editorial labels and adequate country/period support are prerequisites for the first. ADM3 matching and survey outcomes are separate later experiments. |

### What the actual support says

For *source-exclusive* financing cells, China has **1,807 high-only** and **3,020 low-only** proxy observations (2,356 mixed/uncertain); **41 countries** contain both categories, across **95 country-periods**. World Bank has **564 high-only** and **268 low-only** (2,840 mixed/uncertain), but only **13 countries and 6 country-periods** contain both. The conservative W7 inferential screening gate passes for the China proxy and fails for the World Bank proxy. This is **not** a reason to discard WB; its multisector categories and evidence must be handled differently, without relabeling them as non-jobs.

Cross-recipient geography remains a separate measurement problem. W6 records **1,022 Chinese project–area-period links** (174 projects) outside the source recipient country. Excluding any China-only cell carrying such links leaves **1,503 high-only** and **2,939 low-only** proxy observations, with 39 common countries. The original source-panel denominator remains unchanged unless an alternative design is explicitly declared.

### The work packet and remaining narrow pull

The **PL-015 W7 jobs-versus-other VAC packet** is frozen in Research Group Ops at `packets/2026-11-16_PL015_W7_JOBS_VAC_WORKPACKET.md`. Its current status is **G0 labels semantics PASS; G1 identity/source metadata PASS; G2 review index PASS but actual editorial labels incomplete; G3 sector-proxy support screened; G4a sector-proxy VAC explored; G4b real jobs-vs-other VAC NOT RUN**.

The old 20-example sample has **zero exact China-project ID overlap** with W5 and is for rubric calibration only. A new audit found **seven review flags** in those 20 legacy labels, including two jobs-positive/channel-none inconsistencies; proposed corrections are saved separately, leaving the original sheet intact. The next bounded operation is source-text enrichment and review for a **120-project donor×sector-stratified, outcome-blind queue**, not thousands of speculative LLM labels.

**First real jobs-effect gate:** each project admitted to a jobs-only or confirmed-other-only exposure must have source-text-grounded, sufficiently reviewed labels; unknown/mixed exposures remain out of those groups; support must survive fixed-effect identification and honest geographic restrictions. Only then estimate the next-biennium VAC comparison. Neither-source-recorded does **not** mean permanently untreated. If the text/support gate fails, return a quantified scientific blocker rather than invent labels or coefficients.

See [Project Classification Status](./project-classification-status.md), the [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md), and the [W6 versioned data bridge](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W6_JOBS_CLASSIFICATION_BRIDGE.md).

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
