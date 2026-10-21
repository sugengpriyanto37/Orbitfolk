'use client';

import Link from 'next/link';
import { ArrowLeft, BedDouble, Wifi, Check } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import Pill from '@/components/Pill';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import { getDestination } from '@/data/destinations';
import { included, detailFaqs } from '@/data/site';

const H2 = 'font-heading font-black uppercase tracking-tight leading-[1.02] text-3xl md:text-5xl';

export default function DestinationDetail({ slug }) {
  const dest = getDestination(slug);

  if (!dest) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-24 text-center">
        <h1 className="font-heading font-black uppercase tracking-tight text-4xl md:text-6xl">Destination not found</h1>
        <p className="mt-4 text-neutral-600">The trip you're looking for may have moved on to the next city.</p>
        <Pill href="/destinations" variant="dark" className="mt-8">All destinations</Pill>
      </div>
    );
  }

  const faqs = [...dest.cityFaqs, ...detailFaqs];
  const weatherStats = [
    { value: dest.weather.sun, label: 'Days of sun' },
    { value: dest.weather.temp, label: 'Average temp' },
    { value: dest.weather.wifi, label: 'Avg Wi-Fi speed' },
  ];

  return (
    <div>
      {/* Title */}
      <section className="pt-12 md:pt-20 px-5">
        <div className="max-w-7xl mx-auto">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-[#B85C38] transition-colors">
            <ArrowLeft className="w-4 h-4" /> All destinations
          </Link>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl md:text-7xl">
                {dest.city}, {dest.country}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="inline-flex h-11 px-6 items-center rounded-full bg-white border border-[#E0E0E0] text-sm font-bold tracking-wide">
                {dest.dates} · {dest.month}
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* See city */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionLabel>City</SectionLabel>
            <h2 className={`${H2} mt-4`}>See {dest.city}</h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">{dest.intro}</p>
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-3 gap-4">
          <Reveal className="md:col-span-2">
            <Image src={dest.gallery[0]} alt={dest.city} className="rounded-2xl h-64 md:h-96 w-full" />
          </Reveal>
          <div className="grid gap-4">
            <Reveal delay={0.08}><Image src={dest.gallery[1]} alt={`${dest.city} workspace`} className="rounded-2xl h-40 md:h-44 w-full" /></Reveal>
            <Reveal delay={0.16}><Image src={dest.gallery[2]} alt={`${dest.city} community`} className="rounded-2xl h-40 md:h-44 w-full" /></Reveal>
          </div>
        </div>
      </section>

      {/* Built for real work */}
      <section className="pb-16 md:pb-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel>Your stay</SectionLabel>
              <h2 className={`${H2} mt-4`}>Built for real work</h2>
              <p className="mt-5 text-neutral-600 leading-relaxed">
                Your month comes with a room that's ready when you land, and a workspace that doesn't fight your calendar.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white border border-[#E0E0E0] text-sm font-semibold">
                  <BedDouble className="w-4 h-4 text-[#B85C38]" /> Room included
                </span>
                <span className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white border border-[#E0E0E0] text-sm font-semibold">
                  <Wifi className="w-4 h-4 text-[#B85C38]" /> Fast, reliable Wi-Fi
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Image src={dest.gallery[1]} alt={`Coworking in ${dest.city}`} className="mt-10 rounded-3xl aspect-[16/8] w-full" />
          </Reveal>
        </div>
      </section>

      {/* Weather */}
      <section className="pb-16 md:pb-20 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <SectionLabel>Weather</SectionLabel>
            <h2 className={`${H2} mt-4`}>{dest.weather.headline}</h2>
            <p className="mt-5 text-neutral-600 leading-relaxed max-w-lg">{dest.weather.note}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-px bg-[#EDE9E6] rounded-2xl overflow-hidden border border-[#EDE9E6]">
              {weatherStats.map((s) => (
                <div key={s.label} className="bg-white p-6 md:p-8">
                  <p className="font-heading font-black tracking-tight text-2xl md:text-4xl">{s.value}</p>
                  <p className="mt-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Included */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel>Included</SectionLabel>
              <h2 className={`${H2} mt-4`}>Everything you need</h2>
              <p className="mt-5 text-neutral-600">A room, a desk and a tribe — sorted before you land.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full bg-white border border-[#EDE9E6] rounded-2xl p-7">
                  <span className="w-11 h-11 rounded-xl bg-[#F7E6DF] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#B85C38]" />
                  </span>
                  <p className="mt-4 font-bold uppercase text-sm tracking-tight">{item.title}</p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#F7E6DF] py-20 md:py-28 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel className="!text-[#B85C38]">Pricing</SectionLabel>
              <h2 className={`${H2} mt-4`}>Simple plans</h2>
              <p className="mt-5 text-neutral-600">Flat monthly pricing that covers the essentials. No hidden fees, ever.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {dest.plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08}>
                <div className="h-full bg-white rounded-2xl p-8 md:p-10 flex flex-col">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">{plan.name}</p>
                  <p className="mt-3 font-heading font-black tracking-tight text-5xl">
                    {plan.price}
                    <span className="text-base font-semibold text-neutral-400 normal-case tracking-normal"> /month</span>
                  </p>
                  <ul className="mt-7 space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-neutral-600">
                        <Check className="w-4 h-4 text-[#B85C38] mt-0.5 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Pill href={`/join?destination=${dest.slug}`} variant={i === 0 ? 'terracotta' : 'dark'} className="mt-9 w-full">
                    Reserve
                  </Pill>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The city */}
      <section className="py-20 md:py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel>Neighborhood</SectionLabel>
              <h2 className={`${H2} mt-4`}>The city</h2>
              <p className="mt-5 text-neutral-600">Quiet streets, good food, and everything you need within walking distance.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {dest.cityImages.map((img, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <Image src={img} alt={`${dest.city} detail ${i + 1}`} className="rounded-2xl h-56 md:h-72 w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20 md:pb-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className={`${H2} mt-4`}>FAQs</h2>
            <p className="mt-4 text-neutral-600 max-w-md">Quick answers to the questions we hear most about this trip.</p>
            <Pill href="/contact" variant="ghost" className="mt-6">Contact</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList faqs={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Your month starts here"
        text={`Reserve your spot in ${dest.city} — the room, the desk and the tribe are waiting.`}
        actions={[
          { label: 'Reserve', to: `/join?destination=${dest.slug}`, variant: 'terracotta' },
          { label: 'Explore', to: '/destinations', variant: 'ghost' },
        ]}
      />
    </div>
  );
}
