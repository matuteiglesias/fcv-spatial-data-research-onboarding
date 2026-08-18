# FCV Spatial Data Research Onboarding

Documentation and onboarding layer for the recovered FCV research archive **and the active continuation of the empirical research**.

The site connects three things:

- the recovered 2021–2023 research memory: spatial data, surveys, conflict, service delivery, development projects, notebooks, and empirical outputs;
- the current empirical-design layer: treatment definitions, timing, geography, counterfactuals, outcomes, estimator families, and falsification logic;
- the validation layer used to distinguish available data from experiment surfaces that are actually ready to investigate.

The public site is deployed at:

- https://fcv-spatial-data-research-onboardin.vercel.app/

## Main current pages

- `docs/current-status.md` — current research state, immediate empirical entry point, and open decisions.
- `docs/continuation/experimental-infrastructure.md` — A/B/C operating model for data infrastructure, experiment specifications, and validation gates.
- `docs/continuation/experimental-design-regression-pipeline.md` — recovered design plus current experiment and estimator architecture.
- `docs/data-products/validation-status.md` — human-facing empirical readiness gateboard.
- `docs/continuation/annotation-project-classification-protocol.md` — project-level treatment classification rules and open coding work.
- `docs/continuation/source-data-inventory-update-strategy.md` — source-version and update strategy.

## Recovered archive pages

- `docs/archive-map.md` — top-level map of the recovered archive.
- `docs/main-pipeline/2023-duke-overview.md` — main recovered 2023 pipeline.
- `docs/data-products/spatial-data-overview.md` — reusable spatial products.
- `docs/data-products/dataset-inventory.md` — major dataset families.
- `docs/notebooks/notebook-guide.md` — notebook and export reading guide.
- `docs/recovery-plan.md` — historical recovery plan retained for provenance and continuity.

The visible sidebar intentionally gives less prominence to thin placeholder pages and individual legacy notes. Those files remain available by URL when historical detail is needed.

## Companion experiment repository

The active empirical infrastructure is implemented separately in:

- https://github.com/matuteiglesias/fcv-experiment-harness

That repository provides the first executable experiment and validation harness for recovered FCV area-period data and project-location designs. This documentation site explains the scientific context, experiment surfaces, and readiness status; it does not duplicate generated harness outputs.

## Project structure

```text
docs/                 Research documentation and archive memory
src/pages/            Site landing page
src/css/custom.css    Global theme customizations
static/img/           Logo, favicon, and static images
docusaurus.config.ts  Site configuration
sidebars.ts           Curated manual navigation
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

## Documentation policy

The original archive structure should be preserved. This site provides a clean navigation and interpretation layer around it.

Current research code, validated outputs, and future cleaned data should be treated as derived layers rather than destructive rewrites of the recovered folders. Historical notebooks and matching/regression outputs remain useful evidence about what was done, but they are not automatically canonical for the renewed empirical work.

The intended reading rule is simple: **current status and validation first; recovered implementation detail when needed.**
