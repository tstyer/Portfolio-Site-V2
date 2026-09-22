import { NavBar } from "../../components/nav_bar/Navbar"
import { Link } from "react-router"
import portfolio_headshot from '../../assets/portfolio_headshot.jpeg';
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
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0 pt-8 md:pt-16">
                <div>
                    <div className="px-3 py-2">
                        <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Full-Stack <span className="italic text-glow">Developer</span>. <br />SEO <span className="italic text-glow">Engineer.</span> <br /><span className="italic text-glow">Copywriter.</span></h1>
                        <h2 className="font-text text-sm sm:text-base md:text-lg pt-2 md:pt-4 max-w-2xl">With Website Design, Full-Stack Development, SEO implementation and ethical copywriting,
                        I'll present your business that leads to more customers.
                        </h2>
                    </div>

                    <div className="flex font-text text-xs sm:text-sm md:text-base mt-3 mx-2 gap-3 sm:gap-3 md:gap-6">
                        <Link to={"/contact"} className="px-6 py-2 md:px-8 md:py-3 font-medium border border-solid border-emerald-100 bg-[#D6D3CC] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Let's Chat
                        </Link>
                        <button className="px-6 py-2 md:px-8 md:py-3 font-medium border border-solid border-emerald-100 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
                                onClick={() => {
                                    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                            View Work
                        </button>
                    </div>
                </div>

                {/* flex-1 claims all the space left over beside the text, and
                    justify-center puts the image in the middle of it */}
                <div className="flex justify-center md:flex-1">
                    <img src={portfolio_headshot} alt="Image of Travis" className="w-0 h-0 md:w-58 md:h-62 rounded-lg object-cover object-top mix-blend-multiply transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50"/>
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