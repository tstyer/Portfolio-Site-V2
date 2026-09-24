import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    // Shared by all three pills. w-26 is what keeps them equal width whatever the
    // label says; text-center keeps shorter labels centred in that space.
    // Border WIDTH and COLOUR both live in the state strings below, never here.
    // Two utilities setting the same property must never both be applied - which
    // one wins depends on their order in the compiled CSS, not on the order you
    // list them - so each property is set in exactly one of the two states.
    const baseLink = 'inline-block w-26 font-text font-bold text-center px-4 py-3 bg-orange-100/70 border-solid transition-all cursor-pointer';

    // Not the current page: 1px border, sits raised, presses in on hover.
    const raised = 'border border-emerald-100 shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]';

    // The current page: thicker, darker border, already pressed in. The colour has
    // to be darker than the fill to show at all - orange-100 was the same colour as
    // bg-orange-100/70, so it vanished into the button.
    const pressed = 'border-2 border-amber-900/20 shadow-none translate-x-[3px] translate-y-[3px]';

    // NavLink works isActive out from the current URL and hands it to this function,
    // so there is no state to keep in sync. That means it still shows the right pill
    // after a reload, on a link pasted straight into the address bar, and on the
    // browser's back button - none of which a useState set by onClick would catch.
    const navLink = ({ isActive }: { isActive: boolean }) =>
        `${baseLink} ${isActive ? pressed : raised}`;

    return (
        <div className='relative flex w-full h-auto justify-between items-center'>

            <div>
                <Link to={"/"} className='font-bold font-stretch-expanded font-heading text-base md:text-lg'>Travis.</Link>
            </div>

            {/* Desktop links - hidden below the sm breakpoint, visible from sm up */}
            <nav className='hidden sm:flex gap-6 md:gap-12 font-heading'>

                {/* `end` matters on "/" only: without it NavLink treats the path as a
                    prefix, so Home would count as active on every page of the site. */}
                <NavLink to={"/"} end className={navLink}>Home</NavLink>
                <NavLink to={"/blog"} className={navLink}>Blog</NavLink>
                <NavLink to={"/contact"} className={navLink}>Contact</NavLink>

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
                <nav className='absolute top-full left-0 w-full flex flex-col items-end gap-4 bg-[#f1eee6] px-2 py-4 sm:hidden font-heading'>
                    <Link to={"/"} onClick={() => setIsOpen(false)} className='tracking-wide text-sm inline-block w-1/2 px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>HOME</Link>
                    <Link to={"/blog"} onClick={() => setIsOpen(false)} className='tracking-wide text-sm inline-block w-1/2 px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>BLOG</Link>
                    <Link to={"/contact"} onClick={() => setIsOpen(false)} className='tracking-wide text-sm inline-block w-1/2 px-2 py-1 rounded-md transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50'>CONTACT</Link>
                </nav>
            )}
        </div>
    )
}
