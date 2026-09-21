// The blog posts shown on the site.
//
// Blog articles are written and hosted on Substack, so nothing here stores the
// article text - each record is just the card shown on the site plus the link
// out to the full post.
//
// To publish a new post: add an object to the array below, then run `npm run seed`.

export interface BlogSeed {
    title: string;
    subTitle: string;
    shortDescription: string;
    substackLink: string;
    slug: string; // written by hand, not auto-generated - see the note in seed.ts
    image?: string;
}

export const blogs: BlogSeed[] = [
    {
        slug: "mastering-the-mern-architecture-in-multi-tenant-environments",
        title: "Mastering the MERN Architecture in Multi-Tenant Environments",
        subTitle: "A highly opinionated deep dive into MongoDB tenancy strategies.",
        shortDescription: "A highly opinionated deep dive into MongoDB tenancy strategies, and takes on production-ready multi-tenant SaaS pipelines.",
        substackLink: "https://substack.com/@somewhatwriter",
        image: "https://placehold.co/600x400",
    },
    {
        slug: "securing-express-js-and-node-blacklisting",
        title: "Securing Express.js and Node Blacklisting",
        subTitle: "Locking down production applications with layered security.",
        shortDescription: "Comprehensive tips for locking down production-ready Node applications with layered security.",
        substackLink: "https://substack.com/@somewhatwriter",
        image: "https://placehold.co/600x400",
    },
    {
        slug: "react-18-server-components-a-full-stack-developer-perspective",
        title: "React 18 Server Components: A Full-Stack Developer Perspective",
        subTitle: "Exploring how server components change full-stack development.",
        shortDescription: "A full-stack developer's perspective on adopting server-first rendering in production React applications.",
        substackLink: "https://substack.com/@somewhatwriter",
        image: "https://placehold.co/600x400",
    },
    {
        slug: "transforming-from-relational-databases-to-document-stores",
        title: "Transforming from Relational Databases to Document Stores",
        subTitle: "A migration story from SQL to MongoDB.",
        shortDescription: "Lessons learned migrating a production relational schema over to a document-based store.",
        substackLink: "https://substack.com/@somewhatwriter",
        image: "https://placehold.co/600x400",
    },
];
