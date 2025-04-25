
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Proven Strategies to Convert Motivated Seller Leads',
      excerpt: 'Learn the top strategies used by successful real estate agents to convert motivated seller leads into closed deals.',
      author: 'Michael Anderson',
      date: 'April 22, 2025',
      readTime: '8 min read',
      category: 'Lead Conversion',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Real Estate Lead Follow-Up',
      excerpt: 'Discover how to create an effective follow-up system that turns cold leads into hot prospects and closed deals.',
      author: 'Jennifer Williams',
      date: 'April 18, 2025',
      readTime: '10 min read',
      category: 'Lead Nurturing',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'How to Identify High-Quality Motivated Seller Leads',
      excerpt: 'Learn the key indicators that help you spot the most valuable motivated seller leads before your competition.',
      author: 'David Thompson',
      date: 'April 15, 2025',
      readTime: '7 min read',
      category: 'Lead Generation',
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights in Real-Estate Lead Gen</h1>
            <p className="text-xl text-zest-text-secondary">
              Expert advice, industry trends, and practical tips to help you generate and convert more real estate leads.
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Featured blog post" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="bg-zest-primary-accent/10 text-zest-primary-accent text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Featured Article
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  How to Build a 7-Figure Real Estate Business with Motivated Seller Leads
                </h2>
                <p className="text-zest-text-secondary mb-6">
                  In this comprehensive guide, we share the exact blueprint used by top-performing agents to build scalable real estate businesses using motivated seller leads.
                </p>
                <div className="flex items-center text-sm text-zest-text-secondary mb-6">
                  <div className="flex items-center mr-4">
                    <User size={16} className="mr-1" />
                    <span>Sarah Johnson</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>April 25, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>12 min read</span>
                  </div>
                </div>
                <Button className="w-fit">
                  Read Article <ArrowRight className="ml-1" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Recent Posts */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-zest-light-surface text-zest-text-secondary text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-zest-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-zest-text-secondary mb-4">
                    <div className="flex items-center mr-3">
                      <User size={12} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center mr-3">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="bg-gradient-callout rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-6">
                Get the latest real estate lead generation tips, industry trends, and exclusive offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg flex-grow focus:outline-none text-zest-text-primary"
                />
                <Button className="bg-zest-dark-canvas hover:bg-zest-surface-secondary">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 text-white/80">
                By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
