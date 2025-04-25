
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, Check } from 'lucide-react';

const MetricsBar = () => {
  const metrics = [
    {
      icon: Building2,
      value: '15,000+',
      label: 'Real Estate Agents',
    },
    {
      icon: Users,
      value: '4,000+',
      label: 'Recurring Clients',
    },
    {
      icon: Award,
      value: '200+',
      label: 'Leads Per Day',
    },
    {
      icon: Check,
      value: '97%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-zest-text-primary">
          Trusted by America's Top Real Estate Professionals
        </h2>
        
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-zest-light-surface hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-callout flex items-center justify-center mb-4">
                <metric.icon size={28} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-zest-text-primary">{metric.value}</h3>
              <p className="text-zest-text-secondary">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-16">
          <p className="text-center text-zest-text-secondary mb-8">Leading brokerages and agencies trust ZestLeads</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="h-12 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
