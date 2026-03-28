import React from "react";

/* 🔥 SEO METADATA (TRUST + LEGAL BOOST) */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Terms & Conditions | Evatech Solutions LLP",

    description:
        "Read the Terms and Conditions of Evatech Solutions LLP for using our IT services, AI solutions, cloud computing, digitization, ERP systems, and website.",

    keywords: [
        "Evatech terms and conditions",
        "website terms India",
        "IT services terms policy",
        "user agreement Evatech",
        "service usage terms",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/terms-conditions",
    },

    openGraph: {
        title: "Terms & Conditions | Evatech Solutions LLP",
        description:
            "Understand the terms and conditions for using Evatech Solutions LLP services and website.",
        url: "https://evatechsolutions.in/terms-conditions",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Evatech Terms and Conditions",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions | Evatech Solutions LLP",
        description:
            "Review the terms for using Evatech Solutions LLP IT, AI, cloud and digital services.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 SCHEMA (BOOST TRUST SIGNAL) */
const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: "https://evatechsolutions.in/terms-conditions",
    description:
        "Terms and conditions page for Evatech Solutions LLP outlining rules for using services and website.",
};

export default function Terms() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
            />

            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-text-light mb-6">
                    By accessing and using{" "}
                    <strong>https://evatechsolutions.in</strong>, you agree to comply with
                    these Terms and Conditions set by{" "}
                    <strong>Evatech Solutions LLP</strong>.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    1. Use of Website
                </h2>
                <p className="text-text-light">
                    You agree to use this website for lawful purposes only and not engage
                    in activities that may harm the website, its services, or other users.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    2. Services
                </h2>
                <p className="text-text-light">
                    Evatech Solutions LLP provides IT services including AI solutions,
                    cloud computing, data center services, document digitization, ERP
                    systems, GIS technology, CCTV services, and automation solutions. All
                    services are subject to agreements and contracts.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    3. Intellectual Property
                </h2>
                <p className="text-text-light">
                    All content on this website, including text, graphics, logos, and
                    software, is the property of Evatech Solutions LLP and protected by
                    applicable copyright and intellectual property laws.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    4. Limitation of Liability
                </h2>
                <p className="text-text-light">
                    Evatech Solutions LLP shall not be held liable for any direct,
                    indirect, incidental, or consequential damages arising from the use or
                    inability to use our website or services.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    5. External Links
                </h2>
                <p className="text-text-light">
                    Our website may contain links to third-party websites. We are not
                    responsible for their content, policies, or practices.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    6. Updates to Terms
                </h2>
                <p className="text-text-light">
                    We reserve the right to update or modify these Terms and Conditions at
                    any time without prior notice.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">
                    7. Contact Information
                </h2>
                <p className="text-text-light">
                    For any questions regarding these Terms and Conditions, please contact
                    us:
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