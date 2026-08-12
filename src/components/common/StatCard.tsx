import React from 'react';
import { ShieldCheck, Code2, Cpu, Rocket } from 'lucide-react';

interface StatCardProps {
  number: string;
  label: string;
  sublabel: string;
  iconName?: 'ShieldCheck' | 'Code2' | 'Cpu' | 'Rocket';
}

export const StatCard: React.FC<StatCardProps> = ({ number, label, sublabel, iconName = 'Code2' }) => {
  const getIcon = () => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Code2': return Code2;
      case 'Cpu': return Cpu;
      case 'Rocket': return Rocket;
      default: return Code2;
    }
  };

  const Icon = getIcon();

  return (
    <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2.5 rounded-xl bg-blue-950/50 border border-blue-500/30 text-blue-400">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
          STANDARD
        </span>
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-1 text-gradient-blue">
        {number}
      </div>

      <h4 className="text-sm font-semibold text-slate-200 mb-1">
        {label}
      </h4>

      <p className="text-xs text-slate-400">
        {sublabel}
      </p>
    </div>
  );
};
