"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-primary overflow-hidden pt-16 md:pt-20">

            {/* PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-accent/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-100px] right-[-100px] w-[320px] h-[320px] bg-accentSoft/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full">

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                    {/* 🔥 IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full"
                    >
                        <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">

                            <Image
                                src="/images/about-premium.jpg"
                                alt="Evatech Technology"
                                fill
                                className="object-cover scale-105 hover:scale-110 transition duration-700"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* 🔥 CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-4 sm:gap-5 text-center lg:text-left"
                    >

                        {/* TAG */}
                        <div className="mx-auto lg:mx-0 px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium w-fit">
                            🚀 About Evatech Solutions
                        </div>

                        {/* HEADING */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-textPrimary leading-tight">
                            Building Future-Ready{" "}
                            <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                                Digital Infrastructure
                            </span>
                        </h1>

                        {/* DESC */}
                        <p className="text-textSecondary text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Evatech Solutions LLP delivers enterprise IT services,
                            cloud infrastructure, AI solutions, and digital transformation
                            strategies that help organizations scale faster and operate smarter.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-1">

                            {/* SERVICES BUTTON */}
                            <Link
                                href="/services"
                                className="bg-accent text-white px-5 py-2.5 text-sm rounded-xl 
        hover:scale-105 transition shadow-soft inline-flex items-center justify-center"
                            >
                                Explore Services
                            </Link>

                            {/* CONTACT BUTTON */}
                            <Link
                                href="/contact"
                                className="border border-borderSubtle px-5 py-2.5 text-sm rounded-xl 
        hover:bg-secondary transition inline-flex items-center justify-center"
                            >
                                Contact Us
                            </Link>

                        </div>
                        {/* TRUST */}
                        <p className="text-xs text-textMuted mt-1">
                            Trusted by startups • enterprises • growing businesses
                        </p>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}