---
title: DHS Household Recode (HR)
sidebar_label: DHS HR
last_verified: "2026-08-23"
---

# DHS Household Recode (HR)

**Product status: SOURCE-NATIVE HOUSEHOLD SILVER IMPLEMENTED**  
**Authority: L3 REBUILT SOURCE PRODUCT**  
**Real protected-data acceptance: NOT RECORDED IN THIS SITE**  
**Experiment-use status: NOT YET A CURRENT DHS EXPERIMENT INPUT**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

The HR vertical materializes externally stored DHS Household Recode files at their natural **household-within-survey** grain.

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

It is a source-data product. It is not yet an outcome table, treatment table, or estimator-ready survey panel.

## Source authority and privacy

DHS HR source files remain external and protected. The repository registers exact path/file identity and SHA-256 through `SourceSnapshotRef`, then revalidates the source before reading it.

No real DHS microdata should appear in Git fixtures, logs, PR descriptions, or onboarding pages. GitHub tests use synthetic DHS-shaped data.

## Natural grain

One row represents one supplied household observation within one DHS survey.

The normalized envelope preserves, where available and release-verified:

- `survey_id`;
- household ID;
- cluster identity;
- PSU identity;
- stratum identity;
- source household weight and exact source weight variable;
- source release and snapshot identity;
- recode/file identity;
- country/survey metadata;
- every original source-native HR variable.

Two households in one cluster remain two household rows. Duplicate household IDs remain visible as QA facts rather than being silently deduplicated.

## Survey identity

Survey identity is resolved from verified DHS metadata, not guessed from the source filename.

The HR file is linked to the shared survey catalog through `SurveyFileLink`, allowing the same survey to have separate HR, GC, GE/GPS, PR, IR, or other snapshots without coupling survey identity to one acquisition file.

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

## QA and provenance

The materialization records non-sensitive diagnostics such as:

- input/output household counts;
- missing and duplicate household IDs;
- missing cluster/PSU/stratum identities;
- missing, invalid, or nonpositive source weights;
- source-column/value preservation;
- source-schema fingerprint;
- source snapshot identity and hash;
- output dataset hash;
- run provenance.

Anomalies remain visible. The source table is not repaired merely to satisfy QA.

## Known limitations / do not infer

Do not infer that:

- any `HV*` variable is already an FCV outcome or covariate;
- the source weight is already the correct normalized analysis weight;
- HR households already have exact analytical geography;
- the survey cluster's public coordinate is its true location;
- a household should be collapsed into a GID × period row;
- missing source values are zero;
- source cluster identity alone defines project exposure.

## Experiment history

The current forward-looking experiment harness has not yet recorded a DHS household experiment consuming this HR product.

A current experiment would still need an explicit variable-role mapping, household/cluster linkage, exposure/timing design, displacement-aware geography policy, survey-design/weight choice, coverage rules, and protected real-data acceptance.

## Technical reference

- [`fcv-empirical-data/docs/DHS_HR_SILVER.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_HR_SILVER.md)
