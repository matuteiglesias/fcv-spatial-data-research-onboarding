---
title: Research Workflow and Validation
sidebar_position: 1
description: Collaborator-facing operating model from source-backed empirical measurements through experiment projection, gates, estimation, and interpretation.
date: "2026-08-23"
---

# Research Workflow and Validation

The active FCV workflow is organized around a boundary that is now both conceptual and executable:

```text
source facts / empirical measurements
                ↑
        FCV empirical domain
════════════════════════════════
        scientific-use choices
                ↓
         experiment harness
```

The older three-part distinction between “empirical infrastructure / experiment specification / validation gates” remains useful, but the implementation has matured enough that collaborators should now see **which repository owns each transition**.

For the repository-level map, see [Research System Architecture](../research-system.md).

## 1. Reusable foundations

Two external repositories provide infrastructure that FCV consumes but does not own.

### `empirical-data-contracts`

The contract package provides typed shared objects for:

- source/file identity and hashes;
- dataset identity and authority;
- observation grain;
- geography and period identity;
- coverage and row-absence semantics;
- measurements;
- QA;
- run manifests.

It describes empirical objects. It does not decide what is a treatment, outcome, control, counterfactual, or estimator input.

### `spatial-data-foundation`

The spatial/time foundation provides reusable:

- geography authority;
- analytical geometry;
- source registration;
- spatial membership;
- period indexing;
- related materialization provenance.

FCV code should select and use those capabilities, not reimplement them locally.

## 2. FCV empirical measurement production

[`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) owns the empirical-domain layer.

Its job is to preserve and materialize source facts faithfully enough that several experiments can reuse them without rebuilding source ingestion.

A useful generic path is:

```text
raw / authoritative source
        ↓
immutable source snapshot
        ↓
source-native Silver
        ↓
explicit geography / period linkage where required
        ↓
contract-backed empirical measurement
        ↓
QA / coverage / provenance / parity evidence
```

### What this layer may own

Examples include:

- source family, release, snapshot, and hashes;
- source-native project/event/respondent identifiers;
- source-native variable names and meanings;
- project geometry or event coordinates;
- survey design facts such as PSU/EA/cluster/weight fields;
- natural observation grain;
- source dates and statuses with their native meanings;
- explicit geography memberships and unresolved states;
- explicit period memberships;
- measurement aggregation rules when the measurement itself requires aggregation;
- coverage and row-absence semantics supported by evidence;
- durable output identity and QA.

### What this layer must not own

It should not silently decide:

```text
treatment
control
outcome role
covariate role
counterfactual
post-treatment timing
matching rule
fixed effects
estimator
causal interpretation
```

Those are scientific-use semantics.

## 3. Contract-backed empirical input boundary

The experiment harness does not ingest ACLED files, AidData workbooks, World Bank API pages, or survey raw files directly.

A current empirical measurement crosses the boundary as:

```text
DatasetRef
+ MeasurementContract
+ CoverageContract
+ RunManifest
+ durable artifact
        ↓
validated EmpiricalMeasurementBundle
```

Before exposing the measurement to experiment code, the harness validates the artifact and its declared lineage/structure.

The current boundary checks include:

- output bytes match the declared dataset hash;
- the measurement's upstream source dataset is represented in run lineage;
- output grain matches the measurement's declared grain;
- declared grain keys exist in the actual table;
- geography contracts agree exactly;
- period-scheme contracts agree exactly;
- the persisted coverage sidecar agrees with the measurement contract.

Loading is deliberately **not** experiment projection.

The loader does not:

- expand a sparse lattice;
- call `fillna(0)`;
- infer “no event” from row absence;
- infer “no project” from row absence;
- infer untreated/control state;
- select source taxonomies;
- shift outcome timing.

## 4. Experiment projection

After a measurement has crossed the empirical boundary, the harness can make explicit scientific-use choices.

A generic projection can declare:

```text
which empirical measurement to use
which native category / selector to retain
which normalized value column to use
what role it plays in this experiment
what timing offset applies
what transform, if any, is applied downstream
```

For example, one ACLED experiment can state:

```text
measurement   ACLED area-period-native-event measurement
selector      native_event_type = Violence against civilians
value         fatalities
role          outcome
period offset +1
```

A pre-outcome projection may use the same measurement with `-1` timing.

Another experiment could select a different native taxonomy member without changing upstream ACLED Silver or Gold.

## 5. Treatment is now explicitly downstream

The same principle applies to investment data.

An upstream empirical product may state that a project or area-period measurement has a value. It should not automatically say that the observation is “treated.”

The harness can instead declare a treatment derivation such as:

```text
empirical measurement
        ↓
explicit projection
        ↓
explicit eligibility window
        ↓
explicit derivation rule
        ↓
treated / control / unavailable experiment state
```

For the current fully contracted panel machinery, an example rule is a declared threshold such as `measurement > 0`.

Crucially:

- unavailable treatment measurements are not silently converted to controls;
- treatment eligibility is an experiment rule, not an upstream coverage claim;
- the derivation and its parameters remain inspectable downstream.

## 6. Coverage and absence firewall

Coverage is one of the most important scientific boundaries in the system.

A sparse empirical measurement can have different row-absence meanings.

The shared coverage contract can distinguish, for example:

- `unknown`;
- `zero_within_verified_coverage`;
- `not_observed`;
- `not_applicable`.

The experiment projection layer must respect that declaration.

Current projection logic keeps requested observations in one of four auditable states:

```text
observed
structural_zero
outside_coverage
unresolved
```

A missing sparse row becomes a structural zero only when the upstream contract explicitly licenses zero within independently verified support and the requested time belongs inside that support.

Unknown absence never becomes zero merely because zero would be convenient for a regression.

## 7. Geography, time, and grain

The current architecture also avoids three hidden coercions common in older pipelines.

### Geography

A label that looks similar is not enough. Contracted geography identity is checked explicitly.

If an experiment uses a legacy analysis-unit identifier such as `GID` while the empirical measurement uses a new `geo_uid`, the relationship must be provided through an explicit linkage artifact rather than guessed.

### Time

Timing offsets use the shared `PeriodIndex` with a declared `PeriodScheme`.

A `+1` outcome means one declared shared period, not an ad hoc year-string shift.

### Grain

Different empirical families may have different natural grains.

The system does not require:

```text
projects
ACLED events
DHS households
Afrobarometer respondents
```

all to become the same area-period table before they are considered valid empirical data.

Cross-grain linkage belongs in an explicit experiment or measurement construction.

## 8. Validation and calibration gates

Once an experiment has explicit empirical inputs and scientific-use rules, the next question is whether the design is measurable and interpretable enough to justify estimation.

A gate can pass, warn, or fail without implying that the substantive hypothesis is true or false.

### Data and lineage integrity

Ask:

- are the empirical artifacts exactly the declared bytes?
- are analysis keys unique where expected?
- are measurement grains and experiment linkage keys coherent?
- are missing records distinguishable from present-but-missing values?
- are source and output identities traceable?

Infrastructure failures should block scientific interpretation.

### Timing

Ask:

- is treatment status defined at the correct observation period/date?
- are approval, commitment, implementation, closing, completion, and survey dates kept distinct where required?
- are treatment and post-treatment outcome periods explicit?
- are ambiguous states visible rather than guessed?

Timing rules belong in the experiment specification unless they are literal source facts.

### Treatment / comparison support

Ask:

- how many eligible treated and comparison observations exist?
- does support persist within relevant periods or fixed-effect strata?
- does a treatment rule collapse to almost universal or almost nonexistent exposure?
- are source families or fine annotations too sparse for the intended contrast?

Total row count is not effective identifying sample size.

### Outcome coverage and sparsity

Ask:

- are outcomes available for the observations that carry the identifying contrast?
- how much sample is lost after timing projection?
- is the outcome extremely sparse, concentrated, or zero-inflated?
- are structural zeros actually licensed by upstream coverage evidence?

### Pretreatment balance and selection

Ask:

- do treated and comparison observations differ materially before treatment?
- are future/planned project locations systematically different from never-project locations?
- do stricter comparison rules improve comparability at the cost of destroying support?

These are facts about the experiment, not inconveniences to hide with additional controls.

### Falsification

Candidate checks include:

- prior-outcome placebo;
- fake or shifted timing;
- displaced locations;
- randomized treatment labels;
- negative-control outcomes;
- alternative pretreatment windows.

A signal that appears where treatment should not have an effect needs explanation before substantive interpretation.

### Spatial sensitivity

For local exposure designs, inspect:

- geolocation precision;
- boundary/overlap ambiguity;
- multiple nearby project states;
- radius/bandwidth sensitivity;
- how changes in radius alter the identifying sample.

A different radius is often a different experiment, not simply a continuous dose-response check.

### Synthetic signal recovery

The harness can inject a declared signal into data with the observed structure and ask whether the proposed design/estimator can recover it reliably.

This answers:

> If a substantively plausible signal existed in data with this structure, would this apparatus have a reasonable chance of detecting it?

It does not show that the real effect exists.

## 9. Evidence levels

The project should keep four evidence states distinct.

| Level | Example | Meaning |
|---|---|---|
| Software acceptance | synthetic fixture passes | implementation behavior is coherent |
| Empirical QA | real ACLED/GeoGCDF materialization with provenance | source-backed measurement exists as declared |
| Experiment gates | real projected sample passes/fails support/coverage/placebo checks | declared design is or is not ready for deeper analysis |
| Estimator result | coefficient / interval / event-study output | result for that specific gated experiment |

The [Validation Status](../data-products/validation-status.md) page is the human ledger for those states.

## 10. Current reference lanes

### ACLED

ACLED is the first fully developed example of the current boundary:

```text
source-native ACLED
→ contract-backed measurement
→ validated harness bundle
→ explicit taxonomy/value/timing projection
→ E1/E2 experiment machinery
```

The current contracted path has synthetic end-to-end acceptance. A real run using the current materialized artifacts should be reported separately from historical E1/E2 calibration evidence.

### Investment

Investment measurements are moving through the same seam.

The empirical repo now has source-native investment verticals and a GeoGCDF contracted measurement path. The harness now has machinery for deriving treatment downstream from a contracted empirical measurement.

This is intentionally different from a source pipeline that emits a ready-made treatment flag.

### Surveys

Survey infrastructure is being designed to support respondent/household/cluster/EA grains without forcing them into an area-period panel.

The same boundary should apply:

```text
survey facts and design metadata upstream
        ↓
explicit geography/timing/exposure linkage
        ↓
experiment chooses outcome/covariate/treatment use
```

## 11. Interpretation rule

The traffic-light framing remains operational, not evidentiary:

- **GREEN** — the named gate does not currently block further investigation;
- **YELLOW** — a material weakness or uncertainty remains visible;
- **RED** — the current design should not be interpreted until repaired or changed;
- **NOT RUN** — the relevant real-data test has not been executed;
- **BLOCKED** — an upstream empirical object or scientific definition is not ready enough for a meaningful run.

> **Green means permission to investigate further, not causal validation.**

## 12. What should drive the next design decision?

The next experiment should not be chosen because it is easy to code or because an old coefficient was attractive.

It should be chosen because:

1. the required empirical measurements exist with known provenance and coverage;
2. the scientific-use rules are explicit;
3. the design has enough support and outcome coverage;
4. the main selection/timing/falsification risks can be diagnosed;
5. the estimator is appropriate for the remaining identification problem.

The architecture is useful only if it makes that sequence easier to follow in practice.
