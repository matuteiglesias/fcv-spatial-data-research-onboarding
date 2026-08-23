---
title: Survey-Native Substrate
sidebar_label: Survey Substrate
last_verified: "2026-08-23"
---

# Survey-Native Substrate

**Capability status: IMPLEMENTED REUSABLE SUBSTRATE**  
**DHS use status: ACTIVE — HR / GC / GE-GPS VERTICALS NOW USE IT**  
**Afrobarometer use status: SOURCE-NATIVE INGESTION NOT YET IMPLEMENTED**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

A reusable metadata vocabulary for complex surveys whose natural observations may be households, people, respondents, clusters, enumeration areas, or other explicitly declared grains.

It is intentionally **not** a universal survey table or estimator framework. It provides the shared survey identity/design/geography/variable vocabulary that source-specific verticals can reuse.

The first concrete source-specific users now exist: the current [DHS empirical stack](./dhs-overview.md) reuses this substrate for Household Recode, Geospatial Covariates, and GE/GPS geography.

## Survey authority

The substrate separates survey identity from source-file identity:

- `SurveyCatalogEntry` identifies the survey;
- `SurveyFileLink` connects one survey to one or more contract-backed source files and snapshots;
- source files are validated against the declared `SourceSnapshotRef`.

This allows one survey to consist of several authoritative files or acquisitions without pretending that one file is the survey itself.

That distinction is now operational in DHS: HR, GC, and GE/GPS may be separate snapshots while resolving to the same survey identity.

## Natural grain

Observation grain is an explicit extensible string rather than a closed ontology.

The substrate can represent, among other things:

- DHS household observations;
- DHS person observations;
- DHS cluster observations;
- Afrobarometer respondent observations;
- Afrobarometer EA observations.

The implemented DHS verticals demonstrate why this matters:

```text
HR   → household grain
GC   → cluster grain
GPS  → supplied cluster-row grain + geography relation
```

These products are not forced into one area-period panel or one denormalized survey table.

## Geography

Survey geography is represented as an explicit relation rather than an unquestioned permanent column.

Each `SurveyGeographyLink` carries:

- the exact shared `GeographySpec`;
- a `MembershipStatus` from `spatial-data-foundation`;
- `geo_uid` only when consistent with the assignment state;
- optional uncertainty metadata.

The DHS GE/GPS vertical now uses this machinery for `reported_coordinate_membership`, preserving displacement uncertainty and ambiguous/unmatched/invalid states rather than treating public coordinates as exact true locations.

The substrate also allows future uncertainty-aware candidate geography without requiring current reported-coordinate membership to masquerade as true-location authority.

## Time and coverage

Variable timing is semantic metadata rather than an inferred timestamp.

`SurveyVariableMetadata` can preserve source-facing variable identity, instrument/recode/round context, missing-value metadata, codebook provenance, and a deliberately small temporal-semantics vocabulary.

`UNKNOWN` is the default when timing meaning has not been established.

The DHS GC vertical now uses this vocabulary to distinguish static, survey-time, annual, epoch, climatology, retrospective, and unknown cluster covariates without assigning survey year by convenience.

No area-period structural-zero semantics are imposed on survey absence.

## Sampling and weights

`SurveyDesignRecord` preserves source sampling/design facts, including source weight variables/values.

A normalized weight may be represented only when its normalization method is explicitly named.

The DHS HR vertical currently preserves the source household weight, cluster, PSU, and stratum facts without selecting an analysis design or silently rescaling the weight.

The substrate itself does not choose the analysis weight and does not perform weighted estimation.

## Durable contract relationships

The substrate composes with:

- `SourceSnapshotRef`;
- `SourceFileRef`;
- shared `GeographySpec`;
- shared membership states;
- source-native variable metadata;
- explicit survey/design metadata;
- source-specific `DatasetRef` / `RunManifest` products built by verticals.

The substrate therefore acts as a common survey spine rather than a replacement for source-specific semantics.

## Known limitations / do not infer

Do not infer that:

- the existence of the substrate alone means every survey family has been ingested;
- DHS HR/GC/GPS implementation means a DHS scientific experiment is already defined;
- a survey variable is already an outcome, treatment, or covariate;
- source weights have already been normalized correctly for a specific estimator;
- respondent/household records should be aggregated to GID × period;
- reported-coordinate geography is exact undisplaced geography;
- ambiguous geography should be resolved by nearest polygon or convenience;
- round labels automatically determine causal timing.

## Experiment history

The forward-looking survey empirical architecture has now crossed from generic substrate into concrete DHS source verticals. However, no current harness-side DHS experiment has yet been recorded using these products.

The remaining DHS blocker is therefore **scientific-use integration and protected-data acceptance**, not merely source ingestion.

Afrobarometer remains at the earlier stage: the reusable substrate exists, but a current source-native ingestion vertical is still absent.

## Technical references

- [`fcv-empirical-data/docs/SURVEY_SUBSTRATE.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/SURVEY_SUBSTRATE.md)
- [DHS Empirical Stack](./dhs-overview.md)
