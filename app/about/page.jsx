import AboutHero from "@/components/about/AboutHero";
import Overview from "@/components/about/Overview";
import VisionMission from "@/components/about/VisionMission";
import Expertise from "@/components/about/Expertise";
import AboutCTA from "@/components/about/AboutCTA";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "About Evatech Solutions LLP | Top IT, AI & Cloud Company in India",

    description:
        "Evatech Solutions LLP is a leading IT services company in India specializing in AI solutions, cloud computing, data center services, document digitization, ERP systems, GIS technology, CCTV and automation solutions for digital transformation.",

    keywords: [
        // 🔥 BRAND
        "Evatech Solutions",
        "Evatech Solutions LLP",
        "Evatech",
        "Eva Tech Solutions",
        "Evatech India",

        // 🔥 COMPANY SEARCH
        "about Evatech Solutions",
        "Evatech company India",
        "IT company profile India",

        // 🔥 SERVICES CONTEXT
        "AI cloud ERP company India",
        "digital transformation company India",
        "automation solutions provider India",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/about",
    },

    openGraph: {
        title:
            "About Evatech Solutions LLP - AI, Cloud & IT Experts",
        description:
            "Learn about Evatech Solutions LLP, a trusted IT services company delivering AI, cloud, ERP and automation solutions.",
        url: "https://evatechsolutions.in/about",
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
        title: "About Evatech Solutions LLP",
        description:
            "AI, Cloud, ERP & Digital Transformation Experts.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 ORGANIZATION AUTHORITY */
const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evatech Solutions LLP",
    alternateName: ["Evatech", "Eva Tech Solutions"],
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",
    description:
        "Evatech Solutions LLP is an IT services company offering AI, cloud computing, ERP systems, digitization and automation solutions.",
    address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
    },
};

/* 🔥 ABOUT PAGE SCHEMA */
const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Evatech Solutions LLP",
    url: "https://evatechsolutions.in/about",
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
            name: "About",
            item: "https://evatechsolutions.in/about",
        },
    ],
};

/* 🔥 FAQ (VERY POWERFUL) */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does Evatech Solutions LLP do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Evatech Solutions LLP provides IT services including AI solutions, cloud computing, ERP systems, document digitization, CCTV services, GIS technology and automation solutions.",
            },
        },
        {
            "@type": "Question",
            name: "Is Evatech an AI and cloud company?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Evatech specializes in AI solutions, cloud infrastructure, and enterprise digital transformation.",
            },
        },
        {
            "@type": "Question",
            name: "Where is Evatech Solutions located?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Evatech Solutions LLP operates in India and provides services globally.",
            },
        },
    ],
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
                <AboutHero />
                <Overview />
                <VisionMission />
                <Expertise />
                <AboutCTA />
            </main>
        </>
    );
}