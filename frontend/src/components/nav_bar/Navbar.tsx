import { Link } from 'react-router-dom'



export function NavBar() {
    return(
        <div className='flex w-full h-auto justify-between px-3 py2'>
            <div> 
                <Link to={"/"} className='font-bold font-stretch-expanded'>Travis.</Link>
            </div>
           
            <div>
                <nav className='flex gap-6 font-heading'>
                    <Link to={"/blog"} className='font-stretch-expanded'>BLOGS</Link>
                    <Link to={"/contact"} className='font-stretch-expanded'>CONTACT</Link>
                </nav>
            </div>
            
          
        </div>
    )
}