
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, DollarSign, Laptop, HeadphonesIcon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'High-Quality Motivated Leads',
      description: 'Every lead is verified and qualified to ensure you\'re only paying for serious sellers ready to make a deal.',
      color: 'from-emerald-500 to-teal-400',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay-Per-Lead Pricing',
      description: 'No subscriptions required. Only pay for the leads you want, starting at just $29 per lead with bulk discounts.',
      color: 'from-teal-500 to-cyan-400',
    },
    {
      icon: Laptop,
      title: 'Built-in CRM & Follow-Up Tools',
      description: 'Manage your leads, automate follow-ups, and track conversions with our powerful, easy-to-use platform.',
      color: 'from-cyan-500 to-blue-400',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Friendly Support',
      description: 'Our customer success team is always ready to help you maximize your ROI and resolve any issues.',
      color: 'from-indigo-500 to-purple-400',
    },
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

  return (
    <section className="py-16 md:py-24 bg-zest-dark-canvas">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Real Estate Pros Choose ZestLeads</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform is designed to deliver high-conversion leads with a focus on ROI for real estate professionals.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl p-6 bg-zest-surface-secondary hover-scale card-shadow"
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-gradient-to-br ${feature.color} opacity-20 blur-2xl`}></div>
              
              {/* Icon */}
              <div className={`relative mb-6 w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                <feature.icon className="text-white" size={24} />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                
                <ul className="mt-4 space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="text-zest-primary-accent mr-2 mt-1 shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">
                        Feature benefit {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
