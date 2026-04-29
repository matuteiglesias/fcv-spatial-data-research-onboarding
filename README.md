# FCV Spatial Data Research Onboarding

Docusaurus site for documenting and navigating a recovered research archive on FCV, spatial data, survey data, conflict, service delivery, public works, and development projects.

The site is designed as an onboarding and recovery manual. It helps collaborators understand what exists in the archive, where the main datasets and notebooks are located, which outputs are ready to inspect, and what needs validation before renewed analysis.

## Main manual pages

- `intro.md` — orientation for the archive and the manual.
- `archive-map.md` — folder-level map of the recovered archive.
- `main-pipeline/2023-duke-overview.md` — overview of the main recovered pipeline.
- `data-products/spatial-data-products.md` — guide to reusable spatial products.
- `data-products/dataset-inventory.md` — inventory of major dataset families.
- `notebooks/notebook-guide.md` — reading guide for notebooks and exports.
- `recovery-plan.md` — staged plan for validation and renewed use.

## Project structure

```text
docs/                 Manual pages
src/pages/            Home page
src/css/custom.css    Global theme customizations
static/img/           Logo, favicon, and static images
docusaurus.config.ts  Site configuration
sidebars.ts           Manual navigation
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

## Notes

The original archive structure should be preserved. This site documents the archive and provides a clean navigation layer around it. Any future cleaned data or rebuilt pipeline should be treated as a derived layer rather than a direct rewrite of the recovered folders.
