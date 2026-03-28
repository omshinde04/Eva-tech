import React from "react";

/* 🔥 SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Careers at Evatech Solutions LLP | Join Our Team",

    description:
        "Explore career opportunities at Evatech Solutions LLP. We are a growing IT services company specializing in AI, cloud computing, digitization, ERP systems, and automation solutions. Currently, we are not hiring but welcome future applications.",

    keywords: [
        "Evatech careers",
        "IT jobs India",
        "AI jobs India",
        "cloud computing jobs",
        "software company careers",
        "Evatech Solutions jobs",
        "technology careers India",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/careers",
    },

    openGraph: {
        title: "Careers at Evatech Solutions LLP",
        description:
            "Join Evatech Solutions LLP - a leading IT, AI and cloud services company. Explore future career opportunities.",
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
        title: "Careers at Evatech Solutions LLP",
        description:
            "Explore future opportunities at Evatech Solutions LLP.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 SCHEMA (JOB + COMPANY SIGNAL) */
const careersSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers at Evatech Solutions LLP",
    url: "https://evatechsolutions.in/careers",
    description:
        "Careers page of Evatech Solutions LLP. Currently not hiring but open for future opportunities.",
};

export default function CareersPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
            />

            <div className="max-w-5xl mx-auto px-6 py-20">

                {/* 🔥 HERO */}
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Careers at Evatech Solutions LLP
                </h1>

                <p className="text-text-light text-lg mb-10">
                    Build the future with us. At <strong>Evatech Solutions LLP</strong>, we
                    are passionate about innovation in AI, cloud computing, data
                    digitization, ERP systems, and enterprise automation.
                </p>

                {/* 🔥 COMPANY CULTURE */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Why Work With Us
                    </h2>
                    <ul className="space-y-3 text-text-light">
                        <li>🚀 Work on cutting-edge technologies like AI & Cloud</li>
                        <li>🌍 Be part of digital transformation projects</li>
                        <li>📈 Continuous learning and growth opportunities</li>
                        <li>🤝 Collaborative and innovation-driven culture</li>
                    </ul>
                </section>

                {/* 🔥 CURRENT STATUS */}
                <section className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-4">
                        Current Openings
                    </h2>

                    <p className="text-text-light">
                        We currently do not have any active job openings.
                    </p>

                    <p className="text-text-light mt-3">
                        However, we are always looking for talented individuals passionate
                        about technology and innovation. Feel free to connect with us for
                        future opportunities.
                    </p>
                </section>

                {/* 🔥 FUTURE APPLICATION */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Submit Your Profile
                    </h2>

                    <p className="text-text-light mb-4">
                        Interested in working with us in the future? Send your resume and we
                        will reach out when a suitable opportunity arises.
                    </p>

                    <p className="text-text-light">
                        📧 <strong>Email:</strong> careers@evatechsolutions.in
                    </p>
                </section>

                {/* 🔥 CTA */}
                <section className="text-center mt-16">
                    <h2 className="text-2xl font-semibold mb-4">
                        Let’s Build the Future Together
                    </h2>
                    <p className="text-text-light">
                        Stay connected with Evatech Solutions LLP for future opportunities
                        in IT, AI, cloud, and digital transformation.
                    </p>
                </section>

            </div>
        </>
    );
}