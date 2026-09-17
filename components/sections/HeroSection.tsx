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
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="orange" className="shadow-glow-orange-sm">
                {content.hero.eyebrow}
              </Badge>
              <div className="text-xs font-mono tracking-wider text-slate-700 uppercase flex items-center gap-2 font-semibold bg-orange-50/80 border border-orange-200/80 px-3 py-1 rounded-full shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                </span>
                {content.hero.endorsement}
              </div>
            </div>

            {/* Main Event Title Lockup */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
                AI FOR <span className="text-blue-600">IMPACT</span>
                <span className="block text-brand-orange text-3xl sm:text-5xl lg:text-6xl mt-1 tracking-tight">2026</span>
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
            <div className="w-full max-w-lg glass-card-orange p-4 sm:p-5 rounded-2xl border-2 border-brand-orange/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-orange/30">
                  <Clock className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-brand-orange block tracking-wider">
                    {statusText}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {content.hero.daysLeftText}:
                  </span>
                </div>
              </div>

              {countdown.status === 'open' && (
                <div className="flex items-center gap-1.5 font-mono font-black text-lg text-slate-900">
                  <div className="bg-white px-3 py-1.5 rounded-xl border border-orange-200 shadow-xs text-center min-w-[54px]">
                    <span className="text-brand-orange font-black text-xl">{countdown.daysRemaining}</span>
                    <span className="text-[9px] text-slate-500 block font-bold tracking-wider">NGÀY</span>
                  </div>
                  <span className="text-brand-orange font-bold">:</span>
                  <div className="bg-white px-3 py-1.5 rounded-xl border border-orange-200 shadow-xs text-center min-w-[54px]">
                    <span className="text-slate-900 font-bold text-xl">{String(countdown.hoursRemaining).padStart(2, '0')}</span>
                    <span className="text-[9px] text-slate-500 block font-bold tracking-wider">GIỜ</span>
                  </div>
                  <span className="text-brand-orange font-bold">:</span>
                  <div className="bg-white px-3 py-1.5 rounded-xl border border-orange-200 shadow-xs text-center min-w-[54px]">
                    <span className="text-slate-900 font-bold text-xl">{String(countdown.minutesRemaining).padStart(2, '0')}</span>
                    <span className="text-[9px] text-slate-500 block font-bold tracking-wider">PHÚT</span>
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80 w-full">
              <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-brand-orange/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                <span className="block font-display font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-snug">
                  {content.hero.quickStats.teams}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-1">Quy mô thí sinh</span>
              </div>
              <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200/80 hover:border-brand-orange hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                <span className="block font-display font-black text-lg sm:text-xl text-brand-orange tracking-tight leading-snug">
                  {content.hero.quickStats.duration}
                </span>
                <span className="text-xs text-brand-orange font-semibold mt-1">Thời lượng thi</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-blue-400 hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                <span className="block font-display font-black text-lg sm:text-xl text-blue-600 tracking-tight leading-snug">
                  {content.hero.quickStats.stages}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-1">Hành trình</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-emerald-400 hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                <span className="block font-display font-black text-lg sm:text-xl text-emerald-600 tracking-tight leading-snug">
                  5 Nhóm
                </span>
                <span className="text-xs text-slate-500 font-medium mt-1">Chủ đề bài toán</span>
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
