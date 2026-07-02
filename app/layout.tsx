import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MatchTalk — Understand every moment",
  description: "Your AI-powered second-screen companion for live soccer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
