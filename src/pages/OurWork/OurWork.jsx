import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Landmark } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { services } from '../../data/services';

export default function OurWork() {
  return (
    <div className="py-12 md:py-16 bg-bg">
      <Container>
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
            <Landmark className="w-4 h-4 text-secondary" />
            <span>Scope of Work</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Our Work & Core Initiatives
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Connecting policy, industry, and clean energy investment opportunities across Chhattisgarh and India.
          </p>
        </div>

        {/* 6 Work Sections */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.slug}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:border-secondary/40 transition-all duration-300 scroll-mt-28"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-2xl font-black text-accent bg-accent/10 px-4 py-1.5 rounded-lg border border-accent/20">
                  {service.id}
                </span>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full">
                  Initiative Area
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-primary mb-3">
                {service.title}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {service.fullDesc}
              </p>

              <div className="bg-bg p-5 rounded-xl border border-slate-200/80 mb-6">
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  Key Scope Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-muted">
                  Institutional coordination across India
                </span>
                <Button to="/contact" variant="ghost" size="sm" icon={ArrowRight}>
                  Enquire About Scope
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-primary text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Need Assistance Navigating Renewable Energy Policy?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Our association provides guidance for businesses, DISCOM stakeholders, and clean energy investors across India.
          </p>
          <Button to="/contact" variant="accent" size="md">
            Get in Touch With Us
          </Button>
        </div>
      </Container>
    </div>
  );
}
