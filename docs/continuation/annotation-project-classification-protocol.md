---
title: Annotation and Project Classification Protocol
sidebar_position: 3
description: This memo defines a practical annotation protocol for classifying World Bank and China-funded development projects into treatment-relevant categories, especially jobs-related categories. 
date: "2026-06-18"
---


# Module B — Annotation and Project Classification Protocol


## 1. Purpose

This memo defines a practical annotation protocol for classifying World Bank and China-funded development projects into treatment-relevant categories.

The protocol is meant to answer one operational question:

> How should we classify investment projects so that they can later be used to construct treatment variables for matching and regression analyses?

This document should be read as a coding manual, not as a regression memo. The regression pipeline is described separately in **Module A — Experimental Design and Regression Pipeline**. This memo focuses on the project-level classification layer that feeds into that pipeline.

The central principle is:

> Labels should be assigned at the **project level** first, then propagated to project-location records, administrative areas, and area-period treatment variables.

This avoids a common error: manually classifying project-location rows instead of projects. A single project may appear in many geocoded locations, so labeling at the location-row level would overweight multi-location projects in the annotation process.

---

## 2. Relationship to the Empirical Design

The empirical design studies whether exposure to development investment projects, especially employment-relevant projects, is associated with subsequent changes in violence, civic engagement, political legitimacy, service delivery, or related outcomes.

The annotation protocol contributes to that design by producing project-level labels such as:

```text
project_id → jobs_direct, jobs_indirect, jobs_any, macro_policy_only, locally_implemented
```

These labels are later combined with geolocation and time information to construct area-period treatment variables such as:

```text
GID × period → exposed_to_jobs_any
GID × period → exposed_to_non_jobs_investment
GID × period → pure_control
```

This memo does not decide regression specifications, matching algorithms, or outcome definitions. It defines the classification rules that make those later steps possible.

---

## 3. Evidence Base and Origin of the Rules

The classification rules are reconstructed from three sources:

1. **Eric’s email instructions**  
   Eric distinguished between:
   - projects that explicitly mention jobs or employment creation;
   - projects that do not mention jobs explicitly but plausibly generate jobs indirectly;
   - macro-level or policy-level projects that may not correspond to local implementation.

2. **Existing notebook scaffolding**  
   The relevant notebooks include:
   - `56 - Exploration Sectors`
   - `57 - Explore for Job-Related Investments`
   - `58 - WB Projects info to Doc`

   These notebooks explored project sectors, lending instruments, keyword searches, geocoded locations, and project review documents. They support annotation but do not themselves produce final labels.

3. **Existing manual review / pilot labels**  
   Earlier manual review of a sample of World Bank projects suggested that strict keyword search was too narrow. A broader classification rule is therefore needed.

The reconstructed strategy is:

> Start with a broad jobs-potential classification, including both direct and indirect employment channels. Later, if useful, distinguish finer subtypes of job-related projects.

---

## 4. Unit of Annotation

The canonical unit of annotation is:

```text
one row = one project
```

Not:

```text
one row = one project-location
one row = one administrative area
one row = one area-period exposure
```

Project labels should then be propagated downstream.

### Why project-level annotation matters

Many projects have multiple geocoded locations. Some projects may have only one site, while others may span dozens or hundreds of sites. If annotators label rows from a geocoded project-location table, large multi-location projects will be overrepresented in the training and review process.

The correct workflow is:

```text
project metadata
    ↓
project-level annotation
    ↓
project-location table
    ↓
administrative area assignment
    ↓
area-period treatment panel
```

---

## 5. Canonical Annotation Table

The annotation table should contain one row per project.

Recommended columns:

| Column | Meaning |
|---|---|
| `project_id` | Source-specific project identifier. |
| `source_family` | `WB_public`, `AidData_WB`, `AidData_China`, or other source family. |
| `project_title` | Project title. |
| `country_or_countries` | Recipient country or countries. |
| `approval_year_or_start_year` | Approval, start, or commitment year, depending on source. |
| `sector` | Sector label from source. |
| `major_sector` | Higher-level sector grouping, if available. |
| `theme` | Theme or thematic category, if available. |
| `lending_instrument` | Financing or lending instrument, if available. |
| `project_objective` | Project development objective or closest equivalent. |
| `project_summary` | Longer summary, if available. |
| `amount_usd` | Financial amount, if available and comparable. |
| `n_geocoded_locations` | Number of geocoded project locations. |
| `has_local_geography` | Whether the project has usable geocoded location information. |
| `locally_implemented` | Whether the project plausibly involves local implementation. |
| `macro_policy_only` | Whether the project appears to be purely macro/policy/institutional. |
| `jobs_direct` | Direct jobs/employment label. |
| `jobs_indirect` | Indirect jobs-potential label. |
| `jobs_any` | `jobs_direct OR jobs_indirect`. |
| `jobs_channel` | Short text label describing the employment channel. |
| `confidence` | `high`, `medium`, `low`, or `needs_review`. |
| `needs_second_review` | Whether another reviewer should inspect this row. |
| `reviewer` | Person assigning the label. |
| `review_notes` | Short explanation for classification. |
| `source_url` | Project URL or source record URL, if available. |

---

## 6. Core Labels

The main annotation labels are:

```text
locally_implemented
macro_policy_only
jobs_direct
jobs_indirect
jobs_any
non_jobs
unclear
confidence
needs_second_review
```

These labels are related but not identical.

A project may be locally implemented but not jobs-related.  
A project may be jobs-related directly or indirectly.  
A project may be macro-policy-only and therefore unsuitable for local treatment construction.  
A project may be ambiguous and require second review.

---

# 7. Local Implementation Classification

## 7.1 Question

For each project, ask:

> Does this project plausibly correspond to activities implemented on the ground in identifiable places?

This is a prior diagnostic before jobs classification. If a project is purely macro-policy or institutional reform with no local implementation component, it may not be suitable as a spatial treatment even if it has development relevance.

## 7.2 Label Values

| Value | Meaning |
|---|---|
| `yes` | Project has local, physical, site-based, or field implementation. |
| `no_macro_policy` | Project appears to be policy, budget, macrofiscal, or central institutional reform only. |
| `mixed` | Project combines local implementation with national/policy/institutional components. |
| `unclear` | Available text is insufficient to decide. |

## 7.3 Evidence to Use

Use the following fields when available:

- project title;
- project objective;
- project summary;
- sector;
- lending instrument;
- geocoded locations;
- project page or PDF;
- location count;
- country/area information.

## 7.4 Positive Signs of Local Implementation

Classify as locally implemented if the project involves or plausibly funds:

- construction or rehabilitation;
- local infrastructure;
- schools, clinics, roads, water systems, irrigation, energy, or transport works;
- local service delivery;
- community development;
- public works;
- local agricultural or productive activities;
- area-specific implementation units;
- geocoded locations that correspond to project sites.

## 7.5 Signs of Macro-Policy-Only Projects

Flag as `no_macro_policy` or `macro_policy_only = 1` if the project appears to be mainly:

- macrofiscal reform;
- budget support;
- central government policy reform;
- financial-sector reform with no local component;
- regulatory reform;
- public administration reform only;
- statistical capacity building only;
- technical assistance with no field implementation;
- national strategy support without identifiable sites.

## 7.6 Mixed Projects

Use `mixed` if the project has both national/policy and local implementation components.

Example:

> A public-sector reform project includes national procurement reform but also funds local service-delivery pilots.

This should not be automatically excluded. It should be flagged for review.

---

# 8. Jobs-Related Classification

The jobs classification has two main positive labels:

```text
jobs_direct
jobs_indirect
```

The combined treatment label is:

```text
jobs_any = jobs_direct OR jobs_indirect
```

The first-stage empirical treatment should usually use `jobs_any`, because strict keyword or direct-employment definitions are too narrow.

---

## 8.1 Direct Jobs

### Definition

A project is `jobs_direct = 1` if employment, job creation, labor-market access, or income-generation through work is an explicit objective, title element, or major component.

### Decision Rule

```text
jobs_direct = 1 if employment or job creation is explicit in the title, objective, summary, or major project component.
```

### Examples of Direct Jobs Projects

Likely `jobs_direct = 1`:

- public works programs;
- cash-for-work programs;
- employment services;
- youth employment projects;
- vocational training;
- skills training;
- labor-market insertion;
- wage subsidies;
- livelihood recovery programs;
- explicit job creation programs;
- employment-intensive reconstruction;
- social protection programs explicitly linked to work or employment.

### Textual Signals

Direct keywords may include:

```text
job
jobs
employment
employability
labor market
labour market
livelihoods
public works
cash for work
skills
vocational
workforce
income generation
wage
youth employment
```

Keyword hits are useful signals but not sufficient on their own. The annotator must read context.

### Negative Examples

Do **not** assign `jobs_direct = 1` only because a project has broad economic benefits. Direct jobs require explicit employment-related language or a clearly employment-focused component.

---

## 8.2 Indirect Jobs

### Definition

A project is `jobs_indirect = 1` if it plausibly creates employment, income, productive capacity, or labor demand through indirect channels, even if jobs are not explicitly mentioned.

### Decision Rule

```text
jobs_indirect = 1 if a reasonable mechanism links the project to employment generation, income generation, productive capacity, market access, or labor demand, even without explicit jobs language.
```

### Examples of Indirect Jobs Projects

Likely `jobs_indirect = 1`:

- roads and transport infrastructure;
- energy access and electricity projects;
- irrigation;
- agriculture productivity;
- agricultural value chains;
- SME development;
- private-sector development;
- trade facilitation;
- market access infrastructure;
- education or human capital projects;
- technical/vocational education;
- local infrastructure;
- WASH projects if labor-intensive or productivity-enhancing;
- environment or land-management projects if they involve local works or productive livelihoods;
- reconstruction and recovery projects with local economic activity.

### Mechanisms

Use short mechanism tags in `jobs_channel`, for example:

```text
direct_employment
public_works
skills_training
livelihoods
agriculture_productivity
market_access
infrastructure
energy_access
transport
private_sector
sme_development
human_capital
local_reconstruction
service_delivery
unclear_jobs_channel
```

### Ambiguous Cases

Some sectors are frequently ambiguous:

| Project type | Suggested handling |
|---|---|
| WASH | Indirect if local works, service access, or productivity channel is plausible; otherwise review. |
| Education | Indirect if skills/human capital/labor-market channel is clear; otherwise review. |
| Health | Usually not jobs-related unless employment, workforce, local infrastructure, or service-delivery expansion is central. |
| Governance | Usually non-jobs unless linked to local service delivery or private-sector/job creation. |
| Environment | Indirect if local natural-resource livelihoods, land restoration, or labor-intensive works are central. |

---

## 8.3 Jobs Any

The combined first-stage label is:

```text
jobs_any = jobs_direct OR jobs_indirect
```

This is the broad jobs-potential measure.

Use `jobs_any` for the first round of empirical treatment construction unless Eric/Charlotte decide to use stricter subtypes.

---

## 8.4 Non-Jobs Projects

### Definition

A project is `non_jobs = 1` if it has no plausible direct or indirect employment channel and is not being flagged as unclear.

### Decision Rule

```text
non_jobs = 1 if jobs_direct = 0, jobs_indirect = 0, and the available evidence provides no reasonable employment or productive-capacity mechanism.
```

### Examples

Likely `non_jobs = 1`:

- pure regulatory reform;
- macrofiscal budget support;
- central public administration reform;
- financial-sector reform without a local productive or employment channel;
- technical assistance only;
- statistical capacity building;
- institutional modernization with no field component;
- governance reform with no local implementation or productive mechanism.

### Caution

Do not classify a project as non-jobs too quickly. Many development projects may not use the word “jobs” but still plausibly affect employment through infrastructure, agriculture, private-sector activity, or human capital.

When in doubt, use:

```text
confidence = low
needs_second_review = 1
```

---

# 9. Confidence and Review Flags

Every annotation should include confidence.

| Confidence | Meaning |
|---|---|
| `high` | Title/objective/sector make classification clear. |
| `medium` | Classification is plausible but not explicit. |
| `low` | Broad or ambiguous project; classification relies on judgment. |
| `needs_review` | A second reviewer should decide. |

Use `needs_second_review = 1` when:

- project objective is vague;
- title and sector conflict;
- project has both policy and local components;
- project could be direct or indirect but not clearly;
- geolocation exists but text suggests macro/policy reform;
- project is large and multi-component;
- classification will materially affect sample size or treatment definition;
- annotator is uncertain.

---

# 10. Evidence Sources Allowed for Annotation

Annotators may use the following evidence sources.

| Source | Use |
|---|---|
| Project title | Quick signal; not sufficient alone for ambiguous cases. |
| Project development objective | Primary evidence source. |
| Project summary | Primary evidence source when objective is short. |
| Sector / major sector | Secondary evidence source. |
| Theme | Secondary evidence source. |
| Lending instrument | Helps distinguish policy lending from investment projects. |
| Geocoded locations | Helps evaluate local implementation. |
| Project URL / official page | Tie-breaker and documentation. |
| Project PDFs or yearly review docs | Manual review support. |
| Existing labeled examples | Calibration and consistency checks. |

Annotators should not rely only on keyword search. Keyword counts can identify candidate projects, but labels require human judgment.

---

# 11. Coding Rules for Common Project Types

| Project type | `jobs_direct` | `jobs_indirect` | `macro_policy_only` | Suggested label |
|---|---:|---:|---:|---|
| Public works program | 1 | 0 | 0 | Direct jobs |
| Cash-for-work | 1 | 0 | 0 | Direct jobs |
| Youth employment | 1 | 0 | 0 | Direct jobs |
| Vocational training | 1 | 0/1 | 0 | Direct jobs or direct + indirect |
| Skills / workforce development | 1 | 0/1 | 0 | Direct jobs or direct + indirect |
| Livelihood recovery | 1 | 1 | 0 | Direct jobs |
| Road construction | 0 | 1 | 0 | Indirect jobs |
| Transport corridor | 0 | 1 | 0 | Indirect jobs |
| Energy access | 0 | 1 | 0 | Indirect jobs |
| Irrigation | 0 | 1 | 0 | Indirect jobs |
| Agriculture value chain | 0 | 1 | 0 | Indirect jobs |
| SME/private-sector support | 0/1 | 1 | 0 | Usually indirect, direct if explicit employment objective |
| Education infrastructure | 0 | 1? | 0 | Review unless skills/labor-market channel is clear |
| General health project | 0 | 0/1? | 0 | Review |
| WASH infrastructure | 0 | 1? | 0 | Indirect if local works/productivity channel is plausible |
| Environmental restoration | 0 | 1? | 0 | Indirect if livelihoods/local works channel is central |
| Budget support | 0 | 0 | 1 | Macro-policy / non-jobs |
| Macrofiscal reform | 0 | 0 | 1 | Macro-policy / non-jobs |
| Statistical capacity | 0 | 0 | 1 | Usually non-jobs |
| Procurement/public administration reform | 0 | 0 | 1 | Usually non-jobs |
| Financial-sector reform | 0 | 0/1? | 1? | Review; may be indirect if SME/credit/jobs channel is explicit |
| Governance reform | 0 | 0/1? | 1? | Review |

---

# 12. Annotation Workflow

## Step 1 — Source and Version Check

Before annotation begins, confirm:

- which database is being annotated;
- source family;
- download date or release version;
- project ID field;
- available text fields;
- available sector/theme fields;
- whether geocoded locations exist;
- whether the data are project-level or project-location-level.

No annotation should begin until the table unit is clear.

## Step 2 — Build Project-Level Annotation Table

Create one row per unique project ID.

Include project metadata, text fields, sector fields, geography indicators, and empty label columns.

## Step 3 — Calibration Sample

Charlotte should label a small calibration sample first, such as:

```text
50–100 projects
```

The sample should include:

- clear direct jobs examples;
- likely indirect jobs examples;
- likely macro-policy cases;
- ambiguous broad projects;
- multi-location projects;
- projects across several sectors and countries.

## Step 4 — Review Disagreements

Matías and/or Eric should review:

- all low-confidence cases;
- all `needs_second_review = 1` cases;
- a small random sample of high-confidence cases;
- any sector where labels appear inconsistent.

## Step 5 — Freeze Coding Rules v0.1

After calibration review, update this memo with:

- confirmed examples;
- borderline examples;
- any changed rule;
- sector-specific exceptions.

The goal is not perfection; the goal is consistency.

## Step 6 — Label Larger Sample or Full Dataset

Use the broad `jobs_any` classification first.

Do not split into many subtypes until the broad classification is stable.

## Step 7 — Optional Rule-Based or ML-Assisted Expansion

If human labels are consistent, use them to support:

- sector-based rules;
- keyword-assisted pre-classification;
- supervised text classification;
- active learning for uncertain cases.

Machine assistance should not replace the coding manual. It should only accelerate the application of stable rules.

## Step 8 — Propagate Labels Downstream

Once project-level labels are complete:

```text
project labels
    ↓
project-location rows
    ↓
GID assignment
    ↓
GID × period treatment variables
```

Propagation should preserve project IDs so downstream treatment variables can be audited.

## Step 9 — Produce Label Audit

After annotation, produce a short audit table:

| Audit dimension | Required output |
|---|---|
| Source family | Counts by WB / China / other |
| Label | Counts for direct, indirect, jobs_any, non_jobs, macro_policy |
| Country | Counts by country |
| Sector | Counts by sector |
| Year | Counts by approval/start year |
| Confidence | Counts by confidence level |
| Review status | Number needing second review |
| Geography | Number with geocoded locations |
| Multi-location projects | Distribution of `n_geocoded_locations` |

---

# 13. Quality-Control Checks

Before labels are used in the empirical pipeline, check:

1. **No duplicate project IDs** in the annotation table.
2. **No project-location rows manually labeled independently** unless they are linked back to project-level labels.
3. **Every `jobs_any = 1` has either `jobs_direct = 1` or `jobs_indirect = 1`.**
4. **Every `non_jobs = 1` has `jobs_any = 0`.**
5. **Every `macro_policy_only = 1` has a local-implementation flag explaining whether it should be excluded or retained as a special case.**
6. **All `low` or `needs_review` rows are separated before final treatment construction.**
7. **Labels are auditable by project title/objective/sector and reviewer notes.**
8. **Counts by sector and country are inspected for implausible patterns.**
9. **Large multi-location projects are reviewed separately.**
10. **The exact source/version of the annotated table is recorded.**

---

# 14. Recommended Output Files

The annotation process should produce at least three files.

## 14.1 Project-Level Annotation Table

```text
project_annotations_v0_1.csv
```

One row per project.

## 14.2 Annotation Audit

```text
project_annotation_audit_v0_1.md
```

Short summary of counts, uncertainties, and review needs.

## 14.3 Borderline Cases Table

```text
project_annotation_borderline_cases_v0_1.csv
```

Rows needing Eric/Charlotte/Matías review.

Optional:

```text
project_annotation_training_examples_v0_1.csv
```

Curated examples for future ML/rule-based expansion.

---

# 15. Open Decisions for Eric / Charlotte / Matías

The following decisions should be explicitly confirmed before large-scale annotation.

| Decision | Why it matters |
|---|---|
| Should the first-stage treatment use broad `jobs_any` or strict `jobs_direct`? | Broad definition improves sample size; strict definition improves conceptual precision. |
| Should macro-policy-only projects be excluded from all spatial treatment construction? | They may not correspond to local exposure. |
| Should mixed projects be included, excluded, or separately flagged? | Large WB projects may combine policy and local implementation. |
| Should China and WB projects use identical classification rules? | Source text and sector structure may differ. |
| Should projects without geocoded locations be labeled? | Useful for source audit, but not immediately usable for spatial treatment. |
| Should uncertain indirect jobs projects be treated as jobs, non-jobs, or excluded from main specification? | Affects sample size and treatment purity. |
| Should annotation prioritize Africa-only projects or all available projects? | The empirical design is Africa-focused, but source files may be broader. |
| Should the final treatment use project counts, binary exposure, amount exposure, or weighted exposure? | Annotation labels interact with treatment-intensity construction. |

---

# 16. Recommended Initial Task for Charlotte

A bounded first task:

> Build and label a 50–100 project calibration sample using this protocol, then produce a short audit of disagreements, ambiguous cases, and suggested refinements to the rules.

Suggested sample composition:

| Group | Target count |
|---|---:|
| Clear direct jobs candidates | 15 |
| Clear indirect jobs candidates | 20 |
| Likely non-jobs / macro-policy cases | 20 |
| Ambiguous broad projects | 20 |
| Random residual sample | 25 |

The calibration output should include:

- counts by label;
- examples of each category;
- uncertain cases;
- suggested changes to rules;
- questions for Eric.

---

# 17. Short Version of the Coding Rule

For fast reference:

```text
1. First decide whether the project is locally implemented, macro-policy-only, mixed, or unclear.

2. Then decide whether the project is explicitly about jobs/employment:
   if yes → jobs_direct = 1.

3. If not explicit, decide whether it plausibly creates jobs indirectly through infrastructure, agriculture, private-sector development, skills, market access, reconstruction, or productive capacity:
   if yes → jobs_indirect = 1.

4. Set jobs_any = jobs_direct OR jobs_indirect.

5. If no plausible jobs channel exists, set non_jobs = 1.

6. Use confidence and needs_second_review flags for all ambiguous projects.
```

---

# 18. Bottom Line

The annotation task is not merely descriptive. It defines the treatment variable used downstream in the matching and regression pipeline.

The safest approach is therefore:

```text
project-level labels first
broad jobs_any treatment first
explicit uncertainty flags
small calibration sample before full labeling
auditable propagation from project → location → area-period
```

This memo should be updated after the first calibration round with concrete examples and any decisions made by Eric, Charlotte, and Matías.

---

## Related pages

- [Dataset Inventory](../data-products/dataset-inventory.md)
- [Empirical Study](../main-pipeline/empirical-study.md)
- [Source Data Inventory and Update Strategy](./source-data-inventory-update-strategy.md)
- [Experimental Design and Regression Pipeline](./experimental-design-regression-pipeline.md)
