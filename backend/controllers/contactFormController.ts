import ContactForm from "../models/ContactForm.js";
import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export async function contactFormData(req: Request, res: Response) {
    try {
        const { firstName, lastName, email, phoneNumber, subject, messageContent } = req.body;
        const gmailUser = process.env.GMAIL_USER;
        const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

        if (!gmailUser || !gmailAppPassword) {
            throw new Error('Gmail contact form settings are missing');
        }

        const messageData = await ContactForm.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            subject,
            messageContent,
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: gmailUser, pass: gmailAppPassword },
        });

        await transporter.sendMail({
            from: gmailUser,
            to: gmailUser,
            replyTo: email,
            subject: `Portfolio contact: ${subject}`,
            text: `From: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber || 'Not provided'}\n\n${messageContent}`,
        });

        console.log("Contact form saved and email sent");
        res.status(201).json(messageData);
    } catch (err) {
        console.error("Error in 'contactFormData' controller:", err);
        res.status(500).json({message: "Unable to send contact form message"});
    }
}
