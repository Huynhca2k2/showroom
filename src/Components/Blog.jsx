import React from 'react'
import Notification from './Notification'
import banner_blog from './Assets/Images/banner-blog.png'
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";
import { PiSquareSplitVerticalFill } from "react-icons/pi";
import { PiSquaresFourFill } from "react-icons/pi";
import { PiGridNineFill } from "react-icons/pi";
import BlogItem from './BlogItem';

export default function Blog({notifi, setNotifi}) {
  return (
    <>
      {notifi && <Notification setNotifi={setNotifi}/>}
      <div className='mt-[60px] mx-auto xl:w-[1120px] lg:w-[900px] md:w-[700px] sm:w-[580px] px-3 sm:px-0'>
        <div className='relative md:h-[392px] sm:h-[300px] h-[200px]'>
          <img src={banner_blog} alt="banner blog" className='h-full object-cover'/>
          <div className='flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center'>
            <div className='flex flex-row items-center gap-2'>
              <span className='text-sm font-medium text-gray-500'>Home</span> 
              <VscChevronRight className='text-xs'/> 
              <span className='text-sm font-semibold text-gray-800'>Blog</span>
            </div>
              <span className='md:text-[50px] text-[32px] font-medium text-gray-800'>Our Blog</span>
              <span className='md:text-xl text-gray-800 text-center'>Home ideas and design inspiration</span>
          </div>
        </div>

        <div className='mt-14'>
          <div className='flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between'>
            <div className='flex flex-row gap-4'>
              <span className='text-gray-800 text-sm font-semibold border-b-[1px] border-gray-800 block'>All Blog</span>
              <span className='text-gray-500 text-sm font-medium'>Featured</span>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
              <span className='font-semibold text-gray-800'>Sort by</span>
              <VscChevronDown/>
              <div className='flex flex-row border-y-[1px] cursor-pointer'>
                <div className='py-2 px-3 text-xl border-x-[1px] hover:bg-slate-100'><PiGridNineFill/></div>
                <div className='py-2 px-3 text-xl border-r-[1px] hover:bg-slate-100'><PiSquaresFourFill/></div>
                <div className='py-2 px-3 text-xl border-r-[1px] hover:bg-slate-100'><PiSquareSplitHorizontalFill/></div>
                <div className='py-2 px-3 text-xl border-r-[1px] hover:bg-slate-100'><PiSquareSplitVerticalFill/></div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
          </div>
          <div className='flex flex-row justify-center mt-20'><span className='h-[40px] rounded-full border-[1px] border-gray-800 w-max py-2 px-8 font-medium cursor-pointer text-gray-800'>Show more</span></div>
        </div>
      </div>
    </>
    
  )
}
