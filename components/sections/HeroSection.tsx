'use client';

import React, { useState, useEffect } from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { getRegistrationCountdown, RegistrationCountdown } from '../../lib/registration';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { AgentNetworkVisual } from '../visuals/AgentNetworkVisual';
import { ArrowRight, Clock, Users, Trophy, Layers, Sparkles, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ locale, content }) => {
  const [countdown, setCountdown] = useState<RegistrationCountdown>(() =>
    getRegistrationCountdown(undefined, content)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getRegistrationCountdown(undefined, content));
    }, 60000);
    return () => clearInterval(timer);
  }, [content]);

  const statusText = content.hero.statusBadge[countdown.status];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Endorsement & Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="orange">{content.hero.eyebrow}</Badge>
              <div className="text-xs font-mono tracking-wider text-slate-600 uppercase flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                {content.hero.endorsement}
              </div>
            </div>

            {/* Main Event Title Lockup */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                AI FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-brand-orange">IMPACT</span>
                <span className="block text-brand-orange text-3xl sm:text-5xl lg:text-6xl mt-1">2026</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl font-semibold text-slate-700 tracking-wide">
                {content.hero.tagline}
              </p>
            </div>

            {/* Sub-tagline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              {content.hero.subTagline}
            </p>

            {/* Registration Countdown & Status Card */}
            <div className="w-full max-w-lg glass-card p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-brand-orange shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-brand-orange block">
                    {statusText}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {content.hero.daysLeftText}:
                  </span>
                </div>
              </div>

              {countdown.status === 'open' && (
                <div className="flex items-center gap-2 font-mono font-bold text-lg text-slate-900">
                  <div className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 text-center">
                    <span>{countdown.daysRemaining}</span>
                    <span className="text-[10px] text-slate-500 block font-normal">NGÀY</span>
                  </div>
                  <span className="text-slate-400">:</span>
                  <div className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 text-center">
                    <span>{String(countdown.hoursRemaining).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-500 block font-normal">GIỜ</span>
                  </div>
                  <span className="text-slate-400">:</span>
                  <div className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 text-center">
                    <span>{String(countdown.minutesRemaining).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-500 block font-normal">PHÚT</span>
                  </div>
                </div>
              )}
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href={content.registration.url}
                external
                icon={<ExternalLink className="w-4 h-4" />}
              >
                {content.hero.registerCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#journey"
                icon={<ArrowRight className="w-4 h-4 text-brand-orange" />}
              >
                {content.hero.journeyCta}
              </Button>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 w-full">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-slate-900">
                  {content.hero.quickStats.teams}
                </span>
                <span className="text-xs text-slate-500">Quy mô thí sinh</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-brand-orange">
                  {content.hero.quickStats.duration}
                </span>
                <span className="text-xs text-slate-500">Thời lượng thi</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-blue-600">
                  {content.hero.quickStats.stages}
                </span>
                <span className="text-xs text-slate-500">Hành trình</span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-emerald-600">
                  5 Nhóm
                </span>
                <span className="text-xs text-slate-500">Chủ đề bài toán</span>
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
