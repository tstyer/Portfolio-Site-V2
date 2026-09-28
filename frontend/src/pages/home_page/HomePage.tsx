import { NavBar } from "../../components/nav_bar/Navbar"
import { Link } from "react-router"
import { KeyboardHero } from '../../components/keyboard_hero/KeyboardHero';
import { Footer } from "../../components/footer/Footer";
import { AboutMe } from "../../components/about/AboutMe";
import { Skills } from "../../components/skills/Skills";
import { FeaturedProjects } from "../../components/projects/FeaturedProjects";
import { useRef } from "react";

export function HomePage() {

    const projectsRef = useRef<HTMLDivElement>(null);

    return(
   
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">

            <NavBar />

            {/* Hero */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 pt-8 md:pt-16">
                <div className="flex-1 min-w-0">
                    <div className="py-2">
                        <h3><span className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide font-semibold">// SIMPLE AND STYLISH DESIGNS</span></h3>
                        <h1 className="mt-2 font-heading font-semibold text-2xl sm:text-3xl md:text-4xl"><span className="text-glow-blue">For Your Website or Mobile App.</span></h1>
                        <h2 className="font-text text-sm sm:text-base md:text-lg pt-2 md:pt-4 max-w-2xl">I build end-to-end digital solutions that drive results. Whether you need a custom app, a new website, or strategic marketing, let's chat about your goals.
                        </h2>
                    </div>

                    <div className="flex font-text text-xs sm:text-sm md:text-base mt-3 gap-3 sm:gap-3 md:gap-6">
                        <Link to={"/contact"} className="rounded-sm px-6 py-2 md:px-8 md:py-3 font-bold bg-blue-100/70 border border-solid border-emerald-100 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Let's Chat
                        </Link>
                        <button className="rounded-sm px-6 py-2 md:px-8 md:py-3 font-bold bg-blue-100/70 border border-solid border-emerald-100 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
                                onClick={() => {
                                    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                            View Work
                        </button>
                    </div>
                </div>

                <div className="flex justify-center w-full md:w-[36%] md:shrink-0">
                    <KeyboardHero />
                </div>
            </div>

           <AboutMe />

           <Skills />
            <div ref={projectsRef}>
                
                <FeaturedProjects />
            
            </div>
           

           <Footer />

        </div>

  
    )
}
