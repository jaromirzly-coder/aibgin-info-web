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
    "AIBgin is the FERPA, COPPA & KCSiE-compliant AI chatbot platform for K-12 schools, MATs, and districts. No student accounts. QR code access. Real-time AIBguard safety audit on every response.",
  keywords: [
    "AI for schools", "safe AI chatbot K-12", "classroom AI assistant",
    "school district AI", "COPPA compliant AI", "FERPA compliant AI",
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
      "Zero student registration. QR code access. Real-time safety audit on every AI response. FERPA, COPPA & KCSiE compliant.",
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
      "Zero student registration. QR code access. Real-time safety audit on every response.",
    images: ["https://aibgin.info/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = "G-FH5978GQ0R";

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is AIBgin compliant with FERPA, COPPA, and KCSiE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AIBgin is built from the ground up to meet FERPA, COPPA, KCSiE, GDPR, and EU AI Act requirements. No student accounts are created — access is via QR code only — so personal data collection is minimised by design."
      }
    },
    {
      "@type": "Question",
      "name": "Do students need to create accounts to use AIBgin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. AIBgin uses QR code access — students scan a classroom QR code and chat immediately. Zero student accounts, zero registration, zero personal data collected from minors."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can a school get AIBgin up and running?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most schools are live within 30 minutes. There is no IT infrastructure to install — AIBgin runs entirely in the browser, and the AIBguard safety audit layer is active on every response from day one."
      }
    }
  ]
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AIBgin",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "description": "FERPA, COPPA and KCSiE-compliant AI chatbot platform for K-12 schools",
  "offers": { "@type": "Offer", "price": "49", "priceCurrency": "USD" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aibgin.info/#organization",
      name: "AIBgin",
      url: "https://aibgin.info",
      logo: "https://aibgin.info/logo.svg",
      description: "Safe AI chatbot platform for schools, MATs and districts.",
      parentOrganization: {
        "@type": "Organization",
        name: "SAY TO PAY s.r.o.",
        url: "https://aiblab.info",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "schools@aibgin.info",
        contactType: "sales",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://aibgin.info/#software",
      name: "AIBgin",
      applicationCategory: "EducationApplication",
      operatingSystem: "Web",
      url: "https://aibgin.info",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "USD",
      },
      description:
        "FERPA, COPPA and KCSiE compliant AI chatbot platform for K-12 schools with real-time safety audit.",
      publisher: {
        "@id": "https://aibgin.info/#organization",
      },
    },
  ],
};

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
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <Script
          id="json-ld-software"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
