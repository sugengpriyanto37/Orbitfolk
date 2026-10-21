'use client';

import { MapPin } from 'lucide-react';

// Styled placeholder for map areas (no real map integration on purpose).
export default function MapPlaceholder({ label = 'Map', className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#E8E4E1] ${className}`}>
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(#d9d4d0 1px, transparent 1px), linear-gradient(90deg, #d9d4d0 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
          <MapPin className="w-5 h-5 text-[#B85C38]" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">{label}</span>
      </div>
    </div>
  );
}