import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/common/ServiceCard';
import { CTASection } from '../components/common/CTASection';
import { SERVICES_DATA } from '../data/companyData';
import { NavigationRoute } from '../types';
import { Code2, Layers, Sparkles, Shield, Server, Bot } from 'lucide-react';

interface ServicesPageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onRouteChange,
  onOpenProjectModal,
}) => {
  const categories = [
    { title: 'Software Engineering', icon: Code2, filter: 'Software Engineering' },
    { title: 'Product Development', icon: Layers, filter: 'Product Development' },
    { title: 'AI & Automation', icon: Sparkles, filter: 'AI & Automation' },
    { title: 'Cybersecurity', icon: Shield, filter: 'Cybersecurity' },
    { title: 'Cloud & Infrastructure', icon: Server, filter: 'Cloud & Infrastructure' },
  ];

  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="COLLINSTECH"
          eyebrow="SERVICE CATALOG"
          title="Full-Stack Engineering & Digital Solutions"
          subtitle="Comprehensive technology capabilities tailored for startups, growth-stage platforms, and enterprise digital transformation."
        />
      </section>

      {/* Services By Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map((cat, idx) => {
          const catServices = SERVICES_DATA.filter((s) => s.category === cat.filter);
          if (catServices.length === 0) return null;
          const Icon = cat.icon;

          return (
            <div key={idx} className="space-y-6">
              
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onSelectService={() => onOpenProjectModal()}
                  />
                ))}
              </div>

            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <CTASection
        title="Have a project in mind? Let's build it."
        subtitle="Contact CollinsTech to discuss your software engineering, AI, or cloud infrastructure requirements."
        onOpenModal={onOpenProjectModal}
        onNavigateToContact={() => onRouteChange('/contact')}
      />

    </div>
  );
};
