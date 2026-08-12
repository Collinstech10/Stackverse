import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Layers, Code2, Server, Terminal, Zap, Globe2 } from 'lucide-react';

export const TechVisual: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      id: 0,
      title: 'AI & Data Orchestration',
      subtitle: 'Multi-LLM Routing & Vector Engines',
      badge: 'STACKVERSE AI',
      color: 'from-violet-500/20 to-indigo-500/10',
      borderColor: 'border-violet-500/30',
      icon: Cpu,
      stats: 'Latency < 45ms • 99.9% Uptime'
    },
    {
      id: 1,
      title: 'CollinsTech Core Engineering',
      subtitle: 'SaaS Platforms & Production Apps',
      badge: 'COLLINSTECH',
      color: 'from-blue-500/25 to-cyan-500/10',
      borderColor: 'border-blue-500/40',
      icon: Code2,
      stats: '100% Type-Safe • OWASP Compliant'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure & Security',
      subtitle: 'Microservices, APIs & Shield Protection',
      badge: 'CLOUD & SHIELD',
      color: 'from-cyan-500/20 to-emerald-500/10',
      borderColor: 'border-cyan-500/30',
      icon: Server,
      stats: 'Multi-Cloud • Zero-Trust Auth'
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-violet-500/10 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
      
      {/* Central Interactive Stack Visual */}
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
        
        {/* Central Official Brand Logo Emblem */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group flex flex-col items-center justify-center my-1"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-cyan-500/30 border border-blue-400/40 shadow-2xl shadow-blue-500/30 backdrop-blur-xl flex items-center justify-center overflow-hidden group-hover:border-blue-400 transition-all duration-300">
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />
            <img
              src="/logo.jpg"
              alt="StackVerse Official Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl relative z-10"
            />
          </div>
          <span className="text-[10px] font-mono-tech text-blue-300 tracking-widest mt-2 uppercase flex items-center gap-1.5 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            OFFICIAL ECOSYSTEM EMBLEM
          </span>
        </motion.div>

        {/* Floating Top Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel px-4 py-2 rounded-full flex items-center gap-2.5 border border-blue-500/30 text-xs font-mono-tech text-blue-300 shadow-lg glow-blue mb-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-slate-300">SYSTEM ARCHITECTURE:</span>
          <span className="font-semibold text-blue-400">STACKVERSE // COLLINSTECH</span>
        </motion.div>

        {/* Stacked Interactive Layers */}
        <div className="w-full space-y-3">
          {layers.map((layer) => {
            const IconComponent = layer.icon;
            const isSelected = activeLayer === layer.id;

            return (
              <motion.div
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative cursor-pointer p-4 rounded-2xl transition-all duration-300 glass-card border ${
                  isSelected 
                    ? `${layer.borderColor} bg-gradient-to-r ${layer.color} shadow-xl glow-blue` 
                    : 'border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-400'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-white font-display">{layer.title}</h4>
                        <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {layer.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{layer.subtitle}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-400 shadow-[0_0_8px_#3b82f6]' : 'bg-slate-700'}`} />
                </div>

                {isSelected && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-slate-400"
                  >
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Zap className="w-3 h-3" /> Live Protocol
                    </span>
                    <span>{layer.stats}</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Floating Mini Interactive Badges */}
        <div className="flex items-center justify-between w-full text-xs font-mono-tech text-slate-400 px-2 mt-2">
          <div className="flex items-center gap-1.5 glass-panel px-3 py-1.5 rounded-lg border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Zero-Trust Security</span>
          </div>
          <div className="flex items-center gap-1.5 glass-panel px-3 py-1.5 rounded-lg border border-white/10">
            <Globe2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Global Multi-Region</span>
          </div>
        </div>

      </div>
    </div>
  );
};
