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

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
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

    const visibleServices =
        isMobile && !showAll ? services.slice(0, 3) : services;

    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-primary">

            <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">

                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary">
                            Our <span className="text-accent">Services</span>
                        </h2>

                        <p className="text-textSecondary mt-3 text-sm sm:text-base md:text-lg">
                            Delivering end-to-end technology solutions across industries with innovation,
                            precision, and scalability.
                        </p>
                    </div>

                    {isMobile && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm text-accent font-medium"
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
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="group rounded-2xl p-[1px] bg-gradient-to-br from-accent to-accentSoft"
                            >
                                <div className="h-full rounded-2xl bg-gradient-to-br from-accent to-accentSoft p-6 md:p-7 text-white flex flex-col gap-4 transition-all duration-300 group-hover:scale-[1.02]">

                                    {/* ICON */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                                        <Icon size={22} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-lg md:text-xl font-semibold">
                                        {service.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                        {service.desc}
                                    </p>

                                    {/* LINE */}
                                    <div className="mt-auto">
                                        <div className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>
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