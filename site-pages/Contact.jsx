'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import Pill from '@/components/Pill';
import FaqList from '@/components/FaqList';
import MapPlaceholder from '@/components/MapPlaceholder';
import { contactInfo, contactFaqs, locations } from '@/data/site';

const H2 = 'font-heading font-black uppercase tracking-tight leading-[1.02] text-3xl md:text-5xl';
const fieldCls = 'h-12 w-full rounded-lg border border-[#E5E5E5] bg-white px-4 text-sm outline-none focus:border-[#B85C38] transition-colors placeholder:text-neutral-400';

const topics = ['Booking a trip', 'Partnerships', 'Press', 'Support', 'Something else'];
const nomadTypes = ['Remote worker', 'Freelancer', 'Business owner', 'Other'];

const initialForm = {
  firstName: '', lastName: '', email: '', phone: '',
  topic: '', type: 'Remote worker', message: '', terms: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim() || !form.topic) {
      setError('Please fill in your name, email and a topic.');
      return;
    }
    if (!form.terms) {
      setError('Please accept the Terms to continue.');
      return;
    }
    setError('');
    const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, nomadType: form.type }) });
    const result = await response.json();
    if (!response.ok) { setError(result.error || 'Unable to send your message.'); return; }
    setSent(true);
  };

  const mapsQuery = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#F7E6DF] pt-16 md:pt-24 pb-16 md:pb-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl md:text-7xl">
              Talk to us
            </h1>
            <p className="mt-6 text-neutral-600 max-w-xl mx-auto leading-relaxed">
              The world is wide and the road is long. Send a message and we will answer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <SectionLabel>Inquiry</SectionLabel>
            <h2 className={`${H2} mt-4`}>Contact us</h2>
            <p className="mt-4 text-neutral-600">Send a note about destinations, memberships, or anything else on your mind.</p>
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-[#B85C38] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="font-semibold hover:text-[#B85C38] transition-colors">{contactInfo.email}</a>
                  <p className="text-sm text-neutral-500 mt-1">Questions about trips and bookings.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-[#B85C38] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Phone</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                  <p className="text-sm text-neutral-500 mt-1">{contactInfo.hours}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#B85C38] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Office</p>
                  <p className="font-semibold">{contactInfo.office}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="bg-white border border-[#EDE9E6] rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-[#F7E6DF] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#B85C38]" />
                </span>
                <h3 className="mt-5 font-heading font-black uppercase tracking-tight text-2xl">Message sent</h3>
                <p className="mt-3 text-neutral-600 max-w-sm">
                  Thanks, {form.firstName}. We'll get back to you within one business day.
                </p>
                <Pill variant="ghost" onClick={() => { setForm(initialForm); setSent(false); }} className="mt-8">
                  Send another message
                </Pill>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white border border-[#EDE9E6] rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className={fieldCls} placeholder="First name" value={form.firstName} onChange={set('firstName')} />
                  <input className={fieldCls} placeholder="Last name" value={form.lastName} onChange={set('lastName')} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className={fieldCls} type="email" placeholder="Email" value={form.email} onChange={set('email')} />
                  <input className={fieldCls} type="tel" placeholder="Phone number" value={form.phone} onChange={set('phone')} />
                </div>
                <select className={`${fieldCls} ${form.topic ? 'text-[#1A1A1A]' : 'text-neutral-400'}`} value={form.topic} onChange={set('topic')}>
                  <option value="" disabled>Choose a topic</option>
                  {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <fieldset>
                  <legend className="text-sm font-semibold mb-3">Which best describes you?</legend>
                  <div className="grid grid-cols-2 gap-2.5">
                    {nomadTypes.map((t) => (
                      <label key={t} className={`flex items-center gap-2.5 h-11 px-4 rounded-lg border text-sm cursor-pointer transition-colors ${form.type === t ? 'border-[#B85C38] text-[#B85C38] bg-[#F7E6DF]/50' : 'border-[#E5E5E5] hover:border-neutral-400'}`}>
                        <input type="radio" name="type" value={t} checked={form.type === t} onChange={set('type')} className="accent-[#B85C38]" />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <textarea
                  className="w-full rounded-lg border border-[#E5E5E5] bg-white p-4 text-sm outline-none focus:border-[#B85C38] transition-colors min-h-32 placeholder:text-neutral-400"
                  placeholder="Your message"
                  value={form.message}
                  onChange={set('message')}
                />
                <label className="flex items-center gap-3 text-sm text-neutral-600 cursor-pointer">
                  <input type="checkbox" checked={form.terms} onChange={set('terms')} className="accent-[#B85C38] w-4 h-4" />
                  I accept the <a href="/terms" className="underline hover:text-[#B85C38]">Terms</a>
                </label>
                {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
                <Pill type="submit" variant="terracotta" className="w-full sm:w-auto">Submit</Pill>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Reach us */}
      <section className="py-16 md:py-20 px-5 border-t border-[#EDE9E6]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Reach us</SectionLabel>
            <h2 className={`${H2} mt-4`}>Contact us</h2>
            <p className="mt-4 text-neutral-600">We will answer every message within one business day.</p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="space-y-7">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Email</p>
                  <p className="mt-1 text-sm text-neutral-500">Questions about trips and bookings.</p>
                  <a href={`mailto:${contactInfo.email}`} className="font-semibold hover:text-[#B85C38] transition-colors">{contactInfo.email}</a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Phone</p>
                  <p className="mt-1 text-sm text-neutral-500">Call us Monday through Friday, 9am to 5pm.</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Office</p>
                  <p className="mt-1 text-sm text-neutral-500">Visit our HQ in sunny Sydney, AU.</p>
                  <p className="font-semibold">{contactInfo.office}</p>
                </div>
                <a
                  href={mapsQuery(contactInfo.office)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B85C38] hover:gap-3 transition-all"
                >
                  Get directions <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MapPlaceholder label="Orbitfolk HQ" className="aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 px-5 border-t border-[#EDE9E6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <SectionLabel>Offices</SectionLabel>
            <h2 className={`${H2} mt-4`}>Locations</h2>
            <p className="mt-4 text-neutral-600">Find one of our offline bases near continents.</p>
            <div className="mt-8 bg-white border border-[#EDE9E6] rounded-2xl divide-y divide-[#EDE9E6]">
              {locations.map((loc) => (
                <div key={loc.city} className="p-6">
                  <p className="font-heading font-black uppercase tracking-tight text-lg">{loc.city}</p>
                  <p className="mt-1 text-sm text-neutral-600">{loc.address}</p>
                  <a
                    href={mapsQuery(loc.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#B85C38] hover:gap-3 transition-all"
                  >
                    View on map <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MapPlaceholder label="Global offices" className="aspect-[4/3] md:sticky md:top-28" />
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 px-5 border-t border-[#EDE9E6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className={`${H2} mt-4`}>FAQs</h2>
            <p className="mt-4 text-neutral-600 max-w-md">Quick answers to the questions we hear most from the Orbitfolk community.</p>
            <Pill href="/contact" variant="ghost" className="mt-6">Contact</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList faqs={contactFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA with newsletter */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          <Reveal>
            <h2 className="font-heading font-black uppercase tracking-tight leading-[1.0] text-3xl md:text-5xl">
              The world is still out there
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-600 max-w-md md:ml-auto">
              Where do you want to go next? Pick a destination or just say hello — Orbitfolk is heading out.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:justify-end">
              <Pill href="/destinations" variant="terracotta">Reservations</Pill>
              <Pill href="/join" variant="dark">Join</Pill>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
