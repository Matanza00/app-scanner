
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Real Estate Agent, CA",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "ZestLeads has transformed my business. Their leads are genuinely motivated sellers, and I've closed 4 deals in just my first month of using the platform.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    title: "Broker, FL",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote: "The quality of leads is exceptional. Our team's conversion rate has doubled since we started using ZestLeads. Worth every penny!",
    rating: 5
  },
  {
    name: "Jennifer Williams",
    title: "Real Estate Investor, TX",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "As an investor, I need motivated sellers ready to make a deal. ZestLeads delivers exactly that, and their bulk pricing makes scaling my business possible.",
    rating: 4
  },
  {
    name: "David Thompson",
    title: "Agency Owner, NY",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    quote: "We've tried many lead sources, but ZestLeads provides the best ROI by far. Their integrated CRM also saves us time managing follow-ups.",
    rating: 5
  },
  {
    name: "Lisa Martinez",
    title: "Independent Agent, AZ",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The pay-per-lead model is perfect for independent agents like me. I only buy what I need, and their support team is always there when I have questions.",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  
  const totalTestimonials = testimonials.length;
  
  const nextTestimonial = () => {
    setCurrent(current === totalTestimonials - 1 ? 0 : current + 1);
  };
  
  const prevTestimonial = () => {
    setCurrent(current === 0 ? totalTestimonials - 1 : current - 1);
  };
  
  // Setup autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setTimeout(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [current, autoplay]);
  
  // Pause autoplay on hover/focus
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  return (
    <section className="py-20 bg-zest-dark-canvas relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zest-primary-accent rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zest-accent-green rounded-full filter blur-[100px] opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of real estate professionals who are closing more deals with ZestLeads.
          </p>
        </div>
        
        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onFocus={pauseAutoplay}
          onBlur={resumeAutoplay}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="bg-zest-surface-secondary rounded-2xl p-6 md:p-8 shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Profile Image */}
                      <div className="relative">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-zest-primary-accent">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gradient-callout rounded-full p-1">
                          <div className="w-8 h-8 flex items-center justify-center text-white text-xl">
                            "
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        {/* Stars */}
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-400"} 
                            />
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-white text-lg md:text-xl italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        {/* Author */}
                        <div>
                          <p className="font-bold text-white">{testimonial.name}</p>
                          <p className="text-gray-300 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === index ? 'bg-zest-primary-accent w-6' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
