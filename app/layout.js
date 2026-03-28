import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
  metadataBase: new URL("https://evatechsolutions.in"),

  title: {
    default:
      "Evatech Solutions LLP | IT Services, AI, Cloud, ERP & Digital Transformation Company",
    template: "%s | Evatech Solutions LLP",
  },

  description:
    "Evatech Solutions LLP is a leading IT services company in India providing AI solutions, cloud computing, data center services, document digitization, OCR, CCTV, ERP systems, GIS technology, automation, and secure digital transformation solutions.",

  keywords: [
    "Evatech Solutions",
    "Evatech Solutions LLP",
    "Evatech",
    "Eva Tech Solutions",
    "Evatech India",

    "IT services company India",
    "AI solutions company India",
    "cloud computing services India",
    "data center services India",
    "document digitization company",
    "OCR services India",
    "CCTV installation company",
    "ERP system development company",
    "GIS technology services",
    "automation solutions company",

    "best IT company India",
    "top AI company India",
    "cloud service provider India",
    "digital transformation company India",
    "IT consulting company India",
  ],

  authors: [{ name: "Evatech Solutions LLP" }],
  creator: "Evatech Solutions LLP",
  publisher: "Evatech Solutions LLP",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ✅ FINAL ICON FIX (VERY IMPORTANT) */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "Evatech Solutions LLP - AI, Cloud, IT Services & Digital Transformation Experts",
    description:
      "Top IT services company offering AI, cloud computing, ERP systems, CCTV, digitization, and automation solutions.",
    url: "https://evatechsolutions.in",
    siteName: "Evatech Solutions LLP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evatech Solutions LLP",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Evatech Solutions LLP",
    description:
      "AI, Cloud, IT Services, ERP, CCTV & Digital Transformation Company",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://evatechsolutions.in",
  },
};

/* 🚀 ROOT LAYOUT */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 BASIC META */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="application-name" content="Evatech Solutions LLP" />
        <meta name="apple-mobile-web-app-title" content="Evatech Solutions" />
        <meta name="format-detection" content="telephone=no" />

        {/* 🔥 CRITICAL: FAVICON FIX */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* 🔥 ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Evatech Solutions LLP",
              alternateName: [
                "Evatech",
                "Eva Tech Solutions",
                "Evatech India",
              ],
              url: "https://evatechsolutions.in",
              logo: "https://evatechsolutions.in/logo.png",
              description:
                "IT services, AI solutions, cloud computing, ERP systems, CCTV, digitization, GIS and automation services company.",
              sameAs: [
                "https://www.linkedin.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />

        {/* 🔥 WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Evatech Solutions LLP",
              url: "https://evatechsolutions.in",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://evatechsolutions.in/?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* 🔥 LOCAL BUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Evatech Solutions LLP",
              url: "https://evatechsolutions.in",
              logo: "https://evatechsolutions.in/logo.png",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: "India",
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}