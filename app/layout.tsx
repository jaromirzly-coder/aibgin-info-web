import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibgin.info"),
  title: {
    default: "AIBgin — Safe AI for Schools | US & UK",
    template: "%s | AIBgin",
  },
  description:
    "AIBgin is the EU AI Act-compliant AI chatbot platform for schools, MATs, and districts. No child accounts. QR code access. Real-time AIBguard safety audit on every response.",
  keywords: [
    "school AI platform", "AI for education", "safe AI chatbot",
    "EU AI Act school", "MAT AI", "district AI platform", "AIBgin",
    "EdTech AI safety", "safeguarding AI", "child safe AI", "QR code AI school",
    "AI for teachers", "school chatbot UK", "school chatbot US",
  ],
  authors: [{ name: "AIBgin", url: "https://aibgin.info" }],
  creator: "AIBlab — SAY TO PAY s.r.o.",
  alternates: {
    canonical: "https://aibgin.info",
  },
  openGraph: {
    title: "AIBgin — Safe AI for Schools | US & UK",
    description:
      "Zero child registration. QR code access. Real-time safety audit on every AI response. Built for schools, MATs and districts.",
    url: "https://aibgin.info",
    siteName: "AIBgin",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aibgin.info/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIBgin — Safe AI Platform for Schools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBgin — Safe AI for Schools | US & UK",
    description:
      "Zero child registration. QR code access. Real-time safety audit on every response.",
    images: ["https://aibgin.info/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = "G-FH5978GQ0R";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
