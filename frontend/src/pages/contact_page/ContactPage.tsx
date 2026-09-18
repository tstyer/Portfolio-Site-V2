import { NavBar } from "../../components/nav_bar/Navbar"
import { Footer } from "../../components/footer/Footer"


export function ContactPage() {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">

            <NavBar />

        <div className="flex flex-col justify-between gap-8 pt-8 md:pt-16">
            <div className="px-3 py-2">
                <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Shoot me a message:</h1>
            </div>

            <div>

                <h2>CONTACT FORM</h2>
                {/* contact form */}
            </div>
        </div>
           

            <Footer />
        </div>
    )
}