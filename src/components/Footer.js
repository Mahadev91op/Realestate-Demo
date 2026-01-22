"use client";

import Link from 'next/link';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  MapPin, Phone, Mail, ArrowRight, Building2, Heart 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white border-t border-white/10 pt-10 pb-6 md:pt-16 md:pb-8 relative overflow-hidden">
        
        {/* Background Decor (Subtle Glows) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Mobile: gap-8 | PC: gap-12 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16 text-center md:text-left">
                
                {/* 1. Brand Info */}
                <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 md:p-2 bg-blue-600 rounded-lg text-white">
                            {/* Mobile: Size 20 | PC: Size 24 */}
                            <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold tracking-tight">
                            Urban<span className="text-blue-500">Space</span>
                        </span>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                        India's trusted real estate platform. Finding your dream home made simple and transparent.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Quick Links (Hidden on very small screens if needed, but kept compact here) */}
                <div className="hidden md:block">
                    <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        {['Home', 'About Us', 'Properties', 'Agents', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Contact Us</h4>
                    <ul className="space-y-3 md:space-y-6">
                        <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0 mt-0.5" />
                            <span>Sector 5, Salt Lake, Kolkata</span>
                        </li>
                        <li className="flex items-center gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                            <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                            <span>support@urbanspace.com</span>
                        </li>
                    </ul>
                </div>

                {/* 4. Newsletter (Mobile: Simplified) */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-base md:text-lg font-bold mb-3 md:mb-6">Newsletter</h4>
                    <p className="text-gray-400 text-xs md:text-sm mb-4 max-w-xs mx-auto md:mx-0">
                        Subscribe for latest property updates.
                    </p>
                    <form className="space-y-3 w-full max-w-xs mx-auto md:mx-0">
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 md:py-3 rounded-lg md:rounded-xl transition-all flex items-center justify-center gap-2 text-xs md:text-sm">
                            Subscribe <ArrowRight size={14} className="md:w-4 md:h-4" />
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-500">
                
                {/* Copyright */}
                <p>&copy; {new Date().getFullYear()} UrbanSpace. All rights reserved.</p>
                
                {/* Made by DevSamp Signature */}
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <span className="text-gray-400">Made by</span>
                    <span className="font-bold text-blue-400">DevSamp</span>
                    <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
                </div>

                {/* Links (Hidden on small mobile to save space, visible on larger) */}
                <div className="hidden sm:flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                </div>
            </div>

        </div>
    </footer>
  );
}