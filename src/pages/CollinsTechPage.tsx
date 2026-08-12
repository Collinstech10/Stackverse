import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/common/ServiceCard';
import { ProjectCard } from '../components/common/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { SERVICES_DATA, PORTFOLIO_DATA, PROCESS_STEPS, COLLINSTECH_FAQS } from '../data/companyData';
import { NavigationRoute, ProjectItem } from '../types';
import { Code2, ArrowRight, CheckCircle2, ChevronDown, Sparkles, Layers, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface CollinsTechPageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
  onSelectCaseStudy: (caseStudy: ProjectItem) => void;
}

export const CollinsTechPage: React.FC<CollinsTechPageProps> = ({
  onRouteChange,
  onOpenProjectModal,
  onSelectCaseStudy,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const techStackGroups = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'React Native', 'Framer Motion'] },
    { name: 'Backend & APIs', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL', 'RESTful APIs', 'gRPC'] },
    { name: 'Databases & Storage', items: ['PostgreSQL', 'Redis', 'Firestore', 'SQLite', 'Vector DBs (Pinecone/Chroma)'] },
    { name: 'AI & Machine Learning', items: ['@google/genai SDK', 'Gemini API', 'LangChain', 'OpenAI APIs', 'LLM Fine-Tuning'] },
    { name: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud Platform', 'Terraform', 'CI/CD Pipelines'] },
    { name: 'Security & Auth', items: ['OWASP Top 10', 'OAuth 2.0 / OIDC', 'JWT Auth', 'TLS/HTTPS', 'Audit Logging'] },
  ];

  return (
    <div className="space-y-24 pt-28 pb-16">
      
      {/* COLLINSTECH HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl glass-card border border-blue-500/40 glow-blue space-y-6">
          
          {/* Header Brand Subline */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400">
              <Code2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold font-display text-white tracking-wider">
                COLLINSTECH
              </h1>
              <p className="text-xs font-mono-tech text-blue-300">
                A StackVerse Company
              </p>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight max-w-4xl">
            We Build Digital Products <br className="hidden sm:inline" />
            <span className="text-gradient-blue">That Work.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            From websites and mobile apps to SaaS platforms, AI systems and custom business software, CollinsTech turns ideas into production-ready technology.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenProjectModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-display text-sm font-semibold shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Start a Project</span>
            </button>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-display text-sm font-semibold border border-white/15 transition-all text-center"
            >
              View Our Work & Benchmarks
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES CATALOG */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="COLLINSTECH"
          eyebrow="ENGINEERING CAPABILITIES"
          title="Technology Solutions for Ambitious Businesses"
          subtitle="Full-cycle software engineering delivered with transparent milestone tracking, modern architectures, and complete IP ownership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={() => onOpenProjectModal()}
            />
          ))}
        </div>
      </section>

      {/* COLLINSTECH 6-STEP PROCESS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="COLLINSTECH"
          eyebrow="METHODOLOGY"
          title="Our Engineering Process"
          subtitle="A structured, transparent 6-phase software delivery lifecycle designed to eliminate project risk and deliver software on schedule."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((proc) => (
            <div
              key={proc.number}
              className="p-6 rounded-3xl glass-card border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono-tech text-blue-400">
                    {proc.number}
                  </span>
                  <span className="text-[10px] font-mono-tech px-2.5 py-1 rounded-full bg-blue-950/40 text-blue-300 border border-blue-500/30">
                    PHASE {proc.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-2">
                  {proc.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {proc.summary}
                </p>

                <div className="space-y-2 border-t border-white/5 pt-4">
                  {proc.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO & CASE STUDIES */}
      <section id="portfolio" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="COLLINSTECH"
          eyebrow="DEMO PORTFOLIO"
          title="Production Benchmarks & Case Studies"
          subtitle="Representative engineering architecture benchmarks demonstrating CollinsTech capability across fintech, SaaS, AI, and healthcare mobile apps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onSelectCaseStudy}
            />
          ))}
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="COLLINSTECH"
          eyebrow="TECH MATRIX"
          title="Modern, Type-Safe Tech Stack"
          subtitle="We build exclusively with industry-standard, production-proven tools and frameworks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackGroups.map((group, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-blue-400 font-semibold uppercase">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>{group.name}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {group.items.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-tech text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          divisionBadge="COLLINSTECH"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about partnering with CollinsTech for software engineering."
        />

        <div className="space-y-4">
          {COLLINSTECH_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection
        title="Ready to turn your idea into a production digital product?"
        subtitle="Contact CollinsTech today to receive a technical scoping consultation and transparent project quote."
        onOpenModal={onOpenProjectModal}
        onNavigateToContact={() => onRouteChange('/contact')}
      />

    </div>
  );
};
