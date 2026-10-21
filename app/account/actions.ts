"use server";

import { redirect } from "next/navigation";
import { signOut } from "@/lib/supabase/rest";

export async function logoutAction() {
  await signOut();
  redirect("/");
}
