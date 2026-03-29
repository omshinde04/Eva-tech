"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import services from "@/data/services";

export default function CoreServices() {
    return (
        <section
            id="core-services"
            className="relative py-20 sm:py-24 md:py-28 bg-primary overflow-hidden"
        >

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />
                <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

                {/* 🔥 HEADER */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary leading-tight">
                            Our{" "}
                            <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                                Core Services
                            </span>
                        </h2>

                        <p className="text-textSecondary text-sm md:text-base mt-3 max-w-lg">
                            Scalable technology solutions designed to build, automate,
                            and transform modern businesses.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center gap-2 
            bg-gradient-to-r from-accent to-accentSoft text-white 
            px-6 py-3 rounded-xl 
            shadow-soft hover:shadow-xl transition hover:scale-[1.04]"
                    >
                        Start Your Project
                        <ArrowRight size={16} />
                    </Link>

                </div>

                {/* 🔥 SERVICES GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {services.map((service, i) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block"
                        >

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            >

                                {/* IMAGE */}
                                <div className="relative h-[240px] sm:h-[260px] md:h-[280px]">

                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                                </div>

                                {/* CONTENT */}
                                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">

                                    <h3 className="text-white text-lg sm:text-xl font-semibold">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/80 text-sm mt-1 line-clamp-2">
                                        {service.desc}
                                    </p>

                                    {/* CTA VISUAL (NOT LINK NOW) */}
                                    <div className="mt-4 inline-flex items-center gap-2 text-white text-sm opacity-80 group-hover:opacity-100">
                                        Explore
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-1 transition"
                                        />
                                    </div>

                                </div>

                                {/* DEPTH */}
                                <div className="absolute inset-0 shadow-[0_20px_60px_rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 transition" />

                            </motion.div>

                        </Link>
                    ))}

                </div>

                {/* 🔥 MOBILE CTA */}
                <div className="mt-12 flex justify-center md:hidden">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 
            bg-gradient-to-r from-accent to-accentSoft text-white 
            px-6 py-3 rounded-xl 
            shadow-soft hover:shadow-xl transition hover:scale-[1.04]"
                    >
                        Start Your Project
                        <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    );
}