import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { Mail } from 'lucide-react';

interface FAQSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ locale, content }) => {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 relative bg-slate-50/50 border-t border-slate-200/80">
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
        <div className="mt-12 sm:mt-16 text-center space-y-3">
          <p className="text-sm text-slate-600">{content.faq.moreHelp}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md mx-auto">
            <Button
              variant="outline"
              size="md"
              href={content.contact.supportGroupUrl}
              external
              className="w-full sm:w-auto justify-center shadow-xs"
              icon={
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src="/icons/zalo.svg" alt="Zalo" className="w-4 h-4 object-contain" />
              }
            >
              {content.faq.contactBtn}
            </Button>
            <Button
              variant="ghost"
              size="md"
              href={`mailto:${content.contact.email}`}
              className="w-full sm:w-auto justify-center border border-slate-200/60 sm:border-transparent"
              icon={<Mail className="w-4 h-4 text-brand-orange" />}
            >
              {content.contact.email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
