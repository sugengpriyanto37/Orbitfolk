'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from './Reveal';

export default function DestinationCard({ destination, className = '' }) {
  return (
    <Reveal className={className}>
      <Link
        href={`/destinations/${destination.slug}`}
        className="group block h-full bg-white border border-[#EDE9E6] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-neutral-200/60 transition-shadow duration-300"
      >
        <div className="relative">
          <Image src={destination.image} alt={`${destination.city}, ${destination.country}`} className="h-56 w-full" fittingType="fill" />
          <span className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-full px-4 py-1.5 text-xs font-bold tracking-wide">
            {destination.dates}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-heading font-black uppercase tracking-tight text-xl">{destination.city}</h3>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">{destination.country}</p>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{destination.blurb}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B85C38] group-hover:gap-3 transition-all duration-200">
            Explore <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}