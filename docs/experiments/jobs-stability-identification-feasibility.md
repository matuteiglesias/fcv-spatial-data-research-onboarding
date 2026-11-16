---
title: "After W8: Can We Identify Jobs and Stability Effects?"
sidebar_position: 1
description: "Queued identification-feasibility research line: how to learn from imperfect treatment, geography, controls, and violence measures without specification fishing."
last_verified: "2026-11-16"
---

# After W8: Learning When the Jobs–Violence Design Struggles

**Scientific Council proposal · 16 November 2026 · Research state: QUEUED / NOT EXECUTING**

**Lead:** Amara (Africa Observatory). **Contributors:** Tomás (data/engineering), Lucía (spatial exposure). **Independent review:** Ruth. **Director:** authorizes any implementation only after a bounded feasibility decision.

The canonical **[FCV research workgraph](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/workgraphs/jobs_stability_identification_feasibility_v0.json)** and **[scientific contract](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/workgraphs/JOBS_STABILITY_IDENTIFICATION_FEASIBILITY_20261116.md)** are versioned in the experiment harness. They are **planning artifacts**, not an experimental release, completed study, or automatically dispatched task. The W5–W8 results remain frozen.

## The scientific problem, not just the specification

The intended opportunity-cost argument is:

**Investment → actual local employment opportunity → altered incentives to participate in violence → changed security/stability.**

Our current measurable shortcut is much weaker:

**Project classified in an employment-*potential* sector → geocoded finance-period exposure → later observed violence.**

Neither the presence of a project nor its native sector proves that jobs or wages were generated locally. A financed project can have an ambiguous start date; beneficiaries may live outside the geocoded ADM2 district; a different violence outcome may respond at a different horizon; projects may target places already changing in security risk.

These are distinct **measurement, selection, interference, timing, and statistical observability** problems. Adding ADM3 units, changing bins, introducing propensity-score matching, or selecting a modern DiD estimator cannot by itself resolve them.

## What the current results genuinely say

See [W5–W8 ADM2 results](./adm2-jon-comparisons-2026-11.md) for definitions, samples, intervals and source authority.

| Completed empirical contrast | China result | Interpretation |
| --- | ---: | --- |
| W8 J−N, same J-target country-period weights | **+0.09 pp** | Standardized **post-period level difference**, not the effect of jobs |
| W8 O−N | **+9.64 pp** | Descriptive other-sector versus source-unexposed difference |
| W8 J−O | **−9.55 pp** | Large level difference, not a causal advantage |
| W8 J−O in the earlier VAC period | **−9.96 pp** | Similar baseline group difference; prior observations may follow *earlier* projects |
| W7 within-ADM2 J−O sector proxy | **−0.025 pp**, 95% CI [−2.913, +2.862] | Different model/sample; inconclusive, not proof of a zero effect |

**J** means a *candidate* productive/employment sector, **O** another sector, **N** no recorded China/WB project in the observed source-period history. Mixed/both-donor cases are not automatically O or N. No record of China/WB does **not** prove no investment from all financiers.

W8 is ADM2 country×biennium standardized common support, not the requested ADM3 genuine matched pairs/trios, not an onset/DiD study, and not a source-reviewed employment-label study. The current project ledger has **0 source-reviewed direct/indirect jobs labels of 2,535**. The WB W8 comparison has particularly thin support.

The J/O level difference is substantially persistent. That challenges a naive protective reading, but **different baseline levels do not by themselves refute parallel trends**. To assess DiD, we need untreated *changes* and genuine histories preceding the **first relevant exposure**, not just a previous measurement that may be post-treatment.

## Four feasible ways to learn something new

### 1. Verify the employment mechanism rather than assuming sectors equal jobs

Freeze a small, **outcome-blind** audit sample from the existing project ledger. Separate **explicit jobs objectives**, **plausible indirect local employment**, and **unknown/unsupported** projects, as in Eric's original classification protocol. Record source evidence, project lifecycle, likely geography of beneficiaries, and uncertain cases. Do **not** commit to coding all 2,535 until the pilot demonstrates a viable label.

**What this can tell us:** whether treatment misclassification, not effect size, is the dominant obstacle; whether data support an explicit-versus-indirect distinction. It does *not* directly measure jobs created.

### 2. Test whether J and N could support a counterfactual

Eric's foundational interest includes **J versus genuinely unexposed N** matched pairs. Keep **O−N** and **J−O** as complementary contrasts and as checks on project-type specificity; do not substitute J−O for J−N.

Inventory first-observed project cohorts and earlier exposure; quantify available **pre-exposure** VAC trajectories, baseline determinants of donor/project placement, geographic overlap, treatment repetition, and effective independent support. If controls differ systematically in expected violence, measured covariate balance will not establish exchangeability. Propensity matching is an overlap/measurement tool, **not an identification guarantee**.

**What this can tell us:** whether pre-trend/selection claims are testable at all, or whether the defensible result must remain descriptive.

### 3. Examine spatial reach and the meaning of “no project”

A bridge, road, industrial site or training project can affect adjacent locations. The financing source's project point may not coincide with an employment catchment area. Compare governable ADM2/ADM3 measurement quality, known geocoding uncertainty, plausible neighbor exposure and control contamination.

Smaller administrative units might help **or** worsen misclassification and sparsity. Buffer sizes and spatial windows must be justified before outcomes are inspected.

**What this can tell us:** whether controls are plausibly untreated and what geographic treatment assumptions would actually mean. It cannot automatically determine the direction of spatial spillover bias.

### 4. Align outcomes and observability with the theory

Violence against civilians is not identical to recruitment into violence or political instability. Map a **small prespecified outcome family**: ACLED/UCDP violence measures and, where real coverage and survey timing permit, Afrobarometer indicators of security, institutions or attitudes; DHS only for variables with a defensible measurement role.

Separate **whether a signal could be detected at an economically relevant magnitude** from **whether an effect exists**. Reuse the harness's existing observability/calibration logic on an eligible source-governed frame where possible; synthetic recovery tests characterize the detector, not the truth of an employment mechanism.

**What this can tell us:** whether imprecision, wrong outcomes, survey misalignment or lack of underlying treatment variation limits interpretation.

## Workgraph: preparation only

```text
F00  freeze W5–W8 evidence, Eric protocol and decision criteria
  ├─ F01  employment evidence / project coding audit
  ├─ F02  placement, J–N support, true pre-exposure feasibility
  ├─ F03  spatial exposure, geocoding and control contamination
  └─ F04  outcomes, measurement and detectability
           ↓
F05  propose at most two defensible *prespecified* candidate designs
           ↓
F06  Ruth's independent review + Director decision
```

The detailed task contracts, owners, dependencies and acceptance gates live [in the harness workgraph](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/workgraphs/jobs_stability_identification_feasibility_v0.json). **Every node starts QUEUED.** There is no ongoing computation, schedule, or background agent authorized by this page.

## Decision, not regression proliferation

The Council should return with one of three scientifically acceptable recommendations:

| Gate | Consequence |
| --- | --- |
| **PROCEED** — credible exposure, meaningful support, defendable comparison and precision | Director may authorize **one explicitly prespecified** J−N design and a limited complementary contrast |
| **MEASUREMENT FIRST** — weak labels or geographically ambiguous exposure, but promising support | Improve only the binding measurement component, then reassess |
| **DESCRIPTIVE ONLY / STOP** — nonrecoverable selection, contamination, unavailable chronology, or insufficient information | Preserve W5–W8 findings, do not claim a causal jobs effect |

A null result with sufficient precision is legitimate scientific evidence. An uninformative null or a descriptive difference is not a reason to keep changing the specification until a favorable coefficient emerges. Conversely, evidence that a design cannot answer the proposed question is itself valuable, provided its limitations are documented.

### Boundary for collaborators

The [current ADM2 study](./adm2-jon-comparisons-2026-11.md) is a **completed descriptive benchmark**. The [experimental design status](../continuation/experimental-design-status.md) remains the current scope authority. This page describes **a future near-term research line**, not a report of new results or a promise to execute all branches. Correspondence with collaborators is separate from this workgraph and remains subject to explicit human review.
