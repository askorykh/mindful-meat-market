
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 px-4 md:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-meat-300 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cream-300 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="space-y-3">
              <div className="inline-block rounded-full bg-meat-100 px-3 py-1 text-sm text-meat-800 font-medium">
                Compare meat prices nationwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Find the best price for your <span className="text-meat-600">meat</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Real-time price comparison across major stores in the United States to help you save on every cut.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#compare"
                className="inline-flex items-center justify-center px-6 py-3 bg-meat-600 text-white rounded-full text-lg font-medium hover-scale shadow-sm"
              >
                Start Comparing
              </a>
              <a 
                href="#categories"
                className="inline-flex items-center justify-center px-6 py-3 bg-cream-100 text-gray-800 rounded-full text-lg font-medium hover-scale"
              >
                View Categories
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-meat-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real-time prices</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-meat-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Nation-wide coverage</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-cream-50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cream-200/50" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"
                    alt="Various meat cuts"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Price tags - Fixed positioning to prevent text cutoff */}
              <div className="absolute top-8 -right-6 glass px-4 py-3 rounded-xl shadow-lg animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-sm font-medium text-gray-600">Ribeye Steak</div>
                <div className="text-lg font-bold text-meat-700">$12.99<span className="text-sm text-gray-500">/lb</span></div>
              </div>
              
              <div className="absolute bottom-12 -left-6 glass px-4 py-3 rounded-xl shadow-lg animate-fade-up" style={{ animationDelay: '1s' }}>
                <div className="text-sm font-medium text-gray-600">Ground Beef</div>
                <div className="text-lg font-bold text-meat-700">$4.99<span className="text-sm text-gray-500">/lb</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#compare" className="text-gray-400 hover:text-meat-600 transition-all-200">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
