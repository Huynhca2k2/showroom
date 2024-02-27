import React from 'react'
import article1 from './Assets/Images/article1.png'
import { VscArrowRight } from 'react-icons/vsc'

export default function BlogItem() {
  return (
    <div className='w-[90%] md:w-full mx-auto md:mx-0 flex flex-col gap-2 mt-10'>
      <img src={article1} alt="blog img" className='w-full object-cover'/>
      <span className='sm:text-xl text-lg font-medium mt-3 line-clamp-2'>7 ways to decor your home</span>
      <span className='flex flex-row items-center gap-1 text-sm sm:text-base font-medium text-gray-600 border-b-2 border-gray-400 cursor-pointer w-max'>Read More<VscArrowRight/></span>
    </div>
  )
}
