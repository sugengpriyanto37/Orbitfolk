'use client';

import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import Pill from '@/components/Pill';
import DestinationCard from '@/components/DestinationCard';
import TestimonialCard from '@/components/TestimonialCard';
import CtaSection from '@/components/CtaSection';
import { IMG } from '@/data/images';
import { aboutFeatures, stepsToGo, voices, featuredSlugs } from '@/data/site';
import { getDestination } from '@/data/destinations';

const H2 = 'font-heading font-black uppercase tracking-tight leading-[1.02] text-3xl md:text-5xl';

export default function About() {
  const featured = featuredSlugs.map(getDestination).filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="pt-16 md:pt-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="font-heading font-black uppercase tracking-tight leading-[0.98] text-4xl md:text-6xl">
                Work remote, live adventurously, find your tribe
              </h1>
              <p className="mt-6 text-neutral-600 max-w-xl leading-relaxed">
                We help remote workers travel to great places, live well, and work better — together.
              </p>
              <Pill href="/join" className="mt-8">Join</Pill>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Image src={IMG.aboutHero} alt="Two friends walking through a sunlit city" className="mt-12 rounded-3xl aspect-[16/8] w-full" />
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <SectionLabel>Mission</SectionLabel>
            <h2 className={`${H2} mt-4`}>Travel with purpose</h2>
            <p className="mt-5 text-neutral-600 leading-relaxed max-w-lg">
              Travel alone has its limits. Orbitfolk combines slow, curated trips with practical structure: rooms chosen
              for work, hosts who know the city, and a community that shows up. Where you stay shapes what you build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href="/destinations" variant="ghost">Explore</Pill>
              <Pill href="/contact" variant="ghost" arrow>Contact</Pill>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Image src={IMG.workspace} alt="Coworking space in a historic building" className="rounded-3xl aspect-[4/3] w-full" />
          </Reveal>
        </div>
      </section>

      {/* Places */}
      <section className="pb-16 md:pb-20 px-5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Places</SectionLabel>
            <h2 className={`${H2} mt-4`}>Places chosen for work and calm</h2>
            <p className="mt-4 text-neutral-600 max-w-lg">Every destination is scouted in person, twice. Once for the city, once for the rooms.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Image src={IMG.marrakech} alt="A calm, sunlit destination" className="mt-10 rounded-3xl aspect-[16/8] w-full" />
          </Reveal>
        </div>
      </section>

      {/* Alternating feature rows */}
      {aboutFeatures.map((f, i) => (
        <section key={f.label} className="py-12 md:py-16 px-5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
              <SectionLabel>{f.label}</SectionLabel>
              <h2 className={`${H2} mt-4 !text-2xl md:!text-4xl`}>{f.title}</h2>
              <p className="mt-4 text-neutral-600 leading-relaxed max-w-md">{f.text}</p>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 === 1 ? 'md:order-1' : ''}>
              <Image src={f.img} alt={f.title} className="rounded-3xl aspect-[4/3] w-full" />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Three steps to go */}
      <section className="bg-[#F7E6DF] py-20 md:py-28 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel className="!text-[#B85C38]">Steps</SectionLabel>
              <h2 className={`${H2} mt-4`}>Three steps to go</h2>
              <p className="mt-4 text-neutral-600">From browsing to boarding in three simple moves.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {stepsToGo.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="h-full bg-white rounded-2xl p-8">
                  <p className="font-heading font-black tracking-tight text-5xl text-[#B85C38]">{i + 1}</p>
                  <p className="mt-4 font-bold uppercase text-sm tracking-tight">{step.title}</p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="py-20 md:py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Featured</SectionLabel>
            <h2 className={`${H2} mt-4`}>Featured destinations</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((d) => <DestinationCard key={d.slug} destination={d} />)}
          </div>
          <Pill href="/destinations" variant="dark" arrow className="mt-10">View all destinations</Pill>
        </div>
      </section>

      {/* Nomad stories */}
      <section className="pb-20 md:pb-24 px-5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Voices</SectionLabel>
            <h2 className={`${H2} mt-4`}>Nomad stories</h2>
            <p className="mt-4 text-neutral-600">Honest words. Real work. Wild places.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {voices.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Your next chapter starts now"
        text="One month can change how you work for years. Pick a destination, pack a bag, and come work with us."
        actions={[
          { label: 'Join', to: '/join', variant: 'terracotta' },
          { label: 'Contact', to: '/contact', variant: 'dark' },
        ]}
      />
    </div>
  );
}