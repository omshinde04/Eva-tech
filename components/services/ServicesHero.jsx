"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Cloud, Bot, Database } from "lucide-react";

export default function ServicesHero() {
    const services = [
        { title: "Cloud Infrastructure", icon: Cloud },
        { title: "AI & Automation", icon: Bot },
        { title: "Enterprise Systems", icon: Cpu },
        { title: "Data Platforms", icon: Database },
    ];

    return (
        <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden pt-20 md:pt-24">

            {/* 🔥 BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />
                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* 🔥 LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >

                        <div className="text-sm text-accent font-medium">
                            Our Services
                        </div>

                        <h1 className="
              font-heading font-semibold text-textPrimary leading-[1.1]
              text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem]
              max-w-2xl
            ">
                            Technology capabilities built for{" "}
                            <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                                real-world scale
                            </span>
                        </h1>

                        <p className="text-textSecondary text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                            We don’t just offer services — we design complete technology ecosystems
                            that integrate infrastructure, intelligence, and scalability into your business.
                        </p>

                        {/* 🔥 CTA FIXED */}
                        <div className="flex gap-3 mt-3 w-full">

                            <Link
                                href="/contact"
                                className="
                  flex-1 text-center
                  bg-gradient-to-r from-accent to-accentSoft text-white 
                  px-4 py-3 rounded-xl flex items-center justify-center gap-2 
                  hover:scale-[1.03] transition shadow-soft text-sm sm:text-base
                "
                            >
                                Start Project
                                <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="#core-services"
                                className="
                  flex-1 text-center
                  px-4 py-3 rounded-xl border border-borderSubtle text-textPrimary 
                  hover:bg-secondary transition text-sm sm:text-base
                "
                            >
                                View Services
                            </Link>

                        </div>

                    </motion.div>

                    {/* 🔥 RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >

                        <div className="relative flex flex-col gap-4">

                            {services.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative"
                                        style={{
                                            transform: `translateX(${i * 20}px)`,
                                        }}
                                    >

                                        <div className="
                      bg-white rounded-2xl p-5 sm:p-6 
                      shadow-soft border border-borderSubtle
                      flex items-center gap-4
                      group-hover:shadow-xl transition-all duration-300
                    ">

                                            <div className="
                        w-11 h-11 rounded-xl 
                        bg-accent/10 text-accent 
                        flex items-center justify-center
                        group-hover:bg-accent group-hover:text-white
                        transition-all duration-300
                      ">
                                                <Icon size={20} />
                                            </div>

                                            <h3 className="text-textPrimary font-medium text-sm sm:text-base">
                                                {item.title}
                                            </h3>

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>

                        <div className="absolute inset-0 -z-10 blur-2xl opacity-20 bg-accent/20 rounded-2xl"></div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}