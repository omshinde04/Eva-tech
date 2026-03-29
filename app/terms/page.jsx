import React from "react";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Terms & Conditions | Evatech Solutions LLP",

    description:
        "Read the Terms and Conditions of Evatech Solutions LLP. Contact via email info@evatechsolutions.in or phone +91 9730485222 for IT, AI, cloud and ERP services.",

    keywords: [
        "Evatech terms and conditions",
        "IT services agreement India",
        "website terms India",
        "AI company legal terms",
        "cloud services usage policy",
        "digital services agreement",

        // 🔥 CONTACT SEO BOOST
        "Evatech contact",
        "Evatech email",
        "Evatech phone number",
        "Evatech Instagram",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/terms-conditions",
    },

    openGraph: {
        title: "Terms & Conditions | Evatech Solutions LLP",
        description:
            "Understand legal terms. Contact via email or phone.",
        url: "https://evatechsolutions.in/terms-conditions",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Evatech Terms",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions | Evatech Solutions LLP",
        description:
            "Review legal terms for Evatech IT services.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 ORGANIZATION (FULL CONTACT AUTHORITY) */
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

/* 🔥 PAGE SCHEMA */
const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: "https://evatechsolutions.in/terms-conditions",
};

/* 🔥 HERO SEO (HIDDEN POWER) */
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
            name: "Terms & Conditions",
            item: "https://evatechsolutions.in/terms-conditions",
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
                text: "Evatech provides AI, cloud, ERP, digitization, CCTV and automation services.",
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
            name: "Can terms be updated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, terms may be updated anytime without prior notice.",
            },
        },
    ],
};

export default function Terms() {
    return (
        <>
            {/* 🔥 SEO STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
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

            {/* 🔥 UI (UNCHANGED) */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-text-light mb-6">
                    By accessing and using <strong>https://evatechsolutions.in</strong>,
                    you agree to comply with these Terms and Conditions of{" "}
                    <strong>Evatech Solutions LLP</strong>.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    1. Use of Website
                </h2>
                <p className="text-text-light">
                    You agree to use this website only for lawful purposes.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    2. Services
                </h2>
                <p className="text-text-light">
                    Evatech provides AI, cloud, ERP, digitization, CCTV and automation services.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    7. Contact
                </h2>
                <p className="text-text-light">
                    Email: <strong>info@evatechsolutions.in</strong>
                </p>

                <p className="text-sm text-text-light mt-10">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </>
    );
}