
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, Search, LineChart } from 'lucide-react';

const HowItWorks = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const steps = [
    {
      title: 'Sign Up in Seconds',
      icon: FileText,
      description: 'Create your free account with just your name, email, and password. No credit card required to get started.',
      color: 'from-emerald-500 to-teal-400',
      back: 'Our simple verification process ensures that only licensed real estate professionals can access our marketplace. Once verified, your account is ready to use immediately.'
    },
    {
      title: 'Find Quality Leads',
      icon: Search,
      description: 'Browse our marketplace of verified motivated seller leads, filtered by location, property type, and seller motivation.',
      color: 'from-teal-500 to-cyan-400',
      back: 'Our advanced filtering system allows you to find exactly the types of leads you want. Each lead includes detailed information about the property and seller situation.'
    },
    {
      title: 'Purchase with Confidence',
      icon: CreditCard,
      description: 'Buy only the leads you want with our pay-per-lead model, starting at just $29 per lead with bulk discounts available.',
      color: 'from-cyan-500 to-blue-400',
      back: 'Your purchase is backed by our quality guarantee. If a lead doesn\'t meet our quality standards, we\'ll replace it free of charge. Payment processing is secure and instant.'
    },
    {
      title: 'Track Your Results',
      icon: LineChart,
      description: 'Manage your leads and track your ROI with our built-in CRM and analytics dashboard.',
      color: 'from-indigo-500 to-purple-400',
      back: 'See exactly how your leads are performing, set follow-up reminders, and track your conversion rates. Our analytics help you optimize your investment for maximum returns.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const flipCard = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-zest-light-surface to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zest-text-primary">How ZestLeads Works</h2>
          <p className="text-xl text-zest-text-secondary max-w-3xl mx-auto">
            Get started in minutes and start closing more deals with qualified motivated seller leads.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="perspective-1000"
            >
              <div
                className={`relative w-full h-80 cursor-pointer transition-transform duration-500 transform-style-3d ${activeCard === index ? 'rotate-y-180' : ''}`}
                onClick={() => flipCard(index)}
              >
                {/* Front side */}
                <div className="absolute inset-0 backface-hidden rounded-xl p-6 bg-white shadow-lg border border-gray-100 flex flex-col items-center text-center">
                  <div className="relative mb-2">
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-br opacity-20 blur-md"></div>
                    <div className={`relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} text-white text-xl font-bold`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-zest-text-primary">{step.title}</h3>
                  <p className="text-zest-text-secondary flex-grow">{step.description}</p>
                  
                  <div className="mt-4 text-zest-primary-accent font-medium">
                    Tap to learn more
                  </div>
                </div>
                
                {/* Back side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl p-6 bg-gradient-to-br from-zest-dark-canvas to-zest-surface-secondary text-white shadow-lg flex flex-col">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-200 flex-grow">{step.back}</p>
                  <div className="mt-4 text-zest-primary-accent font-medium">
                    Tap to go back
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-zest-text-secondary mb-2">Ready to start generating more leads?</p>
          <button className="inline-block px-8 py-3 bg-gradient-callout text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            Start Your Free Trial Today
          </button>
        </div>
      </div>
      
      {/* CSS for 3D card flip effect */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
