
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Footer from './components/layouts/Footer'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="bg-slate-50 dark:bg-slate-800 dark:text-slate-50 text-slate-800">
        <BrowserRouter>
          <Navbar />
          <div className="pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
