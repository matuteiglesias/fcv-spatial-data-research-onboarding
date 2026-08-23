---
title: Current Research Status
sidebar_position: 1
description: Current state of the FCV research system, empirical architecture, experiment surfaces, and immediate next steps.
date: "2026-08-23"
---

# Current Research Status

The FCV spatial-data project is now in a different phase from the archive-recovery work documented earlier in this site.

The recovered 2021–2023 pipeline remains important research memory and parity evidence, but the active system is being rebuilt around explicit contracts and a strict boundary between:

```text
source facts / empirical measurements
                ↑
        FCV empirical domain
════════════════════════════════
        scientific-use choices
                ↓
         experiment harness
```

The project now has reusable foundations below FCV, source-native empirical production inside FCV, and contract-backed scientific use in the harness.

See [Research System Architecture](./research-system.md) for the ownership map.

## Current system state

### 1. Reusable empirical contracts are external to FCV

[`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) is now an independently consumable package rather than a local FCV abstraction.

It defines the shared typed envelope for:

- source snapshots and file hashes;
- dataset identity;
- observation grain;
- geography and period identity;
- coverage and absent-row semantics;
- measurement contracts;
- QA results;
- run manifests.

It deliberately does not define treatment/control status, matching, estimators, source-specific ontologies, or FCV research roles.

### 2. Geography/time infrastructure is external to FCV

[`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) owns reusable geography authority, analytical geometry, period indexing, spatial membership, source registration, and related provenance.

FCV code consumes those capabilities rather than maintaining its own GADM engine, point-in-polygon implementation, or local period arithmetic.

### 3. FCV now has a dedicated empirical-domain repository

[`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) is the FCV layer between the reusable foundations and the experiment harness.

Its current architectural role is:

```text
raw / authoritative source
        ↓
source snapshot + source identity
        ↓
source-native durable Silver
        ↓
shared geography / time machinery where needed
        ↓
contract-backed measurements
        ↓
QA / coverage / provenance / parity evidence
```

It owns empirical facts and measurements, not causal design.

The repository now includes an empirical kernel plus several source-specific verticals.

#### Investment sources

Implemented source-native paths include:

- AidData CLG-LMIC relational Silver;
- World Bank Projects API Silver;
- AidData GeoGCDF project-geometry Silver and contracted commitment-period measurements.

The source systems remain independent. The empirical repository does not pre-harmonize them into one treatment table, allocate project finance across locations, or infer that project presence is intrinsically “treated.”

#### ACLED

The ACLED path now preserves source-native event rows in Silver, delegates geography and period assignment to shared infrastructure, and builds a sparse contract-backed area-period-native-event measurement.

Important rebuilt semantics include:

- no default `GEO_PRECISION == 1` filter in Silver;
- zero-fatality events remain events;
- ambiguous geographic membership remains explicit and is not duplicated into several areas;
- native ACLED event taxonomy survives into the measurement layer;
- sparse row absence remains unknown unless an explicit coverage contract licenses structural zero interpretation.

#### Survey substrate

A survey-native substrate is currently in progress for DHS/Afrobarometer-shaped data.

The design preserves survey/release identity, observation grain, sampling/design facts, variable metadata, source weights, and geography-linkage metadata without forcing respondents, households, clusters, or EAs into the recovered area-period panel architecture.

This work is intentionally infrastructure only; real DHS/Afrobarometer ingestion remains separate future work.

### 4. The experiment harness now consumes contracted empirical measurements

[`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) now has a validated empirical input boundary:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
        ↓
validated empirical bundle
        ↓
explicit measurement projection
        ↓
experiment-specific scientific use
```

The harness verifies artifact identity, lineage, declared grain, geography, periods, and coverage before using an empirical measurement.

Loading does not fill missing rows, infer zeros, or assign treatment/outcome roles.

### 5. Scientific roles now live downstream

The harness has an explicit measurement-projection layer for choosing how a contracted empirical measurement is used.

For ACLED, for example, the experiment can declare:

```text
selector    native_event_type = Violence against civilians
value       fatalities
role        outcome
period      +1 relative to treatment
```

Those are experiment choices, not properties of the upstream ACLED dataset.

The current harness also supports deriving treatment downstream from a contracted empirical measurement using an explicit rule rather than requiring the empirical producer to materialize treatment/control labels.

That is a major architectural change from the recovered pipeline.

## What happened to the recovered `GID × TimePeriod` panel?

It remains useful, but its role has changed.

The recovered area-period surfaces were essential for reconstructing the old design and for running the first real-data E1/E2 calibration sequence. They remain:

- historical evidence about the previous empirical system;
- a useful calibration/reconstruction surface;
- parity evidence for rebuilt measurements;
- a source of scientific-design insight.

They are no longer the only conceptual foundation for active FCV data engineering.

New empirical infrastructure preserves natural source grains and only constructs area-period measurements when a named measurement actually requires that grain.

This distinction matters especially for surveys and project-location data.

## Evidence already obtained

The project currently has two different evidence tracks.

### Recovered/legacy-backed real-data calibration

The reconstructed area-period system was taken through explicit E1/E2 real-data checkpoints before the current fully contracted upstream path existed.

That work established, among other things:

- an explicit analysis-universe checkpoint;
- explicit ACLED zero/absence policy for that recovered surface;
- a predeclared WB→ACLED calibration matrix;
- treatment/control support diagnostics;
- outcome sparsity checks;
- pretreatment balance/placebo diagnostics;
- synthetic signal-recovery checks;
- real calibration estimates for the declared cells.

Those results remain informative about the recovered empirical design. They should not be described as if they were produced from the newer source-native contract-backed ACLED + investment artifacts.

### Current contract-backed architecture

The newer empirical boundary, ACLED projection path, and fully contracted treatment/outcome experiment construction have synthetic end-to-end acceptance in the codebase.

A canonical real-data run over the newly materialized contract-backed upstream artifacts is still the next evidence transition to make explicit in the human-facing research record.

The [Validation Status](./data-products/validation-status.md) page tracks this distinction.

## Current scientific questions

The architectural work removes hidden assumptions, but it does not answer the scientific questions for us.

Important open decisions include:

- which investment measurement should define a particular treatment candidate;
- which source families should be compared or analyzed separately;
- which project dates or states should define exposure timing for each design;
- whether administrative-area, project-location, local-radius, or respondent-linked exposure is appropriate for a given outcome;
- which ACLED/UCDP outcome definitions deserve primary status;
- whether planned/future project locations, never-treated locations, matched controls, or longitudinal contrasts provide the strongest counterfactual for a given question;
- how jobs-related project classifications should be validated and used without turning annotation convenience into source truth;
- how DHS and Afrobarometer should be linked to project exposure at their natural survey grains;
- which estimator family is appropriate after measurement, support, timing, and falsification diagnostics are known.

Those choices belong in experiment design, not upstream source materialization.

## Immediate next work

The highest-value next sequence is now:

1. finish the minimal survey-native substrate without adding real survey ingestion or experiment semantics;
2. execute and record at least one real end-to-end run using current contract-backed empirical artifacts rather than legacy aggregate inputs;
3. compare the new measurement/projection evidence with the recovered E1/E2 calibration evidence without demanding historical coefficient equality;
4. update the human validation ledger with real contracted projection counts, support, coverage, and gate results;
5. continue investment/source and survey verticals only where they unlock a concrete scientific experiment;
6. keep treatment, outcome, timing, eligibility, and counterfactual choices explicit in harness-side experiment specifications;
7. update this site when those changes materially alter collaborator understanding or research readiness.

## How to continue reading

For the active system:

1. [Research System Architecture](./research-system.md)
2. [Research Workflow and Validation](./continuation/experimental-infrastructure.md)
3. [Validation Status](./data-products/validation-status.md)
4. [Experimental Design and Regression Pipeline](./continuation/experimental-design-regression-pipeline.md)

For recovered/historical context:

- [Archive Map](./archive-map.md)
- [2023 Duke Overview](./main-pipeline/duke-overview.md)
- [Dataset Inventory](./data-products/dataset-inventory.md)
- [Recovery Plan](./recovery-plan.md)

## Current interpretation policy

Two rules should govern the active phase:

> **A successful materialization is not automatically an experiment.**

and:

> **A successful experiment run is not automatically a causal result.**

The purpose of the new architecture is to make each transition visible enough that collaborators can see exactly what evidence has been established and which scientific choices are still being made.
