'use client';

import React, { useState } from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { JourneyPath } from '../visuals/JourneyPath';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  BookOpen,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  ShieldAlert,
  Sparkles,
  Layers,
  Flame,
} from 'lucide-react';

interface JourneySectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ locale, content }) => {
  const [activeDeepDive, setActiveDeepDive] = useState<'stage3' | 'stage4'>('stage3');

  const finalRunOfShow = content.stage4RunOfShow ?? content.stage5RunOfShow;

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-50/50">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.journey.badge}
          badgeVariant="orange"
          title={content.journey.title}
          subtitle={content.journey.subtitle}
        />

        {/* 4-Stage Interactive Timeline Path */}
        <div className="mb-16">
          <JourneyPath stages={content.journey.stages} />
        </div>

        {/* Deep-dive Tabs Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold block mb-2">
            CHUYÊN SÂU TỪNG CHẶNG
          </span>
          <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 mb-6">
            Chi tiết Chuyên môn & Lịch trình Thi đấu
          </h3>

          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/60 border border-slate-200 shadow-xs max-w-full overflow-x-auto gap-1">
            <button
              type="button"
              onClick={() => setActiveDeepDive('stage3')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-display font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDeepDive === 'stage3'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Chặng 3: Huấn luyện</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveDeepDive('stage4')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-display font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDeepDive === 'stage4'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Chặng 4: Lịch Chung kết 31/10</span>
            </button>
          </div>
        </div>

        {/* DEEP-DIVE BLOCK 1: Stage 3 Training Workshops */}
        {content.trainingDetails && (
          <div className={`mb-20 glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card transition-all ${activeDeepDive === 'stage3' ? 'block animate-fade-in-up' : 'hidden'}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <Badge variant="blue">{content.trainingDetails.badge}</Badge>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  {content.trainingDetails.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-semibold">
                Dành cho Top 24 sau Vòng Tư duy ICPC
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
              {content.trainingDetails.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {content.trainingDetails.workshops.map((ws, idx) => {
                const initials =
                  idx === 0 ? 'TT' : idx === 1 ? 'HB' : 'NQ';
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-orange/50 hover:shadow-card transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-black text-brand-orange px-2 py-0.5 rounded bg-orange-50 border border-orange-200">
                          {ws.session}
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                          <Calendar className="w-3 h-3 text-brand-orange" />
                          <span>{ws.dateStr}</span>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">
                        {ws.title}
                      </h4>

                      {/* Instructor Avatar Badge */}
                      <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100 mb-3.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange to-amber-500 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                          {initials}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block leading-tight uppercase font-semibold">
                            Giảng viên hướng dẫn
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            {ws.instructor}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                        {ws.focus}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-mono text-slate-500 font-semibold block mb-2">
                        Sản phẩm nộp bắt buộc:
                      </span>
                      <ul className="space-y-1.5">
                        {ws.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mentoring Checkpoint Pill */}
            {content.trainingDetails.mentoringCheckpoint && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-glow-orange">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-sm text-slate-900">
                        {content.trainingDetails.mentoringCheckpoint.title}
                      </h4>
                      <Badge variant="orange">{content.trainingDetails.mentoringCheckpoint.dateStr}</Badge>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {content.trainingDetails.mentoringCheckpoint.desc}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* DEEP-DIVE BLOCK 2: Stage 4 Grand Finale Run-of-Show Timeline */}
        {finalRunOfShow && (
          <div className={`mb-20 glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card transition-all ${activeDeepDive === 'stage4' ? 'block animate-fade-in-up' : 'hidden'}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <Badge variant="orange">{finalRunOfShow.badge}</Badge>
              <span className="text-xs font-mono text-slate-500 font-semibold">
                Thứ Bảy, 31/10/2026 • Trực tiếp tại Đại học FPT Đà Nẵng
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              {finalRunOfShow.title}
            </h3>
            <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
              {finalRunOfShow.subtitle}
            </p>

            <div className="divide-y divide-slate-100 bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
              {finalRunOfShow.timeline.map((item, tIdx) => (
                <div
                  key={tIdx}
                  className={`p-4 sm:p-5 grid grid-cols-12 gap-4 items-center transition-colors ${
                    item.highlight
                      ? 'bg-orange-50/30 hover:bg-orange-50/50'
                      : 'hover:bg-slate-50/50'
                  }`}
                >
                  <div className="col-span-12 sm:col-span-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span className="font-mono font-bold text-xs sm:text-sm text-slate-900">
                      {item.time}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-4 font-display font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                    {item.highlight && (
                      <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 animate-pulse" />
                    )}
                    <span>{item.activity}</span>
                  </div>
                  <div className="col-span-12 sm:col-span-5 text-xs text-slate-600 leading-relaxed">
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA to Full Participant Handbook */}
        {content.documents.handbookUrl && (
          <div className="text-center pt-4">
            <Button
              variant="outline"
              size="lg"
              href={content.documents.handbookUrl}
              external
              icon={<BookOpen className="w-5 h-5 text-brand-orange" />}
              className="text-base px-8 py-3.5 font-bold shadow-card hover:border-brand-orange hover:shadow-card-hover"
            >
              {content.journey.ctaText}
            </Button>
            <p className="text-xs text-slate-500 mt-2 font-mono">
              Tải trực tiếp file Word chính thức (.docx) từ máy chủ cuộc thi
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
