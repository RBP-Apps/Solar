import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Sun, Landmark, ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';

const iconMap = {
  FileText,
  Sun,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Users
};

export default function ServiceCard({ service, showLink = true }) {
  const IconComponent = iconMap[service.iconName] || FileText;

  return (
    <div className="group h-full bg-white rounded-xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/5 text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-slate-400 group-hover:text-secondary transition-colors">
            {service.id}
          </span>
        </div>

        <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {service.highlights && (
          <ul className="space-y-2 mb-6">
            {service.highlights.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showLink && (
        <Link
          to={`/#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-primary transition-colors group/link pt-2 border-t border-slate-100"
        >
          <span>Learn Scope</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
