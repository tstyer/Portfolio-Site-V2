import { NavBar } from "../../components/nav_bar/Navbar"
import { Link } from "react-router"
import portfolio_headshot from '../../assets/portfolio_headshot.jpeg';

export function HomePage() {
    return(
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">

            <NavBar />

            {/* Hero */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-8 md:pt-16">
                <div>
                    <div className="px-3 py-2">
                        <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Full-Stack <span className="italic">Developer</span>. <br />SEO <span className="italic">Engineer.</span> <br /><span className="italic">Copywriter.</span></h1>
                        <h2 className="font-text text-sm sm:text-base md:text-lg pt-2 md:pt-4 max-w-2xl">Website Design, Full-Stack Development, SEO implementation and ethical copywriting,<br />
                        I'll present your business that leads to more customers.
                        </h2>
                    </div>

                    <div className="flex font-text text-xs sm:text-sm md:text-base mt-3 mx-2 gap-3 sm:gap-3 md:gap-6">
                        <Link to={"/contact"} className="px-6 py-2 md:px-8 md:py-3 font-medium border border-solid border-emerald-100 bg-[#D6D3CC] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Let's Chat
                        </Link>
                        <button className="px-6 py-2 md:px-8 md:py-3 font-medium border border-solid border-emerald-100 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            View Work
                        </button>
                    </div>
                </div>

                <div className="shrink-0">
                    <img src={portfolio_headshot} alt="Image of Travis" className="w-0 h-0 md:w-48 md:h-82 object-cover"/>
                </div>
            </div>

           

        </div>
    )
}