import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronDown,
  Search,
  Sparkles,
  HelpCircle,
  Clock,
  DollarSign,
  Cpu,
  ShieldCheck,
  Headphones,
  X,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { FAQItem } from '../../types';
import { SectionHeading } from './SectionHeading';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  divisionBadge?: string;
  onOpenModal?: () => void;
  onNavigateToContact?: () => void;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about partnering with CollinsTech for software engineering, pricing, process, and delivery timelines.',
  divisionBadge = 'COLLINSTECH',
  onOpenModal,
  onNavigateToContact,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default

  const categories = useMemo(() => {
    const cats = Array.from(new Set(faqs.map((f) => f.category)));
    return ['All', ...cats];
  }, [faqs]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleExpandAll = () => {
    setOpenIndices(filteredFaqs.map((_, i) => i));
  };

  const handleCollapseAll = () => {
    setOpenIndices([]);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development Process':
        return <Cpu className="w-3.5 h-3.5 text-blue-400" />;
      case 'Pricing & Budget':
        return <DollarSign className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Timelines & Delivery':
        return <Clock className="w-3.5 h-3.5 text-violet-400" />;
      case 'IP & Security':
        return <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />;
      case 'Support & Maintenance':
        return <Headphones className="w-3.5 h-3.5 text-cyan-400" />;
      default:
        return <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Development Process':
        return 'bg-blue-950/60 text-blue-300 border-blue-500/30';
      case 'Pricing & Budget':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30';
      case 'Timelines & Delivery':
        return 'bg-violet-950/60 text-violet-300 border-violet-500/30';
      case 'IP & Security':
        return 'bg-amber-950/60 text-amber-300 border-amber-500/30';
      case 'Support & Maintenance':
        return 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30';
      default:
        return 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30';
    }
  };

  return (
    <section className={`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 ${className}`}>
      {/* SECTION HEADING */}
      <SectionHeading
        align="center"
        divisionBadge={divisionBadge}
        eyebrow="CLIENT FAQ & PROCESS GUIDE"
        title={title}
        subtitle={subtitle}
      />

      {/* CONTROLS BAR: SEARCH & CATEGORY TABS */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search process, pricing model, delivery timelines, IP rights..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-base sm:text-sm text-white placeholder-slate-400 backdrop-blur-md focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors min-h-[44px]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills - Touch scrollable on small screens */}
        <div className="flex overflow-x-auto no-scrollbar py-2 px-1 gap-2 flex-nowrap sm:flex-wrap sm:justify-center -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndices([0]); // Reset accordion state to open first item in view
                }}
                className={`px-3.5 py-2 rounded-full text-xs font-mono-tech transition-all flex items-center gap-1.5 cursor-pointer border shrink-0 min-h-[38px] ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30 font-semibold scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion Mass Actions */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono-tech px-2 pt-2">
          <span>
            Showing <strong className="text-white">{filteredFaqs.length}</strong> questions
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExpandAll}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={handleCollapseAll}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* ACCORDION LIST */}
      {filteredFaqs.length === 0 ? (
        <div className="p-12 text-center rounded-3xl glass-card border border-white/10 space-y-3">
          <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
          <h4 className="text-base font-semibold text-white">No matching questions found</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search keywords or switching category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="mt-2 text-xs text-blue-400 hover:underline font-mono-tech"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <motion.div
                key={`${faq.question}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className={`rounded-2xl glass-card border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500/40 bg-slate-900/80 shadow-lg shadow-blue-950/30'
                    : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-2 flex-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono-tech border ${getCategoryBadgeClass(
                          faq.category
                        )}`}
                      >
                        {getCategoryIcon(faq.category)}
                        <span>{faq.category}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-xl border shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500/40 rotate-180'
                        : 'bg-white/5 text-slate-400 border-white/10 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 space-y-3">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* STILL HAVE QUESTIONS CTA BOX */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-indigo-950/20 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-2 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-mono-tech">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>CUSTOM SCOPING AVAILABLE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Have a specific project question or custom technical requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Schedule a scoping call with a CollinsTech Lead Solutions Architect to discuss custom architectures, timeline estimates, and project quotes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
          {onOpenModal && (
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Start Scoping</span>
            </button>
          )}

          {onNavigateToContact && (
            <button
              onClick={onNavigateToContact}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Contact Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
