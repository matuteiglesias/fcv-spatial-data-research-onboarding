---
title: Research Workflow and Validation
sidebar_position: 1
description: Collaborator-facing operating model from empirical production through experiment projection, gates, observability, commissioning, estimation, and interpretation.
date: "2026-08-23"
---

# Research Workflow and Validation

The active FCV workflow now has **four distinct scientific stages**:

```text
A. EMPIRICAL PRODUCTION
   What was measured?

B. EXPERIMENT SPECIFICATION
   How will this measurement be used scientifically?

C. VALIDITY + OBSERVABILITY
   Is the design coherent, and what known signal can it recover?

D. SUBSTANTIVE ESTIMATION
   What does the declared gated experiment estimate?
```

This is a refinement of the earlier infrastructure / experiment / gate model. The major new capability is that **instrument characterization is now executable rather than just a methodological aspiration**.

See [Research System Architecture](../research-system.md) and [Africa Observability Lab](../experiments/observability-lab.md).

## A. Empirical production

[`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) owns faithful source facts and reusable empirical measurements.

Generic path:

```text
authoritative source
→ immutable source snapshot
→ source-native Silver
→ explicit geography / time linkage when needed
→ reusable measurement
→ DatasetRef / MeasurementContract / CoverageContract / RunManifest
→ QA / parity / integration evidence
```

This layer may own source identities, natural grains, source variable meaning, geography membership, temporal semantics, coverage, and reproducible transformations.

It must not silently own:

```text
treatment
control
outcome role
covariate role
counterfactual
post-treatment timing
matching rule
estimator
causal interpretation
```

### Empirical meaning can be reusable without being scientific role

For DHS:

```text
HV206
→ codebook-backed empirical meaning
→ household electricity access
```

is a legitimate upstream measurement.

Whether electricity access becomes an outcome, control, subgroup variable, or unused measurement belongs downstream.

## B. Contract-backed experiment specification

A semantic empirical measurement crosses into the harness as:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
        ↓
validated EmpiricalMeasurementBundle
```

The loader validates bytes, lineage, grain, geography, periods, and coverage before exposing the table.

It does not zero-fill, infer controls, shift periods, or select taxonomies.

### Measurement projection

The experiment explicitly declares:

- which measurement is used;
- native selectors/categories;
- value column;
- experiment role;
- timing offset;
- downstream transform if any.

Example:

```text
ACLED measurement
selector = Violence against civilians
value = fatalities
role = outcome
period offset = +1
```

### Treatment derivation

Treatment can now be derived downstream from a contracted empirical measurement:

```text
empirical measurement
→ experiment projection
→ eligibility window
→ declared threshold/rule
→ treated / control / unavailable
```

Unavailable measurement does not silently become control.

## Coverage / absence firewall

A missing row is not a universal zero.

The shared coverage contract can distinguish states such as:

- `unknown`;
- `zero_within_verified_coverage`;
- `not_observed`;
- `not_applicable`.

The projection layer retains auditable states:

```text
observed
structural_zero
outside_coverage
unresolved
```

Unknown absence stays unresolved.

## Geography, time, and grain stay explicit

### Geography

Contracted geography identity must match exactly or be connected through an explicit linkage artifact.

### Time

Timing offsets use shared `PeriodIndex` / declared period semantics rather than string arithmetic.

### Grain

Projects, events, households, respondents, clusters, and area-period measurements need not be flattened into one universal table.

Cross-grain scientific linkage is explicit downstream work.

## C1. Experiment validity gates

Once a design is declared, gate it before interpreting estimates.

### Data / lineage integrity

- exact artifact identity;
- key/grain coherence;
- traceable source/run lineage;
- missing records distinguishable from present-but-missing values.

### Timing

- source dates retain native meanings;
- treatment and outcome timing are declared;
- ambiguous timing is visible.

### Treatment / comparison support

- treated/control counts;
- within-period / within-stratum support;
- collapse or near-universality;
- effective identifying sample rather than raw rows.

### Outcome coverage / sparsity

- outcome availability after timing projection;
- sparse/zero-inflated behavior;
- structural-zero authority.

### Pretreatment balance / selection

- pre-outcome differences;
- selection into future/planned locations;
- support versus comparability tradeoffs.

### Falsification

- prior-outcome placebo;
- shifted/fake timing;
- randomized labels;
- negative controls;
- alternative pretreatment windows.

### Spatial / survey sensitivity

Depending on the design:

- geolocation precision;
- boundary ambiguity;
- displacement uncertainty;
- radius/bandwidth sensitivity;
- survey linkage;
- PSU/stratum/weight implications;
- semantic comparability / unmapped survey codes.

A GREEN gate means permission to investigate further, not causal validation.

## C2. Synthetic observability

The harness now has a reusable observability engine rather than one hard-coded synthetic recovery check.

The scientific question is:

> **If known truth of size δ existed in the data/design structure we actually have, how reliably and how accurately would our apparatus recover it?**

For a caller-declared effect-size grid, the E2 reference instrument records:

- injected truth;
- estimate / SE / interval;
- sign recovery;
- rejection;
- joint sign + rejection recovery;
- CI coverage;
- recovery error;
- sample and cluster counts;
- outcome SD;
- treatment support.

The same stochastic residual draw is paired across effect sizes within a repetition so adjacent cells differ by the known injected truth rather than unrelated simulation noise.

### Synthetic null

`delta = 0` is first-class.

It calibrates rejection and interval behavior around **known injected zero truth**. It is not a declaration that the real treatment effect should equal zero.

### Output

The instrument produces:

```text
repetition_results.csv
effect_size_summary.csv
detection_curve.csv
null_calibration_summary.csv
```

The empirical frame itself is not written by the output function.

## C3. External commissioning and positive controls

Synthetic recovery is necessary but not sufficient.

The Observability Lab can also ask whether the rebuilt instrument reproduces externally known behavior.

A `CalibrationBenchmarkSpec` declares `purpose = calibration` and one of:

- commissioning;
- positive control;
- negative control;
- synthetic injection;
- measurement agreement.

### Recovery levels

```text
Level 1 — pipeline recovery
Level 2 — qualitative known behavior
Level 3 — quantitative compatibility
```

Levels are independent. Exact numeric parity should not be demanded when source/design equivalence does not justify it.

### First commissioning sequence

The current queue is:

```text
auxiliary empirical input seam (#16)
        ↓
Nigeria DHS 2018 electricity = 59.4%
        ↓
additional official DHS statistic if diagnostic value is high
        ↓
Briggs (2017) published positive control
        ↓
reassess instrument bottleneck
```

Breckner & Sunde is deferred until regular-grid geography and monthly/subannual time semantics exist as shared capabilities.

See [Calibration Benchmark Catalog](../experiments/calibration-benchmark-catalog.md).

## Calibration input firewall

Calibration benchmarks may need both semantic measurements and source-native auxiliary facts.

Example:

```text
semantic input: dhs.household.electricity_access
auxiliary fact: HR Silver HV005 weight
```

The desired generic seam is:

```text
EmpiricalMeasurementBundle
+
provenance-validated auxiliary DatasetRef / RunManifest artifact
        ↓
source-specific benchmark adapter
```

The adapter—not the kernel—owns joins, weighting, denominators, and source-specific transformations.

Protected data remains local; benchmark outputs are sanitized aggregate diagnostics and provenance identities.

## Instrument-health report

A calibration suite can summarize separate dimensions:

- source / contract integrity;
- commissioning;
- positive controls;
- negative controls;
- synthetic detectability;
- measurement agreement;
- known limitations.

There is deliberately no aggregate score.

A failure in one dimension should remain visible because it tells us which part of the scientific instrument needs attention.

## D. Estimation and interpretation

Only after empirical integrity, experiment specification, validity gates, and appropriate observability/commissioning evidence should a substantive estimator result be interpreted deeply.

The estimator output remains specific to:

- the declared empirical products;
- experiment projections;
- eligibility/timing;
- comparison design;
- model family;
- uncertainty procedure.

A coefficient is not an architecture test, and an architecture test is not a coefficient.

## Evidence ladder

The current system should communicate at least six evidence levels:

```text
1. software / synthetic implementation acceptance
2. real empirical materialization + QA
3. real experiment gates
4. synthetic observability characterization
5. external commissioning / known-behavior recovery
6. substantive estimator result
```

The ordering is not mechanically linear for every project, but the meanings should never be conflated.

## Reference lanes

### Current contracted panel lane

```text
GeoGCDF / investment measurement
+ ACLED measurement
→ fully contracted experiment
→ gates
→ estimator
→ observability grid
```

Current real durable-artifact run is still pending in the human ledger.

### DHS lane

```text
HR + GC + GPS
→ integration QA
→ semantic household measurements
→ official DHS report commissioning
→ cross-grain exposure experiment
→ survey-design-aware gates / estimator
```

This is now the preferred sequence: commission the survey instrument before a complex substantive DHS exposure model.

### Recovered calibration lane

The historical WBad/WBkg → ACLED E2 checkpoint remains genuine real-data calibration evidence, including 24,852 area-periods / 4,142 GIDs and the old 30/30 `0.20 SD` injection recovery.

It is not automatically evidence for the newer current-artifact contracted path.

## Operating principle

The workflow should increasingly answer three questions before asking for a substantive coefficient:

1. **Do we know exactly what the measurement is?**
2. **Do we know exactly how the experiment uses it?**
3. **Do we know what this apparatus can recover when truth is known?**

That is the core operating logic of the rebuilt FCV scientific instrument.
