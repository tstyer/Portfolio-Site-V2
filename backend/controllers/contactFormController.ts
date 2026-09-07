import ContactForm from "../models/ContactForm.js"; 
import type { Request, Response } from 'express';

export async function contactFormData(req: Request, res: Response) {
    try {
        const { firstName, lastName, email, phoneNumber, subject, messageContent } = req.body;

        const messageData = await ContactForm.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            subject,
            messageContent,
        });

        console.log("Success collecting user contact form data");
        res.status(201).json(messageData);
    } catch (err) {
        console.log("Error fetching data in 'contactFormData' controller");
        res.status(500).json({message: "Server error fetching contact form data"});
    }
}