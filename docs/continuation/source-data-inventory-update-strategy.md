---
title: Source Data Inventory and Update Strategy
sidebar_position: 4
description: This memo identifies current data sources for development investment projects that may be used to update or expand the original project data layer.
date: "2026-06-18"
---


# Module C — Source Data Inventory and Update Strategy

## 1. Purpose

This memo identifies current data sources for development investment projects that may be used to update or expand the original project data layer.

The project needs source data that can answer:

> Where and when did development investment projects take place, who financed them, what sector they belong to, and whether they can be linked to local employment, infrastructure, public works, violence, civic engagement, or service-delivery outcomes?

The original project used World Bank, AidData World Bank geocoded data, and AidData Chinese development finance data. Eric later asked whether there were updated versions of the investment-project databases. This memo treats that question as the first step before rebuilding matching, regressions, or annotation.

The main geographic focus is:

```text
Africa
Asia
```

The main source focus is:

```text
World Bank
China / Chinese official finance
Other bilateral and multilateral development finance sources
Infrastructure and public-works-relevant project data
```

---

## 2. Bottom-Line Assessment

The data update problem separates into two different tasks.

### 2.1 China update

China data can be updated more directly than the old pipeline allowed.

AidData now provides newer China-focused datasets, including global loans/grants through 2000–2023 and specialized infrastructure-related releases such as seaport finance and transition minerals. There is also a geospatial Chinese development finance release that provides spatial features for a subset of the GCDF data.

Practical conclusion:

```text
China source update = feasible.
China geospatial update = feasible but should be checked carefully for coverage and subset limitations.
```

### 2.2 World Bank update

World Bank project metadata can be updated through the official World Bank Projects API, which includes current and active projects, approval dates, lending instruments, sectors/themes, commitments, countries, and project URLs.

However, the old ready-made AidData World Bank geocoded release appears to cover World Bank IBRD/IDA projects approved from 1995–2014. A direct modern geocoded successor may not exist in the same format.

Practical conclusion:

```text
World Bank project metadata update = feasible.
World Bank geospatial update after 2014 = nontrivial.
```

For newer World Bank projects, we may need to combine:

```text
World Bank Projects API
+ IATI activity/location data where available
+ project documents / appraisal documents
+ project pages
+ optional manual or automated geocoding
```

### 2.3 Other donors

Other donors and multilateral development banks can be added, but most are not as immediately ready for subnational causal analysis. Many provide country-level project records or activity descriptions, but not consistent geocoded implementation sites.

Best general-purpose expansion source:

```text
IATI Datastore
```

Best official aid-flow source for donor/project descriptions:

```text
OECD CRS
```

Best infrastructure-specific source:

```text
World Bank PPI Database
```

Best additional infrastructure MDB source for Asia/Africa:

```text
AIIB project list
```

---

## 3. Recommended Source Tiers

## Tier 1 — Use Immediately

These are the most useful sources for the current recovery.

| Source | Use | Strength | Main limitation |
|---|---|---|---|
| AidData China loans/grants datasets | Update China official finance projects to 2023 | Project-level China finance, broad country coverage | Need check geospatial coverage and project-location unit |
| AidData Geospatial GCDF | Spatial China project features | Directly relevant to geospatial treatment construction | Subset of GCDF, not necessarily all projects |
| World Bank Projects API | Update WB project metadata to current projects | Official, current, API-accessible | Not consistently geocoded |
| AidData WB Geocoded Research Release | Historical WB geocoded baseline | Ready-made project-location data | Ends at 2014 |
| IATI Datastore | Multi-donor current project/activity data | Near-real-time, many donors, CSV/JSON/XML | Location coverage and data quality vary |
| OECD CRS | Official project/activity aid statistics | Broad donor coverage, standardized sectors | Usually not subnational/geocoded; lagged |

## Tier 2 — Use for Extension / Robustness

| Source | Use | Strength | Main limitation |
|---|---|---|---|
| World Bank PPI Database | Infrastructure and PPP projects | Infrastructure-specific, many LMICs | Not development-aid treatment in same sense; mostly country-level |
| AIIB Project List | Asia/Africa infrastructure projects | Infrastructure-focused, current project list | May require scraping/manual extraction; location detail varies |
| ADB project portal | Asia-focused MDB projects | Relevant for Asia expansion | Data/API access needs verification |
| AfDB project/map portals | Africa-focused MDB projects | Relevant for Africa expansion | Bulk/project-location access needs verification |
| JICA / KOICA / UK DevTracker / USAID / MCC | Donor-specific expansion | Good for specific donor analyses | Heterogeneous structure; often via IATI or donor APIs |

## Tier 3 — Use Carefully

| Source | Use | Risk |
|---|---|---|
| Kaggle copies of WB data | Convenience / historical reproduction | May be stale, unofficial, undocumented |
| Commercial infrastructure databases | Project finance detail | Usually paid/restricted |
| News-derived BRI trackers | Extra China triangulation | Source definitions differ; reproducibility risk |
| Scraped project PDFs | Geocoding enrichment | Requires NLP/geocoding validation |

---

## 4. Core Source Inventory

## 4.1 AidData — Global China Data

### What it provides

AidData is currently the highest-priority source for China-funded development projects.

Relevant current datasets include:

- China's Global Loans and Grants Dataset, Version 1.0
- China's Loans and Grants to Low- and Middle-Income Countries Dataset, Version 1.0
- AidData's Global Chinese Development Finance Dataset, Version 3.0
- AidData's Geospatial Global Chinese Development Finance Dataset, Version 3.0
- Chinese-financed Ports / CPORTS Dataset
- Chinese Financing for Transition Minerals Dataset

### Why it matters

The old project used AidData China / TUFF data. The current AidData source ecosystem appears to provide updated and expanded China finance datasets through 2023, with specialized geospatial and infrastructure releases.

### Recommended use

For the main project:

```text
Primary China source:
AidData China's Loans and Grants to Low- and Middle-Income Countries Dataset, Version 1.0
or
AidData China's Global Loans and Grants Dataset, Version 1.0
```

For spatial treatment construction:

```text
AidData Geospatial Global Chinese Development Finance Dataset, Version 3.0
```

For infrastructure-specific analysis:

```text
CPORTS 2000–2025
Transition Minerals Dataset 2000–2023
```

### Data fields to inspect

```text
project_id
title
description
recipient country
sector
flow type
financier / lender
commitment year
implementation dates
amount
loan/grant
status
geospatial features
location precision
```

### Key validation questions

1. Does the 2000–2023 loans/grants dataset include the same IDs as GCDF v3.0?
2. Does the geospatial GCDF release cover all or only a subset of projects?
3. What is the location precision and feature type?
4. Are locations project sites, recipient capitals, administrative approximations, or inferred sites?
5. Can project-level labels be linked cleanly to location-level features?
6. Does the new release change the old treatment counts substantially?

---

## 4.2 AidData — World Bank Geocoded Research Release

### What it provides

The AidData World Bank Geocoded Research Release is a ready-made geocoded project-location dataset for World Bank IBRD/IDA projects.

It includes:

```text
projects table
locations table
transactions table
ancillary project metadata
unique World Bank project IDs
```

### Why it matters

This is the cleanest historical World Bank geocoded source used by the old pipeline. It is directly compatible with spatial treatment construction.

### Main limitation

The release covers projects approved from 1995–2014. It is excellent as a historical baseline but not sufficient for a 2026 update.

### Recommended use

Use it as:

```text
historical WB geocoded baseline
```

Do not treat it as current.

For post-2014 WB projects, use the World Bank Projects API and then evaluate geocoding options separately.

---

## 4.3 World Bank Projects API

### What it provides

The World Bank Projects API gives current official project metadata.

Useful fields include:

```text
project ID
project name
country
region
approval fiscal year
board approval date
lending instrument
status
commitment amount
IBRD/IDA commitment
sector/theme fields
team lead
borrower
implementing agency
project URL
project documents
```

### Why it matters

This is the most important source for updating the World Bank side to recent years.

The old Kaggle or downloaded WB project data should be replaced by a documented API pull.

### Main limitation

The API is not a ready-made subnational geocoded project-location dataset. It gives current project metadata, but the implementation locations may need to be recovered from project documents, IATI records, or manual/automated geocoding.

### Recommended use

Use it for:

```text
WB project metadata update
WB project title/objective/sector/lending instrument fields
annotation input
post-2014 project universe
official project URLs and documents
```

Then link to geospatial data through one of:

```text
IATI location elements
project documents / PDFs
manual geocoding
named-place extraction
official project maps if available
```

---

## 4.4 IATI Datastore

### What it provides

IATI is a common publishing standard for development and humanitarian activities. The IATI Datastore provides current activity-level data in CSV, JSON, and XML, with search and API access.

It can include:

```text
activity title
description
reporting organization
participating organizations
recipient country
sector
transactions
budgets
dates
activity status
location elements
results
documents
```

### Why it matters

IATI is the best general-purpose source for current multi-donor project/activity data. It is especially useful if the project expands beyond WB and China.

It is also potentially useful for recovering geolocation for newer World Bank or other MDB projects if those publishers include location data.

### Main limitation

IATI data quality varies by publisher. Location data are not consistently available, and location precision varies.

### Recommended use

Use IATI as:

```text
current multi-donor activity registry
possible source of location elements
bridge to donor-specific project pages
source for WB/ADB/AfDB/UN/EU/UK/USAID/etc. when published
```

Do not use IATI blindly as a final treatment dataset. First audit:

```text
which publishers report usable locations
which sectors are relevant
which projects have usable dates
which financial values are commitments vs disbursements
```

---

## 4.5 OECD Creditor Reporting System (CRS)

### What it provides

OECD CRS provides official aid activity data with:

```text
provider
recipient
sector / purpose code
project descriptions
commitments
disbursements
flow type
channel
type of aid
year
```

### Why it matters

CRS is the most authoritative standardized source for official development finance across many bilateral and multilateral donors. It is useful for donor coverage, sector coverage, and project-description text.

### Main limitation

CRS is generally not subnational/geocoded. It is better for project universe, donor coverage, and text/sector classification than for project-location treatment construction.

### Recommended use

Use CRS as:

```text
donor/source coverage audit
sector and project-description source
country-year donor activity universe
triangulation against IATI and donor APIs
```

Use it less for:

```text
local treatment assignment
```

unless combined with external geocoding.

---

## 4.6 World Bank PPI Database

### What it provides

The World Bank Private Participation in Infrastructure database tracks infrastructure projects in low- and middle-income countries, especially energy, telecoms, transport, and water/sewerage.

### Why it matters

If the research question expands from development aid to infrastructure investment more broadly, the PPI database is a strong infrastructure-specific source.

### Main limitation

PPI is about private participation in infrastructure, not necessarily public works or official foreign aid. It may not align with the WB/China treatment logic unless treated as a separate robustness or extension source.

### Recommended use

Use as:

```text
infrastructure-only extension
private participation / PPP treatment layer
sectoral comparison source
```

Do not mix directly with official development finance without a clear design decision.

---

## 4.7 AIIB Project List

### What it provides

AIIB publishes a project list with filters for:

```text
approval year
member country
sector
financing type
status
project name
financing amount
```

### Why it matters

AIIB is directly relevant for infrastructure projects in Asia and beyond, including some African members and projects. It is a natural extension source if the project moves beyond WB and China.

### Main limitation

The web project list may not provide clean bulk downloads or geocoded locations. Extraction may require scraping or manual API discovery.

### Recommended use

Use as:

```text
Asia infrastructure extension source
co-financed project discovery source
source of project URLs/documents for manual geocoding
```

---

## 5. Practical Update Strategy

The update should not start by downloading everything. It should start with a source crosswalk.

## Step 1 — Freeze the old source universe

Create:

```text
old_source_inventory.csv
```

With:

```text
source_family
raw_file_name
derived_file_name
project_id_field
location_id_field
years_covered
countries_covered
unit_of_observation
n_projects
n_locations
amount_field
sector_field
date_field
used_in_notebooks
```

## Step 2 — Pull current source metadata

Create:

```text
new_source_inventory.csv
```

For:

```text
AidData China 2000–2023
AidData Geospatial GCDF v3.0
World Bank Projects API
IATI Datastore sample
OECD CRS sample
PPI Database sample
AIIB Project List sample
```

## Step 3 — Compare old vs new

Create:

```text
source_update_crosswalk.csv
```

With:

```text
old_source
new_source_candidate
same_institution
same_project_id
same_unit
same_geography
same_time_coverage
same_amount_definition
same_sector_definition
recommended_use
risk_level
```

## Step 4 — Decide canonical sources

Recommended v0 decision:

```text
China canonical source:
AidData China Loans and Grants to Low- and Middle-Income Countries, plus Geospatial GCDF where spatial features exist.

World Bank canonical source:
World Bank Projects API for current metadata; AidData WB Geocoded Research Release for historical geocoded locations; IATI/project documents for post-2014 geocoding.

Other donors:
IATI + OECD CRS for inventory; donor-specific APIs only if they add enough geospatial value.
```

## Step 5 — Build a “source availability matrix”

Example:

| Source | Current to 2023/2026? | Project-level? | Location-level? | Amounts? | Sectors? | Text? | Africa? | Asia? | Ready for treatment? |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| AidData China Loans/Grants | yes, to 2023 | yes | partial/link | yes | yes | yes | yes | yes | partial |
| Geospatial GCDF | yes-ish | link | yes | link | link | link | yes | yes | yes for covered subset |
| World Bank Projects API | current | yes | no/limited | yes | yes | yes/docs | yes | yes | no, needs geocoding |
| AidData WB Geocoded | no, to 2014 | yes | yes | yes | yes | yes | yes | yes | yes historically |
| IATI | current | activity | sometimes | yes | yes | yes | yes | yes | depends |
| OECD CRS | lagged | activity | no | yes | yes | yes | yes | yes | no, needs geocoding |
| PPI | current-ish | project | country/limited | yes | yes | yes | yes | yes | no/partial |
| AIIB | current | project | no/limited | yes | yes | yes | some | yes | no/partial |

---

## 6. Recommended Immediate Tasks

### Task 1 — Confirm AidData China downloads

Download and inspect:

```text
China's Loans and Grants to Low- and Middle-Income Countries Dataset, Version 1.0
AidData's Geospatial Global Chinese Development Finance Dataset, Version 3.0
AidData's Global Chinese Development Finance Dataset, Version 3.0
```

Output:

```text
china_source_update_note.md
china_source_fields.csv
china_project_location_coverage.csv
```

### Task 2 — Query World Bank Projects API

Pull World Bank projects for:

```text
Africa
South Asia
East Asia and Pacific
Middle East and North Africa
approval years 2015–2026
IBRD/IDA product lines
```

Output:

```text
wb_projects_2015_2026_raw.json
wb_projects_2015_2026_flat.csv
wb_source_fields.csv
```

### Task 3 — Test IATI for World Bank and other publishers

Use IATI Datastore to test:

```text
World Bank
ADB
AfDB
EU institutions
UK FCDO
USAID
MCC
JICA
KOICA
```

For each publisher, count:

```text
n activities
n with sectors
n with financial transactions
n with recipient country
n with location elements
n with coordinates
n with documents
```

Output:

```text
iati_publisher_location_audit.csv
```

### Task 4 — Decide whether to add other donors

Only add a donor source if it has:

```text
project IDs
sector or text descriptions
approval/start dates
financial amounts
recipient countries
usable locations or geocodable documents
```

Otherwise it should remain in an inventory layer, not a treatment layer.

---

## 7. Source Access Links

AidData datasets:
https://www.aiddata.org/datasets

AidData China dashboard:
https://china.aiddata.org/

AidData World Bank Geocoded Research Release:
https://www.aiddata.org/data/world-bank-geocoded-research-release-level-1-v1-4-2

World Bank Projects API:
https://search.worldbank.org/api/v2/projects

World Bank PPI Database:
https://ppi.worldbank.org/en/ppi

IATI Datastore:
https://iatistandard.org/en/iati-tools-and-resources/iati-datastore/

OECD CRS / International Development Statistics:
https://www.oecd.org/dac/financing-sustainable-development/development-finance-data/idsonline.htm

AIIB Projects:
https://www.aiib.org/en/projects/list/index.html

---

## 8. Key Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Source version drift | Old and new datasets may not share IDs or definitions | Build source crosswalk before merging |
| Project vs location unit confusion | Multi-location projects can be overrepresented | Label at project level, propagate to locations |
| Missing geocoding after 2014 | WB API is current but not fully geocoded | Use IATI + project documents + manual geocoding |
| Sector definition mismatch | WB, AidData, CRS, IATI sectors differ | Preserve original sectors and create harmonized sector layer separately |
| Amount definition mismatch | Commitments, disbursements, project cost, loan amount differ | Store amount type explicitly |
| China source definitional changes | New AidData China datasets may not match old TUFF/GCDF v2/v3 exactly | Compare old and new counts by country/year/sector |
| IATI quality variation | Publishers differ in completeness | Run publisher-level audit before use |
| Donor expansion creep | Adding many donors can delay main recovery | Start with WB + China; add donors only after evidence of usable geospatial data |

---

## 9. Recommended Module C Decision

For the revived project, the canonical source plan should be:

```text
1. China:
   Update from AidData’s current China loans/grants data and geospatial GCDF.

2. World Bank:
   Use the World Bank Projects API for current metadata.
   Keep AidData’s World Bank Geocoded Research Release as the historical geocoded baseline.
   Test IATI and project-document geocoding for post-2014 locations.

3. Other donors:
   Use IATI and OECD CRS for inventory and source discovery.
   Only promote specific donors to treatment construction if they provide usable project-level locations.

4. Infrastructure extension:
   Use World Bank PPI and AIIB as separate infrastructure-focused extensions, not as direct substitutes for official development finance unless the empirical design is revised.
```

---

## 10. Bottom Line

The source update is possible, but it should be treated as a separate data-recovery module.

The immediate deliverable should be:

```text
investment_source_inventory_v0_1.csv
```

with one row per candidate source, documenting:

```text
source name
producer
coverage years
geographic scope
unit of observation
project ID
location availability
sector/text availability
amount fields
download/API route
recommended role
known risks
```

Only after that should the project rebuild treatment construction, annotation, matching, or regressions.
