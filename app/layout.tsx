import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIBgin — Safe AI Platform for Schools & Institutions",
  description:
    "AIBgin is the EU AI Act-compliant AI chatbot platform built for schools, MATs, and child-serving institutions. No child accounts. QR code access. Real-time AIBguard safety audit.",
  keywords:
    "school AI platform, AI for education, safe AI chatbot, EU AI Act school, MAT AI, district AI, AIBgin, EdTech AI safety",
  openGraph: {
    title: "AIBgin — Safe AI Platform for Schools",
    description:
      "Zero child registration. QR code access. Real-time safety audit on every response. Built for schools, MATs and districts.",
    url: "https://aibgin.info",
    siteName: "AIBgin",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
