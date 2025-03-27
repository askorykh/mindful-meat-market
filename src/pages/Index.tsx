
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import PriceComparison from '@/components/home/PriceComparison';
import MeatCategories from '@/components/home/MeatCategories';
import FeaturedPrice from '@/components/home/FeaturedPrice';
import Footer from '@/components/layout/Footer';

const Index = () => {
  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <PriceComparison />
        <MeatCategories />
        <FeaturedPrice />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
