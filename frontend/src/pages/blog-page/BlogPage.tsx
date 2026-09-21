import { Blogs } from "../../components/blogs/Blogs"
import { NavBar } from "../../components/nav_bar/Navbar"
import { Footer } from "../../components/footer/Footer"

export function BlogPage() {
    return(
        <div> 
            <NavBar />
            <Blogs />
            <Footer />
        </div>
       
    )
}