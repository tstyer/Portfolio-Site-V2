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
        .then((res) => res.json) // take the response from fetch, then turn into json format
        .then((data) => setBlogs(data))
        .catch((err) => console.error("Error fetching blogs", err))
    }, []) // empty array to run once

    return(
        <section className="pt-16 md:pt-24">
            
            <div>

            </div>
            
        </section>
    )

}