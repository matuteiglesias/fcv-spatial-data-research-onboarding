---
title: Africa Observability Lab
sidebar_position: 2
description: Human-facing map of FCV instrument characterization, calibration benchmarks, synthetic detectability, and commissioning.
last_verified: "2026-08-23"
---

# Africa Observability Lab

**Status: CALIBRATION KERNEL + E2 OBSERVABILITY INSTRUMENT IMPLEMENTED**  
**Real external commissioning benchmarks: DESIGNED / NOT YET EXECUTED**  
**Purpose: calibration, not substantive FCV inference**

The harness now has a dedicated layer for a different scientific question from ordinary treatment-effect estimation:

> **Given this empirical measurement system and scientific design, what kind of signal should we be able to observe?**

This is instrument characterization.

It asks whether the FCV apparatus can recover **known behavior**: a published descriptive statistic, an expected positive-control pattern, a deliberately null benchmark, a known injected signal, or agreement between measurement implementations.

It does **not** ask whether a new FCV substantive hypothesis is true.

## Why this is a separate layer

The active system now contains three distinct scientific activities:

```text
EMPIRICAL PRODUCTION
what was measured?
        ↓
EXPERIMENT EXECUTION
how is the measurement used scientifically?
        ↓
INSTRUMENT CHARACTERIZATION
what known behavior can this apparatus recover?
```

A calibration benchmark can use the same contracted empirical inputs and experiment machinery without becoming a substantive research result.

Every Observability Lab benchmark must declare:

```text
purpose = calibration
```

## Calibration Lab kernel

The merged harness kernel makes calibration benchmarks first-class and declarative without creating a second estimator framework.

A `CalibrationBenchmarkSpec` declares:

- benchmark identity and description;
- benchmark kind;
- `purpose = calibration`;
- empirical inputs;
- optional measurement projections;
- expected/reference behavior;
- required recovery level;
- adapter identity;
- parameters, notes, and limitations.

The kernel remains source-agnostic. DHS weighting logic, ACLED event construction, project-region aggregation, and similar source-specific behavior belong in benchmark adapters or upstream empirical products—not in the kernel.

## Benchmark kinds

The current kernel supports five kinds:

| Kind | Human meaning | Example |
|---|---|---|
| **commissioning** | Can the rebuilt measurement system reproduce an authoritative external quantity? | Nigeria DHS 2018 household electricity share |
| **positive control** | Can the apparatus recover a well-established directional/pattern result? | Briggs aid-targeting pattern |
| **negative control** | Does the apparatus correctly fail to find behavior that should be absent? | declared null/control benchmark |
| **synthetic injection** | If known truth is injected into the actual design substrate, how reliably is it recovered? | E2 effect-size detection curve |
| **measurement agreement** | How strongly do two measurement implementations agree and where do they diverge? | WBad versus WBkg treatment agreement |

These kinds are complementary. No single benchmark can characterize the whole instrument.

## Recovery levels

Each benchmark records recovery independently at three levels:

```text
Level 1 — pipeline
Can the declared data + benchmark pipeline execute coherently?

Level 2 — qualitative
Does the expected sign / pattern / ordering / null behavior recover?

Level 3 — quantitative
Does a declared numeric target recover within a justified tolerance?
```

Each level can be:

```text
pass
fail
not_required
not_run
```

This matters because exact coefficient parity is often scientifically unjustified even when a qualitative positive control should recover.

A published benchmark may therefore require Level 2 while making Level 3 conditional on exact historical source-release recovery.

## E2 observability instrument

The former one-off E2 `0.20 SD` injection check is now a reusable detector-characterization instrument.

The reference path uses the existing fully contracted investment + ACLED E2 design and **does not change** treatment, outcome, geography, periodization, eligibility, or estimator semantics.

For caller-declared injected effect sizes, the instrument records repetition-level:

- injected truth in outcome-SD and raw units;
- estimated effect and standard error;
- 95% interval;
- sign recovery;
- rejection rate;
- joint sign + rejection recovery;
- CI coverage of known truth;
- absolute/relative recovery error;
- sample and cluster counts;
- observed outcome SD;
- treatment support.

The durable outputs include:

```text
repetition_results.csv
effect_size_summary.csv
detection_curve.csv
null_calibration_summary.csv
```

The empirical analysis frame is deliberately not written by the observability output function.

### Synthetic null

`delta = 0` is first-class.

It calibrates false-positive behavior against known injected zero truth without making the much stronger claim that the real social relationship is null.

### Why this is stronger than one power number

The instrument maps:

```text
injected effect size
        ↓
probability and quality of recovery
```

Rather than summarizing observability with a single MDE, it exposes detection, sign recovery, interval coverage, estimate distribution, and uncertainty as a curve over declared effect sizes.

## Instrument health is multidimensional

The calibration suite can render an instrument-health report across separate dimensions:

- source / contract integrity;
- commissioning;
- positive controls;
- negative controls;
- synthetic detectability;
- measurement agreement;
- known limitations.

There is deliberately **no global instrument score**.

A system can be healthy on source integrity and synthetic recovery while still failing an external commissioning benchmark. That discrepancy is diagnostic evidence, not something to average away.

## Real/local data firewall

Calibration can consume local durable empirical artifacts through the same contract-backed seam as ordinary experiments.

The calibration layer records dataset identities, hashes, aggregate diagnostics, benchmark specification hash, code revision, seed, and sanitized result hashes.

It does not persist:

- protected input tables;
- local filesystem paths;
- DHS microdata;
- source rows merely to prove execution.

Missing local data should produce `NOT_RUN`; integrity failure should remain a visible pipeline failure.

## Current Observability Lab state

| Capability | Status |
|---|---|
| Contract-backed calibration benchmark kernel | **IMPLEMENTED / SYNTHETIC PASS** |
| Level 1 / 2 / 3 recovery model | **IMPLEMENTED** |
| Commissioning / positive / negative / injection / agreement benchmark kinds | **IMPLEMENTED** |
| Sanitized calibration run manifests | **IMPLEMENTED** |
| Multidimensional instrument-health report | **IMPLEMENTED** |
| Reusable E2 observability injection engine | **IMPLEMENTED / SYNTHETIC PASS** |
| Fully contracted investment + ACLED observability reference-path test | **SYNTHETIC PASS** |
| Official DHS commissioning benchmark design | **DESIGNED / NOT RUN** |
| Briggs (2017) published positive control | **RESEARCH-READY AFTER PREREQUISITES** |
| Breckner & Sunde (2019) climate/conflict benchmark | **DEFERRED — SHARED GRID + MONTHLY TIME CAPABILITY NEEDED** |
| Real current-artifact instrument-health suite | **NOT YET RECORDED** |

## One important current kernel gap

The first real DHS commissioning consumer exposed a useful generic limitation, tracked in harness issue #16.

A commissioning benchmark may need both:

```text
semantic measurement
HV206 → household electricity access

and

source-native auxiliary facts
HV005 household sample weight
```

The current calibration input seam validates ordinary semantic `EmpiricalMeasurementBundle`s, but does not yet have a generic way to pass a provenance-validated source-native auxiliary dataset without fabricating a `MeasurementContract`.

The desired fix is generic:

```text
ordinary measurement input
+
auxiliary DatasetRef + RunManifest + verified bytes
        ↓
source-specific adapter performs join / weighting / denominator logic
```

The kernel itself should never learn DHS variable names.

## Near-term commissioning sequence

The current evidence-driven order is:

```text
close generic auxiliary-input seam (#16)
        ↓
Nigeria DHS 2018 official-report commissioning
        ↓
Briggs (2017) published-study positive control
        ↓
reassess instrument bottleneck
        ↓
Breckner–Sunde only after shared regular-grid + monthly semantics exist
```

This sequence is deliberate. If the instrument cannot reproduce a simple authoritative DHS table cell, a failure on a multi-source published regression would be difficult to diagnose.

## Interpretation rules

Four rules should remain visible whenever Observability Lab results are discussed:

> **Calibration is not substantive inference.**

> **Synthetic detectability is not evidence that a real effect exists.**

> **Failure to reproduce a benchmark is diagnostic evidence, not permission to tune the implementation until the target appears.**

> **Level-3 numeric parity is required only when source/design equivalence makes it scientifically meaningful.**

## Technical authority

Detailed executable semantics live in `fcv-experiment-harness`:

- [`CALIBRATION_LAB.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/CALIBRATION_LAB.md)
- [`OBSERVABILITY.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/OBSERVABILITY.md)
- [`docs/calibration/`](https://github.com/matuteiglesias/fcv-experiment-harness/tree/main/docs/calibration)

For the current external targets and prerequisites, continue to [Calibration Benchmark Catalog](./calibration-benchmark-catalog.md).
