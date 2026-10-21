import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CheckEmailPage({ searchParams }: { searchParams: Promise<{ email?: string; next?: string }> }) {
  const { email, next } = await searchParams;
  const signInHref = next ? `/login?next=${encodeURIComponent(next)}` : "/login";

  return (
    <main className="min-h-screen bg-[#FDFCFB] px-5 py-16 flex items-center justify-center">
      <section className="w-full max-w-md rounded-3xl border border-[#EDE9E6] bg-white p-8 text-center shadow-xl shadow-neutral-200/30 md:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F7E6DF] text-3xl" aria-hidden="true">✉</span>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B85C38]">Almost there</p>
        <h1 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight">Check your inbox</h1>
        <p className="mt-5 text-neutral-600 leading-relaxed">
          We sent a confirmation link to <span className="font-semibold text-[#1A1A1A]">{email || "your email address"}</span>. Confirm your account, then sign in to continue your trip.
        </p>
        <div className="mt-8 rounded-2xl bg-[#FDF8F5] p-4 text-left text-sm text-neutral-600">
          <p className="font-semibold text-[#8D452D]">Didn’t see it?</p>
          <p className="mt-1">Check your spam folder or wait a few minutes before trying again.</p>
        </div>
        <Link href={signInHref} className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#B85C38] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#9E4E2F]">Continue to sign in</Link>
        <Link href="/" className="mt-5 inline-block text-sm font-semibold text-neutral-500 transition-colors hover:text-[#B85C38]">Back to Orbitfolk</Link>
      </section>
    </main>
  );
}
