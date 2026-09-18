import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import { ACCORDION_CATEGORIES } from '../../data/content';

interface ProductAccordionCatalogProps {
  onNavigate: (path: string) => void;
}

export const ProductAccordionCatalog: React.FC<ProductAccordionCatalogProps> = ({ onNavigate }) => {
  const [openCategory, setOpenCategory] = useState<string>('compute');

  const toggleCategory = (id: string) => {
    setOpenCategory(prev => (prev === id ? '' : id));
  };

  return (
    <section className="bg-white py-12 sm:py-20 border-t border-google-gray-200">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & CTAs (Direct parity with Screencast frame 007) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-google-gray-900 leading-[1.15]">
              Access over <span className="text-google-blue font-medium">150 cutting-edge products</span>, plus industry-defining AI
            </h2>

            <p className="text-base sm:text-lg text-google-gray-700 leading-relaxed max-w-lg">
              Build, deploy, and manage applications on our scalable, world-class infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://console.cloud.google.com"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-full text-sm font-semibold bg-google-blue hover:bg-google-blue-hover text-white shadow-xs transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <span>Go to my console</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onNavigate('/pricing/list')}
                className="text-sm font-semibold text-google-blue hover:text-google-blue-hover flex items-center gap-1.5 py-3 px-2"
              >
                <span>See all 150+ products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-7 divide-y divide-google-gray-200 border-t border-b border-google-gray-200">
            {ACCORDION_CATEGORIES.map(cat => {
              const isOpen = openCategory === cat.id;

              return (
                <div key={cat.id} className="py-4">
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full flex items-center justify-between py-2 text-left group"
                  >
                    <span className={`text-xl sm:text-2xl font-normal transition-colors ${
                      isOpen ? 'text-google-blue font-medium' : 'text-google-gray-900 group-hover:text-google-blue'
                    }`}>
                      {cat.name}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-google-blue' : 'text-google-gray-500 group-hover:text-google-gray-800'
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="pt-4 pb-6 space-y-4 animate-in fade-in duration-150">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cat.products.map((prod, idx) => (
                          <div
                            key={idx}
                            onClick={() => onNavigate(prod.url)}
                            className="p-4 rounded-2xl bg-google-gray-50 hover:bg-blue-50/50 border border-google-gray-200 hover:border-google-blue transition-all cursor-pointer flex items-start gap-3.5"
                          >
                            <img 
                              src={prod.imageIcon} 
                              alt={prod.name} 
                              className="w-8 h-8 shrink-0 object-contain mt-0.5" 
                            />
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium text-google-gray-900 hover:text-google-blue flex items-center gap-1">
                                <span>{prod.name}</span>
                              </h4>
                              <p className="text-xs text-google-gray-600 leading-relaxed line-clamp-2">
                                {prod.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
