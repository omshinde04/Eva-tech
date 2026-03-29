"use client";

import { motion } from "framer-motion";
import {
    Search,
    Lightbulb,
    Code,
    ShieldCheck,
    Rocket,
} from "lucide-react";

const steps = [
    { title: "Requirement Analysis", icon: Search },
    { title: "Planning & Strategy", icon: Lightbulb },
    { title: "Development & Implementation", icon: Code },
    { title: "Testing & Optimization", icon: ShieldCheck },
    { title: "Deployment & Support", icon: Rocket },
];

export default function Process() {
    return (
        <section className="relative pt-12 pb-20 sm:pt-14 sm:pb-24 md:pt-16 md:pb-28 bg-primary overflow-hidden">

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full" />
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

                {/* 🔥 HEADER */}
                <div className="text-center mb-12 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary">
                        Our{" "}
                        <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                            Process
                        </span>
                    </h2>

                    <p className="text-textSecondary mt-3 text-sm md:text-base max-w-xl mx-auto">
                        A structured and scalable workflow ensuring quality, performance,
                        and long-term reliability.
                    </p>
                </div>

                {/* 🔥 SCROLL AREA */}
                <div className="relative overflow-hidden">

                    {/* FADE EDGES */}
                    <div className="absolute left-0 top-0 h-full w-16 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 h-full w-16 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <motion.div
                        className="flex gap-4 sm:gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 25,
                            ease: "linear",
                        }}
                    >

                        {[...steps, ...steps].map((step, i) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={i}
                                    className="group relative flex items-center gap-4 px-5 sm:px-6 py-4 
                  bg-white/80 backdrop-blur-md 
                  border border-borderSubtle 
                  rounded-2xl 
                  shadow-soft hover:shadow-xl 
                  transition-all duration-300 
                  min-w-[220px] sm:min-w-[260px]"
                                >

                                    {/* ICON */}
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-accent to-accentSoft text-white 
                  shadow-md group-hover:scale-110 transition duration-300">
                                        <Icon size={18} />
                                    </div>

                                    {/* TEXT */}
                                    <span className="text-textPrimary text-sm sm:text-base font-medium">
                                        {step.title}
                                    </span>

                                    {/* HOVER GLOW */}
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition rounded-2xl" />

                                </div>
                            );
                        })}

                    </motion.div>

                </div>

            </div>
        </section>
    );
}