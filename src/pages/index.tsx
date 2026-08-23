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
        <p className={styles.eyebrow}>Human-facing FCV research workspace</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/current-status">
            Current research status
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/research-system">
            Research system architecture
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="FCV research workspace connecting reusable empirical foundations, source-native FCV data, experiment design, validation, and recovered research memory.">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.introGrid}>
              <div>
                <p className={styles.sectionLabel}>Research continuity</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  From recovered archive to an explicit empirical research system.
                </Heading>
              </div>
              <p className={styles.sectionText}>
                The project now separates reusable contracts and spatial infrastructure,
                FCV source-native empirical measurements, downstream experiment choices,
                and human-facing readiness evidence. The recovered 2021–2023 work remains
                research memory and parity evidence, but it is no longer the only model of
                how active FCV data should be organized.
              </p>
            </div>

            <div className={styles.cards}>
              <HomeCard
                title="Current research status"
                description="See what is implemented now, what is still in progress, which evidence tracks exist, and the immediate scientific and empirical bottlenecks."
                to="/docs/current-status"
                cta="Open current status"
              />
              <HomeCard
                title="Research system architecture"
                description="Understand the boundary between reusable foundations, FCV empirical facts, experiment-side scientific use, and this human collaboration layer."
                to="/docs/research-system"
                cta="Open system map"
              />
              <HomeCard
                title="Research workflow and validation"
                description="Follow the path from source-backed measurements through the contracted input boundary, experiment projection, treatment derivation, gates, and interpretation."
                to="/docs/continuation/experimental-infrastructure"
                cta="Open workflow"
              />
              <HomeCard
                title="Validation status"
                description="Distinguish synthetic acceptance, empirical materialization, recovered real-data calibration evidence, and the still-pending current contracted real-data runs."
                to="/docs/data-products/validation-status"
                cta="Open validation status"
              />
              <HomeCard
                title="Experimental designs"
                description="Review the scientific design lineage, candidate counterfactuals, treatment concepts, estimator families, and unresolved identification decisions."
                to="/docs/continuation/experimental-design-regression-pipeline"
                cta="Open experimental designs"
              />
              <HomeCard
                title="Recovered archive"
                description="Navigate the historical 2023 pipeline, reusable spatial products, notebooks, dataset inventory, and legacy material when reconstruction or parity detail is needed."
                to="/docs/archive-map"
                cta="Open archive map"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
