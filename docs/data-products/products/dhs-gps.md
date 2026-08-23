---
title: DHS GE/GPS Geography
sidebar_label: DHS GPS Geography
last_verified: "2026-08-23"
---

# DHS GE/GPS Geography

**Product status: REPORTED-COORDINATE CLUSTER GEOGRAPHY IMPLEMENTED**  
**Authority: SOURCE-NATIVE CLUSTER SILVER + AUDITABLE GEOGRAPHY RELATION**  
**Real protected-data acceptance: NOT RECORDED IN THIS SITE**  
**Experiment-use status: NOT YET A CURRENT DHS EXPERIMENT INPUT**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

The DHS GE/GPS vertical preserves public DHS cluster coordinates as **reported spatial measurements with explicit displacement uncertainty**.

```text
external DHS GE/GPS file
        ↓
SourceSnapshotRef
        ↓
source-native cluster Silver
        ↓
survey / GPS identity audit
        ↓
reported-coordinate spatial membership
        ↓
SurveyGeographyLink + uncertainty metadata
```

The key phrase is **reported-coordinate**. This product never claims that a public DHS point is the cluster's exact true location.

## Natural grain

Cluster Silver preserves one supplied GPS row as one row, with a technical row identity so duplicates remain observable.

The normalized envelope preserves, where supplied/documented:

- survey identity;
- cluster identity / DHSID;
- reported latitude and longitude;
- source-defined urban/rural classification;
- source release and snapshot identity;
- coordinate validity;
- whether the coordinate is displaced;
- release-specific displacement-policy metadata;
- every source-native field.

If the source is geospatial, source geometry is retained as source information rather than reinterpreted as an undisplaced true location.

## Displacement semantics

Displacement metadata is release-specific provenance, not a hardcoded universal DHS rule table.

The caller may attach only documentation-supported policy facts such as urban/rural displacement limits, exceptional rural displacement policy, or policy source. The implementation deliberately has no universal default displacement radius.

It does not perform:

- de-displacement;
- true-location inference;
- nearest-project snapping;
- displacement-buffer matching as if exact;
- silent coordinate repair.

A coordinate placeholder is treated as such only when the release-specific convention is explicitly supplied.

## Survey / GPS identity audit

The GPS vertical does not silently inner-join clusters and discard discrepancies.

The linkage audit can preserve:

- survey-only clusters;
- GPS-only clusters;
- duplicate cluster rows;
- conflicting survey identity;
- source survey-ID conflicts.

This matters because an experiment should not acquire apparently clean geography by losing difficult clusters during linkage.

## Reported-coordinate geography membership

Only valid reported points are sent to `spatial-data-foundation` for polygon membership.

The resulting relation is explicitly named:

```text
reported_coordinate_membership
```

It preserves shared geography identity and membership status. Exact-boundary or overlapping-polygon cases may remain `ambiguous_multiple`; outside points remain outside; unusable coordinates remain invalid rather than being assigned by convenience.

The relation carries displacement and uncertainty metadata alongside the geography result.

## What the membership means

A matched row means:

> the coordinate supplied in the public DHS GPS file falls inside this analytical polygon.

It does not mean:

> the undisplaced household/cluster location is definitely in this polygon.

That distinction is scientifically important near administrative boundaries, around small spatial exposures, and whenever an experiment uses nearest-project or radius-based treatment definitions.

## Future uncertainty-aware geography

The implementation reserves a separate semantic concept:

```text
possible_geography_under_displacement
```

for a future product that could enumerate geography candidates consistent with an authoritative displacement policy.

That future product would complement reported-coordinate membership. It would not overwrite the reported coordinate or manufacture a single true location.

The candidate/buffer product is **not yet implemented**.

## Relationship to HR and GC

GPS geography is a cluster-level product. It does not contain HR household variables or GC covariates.

A scientific DHS design may later combine:

```text
HR household → verified cluster identity
GC cluster covariates → same verified cluster identity
GPS cluster geography → reported-coordinate relation
```

but that composition must preserve the different grains and displacement uncertainty.

## Known limitations / do not infer

Do not infer that:

- `geo_uid` from reported-coordinate membership is the true undisplaced cluster geography;
- a unique reported-point match eliminates displacement uncertainty;
- a GPS-only missing cluster can be silently removed from HR;
- two clusters in the same ADM are the same cluster;
- public coordinates support exact nearest-project exposure without sensitivity analysis;
- geography membership assigns treatment or outcome meaning.

## Experiment history

No current DHS experiment has yet consumed this geography relation in the forward-looking harness.

The next scientific-use layer should explicitly state how displacement uncertainty affects exposure assignment and should distinguish reported-point sensitivity from any future uncertainty-aware candidate geography.

## Technical reference

- [`fcv-empirical-data/docs/DHS_GPS_GEOGRAPHY.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_GPS_GEOGRAPHY.md)
