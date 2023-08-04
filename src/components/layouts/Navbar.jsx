import React, { useEffect, useState } from 'react'
import Switcher from '../widgets/Switcher'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  // get current url
  const location = useLocation()
  const [url, setUrl] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setUrl(location.pathname)
  }, [location])
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar lg:px-8 py-4 fixed z-50 fade-down-animation  ${isScrolled && 'bg-slate-100 dark:bg-slate-800 shadow-xl'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 dark:text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-base-100 dark:bg-slate-600 dark:text-slate-50">
            <li ><a className='dark:hover:text-slate-50 dark:hover:bg-slate-700'>Home</a></li>
            {/* <li>
              <a className='hover:text-slate-50 hover:bg-slate-700'>Parent</a>
              <ul className="p-2">
                <li><a className='hover:text-slate-50 hover:bg-slate-700'>Submenu 1</a></li>
                <li><a className='hover:text-slate-50 hover:bg-slate-700'>Submenu 2</a></li>
              </ul>
            </li> */}
            <li><a className='dark:hover:text-slate-50 dark:hover:bg-slate-700'>Item 3</a></li>
          </ul>
        </div>
        <div className="flex-col">
          <h1 className='text-3xl select-none font-permanent dark:text-slate-50'>Lazuardi Timur</h1>
          <p className='font-semibold text-gray-400 select-none font-montserrat max-md:hidden dark:text-gray-500'>Fullstack Developer</p>
        </div>
      </div>
      <div className="hidden gap-5 navbar-center lg:flex">
        <Link to={'/'} className={`font-montserrat font-semibold text-slate-600 dark:text-slate-400 hover:-translate-y-0.5 active:translate-y-0 duration-300 ease-in-out ${url === '/' && 'active'} `}>Home</Link>
        <Link to={'/about'} className={`font-montserrat font-semibold text-slate-600 dark:text-slate-400 hover:-translate-y-0.5 active:translate-y-0 duration-300 ease-in-out ${url === '/about' && 'active'}`}>About</Link>
        <Link to={'/project'} className={`font-montserrat font-semibold text-slate-600 dark:text-slate-400 hover:-translate-y-0.5 active:translate-y-0 duration-300 ease-in-out ${url === '/project' && 'active'}`}>Project</Link>
        <Link to={'/contact'} className={`font-montserrat font-semibold text-slate-600 dark:text-slate-400 hover:-translate-y-0.5 active:translate-y-0 duration-300 ease-in-out ${url === '/contact' && 'active'}`}>Contact</Link>
        <Link to={'/contact'} className={`text-link font-montserrat font-semibold text-slate-600 dark:text-slate-400 `}>Contact</Link>
      </div>
      <div className="navbar-end">
        <Switcher />
      </div>
    </div>
  )
}

export default Navbar
