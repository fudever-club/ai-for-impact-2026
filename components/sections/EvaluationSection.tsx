'use client';

import React, { useState } from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { AlertCircle, Bot, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface EvaluationSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const EvaluationSection: React.FC<EvaluationSectionProps> = ({ locale, content }) => {
  const [showDetailedRubric, setShowDetailedRubric] = useState(false);

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

        {/* Formula Banner */}
        {content.comprehensiveScoring && (
          <div className="mb-8 text-center max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-50/80 via-white to-amber-50/60 border border-orange-200/90 shadow-card">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold block mb-2">
              CÔNG THỨC ĐIỂM TỔNG CUỘC THI
            </span>
            <div className="font-mono font-black text-base sm:text-xl text-slate-900 tracking-wide">
              {content.comprehensiveScoring.formula}
            </div>
          </div>
        )}

        {/* Toggle Detailed Rubric Button */}
        {content.comprehensiveScoring && (
          <div className="text-center mb-12">
            <button
              type="button"
              onClick={() => setShowDetailedRubric(!showDetailedRubric)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-orange-50/80 border border-slate-200 hover:border-brand-orange/40 text-xs sm:text-sm font-display font-bold text-slate-700 hover:text-brand-orange transition-all shadow-xs hover:shadow-card group cursor-pointer"
            >
              <span>
                {showDetailedRubric
                  ? 'Thu gọn bảng phân rã điểm chi tiết'
                  : 'Xem phân rã barem điểm chi tiết 3 vòng (15 tiêu chí)'}
              </span>
              {showDetailedRubric ? (
                <ChevronUp className="w-4 h-4 text-brand-orange group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-brand-orange group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* Detailed Scoring Rubric: 3 Rounds (Collapsible) */}
        {content.comprehensiveScoring && (
          <div className={`space-y-8 mb-14 ${showDetailedRubric ? 'block' : 'hidden'}`}>
            {content.comprehensiveScoring.rounds.map((round) => (
              <div
                key={round.roundId}
                className="glass-card rounded-2xl border border-slate-200/90 shadow-card overflow-hidden"
              >
                <div className="p-5 sm:p-6 bg-slate-50/80 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="blue">{round.weight}</Badge>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        Thang điểm: {round.totalPoints}đ
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                      {round.title}
                    </h3>
                  </div>
                  {round.notes && (
                    <p className="text-xs text-slate-600 max-w-md italic leading-relaxed">
                      📌 {round.notes}
                    </p>
                  )}
                </div>

                <div className="divide-y divide-slate-100">
                  {round.criteria.map((crit, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 sm:p-5 grid grid-cols-12 gap-4 hover:bg-slate-50/50 transition-colors items-center"
                    >
                      <div className="col-span-12 sm:col-span-5 font-display font-bold text-sm text-slate-900 flex items-start gap-2">
                        <span className="text-xs font-mono text-slate-400 mt-0.5">
                          0{cIdx + 1}.
                        </span>
                        <span>{crit.name}</span>
                      </div>
                      <div className="col-span-9 sm:col-span-5 text-xs text-slate-600 leading-relaxed">
                        {crit.description}
                      </div>
                      <div className="col-span-3 sm:col-span-2 text-right">
                        <span className="inline-block px-3 py-1 rounded-lg bg-orange-50 border border-brand-orange/30 text-brand-orange font-mono font-bold text-xs sm:text-sm">
                          {crit.points}đ
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

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
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/openai.svg" alt="OpenAI" className="w-3.5 h-3.5 object-contain" />
                  <span>OpenAI / ChatGPT</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/claude.svg" alt="Claude" className="w-3.5 h-3.5 object-contain" />
                  <span>Anthropic Claude</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/gemini.svg" alt="Gemini" className="w-3.5 h-3.5 object-contain" />
                  <span>Google Gemini</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/deepseek.svg" alt="DeepSeek" className="w-3.5 h-3.5 object-contain" />
                  <span>DeepSeek</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/huggingface.svg" alt="Hugging Face" className="w-3.5 h-3.5 object-contain" />
                  <span>Hugging Face</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
