import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Code2, Cpu, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ locale, content }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-brand-orange" />,
    Cpu: <Cpu className="w-6 h-6 text-brand-cyan" />,
    Sparkles: <Sparkles className="w-6 h-6 text-brand-blue" />,
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.about.badge}
          badgeVariant="cyan"
          title={content.about.title}
          subtitle={content.about.subtitle}
        />

        {/* Narrative Description */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 text-sm sm:text-lg text-slate-600 leading-relaxed mb-10 sm:mb-16 text-center">
          {content.about.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {content.about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-8 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-orange/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:border-brand-orange/30 transition-all shadow-xs">
                {iconMap[pillar.icon] || <Cpu className="w-6 h-6 text-brand-cyan" />}
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2 sm:mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
