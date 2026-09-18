import React, { useState } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [cpuCount, setCpuCount] = useState(4);
  const [memoryGb, setMemoryGb] = useState(16);
  const [requestsPerMonth, setRequestsPerMonth] = useState(5000000);

  // Approximate GCP Cloud Run estimation formula
  const computeCost = Math.round((cpuCount * 0.000024 + memoryGb * 0.0000025) * 730 * 0.4);
  const requestCost = Math.round((requestsPerMonth / 1000000) * 0.40);
  const totalEstimate = computeCost + requestCost;
  const freeCreditRemaining = Math.max(0, 300 - totalEstimate);

  return (
    <div className="rounded-3xl bg-white border border-google-gray-200 shadow-sm p-6 sm:p-8 space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-google-blue text-xs font-semibold mb-2">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Cost Estimator</span>
        </div>
        <h3 className="text-2xl font-semibold text-google-gray-900">Estimate your Google Cloud workloads</h3>
        <p className="text-xs sm:text-sm text-google-gray-500 mt-1">
          Calculate serverless compute costs and discover how much of your workload is 100% covered by the $300 new customer credit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Box */}
        <div className="lg:col-span-6 space-y-6 bg-google-gray-50 p-6 rounded-2xl border border-google-gray-200">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-google-gray-700">
              <span>vCPU Allocation</span>
              <span className="font-mono text-google-blue">{cpuCount} vCPUs</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="16" 
              value={cpuCount} 
              onChange={e => setCpuCount(parseInt(e.target.value))}
              className="w-full accent-google-blue"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-google-gray-700">
              <span>Memory (RAM)</span>
              <span className="font-mono text-google-blue">{memoryGb} GB</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="64" 
              step="2"
              value={memoryGb} 
              onChange={e => setMemoryGb(parseInt(e.target.value))}
              className="w-full accent-google-blue"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-google-gray-700">
              <span>Monthly Invocations</span>
              <span className="font-mono text-google-blue">{(requestsPerMonth / 1000000).toFixed(1)}M requests</span>
            </div>
            <input 
              type="range" 
              min="1000000" 
              max="20000000" 
              step="1000000"
              value={requestsPerMonth} 
              onChange={e => setRequestsPerMonth(parseInt(e.target.value))}
              className="w-full accent-google-blue"
            />
          </div>
        </div>

        {/* Cost Summary Box */}
        <div className="lg:col-span-6 p-6 rounded-2xl border border-google-gray-200 bg-white space-y-5">
          <div className="border-b border-google-gray-100 pb-4">
            <span className="text-[11px] font-semibold text-google-gray-500 uppercase tracking-wider">Estimated Monthly Cost</span>
            <div className="text-4xl font-bold text-google-gray-900 mt-1">${totalEstimate}.00 <span className="text-xs font-normal text-google-gray-500">/ month</span></div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Covered by $300 Free Credit</span>
            </div>
            <p className="text-emerald-700 leading-relaxed">
              Your estimated bill is fully paid by the credit for the first month, leaving <strong className="text-emerald-900">${freeCreditRemaining}.00</strong> for BigQuery or Gemini API calls.
            </p>
          </div>

          <div className="space-y-2 text-xs text-google-gray-600">
            <div className="flex justify-between">
              <span>Compute Engine / Cloud Run Runtime:</span>
              <span className="font-semibold text-google-gray-900">${computeCost}.00</span>
            </div>
            <div className="flex justify-between">
              <span>HTTP/gRPC Request Invocations:</span>
              <span className="font-semibold text-google-gray-900">${requestCost}.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
