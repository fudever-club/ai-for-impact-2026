'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Wrench, Globe, Flame, Cpu } from 'lucide-react';

export const AgentNetworkVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center p-4">
      {/* Background ambient glow circles */}
      <div className="absolute inset-0 rounded-full bg-blue-100/50 blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute w-3/4 h-3/4 rounded-full bg-orange-100/50 blur-2xl -z-10" />

      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blueLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="orangeLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer orbital rings */}
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="rgba(203, 213, 225, 0.6)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle
          cx="200"
          cy="200"
          r="105"
          stroke="rgba(37, 99, 235, 0.2)"
          strokeWidth="1.5"
        />

        {/* Connection lines to Central Agent (200, 200) */}
        {/* Top: DATA (200, 50) */}
        <line x1="200" y1="90" x2="200" y2="155" stroke="url(#blueLine)" strokeWidth="2" strokeDasharray="3 3" />
        {/* Left: TOOL (50, 200) */}
        <line x1="90" y1="200" x2="155" y2="200" stroke="url(#blueLine)" strokeWidth="2" strokeDasharray="3 3" />
        {/* Right: API (350, 200) */}
        <line x1="245" y1="200" x2="310" y2="200" stroke="url(#blueLine)" strokeWidth="2" strokeDasharray="3 3" />
        {/* Bottom: IMPACT (200, 350) - Orange line */}
        <line x1="200" y1="245" x2="200" y2="310" stroke="url(#orangeLine)" strokeWidth="2.5" />

        {/* Cross diagonals */}
        <line x1="120" y1="120" x2="165" y2="165" stroke="rgba(203, 213, 225, 0.4)" strokeWidth="1" />
        <line x1="280" y1="120" x2="235" y2="165" stroke="rgba(203, 213, 225, 0.4)" strokeWidth="1" />
        <line x1="120" y1="280" x2="165" y2="235" stroke="rgba(203, 213, 225, 0.4)" strokeWidth="1" />
        <line x1="280" y1="280" x2="235" y2="235" stroke="rgba(255, 107, 0, 0.3)" strokeWidth="1" />

        {/* Moving data packets on axes */}
        <circle cx="200" cy="120" r="3" fill="#2563EB" className="animate-ping" style={{ animationDuration: '2.5s' }} />
        <circle cx="120" cy="200" r="3" fill="#2563EB" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="280" cy="200" r="3" fill="#0284C7" className="animate-ping" style={{ animationDuration: '2.2s' }} />
        <circle cx="200" cy="280" r="4" fill="#FF6B00" className="animate-ping" style={{ animationDuration: '1.8s' }} />
      </svg>

      {/* HTML overlay nodes for crisp icons and labels */}
      {/* 1. TOP NODE: DATA */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 shadow-card flex items-center justify-center text-blue-600">
          <Database className="w-5 h-5" />
        </div>
        <span className="mt-1.5 text-[11px] font-mono tracking-wider font-bold text-blue-700">
          DATA
        </span>
      </div>

      {/* 2. LEFT NODE: TOOL */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-card flex items-center justify-center text-slate-700">
          <Wrench className="w-5 h-5" />
        </div>
        <span className="mt-1.5 text-[11px] font-mono tracking-wider font-bold text-slate-600">
          TOOL
        </span>
      </div>

      {/* 3. RIGHT NODE: API */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-card flex items-center justify-center text-slate-700">
          <Globe className="w-5 h-5" />
        </div>
        <span className="mt-1.5 text-[11px] font-mono tracking-wider font-bold text-slate-600">
          API
        </span>
      </div>

      {/* 4. BOTTOM NODE: IMPACT (Orange accent) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-brand-orange shadow-glow-orange flex items-center justify-center text-brand-orange animate-bounce" style={{ animationDuration: '3s' }}>
          <Flame className="w-7 h-7" />
        </div>
        <span className="mt-1 text-xs font-mono tracking-wider font-bold text-brand-orange">
          IMPACT
        </span>
      </div>

      {/* 5. CENTER DOMINANT NODE: AGENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-brand-orange p-0.5 shadow-xl shadow-blue-500/15">
          <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center text-slate-900 shadow-inner">
            <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-1 animate-pulse" />
            <span className="text-xs font-mono font-extrabold tracking-widest text-slate-900">
              AGENT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
