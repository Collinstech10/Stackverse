import React from 'react';
import { ProjectItem } from '../../types';
import { ArrowUpRight, ShieldCheck, Zap, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative rounded-3xl glass-card border border-white/10 hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      
      {/* Top Banner Gradient Header */}
      <div className={`p-6 bg-gradient-to-br ${project.imageBg} border-b border-white/10`}>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono-tech text-blue-300 border border-white/10">
            {project.category}
          </span>
          {project.isDemoCaseStudy && (
            <span className="px-2.5 py-1 rounded-full bg-amber-950/60 text-[10px] font-mono-tech text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> DEMO BENCHMARK
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
      </div>

      {/* Body Content */}
      <div className="p-6 space-y-4">
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlighted Result Box */}
        <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
          <div>
            <strong className="block text-white text-[11px] font-mono-tech uppercase">BENCHMARK RESULT</strong>
            <span>{project.result}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technology.map((tech, idx) => (
            <span key={idx} className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-mono-tech text-slate-300 border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onOpenModal(project)}
          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10 hover:border-blue-500"
        >
          <span>View Architecture Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
