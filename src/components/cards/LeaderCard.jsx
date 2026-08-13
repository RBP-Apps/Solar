import React from 'react';
import { Award, UserCheck, Shield } from 'lucide-react';

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
      className={`h-full w-full rounded-xl p-2.5 sm:p-3 md:p-4 transition-all duration-300 border flex flex-col items-center text-center ${
        isPrimary
          ? 'bg-gradient-to-br from-primary to-primary-hover text-white border-primary shadow-md hover:shadow-lg'
          : isSupporting
          ? 'bg-white border-slate-200 text-slate shadow-sm hover:border-accent/60'
          : 'bg-white border-slate-200 text-slate shadow-sm hover:border-secondary/40'
      }`}
    >
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-bold mb-2 md:mb-3 ${
          isPrimary
            ? 'bg-accent/20 text-accent border border-accent/30'
            : isSupporting
            ? 'bg-slate-100 text-slate-700 border border-slate-200'
            : 'bg-secondary/10 text-secondary border border-secondary/20'
        }`}
      >
        {getInitials(leader.name)}
      </div>

      <span
        className={`inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-semibold uppercase tracking-wider mb-1.5 md:mb-2 ${
          isPrimary
            ? 'bg-accent/20 text-accent border border-accent/30'
            : isSupporting
            ? 'bg-slate-100 text-slate-700 border border-slate-200'
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
    </div>
  );
}
