---
title: Survey-Native Substrate
sidebar_label: Survey Substrate
last_verified: "2026-08-23"
---

# Survey-Native Substrate

**Capability status: IMPLEMENTED REUSABLE SUBSTRATE**  
**Empirical product status: NO REAL DHS / AFROBAROMETER INGESTION YET**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

A reusable metadata vocabulary for complex surveys whose natural observations may be households, people, respondents, clusters, enumeration areas, or other explicitly declared grains.

It is intentionally **not** a survey ingestion framework and should not be mistaken for a DHS or Afrobarometer dataset.

## Survey authority

The substrate separates survey identity from source-file identity:

- `SurveyCatalogEntry` identifies the survey;
- `SurveyFileLink` connects one survey to one or more contract-backed source files and snapshots;
- source files are validated against the declared `SourceSnapshotRef`.

This allows one survey release to consist of several authoritative files without pretending that one file is the survey itself.

## Natural grain

Observation grain is an explicit extensible string rather than a closed ontology.

The substrate is designed to represent, among other things:

- DHS household observations;
- DHS person observations;
- DHS cluster observations;
- Afrobarometer respondent observations;
- Afrobarometer EA observations.

It does not force these into one area-period panel.

## Geography

Survey geography is represented as a candidate relation rather than a permanently assigned column.

Each `SurveyGeographyLink` carries:

- the exact shared `GeographySpec`;
- a `MembershipStatus` from `spatial-data-foundation`;
- `geo_uid` only when consistent with the assignment state.

Several rows may represent plausible memberships. Ambiguous or unmatched observations remain visible.

The substrate does not claim that a reported survey coordinate is the respondent's exact true location.

## Time and coverage

Variable timing is semantic metadata rather than an inferred timestamp.

`SurveyVariableMetadata` can preserve source-facing variable identity, instrument/recode/round context, missing-value metadata, codebook provenance, and a small temporal-semantics vocabulary.

`UNKNOWN` is the default when timing meaning has not been established.

No area-period structural-zero semantics are imposed on survey absence.

## Sampling and weights

`SurveyDesignRecord` preserves source sampling/design facts, including the source weight variable/value.

A normalized weight may be represented only when its normalization method is explicitly named.

The substrate does not choose the analysis weight and does not perform weighted estimation.

## Durable contract relationships

The substrate is designed to compose with:

- `SourceSnapshotRef`;
- `SourceFileRef`;
- shared `GeographySpec`;
- shared membership states;
- source-native variable metadata;
- explicit survey/design metadata.

A future real survey vertical should add its own durable dataset/run artifacts while reusing these concepts rather than inventing a parallel contract framework.

## Known limitations / do not infer

Do not infer that:

- the substrate means DHS or Afrobarometer has been ingested;
- a survey variable is already an outcome, treatment, or covariate;
- source weights have already been normalized correctly for a specific estimator;
- respondent/household records should be aggregated to GID × period;
- ambiguous geography should be resolved by nearest polygon or convenience;
- round labels automatically determine causal timing.

## Experiment history

Historical DHS and Afrobarometer files/mappings exist in the recovered archive, but the forward-looking contract-backed survey path is still waiting for real source-native ingestion and an explicit scientific-use design.

Current survey-based experiment surfaces are therefore **BLOCKED**, not failed.

## Technical reference

- [`fcv-empirical-data/docs/SURVEY_SUBSTRATE.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/SURVEY_SUBSTRATE.md)
