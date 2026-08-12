import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { VENTURE_STEPS, PRODUCTS_DATA } from '../data/companyData';
import { ProductCard } from '../components/common/ProductCard';
import { NavigationRoute, ProductItem } from '../types';
import { Rocket, Lightbulb, Cpu, ArrowRight, ShieldCheck, Layers, Sparkles } from 'lucide-react';

interface VenturesPageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const VenturesPage: React.FC<VenturesPageProps> = ({
  onRouteChange,
  onOpenProjectModal,
  onSelectProduct,
}) => {
  return (
    <div className="space-y-24 pt-28 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl glass-card border border-violet-500/40 glow-violet space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/40 text-xs font-mono-tech text-violet-300">
            <Rocket className="w-3.5 h-3.5" />
            <span>STACKVERSE VENTURE STUDIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
            Ideas Become Products. <br />
            <span className="text-gradient-violet">Products Become Companies.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            StackVerse operates an internal software venture studio. We incubate proprietary SaaS platforms, AI systems, and cloud infrastructure platforms from initial research into scalable technology businesses.
          </p>

          {/* Model Pipeline Banner */}
          <div className="pt-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-slate-300">
            <span className="text-violet-400 font-semibold">VENTURE MODEL:</span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-white">01 IDEA</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-white">02 PROTOTYPE</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-white">03 PRODUCT</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-white">04 USERS</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-white">05 SCALE</span>
            </div>
          </div>

        </div>
      </section>

      {/* FUTURISTIC ROADMAP */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="VENTURES"
          eyebrow="INNOVATION PIPELINE"
          title="The Venture Roadmap"
          subtitle="How StackVerse systemizes product creation through disciplined research, prototyping, and engineering execution."
        />

        <div className="space-y-6">
          {VENTURE_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-4 rounded-2xl bg-violet-950/60 border border-violet-500/30 text-violet-400 font-mono-tech text-xl font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white font-display">{step.title}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech ${
                      step.status === 'Active'
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                        : step.status === 'In Progress'
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {step.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>

              <div className="text-xs font-mono-tech text-slate-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10 shrink-0">
                Focus: {step.focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INCUBATING VENTURES */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="VENTURES"
          eyebrow="INCUBATING PLATFORMS"
          title="Current Venture Pipeline"
          subtitle="Explore the proprietary technology platforms currently being built inside the StackVerse studio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection
        title="Interested in partnering or building a software venture?"
        subtitle="Connect with StackVerse to explore venture opportunities, technical co-building, or software development."
        onOpenModal={onOpenProjectModal}
        onNavigateToContact={() => onRouteChange('/contact')}
      />

    </div>
  );
};
