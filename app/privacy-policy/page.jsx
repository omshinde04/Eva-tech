import React from "react";

/* 🔥 SEO METADATA (TRUST + COMPLIANCE BOOST) */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Privacy Policy | Evatech Solutions LLP",

    description:
        "Read the Privacy Policy of Evatech Solutions LLP to understand how we collect, use, and protect your personal information while providing IT services, AI solutions, cloud computing, and digital transformation services.",

    keywords: [
        "Evatech Solutions privacy policy",
        "data protection policy India",
        "IT company privacy policy",
        "user data protection",
        "GDPR privacy policy",
        "website privacy terms",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/privacy-policy",
    },

    openGraph: {
        title: "Privacy Policy | Evatech Solutions LLP",
        description:
            "Learn how Evatech Solutions LLP protects your data and ensures privacy across IT, AI, cloud, and digital services.",
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
            "Understand how your data is collected, used, and protected by Evatech Solutions LLP.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 SCHEMA (BOOST TRUST IN GOOGLE) */
const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://evatechsolutions.in/privacy-policy",
    description:
        "Privacy policy of Evatech Solutions LLP explaining how user data is collected, used, and protected.",
};

export default function PrivacyPolicy() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
            />

            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Privacy Policy
                </h1>

                <p className="text-text-light mb-6">
                    At <strong>Evatech Solutions LLP</strong> ("we", "our", "us"), we are
                    committed to protecting your privacy. This Privacy Policy explains how
                    we collect, use, and safeguard your information when you visit{" "}
                    <strong>https://evatechsolutions.in</strong>.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    1. Information We Collect
                </h2>
                <p className="text-text-light">
                    We may collect personal information such as your name, email address,
                    phone number, and any details submitted through contact forms,
                    inquiries, or service requests.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-text-light space-y-2">
                    <li>To respond to inquiries and provide requested services</li>
                    <li>To improve our website performance and user experience</li>
                    <li>To communicate updates, offers, and relevant IT services</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    3. Data Protection & Security
                </h2>
                <p className="text-text-light">
                    We implement industry-standard security measures to protect your data.
                    However, no online transmission is completely secure, and we encourage
                    users to take precautions when sharing sensitive information.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    4. Cookies & Tracking Technologies
                </h2>
                <p className="text-text-light">
                    Our website may use cookies and analytics tools to enhance user
                    experience, track performance, and analyze traffic patterns.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    5. Third-Party Services
                </h2>
                <p className="text-text-light">
                    We may use third-party services such as analytics providers or payment
                    gateways. These services operate under their own privacy policies.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    6. Your Rights
                </h2>
                <p className="text-text-light">
                    You have the right to access, update, or request deletion of your
                    personal information at any time.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    7. Updates to This Policy
                </h2>
                <p className="text-text-light">
                    We may update this Privacy Policy from time to time. Changes will be
                    posted on this page with the updated date.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    8. Contact Information
                </h2>
                <p className="text-text-light">
                    If you have any questions about this Privacy Policy, please contact us:
                    <br />
                    <strong>Email:</strong> info@evatechsolutions.in
                </p>

                <p className="text-sm text-text-light mt-10">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </>
    );
}