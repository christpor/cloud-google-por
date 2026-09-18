import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { GOOGLE_CLOUD_PRODUCTS } from '../../data/content';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const GoogleCloudNavbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (path: string) => {
    setActiveDropdown(null);
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-google-gray-200 transition-all shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Left Cluster: Google Cloud Wordmark & Logo */}
          <div className="flex items-center gap-6 xl:gap-8">
            <div 
              onClick={() => handleNav('/')}
              className="cursor-pointer flex items-center gap-2 select-none group"
            >
              <img 
                src="/assets/images/google-cloud-logo-fullcolor.svg" 
                alt="Google Cloud" 
                className="h-8 sm:h-9 w-auto"
              />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[14px] font-medium text-google-gray-700">
              {/* Products Dropdown */}
              <div 
                className="relative py-2 flex items-center gap-1 cursor-pointer hover:text-google-blue transition-colors"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-google-gray-500 transition-transform group-hover:rotate-180" />

                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-0.5 w-[560px] bg-white rounded-2xl shadow-xl border border-google-gray-200 p-5 grid grid-cols-2 gap-3 animate-in fade-in zoom-in-95 duration-150">
                    {GOOGLE_CLOUD_PRODUCTS.map(prod => (
                      <div
                        key={prod.id}
                        onClick={() => handleNav(prod.docsUrl)}
                        className="p-3 rounded-xl hover:bg-google-gray-50 cursor-pointer transition-colors space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-google-gray-900 hover:text-google-blue">{prod.name}</span>
                          {prod.tag && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-50 text-google-blue border border-blue-100 font-semibold">
                              {prod.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-google-gray-500 line-clamp-2 leading-relaxed">{prod.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions */}
              <button 
                onClick={() => handleNav('/solutions/infrastructure-modernization')}
                className={`py-2 hover:text-google-blue transition-colors ${currentPath.includes('solutions') ? 'text-google-blue font-semibold' : ''}`}
              >
                Solutions
              </button>

              {/* Pricing */}
              <button 
                onClick={() => handleNav('/pricing/list')}
                className={`py-2 hover:text-google-blue transition-colors ${currentPath === '/pricing/list' ? 'text-google-blue font-semibold' : ''}`}
              >
                Pricing
              </button>

              {/* Documentation */}
              <button 
                onClick={() => handleNav('/docs')}
                className={`py-2 hover:text-google-blue transition-colors ${currentPath === '/docs' ? 'text-google-blue font-semibold' : ''}`}
              >
                Documentation
              </button>
            </nav>
          </div>

          {/* Right Cluster: Search, Console, CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Product Search Pill */}
            <button
              onClick={onOpenSearch}
              className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-google-gray-50 hover:bg-google-gray-100 border border-google-gray-300 text-google-gray-500 text-xs transition-all active:scale-95"
            >
              <Search className="w-3.5 h-3.5 text-google-gray-500" />
              <span>Search products (⌘K)</span>
            </button>

            {/* Console Link */}
            <a
              href="https://console.cloud.google.com"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-xs font-medium text-google-gray-700 hover:text-google-blue px-3 py-1.5"
            >
              <span>Console</span>
              <ExternalLink className="w-3 h-3 text-google-gray-500" />
            </a>

            {/* Start Free CTA */}
            <button
              onClick={() => handleNav('/pricing/list')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-google-blue hover:bg-google-blue-hover text-white shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Start free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-google-gray-700 hover:bg-google-gray-100"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-google-gray-200 bg-white px-6 py-6 space-y-4 shadow-xl">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-google-gray-50 border border-google-gray-200 text-xs text-google-gray-600"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-google-gray-500" />
              <span>Search Google Cloud products...</span>
            </div>
            <kbd className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-google-gray-300">⌘K</kbd>
          </button>

          <div className="space-y-1 text-sm font-medium text-google-gray-800">
            <button onClick={() => handleNav('/')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-google-gray-50">Overview</button>
            <button onClick={() => handleNav('/ai/gemini')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-google-gray-50 flex items-center justify-between">
              <span>Gemini Enterprise</span>
              <span className="text-[10px] font-bold text-google-blue bg-blue-50 px-2 py-0.5 rounded-full">New</span>
            </button>
            <button onClick={() => handleNav('/bigquery')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-google-gray-50">BigQuery Data Platform</button>
            <button onClick={() => handleNav('/pricing/list')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-google-gray-50">Pricing & $300 Credit</button>
            <button onClick={() => handleNav('/docs')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-google-gray-50">Documentation</button>
          </div>
        </div>
      )}
    </header>
  );
};
