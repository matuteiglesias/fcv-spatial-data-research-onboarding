---
title: Calibration Benchmark Catalog
sidebar_position: 3
description: Human-facing catalog of FCV commissioning targets, published positive controls, and calibration prerequisites.
last_verified: "2026-09-08"
---

# Calibration Benchmark Catalog

**Document status: CURRENT CALIBRATION TARGET CATALOG**  
**Purpose: instrument validation, not new FCV substantive inference**

This page answers:

> **Which known-behavior benchmarks has the FCV instrument reproduced, what did they test, and what should be commissioned next?**

The benchmark strategy favors a small complementary set rather than a literature-review list.

## At a glance

| Benchmark | Kind | What it primarily tests | Current status |
|---|---|---|---|
| Nigeria DHS 2018 household electricity | commissioning | survey identity, `HV206`, `HV005`, denominator, missing values | **GREEN** |
| Nigeria DHS 2018 de-jure electricity | commissioning | `HV005 × HV012`, population denominator | **GREEN** |
| Nigeria DHS 2018 drinking-water distribution | commissioning | release-local `HV201`, weights, denominator, category mapping | **GREEN** |
| Nigeria DHS 2018 urban de-jure wealth | commissioning | `HV270`, `HV005 × HV012`, `HV025` domain | **GREEN** |
| Uganda DHS 2016 household electricity | commissioning | cross-release survey identity, `HV206`, `HV005` | **GREEN** |
| Uganda DHS 2016 de-jure electricity | commissioning | cross-release `HV005 × HV012` logic | **GREEN** |
| Zambia DHS 2018 household electricity | commissioning | cross-release survey identity, `HV206`, `HV005` | **GREEN** |
| Zambia DHS 2018 de-jure electricity | commissioning | cross-release `HV005 × HV012` logic | **GREEN** |
| Briggs (2017), aid targeting | positive control / published study | survey weighting, region geography, donor-project aggregation, regression | **UNLOCKED; SOURCE/DESIGN RECOVERY NEEDED** |
| Breckner & Sunde (2019) | positive control / published study | ACLED event/time/geography, grid/month alignment, weather, FE estimation | **DEFERRED — GRID + MONTHLY SUPPORT NEEDED** |
| E2 effect-size injections | synthetic injection | probability/quality of recovery under actual design structure | **IMPLEMENTED / SYNTHETIC PASS** |
| E2 `delta = 0` | synthetic null | false-positive behavior, interval coverage at known zero truth | **IMPLEMENTED / SYNTHETIC PASS** |
| WBad ↔ WBkg treatment overlap | measurement agreement | inherited measurement stability | **REAL RECOVERED-LANE EVIDENCE EXISTS** |

## DHS commissioning checkpoint — 8 / 8 GREEN

The initial DHS commissioning wave is complete across three authoritative releases.

### Nigeria 2018

Four benchmarks passed:

1. national household electricity;
2. national de-jure electricity;
3. detailed national household drinking-water source distribution;
4. urban de-jure wealth-quintile distribution.

The electricity checks commission `HV206`, `HV005`, denominator semantics, and missing-value accounting. The de-jure variant additionally commissions `HV012` as a population multiplier.

The wealth benchmark commissions:

```text
HV270
+ HV005 × HV012
+ HV025 == 1
```

without reinterpreting wealth quintiles as an absolute cross-survey wealth scale.

The drinking-water benchmark uses release-local raw `HV201` values. Every observed positive-weight source code was explicitly mapped to a report cell using distributed Nigeria release documentation. No improved/unimproved or safe/unsafe classification was inferred.

### Uganda 2016

Two benchmarks passed:

- national household electricity;
- national de-jure electricity.

### Zambia 2018

Two benchmarks passed:

- national household electricity;
- national de-jure electricity.

### Quantitative rule

Published one-decimal percentages were tested against the interval implied by publication precision: ±0.05 percentage points.

All eight benchmarks recovered every required cell inside that tolerance.

Missing measurement weight and unmapped measurement/category weight were zero throughout.

### Scientific interpretation

These are **commissioning results**, not FCV substantive findings.

They establish that the rebuilt DHS HR measurement apparatus can recover authoritative known quantities across three releases while preserving source-native weight/domain/category semantics.

They do not validate a later FCV household/cluster exposure model, displaced-coordinate treatment assignment, or causal estimator.

## Source authority learned during commissioning

Real commissioning exposed that convenience CSV derivatives were not sufficient canonical authority for these releases: standard variables needed by the benchmark design were absent there while present in the distributed fixed-width release dictionaries.

Canonical HR commissioning therefore rests on:

```text
<release>.DAT
+
<release>.DCT
→ verified fixed-width decoding
→ contract-backed HR Silver
```

This was not a benchmark-specific workaround. It is now the source-authority decision for canonical HR materialization.

## Harness issue #16 after commissioning

Issue #16 originally appeared to block the first DHS benchmark because the generic Calibration Lab input seam had no source-agnostic representation for auxiliary source-native facts such as `HV005`.

The governed empirical commissioning API has now executed the DHS wave successfully without fabricating measurement contracts for those facts.

Issue #16 therefore remains useful as a **generic Calibration Lab integration capability**, especially for multi-input adapters and published-study controls such as Briggs. It should not be described as a blocker to the completed DHS commissioning evidence.

## Published positive control 1 — Briggs (2017)

**Study:** *Does Foreign Aid Target the Poorest?*

**Role:** first published-study survey/cross-source positive control after official DHS commissioning.

The benchmark stresses:

- multiple DHS survey identities;
- `HV270` wealth semantics;
- household sample weights;
- de-jure population denominators;
- survey-region geography;
- historical World Bank / African Development Bank geocoded project releases;
- country fixed-effects regression;
- clustered uncertainty.

### Expected Level-2 behavior

The target is the published qualitative pattern:

- richer regional population share is positively associated with aid allocation;
- the poorest-quintile share does not show a corresponding stable pro-poor relationship.

This remains calibration, not a new FCV claim about aid targeting.

### What remains before execution

DHS commissioning no longer blocks Briggs. The remaining work is primarily source/design recovery:

1. pin the exact DHS surveys/releases used by the reference study;
2. recover the historical donor-project release(s);
3. reconstruct survey-region membership and denominator definitions;
4. freeze the reference regression specification and uncertainty procedure;
5. declare Level-2 recovery before running the FCV adapter;
6. require Level-3 coefficient compatibility only if historical source/design equivalence is strong enough to justify it.

## Published positive control 2 — Breckner & Sunde (2019)

This benchmark remains deliberately deferred.

Its native design is:

```text
0.75° regular grid × calendar month
```

It is valuable because it stresses ACLED event retention, event-to-space assignment, structural zeros, external weather exposure, monthly alignment, and fixed-effects estimation.

But the project should not represent grid cells as fake GADM units or months as fake annual periods. Reusable regular-grid geography and monthly/subannual period semantics should exist first if this benchmark becomes high priority.

## Synthetic benchmark lane

The reusable E2 observability engine remains independently useful wherever a prepared contracted E2 frame exists.

For a caller-declared effect-size grid it asks:

> Under the actual analysis structure, estimator, treatment support, fixed effects, clustering, and outcome scale, how does recovery change as known truth increases?

`delta = 0` remains a separate known synthetic null.

The next important transition is to run this characterization on the **real current-artifact GeoGCDF → ACLED prepared frame**, not merely on synthetic fixtures.

## Measurement-agreement lane

The recovered E2 checkpoint still contains useful WBad/WBkg agreement evidence. It remains a recovered-lane characterization of measurement instability and must not be used to select whichever inherited source gives the most attractive coefficient.

## Recommended pull order from this checkpoint

```text
1. freeze DHS commissioning as 8 / 8 GREEN
2. run real current-artifact GeoGCDF → ACLED gates
3. run observability curve on that exact real prepared frame
4. recover exact Briggs sources/design
5. implement Briggs published positive control
6. reassess instrument-health bottleneck
7. Breckner–Sunde only if grid/month support is then justified
```

## Definition of ready for a new external benchmark

Before a benchmark moves to execution, confirm:

- exact source/release identity is known;
- required data can be lawfully obtained and kept outside Git where restricted;
- each input crosses the empirical boundary truthfully;
- source-specific joins/weighting/denominators live in the adapter rather than the generic kernel;
- Level-1 diagnostics can localize failure;
- Level-2 expected behavior is declared before execution;
- Level-3 target/tolerance is justified or explicitly not required;
- the run is labeled `purpose = calibration`.
