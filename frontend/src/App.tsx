import { Routes, Route } from 'react-router-dom';
import { BlogPage } from './pages/blog-page/BlogPage';
import { HomePage } from './pages/home_page/HomePage';
import { ContactPage } from './pages/contact_page/ContactPage';

export default function App() {
  return(
    <div> 
      
    <Routes>

      <Route path='/' element={<HomePage />}>
        <HomePage />
      </Route>

      <Route path='/blog' element={<BlogPage />}>
        <BlogPage />
      </Route>

      <Route path='/contact' element={<ContactPage />}>
        <ContactPage />
      </Route>
    
    </Routes>
    
    </div>
   

   
  )
}