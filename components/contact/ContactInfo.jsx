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
        desc: "+91 9730485222",
        icon: Phone,
        link: "tel:+919730485222",
    },
    {
        title: "Location",
        desc: "India",
        icon: MapPin,
        link: "https://maps.google.com",
    },
];

export default function ContactInfo() {
    return (
        <section className="relative pt-12 pb-20 sm:pt-14 sm:pb-24 md:pt-16 md:pb-28 bg-primary overflow-hidden">

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full" />
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-10">

                {/* 🔥 HEADER */}
                <div className="text-center mb-12 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textPrimary">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-accent to-accentSoft bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>

                    <p className="text-textSecondary mt-3 text-sm md:text-base max-w-xl mx-auto">
                        Reach out to us directly or start a conversation instantly.
                    </p>
                </div>

                {/* 🔥 CARDS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">

                    {contactData.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                href={item.link}
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="group relative rounded-2xl overflow-hidden"
                            >

                                <div className="h-full bg-white/80 backdrop-blur-md p-6 md:p-7 
                rounded-2xl shadow-soft hover:shadow-2xl 
                transition-all duration-300 text-center flex flex-col items-center">

                                    {/* ICON */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-accent to-accentSoft text-white 
                  shadow-md group-hover:scale-110 transition duration-300">
                                        <Icon size={20} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-base md:text-lg font-semibold text-textPrimary mt-5">
                                        {item.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="text-textSecondary text-sm mt-2">
                                        {item.desc}
                                    </p>

                                    {/* LINE */}
                                    <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-accent to-accentSoft group-hover:w-14 transition-all duration-500" />

                                    {/* GLOW */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accentSoft/5 opacity-0 group-hover:opacity-100 transition rounded-2xl" />

                                </div>

                            </motion.a>
                        );
                    })}

                </div>

                {/* 🔥 WHATSAPP CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-14 flex justify-center"
                >
                    <a
                        href="https://wa.me/919730485222"
                        target="_blank"
                        className="group flex items-center gap-3 px-7 py-3.5 rounded-xl 
            bg-gradient-to-r from-green-500 to-green-600 text-white font-medium text-sm md:text-base
            shadow-lg hover:shadow-2xl 
            hover:scale-[1.05] transition-all duration-300"
                    >
                        <MessageCircle size={20} className="group-hover:scale-110 transition" />
                        Chat on WhatsApp
                    </a>
                </motion.div>

            </div>
        </section>
    );
}