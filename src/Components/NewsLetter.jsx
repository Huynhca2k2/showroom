import React from 'react'
import banner_letter from './Assets/Images/paste-image.png'
import { SlEnvolope } from "react-icons/sl";

export default function NewsLetter() {
  return (
    <div className='relative mt-20 bg-slate-100 h-[360px]'>
    <img src={banner_letter} alt="banner" className='h-full w-full object-cover hidden sm:block'/>
    <div className='sm:w-[540px] w-full flex flex-col items-center px-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <span className='block sm:text-[40px] text-[28px] font-medium'>Join Our Newsletter</span>
        <span className='block sm:text-lg text-base font-normal mt-1 text-center'>Sign up for deals, new products and promotions</span>
        <div className='flex flex-row items-center justify-between w-[90%] sm:mx-auto gap-2 border-b-2 border-gray-300 py-2 mt-8'>
            <SlEnvolope className='w-[24px] h-[24px]'/>
            <input type="text" placeholder='Email address' className='flex-1 outline-none bg-transparent'/>
            <span className='block font-medium text-base text-[#6c7275] cursor-pointer'>Signup</span>
        </div>
    </div>

    </div>
  )
}
