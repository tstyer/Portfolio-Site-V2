// Model created for messages because I would like to keep record of the messages sent to me

import { Schema, model, type Document } from 'mongoose';

interface IContactForm extends Document {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber?: string, // phone numbers always stored as strings - "Number" cannot begin with zero or do math on them
    subject: string,
    messageContent: string,
    createdAt?: Date,
    updatedAt?: Date,
};

const contactFormSchema = new Schema<IContactForm>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: false},
    subject: {type: String, required: true},
    messageContent: {type: String, required: true}
},
    {timestamps: true}
);

export default model<IContactForm>("ContactForm", contactFormSchema);