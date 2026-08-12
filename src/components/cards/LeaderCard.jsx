import React from 'react';
import { Award, UserCheck, Shield } from 'lucide-react';

export default function LeaderCard({ leader }) {
  const isPrimary = leader.tier === 'primary';
  const isSupporting = leader.tier === 'supporting';

  return (
    <div
      className={`rounded-xl p-6 md:p-8 transition-all duration-300 border flex flex-col justify-between ${
        isPrimary
          ? 'bg-gradient-to-br from-primary to-primary-hover text-white border-primary shadow-md hover:shadow-lg'
          : isSupporting
          ? 'bg-white border-slate-200 text-slate shadow-sm hover:border-accent/60'
          : 'bg-white border-slate-200 text-slate shadow-sm hover:border-secondary/40'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              isPrimary
                ? 'bg-accent/20 text-accent border border-accent/30'
                : isSupporting
                ? 'bg-slate-100 text-slate-700 border border-slate-200'
                : 'bg-secondary/10 text-secondary border border-secondary/20'
            }`}
          >
            {isPrimary ? (
              <Award className="w-3.5 h-3.5" />
            ) : isSupporting ? (
              <Shield className="w-3.5 h-3.5" />
            ) : (
              <UserCheck className="w-3.5 h-3.5" />
            )}
            {leader.role}
          </span>
        </div>

        <h3
          className={`font-extrabold tracking-tight mb-2 ${
            isPrimary ? 'text-xl sm:text-2xl text-white' : 'text-lg text-primary'
          }`}
        >
          {leader.name}
        </h3>

        {leader.bio && (
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isPrimary ? 'text-slate-200' : 'text-muted'
            }`}
          >
            {leader.bio}
          </p>
        )}
      </div>

      <div className={`mt-6 pt-4 border-t ${isPrimary ? 'border-white/10 text-accent' : 'border-slate-100 text-secondary'} text-xs font-medium`}>
        Chhattisgarh Solar Business Welfare Association
      </div>
    </div>
  );
}
