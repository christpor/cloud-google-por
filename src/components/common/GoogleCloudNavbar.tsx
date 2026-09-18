import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { GOOGLE_CLOUD_PRODUCTS } from '../../data/content';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

const SIDEBAR_CATEGORIES = [
  'Featured Products',
  'AI and Machine Learning',
  'Business Intelligence',
  'Compute',
  'Containers',
  'Data Analytics',
  'Databases',
  'Developer Tools',
  'Distributed Cloud',
  'Hybrid and Multicloud',
  'Industry Specific'
];

export const GoogleCloudNavbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Featured Products');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (path: string) => {
    setActiveDropdown(null);
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-google-gray-200 transition-all">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Left Cluster: Google Cloud Wordmark & Logo */}
          <div className="flex items-center gap-8">
            <div 
              onClick={() => handleNav('/')}
              className="cursor-pointer flex items-center gap-2 select-none"
            >
              <img 
                src="/assets/images/google-cloud-logo-fullcolor.svg" 
                alt="Google Cloud" 
                className="h-7 sm:h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-[14px] font-normal text-google-gray-700">
              <button 
                onClick={() => handleNav('/')}
                className={`py-2 hover:text-google-blue transition-colors ${currentPath === '/' ? 'text-google-blue font-medium' : ''}`}
              >
                Overview
              </button>

              {/* Solutions Dropdown */}
              <div 
                className="relative py-2 flex items-center gap-1 cursor-pointer hover:text-google-blue transition-colors"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
              >
                <span className={currentPath.includes('solutions') ? 'text-google-blue font-medium' : ''}>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180 text-google-blue' : 'text-google-gray-500'}`} />
              </div>

              {/* Products Mega-Menu Button */}
              <div 
                className="relative py-2 flex items-center gap-1 cursor-pointer hover:text-google-blue transition-colors"
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
              >
                <span className={activeDropdown === 'products' ? 'text-google-blue font-medium' : ''}>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'products' ? 'rotate-180 text-google-blue' : 'text-google-gray-500'}`} />
              </div>

              {/* Pricing */}
              <button 
                onClick={() => handleNav('/pricing/list')}
                className={`py-2 hover:text-google-blue transition-colors ${currentPath === '/pricing/list' ? 'text-google-blue font-medium' : ''}`}
              >
                Pricing
              </button>

              {/* Resources */}
              <div 
                className="relative py-2 flex items-center gap-1 cursor-pointer hover:text-google-blue transition-colors"
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
              >
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 text-google-gray-500" />
              </div>

              {/* Contact Us */}
              <button 
                onClick={() => handleNav('/solutions/risk-and-compliance-as-code')}
                className="py-2 text-google-blue hover:text-google-blue-hover font-medium transition-colors"
              >
                Contact us
              </button>
            </nav>
          </div>

          {/* Right Cluster: Search, Docs, Support, Console, Launcher, Avatar */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Quick Product Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full hover:bg-google-gray-100 text-google-gray-600 transition-colors"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4" />
            </button>

            <button 
              onClick={() => handleNav('/docs')}
              className="hidden md:inline-block text-xs font-medium text-google-gray-700 hover:text-google-blue"
            >
              Docs
            </button>

            <a 
              href="https://cloud.google.com/support" 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:inline-block text-xs font-medium text-google-gray-700 hover:text-google-blue"
            >
              Support
            </a>

            {/* Console Link (Blue in Google UI) */}
            <a
              href="https://console.cloud.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-google-blue hover:text-google-blue-hover px-1 py-1"
            >
              Console
            </a>

            {/* 9 Dots App Launcher */}
            <button 
              className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-google-gray-100 text-google-gray-600"
              title="Google apps"
            >
              <div className="grid grid-cols-3 gap-[2.5px] w-3.5 h-3.5">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-[3px] h-[3px] rounded-full bg-google-gray-600"></span>
                ))}
              </div>
            </button>

            {/* Google Account Avatar Circle */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-400 p-[1.5px] cursor-pointer shadow-xs">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-bold text-google-gray-800">
                C
              </div>
            </div>

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

      {/* 2026 MEGA-MENU FOR "PRODUCTS" (Direct parity with Screencast frame 012) */}
      {activeDropdown === 'products' && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-google-gray-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              
              {/* Left Column: Sidebar Categories */}
              <div className="col-span-3 border-r border-google-gray-200 pr-6 space-y-1">
                {SIDEBAR_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-google-gray-100 text-google-gray-900 font-semibold'
                        : 'text-google-gray-600 hover:bg-google-gray-50 hover:text-google-gray-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}

                <div className="pt-4">
                  <button
                    onClick={() => handleNav('/pricing/list')}
                    className="w-full text-left px-4 py-2.5 rounded-full text-xs font-medium text-google-gray-700 border border-google-gray-300 hover:border-google-blue hover:text-google-blue transition-colors"
                  >
                    See all products (100+)
                  </button>
                </div>
              </div>

              {/* Right Column: 3-Column Product Grid with Authentic SVG/PNG Icons */}
              <div className="col-span-9 space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-google-gray-100">
                  <h3 className="text-2xl font-normal text-google-gray-900 tracking-tight">{selectedCategory}</h3>
                  <button 
                    onClick={() => setActiveDropdown(null)}
                    className="p-1.5 rounded-full hover:bg-google-gray-100 text-google-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {GOOGLE_CLOUD_PRODUCTS.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => handleNav(prod.docsUrl)}
                      className="group p-3 rounded-2xl hover:bg-google-gray-50 transition-all cursor-pointer flex items-start gap-3.5"
                    >
                      <img 
                        src={prod.imageIcon} 
                        alt={prod.name} 
                        className="w-8 h-8 shrink-0 object-contain mt-0.5" 
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-medium text-google-gray-900 group-hover:text-google-blue transition-colors">
                            {prod.name}
                          </h4>
                        </div>
                        <p className="text-xs text-google-gray-500 leading-relaxed line-clamp-2">
                          {prod.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Prompt Link */}
                <div className="pt-4 border-t border-google-gray-100 flex items-center justify-between text-xs text-google-gray-500">
                  <span>Not seeing what you're looking for?</span>
                  <button 
                    onClick={() => handleNav('/pricing/list')}
                    className="font-medium text-google-blue hover:underline flex items-center gap-1"
                  >
                    <span>See all products (100+)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Solutions Dropdown */}
      {activeDropdown === 'solutions' && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-google-gray-200 shadow-2xl z-50 animate-in fade-in duration-150">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between pb-4 border-b border-google-gray-100 mb-6">
              <h3 className="text-2xl font-normal text-google-gray-900">Application Modernization</h3>
              <button onClick={() => setActiveDropdown(null)} className="p-1 rounded-full hover:bg-google-gray-100">
                <X className="w-5 h-5 text-google-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div 
                onClick={() => handleNav('/solutions/infrastructure-modernization')}
                className="p-4 rounded-2xl hover:bg-google-gray-50 cursor-pointer space-y-1"
              >
                <h4 className="text-sm font-medium text-google-gray-900 hover:text-google-blue">CAMP</h4>
                <p className="text-xs text-google-gray-500">Program that uses DORA to improve your software delivery capabilities.</p>
              </div>
              <div 
                onClick={() => handleNav('/solutions/infrastructure-modernization')}
                className="p-4 rounded-2xl hover:bg-google-gray-50 cursor-pointer space-y-1"
              >
                <h4 className="text-sm font-medium text-google-gray-900 hover:text-google-blue">Modernize Traditional Apps</h4>
                <p className="text-xs text-google-gray-500">Analyze, categorize, and get started with cloud migration on traditional workloads.</p>
              </div>
              <div 
                onClick={() => handleNav('/solutions/infrastructure-modernization')}
                className="p-4 rounded-2xl hover:bg-google-gray-50 cursor-pointer space-y-1"
              >
                <h4 className="text-sm font-medium text-google-gray-900 hover:text-google-blue">Migrate from PaaS</h4>
                <p className="text-xs text-google-gray-500">Tools for moving your existing containers into Google managed container services.</p>
              </div>
              <div 
                onClick={() => handleNav('/solutions/infrastructure-modernization')}
                className="p-4 rounded-2xl hover:bg-google-gray-50 cursor-pointer space-y-1"
              >
                <h4 className="text-sm font-medium text-google-gray-900 hover:text-google-blue">Platform Engineering</h4>
                <p className="text-xs text-google-gray-500">Comprehensive suite of managed services and Golden Paths to build, manage, and scale.</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
