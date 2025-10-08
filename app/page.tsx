// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sales Dashboard</h1>
        <p className="text-xl mb-6">Simple Next.js Dashboard with Charts</p>
        <Link 
          href="/dashboard" 
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
