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

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SAY TO PAY s.r.o.",
    "url": "https://aibgin.cz",
    "logo": "https://aibgin.cz/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zámostní 1155/27",
      "addressLocality": "Slezská Ostrava",
      "postalCode": "710 00",
      "addressCountry": "CZ"
    },
    "identifier": "08694222",
    "contactPoint": { "@type": "ContactPoint", "email": "support@aibgin.cz", "contactType": "customer support" },
    "sameAs": ["https://aiblab.cz", "https://aibaimy.cloud", "https://aibsn.org"]
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AIBgin",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": "Certifikovaný AI chatbot pro školy, školky a zájmové kroužky. 5 vrstev ochrany AIBguard, fail-closed architektura, krizová detekce 116 111, QR přístup bez registrace dětí.",
    "url": "https://aibgin.cz",
    "offers": {
      "@type": "Offer",
      "price": "59",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-08-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "SAY TO PAY s.r.o." }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jak děti přistupují k AIBgin bez registrace?", "acceptedAnswer": { "@type": "Answer", "text": "Učitel promítne QR kód vygenerovaný v dashboardu. Dítě ho naskenuje a okamžitě přistupuje k platformě bez registrace, e-mailu ani hesla. Po skončení hodiny se session automaticky resetuje." } },
      { "@type": "Question", "name": "Je AIBgin v souladu s EU AI Act a GDPR?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. AIBgin bylo navrženo v souladu s EU 2024/1689. AI systémy ve vzdělávání jsou HIGH-RISK — AIBgin splňuje všechny požadavky: risk assessment, data governance, transparentnost, lidský dohled." } },
      { "@type": "Question", "name": "Co se stane při detekci krizové situace?", "acceptedAnswer": { "@type": "Answer", "text": "4. vrstva ochrany detekuje krizové vzorce. Správce je okamžitě notifikován a systém zahájí protokol pro kontakt s Linkou bezpečí 116 111." } },
      { "@type": "Question", "name": "Jak rychle lze AIBgin nastavit?", "acceptedAnswer": { "@type": "Answer", "text": "Nastavení trvá 30 minut. První QR kód pro třídu lze mít za hodinu od registrace." } },
      { "@type": "Question", "name": "How many queries are included in the price?", "acceptedAnswer": { "@type": "Answer", "text": "The Summer Package for 59 USD includes 10,000 queries per class per month, valid July + August 2026." } }
    ]
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
