import React from 'react'
import photo from '/public/timur1.jpg'
import { Link } from 'react-router-dom'
import cvFile from '/public/CV_Muhammad Lazuardi Timur.pdf'

const Hero = () => {
  return (
    <div className="mb-3 hero">
      <div className="flex-col hero-content lg:flex-row-reverse ">
        <img src={photo} className="max-w-sm rounded-xl shadow-2xl" data-aos="fade-left" data-aos-duration="1000" />
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-5xl font-bold font-montserrat">Hi, Welcome buddy! </h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[450px] " fill="none" viewBox="0 0 346 24"><path stroke="#19A7CE" stroke-width="3" d="M1 18.61C111.19 1.714 209.119-2.292 294.787 6.59c2.103 1.37 1.447 2.211-1.968 2.525l-70.542 10.677c-1.016 1.455-.725 2.272.875 2.45 35.248-2.243 75.975-5.044 122.18-8.401" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg>
          <p className="py-6 font-montserrat">I'm Muhammad Lazuardi Timur, a Fullstack Developer from Indonesia. I'm currently internship at <a href="https://www.aio.co.id/" target="_blank" className="text-[#19A7CE] hover:text-[#146C94]">PT Amerta Indah Otsuka</a> as a Frontend Developer. I'm also a student at <a href="https://www.polinema.ac.id/" target="_blank" className="text-[#19A7CE] hover:text-[#146C94]">Politeknik Negeri Malang</a> majoring in Informatics Engineering.</p>
          <div className="flex items-center gap-3">
            <Link to={'/about'} class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-slate-800 dark:text-slate-50 dark:hover:text-slate-800 border-2 border-slate-800 dark:border-slate-50 rounded-full hover:text-white group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-slate-800 dark:bg-slate-50 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative">About me</span>
            </Link>
            <a download={cvFile} href={cvFile} class="relative  items-center justify-start inline-block px-12 py-4 overflow-hidden font-medium rounded-full group">
              <span class="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 dark:bg-white bg-slate-800 opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-56 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-24 dark:bg-white bg-slate-800 opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left dark:text-white text-slate-800 transition-colors duration-200 ease-in-out dark:group-hover:text-gray-900 group-hover:text-slate-50">Download CV</span>
              <span class="absolute inset-0 border-2 dark:border-white border-slate-800 rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
