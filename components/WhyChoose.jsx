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

    return (
        <section className="relative bg-background py-16 md:py-24 overflow-hidden">

            {/* BACKGROUND GRID */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:48px_48px] opacity-25"></div>

                {/* SOFT GLOW */}
                <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                <div className="grid lg:grid-cols-2 gap-12 md:gap-16">

                    {/* LEFT */}
                    <div className="lg:sticky top-24 h-fit">

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-text leading-tight"
                        >
                            Why Choose{" "}
                            <span className="text-primary">Evatech</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-text-light text-base md:text-lg leading-relaxed max-w-md"
                        >
                            We build scalable, secure, and intelligent digital ecosystems — not just solutions.
                        </motion.p>

                        {/* DECOR LINE */}
                        <div className="mt-8 h-[3px] w-20 bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative flex flex-col gap-10 md:gap-12">

                        {/* VERTICAL LINE */}
                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-border hidden md:block"></div>

                        {features.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    className="group relative flex gap-5 items-start"
                                >

                                    {/* DOT + ICON */}
                                    <div className="relative z-10">

                                        <div className="w-11 h-11 rounded-xl 
                                        bg-primary/10 text-primary 
                                        flex items-center justify-center 
                                        group-hover:bg-primary group-hover:text-white 
                                        transition-all duration-300 shadow-md">

                                            <Icon size={20} />
                                        </div>

                                        {/* GLOW */}
                                        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

                                    </div>

                                    {/* CONTENT */}
                                    <div className="bg-surface/60 backdrop-blur-md border border-border rounded-xl p-4 md:p-5 
                                    shadow-soft group-hover:shadow-xl transition-all duration-300 w-full">

                                        <h3 className="text-base md:text-xl font-semibold text-text group-hover:text-primary transition">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm md:text-base text-text-light mt-2 leading-relaxed">
                                            {item.desc}
                                        </p>

                                        {/* LINE */}
                                        <div className="mt-3 h-[2px] w-0 bg-primary group-hover:w-16 transition-all duration-500"></div>

                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>
            </div>
        </section>
    );
}