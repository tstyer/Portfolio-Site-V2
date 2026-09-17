export function AboutMe() {
    return (
        <section className="pt-16 md:pt-24">
            <p className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide">// WHO I AM</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mt-2">About Me</h2>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />

            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
                <div className="flex-1">
                    <p className="font-text text-sm sm:text-base leading-relaxed text-amber-900/80">
                        I specialize in combining the fast-paced development of the MongoDB, Express, React, and Node
                        stack with strict cloud architectural guidelines. Over the last 5+ years, I have helped startups
                        and enterprise teams architect pipelines, secure Kubernetes clusters, and build reactive dashboards.
                    </p>
                    <p className="font-text text-sm sm:text-base leading-relaxed text-amber-900/80 mt-4">
                        With a background rooted firmly in both application code and systems engineering, I bridge the
                        typical gap between frontend responsiveness and backend infrastructure viability.
                    </p>

                    <div className="flex gap-8 sm:gap-12 mt-8">
                        <div>
                            <p className="font-heading font-bold text-3xl sm:text-4xl">5+</p>
                            <p className="font-text text-xs text-amber-900/70 tracking-wide mt-1">YEARS EXPERIENCE</p>
                        </div>
                        <div>
                            <p className="font-heading font-bold text-3xl sm:text-4xl">40+</p>
                            <p className="font-text text-xs text-amber-900/70 tracking-wide mt-1">PROJECTS COMPLETED</p>
                        </div>
                        <div>
                            <p className="font-heading font-bold text-3xl sm:text-4xl">15+</p>
                            <p className="font-text text-xs text-amber-900/70 tracking-wide mt-1">CLOUD DEPLOYMENTS</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 shrink-0 w-full">
                    <div className="bg-[#D6D3CC] border border-solid border-emerald-100 rounded-lg h-64 md:h-80 flex items-center justify-center">
                        <p className="font-text text-xs text-amber-900/60 tracking-wide">Working Portrait</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
