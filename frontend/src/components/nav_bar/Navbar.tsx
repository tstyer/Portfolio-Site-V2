import { Link } from 'react-router-dom'



export function NavBar() {
    return(
        <div className='flex w-full h-auto justify-between'>
            
            <div> 
                <Link to={"/"} className='font-bold font-stretch-expanded font-heading'>Travis.</Link>
            </div>
           
            <div>
                <nav className='flex gap-12 font-heading'>
                    <Link to={"/"} className='font-stretch-expanded text-sm'>HOME</Link>
                    <Link to={"/blog"} className='font-stretch-expanded text-sm'>BLOG</Link>
                    <Link to={"/contact"} className='font-stretch-expanded text-sm'>CONTACT</Link>
                </nav>
            </div>
            
          
        </div>
    )
}