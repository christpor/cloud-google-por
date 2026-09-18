import React from 'react';
import { Sparkles, Shield, Code } from 'lucide-react';
import { GeminiPlayground } from '../features/gemini-studio/GeminiPlayground';

interface GeminiAIPageProps {
  onNavigate: (path: string) => void;
}

export const GeminiAIPage: React.FC<GeminiAIPageProps> = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-20 space-y-16 sm:space-y-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-google-blue">
            <img src="/assets/images/logo_gemini_2025_color_2x_web_24dp.png" alt="Gemini" className="w-4 h-4 object-contain" />
            <span>Vertex AI & Gemini Enterprise</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-google-gray-900 leading-[1.1]">
            The Gemini era for developers and businesses
          </h1>
          <p className="text-base sm:text-lg text-google-gray-700 font-normal">
            Build multimodal agents with our 2 million token context window, enterprise data grounding with Google Search, and enterprise-grade SLA compliance.
          </p>
        </div>

        {/* Live Interactive Playground */}
        <GeminiPlayground />

        {/* Enterprise AI Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-google-gray-50 border border-google-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-google-blue flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-google-gray-900">2M Token Context</h3>
            <p className="text-xs text-google-gray-600 leading-relaxed">
              Process 1 hour of video, 11 hours of audio, codebases with over 30,000 lines, or vast enterprise legal PDFs in a single prompt.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-google-gray-50 border border-google-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-google-gray-900">Enterprise Grounding</h3>
            <p className="text-xs text-google-gray-600 leading-relaxed">
              Ground your model responses with your private databases, enterprise data stores, or real-time Google Search with complete data privacy.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-google-gray-50 border border-google-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-google-gray-900">Gemini Code Assist</h3>
            <p className="text-xs text-google-gray-600 leading-relaxed">
              Full-cycle AI coding partner that understands your private repository architecture, suggests unit tests, and accelerates migrations.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
