import Link from "next/link";
import { loginAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; message?: string; next?: string }> }) {
  const { error, message, next } = await searchParams;
  return (
    <main className="min-h-screen bg-[#FDFCFB] px-5 py-16 flex items-center justify-center">
      <section className="w-full max-w-md bg-white border border-[#EDE9E6] rounded-2xl p-8 md:p-10">
        <Link href="/" className="text-sm font-semibold text-neutral-500 hover:text-[#B85C38]">← Back to Orbitfolk</Link>
        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B85C38]">Welcome back</p>
        <h1 className="mt-3 font-heading font-black uppercase tracking-tight text-4xl">Sign in</h1>
        <p className="mt-4 text-neutral-600">Sign in to manage your Orbitfolk bookings.</p>
        {error && <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        {message && <p className="mt-5 rounded-lg bg-[#F7E6DF] px-4 py-3 text-sm text-[#8D452D]">{message}</p>}
        <form action={loginAction} className="mt-8 space-y-5">
          <input type="hidden" name="next" value={next || ''} />
          <label className="block text-sm font-semibold">Email<input name="email" type="email" required className="mt-2 h-12 w-full rounded-lg border border-[#E5E5E5] px-4 font-normal outline-none focus:border-[#B85C38]" /></label>
          <label className="block text-sm font-semibold">Password<input name="password" type="password" required minLength={6} className="mt-2 h-12 w-full rounded-lg border border-[#E5E5E5] px-4 font-normal outline-none focus:border-[#B85C38]" /></label>
          <button type="submit" className="h-12 w-full rounded-full bg-[#B85C38] font-semibold text-white hover:bg-[#9E4E2F] transition-colors">Sign in</button>
        </form>
        <p className="mt-8 text-sm text-neutral-600">New to Orbitfolk? <Link href="/register" className="font-semibold text-[#B85C38]">Create an account</Link></p>
      </section>
    </main>
  );
}
