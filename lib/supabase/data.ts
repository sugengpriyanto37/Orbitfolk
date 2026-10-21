import { cookies } from "next/headers";
import { z } from "zod";
import { destinations as staticDestinations, getDestination as getStaticDestination } from "@/data/destinations";

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80), lastName: z.string().trim().max(80).optional(),
  email: z.string().email().max(200), phone: z.string().trim().max(40).optional(),
  topic: z.string().trim().min(1).max(80), nomadType: z.string().trim().min(1).max(80), message: z.string().trim().min(1).max(4000),
});

const bookingSchema = z.object({
  destinationSlug: z.string().trim().min(1), planName: z.string().trim().min(1),
  guestName: z.string().trim().min(1).max(120), guestEmail: z.string().email().max(200), notes: z.string().trim().max(4000).optional(),
});

type PlanRow = { name: string; price_cents: number; features: string[] };
type Weather = { headline: string; sun: string; temp: string; wifi: string; note: string };
type DestinationRow = { slug: string; city: string; country: string; month: string; dates: string; badge: string; image_url: string; blurb: string; intro: string; weather?: Weather; gallery?: string[]; city_images?: string[]; city_faqs?: Array<{ q: string; a: string }>; trip_plans?: PlanRow[] };
type DestinationShape = Omit<DestinationRow, "image_url" | "trip_plans"> & { image: string; plans: Array<{ name: string; price: string; features: string[] }>; weather: Weather; gallery: string[]; cityImages: string[]; cityFaqs: Array<{ q: string; a: string }> };

function config() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Supabase environment variables are missing.");
  return { url, key };
}

async function db(path: string, init: RequestInit = {}) {
  const { url, key } = config();
  const jar = await cookies();
  const token = jar.get("orbitfolk-access-token")?.value;
  const headers = new Headers(init.headers);
  headers.set("apikey", key); headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  return fetch(`${url}/rest/v1/${path}`, { ...init, headers, cache: "no-store" });
}

async function publicDb(path: string) {
  const { url, key } = config();
  return fetch(`${url}/rest/v1/${path}`, { headers: { apikey: key, "Content-Type": "application/json" }, next: { revalidate: 300 } });
}

function mergeDestination(row: DestinationRow, fallback: DestinationShape | undefined): DestinationShape | DestinationRow {
  if (!fallback) return row;
  return {
    ...fallback,
    slug: row.slug, city: row.city, country: row.country, month: row.month, dates: row.dates,
    badge: row.badge, image: row.image_url, blurb: row.blurb, intro: row.intro || fallback.intro,
    weather: row.weather || fallback.weather,
    gallery: row.gallery?.length ? row.gallery : fallback.gallery,
    cityImages: row.city_images?.length ? row.city_images : fallback.cityImages,
    cityFaqs: row.city_faqs?.length ? row.city_faqs : fallback.cityFaqs,
    plans: row.trip_plans?.length ? row.trip_plans.map((plan: PlanRow) => ({ name: plan.name, price: `$${(plan.price_cents / 100).toLocaleString()}`, features: plan.features })) : fallback.plans,
  };
}

export async function getPublishedDestinations() {
  try {
    const response = await publicDb("destinations?published=eq.true&select=*,trip_plans(name,price_cents,features)&order=created_at");
    if (!response.ok) return staticDestinations;
    const rows = await response.json();
    if (!rows.length) return staticDestinations;
    const bySlug = new Map<string, DestinationRow>(rows.map((row: DestinationRow) => [row.slug, row] as [string, DestinationRow]));
    return staticDestinations.map((fallback) => {
      const row = bySlug.get(fallback.slug);
      return row ? mergeDestination(row, fallback) : fallback;
    });
  } catch {
    return staticDestinations;
  }
}

export async function getPublishedDestination(slug: string) {
  const fallback = getStaticDestination(slug);
  try {
    const response = await publicDb(`destinations?slug=eq.${encodeURIComponent(slug)}&published=eq.true&select=*,trip_plans(name,price_cents,features)`);
    const rows = response.ok ? await response.json() : [];
    return rows[0] ? mergeDestination(rows[0], fallback) : fallback;
  } catch {
    return fallback;
  }
}

async function readError(response: Response) {
  const body = await response.json().catch(() => ({}));
  return body.message || body.hint || body.details || "Unable to save your request.";
}

export async function createContactMessage(input: unknown) {
  const value = contactSchema.parse(input);
  const response = await db("contact_messages", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ first_name: value.firstName, last_name: value.lastName || null, email: value.email, phone: value.phone || null, topic: value.topic, nomad_type: value.nomadType, message: value.message }) });
  if (!response.ok) throw new Error(await readError(response));
}

export async function createBooking(input: unknown) {
  const value = bookingSchema.parse(input);
  const jar = await cookies();
  const token = jar.get("orbitfolk-access-token")?.value;
  if (!token) throw new Error("Please sign in before booking a trip.");
  const userResponse = await fetch(`${config().url}/auth/v1/user`, { headers: { apikey: config().key, Authorization: `Bearer ${token}` }, cache: "no-store" });
  const user = await userResponse.json();
  if (!userResponse.ok || !user.id) throw new Error("Your session has expired. Please sign in again.");
  const destinationResponse = await db(`destinations?slug=eq.${encodeURIComponent(value.destinationSlug)}&select=id`);
  const destinations = await destinationResponse.json();
  const destination = destinations[0];
  if (!destination) throw new Error("That destination is no longer available.");
  const planResponse = await db(`trip_plans?destination_id=eq.${destination.id}&name=eq.${encodeURIComponent(value.planName)}&select=id,price_cents,currency`);
  const plans = await planResponse.json();
  const plan = plans[0];
  if (!plan) throw new Error("That trip plan is no longer available.");
  const response = await db("bookings", { method: "POST", headers: { Prefer: "return=representation" }, body: JSON.stringify({ user_id: user.id, destination_id: destination.id, trip_plan_id: plan.id, guest_name: value.guestName, guest_email: value.guestEmail, notes: value.notes || null, total_cents: plan.price_cents, currency: plan.currency, status: "confirmed" }) });
  if (!response.ok) throw new Error(await readError(response));
  const created = await response.json();
  return created[0];
}

export async function listUserBookings() {
  const response = await db("bookings?select=id,status,guest_name,total_cents,currency,created_at,destinations(city,country,slug),trip_plans(name)&order=created_at.desc");
  if (!response.ok) return [];
  return response.json();
}
