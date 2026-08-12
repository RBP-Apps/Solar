import React, { useState } from 'react';
import { Play, Newspaper, Film } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import GalleryGrid from '../../components/gallery/GalleryGrid';
import Lightbox from '../../components/gallery/Lightbox';
import { featuredVideo } from '../../data/gallery';

export default function Media() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="py-12 md:py-16 bg-bg">
      <Container>
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
            <Newspaper className="w-4 h-4 text-secondary" />
            <span>Media & Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Press, Publications & Event Highlights
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Documenting our active participation in state & national renewable energy events, press announcements, and stakeholder forums.
          </p>
        </div>

        {/* Featured Dedicated Video Section — "From the Field" */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-primary text-white">
            <div className="relative aspect-video max-h-[480px] w-full overflow-hidden">
              <img
                src={featuredVideo.posterUrl}
                alt={featuredVideo.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-accent text-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group focus:outline-none"
                aria-label="Play Featured Video"
              >
                <Play className="w-8 h-8 fill-current ml-1 group-hover:scale-110 transition-transform" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-bold text-accent mb-2">
                    <Film className="w-3.5 h-3.5" />
                    <span>Featured Video Highlight</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {featuredVideo.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                    {featuredVideo.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-5 py-2.5 rounded-lg bg-white text-primary font-bold text-xs hover:bg-slate-100 transition-colors w-fit"
                >
                  Watch Full Screen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Lightbox Modal */}
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
    </div>
  );
}
