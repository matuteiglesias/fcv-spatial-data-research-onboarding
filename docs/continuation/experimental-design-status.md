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

## November 2026: China/WB baseline → jobs-related experiments

This is the **active scientific handoff** for the research with Eric Mvukiyehe. The September calibration work recorded later on this page remains useful instrument validation, but it is not the current empirical question.

| Stage | Verified state | Scientific meaning |
| --- | --- | --- |
| W5 donor baseline | **COMPLETED**: 44,940 ADM2-biennia, China/WB independent sources and subsequent ACLED VAC; main China-only − WB-only contrast +0.656 percentage points, 95% CI [−1.699, +3.012], p=.578 | Replicable observational source comparison, not a jobs comparison, causal estimate, or donor-equivalence finding. |
| W6 project-classification bridge | **COMPLETED**: 2,535 projects → 21,440 source-location rows → 19,588 unique project–ADM2–period links → same 44,940-row W5 lattice; exact cell-by-cell donor-count conservation | The data structures can carry source-versioned project classifications without overcounting locations. The first categories are sector-based screening proxies, **not annotated jobs evidence**. |
| Next: jobs versus other projects | **NOT YET ESTIMATED**: validate evidence-based direct/indirect/combined labels and compare eligible exposures against subsequent VAC under predeclared gates | This is the substantive question Eric requested; it should determine the next empirical output. |
| Later: matching and Afrobarometer | **NOT YET COMMISSIONED FOR THIS QUESTION** | ADM3 matched pairs/trios and survey-based trust/participation/democracy measures require new geography, treatment/control support and outcome-specific linkage; W5 ADM2 does not silently satisfy those conditions. |

### The classification bridge is not the treatment definition

Eric's 2023 coding guidance requests three measures: **explicit employment objectives**, **plausible indirect jobs potential**, and **their union**. The recovered July 2026 annotation prompt also distinguishes local implementation, financing-only transactions, donor-country activities, confidence, and employment channels. These are complementary, but not identical operational definitions: in particular, the original prompt's broad "jobs_direct" includes training/SME support, whereas the 2023 **narrow direct** measure requires an explicit jobs/employment objective. Preserve both concepts until adjudicated.

W6 currently carries only a source-native sector proxy (high / low / uncertain). It explicitly leaves editorial direct jobs, indirect jobs and local implementation **unannotated**. On the 2,535 projects, those sector-proxy counts are:

| Donor | Higher productive/employment potential | Lower | Mixed or uncertain |
| --- | ---: | ---: | ---: |
| China | 640 | 728 | 580 |
| World Bank | 133 | 36 | 418 |

The World Bank's many multisector entries are mostly **uncertain** under this conservative rule; treating them as confirmed non-jobs would make the downstream analysis misleading. Source metadata used for W6 has title and sector fields but does **not** provide the project objectives and descriptions required to code Eric's narrow direct measure. That evidence requires a separate versioned text-enrichment/annotation surface.

The bridge also flags 1,022 Chinese project–ADM2 mappings outside the source recipient country (174 projects). They remain for exact W5 replication but cannot be assumed equally credible local treatment locations.

See [Project Classification Status](./project-classification-status.md) for the actual label ownership and review gates and the [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md) for dataset-level completion states.

### The next experiment, in order

1. **Freeze the estimand and evidence definitions.** Define explicit jobs-objective, local productive channel, indirect-only and union measures at source-project grain. Keep "unclassified" separate from "non-jobs"; name the native source/text releases and version the coding rules. Eric's original definitions are the reference, but reconcile the stricter locality and transaction exceptions where needed.
2. **Audit the small calibration sample.** Recover the 20-project China annotation demonstration and Charlotte's review. Adjudicate internal contradictions (including two records labeled jobs-any while the channel is "none") and misleading macro-policy labels; avoid treating model-generated labels as truth.
3. **Quantify support and uncertainty before choosing coefficients.** For the same locked W5 period and area universe, report counts by donor × jobs-class × area-period, mixture, unmatched project metadata, geographic-confidence restrictions, and source-coverage gaps. Stress how conclusions would change under plausible alternative coding of uncertain projects. Use these diagnostics to decide whether a modest targeted review or a larger pre-specified classification sample is necessary.
4. **Freeze the first observational VAC comparison.** Define mutually exclusive exposure states (jobs-only, other-projects-only, mixed, neither-of-two-sources-recorded), donor-specific or donor-adjusted comparisons, timing, exclusions, FE/inference, prior violence diagnostics, and uncertainty. The W5 "neither recorded" state is **not** a certified pure no-investment control. Do not select a specification based on desirable coefficients.
5. **Promote to matching only after its own gate.** Eric's ADM3 pairs/trios and later Afrobarometer outcomes need appropriate source geography, common support, time alignment, pre-treatment covariates, and explicitly measured non-exposure. No matched ATT or survey effect is established by W5/W6.

**Next deliverable for Eric:** a compact project-category support/uncertainty table followed by one predeclared jobs-vs-other VAC diagnostic, with the remaining classification dependence visible. A sector-only regression can be labeled a proxy ablation, not an estimate of jobs creation.

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
