"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailBlock({
    title,
    desc,
    points = [],
    image,
    reverse
}) {
    return (
        <section className="relative">

            <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>

                {/* IMAGE SIDE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">

                        <Image
                            src={image}
                            alt={title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-[260px] sm:h-[320px] md:h-[380px]"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* floating small card */}
                    <div className="absolute -bottom-5 left-5 bg-white px-4 py-2 rounded-lg shadow-md text-xs hidden md:block">
                        Enterprise Solution
                    </div>
                </motion.div>

                {/* CONTENT SIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-5"
                >
                    {/* TITLE */}
                    <h3 className="text-2xl md:text-4xl font-bold text-text leading-tight">
                        {title}
                    </h3>

                    {/* DESC */}
                    <p className="text-text-light text-sm md:text-base leading-relaxed">
                        {desc}
                    </p>

                    {/* POINTS */}
                    <div className="flex flex-col gap-3 mt-2">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-text-light">
                                <CheckCircle size={16} className="text-primary" />
                                {p}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition"
                        >
                            Get Solution →
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}