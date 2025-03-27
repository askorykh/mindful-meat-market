
import React from 'react';
import { MeatCategory } from '@/types';
import { cn } from '@/lib/utils';

const categories: MeatCategory[] = [
  {
    id: 'beef',
    name: 'Beef',
    icon: '🥩',
    description: 'From premium steaks to ground beef, compare prices across all cuts of beef.',
  },
  {
    id: 'poultry',
    name: 'Poultry',
    icon: '🍗',
    description: 'Find the best deals on chicken, turkey, and other poultry products.',
  },
  {
    id: 'pork',
    name: 'Pork',
    icon: '🥓',
    description: 'Compare prices for pork chops, bacon, ham, and other pork products.',
  },
  {
    id: 'seafood',
    name: 'Seafood',
    icon: '🦐',
    description: 'Browse fish, shrimp, and other seafood price comparisons.',
  },
  {
    id: 'lamb',
    name: 'Lamb',
    icon: '🍖',
    description: 'Check current prices for all types of lamb cuts across stores.',
  },
  {
    id: 'game',
    name: 'Game',
    icon: '🦌',
    description: 'Find specialty game meats and compare their pricing nationwide.',
  },
];

const MeatCategories = () => {
  return (
    <section id="categories" className="py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore meat prices by category to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={cn(
                "group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover-scale",
                "transition-all duration-300"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cream-50/50 to-cream-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className="bg-cream-100 h-8 w-8 rounded-full flex items-center justify-center group-hover:bg-meat-100 transition-colors duration-300">
                    <svg className="w-4 h-4 text-meat-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              
              <a href={`#${category.id}`} className="absolute inset-0 z-20" aria-label={`Browse ${category.name}`}></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeatCategories;
