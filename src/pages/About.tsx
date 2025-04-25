
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About ZestLeads</h1>
          <p className="text-xl text-zest-text-secondary mb-12">
            America's #1 Real-Estate Leads Wholesaler
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              This page will contain the full About Us content with founder story and Organization schema.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
