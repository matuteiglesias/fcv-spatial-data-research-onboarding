---
title: Current Research Status
sidebar_position: 1
description: Current state of the FCV empirical system, experiment harness, observability lab, and immediate evidence-producing work.
date: "2026-09-08"
---

# Current Research Status

The FCV project has moved from archive recovery into **scientific-instrument construction, commissioning, and real-design readiness testing**.

The active stack separates four questions that older workflows often collapsed:

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

The recovered 2021–2023 pipeline remains important research memory and genuine recovered-lane calibration evidence, but it is no longer the architectural center of the project.

## September 8, 2026: DHS commissioning checkpoint

The most important status change is that **protected real-source DHS commissioning is no longer pending**.

Canonical DHS HR ingestion now uses the authoritative fixed-width release representation distributed by DHS:

```text
.DAT + .DCT
→ verified fixed-width decoding
→ source-native HR Silver
→ codebook-backed semantic household measurements
→ aggregate external-reference commissioning
```

The convenience CSV derivatives were not treated as canonical authority after real release inspection showed that they omitted standard fields needed by the scientific design, including `HV025`, `HV206`, and `HV270`.

Three authoritative releases now have successful real HR Silver products:

| Survey | HR rows | Output columns | Row groups |
|---|---:|---:|---:|
| Nigeria 2018 (`NGHR7BFL`) | 40,427 | 4,972 | 79 |
| Uganda 2016 (`UGHR7BFL`) | 19,588 | 4,021 | 39 |
| Zambia 2018 (`ZMHR71FL`) | 12,831 | 3,316 | 26 |

The corresponding semantic products preserve exactly the initial governed registry:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

Real semantic materialization produced one row per household × registry measurement with all semantic QA GREEN and no missing, source-missing, or unmapped values in these three releases.

### External commissioning result

The current commissioning ledger is:

| Survey | Benchmarks | State |
|---|---:|---|
| Nigeria 2018 | 4 / 4 | GREEN |
| Uganda 2016 | 2 / 2 | GREEN |
| Zambia 2018 | 2 / 2 | GREEN |
| **Total** | **8 / 8** | **GREEN** |

The eight checks exercise several independent pieces of the survey machinery:

- household electricity with source-native `HV005` weights;
- de-jure electricity with `HV005 × HV012` effective weights;
- Nigeria urban de-jure wealth with `HV025 == 1` domain selection and `HV270` semantics;
- Nigeria detailed drinking-water distribution using an explicit release-local `HV201` raw-code → report-cell map verified against distributed release documentation.

All published cells recovered within the predeclared one-decimal rounding tolerance. Missing measurement weight and unmapped measurement/category weight were zero throughout.

No commissioning implementation was tuned to force agreement after seeing the results. No joined protected microdata were persisted; durable commissioning outputs are aggregate evidence and provenance only.

### What this establishes — and what it does not

This establishes:

- real protected-source HR materialization on three releases;
- source authority and source-variable recovery;
- household semantic registry behavior on real data;
- household and de-jure weighting semantics;
- denominator/domain behavior;
- release-local category semantics;
- external quantitative compatibility with eight authoritative report checks.

It does **not** establish:

- a DHS household/cluster exposure experiment;
- true-location knowledge for displaced DHS GPS coordinates;
- a survey-design-aware substantive estimator;
- causal validity of any FCV effect.

DHS HR measurement commissioning should therefore be treated as **PASSED and frozen as evidence**, while DHS spatial scientific use remains a separate downstream frontier.

## Current system state

### Reusable foundations

[`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) owns reusable identity, provenance, grain, geography/time, coverage, measurement, QA, and run-manifest contracts.

[`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) owns reusable geography authority, analytical geometry, period indexing, spatial membership, source registration, and spatial provenance.

Neither owns FCV treatment/outcome semantics or estimators.

### `fcv-empirical-data`

The empirical repository now includes source-native/contract-backed investment, ACLED, and survey verticals, including:

- AidData CLG-LMIC relational Silver;
- World Bank Projects API Silver;
- AidData GeoGCDF project geometry + contracted commitment-period measurements;
- ACLED source-native events + contracted area-period-native-event measurements;
- DHS HR, GC, and GE/GPS verticals;
- DHS HR/GC/GPS integration QA;
- codebook-backed DHS household semantic measurements;
- real external-reference DHS commissioning outputs.

### `fcv-experiment-harness`

The harness validates durable empirical artifacts before scientific use and owns explicit experiment projection, treatment derivation, timing, eligibility, gates, estimators, falsification, and the Africa Observability Lab.

The fully contracted GeoGCDF + ACLED path is implemented and synthetically accepted, but a canonical **real current-artifact experiment gate run is still not recorded**.

The reusable E2 observability engine can map a caller-declared effect-size grid to sign recovery, rejection, CI coverage, recovery error, and support diagnostics on a prepared design. `delta = 0` remains a first-class known synthetic null.

## Evidence lanes

### Lane A — current contract-backed architecture

Implemented and synthetically accepted:

- empirical bundle validation;
- ACLED projection;
- contracted investment treatment derivation;
- coverage-aware timing/absence handling;
- reusable experiment gates/estimator path;
- DHS integrated empirical/semantic substrate.

Real current-artifact GeoGCDF → ACLED acceptance remains the major missing transition.

### Lane B — observability / external commissioning

Now demonstrated:

- synthetic E2 effect-size observability machinery;
- synthetic null calibration;
- source-agnostic calibration kernel;
- **DHS external commissioning across three real releases: 8 / 8 GREEN**.

Still pending:

- real-current-artifact E2 observability characterization;
- Briggs (2017) published-study positive control;
- Breckner–Sunde after truthful grid/month infrastructure exists.

### Lane C — recovered real-data calibration

The historical/reconstructed WB→ACLED E2 lane remains genuine calibration evidence:

```text
24,852 area-periods
4,142 GIDs
4 declared WB measurement cells passed hard gates
30/30 recovery at the old predeclared 0.20-SD injected truth in every cell
```

This remains recovered-lane evidence, not a substitute for a current fully contracted run.

## The current bottleneck has moved

The highest-value next push is no longer DHS commissioning.

The next scientific-readiness checkpoint is:

```text
CURRENT durable GeoGCDF measurement
+ CURRENT durable ACLED measurement
        ↓
fully contracted experiment projection
        ↓
real support / coverage / timing / pretreatment gates
        ↓
falsification / placebo diagnostics
        ↓
estimator
        ↓
observability curve on the exact real prepared frame
```

The target is a **gate packet + estimator packet + observability packet** tied to exact hash-backed empirical inputs. A desirable coefficient is not the acceptance criterion.

After that, Briggs (2017) becomes the preferred first published-study survey positive control. Its value is precisely that the simpler DHS machinery has now been externally commissioned first.

Harness issue #16 should be reinterpreted accordingly: it remains useful as a generic provenance-validated auxiliary-input seam for the Calibration Lab and future multi-input benchmark adapters, especially Briggs, but it is no longer a blocker to the already-completed DHS commissioning evidence.

## Highest-value next work

1. **Record and preserve the DHS 8/8 commissioning checkpoint** in the human evidence ledger.
2. **Run the real current-artifact GeoGCDF → ACLED reference experiment** through its full gate sequence.
3. **Run the reusable observability curve on that exact real prepared frame**, including `delta = 0`.
4. Diagnose failures before adding estimator complexity.
5. Implement **Briggs (2017)** as the first published-study positive control once its exact source/release inputs are pinned.
6. Advance a substantive DHS exposure experiment only after household↔cluster projection, displacement-aware exposure semantics, timing, and survey-design strategy are declared.
7. Revisit Breckner–Sunde only when regular-grid/monthly support is scientifically justified as shared infrastructure.

## Interpretation policy

> **A successful materialization is not automatically an experiment.**

> **A codebook-backed empirical meaning is not automatically an experiment role.**

> **A successful experiment run is not automatically causal evidence.**

> **Synthetic detectability is not evidence that the real effect exists.**

> **A calibration benchmark is not a new FCV substantive result.**

> **Failure to match an external benchmark should be diagnosed, not tuned away.**

That separation remains the core strength of the rebuilt FCV scientific instrument.
