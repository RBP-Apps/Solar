import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ThankYouModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="thank-you-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-2xl bg-bg-card shadow-2xl p-8 text-center"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full text-muted hover:bg-bg hover:text-slate transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
          <CheckCircle2 className="w-9 h-9 text-secondary" />
        </div>

        <h3 id="thank-you-title" className="text-xl font-bold text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-sm text-muted mb-6">
          Your message has been received. Our team will get back to you shortly.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}
