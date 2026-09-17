import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import {
  Cpu,
  Wrench,
  RotateCw,
  ShieldCheck,
  CheckSquare,
  AlertTriangle,
  Car,
  FileCheck2,
  FolderGit2,
  FileText,
  Video,
} from 'lucide-react';

interface AgentAnatomySectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const AgentAnatomySection: React.FC<AgentAnatomySectionProps> = ({
  locale,
  content,
}) => {
  const anatomy = content.agentAnatomy;
  if (!anatomy) return null;

  const layerIcons = [
    <Cpu key="1" className="w-6 h-6 text-blue-600" />,
    <Wrench key="2" className="w-6 h-6 text-emerald-600" />,
    <RotateCw key="3" className="w-6 h-6 text-amber-600" />,
    <ShieldCheck key="4" className="w-6 h-6 text-brand-orange" />,
    <CheckSquare key="5" className="w-6 h-6 text-purple-600" />,
  ];

  const deliverableIcons = [
    <FolderGit2 key="1" className="w-5 h-5 text-brand-orange" />,
    <FileText key="2" className="w-5 h-5 text-blue-600" />,
    <FileCheck2 key="3" className="w-5 h-5 text-emerald-600" />,
    <Video key="4" className="w-5 h-5 text-purple-600" />,
  ];

  return (
    <section id="agent-anatomy" className="py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={anatomy.badge}
          badgeVariant="blue"
          title={anatomy.title}
          subtitle={anatomy.subtitle}
        />

        {/* Analogy Box */}
        <div className="mb-14 max-w-4xl mx-auto glass-card p-6 sm:p-7 rounded-2xl border border-blue-200/80 shadow-card bg-gradient-to-r from-blue-50/70 via-white to-orange-50/50 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
            <Car className="w-6 h-6 text-blue-600" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
              Mô hình ẩn dụ trực quan dễ nhớ
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {anatomy.analogy}
            </p>
          </div>
        </div>

        {/* 5 Stacked Layers */}
        <div className="space-y-4 mb-16">
          {anatomy.layers.map((layer, idx) => (
            <div
              key={layer.layerNumber}
              className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover ${
                layer.layerNumber >= 4
                  ? 'border-brand-orange/40 bg-gradient-to-r from-orange-50/30 via-white to-amber-50/20 shadow-glow-orange-sm'
                  : 'border-slate-200/90 shadow-card'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                {/* Layer Badge & Name */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-xs ${
                      layer.layerNumber >= 4
                        ? 'bg-orange-50 border-brand-orange/30 text-brand-orange'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {layerIcons[idx] || <Cpu className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        LỚP 0{layer.layerNumber}
                      </span>
                      {layer.layerNumber >= 4 && (
                        <Badge variant="orange" className="text-[10px] py-0">
                          Trọng tâm chấm điểm
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {layer.name}
                    </h3>
                    <p className="text-xs font-mono text-blue-600 font-semibold mt-0.5">
                      {layer.roleQuestion}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {layer.description}
                </div>

                {/* Deliverable Pill */}
                <div className="lg:col-span-3 pt-3 lg:pt-0 lg:border-l lg:border-slate-200 lg:pl-5">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Sản phẩm đầu ra:
                  </span>
                  <p className="text-xs font-medium text-slate-800 leading-snug">
                    {layer.deliverable}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Panel: MVP Standards vs Non-products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* Left Panel: MVP Definition */}
          <div className="glass-card p-7 sm:p-8 rounded-2xl border border-emerald-200/90 shadow-card bg-gradient-to-b from-emerald-50/30 to-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="cyan">{anatomy.mvpDefinition.badge}</Badge>
                <CheckSquare className="w-6 h-6 text-emerald-600" />
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                {anatomy.mvpDefinition.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {anatomy.mvpDefinition.description}
              </p>

              <div className="space-y-3.5">
                {anatomy.mvpDefinition.conditions.map((cond, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-xs flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 mb-0.5">
                        {cond.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cond.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Non-Products Warning */}
          <div className="glass-card p-7 sm:p-8 rounded-2xl border border-rose-200/90 shadow-card bg-gradient-to-b from-rose-50/30 to-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="orange">{anatomy.nonProducts.badge}</Badge>
                <AlertTriangle className="w-6 h-6 text-rose-500" />
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                {anatomy.nonProducts.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Các hình thức sau đây sẽ không được tính điểm sản phẩm hoạt động hoặc bị trừ điểm rất nặng:
              </p>

              <div className="space-y-3.5">
                {anatomy.nonProducts.rules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-rose-100 shadow-xs flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 mb-0.5">
                        {rule.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Mandatory Deliverables */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-card bg-slate-50/60">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="blue" className="mb-2">{anatomy.finalDeliverables.badge}</Badge>
            <h3 className="font-display font-bold text-2xl text-slate-900">
              {anatomy.finalDeliverables.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {anatomy.finalDeliverables.items.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-brand-orange/40 hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {deliverableIcons[idx] || <FileText className="w-5 h-5" />}
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-2 leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.specification}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-medium">
                  {item.format}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
