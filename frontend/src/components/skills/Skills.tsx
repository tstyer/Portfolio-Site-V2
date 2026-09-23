const skillCategories = [
    {
        title: "Frontend",
        skills: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSockets"],
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"],
    },
    {
        title: "Databases",
        skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Prisma"],
    },
];

export function Skills() {
    return (
        <section className="pt-16 md:pt-24">
            <p className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide">// CAPABILITY MATRIX</p>
            <h2 className="font-heading font-bold text-3xl mt-2">Skills &amp; Technologies</h2>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillCategories.map((category) => (
                    <div key={category.title} className="bg-blue-100/70 border border-solid border-emerald-100 rounded-lg p-5 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-y-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1eee6]">
                        <h3 className="font-heading font-bold text-lg mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span key={skill} className="font-text text-xs border border-solid border-black/20 rounded px-2 py-1 bg-[#f1eee6]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
