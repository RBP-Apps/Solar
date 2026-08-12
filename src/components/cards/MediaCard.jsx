import React from 'react';
import { ZoomIn, Calendar, Tag } from 'lucide-react';

export default function MediaCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick && onClick(item)}
      className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/5 p-2 flex items-center justify-center">
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-primary/80 backdrop-blur-sm text-[10px] font-bold text-accent uppercase tracking-wider shadow-sm">
          {item.category}
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
            {item.title}
          </h4>
          <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
