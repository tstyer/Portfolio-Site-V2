import { useState } from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative flex w-full h-auto justify-between items-center'>

            <div>
                <Link to={"/"} className='font-bold font-stretch-expanded font-heading text-base md:text-lg'>Travis.</Link>
            </div>

            {/* Desktop links - hidden below the sm breakpoint, visible from sm up */}
            <nav className='hidden sm:flex gap-6 md:gap-12 font-heading'>
                <Link to={"/"} className='tracking-wide text-sm md:text-base inline-block px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>HOME</Link>
                <Link to={"/blog"} className='tracking-wide text-sm md:text-base inline-block px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>BLOG</Link>
                <Link to={"/contact"} className='tracking-wide text-sm md:text-base inline-block px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>CONTACT</Link>
            </nav>

            {/* Burger button - visible below sm, hidden from sm up */}
            <button
                className='flex sm:hidden flex-col gap-1.5 p-2'
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className='block w-6 h-0.5 bg-black'></span>
                <span className='block w-6 h-0.5 bg-black'></span>
                <span className='block w-6 h-0.5 bg-black'></span>
            </button>

            {/* Mobile dropdown - only rendered while isOpen is true */}
            {isOpen && (
                <nav className='absolute top-full left-0 w-full flex flex-col gap-4 bg-[#f1eee6] border border-black p-4 sm:hidden font-heading'>
                    <Link to={"/"} onClick={() => setIsOpen(false)} className='tracking-wide text-sm inline-block px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>HOME</Link>
                    <Link to={"/blog"} onClick={() => setIsOpen(false)} className='tracking-wide text-sm inline-block px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>BLOG</Link>
                    <Link to={"/contact"} onClick={() => setIsOpen(false)} className='tracking-wide text-sm inline-block px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>CONTACT</Link>
                </nav>
            )}
        </div>
    )
}
