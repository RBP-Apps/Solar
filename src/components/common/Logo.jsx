import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`} aria-label="CSBWA Home">
      {/* Sun/Green Ecosystem Vector Symbol */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary shadow-sm border border-primary/20 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          {/* Subtle Sun Rays / Grid Ring */}
          <circle cx="20" cy="20" r="14" stroke="#F3C348" strokeWidth="2" strokeDasharray="3 2" opacity="0.8" />
          {/* Sun Core */}
          <circle cx="20" cy="20" r="6" fill="#F3C348" />
          {/* Green Energy Petals */}
          <path d="M20 5C20 5 24 11 20 15C16 11 20 5 20 5Z" fill="#2E7D5B" />
          <path d="M20 35C20 35 16 29 20 25C24 29 20 35 20 35Z" fill="#2E7D5B" />
          <path d="M5 20C5 20 11 16 15 20C11 24 5 20 5 20Z" fill="#2E7D5B" />
          <path d="M35 20C35 20 29 24 25 20C29 16 35 20 35 20Z" fill="#2E7D5B" />
        </svg>
      </div>

      {/* Association Name Typography */}
      <div className="flex flex-col text-left">
        <span className={`text-xs font-bold tracking-wider uppercase leading-tight ${light ? 'text-accent' : 'text-secondary'}`}>
          CHHATTISGARH SOLAR BUSINESS
        </span>
        <span className={`text-sm font-extrabold tracking-tight leading-tight ${light ? 'text-white' : 'text-primary'}`}>
          Welfare Association
        </span>
      </div>
    </Link>
  );
}
