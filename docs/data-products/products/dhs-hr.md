---
title: DHS Household Recode (HR)
sidebar_label: DHS HR
last_verified: "2026-08-23"
---

# DHS Household Recode (HR)

**Product status: SOURCE-NATIVE HOUSEHOLD SILVER IMPLEMENTED / SCHEMA V2**  
**Authority: L3 REBUILT SOURCE PRODUCT**  
**Real protected-data acceptance: NOT RECORDED IN THIS SITE**  
**Experiment-use status: NOT YET A CURRENT DHS EXPERIMENT INPUT**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

The HR vertical materializes externally stored DHS Household Recode files as source-native household observations.

```text
external authoritative DHS HR file
        ↓
SourceSnapshotRef + SHA-256
        ↓
verified survey / file identity
        ↓
source-native household Silver
        ↓
QA + DatasetRef + RunManifest
```

It is a source-data product. It is not an outcome table, treatment table, or estimator-ready survey panel.

## Source authority and privacy

DHS HR source files remain external and protected. The repository registers exact path/file identity and SHA-256 through `SourceSnapshotRef`, then revalidates the source before reading it.

No real DHS microdata should appear in Git fixtures, logs, PR descriptions, or onboarding pages. GitHub tests use synthetic DHS-shaped data.

## Conceptual observation versus durable key

One supplied row is conceptually a **household observation within one DHS survey**.

The latest integration audit exposed an important contract distinction: a source `household_id` can legitimately be missing or duplicated and must remain visible as an anomaly. Therefore the durable dataset cannot truthfully claim that `(survey_id, household_id)` is always a unique key.

The current `dhs-hr-household-silver-v2` contract separates:

- **conceptual observation:** household within survey;
- **source household identity:** `household_id`, preserved and audited even when missing/duplicated;
- **physical row identity:** `source_row_id`, guaranteed unique and used by the durable `DatasetRef.grain`;
- **observation identity used by design records:** derived from the physical source-row identity so every retained source row remains individually traceable.

This is not a retreat from household grain. It makes the persisted uniqueness claim truthful while preserving source defects instead of repairing them away.

## Preserved source facts

The normalized envelope preserves, where available and release-verified:

- `survey_id`;
- `source_row_id`;
- household ID;
- cluster identity;
- PSU identity;
- stratum identity;
- source household weight and exact source weight variable;
- source release and snapshot identity;
- recode/file identity;
- country/survey metadata;
- every original source-native HR variable.

Two households in one cluster remain two household rows. Duplicate or missing household IDs remain visible as QA facts rather than being silently deduplicated.

## Survey identity and integrated DHS QA

Survey identity is resolved from verified DHS metadata, not guessed from the source filename.

The HR file is linked to the shared survey catalog through `SurveyFileLink`, allowing the same survey to have separate HR, GC, GE/GPS, PR, IR, or other snapshots without coupling survey identity to one acquisition file.

The current DHS stack also has a cross-product integration report that validates HR against GC and GPS without joining away discrepancies. It checks survey identity, declared dataset grain, cluster support, and suspicious text-normalization cases such as `001` versus `1`.

The integration report is QA evidence, not a household analysis table.

See [DHS Empirical Stack](./dhs-overview.md).

## Sampling and weight semantics

The source household weight is preserved unchanged.

This layer does **not** automatically:

- divide the weight by one million;
- normalize weights for an estimator;
- choose PSU/stratum use;
- construct survey design objects for inference;
- decide whether a source variable is an outcome or covariate.

Those are downstream scientific-use choices.

## Geography

HR preserves the cluster/PSU facts needed for later linkage, but it does not itself assign households to analytical polygons or investment exposure.

The current DHS geography product lives in the separate [DHS GE/GPS](./dhs-gps.md) vertical. A scientific household-level use should connect HR to cluster geography through verified cluster identity rather than by copying historical GID columns into HR Silver.

## Time and coverage

Survey/release metadata preserve fieldwork/survey identity, but HR source variables do not automatically receive experiment timing semantics.

Missing household rows or values do not imply zeros, controls, or absence of a condition. Variable-specific temporal meaning must come from source/codebook metadata or downstream scientific specification.

## HR now has a derived codebook-backed semantic layer

The source-native HR Silver remains intentionally broad and source-faithful. On top of it, the empirical repository now exposes a deliberately small [DHS Household Semantic Measurements](./dhs-household-measurements.md) product.

The initial DHS-VII registry includes:

- `HV206` → `dhs.household.electricity_access`;
- `HV270` → `dhs.household.wealth_quintile`;
- `HV201` → `dhs.household.drinking_water_source_code`.

These definitions are backed by explicit DHS standard-recode provenance and require survey-phase compatibility. They create reusable empirical meanings, not experiment roles.

The derived measurement product consumes the content-hashed HR Silver and uses `source_row_id × measurement_id` as its durable grain.

## QA and provenance

The HR materialization records non-sensitive diagnostics such as:

- input/output household counts;
- missing and duplicate household IDs;
- missing cluster/PSU/stratum identities;
- missing, invalid, or nonpositive source weights;
- source-column/value preservation;
- source-schema fingerprint;
- source snapshot identity and hash;
- output dataset hash;
- run provenance;
- physical row key and the fact that the natural household ID is not assumed unique.

Anomalies remain visible. The source table is not repaired merely to satisfy QA.

## Known limitations / do not infer

Do not infer that:

- every `HV*` variable already has a reusable semantic definition;
- a codebook-backed empirical measurement is automatically an FCV outcome or covariate;
- the source weight is already the correct normalized analysis weight;
- HR households already have exact analytical geography;
- the survey cluster's public coordinate is its true location;
- a household should be collapsed into a GID × period row;
- missing source values are zero;
- source cluster identity alone defines project exposure;
- a duplicated/missing `household_id` may be silently repaired to satisfy a grain contract.

## Experiment history

The current forward-looking experiment harness has not yet recorded a DHS household experiment consuming this HR product or its semantic-measurement derivative.

A current experiment still needs an explicit scientific-role choice, household/cluster projection, exposure/timing design, displacement-aware geography policy, survey-design/weight choice, coverage rules, and protected real-data acceptance.

## Technical references

- [`DHS_HR_SILVER.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_HR_SILVER.md)
- [`DHS_INTEGRATED_SUBSTRATE.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_INTEGRATED_SUBSTRATE.md)
