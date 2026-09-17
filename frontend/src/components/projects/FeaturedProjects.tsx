import { useEffect, useState } from 'react';

interface Project {
    _id: string;
    title: string;
    subTitle: string;
    techTags: string[];
    githubLink: string;
}

export function FeaturedProjects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error fetching projects:', err));
    }, []);

    return (
        <section className="pt-16 md:pt-24">
            <p className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide">// MY ARTIFACTS</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mt-2">Featured Projects</h2>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project._id} className="border border-solid border-emerald-100 rounded-lg overflow-hidden bg-[#D6D3CC]/40">
                        <div className="h-48 bg-[#D6D3CC] flex items-center justify-center">
                            <p className="font-text text-xs text-amber-900/60">{project.title}</p>
                        </div>
                        <div className="p-5">
                            <h3 className="font-heading font-bold text-lg">{project.title}</h3>
                            <p className="font-text text-sm text-amber-900/80 mt-2">{project.subTitle}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.techTags.map((tag) => (
                                    <span key={tag} className="font-text text-xs border border-solid border-black/20 rounded px-2 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-text text-xs font-bold tracking-wide mt-4 inline-block transition-colors hover:text-blue-500"
                            >
                                VIEW GITHUB ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
