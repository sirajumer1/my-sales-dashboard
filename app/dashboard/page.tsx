// app/dashboard/page.tsx
'use client';
import { useState } from 'react';
import { salesData } from '../../data/sales';
import SimpleChart from '../../components/chart';

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  
  // Filter data by selected year
  const filteredData = salesData.filter(item => item.year === selectedYear);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>
        
        {/* Year Selector */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <label className="block text-sm font-medium mb-2">Select Year:</label>
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="border rounded px-3 py-2"
          >
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
          </select>
        </div>
        
        {/* Chart */}
        <SimpleChart 
          data={filteredData} 
          title={`Sales for ${selectedYear}`} 
        />
      </div>
    </div>
  );
}
