import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import Process from "@/components/services/Process";
import Industries from "@/components/services/Industries";
import WhyChoose from "@/components/services/WhyChoose";

/* 🚀 ULTRA SEO (MONEY PAGE BOOSTED) */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "Best IT Services Company in India | AI, Cloud, ERP, Digitization & Automation - Evatech Solutions LLP",

    description:
        "Evatech Solutions LLP is a top IT services company in India offering AI solutions, cloud computing, data center services, document digitization, OCR, ERP systems, CCTV installation, GIS technology, automation solutions, and enterprise digital transformation services.",

    keywords: [
        // 🔥 BRAND DOMINATION
        "Evatech Solutions",
        "Evatech Solutions LLP",
        "Evatech",
        "Eva Tech Solutions",
        "Evatech India",

        // 🔥 CORE SERVICES
        "IT services company India",
        "AI solutions company India",
        "cloud computing services India",
        "data center services India",
        "document digitization services India",
        "OCR services company India",
        "ERP solutions provider India",
        "CCTV installation company India",
        "GIS technology services India",
        "automation solutions company India",

        // 🔥 HIGH INTENT
        "best IT company India",
        "top AI company India",
        "cloud service provider India",
        "digital transformation company India",

        // 🔥 LONG TAIL
        "AI cloud ERP digitization automation company India",
        "enterprise IT services provider India",
        "secure data storage backup solutions India",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/services",
    },

    openGraph: {
        title:
            "Top IT, AI & Cloud Services Company | Evatech Solutions LLP",
        description:
            "Explore AI, cloud, ERP, CCTV, GIS, digitization and automation solutions for modern businesses.",
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
            "AI, Cloud, IT Services, ERP, CCTV & Automation Solutions.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 SERVICE SCHEMA (STRONG) */
const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
        { "@type": "Service", name: "AI Solutions" },
        { "@type": "Service", name: "Cloud Computing" },
        { "@type": "Service", name: "Data Center Services" },
        { "@type": "Service", name: "Document Digitization" },
        { "@type": "Service", name: "ERP Solutions" },
        { "@type": "Service", name: "CCTV Services" },
        { "@type": "Service", name: "GIS Technology" },
        { "@type": "Service", name: "Automation Solutions" },
    ],
};

/* 🔥 ORGANIZATION BOOST */
const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",
};

/* 🔥 BREADCRUMB (GOOGLE LOVES THIS) */
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://evatechsolutions.in",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://evatechsolutions.in/services",
        },
    ],
};

/* 🔥 FAQ SCHEMA (VERY POWERFUL 🚀) */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What services does Evatech Solutions LLP provide?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We provide AI solutions, cloud computing, ERP systems, CCTV services, document digitization, GIS technology, and automation solutions.",
            },
        },
        {
            "@type": "Question",
            name: "Is Evatech a cloud and AI company?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Evatech Solutions LLP specializes in AI, cloud infrastructure, and enterprise digital transformation.",
            },
        },
        {
            "@type": "Question",
            name: "Do you provide ERP and automation solutions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide custom ERP systems and automation solutions tailored for businesses.",
            },
        },
    ],
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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