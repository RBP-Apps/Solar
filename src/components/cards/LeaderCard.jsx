import React from 'react';
import { Award, UserCheck, Shield, Phone } from 'lucide-react';

const HONORIFICS = new Set(['shri', 'smt', 'dr', 'dr.', 'mr', 'mr.', 'mrs', 'mrs.', 'ms', 'ms.']);

function getInitials(name) {
  const words = name.split(' ').filter((w) => !HONORIFICS.has(w.toLowerCase().replace('.', '')));
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export default function LeaderCard({ leader }) {
  const isPrimary = leader.tier === 'primary';
  const isSupporting = leader.tier === 'supporting';

  return (
    <div
      className={`h-full w-full rounded-2xl p-3.5 sm:p-4 md:p-5 transition-all duration-300 border flex flex-col items-center text-center ${
        isPrimary
          ? 'bg-gradient-to-br from-primary via-primary to-primary-hover text-white border-primary/60 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1'
          : isSupporting
          ? 'bg-white border-slate-200/90 text-slate shadow-sm hover:border-accent/40 hover:shadow-lg hover:-translate-y-1'
          : 'bg-white border-slate-200/90 text-slate shadow-sm hover:border-secondary/35 hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      <div
        className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xs md:text-sm font-bold mb-3 md:mb-3.5 shadow-inner ${
          isPrimary
            ? 'bg-accent/25 text-accent border border-accent/40'
            : isSupporting
            ? 'bg-slate-50 text-slate-700 border border-slate-200'
            : 'bg-secondary/10 text-secondary border border-secondary/20'
        }`}
      >
        {getInitials(leader.name)}
      </div>

      <span
        className={`inline-flex items-center gap-1 px-2 md:px-2.5 py-0.5 rounded-full text-[9px] md:text-[10px] font-semibold uppercase tracking-wider mb-2 ${
          isPrimary
            ? 'bg-accent/20 text-accent border border-accent/30'
            : isSupporting
            ? 'bg-slate-100 text-slate-600 border border-slate-200'
            : 'bg-secondary/10 text-secondary border border-secondary/20'
        }`}
      >
        {isPrimary ? (
          <Award className="w-2.5 h-2.5 md:w-3 md:h-3" />
        ) : isSupporting ? (
          <Shield className="w-2.5 h-2.5 md:w-3 md:h-3" />
        ) : (
          <UserCheck className="w-2.5 h-2.5 md:w-3 md:h-3" />
        )}
        {leader.role}
      </span>

      <h3
        className={`font-extrabold tracking-tight text-xs md:text-sm leading-snug ${
          isPrimary ? 'text-white' : 'text-primary'
        }`}
      >
        {leader.name}
      </h3>

      {leader.phone && (
        <a
          href={`tel:${leader.phone.replace(/\s/g, '')}`}
          className={`mt-2.5 inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-semibold tracking-wide transition-colors rounded-md px-2 py-1 ${
            isPrimary
              ? 'text-accent/95 hover:text-accent bg-white/10 hover:bg-white/15'
              : 'text-secondary hover:text-secondary-hover bg-secondary/5 hover:bg-secondary/10'
          }`}
        >
          <Phone className="w-3 h-3 flex-shrink-0" />
          <span>{leader.phone}</span>
        </a>
      )}
    </div>
  );
}
