'use client';

import React, { useState } from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  Calendar,
  Clock,
  MapPin,
  Laptop,
  CheckCircle2,
  Terminal,
  FileCode2,
  Copy,
  Check,
} from 'lucide-react';

interface ProgrammingChallengeSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const ProgrammingChallengeSection: React.FC<ProgrammingChallengeSectionProps> = ({
  locale,
  content,
}) => {
  const meta = content.programmingChallenge.metaCards;
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (compiler: string, idx: number) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(compiler);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    }
  };

  return (
    <section
      id="challenge"
      className="py-16 sm:py-20 lg:py-24 relative bg-slate-50/70 border-y border-slate-200/80"
    >
      {/* Background ambient orange lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.programmingChallenge.badge}
          badgeVariant="orange"
          title={content.programmingChallenge.title}
          subtitle={content.programmingChallenge.subtitle}
        />

        {/* 4 Metadata Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          <div className="glass-card-orange p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.date}
              </span>
              <span className="font-display font-black text-base sm:text-lg text-slate-900">
                {meta.dateVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.duration}
              </span>
              <span className="font-display font-black text-base sm:text-lg text-slate-900">
                {meta.durationVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.location}
              </span>
              <span className="font-display font-black text-base sm:text-lg text-slate-900">
                {meta.locationVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.qualification}
              </span>
              <span className="font-display font-black text-base sm:text-lg text-slate-900">
                {meta.qualificationVal}
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Technical Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rules & Topics */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="glass-card p-5 sm:p-7 lg:p-8 rounded-2xl border border-orange-200/80 shadow-card">
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-brand-orange shrink-0" />
                Quy chế thi đấu & Quy tắc 1 Laptop
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {content.programmingChallenge.rulesList.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 10 Topic Chips */}
            <div className="glass-card p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-card">
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mb-4">
                {content.programmingChallenge.topicsTitle}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {content.programmingChallenge.topics.map((topic, idx) => (
                  <Badge key={idx} variant="orange" className="text-[11px] sm:text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Supported Languages Clean Tech Light IDE Box */}
          <div className="lg:col-span-5 w-full min-w-0">
            <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
              {/* IDE Window Titlebar */}
              <div className="bg-slate-100/90 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-200/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/90 border border-red-500/30 shrink-0" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/90 border border-amber-500/30 shrink-0" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400/90 border border-emerald-500/30 shrink-0" />
                  <div className="flex items-center gap-1.5 ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs text-slate-600 font-semibold truncate">
                    <Terminal className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span className="truncate">icpc-global-2024.env</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-orange-100/80 text-brand-orange border border-orange-200/80 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE JUDGE</span>
                </div>
              </div>

              {/* Compiler Specs with official Svgl language icons */}
              <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                {content.programmingChallenge.languages.map((lang, idx) => {
                  const iconSrc =
                    lang.name.includes('C++') ? '/icons/cpp.svg' :
                    lang.name.startsWith('C') ? '/icons/c.svg' :
                    lang.name.includes('Java') ? '/icons/java.svg' :
                    lang.name.includes('Python') || lang.name.includes('PyPy') ? '/icons/python.svg' :
                    null;

                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50/80 hover:bg-orange-50/20 border border-slate-200/80 hover:border-orange-300/80 transition-all duration-200 shadow-2xs group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {iconSrc ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={iconSrc}
                              alt={lang.name}
                              className="w-4 h-4 object-contain"
                            />
                          ) : (
                            <div className="w-4 h-4 rounded bg-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-700">
                              C
                            </div>
                          )}
                          <span className="font-bold text-slate-900 text-sm group-hover:text-brand-orange transition-colors">
                            {lang.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-md font-medium">
                          {lang.version}
                        </span>
                      </div>

                      <div className="mt-2 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 text-slate-700 text-[11px] flex items-center justify-between gap-2 shadow-2xs group-hover:border-slate-300 transition-colors">
                        <div className="overflow-x-auto whitespace-nowrap py-0.5 flex items-center gap-1.5 scrollbar-thin min-w-0 flex-1">
                          <span className="text-brand-orange font-bold select-none shrink-0">$</span>
                          <span className="text-slate-800">{lang.compiler}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(lang.compiler, idx)}
                          aria-label={`Copy ${lang.name} compiler flags`}
                          title="Sao chép lệnh biên dịch"
                          className="shrink-0 p-1 text-slate-400 hover:text-brand-orange hover:bg-orange-50 rounded transition-colors"
                        >
                          {copiedIdx === idx ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {content.documents.rulesUrl && (
                <div className="p-4 bg-slate-50/90 border-t border-slate-200/80 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    href={content.documents.rulesUrl}
                    external
                    className="w-full justify-center text-slate-700 bg-white border-slate-200/90 hover:bg-orange-50 hover:text-brand-orange hover:border-orange-300 shadow-xs transition-all font-medium"
                    icon={<FileCode2 className="w-4 h-4 text-brand-orange" />}
                  >
                    {content.programmingChallenge.handbookCta}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
