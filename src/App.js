import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gardens from './pages/Gardens';
import Products from './pages/Products';
import Services from './pages/Services';
import SosicalResponsibility from './pages/SosicalResponsibility';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';
import { useEffect } from 'react';
import ScrollToTop from './ScrollToTop';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gardens' element={<Gardens />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/social-responsibility' element={<SosicalResponsibility />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
