import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "Contact Evatech Solutions LLP | Best IT, AI & Cloud Company in India",

    description:
        "Get in touch with Evatech Solutions LLP for AI solutions, cloud computing, ERP systems, CCTV services, document digitization and automation solutions. Contact the best IT company in India today.",

    keywords: [
        // 🔥 BRAND
        "Evatech Solutions",
        "Evatech contact",
        "Evatech Solutions LLP contact",
        "Eva Tech Solutions contact",

        // 🔥 HIGH INTENT
        "contact IT company India",
        "hire AI company India",
        "cloud computing company contact",
        "ERP solutions company contact India",
        "automation company contact India",

        // 🔥 SERVICES
        "CCTV installation company contact",
        "document digitization company India contact",
        "data center services contact India",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/contact",
    },

    openGraph: {
        title: "Contact Evatech Solutions LLP",
        description:
            "Contact Evatech Solutions LLP for AI, cloud, ERP, CCTV and automation services.",
        url: "https://evatechsolutions.in/contact",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Evatech",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Evatech Solutions LLP",
        description:
            "Reach out for IT, AI, Cloud & Digital Transformation Solutions.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 CONTACT PAGE SCHEMA */
const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Evatech Solutions LLP",
    url: "https://evatechsolutions.in/contact",
};

/* 🔥 LOCAL BUSINESS (VERY POWERFUL FOR SEO) */
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",
    telephone: "+91-9730485222",
    address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
    },
    areaServed: "India",
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
            name: "Contact",
            item: "https://evatechsolutions.in/contact",
        },
    ],
};

/* 🔥 FAQ (LEAD GENERATION BOOST 🚀) */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How can I contact Evatech Solutions LLP?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact Evatech Solutions LLP via phone, email, or the contact form available on our website.",
            },
        },
        {
            "@type": "Question",
            name: "Does Evatech provide AI and cloud services?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Evatech Solutions LLP provides AI solutions, cloud computing, ERP systems and automation services.",
            },
        },
        {
            "@type": "Question",
            name: "Can I hire Evatech for IT services?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can hire Evatech Solutions LLP for IT services, digitization, ERP, cloud and automation solutions.",
            },
        },
    ],
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main>
                <ContactHero />
                <ContactForm />
                <ContactInfo />
            </main>
        </>
    );
}