import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

/* 🚀 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "Contact Evatech Solutions LLP | IT, AI & Cloud Company in India",

    description:
        "Contact Evatech Solutions LLP via email (info@evatechsolutions.in), phone (+91 9730485222) for AI, cloud, ERP, CCTV and automation services in India.",

    keywords: [
        "Evatech Solutions",
        "Evatech contact",
        "Evatech Solutions LLP contact",
        "Eva Tech Solutions contact",

        "contact IT company India",
        "hire AI company India",
        "cloud computing company contact",
        "ERP solutions company contact India",
        "automation company contact India",

        "CCTV installation company contact",
        "document digitization company India contact",
        "data center services contact India",

        // 🔥 NEW SEO BOOST
        "Evatech email",
        "Evatech phone number",
        "Evatech Instagram",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/contact",
    },

    openGraph: {
        title: "Contact Evatech Solutions LLP",
        description:
            "Reach Evatech via email, phone for AI, cloud and IT solutions.",
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
            "Contact us for IT, AI, Cloud & Digital Transformation Solutions.",
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

/* 🔥 LOCAL BUSINESS (UPGRADED SEO POWER) */
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",

    telephone: "+91-9730485222",
    email: "info@evatechsolutions.in",

    address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
    },

    areaServed: "India",

    /* 🔥 CONTACT POINT (GOOGLE RICH RESULT BOOST) */
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+91-9730485222",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
        },
    ],

    /* 🔥 SOCIAL SEO (NOT UI) */
    sameAs: [
        "https://www.instagram.com/eva_techsolutions",
    ],
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
                text: "You can contact Evatech Solutions LLP via email info@evatechsolutions.in or phone +91 9730485222.",
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
            {/* 🔥 SEO STRUCTURED DATA */}
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