---
title: DHS Empirical Stack
sidebar_label: DHS Overview
last_verified: "2026-08-23"
---

# DHS Empirical Stack

**Capability status: MULTI-FILE DHS SOURCE STACK IMPLEMENTED**  
**Real protected-data acceptance: NOT RECORDED IN THIS SITE**  
**Experiment-use status: NOT YET INTEGRATED AS A CURRENT DHS EXPERIMENT**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What changed

DHS is no longer represented only by a generic survey substrate. The current empirical repository now has three DHS-specific verticals built on that substrate:

```text
                         SurveyCatalogEntry
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
        HR source           GC source          GE / GPS source
             │                  │                  │
             ▼                  ▼                  ▼
 household-native      cluster covariate      cluster-coordinate
     Silver                 Silver                 Silver
                                │                  │
                                ▼                  ▼
                       temporal semantics   reported-coordinate
                                            geography relation
```

The three verticals share survey identity and may share cluster identity, but they remain separate empirical products with different natural grains and scientific limitations.

## Current DHS components

| Component | Natural grain | What it currently establishes | What it does not establish |
|---|---|---|---|
| [Household Recode (HR)](./dhs-hr.md) | household within survey | source-native household rows, source design facts, release/snapshot provenance | outcomes, normalized analysis weights, treatment, geography exposure |
| [Geospatial Covariates (GC)](./dhs-gc.md) | survey × cluster; optional long survey × cluster × source variable | source-supplied cluster covariates with explicit temporal semantics and missingness | polygon-wide covariates, area-period panels, regression covariate roles |
| [GE/GPS geography](./dhs-gps.md) | supplied GPS cluster row; separate geography-membership relation | reported coordinates, displacement metadata, reported-coordinate polygon membership | true cluster location, de-displacement, exact project exposure |

All three use the [Survey-Native Substrate](./survey-substrate.md) rather than creating separate survey identity, weight, geography-status, or temporal-semantic systems.

## Survey identity is the join spine

A DHS survey is not identified by one microdata file.

`SurveyCatalogEntry` is the survey-level identity. Individual HR, GC, and GE/GPS files are linked through their own source snapshots and `SurveyFileLink` relationships. This lets one survey use files acquired or released separately without pretending that one snapshot defines the whole survey.

A future scientific use may connect HR households to GC/GPS clusters through verified source cluster identity. That linkage must be validated explicitly. A convenient filename, row order, or historical notebook join is not authority.

## The natural grains remain different

The current architecture deliberately does not flatten DHS into one universal table.

```text
HR:      survey × household
GC:      survey × cluster
GPS:     survey × supplied cluster row
```

A household-level experiment therefore needs an explicit household → cluster relation and a declared use of cluster-level GC/geography facts. The empirical repository should not replicate cluster values across households merely to manufacture an estimator-ready table.

## Geography is useful but uncertain

The GE/GPS vertical provides a major new capability: clusters can be related to the shared analytical geography using the **reported DHS coordinate**.

That relation is deliberately named `reported_coordinate_membership`.

It means:

> the public coordinate supplied for this DHS cluster falls in this analytical polygon under the shared spatial-membership procedure.

It does **not** mean:

> the cluster's undisplaced true location is known to be inside this polygon.

Where DHS public coordinates are displaced, the displacement fact and policy provenance remain attached. Exact-boundary and overlapping-polygon cases can remain ambiguous. Invalid or placeholder coordinates remain explicit rather than being silently repaired.

A future `possible_geography_under_displacement` product could represent geography candidates compatible with documented displacement rules. That uncertainty-aware product is not implemented by the current reported-coordinate relation.

## GC is cluster measurement, not background raster authority

DHS Geospatial Covariates are measurements associated with DHS clusters.

The current empirical meaning is:

```text
survey_id × cluster_id × source variable
```

or the equivalent wide cluster table plus variable metadata.

This must not be reinterpreted as an authoritative polygon-wide or Africa-wide covariate panel. Static, annual, epoch, climatology, survey-time, retrospective, and unknown variables retain different temporal semantics; an unlabeled variable does not automatically acquire the survey year.

## HR preserves source survey-design facts

The HR vertical preserves household identity, cluster/PSU/stratum facts, and the source household weight without deciding how an estimator should use them.

The stored source weight is not silently divided, normalized, or promoted to the unique correct analysis weight. Weighted estimation and the choice of clustering/stratification belong downstream in the scientific-use layer.

## Protected-data boundary

DHS source files remain external. The repository records source identities and hashes but does not commit protected DHS microdata or GPS files.

GitHub acceptance uses synthetic DHS-shaped fixtures. This site therefore distinguishes:

- **implementation exists**;
- **synthetic acceptance exists**;
- **a real protected source run has been reviewed and recorded**;
- **a scientific DHS experiment has consumed the products**.

The first two are now true for the implemented verticals. The latter two require separate evidence.

## What is still needed for a DHS experiment

The empirical stack is materially ahead of the experiment stack. A current DHS experiment still needs a named scientific specification for at least:

1. the survey/release and recode family to use;
2. the source variables that become outcomes or controls;
3. household/person ↔ cluster linkage appropriate to that recode;
4. the treatment/exposure measurement and its geography/time relation;
5. a displacement-aware spatial uncertainty policy;
6. survey timing and exposure timing rules;
7. survey-weight/design use in the estimator;
8. missingness/coverage rules;
9. harness-side cross-grain projection and gates;
10. real protected-data acceptance evidence that can be summarized without exposing restricted values.

This is now a **scientific-use and integration problem**, not simply “DHS ingestion has not been built.”

## Technical references

- [`DHS_HR_SILVER.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_HR_SILVER.md)
- [`DHS_GC.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_GC.md)
- [`DHS_GPS_GEOGRAPHY.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_GPS_GEOGRAPHY.md)
- [`SURVEY_SUBSTRATE.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/SURVEY_SUBSTRATE.md)
