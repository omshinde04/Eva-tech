"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    /* 🔥 HANDLE INPUT */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /* 🔥 SUBMIT */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });

        // 🔥 FRONTEND VALIDATION
        if (formData.name.length < 2) {
            setStatus({ type: "error", message: "Name must be at least 2 characters" });
            setLoading(false);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setStatus({ type: "error", message: "Enter a valid email" });
            setLoading(false);
            return;
        }

        if (formData.message.length < 5) {
            setStatus({ type: "error", message: "Message is too short" });
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus({
                    type: "success",
                    message: "✅ Message sent successfully! We’ll contact you soon.",
                });

                // RESET FORM
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setStatus({
                    type: "error",
                    message: data.error || "Something went wrong",
                });
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Server error. Please try again later.",
            });
        }

        setLoading(false);
    };

    return (
        <section
            id="contact-form"
            className="relative pt-12 pb-20 sm:pt-14 sm:pb-24 md:pt-16 md:pb-28 bg-primary overflow-hidden"
        >

            {/* 🔥 PREMIUM BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50" />

                <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full" />
                <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-accentSoft/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-10">

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md border border-borderSubtle rounded-3xl 
        p-5 sm:p-6 md:p-10 shadow-xl space-y-6 sm:space-y-7"
                >

                    {/* 🔥 HEADER */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-textPrimary">
                            Send us a message
                        </h2>

                        <p className="text-textSecondary text-sm sm:text-base mt-2">
                            We’ll get back to you within 24 hours.
                        </p>
                    </div>

                    {/* 🔥 STATUS */}
                    {status.message && (
                        <div
                            className={`p-3 rounded-xl text-sm font-medium border ${status.type === "success"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-red-50 text-red-600 border-red-200"
                                }`}
                        >
                            {status.message}
                        </div>
                    )}

                    {/* 🔥 INPUT GRID */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5">

                        {/* NAME */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="p-3 sm:p-3.5 rounded-xl border border-borderSubtle bg-white 
            outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 
            transition placeholder:text-textMuted"
                        />

                        {/* EMAIL */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="p-3 sm:p-3.5 rounded-xl border border-borderSubtle bg-white 
            outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 
            transition placeholder:text-textMuted"
                        />

                    </div>

                    {/* SUBJECT */}
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full p-3 sm:p-3.5 rounded-xl border border-borderSubtle bg-white 
          outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 
          transition placeholder:text-textMuted"
                    />

                    {/* MESSAGE */}
                    <textarea
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        className="w-full p-3 sm:p-3.5 rounded-xl border border-borderSubtle bg-white 
          outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 
          transition resize-none placeholder:text-textMuted"
                    />

                    {/* 🔥 BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-accent to-accentSoft text-white 
          py-3 sm:py-3.5 rounded-xl font-medium 
          transition-all duration-300 shadow-lg hover:shadow-2xl 
          hover:scale-[1.02] disabled:opacity-70 
          flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>

                </motion.form>
            </div>
        </section>
    );
}