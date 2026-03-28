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

export default function Footer() {
    return (
        <footer className="relative bg-background border-t border-border mt-24">

            {/* CONTAINER */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-20">

                {/* CTA STRIP */}
                <div className="
                    mb-16 md:mb-20 
                    p-6 sm:p-8 md:p-10 
                    rounded-2xl 
                    bg-surface 
                    border border-border
                    flex flex-col md:flex-row 
                    items-start md:items-center 
                    justify-between 
                    gap-6
                ">
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-text">
                            Ready to transform your business?
                        </h3>
                        <p className="text-text-light text-sm sm:text-base mt-2 max-w-md">
                            Let’s design and scale systems that give you a real competitive edge.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="
                        inline-flex items-center gap-2 
                        bg-primary text-white 
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
                            <div className="
                                w-10 h-10 
                                bg-primary text-white 
                                flex items-center justify-center 
                                rounded-lg font-semibold
                            ">
                                E
                            </div>

                            <h2 className="text-lg sm:text-xl font-semibold text-text">
                                Evatech Solutions
                            </h2>
                        </div>

                        <p className="
                            text-sm sm:text-base 
                            text-text-light 
                            mt-4 
                            leading-relaxed 
                            max-w-md
                        ">
                            Delivering enterprise-grade IT services, cloud infrastructure,
                            AI solutions, and digital transformation for modern organizations.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-5 mt-6 text-text-light">
                            <Globe size={18} className="hover:text-text transition cursor-pointer" />
                            <Share2 size={18} className="hover:text-text transition cursor-pointer" />
                            <AtSign size={18} className="hover:text-text transition cursor-pointer" />
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h3 className="text-xs font-semibold text-text-light uppercase tracking-wider mb-5">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-text">
                            <Link href="/about" className="hover:text-primary transition">
                                About
                            </Link>
                            <Link href="/services" className="hover:text-primary transition">
                                Services
                            </Link>
                            <Link href="/contact" className="hover:text-primary transition">
                                Contact
                            </Link>
                            <Link href="/careers" className="hover:text-primary transition">
                                Careers
                            </Link>
                        </div>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="text-xs font-semibold text-text-light uppercase tracking-wider mb-5">
                            Services
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-text">
                            <p className="hover:text-primary cursor-pointer transition">
                                IT Solutions
                            </p>
                            <p className="hover:text-primary cursor-pointer transition">
                                Cloud Infrastructure
                            </p>
                            <p className="hover:text-primary cursor-pointer transition">
                                Digital Transformation
                            </p>
                            <p className="hover:text-primary cursor-pointer transition">
                                AI Systems
                            </p>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-xs font-semibold text-text-light uppercase tracking-wider mb-5">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-4 text-sm text-text">

                            <div className="flex items-center gap-3 text-text-light">
                                <Mail size={16} />
                                <span>info@evatech.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-text-light">
                                <Phone size={16} />
                                <span>+91 9730485222</span>
                            </div>

                            <div className="flex items-center gap-3 text-text-light">
                                <MapPin size={16} />
                                <span>India</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-border mt-16 pt-6">

                    {/* BOTTOM BAR */}
                    <div className="
                        flex flex-col md:flex-row 
                        items-center justify-between 
                        gap-4
                        text-xs text-text-light
                    ">
                        <p>
                            © {new Date().getFullYear()} Evatech Solutions LLP. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/privacy-policy" className="hover:text-text transition">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-text transition">
                                Terms
                            </Link>
                            <Link href="/sitemap" className="hover:text-text transition">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}