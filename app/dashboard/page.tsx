'use client';

import { useState, useMemo } from 'react';
import { salesData } from '../../data/sales';
import SimpleChart from '../../components/chart';
import styles from '../../styles/Dashboard.module.css';
import { Calendar, Filter, TrendingUp, BarChart3 } from 'lucide-react';

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [threshold, setThreshold] = useState(0);

  const filteredData = useMemo(() => {
    return salesData
      .filter(item => item.year === selectedYear)
      .filter(item => item.sales >= threshold);
  }, [selectedYear, threshold]);

  const years = [2022, 2023, 2024];
  const totalSales = filteredData.reduce((sum, item) => sum + item.sales, 0);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.title}>Sales Intel</h1>
            <p className={styles.subtitle}>Real-time performance analytics</p>
          </div>
          <div className={styles.statsLabel}>
            Live Dashboard • v2.0
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Controls */}
        <div className={styles.controlsGrid}>

          {/* Year Selector */}
          <section className={styles.controlCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Calendar size={20} />
              </div>
              <h3 className={styles.cardTitle}>Time Range</h3>
            </div>
            <div className={styles.yearButtons}>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`${styles.yearButton} ${selectedYear === year ? styles.active : ''
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </section>

          {/* Sales Filter */}
          <section className={styles.controlCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Filter size={20} />
              </div>
              <h3 className={styles.cardTitle}>Sales Threshold</h3>
            </div>
            <div className={styles.sliderContainer}>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className={styles.slider}
                id="threshold-slider"
              />
              <div className={styles.sliderLabels}>
                <span>$0</span>
                <span className={styles.currentValue}>${threshold.toLocaleString()}</span>
                <span>$50K</span>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className={`${styles.controlCard} ${styles.statsCard}`}>
            <div className={styles.statsContent}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrapper}`} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                  <TrendingUp size={20} />
                </div>
                <h3 className={styles.cardTitle} style={{ color: '#fff' }}>Total Revenue</h3>
              </div>
              <div className={styles.statsValue}>
                ${totalSales.toLocaleString('en-US')}
              </div>
              <div className={styles.statsLabel}>
                {filteredData.length} active data points for {selectedYear}
              </div>
            </div>
          </section>
        </div>

        {/* Chart */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BarChart3 size={24} className={styles.iconWrapper} style={{ background: 'transparent' }} />
              <h2 className={styles.chartTitle}>Monthly Performance Overview</h2>
            </div>
            <div className={styles.subtitle}>
              Year: {selectedYear}
            </div>
          </div>
          <div className={styles.chartContent}>
            <SimpleChart
              data={filteredData}
              title=""
            />
          </div>
        </div>
      </main>
    </div>
  );
}
