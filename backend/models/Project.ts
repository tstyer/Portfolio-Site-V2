import { model, Schema, type Document } from 'mongoose';

interface IProject extends Document {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  techTags: string[];
  githubLink: string;
  deployedLink?: string; // question mark means it's not required - required: false in schema below
  slug?: string;
}

const projectSchema = new Schema<IProject> ({
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}, // This is ttype: String, because images are URL paths. 
    techTags: {type: [String], required: true},
    githubLink: {type: String, required: true}, // Links should also be type: String because mongoose doesn't have a type of 'URL'. 
    deployedLink: {type: String, required: false}, // Array of strings
    slug: {type: String, required: true, unique: true, lowercase: true, trim: true}, // slug is added to end of url and is given to each project as a unique value - two projects can't have the same slug.
},
{timestamps: true}
)

// Generate slug before model() runs so required: true passes on slug
projectSchema.pre("validate", function () {
    if (!this.slug && this.title) {
        this.slug = this.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }
});

export default model<IProject>("Project", projectSchema);



