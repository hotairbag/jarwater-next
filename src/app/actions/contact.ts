"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, email, company, budget, message } = formData;

    const { data, error } = await resend.emails.send({
      from: "Jarwater Contact <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // Replace with your email
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send message" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Something went wrong" };
  }
}
