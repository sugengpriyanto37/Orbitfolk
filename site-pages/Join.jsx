'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, ChevronLeft, Loader2, ShieldCheck } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import Pill from '@/components/Pill';
import { destinations, getDestination } from '@/data/destinations';

const steps = ['Destination', 'Plan', 'Details', 'Payment'];

const underlineInput =
  'w-full rounded-none border-x-0 border-t-0 border-b-2 border-[#E5E5E5] bg-transparent px-0 py-3 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-[#B85C38] focus:shadow-[0_1px_0_0_#B85C38]';

const cardField =
  'h-12 w-full rounded-lg border border-[#E5E5E5] bg-white px-4 text-sm outline-none focus:border-[#B85C38] transition-colors placeholder:text-neutral-400';

export default function Join() {
  const [step, setStep] = useState(0);
  const [destSlug, setDestSlug] = useState('');
  const [planName, setPlanName] = useState('');
  const [details, setDetails] = useState({ name: '', email: '', phone: '', notes: '' });
  const [card, setCard] = useState({ holder: '', number: '', expiry: '', cvc: '' });
  const [processing, setProcessing] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    const prefill = new URLSearchParams(window.location.search).get('destination');
    if (destinations.some((d) => d.slug === prefill)) {
      setDestSlug(prefill);
      setStep(1);
    }
  }, []);

  const dest = getDestination(destSlug);
  const plan = dest ? dest.plans.find((p) => p.name === planName) : null;

  const canContinue =
    step === 0 ? !!destSlug :
    step === 1 ? !!planName :
    step === 2 ? details.name.trim() && details.email.trim() :
    card.holder.trim() && card.number.trim() && card.expiry.trim() && card.cvc.trim();

  const complete = () => {
    setProcessing(true);
    setTimeout(() => {
      setBookingRef(`OF-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
      setProcessing(false);
      setStep(4);
    }, 1600);
  };

  // Confirmation — ticket layout
  if (step === 4 && dest && plan) {
    const bars = [3, 1, 2, 1, 1, 3, 2, 1, 3, 1, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 1, 2];
    return (
      <div className="pt-16 md:pt-24 pb-24 px-5">
        <div className="max-w-xl mx-auto">
          <Reveal>
            <div className="text-center">
              <span className="mx-auto w-16 h-16 rounded-full bg-[#F7E6DF] flex items-center justify-center">
                <Check className="w-8 h-8 text-[#B85C38]" />
              </span>
              <h1 className="mt-6 font-heading font-black uppercase tracking-tight text-3xl md:text-5xl">You're in!</h1>
              <p className="mt-3 text-neutral-600">Your spot is reserved. A confirmation would land in your inbox shortly.</p>
            </div>
            <div className="mt-10 bg-white border border-[#EDE9E6] rounded-3xl overflow-hidden shadow-xl shadow-neutral-200/50">
              <div className="bg-[#262626] text-white p-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">Boarding pass · Orbitfolk</p>
                <p className="mt-2 font-heading font-black uppercase tracking-tight text-3xl md:text-4xl">{dest.city}, {dest.country}</p>
                <p className="mt-1 text-white/70 text-sm">{dest.dates} · {dest.month}</p>
              </div>
              <div className="p-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Plan</p>
                  <p className="mt-1 font-bold">{plan.name}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Price</p>
                  <p className="mt-1 font-bold">{plan.price} /month</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Lead</p>
                  <p className="mt-1 font-bold">{details.name || '—'}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Booking ref</p>
                  <p className="mt-1 font-bold">{bookingRef}</p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <div className="border-t-2 border-dashed border-[#E5E5E5] pt-6">
                  <div className="flex items-end gap-[3px] h-14">
                    {bars.map((w, i) => (
                      <span key={i} className="bg-[#1A1A1A] h-full" style={{ width: `${w * 2}px` }} />
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-neutral-500 text-center">
                    Demo checkout — no payment was processed and no spot is held yet.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Pill href="/destinations" variant="ghost">Back to destinations</Pill>
              <Pill href="/" variant="terracotta">Home</Pill>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-10 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl md:text-7xl">
              Join Orbitfolk
            </h1>
            <p className="mt-6 text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Reserve your spot in three minutes. Demo checkout — no payment is processed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stepper */}
      <section className="px-5">
        <ol className="flex items-center justify-center max-w-3xl mx-auto">
          {steps.map((label, i) => (
            <li key={label} className="flex items-center">
              <div className="flex flex-col items-center gap-2 px-2 md:px-6">
                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  i < step ? 'bg-[#B85C38] text-white' : i === step ? 'bg-[#1A1A1A] text-white' : 'bg-white border border-[#E5E5E5] text-neutral-400'
                }`}>
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </span>
                <span className={`text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] ${i <= step ? 'text-[#1A1A1A]' : 'text-neutral-400'}`}>
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span className={`w-6 md:w-16 h-0.5 mb-6 transition-colors ${i < step ? 'bg-[#B85C38]' : 'bg-[#E5E5E5]'}`} />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Step content */}
      <section className="pt-10 pb-24 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Step 1 — destination */}
          {step === 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => setDestSlug(d.slug)}
                  className={`text-left rounded-2xl overflow-hidden border-2 bg-white transition-all duration-200 ${
                    destSlug === d.slug ? 'border-[#B85C38] shadow-lg shadow-neutral-200/60' : 'border-[#EDE9E6] hover:border-neutral-300'
                  }`}
                >
                  <Image src={d.image} alt={d.city} className="h-28 w-full" fittingType="fill" />
                  <div className="p-4">
                    <p className="font-heading font-black uppercase text-sm tracking-tight">{d.city}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{d.country} · {d.dates} · {d.month}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2 — plan */}
          {step === 1 && dest && (
            <div className="grid md:grid-cols-2 gap-6">
              {dest.plans.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setPlanName(p.name)}
                  className={`text-left bg-white rounded-2xl p-8 border-2 transition-all duration-200 ${
                    planName === p.name ? 'border-[#B85C38] shadow-lg shadow-neutral-200/60' : 'border-[#EDE9E6] hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">{p.name}</p>
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${planName === p.name ? 'border-[#B85C38] bg-[#B85C38]' : 'border-[#E5E5E5]'}`}>
                      {planName === p.name && <Check className="w-3 h-3 text-white" />}
                    </span>
                  </div>
                  <p className="mt-3 font-heading font-black tracking-tight text-4xl">
                    {p.price}
                    <span className="text-sm font-semibold text-neutral-400 normal-case tracking-normal"> /month</span>
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-neutral-600">
                        <Check className="w-4 h-4 text-[#B85C38] mt-0.5 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          )}

          {/* Step 3 — details */}
          {step === 2 && (
            <div className="max-w-xl mx-auto bg-white border border-[#EDE9E6] rounded-2xl p-8 md:p-10 space-y-7">
              <input
                className={underlineInput}
                placeholder="Full name"
                value={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
              />
              <input
                className={underlineInput}
                type="email"
                placeholder="Email"
                value={details.email}
                onChange={(e) => setDetails({ ...details, email: e.target.value })}
              />
              <input
                className={underlineInput}
                type="tel"
                placeholder="Phone (optional)"
                value={details.phone}
                onChange={(e) => setDetails({ ...details, phone: e.target.value })}
              />
              <input
                className={underlineInput}
                placeholder="Anything we should know? (optional)"
                value={details.notes}
                onChange={(e) => setDetails({ ...details, notes: e.target.value })}
              />
            </div>
          )}

          {/* Step 4 — payment */}
          {step === 3 && dest && plan && (
            <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3 bg-white border border-[#EDE9E6] rounded-2xl p-8 space-y-6">
                <input
                  className={cardField}
                  placeholder="Name on card"
                  value={card.holder}
                  onChange={(e) => setCard({ ...card, holder: e.target.value })}
                />
                <input
                  className={cardField}
                  placeholder="Card number"
                  inputMode="numeric"
                  value={card.number}
                  onChange={(e) => setCard({ ...card, number: e.target.value.replace(/[^\d ]/g, '').slice(0, 19) })}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className={cardField}
                    placeholder="MM / YY"
                    inputMode="numeric"
                    value={card.expiry}
                    onChange={(e) => setCard({ ...card, expiry: e.target.value.slice(0, 7) })}
                  />
                  <input
                    className={cardField}
                    placeholder="CVC"
                    inputMode="numeric"
                    value={card.cvc}
                    onChange={(e) => setCard({ ...card, cvc: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                  />
                </div>
                <p className="flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-[#B85C38]" />
                  Demo checkout — no payment is processed and no card data is stored.
                </p>
              </div>
              <div className="md:col-span-2 bg-[#F7E6DF] rounded-2xl p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">Summary</p>
                <p className="mt-3 font-heading font-black uppercase tracking-tight text-xl">{dest.city}</p>
                <p className="text-sm text-neutral-600 mt-1">{dest.dates} · {dest.month}</p>
                <div className="mt-5 pt-5 border-t border-[#EBCFBE] space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-neutral-600">{plan.name}</span><span className="font-bold">{plan.price}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-600">Deposit due now</span><span className="font-bold">$0</span></div>
                </div>
              </div>
            </div>
          )}

          {/* Nav */}
          <div className="max-w-4xl mx-auto mt-10 flex items-center justify-between">
            {step > 0 ? (
              <Pill variant="ghost" onClick={() => setStep(step - 1)}>
                <ChevronLeft className="w-4 h-4" /> Back
              </Pill>
            ) : (
              <Link href="/destinations" className="text-sm font-semibold text-neutral-500 hover:text-[#B85C38] transition-colors">
                Browse destinations instead
              </Link>
            )}
            {step < 3 ? (
              <Pill variant="terracotta" onClick={() => canContinue && setStep(step + 1)} className={!canContinue ? 'opacity-40 cursor-not-allowed' : ''}>
                Continue
              </Pill>
            ) : (
              <Pill variant="terracotta" onClick={complete} className={!canContinue || processing ? 'opacity-40 cursor-not-allowed' : ''}>
                {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Complete booking'}
              </Pill>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
