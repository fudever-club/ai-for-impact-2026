import React from 'react';
import { Locale, CompetitionContent } from '../../content/types';
import { siteConfig } from '../../content/site-config';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ExternalLink, Clock, Sparkles } from 'lucide-react';

interface RegisterSectionProps {
  locale: Locale;
  content: CompetitionContent;
}

export const RegisterSection: React.FC<RegisterSectionProps> = ({ locale, content }) => {
  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-orange p-8 sm:p-14 rounded-3xl border-2 border-brand-orange/40 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl -z-10" />

          <div className="inline-flex mb-4">
            <Badge variant="orange">{content.register.badge}</Badge>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offwhite mb-4 tracking-tight leading-tight">
            {content.register.title}
          </h2>

          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {content.register.subtitle}
          </p>

          {/* 3 Step Guidance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {content.register.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-navy-950/80 p-6 rounded-2xl border border-white/10 hover:border-brand-orange/40 transition-all"
              >
                <div className="font-mono text-2xl font-black text-brand-orange mb-2">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-base text-brand-offwhite mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA & Deadline */}
          <div className="space-y-4">
            <Button
              variant="primary"
              size="lg"
              href={siteConfig.registrationUrl}
              external
              icon={<ExternalLink className="w-5 h-5" />}
              className="text-base sm:text-lg px-9 py-4 font-bold shadow-glow-orange"
            >
              {content.register.ctaText}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-brand-muted">
              <Clock className="w-4 h-4 text-brand-orange" />
              <span>{content.register.deadlineNotice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
