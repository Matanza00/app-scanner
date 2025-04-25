
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import USMapSVG from '../USMapSVG';

const Hero = () => {
  return (
    <section className="bg-zest-dark-canvas text-white py-12 md:py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-zest-primary-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-zest-accent-green rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-zest-surface-secondary text-zest-primary-accent text-sm font-medium mb-4 animate-pulse-subtle">
              America's #1 Real-Estate Leads Wholesaler
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Every motivated house-seller lead starts at <span className="text-transparent bg-clip-text bg-gradient-callout">ZestLeads</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Pay-per-lead ROI-driven marketplace—only $29/lead with money-back guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                className="bg-gradient-callout hover:opacity-90 text-white px-8 py-6 text-lg w-full sm:w-auto"
                onClick={() => {}}
              >
                Get 10 Free Leads
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-zest-dark-canvas flex items-center gap-2 px-6 py-6 text-lg w-full sm:w-auto"
                onClick={() => {}}
              >
                <PlayCircle size={20} />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px] animate-float">
              <USMapSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
