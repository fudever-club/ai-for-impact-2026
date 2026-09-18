'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CompetitionStage } from '../../content/types';
import { Badge } from '../ui/Badge';
import { Calendar } from 'lucide-react';

interface JourneyPathProps {
  stages: CompetitionStage[];
}

export const JourneyPath: React.FC<JourneyPathProps> = ({ stages }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Desktop central vertical timeline connector */}
      <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-200 via-blue-400 to-orange-400" />

      {/* Mobile vertical line */}
      <div className="md:hidden absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-orange-400" />

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
            ? 'border-orange-200/90 hover:border-orange-400 shadow-card hover:shadow-card-hover'
            : isTraining
            ? 'border-cyan-200/90 hover:border-cyan-400 shadow-card hover:shadow-card-hover'
            : 'border-blue-200/90 hover:border-blue-400 shadow-card hover:shadow-card-hover';

          return (
            <div
              key={stage.id}
              className={`relative flex items-center md:justify-between ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row pl-14 md:pl-0`}
            >
              {/* Timeline node icon */}
              <div className="absolute left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                {isTechnical && (
                  <div className="absolute -inset-1 rounded-full bg-brand-orange/30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                )}
                <div
                  className={`relative w-11 h-11 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-md transition-all duration-300 hover:scale-110 cursor-default ${
                    isTechnical
                      ? 'bg-gradient-to-br from-brand-orange to-orange-600 text-white shadow-glow-orange'
                      : isTraining
                      ? 'bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-glow-cyan'
                      : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-glow-blue'
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
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{stage.displayDate}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stage.summary}
                  </p>
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
