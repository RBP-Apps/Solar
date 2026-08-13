import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon: Icon,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 border border-primary/10',
    secondary:
      'bg-secondary text-white hover:bg-secondary-hover shadow-md shadow-secondary/20 hover:shadow-lg',
    accent:
      'bg-accent text-slate font-bold hover:bg-accent-hover shadow-md shadow-accent/25 hover:shadow-lg',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm',
    ghost: 'text-primary hover:bg-primary/5 hover:text-primary-hover',
    white:
      'bg-white text-primary hover:bg-slate-50 shadow-md hover:shadow-lg border border-white/80'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {children}
      {Icon && (
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
}
