import { NavBar } from "../../components/nav_bar/Navbar"
import { Link } from "react-router"

export function HomePage() {
    return(
        <div className="px-8 py6">

            <NavBar />
            
            {/* Hero */}
            <div className="flex-col pt-8">
                <div className="px-3 py2">
                    <h1 className="font-heading font-semibold text-2xl">Full-Stack Developer. <br />SEO Engineer. <br />Copywriter.</h1>
                    <h2 className="font-text text-sm pt-2">Website Design, Full-Stack Development, SEO implementation and ethical copywriting,<br /> 
                    I'll present your business that leads to more customers.
                    </h2>
                </div>

                <div className="flex font-text text-xs mt-3 mx-2 gap-3 sm:gap-3 md:gap-6">
                    <Link to={"/contact"} className="px-6 py-2 font-medium border border-solid border-emerald-100 bg-[#D6D3CC] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Let's Chat
                    </Link>
                    <button className="px-6 py-2 font-medium border border-solid border-emerald-100 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        View Work
                    </button>
                </div>
            </div>
            
        </div>
    )
}