import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  const isVideo = item.isVideo || item.videoUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        {isVideo ? (
          <video
            src={item.videoUrl || item.src}
            poster={item.posterUrl}
            controls
            autoPlay
            className="max-h-[70vh] w-auto max-w-full rounded-lg shadow-2xl object-contain"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full rounded-lg shadow-2xl object-contain"
          />
        )}

        <div className="mt-4 text-center text-white max-w-2xl px-4">
          <h3 className="text-lg font-bold text-accent">{item.title}</h3>
          {item.caption && <p className="text-sm text-slate-300 mt-1">{item.caption}</p>}
        </div>
      </div>
    </div>
  );
}
