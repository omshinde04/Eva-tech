"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden pt-20 md:pt-24">

            {/* GRID */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>

                {/* GLOW */}
                <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full"
                    >
                        <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">

                            <Image
                                src="/images/about-hero.jpg"
                                alt="Cloud Infrastructure and IT Services"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <div className="flex flex-col gap-5 text-center lg:text-left">

                        {/* TAG */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mx-auto lg:mx-0 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit"
                        >
                            🚀 About Evatech Solutions
                        </motion.div>

                        {/* HEADING */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight"
                        >
                            Powering Businesses with{" "}
                            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                                Scalable Technology
                            </span>
                        </motion.h1>

                        {/* DESC */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-text-light text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Evatech Solutions LLP delivers enterprise IT services,
                            cloud infrastructure, AI solutions, and document digitization
                            to help organizations transform, scale, and innovate.
                        </motion.p>

                        {/* BUTTONS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-3 mt-2"
                        >
                            <button className="bg-primary text-white px-5 py-2.5 text-sm rounded-full hover:scale-105 transition shadow-md">
                                Explore Services
                            </button>

                            <button className="border border-border px-5 py-2.5 text-sm rounded-full hover:bg-primary-light transition">
                                Contact Us
                            </button>
                        </motion.div>

                        {/* TRUST LINE */}
                        <p className="text-xs text-text-light mt-2">
                            Trusted for IT • Cloud • AI • Digitization
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}