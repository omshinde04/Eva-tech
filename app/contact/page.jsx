import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

/* 🔥 ULTRA SEO METADATA */
export const metadata = {
    metadataBase: new URL("https://evatechsolutions.in"),

    title:
        "Contact Evatech Solutions LLP | IT Services, AI, Cloud & Digitization Company",

    description:
        "Contact Evatech Solutions LLP for IT services, AI solutions, cloud computing, data center services, document digitization, ERP systems, CCTV, GIS technology, and automation solutions. Get expert consultation today.",

    keywords: [
        "Contact Evatech Solutions",
        "IT company contact India",
        "AI solutions company contact",
        "cloud services contact India",
        "data center services contact",
        "document digitization company contact",
        "ERP solutions company contact",
        "CCTV installation contact",
        "automation solutions company India",
        "GIS technology services contact",
    ],

    alternates: {
        canonical: "https://evatechsolutions.in/contact",
    },

    openGraph: {
        title: "Contact Evatech Solutions LLP",
        description:
            "Get in touch with Evatech Solutions LLP for AI, cloud, IT services, digitization, ERP and automation solutions.",
        url: "https://evatechsolutions.in/contact",
        siteName: "Evatech Solutions LLP",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Evatech Solutions LLP",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Evatech Solutions LLP",
        description:
            "Reach out to Evatech Solutions LLP for IT, AI, Cloud and Digital Solutions.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

/* 🔥 ADVANCED SCHEMA (BOOST LOCAL + TRUST SEO) */
const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Evatech Solutions LLP",
    url: "https://evatechsolutions.in/contact",
    description:
        "Contact Evatech Solutions LLP for IT services, AI solutions, cloud computing, and enterprise technology services.",
};

const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evatech Solutions LLP",
    url: "https://evatechsolutions.in",
    logo: "https://evatechsolutions.in/logo.png",
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+91-9730485222",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
        },
    ],
};

export default function ContactPage() {
    return (
        <>
            {/* 🔥 CONTACT PAGE SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            {/* 🔥 ORGANIZATION CONTACT SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />

            <main>
                <ContactHero />
                <ContactForm />
                <ContactInfo />
            </main>
        </>
    );
}