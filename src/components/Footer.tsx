
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zest-dark-canvas text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">ZestLeads</h3>
            <p className="text-gray-300 mb-6">
              America's #1 Real-Estate Leads Wholesaler. Quality verified leads for real estate professionals across all 50 states.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/leads" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  Motivated Seller Leads
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  CRM Integrations
                </Link>
              </li>
              <li>
                <Link to="/bulk-pricing" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  Bulk Discounts
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  24/7 Support
                </Link>
              </li>
              <li>
                <Link to="/guarantee" className="text-gray-300 hover:text-zest-primary-accent transition-colors">
                  Money-Back Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-zest-primary-accent shrink-0 mt-1" />
                <span className="text-gray-300">(800) 555-ZEST</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-zest-primary-accent shrink-0 mt-1" />
                <span className="text-gray-300">support@zestleads.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-zest-primary-accent shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Real Estate Blvd.<br />
                  Suite 500<br />
                  Miami, FL 33101
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ZestLeads. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-zest-primary-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-zest-primary-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-zest-primary-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
