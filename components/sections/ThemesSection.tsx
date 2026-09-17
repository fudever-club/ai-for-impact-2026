import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { GraduationCap, HeartPulse, Compass, Leaf, Briefcase, Sparkles } from 'lucide-react';

interface ThemesSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const ThemesSection: React.FC<ThemesSectionProps> = ({ locale, content }) => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-7 h-7 text-brand-cyan" />,
    HeartPulse: <HeartPulse className="w-7 h-7 text-rose-500" />,
    Compass: <Compass className="w-7 h-7 text-amber-500" />,
    Leaf: <Leaf className="w-7 h-7 text-emerald-500" />,
    Briefcase: <Briefcase className="w-7 h-7 text-brand-orange" />,
  };

  return (
    <section id="themes" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.themes.badge}
          badgeVariant="blue"
          title={content.themes.title}
          subtitle={content.themes.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {content.themes.items.map((item, idx) => (
            <div
              key={item.id}
              className={`glass-card p-7 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50 border border-slate-200/90 shadow-card hover:shadow-card-hover flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-center mb-6">
                  {iconMap[item.icon] || <Sparkles className="w-7 h-7 text-brand-cyan" />}
                </div>

                <div className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider mb-2">
                  CHỦ ĐỀ 0{idx + 1}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {item.examples && (
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-mono text-slate-500 block">
                    Gợi ý hướng bài toán:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.examples.map((ex, exIdx) => (
                      <span
                        key={exIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-sans bg-slate-50 text-slate-700 border border-slate-200/80 font-medium"
                      >
                        • {ex}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
