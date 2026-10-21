import { cookies } from "next/headers";

const ACCESS_COOKIE = "orbitfolk-access-token";
const REFRESH_COOKIE = "orbitfolk-refresh-token";

type SupabaseSession = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user: { id: string; email?: string; user_metadata?: Record<string, string> };
};

function getConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Supabase environment variables are missing.");
  return { url, key };
}

async function request(path: string, init: RequestInit = {}, accessToken?: string) {
  const { url, key } = getConfig();
  const headers = new Headers(init.headers);
  headers.set("apikey", key);
  headers.set("Content-Type", "application/json");
  if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
  return fetch(`${url}${path}`, { ...init, headers, cache: "no-store" });
}

async function saveSession(session: SupabaseSession) {
  const jar = await cookies();
  jar.set(ACCESS_COOKIE, session.access_token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: session.expires_in });
  jar.set(REFRESH_COOKIE, session.refresh_token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 30 });
}

async function refreshSession(refreshToken: string) {
  const response = await request("/auth/v1/token?grant_type=refresh_token", { method: "POST", body: JSON.stringify({ refresh_token: refreshToken }) });
  if (!response.ok) return null;
  const session = await response.json() as SupabaseSession;
  await saveSession(session);
  return session;
}

export async function signUp(email: string, password: string, fullName: string) {
  const response = await request("/auth/v1/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, data: { full_name: fullName } }),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.msg || body.error_description || "Unable to create your account.");
  if (body.access_token) await saveSession(body as SupabaseSession);
  return body as SupabaseSession;
}

export async function signIn(email: string, password: string) {
  const response = await request("/auth/v1/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error_description || body.msg || "Incorrect email or password.");
  await saveSession(body as SupabaseSession);
  return body as SupabaseSession;
}

export async function signOut() {
  const jar = await cookies();
  jar.delete(ACCESS_COOKIE);
  jar.delete(REFRESH_COOKIE);
}

export async function getCurrentUser() {
  const jar = await cookies();
  const accessToken = jar.get(ACCESS_COOKIE)?.value;
  if (!accessToken) return null;
  let response = await request("/auth/v1/user", {}, accessToken);
  if (!response.ok) {
    const refreshToken = jar.get(REFRESH_COOKIE)?.value;
    if (!refreshToken || !(await refreshSession(refreshToken))) return null;
    const refreshed = await cookies();
    response = await request("/auth/v1/user", {}, refreshed.get(ACCESS_COOKIE)?.value);
  }
  if (!response.ok) return null;
  return response.json();
}
