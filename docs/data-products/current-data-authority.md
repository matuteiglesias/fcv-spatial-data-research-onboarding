---
title: Current Empirical Data Authority
sidebar_position: 1
description: Current source-of-truth map for FCV empirical data, contracts, geography, and recovered archive products.
last_verified: "2026-08-23"
---

# Current Empirical Data Authority

**Document status: CURRENT AUTHORITY OVERLAY**  
**Last verified: 2026-08-23**

This page answers a narrow collaborator question:

> When several old files, rebuilt datasets, contracts, and experiment outputs coexist, which layer should be treated as authoritative for what?

The short rule is:

> **Current source facts and measurements come from the contract-backed producing stack. Recovered archive datasets remain evidence, parity material, and historical research memory unless a current experiment explicitly consumes them.**

For the full repository map, see [Research System Architecture](../research-system.md).

## Current authority map

| Concern | Current authority | What it owns |
|---|---|---|
| Empirical contracts | [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) | Dataset identity, source snapshots, grain, geography/time contracts, coverage, measurements, QA, run manifests. |
| Geography and period mechanics | [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) | Analytical geography, GADM materialization, spatial membership, period indexing, spatial provenance. |
| FCV source facts and durable measurements | [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) | Source-native empirical verticals, Silver/Gold materialization, provenance, coverage, QA, parity. |
| Scientific roles and analysis variables | [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) | Experiment projection, treatment/outcome roles, eligibility, timing, counterfactuals, gates, estimators, falsification, calibration. |
| Recovered historical datasets | [Dataset Inventory](./dataset-inventory.md) and recovered archive | Reconstruction, historical evidence, parity, legacy-calibration surfaces, provenance. |

No one row in this table replaces the others. Authority is **layer-specific**.

## Current FCV empirical surfaces

As of this verification point, `fcv-empirical-data` contains the following implemented foundations and verticals.

### Investment sources

- **AidData CLG-LMIC** — source-native relational Silver preserving record identity, borrower-ownership child rows, definitions, source column mapping, snapshots, hashes, QA, and parity evidence.
- **World Bank Projects API** — source-native project Silver built from downloaded page JSON snapshots, preserving the exact source project `id`, raw project representation, page provenance, source-native dates, QA, and parity evidence.
- **AidData GeoGCDF** — contract-backed project-geometry Silver and commitment-period measurement path using shared geography and period infrastructure.

These sources remain independent. Their records are not silently deduplicated, summed, harmonized, or converted into treatment upstream.

### Violence

- **ACLED** — source-native event Silver retaining supplied rows, native event taxonomy, zero-fatality events, source precision, source identifiers, and source snapshot provenance.
- ACLED geography membership is a separate auditable relation produced through the shared spatial foundation.
- ACLED period assignment uses the shared period index.
- The current Gold reference measurement is sparse and contract-backed; absent rows acquire zero meaning only where an explicit coverage contract licenses that interpretation.

### Surveys and DHS

The reusable **survey-native substrate** is implemented in `fcv-empirical-data` and is now exercised by concrete DHS source verticals.

#### DHS Household Recode authority

Current authority for DHS HR source facts is the contract-backed HR Silver product:

```text
survey_id × household
```

It preserves source household/cluster/PSU/stratum identity, source household weight unchanged, source-native HR columns, exact DHS file/release identity, source snapshot/hash, QA, and run provenance.

It does **not** own outcome/covariate roles, normalized analysis weights, household geography exposure, or estimator design.

#### DHS Geospatial Covariates authority

Current authority for DHS GC is the cluster-associated measurement product:

```text
survey_id × cluster_id
```

plus an optional derived long view:

```text
survey_id × cluster_id × source_variable
```

GC identity fields remain identifiers rather than covariate measurements. Temporal meaning is registry/documentation-driven, and cluster absence or missing source values never acquire zero meaning. GC is not authoritative polygon-wide covariate coverage and is not aggregated to GID upstream.

#### DHS GE/GPS geography authority

Current authority for DHS public cluster coordinates is the source-native GPS cluster Silver plus the separate `reported_coordinate_membership` relation.

That relation says where the **reported public coordinate** falls in the declared analytical geography. It is not authority for the true undisplaced cluster location. Displacement metadata, ambiguous/outside/invalid states, and geography identity remain explicit.

A future uncertainty-aware `possible_geography_under_displacement` product would be a separate derived authority surface; it is not implied by reported-coordinate membership.

#### What remains downstream

The DHS products can now be linked through verified survey/cluster identity, but the empirical repository still does not own:

- DHS outcome/treatment/covariate roles;
- household/person → cluster scientific projection;
- exposure timing;
- displacement-aware treatment rules;
- survey-weight/variance-estimation choices;
- estimator-ready DHS analysis tables.

Those belong in experiment use.

For the human-facing map, see [DHS Empirical Stack](./products/dhs-overview.md).

Afrobarometer remains substrate-only in the current architecture; a source-native respondent/EA vertical has not yet been implemented.

## What the recovered Dataset Inventory is now

The detailed [Dataset Inventory](./dataset-inventory.md) remains valuable, but its role has changed.

Treat it as:

**HISTORICAL / RECOVERED INVENTORY**

It inventories what was recovered under locations such as:

```text
2023_Duke/
spatial_data/
```

Those files can be useful for:

- reconstructing prior work;
- comparing rebuilt products against historical outputs;
- recovering old variable definitions;
- reproducing legacy calibration surfaces;
- identifying missing source material;
- understanding the genealogy of the current research system.

They should not automatically be treated as the current authoritative source representation simply because they exist or because an earlier notebook consumed them.

## Recovered-data status vocabulary

The old inventory uses statuses such as `reusable after validation`, `intermediate`, `empirical working data`, and `legacy/product store`.

Read those labels **inside the recovered archive context**. They answer:

> How useful is this recovered artifact for understanding or reusing the historical work?

They do **not** answer:

> Is this the current contract-backed source of truth for FCV?

For current authority, use the repository map above and the producing repository's contracts/run evidence.

## When a legacy artifact may still be used scientifically

A recovered artifact can still be a legitimate experiment input when its use is explicit.

Examples include:

- the recovered real-data E1/E2 calibration surface;
- a parity comparison between rebuilt and historical source products;
- a reconstruction exercise where no current source-native replacement exists yet;
- a deliberately legacy-compatible experiment whose provenance is retained.

In those cases the experiment should identify the artifact's authority and limitations rather than silently promoting it to current source truth.

## What not to infer from an archive file

Do not infer that:

- a missing row means zero, control, no project, or no event;
- a legacy aggregate has the same coverage semantics as a rebuilt source-native measurement;
- a historical `GID` label proves current geography identity;
- a historical time-window label proves the same current `PeriodScheme`;
- a project amount is local spending;
- a project/event/survey variable is intrinsically a treatment or outcome;
- a historical DHS GID/cluster link is automatically equivalent to current reported-coordinate or displacement-aware geography;
- equality with a historical output is required for the rebuilt product to be correct.

Those meanings require explicit current contracts or experiment-use rules.

## Reading order

For current work:

1. [Research System Architecture](../research-system.md)
2. this page
3. [Empirical Product Catalog](./product-catalog.md)
4. [DHS Empirical Stack](./products/dhs-overview.md) when working on surveys
5. [Validation Status](./validation-status.md)
6. [Source Data Implementation Status](../continuation/source-data-implementation-status.md)
7. [Experimental Design Status](../continuation/experimental-design-status.md)

For archaeology and parity work, then continue into the detailed [Dataset Inventory](./dataset-inventory.md), [2023 Duke Overview](../main-pipeline/duke-overview.md), and [Archive Map](../archive-map.md).
