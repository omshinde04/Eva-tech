"use client";

import { motion } from "framer-motion";
import {
    Search,
    Lightbulb,
    Code,
    ShieldCheck,
    Rocket
} from "lucide-react";

const steps = [
    {
        title: "Requirement Analysis",
        icon: Search,
    },
    {
        title: "Planning & Strategy",
        icon: Lightbulb,
    },
    {
        title: "Development & Implementation",
        icon: Code,
    },
    {
        title: "Testing & Optimization",
        icon: ShieldCheck,
    },
    {
        title: "Deployment & Support",
        icon: Rocket,
    },
];

export default function Process() {
    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID BG */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-text">
                        Our <span className="text-primary">Process</span>
                    </h2>

                    <p className="text-text-light mt-3 text-sm md:text-base">
                        A structured approach to deliver scalable and reliable solutions.
                    </p>
                </div>

                {/* SCROLL WRAPPER */}
                <div className="relative overflow-hidden">

                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                    >

                        {/* DUPLICATE FOR INFINITE LOOP */}
                        {[...steps, ...steps].map((step, i) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 px-6 py-4 
                                    bg-surface border border-border rounded-xl 
                                    shadow-soft min-w-[260px]"
                                >

                                    {/* ICON */}
                                    <div className="text-primary">
                                        <Icon size={22} />
                                    </div>

                                    {/* TEXT */}
                                    <span className="text-text text-sm font-medium">
                                        {step.title}
                                    </span>

                                </div>
                            );
                        })}

                    </motion.div>

                </div>

            </div>
        </section>
    );
}