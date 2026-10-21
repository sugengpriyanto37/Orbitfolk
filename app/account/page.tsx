import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/supabase/rest";
import { listUserBookings } from "@/lib/supabase/data";
import { logoutAction } from "./actions";

export const dynamic = "force-dynamic";

type Booking = {
  id: string;
  status: string;
  total_cents: number;
  currency: string;
  destinations?: { city: string; country: string };
  trip_plans?: { name: string };
};

export default async function AccountPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const name = user.user_metadata?.full_name || user.email || "member";
  const bookings = await listUserBookings();
  return (
    <main className="min-h-screen bg-[#FDFCFB] px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link href="/" className="text-sm font-semibold text-neutral-500 hover:text-[#B85C38]">← Back to Orbitfolk</Link>
            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B85C38]">Your Orbitfolk</p>
            <h1 className="mt-3 font-heading font-black uppercase tracking-tight text-4xl md:text-6xl">Welcome, {name}</h1>
          </div>
          <form action={logoutAction}><button className="rounded-full border border-[#E0E0E0] bg-white px-5 py-3 text-sm font-semibold hover:border-[#B85C38]">Sign out</button></form>
        </div>
        <section className="mt-12 rounded-2xl border border-[#EDE9E6] bg-white p-8">
          <h2 className="font-heading font-black uppercase tracking-tight text-2xl">Your bookings</h2>
          {bookings.length === 0 ? (
            <>
              <p className="mt-3 text-neutral-600">Your confirmed trips will appear here. Start by exploring the next destination.</p>
              <Link href="/destinations" className="mt-7 inline-flex h-12 items-center rounded-full bg-[#B85C38] px-7 text-sm font-semibold text-white hover:bg-[#9E4E2F]">Explore destinations</Link>
            </>
          ) : (
            <div className="mt-6 space-y-3">
              {bookings.map((booking: Booking) => (
                <div key={booking.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#EDE9E6] p-5">
                  <div><p className="font-bold">{booking.destinations?.city}, {booking.destinations?.country}</p><p className="mt-1 text-sm text-neutral-500">{booking.trip_plans?.name} · {booking.status}</p></div>
                  <p className="font-semibold">{booking.currency} {(booking.total_cents / 100).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
