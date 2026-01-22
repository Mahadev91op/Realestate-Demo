"use client";

import Image from 'next/image';
import { Star, Quote, Plus } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Rajesh Malhotra",
    location: "Mumbai, Bandra",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    text: "Maine apni pehli property UrbanSpace ke through li. Inka process itna smooth tha ki mujhe yakeen hi nahi hua. Best legal support team!",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    location: "Bangalore, Whitefield",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    text: "Perfect valuation aur transparent deal. Agent ne mujhe family ki tarah guide kiya. Highly recommended for everyone.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Delhi, GK-1",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    rating: 4,
    text: "Property dhoondna sar dard hota hai, par inke app ne sab aasaan kar diya. Kaafi achi options hain inke paas.",
  },
  {
    id: 4,
    name: "Anjali Sharma",
    location: "Pune, Koregaon",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    rating: 5,
    text: "Sabse achi baat ye hai ki ye sirf bechne par dhyaan nahi dete, balki sahi advice dete hain. Great experience!",
  }
];

// Helper Component for Card
function ReviewCard({ review }) {
    return (
        // Mobile: w-[260px] (Chota), mr-4 (Kam Gap), p-4 (Kam Padding)
        // PC: md:w-[400px] (Bada), md:mr-6, md:p-6
        <div className="w-[260px] md:w-[400px] flex-shrink-0 mr-4 md:mr-6 bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-xl md:rounded-3xl hover:bg-white/10 transition-colors duration-300 group">
            
            {/* Top Row: Quote Icon & Stars */}
            <div className="flex justify-between items-start mb-4 md:mb-6">
                {/* Mobile: w-6 h-6 | PC: w-8 h-8 */}
                <Quote className="text-blue-500/50 w-6 h-6 md:w-8 md:h-8 rotate-180" fill="currentColor" />
                <div className="flex gap-0.5 md:gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star 
                            key={i} 
                            // Mobile: size 12 | PC: size 14
                            size={12} 
                            className={`md:w-3.5 md:h-3.5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} 
                        />
                    ))}
                </div>
            </div>

            {/* Review Text */}
            {/* Mobile: text-xs (Chota Font) | PC: text-base */}
            <p className="text-gray-300 text-xs md:text-base leading-relaxed mb-4 md:mb-8 italic line-clamp-4 md:line-clamp-none">
            "{review.text}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3 md:gap-4 mt-auto border-t border-white/5 pt-3 md:pt-4">
                {/* Mobile: w-8 h-8 | PC: w-12 h-12 */}
                <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                    <Image src={review.image} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                    {/* Mobile: text-xs | PC: text-base */}
                    <h4 className="text-white font-bold text-xs md:text-base">{review.name}</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs">{review.location}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
  const handleAddReview = () => {
    alert("Review form will open here!");
  };

  return (
    <section className="py-12 md:py-20 bg-[#0B0F19] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-6">
            
            {/* Left: Text */}
            <div className="text-center md:text-left w-full md:w-auto">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-2 block">
                Testimonials
                </span>
                <h2 className="text-2xl md:text-5xl font-extrabold text-white leading-tight">
                Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Thousands</span>
                </h2>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 w-full md:w-auto">
                
                {/* Add Review Button */}
                <button 
                    onClick={handleAddReview}
                    className="group relative px-6 py-2.5 md:py-3 rounded-full bg-blue-600 text-white font-bold overflow-hidden shadow-lg shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 w-full md:w-auto flex justify-center text-sm md:text-base"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-2">
                        <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300 md:w-5 md:h-5" />
                        <span>Write a Review</span>
                    </div>
                </button>

                {/* Rating Badge (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                    <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0F19] bg-gray-600 relative overflow-hidden">
                            <Image 
                                src={`https://randomuser.me/api/portraits/men/${i*20}.jpg`} 
                                fill 
                                alt="user"
                                className="object-cover"
                            />
                        </div>
                    ))}
                    </div>
                    <div className="text-white text-sm font-medium">
                        <span className="font-bold">4.9/5</span> Rating
                    </div>
                </div>

            </div>
            </div>
        </div>

        {/* --- INFINITE SCROLL TRACK --- */}
        <div 
            className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
            <div className="animate-scroll-custom">
                {/* SET 1 */}
                {reviews.map((review) => (
                    <ReviewCard key={`original-${review.id}`} review={review} />
                ))}
                
                {/* SET 2 (Loop) */}
                {reviews.map((review) => (
                    <ReviewCard key={`duplicate-${review.id}`} review={review} />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}