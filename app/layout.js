import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ FINAL ADVANCED SEO METADATA
export const metadata = {
  metadataBase: new URL("https://evatechsolutions.in"),

  title: {
    default: "Evatech Solutions LLP | IT Services, AI, Cloud & Digital Solutions",
    template: "%s | Evatech Solutions LLP",
  },

  description:
    "Evatech Solutions LLP provides IT services, AI solutions, cloud computing, data center services, document digitization, OCR, CCTV, ERP systems, GIS technology, automation, and secure data management.",

  keywords: [
    "Evatech Solutions LLP",
    "IT services India",
    "AI company India",
    "Cloud computing services",
    "Data center solutions",
    "Document digitization services",
    "OCR data entry India",
    "CCTV installation services",
    "ERP system provider",
    "GIS technology company",
    "Automation solutions India",
    "Server management services",
    "Technical manpower supply",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Evatech Solutions LLP - IT, AI, Cloud & Digital Experts",
    description:
      "Leading IT services provider offering AI, cloud, data center, digitization, CCTV, ERP, and automation solutions.",
    url: "https://evatechsolutions.in",
    siteName: "Evatech Solutions LLP",
    images: [
      {
        url: "/og-image.png", // 👉 MUST ADD THIS IMAGE
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
      "AI, Cloud, IT Services, Digitization & Automation Solutions Company.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://evatechsolutions.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ THEME COLOR */}
        <meta name="theme-color" content="#0f172a" />

        {/* ✅ GOOGLE VERIFICATION (ADD LATER) */}
        {/* <meta name="google-site-verification" content="YOUR_CODE" /> */}

        {/* ✅ ORGANIZATION SCHEMA (VERY IMPORTANT) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Evatech Solutions LLP",
              url: "https://evatechsolutions.in",
              logo: "https://evatechsolutions.in/favicon-512x512.png",
              description:
                "IT services, AI solutions, cloud computing, data center, digitization, CCTV, ERP, GIS, and automation services provider.",
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-XXXXXXXXXX", // 👉 update
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
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