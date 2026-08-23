---
title: AidData GeoGCDF Investment Measurement
sidebar_label: AidData GeoGCDF
last_verified: "2026-08-23"
---

# AidData GeoGCDF Investment Measurement

**Product status: IMPLEMENTED / CURRENT REFERENCE INVESTMENT MEASUREMENT**  
**Real current-artifact experiment status: NOT YET RECORDED**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

The current fully modern geospatial investment reference path in `fcv-empirical-data`:

```text
official GeoGCDF artifact
→ SourceSnapshotRef
→ source-native project-geometry Silver
→ shared point / areal geography relation
→ shared PeriodIndex
→ contracted commitment-period Gold
```

It is designed to preserve what the source reports without turning project records into treatment upstream.

## Source authority

The authoritative input is the registered official AidData GeoGCDF artifact. The implementation defaults to the GeoGCDF source family and records release/snapshot identity plus the source file hash.

The merged reference implementation targets the official GeoGCDF family and preserves the supplied geometry and project attributes rather than reconstructing them from legacy area-period tables.

## Natural grain

**Silver:** source-native project-geometry rows. A stable `project_geometry_row_id` is retained alongside the source project ID.

A project can legitimately be represented by point or areal geometry. Geometry is not coerced to a centroid merely to fit an area-period panel.

**Gold:** a contracted geography-period commitment measurement derived from project/geography relations and shared period assignment.

## Geography

The geography relation uses shared spatial infrastructure and preserves geometry semantics:

- polygons may overlap multiple administrative units;
- a project footprint may therefore contribute project presence to more than one unit;
- finance is not divided or multiplied across those units;
- point boundary ambiguity remains unresolved rather than being silently tie-broken;
- strict coverage logic can refuse structural-zero licensing when unresolved geography would make the zero unsafe.

## Time and coverage

The current reference Gold uses **commitment timing** as the temporal fact for this measurement. Implementation-start and completion dates remain separate Silver source facts and are not silently substituted.

The merged vertical declares a source project universe of **2000–2021** for the structural-zero coverage logic.

Structural zeros are licensed only where all of the following hold:

- the recipient country is represented in both the source and target geography;
- the period is fully inside the source-declared project universe;
- strict-mode resolution requirements are satisfied.

If a target-country project has unresolved geography or commitment time, strict mode refuses to turn absence into structural zero.

## Important measured facts

The normalized Silver representation includes source-facing facts such as:

- source project ID;
- recipient / recipient ISO3 field;
- title;
- native status;
- native sector;
- infrastructure field;
- reported amount in constant 2021 USD where supplied;
- commitment year/date;
- implementation-start year/date;
- completion year/date;
- source geometry and CRS-derived normalized geometry.

The Gold product includes project-count style commitment-period measurements, including a count of projects with a positive reported source amount.

That count does **not** mean positive local spending in the administrative unit.

## Durable contract artifacts

The vertical persists or references:

- `SourceSnapshotRef`;
- Silver and Gold `DatasetRef` objects;
- geography relation / membership products;
- shared period assignment;
- `CoverageContract`;
- `MeasurementContract`;
- `RunManifest`;
- QA/provenance sidecars;
- source and output hashes.

## Known limitations / do not infer

Do not infer that:

- a project geometry means spending was evenly distributed over that geometry;
- a polygon spanning two units means project finance should be counted twice;
- commitment date is implementation start or causal exposure onset;
- a positive reported amount is local spending;
- unmatched or ambiguous projects imply no investment;
- GeoGCDF defines treatment/control, jobs status, matching eligibility, or estimator semantics;
- CI synthetic fixtures prove the real official release has been accepted.

## Experiment history

GeoGCDF is the strongest current investment candidate for a fully contracted end-to-end investment → ACLED run because it already has a source-native spatial measurement path compatible with the shared contract seam.

That real current-artifact experiment is still recorded as **NOT RUN** in the human-facing validation board.

## Technical reference

- [`fcv-empirical-data` PR #5 — contract-backed GeoGCDF vertical](https://github.com/matuteiglesias/fcv-empirical-data/pull/5)
