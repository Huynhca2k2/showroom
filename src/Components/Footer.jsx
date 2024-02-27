import React from 'react'
import social_icon from './Assets/Images/social-icon.png'

export default function Footer() {
  return (
    <div className='sm:h-[250px] bg-[#141718]'>
        <div className='mx-auto xl:max-w-[1120px] flex sm:flex-row flex-col items-center justify-between sm:pt-20 pt-14 sm:gap-0 gap-4'>
            <div className='flex flex-row text-white items-center'>
                <div className='text-2xl font-medium pr-8'>3legant.</div>
                <div className='text-sm font-normal pl-8 border-l-[1px] border-[#6c7275]'>Gift & Decoration Store</div>
            </div>
            
                <ul className='flex flex-row flex-wrap items-center sm:gap-10 gap-4 text-white text-sm font-normal'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>            
           
            
        </div>
        <div className='sm:mx-auto xl:max-w-[1120px] text-white mt-10 sm:h-[56px] flex sm:flex-row flex-col items-center justify-between border-t-[1px] border-gray-500 px-3 py-6 sm:px-0 sm:p-0 sm:gap-0 gap-3'>
            <div className='flex sm:flex-row flex-col sm:gap-7 gap-4 items-start w-full'>
                <span className='font-normal text-xs block'>Copyright © 2023 3legant. All rights reserved</span>
                <span className='font-medium text-xs block'>Privacy Policy</span>
                <span className='font-medium text-xs block'>Terms of Use</span>
            </div>
            <img src={social_icon} alt="social icon" />
        </div>
    </div>
  )
}
