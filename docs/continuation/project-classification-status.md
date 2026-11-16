---
title: Project Classification Status
sidebar_position: 3
description: Current boundary and implementation status for project annotation and jobs-related classification.
last_verified: "2026-11-16"
---

# Project Classification Status

**Document status: CURRENT CLASSIFICATION BOUNDARY OVERLAY**  
**Last verified: 2026-11-16**

The detailed [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md) remains useful as a recovered coding manual for jobs-related and local-implementation concepts.

Its downstream interpretation has changed with the current architecture.

## November 2026: the jobs coding decision in one view

This page is the **current bridge between Eric's original jobs-vs-non-jobs protocol and the implemented FCV project data structures**. The research question is how employment-relevant projects differ from other projects in subsequent stability outcomes; donor identity is another comparison dimension, not a substitute for project type.

| Research label | Intended evidence | Current W6 status |
| --- | --- | --- |
| **Explicit jobs objective (Eric's narrow/direct)** | Jobs or employment creation explicitly specified in a project title, objective or summary | **Unannotated**; native W5 Silver title/sector alone is insufficient to verify objectives. |
| **Indirect productive/jobs channel** | Concrete local productive infrastructure, agriculture, enterprise, skills or other credible employment mechanisms without an explicit jobs objective | **Unannotated**; sector-based potential is only a triage signal. |
| **Full jobs potential** | Union of explicit and indirect categories after source-text review | **Not yet derivable** from validated current project labels. |
| **Other / non-jobs project** | Evidence supports a non-jobs coding after examining project purpose and implementation | **Not equivalent** to the sector proxy "low." |
| **Unclear / mixed** | Insufficient text, ambiguous geography, multisector activity or conflicting evidence | **Retained**, not converted to a negative label. |

The historical June 2026 20-project demonstration (shared with Eric and Charlotte) is a **calibration sample**, not ground truth or a W5 source table. It includes projects outside Africa by design; that is acceptable for testing coding decisions. Charlotte reported spot-check agreement in July, but a fresh consistency audit found **two jobs-any=Yes entries with jobs-channel=none** and multiple loan/donation/donor-country-training examples classified as macro-policy, contrary to the later detailed prompt. These are review flags, not evidence of a systematic model error rate.

**Important definitional reconciliation:** The July coding prompt treats skills training, workers, livelihoods, enterprise/SME support as direct jobs signals. Eric's narrower 2023 explicit-jobs definition requires explicit jobs/employment creation in the project title or goals. The next editorial version should carry distinct fields for *explicit-job wording*, *concrete productive channel*, *local implementation*, *confidence*, and *second review*; derived Eric direct/indirect/full views are then reproducible without rewriting source-level evidence.

### What is now built, screened, and still unverified (W6 → W7)

The [integrated W6 bridge](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W6_JOBS_CLASSIFICATION_BRIDGE.md) assigns source-qualified **high / low / uncertain sector proxies** to **1,948 China** and **587 World Bank** projects, then propagates their source IDs through **19,588 distinct project×ADM2×biennium links** to **44,940** W5 area-period observations with exact count conservation.

**Actual project proxy counts:** China **640 / 728 / 580**, World Bank **133 / 36 / 418** (higher / lower / mixed-uncertain productive potential). These are not direct/indirect jobs annotations.

W7 has already completed the first outcome-blind *source-exclusive* support screen:

| Donor | Sector high-only cells | Sector low-only cells | Mixed/uncertain cells | Countries with both clear proxy groups |
| --- | ---: | ---: | ---: | ---: |
| China | 1,807 | 3,020 | 2,356 | **41** |
| World Bank | 564 | 268 | 2,840 | **13** |

The WB proxy comparison fails the precommitted conservative country-support gate; it is **not** legitimate to treat the 2,840 uncertain WB cells as verified non-jobs. The China-sector proxy has enough descriptive support to fit one exploratory adjusted VAC contrast: high-only minus low-only **−0.787 pp**, CI95 [−3.952,+2.379], p=.619. This is explicitly a **sector-proxy diagnostic, NOT a jobs-effect result**, nor a causal estimate.

**Label definition is no longer blocked:** Eric's narrow explicit jobs objective, a concrete indirect productive channel, and their combined view are fixed alongside separate locality/transaction evidence. The exact 2,535-project editorial index and a **120-project** outcome-blind, donor×proxy-stratified review queue are preserved privately. All real jobs classifications remain unreviewed until supported by source text; available frozen W5 Silver contains titles/sectors but not full project objectives/descriptions.

The historical 20-example sample remains a coding exercise (no exact W5 China-ID overlap), with seven targeted review flags and proposed corrected codes saved separately; the original sheet has not been overwritten.

Cross-recipient mapping is independently flagged in W6: 1,022 Chinese project–ADM2 links from 174 projects fall outside the original project recipient country. A source-geometry exclusion changes exposure support; never silently alter the W5 denominator or assume location means implementation.

### The next smallest scientific action

Enrich source text and adjudicate the bounded **120-project** review sample, using the frozen coding definitions and independent reviewer state; quantify how many *verified* direct/indirect/other labels can actually be propagated without unresolved projects contaminating exposure groups. If they support the predeclared first jobs-versus-other VAC design, run it. If not, issue the exact source/evidence coverage gap. We do **not** need another generic classification question to Eric.

For the causal-status and sample gates see [Experimental Design Status](./experimental-design-status.md), and for completed-versus-open empirical work see the [Experiment Surface Catalog](../experiments/experiment-surface-catalog.md).

---

## Current rule

> **Project classification may produce derived empirical annotations. It does not itself produce treatment.**

The current flow is:

```text
source-native project facts
        ↓
versioned derived annotation / review product
        ↓
contract-backed empirical use
        ↓
experiment projection
        ↓
experiment-specific treatment / subgroup / eligibility rule
```

The historical shortcut:

```text
project label
→ propagate to area-period
→ treatment variable
```

should now be read as design history, not as the required data architecture. W6 demonstrates the current boundary: source-native project facts → project-level derived sector proxy → project×area-period identity bridge → experiment-specific exposure projection, with explicit source preservation and count-conservation checks. Employment classifications must undergo separate editorial validation before scientific treatment use.

## What the classification layer may own

A versioned classification/review layer may carry derived labels such as:

```text
jobs_direct
jobs_indirect
jobs_any
locally_implemented
macro_policy_only
```

when those labels have explicit definitions and provenance.

It may also carry:

- source family and exact source project ID;
- stable annotation/review identity;
- source text used for classification;
- source-native fields needed for review;
- prompt/model/configuration provenance where automated assistance is used;
- human review state;
- annotation schema/version;
- uncertainty or review notes.

These are derived empirical/review facts, not causal roles.

## What it must not own

The classification layer should not silently decide:

- treated versus control;
- the causal treatment date;
- a project exposure radius;
- pure-control status from row absence;
- matching eligibility;
- counterfactual family;
- outcome role;
- estimator choice;
- whether an amount is local spending;
- whether two records from different sources are the same project.

Those choices either belong to source-specific evidence/reconciliation products or to the experiment harness.

## Current implementation state

`fcv-empirical-data` already supports a derived annotation review surface over contract-backed Silver investment data.

That surface is deliberately downstream of source-native Silver and can preserve source identity and mapping provenance without mutating the source representation.

The current architecture also explicitly rejects the old idea that convenience fields such as legacy date aliases or jobs categories should be promoted into source truth merely because annotation or historical notebooks used them.

The [W6 sector-proxy bridge](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W6_JOBS_CLASSIFICATION_BRIDGE.md) is now merged into the canonical FCV Experiment Harness and has passed its structural gates. It identifies 2,535 China/WB projects in the W5 source snapshot, propagates source-native sector categories through 19,588 unique project–ADM2–biennium links, and exactly conserves both donors' original counts over 44,940 area-period cells. The screening labels are **high/low/uncertain employment potential**, not observed direct/indirect jobs labels. It preserves mixed sectors and records geographic provenance, including 1,022 China project–area links mapped outside the source recipient country.

The original 20-row June annotation demo and Eric's three jobs measures remain distinct sources of *editorial coding guidance*. Their labels have not been transferred uncritically into W6. A complete reviewed jobs-classification campaign is still a separate research task; no jobs-effect regression or matching output has been produced. The existence of an annotation substrate or sector proxy does not make a label causal or a candidate comparison scientifically valid.

## Source identity matters

The historical protocol often discusses a generic `project_id`.

Under the current architecture, project identity must remain source-qualified.

Conceptually:

```text
source_family + source_project_id
```

comes before any cross-source annotation identity.

Do not assume that:

- equal-looking IDs across AidData and World Bank are the same project;
- similar titles imply a canonical merge;
- World Bank and AidData financial records are additive;
- one source's dates can fill another source's missing dates without an explicit reconciliation product.

## Annotation grain

The historical coding principle of avoiding repeated annotation of every project-location row remains useful: labels that describe the **project concept** should normally be reviewed at project grain.

But the phrase "one row = one project" must remain source-aware.

A source may also contain legitimate child grains or location grains that should not be flattened away for annotation convenience. For example:

- AidData borrower-ownership rows can be many-to-one with a project record;
- GeoGCDF project geometries may contain multiple spatial features;
- source-native location evidence may require separate provenance.

Classification should reference those facts without destroying their natural structure.

## From annotation to experiment use

Suppose a derived review product says:

```text
source_project_id = X
jobs_any = true
```

That does **not** yet imply:

```text
GID × period → treatment = 1
```

An experiment still has to specify, for example:

- which classified projects are eligible;
- which project date/state defines exposure;
- which geography or spatial-membership rule applies;
- how multiple projects are combined;
- how ambiguous geography is handled;
- which period window is used;
- what comparison group is intended;
- whether the annotation is sufficiently validated for the declared scientific role.

Those decisions should be visible in experiment configuration/projection and reports.

## How to read the detailed protocol

Treat the [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md) as:

**REFERENCE / CODING-MANUAL HISTORY**

Its substantive distinctions—direct jobs, indirect jobs, locally implemented, macro-policy, uncertain cases—remain useful candidates for a renewed coding exercise.

Its older language about propagating labels into treatment variables should be translated through the current experiment boundary described here.

## Immediate classification priorities

Classification work should be pulled by a named experiment rather than expanded indefinitely.

A sensible sequence is:

1. name the experiment that needs a jobs/local-implementation distinction;
2. identify the exact current source products and project universe it consumes;
3. freeze the annotation schema and evidence bundle;
4. measure classification coverage and uncertainty;
5. review enough labels to know whether the proposed contrast remains empirically discriminating;
6. only then define the experiment-side treatment/subgroup rule.

## Related pages

- [Research System Architecture](../research-system.md)
- [Current Empirical Data Authority](../data-products/current-data-authority.md)
- [Experimental Design Status](./experimental-design-status.md)
- [Source Data Implementation Status](./source-data-implementation-status.md)
- [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md) — detailed recovered coding reference
