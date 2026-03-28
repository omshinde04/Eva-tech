"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    Cloud,
    FileText,
    Brain,
    Shield,
    Users,
} from "lucide-react";

export default function Services() {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const services = [
        {
            title: "IT & Software Solutions",
            desc: "Custom software, ERP systems, and automation solutions designed to streamline operations and accelerate digital transformation.",
            icon: Cpu,
        },
        {
            title: "Cloud & Infrastructure",
            desc: "Scalable cloud computing, hosting, server management, and disaster recovery solutions ensuring performance and reliability.",
            icon: Cloud,
        },
        {
            title: "Document Digitisation",
            desc: "Advanced scanning, OCR processing, indexing, and secure digital archiving of physical documents and records.",
            icon: FileText,
        },
        {
            title: "AI & Emerging Tech",
            desc: "AI-powered solutions, drone technologies, and GIS systems to enable smarter decisions and innovation.",
            icon: Brain,
        },
        {
            title: "Security & Surveillance",
            desc: "Smart CCTV systems and real-time surveillance solutions to ensure safety and operational control.",
            icon: Shield,
        },
        {
            title: "Enterprise Workforce",
            desc: "On-demand skilled technical manpower to support enterprise-scale operations and project delivery.",
            icon: Users,
        },
    ];

    // ✅ FINAL LOGIC
    const visibleServices =
        isMobile && !showAll ? services.slice(0, 3) : services;

    return (
        <section className="relative py-24 bg-background overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">

                    {/* LEFT */}
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-text leading-tight">
                            Our{" "}
                            <span className="text-primary">
                                Services
                            </span>
                        </h2>

                        <p className="text-text-light mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                            Delivering end-to-end technology solutions across industries with innovation,
                            precision, and scalability.
                        </p>
                    </div>

                    {/* RIGHT BUTTON (desktop only) */}
                    {isMobile && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm text-primary font-medium hover:underline self-start md:self-auto"
                        >
                            {showAll ? "View Less" : "View More"}
                        </button>
                    )}
                </div>

                {/* GRID */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {visibleServices.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="group relative p-[1px] rounded-2xl 
                                bg-gradient-to-b from-transparent via-border to-transparent 
                                hover:from-primary/40 hover:to-primary/20 
                                transition-all duration-500"
                            >
                                <div className="bg-surface rounded-2xl p-6 md:p-7 h-full flex flex-col gap-4 
                                shadow-soft hover:shadow-xl transition-all duration-300 
                                hover:-translate-y-1">

                                    {/* ICON */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                                    bg-primary/10 text-primary 
                                    group-hover:bg-primary group-hover:text-white 
                                    transition-all duration-300">
                                        <Icon size={22} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-lg md:text-xl font-semibold text-text 
                                    group-hover:text-primary transition">
                                        {service.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="text-sm md:text-base text-text-light leading-relaxed">
                                        {service.desc}
                                    </p>

                                    {/* HOVER LINE */}
                                    <div className="mt-auto">
                                        <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
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