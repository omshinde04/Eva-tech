"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesHero() {
    return (
        <section className="relative min-h-[100svh] flex items-center bg-background overflow-hidden">

            {/* SUBTLE GRID */}
            <div className="absolute inset-0 opacity-[0.18]">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
                bg-[size:30px_30px] sm:bg-[size:36px_36px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full py-16 sm:py-20">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col gap-6">

                        {/* HEADING */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="
                            font-semibold text-text tracking-[-0.02em] leading-[1.1]

                            text-[2.2rem] 
                            sm:text-[2.8rem] 
                            md:text-[3.5rem] 
                            lg:text-[4.2rem]

                            max-w-2xl
                        "
                        >
                            Enterprise technology services{" "}
                            <span className="text-primary">
                                engineered for scale
                            </span>
                        </motion.h1>

                        {/* SUBTEXT */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="
                            text-text-light 
                            text-sm sm:text-base md:text-lg 
                            leading-relaxed 
                            max-w-xl
                        "
                        >
                            We design, build, and scale high-performance systems across
                            cloud, AI, and enterprise infrastructure — enabling
                            organizations to move faster with confidence.
                        </motion.p>

                        {/* FEATURES */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
                        >
                            {[
                                "Cloud Infrastructure",
                                "AI & Automation",
                                "Digital Transformation",
                                "Enterprise Systems"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-text-light">
                                    <CheckCircle size={16} className="text-primary" />
                                    {item}
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="
                            flex flex-col sm:flex-row 
                            gap-3 sm:gap-4 
                            mt-4 w-full sm:w-auto
                        "
                        >
                            <Link
                                href="/contact"
                                className="
                                w-full sm:w-auto
                                bg-primary text-white 
                                px-6 py-3 
                                text-sm sm:text-base
                                rounded-full 
                                flex items-center justify-center gap-2
                                transition-all duration-300
                                hover:scale-[1.04] hover:shadow-md
                            "
                            >
                                Start Project
                                <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="#core-services"
                                className="
                                w-full sm:w-auto
                                px-6 py-3 
                                text-sm sm:text-base
                                rounded-full 
                                border border-border text-text 
                                flex items-center justify-center
                                transition-all duration-300
                                hover:bg-surface
                            "
                            >
                                Explore Services
                            </Link>
                        </motion.div>

                    </div>

                    {/* RIGHT (PREMIUM PANEL) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >

                        {/* MAIN PANEL */}
                        <div className="
                            bg-surface 
                            border border-border 
                            rounded-2xl 
                            p-6 sm:p-8 
                            shadow-sm
                        ">
                            <h3 className="text-base sm:text-lg font-semibold text-text mb-5">
                                Capabilities
                            </h3>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm">

                                {[
                                    "Cloud Systems",
                                    "AI Solutions",
                                    "ERP Platforms",
                                    "Data Infrastructure",
                                    "Security",
                                    "Automation"
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="
                                        border border-border 
                                        rounded-lg 
                                        px-3 py-2 
                                        text-center 
                                        text-text-light
                                        hover:border-primary hover:text-text
                                        transition
                                    "
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* FLOATING STAT (SUBTLE) */}
                        <div className="
                            hidden md:block
                            absolute -bottom-5 -right-5
                            bg-background border border-border
                            rounded-lg px-4 py-3
                            shadow-sm
                        ">
                            <p className="text-xs text-text-light">
                                Proven delivery across industries
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}