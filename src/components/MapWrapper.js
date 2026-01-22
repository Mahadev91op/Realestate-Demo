'use client'; // यह Client Component है

import dynamic from 'next/dynamic';

// LiveMap को यहाँ dynamic import करें (ssr: false के साथ)
const LiveMap = dynamic(() => import('./LiveMap'), { 
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 flex items-center justify-center">Loading Map...</div>
});

export default function MapWrapper() {
  return <LiveMap />;
}