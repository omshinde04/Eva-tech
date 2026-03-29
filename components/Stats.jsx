"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ target, duration = 2000, start }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startVal = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            startVal += increment;
            if (startVal >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(startVal));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration, start]);

    return <span>{count}</span>;
}

export default function Stats() {
    const [startCount, setStartCount] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: 500, suffix: "+", label: "Clients Served" },
        { value: 1000, suffix: "+", label: "Projects Delivered" },
        { value: 10, suffix: "+", label: "Years Experience" },
        { value: 99, suffix: "%", label: "Client Satisfaction" },
    ];

    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-primary overflow-hidden">

            {/* 🔥 GRID BACKGROUND */}
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

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary"
                    >
                        Trusted by{" "}
                        <span className="text-accent">
                            Enterprises Worldwide
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-textSecondary mt-4 text-sm sm:text-base md:text-lg"
                    >
                        Delivering measurable impact through innovation, reliability, and scalable technology solutions.
                    </motion.p>

                </div>

                {/* 🔥 STATS CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="group rounded-xl bg-white border border-borderSubtle 
              p-5 sm:p-6 flex flex-col items-center text-center
              shadow-soft hover:shadow-lg
              transition-all duration-300"
                        >

                            {/* NUMBER */}
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary group-hover:text-accent transition">
                                <Counter target={item.value} start={startCount} />
                                {item.suffix}
                            </h3>

                            {/* LABEL */}
                            <p className="text-xs sm:text-sm md:text-base text-textSecondary mt-2">
                                {item.label}
                            </p>

                            {/* LINE */}
                            <div className="mt-3 h-[2px] w-0 bg-accent group-hover:w-12 transition-all duration-500"></div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}