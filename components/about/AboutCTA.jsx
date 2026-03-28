"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>

                {/* GLOW */}
                <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-8">

                {/* BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full border border-border bg-surface/70 backdrop-blur text-xs text-text-light shadow-sm"
                >
                    🚀 Ready to Transform Your Business?
                </motion.div>

                {/* HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-text leading-tight"
                >
                    Let’s Build the{" "}
                    <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Future Together
                    </span>
                </motion.h2>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-text-light text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
                >
                    Partner with Evatech Solutions LLP to accelerate your digital transformation,
                    scale your infrastructure, and unlock new business opportunities.
                </motion.p>

                {/* BUTTON */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-2 
                        bg-primary text-white px-7 py-3 rounded-full 
                        shadow-lg hover:shadow-xl 
                        transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Project</span>

                        <ArrowRight
                            size={18}
                            className="relative z-10 group-hover:translate-x-1 transition"
                        />

                        {/* HOVER GLOW */}
                        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
                    </Link>
                </motion.div>

                {/* TRUST LINE */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-text-light"
                >
                    Trusted by startups → enterprises across industries
                </motion.p>

            </div>
        </section>
    );
}