import React from 'react';
import Image from 'next/image';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2, MapPin } from 'lucide-react';

interface OrganizersSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const OrganizersSection: React.FC<OrganizersSectionProps> = ({ locale, content }) => {
  const isSingle = content.organizers.items.length === 1;

  return (
    <section id="organization" className="py-16 sm:py-20 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.organizers.badge}
          badgeVariant="blue"
          title={content.organizers.title}
          subtitle={content.organizers.subtitle}
        />

        {isSingle ? (
          /* Symmetrical Clean Institution Showcase Card */
          <div className="max-w-2xl mx-auto">
            {content.organizers.items.map((org) => (
              <div
                key={org.id}
                className="glass-card p-5 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden group"
              >
                {/* Ambient Soft Glow Behind Card */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-44 bg-gradient-to-b from-brand-orange/10 via-blue-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Role Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-[11px] sm:text-xs font-semibold mb-5 sm:mb-6 shadow-2xs">
                  <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{org.role}</span>
                </div>

                {/* Official Logo Frame */}
                {org.logo ? (
                  <div className="relative h-16 sm:h-24 w-52 sm:w-72 mb-5 sm:mb-6 flex items-center justify-center">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                ) : (
                  <div className="px-4 py-2.5 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-700 font-mono font-bold text-sm mb-6 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-brand-orange" />
                    {org.shortName}
                  </div>
                )}

                {/* Institution Name */}
                <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight mb-2 sm:mb-3">
                  {org.name}
                </h3>

                {/* Location / Campus Detail */}
                <p className="text-[11px] sm:text-sm font-mono text-slate-500 flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>
                    {locale === 'vi'
                      ? 'Campus Đà Nẵng • Khu đô thị FPT City, P. Ngũ Hành Sơn, TP. Đà Nẵng'
                      : 'Da Nang Campus • FPT City Urban Area, Ngu Hanh Son Ward, Da Nang'}
                  </span>
                </p>
              </div>
            ))}
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
