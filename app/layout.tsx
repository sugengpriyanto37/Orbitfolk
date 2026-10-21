import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbitfolk — Work remotely, live adventurously",
  description: "Curated trips for remote workers who want to work well and live widely.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
