'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Orbit } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const nav = [
  { label: 'Destinations', to: '/destinations' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'About us', to: '/about' },
];

const moreLinks = [
  { label: 'Contact', to: '/contact' },
  { label: 'Join a trip', to: '/join' },
];

export function Logo({ light = false }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="w-8 h-8 rounded-full bg-[#B85C38] flex items-center justify-center shrink-0">
        <Orbit className="w-4 h-4 text-white" />
      </span>
      <span className={`font-heading font-black text-lg tracking-tight ${light ? 'text-white' : 'text-[#1A1A1A]'}`}>
        ORBITFOLK
      </span>
    </Link>
  );
}

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef(null);


  useEffect(() => {
    const onClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const linkCls = () => 'text-sm font-semibold transition-colors text-[#1A1A1A] hover:text-[#B85C38]';

  return (
    <header className="sticky top-0 z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#EDE9E6]">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {nav.map((item) => (
            <Link key={item.to} href={item.to} className={linkCls()}>{item.label}</Link>
          ))}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-semibold text-[#1A1A1A] hover:text-[#B85C38] transition-colors"
            >
              More
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                  className="absolute right-0 top-full mt-3 w-44 bg-white border border-[#EDE9E6] rounded-xl shadow-xl shadow-neutral-200/60 p-2"
                >
                  {moreLinks.map((item, i) => (
                    <motion.div key={item.to} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * (i + 1) }}>
                      <Link
                        href={item.to}
                        className="block px-3 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#F7E6DF] hover:text-[#B85C38] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className="hidden md:inline-flex h-11 px-6 items-center rounded-full bg-[#B85C38] text-white text-sm font-semibold hover:bg-[#9E4E2F] transition-colors"
          >
            Join
          </Link>
          <Link href="/login" className="hidden md:inline-flex text-sm font-semibold text-[#1A1A1A] hover:text-[#B85C38]">Sign in</Link>
          <button className="md:hidden p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[#EDE9E6] bg-[#FDFCFB]"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {[...nav, ...moreLinks].map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="px-3 py-3 rounded-lg font-semibold text-[#1A1A1A]"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/join" className="mt-2 h-12 px-6 inline-flex items-center justify-center rounded-full bg-[#B85C38] text-white font-semibold">
                Join
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
