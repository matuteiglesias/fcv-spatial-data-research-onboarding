---
title: "ADM2 China–World Bank: W5–W8 Results"
sidebar_position: 0
description: "Current source-locked donor, sector-proxy, and J/O/N country-period standardization experiments."
last_verified: "2026-11-16"
---

# ADM2 China–World Bank: W5–W8 Results

**Research checkpoint · 16 November 2026 · PL-015**

The current analysis uses a common **44,940 ADM2-area × financing-biennium panel** (6,420 ADM2 areas, 47 African countries, seven periods from 2001–2014), with ACLED violence-against-civilians (VAC) measured in the following biennium. It links **1,948 China** and **587 World Bank** projects through **19,588 unique project–ADM2–period exposures**.

Three completed studies answer related but distinct questions:

| Study | Comparison | Principal result | Scientific status |
| --- | --- | --- | --- |
| **W5** donor baseline | China-only minus WB-only source exposure, with ADM2 and country×period fixed effects | **+0.656 pp** next-period VAC incidence; 95% CI [−1.699, +3.012], p=.578 | Inconclusive donor difference |
| **W7** sector composition | Candidate employment/productivity sectors minus other sectors, within each donor; same FE design | **China −0.025 pp** [−2.913, +2.862], p=.986; **WB −1.502 pp** [−6.551, +3.548], p=.552 | Inconclusive sector-proxy difference; broad WB support thin |
| **W8** standardized three-group ADM2 comparison | Shared J-target country-period weights, J vs N, O vs N, and J vs O | See matched-sample table below | Complete descriptive benchmark; baseline-risk differences matter |

The studies have **different comparison populations and estimators**. In particular, W8's J−O should not numerically reproduce W7's district-FE J−O.

## What J, O, and N mean

For each donor **separately**, in each ADM2 financing biennium:

- **J — candidate productive/employment sector exposure:** only projects belonging to the W7 broad sector set (enterprise, physical infrastructure, skills/education).
- **O — other-sector exposure:** only projects belonging to the complementary sector categories (health/social, governance/finance, humanitarian/environmental/other).
- **N — no recorded exposure:** no China or WB source-recorded investment through the current financing period **within the observed 2001–2014 panel**.
- **Mixed and both-donor** exposures remain tracked in the master panel and are excluded from the clean three-group contrasts.

These are **sector-composition groups**, not observed counts of jobs created. “Other sector” does not imply zero workers; “no recorded investment” refers to the two covered donor sources and observed history.

Financing timing is unchanged from W5: commitment/approval during biennium *t*, subsequent VAC during *t+1*. ADM3 matching, completed-versus-planned status, resident-population weighting, and year-shifted outcomes are not part of this completed release.

## Common-support standardization

Exact strata are **country × financing biennium**. Retain only strata `s` where all three groups are represented. With `n(J,s)` J observations in stratum `s`, define the common weight:

```text
w(s) = n(J,s) / sum_over_retained_strata n(J,s)

mean(g) = sum_s w(s) × mean(VAC at t+1 | group=g, stratum=s)

J−N = mean(J)−mean(N)
O−N = mean(O)−mean(N)
J−O = (J−N)−(O−N)
```

The **same** stratum weights define all three group means, which makes the third contrast an exact algebraic difference between the first two. The target is the **geographic/time distribution of matched J area-period observations**, not a person-weighted average.

### Primary W8 matched populations and results

| Quantity | China | World Bank |
| --- | ---: | ---: |
| Complete country-period strata | **128** | **11** |
| Countries represented | **39** | **10** |
| Matched J / O / N ADM2-periods | **1,448 / 2,576 / 13,082** | **86 / 87 / 484** |
| Effective weighted O sample size (Kish) | **83.05** | **34.37** |
| Effective weighted countries | **16.84** | **5.26** |
| Standardized VAC incidence, J | 13.54% | 19.77% |
| Standardized VAC incidence, O | 23.08% | 23.75% |
| Standardized VAC incidence, N | 13.45% | 13.75% |
| **J−N** | **+0.09 pp** | **+6.02 pp** |
| **O−N** | **+9.64 pp** | **+10.00 pp** |
| **J−O** | **−9.55 pp** | **−3.98 pp** |

The effective sample size accounts for concentration induced by standardization weights. For China, 2,576 O observations correspond to **Kish N≈83**; the top 100 O area-period records receive roughly 74.6% of O's standardized weight.

**Uncertainty, primary W8:** 1,999 whole-country bootstrap resamples; exploratory percentile 95% intervals (percentage points).

| Contrast | China 95% interval | World Bank 95% interval |
| --- | --- | --- |
| J−N | [−5.32, +4.64] | [−4.26, +13.44] |
| O−N | [+2.15, +17.30] | [+0.21, +24.46] |
| J−O | [−14.06, −4.87] | [−24.15, +6.82] |

**The most informative diagnostic is the earlier violence comparison.** For China, applying the **same matched areas and weights** to the previous-biennium VAC indicator gives **J−O = −9.96 pp**; the next-biennium gap is **−9.55 pp**, a change of **+0.41 pp**. Most of the level gap is thus visible in the earlier measurements. Some J/O areas also had earlier source-recorded projects, so the previous outcome is not universally a pre-treatment observation. Country-period standardization does not, by itself, align local baseline violence risk.

World Bank's 11 complete strata across 10 countries and its low weighted effective N make the broad comparison **thin**. Under the prespecified narrow sector rule, WB J−O changes to **+1.64 pp**, reinforcing the need to report its sensitivity.

## Prespecified W8 sensitivity and W7 benchmark

| Comparison | China J−N | China J−O | WB J−N | WB J−O |
| --- | ---: | ---: | ---: | ---: |
| W8 broad + no previous recorded donor exposure in N | +0.09 pp | −9.55 pp | +6.02 pp | −3.98 pp |
| W8 broad + no donor exposure **this** period in N | −0.43 pp | −8.63 pp | +7.10 pp | −3.98 pp |
| W8 narrow productive/infrastructure sector rule + cleaner N | −1.03 pp | −11.10 pp | +10.82 pp | +1.64 pp |

For comparison, **W7's district- and country-period-FE sector contrast** on the full panel was **−0.025 pp for China** and **−1.502 pp for WB**. W8's much larger negative China J−O *level* gap is not evidence that W7 missed an employment effect: W8 uses a restricted common-support sample, different weights and no ADM2 fixed effects. The previous-violence comparison makes that distinction substantively important.

## What has been accepted—and what remains a separate measurement question

**Completed:** source-qualified identity and category propagation for all 2,535 projects; 19,588 project-area links and donor-count conservation; deterministic sector mapping checked across the full universe; nested outcome-blind rule audit 10→20→50→100 (100 total, **0 clear mapping errors**, 2 semantic ambiguities); W7 full-panel fits; W8 three-group weighting and country-block bootstrap; independent design review, tests and immutable v1 run receipts.

**Separate scientific layer:** project-level source-supported explicit employment objectives, documented indirect local paid-work channels and implementation evidence. The current reviewed project-label ledger still has **0 of 2,535 employment labels adjudicated**. This does not change the completed W7/W8 *sector-proxy* results.

### Authority and reproducing the results

The [FCV Experiment Harness](https://github.com/matuteiglesias/fcv-experiment-harness) owns frozen policies, estimators and machine-readable results:

- [W7 technical results and interpretation](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W7_ESTIMANDS_POPULATIONS_AND_NULLS_20261116.md)
- [W8 frozen scientific design](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W8_ADM2_JON_SCIENTIFIC_DESIGN_V0.md)
- [W8 scientific results and support diagnostics](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/experiments/W8_ADM2_JON_SCIENTIFIC_RESULTS_20261116.md)
- [W8 18-contrast machine-readable table](https://github.com/matuteiglesias/fcv-experiment-harness/blob/main/docs/results/w8_jon_adm2_matched_contrasts_20261116.csv)

The authoritative private W8 empirical release is `w8-adm2-jon-20261116-v1` (hashed inputs and outputs). The W7 model is `w7-frozen-proxy-experiments-20261116-r2`. Row-level analytical data are not published on this documentation site.
