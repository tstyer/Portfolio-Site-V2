// Loads the content in ./data into MongoDB.
//
// Safe to re-run. Each record is matched on its `slug` and updated in place, so
// adding one new blog post only inserts that one post - nothing else is touched.
//
//   npm run seed             -> add/update records (the normal case)
//   npm run seed -- --fresh  -> delete both collections first, then reinsert
//
// Only use --fresh against a local/development database. Run it against the live
// database and it deletes the real content before rewriting it.
import mongoose, { type Model } from "mongoose";
import dotenv from 'dotenv';
import Project from './models/Project.js';
import Blogs from "./models/Blogs.js";
import { projects } from "./data/projects.js";
import { blogs } from "./data/blogs.js";

dotenv.config()

const MONGODBURI = process.env.MONGODB_URI;
if(!MONGODBURI){
    throw new Error("MONGODB_URI is not defined in environment variables");
}

const fresh = process.argv.includes("--fresh");

// Matches each item on its slug, updates it if it already exists, and inserts it
// if it doesn't. `upsert: true` is what makes this safe to run over and over.
//
// Note: findOneAndUpdate is query middleware, so the pre("validate") hook on the
// models does NOT run here and slugs are never auto-generated. That is why every
// record in ./data carries its own hand-written slug.
async function syncCollection<T extends { slug: string }>(
    model: Model<any>,
    items: T[],
    label: string
) {
    if (fresh) {
        const removed = await model.deleteMany({});
        console.log(`Cleared ${removed.deletedCount} existing ${label}.`);
    }

    for (const item of items) {
        await model.findOneAndUpdate(
            { slug: item.slug },
            { $set: item },
            { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
        );
    }

    console.log(`Synced ${items.length} ${label}.`);
}

async function seed() {
    await mongoose.connect(MONGODBURI as string);
    console.log("Connected to MongoDB");

    try {
        await syncCollection(Project, projects, "projects");
        await syncCollection(Blogs, blogs, "blog posts");
    } catch (err) {
        console.error("Error seeding data:", err);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

seed().catch((err) => console.error("MongoDB connection error:", err));
