// Model created for messages because I would like to keep record of the messages sent to me

import { Schema, model, type Document } from 'mongoose';

interface IContactForm extends Document {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber?: number,
    messageContent: string,
};

const contactFormSchema = new Schema<IContactForm>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: false},
    messageContent: {type: String, required: true}
});

export default model<IContactForm>("Contact Form", contactFormSchema);