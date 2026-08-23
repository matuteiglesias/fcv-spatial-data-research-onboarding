---
title: FCV Spatial Data Research Workspace
sidebar_position: 1
description: Orientation to the active FCV empirical system, experiment harness, Africa Observability Lab, and recovered research archive.
date: "2026-08-23"
---

# FCV Spatial Data Research Workspace

This site is the human-facing entry point to an active FCV scientific-instrument project built on top of a recovered research archive.

The current system now separates five things that should not be collapsed:

```text
source facts
→ reusable empirical measurements
→ scientific experiment roles
→ instrument characterization / commissioning
→ substantive inference
```

The recovered 2021–2023 work remains valuable research memory, parity material, and real historical calibration evidence. It is no longer the default architecture for new empirical work.

## Start here

For most collaborators, read in this order:

1. [Current Research Status](./current-status.md) — what exists now and the highest-value next evidence transitions.
2. [Research System Architecture](./research-system.md) — where responsibilities and sources of truth live.
3. [Africa Observability Lab](./experiments/observability-lab.md) — how the instrument is characterized against known behavior.
4. [Calibration Benchmark Catalog](./experiments/calibration-benchmark-catalog.md) — current external commissioning and positive-control targets.
5. [Empirical Product Catalog](./data-products/product-catalog.md) — current source-native and reusable measurement products.
6. [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md) — substantive research surfaces that are runnable, partial, or blocked.
7. [Research Workflow and Validation](./continuation/experimental-infrastructure.md) — the path from measurement through gates, observability, commissioning, estimation, and interpretation.
8. [Validation Status](./data-products/validation-status.md) — what has actually passed and under which evidence lane.
9. [Archive Map](./archive-map.md) — recovered historical material.

If your work is on DHS, also read [DHS Empirical Stack](./data-products/products/dhs-overview.md) and [DHS Household Semantic Measurements](./data-products/products/dhs-household-measurements.md).

## The active architecture

```text
REUSABLE FOUNDATIONS
empirical-data-contracts
spatial-data-foundation
        ↓

FCV EMPIRICAL DOMAIN
fcv-empirical-data
        ↓

FCV SCIENTIFIC USE
fcv-experiment-harness
        ↓

FCV INSTRUMENT CHARACTERIZATION
Africa Observability Lab
        ↓

HUMAN STATUS / RESEARCH MEMORY
this site
```

### Reusable foundations

[`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) owns reusable typed empirical contracts.

[`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) owns reusable geography/time authority and membership machinery.

### Empirical domain

[`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) preserves source-native facts, natural grains, durable materializations, reusable empirical meanings, coverage, provenance, QA, parity, and integration evidence.

It does not own treatment/control roles or causal interpretation.

### Scientific use

[`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) validates empirical bundles, projects measurements into experiment roles, derives treatment downstream, applies timing/eligibility, runs gates, and reuses estimators.

### Instrument characterization

The same harness now contains the **Africa Observability Lab**:

- calibration benchmark kernel;
- commissioning / positive / negative controls;
- reusable synthetic injection curves;
- synthetic null calibration;
- measurement-agreement characterization;
- Level 1 / 2 / 3 recovery states;
- multidimensional instrument-health reporting.

Every such benchmark is explicitly `purpose = calibration` and is not a substantive FCV result.

## What exists now

### Contract-backed panel machinery

The current ACLED path crosses the empirical boundary as a contracted area-period-native-event measurement. The experiment explicitly selects taxonomy, value, and timing.

The current investment path supports GeoGCDF contracted measurements, and the harness can derive treatment from a contracted measurement under explicit eligibility/rule semantics.

The active fully contracted panel path has synthetic acceptance; a canonical real current-artifact run is still pending in this human ledger.

### DHS empirical stack

DHS has moved well beyond generic survey substrate work:

```text
HR + GC + GPS
      ↓
integration QA
      ↓
codebook-backed household semantic measurements
```

The first reusable household meanings are electricity access, survey-relative wealth quintile, and drinking-water source code.

The integration layer preserves source-only cluster support and identifier discrepancies rather than building a convenience mega-table.

Protected real-source integrated acceptance remains pending.

### Reusable E2 observability

The historical one-point `0.20 SD` injection check has become an effect-size detector-characterization engine.

It can measure sign recovery, rejection, CI coverage, recovery error, and uncertainty across a caller-declared effect-size grid on the existing E2 design substrate.

`delta = 0` is an explicit known synthetic null.

### Calibration Lab

The merged calibration kernel supports:

```text
commissioning
positive_control
negative_control
synthetic_injection
measurement_agreement
```

and independent:

```text
Level 1 — pipeline
Level 2 — qualitative behavior
Level 3 — quantitative compatibility
```

There is no single global instrument score.

## External calibration targets are now concrete

The first planned commissioning target is the official Nigeria DHS 2018 statistic:

> **59.4% of households have electricity.**

That simple benchmark is deliberately first because it tests survey identity, `HV206` semantics, `HV005` weighting, denominator construction, and missingness without adding spatial exposure or causal estimation.

The first published-study positive control after that is **Briggs (2017), _Does Foreign Aid Target the Poorest?_**.

A complementary ACLED/weather benchmark, **Breckner & Sunde (2019)**, is deferred until regular-grid geography and monthly/subannual time semantics can be represented truthfully as reusable capabilities.

## Evidence is layered

The project now needs at least six distinct evidence labels:

| Evidence | Meaning |
|---|---|
| **Software acceptance** | controlled fixture behavior is coherent |
| **Empirical QA** | real source-backed product exists as declared |
| **Experiment gates** | a real declared design has support/coverage/diagnostics |
| **Synthetic observability** | known injected truth has characterized detectability/recovery |
| **External commissioning** | authoritative known measurement/pattern is recovered |
| **Estimator result** | a substantive declared experiment produced an estimate |

For restricted sources, synthetic acceptance is not protected-source acceptance.

A codebook-backed empirical meaning is not an experiment role.

A calibration benchmark is not a new FCV research finding.

## Recovered real-data calibration still matters

The recovered WB→ACLED E2 lane remains genuine real-data calibration evidence:

- 24,852 area-periods / 4,142 GIDs;
- four predeclared WB measurement cells passed hard gates;
- historical `0.20 SD` injection recovery was 30/30 in every cell;
- WBad/WBkg agreement diagnostics show material measurement differences.

That evidence is not automatically a current fully contracted run or a new Observability Lab commissioning result.

## The current bottleneck is increasingly diagnostic, not architectural

The project no longer mainly needs “more pipeline.”

The strongest near-term sequence is:

```text
close generic calibration auxiliary-input gap (#16)
→ commission Nigeria DHS 2018 electricity
→ record protected DHS integrated acceptance
→ run current durable GeoGCDF + ACLED experiment + observability
→ implement Briggs after simple DHS commissioning passes
```

Failures along this sequence should guide the next engineering/scientific investment.

## Interpretation discipline

Do not assume that:

- a missing row means zero/control/no event/no project;
- source amounts are local spending;
- reported DHS coordinates are true undisplaced locations;
- survey source weights are already analysis weights;
- a semantic measurement is automatically an outcome/control;
- synthetic detectability means a real effect exists;
- a published benchmark recovery is a new substantive finding;
- a failed benchmark should be tuned away;
- recovered coefficients are acceptance targets for the rebuilt measurement system.

The architecture exists precisely to make these distinctions inspectable.

## Historical material

For archaeology, parity, and prior-design reconstruction, use:

- [2023 Duke Overview](./main-pipeline/duke-overview.md)
- [Recovered Dataset Inventory](./data-products/dataset-inventory.md)
- [Notebook Guide](./notebooks/notebook-guide.md)
- [Historical Recovery Plan](./recovery-plan.md)

The archive is now research memory, not the default source of current authority.
