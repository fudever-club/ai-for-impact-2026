import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ExternalLink, Clock } from 'lucide-react';

interface RegisterSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const RegisterSection: React.FC<RegisterSectionProps> = ({ locale, content }) => {
  return (
    <section id="register" className="py-24 relative overflow-hidden bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-orange p-8 sm:p-14 rounded-3xl border-2 border-brand-orange/40 text-center relative overflow-hidden shadow-2xl bg-gradient-to-b from-orange-50/80 via-amber-50/40 to-white">
          <div className="inline-flex mb-4">
            <Badge variant="orange">{content.register.badge}</Badge>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            {content.register.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {content.register.subtitle}
          </p>

          {/* 3 Step Guidance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {content.register.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-orange-200/80 shadow-card hover:border-brand-orange hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center font-mono text-base font-black text-brand-orange mb-3.5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 6 Core Proposal Questions Card */}
          {content.register.proposalQuestionsCard && (
            <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-white/90 border border-orange-200 text-left shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <Badge variant="orange">{content.register.proposalQuestionsCard.badge}</Badge>
                <span className="text-xs font-mono text-slate-500 font-semibold">Video ≤ 3 phút • Hạn chót: 28/09/2026</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-2">
                {content.register.proposalQuestionsCard.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {content.register.proposalQuestionsCard.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.register.proposalQuestionsCard.questions.map((q) => (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-orange/40 hover:bg-orange-50/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-black text-brand-orange px-2 py-0.5 rounded bg-orange-100/70 border border-orange-200">
                          {q.order}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold line-clamp-1">
                          {q.intent}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-2 leading-snug">
                        {q.question}
                      </h4>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 mt-2">
                      <p className="text-[11px] text-slate-600 italic leading-relaxed">
                        💡 <span className="font-medium text-slate-700">Mẹo:</span> {q.scoringTip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA & Deadline */}
          <div className="space-y-4">
            <Button
              variant="primary"
              size="lg"
              href={content.registration.url}
              external
              icon={<ExternalLink className="w-5 h-5" />}
              className="text-base sm:text-lg px-10 py-4 font-black shadow-glow-orange-lg tracking-wide hover:scale-105 transition-transform"
            >
              {content.register.ctaText}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-700 font-semibold bg-orange-50/70 border border-orange-200/80 py-1.5 px-4 rounded-full max-w-fit mx-auto shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{content.register.deadlineNotice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
