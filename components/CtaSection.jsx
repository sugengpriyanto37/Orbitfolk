'use client';

import Reveal from './Reveal';
import Pill from './Pill';

// Shared closing call-to-action band: heading left, copy + actions right.
export default function CtaSection({ title, text, actions = [], tone = 'cream' }) {
  const tones = {
    cream: 'bg-[#FDFCFB]',
    pink: 'bg-[#F7E6DF]',
  };
  return (
    <section className={`${tones[tone]} py-20 md:py-28 px-5`}>
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 md:gap-16 items-end">
        <Reveal>
          <h2 className="font-heading font-black uppercase tracking-tight leading-[1.0] text-3xl md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-neutral-600 leading-relaxed max-w-md md:ml-auto">{text}</p>
          <div className="mt-6 flex flex-wrap gap-3 md:justify-end">
            {actions.map((action, i) => (
              <Pill key={action.label} href={action.to} variant={action.variant || (i === 0 ? 'terracotta' : 'ghost')} arrow={action.arrow}>
                {action.label}
              </Pill>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
