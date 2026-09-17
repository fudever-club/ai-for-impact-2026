import React from 'react';
import { Locale, CompetitionContent } from '../../content/types';
import { siteConfig } from '../../content/site-config';
import { SectionHeading } from '../ui/SectionHeading';
import { JourneyPath } from '../visuals/JourneyPath';
import { Button } from '../ui/Button';
import { BookOpen, ExternalLink } from 'lucide-react';

interface JourneySectionProps {
  locale: Locale;
  content: CompetitionContent;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ locale, content }) => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.journey.badge}
          badgeVariant="orange"
          title={content.journey.title}
          subtitle={content.journey.subtitle}
        />

        {/* 5-Stage Interactive Timeline Path */}
        <JourneyPath stages={content.journey.stages} />

        {/* CTA to Full Participant Handbook */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            href={siteConfig.handbookUrl}
            external
            icon={<BookOpen className="w-5 h-5 text-brand-orange" />}
          >
            {content.journey.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};
