import type { Request, Response, NextFunction } from 'express';

// This three-parameter shape is what makes Express recognize it as middleware
export function contactValidation(req: Request, res: Response, next: NextFunction) {

    const { firstName, lastName, email, subject, messageContent } = req.body;

    if (!firstName || !lastName || !email || !subject || !messageContent) {
        res.status(400).json({ message: "Missing required contact form field(s)" });
        console.error("Contact form validation failed: missing required field(s)");
        return;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!emailPattern.test(email)) {
        res.status(400).json({ message: "Invalid email format" });
        console.error("Contact form validation failed: invalid email format");
        return;
    }

    next();
}
