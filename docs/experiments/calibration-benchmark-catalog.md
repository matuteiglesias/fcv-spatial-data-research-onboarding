---
title: Calibration Benchmark Catalog
sidebar_position: 3
description: Human-facing catalog of FCV commissioning targets, published positive controls, and calibration prerequisites.
last_verified: "2026-08-23"
---

# Calibration Benchmark Catalog

**Document status: CURRENT CALIBRATION TARGET CATALOG**  
**Purpose: instrument validation, not new FCV substantive inference**

This page answers:

> **Which external or known-behavior benchmarks should the FCV instrument try to reproduce, what would they test, and what is blocking execution?**

The current benchmark strategy favors a **small complementary set** rather than a long literature-review list.

A useful benchmark should stress a component of the measurement / geography / survey / experiment machinery and provide interpretable failure modes.

## At a glance

| Benchmark | Kind | What it primarily tests | Current status |
|---|---|---|---|
| **Nigeria DHS 2018 household electricity — 59.4%** | commissioning | survey identity, HR semantics, household weights, denominator, missing values | **DESIGNED — BLOCKED ON GENERIC AUXILIARY INPUT SEAM + REAL LOCAL DATA** |
| **Nigeria DHS 2018 drinking-water distribution** | commissioning | release-local category semantics, weighting, denominator, missing/source-code behavior | **DESIGNED — SECOND DHS TARGET** |
| **Nigeria DHS 2018 urban wealth-quintile distribution** | commissioning | survey-relative wealth semantics, domain selection, weights, de jure population logic | **DESIGNED — REQUIRES AUXILIARY HR FACTS** |
| **Briggs (2017), aid targeting** | positive control / published study | DHS weighting, denominator, survey-region geography, donor-project aggregation, regression | **IMPLEMENTATION HANDOFF READY AFTER DHS COMMISSIONING** |
| **Breckner & Sunde (2019), temperature extremes and conflict** | positive control / published study | ACLED event/time/geography, structural zeros, regular grid, monthly periods, external weather | **DEFERRED — SHARED GRID + MONTHLY TIME CAPABILITY NEEDED** |
| **E2 effect-size injections** | synthetic injection | probability/quality of recovery under actual design structure | **IMPLEMENTED / SYNTHETIC PASS** |
| **E2 delta = 0** | synthetic null | false-positive behavior, sign balance, interval coverage at known zero truth | **IMPLEMENTED / SYNTHETIC PASS** |
| **WBad ↔ WBkg treatment overlap** | measurement agreement | source/measurement stability across inherited WB implementations | **REAL RECOVERED-LANE EVIDENCE EXISTS** |

## Commissioning first: Nigeria DHS 2018 electricity

The cleanest first external reference is the official Nigeria DHS 2018 final report household electricity statistic:

```text
households with electricity = 59.4%
```

Why this is valuable:

- `HV206` now has an explicit codebook-backed semantic measurement upstream;
- HR Silver preserves the source household weight `HV005` unchanged;
- the statistic has a simple authoritative numerator/denominator;
- failure modes are narrow enough to diagnose;
- no spatial exposure model or causal estimator is required.

### What Level 1 should prove

- the intended Nigeria 2018 survey/release is loaded;
- semantic electricity rows and HR source rows connect through stable `source_row_id`;
- source household weights are available without silent normalization;
- missing/source-missing/unmapped code states are accounted for explicitly;
- the benchmark denominator is reconstructible from declared source facts.

### Level 3 target

The benchmark is specifically attractive because quantitative recovery is meaningful once the exact report/release denominator semantics are matched.

The target should not be reached by tuning source handling. Any discrepancy should first be decomposed into survey identity, weight, denominator, missing-code, or release-semantics differences.

## Current generic blocker: auxiliary empirical inputs

The merged Calibration Lab kernel validates semantic measurement bundles. The first DHS benchmark additionally needs source-native HR facts such as `HV005`.

Harness issue #16 tracks a source-agnostic fix:

- preserve ordinary semantic measurement inputs;
- permit auxiliary durable datasets validated by `DatasetRef` + `RunManifest` + content hash;
- never fabricate a `MeasurementContract` for source-native auxiliary facts;
- permit explicit selection of one measurement contract from a persisted collection;
- keep weighting/join/denominator rules inside the adapter.

This is the most immediate technical prerequisite for real DHS commissioning.

## Additional DHS commissioning targets

### Detailed drinking-water source distribution

The upstream semantic measurement preserves `HV201` as a source drinking-water category code.

This benchmark can test whether release-local categories, missing codes, and weighted denominators reconstruct the official report distribution.

It should **not** infer a generic improved/unimproved or safe/unsafe water classification unless an authoritative release-specific mapping is added explicitly.

### Urban de jure wealth-quintile distribution

The Nigeria 2018 final report provides an urban de jure wealth distribution target:

```text
Poorest   4.2%
Poorer    8.0%
Middle   18.9%
Richer   30.6%
Richest  38.4%
```

This stresses more machinery than electricity:

- `HV270` survey-relative wealth quintile semantics;
- `HV005` weights;
- `HV012` de jure household-member count;
- `HV025` urban/rural domain selection;
- denominator construction.

The key scientific boundary is that wealth quintiles are relative to the survey population. Reproducing the published distribution does not make quintile values an absolute cross-survey wealth scale.

## Published positive control 1 — Briggs (2017)

**Study:** *Does Foreign Aid Target the Poorest?*

**Role:** first published-study survey/cross-source positive control after official DHS commissioning.

The benchmark stresses:

- multiple DHS survey identities;
- `HV270` wealth semantics;
- household sample weights;
- de jure population denominators;
- survey-region geography;
- historical World Bank / African Development Bank geocoded project releases;
- country fixed-effects regression;
- clustered uncertainty.

### Expected Level-2 behavior

The calibration target is the published qualitative pattern:

- richer regional population share is positively associated with aid allocation;
- the poorest-quintile share does not exhibit a corresponding stable pro-poor relationship.

This is **not** a new FCV claim about aid targeting. The benchmark asks whether the measurement and design machinery can recover a published positive-control pattern.

### Why Briggs comes after DHS commissioning

Briggs combines survey construction, region mapping, donor-project geography, and regression.

If a basic DHS household statistic does not recover first, a Briggs failure would conflate too many possible defects.

### Level-3 rule

Quantitative coefficient compatibility should be required only after exact historical DHS surveys, project releases, region construction, and reference specification are pinned.

A later or merely similar donor/ACLED release is not enough to demand historical coefficient equality.

## Published positive control 2 — Breckner & Sunde (2019)

**Study:** *Temperature extremes, global warming, and armed conflict*

This benchmark is attractive because it is complementary to the DHS lane. It stresses:

- ACLED event retention;
- event-to-space assignment;
- conflict-incidence construction;
- structural-zero / coverage semantics;
- monthly time alignment;
- external weather exposures;
- regular-grid geography;
- fixed-effects estimation.

### Why it is deliberately deferred

The paper's natural design uses:

```text
0.75° regular grid × calendar month
```

Current reusable shared infrastructure is centered on GADM analytical geography and year-based `PeriodScheme` semantics.

The correct response is **not** to encode regular-grid cells as fake GADM units or months as fake years.

Before implementing the benchmark, the project should decide whether reusable:

- regular-grid geography authority; and
- exact monthly/subannual period semantics

are justified as shared capabilities.

## Synthetic benchmark lane

The E2 observability engine now provides a benchmark family that needs no external published result.

For a caller-declared effect-size grid it asks:

> Under the actual analysis structure, estimator, treatment support, fixed effects, clustering, and observed outcome scale, how does recovery change as known truth increases?

The output is a detection curve rather than a single pass/fail power number.

The `delta = 0` cell is a known synthetic null and should remain separate from claims about the true empirical null.

## Measurement-agreement lane

The recovered E2 checkpoint already contains a useful measurement-agreement benchmark between WBad and WBkg.

For `record_present`, historical diagnostics reported approximately:

```text
exact area-period agreement  0.889
treated-union Jaccard        0.600
```

This is not a contest to select the source with the most attractive coefficient. It characterizes how much the experiment surface changes under two inherited measurement implementations.

## Recommended pull order

The current benchmark queue is intentionally short:

```text
1. issue #16 — auxiliary empirical dataset input
2. Nigeria DHS 2018 electricity commissioning
3. optional second DHS official-report statistic
4. Briggs (2017) published positive control
5. reassess the instrument-health bottleneck
6. Breckner–Sunde only if regular-grid/monthly support is then justified
```

Synthetic E2 observability can run independently wherever a prepared contracted E2 frame is available.

## Definition of ready for execution

Before a real external benchmark moves from research/design to execution, confirm:

- exact source/release identity is known;
- required data can be obtained lawfully and kept outside Git where restricted;
- each input can cross the empirical boundary truthfully;
- benchmark adapter owns source-specific weighting/join/denominator logic;
- Level-1 diagnostics can localize failure before an effect is interpreted;
- Level-2 expected behavior is declared;
- Level-3 target/tolerance is justified or explicitly not required;
- the run is labeled `purpose = calibration`.

## Technical authority

Detailed research and implementation handoffs live in:

- [`dhs_commissioning_candidates.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/calibration/dhs_commissioning_candidates.md)
- [`dhs_kernel_integration_handoff.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/calibration/dhs_kernel_integration_handoff.md)
- [`africa_benchmark_candidates.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/calibration/africa_benchmark_candidates.md)
- [`published_benchmark_implementation_handoff.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/calibration/published_benchmark_implementation_handoff.md)

For the execution architecture, see [Africa Observability Lab](./observability-lab.md).
