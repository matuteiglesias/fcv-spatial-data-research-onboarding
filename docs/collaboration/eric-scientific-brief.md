---
title: FCV Scientific Instrument — State of Reconstruction
sidebar_position: 2
description: Eric-facing scientific brief on what changed, why it matters, what the rebuilt system can now test, and what remains to be commissioned.
last_verified: "2026-08-23"
---

# FCV Scientific Instrument — State of Reconstruction

**Audience:** Eric and close scientific collaborators  
**Purpose:** scientific orientation, not implementation history  
**Reading time:** ~7 minutes

> **Over the last week, the FCV reconstruction changed character. What began as recovering an old empirical workflow has become the construction of a calibrated scientific measurement system.**

The central idea is simple:

> **measurement first, experiment second.**

The rebuilt system keeps source facts, empirical measurement choices, geography/time semantics, and scientific experiment choices separate. This matters because the reconstruction showed that several assumptions hidden inside historical processed files were not merely engineering details; they changed what could be inferred scientifically.

The second step is more important still. We can now begin to **calibrate the empirical instrument itself** rather than only estimate coefficients with it.

That means asking three questions separately:

```text
1. Did we measure the thing correctly?

2. Did we construct the experiment correctly?

3. Is this empirical design capable of seeing
   the magnitude of effect we care about?
```

## The 5-minute picture

```text
AUTHORITATIVE SOURCES
        │
        ├── ACLED events
        ├── investment projects
        └── DHS households / clusters
        │
        ▼
SOURCE-NATIVE MEASUREMENTS
        │
        ├── explicit provenance
        ├── natural observation grain
        ├── geography
        ├── temporal semantics
        └── uncertainty / coverage
        │
════════════════════════════════════
        EXPERIMENT BOUNDARY
        │
        ▼
measurement projection
scientific role / timing / eligibility choices
        │
        ▼
estimators + diagnostics
        │
        ▼
AFRICA OBSERVABILITY LAB
        │
        ├── known published quantities
        ├── positive controls
        ├── negative / null controls
        ├── synthetic signal injection
        └── published external benchmarks
```

The line in the middle is the important one. Upstream data products describe **what was measured**. Downstream experiments decide **how those measurements are used scientifically**.

No project is intrinsically “treated.” No survey variable is intrinsically an outcome. No sparse missing conflict row automatically means zero. No uncertain public survey coordinate is silently treated as exact location.

## 1. The problem we found

The recovered FCV workflow could produce analysis tables and estimates, but many scientific assumptions were already embedded in the inherited processed data.

Reproducibility alone was therefore not enough. We could reproduce a transformation without necessarily knowing whether the transformation encoded a scientifically defensible interpretation.

Three examples capture the problem.

### Sparse conflict data

An absent ACLED area-period row cannot automatically be interpreted as zero violence. Zero is valid only when coverage evidence supports that interpretation.

That distinction affects the outcome surface, sample construction, and ultimately the estimator.

### Multi-location projects

A project associated with several locations does not imply that the full project financial amount was spent independently in every location.

Geographic exposure and financial interpretation therefore have to remain separate unless an allocation rule is explicitly justified.

### DHS geospatial covariates

DHS cluster covariates cannot all inherit “survey year” as their temporal meaning. A variable may be static, annual, climatological, survey-time, retrospective, or temporally unresolved.

Treating all of them as contemporaneous survey-year controls would silently manufacture time semantics.

These are examples of one general problem:

> **A convenient analysis table can hide measurement assumptions that deserve to remain visible.**

## 2. The response: rebuild around measurement authority

The reconstruction now follows a stricter hierarchy.

Authoritative sources are preserved at their natural grains. Geography, time, coverage, and uncertainty are represented explicitly. Reusable empirical meanings can be added when they are supported by source documentation or codebooks.

Only after that does an experiment declare roles such as:

```text
treatment
outcome
control / covariate
timing
eligibility
comparison group
estimator
```

This means the same empirical measurement can participate in several scientific designs without being rebuilt or relabeled upstream.

For example, an ACLED event measurement remains an ACLED event measurement. One experiment may select violence against civilians fatalities at `t+1`; another may select a different event family or timing. The scientific role changes downstream, while the source measurement remains stable.

The same principle now applies to DHS. We can establish that a household variable has a documented empirical meaning without deciding that it must become an FCV outcome or control.

## 3. The new capability: calibrating the instrument

The largest conceptual change is the **Africa Observability Lab**.

In plain language:

> **It is a suite of known empirical quantities, known signals, and known nulls used to characterize what the FCV measurement and analysis system can and cannot observe.**

The calibration ladder is:

```text
COMMISSIONING
Can we recover externally known measurements?

        ↓

POSITIVE / NEGATIVE CONTROLS
Can we see known structure?
Do we manufacture signal under known nulls?

        ↓

SYNTHETIC OBSERVABILITY
What is our empirical detection frontier?

        ↓

EXTERNAL SCIENTIFIC BENCHMARKS
Can the complete system reproduce
well-characterized published Africa results?

        ↓

SUBSTANTIVE FCV SCIENCE
Ask difficult questions with a calibrated instrument.
```

This turns calibration from an informal reassurance into a first-class scientific activity.

A benchmark can ask whether the pipeline executes coherently, whether a known qualitative pattern is recovered, and—when source equivalence justifies it—whether a known quantitative target is reproduced within a declared tolerance.

A failed benchmark is not something to tune away. It is evidence about where the instrument disagrees with an external standard and therefore a diagnostic target.

## 4. Why the investment–conflict story is stronger now

Historically, the recovered investment → violence calibration produced small and imprecise estimated effects.

The old endpoint could easily have been:

```text
small coefficient
+
large standard error
→ p > .05
```

The new question is more informative:

> **How large would the true signal need to be for this empirical configuration to recover it reliably?**

The earlier one-off synthetic positive-control injection has now been generalized into an observability instrument that can examine a grid of known injected effect sizes.

Its conceptual output is:

```text
true effect size
      ↓
probability and quality of recovery
```

For each effect size we can characterize sign recovery, rejection, confidence-interval coverage, estimation error, and related diagnostics under the same empirical structure and estimator.

A synthetic zero is also first-class. This checks whether the detector manufactures apparent treatment signal when the injected truth is exactly zero.

This changes how weak substantive results should eventually be interpreted.

If a real estimate is around `0.01 SD` but the design only begins to recover effects reliably near `0.08 SD`, “not statistically significant” is not the most important conclusion. The more relevant statement is that the current apparatus has limited resolution below that scale.

The observability frontier therefore helps separate:

```text
no large detectable effect
```

from:

```text
design too weak to resolve effects of this magnitude
```

## 5. DHS gives us a clean commissioning test

DHS is useful because the rebuilt survey system can be tested against authoritative external quantities before being used for a difficult FCV causal question.

The survey architecture now keeps separately auditable:

- household observations;
- source survey weights and design facts;
- cluster identity;
- public displaced GPS coordinates;
- cluster geospatial covariates;
- temporal semantics;
- documented household-variable meanings.

This means we do not need to demonstrate reliability by immediately running a complicated cross-source regression.

The first candidate commissioning target is deliberately simple:

```text
Nigeria DHS 2018
official weighted household electricity rate
        59.4%

            versus

our reconstructed household data
+ documented electricity-access semantics
+ official survey weights
+ declared denominator
```

Reproducing that one number would externally test an entire chain:

```text
survey identity
→ household grain
→ variable semantics
→ missing-code treatment
→ weights
→ denominator
```

That is much stronger evidence about the measurement system than saying that unit tests pass.

Once a simple official DHS statistic is commissioned successfully, more demanding benchmarks become diagnostically meaningful rather than compound debugging exercises.

## 6. Published external benchmarks

The current benchmark portfolio is deliberately small.

The strongest next published-study survey benchmark is **Briggs (2017), _Does Foreign Aid Target the Poorest?_** It combines DHS wealth distributions, survey weighting/denominators, survey-region geography, and historical geocoded development-finance data.

Its value is not that we need another substantive aid-targeting result. Its value is that reproducing its qualitative pattern would test several rebuilt measurement components together.

A complementary later benchmark is **Breckner & Sunde (2019), _Temperature extremes, global warming, and armed conflict_**. That design would stress ACLED event coverage, monthly time alignment, regular-grid geography, weather exposure, structural zeros, and fixed-effects estimation.

We are deliberately not forcing that paper into the current infrastructure prematurely. Its native monthly and regular-grid design should only be implemented once those are represented as truthful reusable capabilities rather than one-off paper-specific hacks.

## 7. What is established — and what is not

The current claim should remain narrow.

```text
architecture                    ✅
source reconstruction           ✅
measurement boundaries          ✅
contract-backed experiment use  ✅
synthetic acceptance            ✅
observability machinery         ✅
calibration framework           ✅
benchmark design                ✅

real-source commissioning       ⏳
```

In particular, we have **not** yet demonstrated that the complete rebuilt system is validated on the full local real-data environment.

The right statement is:

> **The scientific instrument has been rebuilt and its calibration protocol exists. Commissioning against real source data is the next gate.**

Not:

> “Everything is validated.”

This distinction is central to the credibility of the reconstruction.

## 8. Near-term milestones

The next sequence is intentionally empirical rather than architectural.

**First:** run the protected/local source artifacts through the rebuilt paths and retain non-sensitive provenance and QA evidence.

**Second:** commission the DHS survey arm against a simple official report statistic, beginning with Nigeria 2018 household electricity.

**Third:** characterize the real investment–conflict design across a meaningful grid of injected effect sizes, so substantive estimates can be interpreted relative to the instrument's detection frontier.

**Fourth:** move to selected external published-study benchmarks, starting with a survey/cross-source benchmark once the simpler survey commissioning step passes.

At that point the project can ask substantive FCV questions with much clearer knowledge of what the empirical apparatus has demonstrated it can observe.

## Three questions for discussion

### 1. Calibration framing

**Does this calibration/observability framing correspond to how you would like the revived FCV work to establish empirical credibility?**

### 2. Scientific priority

**Which substantive class of FCV relationship would be most valuable to characterize once the instrument is commissioned?**

The answer could influence which exposure, survey, geography, and observability surface we prioritize next.

### 3. External standards

**Are there published results or previous FCV results you regard as particularly good external calibration standards?**

A useful benchmark need not be famous; it should strongly test a component of the measurement or experiment machinery and have a well-defined expected result.

---

For implementation evidence only if useful, see the [Technical Appendix](./eric-technical-appendix.md). For the current calibration architecture, see the [Africa Observability Lab](../experiments/observability-lab.md).