import { Schema, model, type Document } from 'mongoose';

interface IBlogPost extends Document {
    title: string,
    subTitle: string,
    shortDescription: string,
    bodyText: string,  
    image?: string, 
    slug?: string // slug is included as the blog page will feature many blogs which then link to their own individual page when clicked
} 


const blogPostSchema = new Schema<IBlogPost>({
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    shortDescription: {type: String, required: true},
    bodyText: {type: String, required: true},
    image: {type: String, required: false},
    slug: {type: String, required: true, lowercase: true, trim: true, unique: true},
})


blogPostSchema.pre("validate", function () {
    if (!this.slug && this.title) {
        this.slug = this.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }
})

export default model<IBlogPost>("Blog", blogPostSchema);

