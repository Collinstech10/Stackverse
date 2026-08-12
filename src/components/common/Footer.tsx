import React from 'react';
import { NavigationRoute } from '../../types';
import { Code2, ArrowRight, ShieldCheck, Github, Linkedin, Twitter, Youtube, Instagram, MessageSquare } from 'lucide-react';
import { NewsletterSubscription } from './NewsletterSubscription';
import { FOUNDER_DATA } from '../../data/companyData';

interface FooterProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenProjectModal }) => {
  const handleNavClick = (route: NavigationRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 text-slate-400 overflow-hidden pt-16 pb-12">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-black/60 border border-blue-500/30 p-0.5 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="StackVerse Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  STACKVERSE
                </span>
                <span className="text-[11px] font-mono-tech text-blue-400">
                  Building the Digital Universe.
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              StackVerse is a modern technology company building digital products, SaaS platforms, AI solutions, and software ventures. Home to <strong className="text-white">CollinsTech</strong>, our specialized software engineering and digital solutions division.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2 max-w-sm">
              <NewsletterSubscription variant="inline" />
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-wider font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/products')} className="hover:text-white transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/ventures')} className="hover:text-white transition-colors">
                  Ventures
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/about')} className="hover:text-white transition-colors">
                  About StackVerse
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/insights')} className="hover:text-white transition-colors">
                  Insights & Tech Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* CollinsTech Division Links */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono-tech text-blue-400 uppercase tracking-wider font-semibold">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>CollinsTech</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('/collinstech')} className="hover:text-white text-blue-300 font-medium transition-colors">
                  Division Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/services')} className="hover:text-white transition-colors">
                  Services Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/collinstech')} className="hover:text-white transition-colors">
                  Software Engineering Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/collinstech')} className="hover:text-white transition-colors">
                  Demo Portfolio
                </button>
              </li>
              <li>
                <button onClick={onOpenProjectModal} className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors">
                  <span>Start a Project</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-wider font-semibold">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={FOUNDER_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 hover:text-white hover:bg-emerald-600/40 border border-emerald-500/30 transition-colors flex items-center gap-1.5 text-xs font-mono-tech"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href={FOUNDER_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={FOUNDER_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_DATA.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_DATA.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Security by Default Architecture</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 StackVerse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-medium">StackVerse & CollinsTech Division</span>
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
