'use client';

import Link from 'next/link';

const content = {
  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: January 2025',
    paragraphs: [
      'Orbitfolk respects your privacy. We collect only the information you choose to share with us — your name, email address, and any details you include in a message or booking request — and we use it solely to answer you, organize trips you have asked about, and send updates you have subscribed to.',
      'We never sell your data, and we never share it with third parties beyond the partners strictly required to run a trip you have joined (for example, the room provider in your destination city).',
      'You can unsubscribe from our newsletter at any time using the Link in every email, and you can ask us to delete any information we hold about you by contacting hello@orbitfolk.com.',
      'This site itself does not run advertising trackers. Essential cookies are used only to keep the site working and to remember your preferences.',
    ],
  },
  terms: {
    title: 'Terms of service',
    updated: 'Last updated: January 2025',
    paragraphs: [
      'Welcome to Orbitfolk. By using this website you agree to the terms below. They are intentionally written in plain language — if anything is unclear, contact us and we will gladly explain.',
      'Reservations made on this site are demo reservations: no payment is processed and no spot is held until you complete an actual booking with our team.',
      'Trip prices include the room, coworking access, weekly events and on-ground support as described on each destination page. Flights, visas and most meals are not included.',
      'Destinations can be changed up to 30 days before departure, subject to availability. If we ever have to cancel a trip, you receive a full refund of anything you have paid.',
      'We expect every member to treat the places we stay in, and the people we share them with, with respect. Orbitfolk may end a membership for repeated violations of that expectation.',
    ],
  },
};

export default function Legal({ doc = 'privacy' }) {
  const c = content[doc] || content.privacy;
  return (
    <div className="max-w-3xl mx-auto px-5 py-20 md:py-28">
      <Link href="/" className="text-sm font-semibold text-neutral-500 hover:text-[#B85C38] transition-colors">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-heading font-black uppercase tracking-tight leading-[0.98] text-4xl md:text-6xl">{c.title}</h1>
      <p className="mt-4 text-sm text-neutral-500">{c.updated}</p>
      <div className="mt-10 space-y-6 text-neutral-600 leading-relaxed">
        {c.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  );
}