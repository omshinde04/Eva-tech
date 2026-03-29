import React from "react";

/* 🔥 SEO METADATA (UPGRADED) */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title: "Sitemap | Evatech Solutions LLP",

    description:
        "Explore the sitemap of Evatech Solutions LLP. Access all pages including AI, cloud, ERP services. Contact via email info@evatechsolutions.in or phone +91 9730485222.",

    keywords: [
        "Evatech sitemap",
        "website sitemap India",
        "IT services sitemap",
        "Evatech pages list",
        "AI cloud services navigation",

        // 🔥 CONTACT SEO BOOST
        "Evatech contact",
        "Evatech email",
        "Evatech phone number",
        "Evatech Instagram",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/sitemap",
    },

    openGraph: {
        title: "Sitemap | Evatech Solutions LLP",
        description:
            "Browse all pages and services. Contact via email or phone.",
        url: "https://evatechsolutions.in/sitemap",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Evatech Sitemap",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Sitemap | Evatech Solutions LLP",
        description:
            "Explore all Evatech pages including services and company info.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 SITEMAP SCHEMA */
const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Website Sitemap",
    url: "https://evatechsolutions.in/sitemap",
};

/* 🔥 ORGANIZATION (CONTACT + SOCIAL BOOST) */
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

/* 🔥 HERO SEO (CRAWL BOOST) */
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

export default function Sitemap() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(heroSchema) }}
            />

            {/* 🔥 UI (UNCHANGED) */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Sitemap
                </h1>

                <p className="text-text-light mb-10">
                    Explore all pages of <strong>Evatech Solutions LLP</strong> including IT services,
                    AI solutions, cloud computing, digitization, ERP systems, and contact resources.
                </p>

                <div className="grid gap-8 md:grid-cols-2 text-text">

                    <div>
                        <h2 className="font-semibold mb-3">Main Pages</h2>
                        <ul className="space-y-2 text-text-light">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-3">Our Services</h2>
                        <ul className="space-y-2 text-text-light">
                            <li><a href="/services/ai-solutions">AI Solutions</a></li>
                            <li><a href="/services/cloud-computing">Cloud Computing</a></li>
                            <li><a href="/services/data-center">Data Center Services</a></li>
                            <li><a href="/services/document-digitization">Document Digitization</a></li>
                            <li><a href="/services/erp-solutions">ERP Solutions</a></li>
                            <li><a href="/services/cctv-services">CCTV Services</a></li>
                            <li><a href="/services/gis-technology">GIS Technology</a></li>
                            <li><a href="/services/automation-solutions">Automation Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-3">Legal</h2>
                        <ul className="space-y-2 text-text-light">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-conditions">Terms & Conditions</a></li>
                            <li><a href="/sitemap">Sitemap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-3">Company</h2>
                        <ul className="space-y-2 text-text-light">
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}