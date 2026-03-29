"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    TrendingUp,
    Zap,
    BarChart3,
    Layers,
    ShieldCheck,
    Cpu,
    Brain,
    Clock,
    Database,
    Lock,
    Activity,
    Globe,
} from "lucide-react";
import { motion } from "framer-motion";

/* 🔥 FULL SAFE ICON MAP */
const iconMap = {
    chart: TrendingUp,
    analytics: BarChart3,
    zap: Zap,
    layers: Layers,
    shield: ShieldCheck,
    cpu: Cpu,
    brain: Brain,
    clock: Clock,
    database: Database,
    lock: Lock,
    activity: Activity,
    globe: Globe,
};

export default function ServiceUI({ service }) {
    return (
        <div className="bg-primary min-h-screen pt-20 md:pt-24 pb-20 md:pb-24 relative">

            {/* BACK */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-textSecondary 
                    hover:text-accent transition-all duration-300 group active:scale-95"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition" />
                    <span className="text-sm">Back</span>
                </Link>
            </div>

            {/* HERO */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-5"
                    >
                        <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] border border-accent/20 w-fit">
                            🚀 Service
                        </div>

                        <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl 
                        font-heading font-semibold text-textPrimary leading-[1.1] tracking-tight">
                            {service.title}
                        </h1>

                        <p className="text-textSecondary text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                            {service.full}
                        </p>

                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 
                                bg-gradient-to-r from-accent to-accentSoft 
                                text-white px-6 py-3 rounded-xl 
                                shadow-lg hover:shadow-2xl hover:scale-[1.04]
                                transition-all duration-300 
                                w-full sm:w-fit"
                            >
                                Start Project
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-[220px] sm:h-[280px] md:h-[380px] lg:h-[460px] 
                        rounded-2xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                        />
                    </motion.div>

                </div>
            </section>

            {/* FEATURES */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">

                <h2 className="text-xl md:text-3xl font-semibold text-textPrimary mb-6 md:mb-10">
                    Key Features
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                    {service.features.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.97 }}
                            className="group bg-secondary/60 backdrop-blur-xl 
                            border border-white/10 rounded-xl p-4 md:p-6
                            hover:border-accent/40 hover:shadow-xl
                            transition-all duration-300"
                        >
                            <div className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-accent mt-1" />
                                <span className="text-sm md:text-base text-textPrimary">
                                    {item}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>

            {/* BENEFITS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28">

                <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-8">
                    Benefits
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                    {service.benefits.map((item, i) => {
                        const Icon = iconMap[item.icon] || TrendingUp; // ✅ FALLBACK

                        return (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                whileTap={{ scale: 0.96 }}
                                className="group relative rounded-2xl overflow-hidden 
                                shadow-md hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accentSoft" />

                                <div className="relative z-10 p-5 md:p-6 h-full flex flex-col justify-between">

                                    <div className="flex items-center justify-between mb-6">

                                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center 
                                        group-hover:scale-110 transition">
                                            <Icon size={18} className="text-white drop-shadow-sm" />
                                        </div>

                                        <span className="text-white/60 text-xs">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                    </div>

                                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                                        {item.text}
                                    </p>

                                </div>

                                <div className="absolute inset-0 rounded-2xl border border-white/10 
                                group-hover:border-white/20 transition" />
                            </motion.div>
                        );
                    })}

                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28 text-center">

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-gradient-to-r from-accent to-accentSoft 
                    text-white p-6 sm:p-8 md:p-12 rounded-2xl 
                    shadow-xl hover:shadow-2xl transition"
                >
                    <h3 className="text-xl md:text-3xl font-semibold mb-3">
                        Let’s build something powerful
                    </h3>

                    <p className="text-sm md:text-base opacity-90 mb-5">
                        Transform your idea into a high-performing digital product.
                    </p>

                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 
                            bg-white text-black px-5 py-3 rounded-xl 
                            hover:scale-[1.04] hover:shadow-xl
                            transition-all duration-300
                            w-full sm:w-fit"
                        >
                            Start Project
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                </motion.div>
            </section>

        </div>
    );
}