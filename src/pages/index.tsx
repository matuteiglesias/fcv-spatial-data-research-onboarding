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
        <p className={styles.eyebrow}>Human-facing FCV scientific-instrument workspace</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/current-status">
            Current research status
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/experiments/observability-lab">
            Africa Observability Lab
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
      description="FCV research workspace connecting empirical foundations, source-native measurements, experiment design, observability calibration, commissioning, and recovered research memory.">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.introGrid}>
              <div>
                <p className={styles.sectionLabel}>Research continuity</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  From recovered archive to a commissioned empirical scientific instrument.
                </Heading>
              </div>
              <p className={styles.sectionText}>
                FCV now separates reusable foundations, source-native empirical measurements,
                downstream experiment choices, and explicit instrument characterization. The
                Africa Observability Lab asks what known signals and external benchmarks the
                apparatus can recover before substantive results are over-interpreted.
              </p>
            </div>

            <div className={styles.cards}>
              <HomeCard
                title="Current research status"
                description="See what is implemented now, the three active evidence lanes, current blockers, and the highest-value next commissioning and experiment runs."
                to="/docs/current-status"
                cta="Open current status"
              />
              <HomeCard
                title="Africa Observability Lab"
                description="Understand the calibration kernel, reusable synthetic effect-size observability, recovery levels, instrument-health dimensions, and calibration firewall."
                to="/docs/experiments/observability-lab"
                cta="Open Observability Lab"
              />
              <HomeCard
                title="Calibration benchmarks"
                description="Review the official DHS commissioning targets, Briggs positive control, Breckner–Sunde handoff, prerequisites, and execution order."
                to="/docs/experiments/calibration-benchmark-catalog"
                cta="Open benchmark catalog"
              />
              <HomeCard
                title="Research system architecture"
                description="Understand the boundary between reusable foundations, FCV empirical facts, experiment-side scientific use, instrument characterization, and this human layer."
                to="/docs/research-system"
                cta="Open system map"
              />
              <HomeCard
                title="Research workflow and validation"
                description="Follow the path from empirical production through experiment projection, gates, observability, external commissioning, estimation, and interpretation."
                to="/docs/continuation/experimental-infrastructure"
                cta="Open workflow"
              />
              <HomeCard
                title="Validation status"
                description="Distinguish current contracted acceptance, observability/commissioning evidence, and recovered real-data calibration without collapsing them into one pipeline status."
                to="/docs/data-products/validation-status"
                cta="Open validation status"
              />
              <HomeCard
                title="Experiment surfaces"
                description="Review substantive FCV research surfaces separately from calibration benchmarks: what can run, what is partial, and what remains blocked."
                to="/docs/experiments/experiment-surface-catalog"
                cta="Open experiment catalog"
              />
              <HomeCard
                title="Recovered archive"
                description="Navigate the historical 2023 pipeline, spatial products, notebooks, dataset inventory, and legacy evidence when reconstruction or parity detail is needed."
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
