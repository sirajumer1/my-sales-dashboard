// data/sales.ts
import { SalesData } from '@/types';

export const salesData: SalesData[] = [
  // 2022 Data
  { year: 2022, month: 'Jan', sales: 15000, revenue: 150000, product: 'Electronics' },
  { year: 2022, month: 'Feb', sales: 18000, revenue: 180000, product: 'Electronics' },
  { year: 2022, month: 'Mar', sales: 22000, revenue: 220000, product: 'Electronics' },
  { year: 2022, month: 'Apr', sales: 19000, revenue: 95000, product: 'Clothing' },
  { year: 2022, month: 'May', sales: 25000, revenue: 125000, product: 'Clothing' },
  { year: 2022, month: 'Jun', sales: 28000, revenue: 140000, product: 'Home' },
  
  // 2023 Data
  { year: 2023, month: 'Jan', sales: 20000, revenue: 200000, product: 'Electronics' },
  { year: 2023, month: 'Feb', sales: 24000, revenue: 240000, product: 'Electronics' },
  { year: 2023, month: 'Mar', sales: 30000, revenue: 300000, product: 'Electronics' },
  { year: 2023, month: 'Apr', sales: 26000, revenue: 130000, product: 'Clothing' },
  { year: 2023, month: 'May', sales: 32000, revenue: 160000, product: 'Clothing' },
  { year: 2023, month: 'Jun', sales: 35000, revenue: 175000, product: 'Home' },
  
  // 2024 Data
  { year: 2024, month: 'Jan', sales: 28000, revenue: 280000, product: 'Electronics' },
  { year: 2024, month: 'Feb', sales: 32000, revenue: 320000, product: 'Electronics' },
  { year: 2024, month: 'Mar', sales: 38000, revenue: 380000, product: 'Electronics' },
  { year: 2024, month: 'Apr', sales: 34000, revenue: 170000, product: 'Clothing' },
  { year: 2024, month: 'May', sales: 40000, revenue: 200000, product: 'Clothing' },
  { year: 2024, month: 'Jun', sales: 42000, revenue: 210000, product: 'Home' },
];

// Data analysis utilities
export const getYearlyTotals = () => {
  const totals = salesData.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = 0;
    acc[item.year] += item.sales;
    return acc;
  }, {} as Record<number, number>);
  
  return totals;
};

export const getTopPerformingMonths = (year: number, limit = 3) => {
  return salesData
    .filter(item => item.year === year)
    .sort((a, b) => b.sales - a.sales)
    .slice(0, limit);
};
