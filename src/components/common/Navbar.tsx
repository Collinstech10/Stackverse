import React, { useState, useEffect } from 'react';
import { NavigationRoute } from '../../types';
import { Menu, X, Sparkles, Code2, ChevronRight, Mail, Linkedin } from 'lucide-react';

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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks: Array<{ label: string; route: NavigationRoute; highlight?: boolean }> = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'CollinsTech', route: '/collinstech', highlight: true },
    { label: 'Services', route: '/services' },
    { label: 'Ventures', route: '/ventures' },
    { label: 'About', route: '/about' },
    { label: 'Insights', route: '/insights' },
    { label: 'Contact', route: '/contact' },
  ];

  const handleNavClick = (route: NavigationRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 sm:py-3 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80'
            : 'py-3.5 sm:py-5 bg-[#050505]/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo & Brand Relationship */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('/')}
                className="group flex items-center gap-2 text-left focus:outline-none"
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-black/60 border border-blue-500/30 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 group-hover:border-blue-400 transition-all duration-300 flex items-center justify-center shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="StackVerse Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm sm:text-lg tracking-wider text-white group-hover:text-blue-400 transition-colors">
                    STACKVERSE
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono-tech text-slate-400 tracking-tight flex items-center gap-1">
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
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 glass-panel px-3 py-1.5 rounded-full border border-white/10">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative flex items-center gap-1 cursor-pointer ${
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
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={onOpenProjectModal}
                className="px-3.5 py-2 sm:px-6 sm:py-2.5 bg-white text-black text-[11px] sm:text-xs font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-md shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600 sm:text-current" />
                <span className="hidden min-[380px]:inline">START A PROJECT</span>
                <span className="inline min-[380px]:hidden">START</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/15 px-4 py-5 mt-2 space-y-4 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl relative z-50 bg-[#0a0c14]/95">
            <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10 text-xs font-mono-tech text-slate-400">
              <span>STACKVERSE DIRECTORY</span>
              <span className="text-blue-400 font-semibold">COLLINSTECH</span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors min-h-[44px] cursor-pointer ${
                      isActive
                        ? 'bg-blue-600/25 text-white border border-blue-500/40 font-semibold'
                        : 'text-slate-200 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {link.highlight && <Code2 className="w-4 h-4 text-blue-400" />}
                      {link.label}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Badges */}
            <div className="pt-2 pb-1 border-t border-white/10 space-y-2 text-xs text-slate-400 font-mono-tech">
              <a
                href="mailto:eniolaayobamidele0@gmail.com"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-blue-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">eniolaayobamidele0@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eniola-ayobamidele-217119327"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">LinkedIn: Eniola Ayobamidele</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer min-h-[44px]"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Start a Project</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

