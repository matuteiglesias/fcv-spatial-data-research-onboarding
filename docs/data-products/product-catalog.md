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
| [Survey-native substrate](./products/survey-substrate.md) | household / person / respondent / cluster / EA / other declared grain | explicit geography relations with ambiguous/unmatched states | survey coverage is not coerced into area-period zero semantics | reusable substrate implemented and now used by DHS verticals; Afrobarometer ingestion still absent |
| [DHS Household Recode (HR)](./products/dhs-hr.md) | household within survey | cluster identity preserved; analytical geography is separate | source missingness remains missing; no implicit area-period coverage semantics | source-native Silver implemented and synthetically accepted; protected real-data acceptance and experiment use not recorded |
| [DHS Geospatial Covariates (GC)](./products/dhs-gc.md) | `survey × cluster`; optional long `survey × cluster × source_variable` | cluster-associated measurement; no GID aggregation | cluster availability; absent/missing never zero; temporal meaning registry-driven | cluster covariate Silver implemented and hardened; current experiment use not recorded |
| [DHS GE/GPS Geography](./products/dhs-gps.md) | supplied GPS cluster row + separate geography-membership relation | reported-coordinate membership with displacement/ambiguity metadata | coordinate/linkage states remain explicit; no true-location claim | cluster Silver + reported-coordinate geography implemented; current experiment use not recorded |

## DHS is now a product family, not a future placeholder

The [DHS Empirical Stack](./products/dhs-overview.md) now composes several source-specific products around one survey identity:

```text
SurveyCatalog
├─ HR  → household Silver
├─ GC  → cluster covariate Silver + temporal semantics
└─ GPS → displaced reported-coordinate Silver
         → reported-coordinate geography relation
```

This is an important change from the earlier state where only the generic survey substrate existed.

It does **not** mean a DHS experiment is already executable end-to-end. The scientific-use layer still needs variable-role mapping, cross-grain linkage, exposure/timing rules, displacement-aware uncertainty policy, survey-design/weight choices, harness integration, and real protected-data acceptance.

## How to read a product card

Every card uses the same questions:

1. **Source authority** — what registered source or release is authoritative?
2. **Natural grain** — what does one row or observation naturally represent?
3. **Geography** — how is spatial identity linked without hiding ambiguity?
4. **Time / coverage** — what temporal support is actually asserted?
5. **Important facts** — which fields are source measurements rather than scientific roles?
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
- a household-level DHS table with GC/GPS values replicated by convenience;
- a de-displaced DHS true-location table.

Those are experiment-use, uncertainty-modeling, or derived-annotation concepts and require their own declared provenance and scientific rules.

## Next products expected

The most obvious survey-side extensions are now narrower and more concrete:

- additional DHS recode families such as PR/IR/KR only when a named scientific question needs them;
- a displacement-aware candidate-geography product if the experiment requires uncertainty beyond reported-coordinate membership;
- Afrobarometer source-native respondent/EA verticals;
- source-specific survey variable metadata/measurement products pulled by an explicit experiment.

The product catalog should add those only when the producing architecture actually exists.
