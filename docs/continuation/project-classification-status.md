---
title: Project Classification Status
sidebar_position: 3
description: Current boundary and implementation status for project annotation and jobs-related classification.
last_verified: "2026-08-23"
---

# Project Classification Status

**Document status: CURRENT CLASSIFICATION BOUNDARY OVERLAY**  
**Last verified: 2026-08-23**

The detailed [Annotation and Project Classification Protocol](./annotation-project-classification-protocol.md) remains useful as a recovered coding manual for jobs-related and local-implementation concepts.

Its downstream interpretation has changed with the current architecture.

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

should now be read as design history, not as the required data architecture.

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

A full current jobs-classification campaign is still a separate research task. The existence of an annotation substrate does not imply that labels are complete, research-validated, or ready to define a canonical experiment.

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
