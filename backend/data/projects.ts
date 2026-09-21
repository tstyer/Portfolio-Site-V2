// The projects shown on the site.
//
// To add a new project: add an object to the array below, then run `npm run seed`.

export interface ProjectSeed {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    techTags: string[];
    githubLink: string;
    deployedLink?: string;
    slug: string; // written by hand, not auto-generated - see the note in seed.ts
}

export const projects: ProjectSeed[] = [
    {
        slug: "saas-analytics-dashboard",
        title: "SaaS Analytics Dashboard",
        subTitle: "A robust analytics platform aggregating real-time data across multiple pipelines.",
        description: "A full-stack analytics dashboard built to aggregate and visualize real-time data from multiple ingestion pipelines, giving teams a single source of truth for product metrics.",
        image: "https://placehold.co/600x400",
        techTags: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/example/saas-analytics-dashboard",
        deployedLink: "https://saas-analytics-dashboard.example.com",
    },
    {
        slug: "cloud-native-api-gateway",
        title: "Cloud-Native API Gateway",
        subTitle: "Advanced API gateway designed for high availability microservices.",
        description: "An API gateway built for cloud-native environments, handling routing, authentication, and rate limiting across a fleet of microservices.",
        image: "https://placehold.co/600x400",
        techTags: ["Node.js", "Docker", "Kubernetes"],
        githubLink: "https://github.com/example/cloud-native-api-gateway",
        deployedLink: "https://api-gateway.example.com",
    },
    {
        slug: "e-commerce-microservices",
        title: "E-Commerce Microservices",
        subTitle: "Decoupled e-commerce platform built with independently deployable services.",
        description: "An e-commerce backend split into independently deployable microservices for catalog, checkout, and inventory management.",
        image: "https://placehold.co/600x400",
        techTags: ["Node.js", "Express", "PostgreSQL"],
        githubLink: "https://github.com/example/ecommerce-microservices",
        deployedLink: "https://ecommerce-microservices.example.com",
    },
];
