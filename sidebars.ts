import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Explicit sidebar for the FCV spatial-data research documentation.
// The visible navigation is intentionally smaller than the archive: historical and
// placeholder pages remain available by URL without receiving first-class prominence.

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
          id: 'continuation/experimental-infrastructure',
          label: 'Experimental Infrastructure & Validation',
        },
        {
          type: 'doc',
          id: 'continuation/experimental-design-regression-pipeline',
          label: 'Experimental Designs',
        },
        {
          type: 'doc',
          id: 'continuation/annotation-project-classification-protocol',
          label: 'Project Classification Protocol',
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
          id: 'data-products/dataset-inventory',
          label: 'Dataset Inventory',
        },
        {
          type: 'doc',
          id: 'data-products/validation-status',
          label: 'Validation Status',
        },
        {
          type: 'doc',
          id: 'continuation/source-data-inventory-update-strategy',
          label: 'Source Data & Update Strategy',
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
