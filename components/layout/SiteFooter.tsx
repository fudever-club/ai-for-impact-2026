import React from 'react';
import Link from 'next/link';
import { Locale, CompetitionViewModel } from '../../content/types';
import { ExternalLink, ShieldCheck, Mail } from 'lucide-react';

interface SiteFooterProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ locale, content }) => {
  return (
    <footer id="footer" className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-xl tracking-wider text-slate-900">
                AI FOR IMPACT <span className="text-brand-orange">2026</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              {content.footer.disclaimer}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-2">
              <a
                href={content.contact.supportGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-blue-600 transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/zalo.svg" alt="Zalo" className="w-4 h-4 object-contain group-hover:scale-105 transition-transform" />
                Nhóm Zalo hỗ trợ
              </a>
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-brand-orange transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-brand-orange" />
                {content.contact.email}
              </a>
            </div>
          </div>

          {/* Document Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-900 uppercase tracking-wider mb-4">
              Tài liệu chính thức
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {content.footer.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    download={link.href.endsWith('.docx') ? 'So_tay_thi_sinh_AI-for-Impact-2026.docx' : undefined}
                    className="hover:text-brand-orange transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-orange" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers list */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-900 uppercase tracking-wider mb-4">
              Đơn vị chủ trì
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {content.organizers.items.map((org) => (
                <li key={org.id} className="flex flex-col">
                  <span className="font-medium text-slate-800">{org.name}</span>
                  <span className="text-[11px] text-slate-500">{org.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <p>{content.footer.copyright}</p>
            {content.footer.developerCredit && (
              <>
                <span className="hidden sm:inline text-slate-300">•</span>
                <a
                  href={content.footer.developerCredit.url || 'https://fudever.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-card hover:-translate-y-0.5 transition-all group"
                  title="FU-DEVER Club"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={content.footer.developerCredit.logoUrl}
                    alt={content.footer.developerCredit.teamName}
                    className="w-5 h-5 object-contain group-hover:scale-105 transition-transform"
                  />
                  <span className="font-mono text-[11px] font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                    {content.footer.developerCredit.text}{' '}
                    <span className="text-blue-600 font-bold">
                      {content.footer.developerCredit.teamName}
                    </span>
                  </span>
                </a>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-600">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
            <span>{content.event.domain} • Single Source of Truth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
