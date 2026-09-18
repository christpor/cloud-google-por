import React from 'react';
import { Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const GoogleCloudFooter: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-white border-t border-google-gray-200 py-12 sm:py-16 text-xs text-google-gray-600">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 5-Column Authentic Google Cloud Directory (Direct parity with Screencast frame 010) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Why Google */}
          <div className="space-y-3">
            <h4 className="font-medium text-google-gray-900 text-sm">Why Google</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => onNavigate('/')} className="hover:text-google-blue text-left">Choosing Google Cloud</button></li>
              <li><button onClick={() => onNavigate('/whitepapers')} className="hover:text-google-blue text-left">Trust and security</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">Modern Infrastructure Cloud</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">Multicloud</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">Global infrastructure</button></li>
              <li><button onClick={() => onNavigate('/')} className="hover:text-google-blue text-left">Locations</button></li>
              <li><button onClick={() => onNavigate('/')} className="hover:text-google-blue text-left">Customers and case studies</button></li>
              <li><button onClick={() => onNavigate('/whitepapers')} className="hover:text-google-blue text-left">Analyst reports</button></li>
              <li><button onClick={() => onNavigate('/whitepapers')} className="hover:text-google-blue text-left">Whitepapers</button></li>
              <li><button onClick={() => onNavigate('/')} className="hover:text-google-blue text-left">Blog</button></li>
            </ul>
          </div>

          {/* Column 2: Products and pricing */}
          <div className="space-y-3">
            <h4 className="font-medium text-google-gray-900 text-sm">Products and pricing</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue text-left">Google Cloud pricing</button></li>
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue text-left">Google Workspace pricing</button></li>
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue text-left">See all products</button></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-3">
            <h4 className="font-medium text-google-gray-900 text-sm">Solutions</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">Infrastructure modernization</button></li>
              <li><button onClick={() => onNavigate('/products/managed-lustre')} className="hover:text-google-blue text-left">Databases</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">Application modernization</button></li>
              <li><button onClick={() => onNavigate('/bigquery')} className="hover:text-google-blue text-left">Smart analytics</button></li>
              <li><button onClick={() => onNavigate('/ai/gemini')} className="hover:text-google-blue text-left">Artificial Intelligence</button></li>
              <li><button onClick={() => onNavigate('/solutions/risk-and-compliance-as-code')} className="hover:text-google-blue text-left">Security</button></li>
              <li><button onClick={() => onNavigate('/ai/gemini')} className="hover:text-google-blue text-left">Productivity & work transformation</button></li>
              <li><button onClick={() => onNavigate('/')} className="hover:text-google-blue text-left">Industry solutions</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">DevOps solutions</button></li>
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue text-left">Small business solutions</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">See all solutions</button></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <h4 className="font-medium text-google-gray-900 text-sm">Resources</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => onNavigate('/docs')} className="hover:text-google-blue text-left">Google Cloud documentation</button></li>
              <li><button onClick={() => onNavigate('/docs')} className="hover:text-google-blue text-left">Google Cloud quickstarts</button></li>
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue text-left">Google Cloud Marketplace</button></li>
              <li><button onClick={() => onNavigate('/docs')} className="hover:text-google-blue text-left">Learn about cloud computing</button></li>
              <li><a href="https://cloud.google.com/support" target="_blank" rel="noreferrer" className="hover:text-google-blue block text-left">Support</a></li>
              <li><button onClick={() => onNavigate('/docs')} className="hover:text-google-blue text-left">Code samples</button></li>
              <li><button onClick={() => onNavigate('/solutions/infrastructure-modernization')} className="hover:text-google-blue text-left">Cloud Architecture Center</button></li>
              <li><button onClick={() => onNavigate('/docs')} className="hover:text-google-blue text-left">Training & Certifications</button></li>
              <li><button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue text-left">Google Cloud for Startups</button></li>
              <li><a href="https://status.cloud.google.com" target="_blank" rel="noreferrer" className="hover:text-google-blue block text-left">System status</a></li>
              <li><button onClick={() => onNavigate('/docs')} className="hover:text-google-blue text-left">Release Notes</button></li>
            </ul>
          </div>

          {/* Column 5: Engage */}
          <div className="space-y-3">
            <h4 className="font-medium text-google-gray-900 text-sm">Engage</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => onNavigate('/solutions/risk-and-compliance-as-code')} className="hover:text-google-blue text-left">Contact sales</button></li>
              <li><button onClick={() => onNavigate('/solutions/risk-and-compliance-as-code')} className="hover:text-google-blue text-left">Find a Partner</button></li>
              <li><button onClick={() => onNavigate('/')} className="hover:text-google-blue text-left">Events</button></li>
              <li><button onClick={() => onNavigate('/ai/gemini')} className="hover:text-google-blue text-left">Developer Center</button></li>
              <li><a href="https://www.youtube.com/googlecloud" target="_blank" rel="noreferrer" className="hover:text-google-blue block text-left">Google Cloud on YouTube</a></li>
              <li><a href="https://x.com/googlecloud" target="_blank" rel="noreferrer" className="hover:text-google-blue block text-left">Follow on X</a></li>
              <li><a href="https://cloud.google.com/community" target="_blank" rel="noreferrer" className="hover:text-google-blue block text-left">Community forums</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal + Newsletter + Language Dropdown */}
        <div className="border-t border-google-gray-200 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-google-gray-600">
            <button onClick={() => onNavigate('/')} className="hover:text-google-blue">About Google</button>
            <span>|</span>
            <button onClick={() => onNavigate('/whitepapers')} className="hover:text-google-blue">Privacy</button>
            <span>|</span>
            <button onClick={() => onNavigate('/whitepapers')} className="hover:text-google-blue">Site terms</button>
            <span>|</span>
            <button onClick={() => onNavigate('/pricing/list')} className="hover:text-google-blue">Google Cloud terms</button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs text-google-gray-600">Sign up for the Google Cloud newsletter</span>
              <button className="px-4 py-2 rounded-full text-xs font-semibold bg-google-blue hover:bg-google-blue-hover text-white transition-colors">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-google-gray-300 text-google-gray-700 hover:border-google-gray-400 cursor-pointer text-xs">
              <Globe className="w-3.5 h-3.5" />
              <span>English</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
