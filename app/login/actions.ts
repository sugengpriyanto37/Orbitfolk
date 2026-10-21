"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/lib/supabase/rest";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "");
  const destination = next.startsWith("/") ? next : "/account";
  if (!email || !password) redirect("/login?error=Please%20enter%20your%20email%20and%20password.");
  try {
    await signIn(email, password);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to sign in.";
    redirect(`/login?error=${encodeURIComponent(message)}`);
  }
  redirect(destination);
}
