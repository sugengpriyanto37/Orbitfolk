'use client';

import { Compass, Users, Globe2, Camera } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import Pill from '@/components/Pill';
import TestimonialCard from '@/components/TestimonialCard';
import CtaSection from '@/components/CtaSection';
import { IMG } from '@/data/images';
import { stats, team, voices } from '@/data/site';

const H2 = 'font-heading font-black uppercase tracking-tight leading-[1.02] text-3xl md:text-5xl';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-5xl md:text-8xl">
              Work anywhere together
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Orbitfolk helps you keep working from great places that people don't want to leave. Without the guesswork.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex justify-center gap-3">
              <Pill href="/destinations" variant="dark" arrow>Explore destinations</Pill>
              <Pill href="/join">Join a trip</Pill>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <SectionLabel>Story</SectionLabel>
            <h2 className={`${H2} mt-4`}>We built the road we wanted to travel</h2>
            <p className="mt-5 text-neutral-600 leading-relaxed max-w-lg">
              Orbitfolk started with a simple truth: remote work gave us freedom, but not always the right people or
              places. So we built the thing we wished existed — flexible living, real connection, and cities worth
              leaving home for.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <Compass className="w-6 h-6 text-[#B85C38]" />
                <p className="mt-3 font-bold uppercase text-sm tracking-tight">Curated</p>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  We choose great cities, vet every room, and keep the pace steady so work actually happens.
                </p>
              </div>
              <div>
                <Users className="w-6 h-6 text-[#B85C38]" />
                <p className="mt-3 font-bold uppercase text-sm tracking-tight">Connections</p>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Around 25 nomads per month, one tribe — a shared life on the road.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Pill href="/destinations" variant="ghost">Destinations</Pill>
              <Pill href="/about" variant="ghost" arrow>More</Pill>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Image src={IMG.story} alt="A nomad working by a large window" className="rounded-3xl aspect-[4/3] md:aspect-square w-full" />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 md:pb-28 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <SectionLabel>Facts</SectionLabel>
            <h2 className={`${H2} mt-4`}>The numbers behind the movement</h2>
            <p className="mt-5 text-neutral-600 leading-relaxed max-w-lg">
              We measure what matters: growing rows, more places to land, and focus that actually happens.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href="/destinations" variant="ghost">Explore</Pill>
              <Pill href="/how-it-works" variant="ghost" arrow>More</Pill>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-px bg-[#EDE9E6] rounded-2xl overflow-hidden border border-[#EDE9E6]">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-white">
                <div className="p-8 md:p-10 h-full">
                  <p className="font-heading font-black tracking-tight text-4xl md:text-6xl">{s.value}</p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F7E6DF] py-20 md:py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel className="!text-[#B85C38]">Team</SectionLabel>
              <h2 className={`${H2} mt-4`}>Our team</h2>
              <p className="mt-4 text-neutral-600">The people who keep the road smooth and the tables full.</p>
            </Reveal>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => {
              const initials = member.name.split(' ').map((n) => n[0]).join('');
              return (
                <Reveal key={member.name} delay={(i % 3) * 0.08}>
                  <div className="bg-white rounded-2xl p-7 text-center h-full flex flex-col">
                    <span className="mx-auto w-16 h-16 rounded-full bg-[#F7E6DF] text-[#B85C38] font-black flex items-center justify-center shrink-0">
                      {initials}
                    </span>
                    <p className="mt-4 font-bold">{member.name}</p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">{member.role}</p>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">{member.bio}</p>
                    <div className="mt-5 flex justify-center gap-4 text-neutral-400">
                      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="hover:text-[#B85C38] transition-colors">
                        <Globe2 className="w-4 h-4" />
                      </a>
                      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label={`${member.name} on Instagram`} className="hover:text-[#B85C38] transition-colors">
                        <Camera className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Reveal>
              <h3 className="font-heading font-black uppercase tracking-tight text-2xl md:text-4xl">We're hiring!</h3>
              <p className="mt-3 text-neutral-600">Come build the future of remote work with us.</p>
              <Pill href="/contact" variant="dark" className="mt-7">Open positions</Pill>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Community voices */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className={`${H2} mt-4`}>Community voices</h2>
            <p className="mt-4 text-neutral-600 max-w-lg">Real words from members on the road.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {voices.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Find your people and place"
        text="Stop guessing where to go next. Join a community that moves with purpose."
        actions={[
          { label: 'Explore', to: '/destinations', variant: 'dark' },
          { label: 'Contact', to: '/contact', variant: 'terracotta' },
        ]}
      />
    </div>
  );
}
