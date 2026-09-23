import about_me_image from '../../assets/about_me_image.jpg'

export function AboutMe() {
    return (
        <section className="pt-16 md:pt-24">
            <p className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide">// WHO I AM</p>
            <h2 className="font-heading font-bold text-3xl mt-2">About Me</h2>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />

            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
                <div className="flex-1">
                    <p className="font-text text-sm sm:text-base leading-relaxed text-amber-900/80">
                        As a self-taught full-stack developer with roots in copywriting and SEO, I bring a holistic perspective to product development. 
                        I specialise in MERN stack applications, pairing fast-paced development cycles with strict cloud architectural standards.
                    </p>
                    <p className="font-text text-sm sm:text-base leading-relaxed text-amber-900/80 mt-4">
                        Whether I’m consulting for a start-up, volunteering as a product designer, or architecting personal reactive apps, 
                        my goal is always the same: to seamlessly connect the dots between how a product is built, how it looks, and how it reaches its audience.
                    </p>

                    <div className="flex gap-8 sm:gap-12 mt-8">
                        <div>
                            <p className="font-heading font-bold text-3xl sm:text-4xl">2+</p>
                            <p className="font-text text-xs text-amber-900/70 tracking-wide mt-1">YEARS EXPERIENCE</p>
                        </div>
                        <div>
                            <p className="font-heading font-bold text-3xl sm:text-4xl">20+</p>
                            <p className="font-text text-xs text-amber-900/70 tracking-wide mt-1">PROJECTS COMPLETED</p>
                        </div>
                        <div>
                            <p className="font-heading font-bold text-3xl sm:text-4xl">2+</p>
                            <p className="font-text text-xs text-amber-900/70 tracking-wide mt-1">CLOUD DEPLOYMENTS</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 shrink-0 w-full">
                    <div className="bg-[#D6D3CC] border border-solid border-emerald-100 rounded-lg h-64 md:h-80 flex items-center justify-center">
                        <img src={about_me_image} alt="Wireframe image of connected technology" className='rounded-lg object-cover object-top transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50' />
                    </div>
                </div>
            </div>
        </section>
    )
}
