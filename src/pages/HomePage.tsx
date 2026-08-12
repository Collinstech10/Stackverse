import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TechVisual } from '../components/common/TechVisual';
import { ProductCard } from '../components/common/ProductCard';
import { ProductSkeletonCard } from '../components/common/Skeletons';
import { ServiceCard } from '../components/common/ServiceCard';
import { StatCard } from '../components/common/StatCard';
import { CTASection } from '../components/common/CTASection';
import { PRODUCTS_DATA, SERVICES_DATA } from '../data/companyData';
import { NavigationRoute, ProductItem, ServiceItem } from '../types';
import { ArrowRight, Code2, Layers, Sparkles, ShieldCheck, Zap, Globe2, Cpu } from 'lucide-react';

interface HomePageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRouteChange,
  onOpenProjectModal,
  onSelectProduct,
}) => {
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingProducts(false);
    }, 550);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="space-y-24 sm:space-y-32 pt-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/30 text-xs font-mono-tech text-blue-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>STACKVERSE & COLLINSTECH DIVISION</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                Building the <br />
                <span className="text-gradient-blue">Digital Universe.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                StackVerse builds digital products, software platforms and technology ventures designed to solve real-world problems.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onRouteChange('/products')}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-display text-sm font-semibold shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Layers className="w-4 h-4 text-blue-200" />
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 text-blue-200" />
                </button>

                <button
                  onClick={() => onRouteChange('/collinstech')}
                  className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-display text-sm font-semibold border border-white/15 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>Work With CollinsTech</span>
                </button>
              </div>

              {/* Architecture Guarantee Tags */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10 text-xs font-mono-tech text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Security By Default</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Type-Safe Codebase</span>
                </div>
                <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                  <Globe2 className="w-4 h-4 text-violet-400" />
                  <span>Global Scale</span>
                </div>
              </div>

            </div>

            {/* Right Abstract Technology Visual */}
            <div className="lg:col-span-5 w-full">
              <TechVisual />
            </div>

          </div>
        </div>
      </section>


      {/* COMPANY INTRODUCTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ECOSYSTEM STRUCTURE"
          title="One Technology Company. Multiple Ways to Build."
          subtitle="StackVerse operates as a dual-engine technology platform — balancing internal product ventures with specialized client software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: StackVerse Products */}
          <div className="group p-8 sm:p-10 rounded-3xl glass-card border border-white/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-violet-950/60 border border-violet-500/30 text-violet-400">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono-tech text-violet-300 bg-violet-950/40 border border-violet-500/30">
                  PRODUCTS & VENTURES
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display">
                STACKVERSE PRODUCTS
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                We build and launch our own software products, SaaS platforms, AI applications and technology ventures designed for global market scale.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono-tech text-slate-400">
                <p>• SME Operating System (Business SaaS)</p>
                <p>• StackVerse AI Engine & Routing Gateway</p>
                <p>• CloudForge Infrastructure Orchestration</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRouteChange('/products')}
                className="w-full py-3 rounded-xl bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-violet-500/30"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: CollinsTech */}
          <div className="group p-8 sm:p-10 rounded-3xl glass-card border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between glow-blue">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-blue-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono-tech text-blue-300 bg-blue-950/40 border border-blue-500/30">
                  CLIENT ENGINEERING
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display">
                COLLINSTECH
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                We help businesses turn ideas into production-ready digital products through software engineering, UI/UX design, AI, and cybersecurity.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono-tech text-slate-400">
                <p>• Web & Mobile Application Development</p>
                <p>• Custom Software & SaaS Architecture</p>
                <p>• AI Integrations & Cloud Deployment</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRouteChange('/collinstech')}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25"
              >
                <span>Explore CollinsTech Division</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* PRODUCTS SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="STACKVERSE"
          eyebrow="SOFTWARE PIPELINE"
          title="Products We're Building"
          subtitle="A preview of technology platforms currently under development inside the StackVerse innovation engine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loadingProducts ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <ProductSkeletonCard key={idx} />
            ))
          ) : (
            PRODUCTS_DATA.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))
          )}
        </div>
      </section>


      {/* COLLINSTECH SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-blue-500/30 space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-mono-tech text-blue-300">
                <Code2 className="w-3.5 h-3.5" />
                <span>COLLINSTECH DIVISION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Technology Solutions for Ambitious Businesses.
              </h2>
              <p className="text-base text-slate-300 max-w-2xl font-normal">
                CollinsTech helps startups, businesses and organizations transform ideas into reliable, scalable digital products.
              </p>
            </div>

            <button
              onClick={() => onRouteChange('/collinstech')}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-blue-600/25"
            >
              <span>Work With CollinsTech</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={() => onOpenProjectModal()}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ENGINEERING STANDARDS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="TECHNICAL RIGOR"
          title="Built to Engineering Benchmarks"
          subtitle="Our engineering culture prioritizes type safety, zero-trust security, and scalable system architecture over shortcuts."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            number="100%"
            label="Type-Safe Codebase"
            sublabel="Strict TypeScript compiler checks across frontend and backend API handlers."
            iconName="Code2"
          />
          <StatCard
            number="OWASP"
            label="Security Hardened"
            sublabel="Layered security audits, sanitized parameters, and encrypted payloads by default."
            iconName="ShieldCheck"
          />
          <StatCard
            number="6-Step"
            label="Delivery Process"
            sublabel="From Discovery and Prototyping to Production Deployment and SLA Maintenance."
            iconName="Rocket"
          />
          <StatCard
            number="Cloud"
            label="Native Infrastructure"
            sublabel="Containerized microservices with multi-region scaling and automated CI/CD."
            iconName="Cpu"
          />
        </div>
      </section>


      {/* REUSABLE CTA */}
      <CTASection
        onOpenModal={onOpenProjectModal}
        onNavigateToContact={() => onRouteChange('/contact')}
      />

    </div>
  );
};
