import AboutHero from "@/components/about/AboutHero";
import Overview from "@/components/about/Overview";
import VisionMission from "@/components/about/VisionMission";
import Expertise from "@/components/about/Expertise";
import AboutCTA from "@/components/about/AboutCTA";

/* 🔥 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "About Evatech Solutions LLP | Leading IT, AI & Cloud Company in India",

    description:
        "Evatech Solutions LLP is a leading IT services company in India offering AI solutions, cloud computing, data center services, document digitization, ERP systems, GIS technology, CCTV solutions, and enterprise automation.",

    keywords: [
        "Evatech Solutions LLP",
        "IT services company India",
        "AI company India",
        "cloud computing services India",
        "data center services",
        "document digitization services",
        "OCR services India",
        "ERP system development company",
        "GIS technology services",
        "automation solutions India",
        "CCTV installation services",
        "digital transformation company India",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/about",
    },

    openGraph: {
        title: "About Evatech Solutions LLP - IT, AI & Cloud Experts",
        description:
            "Discover Evatech Solutions LLP - experts in AI, cloud infrastructure, data center, digitization, ERP systems, GIS and automation services.",
        url: "https://evatechsolutions.in/about",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png", // ✅ FIXED PNG
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
        title: "About Evatech Solutions LLP",
        description:
            "Leading IT, AI, Cloud & Digital Transformation Company in India.",
        images: ["/og-image.png"], // ✅ PNG
    },

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
};

/* 🔥 ADVANCED STRUCTURED DATA (BOOST GOOGLE TRUST) */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",
    description:
        "Evatech Solutions LLP provides IT services, AI solutions, cloud computing, data center services, document digitization, ERP systems, GIS technology, CCTV and automation solutions.",
    foundingLocation: {
        "@type": "Country",
        name: "India",
    },
    address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
    },
    sameAs: [
        "https://www.linkedin.com/",
        "https://www.instagram.com/",
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
        },
    ],
};

/* 🔥 OPTIONAL: WEBPAGE SCHEMA (EXTRA BOOST) */
const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Evatech Solutions LLP",
    url: "https://evatechsolutions.in/about",
    description:
        "Learn about Evatech Solutions LLP, a leading IT services company offering AI, cloud, ERP, GIS, and automation solutions.",
};

export default function AboutPage() {
    return (
        <>
            {/* 🔥 ORGANIZATION SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 🔥 PAGE SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            <main className="pt-16">
                <AboutHero />
                <Overview />
                <VisionMission />
                <Expertise />
                <AboutCTA />
            </main>
        </>
    );
}