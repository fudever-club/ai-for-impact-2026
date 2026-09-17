import React from 'react';
import Image from 'next/image';
import { Locale, CompetitionContent } from '../../content/types';
import { siteConfig } from '../../content/site-config';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2, ShieldCheck } from 'lucide-react';

interface OrganizersSectionProps {
  locale: Locale;
  content: CompetitionContent;
}

export const OrganizersSection: React.FC<OrganizersSectionProps> = ({ locale, content }) => {
  return (
    <section id="organization" className="py-20 relative bg-navy-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.organizers.badge}
          badgeVariant="blue"
          title={content.organizers.title}
          subtitle={content.organizers.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.organizers.map((org) => (
            <div
              key={org.id}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between"
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
                        className="object-contain object-left filter brightness-110"
                      />
                    </div>
                  ) : (
                    <div className="px-3.5 py-2 rounded-xl bg-navy-900 border border-brand-cyan/30 text-brand-cyan font-mono font-bold text-xs flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-brand-orange" />
                      {org.shortName}
                    </div>
                  )}
                </div>

                <h3 className="font-display font-bold text-base text-brand-offwhite mb-1.5">
                  {org.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-white/5 text-xs text-brand-muted">
                {org.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
