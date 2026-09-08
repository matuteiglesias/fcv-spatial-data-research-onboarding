# FCV Spatial Data Research Onboarding

Human-facing documentation and collaboration layer for the FCV spatial-data scientific-instrument project.

This repository is **not** the empirical-data implementation and it is **not** the experiment/calibration engine. Its job is to help collaborators understand the research system, its current evidence state, scientific boundaries, experiment readiness, observability/commissioning results, and recovered 2021–2023 research memory.

The public site is deployed at:

- https://fcv-spatial-data-research-onboardin.vercel.app/

## Current research system

The implementation is deliberately split across reusable foundations and FCV-owned layers.

- [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) — typed empirical identity, provenance, grain, geography/time, coverage, measurement, QA, and run-manifest contracts.
- [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) — geography authority, period indexing, analytical membership, source registration, and spatial provenance.
- [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) — source-native facts and reusable empirical measurements. It does **not** own treatment/control/outcome roles or estimators.
- [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) — experiment projection, treatment derivation, timing, eligibility, gates, estimators, falsification, and the Africa Observability Lab.

The compact rule is:

> **Facts are produced upstream; scientific roles are assigned in experiments; known-behavior calibration characterizes the instrument; readiness is summarized here.**

## September 8, 2026 commissioning checkpoint

The DHS HR measurement arm has now crossed protected real-source commissioning.

Canonical HR ingestion uses the authoritative fixed-width DHS release representation:

```text
<release>.DAT + <release>.DCT
→ verified fixed-width decode
→ contract-backed HR Silver
→ codebook-backed semantic measurements
→ external-reference commissioning
```

Three real DHS releases were materialized successfully:

| Survey | HR rows | Output columns | External checks |
|---|---:|---:|---:|
| Nigeria 2018 | 40,427 | 4,972 | 4 / 4 GREEN |
| Uganda 2016 | 19,588 | 4,021 | 2 / 2 GREEN |
| Zambia 2018 | 12,831 | 3,316 | 2 / 2 GREEN |

**DHS commissioning result: 8 / 8 GREEN.**

The checks cover more than one descriptive percentage. They exercise:

- survey/release identity;
- `HV206` electricity semantics;
- source-native `HV005` household weights;
- `HV005 × HV012` de-jure population weighting;
- `HV025` urban-domain selection;
- `HV270` survey-relative wealth-quintile semantics;
- release-local `HV201` drinking-water categories;
- denominator and missing/unmapped-code accounting.

Nigeria's detailed drinking-water benchmark mapped every observed positive-weight `HV201` code from distributed release documentation. No improved/unimproved or safe/unsafe classification was inferred.

Commissioning produced aggregate evidence only; no joined protected microdata were persisted. The benchmark implementations did not need to be tuned to force agreement with the reports.

This establishes **external commissioning of the DHS HR measurement system across three releases**. It does **not** establish a DHS spatial-exposure experiment, causal validity, or survey-design-aware substantive inference.

## Current scientific frontier

DHS HR commissioning is no longer the main FCV readiness bottleneck.

The highest-value next evidence transition is the first **real current-artifact fully contracted GeoGCDF → ACLED experiment**, followed by detector characterization on that exact prepared frame:

```text
contract-backed GeoGCDF measurement
+ contract-backed ACLED measurement
→ explicit experiment projection
→ real support / coverage / timing / placebo gates
→ estimator
→ effect-size observability curve + synthetic null
```

The acceptance criterion is not a desirable coefficient. It is a coherent real-data gate packet plus observability evidence that states what the design can and cannot resolve.

After that, **Briggs (2017)** is the preferred published-study positive control for survey weighting, survey-region geography, donor-project aggregation, and regression behavior. Breckner & Sunde (2019) remains deferred until regular-grid geography and monthly/subannual time semantics can be represented truthfully.

Harness issue #16 should now be understood as a **generic Calibration Lab integration prerequisite**, especially for published-study adapters such as Briggs, rather than as a blocker to the already-completed DHS commissioning runs.

## Main current pages

- `docs/current-status.md` — current evidence state and next scientific-readiness transitions.
- `docs/research-system.md` — empirical, experiment, and instrument-characterization boundaries.
- `docs/experiments/observability-lab.md` — Africa Observability Lab and calibration boundaries.
- `docs/experiments/calibration-benchmark-catalog.md` — completed DHS commissioning and next positive controls.
- `docs/experiments/experiment-surface-catalog.md` — substantive experiment surfaces and current blockers.
- `docs/data-products/validation-status.md` — evidence ledger separating current architecture, commissioning/observability, and recovered calibration.

## Evidence language

Keep these evidence levels distinct:

1. software/synthetic implementation acceptance;
2. real source-backed empirical materialization + QA;
3. real experiment gate evidence;
4. synthetic observability / detector characterization;
5. external commissioning / known-behavior recovery;
6. substantive estimator result.

A successful materialization is not automatically an experiment. A codebook-backed measurement is not automatically an outcome or control. A synthetic injection is not evidence that a real effect exists. A reproduced external statistic or published pattern is instrument-calibration evidence, not a new FCV substantive claim. A GREEN gate is permission to investigate further rather than proof of causal identification.

## Recovered archive

The recovered archive remains part of the project's research memory, but it is no longer the automatic source of current canonical empirical products. Historical notebooks and outputs remain useful for reconstruction, parity, calibration history, and scientific context.

## Maintenance rule

Update this site when a technical change alters collaborator-facing architecture, research status, evidence state, calibration/commissioning readiness, or scientific boundaries.

Do not mirror every implementation detail here. Preserve historical pages as historical evidence and keep the current status/readiness pages explicitly current.
