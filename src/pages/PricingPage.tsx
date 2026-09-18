import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';
import { CostCalculator } from '../features/pricing/CostCalculator';
import { PRICING_TIERS } from '../data/content';

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white py-12 sm:py-20 space-y-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-google-blue">
            <Calculator className="w-3.5 h-3.5" />
            <span>Pay Only for What You Use</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-google-gray-900 leading-[1.1]">
            Transparent pricing, generous free tier
          </h1>
          <p className="text-base sm:text-lg text-google-gray-700 font-normal">
            Start building with $300 in free credits for 90 days. Over 20 always-free products with no upfront commitments.
          </p>
        </div>

        {/* Interactive Cost Estimator */}
        <CostCalculator />

        {/* Popular Pricing Architecture Tiers */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-google-gray-900">Recommended Workload Blueprints</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map(tier => (
              <div key={tier.id} className="p-6 rounded-3xl bg-google-gray-50 border border-google-gray-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-google-gray-900">{tier.name}</h4>
                    <p className="text-xs text-google-gray-500 mt-1">{tier.specs}</p>
                  </div>

                  <div className="text-3xl font-bold text-google-gray-900">
                    ${tier.monthlyEstimate} <span className="text-xs font-normal text-google-gray-500">/ mo estimate</span>
                  </div>

                  <ul className="space-y-2 text-xs text-google-gray-700 border-t border-google-gray-200 pt-4">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-google-blue shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate('/pricing/list')}
                  className="w-full py-2.5 rounded-full text-xs font-semibold bg-white border border-google-gray-300 hover:border-google-blue text-google-gray-800 transition-colors"
                >
                  Deploy this Blueprint
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
