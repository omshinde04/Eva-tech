"use client";

import { motion } from "framer-motion";
import { Server, Brain, Database } from "lucide-react";

export default function Overview() {
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-primary overflow-hidden">

            {/* 🔥 PREMIUM BACKGROUND (NO GRID) */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* 🔥 LEFT CONTENT */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col gap-5"
                    >

                        {/* TAG */}
                        <motion.div
                            variants={item}
                            className="px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium w-fit"
                        >
                            Who We Are
                        </motion.div>

                        {/* HEADING */}
                        <motion.h2
                            variants={item}
                            className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary leading-tight"
                        >
                            Driving Digital Transformation with{" "}
                            <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                                Innovation
                            </span>
                        </motion.h2>

                        {/* DESC */}
                        <motion.p
                            variants={item}
                            className="text-textSecondary text-sm sm:text-base md:text-lg leading-relaxed"
                        >
                            Evatech Solutions LLP delivers enterprise IT services,
                            cloud infrastructure, AI solutions, and document digitization.
                        </motion.p>

                        <motion.p
                            variants={item}
                            className="text-textSecondary text-sm sm:text-base md:text-lg leading-relaxed"
                        >
                            We transform workflows into scalable digital ecosystems.
                        </motion.p>

                        {/* 🔥 STATS (UPGRADED) */}
                        <motion.div
                            variants={item}
                            className="flex gap-6 sm:gap-10 mt-4"
                        >
                            {[
                                { num: "500+", label: "Clients" },
                                { num: "1000+", label: "Projects" },
                                { num: "10+", label: "Years" },
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-textPrimary group-hover:text-accent transition">
                                        {item.num}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-textSecondary">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                    </motion.div>

                    {/* 🔥 RIGHT CARDS */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-5"
                    >

                        {[
                            {
                                icon: Server,
                                title: "Enterprise IT Solutions",
                                desc: "Scalable systems built for performance.",
                            },
                            {
                                icon: Brain,
                                title: "AI & Automation",
                                desc: "Smart automation for modern business.",
                            },
                            {
                                icon: Database,
                                title: "Data & Digitisation",
                                desc: "Secure digital transformation with OCR.",
                                full: true,
                            },
                        ].map((itemData, i) => {
                            const Icon = itemData.icon;

                            return (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ y: -6 }}
                                    className={`group rounded-2xl p-[1px] bg-gradient-to-br from-accent to-accentSoft 
                  ${itemData.full ? "sm:col-span-2" : ""}`}
                                >
                                    <div className="h-full rounded-2xl bg-white p-5 md:p-6 flex flex-col gap-3 
                  shadow-soft hover:shadow-lg transition-all duration-300">

                                        {/* ICON */}
                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg 
                    bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition">
                                            <Icon size={20} />
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="text-base md:text-lg font-semibold text-textPrimary">
                                            {itemData.title}
                                        </h3>

                                        {/* DESC */}
                                        <p className="text-sm text-textSecondary">
                                            {itemData.desc}
                                        </p>

                                        {/* LINE */}
                                        <div className="mt-auto h-[2px] w-0 bg-accent group-hover:w-12 transition-all duration-500"></div>

                                    </div>
                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>

            </div>
        </section>
    );
}