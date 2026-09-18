import React, { useState } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { GoogleCloudHero } from '../features/hero/GoogleCloudHero';
import { GeminiPlayground } from '../features/gemini-studio/GeminiPlayground';
import { ProductAccordionCatalog } from '../features/catalog/ProductAccordionCatalog';
import { CUSTOMER_STORIES } from '../data/content';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedStory, setSelectedStory] = useState(CUSTOMER_STORIES[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.getElementById('gcp-network-video') as HTMLVideoElement | null;
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPlaying(true);
      } else {
        video.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <div className="w-full space-y-16 pb-28">
      {/* 1. Authentic 2026 Hero (Make work less work + Carousel + Tabs) */}
      <GoogleCloudHero onNavigate={onNavigate} />

      {/* 2. Interactive Gemini Studio Sandbox */}
      <section className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-semibold text-google-blue tracking-wider">
            Gemini Era for Developers and Businesses
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-google-gray-900 leading-[1.15]">
            Build and scale generative AI apps with enterprise confidence
          </h2>
          <p className="text-sm sm:text-base text-google-gray-700 leading-relaxed">
            Agent Platform is Google&apos;s fully managed suite to discover, create, run, and govern autonomous AI agents, powered by Gemini 1.5 Pro and 200+ enterprise foundation models.
          </p>
        </div>

        <GeminiPlayground />
      </section>

      {/* 3. Authentic Accordion Catalog (Access over 150 products + real SVG/PNG icons) */}
      <ProductAccordionCatalog onNavigate={onNavigate} />

      {/* 4. Global Network & WebM Video Showcase */}
      <section className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-google-gray-900 text-white overflow-hidden p-8 sm:p-12 relative shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-blue-300 backdrop-blur-md">
                <span>Google Planetary Network</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
                Clean, low-latency infrastructure powering millions of apps
              </h3>

              <p className="text-sm sm:text-base text-google-gray-300 leading-relaxed max-w-xl">
                Operate on the cleanest cloud in the industry with 40 regions, 121 zones, and 187 network edge locations connected by high-speed private subsea fiber optic cables.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/solutions/infrastructure-modernization')}
                  className="px-6 py-3 rounded-full text-xs font-semibold bg-google-blue hover:bg-google-blue-hover text-white shadow-xs transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Explore global infrastructure</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleVideo}
                  className="px-4 py-3 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all flex items-center gap-2"
                >
                  {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isVideoPlaying ? 'Pause loop' : 'Play video'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <video
                  id="gcp-network-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/images/MultiPath_2X_V2.webm_poster.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/MultiPath_2X_V2.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Customer Case Studies with Authentic High-Res Imagery */}
      <section className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-google-gray-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-google-blue">Enterprise Proven</span>
            <h3 className="text-2xl sm:text-4xl font-normal text-google-gray-900 mt-1">
              Trusted by leaders transforming their industries
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {CUSTOMER_STORIES.map(story => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedStory.id === story.id
                    ? 'bg-google-gray-900 text-white shadow-xs'
                    : 'bg-google-gray-100 text-google-gray-700 hover:bg-google-gray-200'
                }`}
              >
                {story.company}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-google-gray-50 border border-google-gray-200 p-8 sm:p-12">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <img src={selectedStory.logo} alt={selectedStory.company} className="w-8 h-8 object-contain" />
              <span className="text-xs font-semibold text-google-gray-500 uppercase tracking-wider">{selectedStory.industry}</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-normal text-google-gray-900 leading-snug">
              &ldquo;{selectedStory.quote}&rdquo;
            </blockquote>

            <div className="pt-2">
              <div className="text-4xl sm:text-5xl font-bold text-google-blue">
                {selectedStory.stat}
              </div>
              <div className="text-xs text-google-gray-600 uppercase font-semibold tracking-wider mt-1">
                {selectedStory.statLabel}
              </div>
            </div>

            <div className="pt-4 border-t border-google-gray-200 flex items-center justify-between text-xs text-google-gray-600">
              <span>Solution implemented: <strong className="text-google-gray-900 font-medium">{selectedStory.productUsed}</strong></span>
              <button onClick={() => onNavigate('/ai/gemini')} className="text-google-blue font-semibold hover:underline flex items-center gap-1">
                <span>Read case study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            {selectedStory.bgImage ? (
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-google-gray-300">
                <img 
                  src={selectedStory.bgImage} 
                  alt={selectedStory.company} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ) : (
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-tr from-blue-100 to-indigo-50 flex items-center justify-center p-8 text-center border border-blue-100">
                <div className="space-y-3 max-w-sm">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-white shadow-md flex items-center justify-center">
                    <img src={selectedStory.logo} alt="" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-google-gray-900">{selectedStory.company}</h4>
                  <p className="text-xs text-google-gray-600">Enterprise AI deployment with planetary scale reliability</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
