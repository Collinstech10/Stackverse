import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { NewsletterSubscription } from '../components/common/NewsletterSubscription';
import { InsightSkeletonCard } from '../components/common/Skeletons';
import { INSIGHTS_ARTICLES } from '../data/companyData';
import { InsightArticle, NavigationRoute } from '../types';
import { BookOpen, Clock, Tag, ArrowRight, X, ShieldCheck } from 'lucide-react';

interface InsightsPageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onRouteChange,
  onOpenProjectModal,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  useEffect(() => {
    // Simulate initial async hydration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Software Engineering', 'AI', 'Cybersecurity', 'Startups', 'Product Development', 'Business'];

  const filteredArticles = INSIGHTS_ARTICLES.filter((art) => {
    return selectedCategory === 'All' || art.category === selectedCategory;
  });

  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* HEADER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="STACKVERSE"
          eyebrow="ENGINEERING BLOG"
          title="Insights & Technical Thought Leadership"
          subtitle="Articles, architectural patterns, and engineering perspectives from StackVerse and CollinsTech engineering leads."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-3 rounded-2xl glass-panel border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-tech transition-colors border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <InsightSkeletonCard key={idx} />
            ))
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="group p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400">
                    <span className="px-2.5 py-1 rounded-full bg-blue-950/60 text-blue-300 border border-blue-500/30">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono-tech text-slate-400 border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <div className="text-xs">
                    <strong className="block text-white font-medium">{article.author.name}</strong>
                    <span className="text-slate-400 text-[11px]">{article.author.role}</span>
                  </div>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all border border-blue-500/30"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0d0f18] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 space-y-6">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-blue-950/60 text-blue-300 border border-blue-500/30">
                {activeArticle.category}
              </span>
              <span className="text-xs font-mono-tech text-slate-400">
                {activeArticle.readTime} • {activeArticle.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              {activeArticle.title}
            </h2>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="text-xs">
                <strong className="block text-white font-medium">{activeArticle.author.name}</strong>
                <span className="text-slate-400 text-[11px]">{activeArticle.author.role}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line space-y-4">
              {activeArticle.content}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> Educational Sample Content
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

      {/* NEWSLETTER SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSubscription
          variant="card"
          title="Stay Ahead of the Tech Curve"
          subtitle="Subscribe to receive StackVerse technical papers, architectural blueprints, and engineering perspectives directly from our leads."
        />
      </section>

      {/* CTA SECTION */}
      <CTASection
        title="Need technical expertise for your engineering team?"
        subtitle="Work with CollinsTech for software architecture, custom development, and security auditing."
        onOpenModal={onOpenProjectModal}
        onNavigateToContact={() => onRouteChange('/contact')}
      />

    </div>
  );
};
