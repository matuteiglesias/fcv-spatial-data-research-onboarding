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
        <p className={styles.eyebrow}>Active empirical research workspace</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/current-status">
            Current research status
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/continuation/experimental-design-regression-pipeline">
            Experimental designs
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
      description="FCV spatial-data research workspace connecting recovered data infrastructure, active empirical design, validation, and research continuity.">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.introGrid}>
              <div>
                <p className={styles.sectionLabel}>Research continuity</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  Recovered data infrastructure, now organized for active empirical work.
                </Heading>
              </div>
              <p className={styles.sectionText}>
                The archive-recovery phase produced a usable foundation: the main 2023
                pipeline is mapped, major data products are documented, and the empirical
                design can be reconstructed. Current work focuses on testing which treatment,
                timing, geography, counterfactual, outcome, and estimator choices are actually
                supported by the data.
              </p>
            </div>

            <div className={styles.cards}>
              <HomeCard
                title="Current research status"
                description="See what has been recovered, what is active now, the immediate empirical entry point, and the design questions that remain open."
                to="/docs/current-status"
                cta="Open current status"
              />
              <HomeCard
                title="Experimental infrastructure"
                description="Understand the A/B/C operating model: empirical infrastructure, experiment specifications, and validation or calibration gates."
                to="/docs/continuation/experimental-infrastructure"
                cta="Open experimental infrastructure"
              />
              <HomeCard
                title="Data and validation"
                description="Distinguish available data from experiment surfaces that are defined, tested on real FCV data, blocked, or still awaiting validation."
                to="/docs/data-products/validation-status"
                cta="Open validation status"
              />
              <HomeCard
                title="Recovered archive"
                description="Navigate the historical 2023 pipeline, reusable spatial products, notebooks, dataset inventory, and legacy material when provenance or implementation detail is needed."
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
