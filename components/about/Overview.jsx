"use client";

import { motion } from "framer-motion";
import { Server, Brain, Database } from "lucide-react";

export default function Overview() {
    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:42px_42px] opacity-20"></div>

                {/* GLOW */}
                <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col gap-6">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit"
                        >
                            Who We Are
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-text leading-tight"
                        >
                            Driving Digital Transformation with{" "}
                            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                                Innovation
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-text-light text-base md:text-lg leading-relaxed"
                        >
                            Evatech Solutions LLP delivers enterprise IT services,
                            cloud infrastructure, AI solutions, and document digitization.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-text-light text-base md:text-lg leading-relaxed"
                        >
                            We transform workflows into scalable digital ecosystems.
                        </motion.p>

                        {/* STATS */}
                        <div className="flex gap-8 mt-4">

                            {[
                                { num: "500+", label: "Clients" },
                                { num: "1000+", label: "Projects" },
                                { num: "10+", label: "Years" },
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-2xl font-bold text-primary group-hover:scale-110 transition">
                                        {item.num}
                                    </h3>
                                    <p className="text-xs text-text-light">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT CARDS */}
                    <div className="grid sm:grid-cols-2 gap-5">

                        {[
                            {
                                icon: Server,
                                title: "Enterprise IT Solutions",
                                desc: "Scalable systems built for performance.",
                            },
                            {
                                icon: Brain,
                                title: "AI & Automation",
                                desc: "Smart automation for modern business.",
                            },
                            {
                                icon: Database,
                                title: "Data & Digitisation",
                                desc: "Secure digital transformation with OCR.",
                                full: true,
                            },
                        ].map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`group relative p-[1px] rounded-2xl 
                                    bg-gradient-to-b from-transparent via-border to-transparent 
                                    hover:from-primary/40 hover:to-primary/20 transition-all duration-500 
                                    ${item.full ? "sm:col-span-2" : ""}`}
                                >

                                    <div className="bg-surface rounded-2xl p-6 
                                    shadow-soft group-hover:shadow-xl 
                                    transition-all duration-300 relative overflow-hidden">

                                        {/* ICON */}
                                        <div className="mb-4 text-primary group-hover:scale-110 transition">
                                            <Icon size={24} />
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="font-semibold text-text group-hover:text-primary transition">
                                            {item.title}
                                        </h3>

                                        {/* DESC */}
                                        <p className="text-sm text-text-light mt-2">
                                            {item.desc}
                                        </p>

                                        {/* HOVER LINE */}
                                        <div className="mt-4 h-[2px] w-0 bg-primary group-hover:w-12 transition-all duration-500"></div>

                                        {/* GLOW */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>

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