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
| DHS source ingestion / measurement vertical | **NOT YET IMPLEMENTED** | The substrate exists; DHS-specific acquisition, native tables, mappings, measurement contracts, and durable products remain separate work. |
| Afrobarometer source ingestion / measurement vertical | **NOT YET IMPLEMENTED** | The substrate exists; Afrobarometer-specific acquisition, codebook mappings, geography, weights, and measurements remain separate work. |
| IATI | **CANDIDATE / NOT IMPLEMENTED** | Still useful for multi-donor/current activity coverage and possible location evidence. |
| OECD CRS | **CANDIDATE / NOT IMPLEMENTED** | Still useful for standardized donor/project activity and source-coverage comparison. |
| World Bank PPI | **CANDIDATE / NOT IMPLEMENTED** | Infrastructure extension source; scientifically distinct from official development-finance sources. |
| AIIB / other MDB sources | **CANDIDATE / NOT IMPLEMENTED** | Potential extension lane, not part of the current reference build. |

## What changed since the June memo

### World Bank Projects API

The strategy memo described an official World Bank API pull as a recommended next step.

That engineering step now exists in [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data).

The current source-native path preserves:

- exact World Bank source project `id`;
- downloaded page/snapshot identity;
- page and record-position provenance;
- raw project representation;
- native source date meanings;
- source hash validation;
- output hashes and run provenance;
- QA and parity evidence.

Importantly:

- `boardapprovaldate` remains board approval date;
- `closingdate` remains closing date;
- project commitment fields remain source financial facts;
- none of these fields is automatically implementation timing, completion timing, local spending, or treatment.

The unresolved problem identified in June still matters: **current World Bank project metadata is not by itself a complete modern subnational project-location system**. A source-native metadata vertical does not solve post-2014 geolocation automatically.

### AidData CLG-LMIC

The existing AidData CLG-LMIC source engineering has also been migrated into the contract-backed architecture.

The current Silver representation preserves the source's relational structure rather than flattening everything into one convenience table. Borrower-ownership rows remain child rows and cannot multiply project finance merely because several child records exist.

This is now current source engineering rather than a future extraction task.

### AidData GeoGCDF

The June memo recommended the geospatial Chinese development-finance release as a high-priority spatial source.

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

The important scientific boundary is what this path **does not** do:

- it does not centroid polygons merely for convenience;
- it does not multiply project finance across intersected geography cells;
- it does not define treatment/control;
- it does not infer jobs categories;
- it does not turn a commitment date into implementation or completion timing.

## Source strategy versus experiment strategy

The June memo sometimes uses phrases such as "ready for treatment" or discusses data in terms of downstream treatment construction.

Under the current architecture, interpret that language as:

> sufficiently measured and spatially/temporally usable that an experiment **may later choose** to construct a treatment from it.

A source dataset is never intrinsically treated/control.

The producing repository owns facts such as:

```text
source project exists
source amount reported
source date reported
source geometry reported
source event observed
source survey response observed
```

The experiment harness owns choices such as:

```text
which measurement is treatment
which threshold defines exposure
which time is treatment time
which rows are eligible
which outcome role another measurement plays
which counterfactual is used
```

## Source families remain independent

The current architecture deliberately avoids building a universal project ontology merely because several sources concern development finance.

In particular:

- AidData CLG-LMIC and World Bank Projects API remain independent source verticals;
- GeoGCDF remains an AidData source product with its own identity and semantics;
- source project IDs are not deduplicated across families by default;
- financial records are not assumed additive across sources;
- different date fields retain their source-native meanings;
- any reconciliation product must be explicit and versioned.

This is a stronger boundary than the June source-survey memo could assume before the empirical repository existed.

## Status classes for the June memo

When reading [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md), interpret its recommendations using these classes:

### IMPLEMENTED SINCE THIS MEMO

A recommended source capability now exists in the current producing architecture.

Current examples:

- World Bank Projects API source-native Silver;
- AidData CLG-LMIC source-native Silver;
- GeoGCDF source geometry and contract-backed commitment measurement.

### HISTORICAL / RECOVERED REFERENCE

Useful for reproducing or understanding the old pipeline, but not current source authority by default.

Examples include recovered AidData WB geocoded files and old project extracts.

### CURRENT CANDIDATE

Still a plausible future extension, but not yet a current FCV source vertical.

Examples include IATI, OECD CRS, PPI, AIIB, ADB, AfDB, and other donor/MDB sources.

### SCIENTIFIC DECISION, NOT SOURCE TASK

Questions such as whether one source becomes a treatment, which period is causal treatment timing, or which donor family is a counterfactual belong downstream in experiment design.

## Immediate source-side priorities

The next useful empirical-source work should be pulled by a concrete experiment or missing measurement rather than by adding sources for completeness.

High-value examples include:

1. build real-data acceptance for the already implemented contract-backed investment and ACLED paths;
2. implement DHS/Afrobarometer source-native verticals on the merged survey substrate when a named survey experiment requires them;
3. strengthen World Bank geospatial evidence only if a planned experiment needs post-2014 subnational locations;
4. add IATI/OECD/other donors only when their distinct measurement contribution is clear;
5. preserve source parity and provenance whenever recovered files are used to validate a rebuilt path.

## Related pages

- [Research System Architecture](../research-system.md)
- [Current Empirical Data Authority](../data-products/current-data-authority.md)
- [Current Research Status](../current-status.md)
- [Validation Status](../data-products/validation-status.md)
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md) — June 2026 landscape/reference memo
