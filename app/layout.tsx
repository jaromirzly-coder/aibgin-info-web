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
      "name": "Jak děti přistupují k AIBgin bez registrace?",
      "acceptedAnswer": { "@type": "Answer", "text": "Učitel promítne QR kód vygenerovaný v dashboardu. Dítě ho naskenuje telefonem a okamžitě přistupuje k platformě — bez registrace, bez e-mailu, bez hesla. Po skončení hodiny se session automaticky resetuje a nezůstává žádná digitální stopa." }
    },
    {
      "@type": "Question",
      "name": "Je AIBgin v souladu s EU AI Act a GDPR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ano. AIBgin bylo navrženo od základu v souladu s nařízením EU 2024/1689 (EU AI Act). AI systémy ve vzdělávání jsou klasifikovány jako HIGH-RISK — AIBgin splňuje všechny technické požadavky: risk assessment, data governance, transparentnost a lidský dohled. GDPR čl. 8 zajišťuje ochranu dat dětí." }
    },
    {
      "@type": "Question",
      "name": "Co se stane při detekci krizové situace u dítěte?",
      "acceptedAnswer": { "@type": "Answer", "text": "4. vrstva ochrany kontinuálně analyzuje obsah konverzace. Při detekci krizových vzorců (sebepoškozování, šikana, násilí) je správce okamžitě notifikován a systém zahájí protokol pro kontakt s Linkou bezpečí 116 111." }
    },
    {
      "@type": "Question",
      "name": "Jak rychle lze AIBgin nastavit pro školu?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nastavení trvá přibližně 30 minut. Po registraci škola obdrží přístup do dashboardu, nastaví bezpečnostní profily pro třídy a vygeneruje QR kódy. První QR kód pro třídu lze mít za hodinu od registrace." }
    },
    {
      "@type": "Question",
      "name": "Kolik dotazů je zahrnuto v ceně?",
      "acceptedAnswer": { "@type": "Answer", "text": "Červnový AI Sandbox za 999 Kč jednorázově zahrnuje 10 000 dotazů měsíčně na třídu s přístupem do 30. června 2026. Plný přístup ke všem 5 vrstvám ochrany AIBguard." }
    }
  ]
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AIBgin",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "description": "Certifikovaný AI chatbot pro školy, školky a zájmové kroužky. 5 vrstev ochrany AIBguard, fail-closed architektura, krizová detekce 116 111, QR přístup bez registrace dětí. GDPR a EU AI Act Ready.",
  "url": "https://aibgin.cz",
  "offers": {
    "@type": "Offer",
    "price": "999",
    "priceCurrency": "CZK",
    "description": "AI Sandbox — přístup do 30. června 2026"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SAY TO PAY s.r.o.",
    "url": "https://aiblab.cz",
    "contactPoint": { "@type": "ContactPoint", "email": "info@aiblab.cz" }
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SAY TO PAY s.r.o.",
  "url": "https://aibgin.cz",
  "logo": "https://aibgin.cz/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zámostní 1155/27",
    "addressLocality": "Ostrava",
    "postalCode": "710 00",
    "addressCountry": "CZ"
  },
  "sameAs": ["https://aiblab.cz", "https://aibaimy.cloud", "https://aibsn.org"],
  "contactPoint": { "@type": "ContactPoint", "email": "info@aiblab.cz", "contactType": "customer support" }
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
          id="json-ld-software"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
