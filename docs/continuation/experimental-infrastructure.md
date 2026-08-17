---
title: Experimental Infrastructure and Validation
sidebar_position: 1
description: Operating model for separating empirical infrastructure, experiment specifications, and validation gates in the active FCV research phase.
date: "2026-08-17"
---

# Experimental Infrastructure and Validation

The active FCV work is organized around a simple separation between **data infrastructure**, **experiment specifications**, and **validation gates**.

This separation is intended to make weak-signal empirical work easier to inspect and harder to over-interpret. The research question may be difficult; the data and experiment machinery should therefore make uncertainty visible rather than hiding it inside a long notebook or a single regression specification.

The working implementation lives in the [FCV Experiment Harness](https://github.com/matuteiglesias/fcv-experiment-harness).

## A — Empirical infrastructure

Layer A describes the empirical objects available to research. It should remain useful even when the preferred experiment changes.

Examples include:

- projects and project identifiers;
- source family and financial amounts;
- project metadata and project-level classifications;
- geocoded project locations and their precision/provenance;
- administrative geography and `GID` identifiers;
- area-period investment panels;
- ACLED/UCDP outcome surfaces;
- Afrobarometer observations and geographic mappings;
- DHS and population covariates;
- explicit observation dates and project timing fields.

A record in this layer should describe the underlying data rather than silently decide that an observation is "treated" for every possible analysis.

The recovered archive already contains much of this infrastructure. The [Dataset Inventory](../data-products/dataset-inventory.md) and [2023 Duke Overview](../main-pipeline/duke-overview.md) document the main historical surfaces.

## B — Experiment specification

Layer B defines a particular empirical question using the infrastructure in Layer A.

An experiment may specify:

```text
treatment definition
project timing rule
geographic unit or exposure rule
pre-treatment window
post-treatment window
counterfactual
outcome definition
sample restrictions
covariates
estimator family
```

Examples of candidate FCV experiments include:

- pooled World Bank/China investment versus unexposed controls;
- World Bank-only investment versus controls;
- China-only investment versus controls;
- jobs-related investment versus non-jobs investment or pure controls;
- completed/implemented projects versus future/planned project locations;
- area-period longitudinal designs around project implementation timing;
- respondent-level or local-radius Afrobarometer exposure designs.

These are not interchangeable robustness checks. They correspond to different counterfactuals and sometimes different estimands.

The purpose of an experiment specification is to make those choices explicit enough that changing one assumption does not require silently rebuilding the underlying data.

## C — Validation and calibration gates

Layer C asks whether a candidate experiment is sufficiently measurable and interpretable to justify further analysis.

A gate can pass, warn, or fail without implying that the underlying research hypothesis is true or false.

Current harness checks include variants of the following.

### Data and merge integrity

- required columns and keys exist;
- observation or `GID × TimePeriod` keys are unique where expected;
- treatment/covariate and outcome surfaces merge at the expected rate;
- missing outcome records are distinguished from missing outcome values.

### Treatment timing and spatial precision

- project state can be resolved at the observation date;
- ambiguous timing is visible rather than guessed;
- exposure radius is compatible with source geolocation precision;
- multiple or conflicting nearby project states are reported.

### Identifying support

- sufficient treated and comparison observations exist;
- support exists within relevant periods or fixed-effect strata rather than only in pooled row counts;
- treatment families that become too sparse are flagged before estimation.

### Selection and pretreatment diagnostics

- treated and comparison observations are compared on pre-treatment outcomes and covariates;
- future/planned project locations can be compared with never-treated locations as a direct selection diagnostic;
- project composition can be compared between planned and completed groups when relevant.

### Falsification

- a candidate treatment should not generate a large apparent effect on an outcome measured before treatment;
- future implementations can add fake dates, spatial displacement, negative-control outcomes, or randomized treatment labels where appropriate.

### Bandwidth and exposure sensitivity

- results can be inspected across plausible spatial definitions;
- changing a radius is treated as changing the experiment and often the identifying sample, not automatically as a clean physical dose-response curve.

### Synthetic signal recovery

The harness can inject an effect of known size into a synthetic or resampled outcome and ask whether the proposed experiment has a reasonable probability of detecting it.

This answers a calibration question:

> If a substantively plausible signal existed in data with this structure, would the current experiment have a reasonable chance of recovering it?

It does **not** provide evidence that the real treatment effect has that value.

## Why this matters for FCV

The substantive outcomes are noisy and heterogeneous. Violence can be sparse and clustered. Survey outcomes come from comparatively small samples. Development-project placement is non-random. Treatment dates and geographic precision vary across sources.

Under those conditions, a null coefficient can mean several different things:

- no meaningful effect exists;
- the outcome is too noisy;
- the experiment is underpowered;
- treatment is measured too coarsely;
- project timing is poorly resolved;
- treated and comparison groups lack overlap;
- the chosen counterfactual is inappropriate.

Likewise, a statistically large coefficient can arise from selection, spatial contamination, timing mistakes, or unstable support.

The gates are therefore intended to locate the failure mode before a regression table is treated as a substantive result.

## Current implementation surfaces

The v0 harness contains two deliberately small experimental lanes.

### Project-location / spatial lane

This lane represents project state at an observation date as:

```text
planned
active
completed
ambiguous
never nearby
```

It supports a Blair/Briggs-inspired completed-versus-planned baseline comparison, while retaining counts of multiple nearby project states and testing timing, precision, support, selection, placebo behavior, bandwidth sensitivity, and synthetic signal recovery.

This is a methodological reference implementation, not yet the canonical FCV treatment design.

### Recovered area-period panel lane

This lane consumes the historical FCV `GID × TimePeriod` datasets directly.

It reconstructs the source-family treatments visible in the old matching code:

```text
cnwb_pooled
wb_only
cn_only
```

and makes the initial temporal contract explicit:

```text
treatment in period t
        ↓
outcome in period t+1
```

with the prior outcome retained for balance and placebo diagnostics.

The recovered empirical architecture keeps treatment/covariate panels and outcome surfaces as separate tables, joined explicitly on `GID × TimePeriod` with merge coverage audited before estimation.

## Initial ACLED calibration

The first real-data lane is expected to use one clearly defined ACLED violence outcome together with the recovered area-period panels.

A legacy regression prototype used:

```text
acled_deaths_violence_against_civilians
```

This variable is useful as a first calibration target because it gives the infrastructure a concrete recovered outcome to test. It should not be interpreted as the final preferred violence measure merely because it existed in the earlier code.

The first real-data objective is therefore not "obtain a significant violence coefficient." It is:

1. determine which administrative-level/time-window configurations contain usable treated/control support;
2. verify outcome merge and temporal coverage;
3. quantify sparsity and pre-treatment imbalance;
4. run a basic prior-outcome placebo;
5. test whether a plausible synthetic signal can be recovered;
6. use those diagnostics to decide which experiment deserves a more mature estimator.

## Project classification and future treatments

The [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md) remains upstream of jobs-related experiments.

The experimental infrastructure does not require those labels to be finalized before testing the existing source-family data. Conversely, annotation should not expand indefinitely without a clear downstream experiment that benefits from the additional classification detail.

This keeps project classification and empirical design connected without making either one block all progress on the other.

## Counterfactuals under investigation

The recovered FCV design emphasizes matched treated/control administrative areas. That remains an important candidate design.

The aid-location literature also motivates comparing implemented projects with locations selected for projects that had not yet been implemented at the observation date. This can help address the fact that development projects are not placed randomly.

Candidate counterfactual families now include:

- pure or never-treated controls;
- covariate-matched controls;
- future/planned project locations;
- within-area longitudinal comparisons around treatment timing;
- combinations of these designs used for triangulation rather than as interchangeable estimates.

No single counterfactual has yet been declared canonical for the renewed FCV analysis.

## Interpretation rule

The traffic-light framing is operational, not evidentiary:

- **green**: the diagnostic does not currently block further investigation;
- **yellow**: the experiment has a weakness that should be understood before relying on the estimate;
- **red**: the current experiment should not be interpreted until the failure is repaired or the design is changed.

A collection of green gates is permission to proceed. It is not proof of causal identification.

## Relationship to the existing design memo

The [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md) remains the detailed reconstruction of the empirical design and the treatment/matching ideas recovered from the 2023 work and later guidance.

This page adds a newer operating layer around that reconstruction: experiments should be specified explicitly, passed through measurement and validity checks, and only then handed to an estimator.

A later documentation update may reframe the large design memo around this architecture. This page does not rewrite or supersede its recovered details.

## Immediate next step

Use the harness on the recovered area-period data and record what the real gates say.

The next design decisions should be driven by those diagnostics rather than by adding estimator complexity in advance.
