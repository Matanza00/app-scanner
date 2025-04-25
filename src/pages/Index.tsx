
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import MetricsBar from '@/components/home/MetricsBar';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const Index = () => {
  // Set the meta tags
  React.useEffect(() => {
    document.title = "ZestLeads – Top Wholesale Real-Estate Leads Marketplace";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover and purchase verified motivated seller leads across all 50 states. Pay-per-lead from $19 with bulk discounts, 24/7 support, and money-back guarantee.');
    }
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <MetricsBar />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
