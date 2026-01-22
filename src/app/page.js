import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer'; // <--- Import kiya

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />  {/* <--- Yahan add kiya */}
    </main>
  );
}