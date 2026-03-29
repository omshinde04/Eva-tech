import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import Process from "@/components/services/Process";
import Industries from "@/components/services/Industries";
import WhyChoose from "@/components/services/WhyChoose";

/* 🚀 ULTRA SEO (MONEY PAGE BOOSTED) */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "Best IT Services Company in India | AI, Cloud, ERP & Automation - Evatech Solutions LLP",

    description:
        "Evatech Solutions LLP offers AI, cloud, ERP, digitization, CCTV and automation services. Contact via email info@evatechsolutions.in or phone +91 9730485222.",

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
        "document digitization services India",
        "ERP solutions provider India",
        "CCTV installation company India",
        "automation solutions company India",

        "best IT company India",
        "top AI company India",
        "digital transformation company India",

        // 🔥 CONTACT SEO BOOST
        "Evatech contact",
        "Evatech email",
        "Evatech phone number",
        "Evatech Instagram",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/services",
    },

    openGraph: {
        title:
            "Top IT, AI & Cloud Services Company | Evatech Solutions LLP",
        description:
            "AI, cloud, ERP & automation services. Contact us via email or phone.",
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
            "AI, Cloud, ERP & Automation Solutions.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 SERVICE SCHEMA */
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

/* 🔥 ORGANIZATION (UPGRADED WITH CONTACT + SOCIAL) */
const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",

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
};

/* 🔥 HERO SEO (HIDDEN POWER 🔥) */
const heroSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    potentialAction: {
        "@type": "ContactAction",
        target: "mailto:info@evatechsolutions.in",
    },
};

/* 🔥 BREADCRUMB */
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

/* 🔥 FAQ */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What services does Evatech Solutions LLP provide?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We provide AI, cloud, ERP, digitization, CCTV and automation services.",
            },
        },
        {
            "@type": "Question",
            name: "How can I contact Evatech Solutions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact via email info@evatechsolutions.in or phone +91 9730485222.",
            },
        },
        {
            "@type": "Question",
            name: "Do you provide ERP and automation solutions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide custom ERP systems and automation solutions.",
            },
        },
    ],
};

export default function ServicesPage() {
    return (
        <>
            {/* 🔥 SEO STRUCTURED DATA */}
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(heroSchema) }}
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