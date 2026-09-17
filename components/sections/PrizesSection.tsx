import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Trophy, Award, Medal, Star, Sparkles, CheckCircle2 } from 'lucide-react';

interface PrizesSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const PrizesSection: React.FC<PrizesSectionProps> = ({ locale, content }) => {
  const topThree = content.prizes.items.filter((p) =>
    ['first', 'second', 'third'].includes(p.id)
  );
  const specialPrizes = content.prizes.items.filter((p) =>
    ['impact', 'best-agent'].includes(p.id)
  );

  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.prizes.badge}
          badgeVariant="orange"
          title={content.prizes.title}
          subtitle={content.prizes.subtitle}
        />

        {/* Top 3 Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          {/* 2nd Place */}
          {topThree[1] && (
            <div className="glass-card p-8 rounded-2xl border border-brand-cyan/30 flex flex-col justify-between order-2 md:order-1 hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="cyan">{topThree[1].badge}</Badge>
                  <Medal className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-offwhite mb-2">
                  {topThree[1].title}
                </h3>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-cyan mb-4">
                  {topThree[1].formattedAmount}
                </div>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                  {topThree[1].description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-brand-muted">
                Số lượng: 01 Đội thi
              </div>
            </div>
          )}

          {/* 1st Place (Champion) - Dominant Center Card */}
          {topThree[0] && (
            <div className="glass-card-orange p-8 sm:p-10 rounded-2xl border-2 border-brand-orange shadow-glow-orange flex flex-col justify-between order-1 md:order-2 md:-translate-y-4 hover:-translate-y-5 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="orange">{topThree[0].badge}</Badge>
                  <Trophy className="w-10 h-10 text-brand-orange animate-pulse" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-brand-offwhite mb-2">
                  {topThree[0].title}
                </h3>
                <div className="font-display font-black text-4xl sm:text-5xl text-brand-orange mb-4">
                  {topThree[0].formattedAmount}
                </div>
                <p className="text-sm text-brand-offwhite/90 leading-relaxed mb-6">
                  {topThree[0].description}
                </p>
              </div>
              <div className="pt-4 border-t border-brand-orange/30 text-xs font-mono text-brand-orange font-semibold">
                Quán quân Toàn thành phố • Số lượng: 01 Đội
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {topThree[2] && (
            <div className="glass-card p-8 rounded-2xl border border-brand-blue/30 flex flex-col justify-between order-3 md:order-3 hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue">{topThree[2].badge}</Badge>
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-offwhite mb-2">
                  {topThree[2].title}
                </h3>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue mb-4">
                  {topThree[2].formattedAmount}
                </div>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                  {topThree[2].description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-brand-muted">
                Số lượng: 01 Đội thi
              </div>
            </div>
          )}
        </div>

        {/* Special Category Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {specialPrizes.map((sp) => (
            <div
              key={sp.id}
              className="p-6 rounded-2xl bg-navy-900/80 border border-brand-cyan/20 flex items-start gap-4 hover:border-brand-cyan/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-brand-offwhite">
                    {sp.title}
                  </h4>
                  <span className="font-mono font-bold text-brand-cyan">
                    {sp.formattedAmount}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {sp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-cash Additional Opportunities */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
          <h4 className="font-display font-bold text-base sm:text-lg text-brand-offwhite mb-4 text-center">
            Quyền lợi & Cơ hội sau cuộc thi dành cho Thí sinh
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {content.prizes.additionalBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-muted">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
