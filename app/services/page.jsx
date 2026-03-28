import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import Process from "@/components/services/Process";
import Industries from "@/components/services/Industries";
import WhyChoose from "@/components/services/WhyChoose";

/* 🔥 ULTRA SEO METADATA (MONEY PAGE) */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "IT Services, AI, Cloud, Digitization & Automation Solutions | Evatech Solutions LLP",

    description:
        "Explore Evatech Solutions LLP services including AI solutions, cloud computing, data center services, document digitization, OCR, ERP systems, CCTV installation, GIS technology, automation solutions, and technical manpower services in India.",

    keywords: [
        "IT services company India",
        "AI solutions India",
        "cloud computing services India",
        "data center services",
        "document digitization services",
        "OCR services India",
        "ERP solutions company",
        "CCTV installation services",
        "GIS technology company",
        "automation solutions India",
        "technical manpower supply",
        "digital transformation services",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/services",
    },

    openGraph: {
        title: "Evatech Solutions LLP Services - IT, AI & Cloud Experts",
        description:
            "Discover AI, cloud, data center, digitization, ERP, CCTV, GIS and automation services for modern businesses.",
        url: "https://evatechsolutions.in/services",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Evatech Services",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Evatech Services",
        description:
            "AI, Cloud, IT Services, Digitization & Automation Solutions.",
        images: ["/og-image.png"],
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

/* 🔥 ADVANCED SCHEMA (VERY POWERFUL FOR RANKING) */
const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Evatech Services",
    itemListElement: [
        {
            "@type": "Service",
            name: "AI Solutions",
            url: "https://evatechsolutions.in/services/ai-solutions",
        },
        {
            "@type": "Service",
            name: "Cloud Computing",
            url: "https://evatechsolutions.in/services/cloud-computing",
        },
        {
            "@type": "Service",
            name: "Data Center Services",
            url: "https://evatechsolutions.in/services/data-center",
        },
        {
            "@type": "Service",
            name: "Document Digitization",
            url: "https://evatechsolutions.in/services/document-digitization",
        },
        {
            "@type": "Service",
            name: "ERP Solutions",
            url: "https://evatechsolutions.in/services/erp-solutions",
        },
        {
            "@type": "Service",
            name: "CCTV Services",
            url: "https://evatechsolutions.in/services/cctv-services",
        },
        {
            "@type": "Service",
            name: "GIS Technology",
            url: "https://evatechsolutions.in/services/gis-technology",
        },
        {
            "@type": "Service",
            name: "Automation Solutions",
            url: "https://evatechsolutions.in/services/automation-solutions",
        },
    ],
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Evatech Services",
    url: "https://evatechsolutions.in/services",
    description:
        "Explore IT, AI, Cloud, Digitization and Automation services by Evatech Solutions LLP.",
};

export default function ServicesPage() {
    return (
        <>
            {/* 🔥 SERVICES LIST SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />

            {/* 🔥 PAGE SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            <main className="pt-16">
                <ServicesHero />
                <CoreServices />
                <Process />
                <Industries />
                <WhyChoose />
            </main>
        </>
    );
}