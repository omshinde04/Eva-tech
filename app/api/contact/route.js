import nodemailer from "nodemailer";

/* 🔥 CREATE TRANSPORTER ONCE (REUSE) */
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        /* 🔥 VALIDATIONS */

        if (!name || name.trim().length < 2) {
            return Response.json(
                { success: false, error: "Name is required (min 2 chars)" },
                { status: 400 }
            );
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
                { success: false, error: "Valid email is required" },
                { status: 400 }
            );
        }

        if (!message || message.trim().length < 5) {
            return Response.json(
                { success: false, error: "Message must be at least 5 characters" },
                { status: 400 }
            );
        }

        /* 🔥 SEND RESPONSE FAST (DON'T BLOCK UI) */

        setImmediate(async () => {
            try {
                const info = await transporter.sendMail({
                    from: `"Evatech Website" <${process.env.EMAIL_USER}>`,
                    to: process.env.EMAIL_USER,
                    replyTo: email,
                    subject: subject || "New Contact Form Message",

                    html: `
          <div style="font-family: Arial; padding: 10px;">
            <h2>📩 New Contact Form Submission</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Subject:</b> ${subject || "N/A"}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
          </div>
        `,
                });

                console.log("📧 Email sent:", info.messageId);
            } catch (err) {
                console.error("❌ Email sending failed:", err);
            }
        });

        /* 🔥 INSTANT RESPONSE */

        return Response.json({
            success: true,
            message: "Message sent successfully 🚀",
        });
    } catch (error) {
        console.error("❌ ERROR:", error);

        return Response.json(
            { success: false, error: "Something went wrong. Try again later." },
            { status: 500 }
        );
    }
}