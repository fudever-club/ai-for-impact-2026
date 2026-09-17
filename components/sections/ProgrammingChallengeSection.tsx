import React from 'react';
import { Locale, CompetitionContent } from '../../content/types';
import { siteConfig } from '../../content/site-config';
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
  content: CompetitionContent;
}

export const ProgrammingChallengeSection: React.FC<ProgrammingChallengeSectionProps> = ({
  locale,
  content,
}) => {
  const meta = content.programmingChallenge.metaCards;

  return (
    <section
      id="challenge"
      className="py-24 relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-y border-brand-orange/20"
    >
      {/* Background ambient orange lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.programmingChallenge.badge}
          badgeVariant="orange"
          title={content.programmingChallenge.title}
          subtitle={content.programmingChallenge.subtitle}
        />

        {/* 4 Metadata Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="glass-card-orange p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-semibold">
                {meta.date}
              </span>
              <span className="font-display font-bold text-lg text-brand-offwhite">
                {meta.dateVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-semibold">
                {meta.duration}
              </span>
              <span className="font-display font-bold text-lg text-brand-offwhite">
                {meta.durationVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-semibold">
                {meta.location}
              </span>
              <span className="font-display font-bold text-lg text-brand-offwhite">
                {meta.locationVal}
              </span>
            </div>
          </div>

          <div className="glass-card-orange p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-orange block uppercase font-semibold">
                {meta.qualification}
              </span>
              <span className="font-display font-bold text-lg text-brand-offwhite">
                {meta.qualificationVal}
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Technical Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rules & Topics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-7 sm:p-8 rounded-2xl border border-brand-orange/30">
              <h3 className="font-display text-xl font-bold text-brand-offwhite mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-brand-orange" />
                Quy chế thi đấu & Quy tắc 1 Laptop
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-brand-muted leading-relaxed">
                {content.programmingChallenge.rulesList.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 10 Topic Chips */}
            <div className="glass-card p-7 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-brand-offwhite mb-4">
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
            <div className="rounded-2xl bg-navy-950 border border-white/15 overflow-hidden shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="bg-navy-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-brand-muted">
                    icpc-global-2024.env
                  </span>
                </div>
                <span className="text-[11px] font-mono text-brand-orange">ONLINE JUDGE</span>
              </div>

              {/* Compiler Specs */}
              <div className="p-5 space-y-4 font-mono text-xs">
                {content.programmingChallenge.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-navy-900/60 border border-white/5 space-y-1 hover:border-brand-orange/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-brand-cyan text-sm">{lang.name}</span>
                      <span className="text-[11px] text-brand-muted">{lang.version}</span>
                    </div>
                    <div className="text-[11px] text-brand-offwhite/75 overflow-x-auto whitespace-nowrap py-0.5">
                      $ {lang.compiler}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-navy-900/80 border-t border-white/10 text-center">
                <Button
                  variant="outline"
                  size="sm"
                  href={siteConfig.rulesUrl}
                  external
                  className="w-full justify-center"
                  icon={<FileCode2 className="w-4 h-4 text-brand-orange" />}
                >
                  {content.programmingChallenge.handbookCta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
