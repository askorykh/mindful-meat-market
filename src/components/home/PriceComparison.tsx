
import React, { useState } from 'react';
import { MeatItem } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown, MinusIcon } from 'lucide-react';

// Sample data
const meatItems: MeatItem[] = [
  {
    id: '1',
    name: 'Ribeye Steak',
    category: 'Beef',
    averagePrice: 14.99,
    unit: 'lb',
    priceRange: { min: 12.99, max: 17.99 },
    image: 'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2070&auto=format&fit=crop',
    trend: 'down',
    percentChange: 5.2,
    stores: [
      { id: 's1', name: 'Whole Foods', price: 17.99, unit: 'lb', lastUpdated: '2023-11-10' },
      { id: 's2', name: 'Kroger', price: 14.99, unit: 'lb', lastUpdated: '2023-11-12' },
      { id: 's3', name: 'Costco', price: 12.99, unit: 'lb', lastUpdated: '2023-11-11' },
    ]
  },
  {
    id: '2',
    name: 'Ground Beef (80/20)',
    category: 'Beef',
    averagePrice: 4.99,
    unit: 'lb',
    priceRange: { min: 3.99, max: 5.99 },
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=2070&auto=format&fit=crop',
    trend: 'up',
    percentChange: 2.1,
    stores: [
      { id: 's1', name: 'Whole Foods', price: 5.99, unit: 'lb', lastUpdated: '2023-11-10' },
      { id: 's2', name: 'Kroger', price: 4.99, unit: 'lb', lastUpdated: '2023-11-12' },
      { id: 's3', name: 'Costco', price: 3.99, unit: 'lb', lastUpdated: '2023-11-11' },
    ]
  },
  {
    id: '3',
    name: 'Chicken Breast',
    category: 'Poultry',
    averagePrice: 3.49,
    unit: 'lb',
    priceRange: { min: 2.99, max: 4.29 },
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=2069&auto=format&fit=crop',
    trend: 'stable',
    percentChange: 0,
    stores: [
      { id: 's1', name: 'Whole Foods', price: 4.29, unit: 'lb', lastUpdated: '2023-11-10' },
      { id: 's2', name: 'Kroger', price: 3.49, unit: 'lb', lastUpdated: '2023-11-12' },
      { id: 's3', name: 'Costco', price: 2.99, unit: 'lb', lastUpdated: '2023-11-11' },
    ]
  },
];

const PriceComparison = () => {
  const [selectedItem, setSelectedItem] = useState<MeatItem>(meatItems[0]);
  
  return (
    <section id="compare" className="py-20 px-4 md:px-6 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare Meat Prices</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the best deals on meat products across different stores nationwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Product selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-900">Select a product</h3>
              </div>
              
              <div className="divide-y divide-gray-100">
                {meatItems.map((item) => (
                  <button
                    key={item.id}
                    className={cn(
                      "w-full text-left p-4 flex items-center space-x-4 transition-all-200",
                      selectedItem.id === item.id 
                        ? "bg-meat-50 hover:bg-meat-100" 
                        : "hover:bg-gray-50"
                    )}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-gray-900">${item.averagePrice.toFixed(2)}</div>
                      <div className="text-sm text-gray-500">per {item.unit}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Price comparison */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{selectedItem.name}</h3>
                  <p className="text-gray-500">Average price: <span className="font-medium text-gray-900">${selectedItem.averagePrice.toFixed(2)}/{selectedItem.unit}</span></p>
                </div>
                
                <div className={cn(
                  "flex items-center px-3 py-1 rounded-full text-sm",
                  selectedItem.trend === 'up' 
                    ? "bg-red-50 text-red-700" 
                    : selectedItem.trend === 'down'
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-50 text-gray-700"
                )}>
                  {selectedItem.trend === 'up' ? (
                    <TrendingUp className="h-3.5 w-3.5 mr-1" />
                  ) : selectedItem.trend === 'down' ? (
                    <TrendingDown className="h-3.5 w-3.5 mr-1" />
                  ) : (
                    <MinusIcon className="h-3.5 w-3.5 mr-1" />
                  )}
                  
                  {selectedItem.trend === 'stable'
                    ? 'Stable'
                    : `${selectedItem.percentChange}% ${selectedItem.trend === 'up' ? 'up' : 'down'}`}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Price range</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-medium text-lg text-gray-900">${selectedItem.priceRange.min.toFixed(2)}</span>
                      <span className="text-gray-400">-</span>
                      <span className="font-medium text-lg text-gray-900">${selectedItem.priceRange.max.toFixed(2)}</span>
                      <span className="text-sm text-gray-500">per {selectedItem.unit}</span>
                    </div>
                  </div>
                  
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-4">Store comparison</h4>
                
                <div className="space-y-4">
                  {selectedItem.stores
                    .sort((a, b) => a.price - b.price)
                    .map((store, index) => (
                      <div 
                        key={store.id}
                        className={cn(
                          "flex items-center p-4 rounded-lg transition-all-200",
                          index === 0 ? "bg-green-50 border border-green-100" : "bg-gray-50"
                        )}
                      >
                        <div className="flex-1">
                          <div className="flex items-center">
                            <p className="font-medium text-gray-900">
                              {store.name}
                            </p>
                            {index === 0 && (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                                Best price
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">Updated {store.lastUpdated}</p>
                        </div>
                        
                        <div className="text-right">
                          <p className={cn(
                            "font-bold text-xl",
                            index === 0 ? "text-green-700" : "text-gray-900"
                          )}>
                            ${store.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">per {store.unit}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
