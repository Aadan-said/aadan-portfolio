'use server';

import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing from environment variables');
        return { error: 'Message service is temporarily unavailable. Please try again later or contact me directly via email.' };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subjectLine = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'Please fill in all required fields.' };
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'kabtanaadanyare17@gmail.com',
            replyTo: email,
            subject: `Contact Form: ${subjectLine || 'New Message'}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #38bdf8;">New Message from Portfolio</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subjectLine}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error('Email error:', error);
        return { error: 'Failed to send message. Please try again later.' };
    }
}
