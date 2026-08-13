import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = ''
}) {
  const alignClasses = align === 'left' ? 'text-left' : 'text-center mx-auto max-w-3xl';
  const accentAlign = align === 'left' ? 'heading-accent heading-accent-left' : 'heading-accent';

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 bg-secondary/10 text-secondary border border-secondary/20 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(243,195,72,0.5)]"></span>
          {eyebrow}
        </div>
      )}
      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-[2.15rem] font-extrabold tracking-tight leading-tight ${accentAlign} ${
            light ? 'text-white' : 'text-primary'
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-slate-300' : 'text-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
