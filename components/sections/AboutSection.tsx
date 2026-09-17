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
    <section id="about" className="py-24 relative bg-navy-950/60 border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.about.badge}
          badgeVariant="cyan"
          title={content.about.title}
          subtitle={content.about.subtitle}
        />

        {/* Narrative Description */}
        <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed mb-16 text-center">
          {content.about.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl hover:border-brand-cyan/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[pillar.icon] || <Cpu className="w-6 h-6 text-brand-cyan" />}
              </div>
              <h3 className="font-display font-bold text-xl text-brand-offwhite mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
