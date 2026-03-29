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
    "Evatech Solutions LLP provides AI, cloud, ERP, CCTV and automation services. Contact via email info@evatechsolutions.in or phone +91 9730485222.",

  keywords: [
    "Evatech Solutions",
    "Evatech Solutions LLP",
    "Evatech India",

    "IT services company India",
    "AI solutions company India",
    "cloud computing services India",
    "ERP development company",
    "automation solutions company",

    // 🔥 CONTACT SEO
    "Evatech contact",
    "Evatech email",
    "Evatech phone number",
    "Evatech Instagram",
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "Evatech Solutions LLP - AI, Cloud & IT Services Company",
    description:
      "AI, Cloud, ERP & Automation Services. Contact via email or phone.",
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
      "AI, Cloud, IT Services & Digital Transformation Company",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://evatechsolutions.in",
  },
};

/* 🚀 ROOT LAYOUT */
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* 🔥 BASIC META */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="application-name" content="Evatech Solutions LLP" />
        <meta name="apple-mobile-web-app-title" content="Evatech Solutions" />
        <meta name="format-detection" content="telephone=no" />

        {/* 🔥 FAVICON */}
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
              url: "https://evatechsolutions.in",
              logo: "https://evatechsolutions.in/logo.png",

              description:
                "IT services, AI solutions, cloud computing, ERP systems and automation company.",

              email: "info@evatechsolutions.in",
              telephone: "+91-9730485222",

              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9730485222",
                  contactType: "customer support",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],

              sameAs: [
                "https://www.instagram.com/eva_techsolutions",
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

        {/* 🔥 LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Evatech Solutions LLP",
              url: "https://evatechsolutions.in",
              logo: "https://evatechsolutions.in/logo.png",

              telephone: "+91-9730485222",
              email: "info@evatechsolutions.in",

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