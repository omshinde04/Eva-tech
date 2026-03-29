"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    Home,
    Briefcase,
    Info,
    Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/", icon: Home },
        { name: "Services", path: "/services", icon: Briefcase },
        { name: "About", path: "/about", icon: Info },
        { name: "Contact", path: "/contact", icon: Phone },
    ];

    return (
        <>
            {/* 🔥 NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-borderSubtle">
                <div className="flex justify-between items-center px-6 md:px-10 h-16">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-borderSubtle">
                            <Image
                                src="/logo.png"
                                alt="Evatech Solutions Logo"
                                width={40}
                                height={40}
                                priority   // ✅ FIXED (LCP optimization)
                                sizes="40px"  // ✅ IMPORTANT (performance boost)
                                className="object-cover"
                            />
                        </div>

                        <h1 className="text-lg md:text-xl font-heading font-semibold text-textPrimary">
                            Evatech
                        </h1>
                    </Link>
                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-10">

                        {navLinks.map((link, i) => {
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={i}
                                    href={link.path}
                                    className="flex items-center gap-2 text-textSecondary hover:text-textPrimary transition duration-300 group"
                                >
                                    <Icon size={18} />

                                    <span className="relative">
                                        {link.name}

                                        {/* subtle underline */}
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            );
                        })}

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 rounded-xl bg-accent text-white font-medium 
              hover:bg-accentSoft transition-all duration-300 shadow-soft"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* MOBILE BUTTON */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 rounded-lg border border-borderSubtle text-textPrimary hover:bg-secondary transition"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* 🔥 MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[9999] bg-primary flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        {/* TOP BAR */}
                        <div className="flex justify-between items-center px-6 md:px-10 h-16 border-b border-borderSubtle">

                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-borderSubtle">
                                    <Image
                                        src="/logo.png"
                                        alt="Evatech Logo"
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                </div>

                                <h1 className="text-lg font-heading text-textPrimary">
                                    Evatech
                                </h1>
                            </Link>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg border border-borderSubtle text-textPrimary hover:bg-secondary transition"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* MENU */}
                        <div className="flex flex-col justify-center items-center flex-1 gap-10">

                            {navLinks.map((link, i) => {
                                const Icon = link.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.08 }}
                                    >
                                        <Link
                                            href={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-4 text-2xl font-medium text-textPrimary hover:text-accent transition"
                                        >
                                            <Icon size={24} />
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-6"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="px-10 py-3 rounded-xl text-lg font-medium text-white 
                  bg-accent hover:bg-accentSoft transition-all duration-300 shadow-soft"
                                >
                                    Get Started
                                </Link>
                            </motion.div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}