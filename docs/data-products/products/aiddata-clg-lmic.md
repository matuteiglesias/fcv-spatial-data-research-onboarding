---
title: AidData CLG-LMIC Silver
sidebar_label: AidData CLG-LMIC
last_verified: "2026-08-23"
---

# AidData CLG-LMIC Silver

**Product status: IMPLEMENTED SOURCE-NATIVE RELATIONAL SILVER**  
**Current spatial experiment status: NOT ITSELF AN EXPOSURE PRODUCT**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

A source-native reconstruction of the AidData CLG-LMIC workbook that preserves the source's relational structure rather than flattening every sheet into one experiment table.

```text
registered CLG-LMIC workbook
→ SourceSnapshotRef
→ source-native relational Silver
```

## Source authority

The authoritative input is the registered CLG-LMIC release workbook plus any explicitly registered immutable release files.

The source snapshot records the actual external file paths, sizes, and SHA-256 hashes without requiring gratuitous duplication of the workbook.

## Natural grain

The materialization preserves distinct source tables, including:

```text
records.parquet
borrower_ownership.parquet
country_list.parquet
definitions_records.parquet
definitions_borrower_ownership.parquet
column_name_mapping.parquet
```

The central records table retains the source `aiddata_record_id`.

Borrower ownership remains a child table. Multiple ownership rows for one source record are valid and must not multiply the parent project's finance or be flattened into duplicated project facts.

## Geography

This source-native Silver does not assert a current canonical area-period exposure measurement.

Country/source geography fields remain source facts. Any later project-location, administrative-unit, or exposure construction requires an explicit derived empirical product or experiment projection.

## Time and coverage

Named source date/year fields are retained as source variables. This catalog does not assert a synthetic cross-release coverage interval where the producing product does not declare one.

Row absence is not licensed as no investment, control, or zero exposure.

## Important measured facts

The Silver representation preserves:

- source `aiddata_record_id`;
- all named source variables, including currently all-missing named variables;
- borrower-ownership child multiplicity;
- country list and source definitions;
- reversible column normalization through `column_name_mapping.parquet`;
- source/release/snapshot identity;
- engineering provenance columns under the `fcv_` prefix.

Only unnamed Excel layout columns that contain no values at all are automatically excluded, and that exclusion is recorded.

## Durable contract artifacts

The materialization persists or references:

- `SourceSnapshotRef`;
- one or more Silver `DatasetRef` objects at their natural grains;
- `RunManifest`;
- source/input hashes;
- output hashes;
- QA results;
- optional legacy parity report.

QA includes source-ID missingness/duplicates, borrower-ownership referential integrity, child multiplicity, table shapes, and column coverage.

## Known limitations / do not infer

Do not infer that:

- child-table multiplicity means multiple projects;
- project amounts should be multiplied by borrower-ownership rows;
- country identity is already an administrative exposure relation;
- missing rows mean no Chinese finance;
- CLG-LMIC and World Bank projects are already deduplicated, harmonized, or additive;
- any source variable is intrinsically treatment, control, outcome, or covariate;
- `L3_REBUILT` means research validation. It means rebuilt from source authority.

## Experiment history

Recovered China / pooled-investment design vocabulary exists in the historical research system, but this rebuilt CLG-LMIC Silver has not been promoted by this catalog as a completed current contracted China-only or pooled experiment surface.

A current experiment must first declare how source facts become a spatial/temporal empirical measurement and then derive treatment downstream.

## Technical reference

- [`fcv-empirical-data/docs/INVESTMENTS.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/INVESTMENTS.md)
