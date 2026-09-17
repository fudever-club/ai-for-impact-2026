import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { AlertCircle, Bot, CheckCircle2 } from 'lucide-react';

interface EvaluationSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const EvaluationSection: React.FC<EvaluationSectionProps> = ({ locale, content }) => {
  return (
    <section id="evaluation" className="py-24 relative bg-white border-t border-slate-200/80">
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
              className="glass-card p-7 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-orange/50 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-between group"
            >
              <div>
                <span className="font-display font-black text-4xl sm:text-5xl text-brand-orange block mb-2 tracking-tight">
                  {w.percent}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-3">
                  {w.stage}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {w.summary}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.evaluation.principles.map((pr, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-blue-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <h4 className="font-display font-bold text-base text-slate-900">
                  {pr.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pr.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Important Governance Notices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Baseline Freeze Notice */}
          {content.evaluation.baselineRuleNotice && (
            <div className="glass-card-orange p-6 sm:p-7 rounded-2xl flex items-start gap-4 border border-orange-200/80 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-brand-orange shrink-0 mt-1 shadow-xs">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-display font-bold text-base text-slate-900">
                    {content.evaluation.baselineRuleNotice.title}
                  </h4>
                  <Badge variant="orange">
                    Hạn chót: {content.evaluation.baselineRuleNotice.deadline}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {content.evaluation.baselineRuleNotice.content}
                </p>
              </div>
            </div>
          )}

          {/* AI Tools Policy Notice with Svgl icons */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl flex items-start gap-4 border border-blue-200/80 shadow-card hover:shadow-card-hover hover:border-blue-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-1 shadow-xs">
              <Bot className="w-6 h-6" />
            </div>
            <div className="space-y-2.5">
              <h4 className="font-display font-bold text-base text-slate-900">
                {content.evaluation.allowedToolsNotice.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {content.evaluation.allowedToolsNotice.content}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-slate-500 font-medium">Hỗ trợ tự do:</span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/openai.svg" alt="OpenAI" className="w-3.5 h-3.5 object-contain" />
                  <span>OpenAI / ChatGPT</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/claude.svg" alt="Claude" className="w-3.5 h-3.5 object-contain" />
                  <span>Anthropic Claude</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
