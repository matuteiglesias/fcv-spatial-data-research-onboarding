---
title: Current Empirical Data Authority
sidebar_position: 1
description: Current source-of-truth map for FCV empirical data, contracts, geography, and recovered archive products.
last_verified: "2026-08-23"
---

# Current Empirical Data Authority

**Document status: CURRENT AUTHORITY OVERLAY**  
**Last verified: 2026-08-23**

This page answers:

> When several old files, rebuilt datasets, contracts, derived measurements, and experiment outputs coexist, which layer should be treated as authoritative for what?

The short rule is:

> **Current source facts and empirical measurements come from the contract-backed producing stack. Scientific roles remain experiment-level. Recovered archive datasets remain evidence, parity material, and historical research memory unless explicitly consumed.**

## Current authority map

| Concern | Current authority | What it owns |
|---|---|---|
| Empirical contracts | [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) | Dataset identity, source snapshots, grain, geography/time contracts, coverage, measurements, QA, run manifests. |
| Geography and period mechanics | [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) | Analytical geography, GADM materialization, spatial membership, period indexing, spatial provenance. |
| FCV source facts and durable empirical measurements | [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) | Source-native verticals, derived empirical measurements, Silver/Gold materialization, provenance, coverage, QA, parity. |
| Scientific roles and analysis variables | [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) | Experiment projection, treatment/outcome roles, eligibility, timing, counterfactuals, gates, estimators, falsification, calibration. |
| Recovered historical datasets | [Dataset Inventory](./dataset-inventory.md) and recovered archive | Reconstruction, historical evidence, parity, legacy-calibration surfaces, provenance. |

Authority is **layer-specific**.

## Current FCV empirical surfaces

### Investment sources

- **AidData CLG-LMIC** — source-native relational Silver preserving record identity and source relational structure.
- **World Bank Projects API** — source-native project Silver preserving exact source IDs, raw representation, page provenance, native dates, QA, and parity.
- **AidData GeoGCDF** — project-geometry Silver and contract-backed commitment-period measurement path using shared geography and periods.

These sources remain independent. Their records are not silently deduplicated, summed, harmonized, or converted into treatment upstream.

### Violence

- **ACLED** — source-native event Silver plus separate geography/period membership and sparse contract-backed Gold.
- zero-fatality events remain events;
- source precision remains source data;
- ambiguous geography remains explicit;
- absent Gold rows acquire zero meaning only where an explicit coverage contract licenses it.

## Surveys and DHS

The reusable survey-native substrate is implemented, and DHS now has a concrete integrated empirical family.

### DHS HR source authority

Current authority for source-native DHS HR facts is `surveys.dhs.hr_households`.

The important grain distinction is now explicit:

- **conceptual observation:** household within survey;
- **source household identity:** `household_id`, preserved and audited even when missing or duplicated;
- **durable physical identity / `DatasetRef.grain`:** unique `source_row_id`.

The current `dhs-hr-household-silver-v2` contract deliberately does **not** claim that a defective source household key is unique merely because a downstream consumer would prefer it to be.

HR source authority includes source variables, cluster/PSU/stratum facts, source household weight, file/release/snapshot identity, hashes, QA, and run provenance.

It does not own treatment/outcome/covariate role, normalized analysis weight, geography exposure, or estimator design.

### DHS GC authority

Current authority for DHS Geospatial Covariates is the cluster-associated Silver product:

```text
survey_id × cluster_id
```

plus an optional derived long view:

```text
survey_id × cluster_id × source_variable
```

Identity fields remain identifiers rather than measurements. Temporal meaning is documentation/registry-driven. Cluster absence and missing values do not become zero. GC is not authoritative polygon-wide or Africa-wide covariate coverage.

### DHS GE/GPS geography authority

Current authority for public DHS cluster coordinates is the source-native GPS Silver plus `reported_coordinate_membership`.

That relation says where the **reported public coordinate** falls in the declared analytical geography. It is not authority for the true undisplaced cluster location.

A future `possible_geography_under_displacement` product would be a separate derived authority surface.

### DHS cross-product integration authority

The current authoritative statement that HR, GPS, and GC belong to one integrated survey support universe comes from the explicit integration QA report, not from a convenience inner join.

That report is authoritative for questions such as:

- do all three products resolve to the same `SurveyCatalogEntry`?
- do supplied `DatasetRef` grains actually identify the rows they claim to identify?
- which clusters are HR-only, GPS-only, GC-only, or common?
- is GC linking through `DHSCLUST` while preserving `DHSID` separately?
- are textual identity disagreements such as `001` versus `1` still unresolved?

It is **not** authority for a joined household analysis table because it contains support/count/provenance evidence rather than joined microdata values.

### DHS household semantic-measurement authority

A new derived empirical authority surface now exists above HR Silver: [DHS Household Semantic Measurements](./products/dhs-household-measurements.md).

The initial DHS-VII registry establishes reusable empirical meaning for:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

The durable measurement product is keyed by:

```text
source_row_id × measurement_id
```

and is authority for the declared codebook-backed empirical meaning, temporal semantics, comparability status, and measurement status under that registry version.

It is **not** authority for experiment role.

Examples:

- `dhs.household.electricity_access` can be an authoritative empirical measurement without being the authoritative FCV outcome;
- wealth quintile remains explicitly survey-relative, not an absolute cross-survey wealth scale;
- drinking-water source remains a source category code, not automatically “improved” or “safe” water.

Unknown/unmapped codes remain unresolved and do not become zero.

### What remains downstream for DHS

`fcv-empirical-data` still does not own:

- which semantic household measurement is outcome/control/moderator;
- household/person → cluster scientific projection;
- exposure timing;
- displacement-aware treatment/exposure rules;
- survey-weight/variance-estimation choices;
- estimator-ready DHS analysis frames.

Those belong in experiment use.

For the human-facing map, see [DHS Empirical Stack](./products/dhs-overview.md).

Afrobarometer remains substrate-only in the current architecture; a source-native respondent/EA vertical has not yet been implemented.

## What the recovered Dataset Inventory is now

The detailed [Dataset Inventory](./dataset-inventory.md) remains valuable as:

**HISTORICAL / RECOVERED INVENTORY**

Use it for reconstruction, parity, historical variable definitions, reproducing legacy calibration surfaces, identifying missing source material, and understanding genealogy.

Do not automatically promote a recovered artifact to current authority simply because an earlier notebook consumed it.

## When a legacy artifact may still be used scientifically

A recovered artifact can still be a legitimate experiment input when its use is explicit, for example:

- recovered real-data E1/E2 calibration;
- parity comparison between rebuilt and historical products;
- reconstruction where no current source-native replacement exists;
- deliberately legacy-compatible work with retained provenance.

## What not to infer from an archive file

Do not infer that:

- a missing row means zero, control, no project, or no event;
- a legacy aggregate has the same coverage semantics as a rebuilt product;
- a historical `GID` or time label proves current geography/period identity;
- project amount is local spending;
- a project/event/survey variable is intrinsically treatment or outcome;
- a historical DHS cluster/GID relation is equivalent to current reported-coordinate or displacement-aware geography;
- an old notebook variable interpretation outranks current codebook-backed registry evidence;
- equality with historical output is required for the rebuilt product to be correct.

## Reading order

For current work:

1. [Research System Architecture](../research-system.md)
2. this page
3. [Empirical Product Catalog](./product-catalog.md)
4. [DHS Empirical Stack](./products/dhs-overview.md) when working on surveys
5. [DHS Household Semantic Measurements](./products/dhs-household-measurements.md)
6. [Validation Status](./validation-status.md)
7. [Source Data Implementation Status](../continuation/source-data-implementation-status.md)
8. [Experimental Design Status](../continuation/experimental-design-status.md)

For archaeology and parity work, then continue into the [Dataset Inventory](./dataset-inventory.md), [2023 Duke Overview](../main-pipeline/duke-overview.md), and [Archive Map](../archive-map.md).
