"use client";

import { Shield, Clock, Users, Award, TrendingUp, Headphones, Home, Key, Building2, ScrollText, Landmark, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    bgIcon: ScrollText,
    title: "100% Secure",
    description: "RERA verified properties aur complete legal due diligence."
  },
  {
    icon: TrendingUp,
    bgIcon: Landmark,
    title: "Best Value",
    description: "AI-driven market analysis se sahi daam ensure karte hain."
  },
  {
    icon: Clock,
    bgIcon: Key,
    title: "Fast Process",
    description: "Paperwork se lekar keys milne tak sabse tez service."
  },
  {
    icon: Users,
    bgIcon: HeartHandshake,
    title: "Expert Agent",
    description: "Dedicated expert jo sirf aapki zarooraton ko samjhega."
  },
  {
    icon: Headphones,
    bgIcon: Building2,
    title: "24/7 Support",
    description: "Deal ke baad bhi maintenance aur resale mein madad."
  },
  {
    icon: Award,
    bgIcon: Home,
    title: "Top Builders",
    description: "Sirf trusted aur award-winning developers ke saath."
  }
];

const stats = [
    { value: "₹500Cr+", label: "Sold Value" },
    { value: "1200+", label: "Homes" },
    { value: "99.8%", label: "Happy Clients" },
    { value: "Top 1%", label: "Agency" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background decoration (PC only mainly) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] md:text-sm font-semibold tracking-wider uppercase mb-2 md:mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Experience</span>
          </h2>
          <p className="mt-3 md:mt-6 text-gray-500 text-sm md:text-lg leading-relaxed hidden md:block">
            Experience a world-class property buying process built on trust, transparency, and technology.
          </p>
          {/* Mobile Only Short Subtitle */}
          <p className="mt-2 text-gray-500 text-xs md:hidden">
            Trust, Transparency aur Technology ka wada.
          </p>
        </div>

        {/* --- APP STYLE GRID (2 Columns on Mobile) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-12 md:mb-24">
          {features.map((feature, index) => (
            <div 
                key={index} 
                className="group relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-xl md:shadow-xl shadow-blue-900/5 border border-gray-100 md:border-white transition-all duration-500 ease-out hover:-translate-y-1 md:hover:-translate-y-3 overflow-hidden"
            >
              {/* Hover Glow (PC Only) */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl hidden md:block"></div>

              {/* Background Icon (Hidden on Mobile to keep it clean, Visible on PC) */}
              <feature.bgIcon 
                 strokeWidth={1}
                 className="hidden md:block absolute -right-4 -bottom-4 text-gray-100 w-40 h-40 opacity-30 group-hover:opacity-50 group-hover:text-blue-50 group-hover:scale-110 transition-all duration-700 pointer-events-none z-0"
              />

              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Icon Box */}
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 md:from-blue-500 md:to-cyan-400 flex items-center justify-center text-blue-600 md:text-white shadow-none md:shadow-lg md:shadow-blue-500/20 mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 md:w-[30px] md:h-[30px]" strokeWidth={2} />
                </div>
                
                {/* Title */}
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-0 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                </h3>

                {/* Description (Tiny on mobile) */}
                <p className="text-[10px] md:text-[15px] text-gray-500 md:text-gray-600 leading-tight md:leading-relaxed md:pl-2 md:border-l-2 border-blue-100 group-hover:border-blue-400 transition-all duration-300 mt-1 md:mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- STATS STRIP --- */}
        <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-lg md:shadow-2xl mx-2 md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800"></div>
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="relative z-10 px-4 py-8 md:px-8 md:py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-12 gap-x-4 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="text-2xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-1 md:mb-3 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-blue-200 text-[10px] md:text-base font-bold uppercase tracking-wider opacity-80">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}