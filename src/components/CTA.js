"use client";

import Image from 'next/image';
import { ArrowRight, PhoneCall, Building, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- MAIN LUXURY CARD --- */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/30 min-h-[500px] md:min-h-[600px] flex items-center">
          
          {/* 1. Background Image (Luxury Real Estate) */}
          <Image 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Luxury Dream Home"
            fill
            className="object-cover"
            priority
          />

          {/* 2. Modern Overlay Gradient (Dark Blue to Transparent) */}
          {/* Isse text readable hoga aur premium look aayega */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent/10"></div>

          {/* 3. Architectural Pattern Overlay (Subtle Blueprint effect) */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/blueprint-grid.png')] mix-blend-overlay pointer-events-none"></div>

          {/* 4. Content Section */}
          <div className="relative z-10 p-8 md:p-20 flex flex-col md:flex-row items-center justify-between w-full gap-10">
            
            {/* Left Side: Text Content */}
            <div className="max-w-2xl text-center md:text-left space-y-6 md:space-y-8 flex-1">
               
               {/* Badge */}
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md text-blue-100 text-xs md:text-sm font-bold tracking-wider uppercase mb-2 animate-fade-in-up">
                <Building size={14} />
                <span>Your Dream Project Awaits</span>
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Are You Ready to <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
                  Move In?
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-blue-100/80 text-base md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
                Discover exclusive properties, premium amenities, and a lifestyle upgrade. Let's turn your vision into an address.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8 md:mt-12">
                  
                  {/* Primary Button (Gold/Contrast color for pop) */}
                  <button className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 p-px shadow-xl shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <div className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-8 py-4 text-sm md:text-base font-bold text-white">
                        Explore Projects 
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Secondary Button (Glassmorphism Outline) */}
                  <button className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base">
                      <PhoneCall size={20} />
                      Consult an Expert
                  </button>
              </div>

            </div>

            {/* Right Side: Decorative Element (Optional - Hidden on mobile) */}
            <div className="hidden md:flex flex-col gap-4 items-end opacity-80">
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 translate-x-8">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center text-white">
                        <MapPin size={24} />
                    </div>
                    <div className="text-white">
                        <p className="text-xs opacity-70 uppercase tracking-wider">Premium Locations</p>
                        <p className="font-bold">Mumbai • Bangalore • Delhi</p>
                    </div>
                </div>
                 <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 -translate-x-4">
                    <div className="w-12 h-12 bg-yellow-500/30 rounded-full flex items-center justify-center text-white">
                        <Building size={24} />
                    </div>
                    <div className="text-white">
                        <p className="text-xs opacity-70 uppercase tracking-wider">Verified Listings</p>
                        <p className="font-bold">100% RERA Approved</p>
                    </div>
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}