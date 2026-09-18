import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
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

        {/* Realistic Case Study: Team Đi Cùng */}
        {content.caseStudy && (
          <div className="mt-16 glass-card p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-card bg-gradient-to-b from-slate-50/70 via-white to-orange-50/20">
            <div className="max-w-3xl mb-8">
              <Badge variant="orange" className="mb-2">
                {content.caseStudy.badge}
              </Badge>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
                {content.caseStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {content.caseStudy.subtitle}
              </p>
            </div>

            {/* Problem & Proposal Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block">
                  Vấn đề thực tiễn (Pain Point)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {content.caseStudy.data.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-200/70 shadow-xs space-y-2">
                <span className="text-[11px] font-mono font-bold text-brand-orange uppercase block">
                  Giải pháp AI Agent đề xuất
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {content.caseStudy.data.proposal}
                </p>
              </div>
            </div>

            {/* 4-Stage Journey Progress */}
            <div className="space-y-3 mb-6">
              <h4 className="font-display font-bold text-sm text-slate-900 mb-2">
                Hành trình tôi luyện qua 4 chặng của đội
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {content.caseStudy.data.milestones.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">
                        {m.stage}
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-snug mb-2">
                        {m.action}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 italic">
                      ✓ {m.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Outcome Banner */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-800 font-medium flex items-center gap-2">
              <span>🎓</span>
              <span>{content.caseStudy.data.academicOutcome}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
