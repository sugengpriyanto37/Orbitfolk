"use client";

export default function Error({ reset }: { reset: () => void }) {
  return <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-5"><div className="max-w-md text-center"><p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B85C38]">Something went wrong</p><h1 className="mt-3 font-heading font-black uppercase tracking-tight text-4xl">Let’s try that again</h1><p className="mt-4 text-neutral-600">We couldn’t load this page right now.</p><button onClick={() => reset()} className="mt-7 h-12 rounded-full bg-[#B85C38] px-7 text-sm font-semibold text-white">Retry</button></div></main>;
}
