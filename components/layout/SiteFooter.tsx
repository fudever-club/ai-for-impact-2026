import React from 'react';
import Link from 'next/link';
import { Locale, CompetitionViewModel } from '../../content/types';
import { ExternalLink, ShieldCheck, Mail, Facebook } from 'lucide-react';

interface SiteFooterProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ locale, content }) => {
  return (
    <footer id="footer" className="bg-navy-950 border-t border-brand-blue/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-xl tracking-wider text-brand-offwhite">
                AI FOR IMPACT <span className="text-brand-orange">2026</span>
              </span>
            </div>
            <p className="text-sm text-brand-muted max-w-md leading-relaxed">
              {content.footer.disclaimer}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={content.contact.fanpageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-brand-cyan hover:text-white transition-colors bg-navy-850 px-3 py-1.5 rounded-lg border border-white/10"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                Fanpage chính thức
              </a>
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-white transition-colors bg-navy-850 px-3 py-1.5 rounded-lg border border-white/10"
              >
                <Mail className="w-3.5 h-3.5 text-brand-orange" />
                {content.contact.email}
              </a>
            </div>
          </div>

          {/* Document Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-brand-offwhite uppercase tracking-wider mb-4">
              Tài liệu chính thức
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              {content.footer.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-brand-muted group-hover:text-brand-cyan" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers list */}
          <div>
            <h4 className="font-display font-semibold text-sm text-brand-offwhite uppercase tracking-wider mb-4">
              Đơn vị chủ trì
            </h4>
            <ul className="space-y-2 text-xs text-brand-muted">
              {content.organizers.items.map((org) => (
                <li key={org.id} className="flex flex-col">
                  <span className="font-medium text-brand-offwhite">{org.name}</span>
                  <span className="text-[11px] text-brand-cyan/80">{org.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>{content.footer.copyright}</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-brand-cyan/70">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
            <span>AI.Impact.fptu.vn • Single Source of Truth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
