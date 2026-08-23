# FCV Spatial Data Research Onboarding

Human-facing documentation and collaboration layer for the FCV spatial-data research program.

This repository is **not** the empirical-data implementation and it is **not** the experiment engine. Its job is to help collaborators understand the research system, its current status, its scientific boundaries, the evidence behind readiness claims, and the recovered 2021–2023 research memory.

The public site is deployed at:

- https://fcv-spatial-data-research-onboardin.vercel.app/

## Current research system

The implementation is now split deliberately across four technical repositories.

### Reusable foundations — not FCV-specific

- [`empirical-data-contracts`](https://github.com/matuteiglesias/empirical-data-contracts) — typed contracts for empirical identity, provenance, grain, geography/time, coverage, measurement, QA, and run manifests.
- [`spatial-data-foundation`](https://github.com/matuteiglesias/spatial-data-foundation) — reusable geography authority, period indexing, analytical spatial membership, source registration, and spatial provenance.

### FCV-owned layers

- [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data) — source-native empirical facts and measurements, natural grains, source snapshots, durable materialization, QA, coverage, and parity. It deliberately does **not** own treatment/control/outcome roles or estimators.
- [`fcv-experiment-harness`](https://github.com/matuteiglesias/fcv-experiment-harness) — scientific use of those empirical measurements: experiment projection, treatment derivation, timing, eligibility, counterfactuals, gates, estimators, falsification, and calibration.

This onboarding site sits above those layers as the human communication surface.

The compact rule is:

> **Facts are produced upstream; scientific roles are assigned in experiments; readiness is summarized here.**

See `docs/research-system.md` for the full ownership map.

## Main current pages

- `docs/current-status.md` — what is implemented now, what is in progress, and the next research bottlenecks.
- `docs/research-system.md` — repository boundaries, sources of truth, and the path from source facts to experiments.
- `docs/continuation/experimental-infrastructure.md` — collaborator-facing research workflow from empirical measurement through experiment validation.
- `docs/continuation/experimental-design-regression-pipeline.md` — scientific design memo and recovered design lineage.
- `docs/data-products/validation-status.md` — readiness/evidence board that distinguishes recovered real-data checkpoints from the newer contract-backed architecture.
- `docs/continuation/annotation-project-classification-protocol.md` — project classification research and open coding work.
- `docs/continuation/source-data-inventory-update-strategy.md` — source landscape and update strategy.

## Recovered archive pages

The recovered archive remains part of the project's research memory, but it is no longer the sole or automatic source of current canonical empirical products.

- `docs/archive-map.md` — top-level map of the recovered archive.
- `docs/main-pipeline/2023-duke-overview.md` — main recovered 2023 pipeline.
- `docs/data-products/spatial-data-overview.md` — reusable historical spatial products.
- `docs/data-products/dataset-inventory.md` — detailed recovered dataset inventory.
- `docs/notebooks/notebook-guide.md` — notebook and export reading guide.
- `docs/recovery-plan.md` — historical recovery plan retained for provenance and continuity.

Historical notebooks and outputs remain useful for reconstruction, parity, and scientific context. They should not be promoted to current authority merely because they existed first.

## Documentation ownership policy

This repository should own:

- collaborator orientation;
- the current system map;
- research status and open decisions;
- scientific framing and experiment families;
- validation/readiness summaries;
- archive memory and recovered design history;
- links to authoritative technical repositories.

The technical repositories should own:

- schemas and public APIs;
- source-specific transformations;
- materialization semantics;
- detailed run-artifact formats;
- executable commands;
- tests and CI behavior.

The onboarding site should summarize those implementation facts when they matter scientifically, then link to the authoritative source rather than duplicating fast-moving technical documentation.

## Evidence language

When communicating progress, distinguish between:

1. software/synthetic acceptance;
2. source-backed empirical materialization and QA;
3. experiment gate evidence on real data;
4. estimator/research results.

A successful pipeline or CI run is not automatically a substantive research result, and a green gate is permission to investigate further rather than proof of causal identification.

## Project structure

```text
docs/                 Research documentation, system map, status, and archive memory
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

Update this site when a technical change alters the collaborator-facing architecture, research status, evidence state, or scientific boundary.

Do not mirror every code-level change here. Preserve genuine historical pages as historical evidence, and keep current-status pages explicitly current.
