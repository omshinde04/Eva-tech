"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Cloud,
    FileText,
    Bot,
    Map,
    Camera,
} from "lucide-react";

const items = [
    {
        title: "IT Services & ERP Systems",
        icon: Cpu,
        desc: "Enterprise-grade software, ERP systems, and automation solutions.",
    },
    {
        title: "Cloud Infrastructure & Hosting",
        icon: Cloud,
        desc: "Scalable cloud environments, hosting, and server management.",
    },
    {
        title: "Document Digitisation & OCR",
        icon: FileText,
        desc: "Scanning, OCR, indexing, and secure digital archiving solutions.",
    },
    {
        title: "AI & Automation Solutions",
        icon: Bot,
        desc: "AI-powered workflows, automation, and intelligent systems.",
    },
    {
        title: "GIS Technology",
        icon: Map,
        desc: "Geospatial systems, mapping, and advanced analytics solutions.",
    },
    {
        title: "CCTV & Surveillance Systems",
        icon: Camera,
        desc: "Smart surveillance, security systems, and monitoring solutions.",
    },
];

export default function Expertise() {
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-primary overflow-hidden">

            {/* 🔥 BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary"
                    >
                        Our{" "}
                        <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                            Expertise
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-textSecondary mt-4 text-sm md:text-base"
                    >
                        Delivering cutting-edge technology solutions across industries with precision and scalability.
                    </motion.p>
                </div>

                {/* CARDS */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {items.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={itemAnim}
                                whileHover={{ y: -6 }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-2xl p-6 md:p-7 flex flex-col gap-4 
                shadow-soft hover:shadow-xl transition-all duration-300 relative overflow-hidden">

                                    {/* 🔥 HOVER GLOW (SUBTLE) */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accentSoft/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                    {/* ICON */}
                                    <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-accent/10 text-accent 
                  group-hover:bg-accent group-hover:text-white 
                  transition-all duration-300">

                                        <Icon size={22} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="relative z-10 text-lg md:text-xl font-semibold text-textPrimary">
                                        {item.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="relative z-10 text-textSecondary text-sm leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>

                                    {/* MINIMAL ACCENT LINE */}
                                    <div className="relative z-10 mt-auto h-[2px] w-6 bg-accent/40 group-hover:w-14 group-hover:bg-accent transition-all duration-500"></div>

                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}