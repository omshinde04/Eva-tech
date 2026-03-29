"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Cloud,
    Brain,
    Shield,
    Database,
    Users,
} from "lucide-react";

export default function WhyChoose() {
    const features = [
        {
            icon: Cpu,
            title: "End-to-End Digital Solutions",
            desc: "From digitization to enterprise systems, we handle complete technology lifecycles seamlessly.",
        },
        {
            icon: Brain,
            title: "AI-Driven Innovation",
            desc: "We integrate AI, automation, and advanced analytics to future-proof your business.",
        },
        {
            icon: Cloud,
            title: "Scalable Cloud Infrastructure",
            desc: "Robust cloud systems with high availability, backup, and disaster recovery.",
        },
        {
            icon: Database,
            title: "Data Transformation Expertise",
            desc: "Digitizing and structuring data using OCR, indexing, and intelligent workflows.",
        },
        {
            icon: Shield,
            title: "Enterprise-Grade Security",
            desc: "Secure systems with surveillance, monitoring, and data protection at every layer.",
        },
        {
            icon: Users,
            title: "Skilled Workforce Support",
            desc: "Reliable technical manpower to execute complex enterprise projects efficiently.",
        },
    ];

    // 🔥 animation
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-primary overflow-hidden">

            {/* 🔥 GRID BACKGROUND (PREMIUM LIGHT) */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
                        backgroundSize: "44px 44px",
                    }}
                />

                {/* subtle glow */}
                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10">

                <div className="grid lg:grid-cols-2 gap-12 md:gap-16">

                    {/* LEFT */}
                    <div className="lg:sticky top-24 h-fit">

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary leading-tight"
                        >
                            Why Choose{" "}
                            <span className="text-accent">Evatech</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-5 text-textSecondary text-base md:text-lg leading-relaxed max-w-md"
                        >
                            We build scalable, secure, and intelligent digital ecosystems — not just solutions.
                        </motion.p>

                        {/* LINE */}
                        <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-accent to-accentSoft rounded-full"></div>

                    </div>

                    {/* RIGHT */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative flex flex-col gap-8 md:gap-10"
                    >

                        {/* timeline line */}
                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-borderSubtle hidden md:block"></div>

                        {features.map((itemData, i) => {
                            const Icon = itemData.icon;

                            return (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    className="group relative flex gap-5 items-start"
                                >

                                    {/* ICON */}
                                    <div className="relative z-10">

                                        <div className="w-11 h-11 rounded-lg 
                    bg-accent/10 text-accent
                    flex items-center justify-center
                    group-hover:bg-accent group-hover:text-white
                    transition-all duration-300">

                                            <Icon size={20} />
                                        </div>

                                        {/* glow */}
                                        <div className="absolute inset-0 rounded-lg bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

                                    </div>

                                    {/* CARD */}
                                    <div className="w-full rounded-xl border border-borderSubtle bg-white/80 backdrop-blur 
                  p-4 md:p-5 shadow-soft
                  transition-all duration-300
                  group-hover:shadow-lg group-hover:-translate-y-1">

                                        <h3 className="text-base md:text-lg font-semibold text-textPrimary">
                                            {itemData.title}
                                        </h3>

                                        <p className="text-sm md:text-base text-textSecondary mt-2 leading-relaxed">
                                            {itemData.desc}
                                        </p>

                                        {/* hover line */}
                                        <div className="mt-3 h-[2px] w-0 bg-accent group-hover:w-16 transition-all duration-500"></div>

                                    </div>

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>
            </div>
        </section>
    );
}