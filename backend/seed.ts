// seed data that shows on frontend screens
import mongoose from "mongoose";
import dotenv from 'dotenv';
import Project from './models/Project.js';
import Blogs from "./models/Blogs.js";

dotenv.config()

const MONGODBURI = process.env.MONGODB_URI;
if(!MONGODBURI){
    throw new Error("MONGODB_URI is not defined in environment variables");
}

const sampleProjects = [
    {
        title: "SaaS Analytics Dashboard",
        subTitle: "A robust analytics platform aggregating real-time data across multiple pipelines.",
        description: "A full-stack analytics dashboard built to aggregate and visualize real-time data from multiple ingestion pipelines, giving teams a single source of truth for product metrics.",
        image: "https://placehold.co/600x400",
        techTags: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/example/saas-analytics-dashboard",
        deployedLink: "https://saas-analytics-dashboard.example.com",
    },
    {
        title: "Cloud-Native API Gateway",
        subTitle: "Advanced API gateway designed for high availability microservices.",
        description: "An API gateway built for cloud-native environments, handling routing, authentication, and rate limiting across a fleet of microservices.",
        image: "https://placehold.co/600x400",
        techTags: ["Node.js", "Docker", "Kubernetes"],
        githubLink: "https://github.com/example/cloud-native-api-gateway",
        deployedLink: "https://api-gateway.example.com",
    },
    {
        title: "E-Commerce Microservices",
        subTitle: "Decoupled e-commerce platform built with independently deployable services.",
        description: "An e-commerce backend split into independently deployable microservices for catalog, checkout, and inventory management.",
        image: "https://placehold.co/600x400",
        techTags: ["Node.js", "Express", "PostgreSQL"],
        githubLink: "https://github.com/example/ecommerce-microservices",
        deployedLink: "https://ecommerce-microservices.example.com",
    },
];

const sampleBlogs = [
    {
        title: "Mastering the MERN Architecture in Multi-Tenant Environments",
        subTitle: "A highly opinionated deep dive into MongoDB tenancy strategies.",
        shortDescription: "A highly opinionated deep dive into MongoDB tenancy strategies, and takes on production-ready multi-tenant SaaS pipelines.",
        bodyText: "Full article content goes here. This is placeholder body text for the seeded blog post about MERN architecture in multi-tenant environments.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Securing Express.js and Node Blacklisting",
        subTitle: "Locking down production applications with layered security.",
        shortDescription: "Comprehensive tips for locking down production-ready Node applications with layered security.",
        bodyText: "Full article content goes here. This is placeholder body text for the seeded blog post about securing Express.js applications.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "React 18 Server Components: A Full-Stack Developer Perspective",
        subTitle: "Exploring how server components change full-stack development.",
        shortDescription: "A full-stack developer's perspective on adopting server-first rendering in production React applications.",
        bodyText: "Full article content goes here. This is placeholder body text for the seeded blog post about React Server Components.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Transforming from Relational Databases to Document Stores",
        subTitle: "A migration story from SQL to MongoDB.",
        shortDescription: "Lessons learned migrating a production relational schema over to a document-based store.",
        bodyText: "Full article content goes here. This is placeholder body text for the seeded blog post about migrating from relational databases.",
        image: "https://placehold.co/600x400",
    },
];

mongoose
  .connect(MONGODBURI)
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
        // everytime this page runs, new blogs are created, so you first need to delete the previous seeds created
        await Project.deleteMany({});
        await Blogs.deleteMany({});

        const createdProjects = await Project.create(sampleProjects);
        const createdBlogs = await Blogs.create(sampleBlogs);

        console.log(`Seeded ${createdProjects.length} projects and ${createdBlogs.length} blog posts.`);
    } catch (err) {
        console.error("Error seeding data:", err);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
  })
  .catch((err) => console.error("MongoDB connection error:", err));
