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
        slug: "A Simple Note-Taking App",
        title: "Noter",
        subTitle: "A web app built with React.js, Node.js and TypeScript, with data held on MongoDB.",
        description: "A full-stack website that allows a user to create, read, update and delete notes. This is open to everyone without a login as a simple project.",
        image: "/note_app_screenshot.png",
        techTags: ["React", "Node.js", "MongoDB", "TypeScript"],
        githubLink: "https://github.com/tstyer/MERN-Note-Taking-App",
        deployedLink: "https://mern-note-taking-app-wjbi.onrender.com/",
    },
];
