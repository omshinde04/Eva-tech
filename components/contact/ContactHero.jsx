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
        <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center justify-center bg-background overflow-hidden pt-14 md:pt-0">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
        bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),
        linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
        bg-[size:36px_36px] opacity-40"></div>

                {/* LEFT GLOW */}
                <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>

                {/* RIGHT GLOW */}
                <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full"></div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-4xl w-full px-6 md:px-10 text-center flex flex-col items-center gap-7">

                {/* BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur text-xs text-text-light shadow-sm"
                >
                    🚀 Let’s Start Your Project
                </motion.div>

                {/* HEADING */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-text leading-[1.1] tracking-tight"
                >
                    Let’s Build Something{" "}
                    <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Great
                    </span>
                </motion.h1>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg text-text-light max-w-2xl leading-relaxed"
                >
                    Tell us about your idea — we’ll turn it into a scalable,
                    high-performance digital solution designed for growth.
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
                        className="group bg-primary text-white px-7 py-3 rounded-full 
            hover:scale-105 transition-all duration-300 
            shadow-lg hover:shadow-2xl flex items-center gap-2"
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
                    className="text-xs text-text-light mt-2"
                >
                    Trusted by startups → scaling enterprises
                </motion.div>
            </div>
        </section>
    );
}