import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const GoogleCloudFooter: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-google-gray-50 border-t border-google-gray-200 py-12 sm:py-16 text-xs text-google-gray-500">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="space-y-3">
            <h4 className="font-semibold text-google-gray-900 text-sm">About Google Cloud</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/')} className="hover:text-google-blue">Overview</button></li>
              <li><button onClick={() => onNavigate('/sustainability')} className="hover:text-google-blue">Sustainability</button></li>
              <li><button onClick={() => onNavigate('/whitepapers')} className="hover:text-google-blue">Trust and Security</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue">Infrastructure</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-google-gray-900 text-sm">Products</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/ai/gemini')} className="hover:text-google-blue">Gemini Enterprise</button></li>
              <li><button onClick={() => onNavigate('/bigquery')} className="hover:text-google-blue">BigQuery</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue">Google Kubernetes Engine</button></li>
              <li><button onClick={() => onNavigate('/products/managed-lustre')} className="hover:text-google-blue">Cloud Storage</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-google-gray-900 text-sm">Solutions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue">Infrastructure Modernization</button></li>
              <li><button onClick={() => onNavigate('/solutions/risk-and-compliance-as-code')} className="hover:text-google-blue">Risk & Compliance</button></li>
              <li><button onClick={() => onNavigate('/ai/gemini')} className="hover:text-google-blue">Generative AI Solutions</button></li>
              <li><button onClick={() => onNavigate('/earth-engine')} className="hover:text-google-blue">Google Earth Engine</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-google-gray-900 text-sm">Pricing & Plans</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue">Price list & $300 Credit</button></li>
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue">Free tier products</button></li>
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue">Cost Calculator</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-google-gray-900 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/docs')} className="hover:text-google-blue">Documentation</button></li>
              <li><button onClick={() => onNavigate('/whitepapers')} className="hover:text-google-blue">Whitepapers</button></li>
              <li><button onClick={() => onNavigate('/apigee')} className="hover:text-google-blue">Apigee API Platform</button></li>
              <li><a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" className="hover:text-google-blue flex items-center gap-1">Cloud Console <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-google-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-google-gray-700">Google Cloud</span>
            <div className="flex items-center gap-1 hover:text-google-blue cursor-pointer">
              <Globe className="w-3.5 h-3.5" />
              <span>Global (English)</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy</span>
            <span>Site Terms</span>
            <span>Google Cloud Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
