import React from 'react';
import { Locale, CompetitionContent } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Scale, AlertCircle, Bot, CheckCircle2 } from 'lucide-react';

interface EvaluationSectionProps {
  locale: Locale;
  content: CompetitionContent;
}

export const EvaluationSection: React.FC<EvaluationSectionProps> = ({ locale, content }) => {
  return (
    <section id="evaluation" className="py-24 relative bg-navy-950/70 border-t border-brand-blue/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.evaluation.badge}
          badgeVariant="cyan"
          title={content.evaluation.title}
          subtitle={content.evaluation.subtitle}
        />

        {/* 3 Weight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {content.evaluation.weights.map((w, idx) => (
            <div
              key={idx}
              className="glass-card p-7 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all text-center flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue block mb-2">
                  {w.percent}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-brand-offwhite mb-3">
                  {w.stage}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {w.summary}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.evaluation.principles.map((pr, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-navy-900/60 border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-brand-cyan">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                <h4 className="font-display font-bold text-base text-brand-offwhite">
                  {pr.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {pr.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Important Governance Notices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Baseline Freeze Notice */}
          <div className="glass-card-orange p-6 sm:p-7 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0 mt-1">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-display font-bold text-base text-brand-offwhite">
                  {content.evaluation.baselineRuleNotice.title}
                </h4>
                <Badge variant="orange">
                  Hạn chót: {content.evaluation.baselineRuleNotice.deadline}
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {content.evaluation.baselineRuleNotice.content}
              </p>
            </div>
          </div>

          {/* AI Tools Policy Notice */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl flex items-start gap-4 border border-brand-blue/30">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-cyan shrink-0 mt-1">
              <Bot className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-display font-bold text-base text-brand-offwhite">
                {content.evaluation.allowedToolsNotice.title}
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {content.evaluation.allowedToolsNotice.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
