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
                ? 'bg-white border-brand-orange/40 shadow-card ring-1 ring-brand-orange/20'
                : 'bg-white hover:bg-slate-50/80 border-slate-200/90 shadow-xs hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              <span className="font-display font-semibold text-base sm:text-lg text-slate-900 flex items-center gap-3">
                <span className="font-mono text-xs text-brand-orange font-bold shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-brand-orange' : 'group-hover:text-slate-600'
                }`}
              />
            </button>
            <div
              id={`faq-content-${item.id}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
              className={`grid transition-all duration-300 ease-out-expo ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
