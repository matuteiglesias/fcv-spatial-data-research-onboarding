import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type CardProps = {
  title: string;
  description: string;
  to: string;
  cta: string;
};

function HomeCard({title, description, to, cta}: CardProps) {
  return (
    <article className={styles.card}>
      <Heading as="h2" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardText}>{description}</p>
      <Link className={styles.cardLink} to={to}>
        {cta}
      </Link>
    </article>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <p className={styles.eyebrow}>Research archive onboarding</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Start with the manual
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/archive-map">
            View archive map
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Recovered research archive and onboarding manual for FCV spatial data, surveys, conflict, and development work.">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.introGrid}>
              <div>
                <p className={styles.sectionLabel}>What this is</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  A navigable memory layer for a recovered research archive.
                </Heading>
              </div>
              <p className={styles.sectionText}>
                This site organizes prior work on spatial data, conflict, surveys,
                service delivery, public works, and development projects. It is designed
                to help collaborators understand what exists, where to start, and what
                should be validated before renewed analysis begins.
              </p>
            </div>

            <div className={styles.cards}>
              <HomeCard
                title="Main recovered pipeline"
                description="Understand the 2023_Duke folder: geography, population, violence, DHS, Afrobarometer, empirical analysis, matching, and exports."
                to="/docs/main-pipeline/duke-overview"
                cta="Open pipeline overview"
              />
              <HomeCard
                title="Reusable spatial products"
                description="Inspect the spatial_data folder: ACLED exposure, OSM features, climate, distances, GeoJSONs, and map-ready outputs."
                to="/docs/data-products/spatial-data-overview"
                cta="Open spatial products"
              />
              <HomeCard
                title="Recovery plan"
                description="Follow the staged plan for documentation, validation, treatment recovery, and reuse-or-rebuild decisions."
                to="/docs/recovery-plan"
                cta="Open recovery plan"
              />
              <HomeCard
                title="Continuation Work"
                description="Forward-looking notes for resuming the investment, annotation, matching, and regression work after reviewing the archive structure and dataset inventory."
                to="/docs/continuation/"
                cta="Open continuation notes"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
