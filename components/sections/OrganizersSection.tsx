import React from 'react';
import Image from 'next/image';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2, MapPin, GraduationCap, ShieldCheck, Server } from 'lucide-react';

interface OrganizersSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const OrganizersSection: React.FC<OrganizersSectionProps> = ({ locale, content }) => {
  const isSingle = content.organizers.items.length === 1;

  return (
    <section id="organization" className="py-20 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.organizers.badge}
          badgeVariant="blue"
          title={content.organizers.title}
          subtitle={content.organizers.subtitle}
        />

        {isSingle ? (
          /* Symmetrical Flagship Institution Showcase Banner */
          <div className="max-w-4xl mx-auto">
            {content.organizers.items.map((org) => {
              const isVi = locale === 'vi';
              const campusText = isVi
                ? 'Campus Đà Nẵng • Khu đô thị FPT City, Q. Ngũ Hành Sơn, TP. Đà Nẵng'
                : 'Da Nang Campus • FPT City Urban Area, Ngu Hanh Son Dist, Da Nang';
              const missionText = isVi
                ? 'Khởi xướng và chỉ đạo chuyên môn toàn diện cho AI for Impact 2026. Bảo chứng chuẩn mực học thuật, hạ tầng phòng máy thi đấu chuẩn ICPC và môi trường máy chủ tính toán AI hiện đại.'
                : 'Initiates and directs academic excellence for AI for Impact 2026. Ensuring international competition standards, ICPC-grade contest laboratories, and cutting-edge AI computing infrastructure.';
              const pillars = isVi
                ? [
                    {
                      icon: ShieldCheck,
                      title: 'Chuẩn mực Học thuật',
                      sub: 'Hội đồng Cố vấn FPTU',
                      color: 'text-brand-orange bg-orange-50 border-orange-200/80',
                    },
                    {
                      icon: Server,
                      title: 'Hạ tầng Thi đấu',
                      sub: 'Phòng Lab & Mạng chuẩn ICPC',
                      color: 'text-blue-600 bg-blue-50 border-blue-200/80',
                    },
                    {
                      icon: GraduationCap,
                      title: 'Cổng Thông tin',
                      sub: content.event.domain,
                      color: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
                    },
                  ]
                : [
                    {
                      icon: ShieldCheck,
                      title: 'Academic Standard',
                      sub: 'FPTU Advisory Board',
                      color: 'text-brand-orange bg-orange-50 border-orange-200/80',
                    },
                    {
                      icon: Server,
                      title: 'Contest Facility',
                      sub: 'ICPC-grade Labs & Network',
                      color: 'text-blue-600 bg-blue-50 border-blue-200/80',
                    },
                    {
                      icon: GraduationCap,
                      title: 'Official Portal',
                      sub: content.event.domain,
                      color: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
                    },
                  ];

              return (
                <div
                  key={org.id}
                  className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Ambient Soft Glows */}
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar with Role & Institution Group */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-100">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-2xs">
                      <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{org.role}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 text-xs font-mono font-medium">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-orange" />
                      <span>FPT Education • EST. 2006</span>
                    </div>
                  </div>

                  {/* Main Grid: Logo Container on Left, Authority & Address on Right */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
                    {/* Column 1: Logo Showcase Frame */}
                    <div className="md:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/80 shadow-xs group-hover:border-brand-orange/30 group-hover:shadow-card transition-all">
                      {org.logo ? (
                        <div className="relative h-20 sm:h-24 w-60 sm:w-68 flex items-center justify-center">
                          <Image
                            src={org.logo}
                            alt={org.name}
                            fill
                            className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                            priority
                          />
                        </div>
                      ) : (
                        <div className="px-4 py-2.5 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-700 font-mono font-bold text-sm flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-brand-orange" />
                          {org.shortName}
                        </div>
                      )}
                      <span className="mt-3 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                        {isVi ? 'Campus Đà Nẵng' : 'Da Nang Campus'}
                      </span>
                    </div>

                    {/* Column 2: Institutional Identity & Description */}
                    <div className="md:col-span-7 flex flex-col justify-center text-left space-y-3.5">
                      <div className="space-y-1">
                        <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-wider block">
                          {isVi ? 'Đơn vị Khởi xướng & Chỉ đạo' : 'Directing & Initiating Body'}
                        </span>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                          {org.name}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {missionText}
                      </p>

                      <div className="flex items-start gap-2 text-xs font-mono text-slate-500 pt-1">
                        <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{campusText}</span>
                      </div>
                    </div>
                  </div>

                  {/* Symmetrical 3-Pillar Capability Grid at Bottom */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-100">
                    {pillars.map((pillar, idx) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 flex items-center gap-3 hover:bg-white hover:border-slate-300/80 transition-colors"
                        >
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${pillar.color}`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-800 truncate">
                              {pillar.title}
                            </div>
                            <div className="text-[11px] text-slate-500 font-mono truncate">
                              {pillar.sub}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.organizers.items.map((org) => (
              <div
                key={org.id}
                className="glass-card p-6 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-16 flex items-center justify-start mb-4">
                    {org.logo ? (
                      <div className="relative h-14 w-48">
                        <Image
                          src={org.logo}
                          alt={org.name}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <div className="px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-700 font-mono font-bold text-xs flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-orange" />
                        {org.shortName}
                      </div>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                    {org.name}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  {org.role}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
