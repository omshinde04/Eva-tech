"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Cpu,
    TrendingUp,
    Headphones
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
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID BG */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* LEFT SIDE (STICKY) */}
                    <div className="lg:sticky top-24 h-fit">

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-text leading-tight"
                        >
                            Why{" "}
                            <span className="text-primary">
                                Evatech Stands Out
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-text-light mt-5 text-sm md:text-base leading-relaxed max-w-md"
                        >
                            We combine innovation, scalability, and reliability to deliver
                            enterprise-grade solutions that drive real business impact.
                        </motion.p>

                    </div>

                    {/* RIGHT SIDE (TIMELINE STYLE) */}
                    <div className="relative">

                        {/* VERTICAL LINE */}
                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-border"></div>

                        <div className="flex flex-col gap-10">

                            {points.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.15 }}
                                        className="relative flex items-start gap-6"
                                    >

                                        {/* ICON DOT */}
                                        <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md">
                                            <Icon size={18} />
                                        </div>

                                        {/* CONTENT */}
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-text">
                                                {item.title}
                                            </h3>

                                            <p className="text-text-light text-sm mt-2 max-w-md leading-relaxed">
                                                {item.desc}
                                            </p>
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