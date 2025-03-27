
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const featuredItems = [
  {
    id: 'f1',
    name: 'Ribeye Steak',
    category: 'Beef',
    currentPrice: 14.99,
    previousPrice: 16.49,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2070&auto=format&fit=crop',
    trend: 'down',
    percentChange: 9.1,
    store: 'Kroger',
  },
  {
    id: 'f2',
    name: 'Organic Chicken Breast',
    category: 'Poultry',
    currentPrice: 6.99,
    previousPrice: 5.99,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=2069&auto=format&fit=crop',
    trend: 'up',
    percentChange: 16.7,
    store: 'Whole Foods',
  },
  {
    id: 'f3',
    name: 'Bacon',
    category: 'Pork',
    currentPrice: 5.49,
    previousPrice: 6.29,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=2070&auto=format&fit=crop',
    trend: 'down',
    percentChange: 12.7,
    store: 'Costco',
  },
  {
    id: 'f4',
    name: 'Ground Turkey',
    category: 'Poultry',
    currentPrice: 4.29,
    previousPrice: 3.99,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1602470521006-6cd9cf166a6f?q=80&w=2070&auto=format&fit=crop',
    trend: 'up',
    percentChange: 7.5,
    store: 'Kroger',
  }
];

const FeaturedPrice = () => {
  return (
    <section id="prices" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notable Price Changes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about significant price fluctuations in the meat market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover-scale"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover" 
                />
                
                <div className={cn(
                  "absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium",
                  item.trend === 'down' 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                )}>
                  {item.trend === 'down' ? (
                    <div className="flex items-center">
                      <ArrowDown className="h-3.5 w-3.5 mr-1" />
                      <span>{item.percentChange}% down</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <ArrowUp className="h-3.5 w-3.5 mr-1" />
                      <span>{item.percentChange}% up</span>
                    </div>
                  )}
                </div>
                
                {/* Updated gradient overlay for better text visibility */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6 px-4">
                  <h3 className="text-white font-medium text-lg">{item.name}</h3>
                  <p className="text-white/90 text-sm">{item.category}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-baseline justify-between">
                  <div className="space-y-1">
                    <div className="font-bold text-lg text-gray-900">${item.currentPrice.toFixed(2)}<span className="text-sm text-gray-500">/{item.unit}</span></div>
                    <div className="text-sm text-gray-500 line-through">${item.previousPrice.toFixed(2)}/{item.unit}</div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-sm text-gray-500">at</span>
                    <p className="font-medium text-gray-900">{item.store}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#compare"
            className="inline-flex items-center justify-center px-6 py-3 bg-meat-600 text-white rounded-full text-lg font-medium hover-scale shadow-sm"
          >
            View More Price Changes
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrice;
