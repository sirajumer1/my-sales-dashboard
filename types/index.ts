// types/index.ts
export interface SalesData {
  year: number;
  month: string;
  sales: number;
  revenue?: number;
  product?: string;
}

export interface ChartProps {
  data: SalesData[];
  title: string;
}

export interface FilterState {
  selectedYear: number;
  threshold: number;
}
