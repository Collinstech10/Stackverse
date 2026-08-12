import React from 'react';
import { ArrowUpRight, Sparkles, Code2, Layers } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  onOpenModal: () => void;
  onNavigateToContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Have a project in mind? Let's build it.",
  subtitle = "Whether you need a full SaaS application, custom business software, mobile app, or AI integration — CollinsTech and StackVerse turn technical vision into production-ready software.",
  onOpenModal,
  onNavigateToContact,
}) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-8 sm:p-14 rounded-3xl glass-card border border-blue-500/30 overflow-hidden text-center glow-blue">
          
          {/* Subtle background glow circle */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-xs font-mono-tech text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>STACKVERSE & COLLINSTECH ENGINEERING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-display text-sm font-semibold shadow-xl shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-blue-200" />
                <span>Work With CollinsTech</span>
                <ArrowUpRight className="w-4 h-4 text-blue-200" />
              </button>

              <button
                onClick={onNavigateToContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-display text-sm font-semibold border border-white/15 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-slate-300" />
                <span>Contact StackVerse</span>
              </button>
            </div>

            <div className="pt-4 text-xs font-mono-tech text-slate-400 flex items-center justify-center gap-4">
              <span>✓ Transparent Milestones</span>
              <span>•</span>
              <span>✓ 100% Code IP Ownership</span>
              <span>•</span>
              <span>✓ OWASP Security Hardened</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
