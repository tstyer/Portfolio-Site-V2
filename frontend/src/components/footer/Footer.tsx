import { Link } from 'react-router-dom'

export function Footer() {
    return(
        <footer className='flex flex-col sm:flex-row w-full justify-between items-center gap-4 py-8 mt-12 border-t border-black/10'>
            <div className='flex flex-row gap-2 font-text text-xs'>
                {/* Other Links */}
                <Link to={"/"} className="px-3 py-1 font-medium border border-solid border-emerald-100 bg-[#D6D3CC] transition-all shadow-[2px_2px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    Travis.
                </Link>
                <Link to={"/contact"} className="px-3 py-1 font-medium border border-solid border-emerald-100 bg-[#D6D3CC] transition-all shadow-[2px_2px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    Let's Chat.
                </Link>
            </div>

            <p className='font-text text-xs text-amber-900/70 order-last sm:order-none'>
                © {new Date().getFullYear()} Travis. All rights reserved.
            </p>

            <div className='flex gap-4'>
                {/* Social Media */}
                <a href="https://www.github.com/tstyer" rel='noopener noreferrer' target='_blank'>
                    <i className="fa-brands fa-square-github fa-xl text-amber-900 inline-block p-1 rounded-full transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50"></i>
                </a>
                <a href="https://www.linkedin.com/in/travis-code/" rel='noopener noreferrer' target='_blank'>
                    <i className="fa-brands fa-linkedin-in fa-xl text-amber-900 inline-block p-1 rounded-full transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50"></i>
                </a>
                <a href="https://substack.com/" rel='noopener noreferrer' target='_blank'>
                    <i className="fa-brands fa-substack fa-xl text-amber-900 inline-block p-1 rounded-full transition-shadow duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/50"></i>
                </a>
            </div>
        </footer>

    )
}