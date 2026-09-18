import React, { useState } from 'react';
import { Terminal, Play } from 'lucide-react';

export const GeminiPlayground: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<'agent' | 'sql' | 'multimodal'>('agent');
  const [prompt, setPrompt] = useState('Analyze multi-region inventory and trigger automatic supplier restock orders.');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string>(
    '{\n  "status": "ready",\n  "model": "gemini-1.5-pro",\n  "grounding": "enterprise_db",\n  "recommendation": "Inventory at Tokyo DC is at 14% capacity. Triggered PO-9481 to regional hub."\n}'
  );

  const presets = {
    agent: {
      prompt: 'Analyze multi-region inventory and trigger automatic supplier restock orders.',
      response: '{\n  "action": "execute_tool",\n  "tool": "erp_inventory_api",\n  "parameters": {\n    "region": "asia-northeast1",\n    "threshold": 0.20\n  },\n  "confidence": 0.994\n}'
    },
    sql: {
      prompt: 'Find top 5 customers with highest churn probability in BigQuery using ML.PREDICT.',
      response: 'SELECT customer_id, churn_probability\nFROM ML.PREDICT(MODEL `analytics.churn_model`,\n  (SELECT * FROM `analytics.customer_events` WHERE last_active < CURRENT_DATE - 30))\nORDER BY churn_probability DESC\nLIMIT 5;'
    },
    multimodal: {
      prompt: 'Extract architectural anomalies and compliance tags from satellite raster imagery.',
      response: '{\n  "anomaly_detected": true,\n  "coordinates": [35.6895, 139.6917],\n  "classification": "unregistered_industrial_expansion",\n  "confidence": 0.982\n}'
    }
  };

  const handleSimulate = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setOutput(presets[selectedTask].response);
    }, 800);
  };

  return (
    <div className="rounded-3xl bg-white border border-google-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-google-gray-200 pb-5">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/images/logo_gemini_2025_color_2x_web_24dp.png" 
            alt="Gemini Enterprise" 
            className="w-7 h-7 object-contain"
          />
          <div>
            <h3 className="text-lg font-semibold text-google-gray-900">Gemini Enterprise Studio Simulator</h3>
            <p className="text-xs text-google-gray-500">Test agent workflows with enterprise grounding and 2M token context.</p>
          </div>
        </div>

        {/* Task Selector */}
        <div className="flex rounded-full bg-google-gray-100 p-1 border border-google-gray-200 text-xs font-semibold">
          <button
            onClick={() => {
              setSelectedTask('agent');
              setPrompt(presets.agent.prompt);
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all ${selectedTask === 'agent' ? 'bg-white text-google-blue shadow-xs' : 'text-google-gray-700'}`}
          >
            Autonomous Agent
          </button>
          <button
            onClick={() => {
              setSelectedTask('sql');
              setPrompt(presets.sql.prompt);
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all ${selectedTask === 'sql' ? 'bg-white text-google-blue shadow-xs' : 'text-google-gray-700'}`}
          >
            BigQuery SQL AI
          </button>
          <button
            onClick={() => {
              setSelectedTask('multimodal');
              setPrompt(presets.multimodal.prompt);
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all ${selectedTask === 'multimodal' ? 'bg-white text-google-blue shadow-xs' : 'text-google-gray-700'}`}
          >
            Multimodal Vision
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Input Prompt Box */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs font-semibold text-google-gray-700">Enterprise System Prompt</label>
          <textarea
            rows={4}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            className="w-full p-3.5 rounded-2xl bg-google-gray-50 border border-google-gray-200 text-xs text-google-gray-900 focus:outline-none focus:border-google-blue focus:bg-white font-mono transition-all"
          />

          <button
            onClick={handleSimulate}
            disabled={isRunning}
            className="w-full py-3 rounded-full text-xs font-semibold bg-google-blue hover:bg-google-blue-hover text-white flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
          >
            {isRunning ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Executing Model via Vertex AI...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Play className="w-3.5 h-3.5" />
                Run Gemini 1.5 Pro
              </span>
            )}
          </button>
        </div>

        {/* Output Simulator Box */}
        <div className="lg:col-span-7 rounded-2xl bg-google-gray-900 text-white p-5 font-mono text-xs space-y-3 shadow-md">
          <div className="flex items-center justify-between border-b border-google-gray-700 pb-2 text-google-gray-400">
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-google-blue" />
              <span>Vertex AI Grounded Response</span>
            </span>
            <span className="text-[10px] text-emerald-400">● Latency: 142ms</span>
          </div>
          <pre className="overflow-x-auto text-emerald-400 leading-relaxed">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
};
