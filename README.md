# FCV Spatial Data Research Onboarding

Human-facing documentation and collaboration layer for the FCV spatial-data scientific-instrument project.

This repository is **not** the empirical-data implementation and it is **not** the experiment/calibration engine. Its job is to help collaborators understand the research system, its current status, scientific boundaries, observability and commissioning evidence, substantive experiment readiness, and recovered 2021–2023 research memory.

The public site is deployed at:

- https://fcv-spatial-data-research-onboardin.vercel.app/

## Current research system

The implementation is deliberately split across reusable foundations and FCV-owned layers.

### Reusable foundations — not FCV-specific

- [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) — typed contracts for empirical identity, provenance, grain, geography/time, coverage, measurement, QA, and run manifests.
- [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) — reusable geography authority, period indexing, analytical spatial membership, source registration, and spatial provenance.

### FCV empirical domain

- [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) — source-native facts and reusable empirical measurements, natural grains, source snapshots, durable materialization, QA, coverage, parity, and integration evidence. It deliberately does **not** own treatment/control/outcome roles or estimators.

### FCV scientific use and instrument characterization

- [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) — scientific use of empirical measurements: experiment projection, treatment derivation, timing, eligibility, counterfactuals, gates, estimators, falsification, plus the Africa Observability Lab calibration kernel and reusable synthetic observability machinery.

This onboarding site sits above those layers as the human communication surface.

The compact rule is:

> **Facts are produced upstream; scientific roles are assigned in experiments; known-behavior calibration characterizes the instrument; readiness is summarized here.**

See `docs/research-system.md` for the full ownership map.

## Main current pages

- `docs/current-status.md` — current architecture, three active evidence lanes, current blockers, and next evidence transitions.
- `docs/research-system.md` — empirical, experiment, and instrument-characterization boundaries.
- `docs/experiments/observability-lab.md` — Africa Observability Lab: calibration kernel, recovery levels, synthetic observability, and commissioning firewall.
- `docs/experiments/calibration-benchmark-catalog.md` — official DHS commissioning, Briggs/Breckner-Sunde positive controls, synthetic injection, and measurement-agreement targets.
- `docs/data-products/product-catalog.md` — current empirical products and natural grains.
- `docs/experiments/experiment-surface-catalog.md` — substantive FCV scientific experiment surfaces, kept separate from calibration benchmarks.
- `docs/continuation/experimental-infrastructure.md` — workflow from empirical production through experiment gates, observability/commissioning, estimation, and interpretation.
- `docs/data-products/validation-status.md` — evidence ledger separating current contracted architecture, Observability Lab/commissioning, and recovered real-data calibration.
- `docs/continuation/experimental-design-status.md` — current downstream scientific-design authority overlay.

## Africa Observability Lab

The experiment harness now supports first-class `purpose = calibration` benchmarks without creating a second substantive estimator framework.

Supported calibration kinds include:

- commissioning;
- positive controls;
- negative controls;
- synthetic injection;
- measurement agreement.

Recovery is represented independently at:

```text
Level 1 — pipeline coherence
Level 2 — qualitative expected behavior
Level 3 — quantitative compatibility
```

The reusable E2 observability engine also maps caller-declared injected effect sizes to sign recovery, rejection/detection, CI coverage, recovery error, and uncertainty under the actual prepared design structure. `delta = 0` is an explicit known synthetic null.

The current external commissioning sequence begins with Nigeria DHS 2018 household electricity (59.4%), then Briggs (2017) after the simple survey benchmark is commissioned. Breckner & Sunde (2019) is deliberately deferred until reusable regular-grid geography and monthly/subannual time semantics exist.

## DHS state

DHS now has:

```text
HR + GC + GPS
→ integration QA
→ codebook-backed household semantic measurements
```

The first reusable semantic measurements are:

- `HV206` → household electricity access;
- `HV270` → survey-relative wealth quintile;
- `HV201` → drinking-water source code.

Protected real-source integrated acceptance and downstream scientific exposure use remain separate next steps.

Harness issue #16 currently tracks the generic auxiliary empirical dataset input needed to combine semantic measurements with source-native design facts such as `HV005` weights for commissioning.

## Evidence language

When communicating progress, distinguish at least:

1. software/synthetic implementation acceptance;
2. source-backed empirical materialization and QA;
3. experiment gate evidence on real data;
4. synthetic observability / detector characterization;
5. external commissioning / known-behavior recovery;
6. substantive estimator/research results.

A successful synthetic injection is not evidence that a real effect exists. A reproduced published statistic or paper pattern is an instrument-calibration result, not a new FCV substantive claim. A green experiment gate is permission to investigate further rather than proof of causal identification.

## Recovered archive pages

The recovered archive remains part of the project's research memory, but it is no longer the sole or automatic source of current canonical empirical products.

- `docs/archive-map.md` — top-level archive map.
- `docs/main-pipeline/duke-overview.md` — main recovered 2023 pipeline.
- `docs/data-products/spatial-data-overview.md` — reusable historical spatial products.
- `docs/data-products/dataset-inventory.md` — detailed recovered dataset inventory.
- `docs/notebooks/notebook-guide.md` — notebook/export guide.
- `docs/recovery-plan.md` — historical recovery plan retained for provenance.

Historical notebooks and outputs remain useful for reconstruction, parity, calibration history, and scientific context. They should not be promoted to current authority merely because they existed first.

## Documentation ownership policy

This repository should own:

- collaborator orientation;
- the current system map;
- research status and open decisions;
- scientific framing and experiment families;
- observability/calibration/commissioning summaries;
- validation/readiness summaries;
- archive memory and recovered design history;
- links to authoritative technical repositories.

Technical repositories should own:

- schemas and public APIs;
- source-specific transformations;
- materialization semantics;
- detailed run-artifact formats;
- benchmark adapter behavior;
- executable commands;
- tests and CI behavior.

The onboarding site should summarize implementation facts when they materially change collaborator understanding, then link to the technical source rather than duplicating fast-moving API documentation.

## Project structure

```text
docs/                 Research documentation, system map, catalogs, status, and archive memory
src/pages/            Site landing page
src/css/custom.css    Global theme customizations
static/img/           Logo, favicon, and static images
docusaurus.config.ts  Site configuration
sidebars.ts           Curated navigation
```

## Install

```bash
npm install
```

## Run locally

```bash
npm start
```

## Build

```bash
npm run build
```

## Serve the production build locally

```bash
npm run serve
```

## Maintenance rule

Update this site when a technical change alters collaborator-facing architecture, research status, evidence state, calibration/commissioning readiness, or scientific boundaries.

Do not mirror every code-level change here. Preserve genuine historical pages as historical evidence, and keep current status and benchmark catalogs explicitly current.
