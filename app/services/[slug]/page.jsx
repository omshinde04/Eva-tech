import services from "@/data/services";
import { notFound } from "next/navigation";
import ServiceUI from "./ServiceUI";

/* 🔥 SEO METADATA (ADDED ONLY) */
export async function generateMetadata({ params }) {

    const { slug } = await params;

    const service = services.find((s) => s.slug === slug);
    if (!service) return {};

    const title = `${service.title} Services in India | Evatech Solutions LLP`;

    const description = `${service.title} services by Evatech Solutions LLP. Contact via email info@evatechsolutions.in or phone +91 9730485222.`;

    return {
        title,
        description,

        keywords: [
            `${service.title} services India`,
            `${service.title} company India`,
            `${service.title} solutions`,
            "Evatech Solutions",
            "Evatech IT services",
            "Evatech contact",
            "Evatech email",
            "Evatech phone number",
            "Evatech Instagram",
        ],

        alternates: {
            canonical: `https://evatechsolutions.in/services/${slug}`,
        },

        openGraph: {
            title,
            description,
            url: `https://evatechsolutions.in/services/${slug}`,
            siteName: "Evatech Solutions LLP",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
            locale: "en_IN",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.png"],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

/* 🔥 YOUR ORIGINAL CODE (UNCHANGED) */
export default async function ServicePage({ params }) {

    const { slug } = await params;

    const service = services.find((s) => s.slug === slug);

    if (!service) return notFound();

    /* 🔥 SEO SCHEMA (ADDED ONLY) */
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.description || service.title,
        provider: {
            "@type": "Organization",
            name: "Evatech Solutions LLP",
            url: "https://evatechsolutions.in",
        },
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Evatech Solutions LLP",
        url: "https://evatechsolutions.in",
        logo: "https://evatechsolutions.in/logo.png",
        email: "info@evatechsolutions.in",
        telephone: "+91-9730485222",
        sameAs: [
            "https://www.instagram.com/eva_techsolutions",
        ],
    };

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
                name: "Services",
                item: "https://evatechsolutions.in/services",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `https://evatechsolutions.in/services/${slug}`,
            },
        ],
    };

    return (
        <>
            {/* 🔥 SEO STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* 🔥 YOUR UI (UNCHANGED) */}
            <ServiceUI service={service} />
        </>
    );
}