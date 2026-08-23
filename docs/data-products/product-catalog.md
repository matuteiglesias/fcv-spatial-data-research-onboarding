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

The catalog deliberately separates three ideas:

- **implemented** — the producing code and contract shape exist;
- **materialized / accepted** — a durable real source artifact has been run through that path and recorded;
- **experiment-used** — a declared scientific experiment has consumed that current product.

Those are different evidence levels. A product can be implemented without yet having a canonical real-data experiment run.

For authority rules, see [Current Empirical Data Authority](./current-data-authority.md). For experiment readiness, see [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md) and [Validation Status](./validation-status.md).

## At a glance

| Product / foundation | Natural grain | Geography | Coverage semantics | Current use status |
|---|---|---|---|---|
| [ACLED source-native violence](./products/acled.md) | event Silver; `geo_uid × period_id × native_event_type` Gold | shared analytical geography via explicit membership relation | sparse Gold; absent row = `unknown` by default | implemented; contracted harness projection exists; canonical real current-artifact run not recorded |
| [AidData GeoGCDF](./products/aiddata-geogcdf.md) | source project-geometry Silver; contracted area-period commitment measurement | shared point / areal geography relation; polygons may span units | verified structural zero only inside declared source/geography/time support and strict resolution conditions | implemented reference investment measurement; real current experiment not recorded |
| [World Bank Projects API](./products/worldbank-projects.md) | one source project per exact WB `id` | no current source-native spatial exposure product asserted by this catalog | project-row absence has no no-project/control meaning | source-native Silver implemented; current WB-only contracted spatial experiment still needs a measurement path |
| [AidData CLG-LMIC](./products/aiddata-clg-lmic.md) | relational source records plus child tables | no current source-native spatial exposure product asserted by this catalog | row absence has no no-project/control meaning | source-native Silver implemented; not itself a treatment surface |
| [Survey-native substrate](./products/survey-substrate.md) | household / person / respondent / cluster / EA / other declared grain | candidate geography links with ambiguous/unmatched states | survey coverage is not coerced into area-period zero semantics | reusable substrate implemented; DHS/Afrobarometer ingestion not yet implemented |

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
- `jobs_any` or similar labels interpreted as treatment.

Those are experiment-use or derived-annotation concepts and require their own declared provenance and scientific rules.

## Next products expected

The survey substrate is intentionally ready before the first real survey vertical. When real source-native ingestion is added, DHS and Afrobarometer should receive their own cards rather than being described as if the substrate itself were data.
