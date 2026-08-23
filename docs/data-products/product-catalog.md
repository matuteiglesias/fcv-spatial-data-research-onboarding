---
title: Empirical Product Catalog
sidebar_position: 2
description: Human-facing catalog of the FCV empirical products and source-native foundations that can be used today.
last_verified: "2026-08-23"
---

# Empirical Product Catalog

**Document status: CURRENT PRODUCT CATALOG**  
**Last verified: 2026-08-23**

This page answers:

> **What empirical objects can I actually use today, and what do they mean?**

The catalog deliberately separates four ideas:

- **implemented** — the producing code and contract shape exist;
- **synthetically accepted** — the path is exercised on controlled fixtures;
- **materialized / accepted on real source data** — a durable real source artifact has been run through that path and recorded;
- **experiment-used** — a declared scientific experiment has consumed that current product.

Those are different evidence levels. A product can be implemented and synthetically accepted without yet having a canonical real-data experiment run.

For authority rules, see [Current Empirical Data Authority](./current-data-authority.md). For experiment readiness, see [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md) and [Validation Status](./validation-status.md).

## At a glance

| Product / foundation | Natural grain | Geography | Coverage semantics | Current use status |
|---|---|---|---|---|
| [ACLED source-native violence](./products/acled.md) | event Silver; `geo_uid × period_id × native_event_type` Gold | shared analytical geography via explicit membership relation | sparse Gold; absent row = `unknown` by default | implemented; contracted harness projection exists; canonical real current-artifact run not recorded |
| [AidData GeoGCDF](./products/aiddata-geogcdf.md) | source project-geometry Silver; contracted area-period commitment measurement | shared point / areal geography relation; polygons may span units | verified structural zero only inside declared source/geography/time support and strict resolution conditions | implemented reference investment measurement; real current experiment not recorded |
| [World Bank Projects API](./products/worldbank-projects.md) | one source project per exact WB `id` | no current source-native spatial exposure product asserted by this catalog | project-row absence has no no-project/control meaning | source-native Silver implemented; current WB-only contracted spatial experiment still needs a measurement path |
| [AidData CLG-LMIC](./products/aiddata-clg-lmic.md) | relational source records plus child tables | no current source-native spatial exposure product asserted by this catalog | row absence has no no-project/control meaning | source-native Silver implemented; not itself a treatment surface |
| [Survey-native substrate](./products/survey-substrate.md) | household / person / respondent / cluster / EA / other declared grain | explicit geography relations with ambiguous/unmatched states | survey coverage is not coerced into area-period zero semantics | reusable substrate implemented and used by DHS verticals; Afrobarometer ingestion still absent |
| [DHS Household Recode (HR)](./products/dhs-hr.md) | conceptual household observation; durable physical key `source_row_id` | cluster identity preserved; analytical geography is separate | source missingness remains missing; no implicit area-period coverage semantics | source-native Silver v2 implemented; truthful grain contract; protected real-data acceptance and experiment use not recorded |
| [DHS Geospatial Covariates (GC)](./products/dhs-gc.md) | `survey × cluster`; optional long `survey × cluster × source_variable` | cluster-associated measurement; no GID aggregation | cluster availability; absent/missing never zero; temporal meaning registry-driven | cluster covariate Silver implemented and hardened; current experiment use not recorded |
| [DHS GE/GPS Geography](./products/dhs-gps.md) | supplied GPS cluster row + separate geography-membership relation | reported-coordinate membership with displacement/ambiguity metadata | coordinate/linkage states remain explicit; no true-location claim | cluster Silver + reported-coordinate geography implemented; current experiment use not recorded |
| **DHS integration QA** | support/provenance report across HR + GC + GPS | compares cluster identity/support; does not assign household geography | source-only clusters and unresolved ID normalization remain explicit | implemented synthetic QA evidence; not an analysis dataset |
| [DHS Household Semantic Measurements](./products/dhs-household-measurements.md) | `source_row_id × measurement_id` | inherits household/cluster identity; no exposure assigned | household observation coverage; missing/unmapped codes remain explicit | initial DHS-VII codebook-backed registry implemented; no experiment roles assigned |

## DHS is now an integrated empirical family

The [DHS Empirical Stack](./products/dhs-overview.md) now has five distinct capabilities around one survey identity:

```text
SurveyCatalog
├─ HR  → household Silver
├─ GC  → cluster covariate Silver + temporal semantics
├─ GPS → displaced reported-coordinate Silver
│        → reported-coordinate geography relation
├─ integration QA → survey / grain / cluster-support evidence
└─ HR registry → household semantic measurements
```

This is an important change from both earlier states: first when only the generic survey substrate existed, and later when HR/GC/GPS existed but were documented mainly as parallel verticals.

The integration report still does **not** create a canonical joined DHS table. It verifies that the separate products can be related without silently losing source-only clusters, confusing `DHSID` with `DHSCLUST`, normalizing IDs such as `001` → `1`, or accepting a false `DatasetRef.grain` claim.

The semantic registry also remains deliberately upstream of scientific use. A measurement such as `dhs.household.electricity_access` has an explicit empirical meaning; whether it becomes an FCV outcome or control is still an experiment decision.

## How to read a product card

Every card uses the same questions:

1. **Source authority** — what registered source or release is authoritative?
2. **Natural grain** — what does one row or observation naturally represent, and what key is actually guaranteed unique?
3. **Geography** — how is spatial identity linked without hiding ambiguity?
4. **Time / coverage** — what temporal support is actually asserted?
5. **Important facts** — which fields are source/empirical measurements rather than scientific roles?
6. **Contract artifacts** — which durable contracts and manifests make the product reproducible?
7. **Known limitations** — what must not be inferred from the product?
8. **Experiment history** — has a current contract-backed experiment actually consumed it?

Where the producing repository does not publish a stable cross-release date range, this catalog says so rather than inventing one from a historical file.

## Product authority rule

The product cards summarize current producing repositories; they do not replace them.

```text
human product card
      ↓
fcv-empirical-data product / source vertical
      ↓
DatasetRef + contracts + RunManifest + durable artifact
```

If a card and a producing artifact disagree, investigate the producing artifact and update this catalog. Do not silently choose the more convenient interpretation.

## What is deliberately not a product here

This catalog does **not** list the following as empirical products:

- treated/control flags;
- experiment outcomes or covariates;
- matching samples;
- causal exposure dates;
- estimator-ready balanced panels;
- pooled cross-source investment totals;
- `jobs_any` or similar labels interpreted as treatment;
- a household-level DHS mega-table with GC/GPS values replicated by convenience;
- a de-displaced DHS true-location table;
- a silently normalized cluster crosswalk that rewrites `001` and `1` as the same source identity;
- historical variable meanings promoted without current codebook provenance.

Those are experiment-use, uncertainty-modeling, harmonization, or derived-annotation concepts and require their own declared provenance and scientific rules.

## Next products expected

The survey-side extensions are now narrower and more concrete:

- additional codebook-backed DHS household measurements only where definitions are authoritative and useful;
- additional DHS recode families such as PR/IR/KR only when a named scientific question needs them;
- a displacement-aware candidate-geography product if an experiment requires uncertainty beyond reported-coordinate membership;
- Afrobarometer source-native respondent/EA verticals;
- broader cross-survey harmonization only when its comparability assumptions can be stated explicitly.

The product catalog should add those only when the producing architecture actually exists.
