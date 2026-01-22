'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Leaflet को डायनामिक इंपोर्ट
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function LiveMap() {
  const [isMounted, setIsMounted] = useState(false);
  const officeLocation = [28.6139, 77.2090]; // Connaught Place, Delhi

  useEffect(() => {
    setIsMounted(true);
    // Leaflet Icon Fix
    (async () => {
      try {
        const L = (await import('leaflet')).default;
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
      } catch (e) {
        console.error("Icon fix error:", e);
      }
    })();
  }, []);

  if (!isMounted) {
    return <div className="h-[300px] w-full bg-gray-50 flex items-center justify-center text-gray-400 font-bold animate-pulse">Loading Map...</div>;
  }

  return (
    // lg:h-[85vh] = PC पर फुल हाइट | Mobile पर auto हाइट
    <section className="relative w-full h-auto lg:h-[85vh] bg-gray-50 flex items-center overflow-hidden py-6 lg:py-0">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10">
        
        {/* flex-col-reverse: Mobile पर Map ऊपर आएगा, Content नीचे। PC पर Grid रहेगा */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-4 lg:gap-6 h-full items-center">
          
          {/* --- Content Side (Buttons & Info) --- */}
          <div className="w-full lg:col-span-4 flex flex-col justify-center space-y-4">
            
            {/* Header: Mobile पर छोटा, PC पर बड़ा */}
            <div className="text-left mb-1 lg:mb-2">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-2">
                Visit HQ
              </span>
              <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Find Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Here.</span>
              </h2>
              <p className="text-gray-500 text-xs lg:text-sm mt-1 lg:mt-2">
                Level 4, Horizon Tower, CP, New Delhi.
              </p>
            </div>

            {/* --- App-Like Grid for Mobile (2 Columns) --- */}
            {/* Mobile: grid-cols-2 (बगल-बगल) | PC: grid-cols-1 (नीचे-नीचे) */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-3">
              
              {/* Call Card */}
              <div className="bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 hover:shadow-md transition-all text-center lg:text-left">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                  <Phone size={18} className="lg:w-5 lg:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xs lg:text-sm">Call</h3>
                  <p className="text-gray-500 text-[10px] lg:text-xs">+91 98765 43210</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 hover:shadow-md transition-all text-center lg:text-left">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={18} className="lg:w-5 lg:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xs lg:text-sm">Email</h3>
                  <p className="text-gray-500 text-[10px] lg:text-xs">hello@real.com</p>
                </div>
              </div>

              {/* Hours Card (Mobile पर Full Width) */}
              <div className="col-span-2 lg:col-span-1 bg-white p-3 lg:p-4 rounded-xl shadow-sm border border-gray-100 flex flex-row items-center gap-3 lg:gap-4 hover:shadow-md transition-all">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
                  <Clock size={18} className="lg:w-5 lg:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xs lg:text-sm">Open Hours</h3>
                  <p className="text-gray-500 text-[10px] lg:text-xs">09:00 AM - 07:00 PM</p>
                </div>
              </div>

            </div>

             {/* Direction Button */}
             <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-xs lg:text-sm shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 active:scale-95">
                <Navigation size={16} />
                Get Directions
             </button>

          </div>

          {/* --- Map Side --- */}
          {/* Mobile height reduced to 260px (App style card) | PC fills height */}
          <div className="w-full lg:col-span-8 h-[260px] lg:h-[90%] relative">
            <div className="absolute inset-0 bg-white rounded-2xl md:rounded-[2rem] shadow-xl border-4 border-white overflow-hidden z-10">
              
              <MapContainer 
                center={officeLocation} 
                zoom={14} 
                scrollWheelZoom={false} 
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker position={officeLocation}>
                  <Popup className="custom-popup">
                    <div className="text-center p-1">
                      <h3 className="font-bold text-gray-900 text-sm">Main Office</h3>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>

            </div>
            
            {/* PC Only Decor */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-dashed border-gray-200 rounded-[2.5rem] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}