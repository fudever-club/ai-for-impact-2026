import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Bot, CheckCircle2, Download, ExternalLink, FileText, Headphones, MessageCircle } from 'lucide-react';

interface EvaluationSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const EvaluationSection: React.FC<EvaluationSectionProps> = ({ locale, content }) => {
  return (
    <section id="evaluation" className="py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={content.evaluation.badge}
          badgeVariant="cyan"
          title={content.evaluation.title}
          subtitle={content.evaluation.subtitle}
        />

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.evaluation.principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-card-hover transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center gap-2.5 text-blue-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <h4 className="font-display font-bold text-base text-slate-900">
                  {pr.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pr.description}
              </p>
            </div>
          ))}
        </div>

        {/* Support Channel & Technical Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dedicated Support Channel & Official Handbook */}
          <div className="glass-card-orange p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-orange-200/90 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100/80 border border-orange-200 flex items-center justify-center text-brand-orange shrink-0 shadow-2xs">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="orange">HỖ TRỢ THÍ SINH</Badge>
                  <h4 className="font-display font-bold text-lg text-slate-900 mt-1">
                    {locale === 'vi'
                      ? 'Kênh Hỗ trợ & Sổ tay Hướng dẫn'
                      : 'Support Channel & Candidate Handbook'}
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {locale === 'vi'
                  ? 'Toàn bộ quy chế thi, tiêu chuẩn đánh giá chi tiết từng vòng và giải đáp thắc mắc kỹ thuật được Ban Tổ chức phổ biến trực tiếp qua nhóm hỗ trợ chuyên biệt và tài liệu hướng dẫn thi.'
                  : 'All contest regulations, detailed evaluation rubrics, and technical Q&A are directly supported by the Organizing Committee via the dedicated channel and candidate handbook.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-orange-200/60 mt-6">
              {content.contact.supportGroupUrl && (
                <a
                  href={content.contact.supportGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-orange text-white font-display font-bold text-xs sm:text-sm hover:bg-orange-600 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{locale === 'vi' ? 'Tham gia Nhóm Zalo Hỗ trợ' : 'Join Zalo Support Group'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}
              <a
                href={content.documents.handbookUrl || '/docs/So_tay_thi_sinh_AI-for-Impact-2026_V4.docx'}
                download="So_tay_thi_sinh_AI-for-Impact-2026_V4.docx"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-display font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-orange" />
                <span>{locale === 'vi' ? 'Tải Sổ tay Thí sinh (V4)' : 'Download Handbook (V4)'}</span>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* AI Tools Policy Notice with Svgl icons */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-blue-200/80 shadow-card hover:shadow-card-hover hover:border-blue-400 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="blue">QUY ĐỊNH KỸ THUẬT</Badge>
                  <h4 className="font-display font-bold text-lg text-slate-900 mt-1">
                    {content.evaluation.allowedToolsNotice.title}
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {content.evaluation.allowedToolsNotice.content}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <span className="text-[11px] font-mono text-slate-500 font-semibold block mb-2.5">
                {locale === 'vi' ? 'Mô hình & Công cụ được khuyến khích:' : 'Recommended AI Models & Tools:'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/openai.svg" alt="OpenAI" className="w-3.5 h-3.5 object-contain" />
                  <span>OpenAI / ChatGPT</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/claude.svg" alt="Claude" className="w-3.5 h-3.5 object-contain" />
                  <span>Anthropic Claude</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/gemini.svg" alt="Gemini" className="w-3.5 h-3.5 object-contain" />
                  <span>Google Gemini</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/deepseek.svg" alt="DeepSeek" className="w-3.5 h-3.5 object-contain" />
                  <span>DeepSeek</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium hover:border-slate-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/huggingface.svg" alt="Hugging Face" className="w-3.5 h-3.5 object-contain" />
                  <span>Hugging Face</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
