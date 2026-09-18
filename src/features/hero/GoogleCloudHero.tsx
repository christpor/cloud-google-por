import React, { useState } from 'react';
import { ArrowRight, Play, Pause, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const GoogleCloudHero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.getElementById('gcp-hero-video') as HTMLVideoElement | null;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-google-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-google-blue">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Gemini Era on Google Cloud</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.035em] text-google-gray-900 leading-[1.1]">
              The new way to cloud
            </h1>

            <p className="text-base sm:text-lg text-google-gray-700 font-normal leading-relaxed max-w-xl">
              Meet your business challenges head on with AI and cloud computing services from Google, including modern data analytics, developer tools, and hybrid & multi-cloud.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('/pricing/list')}
                className="px-6 py-3 rounded-full text-sm font-semibold bg-google-blue hover:bg-google-blue-hover text-white shadow-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Start free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/ai/gemini')}
                className="px-6 py-3 rounded-full text-sm font-semibold bg-google-gray-100 hover:bg-google-gray-200 text-google-gray-700 transition-all flex items-center gap-2"
              >
                <span>Explore Gemini AI</span>
              </button>
            </div>

            {/* Free Trial Banner */}
            <div className="p-4 rounded-2xl bg-google-gray-50 border border-google-gray-200 flex items-start gap-3 text-xs text-google-gray-700">
              <CheckCircle2 className="w-4 h-4 text-google-blue shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-google-gray-900">$300 in free credits</span> for new customers plus 20+ always-free products including Cloud Run, BigQuery, and Google Kubernetes Engine.
              </div>
            </div>
          </div>

          {/* Right Column: Scraped WebM Video Hero Backdrop */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-google-gray-200 bg-google-gray-900 aspect-[16/10]">
              <video
                id="gcp-hero-video"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/videos/MultiPath_2X_V2.webm" type="video/webm" />
              </video>

              {/* Video Controls Pill */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                <button
                  onClick={toggleVideo}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors"
                  title={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Floating Gemini AI Badge Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-google-gray-200 flex items-center gap-3">
                <img 
                  src="/assets/images/logo_gemini_2025_color_2x_web_24dp.png" 
                  alt="Gemini" 
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <div className="text-xs font-semibold text-google-gray-900">Gemini 1.5 Enterprise</div>
                  <div className="text-[10px] text-google-gray-500 font-mono">1M Token Context Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
