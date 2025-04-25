
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-callout"></div>
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Start getting motivated seller leads today
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful real estate professionals who trust ZestLeads for high-quality, pre-verified motivated seller leads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-zest-dark-canvas hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto"
            >
              Register & Save 10%
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 h-auto"
            >
              Schedule a Demo <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <p className="mt-6 text-white/80 text-sm">
            No credit card required. Start with 10 free leads.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
