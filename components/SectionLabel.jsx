'use client';

export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 ${className}`}>
      {children}
    </p>
  );
}