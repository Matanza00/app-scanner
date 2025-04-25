
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Flexible Subscription Tiers</h1>
            <p className="text-xl text-zest-text-secondary">
              Choose the right pricing plan for your business. Pay only for what you need with no hidden fees and cancel anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-zest-text-primary">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-zest-text-secondary">/lead</span>
                </div>
                <p className="text-zest-text-secondary mb-6">
                  Perfect for individual agents or small teams just getting started.
                </p>
                <Button className="w-full">Get Started</Button>
              </div>
              <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                <h4 className="font-semibold mb-4 text-zest-text-primary">Features include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Up to 50 leads per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Basic CRM access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Email support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">No hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-zest-primary-accent transform scale-105 relative z-10">
              <div className="absolute top-0 right-0 bg-zest-primary-accent text-white px-4 py-1 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-zest-text-primary">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$24</span>
                  <span className="text-zest-text-secondary">/lead</span>
                </div>
                <p className="text-zest-text-secondary mb-6">
                  Ideal for growing agencies and established agents.
                </p>
                <Button className="w-full bg-gradient-callout hover:opacity-90">Get Started</Button>
              </div>
              <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                <h4 className="font-semibold mb-4 text-zest-text-primary">Everything in Basic, plus:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Up to 200 leads per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Full CRM with automation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Priority phone & email support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">API access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Volume discounts</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-zest-text-primary">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-zest-text-secondary">/lead</span>
                </div>
                <p className="text-zest-text-secondary mb-6">
                  For large teams and brokerages with high volume needs.
                </p>
                <Button className="w-full">Contact Sales</Button>
              </div>
              <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
                <h4 className="font-semibold mb-4 text-zest-text-primary">Everything in Pro, plus:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Unlimited leads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-zest-accent-green mr-2 mt-1 shrink-0" size={16} />
                    <span className="text-zest-text-secondary text-sm">White-label options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Are there any contracts or commitments?</h3>
                <p className="text-zest-text-secondary">
                  No. ZestLeads offers a pay-as-you-go model with no long-term contracts. You can cancel anytime without penalty.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">What if a lead doesn't meet quality standards?</h3>
                <p className="text-zest-text-secondary">
                  We stand behind our leads. If a lead doesn't meet our quality standards, we'll replace it free of charge.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Can I purchase leads for specific locations?</h3>
                <p className="text-zest-text-secondary">
                  Yes! Our marketplace allows you to filter leads by location, property type, and seller motivation to find exactly what you're looking for.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer refunds?</h3>
                <p className="text-zest-text-secondary">
                  We offer a money-back guarantee for leads that don't meet our quality standards. Contact our support team within 7 days of purchase for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
