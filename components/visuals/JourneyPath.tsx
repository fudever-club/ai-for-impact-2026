'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CompetitionStage } from '../../content/types';
import { Badge } from '../ui/Badge';
import { Calendar, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface JourneyPathProps {
  stages: CompetitionStage[];
}

export const JourneyPath: React.FC<JourneyPathProps> = ({ stages }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Desktop central vertical timeline connector */}
      <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-cyan/20 via-brand-blue/40 to-brand-orange/40" />

      {/* Mobile vertical line */}
      <div className="md:hidden absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-cyan/30 via-brand-blue/40 to-brand-orange/40" />

      <div className="space-y-8 sm:space-y-12">
        {stages.map((stage, idx) => {
          const isEven = idx % 2 === 0;
          const isTechnical = stage.theme === 'technical';
          const isTraining = stage.theme === 'training';

          const badgeVariant = isTechnical
            ? 'orange'
            : isTraining
            ? 'cyan'
            : 'blue';

          const cardBorder = isTechnical
            ? 'border-brand-orange/40 hover:border-brand-orange/80 shadow-glow-orange/10'
            : isTraining
            ? 'border-brand-cyan/30 hover:border-brand-cyan/60'
            : 'border-brand-blue/30 hover:border-brand-blue/60';

          return (
            <div
              key={stage.id}
              className={`relative flex items-center md:justify-between ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row pl-14 md:pl-0`}
            >
              {/* Timeline node icon */}
              <div className="absolute left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs shadow-lg transition-transform duration-300 hover:scale-110 ${
                    isTechnical
                      ? 'bg-brand-orange text-white shadow-glow-orange'
                      : isTraining
                      ? 'bg-brand-cyan text-navy-950 shadow-glow-cyan'
                      : 'bg-brand-blue text-white shadow-glow-blue'
                  }`}
                >
                  0{stage.sequence}
                </div>
              </div>

              {/* Stage content card */}
              <div className="w-full md:w-[45%]">
                <div
                  className={`glass-card p-6 sm:p-7 rounded-2xl transition-all duration-300 border ${cardBorder}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant={badgeVariant}>
                      STAGE 0{stage.sequence} • {stage.theme.toUpperCase()}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-brand-muted">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{stage.displayDate}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-brand-offwhite mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    {stage.summary}
                  </p>

                  <div className="bg-navy-900/80 rounded-xl p-3.5 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isTechnical ? 'text-brand-orange' : 'text-brand-cyan'
                      }`}
                    />
                    <div className="text-xs text-brand-offwhite/90 leading-normal">
                      <span className="font-semibold text-brand-muted block mb-0.5">
                        Sản phẩm đầu ra / Kết quả:
                      </span>
                      {stage.output}
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder for desktop balance */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
