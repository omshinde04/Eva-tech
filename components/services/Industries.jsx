"use client";

import { motion } from "framer-motion";
import {
    Building2,
    HeartPulse,
    GraduationCap,
    Briefcase,
    Truck,
    Landmark
} from "lucide-react";

const industries = [
    {
        title: "Government",
        desc: "Digitization, data management, and secure IT infrastructure for government projects.",
        icon: Landmark,
    },
    {
        title: "Healthcare",
        desc: "Digital records, AI systems, and secure data solutions for modern healthcare.",
        icon: HeartPulse,
    },
    {
        title: "Education",
        desc: "Smart systems, digitization, and automation for educational institutions.",
        icon: GraduationCap,
    },
    {
        title: "Corporate Enterprises",
        desc: "ERP systems, cloud infrastructure, and enterprise automation solutions.",
        icon: Briefcase,
    },
    {
        title: "Logistics",
        desc: "Tracking systems, GIS solutions, and automation for logistics operations.",
        icon: Truck,
    },
    {
        title: "Finance",
        desc: "Secure data systems, cloud infrastructure, and financial automation tools.",
        icon: Building2,
    },
];

export default function Industries() {
    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID BG */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-text">
                        Industries We{" "}
                        <span className="text-primary">
                            Serve
                        </span>
                    </h2>

                    <p className="text-text-light mt-3 text-sm md:text-base">
                        Delivering tailored technology solutions across diverse industries,
                        helping organizations scale, innovate, and operate efficiently.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {industries.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                className="group relative border border-border rounded-2xl bg-surface p-6 md:p-7 
                                shadow-soft hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >

                                {/* ICON */}
                                <div className="mb-4 text-primary group-hover:scale-110 transition">
                                    <Icon size={28} />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-lg md:text-xl font-semibold text-text group-hover:text-primary transition">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-text-light text-sm mt-3 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* HOVER LINE */}
                                <div className="mt-5 h-[2px] w-0 bg-primary group-hover:w-16 transition-all duration-500"></div>

                                {/* GLOW */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}