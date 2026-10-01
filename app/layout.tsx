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
    "In development: AIBgin, a safe AI platform for K-12 schools, built on AIB.core, the engine behind AIBEVA. Designed for FERPA, COPPA and KCSiE. No student accounts by design.",
  keywords: [
    "AI for schools", "safe AI chatbot K-12", "classroom AI assistant",
    "school district AI", "COPPA AI for schools", "FERPA AI for schools",
    "KCSiE safeguarding AI", "MAT AI platform", "EdTech AI safety",
    "child safe AI chatbot", "QR code AI school", "school AI chatbot UK",
    "school AI chatbot US", "AIBgin", "AI safeguarding tool",
  ],
  authors: [{ name: "AIBgin", url: "https://aibgin.info" }],
  creator: "AIBlab — SAY TO PAY s.r.o.",
  alternates: { canonical: "https://aibgin.info" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "AIBgin — Safe AI for Schools | US & UK",
    description:
      "In development: safe AI for the classroom, built on AIB.core, the engine behind AIBEVA. Designed for FERPA, COPPA and KCSiE.",
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
      "In development: safe AI for the classroom, built on AIB.core, the engine behind AIBEVA.",
    images: ["https://aibgin.info/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = "G-FH5978GQ0R";

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SAY TO PAY s.r.o.",
    "alternateName": "AIBlab",
    "url": "https://aiblab.info",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zámostní 1155/27",
      "addressLocality": "Slezská Ostrava",
      "postalCode": "710 00",
      "addressCountry": "CZ"
    },
    "identifier": "08694222",
    "contactPoint": { "@type": "ContactPoint", "email": "info@aiblab.info", "contactType": "customer support" },
    "sameAs": ["https://aiblab.info", "https://aibeva.com", "https://aibsn.org", "https://aibguardian.info", "https://aibfamily.cloud"]
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AIBgin",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": "In development: a safe AI platform for K-12 schools, built on AIB.core, the engine behind AIBEVA. Designed for FERPA, COPPA and KCSiE, with no student accounts.",
    "url": "https://aibgin.info"
  }
];

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
        <Script
          id="json-ld-schemas"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
