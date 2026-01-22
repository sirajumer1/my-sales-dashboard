'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import styles from '../styles/Dashboard.module.css';

interface ChartProps {
  data: Array<{ year: number; month: string; sales: number }>;
  title: string;
}

interface TooltipPayload {
  value: number;
  name: string;
  payload: {
    month: string;
    sales: number;
    year: number;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipLabel}>{`Month: ${label}`}</p>
        <p className={styles.tooltipValue}>
          {`$${Number(payload[0].value).toLocaleString()}`}
        </p>
      </div>
    );
  }
  return null;
};

export default function SimpleChart({ data, title }: ChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div style={{ height: '400px' }} />;

  if (!data || data.length === 0) {
    return (
      <div className="h-80 flex flex-col items-center justify-center text-gray-500 bg-white/5 rounded-2xl border-2 border-dashed border-white/10">
        <p className="text-lg font-medium">No sales data matches filters</p>
        <p className="text-sm opacity-60">Adjust threshold or select another year</p>
      </div>
    );
  }

  // Calculate stats for the summary
  const total = data.reduce((sum, item) => sum + item.sales, 0);
  const avg = total / data.length;

  return (
    <div className="w-full">
      {title && <h2 className="text-xl font-bold mb-6 text-white">{title}</h2>}

      <div style={{ height: '400px', width: '100%', marginBottom: '2rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                <stop offset="100%" stopColor="#818cf8" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)', radius: 8 }} />
            <Bar
              dataKey="sales"
              radius={[6, 6, 0, 0]}
              barSize={40}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.sales >= avg ? 'url(#barGradient)' : 'rgba(99, 102, 241, 0.4)'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Highest Month', value: data.reduce((p, c) => p.sales > c.sales ? p : c).month },
          { label: 'Avg Monthly Sales', value: `$${Math.round(avg).toLocaleString()}` },
          { label: 'Growth Status', value: 'Steady', color: '#22c55e' },
          { label: 'Total Volume', value: `${data.length} Months` }
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">{stat.label}</p>
            <p className="text-sm font-semibold text-white" style={stat.color ? { color: stat.color } : {}}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
