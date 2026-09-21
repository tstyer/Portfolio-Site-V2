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

    // Same status pattern as the contact form - it decides which of the
    // loading / error / empty / list states below gets rendered.
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Request failed'); // a 500 still resolves, so check res.ok
            }
            return res.json(); // take the response from fetch, then turn into json format
        })
        .then((data) => {
            setBlogs(data);
            setStatus('success');
        })
        .catch((err) => {
            console.error("Error fetching blogs", err);
            setStatus('error');
        })
    }, []) // empty array to run once

    return(
        <section className="pt-8 md:pt-16">

            <p className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide">// WHAT I WRITE</p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mt-2">Blogs</h1>
            <p className="font-text text-sm sm:text-base leading-relaxed text-amber-900/80 mt-3 max-w-2xl">
                Every post is published on Substack. Click any card to read the full article there.
            </p>
            <div className="border-t border-black/10 mt-6 mb-10 md:mb-12" />

            {status === 'loading' && (
                <p className="font-text text-sm text-amber-900/70">Loading posts...</p>
            )}

            {status === 'error' && (
                <p className="font-text text-sm text-red-700">
                    Couldn't load the posts right now. Please try again later.
                </p>
            )}

            {status === 'success' && blogs.length === 0 && (
                <p className="font-text text-sm text-amber-900/70">
                    No posts published yet - check back soon.
                </p>
            )}

            {status === 'success' && blogs.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        // The whole card is the link, so there is one clear target per post
                        // rather than a small text link in the corner.
                        <a
                            key={blog._id}
                            href={blog.substackLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col h-full border border-solid border-emerald-100 rounded-lg overflow-hidden bg-[#D6D3CC]/40 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1eee6]"
                        >
                            {/* bg-cover/bg-center live in the class list so a blog with no
                                image just falls back to the flat colour, instead of the
                                browser being handed url(undefined) */}
                            <div
                                className="h-48 shrink-0 bg-[#D6D3CC] bg-cover bg-center flex items-center justify-center p-4"
                                style={blog.image ? { backgroundImage: `url(${blog.image})` } : undefined}
                            >
                                <p className="font-text text-xs text-amber-900/60 text-center">{blog.subTitle}</p>
                            </div>

                            {/* flex-1 + flex-col is what lets mt-auto below push the
                                VIEW BLOG row to the bottom, so it lines up across cards
                                even when the descriptions are different lengths */}
                            <div className="flex flex-col flex-1 p-5">
                                <h2 className="font-heading font-bold text-lg">{blog.title}</h2>
                                <p className="font-text text-xs text-amber-900/80 leading-relaxed mt-2">{blog.shortDescription}</p>
                                <span className="font-text text-xs font-bold tracking-wide mt-auto pt-4 transition-colors group-hover:text-blue-500">
                                    VIEW BLOG ↗
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}

        </section>
    )
}
