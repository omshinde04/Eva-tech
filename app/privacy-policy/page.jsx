import React from "react";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Privacy Policy | Evatech Solutions LLP",

    description:
        "Read the official Privacy Policy of Evatech Solutions LLP to understand how we collect, use, and protect your personal information while providing IT services, AI solutions, cloud computing, ERP systems and digital transformation services.",

    keywords: [
        "Evatech Solutions privacy policy",
        "data protection policy India",
        "IT company privacy policy",
        "AI company data privacy",
        "cloud computing data security",
        "website privacy terms India",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/privacy-policy",
    },

    openGraph: {
        title: "Privacy Policy | Evatech Solutions LLP",
        description:
            "Understand how Evatech Solutions LLP protects your data and ensures privacy across IT, AI, and cloud services.",
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
            "Learn how your data is collected, used, and protected by Evatech Solutions LLP.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 ORGANIZATION SCHEMA */
const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",
};

/* 🔥 PAGE SCHEMA */
const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://evatechsolutions.in/privacy-policy",
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

/* 🔥 FAQ (VERY POWERFUL FOR TRUST) */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does Evatech Solutions LLP protect user data?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Evatech Solutions LLP uses industry-standard security practices to protect user data.",
            },
        },
        {
            "@type": "Question",
            name: "What data does Evatech collect?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We collect basic information like name, email, and phone number when users submit forms or inquiries.",
            },
        },
        {
            "@type": "Question",
            name: "Is my data safe with Evatech?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, your data is securely handled and protected using modern security standards.",
            },
        },
    ],
};

export default function PrivacyPolicy() {
    return (
        <>
            {/* 🔥 ALL SCHEMA */}
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* 🔥 FULL CONTENT */}
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
                    However, no internet transmission is 100% secure.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    4. Cookies
                </h2>
                <p className="text-text-light">
                    Our website may use cookies to improve user experience and analyze traffic.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    5. Third-Party Services
                </h2>
                <p className="text-text-light">
                    We may use third-party services like analytics or payment providers.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    6. Your Rights
                </h2>
                <p className="text-text-light">
                    You can access, update, or delete your personal data anytime.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    7. Updates
                </h2>
                <p className="text-text-light">
                    We may update this policy anytime. Changes will be posted here.
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