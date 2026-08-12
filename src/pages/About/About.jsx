import React from 'react';
import { ShieldCheck, FileText, Users, TrendingUp, Award } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import LeaderCard from '../../components/cards/LeaderCard';
import Button from '../../components/common/Button';
import { company } from '../../data/company';
import { leadership } from '../../data/leadership';

export default function About() {
  const primaryLeaders = leadership.filter(l => l.tier === 'primary');
  const secondaryLeaders = leadership.filter(l => l.tier === 'secondary');
  const supportingLeaders = leadership.filter(l => l.tier === 'supporting');

  return (
    <div className="py-12 md:py-16 bg-bg">
      <Container>
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span>About The Association</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Supporting Collaboration Across India’s Renewable Energy Ecosystem
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Chhattisgarh Solar Business Welfare Association is dedicated to policy advocacy, clean energy investment facilitation, and multi-stakeholder liaison across India.
          </p>
        </div>

        {/* Feature Image & Who We Are Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
            <img
              src="/images/about-us.jpeg"
              alt="Chhattisgarh Solar Business Welfare Association Leadership Session"
              className="w-full h-full max-h-[460px] object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-primary">Who We Are</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {company.description}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              With a pan-India approach, we help stakeholders understand regulatory frameworks, access relevant government initiatives, and identify growth opportunities in India’s rapidly expanding clean energy landscape.
            </p>

            <div className="pt-2">
              <Button to="/contact" variant="primary" size="md">
                Connect With Our Team
              </Button>
            </div>
          </div>
        </div>

        {/* Our Role (3 Pillar Columns) */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="Core Pillars"
            title="Our Organizational Role"
            description="We fulfill three vital functions to advance renewable energy business welfare and policy implementation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 rounded-full bg-primary/5 text-secondary flex items-center justify-center mx-auto mb-6">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Policy & Advocacy</h3>
              <p className="text-sm text-muted leading-relaxed">
                Supporting stakeholders in understanding, analyzing, and advocating for progressive renewable energy policies at state and national levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 rounded-full bg-primary/5 text-secondary flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Coordination</h3>
              <p className="text-sm text-muted leading-relaxed">
                Connecting government departments, DISCOM power distribution utilities, energy agencies (CREDA / MNRE), and industry stakeholders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 rounded-full bg-primary/5 text-secondary flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Opportunity</h3>
              <p className="text-sm text-muted leading-relaxed">
                Facilitating awareness, access to government incentive schemes, rooftop solar initiatives, and clean energy investment avenues.
              </p>
            </div>
          </div>
        </div>

        {/* Senior Leadership Team Section */}
        <div className="pt-8 border-t border-slate-200/80">
          <SectionHeading
            eyebrow="Governance & Guidance"
            title="Senior Leadership Team"
            description="Distinguished office bearers and advisors steering the vision, advocacy, and institutional dialogue of the association."
          />

          {/* Primary Tier (President & General Secretary) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {primaryLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>

          {/* Secondary Tier (Vice Presidents & Treasurer) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {secondaryLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>

          {/* Supporting Tier (Patrons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {supportingLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
