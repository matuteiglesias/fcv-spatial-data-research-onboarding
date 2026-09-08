---
title: Africa Observability Lab
sidebar_position: 2
description: Human-facing map of FCV instrument characterization, calibration benchmarks, synthetic detectability, and commissioning.
last_verified: "2026-09-08"
---

# Africa Observability Lab

**Status: CALIBRATION KERNEL + E2 OBSERVABILITY INSTRUMENT IMPLEMENTED**  
**Real external commissioning: DHS HR 8 / 8 GREEN ACROSS THREE RELEASES**  
**Purpose: calibration, not substantive FCV inference**

The Africa Observability Lab asks a different question from ordinary FCV estimation:

> **Given the empirical measurement system and a declared scientific design, what known behavior can the apparatus recover?**

It coordinates heterogeneous instrument tests without creating a second substantive estimator framework.

## Benchmark kinds

The harness supports first-class `purpose = calibration` runs for:

- commissioning;
- positive controls;
- negative controls;
- synthetic injection;
- measurement agreement.

Recovery is represented independently at:

```text
Level 1 — pipeline coherence
Level 2 — qualitative known behavior
Level 3 — quantitative compatibility
```

A Level-3 target is required only when exact numeric compatibility is scientifically justified.

## September 8, 2026 external commissioning checkpoint

The first real protected-source commissioning wave is now complete.

The rebuilt DHS HR measurement system was pointed at three authoritative releases:

- Nigeria 2018 (`NGHR7BFL`);
- Uganda 2016 (`UGHR7BFL`);
- Zambia 2018 (`ZMHR71FL`).

Canonical HR ingestion uses distributed fixed-width `.DAT + .DCT` source authority.

The commissioning ledger is:

```text
Nigeria  4 / 4 GREEN
Uganda   2 / 2 GREEN
Zambia   2 / 2 GREEN
-------------------
TOTAL    8 / 8 GREEN
```

The checks commission several distinct parts of the survey instrument:

- `HV206` household electricity semantics;
- source-native `HV005` household weighting;
- `HV005 × HV012` de-jure population weighting;
- `HV025` urban-domain selection;
- `HV270` survey-relative wealth-quintile semantics;
- release-local `HV201` drinking-water categories;
- denominator, missing-state, and unmapped-code accounting.

All required cells recovered within the predeclared ±0.05 percentage-point tolerance implied by one-decimal report precision.

No joined protected microdata were persisted. The durable commissioning outputs contain aggregate diagnostics and provenance identities only.

This is **instrument commissioning evidence**, not a new substantive result about electricity, wealth, water, aid, or conflict.

## Reusable E2 observability

The old one-point `0.20 SD` injection check has been generalized into a reusable detector-characterization engine.

For each declared effect size and repetition it can report:

- injected truth;
- estimate / SE / CI;
- sign recovery;
- rejection;
- joint sign + rejection recovery;
- CI coverage;
- recovery error;
- sample and cluster counts;
- outcome SD;
- treatment support.

`delta = 0` is a first-class known synthetic null for false-positive and interval-coverage calibration around zero. It is not a statement that the real FCV effect is null.

## Current missing transition

The observability machinery is implemented and synthetically accepted, but the most important current characterization has not yet been recorded:

> run the observability curve on the **real current-artifact GeoGCDF → ACLED prepared experiment frame**.

That should come after the same real frame passes its ordinary lineage, support, coverage, timing, and falsification gates.

The desired packet is:

```text
real hash-backed experiment inputs
→ experiment projection + gates
→ estimator if permitted
→ effect-size observability curve
→ delta=0 null calibration
```

The observability result should characterize resolution; it should not be used to optimize the empirical specification toward significance.

## Positive controls

### Briggs (2017)

DHS commissioning has now removed the basic survey-measurement prerequisite for the first published-study positive control.

Briggs is valuable because it combines:

- multiple DHS survey identities;
- survey weights and population denominators;
- survey-region geography;
- donor-project geography/aggregation;
- fixed-effects regression;
- clustered uncertainty.

The next blocker is exact historical source/design recovery, not basic DHS HR semantics.

### Breckner & Sunde (2019)

This remains deliberately deferred because its native `0.75° grid × calendar month` design requires truthful regular-grid geography and monthly/subannual period infrastructure.

The project should not fake grid cells as GADM units or months as annual periods to implement one benchmark.

## Auxiliary empirical inputs and issue #16

Some calibration adapters need both semantic measurements and source-native auxiliary facts.

Conceptually:

```text
semantic measurement
+
provenance-validated auxiliary DatasetRef / RunManifest artifact
→ source-specific benchmark adapter
```

Harness issue #16 tracks the generic source-agnostic seam for this pattern.

After the successful DHS commissioning wave, issue #16 should be understood as a **generic Calibration Lab integration capability**—particularly useful for Briggs and future multi-input adapters—not as a blocker to the DHS commissioning evidence already obtained through the governed empirical commissioning API.

## Instrument-health view

The lab deliberately avoids a single aggregate score. Instrument health should remain separable across:

- source / contract integrity;
- commissioning;
- positive controls;
- negative controls;
- synthetic detectability;
- measurement agreement;
- known limitations.

A failure in one dimension is useful diagnostic evidence because it tells us which component needs attention.

## Current pull order

```text
1. freeze DHS official-report commissioning: 8 / 8 GREEN
2. run real current-artifact GeoGCDF → ACLED gates
3. run real-frame E2 observability curve + delta=0
4. recover exact Briggs historical inputs/design
5. run Briggs as published positive control
6. reassess the instrument-health bottleneck
7. revisit Breckner–Sunde only if grid/month support is justified
```

## Interpretation firewall

> **Synthetic recovery does not prove a real effect exists.**

> **External commissioning does not create a new substantive FCV finding.**

> **A positive control validates aspects of an apparatus/design; it is not evidence for the FCV target hypothesis.**

> **A benchmark discrepancy should be diagnosed, not tuned away.**
