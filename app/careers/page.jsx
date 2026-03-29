import React from "react";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "Careers at Evatech Solutions LLP | IT, AI, Cloud Jobs & Opportunities in India",

    description:
        "Explore career opportunities at Evatech Solutions LLP. Contact via email, phone or Instagram for future job opportunities in AI, cloud, ERP and automation.",

    keywords: [
        "Evatech careers",
        "Evatech Solutions jobs",
        "IT jobs India",
        "AI jobs India",
        "cloud computing jobs",
        "software company careers India",
        "technology careers India",
        "digital transformation jobs India",

        // 🔥 NEW CONTACT SEO
        "Evatech contact",
        "Evatech email",
        "Evatech phone number",
        "Evatech Instagram",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/careers",
    },

    openGraph: {
        title: "Careers at Evatech Solutions LLP",
        description:
            "Join Evatech Solutions LLP. Contact via email, phone or Instagram for opportunities.",
        url: "https://evatechsolutions.in/careers",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Evatech Careers",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Evatech Careers",
        description:
            "Explore career opportunities at Evatech Solutions LLP.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 ORGANIZATION (UPGRADED) */
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

/* 🔥 CAREERS PAGE */
const careersSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers",
    url: "https://evatechsolutions.in/careers",
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
            name: "Careers",
            item: "https://evatechsolutions.in/careers",
        },
    ],
};

/* 🔥 FAQ (BOOST SEO + TRUST) */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is Evatech Solutions LLP hiring?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Currently, Evatech Solutions LLP is not hiring, but we welcome future applications.",
            },
        },
        {
            "@type": "Question",
            name: "How can I contact Evatech Solutions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact Evatech via email info@evatechsolutions.in, phone +91 9730485222 or Instagram @eva_techsolutions.",
            },
        },
        {
            "@type": "Question",
            name: "What type of jobs will be available?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Future opportunities may include AI, cloud computing, ERP development, digitization and automation roles.",
            },
        },
        {
            "@type": "Question",
            name: "How can I apply?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can send your resume to careers@evatechsolutions.in for future consideration.",
            },
        },
    ],
};

export default function CareersPage() {
    return (
        <>
            {/* 🔥 ALL SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
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
            <div className="max-w-5xl mx-auto px-6 py-20">

                {/* HERO */}
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Careers at Evatech Solutions LLP
                </h1>

                <p className="text-text-light text-lg mb-10">
                    At <strong>Evatech Solutions LLP</strong>, we are building the future of
                    IT services through AI, cloud computing, ERP systems, and automation.
                </p>

                {/* WHY JOIN */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Why Join Evatech?
                    </h2>
                    <ul className="space-y-3 text-text-light">
                        <li>🚀 Work on AI & cloud technologies</li>
                        <li>🌍 Real-world enterprise projects</li>
                        <li>📈 Growth & learning opportunities</li>
                        <li>🤝 Innovative team culture</li>
                    </ul>
                </section>

                {/* STATUS */}
                <section className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-4">
                        Current Openings
                    </h2>
                    <p className="text-text-light">
                        We are not hiring at the moment.
                    </p>
                    <p className="text-text-light mt-3">
                        Stay connected for future opportunities.
                    </p>
                </section>

                {/* APPLY */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Submit Your Profile
                    </h2>
                    <p className="text-text-light mb-4">
                        Send your resume and we’ll reach out when opportunities open.
                    </p>
                    <p className="text-text-light">
                        📧 <strong>careers@evatechsolutions.in</strong>
                    </p>
                </section>

                {/* 🔥 NEW CONTACT SECTION (IMPORTANT FOR SEO + UX) */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Contact Us
                    </h2>

                    <div className="space-y-3 text-text-light">
                        <p>📧 Email: info@evatechsolutions.in</p>
                        <p>📞 Phone: +91 9730485222</p>
                        <p>
                            📸 Instagram:{" "}
                            <a
                                href="https://www.instagram.com/eva_techsolutions"
                                target="_blank"
                                className="underline hover:text-primary"
                            >
                                @eva_techsolutions
                            </a>
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center mt-16">
                    <h2 className="text-2xl font-semibold mb-4">
                        Build Your Future With Us
                    </h2>
                    <p className="text-text-light">
                        Join us in shaping the future of AI, cloud, and digital transformation.
                    </p>
                </section>

            </div>
        </>
    );
}