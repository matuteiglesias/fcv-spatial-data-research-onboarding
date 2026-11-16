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

## November 2026: current project classification and W8 usage

The source-qualified [W6–W7 classification release](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W7_CLASSIFICATION_CONTROL.md) is now **integrated into the Experiment Harness**. It preserves **2,535 projects** (1,948 China; 587 WB) through **19,588 project–ADM2–financing-biennium links**, with exact preservation of original donor counts in **44,940** W5 cells.

**Two classification layers must remain distinct:**

| Layer | What it means | November 16 state |
| --- | --- | --- |
| **Native sector → candidate channel** | Deterministic six-family harmonization from existing native sectors | All **2,535 mapped**, strict parity; 100-project nested outcome-blind audit found **0 clear rule errors and 2 title-level semantic ambiguities** |
| **Eric's explicit jobs objective** | Project source evidence states an employment objective | **0/2,535 reviewed** in current canonical ledger |
| **Indirect local paid-employment mechanism** | Project purpose/activity supports local work channel | Separate evidence field; not verified by sector alone |
| **Verified other investment / unclear** | Documented non-jobs channel versus unresolved/mixed evidence | Mixed/unknown retained; no silent conversion to negatives |

The earlier 20-row annotation demonstration and 120-row editorial calibration queue are not the entire research universe. The *nested 100-project audit* validated the **deterministic sector rules**, not actual realized jobs or a population error bound.

### W7 and W8 have both used the sector proxies

The frozen **W7 broad candidate sector** categories are enterprise, physical infrastructure and education/skills; the narrower sensitivity retains enterprise and infrastructure only. World Bank native multi-channel projects can remain mixed rather than forced into a binary class.

The full-panel W7 FE screen gave **China candidate-only minus other-only −0.025 pp** (p=.986); **WB −1.502 pp** (p=.552). In the subsequent **W8 ADM2 J/O/N** experiment, those sector categories form J (candidate-only) and O (other-only) only for *donor-exclusive* areas. N is neither China nor WB source-recorded in or before the finance period within the observed panel, and both/mixed groups stay separate. The country×period common-support strata apply identical J-target weights to J/O/N. These samples have been **constructed and fitted**: China 128 complete strata / 39 countries, WB 11 / 10.

See [Current ADM2 J/O/N results](../experiments/adm2-jon-comparisons-2026-11.md) for the sample sizes, standardized means, robustness and baseline-risk findings.

**Scientific boundary:** these are useful empirical **sector-composition** comparisons; they are not source-reviewed explicit/indirect paid employment or observed wage intensities. The current full-universe ledger can receive future versioned editorial evidence without changing past W7/W8 frozen results.

**Source geography qualification:** W6 flags 1,022 China project–area-period links involving 174 projects outside the recorded recipient country; those flags remain explicit rather than silently altering the denominator. Full descriptions/objectives are absent from the current Silver source tables, so an independent source-text path remains the prerequisite for actual employment annotations.


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

The original 20-row June annotation demo and Eric's three jobs measures remain distinct sources of *editorial coding guidance*. Their labels have not been transferred uncritically into W6. A complete reviewed jobs-classification campaign remains a separate task. This paragraph records the historical W6 position; the subsequent W8 **sector-proxy** ADM2 common-support comparisons are now complete (see the current section above). The existence of an annotation substrate or sector proxy does not make a label causal or a candidate comparison scientifically valid.

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
