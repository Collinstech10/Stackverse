import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  divisionBadge?: 'STACKVERSE' | 'COLLINSTECH' | 'VENTURES';
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  divisionBadge,
  align = 'left',
}) => {
  return (
    <div className={`space-y-3 mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      
      {/* Badges / Eyebrow */}
      <div className={`flex items-center gap-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        {divisionBadge && (
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech uppercase font-semibold border ${
            divisionBadge === 'COLLINSTECH'
              ? 'bg-blue-950/60 border-blue-500/40 text-blue-300'
              : divisionBadge === 'VENTURES'
              ? 'bg-violet-950/60 border-violet-500/40 text-violet-300'
              : 'bg-white/5 border-white/10 text-slate-300'
          }`}>
            {divisionBadge === 'COLLINSTECH' ? 'COLLINSTECH DIVISION' : divisionBadge}
          </span>
        )}

        {eyebrow && (
          <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {eyebrow}
          </span>
        )}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

    </div>
  );
};
