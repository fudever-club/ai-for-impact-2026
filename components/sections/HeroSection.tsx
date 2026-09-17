'use client';

import React, { useState, useEffect } from 'react';
import { Locale, CompetitionContent } from '../../content/types';
import { siteConfig } from '../../content/site-config';
import { getRegistrationCountdown, RegistrationCountdown } from '../../lib/registration';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { AgentNetworkVisual } from '../visuals/AgentNetworkVisual';
import { ArrowRight, Clock, Users, Trophy, Layers, Sparkles, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  locale: Locale;
  content: CompetitionContent;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ locale, content }) => {
  const [countdown, setCountdown] = useState<RegistrationCountdown>(() =>
    getRegistrationCountdown()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getRegistrationCountdown());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const statusText = content.hero.statusBadge[countdown.status];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Endorsement & Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="cyan">{content.hero.eyebrow}</Badge>
              <div className="text-xs font-mono tracking-wider text-brand-muted uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                {content.hero.endorsement}
              </div>
            </div>

            {/* Main Event Title Lockup */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-offwhite leading-[1.08]">
                AI FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-orange">IMPACT</span>
                <span className="block text-brand-orange text-3xl sm:text-5xl lg:text-6xl mt-1">2026</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl font-semibold text-brand-cyan tracking-wide">
                {content.hero.tagline}
              </p>
            </div>

            {/* Sub-tagline */}
            <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
              {content.hero.subTagline}
            </p>

            {/* Registration Countdown & Status Card */}
            <div className="w-full max-w-lg glass-card p-4 rounded-xl border border-brand-cyan/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase text-brand-orange block">
                    {statusText}
                  </span>
                  <span className="text-xs text-brand-muted">
                    {content.hero.daysLeftText}:
                  </span>
                </div>
              </div>

              {countdown.status === 'open' && (
                <div className="flex items-center gap-2 font-mono font-bold text-lg text-brand-offwhite">
                  <div className="bg-navy-950 px-2.5 py-1 rounded border border-white/10 text-center">
                    <span>{countdown.daysRemaining}</span>
                    <span className="text-[10px] text-brand-cyan block font-normal">NGÀY</span>
                  </div>
                  <span>:</span>
                  <div className="bg-navy-950 px-2.5 py-1 rounded border border-white/10 text-center">
                    <span>{String(countdown.hoursRemaining).padStart(2, '0')}</span>
                    <span className="text-[10px] text-brand-cyan block font-normal">GIỜ</span>
                  </div>
                  <span>:</span>
                  <div className="bg-navy-950 px-2.5 py-1 rounded border border-white/10 text-center">
                    <span>{String(countdown.minutesRemaining).padStart(2, '0')}</span>
                    <span className="text-[10px] text-brand-cyan block font-normal">PHÚT</span>
                  </div>
                </div>
              )}
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href={siteConfig.registrationUrl}
                external
                icon={<ExternalLink className="w-4 h-4" />}
              >
                {content.hero.registerCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#journey"
                icon={<ArrowRight className="w-4 h-4 text-brand-cyan" />}
              >
                {content.hero.journeyCta}
              </Button>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-brand-offwhite">
                  {content.hero.quickStats.teams}
                </span>
                <span className="text-xs text-brand-muted">Quy mô thí sinh</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-brand-orange">
                  {content.hero.quickStats.prizePool}
                </span>
                <span className="text-xs text-brand-muted">Cơ cấu thưởng</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-brand-cyan">
                  {content.hero.quickStats.duration}
                </span>
                <span className="text-xs text-brand-muted">Thời lượng thi</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-brand-offwhite">
                  {content.hero.quickStats.stages}
                </span>
                <span className="text-xs text-brand-muted">Hành trình</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Agent Network Topology Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AgentNetworkVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
