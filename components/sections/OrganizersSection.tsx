import React from 'react';
import Image from 'next/image';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2 } from 'lucide-react';

interface OrganizersSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const OrganizersSection: React.FC<OrganizersSectionProps> = ({ locale, content }) => {
  return (
    <section id="organization" className="py-20 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.organizers.badge}
          badgeVariant="blue"
          title={content.organizers.title}
          subtitle={content.organizers.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.organizers.items.map((org) => (
            <div
              key={org.id}
              className="glass-card p-6 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Logo or Typographic Badge */}
                <div className="h-16 flex items-center justify-start mb-4">
                  {org.logo ? (
                    <div className="relative h-12 w-36">
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
      </div>
    </section>
  );
};
