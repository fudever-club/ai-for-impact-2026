import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { HelpCircle } from 'lucide-react';

interface StageComparisonSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const StageComparisonSection: React.FC<StageComparisonSectionProps> = ({
  locale,
  content,
}) => {
  const comp = content.stageComparison;
  if (!comp) return null;

  return (
    <section id="stage-comparison" className="py-20 relative bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={comp.badge}
          badgeVariant="orange"
          title={comp.title}
          subtitle={comp.subtitle}
        />

        {/* Highlight Banner */}
        <div className="mb-10 max-w-4xl mx-auto glass-card-orange p-5 sm:p-6 rounded-2xl border border-orange-200/80 shadow-card flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-orange-100 border border-brand-orange/30 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
              Lưu ý cốt lõi dành cho thí sinh
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {comp.intro}
            </p>
          </div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block glass-card rounded-2xl border border-slate-200 shadow-card overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-100/90 border-b border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
            <div className="col-span-3 p-4 border-r border-slate-200">
              {comp.columns.aspect}
            </div>
            <div className="col-span-4 p-4 border-r border-slate-200 text-blue-700 flex items-center gap-2">
              <Badge variant="blue" className="text-[10px]">Chặng 4</Badge>
              <span>{comp.columns.technicalRound}</span>
            </div>
            <div className="col-span-5 p-4 text-brand-orange flex items-center gap-2 bg-orange-50/50">
              <Badge variant="orange" className="text-[10px]">Chặng 5</Badge>
              <span>{comp.columns.finalRound}</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-sm">
            {comp.rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 hover:bg-slate-50/70 transition-colors items-stretch"
              >
                <div className="col-span-3 p-5 font-display font-bold text-slate-900 bg-slate-50/40 border-r border-slate-200/80 flex items-center">
                  {row.aspect}
                </div>
                <div className="col-span-4 p-5 text-slate-700 leading-relaxed border-r border-slate-200/80 text-xs sm:text-sm">
                  {row.technicalRound}
                </div>
                <div className="col-span-5 p-5 text-slate-800 leading-relaxed bg-orange-50/20 text-xs sm:text-sm font-medium">
                  {row.finalRound}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4">
          {comp.rows.map((row, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-200 shadow-card space-y-3"
            >
              <div className="font-display font-bold text-base text-slate-900 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>{row.aspect}</span>
                <span className="text-xs font-mono text-slate-400">#0{idx + 1}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                <div className="text-[11px] font-mono font-bold text-blue-700 uppercase">
                  {comp.columns.technicalRound}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {row.technicalRound}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-1">
                <div className="text-[11px] font-mono font-bold text-brand-orange uppercase">
                  {comp.columns.finalRound}
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {row.finalRound}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Takeaway Quote */}
        <div className="mt-8 text-center max-w-3xl mx-auto p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-xs sm:text-sm text-slate-600 italic">
          💡 {comp.conclusion}
        </div>
      </div>
    </section>
  );
};
