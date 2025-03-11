import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Get form data from request
    const { email, subject, message } = await req.json();

    console.log("Received Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL, // Verified sender email
      to: [process.env.TO_EMAIL], // Your Gmail
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
