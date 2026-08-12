import React from 'react';
import { Quote, Linkedin, Github, Twitter, Instagram, MessageSquare, Sparkles, Code2, Globe2, ArrowRight } from 'lucide-react';
import { FOUNDER_DATA } from '../../data/companyData';
import { SectionHeading } from './SectionHeading';

interface FounderSectionProps {
  onOpenModal?: () => void;
  className?: string;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenModal,
  className = '',
}) => {
  return (
    <section className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 ${className}`}>
      {/* SECTION HEADING */}
      <SectionHeading
        align="center"
        divisionBadge="LEADERSHIP"
        eyebrow="FOUNDER & CEO"
        title="Engineered by Founder Vision"
        subtitle="Meet the technologist and entrepreneur behind StackVerse and CollinsTech."
      />

      {/* FOUNDER MAIN CARD */}
      <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl glass-card border border-blue-500/30 overflow-hidden glow-blue">
        {/* Background Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: QUOTE & BADGES */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
            
            {/* Founder Identity Pill */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-mono-tech text-blue-300">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>FOUNDER & CEO</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                {FOUNDER_DATA.name}
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono-tech">
                <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium">
                  {FOUNDER_DATA.positions[0].title} — <strong className="text-white">{FOUNDER_DATA.positions[0].entity}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 font-medium">
                  {FOUNDER_DATA.positions[1].title} — <strong className="text-white">{FOUNDER_DATA.positions[1].entity}</strong>
                </span>
              </div>
            </div>

            {/* QUOTE BOX */}
            <div className="p-6 rounded-2xl glass-panel border border-blue-400/30 bg-gradient-to-br from-blue-950/50 to-slate-950 space-y-3 relative overflow-hidden">
              <Quote className="w-8 h-8 text-blue-400/30 absolute top-4 right-4 pointer-events-none" />
              <p className="text-xs font-mono-tech text-blue-300 uppercase tracking-widest font-semibold">
                FOUNDER PHILOSOPHY
              </p>
              <blockquote className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight italic text-gradient-blue">
                “{FOUNDER_DATA.quote}”
              </blockquote>
            </div>

            {/* FOUNDER SOCIAL LINKS */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block">
                Connect With The Founder
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={FOUNDER_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
                <a
                  href={FOUNDER_DATA.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={FOUNDER_DATA.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="X (Twitter)"
                  title="X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={FOUNDER_DATA.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Instagram"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: BIO PARAGRAPHS & WHATSAPP ACTION */}
          <div className="lg:col-span-7 space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {FOUNDER_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className="relative pl-4 border-l-2 border-blue-500/40">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={FOUNDER_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold font-display shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/40"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>Chat With Us on WhatsApp</span>
              </a>

              {onOpenModal && (
                <button
                  onClick={onOpenModal}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold font-display border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Start a Project</span>
                </button>
              )}
            </div>

            <p className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-1.5 pt-1">
              <Globe2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Official business contact channel for StackVerse & CollinsTech project inquiries.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
