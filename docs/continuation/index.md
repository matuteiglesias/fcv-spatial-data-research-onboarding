---
title: Continuation Work Index
sidebar_position: 1
description: Current reading map for the active FCV empirical, experiment, and observability phase.
date: "2026-08-17"
last_verified: "2026-08-23"
---

# Continuation Work

The active FCV program is now operating as a scientific-instrument project rather than an archive-recovery exercise.

The current stack is:

```text
empirical-data-contracts
+ spatial-data-foundation
        ↓
fcv-empirical-data
  source-native facts + reusable measurements
        ↓
fcv-experiment-harness
  scientific projection + gates + estimators
        ↓
Africa Observability Lab
  known-behavior calibration + commissioning
        ↓
human status / interpretation here
```

## Recommended reading order

1. [Current Research Status](../current-status.md)
2. [Research System Architecture](../research-system.md)
3. [Africa Observability Lab](../experiments/observability-lab.md)
4. [Calibration Benchmark Catalog](../experiments/calibration-benchmark-catalog.md)
5. [Empirical Product Catalog](../data-products/product-catalog.md)
6. [DHS Empirical Stack](../data-products/products/dhs-overview.md) for survey work
7. [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md)
8. [Research Workflow and Validation](./experimental-infrastructure.md)
9. [Validation Status](../data-products/validation-status.md)
10. [Experimental Design Status](./experimental-design-status.md)
11. [Source Data Implementation Status](./source-data-implementation-status.md)
12. [Project Classification Status](./project-classification-status.md)

## Current authority/status pages

- **Current Research Status** — shortest full-system snapshot and next evidence transitions.
- **Research System Architecture** — ownership/boundary map.
- **Africa Observability Lab** — calibration kernel, observability engine, recovery semantics, and commissioning boundary.
- **Calibration Benchmark Catalog** — authoritative/published targets and prerequisites.
- **Empirical Product Catalog** — current empirical products and grains.
- **DHS Empirical Stack** — HR/GC/GPS/integration/semantic survey state.
- **Experiment Surface Catalog** — substantive FCV experiment surfaces only.
- **Research Workflow and Validation** — empirical → experiment → gates → observability/commissioning → estimation.
- **Validation Status** — three evidence lanes: current contracted architecture, observability/commissioning, recovered calibration.
- **Experimental Design Status** — current downstream scientific-use choices.
- **Source Data Implementation Status** — implemented versus candidate empirical source capabilities.
- **Project Classification Status** — annotation versus treatment boundary.

## What materially changed in the latest harness wave

The experiment harness now has three additional capabilities that should change how we plan research:

### Reusable observability

The old one-point E2 injection check is now an effect-size grid characterizing sign recovery, detection, interval coverage, and recovery error under the existing design.

### Calibration Lab kernel

Known-behavior checks are first-class `purpose = calibration` runs with commissioning, positive/negative controls, synthetic injection, measurement agreement, and independent Level 1/2/3 recovery states.

### External benchmark queue

The research queue is now concrete:

```text
issue #16 — generic auxiliary empirical input
→ Nigeria DHS 2018 electricity commissioning
→ Briggs 2017 positive control
→ reassess instrument bottleneck
→ Breckner–Sunde only after truthful grid/month support
```

This means the next question is increasingly **what the instrument fails to recover**, not simply what additional pipeline component can be built.

## Current DHS continuation frontier

DHS now has:

```text
HR + GC + GPS
→ integration QA
→ codebook-backed household measurements
```

The preferred continuation path is:

```text
close calibration auxiliary-input seam
→ protected real DHS materialization
→ official DHS report commissioning
→ explain discrepancies
→ choose substantive outcome/exposure
→ household ↔ cluster scientific projection
→ displacement-aware exposure
→ survey-design gates / estimator
```

This is more diagnostic than jumping directly from source ingestion to a treatment-effect regression.

## Current panel continuation frontier

GeoGCDF + ACLED is still the strongest current contract-backed panel reference surface.

The next valuable real run should ideally produce **both**:

```text
experiment gate/estimator evidence
+
observability curve evidence
```

so we know not only what the estimate is but what signal magnitudes the same apparatus could recover.

## Evidence tracks

### Current contract-backed architecture

Core source/measurement/projection/treatment machinery and the new observability/calibration software pass synthetic acceptance.

A canonical real current-artifact fully contracted panel run is still pending.

### Observability / commissioning

Synthetic E2 observability and the generic calibration kernel are implemented.

Official DHS and published-study external benchmarks are designed but not yet executed.

### Recovered real-data calibration

The historical WBad/WBkg → ACLED E2 checkpoint remains real recovered-lane evidence and should not be relabeled as current contracted or new commissioning evidence.

## Reference / design-history pages

Use these after the current overlays when their detail is needed:

- [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md)
- [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md)
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md)
- [Recovered Dataset Inventory](../data-products/dataset-inventory.md)

## Before interpreting any estimate

Check:

- exact empirical authority and hashes;
- experiment projection/timing/eligibility;
- gate evidence;
- observability evidence when available;
- external commissioning status when the component has a suitable benchmark;
- whether the result belongs to the current contracted path or recovered historical lane.

A useful operating question is now:

> **Do we know what the instrument would do when the truth is known before we ask it to interpret truth that is unknown?**
