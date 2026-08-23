---
title: Source Data Implementation Status
sidebar_position: 3
description: Current implementation overlay for the June 2026 source-data strategy memo.
last_verified: "2026-08-23"
---

# Source Data Implementation Status

**Document status: CURRENT IMPLEMENTATION OVERLAY**  
**Last verified: 2026-08-23**

The June 2026 [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md) remains useful as a source-landscape memo, but several recommendations in it are no longer merely proposals.

This page records what has actually crossed into the current architecture.

## Current implementation ledger

| Source / capability | Status | Current interpretation |
|---|---|---|
| AidData CLG-LMIC source engineering | **IMPLEMENTED** | Source snapshot → source-native relational Silver with provenance, QA, parity, and preserved parent/child structure. |
| World Bank Projects API source engineering | **IMPLEMENTED** | Downloaded page JSON snapshots → source-native project Silver preserving exact source IDs, source dates, raw representation, page provenance, QA, and parity. |
| AidData GeoGCDF spatial investment path | **IMPLEMENTED** | Source project geometry → Silver → shared spatial membership / shared periods → contracted commitment-period measurement. |
| ACLED source-native violence path | **IMPLEMENTED** | Independent FCV violence vertical; relevant as an outcome/measurement source but not part of the investment-source ontology. |
| Survey-native empirical substrate | **IMPLEMENTED FOUNDATION** | Generic survey identity, source-file/snapshot relations, natural grains, weights, geography links, variable metadata, and temporal semantics. |
| DHS Household Recode (HR) | **IMPLEMENTED** | External protected HR source → verified survey/file identity → source-native household Silver with source weights/design facts, QA, hashes, and RunManifest. |
| DHS Geospatial Covariates (GC) | **IMPLEMENTED** | External GC release(s) → cluster-native Silver + derived long view + registry-driven temporal semantics + explicit cluster measurement availability; no GID aggregation. |
| DHS GE/GPS geography | **IMPLEMENTED** | External GPS source → cluster Silver → survey/GPS identity audit → reported-coordinate spatial membership with displacement/uncertainty metadata. |
| DHS protected real-data acceptance | **NOT YET RECORDED HERE** | GitHub uses synthetic fixtures; a real protected-source execution must be reviewed through non-sensitive QA, counts, hashes, and linkage diagnostics. |
| DHS experiment integration | **NOT YET IMPLEMENTED** | HR/GC/GPS empirical products exist, but variable roles, cross-grain projection, exposure timing, displacement-aware use, survey-design estimator choices, and harness integration remain scientific-use work. |
| Afrobarometer source ingestion / measurement vertical | **NOT YET IMPLEMENTED** | The substrate exists; Afrobarometer-specific acquisition, codebook mappings, geography, weights, and measurements remain separate work. |
| IATI | **CANDIDATE / NOT IMPLEMENTED** | Still useful for multi-donor/current activity coverage and possible location evidence. |
| OECD CRS | **CANDIDATE / NOT IMPLEMENTED** | Still useful for standardized donor/project activity and source-coverage comparison. |
| World Bank PPI | **CANDIDATE / NOT IMPLEMENTED** | Infrastructure extension source; scientifically distinct from official development-finance sources. |
| AIIB / other MDB sources | **CANDIDATE / NOT IMPLEMENTED** | Potential extension lane, not part of the current reference build. |

## What changed since the June memo

### World Bank Projects API

The strategy memo described an official World Bank API pull as a recommended next step.

That engineering step now exists in [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data).

The current source-native path preserves exact World Bank source project identity, downloaded page/snapshot identity, page/record provenance, raw project representation, native date meanings, source hash validation, output hashes, QA, and parity evidence.

`boardapprovaldate` remains board approval date, `closingdate` remains closing date, and commitment fields remain source financial facts. None is automatically implementation timing, completion timing, local spending, or treatment.

The unresolved problem identified in June still matters: current World Bank project metadata is not by itself a complete modern subnational project-location system.

### AidData CLG-LMIC

The existing AidData CLG-LMIC source engineering has been migrated into the contract-backed architecture.

The current Silver representation preserves the source's relational structure rather than flattening everything into one convenience table. Borrower-ownership rows remain child rows and cannot multiply project finance merely because several child records exist.

### AidData GeoGCDF

A reference GeoGCDF path now exists:

```text
official GeoGCDF artifact
      ↓
SourceSnapshotRef
      ↓
project-geometry Silver
      ↓
shared spatial membership
      ↓
shared PeriodIndex
      ↓
contract-backed commitment-period measurement
```

The path does not centroid polygons merely for convenience, multiply project finance across intersected geography cells, define treatment/control, infer jobs categories, or turn commitment time into implementation time.

### DHS moved from foundation to concrete verticals

The June-era architecture did not yet have a source-native survey stack. That is no longer true.

The current DHS path is now:

```text
SurveyCatalogEntry
      │
      ├─ HR → household Silver
      │
      ├─ GC → cluster covariate Silver
      │        + temporal semantics
      │
      └─ GE/GPS → cluster-coordinate Silver
                   → reported-coordinate geography relation
```

#### HR

The HR vertical preserves household-within-survey grain, exact survey/file/release identity, source cluster/PSU/stratum facts, source household weights unchanged, source-native variables, QA, source hashes, output hashes, and run provenance.

It does not assign outcome/covariate roles or normalize weights for an estimator.

#### GC

The GC vertical preserves cluster-associated covariates at `survey × cluster`, plus an optional derived long `survey × cluster × source_variable` view.

Identity fields stay identifiers rather than measurements. Missing rows/values do not become zero. Temporal semantics are registry-driven and no implicit survey-year assignment or GID aggregation is performed.

#### GE/GPS

The GPS vertical preserves public reported coordinates and explicit displacement metadata at cluster-row grain, audits survey/GPS linkage discrepancies, and assigns only valid **reported coordinates** to shared analytical geography.

`reported_coordinate_membership` is not a claim about the undisplaced true cluster location. Boundary/overlap ambiguity, outside points, invalid coordinates, and displacement uncertainty remain visible.

A future displacement-aware candidate geography product is still separate work.

### What DHS still does not mean

The existence of HR/GC/GPS does not imply that:

- a DHS experiment has been run;
- HR variables have outcome/control roles;
- GC variables are automatically regression covariates;
- reported-coordinate geography is exact true-location geography;
- source weights are already the chosen analysis weights;
- household rows should be collapsed into GID × period;
- project exposure can be assigned by nearest reported DHS point without uncertainty analysis.

These are experiment-side decisions.

## Source strategy versus experiment strategy

The June memo sometimes uses phrases such as "ready for treatment" or discusses data in terms of downstream treatment construction.

Under the current architecture, interpret that language as:

> sufficiently measured and spatially/temporally usable that an experiment **may later choose** to construct a treatment from it.

A source dataset is never intrinsically treated/control.

The producing repository owns facts such as source project existence, amounts, dates, geometry, source events, household responses, cluster covariates, and reported coordinates.

The experiment harness owns choices such as which measurement is treatment/outcome/control, threshold rules, exposure time, eligible rows, survey variable roles, counterfactuals, displacement-aware exposure policy, and estimator use.

## Source families remain independent

The current architecture deliberately avoids building a universal project or survey ontology merely because several sources can eventually be combined scientifically.

- AidData CLG-LMIC and World Bank Projects API remain independent source verticals.
- GeoGCDF remains an AidData source product with its own identity and semantics.
- DHS HR, GC, and GPS remain separate products linked by verified survey/cluster identity rather than flattened upstream.
- source project IDs are not deduplicated across families by default;
- financial records are not assumed additive across sources;
- different date fields retain their source-native meanings;
- any reconciliation or cross-grain projection product must be explicit and versioned.

## Status classes for the June memo

### IMPLEMENTED SINCE THIS MEMO

Current examples now include:

- World Bank Projects API source-native Silver;
- AidData CLG-LMIC source-native Silver;
- GeoGCDF source geometry and contract-backed commitment measurement;
- reusable survey-native substrate;
- DHS HR household Silver;
- DHS GC cluster covariates and temporal semantics;
- DHS GE/GPS reported-coordinate geography.

### HISTORICAL / RECOVERED REFERENCE

Useful for reproducing or understanding the old pipeline, but not current source authority by default. Examples include recovered AidData WB geocoded files, old project extracts, and historical DHS aggregate/GID compatibility surfaces.

### CURRENT CANDIDATE

Still plausible future extensions include IATI, OECD CRS, PPI, AIIB/ADB/AfDB, Afrobarometer source-native verticals, additional DHS recodes such as PR/IR/KR when needed, and displacement-aware candidate geography.

### SCIENTIFIC DECISION, NOT SOURCE TASK

Questions such as whether one source becomes treatment, which period is causal treatment timing, which DHS variable is an outcome, how displaced geography enters exposure, or which survey weight/variance design to use belong downstream in experiment design.

## Immediate source-side priorities

The next useful empirical-source work should be pulled by a concrete experiment or missing measurement rather than by adding sources for completeness.

High-value examples include:

1. build real-data acceptance for already implemented contract-backed investment, ACLED, and DHS source paths;
2. pick one concrete DHS experiment and add only the missing source recodes/metadata that question actually requires;
3. build displacement-aware candidate geography only if the chosen DHS exposure design needs it;
4. strengthen World Bank geospatial evidence only if a planned experiment needs post-2014 subnational locations;
5. implement Afrobarometer when a named respondent/EA experiment is ready to consume it;
6. add IATI/OECD/other donors only when their distinct measurement contribution is clear;
7. preserve source parity and provenance whenever recovered files are used to validate rebuilt paths.

## Related pages

- [Research System Architecture](../research-system.md)
- [Current Empirical Data Authority](../data-products/current-data-authority.md)
- [DHS Empirical Stack](../data-products/products/dhs-overview.md)
- [Current Research Status](../current-status.md)
- [Validation Status](../data-products/validation-status.md)
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md) — June 2026 landscape/reference memo
