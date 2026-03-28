"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>

                {/* GLOW */}
                <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

                {/* FIXED HEIGHT GRID */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">

                    {/* VISION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.4 }}
                        className="group h-full"
                    >
                        <div className="h-full p-[1px] rounded-2xl 
                        bg-gradient-to-b from-transparent via-border to-transparent 
                        hover:from-primary/40 hover:to-primary/20 transition-all duration-500">

                            <div className="h-full flex flex-col justify-between 
                            bg-surface rounded-2xl p-8 md:p-10 
                            shadow-soft group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">

                                {/* TOP */}
                                <div>
                                    <div className="mb-5 text-primary group-hover:scale-110 transition">
                                        <Eye size={28} />
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-text group-hover:text-primary transition">
                                        Our Vision
                                    </h3>

                                    <p className="text-text-light mt-4 leading-relaxed text-sm md:text-base">
                                        To become a leading global technology partner delivering innovative,
                                        scalable, and intelligent digital solutions.
                                    </p>
                                </div>

                                {/* BOTTOM LINE */}
                                <div className="mt-6 h-[2px] w-0 bg-primary group-hover:w-16 transition-all duration-500"></div>

                                {/* GLOW */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>

                            </div>
                        </div>
                    </motion.div>

                    {/* MISSION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.4 }}
                        className="group h-full"
                    >
                        <div className="h-full p-[1px] rounded-2xl 
                        bg-gradient-to-b from-transparent via-border to-transparent 
                        hover:from-primary/40 hover:to-primary/20 transition-all duration-500">

                            <div className="h-full flex flex-col justify-between 
                            bg-surface rounded-2xl p-8 md:p-10 
                            shadow-soft group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">

                                {/* TOP */}
                                <div>
                                    <div className="mb-5 text-primary group-hover:scale-110 transition">
                                        <Target size={28} />
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-text group-hover:text-primary transition">
                                        Our Mission
                                    </h3>

                                    <p className="text-text-light mt-4 leading-relaxed text-sm md:text-base">
                                        Empower businesses with advanced IT services, AI, cloud solutions,
                                        and digital transformation strategies.
                                    </p>
                                </div>

                                {/* BOTTOM LINE */}
                                <div className="mt-6 h-[2px] w-0 bg-primary group-hover:w-16 transition-all duration-500"></div>

                                {/* GLOW */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>

                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}