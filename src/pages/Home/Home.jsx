import React from 'react';
import {
  ShieldCheck,
  FileText,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  MessageSquare
} from 'lucide-react';
import HeroSection from '../../components/hero/HeroSection';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import LeaderCard from '../../components/cards/LeaderCard';
import Button from '../../components/common/Button';
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
      <section id="about" className="py-20 bg-bg scroll-mt-24 border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>About The Association</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4">
              Supporting Collaboration Across India's Renewable Energy Ecosystem
            </h2>
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
              <h3 className="text-2xl font-extrabold text-primary">Who We Are</h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {company.description}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                With a pan-India approach, we help stakeholders understand regulatory frameworks, access relevant government initiatives, and identify growth opportunities in India's rapidly expanding clean energy landscape.
              </p>

              <div className="pt-2">
              </div>
            </div>
          </div>

          {/* Our Role (3 Pillar Columns) */}
          <div id="our-work" className="mb-24 scroll-mt-24">
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
                <h4 className="text-lg font-bold text-primary mb-2">Policy & Advocacy</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Supporting stakeholders in understanding, analyzing, and advocating for progressive renewable energy policies at state and national levels.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-primary/5 text-secondary flex items-center justify-center mx-auto mb-6">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Coordination</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Connecting government departments, DISCOM power distribution utilities, energy agencies (CREDA / MNRE), and industry stakeholders.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-primary/5 text-secondary flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Opportunity</h4>
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

            {/* Leadership Team — single row on large screens, wraps on smaller ones */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
              {leadership.map((leader, idx) => {
                const isLast = idx === leadership.length - 1;
                const isOddLast = isLast && leadership.length % 2 === 1;
                
                return (
                  <div key={leader.id} className={isOddLast ? "col-span-2 sm:col-span-1 flex justify-center" : ""}>
                    <LeaderCard leader={leader} />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Connecting the Ecosystem */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/60">
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
      <section id="media" className="py-20 bg-bg scroll-mt-24 border-t border-slate-200/80">
        <Container>
          {/* Filterable Masonry Gallery */}
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
      <section id="contact" className="py-20 bg-bg scroll-mt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
              <MessageSquare className="w-4 h-4 text-secondary" />
              <span>Outreach & Liaison</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Have a question, policy query, or partnership opportunity? Reach out to Chhattisgarh Solar Business Welfare Association.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            {/* Left Column: Association Details */}
            <div className="lg:col-span-5 bg-primary text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Direct Liaison</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-4">
                  {company.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  We coordinate with government authorities, DISCOMs, energy agencies, and clean energy businesses across India.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Headquarters</h4>
                      <p className="text-slate-300 text-xs mt-0.5">{company.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Phone Support</h4>
                      {company.contact.phones && company.contact.phones.length > 0 ? (
                        <div className="mt-0.5 space-y-1">
                          {company.contact.phones.map((phone, idx) => (
                            <a key={idx} href={`tel:${phone}`} className="text-slate-300 hover:text-accent text-xs block">
                              +91 {phone.slice(0, -10)}{phone.slice(-10)}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a href={`tel:${company.contact.phone}`} className="text-slate-300 hover:text-accent text-xs mt-0.5 block">
                          {company.contact.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-xs text-slate-300">
                Operating Hours: {company.contact.operatingHours}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-center">
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
