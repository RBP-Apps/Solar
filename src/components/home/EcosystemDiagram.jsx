import React from 'react';
import { Landmark, Building2, Zap, Briefcase, TrendingUp, RefreshCw } from 'lucide-react';

export default function EcosystemDiagram() {
  return (
    <div className="relative bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E7D5B_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        {/* Top Node: Government Departments */}
        <div className="flex flex-col items-center mb-6">
          <div className="px-5 py-3 rounded-xl bg-primary text-white shadow-md border border-primary/20 flex items-center gap-3">
            <Landmark className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold">Government Departments & RE Agencies</span>
          </div>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary"></div>
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>

        {/* Middle Level: Horizontal Axis centered around the Association */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center my-2">

          {/* Left Node: Industry Stakeholders */}
          <div className="flex flex-col md:flex-row items-center justify-end">
            <div className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2 text-sm font-semibold w-full md:w-auto justify-center">
              <Building2 className="w-4 h-4 text-secondary" />
              <span>Industry Stakeholders</span>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-secondary"></div>
          </div>

          {/* Core Hub: Association */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-lg border border-emerald-600 text-center flex flex-col items-center justify-center my-4 md:my-0">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-2">
              <RefreshCw className="w-5 h-5 text-accent animate-spin-slow" />
            </div>
            <span className="text-xs font-bold text-accent uppercase tracking-wider">Central Bridge</span>
            <span className="text-base font-extrabold text-white mt-0.5">CSBWA</span>
            <span className="text-[11px] text-slate-200 mt-1">Facilitation & Advocacy</span>
          </div>

          {/* Right Node: DISCOMs & Power Utilities */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-end">
            <div className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2 text-sm font-semibold w-full md:w-auto justify-center">
              <Zap className="w-4 h-4 text-accent" />
              <span>DISCOMs & Power Utilities</span>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-secondary"></div>
          </div>

        </div>

        {/* Bottom Level: Businesses & Clean Energy Investment */}
        <div className="flex flex-col items-center mt-6">
          <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-primary"></div>
          <div className="px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-3 text-sm font-bold mb-4">
            <Briefcase className="w-4 h-4 text-secondary" />
            <span>Solar & Renewable Energy Businesses</span>
          </div>

          <div className="w-0.5 h-6 bg-accent"></div>
          <div className="px-6 py-3 rounded-xl bg-accent text-slate font-extrabold text-sm shadow-md flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-slate" />
            <span>Clean Energy Investments Across India</span>
          </div>
        </div>

      </div>
    </div>
  );
}
