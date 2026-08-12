import React from 'react';
import { Landmark, Building2, Zap, Briefcase, TrendingUp, RefreshCw } from 'lucide-react';

export default function EcosystemDiagram() {
  return (
    <div className="relative bg-white rounded-2xl p-4 sm:p-10 border border-slate-200 shadow-sm overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E7D5B_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        {/* Top Node: Government Departments */}
        <div className="flex flex-col items-center mb-1 sm:mb-6">
          <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-primary text-white shadow-md border border-primary/20 flex items-center gap-2 sm:gap-3">
            <Landmark className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold">Government Departments & RE Agencies</span>
          </div>
          <div className="w-0.5 h-5 sm:h-8 bg-gradient-to-b from-primary to-secondary"></div>
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>

        {/* Middle Level: Horizontal Axis centered around the Association — same 3-column hub layout at every screen size, just scaled down on mobile */}
        <div className="w-full grid grid-cols-3 gap-1 sm:gap-4 items-center my-1 sm:my-2">

          {/* Left Node: Industry Stakeholders */}
          <div className="flex items-center justify-end">
            <div className="px-1 py-1.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 text-[7px] sm:text-sm leading-tight font-semibold w-full text-center">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
              <span>Industry Stakeholders</span>
            </div>
            <div className="w-1.5 sm:w-8 h-0.5 bg-secondary flex-shrink-0"></div>
          </div>

          {/* Core Hub: Association */}
          <div className="px-1 py-2 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-lg border border-emerald-600 text-center flex flex-col items-center justify-center">
            <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-0.5 sm:mb-2">
              <RefreshCw className="w-3 h-3 sm:w-5 sm:h-5 text-accent animate-spin-slow" />
            </div>
            <span className="text-[6px] sm:text-xs font-bold text-accent uppercase tracking-wider leading-tight">Central Bridge</span>
            <span className="text-[10px] sm:text-base font-extrabold text-white leading-tight">CSBWA</span>
            <span className="text-[6px] sm:text-[11px] text-slate-200 mt-0.5 sm:mt-1 leading-tight">Facilitation & Advocacy</span>
          </div>

          {/* Right Node: DISCOMs & Power Utilities */}
          <div className="flex items-center justify-start">
            <div className="w-1.5 sm:w-8 h-0.5 bg-secondary flex-shrink-0"></div>
            <div className="px-1 py-1.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 text-[7px] sm:text-sm leading-tight font-semibold w-full text-center">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
              <span>DISCOMs & Power Utilities</span>
            </div>
          </div>

        </div>

        {/* Bottom Level: Businesses & Clean Energy Investment */}
        <div className="flex flex-col items-center mt-1 sm:mt-6">
          <div className="w-0.5 h-5 sm:h-8 bg-gradient-to-b from-secondary to-primary"></div>
          <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold mb-2 sm:mb-4">
            <Briefcase className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Solar & Renewable Energy Businesses</span>
          </div>

          <div className="w-0.5 h-4 sm:h-6 bg-accent"></div>
          <div className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-accent text-slate font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate flex-shrink-0" />
            <span>Clean Energy Investments Across India</span>
          </div>
        </div>

      </div>
    </div>
  );
}
