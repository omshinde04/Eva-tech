"use client";

import { motion } from "framer-motion";
import {
    Building2,
    HeartPulse,
    GraduationCap,
    Briefcase,
    Truck,
    Landmark,
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
        <section className="relative pt-12 pb-20 sm:pt-14 sm:pb-24 md:pt-16 md:pb-28 bg-primary overflow-hidden">

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full" />
                <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

                {/* 🔥 HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary">
                        Industries We{" "}
                        <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                            Serve
                        </span>
                    </h2>

                    <p className="text-textSecondary mt-3 text-sm md:text-base">
                        Delivering tailored technology solutions across industries,
                        enabling organizations to scale, innovate, and operate efficiently.
                    </p>
                </div>

                {/* 🔥 GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {industries.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-2xl overflow-hidden"
                            >

                                <div className="relative h-full bg-white/80 backdrop-blur-md p-6 md:p-7 
                rounded-2xl shadow-soft hover:shadow-2xl 
                transition-all duration-500 flex flex-col">

                                    {/* ICON */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-accent to-accentSoft text-white 
                  shadow-md group-hover:scale-110 transition duration-300">
                                        <Icon size={22} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mt-5">
                                        {item.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="text-textSecondary text-sm mt-3 leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>

                                    {/* LINE */}
                                    <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-accent to-accentSoft group-hover:w-16 transition-all duration-500" />

                                    {/* GLOW */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accentSoft/5 opacity-0 group-hover:opacity-100 transition rounded-2xl" />

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}