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

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary border border-secondary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
