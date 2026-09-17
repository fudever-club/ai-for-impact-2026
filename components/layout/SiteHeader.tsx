'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Locale, CompetitionViewModel } from '../../content/types';
import { Button } from '../ui/Button';
import { Menu, X, Sparkles, ExternalLink } from 'lucide-react';

interface SiteHeaderProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ locale, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 shadow-sm'
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-brand-orange p-0.5 flex items-center justify-center shadow-md shadow-brand-orange/15">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-orange group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-slate-900 leading-tight">
              AI FOR IMPACT <span className="text-brand-orange">2026</span>
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-widest text-slate-500 uppercase">
              {content.hero.eyebrow}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {content.nav.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions (Register CTA) */}
        <div className="hidden sm:flex items-center gap-3.5">
          <Button
            variant="primary"
            size="sm"
            href={content.registration.url}
            external
            icon={<ExternalLink className="w-3.5 h-3.5" />}
          >
            {content.nav.registerCta}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-brand-orange border border-slate-200"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-header border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2.5">
            {content.nav.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              href={content.registration.url}
              external
            >
              {content.nav.registerCta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
