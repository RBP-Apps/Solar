import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Play, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Lightbox from '../gallery/Lightbox';
import { featuredVideo } from '../../data/gallery';

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-primary text-white overflow-hidden -mt-20 pt-24 pb-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-solar-bg.jpg"
          alt="Rooftop solar panel installation"
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        {/* Richer multi-stop overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/75 to-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40"></div>
        {/* Soft radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(22,59,110,0.35)_100%)]"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#F3C348_0.8px,transparent_0.8px)] [background-size:28px_28px] opacity-[0.07]"></div>
      </div>

      {/* Content Container */}
      <Container className="relative z-10 text-center py-14 md:py-24 max-w-4xl mx-auto">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-7 shadow-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Renewable Energy • Policy • Industry</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.12] text-white mb-6 drop-shadow-sm">
          Advancing India’s <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F7E08A] to-accent">
            Renewable Energy Ecosystem
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200/95 leading-relaxed font-normal mb-11 max-w-2xl mx-auto">
          Chhattisgarh Solar Business Welfare Association works with government departments, renewable energy agencies, DISCOMs, and industry stakeholders to support clean energy growth and facilitate strategic investments.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/#contact"
            variant="white"
            size="lg"
            className="w-full sm:w-auto shadow-lg shadow-black/10"
            icon={ArrowRight}
          >
            Contact Us
          </Button>

          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-sm transition-all duration-200 hover:border-white/40 shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-accent text-slate flex items-center justify-center shadow-sm">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Watch Engagement Video</span>
          </button>
        </div>

        {/* Ecosystem Badges */}
        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 text-[11px] sm:text-xs text-slate-200/90">
          {[
            'Policy & Advocacy',
            'DISCOM & Agency Liaison',
            'Rooftop Solar & Schemes',
            'Pan-India Coordination'
          ].map((label) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 px-2 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* Video Modal Lightbox */}
      {isVideoModalOpen && (
        <Lightbox
          item={{
            title: featuredVideo.title,
            caption: featuredVideo.subtitle,
            videoUrl: featuredVideo.videoUrl,
            posterUrl: featuredVideo.posterUrl,
            isVideo: true
          }}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}
    </section>
  );
}
