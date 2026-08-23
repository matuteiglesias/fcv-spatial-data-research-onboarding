---
title: DHS Empirical Stack
sidebar_label: DHS Overview
last_verified: "2026-08-23"
---

# DHS Empirical Stack

**Capability status: INTEGRATED MULTI-FILE DHS EMPIRICAL STACK IMPLEMENTED**  
**Cross-product integration QA: IMPLEMENTED**  
**Codebook-backed household semantic measurements: IMPLEMENTED INITIAL REGISTRY**  
**Real protected-data acceptance: NOT RECORDED IN THIS SITE**  
**Experiment-use status: NOT YET INTEGRATED AS A CURRENT DHS EXPERIMENT**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What changed

DHS has now moved beyond both a generic survey substrate and three isolated source verticals.

The current empirical repository supports:

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
             │                  │                  │
             └──────────────┬───┴──────────────────┘
                            ▼
                   DHS integration QA
                survey / grain / cluster support
                            │
              ┌─────────────┴──────────────┐
              │                            │
              ▼                            ▼
      HR codebook registry         reported-coordinate
              │                    geography relation
              ▼
 household semantic measurements
```

The integration layer does **not** create a DHS mega-table. HR, GC, and GPS remain separate products with different natural grains; the new integration report proves that they can be related safely without silently dropping discrepancies or inventing joins.

## Current DHS components

| Component | Natural grain | What it currently establishes | What it does not establish |
|---|---|---|---|
| [Household Recode (HR)](./dhs-hr.md) | conceptual household observation; durable physical key `source_row_id` | source-native household rows, source design facts, release/snapshot provenance, truthful grain contract even when household IDs are defective | outcomes, normalized analysis weights, treatment, geography exposure |
| [Geospatial Covariates (GC)](./dhs-gc.md) | survey × cluster; optional long survey × cluster × source variable | source-supplied cluster covariates with explicit temporal semantics and missingness | polygon-wide covariates, area-period panels, regression covariate roles |
| [GE/GPS geography](./dhs-gps.md) | supplied GPS cluster row; separate geography-membership relation | reported coordinates, displacement metadata, reported-coordinate polygon membership | true cluster location, de-displacement, exact project exposure |
| **DHS integration QA** | support/provenance evidence across HR + GC + GPS | one-survey identity, declared-grain truthfulness, HR/GPS/GC cluster support and discrepancies, unresolved ID-normalization evidence | joined household values, canonical mega-table, experiment frame |
| [Household semantic measurements](./dhs-household-measurements.md) | `source_row_id × measurement_id` | codebook-backed reusable meanings for a deliberately small initial DHS-VII HR registry | treatment/outcome/covariate roles, broad harmonization, estimator choices |

All components use the [Survey-Native Substrate](./survey-substrate.md) rather than creating separate survey identity, weight, geography-status, or temporal-semantic systems.

## Survey identity is the join spine

A DHS survey is not identified by one microdata file.

`SurveyCatalogEntry` is the survey-level identity. Individual HR, GC, and GE/GPS files are linked through their own source snapshots and `SurveyFileLink` relationships. This lets one survey use files acquired or released separately without pretending that one snapshot defines the whole survey.

The new `build_dhs_survey_integration_report` layer verifies that supplied HR, GPS, and GC products all resolve to exactly one explicit survey identity before they can be treated as integrated evidence.

## Integration is QA, not flattening

The integration report is deliberately metadata/support evidence rather than an analysis dataset.

It verifies, among other things, that:

- HR, GPS, and GC resolve to the same `SurveyCatalogEntry`;
- optional `DatasetRef` roles cannot masquerade as another DHS product;
- declared grain keys actually exist, are non-null, and uniquely identify the supplied rows;
- cluster support is compared without an inner join, so HR-only, GPS-only, and GC-only clusters remain visible;
- GC uses `DHSCLUST` as the cross-product cluster key when available while keeping `DHSID` distinct;
- numeric-equivalent but text-distinct IDs such as `001` and `1` are reported as unresolved normalization evidence rather than silently rewritten.

This is an important scientific boundary: a source-native anomaly may remain visible in Silver, but a contracted downstream consumer may not claim a false unique grain or erase support discrepancies merely to make the join convenient.

## The HR grain contract is now truthful

The integration audit exposed a concrete mismatch in the earlier HR contract.

HR Silver intentionally preserves missing or duplicate source `household_id` values, but a durable `DatasetRef` cannot truthfully claim a possibly defective natural key is unique.

The current HR schema therefore distinguishes:

- **conceptual observation:** household within survey;
- **source household identity:** `household_id`, preserved and audited even when missing/duplicated;
- **durable physical row identity:** `source_row_id`, always unique and now used by the `DatasetRef.grain` and derived household measurement products.

This does not redefine households as arbitrary rows. It makes the persisted uniqueness contract match reality while retaining source defects as evidence.

## The first codebook-backed DHS semantic layer now exists

The DHS stack now includes a deliberately small DHS-VII HR variable registry backed by official DHS standard-recode documentation.

Initial reusable empirical measurements are:

| Source variable | Empirical measurement | Boundary |
|---|---|---|
| `HV206` | `dhs.household.electricity_access` | Standard 0/1 semantics; missing stays missing; unsupported codes stay unresolved. |
| `HV270` | `dhs.household.wealth_quintile` | Ordered source quintile; explicitly survey-relative, not an absolute wealth scale. |
| `HV201` | `dhs.household.drinking_water_source_code` | Source category code; no automatic improved/safe-water harmonization. |

These definitions produce [household semantic measurements](./dhs-household-measurements.md) with codebook provenance, temporal semantics, comparability status, explicit measurement states, and `MeasurementContract` objects.

Crucially:

> **semantic meaning is not experiment role.**

`dhs.household.electricity_access` can now be a reusable empirical measurement without becoming an FCV outcome merely because an older notebook once used a source variable that way.

## Missingness remains explicit

The semantic measurement product distinguishes states such as:

- `observed`;
- `missing_source_value`;
- `source_missing_code`;
- `unmapped_source_code`.

Unsupported or unknown source codes never become zero.

Historical unsupported interpretations are also not revived by convenience. A source variable receives semantic meaning only through an explicit codebook-backed definition compatible with the survey phase/recode family.

## The natural grains remain different

The current architecture deliberately does not flatten DHS into one universal table.

```text
HR Silver:                physical source_row_id; conceptual household observation
GC Silver:                survey × cluster
GPS Silver:               survey × supplied cluster row
Household measurements:   source_row_id × measurement_id
```

A household-level experiment therefore still needs an explicit household → cluster relation and a declared use of cluster-level GC/geography facts. The empirical repository should not replicate cluster values across households merely to manufacture an estimator-ready table.

## Geography is useful but uncertain

The GE/GPS vertical relates clusters to the shared analytical geography using the **reported DHS coordinate**.

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

The first two are now true for HR, GC, GPS, the integration QA layer, and the initial semantic-measurement path. The latter two require separate evidence.

The next protected-data gate is particularly concrete: run one real DHS survey with HR + GE/GPS + GC, produce the integration report and semantic measurement diagnostics, and review only non-sensitive hashes/counts/support/QA evidence.

## What is still needed for a DHS experiment

The empirical stack is now substantially richer, but a current DHS experiment still needs a named scientific specification for at least:

1. the survey/release and recode family to use;
2. which reusable household measurement becomes an outcome/control/moderator in this experiment;
3. household/person ↔ cluster projection appropriate to that recode;
4. the treatment/exposure measurement and its geography/time relation;
5. a displacement-aware spatial uncertainty policy;
6. survey timing and exposure timing rules;
7. survey-weight/design use in the estimator;
8. missingness/coverage rules;
9. harness-side cross-grain projection and gates;
10. real protected-data acceptance evidence that can be summarized without exposing restricted values.

The remaining blocker is therefore **scientific-use integration and real protected-source acceptance**, not source ingestion or basic variable semantics.

## Technical references

- [`DHS_INTEGRATED_SUBSTRATE.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_INTEGRATED_SUBSTRATE.md)
- [`DHS_HR_SILVER.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_HR_SILVER.md)
- [`DHS_GC.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_GC.md)
- [`DHS_GPS_GEOGRAPHY.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_GPS_GEOGRAPHY.md)
- [`SURVEY_SUBSTRATE.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/SURVEY_SUBSTRATE.md)
