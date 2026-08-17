---
title: Validation Status
sidebar_position: 3
description: Empirical readiness gateboard for active FCV experiment surfaces and their validation state.
date: "2026-08-17"
---

# Validation Status

This page is the human-facing readiness board for active FCV empirical work.

It does **not** report final research results. It records whether a candidate experiment has enough validated data, timing, support, outcome coverage, falsification behavior, and statistical sensitivity to justify deeper analysis.

For the current operating model, see [Experimental Infrastructure and Validation](../continuation/experimental-infrastructure.md). For the overall project state, see [Current Research Status](../current-status.md).

## What this page tracks

Three things should remain separate:

1. **Available data** — a recovered dataset or data family exists and can be inspected.
2. **Defined experiment** — treatment, timing, geography, outcome, comparison group, and analysis unit are explicit enough to run.
3. **Validated run** — the specific experiment has actually passed or failed empirical gates on the recovered FCV data.

A dataset can exist without supporting a credible experiment. An experiment can be defined without yet having been run. A successful software or synthetic-data test is not evidence that the corresponding real FCV experiment is valid.

## How to interpret statuses

| Status | Meaning |
|---|---|
| **GREEN** | The named gate passed for the specific real-data experiment and current specification. This is permission to investigate further, **not causal validation**. |
| **YELLOW** | The experiment is measurable but the gate reveals a material caveat, weak margin, or unresolved sensitivity that should remain visible. |
| **RED** | The current experiment failed a gate. Repair the data/design or choose another specification before interpreting downstream estimates. |
| **NOT RUN** | The data/design surface exists or is sufficiently defined to test, but the real-data gate sequence has not yet been executed. |
| **BLOCKED** | A required upstream object or scientific definition is not stable enough for a meaningful run. |

> **Green means permission to investigate further, not causal validation.**

The objective of the gate system is not to make every cell green. A red or yellow result can be scientifically useful if it reveals where the measurement apparatus is weak.

## Current experiment surfaces

The statuses below are deliberately conservative. The new experiment harness has passed synthetic and plumbing tests, but those tests validate the **software behavior**, not the recovered FCV data or substantive hypotheses.

| Experiment surface | Data / design state | Current status | Next empirical action |
|---|---|---:|---|
| **Pooled investment → ACLED** | Recovered `GID × TimePeriod` treatment/covariate panels and ACLED outcome surfaces exist; a harness adapter and legacy treatment semantics are available. | **NOT RUN** | Scan the ADM × window grid for support, select one explicit ACLED outcome, merge strictly on `GID × TimePeriod`, and run the gate sequence. |
| **World Bank-only → ACLED** | `wb_only` can be reconstructed from the recovered investment amount columns. Outcome and panel infrastructure are available. | **NOT RUN** | Measure treatment/control support by period before attempting matching or regression interpretation. |
| **China-only → ACLED** | `cn_only` can be reconstructed from the recovered investment amount columns; the recovered documentation already flags China exposure as potentially sparse. | **NOT RUN** | Run support/coverage diagnostics first; do not assume the pooled experiment's feasibility transfers to the China-only lane. |
| **Jobs-related investment → ACLED** | Project-level jobs classification rules are documented, but stable labels have not yet been propagated into a validated area-period treatment surface. | **BLOCKED** | Complete/validate classification coverage, inspect the `jobs_any` distribution, and verify that jobs-related treatment remains substantively discriminating. |
| **Afrobarometer spatial experiment** | Afrobarometer rounds, codebook work, place mappings, and aggregate products were recovered. The active experiment still needs an explicit exposure/timing/counterfactual contract. | **BLOCKED** | Resolve respondent/community exposure architecture, project timing/status, geolocation precision, and outcome definitions before treating the survey lane as runnable. |

These rows are **experiment surfaces**, not claims that the underlying data families are absent when a surface is blocked.

## Core gates

The active harness treats diagnostics as part of experiment construction rather than as appendix checks after a preferred coefficient has been found.

### 1. Data integrity

Ask:

- Are analysis keys unique where they should be unique?
- Do treatment/covariate and outcome tables merge as expected?
- Are required columns present?
- Are project/location identifiers and area-period keys internally consistent?
- Are missing records distinguishable from present-but-missing outcome values?

A failure here is an infrastructure problem. Do not move downstream to interpretation.

### 2. Timing

Ask:

- Is treatment status defined at the actual observation period/date?
- Are agreement, start, implementation, and completion dates distinguishable where needed?
- Can project states be resolved without silently guessing?
- For panel experiments, is the treatment period explicitly separated from the post-treatment outcome period?

Timing choices belong to the experiment definition and should remain visible in run metadata.

### 3. Treatment / control support

Ask:

- How many treated and comparison observations actually carry the identifying contrast?
- Does that support exist within relevant time periods or fixed-effect strata?
- Does a treatment definition collapse to almost universal exposure?
- Are China-only or finer jobs classifications too sparse to estimate meaningfully?
- Are observations exposed to multiple project states or treatment families in ways that defeat a simple binary definition?

Raw dataset row count is not effective identifying sample size.

### 4. Outcome coverage

Ask:

- Is the post-treatment outcome available for the treated and comparison observations that survive the design?
- How much sample is lost after the explicit treatment → outcome lag?
- Is the outcome extremely sparse, zero-inflated, or concentrated in a small number of places or periods?
- Does the selected geography retain enough outcome variation to be useful?

A formally valid merge can still produce an empirically unusable outcome surface.

### 5. Pretreatment balance / selection

Ask:

- Do treated and comparison observations differ substantially in pre-treatment outcomes or covariates?
- For future/planned-project counterfactuals, how different are selected future locations from never-project locations?
- Do stronger geographic restrictions improve comparability at the cost of destroying support?

Selection diagnostics are substantive information about the experiment, not merely a nuisance to hide with more controls.

### 6. Placebo / falsification behavior

Ask whether the measurement system behaves when treatment should **not** have an effect.

Examples include:

- current/future treatment predicting a prior-period outcome;
- fake or shifted treatment timing;
- randomized labels or displaced locations;
- negative-control outcomes;
- alternative pretreatment windows.

A candidate effect that also appears before treatment or under an implausible placebo requires explanation before causal interpretation.

### 7. Synthetic signal recovery

Ask:

> If an effect of a declared plausible magnitude were truly present in this exact sample and dependence structure, how often would the analysis recover it?

The harness can inject a known weak effect and use cluster bootstrap resampling to estimate detection probability.

This is a calibration / sensitivity diagnostic. It is **not** evidence that the real effect has that sign or magnitude.

A low recovery probability means that a null result may be uninformative and that the experiment may need better measurement, a different geography/window, more observations, or a more appropriate outcome definition.

## Additional diagnostics already exposed by the harness

The current implementation also exposes several design-specific checks that can sit underneath the seven headline gates:

- spatial/geocoding precision relative to the requested exposure radius;
- multiple or mixed project exposure near the same observation;
- identifying support inside fixed-effect strata;
- planned-versus-completed project composition;
- bandwidth/radius sensitivity;
- within-period treated/control support for the recovered area-period panels.

These should be promoted to headline gates only if repeated real-data runs show that they are persistent bottlenecks.

## Current validation ledger

No active FCV experiment has yet earned a real-data GREEN/YELLOW/RED gate profile in this manual. That is intentional.

The immediate sequence is:

```text
recovered data
    ↓
explicit experiment contract
    ↓
real-data gate run
    ↓
record GREEN / YELLOW / RED evidence here
    ↓
only then interpret baseline and alternative estimators
```

The first planned calibration surface is the recovered area-period investment/violence lane, using the experiment harness to inspect support and ACLED outcome behavior before treating the old matching or regression outputs as active results.

## Updating this page

For now this page is maintained manually.

When a real-data run is completed:

1. record the exact experiment identifier/specification;
2. record which gates were run;
3. update only statuses supported by that run;
4. link to a reproducible run artifact or repository path where appropriate;
5. keep unresolved caveats visible;
6. never promote a synthetic/demo run to a substantive FCV status.

Do not build an automated dashboard until repeated empirical runs demonstrate that the status vocabulary and gate definitions are stable enough to automate.

## Related pages

- [Current Research Status](../current-status.md)
- [Experimental Infrastructure and Validation](../continuation/experimental-infrastructure.md)
- [Experimental Design and Regression Pipeline](../continuation/experimental-design-regression-pipeline.md)
- [Annotation and Project Classification Protocol](../continuation/annotation-project-classification-protocol.md)
- [Dataset Inventory](./dataset-inventory.md)
- [Source Data Inventory and Update Strategy](../continuation/source-data-inventory-update-strategy.md)
- [FCV Experiment Harness](https://github.com/matuteiglesias/fcv-experiment-harness)
