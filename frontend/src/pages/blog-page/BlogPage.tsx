import { Blogs } from "../../components/blogs/Blogs"
import { NavBar } from "../../components/nav_bar/Navbar"
import { Footer } from "../../components/footer/Footer"

export function BlogPage() {
    return(
        // Same page shell as HomePage and ContactPage. Without the max-width and
        // padding the nav, content and footer ran edge to edge on wide screens.
        // min-h-screen + flex-1 on <main> keeps the footer at the bottom of the
        // viewport while the posts are still loading, or if there are only one or two.
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 min-h-screen flex flex-col">

            <NavBar />

            <main className="flex-1">
                <Blogs />
            </main>

            <Footer />

        </div>
    )
}
