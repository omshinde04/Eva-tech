"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ target, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count}</span>;
}

export default function Stats() {
    const stats = [
        { value: 500, suffix: "+", label: "Clients Served" },
        { value: 1000, suffix: "+", label: "Projects Delivered" },
        { value: 10, suffix: "+", label: "Years Experience" },
        { value: 99, suffix: "%", label: "Client Satisfaction" },
    ];

    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* BACKGROUND GRID + GLOW */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)] 
                bg-[size:48px_48px] opacity-20"></div>

                <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-primary/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-400/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-text"
                    >
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                            Enterprises Worldwide
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-text-light mt-4 text-sm md:text-lg"
                    >
                        Delivering measurable impact through innovation, reliability, and scalable technology solutions.
                    </motion.p>
                </div>

                {/* STATS STRIP */}
                <div className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-2xl overflow-hidden bg-surface/60 backdrop-blur-md">

                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center justify-center py-10 px-4 
                            border-b md:border-b-0 md:border-r border-border 
                            last:border-r-0 even:border-r-0 md:even:border-r"
                        >

                            {/* NUMBER */}
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text 
                            group-hover:text-primary transition duration-300">
                                <Counter target={item.value} />
                                {item.suffix}
                            </h3>

                            {/* LABEL */}
                            <p className="text-xs sm:text-sm md:text-base text-text-light mt-3 text-center">
                                {item.label}
                            </p>

                            {/* HOVER LINE */}
                            <div className="mt-4 h-[2px] w-0 bg-primary group-hover:w-12 transition-all duration-500"></div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}