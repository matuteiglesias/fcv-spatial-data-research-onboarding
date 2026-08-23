---
title: DHS Geospatial Covariates (GC)
sidebar_label: DHS GC
last_verified: "2026-08-23"
---

# DHS Geospatial Covariates (GC)

**Product status: CLUSTER-LEVEL COVARIATE SILVER IMPLEMENTED**  
**Authority: L3 REBUILT / SOURCE-DERIVED CLUSTER MEASUREMENT**  
**Real protected-data acceptance: NOT RECORDED IN THIS SITE**  
**Experiment-use status: NOT YET A CURRENT DHS EXPERIMENT INPUT**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

DHS GC is represented as covariate measurements associated with DHS survey clusters.

It is **not** represented as a generic polygon-by-period covariate panel for Africa.

The durable path is:

```text
external DHS GC release file(s)
        ↓
SourceSnapshotRef + survey/file linkage
        ↓
wide source-native cluster Silver
        ↓
optional derived long Silver
        ↓
variable temporal semantics + availability QA
```

## Natural grain

The authoritative wide Silver table is:

```text
survey_id × cluster_id
```

A derived long view may use:

```text
survey_id × cluster_id × source_variable
```

The long view is derived from the hashed wide Silver product. It is not a second fictional Bronze source.

## Source and cluster identity

The current implementation preserves DHS cluster identifiers as identifiers rather than allowing them to become covariate measurements.

In particular, DHS identity fields such as `DHSID` and `DHSCLUST` remain available for survey/cluster linkage but are excluded from the covariate variable set. Explicit attempts to select identity fields as measurements are rejected.

The source release, snapshot identity, reversible source-native columns, and wide → long lineage remain durable.

## Geography

GC values are attached to DHS clusters. The product does not claim that those values are authoritative polygon-wide measurements.

No GID aggregation is performed by the GC vertical.

A later scientific use may link a GC cluster to analytical geography through the separate [DHS GE/GPS](./dhs-gps.md) product, but the GC value remains a cluster-associated measurement unless a named downstream derivation says otherwise.

## Temporal semantics

GC temporal meaning is documentation/registry-driven rather than inferred from convenient filenames or survey year.

The shared survey temporal vocabulary includes:

- `static`;
- `survey_time`;
- `annual`;
- `epoch`;
- `climatology`;
- `retrospective`;
- `unknown`.

No rule match means `unknown`. Conflicting rules remain `unknown` and are reported.

A year is assigned only when a documented rule explicitly licenses parsing or supplies a documented year. A variable without a year suffix does not automatically receive the survey year. Even `survey_time` does not require fabricating a `measurement_year` when survey timing already exists separately in the catalog.

Implausible parsed years remain visible as parsing/QA states rather than being repaired by substituting survey year.

## Missingness and coverage

Coverage is cluster measurement availability, not polygon or country coverage.

The current semantics make two distinctions explicit:

- a missing cluster-variable row is **not observed**;
- a present cluster-variable with missing source value is a **missing source measurement**.

Neither is zero.

The GC adapter does not fill, interpolate, forward-fill, back-fill, or replicate static values across periods.

## What this product deliberately does not do

The GC vertical does not:

- reconstruct source rasters;
- run zonal statistics;
- build an Africa-wide background covariate panel;
- aggregate to GID;
- turn static values into annual series;
- assign survey year implicitly;
- construct `_DHSGC` compatibility panels;
- choose regression covariates;
- assign treatment/outcome/control roles.

## Experiment history

No current contract-backed DHS experiment has yet consumed these GC products.

A downstream design must still decide which GC variables, if any, serve as controls, moderators, descriptive features, or other scientific roles. Their source temporal semantics constrain that use but do not determine it.

## Technical reference

- [`fcv-empirical-data/docs/DHS_GC.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_GC.md)
