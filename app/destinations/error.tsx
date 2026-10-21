"use client";

export default function DestinationsError({ reset }: { reset: () => void }) {
  return <main className="min-h-screen bg-[#FDFCFB] px-5 py-24 text-center"><h1 className="font-heading font-black uppercase tracking-tight text-4xl">Destinations are taking a moment</h1><p className="mt-4 text-neutral-600">Please try loading the trip list again.</p><button onClick={() => reset()} className="mt-7 h-12 rounded-full bg-[#B85C38] px-7 text-sm font-semibold text-white">Retry</button></main>;
}
