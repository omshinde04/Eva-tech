"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // simulate API
        setTimeout(() => {
            setLoading(false);
            alert("Message sent successfully 🚀");
        }, 1500);
    };

    return (
        <section
            id="contact-form"
            className="relative py-20 md:py-28 bg-background overflow-hidden"
        >

            {/* GRID BG */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full 
                bg-[linear-gradient(to_right,#e3e9ec_1px,transparent_1px),
                linear-gradient(to_bottom,#e3e9ec_1px,transparent_1px)]
                bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-surface/90 backdrop-blur border border-border rounded-3xl 
                    p-6 md:p-10 shadow-soft space-y-6"
                >

                    {/* HEADER */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-text">
                            Send us a message
                        </h2>
                        <p className="text-text-light text-sm mt-2">
                            We’ll get back to you within 24 hours.
                        </p>
                    </div>

                    {/* INPUTS */}
                    <div className="grid md:grid-cols-2 gap-5">

                        {/* NAME */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="p-3 rounded-xl border border-border bg-background 
                            outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />

                        {/* EMAIL */}
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="p-3 rounded-xl border border-border bg-background 
                            outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />

                    </div>

                    {/* SUBJECT */}
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-3 rounded-xl border border-border bg-background 
                        outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />

                    {/* MESSAGE */}
                    <textarea
                        rows="5"
                        placeholder="Tell us about your project..."
                        required
                        className="w-full p-3 rounded-xl border border-border bg-background 
                        outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded-xl 
                        hover:scale-[1.02] transition-all duration-300 
                        shadow-md hover:shadow-xl disabled:opacity-70"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                </motion.form>

            </div>
        </section>
    );
}