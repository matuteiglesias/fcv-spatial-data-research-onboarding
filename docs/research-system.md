---
title: Research System Architecture
sidebar_position: 2
description: Human-facing map of FCV empirical production, scientific use, observability calibration, and sources of truth.
date: "2026-09-09"
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

Canonical HR source authority uses distributed `.DAT + .DCT` releases. Nigeria 2018, Uganda 2016, and Zambia 2018 passed **8 / 8 official-report commissioning checks**.

A second external-control layer now exists through Briggs (2017): independently reconstructed historical DHS regional wealth-quintile shares using `HV270`, `HV005 × HV012`, and `HV024` reproduce published intermediate quantities essentially to rounding precision.

The DHS measurement arm is therefore externally commissioned along multiple semantic dimensions. DHS spatial exposure remains downstream scientific work because public GPS coordinates are displaced and survey-design-aware inference is not yet declared.

## Current scientific-use reference path

The modern E2 reference is exercised on real current artifacts:

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

All declared E0–E6 gates were GREEN. The canonical estimate is approximately `+0.550` fatalities with SE `0.458`, about `0.0176 outcome SD`. It is not strong substantive evidence.

## Africa Observability Lab — first wave closed

The lab now has multiple completed real evidence types:

- DHS official-report external commissioning: **8 / 8 GREEN**;
- current E2 real experiment gates: **E0–E6 GREEN**;
- full current-E2 detector curve: **CHARACTERIZED**;
- exact-real-frame uncertainty family: **CHARACTERIZED**;
- influence / concentration: **CHARACTERIZED**;
- timing + structured-null falsification: **CHARACTERIZED**;
- sparse-outcome family: **CHARACTERIZED**;
- Briggs historical DHS measurement: **STRONG POSITIVE CONTROL**;
- Briggs full independent pragmatic analogue: **QUALITATIVE POSITIVE CONTROL**.

The key detector result is now known:

```text
≈0.02 SD  weak detector region
≈0.05 SD  usually observable
≈0.10 SD  essentially certain under frozen synthetic worlds
```

This matters because the canonical fatalities estimate is only about `0.018 SD`, directly inside the weak-resolution region.

The uncertainty wave also showed that different inference procedures can disagree materially about rejection behavior without changing the point estimate. The country-t procedure was conservative under the frozen simulations; the wild-country bootstrap was close to nominal null size. No method was selected because it produced favorable observed-data inference.

Influence diagnostics showed limited one-country/one-ADM2 concentration but material period dependence. Falsification showed very small fake-timing effects while the canonical fatalities coefficient remained ordinary under the structured within-country treatment-history null.

Sparse-outcome characterization showed a clearer positive association in event incidence/count representations than in fatalities severity, without replacing the canonical model.

## External published positive control: Briggs (2017)

The Briggs benchmark is now closed with two deliberately separate conclusions.

### Measurement-level success

Historical DHS wealth-location measurement reproduces published intermediate quantities to rounding precision.

**Evidence: STRONG POSITIVE CONTROL.**

### Full benchmark analogue

The full independent reconstruction used documented substitutions where exact historical source/geography authority was unavailable:

```text
Briggs       17 countries / 195 regions
FCV analogue  7 countries / 65 regions
```

The analogue did not recover numerical coefficient parity, but it recovered the qualitative richest-over-poorest ordering and that ordering survived trimming, equal-country weighting, and every leave-one-country-out run.

**Evidence: QUALITATIVE POSITIVE CONTROL; numerical parity not claimed.**

This is useful precisely because the benchmark exposed which layers were strong and which historical-fidelity layers remain weak.

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
real current E2 gates          PASSED
R0–R5 E2 characterization      CLOSED
Briggs external control        CLOSED
DHS measurement commissioning  STRONG
supported numerical rerun      ARCHIVAL HOUSEKEEPING
DHS spatial exposure           NEXT MAJOR SCIENTIFIC FRONTIER
WB current spatial-period path CONDITIONAL NEXT
Breckner–Sunde                  DEFERRED UNTIL GRID/MONTH SUPPORT
```

The system should now add **new calibration dimensions** rather than more variants around an already-characterized E2 coefficient.

## What the next calibration work should test

### DHS spatial exposure

The next important survey-side evidence should test whether the system can truthfully move from household semantics to displaced cluster geography and named exposure while preserving survey timing/design.

### Independent donor comparison

A current World Bank spatial-period measurement becomes valuable when it enables a genuinely independent donor comparison rather than merely increasing source count.

### Grid/month external control

Breckner–Sunde becomes attractive only after regular-grid geography and calendar-month period semantics are real shared capabilities rather than benchmark-specific hacks.

### Convergent validity

Prefer benchmarks where independent measurement systems observe the same latent quantity. That tests a different failure mode than synthetic injection or published regression recovery.

## Residual numerical-environment caveat

The closed R0–R5 executions emitted a SciPy/NumPy compatibility warning. A supported-environment reproduction remains archival acceptance work before exact numerical packets are frozen as final numerical authority. The analysis identities, real frame, and qualitative characterization are already recorded.

## Communication policy

Prefer claims that name the layer:

- **Empirical:** “The GeoGCDF treatment product has explicit 47-country coverage and 22 governed exclusions.”
- **Experiment:** “The current GeoGCDF→ACLED design passed E0–E6 on the real frame.”
- **Observability:** “The current design is weak near 0.02 SD and usually observable by 0.05 SD under the frozen injection world.”
- **Commissioning:** “The DHS HR arm recovered 8/8 official benchmarks and historical Briggs wealth-location quantities to rounding precision.”
- **External control:** “The pragmatic Briggs reconstruction recovered qualitative rich-over-poor ordering but not numerical parity.”
- **Substantive:** “The canonical fatalities estimate is small and imprecise; alternative incidence/count representations are more positive.”

These are different claims and should remain different in papers, PRs, and collaboration discussions.

See [September 2026 Calibration Wave Closure](experiments/calibration-wave-2026-09.md) for the detailed frozen packet.
