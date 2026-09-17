import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { selectPrizePodium } from './prize-podium';
import { Trophy, Award, Medal, Sparkles, CheckCircle2 } from 'lucide-react';

interface PrizesSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

function formatQuantity(locale: Locale, quantity: number): string {
  if (locale === 'vi') return `Số lượng: ${quantity} đội thi`;
  return `Quantity: ${quantity} ${quantity === 1 ? 'team' : 'teams'}`;
}

export const PrizesSection: React.FC<PrizesSectionProps> = ({ locale, content }) => {
  const { first, second, third } = selectPrizePodium(content.prizes.items);
  const specialPrizes = content.prizes.items.filter((p) =>
    ['impact', 'best-agent'].includes(p.id)
  );

  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-100/40 rounded-full blur-[180px] pointer-events-none -z-10" />

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
          {second && (
            <div className="glass-card p-8 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover flex flex-col justify-between order-2 md:order-1 hover:-translate-y-1 transition-all bg-gradient-to-b from-slate-50 to-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="cyan">{second.badge}</Badge>
                  <Medal className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {second.title}
                </h3>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-cyan mb-4">
                  {second.formattedAmount}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {second.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                {formatQuantity(locale, second.quantity)}
              </div>
            </div>
          )}

          {/* 1st Place (Champion) - Dominant Center Card */}
          {first && (
            <div className="glass-card-orange p-8 sm:p-10 rounded-2xl border-2 border-brand-orange shadow-glow-orange flex flex-col justify-between order-1 md:order-2 md:-translate-y-4 hover:-translate-y-5 transition-all bg-gradient-to-b from-orange-50 via-amber-50/60 to-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="orange">{first.badge}</Badge>
                  <Trophy className="w-10 h-10 text-brand-orange animate-pulse" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
                  {first.title}
                </h3>
                <div className="font-display font-black text-4xl sm:text-5xl text-brand-orange mb-4">
                  {first.formattedAmount}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {first.description}
                </p>
              </div>
              <div className="pt-4 border-t border-orange-200/80 text-xs font-mono text-brand-orange font-semibold">
                {formatQuantity(locale, first.quantity)}
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {third && (
            <div className="glass-card p-8 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover flex flex-col justify-between order-3 md:order-3 hover:-translate-y-1 transition-all bg-gradient-to-b from-slate-50 to-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue">{third.badge}</Badge>
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {third.title}
                </h3>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600 mb-4">
                  {third.formattedAmount}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {third.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                {formatQuantity(locale, third.quantity)}
              </div>
            </div>
          )}
        </div>

        {/* Special Category Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {specialPrizes.map((sp) => (
            <div
              key={sp.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card flex items-start gap-4 hover:border-brand-cyan/50 hover:shadow-card-hover transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-brand-cyan shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-slate-900">
                    {sp.title}
                  </h4>
                  <span className="font-mono font-bold text-brand-cyan">
                    {sp.formattedAmount}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sp.description}
                </p>
                <p className="text-xs font-mono text-slate-500">
                  {formatQuantity(locale, sp.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-cash Additional Opportunities */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card max-w-4xl mx-auto bg-slate-50/80">
          <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-4 text-center">
            Quyền lợi & Cơ hội sau cuộc thi dành cho Thí sinh
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {content.prizes.additionalBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
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
