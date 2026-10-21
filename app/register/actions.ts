"use server";

import { redirect } from "next/navigation";
import { signUp } from "@/lib/supabase/rest";

export async function registerAction(formData: FormData) {
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "");
  const destination = next.startsWith("/") ? next : "/account";
  if (!fullName || !email || password.length < 6) redirect("/register?error=Please%20complete%20all%20fields.");
  let session: Awaited<ReturnType<typeof signUp>>;
  try {
    session = await signUp(email, password, fullName);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create your account.";
    redirect(`/register?error=${encodeURIComponent(message)}`);
  }
  if (!session.access_token) {
    const query = new URLSearchParams({ email });
    if (destination !== "/account") query.set("next", destination);
    redirect(`/register/check-email?${query.toString()}`);
  }
  redirect(destination);
}
