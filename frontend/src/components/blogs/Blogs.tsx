import { useState, useEffect } from "react";

interface Blog {
    _id: string,
    title: string,
    subTitle: string,
    shortDescription: string,
    substackLink: string,  
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
            <h2 className="font-text font-bold mt-2">Each blog will take you to its Substack page when clicked.</h2>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={(blog._id)} className="border border-solid border-emerald-100 rounded-lg overflow-hidden bg-[#D6D3CC]/40">
                        <div className="flex items-center justify-center h-48 bg-[#D6D3CC]" style={{ backgroundImage: `url(${blog.image})`}}>
                            <p className="font-text bold text-xs text-amber-900/60">{blog.subTitle}</p>
                        </div>

                        <div className="p-5">
                            <h3 className="font-heading font-bold text-lg">{blog.title}</h3>
                            <p className='font-text text-xs text-amber-900/80 mt-2'>{blog.shortDescription}</p>
                            <a
                                href={blog.substackLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-text text-xs font-bold tracking-wide mt-auto inline-block transition-colors hover:text-blue-500"
                            >
                                VIEW BLOG ↗
                            </a>
                        </div>
                    </div>
                ))}

            </div>


        </section>
    )

}