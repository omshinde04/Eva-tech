export default function sitemap() {
    const baseUrl = "https://evatechsolutions.in";

    return [
        // ✅ MAIN PAGES
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
            priority: 0.9,
        },

        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // ✅ LEGAL PAGES (IMPORTANT FOR TRUST)
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },

        {
            url: `${baseUrl}/terms-conditions`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },

        {
            url: `${baseUrl}/sitemap`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.4,
        },

        // ✅ CAREERS PAGE
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },

        // ✅ SERVICES SUB-PAGES (VERY IMPORTANT FOR SEO RANKING)
        {
            url: `${baseUrl}/services/ai-solutions`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/services/cloud-computing`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/services/data-center`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/services/document-digitization`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/services/cctv-services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/services/erp-solutions`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/services/gis-technology`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/services/automation-solutions`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/services/technical-manpower`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },

        {
            url: `${baseUrl}/services/drone-services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },

        // ✅ FUTURE BLOG (SUPER SEO BOOST 🚀)
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];
}