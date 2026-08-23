---
title: World Bank Projects API Silver
sidebar_label: World Bank Projects API
last_verified: "2026-08-23"
---

# World Bank Projects API Silver

**Product status: IMPLEMENTED SOURCE-NATIVE SILVER**  
**Current spatial experiment status: MEASUREMENT PATH STILL NEEDED**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

A source-native reconstruction of World Bank project records from downloaded Projects API page JSON.

```text
World Bank Projects API page JSON
→ SourceSnapshotRef
→ one-project-per-source-ID Silver
```

This is an authoritative project-record surface, not yet a current source-native area-period exposure product.

## Source authority

The Bronze authority is the downloaded `page_os_*.json` response set plus acquisition sidecars when present.

Legacy `worldbank_projects_flat.csv` and raw JSONL derivatives may be useful for parity, but they are not registered as the raw source snapshot.

## Natural grain

One source project per exact World Bank `id`.

Nested dictionaries are flattened by path. Lists are retained as canonical JSON strings, and each row carries the original project object in `fcv_source_record_json` so the source representation remains reconstructible.

## Geography

This Silver product does not itself assert a canonical spatial exposure relation for the project.

A collaborator should therefore not take a country field, legacy GID, or recovered area-period table and silently treat it as the current World Bank spatial measurement.

A current WB-only spatial experiment needs an explicit contract-backed project-location / geography measurement path downstream of this Silver authority.

## Time and coverage

Project dates remain source facts. In particular:

- `boardapprovaldate` = board approval date;
- `closingdate` = closing date;
- other source dates retain their source meanings.

No cross-release temporal coverage range is asserted by this catalog. Inspect the registered snapshot and materialized source fields for the actual support of the chosen pull.

Project-row absence has no automatic no-project, control, or structural-zero meaning.

## Important measured facts

The product preserves:

- exact source project `id`;
- raw reconstructible project representation;
- source-native dates;
- source amount fields such as `totalcommamt`;
- raw page file, page offset, and record position;
- source snapshot/release provenance;
- flattened source fields and column coverage.

`totalcommamt` remains the source total-commitment field. It is not relabeled as local spending or spatially allocated finance.

## Durable contract artifacts

The materialization persists or references:

- `SourceSnapshotRef`;
- Silver `DatasetRef`;
- `RunManifest`;
- source/input hashes;
- output hash;
- QA results;
- optional legacy parity evidence;
- source-specific acquisition/provenance sidecars.

## Known limitations / do not infer

Do not infer that:

- board approval is implementation start;
- closing date is project completion in a causal design;
- commitment amount is local spending;
- one project row identifies one exposed administrative unit;
- project absence means control;
- World Bank and AidData records are already deduplicated or additive;
- the Silver product is already a WB-only treatment surface.

## Experiment history

Recovered WBad/WBkg area-period surfaces have been used in real historical E1/E2 calibration. Those results remain valuable recovered-lane evidence.

They are not automatically evidence that this rebuilt World Bank Projects API Silver has been taken through the current contracted spatial experiment path.

## Technical reference

- [`fcv-empirical-data/docs/INVESTMENTS.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/INVESTMENTS.md)
