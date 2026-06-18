---
title: Experimental Design and Regression Pipeline
sidebar_position: 2
description: This memo consolidates the empirical design behind the investment-project analysis. 
date: "2026-06-18"
---


# Module A — Experimental Design and Regression Pipeline


## 1. Purpose of this memo

This memo consolidates the empirical design behind the investment-project analysis. Its goal is not to report final results. Its goal is to define, in operational and scientific terms, the experiment that the recovered notebooks were attempting to implement.

The memo answers:

> What is the empirical experiment we are trying to run, what data objects does it require, and what decisions remain before it can be treated as a stable analysis pipeline?

A separate memo should define the project annotation and classification protocol. That second memo should own the rules for labeling projects as jobs-related, direct-jobs, indirect-jobs, non-jobs, macro-policy, locally implemented, and so on. This memo assumes those labels are inputs to the empirical pipeline.

The key boundary is:

```text
Annotation protocol
    project_id -> project-level labels

Experimental pipeline
    project-level labels + geolocations + time windows -> area-period treatments -> matched samples -> regressions
```

---

## 2. Research question

The broad research question is:

> Do African administrative areas exposed to development investment projects — especially employment-relevant or jobs-related projects — experience different post-treatment trajectories in violence, political legitimacy, civic engagement, service delivery, or related outcomes than comparable areas without such investments or with non-jobs-related investments?

The design is motivated by a causal question, but the current recovered pipeline should be described as a **matching-based empirical comparison** rather than as a finalized causal design. The causal interpretation depends on treatment definition, project geolocation quality, covariate balance, outcome coverage, and assumptions about unobserved confounding.

The core empirical idea is:

1. Identify development investment projects funded by World Bank and/or Chinese development finance sources.
2. Classify those projects into treatment-relevant categories, especially jobs-related versus non-jobs-related projects.
3. Assign project exposure to administrative areas and time windows.
4. Construct comparable treated and control area-period units using matching.
5. Compare post-treatment outcomes across matched samples.
6. Evaluate robustness across source families, treatment definitions, administrative levels, time windows, outcome families, and regression specifications.

---

## 3. Unit hierarchy

The analysis uses several nested units. Confusion between these units was one of the main causes of difficulty in the original workflow.

| Layer | Unit | Main role |
|---|---|---|
| Raw project | Project | Source metadata: title, objective, sector, amount, dates, country, funding source. |
| Project-location | Project × geocoded location | Spatial exposure source; one project can have many locations. |
| Administrative area | GADM L1 / L2 / L3 area | Geographic unit for exposure assignment, covariates, and outcomes. |
| Area-period | GID × time window | Main analysis panel unit. |
| Matched pair | Treated area-period + pure control area-period | Basic matched comparison output. |
| Matched trio | Jobs-related area-period + other-investment area-period + pure control area-period | More complex multi-arm comparison output. |

The annotation protocol should label projects at the **project level**. The empirical pipeline should convert project-level labels into **area-period treatment variables** through geocoded project locations, spatial joins to GADM units, and time-window rules.

---

## 4. Empirical estimand and interpretation

The desired empirical quantity is the difference in post-treatment outcomes between exposed and comparable unexposed administrative areas.

A generic matched-pair estimand is:

```text
E[Y_post | treated, matched] - E[Y_post | control, matched]
```

A regression representation is:

```text
Y_{g,t+k} = alpha + beta * Treatment_{g,t} + gamma * X_{g,t-1} + delta_t + epsilon_{g,t}
```

where:

- `g` is a geographic area, such as a GADM L2 or L3 unit;
- `t` is the treatment time window;
- `k` indexes the post-treatment outcome lag or outcome period;
- `Treatment_{g,t}` is exposure to a project category during the treatment window;
- `X_{g,t-1}` are pre-treatment covariates;
- `delta_t` are time-window controls or fixed effects;
- `beta` is the main coefficient of interest.

The interpretation should remain conservative unless the final design resolves the main identification issues. Recommended wording:

> The design estimates matched differences in subsequent outcomes between exposed and comparable unexposed administrative areas. A causal interpretation requires assuming that, conditional on observed covariates, matched control areas approximate the counterfactual trajectory of treated areas.

---

## 5. Data lineage

The recovered notebook chain implies the following pipeline:

```text
Raw project sources
    -> standardized project/location CSV and GeoJSON files
    -> project-location to administrative-area assignment
    -> area x time-period investment exposure panel
    -> merged covariates and outcomes
    -> matched samples
    -> diagnostics and regressions
```

### 5.1 Notebook-stage map

| Stage | Existing notebooks / files | Current interpretation |
|---|---|---|
| Raw source ingestion | `50 - Raw data to GDF`, `501`, `502`, `503`, `54` | Ingests World Bank public/project data, AidData World Bank geocoded data, and AidData China/TUFF-style development finance data. |
| Spatial intersection | `51 - Spatial Intersection` | Assigns project locations to GADM administrative areas. |
| Investment by admin area | `52 - Investment by admin area (GID)`, `55 - Exploration Geography` | Aggregates project exposure by administrative area and time. |
| WB/China coexistence diagnostics | `53 - Chinese and WB coexisting locations` | Explores spatial overlap or proximity between Chinese and World Bank projects. |
| Project classification support | `56 - Exploration Sectors`, `57 - Explore for Job-Related Investments`, `58 - WB Projects info to Doc` | Supports manual and rule-based project classification; does not itself finalize labels. |
| Panel construction | `80 - Preprocess Data` | Builds area-period panels combining investments, violence, population, and DHS geocovariates. |
| Outcome variables | `81 - Outcome Variables` | Conceptual or partial outcome layer; needs consolidation. |
| Sample and covariate checks | `82 - Sample Selection Checks`, `83 - Covariate Checks` | Checks treatment imbalance and covariate availability. |
| Matching | `84 - KNN Matching`, older `98 - knn Matching` | Implements matched treated/control samples, mainly one-to-one matching. |
| Matching diagnosis | `85 - KNN Matching Diagnosis` | Evaluates sample sizes, balance, and matched-pair quality. |
| Regression prototypes | `85 - Regression Analysis`, `85 - Regression Analysis 2`, `99 - OLS regressions` | Prototype regression and estimator-debugging notebooks; not yet a final canonical regression module. |

---

## 6. Source families

The core investment source families are:

| Source family | Approximate role | Notes |
|---|---|---|
| World Bank public / project data | Project metadata and text fields for classification | Useful for titles, objectives, sectors, themes, lending instruments, project pages, and approval dates. |
| AidData World Bank geocoded release | Project-location exposure layer | Important for geocoded locations; may have older time coverage than newer World Bank public project data. |
| AidData China / TUFF / Global Chinese Development Finance | Chinese development finance project exposure | Important comparator or treatment family; geolocation and source-version issues require validation. |
| GADM administrative boundaries | Spatial unit backbone | Used to assign project locations and outcomes to L1/L2/L3 administrative areas. |
| ACLED / UCDP | Violence outcomes | Used for conflict, deaths, fatalities, violence against civilians, and related violence categories. |
| DHS geocovariates | Pre-treatment covariates and possibly outcomes | Used for baseline socioeconomic and household/environmental controls. |
| Afrobarometer | Political legitimacy, participation, civic engagement, service delivery | Required for the non-violence outcome side of the project; coverage and merging need validation. |
| Population / GHSL or related population data | Denominators and controls | Used to scale investment exposure and construct per-capita measures. |

---

## 7. Treatment definitions

The recovered notebooks use basic source-family treatments. The full research design requires additional treatments derived from the annotation protocol.

### 7.1 Existing source-family treatments

| Treatment | Area-period definition |
|---|---|
| `cnwb_pooled` | Area-period exposed to either World Bank or Chinese project finance. |
| `wb_only` | Area-period exposed to World Bank project finance and not Chinese project finance. |
| `cn_only` | Area-period exposed to Chinese project finance and not World Bank project finance. |
| `any_investment` | Area-period exposed to any relevant investment source. |
| `pure_control` | Area-period with no relevant investment exposure. |

### 7.2 Treatments requiring annotation

| Treatment | Area-period definition |
|---|---|
| `jobs_any` | Exposure to at least one project labeled `jobs_direct` or `jobs_indirect`. |
| `jobs_direct` | Exposure to a project explicitly targeting jobs, employment, public works, skills, vocational training, labor-market insertion, or similar direct employment mechanisms. |
| `jobs_indirect` | Exposure to a project plausibly generating employment indirectly through infrastructure, agriculture, private-sector development, education, market access, or productive capacity. |
| `non_jobs_investment` | Exposure to an investment project not classified as jobs-related. |
| `macro_policy_only` | Exposure to or identification of projects that are mainly macro, policy, institutional, budget-support, or technical-assistance interventions without clear local implementation. |
| `locally_implemented` | Project has identifiable local or physical implementation activities, not merely national-level policy support. |

The annotation memo should define these project-level labels. This memo defines only how those labels enter the empirical design.

---

## 8. Comparison designs

Eric's email guidance implies several nested comparison designs. These should be treated as separate empirical designs, not as interchangeable variants.

| Design | Comparison | Output type | Status |
|---|---|---|---|
| Pair A | Any investment vs pure control | Matched pairs | Basic version exists for source-family treatments. |
| Pair B | World Bank investment vs pure control | Matched pairs | Basic version exists. |
| Pair C | Chinese investment vs pure control | Matched pairs | Basic version exists, but sparse coverage is a concern. |
| Pair D | Jobs-related investment vs pure control | Matched pairs | Requires stable annotation labels. |
| Pair E | Direct-jobs project exposure vs pure control | Matched pairs | Requires refined labels. |
| Pair F | Indirect-jobs project exposure vs pure control | Matched pairs | Requires refined labels. |
| Trio A | Jobs-related investment vs non-jobs investment vs pure control | Matched trios | Conceptually requested; not yet confirmed as canonical implementation. |
| Trio B | Direct jobs vs indirect jobs vs pure control | Matched trios or multi-arm design | Requires refined annotation and sufficient sample size. |
| WB/CN contrast | World Bank vs Chinese projects vs pure control | Matched trios or separate matched analyses | Needs careful source comparability and sample-size review. |

The jobs-related versus non-jobs-related comparison is central because it is the comparison most closely tied to the substantive theory that employment-relevant development projects may affect violence, legitimacy, participation, or service delivery differently than other investments.

---

## 9. Time structure

The recovered pipeline uses time-windowed panels rather than a single static cross-section.

Core time descriptors:

| Descriptor | Meaning |
|---|---|
| `T` | Length of time window, usually 2, 3, or 4 years in the recovered notebooks; 1-year windows were discussed as a possible extension. |
| `y0` | Starting-year convention, commonly `2000` or `2001` in recovered matching outputs. |
| Treatment window | Period in which investment exposure is measured. |
| Outcome window | Post-treatment period in which violence, survey, or service outcomes are measured. |
| Pre-treatment covariates | Covariates measured before treatment exposure or at baseline. |
| Lag rule | Rule ensuring outcome information is not contemporaneous with or prior to the treatment definition. |
| Cross-sectional fallback | A possible simplified design if panel windows become too sparse. |

Eric explicitly emphasized the need to compare different time-period cutoffs because sample size and outcome coverage may change substantially across window definitions. The final pipeline should therefore treat time-window length as a design parameter, not as a hardcoded choice.

---

## 10. Geography

The geographic unit is a GADM administrative area, usually within Africa.

| Geography | Role | Current assessment |
|---|---|---|
| GADM L1 | Large administrative regions | Useful for diagnostics, but likely too coarse for credible matching. |
| GADM L2 | Intermediate administrative regions | Likely a plausible main specification. |
| GADM L3 | Finer local administrative regions | Potentially more spatially precise, but may increase sparsity and missing data. |
| Africa subset | Main continent-scale analysis universe | Needs clear country inclusion and source coverage validation. |
| Country-level restrictions | Possible robustness or source-coverage filters | To be defined after source-version validation. |

A practical rule for the next phase:

> Treat ADM1 as diagnostic; prioritize ADM2 and ADM3 for substantive matched comparisons, subject to sample-size and outcome-coverage checks.

---

## 11. Outcomes

The empirical design has several outcome families. Not all are equally ready in the recovered pipeline.

| Outcome family | Examples | Current status |
|---|---|---|
| ACLED / UCDP violence | Events, deaths, fatalities, violence against civilians, battles, conflict categories | Most clearly integrated in recovered regression/matching prototypes. |
| Afrobarometer | State legitimacy, political participation, social participation, civic engagement, service delivery | Explicitly requested; needs source and merge validation. |
| DHS | Household or local socioeconomic proxies; also covariates | DHS geocovariates appear in panel construction; outcome role needs clarification. |
| Population / GHSL | Population denominators and scaling | Used for exposure denominators and controls, not main outcomes. |
| Pre-treatment covariates | Nightlights, infrastructure, DHS geocovariates, pre-treatment violence, terrain/forest/roughness where available | Needed for matching and regression adjustment. |

A key unresolved task is to classify each variable as one of:

```text
main outcome
pre-treatment covariate
denominator / scaling variable
diagnostic variable
excluded / not used
```

---

## 12. Matching design

The later matching notebook implements a one-to-one treated/control matching procedure. The logic is:

1. Load area-period panel data.
2. Define a binary treatment variable.
3. Separate covariates from treatment and outcomes.
4. Group data by time period.
5. Drop units with missing covariate information.
6. Compute distances between treated and candidate control units using observed covariates.
7. Use linear assignment / Hungarian matching to minimize total covariate distance.
8. Save matched treated-control pairs.
9. Diagnose balance and sample size.

The matching grid includes:

```text
region: africa
admin level: l1, l2, l3
T: 2, 3, 4 years
y0: 2000, 2001
treatment: cnwb_pooled, wb_only, cn_only
```

The recovered pair outputs follow a pattern similar to:

```text
./data/matches/matches11_{treat_type}_{region}{level}T{T}{y0}.csv
```

Matched trios were requested conceptually, but the recovered implementation should be treated as unconfirmed until the actual trio output files are found and validated.

---

## 13. Matching diagnostics

A matched sample should be considered usable only if it passes a minimum diagnostic checklist.

### 13.1 Minimum diagnostic checklist

| Diagnostic | Question |
|---|---|
| Treated N | How many treated area-periods exist for this design? |
| Control N | How many candidate pure-control area-periods exist? |
| Matched N | How many treated units were successfully matched? |
| Outcome coverage | How many matched units have valid post-treatment outcome data? |
| Covariate completeness | How many units are dropped because of missing covariates? |
| Balance improvement | Do treated/control covariate differences shrink after matching? |
| Common support | Are treated units comparable to available controls? |
| Source sparsity | Does one source family, especially China, sharply limit sample size? |
| Geographic plausibility | Are matched units plausible comparisons within the same broad geography and time period? |
| Sensitivity | Do results change across ADM level, time window, and treatment definition? |

### 13.2 Known matching risks

- ADM1 areas may be too large and heterogeneous for credible matching.
- Chinese project exposure appears sparser than World Bank exposure, especially after intersecting with outcome data.
- Multi-location projects may dominate exposure counts if project-location weighting is not handled carefully.
- Project classification uncertainty propagates directly into treatment uncertainty.
- Missing covariates may restrict the sample in non-random ways.
- Outcome coverage, especially for survey outcomes, may be much thinner than exposure coverage.

---

## 14. Regression layer

Regression notebooks exist, but they should be treated as prototypes until a canonical specification is agreed.

### 14.1 Candidate regression families

| Family | Description | Status |
|---|---|---|
| Matched-pair difference | Compare post-treatment outcomes between treated and matched control units. | Conceptually simple; should be baseline. |
| OLS on matched sample | Regress post-treatment outcome on treatment and covariates within matched sample. | Needs canonical specification. |
| Fixed-effect OLS | Area and/or time fixed effects with lagged covariates/outcomes. | Exists as prototype; needs cleanup. |
| Count model | Poisson or negative-binomial style models for violence counts. | Possible, especially for ACLED/UCDP outcomes; not yet canonical. |
| Multi-arm comparison | Jobs vs non-jobs vs pure control or WB vs China vs pure control. | Requires confirmed trio or multi-arm design. |

### 14.2 Regression descriptors to freeze

Before reporting results, the team should freeze these descriptors:

| Descriptor | Needed decision |
|---|---|
| Outcome transformation | Raw count, binary indicator, log transform, per-capita rate, or category-specific outcome. |
| Treatment timing | Treatment window and post-treatment outcome window. |
| Covariate timing | Which covariates are pre-treatment and how they are lagged. |
| Fixed effects | None, time, country, area, matched-pair, or combinations. |
| Clustering / uncertainty | Area, country, pair, bootstrap, or robust errors. |
| Sample | All area-periods, matched pairs only, matched trios, or source-specific subsets. |
| Treatment definition | Any investment, WB-only, CN-only, jobs-any, direct jobs, indirect jobs, non-jobs. |
| Interpretation | Descriptive association, matched comparison, or causal estimate under assumptions. |
| Robustness grid | Admin level, time window, y0, source family, outcome family, and classification rule. |

---

## 15. Decision table for current designs

This table should guide the next discussion with Eric and Charlotte.

| Design | Data exists? | Labels needed? | Outcome coverage | Sample-size risk | Ready for regression? | Recommended next action |
|---|---|---|---|---|---|---|
| WB any investment vs pure control | Yes-ish | No | ACLED likely strongest | Medium | Maybe, after validation | Validate panel, matched pairs, and outcome coverage. |
| CN any investment vs pure control | Yes-ish | No | ACLED likely but sparse | High | Not yet | Quantify treated N and outcome coverage by ADM/T/y0. |
| WB+CN pooled vs pure control | Yes-ish | No | ACLED likely | Medium | Maybe, after validation | Use as broad diagnostic, not final theory test. |
| WB jobs-any vs pure control | Partial | Yes | ACLED/Afrobarometer TBD | High | No | Complete annotation protocol and labels. |
| CN jobs-any vs pure control | Partial | Yes | Sparse / TBD | Very high | No | Check updated China/AidData source and sample viability. |
| Jobs-any vs non-jobs vs pure control | Conceptual / partial | Yes | Likely sparse | Very high | No | Locate or rebuild trio/multi-arm design after labels. |
| Direct jobs vs indirect jobs vs pure control | Not ready | Yes | TBD | High | No | Use only after broad jobs-any labels are stable. |
| Afrobarometer outcomes | Data work likely partial | Maybe | TBD | High | No | Produce coverage table by country, GID, time, and treatment. |
| DHS outcomes | Unclear | Maybe | TBD | Medium/high | No | Decide whether DHS is an outcome source or covariate source. |

---

## 16. Open decisions

The following decisions should be made before the pipeline is presented as final.

### 16.1 Source and version decisions

1. Which World Bank public project dataset is canonical?
2. Which AidData World Bank geocoded release is canonical?
3. Which Chinese development finance dataset is canonical?
4. Is there a newer source that supersedes the 2023-era AidData/TUFF files?
5. Should old analysis be replicated first, or rebuilt directly on updated data?

### 16.2 Annotation decisions

1. What is the first-stage label: `jobs_any` vs `non_jobs`, or direct/indirect from the start?
2. How should mixed projects be classified?
3. How should macro-policy-only projects be excluded or flagged?
4. What confidence threshold is required before labels enter regression?
5. Should labels be human-coded, rule-based, ML-assisted, or a hybrid?

### 16.3 Treatment construction decisions

1. Should exposure be binary or intensity-based?
2. If intensity-based, how should multi-location project amounts be split?
3. Should treatment be based on approval date, commitment date, start date, implementation period, or disbursement timing?
4. How should overlapping WB and China projects be treated?
5. How should repeated exposure across time windows be handled?

### 16.4 Matching and regression decisions

1. What is the main administrative level: ADM2 or ADM3?
2. What is the main time window: 2, 3, or 4 years?
3. Are matched trios necessary for the first analysis, or should pairs come first?
4. What is the minimum acceptable treated N and outcome N?
5. What regression specification is the first canonical model?

---

## 17. Proposed next implementation architecture

The recovered notebooks should not be discarded. They should be converted into a modular pipeline in small steps.

### 17.1 Proposed modules

```text
fcv_investments/
  config/
    sources.yaml
    geography.yaml
    time_windows.yaml
    treatment_definitions.yaml
    outcomes.yaml

  data_registry/
    raw_sources_manifest.csv
    derived_outputs_manifest.csv
    validation_report.md

  src/
    ingest/
      wb_public.py
      wb_aiddata.py
      china_aiddata.py

    spatial/
      point_to_gid.py
      aggregate_area_time.py
      exposure_intensity.py

    classify/
      label_schema.py
      apply_project_labels.py
      build_annotation_table.py

    panels/
      build_area_period_panel.py
      merge_covariates.py
      merge_outcomes.py

    matching/
      build_pairs.py
      build_trios.py
      diagnose_balance.py
      sample_coverage.py

    regressions/
      run_baseline.py
      run_robustness_grid.py
      summarize_results.py
```

### 17.2 Proposed notebooks after migration

```text
notebooks/
  01_source_inventory.ipynb
  02_treatment_construction_validation.ipynb
  03_annotation_review.ipynb
  04_sample_viability_tables.ipynb
  05_matching_diagnostics.ipynb
  06_regression_results.ipynb
```

The notebooks should become review surfaces. Production logic should move into reusable functions.

---

## 18. Immediate next artifacts

To make this project usable for Charlotte and reviewable by Eric, the next deliverables should be:

1. **Annotation Protocol Memo**  
   Defines project-level labels and coding rules.

2. **Experiment Manifest Table**  
   Maps each notebook to stage, inputs, outputs, unit of observation, status, and known risks.

3. **Source-Version Crosswalk**  
   Compares WB public data, AidData WB geocoded data, and China/AidData data by unit, ID, year coverage, location coverage, and use.

4. **Sample-Viability Table**  
   Reports treated N, control N, matched N, outcome coverage, admin level, time window, y0, treatment definition, and readiness status.

5. **Minimal Canonical Regression Spec**  
   One baseline design only, probably WB any-investment or WB jobs-any after labels are validated.

---

## 19. Recommended review question for Eric and Charlotte

The next meeting should not try to review every notebook. It should answer this question:

> Which empirical design should be treated as the first canonical analysis path, given the available source versions, labels, matched sample sizes, and outcome coverage?

A good meeting outcome would be one of:

- Choose WB-only before CN because sample coverage is stronger.
- Choose `jobs_any` first, postponing direct/indirect distinctions.
- Use ACLED first, postponing Afrobarometer until coverage is documented.
- Treat ADM2 as the main unit and ADM3 as robustness.
- Rebuild source data using updated AidData before producing final labels.
- Produce Eric's requested sample-viability table before any regression reruns.

---

## 20. Bottom line

The recovered notebooks show that the empirical pipeline was substantially implemented, but not consolidated into a stable research software architecture or decision-ready documentation.

The scientific design is coherent:

```text
project finance -> geocoded exposure -> area-period treatment -> matched comparisons -> post-treatment outcomes
```

The unresolved bottlenecks are:

1. source-version validation;
2. project annotation and treatment definition;
3. sample-size and outcome-coverage decision tables;
4. confirmation of matched-pair and matched-trio outputs;
5. consolidation of one canonical regression specification.

The safest next step is not to rerun everything. The safest next step is to freeze a first canonical design and build the two control surfaces that Eric originally needed: an annotation protocol and a sample-viability table.

---

## Related pages

- [Empirical Study](../main-pipeline/empirical-study.md)
- [Matching Vertical](../main-pipeline/matching-vertical.md)
- [Validation Status](../data-products/validation-status.md)
- [Notebook Guide](../notebooks/notebook-guide.md)
- [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md)
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md)
