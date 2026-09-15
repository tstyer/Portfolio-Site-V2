import { Link } from 'react-router-dom'



export function NavBar() {
    return(
        <div className='flex w-full h-auto justify-between px-3 py2'>
            <div> 
                <Link to={"/"}>Travis.</Link>
            </div>
           
            <div>
                <nav className='flex gap-3'>
                    <Link to={"/blog"}>Blogs</Link>
                    <Link to={"/contact"}>Contact</Link>
                </nav>
            </div>
            
          
        </div>
    )
}