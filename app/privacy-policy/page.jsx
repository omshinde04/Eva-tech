import React from "react";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Privacy Policy | Evatech Solutions LLP",

    description:
        "Read the Privacy Policy of Evatech Solutions LLP. Contact us via email (info@evatechsolutions.in) or phone (+91 9730485222) for AI, cloud, ERP and IT services in India.",

    keywords: [
        "Evatech Solutions privacy policy",
        "data protection policy India",
        "IT company privacy policy",
        "AI company data privacy",
        "cloud computing data security",
        "website privacy terms India",

        // 🔥 SEO BOOST
        "Evatech contact",
        "Evatech email",
        "Evatech phone number",
        "Evatech Instagram",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/privacy-policy",
    },

    openGraph: {
        title: "Privacy Policy | Evatech Solutions LLP",
        description:
            "Learn how Evatech Solutions LLP protects your data. Contact via email or phone.",
        url: "https://evatechsolutions.in/privacy-policy",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Evatech Privacy Policy",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Evatech Solutions LLP",
        description:
            "Understand how your data is protected at Evatech Solutions LLP.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 ORGANIZATION SCHEMA (UPGRADED) */
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
const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://evatechsolutions.in/privacy-policy",
};

/* 🔥 HERO SEO (VERY IMPORTANT 🔥) */
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
            name: "Privacy Policy",
            item: "https://evatechsolutions.in/privacy-policy",
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
            name: "Does Evatech Solutions LLP protect user data?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Evatech uses industry-standard security practices to protect user data.",
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
            name: "Is my data safe with Evatech?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, your data is securely handled using modern security standards.",
            },
        },
    ],
};

export default function PrivacyPolicy() {
    return (
        <>
            {/* 🔥 SEO STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
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

            {/* 🔥 CONTENT (UNCHANGED UI) */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Privacy Policy
                </h1>

                <p className="text-text-light mb-6">
                    At <strong>Evatech Solutions LLP</strong>, we are committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, and safeguard your information when you visit{" "}
                    <strong>https://evatechsolutions.in</strong>.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    1. Information We Collect
                </h2>
                <p className="text-text-light">
                    We may collect personal information such as your name, email address, phone number,
                    and any details submitted through contact forms or inquiries.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-text-light space-y-2">
                    <li>To respond to inquiries and provide services</li>
                    <li>To improve website performance and user experience</li>
                    <li>To communicate updates and relevant services</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    3. Data Protection
                </h2>
                <p className="text-text-light">
                    We implement strong security measures to protect your data.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    8. Contact
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