---
title: Continuation Work Index
sidebar_position: 1
description: Current reading map for the active FCV empirical research phase.
date: "2026-08-17"
last_verified: "2026-08-23"
---

# Continuation Work

This section is the active working layer for the FCV research program.

The archive-recovery phase established what existed and how the 2021–2023 work fit together. The current phase has moved further: the research now has reusable contract/spatial foundations, an FCV empirical-data domain, an experiment harness that consumes contract-backed measurements, and a concrete multi-file DHS empirical stack at household/cluster grains.

For the shortest project summary, start with [Current Research Status](../current-status.md). For repository ownership and source-of-truth boundaries, use [Research System Architecture](../research-system.md).

## Current operating model

```text
empirical-data-contracts
+ spatial-data-foundation
        ↓
fcv-empirical-data
    source-native facts / measurements
        ↓
validated empirical boundary
        ↓
fcv-experiment-harness
    experiment projection
    treatment/outcome/timing roles
    gates / estimator / falsification
        ↓
human-facing status and interpretation here
```

The compact rule is:

> **Facts are produced upstream; scientific roles are assigned in experiments; readiness is summarized here.**

## Recommended reading order for active work

1. [Current Research Status](../current-status.md)
2. [Research System Architecture](../research-system.md)
3. [Current Empirical Data Authority](../data-products/current-data-authority.md)
4. [Empirical Product Catalog](../data-products/product-catalog.md)
5. [DHS Empirical Stack](../data-products/products/dhs-overview.md) when working on survey research
6. [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md)
7. [Research Workflow and Validation](./experimental-infrastructure.md)
8. [Validation Status](../data-products/validation-status.md)
9. [Experimental Design Status](./experimental-design-status.md)
10. [Source Data Implementation Status](./source-data-implementation-status.md)
11. [Project Classification Status](./project-classification-status.md)

Use the large historical/reference memos after these overlays when their detail is needed.

## Current documents versus reference documents

### Current authority/status pages

- **Empirical Product Catalog** — what current source-native/measurement objects actually exist and their natural grains.
- **DHS Empirical Stack** — current HR/GC/GE-GPS composition, displacement boundary, and remaining survey-experiment work.
- **Experiment Surface Catalog** — which research questions are executable, partial, blocked, or historically exercised.
- **Research Workflow and Validation** — active measurement → experiment → gate operating model.
- **Experimental Design Status** — current scientific-use boundary and design state.
- **Source Data Implementation Status** — which source capabilities are implemented versus still candidates.
- **Project Classification Status** — current boundary between derived annotation and experiment treatment.
- **Validation Status** — current contract-backed evidence versus recovered real-data calibration evidence.

### Reference / design-history pages

- [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md) — detailed recovered design genealogy, matching/regression architecture, candidate estimators, and historical treatment definitions.
- [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md) — detailed recovered jobs/local-implementation coding manual.
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md) — June 2026 source landscape and recommendations.
- [Dataset Inventory](../data-products/dataset-inventory.md) — recovered `2023_Duke` / `spatial_data` artifact inventory.

These reference pages remain useful; they are no longer the first place to infer current technical authority.

## Current implementation state

The active architecture now includes:

- released reusable empirical contracts;
- reusable shared geography and period infrastructure;
- an FCV empirical-data kernel with source-native materialization/provenance rules;
- AidData CLG-LMIC and World Bank Projects API investment Silver paths;
- a contract-backed GeoGCDF spatial investment path;
- a source-native and contract-backed ACLED violence path;
- a reusable survey-native substrate;
- **DHS HR household Silver** preserving source design facts and source weights at household grain;
- **DHS GC cluster covariate Silver** with explicit temporal semantics and no area-period coercion;
- **DHS GE/GPS cluster Silver + reported-coordinate geography** preserving displacement uncertainty and linkage discrepancies;
- a harness-side validated empirical input seam;
- explicit experiment measurement projection;
- downstream treatment derivation over contracted investment measurements;
- existing gate, calibration, placebo, and signal-recovery machinery.

This is materially beyond the earlier phase where the immediate task was simply to connect the harness to recovered `GID × TimePeriod` files or build a generic survey substrate.

## Evidence tracks

Keep two histories separate.

### Current contract-backed architecture

The architecture and its synthetic/adversarial acceptance are implemented across the core panel paths and the new DHS source verticals.

For unrestricted current products, a canonical real-data experiment run over materialized source-native artifacts should be recorded explicitly when executed.

For DHS, the next empirical-evidence transition is a protected local source run summarized only through non-sensitive survey/file identities, hashes, counts, QA, linkage discrepancies, GC availability/temporal summaries, and GPS membership-status evidence. That still does not constitute a scientific DHS experiment until a downstream design consumes the products explicitly.

### Recovered real-data calibration

The reconstructed panel already produced real E1/E2 calibration evidence. Those results remain useful, but they are historical/reconstruction-backed evidence rather than outputs of the new fully contracted upstream stack.

See [Validation Status](../data-products/validation-status.md) for the exact distinction.

## How source and classification work should now be pulled

Source expansion and project classification should not grow merely because more data or labels could be collected.

Pull them when they resolve a named experimental limitation, for example:

- missing post-2014 World Bank subnational location evidence;
- a jobs-related experiment that requires stable project-level annotation;
- a DHS experiment that specifically needs another recode family such as PR/IR/KR;
- a DHS exposure design that requires `possible_geography_under_displacement` rather than reported-point membership alone;
- an Afrobarometer experiment that requires source-native respondent/EA ingestion;
- a source-comparison design that requires another donor family;
- a parity question that requires recovered archive evidence.

This keeps source/annotation work connected to scientific use without allowing experiment assumptions to leak upstream.

## Current DHS continuation frontier

The highest-value DHS work is now downstream of basic ingestion:

```text
implemented HR + GC + GPS source products
        ↓
choose named survey/release + scientific question
        ↓
protected real-source acceptance
        ↓
explicit household ↔ cluster projection
        ↓
displacement-aware exposure/timing rule
        ↓
survey-design-aware experiment gates / estimator
```

Do not recreate the historical shortcut of flattening households, cluster covariates, geography, and treatment into one upstream GID-period table.

## Before interpreting an estimate

Check:

- [Validation Status](../data-products/validation-status.md);
- the exact empirical `DatasetRef` / measurement / coverage lineage used by the experiment;
- projection reports and experiment eligibility/support evidence;
- whether the result belongs to the current contracted path or the recovered calibration path;
- placebo/falsification and signal-recovery evidence where applicable;
- for DHS, cluster-linkage, displacement, survey-weight/design, and protected-source acceptance evidence.

A successful software run or a green materialization is not automatically a research result.

## Archive references

Keep the following available when historical implementation detail is needed:

- [Recovered Dataset Inventory](../data-products/dataset-inventory.md)
- [2023 Duke Overview](../main-pipeline/duke-overview.md)
- [Notebook Guide](../notebooks/notebook-guide.md)
- [Archive Map](../archive-map.md)
- [Historical Recovery Plan](../recovery-plan.md)

The archive is now research memory and parity/reconstruction evidence, not the default source of current authority.
