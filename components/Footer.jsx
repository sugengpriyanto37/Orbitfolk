'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Header';

const Links = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="bg-white border-t border-[#EDE9E6]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-neutral-500 max-w-xs leading-relaxed">
              Work anywhere together. A community for remote workers who would rather not sit still.
            </p>
          </div>
          <div className="w-full md:w-96">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">Explore</p>
            {subscribed ? (
              <p className="mt-3 text-sm font-semibold text-[#B85C38]">Thanks — you're on the list. See you in the next city.</p>
            ) : (
              <form onSubmit={submit} className="mt-3 flex items-center gap-2 rounded-full border border-[#EDE9E6] bg-[#F8F6F4] p-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 bg-transparent px-4 text-sm outline-none placeholder:text-neutral-400"
                />
                <button type="submit" className="h-10 px-5 rounded-full bg-[#262626] text-white text-sm font-semibold hover:bg-black transition-colors">
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-2 text-xs text-neutral-400">All the good news updates. No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#1A1A1A]">
          {Links.map((item) => (
            <Link key={item.to} href={item.to} className="hover:text-[#B85C38] transition-colors">{item.label}</Link>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#EDE9E6] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-neutral-500">
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-[#B85C38] transition-colors">Privacy policy</Link>
            <Link href="/terms" className="hover:text-[#B85C38] transition-colors">Terms of service</Link>
            <Link href="/privacy" className="hover:text-[#B85C38] transition-colors">Cookies settings</Link>
          </div>
          <p>© 2025 Orbitfolk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}