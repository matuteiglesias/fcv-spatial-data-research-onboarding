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
| DHS Household Recode (HR) | **IMPLEMENTED / V2 GRAIN CONTRACT** | External protected HR source → source-native household observations; durable physical grain uses unique `source_row_id` while source `household_id` remains visible/audited even when defective. |
| DHS Geospatial Covariates (GC) | **IMPLEMENTED** | External GC release(s) → cluster-native Silver + derived long view + registry-driven temporal semantics + explicit cluster measurement availability; no GID aggregation. |
| DHS GE/GPS geography | **IMPLEMENTED** | External GPS source → cluster Silver → survey/GPS identity audit → reported-coordinate spatial membership with displacement/uncertainty metadata. |
| DHS cross-product integration QA | **IMPLEMENTED** | HR + GPS + GC are checked against one `SurveyCatalogEntry`, truthful `DatasetRef` grains, complete cluster support, `DHSCLUST`/`DHSID` identity, and unresolved textual-ID normalization without constructing a joined analysis table. |
| DHS household variable registry | **IMPLEMENTED INITIAL REGISTRY** | DHS-VII HR codebook-backed definitions for `HV206`, `HV270`, and `HV201`; explicit provenance/comparability/temporal semantics; no experiment roles. |
| DHS household semantic measurements | **IMPLEMENTED** | Content-hashed HR Silver → versioned registry → `source_row_id × measurement_id` L3 measurement product + `MeasurementContract` + QA; missing/unmapped codes remain explicit. |
| DHS protected real-data acceptance | **NOT YET RECORDED HERE** | GitHub uses synthetic fixtures; a real protected-source execution must be reviewed through non-sensitive QA, counts, hashes, support and registry diagnostics. |
| DHS experiment integration | **NOT YET IMPLEMENTED** | Empirical meanings now exist for an initial HR subset, but experiment roles, household↔cluster projection, exposure/timing, displacement-aware use, survey-design estimator choices, and harness integration remain downstream work. |
| Afrobarometer source ingestion / measurement vertical | **NOT YET IMPLEMENTED** | The substrate exists; Afrobarometer-specific acquisition, codebook mappings, geography, weights, and measurements remain separate work. |
| IATI | **CANDIDATE / NOT IMPLEMENTED** | Still useful for multi-donor/current activity coverage and possible location evidence. |
| OECD CRS | **CANDIDATE / NOT IMPLEMENTED** | Still useful for standardized donor/project activity and source-coverage comparison. |
| World Bank PPI | **CANDIDATE / NOT IMPLEMENTED** | Infrastructure extension source; scientifically distinct from official development-finance sources. |
| AIIB / other MDB sources | **CANDIDATE / NOT IMPLEMENTED** | Potential extension lane, not part of the current reference build. |

## What changed since the June memo

### World Bank Projects API

The strategy memo described an official World Bank API pull as a recommended next step. That engineering step now exists in [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data).

The current source-native path preserves exact World Bank source project identity, downloaded page/snapshot identity, page/record provenance, raw project representation, native date meanings, source hash validation, output hashes, QA, and parity evidence.

`boardapprovaldate` remains board approval date, `closingdate` remains closing date, and commitment fields remain source financial facts. None is automatically implementation timing, completion timing, local spending, or treatment.

### AidData CLG-LMIC

The existing AidData CLG-LMIC source engineering has been migrated into the contract-backed architecture. The current Silver representation preserves the source's relational structure rather than flattening everything into one convenience table. Borrower-ownership rows remain child rows and cannot multiply project finance merely because several child records exist.

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

## DHS has now closed its first empirical mini-wave

The current DHS path is no longer just three parallel source adapters.

```text
SurveyCatalogEntry
      │
      ├─ HR → household Silver
      │        └─ codebook registry → household semantic measurements
      │
      ├─ GC → cluster covariate Silver + temporal semantics
      │
      ├─ GE/GPS → cluster-coordinate Silver
      │            → reported-coordinate geography relation
      │
      └─ integration QA across HR + GC + GPS
```

### HR grain hardening

The integrated audit exposed a real contract mismatch: source household IDs may be missing or duplicated even though the earlier durable grain claimed them as unique.

The current HR schema fixes that explicitly:

- conceptual rows remain household observations;
- `household_id` remains the source/scientific household identity and continues to be audited;
- unique `source_row_id` is the physical `DatasetRef.grain`;
- design-record observation identity uses the physical source row so no retained source row becomes unaddressable.

The source anomaly remains visible instead of being silently deduplicated or repaired.

### Cross-product integration QA

`build_dhs_survey_integration_report` is now the explicit integration seam across HR, GPS, and GC.

It verifies:

- all three products resolve to one explicit DHS survey;
- dataset roles and grain claims match actual rows;
- HR-only, GPS-only, and GC-only clusters remain visible rather than disappearing through an inner join;
- GC links on `DHSCLUST` when available while `DHSID` remains distinct;
- text identities such as `001` and `1` are not silently normalized into the same source ID.

The report carries support/count/provenance evidence only. It never joins household values, coordinates, and covariates into a canonical analysis table.

### First DHS household variable registry

The empirical repository now has a deliberately small codebook-backed DHS-VII HR registry:

| Source | Empirical meaning | Boundary |
|---|---|---|
| `HV206` | `dhs.household.electricity_access` | Standard binary semantics; missing/unsupported values remain missing/unresolved. |
| `HV270` | `dhs.household.wealth_quintile` | Ordered source quintile; explicitly survey-relative, not absolute wealth. |
| `HV201` | `dhs.household.drinking_water_source_code` | Source category code; no automatic improved/safe-water harmonization. |

Every definition requires codebook provenance and phase compatibility.

Historical notebook interpretations are not revived merely because they existed. Unsupported meanings for variables such as `HV215` or `HV040` remain unsupported unless a current authoritative definition is added.

### Household semantic measurement product

The registry can now materialize reusable empirical measurements from content-hashed HR Silver at:

```text
source_row_id × measurement_id
```

The product preserves source values, normalized values/labels, temporal semantics, comparability status, and explicit states such as `observed`, `missing_source_value`, `source_missing_code`, and `unmapped_source_code`.

It emits `MeasurementContract` objects but assigns **zero treatment/outcome/covariate roles**.

This is an important boundary improvement: the project can now state what selected DHS variables empirically mean without prematurely deciding how a particular FCV experiment uses them.

### What DHS still does not mean

The existence of HR/GC/GPS, integration QA, and semantic household measurements does not imply that:

- a DHS experiment has been run;
- electricity access, wealth quintile, or drinking-water source is automatically the FCV outcome;
- GC variables are automatically regression covariates;
- reported-coordinate geography is exact true-location geography;
- source weights are already the chosen analysis weights;
- household rows should be collapsed into GID × period;
- project exposure can be assigned by nearest reported DHS point without uncertainty analysis;
- a small DHS-VII registry is a broad cross-phase/cross-country harmonization system.

These remain experiment-side or future empirical-design decisions.

## Source strategy versus experiment strategy

Under the current architecture, source-side readiness means a measurement may later be used by an experiment. A source dataset or semantic measurement is never intrinsically treated/control/outcome/covariate.

The producing repository owns source facts and reusable empirical meanings. The experiment harness owns role assignment, eligibility, exposure timing, comparison groups, displacement-aware policy, survey design use, and estimators.

## Source families remain independent

The architecture deliberately avoids building a universal project or survey ontology merely because several sources can eventually be combined scientifically.

- AidData CLG-LMIC and World Bank Projects API remain independent source verticals.
- GeoGCDF remains an AidData source product with its own identity and semantics.
- DHS HR, GC, and GPS remain separate products linked through explicit integration QA rather than flattened upstream.
- DHS semantic measurements remain separate from experiment role assignment.
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
- DHS HR household Silver with truthful v2 grain contract;
- DHS GC cluster covariates and temporal semantics;
- DHS GE/GPS reported-coordinate geography;
- DHS HR/GPS/GC integration QA;
- initial codebook-backed DHS household variable registry and semantic measurement product.

### HISTORICAL / RECOVERED REFERENCE

Useful for reproducing or understanding the old pipeline, but not current source authority by default. Examples include recovered AidData WB geocoded files, old project extracts, and historical DHS aggregate/GID compatibility surfaces.

### CURRENT CANDIDATE

Still plausible future extensions include IATI, OECD CRS, PPI, AIIB/ADB/AfDB, Afrobarometer source-native verticals, additional DHS recodes such as PR/IR/KR when needed, more narrowly justified codebook-backed DHS measurements, and displacement-aware candidate geography.

### SCIENTIFIC DECISION, NOT SOURCE TASK

Questions such as whether one source becomes treatment, which period is causal treatment timing, which DHS semantic measurement is an outcome/control/moderator, how displaced geography enters exposure, or which survey weight/variance design to use belong downstream in experiment design.

## Immediate source-side priorities

The next useful empirical-source work should be pulled by a concrete experiment or missing measurement rather than by adding sources for completeness.

High-value examples include:

1. run one protected DHS survey through HR + GC + GPS + integration QA + semantic measurement materialization and record only non-sensitive acceptance evidence;
2. add another DHS variable/recode only if the first named experiment actually needs it;
3. build displacement-aware candidate geography only if the chosen DHS exposure design needs it;
4. build real-data acceptance for already implemented contract-backed investment and ACLED paths;
5. strengthen World Bank geospatial evidence only if a planned experiment needs post-2014 subnational locations;
6. implement Afrobarometer when a named respondent/EA experiment is ready to consume it;
7. preserve source parity and provenance whenever recovered files are used to validate rebuilt paths.

## Related pages

- [Research System Architecture](../research-system.md)
- [Current Empirical Data Authority](../data-products/current-data-authority.md)
- [DHS Empirical Stack](../data-products/products/dhs-overview.md)
- [DHS Household Semantic Measurements](../data-products/products/dhs-household-measurements.md)
- [Current Research Status](../current-status.md)
- [Validation Status](../data-products/validation-status.md)
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md) — June 2026 landscape/reference memo
