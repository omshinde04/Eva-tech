"use client";

import { useState } from "react";
import Link from "next/link";
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
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-soft">
                <div className="flex justify-between items-center px-6 md:px-10 h-16">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-xl font-bold">
                            E
                        </div>
                        <h1 className="text-xl font-headline font-semibold text-text">
                            Evatech
                        </h1>
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex gap-8 items-center">
                        {navLinks.map((link, i) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={i}
                                    href={link.path}
                                    className="flex items-center gap-2 text-text-light hover:text-primary transition-all duration-300 group"
                                >
                                    <Icon
                                        size={18}
                                        className="group-hover:scale-110 transition-transform"
                                    />
                                    <span className="relative">
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            );
                        })}

                        {/* 🔥 FINAL CTA → CONTACT PAGE */}
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-5 py-2 rounded-full 
              hover:bg-primary-dark transition-all duration-300 shadow-medium"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* MOBILE BUTTON */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 text-text hover:text-primary transition"
                        >
                            <Menu size={28} />
                        </button>
                    </div>

                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-background z-[9999] flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        {/* TOP BAR */}
                        <div className="flex justify-between items-center px-6 md:px-10 h-16 border-b border-border">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <div className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-xl font-bold">
                                    E
                                </div>
                                <h1 className="text-xl font-semibold text-text">Evatech</h1>
                            </Link>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-text hover:text-primary transition"
                            >
                                <X size={30} />
                            </button>
                        </div>

                        {/* MENU */}
                        <div className="flex flex-col justify-center items-center flex-1 gap-8">

                            {navLinks.map((link, i) => {
                                const Icon = link.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-4 text-2xl font-medium text-text hover:text-primary transition-all duration-300 group"
                                        >
                                            <Icon size={26} />
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* 🔥 MOBILE CTA → CONTACT PAGE */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-primary text-white px-8 py-3 rounded-full text-lg 
                  hover:bg-primary-dark transition-all duration-300 shadow-medium inline-block"
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