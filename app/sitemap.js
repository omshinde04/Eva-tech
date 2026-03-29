import services from "@/data/services";

export default function sitemap() {
    const baseUrl = "https://evatechsolutions.in";

    /* 🔥 MAIN STATIC PAGES */
    const mainPages = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];

    /* 🔥 LEGAL / TRUST PAGES */
    const legalPages = [
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/sitemap`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];

    /* 🔥 BLOG (FUTURE SEO BOOST) */
    const blogPages = [
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    /* 🔥 DYNAMIC SERVICE SLUG PAGES (MOST IMPORTANT 🚀) */
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
    }));

    /* 🔥 FINAL MERGE */
    return [
        ...mainPages,
        ...legalPages,
        ...blogPages,
        ...servicePages,
    ];
}