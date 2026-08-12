import React, { useState, useEffect } from 'react';
import { NavigationRoute } from '../../types';
import { Menu, X, ArrowUpRight, Sparkles, Code2, Layers, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentRoute: NavigationRoute;
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange, onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ label: string; route: NavigationRoute; highlight?: boolean }> = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'CollinsTech', route: '/collinstech', highlight: true },
    { label: 'Services', route: '/services' },
    { label: 'Ventures', route: '/ventures' },
    { label: 'About', route: '/about' },
    { label: 'Insights', route: '/insights' },
  ];

  const handleNavClick = (route: NavigationRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80'
          : 'py-5 bg-[#050505]/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Relationship */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-black/60 border border-blue-500/30 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 group-hover:border-blue-400 transition-all duration-300 flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="StackVerse Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-wider text-white group-hover:text-blue-400 transition-colors">
                  STACKVERSE
                </span>
                <span className="text-[10px] font-mono-tech text-slate-400 tracking-tight flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse"></span>
                  DIGITAL UNIVERSE
                </span>
              </div>
            </button>

            {/* CollinsTech Division Indicator Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-[11px] font-mono-tech text-blue-300">
              <Code2 className="w-3 h-3 text-blue-400" />
              <span>inc. COLLINSTECH</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative flex items-center gap-1 ${
                    isActive
                      ? 'text-white font-semibold bg-white/10 shadow-sm'
                      : link.highlight
                      ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.highlight && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenProjectModal}
              className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A PROJECT</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 py-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10 text-xs font-mono-tech text-slate-400">
            <span>STACKVERSE NAVIGATION</span>
            <span className="text-blue-400">COLLINSTECH SERVICES</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-white border border-blue-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <Code2 className="w-4 h-4 text-blue-400" />}
                    {link.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
