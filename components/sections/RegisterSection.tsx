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
    <section id="register" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-orange p-5 sm:p-10 lg:p-14 rounded-3xl border-2 border-brand-orange/40 text-center relative overflow-hidden shadow-2xl bg-gradient-to-b from-orange-50/80 via-amber-50/40 to-white">
          <div className="inline-flex mb-4">
            <Badge variant="orange">{content.register.badge}</Badge>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">
            {content.register.title}
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            {content.register.subtitle}
          </p>

          {/* 3 Step Guidance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 text-left">
            {content.register.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border border-orange-200/80 shadow-card hover:border-brand-orange hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center font-mono text-sm sm:text-base font-black text-brand-orange mb-3 sm:mb-3.5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>


          {/* CTA & Deadline */}
          <div className="space-y-4 w-full flex flex-col items-center">
            <Button
              variant="primary"
              size="lg"
              href={content.registration.url}
              external
              icon={<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="w-full sm:w-auto text-sm sm:text-lg px-6 sm:px-10 py-3.5 sm:py-4 font-bold sm:font-black shadow-glow-orange-lg tracking-wide hover:scale-105 transition-transform"
            >
              {content.register.ctaText}
            </Button>

            <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-mono text-slate-700 font-semibold bg-orange-50/70 border border-orange-200/80 py-1.5 px-3.5 sm:px-4 rounded-xl sm:rounded-full max-w-full text-center shadow-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>{content.register.deadlineNotice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
