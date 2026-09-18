import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { GOOGLE_CLOUD_PRODUCTS } from '../../data/content';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filtered = GOOGLE_CLOUD_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.desc.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        onNavigate(filtered[selectedIndex].docsUrl);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-google-gray-200 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-google-gray-200 flex items-center gap-3 bg-google-gray-50">
          <Search className="w-5 h-5 text-google-gray-500" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Google Cloud products, models, or solutions..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none text-google-gray-900 text-sm focus:outline-none placeholder:text-google-gray-500"
          />
          <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-google-gray-300 text-google-gray-500">ESC</kbd>
          <button onClick={onClose} className="p-1 rounded-full text-google-gray-500 hover:bg-google-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                onNavigate(item.docsUrl);
                onClose();
              }}
              onMouseEnter={() => setSelectedIndex(idx)}
              className={`p-3 rounded-2xl cursor-pointer flex items-center justify-between transition-colors ${
                selectedIndex === idx ? 'bg-blue-50/70 text-google-gray-900' : 'hover:bg-google-gray-50 text-google-gray-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-google-gray-200 flex items-center justify-center p-1">
                  <img src={item.imageIcon} alt={item.name} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <div className="text-sm font-medium text-google-gray-900 flex items-center gap-2">
                    <span>{item.name}</span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-google-gray-200 text-google-gray-700">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-xs text-google-gray-500 truncate max-w-md">{item.desc}</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-google-gray-400" />
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="p-8 text-center text-xs text-google-gray-500">
              No matching Google Cloud products found for "{query}".
            </div>
          )}
        </div>

        <div className="p-3 bg-google-gray-50 border-t border-google-gray-200 px-4 flex items-center justify-between text-[11px] text-google-gray-500 font-mono">
          <span>↑↓ to navigate • ↵ to select</span>
          <span className="text-google-blue font-sans font-medium">Google Cloud Search</span>
        </div>
      </div>
    </div>
  );
};
