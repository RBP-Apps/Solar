import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Newspaper, Image as ImageIcon } from 'lucide-react';
import HeroSection from '../../components/hero/HeroSection';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import ServiceCard from '../../components/cards/ServiceCard';
import Button from '../../components/common/Button';
import EcosystemDiagram from '../../components/home/EcosystemDiagram';
import IndiaMapSection from '../../components/home/IndiaMapSection';
import MediaCard from '../../components/cards/MediaCard';
import Lightbox from '../../components/gallery/Lightbox';

import { company } from '../../data/company';
import { services } from '../../data/services';
import { galleryItems } from '../../data/gallery';

export default function Home() {
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState(null);
  const [selectedPressIndex, setSelectedPressIndex] = useState(null);

  // Select 3 engagement photographs for Home preview
  const previewGallery = galleryItems.slice(0, 3);
  // Select 3 media clippings for Home press preview
  const pressClippings = galleryItems.filter(item => item.category === 'media' || item.category === 'recognition').slice(0, 3);

  const currentPreviewItem = selectedPreviewIndex !== null ? previewGallery[selectedPreviewIndex] : null;
  const currentPressItem = selectedPressIndex !== null ? pressClippings[selectedPressIndex] : null;

  return (
    <div className="flex flex-col gap-0">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Introduction */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4">
              Supporting the Transition to a Cleaner Energy Future
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">
              Chhattisgarh Solar Business Welfare Association works across the renewable energy ecosystem to connect businesses, government authorities, energy agencies, DISCOMs, and industry stakeholders.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 font-bold text-secondary hover:text-primary transition-colors text-sm"
            >
              <span>Learn More About Our Association</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Section 3: What We Do (6 Compact Cards) */}
      <section className="py-20 bg-bg">
        <Container>
          <SectionHeading
            eyebrow="Core Initiatives"
            title="What We Do"
            description="Our focused work scope encompasses policy advocacy, regulatory navigation, incentive guidance, and multi-stakeholder facilitation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/our-work" variant="outline" size="md" icon={ArrowRight}>
              View Detailed Scope of Work
            </Button>
          </div>
        </Container>
      </section>

      {/* Section 4: Connecting the Ecosystem */}
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

      {/* Section 5: Pan-India Approach */}
      <IndiaMapSection />

      {/* Section 6: Real-World Engagement (Selected Photographs) */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>On-the-Ground Coordination</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                Engaged With the Renewable Energy Ecosystem
              </h2>
            </div>
            <p className="text-sm text-muted max-w-md">
              Our work involves active coordination, dialogue, and engagement with government authorities, energy agencies, and industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewGallery.map((item, idx) => (
              <MediaCard key={item.id} item={item} onClick={() => setSelectedPreviewIndex(idx)} />
            ))}
          </div>

          {currentPreviewItem && (
            <Lightbox
              item={currentPreviewItem}
              onClose={() => setSelectedPreviewIndex(null)}
              onPrev={() => setSelectedPreviewIndex(prev => Math.max(0, prev - 1))}
              onNext={() => setSelectedPreviewIndex(prev => Math.min(previewGallery.length - 1, prev + 1))}
              hasPrev={selectedPreviewIndex > 0}
              hasNext={selectedPreviewIndex < previewGallery.length - 1}
            />
          )}

          <div className="mt-10 text-center">
            <Button to="/engagement" variant="secondary" size="md" icon={ArrowRight}>
              Explore All Engagement Highlights
            </Button>
          </div>
        </Container>
      </section>

      {/* Section 7: Media & Recognition */}
      <section className="py-20 bg-bg border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="Public & Industry Presence"
            title="Featured in Forums & Media"
            description="Highlights from press publications, state policy consultations, and industry recognition forums."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressClippings.map((item, idx) => (
              <MediaCard key={item.id} item={item} onClick={() => setSelectedPressIndex(idx)} />
            ))}
          </div>

          {currentPressItem && (
            <Lightbox
              item={currentPressItem}
              onClose={() => setSelectedPressIndex(null)}
              onPrev={() => setSelectedPressIndex(prev => Math.max(0, prev - 1))}
              onNext={() => setSelectedPressIndex(prev => Math.min(pressClippings.length - 1, prev + 1))}
              hasPrev={selectedPressIndex > 0}
              hasNext={selectedPressIndex < pressClippings.length - 1}
            />
          )}

          <div className="mt-12 text-center">
            <Button to="/media" variant="outline" size="md" icon={Newspaper}>
              View Media & Gallery Archive
            </Button>
          </div>
        </Container>
      </section>

      {/* Section 8: Final CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-hover to-secondary text-white relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Let’s Work Together for a Stronger Renewable Energy Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
            Whether you are a business, industry stakeholder, agency, or organization seeking to understand renewable energy opportunities and frameworks, connect with us.
          </p>
          <Button to="/contact" variant="accent" size="lg" icon={ArrowRight}>
            Get in Touch
          </Button>
        </Container>
      </section>
    </div>
  );
}
