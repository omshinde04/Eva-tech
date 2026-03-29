"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center bg-primary overflow-hidden pt-20 md:pt-24">

            {/* GRID */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
                        backgroundSize: "48px 48px",
                    }}
                />
                <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-white/60 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">

                <div className="flex flex-col items-center text-center gap-7 md:gap-10">

                    {/* BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full border border-borderSubtle bg-white text-xs text-textSecondary shadow-sm"
                    >
                        Trusted by modern businesses
                    </motion.div>

                    {/* HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold tracking-tight text-textPrimary max-w-5xl leading-[1.1]"
                    >
                        Building the future of
                        <span className="block text-accent mt-3">
                            digital experiences
                        </span>
                    </motion.h1>

                    {/* SUBTEXT */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-textSecondary max-w-2xl leading-relaxed"
                    >
                        We deliver scalable web platforms, high-performance systems,
                        and strategic digital solutions that help businesses grow faster
                        and operate smarter.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-row gap-4 mt-2"
                    >

                        <Link
                            href="/contact"
                            className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-accent text-white text-sm md:text-base font-medium 
              hover:bg-accentSoft transition-all duration-300 shadow-soft 
              flex items-center justify-center gap-2"
                        >
                            Get Started
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/services"
                            className="px-6 md:px-8 py-3 md:py-4 rounded-xl border border-borderSubtle text-textPrimary text-sm md:text-base
              hover:border-borderStrong hover:bg-secondary transition-all duration-300"
                        >
                            Services
                        </Link>

                    </motion.div>

                    {/* CLIENT TRUST */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-3 pt-2"
                    >

                        <div className="flex -space-x-3">

                            {["user1.jpg", "user2.jpg", "user3.jpg", "user4.jpg", "user5.jpg"].map((img, i) => (
                                <img
                                    key={i}
                                    src={`/images/${img}`}
                                    alt="client"
                                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white object-cover hover:scale-105 transition"
                                />
                            ))}

                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-xs text-textPrimary">
                                +20
                            </div>

                        </div>

                        <p className="text-sm text-textMuted text-center">
                            Trusted by founders, startups & growing businesses
                        </p>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}