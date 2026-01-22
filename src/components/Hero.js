"use client";

import { useState } from 'react';
import { Search, MapPin, Home, Sparkles, TrendingUp, Key, Building2, Wallet, Star, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('buy');
  
  // Simple States for Inputs
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    alert(`Searching Properties in ${location || 'Anywhere'} | Type: ${propertyType || 'All'} | Budget: ${budget || 'Any'}`);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      
      {/* Background Wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div 
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-black/80"></div>
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Floating Decor (PC Only) */}
      <div className="hidden lg:flex absolute left-10 top-1/3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-float-slow z-10 items-center gap-3 shadow-lg">
        <div className="bg-green-500/20 p-2 rounded-full text-green-400"><TrendingUp size={20} /></div>
        <div><p className="text-white/60 text-xs font-bold uppercase tracking-wider">Market Watch</p><p className="text-white font-bold text-sm">Prices up by 12%</p></div>
      </div>

      <div className="hidden lg:flex absolute right-10 bottom-1/3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-float-slower z-10 items-center gap-3 shadow-lg">
        <div className="bg-yellow-500/20 p-2 rounded-full text-yellow-400"><Key size={20} /></div>
        <div><p className="text-white/60 text-xs font-bold uppercase tracking-wider">Just Listed</p><p className="text-white font-bold text-sm">Luxury Penthouse</p></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl px-4 text-center -mt-10">
        
        {/* Headlines */}
        <div className="mb-6 md:mb-12 space-y-4 md:space-y-6">
          <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm text-blue-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest">
            <Sparkles size={12} className="md:w-3.5 md:h-3.5" /> #1 Real Estate Platform
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Dream Space.</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed px-2 md:px-0">
            Explore India's finest properties. From sea-facing villas to modern city apartments.
          </p>
        </div>

        {/* SEARCH BOX CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
            
            <div className="bg-transparent md:bg-white/10 border-0 md:border md:border-white/30 p-0 md:p-2 rounded-none md:rounded-[30px] shadow-none md:shadow-2xl md:backdrop-blur-md transition-all">
            
            {/* TABS */}
            <div className="flex gap-2 mb-4 md:mb-2 px-1 md:px-2">
                {['buy', 'rent', 'projects'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3 md:py-3 rounded-2xl md:rounded-2xl font-bold text-xs md:text-sm tracking-wide transition-all duration-300 uppercase shadow-lg md:shadow-none ${
                            activeTab === tab ? 'bg-white text-blue-900 shadow-md transform scale-[1.02]' : 'bg-black/40 md:bg-black/20 text-white backdrop-blur-md hover:bg-black/40'
                        } ${tab === 'projects' ? 'hidden md:flex' : 'flex'}`}
                    >
                        {tab === 'buy' && <Home size={16} className="md:w-4 md:h-4" />}
                        {tab === 'rent' && <Wallet size={16} className="md:w-4 md:h-4" />}
                        {tab === 'projects' && <Building2 size={16} />}
                        {tab}
                    </button>
                ))}
            </div>

            {/* INPUTS CONTAINER */}
            <div className="bg-transparent md:bg-white rounded-none md:rounded-[24px] p-0 md:p-2 flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-0 md:divide-x divide-gray-100 shadow-none md:shadow-inner relative z-[50]">
                
                {/* 1. Location Input */}
                <div className="md:col-span-4 flex items-center px-5 py-4 bg-white/10 md:bg-white backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none rounded-2xl md:rounded-xl shadow-lg md:shadow-none transition-transform active:scale-[0.99] md:active:scale-100">
                    <div className="mr-4 md:mr-3 text-blue-400 md:text-blue-600"><MapPin className="h-6 w-6" /></div>
                    <div className="flex-1 text-left">
                        <label className="block text-[10px] md:text-[11px] font-extrabold text-blue-100 md:text-gray-400 uppercase tracking-wider mb-1">Location</label>
                        <input 
                            type="text" 
                            value={location} 
                            onChange={(e) => setLocation(e.target.value)} 
                            placeholder="City, Locality..." 
                            className="w-full font-bold text-white md:text-gray-800 outline-none placeholder-white/50 md:placeholder-gray-400 text-lg bg-transparent" 
                        />
                    </div>
                </div>

                {/* 2. Type Input (Dropdown Removed -> Converted to Simple Input) */}
                <div className="md:col-span-3 flex items-center px-5 py-4 bg-white/10 md:bg-white backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none rounded-2xl md:rounded-xl shadow-lg md:shadow-none transition-transform active:scale-[0.99] md:active:scale-100">
                    <div className="mr-4 md:mr-3 text-blue-400 md:text-blue-600"><Home className="h-6 w-6" /></div>
                    <div className="flex-1 text-left">
                        <label className="block text-[10px] md:text-[11px] font-extrabold text-blue-100 md:text-gray-400 uppercase tracking-wider mb-1">Type</label>
                        <input 
                            type="text" 
                            value={propertyType} 
                            onChange={(e) => setPropertyType(e.target.value)} 
                            placeholder="Apartment, Villa..." 
                            className="w-full font-bold text-white md:text-gray-800 outline-none placeholder-white/50 md:placeholder-gray-400 text-lg bg-transparent" 
                        />
                    </div>
                </div>

                {/* 3. Budget Input (Dropdown Removed -> Converted to Simple Input) */}
                <div className="md:col-span-3 flex items-center px-5 py-4 bg-white/10 md:bg-white backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none rounded-2xl md:rounded-xl shadow-lg md:shadow-none transition-transform active:scale-[0.99] md:active:scale-100">
                    <div className="mr-4 md:mr-3 text-blue-400 md:text-blue-600 font-extrabold text-2xl">₹</div>
                    <div className="flex-1 text-left">
                        <label className="block text-[10px] md:text-[11px] font-extrabold text-blue-100 md:text-gray-400 uppercase tracking-wider mb-1">Budget</label>
                        <input 
                            type="text" 
                            value={budget} 
                            onChange={(e) => setBudget(e.target.value)} 
                            placeholder="Max Price (e.g. 1 Cr)" 
                            className="w-full font-bold text-white md:text-gray-800 outline-none placeholder-white/50 md:placeholder-gray-400 text-lg bg-transparent" 
                        />
                    </div>
                </div>

                {/* Search Button */}
                <div className="md:col-span-2 md:p-1 mt-2 md:mt-0">
                    <button onClick={handleSearch} className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all text-white rounded-2xl flex items-center justify-center gap-2 py-4 md:py-0 text-lg font-bold shadow-xl shadow-blue-900/20 md:shadow-lg active:scale-95">
                        <Search className="h-6 w-6" />
                        <span>Search</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
      </div>

      {/* --- BOTTOM TRUST BAR (PC Only) --- */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-md z-30 hidden md:flex">
        <div className="max-w-7xl mx-auto w-full px-8 py-5 flex justify-between items-center">
            
            {/* Left: Happy Customers */}
            <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
                             <div className={`absolute inset-0 bg-blue-${i*100} opacity-80`}></div> 
                             <div className="flex items-center justify-center h-full text-xs font-bold text-gray-700">User</div>
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold">+2k</div>
                </div>
                <div className="text-left">
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-white/80 text-sm font-medium">Trusted by 2,000+ Families</p>
                </div>
            </div>

            {/* Right: Feature Badges */}
            <div className="flex items-center gap-8 opacity-70">
                <div className="flex items-center gap-2 text-white">
                    <Shield size={24} className="text-blue-400"/>
                    <span className="font-semibold tracking-wide text-sm">RERA Registered</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                    <Award size={24} className="text-yellow-400"/>
                    <span className="font-semibold tracking-wide text-sm">Best Service Award</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                    <Users size={24} className="text-green-400"/>
                    <span className="font-semibold tracking-wide text-sm">Expert Agents</span>
                </div>
            </div>

        </div>
      </div>

    </section>
  );
}