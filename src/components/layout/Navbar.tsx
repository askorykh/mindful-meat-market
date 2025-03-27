
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 py-3',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="relative z-10">
          <h1 className="text-xl md:text-2xl font-bold text-meat-800">
            howmuchisthe<span className="text-meat-600">meat</span>.com
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#compare" className="text-gray-700 hover:text-meat-600 transition-all-200">
            Compare
          </a>
          <a href="#categories" className="text-gray-700 hover:text-meat-600 transition-all-200">
            Categories
          </a>
          <a href="#prices" className="text-gray-700 hover:text-meat-600 transition-all-200">
            Prices
          </a>
          <a href="#about" className="text-gray-700 hover:text-meat-600 transition-all-200">
            About
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search meats..."
              className="pl-9 pr-4 py-2 rounded-full text-sm bg-gray-100 focus:bg-white border border-transparent focus:border-gray-300 outline-none w-48 transition-all-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-0 flex flex-col py-20 px-6 transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="relative flex items-center mb-6">
            <input
              type="text"
              placeholder="Search meats..."
              className="pl-9 pr-4 py-2 rounded-full text-sm bg-gray-100 w-full border border-transparent focus:border-gray-300 outline-none transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          <nav className="flex flex-col space-y-6 text-lg">
            <a 
              href="#compare" 
              className="text-gray-700 hover:text-meat-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Compare
            </a>
            <a 
              href="#categories" 
              className="text-gray-700 hover:text-meat-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a 
              href="#prices" 
              className="text-gray-700 hover:text-meat-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prices
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-meat-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
