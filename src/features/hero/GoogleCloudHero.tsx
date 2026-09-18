import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_CAROUSEL_ITEMS } from '../../data/content';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const GoogleCloudHero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'developers' | 'business' | 'special'>('developers');

  const prevCard = () => {
    setActiveCardIndex(prev => (prev === 0 ? HERO_CAROUSEL_ITEMS.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setActiveCardIndex(prev => (prev === HERO_CAROUSEL_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-white pt-10 sm:pt-16 pb-16 overflow-hidden">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Centered Hero Logo & Headline (Direct parity with Screencast frame 000) */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center">
            <img 
              src="/assets/images/super_cloud_gradient.png" 
              alt="Google Cloud" 
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-sm hover:scale-105 transition-transform cursor-pointer"
              onClick={() => onNavigate('/')}
            />
          </div>

          <h1 className="text-5xl sm:text-7xl font-normal tracking-[-0.03em] text-google-gray-900 leading-[1.08]">
            Make work less work
          </h1>

          <p className="text-base sm:text-lg text-google-gray-700 leading-relaxed max-w-2xl mx-auto">
            Collaborate with AI in{' '}
            <button 
              onClick={() => onNavigate('/ai/gemini')}
              className="text-google-blue font-medium underline hover:text-google-blue-hover"
            >
              Gemini Enterprise app
            </button>
            . Build with APIs in{' '}
            <button 
              onClick={() => onNavigate('/ai/gemini')}
              className="text-google-blue font-medium underline hover:text-google-blue-hover"
            >
              Gemini Enterprise Agent Platform
            </button>
            .
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('/ai/gemini')}
              className="px-7 py-3 rounded-full text-sm font-semibold bg-google-blue hover:bg-google-blue-hover text-white shadow-xs transition-all active:scale-95"
            >
              Get started with the app
            </button>

            <button
              onClick={() => onNavigate('/ai/gemini')}
              className="px-7 py-3 rounded-full text-sm font-semibold bg-white border border-google-gray-300 hover:border-google-gray-400 hover:bg-google-gray-50 text-google-gray-800 transition-all active:scale-95"
            >
              Build in Agent Platform
            </button>
          </div>

          {/* Contact Sales Pill */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => onNavigate('/solutions/risk-and-compliance-as-code')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 hover:bg-blue-100/80 border border-blue-100 text-xs font-medium text-google-gray-800 transition-colors"
            >
              <span><strong className="font-semibold text-google-gray-900">Contact sales</strong> to learn more about Gemini Enterprise</span>
              <div className="w-4 h-4 rounded-full bg-google-blue flex items-center justify-center text-white">
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </button>
          </div>
        </div>

        {/* 2. 4-Card Black Rounded Showcase Carousel (Direct parity with Screencast frame 001 - 004) */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HERO_CAROUSEL_ITEMS.slice(activeCardIndex, activeCardIndex + 3).concat(
              HERO_CAROUSEL_ITEMS.slice(0, Math.max(0, activeCardIndex + 3 - HERO_CAROUSEL_ITEMS.length))
            ).map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate(item.url)}
                className="group relative h-[360px] sm:h-[400px] rounded-3xl bg-google-gray-900 text-white p-8 flex flex-col justify-between overflow-hidden shadow-xl border border-google-gray-800 hover:border-google-gray-700 transition-all cursor-pointer select-none"
              >
                {/* Visual Backdrop with Ambient Particle Mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent z-10"></div>
                <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ backgroundColor: item.accentColor }}></div>

                {/* Top Content */}
                <div className="relative z-20 space-y-4">
                  {item.id === 'gemini-at-work' ? (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <img src="/assets/images/logo_gemini_2025_color_2x_web_24dp.png" alt="Gemini" className="w-5 h-5 object-contain" />
                      <span className="text-sm font-semibold tracking-wide text-white">Gemini at Work &apos;26</span>
                    </div>
                  ) : item.id === 'ai-announcements' ? (
                    <div className="w-full h-32 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 blur-sm opacity-80 animate-pulse"></div>
                    </div>
                  ) : item.id === 'ai-infra' ? (
                    <div className="w-full h-32 flex items-center justify-center">
                      <div className="w-36 h-12 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400 rounded-full blur-md opacity-75"></div>
                    </div>
                  ) : (
                    <div className="w-full h-32 flex items-center justify-center">
                      <div className="w-28 h-28 rotate-45 border-2 border-google-blue/60 bg-google-blue/20 rounded-2xl backdrop-blur-sm"></div>
                    </div>
                  )}
                </div>

                {/* Bottom Content */}
                <div className="relative z-20 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-google-gray-400">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal leading-snug text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={prevCard}
              className="w-9 h-9 rounded-full bg-google-gray-100 hover:bg-google-gray-200 text-google-gray-800 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCard}
              className="w-9 h-9 rounded-full bg-google-gray-100 hover:bg-google-gray-200 text-google-gray-800 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3. Three-Tab Program & Tool Switcher (Direct parity with Screencast frame 001) */}
        <div className="rounded-3xl bg-[#f8f9fa] border border-google-gray-200 p-6 sm:p-8 space-y-6">
          {/* Tab Navigation */}
          <div className="flex items-center gap-8 border-b border-google-gray-200 pb-3 text-sm font-medium">
            <button
              onClick={() => setActiveTab('developers')}
              className={`pb-3 relative transition-colors ${
                activeTab === 'developers'
                  ? 'text-google-blue font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-google-blue'
                  : 'text-google-gray-600 hover:text-google-gray-900'
              }`}
            >
              Developers
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`pb-3 relative transition-colors ${
                activeTab === 'business'
                  ? 'text-google-blue font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-google-blue'
                  : 'text-google-gray-600 hover:text-google-gray-900'
              }`}
            >
              Business leaders
            </button>
            <button
              onClick={() => setActiveTab('special')}
              className={`pb-3 relative transition-colors ${
                activeTab === 'special'
                  ? 'text-google-blue font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-google-blue'
                  : 'text-google-gray-600 hover:text-google-gray-900'
              }`}
            >
              Special programs
            </button>
          </div>

          {/* Cards for active tab */}
          {activeTab === 'developers' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Gemini 3.8 Flash */}
              <div 
                onClick={() => onNavigate('/ai/gemini')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-google-gray-500">
                    Product Announcement
                  </span>
                  <h4 className="text-sm font-medium text-google-gray-900 leading-snug">
                    Now available: Gemini 3.8 Flash in Gemini Enterprise
                  </h4>
                </div>
                <img 
                  src="/assets/images/logo_gemini_2025_color_2x_web_24dp.png" 
                  alt="Gemini" 
                  className="w-9 h-9 shrink-0 object-contain" 
                />
              </div>

              {/* Card 2: Build with Gemini Events */}
              <div 
                onClick={() => onNavigate('/ai/gemini')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-google-gray-500">
                    Events
                  </span>
                  <h4 className="text-sm font-medium text-google-gray-900 leading-snug">
                    Register to get hands-on experience with Gemini in a city near you
                  </h4>
                </div>
                <div className="shrink-0 px-3 py-1.5 rounded-lg bg-google-gray-900 text-white flex items-center gap-1.5 text-xs font-medium">
                  <span>Build</span>
                  <img src="/assets/images/logo_gemini_2025_color_2x_web_24dp.png" alt="" className="w-3.5 h-3.5" />
                  <span>Gemini</span>
                </div>
              </div>

              {/* Card 3: Developer Plugin for AI Coding Agents */}
              <div 
                onClick={() => onNavigate('/solutions/infrastructure-modernization')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-google-gray-500">
                    Developer Tools
                  </span>
                  <h4 className="text-sm font-medium text-google-gray-900 leading-snug">
                    Introducing the developer plugin for AI coding agents
                  </h4>
                </div>
                <div className="w-9 h-9 shrink-0 flex items-center justify-center text-google-blue">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                onClick={() => onNavigate('/ai/gemini')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer space-y-2"
              >
                <span className="text-[10px] uppercase font-bold text-google-gray-500">ROI Framework</span>
                <h4 className="text-sm font-medium text-google-gray-900">How Fortune 500 CIOs measure gen AI business impact</h4>
              </div>
              <div 
                onClick={() => onNavigate('/ai/gemini')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer space-y-2"
              >
                <span className="text-[10px] uppercase font-bold text-google-gray-500">Security & Governance</span>
                <h4 className="text-sm font-medium text-google-gray-900">Zero data retention and copyright indemnification guarantee</h4>
              </div>
              <div 
                onClick={() => onNavigate('/pricing/list')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer space-y-2"
              >
                <span className="text-[10px] uppercase font-bold text-google-gray-500">Enterprise Pricing</span>
                <h4 className="text-sm font-medium text-google-gray-900">Volume tiers and sustained use discounts</h4>
              </div>
            </div>
          )}

          {activeTab === 'special' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                onClick={() => onNavigate('/pricing/list')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer space-y-2"
              >
                <span className="text-[10px] uppercase font-bold text-google-gray-500">Startups</span>
                <h4 className="text-sm font-medium text-google-gray-900">Google for Startups Cloud Program: up to $350k credits</h4>
              </div>
              <div 
                onClick={() => onNavigate('/pricing/list')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer space-y-2"
              >
                <span className="text-[10px] uppercase font-bold text-google-gray-500">Education</span>
                <h4 className="text-sm font-medium text-google-gray-900">Google Cloud faculty grants and academic research clusters</h4>
              </div>
              <div 
                onClick={() => onNavigate('/pricing/list')}
                className="p-6 rounded-2xl bg-white border border-google-gray-200 hover:shadow-md transition-all cursor-pointer space-y-2"
              >
                <span className="text-[10px] uppercase font-bold text-google-gray-500">Public Sector</span>
                <h4 className="text-sm font-medium text-google-gray-900">FedRAMP High and StateRAMP authorized infrastructure</h4>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
