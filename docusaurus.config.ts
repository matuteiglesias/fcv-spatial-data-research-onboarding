import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This file is evaluated in Node.js. Avoid browser-only APIs here.

const config: Config = {
  title: 'FCV Spatial Data Research',
  tagline: 'Recovered data infrastructure, active empirical design, and research continuity',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://fcv-spatial-data-research-onboardin.vercel.app',
  baseUrl: '/',

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
      title: 'FCV Spatial Data Research',
      logo: {
        alt: 'FCV Spatial Data Research Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Research Manual',
        },
        {
          to: '/docs/current-status',
          label: 'Current Status',
          position: 'left',
        },
        {
          to: '/docs/continuation/experimental-design-regression-pipeline',
          label: 'Experiments',
          position: 'left',
        },
        {
          to: '/docs/archive-map',
          label: 'Archive',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Active research',
          items: [
            {
              label: 'Current Research Status',
              to: '/docs/current-status',
            },
            {
              label: 'Experimental Infrastructure',
              to: '/docs/continuation/experimental-infrastructure',
            },
            {
              label: 'Experimental Designs',
              to: '/docs/continuation/experimental-design-regression-pipeline',
            },
            {
              label: 'Validation Status',
              to: '/docs/data-products/validation-status',
            },
          ],
        },
        {
          title: 'Recovered research',
          items: [
            {
              label: 'Archive Map',
              to: '/docs/archive-map',
            },
            {
              label: '2023 Duke Overview',
              to: '/docs/main-pipeline/duke-overview',
            },
            {
              label: 'Dataset Inventory',
              to: '/docs/data-products/dataset-inventory',
            },
            {
              label: 'Historical Recovery Plan',
              to: '/docs/recovery-plan',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'Documentation Repository',
              href: 'https://github.com/matuteiglesias/fcv-spatial-data-research-onboarding',
            },
            {
              label: 'Experiment Harness',
              href: 'https://github.com/matuteiglesias/fcv-experiment-harness',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FCV Spatial Data Research. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
