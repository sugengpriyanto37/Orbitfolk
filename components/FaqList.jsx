'use client';

export default function FaqList({ faqs, className = '' }) {
  return (
    <div className={className}>
      {faqs.map((faq, i) => (
        <details key={i} className="border-b border-[#EDE9E6] last:border-none group">
          <summary className="cursor-pointer list-none text-left text-sm md:text-base font-bold uppercase tracking-tight py-5 pr-8 relative">
            {faq.q}
            <span className="absolute right-1 top-5 text-xl font-normal group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="text-sm text-neutral-600 leading-relaxed pb-5">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
