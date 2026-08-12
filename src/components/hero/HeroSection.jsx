import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Play, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Lightbox from '../gallery/Lightbox';
import { featuredVideo } from '../../data/gallery';

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-primary text-white overflow-hidden -mt-20 pt-24 pb-16">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-solar-bg.jpg"
          alt="Rooftop solar panel installation"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        {/* Subtle Corporate Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60"></div>
        {/* Vector Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#2E7D5B_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      </div>

      {/* Content Container */}
      <Container className="relative z-10 text-center py-12 md:py-20 max-w-4xl mx-auto">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Renewable Energy • Policy • Industry</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-6">
          Advancing India’s <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-300 to-accent">
            Renewable Energy Ecosystem
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal mb-10 max-w-3xl mx-auto">
          Chhattisgarh Solar Business Welfare Association works with government departments, renewable energy agencies, DISCOMs, and industry stakeholders to support clean energy growth and facilitate strategic investments.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/#contact"
            variant="white"
            size="lg"
            className="w-full sm:w-auto"
          >
            Contact Us
          </Button>

          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-sm transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-accent text-slate flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Watch Engagement Video</span>
          </button>
        </div>

        {/* Ecosystem Badges */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Policy & Advocacy</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>DISCOM & Agency Liaison</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Rooftop Solar & Schemes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Pan-India Coordination</span>
          </div>
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
