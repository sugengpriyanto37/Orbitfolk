'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import Pill from '@/components/Pill';
import TestimonialCard from '@/components/TestimonialCard';
import CtaSection from '@/components/CtaSection';
import MapPlaceholder from '@/components/MapPlaceholder';
import { IMG } from '@/data/images';
import { joinSteps, stayFeatures, communityStats, memberStories, contactInfo } from '@/data/site';

const H2 = 'font-heading font-black uppercase tracking-tight leading-[1.02] text-3xl md:text-5xl';

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl md:text-7xl">
              Join Orbitfolk
            </h1>
            <p className="mt-6 text-neutral-600 max-w-xl mx-auto leading-relaxed">
              The process is simple. Browse destinations, choose a trip, prepare, arrive. Four steps and you're on your way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Four steps */}
      <section className="pb-16 md:pb-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel>Process</SectionLabel>
              <h2 className={`${H2} mt-4`}>Four steps to join</h2>
              <p className="mt-4 text-neutral-600">No complicated forms. No long webinars. Just four steps.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {joinSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="h-full bg-white border border-[#EDE9E6] rounded-2xl p-7 flex flex-col">
                  <span className="w-11 h-11 rounded-xl bg-[#F7E6DF] flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#B85C38]" />
                  </span>
                  <p className="mt-4 font-bold uppercase text-sm tracking-tight">{step.title}</p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">{step.text}</p>
                  <Link href="/destinations" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B85C38] hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A good room in a good city */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel>Stay</SectionLabel>
              <h2 className={`${H2} mt-4`}>A good room in a good city</h2>
              <p className="mt-4 text-neutral-600">We handle the boring parts so your month feels like a month off, with better output.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 items-center">
            <div className="grid gap-6 order-2 md:order-1">
              {stayFeatures.slice(0, 2).map((f) => (
                <Reveal key={f.title}>
                  <div className="bg-white border border-[#EDE9E6] rounded-2xl p-6">
                    <f.icon className="w-6 h-6 text-[#B85C38]" />
                    <p className="mt-3 font-bold uppercase text-sm tracking-tight">{f.title}</p>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="order-1 md:order-2">
              <Image src={IMG.room} alt="A room ready on arrival" className="rounded-3xl aspect-square w-full" />
            </Reveal>
            <div className="grid gap-6 order-3">
              {stayFeatures.slice(2).map((f) => (
                <Reveal key={f.title}>
                  <div className="bg-white border border-[#EDE9E6] rounded-2xl p-6">
                    <f.icon className="w-6 h-6 text-[#B85C38]" />
                    <p className="mt-3 font-bold uppercase text-sm tracking-tight">{f.title}</p>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Pill href="/join" variant="terracotta">Book</Pill>
              <Pill href="/destinations" variant="ghost" arrow>View</Pill>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Community by the numbers */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Facts</SectionLabel>
            <h2 className={`${H2} mt-4`}>The community by the numbers</h2>
            <p className="mt-4 text-neutral-600 max-w-lg">We've been doing this for a while now. The numbers tell a pretty strong story: the people keep showing up, and together they keep going to great places.</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {communityStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="bg-[#F7E6DF] rounded-2xl p-8 md:p-10">
                  <p className="font-heading font-black tracking-tight text-4xl md:text-6xl">{s.value}</p>
                  <p className="mt-3 font-bold uppercase text-sm tracking-tight">{s.label}</p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Member stories */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Voices</SectionLabel>
            <h2 className={`${H2} mt-4`}>Member stories</h2>
            <p className="mt-4 text-neutral-600">Not just travel. Real work, real outcomes.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {memberStories.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Find your next destination"
        text="Browse the places we're going this year. Book your ticket. Then book your flight."
        actions={[
          { label: 'Explore', to: '/destinations', variant: 'dark' },
          { label: 'Reserve', to: '/join', variant: 'terracotta' },
        ]}
      />

      {/* Contact strip */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className={`${H2} mt-4`}>Contact us</h2>
            <p className="mt-4 text-neutral-600">Questions about a destination or the process? Reach out anytime.</p>
            <div className="mt-8 space-y-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="mt-1 block font-semibold hover:text-[#B85C38] transition-colors">{contactInfo.email}</a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Phone</p>
                <p className="mt-1 text-sm text-neutral-600">{contactInfo.hours}</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Office</p>
                <p className="mt-1 text-sm text-neutral-600">{contactInfo.office}</p>
              </div>
            </div>
            <Pill href="/contact" variant="ghost" arrow className="mt-8">Get directions</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <MapPlaceholder label="Orbitfolk HQ" className="aspect-[4/3]" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}