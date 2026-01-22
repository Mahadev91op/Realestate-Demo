"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, X, Building2, ChevronDown, Phone, 
  Home, Store, LandPlot, ArrowRight, MapPin 
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            
            {/* BRANDING */}
            <Link href="/" className="flex items-center gap-2 z-50 group">
              <div className={`p-2 rounded-xl transition-colors shadow-sm ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
                <Building2 size={24} />
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-bold tracking-tight leading-none ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Urban<span className="text-blue-500">Space</span>
                </span>
                <span className={`text-[10px] font-medium tracking-widest uppercase ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                  Real Estate
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="#" text="Home" scrolled={scrolled} />
              
              <div className="group relative px-3 py-2">
                <button className={`flex items-center gap-1 font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>
                  Listings <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    <DropdownItem icon={Home} title="Buy Home" desc="Villas, Apartments" />
                    <DropdownItem icon={Store} title="Rent Commercial" desc="Offices, Shops" />
                    <DropdownItem icon={LandPlot} title="Land & Plots" desc="Open spaces" />
                  </div>
                </div>
              </div>

              <NavLink href="#" text="Agents" scrolled={scrolled} />
              <NavLink href="#" text="Projects" scrolled={scrolled} />
            </div>

            {/* RIGHT ACTIONS */}
            <div className="hidden md:flex items-center gap-6">
              <a 
                href="tel:+919876543210" 
                className={`flex items-center gap-2 font-semibold transition-colors group ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-full transition-colors ${
                  scrolled ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 'bg-white/10 text-white group-hover:bg-white group-hover:text-blue-600'
                }`}>
                  <Phone size={18} />
                </div>
                <span>+91 98765 43210</span>
              </a>

              <button className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
                <span className="relative z-10 flex items-center gap-2">
                  Add Property <ArrowRight size={16} />
                </span>
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -translate-x-full"></div>
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-all active:scale-95 ${
                  isOpen ? 'bg-white text-gray-900 shadow-md' : (scrolled ? 'text-gray-900' : 'text-white')
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-40 shadow-2xl transition-transform duration-300 ease-out transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mt-16 space-y-6 flex-1">
            <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg shadow-blue-200">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">24/7 Support</p>
                <a href="tel:+919876543210" className="text-lg font-bold text-gray-900">+91 98765 43210</a>
              </div>
            </div>

            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6">Explore</h3>
            <div className="space-y-2">
              <MobileLink icon={Home} text="Home" href="#" />
              
              <div className="bg-gray-50 rounded-xl p-3 space-y-3">
                <p className="text-sm font-semibold text-gray-900 px-2 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500"/> Property Types
                </p>
                <div className="pl-2 space-y-2 border-l-2 border-gray-200">
                  <Link href="#" className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1">Buy Residential</Link>
                  <Link href="#" className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1">Rent Commercial</Link>
                  <Link href="#" className="block text-sm text-gray-600 hover:text-blue-600 pl-3 py-1">Plots & Land</Link>
                </div>
              </div>

              <MobileLink icon={Store} text="New Projects" href="#" />
              <MobileLink icon={Building2} text="About Agency" href="#" />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <button className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold shadow-xl shadow-blue-200 active:scale-95 transition-transform flex justify-center items-center gap-2">
              List Your Property <ArrowRight size={18} />
            </button>
            <p className="text-center text-gray-400 text-[10px] mt-4 uppercase tracking-widest">Powered by DevSamp</p>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, text, scrolled }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg font-medium transition-colors hover:bg-white/10 ${
        scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50" : "text-white/90 hover:text-white"
      }`}
    >
      {text}
    </Link>
  );
}

function DropdownItem({ icon: Icon, title, desc }) {
  return (
    <Link href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon size={18} />
      </div>
      <div>
        <h6 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{title}</h6>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </Link>
  );
}

function MobileLink({ icon: Icon, text, href }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium">
      <Icon size={20} className="text-gray-400 group-hover:text-blue-600"/>
      {text}
    </Link>
  );
}