---
title: DHS Household Semantic Measurements
sidebar_label: Household Measurements
last_verified: "2026-08-23"
---

# DHS Household Semantic Measurements

**Product status: IMPLEMENTED CODEBOOK-BACKED DERIVED MEASUREMENT**  
**Authority: L3 REBUILT / RELEASE VALIDATION STILL REQUIRED**  
**Protected real-data acceptance: NOT RECORDED IN THIS SITE**  
**Experiment role status: NO TREATMENT / OUTCOME / COVARIATE ROLE ASSIGNED**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

The DHS stack can now move from opaque HR source variables to a deliberately small set of reusable empirical meanings backed by official DHS recode documentation.

```text
content-hashed HR household Silver
        ↓
versioned DHS variable registry
        ↓
codebook-backed semantic transformation
        ↓
household semantic measurement
        ↓
MeasurementContract + QA + RunManifest
```

This is an empirical semantic layer. It is **not** an experiment-role layer.

The fact that a variable has a reusable empirical meaning does not make it an outcome, treatment, control, moderator, or estimator input automatically.

## Current registry scope

The initial registry is intentionally small and DHS-VII / Household Recode specific.

| DHS source variable | Current empirical measurement | Important boundary |
|---|---|---|
| `HV206` | `dhs.household.electricity_access` | Standard 0/1 coding; documented missing remains missing; unsupported codes remain unresolved. |
| `HV270` | `dhs.household.wealth_quintile` | Source-defined ordered quintile; explicitly survey-relative rather than an absolute cross-survey wealth scale. |
| `HV201` | `dhs.household.drinking_water_source_code` | Preserves the source category code; no automatic improved/safe-water harmonization. |

Each definition requires explicit codebook provenance and survey-phase compatibility.

The registry is not generated broadly from labels and does not revive meanings merely because historical notebooks used a variable in a particular way. In particular, unsupported old interpretations of variables such as `HV215` or `HV040` do not become current source truth.

## Grain and identity

The derived durable product is materialized at:

```text
source_row_id × measurement_id
```

`source_row_id` is the physical observation identity inherited from HR Silver. This is deliberate: source household IDs may be missing or duplicated and those anomalies must remain visible rather than forcing a false uniqueness contract.

The conceptual observation remains a household observation within a survey.

## Missingness and unresolved values

The measurement layer keeps distinct states such as:

- `observed`;
- `missing_source_value`;
- `source_missing_code`;
- `unmapped_source_code`.

Unknown or unsupported codes never become zero or a convenient documented category.

This distinction is part of the measurement semantics, not an estimator-side cleanup choice.

## Comparability and timing

The product carries explicit temporal semantics and comparability status from the variable definition.

Examples:

- electricity access can have a standard semantic definition while still requiring release-specific validation before L4 research authority;
- wealth quintile is survey-relative and should not be interpreted as an absolute wealth scale across surveys;
- detailed drinking-water categories may be country-specific and are therefore preserved without over-harmonization.

## Contract and provenance

The materializer:

- consumes a content-hashed HR Silver `DatasetRef`;
- verifies the exact HR Parquet content hash before derivation;
- versions the output using the registry hash;
- writes a durable `surveys.dhs.hr_household_measurements` product;
- emits `MeasurementContract` objects for each registered measurement;
- persists the versioned registry and its provenance;
- records QA and `RunManifest` lineage.

The measurement contract contains no treatment/outcome/covariate vocabulary.

## What this enables

The DHS scientific frontier has moved one step downstream.

A future experiment no longer has to begin by asking what `HV206`, `HV270`, or `HV201` mean at all. It can consume a documented empirical measurement and then make a separate scientific choice about whether and how that measurement enters a design.

For example:

```text
dhs.household.electricity_access
        ↓
experiment decides role + timing + sample + estimator
```

not:

```text
HV206
        ↓
implicitly becomes outcome because an old notebook used it that way
```

## What is still missing

This product does not establish:

- which DHS measurement is the primary outcome for FCV research;
- which measurement is a control or moderator;
- household exposure to investment or conflict;
- household → cluster → geography experiment projection;
- displacement-aware treatment linkage;
- survey-weight / PSU / strata estimator choices;
- cross-survey harmonization beyond each definition's declared comparability;
- protected real-source acceptance;
- L4 research validation.

## Technical reference

- [`DHS_INTEGRATED_SUBSTRATE.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/DHS_INTEGRATED_SUBSTRATE.md)
