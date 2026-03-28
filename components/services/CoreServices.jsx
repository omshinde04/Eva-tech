"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "IT & Software Solutions",
        desc: "Build powerful ERP systems and custom software.",
        full: "We design scalable ERP systems, automation tools, and enterprise software that streamline operations and boost productivity.",
        image: "/images/services/it.jpg",
    },
    {
        title: "Cloud & Data Infrastructure",
        desc: "Secure cloud hosting and infrastructure.",
        full: "From deployment to disaster recovery, we provide complete cloud ecosystems with scalability and reliability.",
        image: "/images/services/cloud.jpg",
    },
    {
        title: "Document Digitisation & OCR",
        desc: "Convert documents into digital assets.",
        full: "We offer scanning, OCR, indexing, and secure storage for efficient document workflows.",
        image: "/images/services/data.jpg",
    },
    {
        title: "AI & Automation Solutions",
        desc: "Automate workflows with AI systems.",
        full: "We build AI-driven systems for automation, predictive analytics, and smarter decisions.",
        image: "/images/services/ai.jpg",
    },
    {
        title: "GIS Technology",
        desc: "Geospatial insights & mapping systems.",
        full: "Advanced GIS solutions for mapping, spatial analysis, and business intelligence.",
        image: "/images/services/gis.jpg",
    },
    {
        title: "Security & Surveillance",
        desc: "Smart CCTV & monitoring systems.",
        full: "Complete surveillance solutions including installation, analytics, and remote access.",
        image: "/images/services/security.jpg",
    },
];

export default function CoreServices() {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleServices =
        isMobile && !showAll ? services.slice(0, 3) : services;

    return (
        <section className="relative py-16 md:py-24 bg-background overflow-hidden">

            {/* GRID */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),
                linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* HEADER */}
                <div className="flex items-start justify-between gap-4 mb-8">

                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text leading-tight">
                            Our <span className="text-primary">Core Services</span>
                        </h2>

                        <p className="text-text-light text-sm md:text-base mt-2 max-w-md">
                            Scalable technology solutions to automate, optimize,
                            and grow your business.
                        </p>
                    </div>

                    {/* MOBILE BUTTON */}
                    {isMobile && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-4 py-2 text-xs font-medium rounded-full 
                            bg-primary/10 text-primary 
                            hover:bg-primary hover:text-white 
                            transition-all duration-300 whitespace-nowrap"
                        >
                            {showAll ? "Less" : "More"}
                        </button>
                    )}
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {visibleServices.map((service, i) => {
                        const isOpen = openIndex === i;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group border border-border rounded-xl bg-surface overflow-hidden 
                                hover:shadow-xl transition-all duration-300"
                            >

                                {/* IMAGE */}
                                <div className="relative h-[180px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-4 flex flex-col">

                                    <h3 className="text-base font-semibold text-text group-hover:text-primary transition">
                                        {service.title}
                                    </h3>

                                    <p className="text-text-light text-sm mt-1">
                                        {service.desc}
                                    </p>

                                    {/* EXPAND */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-2" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-text-light text-sm">
                                            {service.full}
                                        </p>
                                    </div>

                                    {/* ACTION */}
                                    <div className="flex justify-between items-center mt-3">

                                        <button
                                            onClick={() =>
                                                setOpenIndex(isOpen ? null : i)
                                            }
                                            className="text-primary text-xs font-medium hover:underline"
                                        >
                                            {isOpen ? "Less" : "Read More"}
                                        </button>

                                        <span className="flex items-center gap-1 text-primary text-xs group-hover:gap-2 transition">
                                            Explore <ArrowRight size={14} />
                                        </span>

                                    </div>

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}