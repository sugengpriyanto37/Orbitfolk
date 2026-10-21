import { NextResponse } from "next/server";
import { createBooking } from "@/lib/supabase/data";

export async function POST(request: Request) {
  try {
    const booking = await createBooking(await request.json());
    return NextResponse.json({ ok: true, booking });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to create your booking." }, { status: 400 });
  }
}
