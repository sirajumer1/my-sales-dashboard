'use client';

import { useState, useMemo } from 'react';
import { salesData } from '../../data/sales';
import SimpleChart from '../../components/chart';
import styles from '../../styles/Dashboard.module.css';

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
  console.log('Filtered Data:', filteredData);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Sales Dashboard</h1>
          <p className={styles.subtitle}>Interactive sales data visualization</p>
        </div>
      </div>

      <div className={styles.main}>
        {/* Controls */}
        <div className={styles.controlsGrid}>
          
          {/* Year Selector */}
          <div className={styles.controlCard}>
            <h3 className={styles.cardTitle}>Select Year</h3>
            <div className={styles.yearButtons}>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`${styles.yearButton} ${
                    selectedYear === year ? styles.active : styles.inactive
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Sales Filter */}
          <div className={styles.controlCard}>
            <h3 className={styles.cardTitle}>Sales Threshold</h3>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>0</span>
              <span className={styles.currentValue}>{threshold.toLocaleString()}</span>
              <span>50K</span>
            </div>
          </div>

          {/* Statistics */}
          <div className={`${styles.controlCard} ${styles.statsCard}`}>
            <div className={styles.statsContent}>
              <h3 className={styles.cardTitle}>Statistics</h3>
              <div className={styles.statsValue}>
                {totalSales.toLocaleString('en-US')}
              </div>
              <div className={styles.statsLabel}>
                Total Sales • {filteredData.length} records
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h2 className={styles.chartTitle}>Sales Performance - {selectedYear}</h2>
          </div>
          <div className={styles.chartContent}>
            <SimpleChart 
              data={filteredData} 
              title="" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
