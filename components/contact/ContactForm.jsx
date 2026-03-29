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

                    {/* STATUS MESSAGE */}
                    {status.message && (
                        <div
                            className={`p-3 rounded-xl text-sm font-medium ${status.type === "success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-600"
                                }`}
                        >
                            {status.message}
                        </div>
                    )}

                    {/* INPUTS */}
                    <div className="grid md:grid-cols-2 gap-5">

                        {/* NAME */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="p-3 rounded-xl border border-border bg-background 
              outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />

                        {/* EMAIL */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="p-3 rounded-xl border border-border bg-background 
              outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />

                    </div>

                    {/* SUBJECT */}
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full p-3 rounded-xl border border-border bg-background 
            outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />

                    {/* MESSAGE */}
                    <textarea
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
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
            transition-all duration-300 shadow-md hover:shadow-xl 
            disabled:opacity-70 flex items-center justify-center gap-2"
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