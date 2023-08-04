import React from 'react'

import html from '/public/icon/html.png'
import css from '/public/icon/css.png'
import js from '/public/icon/js.png'
import ts from '/public/icon/ts.png'
import php from '/public/icon/php.png'
import py from '/public/icon/python.png'
import java from '/public/icon/java.png'
import laravel from '/public/icon/laravel.png'
import nodejs from '/public/icon/node.png'

const Expertise = () => {
  return (
    <div className='my-3'>
      <div className="title">
        <div data-aos="fade-right" data-aos-duration="1000" className="text-3xl font-extrabold text-center font-montserrat">
          My Expertise
        </div>
        <div data-aos="fade-right" data-aos-duration="1700" className="flex justify-center items-center mt-1">
          <hr className=" border-t-2 border-slate-800 w-52 border-2" />
        </div>
      </div>

      <div className="flex items-center justify-evenly mt-10 px-8 gap-2 max-md:flex-wrap">
        <div className=' w-full text-center '>
          <p className='font-bold text-xl  text-slate-800   text-center'>Programming Languages <br /> & Frameworks</p>
          <div className="grid grid-cols-4 max-md:grid-cols-1 mt-6 gap-3 ">
            <img src={html} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
            <img src={css} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
            <img src={js} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
            <img src={ts} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
            <img src={php} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
            <img src={java} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
            <img src={py} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
            <img src={nodejs} alt="" className='filter grayscale hover:scale-102 hover:filter-none duration-300 ease-in-out cursor-pointer' />
          </div>
        </div>
        <div class="divider lg:divider-horizontal divider-vertical"></div>
        <div className=' w-full text-center'>
          <p className='font-bold text-xl text-slate-800'>Tools</p>
        </div>
        <div class="divider lg:divider-horizontal"></div>
        <div className=' w-full text-center'>
          <p className='font-bold text-xl text-slate-800'>Databases</p>
        </div>
      </div>
    </div>
  )
}

export default Expertise
