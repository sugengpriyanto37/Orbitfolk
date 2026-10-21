'use client';

import { Star } from 'lucide-react';
import Reveal from './Reveal';

export default function TestimonialCard({ quote, name, role, company, className = '' }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);
  return (
    <Reveal className={className}>
      <div className="h-full bg-white border border-[#EDE9E6] rounded-2xl p-7 flex flex-col">
        <div className="flex gap-1 text-[#B85C38]">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <p className="mt-5 flex-1 text-sm font-bold uppercase leading-relaxed tracking-tight">"{quote}"</p>
        <div className="mt-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-[#F7E6DF] text-[#B85C38] font-black text-sm flex items-center justify-center shrink-0">
            {initials}
          </span>
          <div>
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs text-neutral-500">{role}{company ? ` · ${company}` : ''}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}