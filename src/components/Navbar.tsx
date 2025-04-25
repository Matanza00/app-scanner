
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-callout">ZestLeads</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-zest-text-primary hover:text-zest-primary-accent transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center font-medium text-zest-text-primary hover:text-zest-primary-accent transition-colors">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link to="/leads" className="block px-4 py-2 text-sm text-zest-text-primary hover:bg-zest-light-surface" role="menuitem">Motivated Seller Leads</Link>
                <Link to="/pricing" className="block px-4 py-2 text-sm text-zest-text-primary hover:bg-zest-light-surface" role="menuitem">Pricing & Plans</Link>
                <Link to="/integrations" className="block px-4 py-2 text-sm text-zest-text-primary hover:bg-zest-light-surface" role="menuitem">Integrations</Link>
              </div>
            </div>
          </div>
          <Link to="/about" className="font-medium text-zest-text-primary hover:text-zest-primary-accent transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-zest-text-primary hover:text-zest-primary-accent transition-colors">
            Contact
          </Link>
          <Link to="/blog" className="font-medium text-zest-text-primary hover:text-zest-primary-accent transition-colors">
            Blog
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" className="border-zest-primary-accent text-zest-primary-accent hover:bg-zest-primary-accent hover:text-white">
            Login
          </Button>
          <Button className="bg-gradient-callout hover:opacity-90 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-zest-text-primary focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link to="/" className="block py-2 text-zest-text-primary font-medium" onClick={toggleMenu}>
            Home
          </Link>
          <div className="py-2">
            <details className="group">
              <summary className="flex items-center text-zest-text-primary font-medium cursor-pointer list-none">
                Services <ChevronDown size={16} className="ml-1 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link to="/leads" className="block py-2 text-zest-text-secondary" onClick={toggleMenu}>
                  Motivated Seller Leads
                </Link>
                <Link to="/pricing" className="block py-2 text-zest-text-secondary" onClick={toggleMenu}>
                  Pricing & Plans
                </Link>
                <Link to="/integrations" className="block py-2 text-zest-text-secondary" onClick={toggleMenu}>
                  Integrations
                </Link>
              </div>
            </details>
          </div>
          <Link to="/about" className="block py-2 text-zest-text-primary font-medium" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="block py-2 text-zest-text-primary font-medium" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/blog" className="block py-2 text-zest-text-primary font-medium" onClick={toggleMenu}>
            Blog
          </Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" className="border-zest-primary-accent text-zest-primary-accent w-full">
              Login
            </Button>
            <Button className="bg-gradient-callout text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
