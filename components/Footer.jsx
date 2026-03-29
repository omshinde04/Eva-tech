"use client";

import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Globe,
    Share2,
    AtSign,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-[#0B1220] border-t border-white/10 mt-24">

            {/* GRID BACKGROUND (SUBTLE) */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
                        backgroundSize: "44px 44px",
                    }}
                />
            </div>

            {/* CONTAINER */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-20">

                {/* CTA STRIP */}
                <div className="
                    mb-16 md:mb-20 
                    p-6 sm:p-8 md:p-10 
                    rounded-2xl 
                    bg-gradient-to-r from-accent to-accentSoft
                    flex flex-col md:flex-row 
                    items-start md:items-center 
                    justify-between 
                    gap-6
                ">
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                            Ready to transform your business?
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base mt-2 max-w-md">
                            Let’s design and scale systems that give you a real competitive edge.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="
                        inline-flex items-center gap-2 
                        bg-white text-black 
                        px-6 py-3 
                        text-sm sm:text-base
                        rounded-full 
                        transition-all duration-300
                        hover:scale-[1.04] hover:shadow-md
                    "
                    >
                        Get Started <ArrowRight size={16} />
                    </Link>
                </div>

                {/* MAIN GRID */}
                <div className="
                    grid gap-12 
                    sm:grid-cols-2 
                    lg:grid-cols-5
                ">

                    {/* BRAND */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">

                            <img
                                src="/logo.png"
                                alt="Evatech Logo"
                                className="w-10 h-10 rounded-full object-cover"
                            />

                            <h2 className="text-lg sm:text-xl font-semibold text-white">
                                Evatech Solutions
                            </h2>
                        </div>

                        <p className="
                            text-sm sm:text-base 
                            text-white/70 
                            mt-4 
                            leading-relaxed 
                            max-w-md
                        ">
                            Delivering enterprise-grade IT services, cloud infrastructure,
                            AI solutions, and digital transformation for modern organizations.
                        </p>

                        <div className="flex gap-5 mt-6 text-white/70 items-center">

                            <div className="w-8 h-8 flex items-center justify-center">
                                <Globe size={18} className="hover:text-accent transition cursor-pointer" />
                            </div>

                            <div className="w-8 h-8 flex items-center justify-center">
                                <Share2 size={18} className="hover:text-accent transition cursor-pointer" />
                            </div>

                            <div className="w-8 h-8 flex items-center justify-center">
                                <AtSign size={18} className="hover:text-accent transition cursor-pointer" />
                            </div>

                            {/* ✅ FIXED INSTAGRAM ALIGNMENT */}
                            <a
                                href="https://www.instagram.com/eva_techsolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center hover:text-accent transition"
                            >
                                <FaInstagram size={16} />
                            </a>

                        </div>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-5">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-white">
                            <Link href="/about" className="hover:text-accent transition">
                                About
                            </Link>
                            <Link href="/services" className="hover:text-accent transition">
                                Services
                            </Link>
                            <Link href="/contact" className="hover:text-accent transition">
                                Contact
                            </Link>
                            <Link href="/careers" className="hover:text-accent transition">
                                Careers
                            </Link>
                        </div>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-5">
                            Services
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-white">
                            <p className="hover:text-accent cursor-pointer transition">
                                IT Solutions
                            </p>
                            <p className="hover:text-accent cursor-pointer transition">
                                Cloud Infrastructure
                            </p>
                            <p className="hover:text-accent cursor-pointer transition">
                                Digital Transformation
                            </p>
                            <p className="hover:text-accent cursor-pointer transition">
                                AI Systems
                            </p>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-5">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-4 text-sm text-white/80">

                            <div className="flex items-center gap-3">
                                <Mail size={16} />
                                <span>info@evatechsolutions.in</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={16} />
                                <span>+91 9730485222</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={16} />
                                <span>India</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-white/10 mt-16 pt-6">

                    {/* BOTTOM BAR */}
                    <div className="
                        flex flex-col md:flex-row 
                        items-center justify-between 
                        gap-4
                        text-xs text-white/60
                    ">
                        <p>
                            © {new Date().getFullYear()} Evatech Solutions LLP. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/privacy-policy" className="hover:text-white transition">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition">
                                Terms
                            </Link>
                            <Link href="/sitemap" className="hover:text-white transition">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}