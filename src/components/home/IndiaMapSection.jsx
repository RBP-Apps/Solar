import React from 'react';
import { MapPin, Globe2, ShieldCheck, Compass } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { company } from '../../data/company';

export default function IndiaMapSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Subtle Map Silhouette / Dots */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F3C348_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="National Scope"
          title="Connecting Opportunities Across India"
          description={company.panIndiaApproach}
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          {/* Left Text Highlights — side-by-side on mobile/tablet, stacked on large screens */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:gap-6">
            <div className="p-3.5 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-2.5 sm:mb-4">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-snug">State & Central Regulatory Alignment</h3>
              <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed">
                Helping businesses understand state-specific solar policies, central MNRE guidelines, and cross-border clean energy regulations.
              </p>
            </div>

            <div className="p-3.5 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary/30 text-emerald-300 flex items-center justify-center mb-2.5 sm:mb-4">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-snug">Inter-State Stakeholder Synergy</h3>
              <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed">
                Facilitating collaboration between industry bodies, state DISCOMs, and national renewable energy agencies.
              </p>
            </div>
          </div>

          {/* Right Vector Pan-India Graphic Card — hidden on mobile/tablet, shown on large screens only */}
          <div className="hidden lg:flex lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative flex-col items-center justify-center min-h-[380px]">
            {/* Vector Stylized Map Representation */}
            <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center">
              <svg viewBox="0 0 400 450" fill="none" className="w-full h-full text-secondary opacity-30">
                {/* Simplified India Contour Sketch */}
                <path
                  d="M200 40 L230 70 L260 90 L290 120 L270 160 L310 180 L330 220 L300 250 L270 290 L240 340 L200 410 L170 340 L140 290 L100 250 L70 200 L90 160 L120 120 L160 80 Z"
                  stroke="#2E7D5B"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Central Hub Marker — Chhattisgarh */}
              <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-accent opacity-75"></span>
                  <div className="relative w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-xs shadow-lg">
                    <MapPin className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <div className="mt-2 px-3 py-1 rounded-md bg-primary/90 border border-accent text-accent font-bold text-xs shadow-md whitespace-nowrap">
                  Chhattisgarh Headquarters
                </div>
              </div>

              {/* Connected National Nodes */}
              <div className="absolute top-[25%] left-[35%] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] text-slate-300 font-semibold bg-primary/80 px-1.5 py-0.5 rounded">North RE Corridor</span>
              </div>
              <div className="absolute top-[65%] left-[60%] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] text-slate-300 font-semibold bg-primary/80 px-1.5 py-0.5 rounded">South RE Corridor</span>
              </div>
              <div className="absolute top-[40%] left-[20%] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] text-slate-300 font-semibold bg-primary/80 px-1.5 py-0.5 rounded">West Industrial RE</span>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-slate-300">
              <span className="text-accent font-semibold">Pan-India Reach:</span> Assisting businesses across Indian states with regulatory orientation, incentive access, and institutional dialogue.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
