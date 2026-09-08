# FCV Spatial Data Research Onboarding

Human-facing documentation and collaboration layer for the FCV spatial-data scientific-instrument project.

This repository is **not** the empirical-data implementation and it is **not** the experiment/calibration engine. Its job is to help collaborators understand the research system, its current evidence state, scientific boundaries, experiment readiness, observability/commissioning results, and recovered 2021–2023 research memory.

The public site is deployed at:

- https://fcv-spatial-data-research-onboardin.vercel.app/

## Current research system

- [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) — typed empirical identity, provenance, grain, geography/time, coverage, measurement, QA, and run-manifest contracts.
- [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) — geography authority, period indexing, analytical membership, source registration, and spatial provenance.
- [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) — source-native facts and reusable empirical measurements. It does **not** own treatment/control/outcome roles or estimators.
- [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) — experiment projection, treatment derivation, timing, eligibility, gates, estimators, falsification, and the Africa Observability Lab.

> **Facts are produced upstream; scientific roles are assigned in experiments; known-behavior calibration characterizes the instrument; readiness is summarized here.**

## September 8, 2026 checkpoints

### DHS external commissioning

Canonical DHS HR ingestion now uses official fixed-width `.DAT + .DCT` releases. Nigeria 2018, Uganda 2016, and Zambia 2018 were materialized and their initial semantic measurements commissioned against authoritative report quantities.

**DHS commissioning result: 8 / 8 GREEN.**

The checks exercise survey identity, `HV206`, `HV270`, release-local `HV201`, source-native `HV005`, de-jure `HV005 × HV012`, `HV025` domain selection, denominator construction, and missing/unmapped accounting. No joined protected microdata were persisted.

### Real current-artifact GeoGCDF → ACLED E2

The rebuilt current E2 path has now completed its first real hash-backed gate run.

Reference design:

```text
47 GeoGCDF-covered African countries
6,420 GADM 4.1 ADM2 units
6 treatment periods: 2003–2004 ... 2013–2014
GeoGCDF project_count > 0
→ ACLED Violence against civilians fatalities at t+1
with VAC(t-1), period FE, country FE, ADM2-clustered SE
```

Primary real frame:

```text
38,520 ADM2-period observations
7,667 treated
30,853 controls
within-period support: 6 / 6
```

All declared E0–E6 gates were GREEN. Pretreatment balance and placebo diagnostics were very small (`|SMD| = 0.0040`; placebo = `0.0047` outcome SD). The predeclared `0.20 SD` synthetic positive control recovered 30 / 30 times.

The calibration estimate was `+0.550` fatalities with SE `0.458` (`z ≈ 1.20`). This is **not strong substantive evidence of an effect**. It is useful precisely because instrument readiness and substantive signal strength remain separate questions.

The positive-reported-amount STRESS treatment also passed all gates.

A clean-environment numerical reproduction and the full real-frame observability curve are the active acceptance frontier. The first run emitted a SciPy/NumPy compatibility warning, so the gate pattern is strong evidence but the numerical packet should be reproduced in a supported environment before being frozen as canonical.

## Current scientific frontier

The next ladder is now about **small-effect credibility**, not basic pipeline execution:

```text
clean numerical reproduction
→ full real-frame observability curve + delta=0
→ uncertainty / inference calibration
→ influence + leave-one-country/period-out stability
→ stronger timing / negative-control falsification
→ external published positive control (Briggs 2017)
→ model-family / spatial-correlation sensitivity where warranted
```

The purpose is to learn what very small effects can be distinguished from noise, misspecified uncertainty, spatial dependence, influential units, timing artifacts, and measurement choices.

Briggs (2017) remains the preferred first published-study positive control. Breckner & Sunde (2019) remains deferred until truthful regular-grid geography and monthly/subannual period infrastructure exists.

## Evidence language

Keep these evidence levels distinct:

1. software/synthetic implementation acceptance;
2. real source-backed empirical materialization + QA;
3. real experiment gate evidence;
4. synthetic observability / detector characterization;
5. external commissioning / known-behavior recovery;
6. substantive estimator result.

A successful materialization is not automatically an experiment. A synthetic injection is not evidence that a real effect exists. A GREEN experiment gate is permission to investigate further rather than proof of causal identification. A reproduced external statistic or published pattern is instrument-calibration evidence, not a new FCV substantive claim.

## Main current pages

- `docs/current-status.md` — current evidence state and immediate scientific-readiness transitions.
- `docs/research-system.md` — empirical, experiment, and instrument-characterization boundaries.
- `docs/experiments/observability-lab.md` — Africa Observability Lab and detector-characterization roadmap.
- `docs/experiments/calibration-benchmark-catalog.md` — completed commissioning and published positive controls.
- `docs/experiments/experiment-surface-catalog.md` — substantive experiment surfaces and current blockers.
- `docs/data-products/validation-status.md` — evidence ledger separating architecture, commissioning/observability, experiment gates, and recovered calibration.

## Maintenance rule

Update this site when a technical change alters collaborator-facing architecture, research status, evidence state, calibration/commissioning readiness, or scientific boundaries. Preserve historical pages as historical evidence and keep the current status/readiness pages explicitly current.
