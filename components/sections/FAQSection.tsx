import React from 'react';
import { Locale, CompetitionContent } from '../../content/types';
import { siteConfig } from '../../content/site-config';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { MessageCircle, Mail } from 'lucide-react';

interface FAQSectionProps {
  locale: Locale;
  content: CompetitionContent;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ locale, content }) => {
  return (
    <section id="faq" className="py-24 relative bg-navy-950/60 border-t border-brand-blue/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.faq.badge}
          badgeVariant="cyan"
          title={content.faq.title}
          subtitle={content.faq.subtitle}
        />

        {/* Accessible Accordion Component */}
        <Accordion items={content.faq.items} />

        {/* Contact Help Bar */}
        <div className="mt-16 text-center space-y-3">
          <p className="text-sm text-brand-muted">{content.faq.moreHelp}</p>
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="md"
              href={siteConfig.fanpageUrl}
              external
              icon={<MessageCircle className="w-4 h-4 text-brand-cyan" />}
            >
              {content.faq.contactBtn}
            </Button>
            <Button
              variant="ghost"
              size="md"
              href={`mailto:${siteConfig.contactEmail}`}
              icon={<Mail className="w-4 h-4 text-brand-orange" />}
            >
              {siteConfig.contactEmail}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
