import { useState } from 'react';
import { Menu, X, ArrowUpRight, Send } from 'lucide-react';
import { NavigationTab } from '../types';

interface GnbProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenQuickSubscribe: () => void;
}

export function Gnb({ activeTab, onSelectTab, onOpenQuickSubscribe }: GnbProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavigationTab[] = ['MAIN', 'ARCHIVE', 'SUBSCRIBE', 'WRITERS'];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-black" id="webzine-gnb">
      {/* Top micro bar: W Korea style date & edition header */}
      <div className="border-b border-neutral-200 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-1.5 flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
          <div className="flex items-center gap-4">
            <span className="text-black font-semibold">SEPTEMBER 2026</span>
            <span>•</span>
            <span>ISSUE NO. 09</span>
            <span>•</span>
            <span>MONTHLY ESSAY & VISUAL ARCHIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenQuickSubscribe}
              className="text-black hover:underline flex items-center gap-1 font-medium"
            >
              NEWSLETTER
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar: Logo & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Logo - Bold Editorial Aesthetic */}
          <button
            onClick={() => handleNavClick('MAIN')}
            className="text-left group flex items-baseline gap-3"
            id="webzine-logo-btn"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-black uppercase font-editorial group-hover:opacity-80 transition-opacity">
              YEOBAEK
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-400 font-light border-l border-neutral-300 pl-3 hidden sm:inline-block">
              余白 • WEBZINE
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12" id="desktop-gnb-nav">
            {navItems.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleNavClick(tab)}
                  id={`gnb-tab-${tab.toLowerCase()}`}
                  className={`text-xs tracking-[0.25em] uppercase font-mono transition-all py-1 relative ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-neutral-500 hover:text-black font-medium'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Minimal Black Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuickSubscribe}
              id="quick-subscribe-nav-btn"
              className="px-4 py-2 text-xs font-mono tracking-widest uppercase bg-black text-white hover:bg-neutral-800 transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-gnb-toggle-btn"
            className="md:hidden p-2 text-black hover:bg-neutral-100 transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-gnb-dropdown"
            className="md:hidden py-6 border-t border-black bg-white space-y-3 animate-in slide-in-from-top-2 duration-200"
          >
            <div className="text-[11px] font-mono text-neutral-400 px-4 pb-2 border-b border-neutral-200">
              ISSUE 09 • SEPTEMBER 2026
            </div>
            {navItems.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleNavClick(tab)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-mono tracking-widest uppercase transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-black text-white font-bold'
                      : 'text-black hover:bg-neutral-50 font-medium'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && <span className="text-xs">●</span>}
                </button>
              );
            })}
            <div className="pt-3 px-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickSubscribe();
                }}
                className="w-full py-3 text-xs font-mono tracking-widest uppercase bg-black text-white flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>구독하기 (NEWSLETTER)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
