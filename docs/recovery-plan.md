---
title: Recovery Plan
sidebar_position: 7
description: Historical plan used to reconstruct the FCV archive and transition it back into active empirical research.
---

# Recovery Plan

:::note Historical recovery plan
This document records the strategy used to recover and organize the FCV research archive. Much of the orientation and documentation phase has now been completed. For the live project state, use [Current Research Status](./current-status.md), [Experimental Infrastructure and Validation](./continuation/experimental-infrastructure.md), [Validation Status](./data-products/validation-status.md), and [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md).
:::

The recovery effort began with a practical problem: a large body of 2021–2023 research existed across data products, notebooks, exports, empirical outputs, spatial files, and predecessor project folders, but the relationships among those materials were difficult to inspect quickly.

The objective was to create a **minimal reliable operating layer** around that archive without rewriting or reorganizing the original work prematurely.

The recovery sequence was:

1. map the archive;
2. identify the main data products;
3. document the 2023 empirical workflow;
4. separate current, reusable, legacy, and uncertain material;
5. expose validation requirements;
6. recover treatment, matching, and regression logic;
7. decide what should be reused, rerun, rebuilt, or kept only for history.

That sequence remains useful as provenance, but it is no longer the live research roadmap.

## Recovery principles

Several principles from the recovery phase remain active today.

### Document before rerunning

Before rerunning an old notebook, establish what it reads, what it writes, where it sits in the pipeline, whether it overwrites outputs, and whether its current output already exists.

### Inspect exports before notebooks

HTML and PDF exports remain valuable historical inspection surfaces. They can often answer a question faster and more safely than executing an old notebook.

### Separate generations of work

The archive contains different kinds of material:

| Category | Meaning |
|---|---|
| Main recovered pipeline | The 2023 working structure with the clearest empirical lineage. |
| Reusable product | Processed output that can be inspected and validated independently. |
| Empirical working data | Dataset whose meaning depends on a treatment, timing, sample, or estimator choice. |
| Legacy material | Older work useful for provenance, comparison, or filling a specific gap. |
| Source archive | Raw or semi-raw inputs used for reconstruction or rebuilding. |
| Ignore / accidental | Material that does not belong to the research path. |

### Validate keys before interpreting results

Geography, time, treatment definitions, outcomes, covariates, sample selection, and missingness must be checked before empirical coefficients are treated as evidence.

### Preserve the original archive

The original folder structure should remain intact. Cleaner research software and canonical outputs should be built as derived layers rather than by destructively reorganizing the recovered source archive.

## Recovery phases and current status

| Phase | Original purpose | Current status |
|---|---|---|
| **0 — Freeze and map** | Identify the main pipeline, reusable spatial products, legacy folders, and support material. | **Complete enough for routine use.** The archive map and high-level folder roles are documented. |
| **1 — Build orientation manual** | Create a compact site that lets collaborators understand the archive without opening dozens of notebooks. | **Complete enough for handoff.** The site now has a smaller, current navigation surface plus historical detail. |
| **2 — Dataset validation reports** | Determine which data families are reusable, inspectable, empirical, legacy, or candidates for rebuild. | **Transitioned into the active validation layer.** The human-facing status surface is now [Validation Status](./data-products/validation-status.md), with executable checks moving into the experiment harness. |
| **3 — Recover investment and treatment layer** | Reconstruct World Bank/China project exposure, jobs-related classification, time windows, and files feeding `reg_data/` and matching. | **Substantially recovered, still active.** Source-family treatments and the old area-period logic are documented; jobs-related classification and timing choices remain open scientific decisions. |
| **4 — Decide reuse, rerun, or rebuild** | Make explicit decisions for major data and empirical components. | **Active as experiment-specific decisions.** The project no longer needs one archive-wide decision before any analysis; each candidate experiment can expose what it reuses or rebuilds. |
| **5 — Build renewed research platform** | Create cleaner code, validation, documentation, and reproducible empirical workflows. | **Started.** The documentation site and `fcv-experiment-harness` now form the first renewed operating layer. |

## What the recovery phase established

The recovery work identified two central historical surfaces.

### `2023_Duke`

The main recovered 2023 working pipeline, including:

- standardized geography;
- population;
- violence and conflict data;
- DHS products;
- Afrobarometer products;
- investment/project exposure;
- area-period empirical datasets;
- matching outputs and diagnostics;
- regression prototypes;
- notebook exports and generated documentation.

### `spatial_data`

A reusable project-level spatial product store containing ACLED exposure, OpenStreetMap features, climate and terrain variables, distance measures, GeoJSON files, and map helpers.

Supporting folders such as `Machine Learning and Spatial Analysis`, `Conflict-Service Delivery-Civic Engagement-and-Development in FCV`, `PW_Violence`, `Nigeria`, `sources`, and `mi_meta` remain available as historical or support material, but they are not the default entry point.

## Historical validation priorities

The original recovery plan identified these data families as particularly important to validate:

| Family | Historical location | Why it mattered |
|---|---|---|
| GADM standardized geography | `2023_Duke/01_GADM_standarise/` | Backbone for administrative keys and spatial aggregation. |
| Population products | `2023_Duke/02_population/` | Denominators and controls. |
| Violence / ACLED / UCDP | `2023_Duke/03_violence/` | Main conflict outcome family. |
| DHS | `2023_Duke/04_DHS/` | Large family of geocovariates and survey-linked controls. |
| Afrobarometer | `2023_Duke/06_afrobarometer/` | Political and social outcome family. |
| Empirical `reg_data` | `2023_Duke/08_Empirical Study_ Investment & Violence/data/reg_data/` | Area-period treatment/covariate panels. |
| Matching outputs | `2023_Duke/08_Empirical Study_ Investment & Violence/data/matches/` | Downstream products encoding design choices. |
| Spatial products | `spatial_data/` | Reusable project-level spatial features. |

The current project does **not** assume all of these need to be fully validated before any empirical work can proceed. Instead, validation is attached to the experiment being attempted.

## Investment and treatment recovery

The original key bottleneck was understanding how development-finance projects became empirical treatments.

The recovery questions included:

1. Which World Bank and Chinese development-finance sources were used?
2. How were project locations geocoded and assigned to administrative areas?
3. How were area-period exposure variables produced?
4. How were time windows defined?
5. Which files fed `reg_data/` and matching outputs?
6. How did source-family treatments relate to jobs-related project classification?

That work has now advanced enough to support an explicit experiment layer. The recovered source-family treatments include broad pooled, World Bank-only, and China-only exposure; jobs-related treatments still depend on the [Project Classification Protocol](./continuation/annotation-project-classification-protocol.md).

The active empirical memo now treats these as **candidate experiment definitions**, rather than assuming that one recovered treatment/matching path is canonical.

## Matching and regression in historical context

The recovery plan originally kept matching and regression downstream because they encode many upstream choices. That principle remains correct.

Recovered matching outputs depend on:

- treatment construction;
- unit of observation;
- geography;
- time windows;
- covariates;
- outcome availability;
- sample support;
- project-source coverage.

However, matching is no longer treated as the research design itself. The active framework allows multiple estimator families after a candidate experiment passes appropriate measurement and validity gates.

See [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md).

## What superseded the old immediate actions

Several instructions in the original plan have now been completed or replaced:

| Original action | Current state |
|---|---|
| Finish the first manual version | Completed enough for active onboarding; navigation has since been pruned and reframed. |
| Add a validation-status page | Completed; it is now an empirical-readiness gateboard. |
| Create validation scripts | Started in the separate experiment harness rather than embedded in the documentation site. |
| Recover treatment definitions | Source-family logic substantially recovered; jobs-related classification remains active work. |
| Choose one validated path | Now expressed as a real-data experiment run through explicit gates before coefficient interpretation. |

The next research work should therefore not restart these tasks from zero.

## Stop conditions that still matter

The following recovery-era constraints remain useful scientific safeguards.

Do not interpret empirical coefficients until the relevant treatment, outcome, timing, sample, and uncertainty structure are explicit.

Do not treat legacy folders as current pipeline material unless they answer a specific unresolved question.

Do not reorganize or overwrite the original archive merely to make the renewed pipeline cleaner.

Do not treat successful software execution as evidence that a substantive empirical design is valid.

## Recovery milestones

### First milestone — archive becomes navigable

This milestone is complete enough for routine use:

- the main archive is mapped;
- core manual pages exist;
- major dataset families are inventoried;
- notebooks and exports have a reading path;
- historical and active work can be distinguished.

### Second milestone — archive becomes a research foundation

This milestone is now partially achieved and continues through the active empirical work:

- the treatment and empirical pipeline have been substantially reconstructed;
- the project has an explicit experiment-specification layer;
- validation criteria are documented;
- an executable experiment harness exists;
- real-data runs can now determine which candidate designs are actually feasible.

## Bottom line

The recovery phase succeeded in converting a difficult historical archive into a usable research memory system. Its main contribution is no longer a list of tasks to complete; it is the **documented foundation** on which current FCV empirical work can proceed.

For live work, start with:

- [Current Research Status](./current-status.md)
- [Experimental Infrastructure and Validation](./continuation/experimental-infrastructure.md)
- [Validation Status](./data-products/validation-status.md)
- [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md)

Use this page when you need the historical logic of how the archive was recovered, what the original bottlenecks were, and why the present research infrastructure is organized the way it is.
