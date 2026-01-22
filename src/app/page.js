import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

// 1. MapWrapper को सामान्य तरीके से इम्पोर्ट करें
import MapWrapper from '@/components/MapWrapper';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      
      {/* 2. यहाँ Wrapper का इस्तेमाल करें */}
      <MapWrapper />
      
      <CTA />
      <Footer />
    </main>
  );
}