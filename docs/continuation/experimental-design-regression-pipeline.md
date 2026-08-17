---
title: Experimental Design and Regression Pipeline
sidebar_position: 2
description: This memo consolidates the recovered empirical design and the current experiment-validation architecture for the investment-project analysis.
date: "2026-06-18"
last_updated: "2026-08-17"
---

# Module A — Experimental Design and Regression Pipeline

## 1. Purpose of this memo

This memo consolidates the empirical design behind the investment-project analysis. Its goal is not to report final results. Its goal is to define, in operational and scientific terms, both the experiment that the recovered notebooks were attempting to implement and the stronger experimental framework now used to evaluate candidate designs.

The memo answers:

> What empirical experiments can we credibly run with the recovered data, what data objects and assumptions define each experiment, and what validity checks must pass before an estimate is interpreted?

A separate memo should define the project annotation and classification protocol. That second memo should own the rules for labeling projects as jobs-related, direct-jobs, indirect-jobs, non-jobs, macro-policy, locally implemented, and so on. This memo assumes those labels are inputs to the empirical pipeline.

The key boundary is now:

```text
Annotation protocol
    project_id -> project-level labels

Canonical empirical data
    projects + locations + dates/status + geography + outcomes + covariates

Experiment specification
    treatment + timing + geography + exposure + counterfactual + outcome + sample rules

Analysis sample
    -> validity / measurement gates
    -> estimator family
    -> falsification and sensitivity
    -> research interpretation
```

This is a deliberate change from treating the empirical pipeline as simply:

```text
project labels -> area-period exposure -> matching -> regression
```

The recovered matching workflow remains important, but matching is now treated as **one estimator family inside a larger experimental system**, not as the definition of the research design itself.

---

## Current scientific architecture — 2026 reframe

The active research architecture separates three layers that should not be collapsed.

### A — empirical infrastructure

This layer describes the world and preserves provenance. It should remain stable even if the preferred experiment changes.

Examples include:

- projects and source identifiers;
- project-level classification labels;
- geocoded project locations;
- project timing and status fields;
- GADM administrative units;
- `GID × TimePeriod` panels;
- ACLED/UCDP outcomes;
- Afrobarometer observations and geographic links;
- DHS and population covariates;
- spatial precision and source metadata.

A project should not be intrinsically labeled “treated” in this layer. Treatment is experiment-specific.

### B — experiment specification

An experiment defines the empirical contrast to be studied. At minimum, it should make the following explicit:

```text
treatment definition
project status / treatment timing
geographic unit or exposure radius
counterfactual group
pre-treatment window
post-treatment window
outcome
sample restrictions
estimator family
```

Different experiments may reuse the same canonical data while making different defensible choices.

### C — validity and calibration gates

Before interpreting estimates, each candidate experiment should be checked for:

- data integrity;
- timing resolution;
- treatment/control support;
- geographic and temporal overlap;
- outcome coverage;
- pretreatment balance / selection;
- geolocation precision;
- exposure collisions and multiple projects;
- placebo or falsification behavior;
- bandwidth or spatial sensitivity where relevant;
- synthetic signal recovery / detectable-effect calibration.

The operational interpretation is:

> A green gate means permission to investigate further, not causal validation.

A failed gate should identify *where* the experiment fails — data, measurement, support, sensitivity, identification, or substantive signal — rather than merely produce another coefficient.

### Estimator family

The current architecture allows multiple estimator families:

```text
Estimator family
├── raw / descriptive comparison
├── matching-based comparison
├── completed vs planned spatial comparison
├── longitudinal / staggered-treatment panel design
└── future spatial-spillover-aware designs
```

These should be treated as complementary scientific tools. A favorable coefficient from one specification is not a reason to select that specification after the fact.

### Methodological lessons from the Blair / Briggs design lineage

Recent methodological reconstruction of Blair, Marty & Roessler (2022), Briggs (2019), and closely related geocoded-aid studies adds several concrete requirements to the FCV design space:

1. **Future or planned project locations can be candidate counterfactuals.** They may absorb part of the non-random geography of project placement better than an assumed “never treated” group, but the comparability assumption must be diagnosed rather than assumed.
2. **Project status must be evaluated at the observation date.** Planned, active, completed, and ambiguous states should not be collapsed into a timeless treatment flag.
3. **Spatial bandwidth is a scientific parameter.** Radius sensitivity is useful, but changing a radius also changes the identifying sample; it is not automatically a clean dose-response test.
4. **Effective identifying N matters more than total row count.** Stronger geographic fixed effects or stricter counterfactual definitions can sharply reduce usable support.
5. **Geolocation precision must be preserved.** A short computed distance is not highly informative when the underlying source coordinates are coarse.
6. **Exposure collisions must remain visible.** Locations may be exposed to multiple donors, projects, sectors, or temporal states.
7. **Selection diagnostics are substantive evidence about the design.** Differences between future-project and never-project locations should be reported rather than hidden.
8. **Falsification belongs upstream of interpretation.** Pre-outcome placebos, fake timing, alternate exposure rules, or negative controls help determine whether an apparent signal is trustworthy.
9. **Signal recovery should be calibrated before interpreting a null.** Synthetic or semi-synthetic effect injection can show whether the empirical apparatus is capable of recovering a plausible weak effect under the observed noise and clustering structure.

These lessons expand the recovered design; they do not invalidate the original matching work.

---

## 2. Research question

The broad research question is:

> Do African administrative areas exposed to development investment projects — especially employment-relevant or jobs-related projects — experience different post-treatment trajectories in violence, political legitimacy, civic engagement, service delivery, or related outcomes than comparable areas without such investments or with non-jobs-related investments?

The design is motivated by a causal question. The recovered notebooks most clearly implement a **matching-based empirical comparison**, but the active project should now be described as a **family of candidate experiments** rather than as one finalized matching design. Causal interpretation depends on treatment definition, timing, project geolocation quality, counterfactual construction, overlap, outcome coverage, falsification behavior, and assumptions about unobserved confounding.

The core empirical idea is now:

1. Identify and validate development investment projects funded by World Bank and/or Chinese development finance sources.
2. Classify those projects into treatment-relevant categories, especially jobs-related versus non-jobs-related projects.
3. Preserve project timing, status, geolocation, and provenance in canonical data objects.
4. Define a candidate experiment explicitly: treatment, timing, geography/exposure, counterfactual, outcome, and sample rules.
5. Build the corresponding analysis sample and run validity / measurement gates before estimation.
6. Estimate the contrast using one or more pre-declared estimator families, including matching where appropriate.
7. Apply falsification and sensitivity checks before substantive interpretation.
8. Compare stability across source families, treatment definitions, administrative levels, time windows, outcome families, and estimator families.

---

## 3. Unit hierarchy

The analysis uses several nested units. Confusion between these units was one of the main causes of difficulty in the original workflow.

| Layer | Unit | Main role |
|---|---|---|
| Raw project | Project | Source metadata: title, objective, sector, amount, dates, country, funding source. |
| Project-location | Project × geocoded location | Spatial exposure source; one project can have many locations. |
| Administrative area | GADM L1 / L2 / L3 area | Geographic unit for exposure assignment, covariates, and outcomes. |
| Area-period | GID × time window | Main recovered analysis-panel unit. |
| Experiment specification | Named design object | Defines treatment, timing, geography/exposure, counterfactual, outcome, sample, and estimator family. |
| Analysis sample | Experiment-specific observations | Rows that satisfy the experiment definition and remain after explicit data/support rules. |
| Matched pair | Treated area-period + pure control area-period | Derived object for one matching estimator family. |
| Matched trio | Jobs-related area-period + other-investment area-period + pure control area-period | Derived object for a possible multi-arm matching design. |

The annotation protocol should label projects at the **project level**. The empirical pipeline should convert project-level labels into experiment-specific exposures through geocoded project locations, spatial joins or radius rules, and explicit time rules.

---

## 4. Empirical estimand and interpretation

The desired empirical quantity depends on the experiment specification. One candidate quantity is the difference in post-treatment outcomes between exposed and comparable unexposed administrative areas.

A generic matched-pair estimand is:

```text
E[Y_post | treated, matched] - E[Y_post | control, matched]
```

A generic future/planned-location contrast is:

```text
E[Y | implemented/completed exposure] - E[Y | selected future/planned exposure]
```

A regression representation for the recovered area-period lane is:

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
- `beta` is the main coefficient of interest for that specification.

The interpretation should remain conservative unless the chosen experiment resolves its main identification issues. Matching, planned/completed comparisons, and panel/event-time designs each rely on different assumptions and should not be described as interchangeable causal estimators.

---

## 5. Data lineage

The recovered notebook chain implies the following historical pipeline:

```text
Raw project sources
    -> standardized project/location CSV and GeoJSON files
    -> project-location to administrative-area assignment
    -> area x time-period investment exposure panel
    -> merged covariates and outcomes
    -> matched samples
    -> diagnostics and regressions
```

The current operating layer should sit on top of that recovered work as:

```text
recovered / refreshed source data
    -> canonical empirical entities
    -> experiment specification
    -> analysis sample
    -> validity gates
    -> estimator family
    -> falsification / sensitivity
    -> interpretable research output
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

The annotation memo should define these project-level labels. This memo defines only how those labels enter an experiment specification.

Treatment should also preserve temporal state when the source data permit it. A candidate experiment may distinguish:

```text
planned / future
active / ongoing
completed
ambiguous timing
never observed in the project source
```

These states should be derived relative to the observation date rather than permanently attached to the project.

---

## 8. Candidate comparison designs

Eric's email guidance implies several nested comparisons. These should be preserved as **candidate experiments derived from the substantive research question**, not treated as obsolete simply because the estimator architecture has broadened.

The “output type” column below records the recovered or originally requested matching representation. The same substantive contrast could later be estimated with another defensible design if its assumptions and data support are stronger.

| Design | Comparison | Recovered / candidate output type | Status |
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

A second candidate counterfactual family should now be investigated where project timing/status supports it:

| Design family | Comparison | Main identifying idea | Status |
|---|---|---|---|
| Planned/completed spatial comparison | Completed or implemented project exposure vs future/planned project exposure | Compare locations selected for projects at different implementation states to absorb part of project-location selection | Methodologically promising; FCV source-field feasibility not yet validated. |
| Longitudinal area-period design | Area trajectories before/after treatment timing | Use repeated area-time observations and explicit treatment timing | Particularly relevant for ACLED/UCDP; requires modern staggered-treatment design choices. |

The jobs-related versus non-jobs-related comparison remains central because it is the comparison most closely tied to the substantive theory that employment-relevant development projects may affect violence, legitimacy, participation, or service delivery differently than other investments.

---

## 9. Time structure

The recovered pipeline uses time-windowed panels rather than a single static cross-section.

Core time descriptors:

| Descriptor | Meaning |
|---|---|
| `T` | Length of time window, usually 2, 3, or 4 years in the recovered notebooks; 1-year windows were discussed as a possible extension. |
| `y0` | Starting-year convention, commonly `2000` or `2001` in recovered matching outputs. |
| Treatment window | Period in which investment exposure is measured. |
| Observation-date project state | Planned, active, completed, or ambiguous status evaluated relative to the observation date when source fields permit it. |
| Outcome window | Post-treatment period in which violence, survey, or service outcomes are measured. |
| Pre-treatment covariates | Covariates measured before treatment exposure or at baseline. |
| Lag rule | Rule ensuring outcome information is not contemporaneous with or prior to the treatment definition. |
| Cross-sectional fallback | A possible simplified design if panel windows become too sparse. |

Eric explicitly emphasized the need to compare different time-period cutoffs because sample size and outcome coverage may change substantially across window definitions. The final pipeline should therefore treat time-window length and project timing convention as design parameters, not hardcoded choices.

---

## 10. Geography

The recovered area-period analysis uses GADM administrative areas, usually within Africa. Survey-linked or project-radius experiments may additionally use direct spatial exposure rules.

| Geography | Role | Current assessment |
|---|---|---|
| GADM L1 | Large administrative regions | Useful for diagnostics, but likely too coarse for credible matching. |
| GADM L2 | Intermediate administrative regions | Likely a plausible main specification for the recovered area-period lane. |
| GADM L3 | Finer local administrative regions | Potentially more spatially precise, but may increase sparsity and missing data. |
| Radius-based exposure | Respondent or location within a specified distance of a project | Relevant to Blair/Briggs-style survey linkage; must preserve source geolocation precision and radius sensitivity. |
| Africa subset | Main continent-scale analysis universe | Needs clear country inclusion and source coverage validation. |
| Country-level restrictions | Possible robustness or source-coverage filters | To be defined after source-version validation. |

A practical rule for the next phase:

> Treat ADM1 as diagnostic; prioritize ADM2 and ADM3 for substantive area-period comparisons subject to sample-size and outcome-coverage checks. Treat spatial radius and geolocation precision as explicit experiment parameters rather than universal preprocessing constants.

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

Outcome families do not necessarily need the same geographic or estimator architecture. ACLED/UCDP can exploit a dense area-time panel, while Afrobarometer may be better suited to respondent/community spatial exposure and survey-time project status.

---

## 12. Matching estimator family — recovered implementation

The later matching notebook implements a one-to-one treated/control matching procedure. This remains an important recovered estimator family, but it is no longer treated as the complete definition of the empirical design.

The logic is:

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

## 13. Matching-specific diagnostics

The following diagnostics remain necessary whenever matching is selected as the estimator family. They should now be understood as a subset of the broader experiment-validity gate sequence.

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
- Matching on observed covariates does not by itself solve endogenous project placement on unobserved factors.

---

## 14. Estimator layer

Regression notebooks exist, but they should be treated as prototypes inside a broader estimator family until canonical experiment specifications are agreed.

### 14.1 Candidate estimator families

| Family | Description | Status |
|---|---|---|
| Raw / descriptive comparison | Compare treatment groups, pre/post distributions, trajectories, and support before causal interpretation. | Required diagnostic baseline. |
| Matching-based comparison | Compare post-treatment outcomes between treated and matched control units; may include matched-sample regression. | Recovered implementation exists. |
| Completed vs planned spatial comparison | Compare exposure around implemented/completed projects with future/planned project locations selected through a similar siting process. | Methodologically relevant; FCV timing/status feasibility must be validated. |
| Longitudinal / staggered-treatment design | Use repeated area-time outcomes around implementation timing and compare treatment cohorts over event time. | Promising for ACLED/UCDP; requires modern staggered-treatment estimators rather than naïve TWFE by default. |
| Count / rate model | Poisson, negative-binomial, binary, hurdle, or rate models for sparse violence outcomes. | Outcome-model choice remains open. |
| Multi-arm comparison | Jobs vs non-jobs vs pure control or WB vs China vs pure control. | Requires stable labels and sufficient support. |
| Spatial spillover-aware design | Explicitly model treatment rings, neighboring exposure, or interference rather than assuming nominal controls are uncontaminated. | Future extension after the baseline apparatus is validated. |

### 14.2 Estimator descriptors to freeze

Before reporting results, the team should freeze these descriptors:

| Descriptor | Needed decision |
|---|---|
| Outcome transformation | Raw count, binary indicator, log transform, per-capita rate, or category-specific outcome. |
| Treatment timing | Treatment window, project status convention, and post-treatment outcome window. |
| Counterfactual | Pure control, non-jobs investment, future/planned project locations, not-yet-treated areas, or another explicit comparison group. |
| Covariate timing | Which covariates are pre-treatment and how they are lagged. |
| Geography / exposure | ADM level, project-to-area assignment, radius, or other spatial exposure rule. |
| Fixed effects | None, time, country, area, matched-pair, or combinations appropriate to the estimator. |
| Clustering / uncertainty | Area, survey community, country, pair, bootstrap, spatially robust, or other justified errors. |
| Sample | All area-periods, matched pairs only, planned/completed sample, event-study cohorts, multi-arm subsets, or source-specific subsets. |
| Treatment definition | Any investment, WB-only, CN-only, jobs-any, direct jobs, indirect jobs, non-jobs. |
| Interpretation | Descriptive association, matched comparison, spatial status contrast, panel estimate, or causal estimate under explicit assumptions. |
| Robustness grid | Admin level, time window, y0, source family, outcome family, classification rule, bandwidth, and estimator family. |

### 14.3 Cross-estimator validity and falsification gates

Regardless of estimator family, the analysis should expose the following before a substantive claim is made:

| Gate | Question |
|---|---|
| Data integrity | Are keys, dates, duplicates, joins, source fields, and outcome definitions valid? |
| Timing resolution | Can project state and treatment timing be assigned without guessing? |
| Treatment discriminability | Do treatment categories have substantive and empirical contrast, or does a broad category collapse almost everything into treatment? |
| Support / overlap | How many observations actually identify the contrast after filters, fixed effects, clustering, and missingness? |
| Spatial precision | Is the requested exposure resolution compatible with source geocoding uncertainty? |
| Exposure collision | How often do multiple donors, projects, sectors, or temporal states overlap? |
| Selection diagnostic | How do future/planned or treated groups differ from never-treated controls before treatment? |
| Outcome sensitivity | Is the outcome too sparse/noisy for the proposed estimand? |
| Synthetic signal recovery | If a plausible effect were injected, how often would the experiment recover it? |
| Placebo / falsification | Does the design generate effects on pre-treatment outcomes, fake timing, negative controls, or implausible exposure definitions? |
| Sensitivity | Does the sign or magnitude depend entirely on one arbitrary ADM level, window, radius, or coding rule? |

These gates are designed to make failed experiments informative. They do not guarantee that a real substantive effect will be found.

---

## 15. Decision table for current candidate experiments

This table should guide the next discussion with Eric and Charlotte.

| Design | Data exists? | Labels needed? | Outcome coverage | Sample-size risk | Ready for estimation? | Recommended next action |
|---|---|---|---|---|---|---|
| WB any investment vs pure control | Yes-ish | No | ACLED likely strongest | Medium | Maybe, after gates | Validate panel, treatment timing, support, outcome coverage, and placebo behavior. |
| CN any investment vs pure control | Yes-ish | No | ACLED likely but sparse | High | Not yet | Quantify treated N and outcome coverage by ADM/T/y0. |
| WB+CN pooled vs pure control | Yes-ish | No | ACLED likely | Medium | Maybe, after gates | Use as broad calibration experiment, not final theory test. |
| WB jobs-any vs pure control | Partial | Yes | ACLED/Afrobarometer TBD | High | No | Complete annotation protocol and labels. |
| CN jobs-any vs pure control | Partial | Yes | Sparse / TBD | Very high | No | Check updated China/AidData source and sample viability. |
| Jobs-any vs non-jobs vs pure control | Conceptual / partial | Yes | Likely sparse | Very high | No | Locate or rebuild multi-arm design after labels. |
| Direct jobs vs indirect jobs vs pure control | Not ready | Yes | TBD | High | No | Use only after broad jobs-any labels are stable. |
| Completed vs planned project exposure | Source-field dependent | Maybe | Outcome-specific | Unknown | Not yet | Audit agreement/start/end/status fields and construct support/composition diagnostics. |
| ACLED longitudinal / event-time design | Panel structure exists | No for source-family treatment | Strongest temporal coverage | Medium | Not yet | Validate timing and support; choose a modern staggered-treatment estimator family. |
| Afrobarometer spatial design | Data work likely partial | Maybe | TBD | High | No | Produce coverage table by country, survey round, project status, exposure radius, and treatment. |
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
6. Which source fields can support agreement, planned, start, implementation, and completion timing?

### 16.2 Annotation decisions

1. What is the first-stage label: `jobs_any` vs `non_jobs`, or direct/indirect from the start?
2. How should mixed projects be classified?
3. How should macro-policy-only projects be excluded or flagged?
4. What confidence threshold is required before labels enter an experiment?
5. Should labels be human-coded, rule-based, ML-assisted, or a hybrid?

### 16.3 Treatment and counterfactual decisions

1. Should exposure be binary or intensity-based?
2. If intensity-based, how should multi-location project amounts be split?
3. Should treatment be based on approval date, commitment date, start date, implementation period, completion date, or disbursement timing?
4. Can future/planned project locations be constructed credibly enough to serve as a counterfactual family?
5. How should overlapping WB and China projects be treated?
6. How should repeated exposure across time windows be handled?
7. How should ambiguous project status be represented rather than silently guessed?

### 16.4 Geography, support, and estimator decisions

1. What is the main administrative level: ADM2 or ADM3?
2. What is the main time window: 2, 3, or 4 years?
3. For respondent/project linkage, what radius is substantively plausible and compatible with geocoding precision?
4. Are matched trios necessary for the first analysis, or should pairs come first?
5. What is the minimum acceptable effective treated N and outcome N after all design restrictions?
6. Which estimator family is the first canonical calibration design?
7. Which placebo and synthetic-signal tests must pass before interpreting the first real coefficient?

---

## 17. Proposed next implementation architecture

The recovered notebooks should not be discarded. They should be converted into a modular pipeline in small steps. The newer `fcv-experiment-harness` provides an initial validation/experiment layer, while the structure below remains a useful map for future source ingestion and canonical-data modules.

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

The active experiment harness should sit downstream of canonical data construction rather than duplicate source-ingestion logic.

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
   Defines candidate experiments by treatment, timing, geography/exposure, counterfactual, outcome, sample, estimator family, and status.

3. **Source-Version Crosswalk**  
   Compares WB public data, AidData WB geocoded data, and China/AidData data by unit, ID, year coverage, timing/status fields, location coverage, and use.

4. **Sample-Viability / Gate Table**  
   Reports treated N, control/counterfactual N, outcome coverage, admin level or radius, time window, treatment definition, placebo status, signal-recovery status, and readiness.

5. **Minimal Canonical Experiment Spec**  
   One baseline design only, initially chosen for measurability rather than because it produces a favorable coefficient.

The [Validation Status](../data-products/validation-status.md) page should remain the human-facing summary of which real-data experiment surfaces have actually passed these checks.

---

## 19. Recommended review question for Eric and Charlotte

The next meeting should not try to review every notebook. It should answer this question:

> Which empirical experiment should be treated as the first canonical analysis path, given source validity, treatment timing, counterfactual credibility, effective sample support, outcome coverage, and the initial gate results?

A good meeting outcome would be one of:

- Choose WB-only before CN because sample coverage is stronger.
- Choose `jobs_any` first, postponing direct/indirect distinctions.
- Use ACLED first, postponing Afrobarometer until coverage is documented.
- Treat ADM2 as the main area-period unit and ADM3 as robustness.
- Test whether planned/completed project status is feasible before relying only on pure-control matching.
- Rebuild source data using updated AidData before producing final labels.
- Produce the sample-viability / gate table before interpreting regression reruns.

---

## 20. Bottom line

The recovered notebooks show that the empirical pipeline was substantially implemented, but not consolidated into a stable research software architecture or a fully explicit causal design.

The recovered scientific spine is:

```text
project finance -> geocoded exposure -> area-period treatment -> matched comparisons -> post-treatment outcomes
```

The active scientific spine is now broader:

```text
canonical empirical data
    -> experiment specification
    -> analysis sample
    -> validity / measurement gates
    -> estimator family
    -> falsification and sensitivity
    -> research interpretation
```

The unresolved bottlenecks are:

1. source-version and project-timing validation;
2. project annotation and treatment definition;
3. counterfactual choice, including whether planned/future project locations are feasible;
4. effective sample support and outcome coverage;
5. geolocation precision and exposure collisions;
6. placebo/falsification behavior;
7. empirical sensitivity to plausible weak effects;
8. selection of one first canonical estimator family after the preceding gates are visible.

The safest next step is not to rerun everything or to search across regressions for a favorable result. The safest next step is to connect one recovered real-data experiment to the validation harness, observe which gates fail, repair or narrow the design where necessary, and only then interpret the estimator output.

---

## Related pages

- [Current Research Status](../current-status.md)
- [Experimental Infrastructure and Validation](./experimental-infrastructure.md)
- [Empirical Study](../main-pipeline/empirical-study.md)
- [Matching Vertical](../main-pipeline/matching-vertical.md)
- [Validation Status](../data-products/validation-status.md)
- [Notebook Guide](../notebooks/notebook-guide.md)
- [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md)
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md)
