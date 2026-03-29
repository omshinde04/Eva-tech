"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Cpu,
    TrendingUp,
    Headphones,
} from "lucide-react";

const points = [
    {
        title: "Enterprise-Level Solutions",
        desc: "Built for scalability, security, and long-term business growth.",
        icon: ShieldCheck,
    },
    {
        title: "Advanced Technologies",
        desc: "AI, cloud, GIS, and modern architectures powering your systems.",
        icon: Cpu,
    },
    {
        title: "Scalable Architecture",
        desc: "Flexible systems designed to grow with your business needs.",
        icon: TrendingUp,
    },
    {
        title: "Reliable Support",
        desc: "Dedicated support and continuous optimization for your systems.",
        icon: Headphones,
    },
];

export default function WhyChoose() {
    return (
        <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-18 md:pb-28 bg-primary overflow-hidden">

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full" />
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

                <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

                    {/* 🔥 LEFT */}
                    <div className="lg:sticky top-24 h-fit">

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold text-textPrimary leading-tight"
                        >
                            Why{" "}
                            <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                                Evatech Stands Out
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-textSecondary mt-4 text-sm sm:text-base leading-relaxed max-w-md"
                        >
                            We combine innovation, scalability, and reliability to deliver
                            enterprise-grade solutions that drive measurable business impact.
                        </motion.p>

                        <div className="mt-6 h-[3px] w-16 bg-gradient-to-r from-accent to-accentSoft rounded-full" />

                    </div>

                    {/* 🔥 RIGHT */}
                    <div className="relative">

                        {/* LINE */}
                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/40 to-transparent hidden sm:block" />

                        <div className="flex flex-col gap-8 md:gap-12">

                            {points.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="group flex items-start gap-4"
                                    >

                                        {/* ICON */}
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl 
                      bg-gradient-to-br from-accent to-accentSoft 
                      text-white flex items-center justify-center 
                      shadow-md group-hover:scale-110 transition">
                                                <Icon size={16} />
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="bg-white/80 backdrop-blur-md 
                    border border-borderSubtle 
                    rounded-xl p-4 sm:p-5 md:p-6 
                    shadow-soft group-hover:shadow-xl 
                    transition w-full">

                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-textPrimary">
                                                {item.title}
                                            </h3>

                                            <p className="text-textSecondary text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
                                                {item.desc}
                                            </p>

                                            <div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-accent to-accentSoft group-hover:w-14 transition-all duration-500" />

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}