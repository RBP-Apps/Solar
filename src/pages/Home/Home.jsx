import React from 'react';
import {
  ShieldCheck,
  FileText,
  Users,
  TrendingUp,
  MapPin,
  MessageSquare
} from 'lucide-react';
import HeroSection from '../../components/hero/HeroSection';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import LeaderCard from '../../components/cards/LeaderCard';
import EcosystemDiagram from '../../components/home/EcosystemDiagram';
import ContactForm from '../../components/home/ContactForm';
import GalleryGrid from '../../components/gallery/GalleryGrid';

import { company } from '../../data/company';
import { leadership } from '../../data/leadership';

export default function Home() {
  return (
    <div id="top" className="flex flex-col gap-0">
      {/* Section: Hero */}
      <HeroSection />

      {/* Section: About Us */}
      <section id="about" className="py-24 bg-bg scroll-mt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 bg-secondary/10 text-secondary border border-secondary/20 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              <span>About The Association</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4 heading-accent">
              Supporting Collaboration Across India's Renewable Energy Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mt-5">
              Chhattisgarh Solar Business Welfare Association is dedicated to policy advocacy, clean energy investment facilitation, and multi-stakeholder liaison across India.
            </p>
          </div>

          {/* Feature Image & Who We Are Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 ring-1 ring-slate-900/5">
              <img
                src="/images/about-us.jpeg"
                alt="Chhattisgarh Solar Business Welfare Association Leadership Session"
                className="w-full h-full max-h-[480px] object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
                <span className="w-8 h-0.5 bg-accent rounded-full"></span>
                Who We Are
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Bridging Policy, Industry & Opportunity
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {company.description}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                With a pan-India approach, we help stakeholders understand regulatory frameworks, access relevant government initiatives, and identify growth opportunities in India's rapidly expanding clean energy landscape.
              </p>
            </div>
          </div>

          {/* Our Role (3 Pillar Columns) */}
          <div id="our-work" className="mb-24 scroll-mt-24">
            <SectionHeading
              eyebrow="Core Pillars"
              title="Our Organizational Role"
              description="We fulfill three vital functions to advance renewable energy business welfare and policy implementation."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: FileText,
                  title: 'Policy & Advocacy',
                  text: 'Supporting stakeholders in understanding, analyzing, and advocating for progressive renewable energy policies at state and national levels.'
                },
                {
                  icon: Users,
                  title: 'Coordination',
                  text: 'Connecting government departments, DISCOM power distribution utilities, energy agencies (CREDA / MNRE), and industry stakeholders.'
                },
                {
                  icon: TrendingUp,
                  title: 'Opportunity',
                  text: 'Facilitating awareness, access to government incentive schemes, rooftop solar initiatives, and clean energy investment avenues.'
                }
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="group bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:border-secondary/20 hover:-translate-y-1 card-elevated"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/8 to-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6 ring-1 ring-secondary/10 group-hover:scale-105 transition-transform duration-300">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2.5">{pillar.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Senior Leadership Team Section */}
          <div className="pt-10 border-t border-slate-200/80">
            <SectionHeading
              eyebrow="Governance & Guidance"
              title="Senior Leadership Team"
              description="Distinguished office bearers and advisors steering the vision, advocacy, and institutional dialogue of the association."
            />

            {/* Top row: first 4 leaders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mb-3 md:mb-4 lg:mb-5">
              {leadership.slice(0, 4).map((leader) => (
                <LeaderCard key={leader.id} leader={leader} />
              ))}
            </div>

            {/* Bottom row: remaining 3 — centered */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
              {leadership.slice(4).map((leader) => (
                <div
                  key={leader.id}
                  className="w-[calc(50%-0.375rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(25%-1rem)]"
                >
                  <LeaderCard leader={leader} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Connecting the Ecosystem */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-bg border-y border-slate-200/70">
        <Container>
          <SectionHeading
            eyebrow="Institutional Alignment"
            title="Connecting the Renewable Energy Ecosystem"
            description="We serve as the central bridge aligning regulatory bodies, distribution utilities, industrial investors, and clean energy businesses."
          />

          <EcosystemDiagram />
        </Container>
      </section>

      {/* Section: Media & Gallery */}
      <section id="media" className="py-24 bg-bg scroll-mt-24">
        <Container>
          <div>
            <SectionHeading
              eyebrow="Media Archive"
              title="Gallery & Press Coverage"
              description="Filter through our events, government meetings, press publications, and leadership recognitions."
            />

            <GalleryGrid />
          </div>
        </Container>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="py-24 bg-gradient-to-b from-bg to-slate-50/80 scroll-mt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 bg-secondary/10 text-secondary border border-secondary/20 shadow-sm">
              <MessageSquare className="w-3.5 h-3.5 text-secondary" />
              <span>Outreach & Liaison</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4 heading-accent">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mt-5">
              Have a question, policy query, or partnership opportunity? Reach out to Chhattisgarh Solar Business Welfare Association.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Left Column: Association Details */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary via-primary to-primary-hover text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-primary/20 border border-primary/30 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full pointer-events-none"></div>

              <div className="relative z-10">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  Direct Liaison
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 mb-4 leading-snug">
                  {company.name}
                </h3>
                <p className="text-sm text-slate-200/90 leading-relaxed mb-8">
                  We coordinate with government authorities, DISCOMs, energy agencies, and clean energy businesses across India.
                </p>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-white/15">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Headquarters</h4>
                      <p className="text-slate-300 text-xs mt-1">{company.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-white/15 text-xs text-slate-300">
                Operating Hours: {company.contact.operatingHours}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-lg shadow-slate-200/50 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-primary mb-2">Contact Our Team</h3>
              <p className="text-sm text-muted leading-relaxed mb-8">
                For inquiries, policy dialogue, or partnership opportunities, fill out the form below and our team will get back to you.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
