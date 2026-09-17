import React from 'react';
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
  ExternalLink,
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

  return (
    <section
      id="challenge"
      className="py-24 relative bg-slate-50/70 border-y border-slate-200/80"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="glass-card-orange p-6 flex items-start gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.date}
              </span>
              <span className="font-display font-black text-lg text-slate-900">
                {meta.dateVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-6 flex items-start gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.duration}
              </span>
              <span className="font-display font-black text-lg text-slate-900">
                {meta.durationVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-6 flex items-start gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.location}
              </span>
              <span className="font-display font-black text-lg text-slate-900">
                {meta.locationVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-6 flex items-start gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-xs">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-bold tracking-wider">
                {meta.qualification}
              </span>
              <span className="font-display font-black text-lg text-slate-900">
                {meta.qualificationVal}
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Technical Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rules & Topics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-7 sm:p-8 rounded-2xl border border-orange-200/80 shadow-card">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-brand-orange" />
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
            <div className="glass-card p-7 rounded-2xl border border-slate-200 shadow-card">
              <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                {content.programmingChallenge.topicsTitle}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {content.programmingChallenge.topics.map((topic, idx) => (
                  <Badge key={idx} variant="orange">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Supported Languages Terminal Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    icpc-global-2024.env
                  </span>
                </div>
                <span className="text-[11px] font-mono text-brand-orange font-semibold">ONLINE JUDGE</span>
              </div>

              {/* Compiler Specs with official Svgl language icons */}
              <div className="p-5 space-y-3.5 font-mono text-xs">
                {content.programmingChallenge.languages.map((lang, idx) => {
                  const iconSrc =
                    lang.name.includes('C++') ? '/icons/cpp.svg' :
                    lang.name.includes('Java') ? '/icons/java.svg' :
                    lang.name.includes('Python') || lang.name.includes('PyPy') ? '/icons/python.svg' :
                    null;

                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 space-y-1 hover:border-brand-orange/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {iconSrc && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={iconSrc}
                              alt={lang.name}
                              className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                            />
                          )}
                          <span className="font-bold text-brand-cyan text-sm">{lang.name}</span>
                        </div>
                        <span className="text-[11px] text-slate-400">{lang.version}</span>
                      </div>
                      <div className="text-[11px] text-slate-200 overflow-x-auto whitespace-nowrap py-0.5 font-mono">
                        $ {lang.compiler}
                      </div>
                    </div>
                  );
                })}
              </div>

              {content.documents.rulesUrl && (
                <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    href={content.documents.rulesUrl}
                    external
                    className="w-full justify-center text-slate-200 border-slate-700 hover:bg-slate-800"
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
