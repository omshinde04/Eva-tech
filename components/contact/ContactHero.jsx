"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
    const scrollToForm = () => {
        const section = document.getElementById("contact-form");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[75vh] flex items-center justify-center bg-primary overflow-hidden pt-20 sm:pt-20 md:pt-0">

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/20 blur-3xl rounded-full" />

                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/20 blur-3xl rounded-full" />

                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-3xl rounded-full" />

            </div>

            {/* 🔥 CONTENT */}
            <div className="relative z-10 max-w-4xl w-full px-5 sm:px-6 md:px-10 text-center flex flex-col items-center gap-6 sm:gap-7">

                {/* BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full bg-white/70 backdrop-blur 
          text-xs text-textSecondary shadow-sm border border-borderSubtle"
                >
                    🚀 Let’s Start Your Project
                </motion.div>

                {/* HEADING */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-textPrimary leading-[1.1] tracking-tight"
                >
                    Let’s Build Something{" "}
                    <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                        Powerful
                    </span>
                </motion.h1>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg text-textSecondary max-w-2xl leading-relaxed"
                >
                    Share your idea — we’ll transform it into a scalable,
                    high-performance digital solution built for real growth.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-2"
                >
                    <button
                        onClick={scrollToForm}
                        className="group inline-flex items-center gap-2 
            bg-gradient-to-r from-accent to-accentSoft text-white 
            px-7 py-3 rounded-xl 
            shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:scale-[1.05]"
                    >
                        Start Project

                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition"
                        />
                    </button>
                </motion.div>

                {/* TRUST */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-textMuted mt-1"
                >
                    Trusted by startups → enterprises across industries
                </motion.div>

            </div>
        </section>
    );
}