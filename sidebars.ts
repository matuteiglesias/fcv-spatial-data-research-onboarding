import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Explicit sidebar for the FCV spatial-data research documentation.
// Current authority/status overlays and human-facing catalogs receive first-class prominence;
// detailed recovered and strategy/design-history pages remain available as reference without
// being mistaken for the current technical source of truth.

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'current-status',
          label: 'Current Research Status',
        },
        {
          type: 'doc',
          id: 'research-system',
          label: 'Research System Architecture',
        },
        {
          type: 'doc',
          id: 'archive-map',
          label: 'Archive Map',
        },
      ],
    },

    {
      type: 'category',
      label: 'Active Research',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'experiments/experiment-surface-catalog',
          label: 'Experiment Surface Catalog',
        },
        {
          type: 'doc',
          id: 'continuation/experimental-infrastructure',
          label: 'Research Workflow & Validation',
        },
        {
          type: 'doc',
          id: 'continuation/experimental-design-status',
          label: 'Experimental Design Status',
        },
        {
          type: 'doc',
          id: 'continuation/project-classification-status',
          label: 'Project Classification Status',
        },
        {
          type: 'category',
          label: 'Design & Coding Reference',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'continuation/experimental-design-regression-pipeline',
              label: 'Detailed Design & Regression Memo',
            },
            {
              type: 'doc',
              id: 'continuation/annotation-project-classification-protocol',
              label: 'Detailed Classification Protocol',
            },
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Data & Validation',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'data-products/current-data-authority',
          label: 'Current Data Authority',
        },
        {
          type: 'category',
          label: 'Empirical Product Catalog',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'data-products/product-catalog',
          },
          items: [
            {
              type: 'doc',
              id: 'data-products/products/acled',
              label: 'ACLED Violence',
            },
            {
              type: 'doc',
              id: 'data-products/products/aiddata-geogcdf',
              label: 'AidData GeoGCDF',
            },
            {
              type: 'doc',
              id: 'data-products/products/worldbank-projects',
              label: 'World Bank Projects API',
            },
            {
              type: 'doc',
              id: 'data-products/products/aiddata-clg-lmic',
              label: 'AidData CLG-LMIC',
            },
            {
              type: 'doc',
              id: 'data-products/products/survey-substrate',
              label: 'Survey-Native Substrate',
            },
            {
              type: 'category',
              label: 'DHS Survey Stack',
              collapsed: false,
              link: {
                type: 'doc',
                id: 'data-products/products/dhs-overview',
              },
              items: [
                {
                  type: 'doc',
                  id: 'data-products/products/dhs-hr',
                  label: 'Household Recode (HR)',
                },
                {
                  type: 'doc',
                  id: 'data-products/products/dhs-household-measurements',
                  label: 'Household Semantic Measurements',
                },
                {
                  type: 'doc',
                  id: 'data-products/products/dhs-gc',
                  label: 'Geospatial Covariates (GC)',
                },
                {
                  type: 'doc',
                  id: 'data-products/products/dhs-gps',
                  label: 'GE/GPS Geography',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'data-products/validation-status',
          label: 'Validation Status',
        },
        {
          type: 'doc',
          id: 'continuation/source-data-implementation-status',
          label: 'Source Implementation Status',
        },
        {
          type: 'category',
          label: 'Recovered / Strategy Reference',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'data-products/dataset-inventory',
              label: 'Recovered Dataset Inventory',
            },
            {
              type: 'doc',
              id: 'continuation/source-data-inventory-update-strategy',
              label: 'June 2026 Source Strategy',
            },
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Recovered 2023 Work',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'main-pipeline/duke-overview',
          label: '2023 Duke Overview',
        },
        {
          type: 'doc',
          id: 'data-products/spatial-data-overview',
          label: 'Spatial Data Overview',
        },
        {
          type: 'doc',
          id: 'notebooks/notebook-guide',
          label: 'Notebook Guide',
        },
      ],
    },

    {
      type: 'category',
      label: 'Archive / Historical',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'recovery-plan',
          label: 'Recovery Plan',
        },
        {
          type: 'category',
          label: 'Legacy & Salvage',
          collapsed: true,
          items: [
            'legacy-and-salvage/legacy-folders',
            'legacy-and-salvage/machine-learning-spatial-analysis',
            'legacy-and-salvage/previous-projects',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
