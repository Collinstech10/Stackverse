import React from 'react';
import { ProductItem } from '../../types';
import { LayoutGrid, Cpu, CloudLightning, ShieldCheck, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid': return LayoutGrid;
      case 'Cpu': return Cpu;
      case 'CloudLightning': return CloudLightning;
      case 'ShieldCheck': return ShieldCheck;
      case 'Rocket': return Rocket;
      default: return LayoutGrid;
    }
  };

  const IconComponent = getIcon(product.iconName);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Coming Soon':
        return 'bg-blue-950/60 text-blue-300 border-blue-500/30';
      case 'In Development':
        return 'bg-amber-950/60 text-amber-300 border-amber-500/30';
      case 'Private Beta':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30';
      case 'Research & Incubating':
        return 'bg-violet-950/60 text-violet-300 border-violet-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="group relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/10">
      
      <div>
        {/* Category & Status Header */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider font-semibold">
            {product.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-[11px] font-mono-tech font-semibold border ${getStatusBadge(product.status)}`}>
            {product.status}
          </span>
        </div>

        {/* Product Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-white/10 text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-300 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs font-mono-tech text-slate-400 mt-1">
              StackVerse Venture Product
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Key Features Preview */}
        <div className="space-y-2 mb-8 border-t border-white/5 pt-4">
          <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider block mb-2">
            CORE CAPABILITIES
          </span>
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono-tech text-slate-400">
          Target: {product.targetAudience.split(',')[0]}
        </span>
        <button
          onClick={() => onSelectProduct(product)}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 border border-white/10 hover:border-blue-500"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
