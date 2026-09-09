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

## September 8–9, 2026 calibration closure

The first current-artifact scientific-instrument characterization wave is now **closed through R5**, and the first published-study external positive control has also been completed.

### DHS external commissioning

Canonical DHS HR ingestion uses official fixed-width `.DAT + .DCT` releases. Nigeria 2018, Uganda 2016, and Zambia 2018 were materialized and commissioned against authoritative report quantities.

**DHS official commissioning result: 8 / 8 GREEN.**

The checks exercise survey identity, `HV206`, `HV270`, release-local `HV201`, source-native `HV005`, de-jure `HV005 × HV012`, `HV025`, denominator construction, and missing/unmapped accounting.

Briggs (2017) then supplied a second historical DHS positive control: independently reconstructed regional wealth-quintile shares reproduce published intermediate quantities essentially to rounding precision.

**Historical DHS wealth-location result: STRONG POSITIVE CONTROL.**

### Current GeoGCDF → ACLED E2

Reference design:

```text
47 GeoGCDF-covered African countries
6,420 GADM 4.1 ADM2 units
38,520 ADM2-period observations
GeoGCDF project_count > 0
→ ACLED Violence against civilians fatalities at t+1
with VAC(t-1), period FE, country FE, ADM2-clustered SE
```

All E0–E6 gates are GREEN. The canonical estimate is `+0.550` fatalities with SE `0.458`, about `+0.0176 outcome SD`: **small and imprecise, not strong substantive evidence**.

The completed R0–R5 characterization now tells us much more than the coefficient alone:

```text
R0  exact reference identity frozen
R1  detector resolution characterized
R2  inference/uncertainty family characterized
R3  geographic/unit influence limited; period dependence material
R4  fake timing clean; canonical not extreme under structured null
R5  incidence/count representations more clearly positive than fatalities severity
```

The empirical detector boundary is approximately:

```text
~0.02 SD  difficult to distinguish
~0.05 SD  usually observable
~0.10 SD  essentially certain under frozen synthetic worlds
```

That matters because the canonical fatalities estimate is itself only about `0.018 SD`.

### Briggs (2017) external positive control

The exact replication package reproduces the published statistical oracle, but FCV did not use that table as an input to the independent reconstruction.

The full pragmatic analogue had unavoidable documented substitutions — 7 defensibly retained countries / 65 regions instead of 17 / 195, current GADM rather than exact historical survey-era geography, and approximate historical AidData parent/child semantics.

It did **not** reproduce numerical coefficient parity. It did recover the qualitative rich-over-poor ordering, and the richest-share coefficient remained positive under trimming, equal-country weighting, and every leave-one-country-out run.

**Full Briggs analogue result: QUALITATIVE POSITIVE CONTROL / CLOSED.**

The important outcome is layered rather than binary: some instrument components were externally validated very strongly, while historical geography/source-ontology fidelity was correctly exposed as the main source of drift.

## Current scientific frontier

The previous ladder is complete. We should not keep adding E2 specifications merely because more models are possible.

The next useful work is:

```text
supported-environment rerun of the closed E2 packet
    — archival numerical housekeeping

→ DHS displacement-aware spatial-exposure commissioning

→ current World Bank spatial-period measurement when it creates
  a genuinely independent donor comparison

→ Breckner & Sunde after truthful regular-grid geography +
  calendar-month infrastructure exists

→ cross-source / convergent-validity benchmarks
```

The principle is now explicit: **once a calibration question has been answered, prefer a new validation dimension over specification proliferation.**

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
- `docs/experiments/observability-lab.md` — Africa Observability Lab and current calibration frontier.
- `docs/experiments/calibration-benchmark-catalog.md` — completed commissioning, external controls, and next calibration queue.
- `docs/experiments/calibration-wave-2026-09.md` — frozen detailed R0–R5 + Briggs closure packet.
- `docs/experiments/experiment-surface-catalog.md` — substantive experiment surfaces and current blockers.
- `docs/data-products/validation-status.md` — evidence ledger separating architecture, commissioning/observability, experiment gates, and recovered calibration.

## Maintenance rule

Update this site when a technical change alters collaborator-facing architecture, research status, evidence state, calibration/commissioning readiness, or scientific boundaries. Preserve historical pages as historical evidence and keep the current status/readiness pages explicitly current.
