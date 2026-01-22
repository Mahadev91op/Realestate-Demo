import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties'; // Import kiya

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedProperties />  {/* Yahan add kiya */}
      
      {/* Footer... (Agar pehle se nahi hai to bad me banayenge) */}
    </main>
  );
}