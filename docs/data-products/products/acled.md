---
title: ACLED Violence Measurement
sidebar_label: ACLED
last_verified: "2026-08-23"
---

# ACLED Violence Measurement

**Product status: IMPLEMENTED / CURRENT CONTRACT-BACKED PRODUCT**  
**Real current-artifact experiment status: NOT YET RECORDED AS CANONICAL**  
**Producing repository:** [`fcv-empirical-data`](https://github.com/matuteiglesias/fcv-empirical-data)

## What it is

A source-specific ACLED measurement path that preserves source events first, then relates them explicitly to shared geography and time before producing a sparse analytical measurement.

```text
registered ACLED snapshot
→ source-native Silver events
→ event ↔ geography membership
→ event ↔ PeriodIndex membership
→ sparse Gold area × period × native event type
```

## Source authority

The authoritative input is a registered external ACLED export represented by `SourceSnapshotRef`, including source/release/snapshot identity and file hashes.

Historical recovered ACLED aggregates are parity and calibration evidence; they are not the authority for the rebuilt source rows.

## Natural grain

**Silver:** one supplied ACLED source row, with a stable `event_row_id` plus the native source event ID kept separately.

**Gold:**

```text
geo_uid × period_id × native_event_type
```

The Gold table is intentionally sparse.

## Geography

Spatial assignment is produced through `spatial-data-foundation`, not embedded as an irreversible source rewrite.

Membership states preserve distinctions such as:

- uniquely matched;
- outside geography;
- boundary / multiple candidates;
- missing coordinates;
- invalid coordinates.

The first Gold policy includes only uniquely matched events. Ambiguous events are not duplicated or tie-broken silently.

## Time and coverage

Period assignment uses the shared `PeriodIndex` and a declared `PeriodScheme`. The legacy-compatible `T2_y2001` scheme is a parameter, not source semantics.

The current Gold coverage contract uses:

```text
absent_row_semantics = unknown
```

Therefore a missing area-period-event-type row is **not automatically zero violence**.

Observed minimum/maximum event dates are descriptive support; they do not by themselves prove complete source reporting over the interval.

## Important measured facts

The normalized Silver envelope retains at least:

- event date;
- coordinates;
- fatalities;
- native event and sub-event type;
- geography precision;
- time precision;
- country identifiers where supplied;
- source release and snapshot identity;
- every original source column under a `source__` prefix.

The Gold measurement includes:

- `event_count`;
- `fatal_event_count`;
- `fatalities`;
- known/missing fatality event counts;
- `record_present = true` for represented aggregate rows.

Zero-fatality source events are preserved. No default `GEO_PRECISION == 1` filter is applied upstream.

## Durable contract artifacts

The path persists or references:

- `SourceSnapshotRef`;
- Silver and Gold `DatasetRef` objects;
- geography/period lineage inputs;
- `MeasurementContract`;
- `CoverageContract`;
- `RunManifest`;
- QA and parity artifacts;
- content hashes and code revision where supplied.

## Known limitations / do not infer

Do not infer that:

- an absent Gold row means zero fatalities;
- ACLED is automatically the outcome for every experiment;
- `Violence against civilians` is the only legitimate taxonomy selection;
- geography ambiguity has been solved by convenience;
- source precision is a scientific inclusion rule;
- current ACLED is harmonized with UCDP;
- synthetic CI proves real ACLED/GADM acceptance.

## Experiment history

The experiment harness has a current contracted projection path that can explicitly choose, for example:

```text
native_event_type = Violence against civilians
value = fatalities
role = outcome / pre-outcome
timing = +1 / -1 period
```

That path is synthetic-accepted, but the harness documentation explicitly states that a real current-artifact contracted E1/E2 run has not yet been recorded as canonical.

Recovered real-data E1/E2 calibration exists on the historical/reconstructed lane and should remain labeled as such.

## Technical references

- [`fcv-empirical-data/docs/VIOLENCE_ACLED.md`](https://github.com/matuteiglesias/fcv-empirical-data/blob/main/docs/VIOLENCE_ACLED.md)
- [`fcv-experiment-harness/CONTRACTED_ACLED_EXPERIMENTS.md`](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/CONTRACTED_ACLED_EXPERIMENTS.md)
