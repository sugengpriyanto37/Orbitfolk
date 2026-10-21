'use client';

import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import DestinationCard from '@/components/DestinationCard';
import CtaSection from '@/components/CtaSection';
import { months, monthBlurbs, destinationsByMonth } from '@/data/destinations';

export default function Destinations() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl md:text-7xl">
              Find your next place to work
            </h1>
            <p className="mt-6 text-neutral-600 max-w-xl mx-auto leading-relaxed">
              We pick the cities. You bring the laptop. Every city is vetted for good people, calm and fast internet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Month groups */}
      {months.map((month) => (
        <section key={month} className="px-5 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionLabel>Trips</SectionLabel>
                  <h2 className="mt-2 font-heading font-black uppercase tracking-tight leading-[1.0] text-4xl md:text-6xl">
                    {month}
                  </h2>
                  <p className="mt-3 text-neutral-600">{monthBlurbs[month]}</p>
                </div>
                <span className="hidden md:inline-flex h-11 px-6 items-center rounded-full border border-[#E0E0E0] bg-white text-sm font-semibold text-neutral-500">
                  {destinationsByMonth(month).length} trips · 2027
                </span>
              </div>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinationsByMonth(month).map((d) => (
                <DestinationCard key={d.slug} destination={d} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaSection
        title="Plan your trip"
        text="Tell us where you want to go and we'll save you a seat. Reserve now, decide the details later."
        actions={[
          { label: 'Reserve', to: '/join', variant: 'terracotta' },
          { label: 'Contact', to: '/contact', variant: 'dark' },
        ]}
      />
    </div>
  );
}
