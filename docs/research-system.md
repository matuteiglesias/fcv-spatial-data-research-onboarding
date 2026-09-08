---
title: Research System Architecture
sidebar_position: 2
description: Human-facing map of FCV empirical production, scientific use, observability calibration, and sources of truth.
date: "2026-09-08"
---

# Research System Architecture

The FCV research system is a **scientific instrument with separate production, scientific-use, and characterization layers**.

> **Facts are produced upstream; reusable empirical meaning is added with explicit provenance; scientific roles are assigned in experiments; the instrument is characterized against known behavior; readiness is summarized here.**

## System at a glance

```text
empirical-data-contracts
  identity / provenance / grain / geography / time /
  coverage / measurement / QA / run-manifest contracts

spatial-data-foundation
  geography authority / period indexing /
  spatial membership / provenance

                    ↓

fcv-empirical-data
  source-native facts
  reusable measurements
  durable Silver / Gold
  coverage / QA / commissioning evidence

                    ↓ contracted boundary

fcv-experiment-harness
  measurement projection
  treatment / outcome roles
  timing / eligibility / comparison sample
  gates / estimator / falsification

                    ↓ same prepared designs

Africa Observability Lab
  synthetic detector curves
  external commissioning
  positive / negative controls
  uncertainty calibration
  influence / stability characterization

                    ↓

this onboarding site
  orientation / status / readiness / research memory
```

## Repository ownership

| Repository | Owns | Does not own |
|---|---|---|
| `empirical-data-contracts` | reusable typed empirical contracts | FCV treatments or estimators |
| `spatial-data-foundation` | geography/time authority and spatial membership | FCV scientific roles |
| `fcv-empirical-data` | source-native facts, reusable measurements, materialization, provenance, QA, coverage | treatment/control roles or causal interpretation |
| `fcv-experiment-harness` | scientific projection, treatment derivation, timing, eligibility, gates, estimators, observability | raw source authority |
| onboarding repo | human orientation and evidence state | executable canonical APIs |

## Current empirical reference paths

### GeoGCDF

```text
AidData GeoGCDF v3.0.1
→ project Silver
→ project↔ADM2 geography relation
→ commitment-period relation
→ commitment area-period Gold
```

The current Gold uses `resolution_policy = exclude_unresolved`: 22 project geometries are explicitly excluded, zero commitment-time projects are unresolved, and structural-zero semantics are defined relative to the resolved eligible project universe.

### ACLED

```text
ACLED event source
→ event Silver
→ geography / period relations
→ sparse native-event Gold (absence = unknown)
→ explicit coverage certification
→ certified dense Gold (zero only within licensed coverage)
```

The current E2 outcome uses the certified derivative. Sparse absence is never automatically reinterpreted as zero.

### DHS

Canonical HR source authority now uses distributed `.DAT + .DCT` releases. Nigeria 2018, Uganda 2016, and Zambia 2018 passed real HR materialization, initial semantic materialization, and **8 / 8 official-report commissioning checks**.

The HR measurement arm is therefore externally commissioned. DHS spatial exposure remains downstream scientific work because public GPS coordinates are displaced and survey-design-aware inference is not yet declared.

## Current scientific-use reference path

The modern E2 reference is now exercised on real current artifacts:

```text
GeoGCDF treatment measurement
→ project_count > 0

certified ACLED measurement
→ Violence against civilians fatalities at t+1
→ same outcome at t-1

47-country GADM ADM2 lattice
→ support / coverage / timing gates
→ placebo / positive control
→ estimator
```

Real PRIMARY frame:

```text
38,520 rows
6,420 ADM2 units
47 countries
6 periods
7,667 treated
30,853 controls
```

All declared E0–E6 gates were GREEN. Pretreatment balance was `|SMD| = 0.0040`, prior-outcome placebo `0.0047` outcome SD, and 0.20-SD synthetic recovery was 30 / 30.

The first reference estimate was approximately `+0.550` fatalities with SE `0.458`. It is not strong substantive evidence. A clean supported-environment reproduction is required because the first run emitted a SciPy/NumPy compatibility warning.

## Africa Observability Lab

The lab now has three distinct real evidence types:

- DHS external commissioning: **8 / 8 GREEN**;
- current E2 real experiment gates: **E0–E6 GREEN**;
- current E2 one-point real-frame observability: **0.20 SD recovered 30 / 30**.

The next missing characterization is the full real-frame curve at:

```text
0.00, 0.02, 0.05, 0.10, 0.20 SD
```

After that, the instrument should expand in directions that specifically matter for tiny effects:

1. uncertainty / interval calibration;
2. country/period influence stability;
3. stronger timing and negative-control falsification;
4. external published positive control via Briggs (2017);
5. bounded model-family/spatial-dependence sensitivity where diagnostics justify it.

## Evidence levels

| Evidence | Meaning |
|---|---|
| Software acceptance | implementation behaves on controlled fixtures |
| Empirical QA | real source-backed product exists as declared |
| Experiment gate run | declared design has real support/coverage/diagnostics |
| Synthetic observability | known injected truth has characterized recovery behavior |
| External commissioning | authoritative known measurement/pattern is recovered |
| Estimator result | an estimate exists for a specific gated experiment |

None automatically implies the next.

## Current scientific frontier

```text
real current E2 gates       PASSED
clean numerical replication IN PROGRESS
full observability curve    IN PROGRESS
uncertainty calibration     NEXT
influence / falsification   NEXT
Briggs external control     NEXT+
```

The system should now become better at distinguishing **small real signals from noisy, spatially dependent, fragile, or miscalibrated estimates**, rather than adding unrelated infrastructure.

## Communication policy

Prefer claims that name the layer:

- **Empirical:** “The GeoGCDF treatment product has explicit 47-country coverage and 22 governed exclusions.”
- **Experiment:** “The current GeoGCDF→ACLED design passed E0–E6 on the real frame.”
- **Observability:** “That real design recovers injected effects of this size at this rate.”
- **Commissioning:** “The DHS HR measurement arm recovered 8/8 external benchmarks.”
- **Substantive:** “The gated FCV experiment estimates X.”

These are different claims and should remain different in papers, PRs, and collaboration discussions.
