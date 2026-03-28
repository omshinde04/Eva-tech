"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactData = [
    {
        title: "Email Us",
        desc: "info@evatechsolutions.in",
        icon: Mail,
        link: "mailto:info@evatechsolutions.in",
    },
    {
        title: "Call Us",
        desc: "+91 98765 43210",
        icon: Phone,
        link: "tel:+919876543210",
    },
    {
        title: "Visit Us",
        desc: "India",
        icon: MapPin,
        link: "https://maps.google.com",
    },
];

export default function ContactInfo() {
    return (
        <section className="relative py-20 md:py-28 bg-background overflow-hidden">

            {/* GRID BG */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),
                linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)]
                bg-[size:40px_40px]" />
            </div>

            {/* GLOW */}
            <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-primary/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-green-400/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-text">
                        Get in{" "}
                        <span className="text-primary">
                            Touch
                        </span>
                    </h2>

                    <p className="text-text-light mt-3 text-sm md:text-base">
                        Reach out to us directly or start a conversation instantly.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-6">

                    {contactData.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                href={item.link}
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="group relative p-[1px] rounded-2xl 
                                bg-gradient-to-b from-transparent via-border to-transparent 
                                hover:from-primary/40 hover:to-primary/20 transition-all duration-500"
                            >
                                <div className="bg-surface/90 backdrop-blur rounded-2xl p-6 md:p-7 text-center 
                                shadow-soft group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">

                                    {/* ICON */}
                                    <div className="mb-4 text-primary group-hover:scale-110 transition">
                                        <Icon size={28} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-lg font-semibold text-text group-hover:text-primary transition">
                                        {item.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="text-text-light text-sm mt-2">
                                        {item.desc}
                                    </p>

                                    {/* HOVER LINE */}
                                    <div className="mt-4 h-[2px] w-0 bg-primary group-hover:w-16 transition-all duration-500 mx-auto"></div>

                                    {/* GLOW */}
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>

                                </div>
                            </motion.a>
                        );
                    })}

                </div>

                {/* 💰 WHATSAPP SUPER CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-14 flex justify-center"
                >
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full 
                        bg-green-500 text-white font-medium text-sm md:text-base
                        shadow-lg hover:shadow-2xl 
                        hover:scale-105 transition-all duration-300"
                    >
                        <MessageCircle size={20} className="group-hover:scale-110 transition" />
                        Chat on WhatsApp
                    </a>
                </motion.div>

            </div>
        </section>
    );
}