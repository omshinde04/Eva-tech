"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-[#0B1220] overflow-hidden">

            {/* 🔥 TOP DIVIDER (SEPARATION) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-accent/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-accentSoft/20 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 md:px-10">

                {/* 🔥 CARD CONTAINER (THIS IS THE MAGIC) */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center flex flex-col items-center gap-7 sm:gap-8 shadow-xl">

                    {/* BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-white/10 text-xs text-white/70 border border-white/10"
                    >
                        🚀 Ready to Transform Your Business?
                    </motion.div>

                    {/* HEADING */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-white leading-tight"
                    >
                        Let’s Build the{" "}
                        <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                            Future Together
                        </span>
                    </motion.h2>

                    {/* SUBTEXT */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
                    >
                        Partner with Evatech Solutions LLP to accelerate your digital transformation,
                        scale your infrastructure, and unlock new business opportunities.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 
              bg-gradient-to-r from-accent to-accentSoft text-white 
              px-7 py-3 rounded-xl 
              shadow-lg hover:shadow-2xl 
              transition-all duration-300 hover:scale-[1.04]"
                        >
                            Start Your Project

                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition"
                            />
                        </Link>
                    </motion.div>

                    {/* TRUST */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-xs text-white/50"
                    >
                        Trusted by startups → enterprises across industries
                    </motion.p>

                </div>

            </div>
        </section>
    );
}