import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import { ArrowRight, BarChart2, Shield, Zap, Layout, Globe, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.gridPattern}></div>

      <div className={styles.content}>
        {/* Badge */}
        <div className={styles.badge}>
          <Zap size={14} style={{ marginRight: '8px' }} />
          <span>v2.0 Performance Update</span>
        </div>

        {/* Hero Section */}
        <h1 className={styles.title}>
          Elevate Your <br /> Sales Intelligence
        </h1>
        <p className={styles.subtitle}>
          Transform raw data into actionable insights with our premium visualization platform.
          Real-time tracking, predictive analytics, and sophisticated reporting at your fingertips.
        </p>

        {/* CTA */}
        <Link href="/dashboard" className={styles.ctaButton}>
          <span>Explore Live Dashboard</span>
          <ArrowRight size={20} />
        </Link>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          <div className={styles.techItem}>
            <Layout size={16} color="#94a3b8" />
            <span className={styles.techText}>Next.js 15</span>
          </div>
          <div className={styles.techItem}>
            <Shield size={16} color="#94a3b8" />
            <span className={styles.techText}>TypeScript 5</span>
          </div>
          <div className={styles.techItem}>
            <Globe size={16} color="#94a3b8" />
            <span className={styles.techText}>Vercel Edge</span>
          </div>
          <div className={styles.techItem}>
            <Cpu size={16} color="#94a3b8" />
            <span className={styles.techText}>Turbopack</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <BarChart2 className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Deep Analytics</h3>
            <p className={styles.featureDescription}>
              Uncover hidden trends with our advanced multi-dimensional filtering and bar analysis.
            </p>
          </div>

          <div className={styles.feature}>
            <Zap className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Real-time Sync</h3>
            <p className={styles.featureDescription}>
              Experience zero-latency data hydration and seamless dashboard transitions.
            </p>
          </div>

          <div className={styles.feature}>
            <Shield className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Glass UI</h3>
            <p className={styles.featureDescription}>
              Modern design system featuring glassmorphism, backdrop-blur, and neon accents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
