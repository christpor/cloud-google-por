import React from 'react';
import { Database, ArrowRight } from 'lucide-react';

interface BigQueryPageProps {
  onNavigate: (path: string) => void;
}

export const BigQueryPage: React.FC<BigQueryPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white py-12 sm:py-20 space-y-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-google-blue">
            <Database className="w-3.5 h-3.5" />
            <span>BigQuery • Enterprise AI Data Cloud</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-google-gray-900 leading-[1.1]">
            Serverless multicloud data warehouse with built-in AI
          </h1>
          <p className="text-base sm:text-lg text-google-gray-700 font-normal">
            Analyze petabytes of structured and unstructured data with zero infrastructure management, unified SQL interface, and integrated Gemini models.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onNavigate('/pricing/list')}
              className="px-6 py-3 rounded-full text-xs font-semibold bg-google-blue hover:bg-google-blue-hover text-white flex items-center gap-2 shadow-xs"
            >
              <span>Try BigQuery free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* BigQuery Key Value Metric Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-google-gray-50 border border-google-gray-200 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-google-gray-900 tracking-tight">10 GB</div>
            <div className="text-xs font-medium text-google-gray-500 mt-1">Free Storage Monthly</div>
          </div>
          <div className="p-6 rounded-3xl bg-google-gray-50 border border-google-gray-200 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-google-gray-900 tracking-tight">1 TB</div>
            <div className="text-xs font-medium text-google-gray-500 mt-1">Free Query Processing</div>
          </div>
          <div className="p-6 rounded-3xl bg-google-gray-50 border border-google-gray-200 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-google-gray-900 tracking-tight">99.99%</div>
            <div className="text-xs font-medium text-google-gray-500 mt-1">High-Availability SLA</div>
          </div>
          <div className="p-6 rounded-3xl bg-google-gray-50 border border-google-gray-200 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-emerald-600 tracking-tight">0 Ops</div>
            <div className="text-xs font-medium text-google-gray-500 mt-1">Zero Server Provisioning</div>
          </div>
        </div>

        {/* Interactive BigQuery Studio Demo */}
        <div className="rounded-3xl bg-google-gray-900 text-white p-6 sm:p-8 space-y-4 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-google-gray-700 pb-3">
            <div className="flex items-center gap-2 text-google-gray-300">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2">BigQuery Studio • Query Editor</span>
            </div>
            <span className="text-[11px] text-emerald-400">STATUS: QUERY SUCCEEDED (340 ms)</span>
          </div>

          <pre className="text-blue-400 overflow-x-auto leading-relaxed">
{`-- BigQuery ML: Forecast 90-day demand with Gemini text embeddings
SELECT 
  store_id, 
  product_sku, 
  forecasted_units,
  ML.GENERATE_TEXT(
    MODEL \`enterprise_ai.gemini_pro\`,
    STRUCT(CONCAT('Summarize anomaly reason for store ', store_id) AS prompt)
  ) AS executive_summary
FROM ML.FORECAST(MODEL \`inventory.demand_model\`, STRUCT(90 AS horizon))
WHERE confidence_interval > 0.95
LIMIT 5;`}
          </pre>
        </div>

      </div>
    </div>
  );
};
