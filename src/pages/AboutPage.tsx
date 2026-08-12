import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { NavigationRoute } from '../types';
import { ShieldCheck, Target, Eye, Code2, Layers, CheckCircle2, Globe2 } from 'lucide-react';

interface AboutPageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onRouteChange,
  onOpenProjectModal,
}) => {
  const principles = [
    { title: 'Build with Purpose', desc: 'Every product, feature, or line of code must solve an authentic friction point or serve a verified user need.' },
    { title: 'Solve Real Problems', desc: 'We prioritize useful, reliable technology over superficial market trends or hype cycles.' },
    { title: 'Design for Scale', desc: 'Architectures are designed from Day 1 to handle microservice distribution, multi-tenancy, and high concurrency.' },
    { title: 'Security by Default', desc: 'Zero-trust authentication, OWASP guidelines, and data encryption are mandatory baseline standards.' },
    { title: 'Learn Continuously', desc: 'We rapidly adopt modern framework advancements, AI model SDKs, and container deployment patterns.' },
    { title: 'Move Fast, But Build Properly', desc: 'Speed never excuses technical debt. Type safety, testing, and clean architecture are non-negotiable.' },
  ];

  return (
    <div className="space-y-24 pt-28 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl glass-card border border-blue-500/30 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/40 text-xs font-mono-tech text-blue-300">
            <Globe2 className="w-3.5 h-3.5" />
            <span>ABOUT STACKVERSE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
            We're Building <br />
            <span className="text-gradient-blue">More Than Software.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            StackVerse exists to create technology that solves meaningful operational problems and possesses the architectural integrity to scale globally.
          </p>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-4">
            <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-blue-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Build useful, production-grade technology that improves how people and businesses work — through proprietary SaaS products and specialized client software engineering.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-4">
            <div className="p-3.5 rounded-2xl bg-violet-950/60 border border-violet-500/30 text-violet-400 w-fit">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Become a globally recognized technology company building world-class digital products and engineering solutions from Africa for the world.
            </p>
          </div>

        </div>
      </section>

      {/* DUAL COMPANY STRUCTURE EXPLANATION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DUAL ARCHITECTURE"
          title="The StackVerse Ecosystem Model"
          subtitle="How our parent organization combines product innovation with specialized software engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl glass-panel border border-violet-500/30 space-y-4">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono-tech uppercase font-semibold">
              <Layers className="w-4 h-4" /> STACKVERSE PARENT COMPANY
            </div>
            <h4 className="text-xl font-bold text-white font-display">Products, Platforms & Ventures</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              StackVerse acts as the parent technology holding company and venture builder. We conceptualize, build, and deploy our own software platforms, SaaS systems, and AI engines.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-blue-500/30 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono-tech uppercase font-semibold">
              <Code2 className="w-4 h-4" /> COLLINSTECH DIVISION
            </div>
            <h4 className="text-xl font-bold text-white font-display">Technology Services & Client Solutions</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              CollinsTech is the dedicated software engineering division. We partner with ambitious companies, startups, and organizations to design and develop custom web, mobile, SaaS, and AI applications.
            </p>
          </div>

        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="STACKVERSE"
          eyebrow="CORE VALUES"
          title="Our Guiding Principles"
          subtitle="The foundational values that drive our engineering decisions and company culture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-white/10 space-y-3"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <h4 className="text-lg font-bold text-white font-display">{p.title}</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection
        title="Ready to build something meaningful?"
        subtitle="Start a project with CollinsTech or explore partnerships with StackVerse."
        onOpenModal={onOpenProjectModal}
        onNavigateToContact={() => onRouteChange('/contact')}
      />

    </div>
  );
};
