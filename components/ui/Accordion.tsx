'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../content/types';

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3.5 max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`transition-all duration-200 border rounded-xl overflow-hidden ${
              isOpen
                ? 'bg-navy-850/80 border-brand-cyan/40 shadow-glow-cyan/20'
                : 'bg-navy-800/40 hover:bg-navy-800/60 border-white/10 hover:border-brand-cyan/20'
            }`}
          >
            <button
              type="button"
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <span className="font-display font-medium text-base sm:text-lg text-brand-offwhite flex items-center gap-3">
                <span className="font-mono text-xs text-brand-orange shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-brand-cyan shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-brand-orange' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div
                id={`faq-content-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-brand-muted leading-relaxed border-t border-white/5 pt-3.5"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
