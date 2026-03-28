import React from "react";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Terms & Conditions | Evatech Solutions LLP",

    description:
        "Read the official Terms and Conditions of Evatech Solutions LLP. Understand the rules, policies, and agreements for using our IT services, AI solutions, cloud computing, ERP systems, and digital transformation services.",

    keywords: [
        "Evatech terms and conditions",
        "IT services agreement India",
        "website terms India",
        "AI company legal terms",
        "cloud services usage policy",
        "digital services agreement",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/terms-conditions",
    },

    openGraph: {
        title: "Terms & Conditions | Evatech Solutions LLP",
        description:
            "Understand the legal terms and conditions for using Evatech Solutions LLP services and website.",
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
            "Review the legal terms for using Evatech IT, AI, cloud and automation services.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 ORGANIZATION TRUST */
const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",
};

/* 🔥 PAGE SCHEMA */
const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: "https://evatechsolutions.in/terms-conditions",
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

/* 🔥 FAQ (TRUST BOOST) */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What services does Evatech Solutions LLP provide?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Evatech Solutions LLP provides IT services including AI solutions, cloud computing, ERP systems, digitization, CCTV services and automation solutions.",
            },
        },
        {
            "@type": "Question",
            name: "Are Evatech services legally protected?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all services and website content are protected under applicable laws and agreements.",
            },
        },
        {
            "@type": "Question",
            name: "Can terms be updated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Evatech Solutions LLP reserves the right to update terms anytime without prior notice.",
            },
        },
    ],
};

export default function Terms() {
    return (
        <>
            {/* 🔥 ALL SCHEMA */}
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* 🔥 FULL CONTENT */}
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
                    You agree to use this website only for lawful purposes and not engage
                    in any activity that may harm the website or other users.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    2. Services
                </h2>
                <p className="text-text-light">
                    Evatech Solutions LLP provides IT services including AI, cloud,
                    digitization, ERP systems, CCTV, GIS and automation solutions.
                    All services are subject to contracts and agreements.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    3. Intellectual Property
                </h2>
                <p className="text-text-light">
                    All website content including text, graphics, and logos are owned by
                    Evatech Solutions LLP and protected by law.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    4. Limitation of Liability
                </h2>
                <p className="text-text-light">
                    We are not liable for damages arising from the use or inability to use
                    our website or services.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    5. External Links
                </h2>
                <p className="text-text-light">
                    We are not responsible for third-party websites linked from our site.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    6. Changes to Terms
                </h2>
                <p className="text-text-light">
                    Terms may be updated anytime without notice.
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