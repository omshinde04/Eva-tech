"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Cloud,
    FileText,
    Bot,
    Map,
    Camera
} from "lucide-react";

const items = [
    {
        title: "IT Services & ERP Systems",
        icon: Cpu,
        desc: "Enterprise-grade software, ERP systems, and automation solutions."
    },
    {
        title: "Cloud Infrastructure & Hosting",
        icon: Cloud,
        desc: "Scalable cloud environments, hosting, and server management."
    },
    {
        title: "Document Digitisation & OCR",
        icon: FileText,
        desc: "Scanning, OCR, indexing, and secure digital archiving solutions."
    },
    {
        title: "AI & Automation Solutions",
        icon: Bot,
        desc: "AI-powered workflows, automation, and intelligent systems."
    },
    {
        title: "GIS Technology",
        icon: Map,
        desc: "Geospatial systems, mapping, and advanced analytics solutions."
    },
    {
        title: "CCTV & Surveillance Systems",
        icon: Camera,
        desc: "Smart surveillance, security systems, and monitoring solutions."
    },
];

export default function Expertise() {
    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>

                {/* GLOW */}
                <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-headline font-bold text-text"
                    >
                        Our{" "}
                        <span className="text-primary">
                            Expertise
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-text-light mt-4 text-sm md:text-base"
                    >
                        Delivering cutting-edge technology solutions across industries with precision and scalability.
                    </motion.p>
                </div>

                {/* PREMIUM GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {items.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                viewport={{ once: true }}
                                className="group h-full"
                            >
                                <div className="h-full p-[1px] rounded-2xl 
                                bg-gradient-to-b from-transparent via-border to-transparent 
                                hover:from-primary/40 hover:to-primary/20 transition-all duration-500">

                                    <div className="h-full bg-surface rounded-2xl p-6 md:p-7 
                                    shadow-soft group-hover:shadow-xl 
                                    transition-all duration-300 relative overflow-hidden flex flex-col">

                                        {/* ICON */}
                                        <div className="mb-4 text-primary group-hover:scale-110 transition">
                                            <Icon size={26} />
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="text-lg md:text-xl font-semibold text-text group-hover:text-primary transition">
                                            {item.title}
                                        </h3>

                                        {/* DESC */}
                                        <p className="text-text-light text-sm mt-3 leading-relaxed flex-grow">
                                            {item.desc}
                                        </p>

                                        {/* HOVER LINE */}
                                        <div className="mt-5 h-[2px] w-0 bg-primary group-hover:w-16 transition-all duration-500"></div>

                                        {/* GLOW */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>

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