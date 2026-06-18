import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Explicit sidebar for the recovered FCV / spatial data research archive.
// Important: items must match Docusaurus document IDs, not necessarily filenames.

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'archive-map',

    {
      type: 'category',
      label: 'Main Pipeline',
      collapsed: false,
      items: [
        'main-pipeline/duke-overview',
        'main-pipeline/geography',
        'main-pipeline/population',
        'main-pipeline/violence',
        'main-pipeline/dhs',
        'main-pipeline/afrobarometer',
        'main-pipeline/empirical-study',
        'main-pipeline/matching-vertical',
      ],
    },

    {
      type: 'category',
      label: 'Data Products',
      collapsed: false,
      items: [
        'data-products/spatial-data-overview',
        'data-products/dataset-inventory',
        'data-products/validation-status',
      ],
    },

    {
      type: 'category',
      label: 'Continuation Work',
      collapsed: false,
      items: [
        'continuation/index',
        'continuation/source-data-inventory-update-strategy',
        'continuation/annotation-project-classification-protocol',
        'continuation/experimental-design-regression-pipeline',
      ],
    },

    {
      type: 'category',
      label: 'Notebooks',
      collapsed: false,
      items: [
        'notebooks/notebook-guide',
        'notebooks/html-pdf-exports',
      ],
    },


    {
      type: 'category',
      label: 'Legacy and Salvage',
      collapsed: true,
      items: [
        'legacy-and-salvage/legacy-folders',
        'legacy-and-salvage/machine-learning-spatial-analysis',
        'legacy-and-salvage/previous-projects',
      ],
    },

    'recovery-plan',
  ],
};

export default sidebars;