'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const variants = {
  terracotta: 'bg-[#B85C38] text-white hover:bg-[#9E4E2F]',
  dark: 'bg-[#262626] text-white hover:bg-black',
  ghost: 'bg-white text-[#1A1A1A] border border-[#E0E0E0] hover:border-[#1A1A1A]',
  pink: 'bg-[#F7E6DF] text-[#1A1A1A] hover:bg-[#F1D8CD]',
};

// Pill-shaped CTA used everywhere on the site. Pass `to` for a Link, else onClick/type for a button.
export default function Pill({ href, to, onClick, children, variant = 'terracotta', className = '', type = 'button', arrow = false }) {
  const cls = `inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </>
  );
  const linkHref = href || to;
  if (linkHref) return <Link href={linkHref} className={cls}>{inner}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}
