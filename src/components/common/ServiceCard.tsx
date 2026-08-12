import React from 'react';
import { ServiceItem } from '../../types';
import { Globe, Smartphone, Code2, Layers, Server, Sparkles, Shield, Bot, Palette, ArrowUpRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return Globe;
      case 'Smartphone': return Smartphone;
      case 'Code2': return Code2;
      case 'Layers': return Layers;
      case 'Server': return Server;
      case 'Sparkles': return Sparkles;
      case 'Shield': return Shield;
      case 'Bot': return Bot;
      case 'Palette': return Palette;
      default: return Code2;
    }
  };

  const IconComponent = getIcon(service.iconName);

  return (
    <div className="group relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/10">
      
      <div>
        {/* Service Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 rounded-full text-[11px] font-mono-tech text-blue-300 bg-blue-950/40 border border-blue-500/30">
            COLLINSTECH
          </span>
        </div>

        <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-blue-300 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
          <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider block mb-2">
            DELIVERABLES
          </span>
          {service.deliverables.slice(0, 4).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.techStack.map((tech, idx) => (
            <span key={idx} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono-tech text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-white/10">
        <button
          onClick={() => onSelectService(service)}
          className="w-full py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 border border-blue-500/30 hover:border-blue-500"
        >
          <span>Work With CollinsTech</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
