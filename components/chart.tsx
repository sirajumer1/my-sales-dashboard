'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: Array<{ year: number; month: string; sales: number }>;
  title: string;
}

export default function SimpleChart({ data, title }: ChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="h-64 flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 rounded">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6 text-gray-900">{title}</h2>
      
      {/* Chart Container */}
      <div className="h-80 w-full mb-6">
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip 
              formatter={(value) => [`${Number(value).toLocaleString()} units`, 'Sales']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Bar 
              dataKey="sales" 
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>

      {/* Chart Summary */}
      <div className="border-t pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <p className="text-gray-500">Months</p>
            <p className="font-semibold">{data.length}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Highest</p>
            <p className="font-semibold">
              {data.reduce((prev, current) => prev.sales > current.sales ? prev : current).month}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Lowest</p>
            <p className="font-semibold">
              {data.reduce((prev, current) => prev.sales < current.sales ? prev : current).month}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Total</p>
            <p className="font-semibold">
              {data.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
