import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Floating Background Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
      </div>

      <div className={styles.content}>
        {/* Icon */}
        <div className={styles.iconContainer}>
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>

        {/* Main Content */}
        <h1 className={styles.title}>Sales Dashboard</h1>
        <p className={styles.subtitle}>
          Interactive sales data visualization built with Next.js, TypeScript, and Recharts. 
          Explore sales trends from 2022-2024 with dynamic filtering and beautiful charts.
        </p>

        {/* CTA Button */}
        <div className={styles.buttonContainer}>
          <Link href="/dashboard" className={styles.ctaButton}>
            <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            View Dashboard
          </Link>
        </div>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          <div className={styles.techItem}>
            <div className={`${styles.techDot} ${styles.nextjs}`}></div>
            <span className={styles.techText}>Next.js 15</span>
          </div>
          <div className={styles.techItem}>
            <div className={`${styles.techDot} ${styles.typescript}`}></div>
            <span className={styles.techText}>TypeScript</span>
          </div>
          <div className={styles.techItem}>
            <div className={`${styles.techDot} ${styles.recharts}`}></div>
            <span className={styles.techText}>Recharts</span>
          </div>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <h3 className={styles.featureTitle}>Interactive Charts</h3>
            <p className={styles.featureDescription}>Dynamic bar charts with hover effects and detailed tooltips</p>
          </div>
          
          <div className={styles.feature}>
            <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            <h3 className={styles.featureTitle}>Smart Filtering</h3>
            <p className={styles.featureDescription}>Filter by year and sales threshold in real-time</p>
          </div>
          
          <div className={styles.feature}>
            <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className={styles.featureTitle}>TypeScript</h3>
            <p className={styles.featureDescription}>Built with full type safety and modern React patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
}
