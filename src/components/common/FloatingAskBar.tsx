import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FloatingAskBarProps {
  onAsk: (query: string) => void;
}

export const FloatingAskBar: React.FC<FloatingAskBarProps> = ({ onAsk }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onAsk(query);
    setQuery('');
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 pointer-events-auto select-none">
      <form
        onSubmit={handleSubmit}
        className={`relative flex items-center justify-between rounded-full bg-[#eef0f2] transition-all duration-300 shadow-lg ${
          isFocused 
            ? 'ring-2 ring-google-blue bg-white shadow-2xl scale-[1.02]' 
            : 'hover:bg-[#e8eaed]'
        }`}
        style={{
          boxShadow: isFocused 
            ? '0 10px 30px -5px rgba(26, 115, 232, 0.25), 0 0 0 1px rgba(26, 115, 232, 0.4)' 
            : '0 8px 24px -4px rgba(60, 64, 67, 0.15)'
        }}
      >
        <div className="flex items-center gap-3 pl-5 pr-2 py-3 w-full">
          <Sparkles className={`w-4 h-4 transition-colors ${isFocused ? 'text-google-blue' : 'text-google-gray-500'}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask anything about Google Cloud"
            className="w-full bg-transparent text-sm text-google-gray-900 placeholder:text-google-gray-600 focus:outline-none font-normal"
          />
        </div>

        <button
          type="submit"
          className={`mr-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            query.trim() 
              ? 'bg-google-blue text-white shadow-xs scale-100' 
              : 'bg-google-gray-300 text-google-gray-500 hover:bg-google-gray-400'
          }`}
          aria-label="Send prompt"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
