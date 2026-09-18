import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { GoogleCloudNavbar } from './components/common/GoogleCloudNavbar';
import { GoogleCloudFooter } from './components/common/GoogleCloudFooter';
import { CommandPalette } from './components/common/CommandPalette';
import { HomePage } from './pages/HomePage';
import { GeminiAIPage } from './pages/GeminiAIPage';
import { BigQueryPage } from './pages/BigQueryPage';
import { PricingPage } from './pages/PricingPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Dynamic document title update per route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': "AI and Cloud Computing Services | Google Cloud",
      '/ai/gemini': "Gemini Enterprise AI & Vertex AI | Google Cloud",
      '/bigquery': "BigQuery: Enterprise Cloud Data Warehouse | Google Cloud",
      '/pricing/list': "Pricing per Product & $300 Free Trial | Google Cloud",
      '/docs': "Google Cloud Documentation & Guides",
    };
    document.title = titles[currentPath] || "Google Cloud Computing Services";
  }, [currentPath]);

  // Global Keyboard Listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('popstate', handlePopState);
      lenis.destroy();
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPath === '/ai/gemini') {
      return <GeminiAIPage onNavigate={navigate} />;
    }
    if (currentPath === '/bigquery') {
      return <BigQueryPage onNavigate={navigate} />;
    }
    if (currentPath === '/pricing/list' || currentPath === '/pricing') {
      return <PricingPage onNavigate={navigate} />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-google-gray-900 selection:bg-google-blue/10 selection:text-google-blue">
      <GoogleCloudNavbar 
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <GoogleCloudFooter onNavigate={navigate} />

      <CommandPalette 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
};
