import { Routes, Route } from 'react-router-dom';
import { BlogPage } from './pages/blog-page/BlogPage';
import { HomePage } from './pages/home_page/HomePage';
import { ContactPage } from './pages/contact_page/ContactPage';

export default function App() {
  return(
    <div> 
      
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/contact' element={<ContactPage />} />
    
    </Routes>

    </div>
   

   
  )
}