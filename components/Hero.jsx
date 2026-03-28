"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:36px_36px] opacity-40"></div>

                {/* LEFT GLOW */}
                <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>

                {/* RIGHT GLOW */}
                <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full"></div>
            </div>

            {/* FLOATING ELEMENTS (SUBTLE PREMIUM TOUCH) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="hidden md:block absolute left-10 top-32 w-24 h-24 bg-white shadow-soft rounded-xl border border-border opacity-70"
            />

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="hidden md:block absolute right-10 bottom-32 w-28 h-28 bg-white shadow-soft rounded-xl border border-border opacity-70"
            />

            {/* CONTENT */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">

                <div className="flex flex-col items-center text-center gap-8">

                    {/* BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full border border-border bg-surface/70 backdrop-blur text-xs text-text-light shadow-sm"
                    >
                        🚀 Trusted by Next-Gen Enterprises
                    </motion.div>

                    {/* HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight text-text max-w-4xl"
                    >
                        Architecting the{" "}
                        <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Future
                        </span>{" "}
                        of Enterprise Tech
                    </motion.h1>

                    {/* SUBTEXT */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm sm:text-base md:text-lg text-text-light max-w-2xl leading-relaxed"
                    >
                        High-precision IT consulting and digital transformation for global leaders.
                        We engineer{" "}
                        <span className="text-primary font-medium">
                            competitive advantages
                        </span>.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <button className="bg-primary text-white px-6 py-3 text-sm rounded-full 
                        hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                            Start Journey
                        </button>

                        <button className="px-6 py-3 text-sm rounded-full border border-border text-text 
                        bg-surface/80 hover:bg-primary-light transition-all duration-300">
                            View Portfolio
                        </button>
                    </motion.div>

                    {/* TRUST LINE */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xs text-text-light"
                    >
                        Powering startups → scaling enterprises
                    </motion.div>

                </div>
            </div>
        </section>
    );
}