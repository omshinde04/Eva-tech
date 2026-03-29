"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-[#0B1220] overflow-hidden">

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">

                {/* subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0f172a] to-[#111827]" />

                {/* glow */}
                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/20 blur-3xl rounded-full"></div>

            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10">

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">

                    {/* 🔥 VISION */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group rounded-2xl p-[1px] bg-gradient-to-br from-accent to-accentSoft"
                    >
                        <div className="h-full rounded-2xl p-6 md:p-8 bg-gradient-to-br from-accent to-accentSoft text-white flex flex-col gap-5 transition-all duration-300">

                            {/* ICON */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                                <Eye size={24} />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-xl md:text-2xl font-semibold">
                                Our Vision
                            </h3>

                            {/* DESC */}
                            <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                To become a leading global technology partner delivering innovative,
                                scalable, and intelligent digital solutions.
                            </p>

                            {/* LINE */}
                            <div className="mt-auto h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>

                        </div>
                    </motion.div>

                    {/* 🔥 MISSION */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group rounded-2xl p-[1px] bg-gradient-to-br from-accent to-accentSoft"
                    >
                        <div className="h-full rounded-2xl p-6 md:p-8 bg-gradient-to-br from-accent to-accentSoft text-white flex flex-col gap-5 transition-all duration-300">

                            {/* ICON */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                                <Target size={24} />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-xl md:text-2xl font-semibold">
                                Our Mission
                            </h3>

                            {/* DESC */}
                            <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                Empower businesses with advanced IT services, AI, cloud solutions,
                                and digital transformation strategies.
                            </p>

                            {/* LINE */}
                            <div className="mt-auto h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}