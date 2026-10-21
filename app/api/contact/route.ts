import { NextResponse } from "next/server";
import { createContactMessage } from "@/lib/supabase/data";

export async function POST(request: Request) {
  try {
    await createContactMessage(await request.json());
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to send your message." }, { status: 400 });
  }
}
