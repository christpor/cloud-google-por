import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GoogleCloudHero } from '../features/hero/GoogleCloudHero';
import { GeminiPlayground } from '../features/gemini-studio/GeminiPlayground';
import { GOOGLE_CLOUD_PRODUCTS, CUSTOMER_STORIES } from '../data/content';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedStory, setSelectedStory] = useState(CUSTOMER_STORIES[0]);

  return (
    <div className="w-full space-y-20 pb-20">
      {/* 1. Hero with WebM Video */}
      <GoogleCloudHero onNavigate={onNavigate} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 2. Interactive Gemini Studio Sandbox */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold text-google-blue tracking-wider">
              Gemini Era for Developers and Businesses
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-google-gray-900">
              Build and scale generative AI apps with enterprise confidence
            </h2>
            <p className="text-sm sm:text-base text-google-gray-700">
              Agent Platform is our fully-managed AI development suite to build and manage AI applications, with access to Agent Studio and 200+ foundation models.
            </p>
          </div>

          <GeminiPlayground />
        </section>

        {/* 3. Core Products Grid with Official GStatic Assets */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-google-gray-200 pb-4">
            <div>
              <h3 className="text-2xl font-semibold text-google-gray-900">Featured Cloud Products</h3>
              <p className="text-xs text-google-gray-500 mt-1">Enterprise infrastructure engineered for scale, reliability, and security.</p>
            </div>
            <button
              onClick={() => onNavigate('/pricing/list')}
              className="text-xs font-semibold text-google-blue hover:text-google-blue-hover flex items-center gap-1"
            >
              <span>View all 150+ products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOOGLE_CLOUD_PRODUCTS.map(prod => (
              <div
                key={prod.id}
                onClick={() => onNavigate(prod.docsUrl)}
                className="group rounded-3xl p-6 bg-white border border-google-gray-200 hover:border-google-blue hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-google-blue flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">{prod.icon}</span>
                    </div>
                    {prod.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-google-gray-100 text-google-gray-700 font-semibold border border-google-gray-200">
                        {prod.tag}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-google-gray-900 group-hover:text-google-blue transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-google-gray-500 mt-1.5 leading-relaxed">{prod.desc}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-google-blue group-hover:translate-x-1 transition-transform">
                  <span>Explore product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Customer Stories & Case Studies (Target, Home Depot, Volkswagen, MLB) */}
        <section className="space-y-8 rounded-3xl bg-google-gray-50 border border-google-gray-200 p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-google-gray-200 pb-6">
            <div>
              <span className="text-xs uppercase font-semibold text-google-blue tracking-wider">Enterprise Proof</span>
              <h3 className="text-2xl sm:text-3xl font-normal text-google-gray-900 mt-1">AI innovation happens on Google Cloud</h3>
            </div>
            {/* Story Picker */}
            <div className="flex flex-wrap gap-2">
              {CUSTOMER_STORIES.map(story => (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedStory.id === story.id
                      ? 'bg-google-blue text-white shadow-xs'
                      : 'bg-white text-google-gray-700 border border-google-gray-300 hover:bg-google-gray-100'
                  }`}
                >
                  {story.company}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-semibold text-google-gray-500 uppercase">{selectedStory.industry}</span>
              <blockquote className="text-xl sm:text-2xl font-normal text-google-gray-900 leading-snug">
                "{selectedStory.quote}"
              </blockquote>
              <div className="text-xs text-google-gray-600">
                <strong>Google Cloud Products:</strong> <span className="text-google-blue font-semibold">{selectedStory.productUsed}</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-google-gray-200 text-center space-y-2 shadow-xs">
              <div className="text-4xl sm:text-5xl font-bold text-google-blue">{selectedStory.stat}</div>
              <div className="text-xs font-semibold text-google-gray-700">{selectedStory.statLabel}</div>
            </div>
          </div>
        </section>

        {/* 5. Industry Solutions Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-3xl font-normal text-google-gray-900">Solve your business challenges with industry solutions</h3>
            <p className="text-xs sm:text-sm text-google-gray-600">Tailored reference architectures for retail, financial services, healthcare, and gaming.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Retail & eCommerce', icon: '/assets/images/cloud_google_com_images_icons_icn_retail_png.png', desc: 'Personalize shopping & optimize inventory' },
              { name: 'Financial Services', icon: '/assets/images/cloud_google_com_images_icons_icn_finance_png.png', desc: 'Detect fraud & streamline regulatory risk' },
              { name: 'Healthcare & Life Sciences', icon: '/assets/images/cloud_google_com_images_icons_icn_healthcare_png.png', desc: 'Secure clinical workflows & accelerate genomics' },
              { name: 'Manufacturing & Supply', icon: '/assets/images/cloud_google_com_images_icons_icn_manufacturing_png.png', desc: 'Predictive maintenance & operational robotics' }
            ].map(ind => (
              <div key={ind.name} className="p-6 rounded-3xl bg-white border border-google-gray-200 hover:border-google-gray-300 space-y-3">
                <img src={ind.icon} alt={ind.name} className="w-10 h-10 object-contain" />
                <h4 className="text-sm font-semibold text-google-gray-900">{ind.name}</h4>
                <p className="text-xs text-google-gray-500">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Pre-Footer Sign-up Callout */}
        <div className="rounded-3xl bg-google-gray-900 text-white p-8 sm:p-14 text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-normal tracking-tight">Let's start building your tomorrow, today</h3>
          <p className="text-sm sm:text-base text-google-gray-300 max-w-xl mx-auto">
            Get $300 in free credits to spend on Google Cloud over the next 90 days. Free usage of over 20 top products.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('/pricing/list')}
              className="px-8 py-3.5 rounded-full text-sm font-semibold bg-google-blue hover:bg-google-blue-hover text-white transition-all shadow-md active:scale-95"
            >
              Get started for free
            </button>
            <button
              onClick={() => onNavigate('/docs')}
              className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              Read documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
