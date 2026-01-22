"use client";

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square, Heart, ArrowRight, Star } from 'lucide-react';

const allProperties = [
  {
    id: 1,
    category: "sale",
    title: "Luxury Sea-View Villa",
    price: "₹12.5 Cr",
    address: "Palm Beach Road, Mumbai",
    beds: 5,
    baths: 6,
    sqft: "4,500",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    tag: "Featured",
    agent: "Amit R."
  },
  {
    id: 2,
    category: "rent",
    title: "Modern City Apartment",
    price: "₹85,000 / mo",
    address: "Indiranagar, Bangalore",
    beds: 3,
    baths: 3,
    sqft: "1,800",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    tag: "Popular",
    agent: "Sneha K."
  },
  {
    id: 3,
    category: "sale",
    title: "Eco-Friendly Farmhouse",
    price: "₹3.2 Cr",
    address: "Lonavala, Maharashtra",
    beds: 4,
    baths: 4,
    sqft: "3,200",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    tag: "New",
    agent: "Rahul V."
  },
  {
    id: 4,
    category: "sale",
    title: "Penthouse with Pool",
    price: "₹18.0 Cr",
    address: "Worli, Mumbai",
    beds: 4,
    baths: 5,
    sqft: "5,000",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop",
    tag: "Luxury",
    agent: "Vikram S."
  },
  {
    id: 5,
    category: "rent",
    title: "Cozy Studio Loft",
    price: "₹45,000 / mo",
    address: "Hauz Khas, Delhi",
    beds: 1,
    baths: 1,
    sqft: "850",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tag: "Hot",
    agent: "Priya M."
  },
  {
    id: 6,
    category: "sale",
    title: "Suburban Family Home",
    price: "₹1.8 Cr",
    address: "Gachibowli, Hyderabad",
    beds: 3,
    baths: 3,
    sqft: "2,100",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    tag: "Value",
    agent: "Anjali D."
  }
];

export default function FeaturedProperties() {
  const [filter, setFilter] = useState('all');

  const filteredProperties = filter === 'all' 
    ? allProperties 
    : allProperties.filter(p => p.category === filter);

  return (
    <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header & Filters (Fixed Alignment) --- */}
        {/* Mobile: Items Center (Center Align) | PC: Items End (Right/Bottom Align) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-16 gap-6">
          
          {/* Text Container */}
          {/* Mobile: Text Center | PC: Text Left */}
          <div className="space-y-2 md:space-y-3 text-center md:text-left w-full md:w-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">
              Our Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Properties</span>
            </h2>
          </div>

          {/* Filters (Compact on Mobile) */}
          <div className="bg-white p-1 md:p-1.5 rounded-full shadow-lg border border-gray-100 flex items-center w-auto overflow-x-auto mx-auto md:mx-0">
            {['all', 'sale', 'rent'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-none px-6 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold capitalize transition-all duration-300 transform whitespace-nowrap ${
                  filter === f 
                    ? 'bg-gray-900 text-white shadow-md scale-105' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {filteredProperties.map((property) => (
            <div 
              key={property.id} 
              className="group bg-transparent"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg md:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl md:hover:shadow-2xl hover:shadow-blue-500/10 will-change-transform">
                
                {/* Image Section */}
                <div className="relative h-56 md:h-[300px] w-full overflow-hidden">
                  <Image 
                    src={property.image} 
                    alt={property.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 will-change-transform"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 md:top-5 md:left-5 md:right-5 flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm shadow-lg flex items-center gap-1.5 md:gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      {property.price}
                    </div>
                    <button className="w-8 h-8 md:w-9 md:h-9 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                      <Heart size={14} className="md:w-4 md:h-4" />
                    </button>
                  </div>

                  {/* Bottom Info on Image */}
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 text-white">
                    <div className="flex items-center gap-1 text-yellow-400 mb-0.5 md:mb-1">
                        <Star size={12} className="md:w-3.5 md:h-3.5" fill="currentColor" />
                        <span className="text-[10px] md:text-xs font-bold text-white">{property.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base md:text-lg font-bold truncate pr-2">{property.title}</h3>
                         {/* Agent Avatar */}
                        <div className="flex items-center gap-1.5 md:gap-2 bg-black/40 backdrop-blur-sm p-1 pr-2 rounded-full border border-white/10">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-[8px] font-bold">
                                {property.agent[0]}
                            </div>
                            <span className="text-[9px] md:text-[10px] font-medium opacity-90">{property.agent}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 md:gap-1.5 opacity-80 mt-0.5 md:mt-1">
                      <MapPin size={12} className="md:w-3.5 md:h-3.5 text-cyan-400" />
                      <span className="text-[10px] md:text-xs font-medium truncate">{property.address}</span>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-3 md:p-5">
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-5">
                    <div className="flex flex-col items-center justify-center p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gray-50 border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                      <Bed size={16} className="md:w-[18px] md:h-[18px] text-gray-400 group-hover:text-blue-500 mb-0.5 md:mb-1 transition-colors" />
                      <span className="text-[10px] md:text-xs font-bold text-gray-700">{property.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gray-50 border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                      <Bath size={16} className="md:w-[18px] md:h-[18px] text-gray-400 group-hover:text-blue-500 mb-0.5 md:mb-1 transition-colors" />
                      <span className="text-[10px] md:text-xs font-bold text-gray-700">{property.baths} Baths</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 md:p-2 rounded-lg md:rounded-xl bg-gray-50 border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                      <Square size={16} className="md:w-[18px] md:h-[18px] text-gray-400 group-hover:text-blue-500 mb-0.5 md:mb-1 transition-colors" />
                      <span className="text-[10px] md:text-xs font-bold text-gray-700">{property.sqft} sqft</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-2.5 md:py-3.5 bg-gray-900 text-white rounded-lg md:rounded-xl font-bold text-xs md:text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group/btn">
                    View Details 
                    <ArrowRight size={14} className="md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="mt-12 md:mt-20 text-center">
            <button className="relative px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-gray-900 text-gray-900 font-bold rounded-full overflow-hidden group transition-all hover:border-transparent hover:text-white">
                <span className="absolute inset-0 w-full h-full bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center gap-2 text-sm md:text-base">Browse All Listings <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" /></span>
            </button>
        </div>

      </div>
    </section>
  );
}