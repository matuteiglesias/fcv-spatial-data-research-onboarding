import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This file is evaluated in Node.js. Avoid browser-only APIs here.

const config: Config = {
  title: 'FCV Spatial Data Research Archive',
  tagline: 'Recovered research archive and onboarding manual for spatial data, surveys, conflict, and development work',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Update this when the public deployment URL is chosen.
  url: 'https://fcv-spatial-data-research-onboarding.example.com',
  baseUrl: '/',

  // Update these if deploying to GitHub Pages.
  organizationName: 'matuteiglesias',
  projectName: 'fcv-spatial-data-research-onboarding',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FCV Spatial Data Archive',
      logo: {
        alt: 'FCV Spatial Data Archive Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual',
        },
        {
          to: '/docs/archive-map',
          label: 'Archive Map',
          position: 'left',
        },
        {
          to: '/docs/recovery-plan',
          label: 'Recovery Plan',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start here',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Archive Map',
              to: '/docs/archive-map',
            },
            {
              label: 'Recovery Plan',
              to: '/docs/recovery-plan',
            },
          ],
        },
        {
          title: 'Core materials',
          items: [
            {
              label: '2023 Duke Overview',
              to: '/docs/main-pipeline/2023-duke-overview',
            },
            {
              label: 'Spatial Data Products',
              to: '/docs/data-products/spatial-data-products',
            },
            {
              label: 'Dataset Inventory',
              to: '/docs/data-products/dataset-inventory',
            },
            {
              label: 'Notebook Guide',
              to: '/docs/notebooks/notebook-guide',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Repository README',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FCV Spatial Data Research Archive. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
