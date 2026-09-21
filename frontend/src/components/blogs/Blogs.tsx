import { useState, useEffect } from "react";

interface Blog {
    title: string,
    subTitle: string,
    shortDescription: string,
    bodyText: string,  
    image?: string, 
    slug?: string 
}

export function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]); // default value of empty array
    
    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
        .then((res) => res.json()) // take the response from fetch, then turn into json format
        .then((data) => setBlogs(data))
        .catch((err) => console.error("Error fetching blogs", err))
    }, []) // empty array to run once

    return(
        <section className="pt-16 md:pt-24">
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mt-2">Blogs</h2>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={(blog.title)} className="border border-solid border-emerald-100 rounded-lg overflow-hidden bg-[#D6D3CC]/40">

                    </div>
                ))}

            </div>


        </section>
    )

}