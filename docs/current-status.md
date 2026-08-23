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

See [Research System Architecture](./research-system.md) for the ownership map. For a collaborator-facing inventory of usable empirical objects, see the [Empirical Product Catalog](./data-products/product-catalog.md). For currently executable or blocked research questions, see the [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md).

## Current system state

### 1. Reusable empirical contracts are external to FCV

[`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) is now an independently consumable package rather than a local FCV abstraction.

It defines the shared typed envelope for source snapshots, dataset identity, observation grain, geography/time identity, coverage/absence semantics, measurement contracts, QA, and run manifests.

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

#### Investment sources

Implemented source-native paths include:

- AidData CLG-LMIC relational Silver;
- World Bank Projects API Silver;
- AidData GeoGCDF project-geometry Silver and contracted commitment-period measurements.

The source systems remain independent. The empirical repository does not pre-harmonize them into one treatment table, allocate project finance across locations, or infer that project presence is intrinsically treated.

#### ACLED

The ACLED path preserves source-native event rows in Silver, delegates geography and period assignment to shared infrastructure, and builds a sparse contract-backed area-period-native-event measurement.

Important rebuilt semantics include:

- no default `GEO_PRECISION == 1` filter in Silver;
- zero-fatality events remain events;
- ambiguous geographic membership remains explicit and is not duplicated into several areas;
- native ACLED event taxonomy survives into the measurement layer;
- sparse row absence remains unknown unless an explicit coverage contract licenses structural zero interpretation.

#### Survey substrate and DHS

A reusable survey-native substrate is **implemented** for DHS/Afrobarometer-shaped empirical systems, and DHS has now completed its first integrated empirical mini-wave.

The current DHS stack includes:

- **Household Recode (HR)** source-native Silver with protected-source provenance, survey/design facts, and a truthful physical grain contract based on unique `source_row_id` while preserving possibly missing/duplicate source `household_id` values as anomalies;
- **Geospatial Covariates (GC)** cluster-level Silver with optional long measurement view, explicit temporal semantics, and no GID/area-period coercion;
- **GE/GPS geography** cluster Silver with reported coordinates, displacement metadata, survey/GPS linkage auditing, and `reported_coordinate_membership` through shared spatial infrastructure without claiming the public coordinate is the true location;
- **DHS integration QA** across HR + GC + GPS, checking one-survey identity, declared grain truthfulness, cluster support, source-only clusters, `DHSCLUST` versus `DHSID`, and unresolved textual-ID normalization such as `001` versus `1` without creating a joined mega-table;
- an initial **codebook-backed DHS-VII household variable registry** and derived semantic measurement product.

The first registered household measurements are:

```text
HV206 → dhs.household.electricity_access
HV270 → dhs.household.wealth_quintile
HV201 → dhs.household.drinking_water_source_code
```

These are reusable empirical meanings, not experiment roles. Electricity access is not automatically the FCV outcome; wealth quintile is explicitly survey-relative rather than an absolute wealth scale; water-source codes are preserved without inventing an improved/safe-water harmonization.

The derived semantic product is materialized at `source_row_id × measurement_id`, carries explicit missing/unmapped measurement states, and emits `MeasurementContract` evidence while remaining upstream of treatment/outcome/covariate choices.

GitHub acceptance remains synthetic. A real protected DHS source run and a current harness-side DHS experiment have not yet been recorded here.

The next DHS problem is therefore **protected-source integrated acceptance and scientific-use projection**, not source ingestion, basic HR/GC/GPS linkage engineering, or the total absence of variable semantics.

Afrobarometer remains at the earlier stage: the reusable substrate exists, but source-native respondent/EA ingestion has not yet been implemented.

See the [DHS Empirical Stack](./data-products/products/dhs-overview.md) and [DHS Household Semantic Measurements](./data-products/products/dhs-household-measurements.md).

### 4. The experiment harness now consumes contracted empirical measurements

[`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) has a validated empirical input boundary:

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

The harness verifies artifact identity, lineage, declared grain, geography, periods, and coverage before scientific use. Loading does not fill missing rows, infer zeros, or assign treatment/outcome roles.

### 5. Scientific roles still live downstream

The harness has an explicit measurement-projection layer for choosing how a contracted empirical measurement is used.

For ACLED, an experiment can declare:

```text
selector    native_event_type = Violence against civilians
value       fatalities
role        outcome
period      +1 relative to treatment
```

Those are experiment choices, not properties of the upstream ACLED dataset.

The same principle now matters for DHS semantic measurements. The empirical layer may establish that `HV206` means household electricity access under a codebook-backed DHS-VII definition. The experiment layer must still decide whether that measurement is an outcome, control, subgroup variable, or unused.

## What happened to the recovered `GID × TimePeriod` panel?

It remains useful, but its role has changed.

The recovered area-period surfaces were essential for reconstructing the old design and for running the first real-data E1/E2 calibration sequence. They remain historical evidence, calibration/reconstruction surfaces, parity material, and a source of scientific-design insight.

They are no longer the only conceptual foundation for active FCV data engineering.

New empirical infrastructure preserves natural source grains and only constructs area-period measurements when a named measurement actually requires that grain. This distinction matters especially for surveys and project-location data.

## Evidence already obtained

The project currently has two different evidence tracks.

### Recovered/legacy-backed real-data calibration

The reconstructed area-period system was taken through explicit E1/E2 real-data checkpoints before the current fully contracted upstream path existed.

That work established an explicit analysis universe, ACLED absence policy, a predeclared WB→ACLED calibration matrix, treatment/control support, outcome sparsity, placebo/balance diagnostics, synthetic signal recovery, and real calibration estimates.

Those results remain informative about the recovered empirical design. They should not be described as if they were produced from the newer source-native contract-backed ACLED + investment artifacts.

### Current contract-backed architecture

The newer empirical boundary, ACLED projection path, and fully contracted treatment/outcome experiment construction have synthetic end-to-end acceptance in the codebase.

For DHS, synthetic acceptance now covers not only HR/GC/GPS source verticals but also cross-product integration QA and the initial codebook-backed semantic measurement path.

That establishes:

- the source products can be checked against one survey identity without a lossy inner join;
- declared `DatasetRef` grains are tested against actual rows;
- source-only cluster support and suspicious ID normalization remain visible;
- a small set of DHS household variables can receive documented empirical meaning without acquiring experiment roles;
- missing and unsupported source codes remain explicit rather than becoming zeros.

It does **not** establish that a protected real DHS release has passed the integrated gate or that a DHS scientific experiment is ready.

The next DHS evidence transition is one local protected survey with HR + GE/GPS + GC, reviewed through non-sensitive hashes/counts/support/QA plus semantic-measurement diagnostics.

The [Validation Status](./data-products/validation-status.md) page tracks these distinctions.

## Current scientific questions

Important open decisions now include:

- which investment measurement should define a particular treatment candidate;
- which source families should be compared or analyzed separately;
- which project dates or states should define exposure timing for each design;
- whether administrative-area, project-location, local-radius, or respondent-linked exposure is appropriate for a given outcome;
- how jobs-related project classifications should be validated and used without turning annotation convenience into source truth;
- which concrete DHS survey/release should anchor the first forward-looking survey experiment;
- whether one of the now-defined household measurements—electricity access, survey-relative wealth quintile, or source water code—is scientifically useful for that question, and in what experiment role;
- whether additional DHS variables/recode families are actually needed before the first experiment;
- how household observations should project through cluster-level GC and displaced GPS geography without hiding grain or displacement uncertainty;
- whether reported-point, displacement-aware candidate geography, or another exposure strategy is appropriate;
- how source DHS weights/PSU/strata should enter the chosen estimator;
- how Afrobarometer should later be linked to exposure at respondent/EA grain;
- which estimator family is appropriate after measurement, support, timing, and falsification diagnostics are known.

Those choices belong in experiment design, not upstream source materialization.

## Immediate next work

The highest-value next sequence is now:

1. execute and record at least one real end-to-end current contract-backed panel run, with GeoGCDF → ACLED the strongest current reference candidate;
2. pick one named DHS survey/release and concrete scientific question, run HR + GC + GPS locally on protected source files, produce the integration QA report, materialize the codebook-backed household measurements, and record only non-sensitive provenance/support/QA diagnostics;
3. decide whether the initial household measurement registry is sufficient for that question or whether one narrowly justified additional codebook-backed definition/recode is needed;
4. implement the smallest harness-side household/cluster projection needed for that DHS question, with an explicit displacement-aware exposure policy and survey-design use;
5. compare new measurement/projection evidence with recovered evidence without demanding historical coefficient equality;
6. build World Bank geospatial, jobs annotation, Afrobarometer, or other source work only when it unlocks a named scientific limitation;
7. keep treatment, outcome, timing, eligibility, counterfactual, survey-weight, comparability, and uncertainty choices explicit downstream;
8. update the product and experiment catalogs whenever a durable product or evidence-producing run changes collaborator understanding.

## How to continue reading

For the active system:

1. [Research System Architecture](./research-system.md)
2. [Empirical Product Catalog](./data-products/product-catalog.md)
3. [DHS Empirical Stack](./data-products/products/dhs-overview.md)
4. [DHS Household Semantic Measurements](./data-products/products/dhs-household-measurements.md)
5. [Experiment Surface Catalog](./experiments/experiment-surface-catalog.md)
6. [Research Workflow and Validation](./continuation/experimental-infrastructure.md)
7. [Validation Status](./data-products/validation-status.md)
8. [Experimental Design Status](./continuation/experimental-design-status.md)

For recovered/historical context:

- [Archive Map](./archive-map.md)
- [2023 Duke Overview](./main-pipeline/duke-overview.md)
- [Dataset Inventory](./data-products/dataset-inventory.md)
- [Recovery Plan](./recovery-plan.md)

## Current interpretation policy

Three rules should govern the active phase:

> **A successful materialization is not automatically an experiment.**

> **A successful experiment run is not automatically a causal result.**

> **Synthetic acceptance is not a substitute for protected real-source acceptance.**

For DHS there is now a fourth useful distinction:

> **A codebook-backed empirical meaning is not automatically an experiment role.**

The purpose of the architecture is to make each transition visible enough that collaborators can see exactly what evidence has been established and which scientific choices are still being made.
