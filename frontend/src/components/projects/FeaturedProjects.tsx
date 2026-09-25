import { useEffect, useState } from 'react';

interface Project {
    _id: string;
    title: string;
    subTitle: string;
    description: string,
    image: string,
    techTags: string[];
    githubLink: string;
    deployedLink?: string; // optional in the schema, so not every project has one
}

export function FeaturedProjects() {
    const [projects, setProjects] = useState<Project[]>([]);

    // Shared by the GitHub and Deployed Site links so the pair stay identical.
    const projectLink = "font-text text-xs font-bold tracking-wide inline-block transition-colors hover:text-blue-500";

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error fetching projects:', err));
    }, []); // empty array used to run once - only need to fetch the projects once. 

    return (
        <section className="pt-16 md:pt-24">
            <p className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide">// MY ARTIFACTS</p>
            <h2 className="font-heading font-bold text-3xl mt-2">Featured Projects</h2>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project._id} className="border border-solid border-emerald-100 rounded-lg overflow-hidden bg-blue-100/70 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-y-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1eee6]">
                        {/* bg-contain scales the whole screenshot to fit inside the panel
                            instead of showing it at full size and cropping. bg-no-repeat is
                            needed with contain, or the spare space tiles the image again. */}
                        <div className="h-48 bg-[#D6D3CC] bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${project.image})` }}>
                        </div>
                        <div className="p-5">
                            <h3 className="font-heading font-bold text-lg">{project.title}</h3>
                            <p className="font-text text-sm text-amber-900/80 mt-2">{project.subTitle}</p>
                            <p className='font-text text-xs text-amber-900/80 mt-2'>{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.techTags.map((tag) => (
                                    <span key={tag} className="font-text text-xs border border-solid border-black/20 rounded px-2 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={projectLink}
                                >
                                    VIEW GITHUB ↗
                                </a>

                                {/* deployedLink is optional, so only render it when there is one */}
                                {project.deployedLink && (
                                    <a
                                        href={project.deployedLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={projectLink}
                                    >
                                        DEPLOYED SITE ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
