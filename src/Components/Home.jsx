import React, { useState } from 'react'
import SlickBanner from './SlickBanner';
import kitchen from './Assets/Images/kitchen.png'
import living_room from './Assets/Images/living-room.png'
import bed_room from './Assets/Images/bedroom.png'
import ship_icon from './Assets/Images/ship-icon.png'
import lock_icon from './Assets/Images/lock.png'
import money_icon from './Assets/Images/money.png'
import call_icon from './Assets/Images/call.png'
import banner2 from './Assets/Images/banner2.png'
import { VscArrowRight } from "react-icons/vsc";
import Product from './Product';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import BlogItem from './BlogItem';
import Notification from './Notification';

export default function Home({notifi, setNotifi}) {
    

  return (
    <>
      {notifi && <Notification setNotifi={setNotifi}/>}
      
      <div className='mt-[60px] mx-auto xl:w-[1120px] lg:w-[900px] md:w-[700px] sm:w-[580px] px-3 sm:px-0'>
          <div>
              <SlickBanner/>
              <div className='flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-2 justify-between mt-4'>
                <h1 className='block font-medium xl:text-[72px] lg:text-[62px] md:text-[52px] sm:text-[42px] text-[32px]  text-gray-800 md:w-3/5'>Simply Unique<span className='text-gray-500'>/</span><br/>Simply Better.</h1>
                <span className='block md:w-2/5 font-normal text-gray-500'>
                  <span className='font-semibold text-gray-800'>3legant </span>
                  is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                  </span>
              </div>
          </div>
          <div className='flex sm:flex-row flex-col gap-6 mt-10 items-center  '>
            <div className='relative'>
              <img src={living_room} alt="living room" />
              <div className='flex flex-col absolute top-[32px] left-[42px] md:gap-3'>
                <span className='block font-medium text-[24px] md:text-[34px] text-gray-800'>Living Room</span>
                <span className='flex flex-row items-center text-sm gap-1 font-medium text-gray-600 border-b-2 border-gray-400 w-max cursor-pointer'>Shop Now <VscArrowRight/></span>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='relative'>
                <img src={bed_room} alt="bed room" />
                <div className='flex flex-col absolute bottom-[32px] left-[32px] md:gap-3'>
                  <span className='block font-medium text-[24px] md:text-[34px] text-gray-800'>Bedroom</span>
                  <span className='flex flex-row items-center text-sm gap-1 font-medium text-gray-600 border-b-2 border-gray-400 w-max cursor-pointer'>Shop Now <VscArrowRight/></span>
                </div>
              </div>
              <div className='relative'>
                <img src={kitchen} alt="kitchen" />
                <div className='flex flex-col absolute bottom-[32px] left-[32px] md:gap-3'>
                  <span className='block font-medium text-[24px] md:text-[34px] text-gray-800'>Kitchen</span>
                  <span className='flex flex-row items-center text-sm gap-1 font-medium text-gray-600 border-b-2 border-gray-400 w-max cursor-pointer'>Shop Now <VscArrowRight/></span>
                </div>
              </div>
              
            </div>
          </div>
          <div className='mt-14'>
            
              <div className='flex flex-row items-end justify-between'>
                <span className='font-medium md:text-[40px] text-[28px] text-gray-800 leading-[1.1]'>New <br />Arrivals</span>
                <span className='flex flex-row items-center gap-1 font-medium text-gray-600 border-b-2 border-gray-400  cursor-pointer'>More Products<VscArrowRight/></span>
              </div>

              <PerfectScrollbar>
                <div className="flex flex-row overflow-x-auto w-max my-12">
                  <div className="flex gap-6">
                    
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                  </div>
                </div>
              </PerfectScrollbar>
              
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-6 mt-14 gap-6'>
            <div className='bg-[#f3f5f7] py-12 px-8 flex gap-3 flex-col w-3/4 md:w-full mx-auto'>
              <img src={ship_icon} alt="ship icon" className='w-12 h-12'/>
              <span className='font-medium text-xl text-gray-800 pt-1'>Free Shipping</span>
              <span className='font-normal text-sm text-gray-500'>Order above $200</span>
            </div>
            <div className='bg-[#f3f5f7] py-12 px-8 flex gap-3 flex-col w-3/4 md:w-full mx-auto'>
              <img src={money_icon} alt="ship icon" className='w-12 h-12'/>
              <span className='font-medium text-xl text-gray-800 pt-1'>Money-back</span>
              <span className='font-normal text-sm text-gray-500'>30 days guarantee</span>
            </div>
            <div className='bg-[#f3f5f7] py-12 px-8 flex gap-3 flex-col w-3/4 md:w-full mx-auto'>
              <img src={lock_icon} alt="ship icon" className='w-12 h-12'/>
              <span className='font-medium text-xl text-gray-800 pt-1'>Secure Payments</span>
              <span className='font-normal text-sm text-gray-500'>Secured by Stripe</span>
            </div>
            <div className='bg-[#f3f5f7] py-12 px-8 flex gap-3 flex-col w-3/4 md:w-full mx-auto'>
              <img src={call_icon} alt="ship icon" className='w-12 h-12'/>
              <span className='font-medium text-xl text-gray-800 pt-1'>24/7 Support</span>
              <span className='font-normal text-sm text-gray-500'>Phone and Email suppor</span>
            </div>
          </div>
      </div>
      <div className='flex sm:flex-row flex-col justify-between items-center mt-14 sm:h-[532px]'>
        <div className='sm:w-1/2 h-full'>
          <img src={banner2} alt="banner" className='object-cover w-full h-full'/>
        </div>
        <div className='sm:w-1/2 flex flex-col gap-2 sm:px-20 px-3 py-6 sm:pr-4 sm:py-0 bg-[#f3f5f7] h-full justify-center'>
          <span className='text-[#377DFF] font-semibold'>SALE UP TO 35% OFF</span>
          <span className='md:text-[40px] text-[28px] font-medium text-gray-800 leading-tight'>HUNDREDS of <br />
            New lower prices!
          </span>
          <span className='sm:text-xl md:text-lg text-sm font-normal text-gray-600'>It’s more affordable than ever to give every room in your home a stylish makeover</span>
          <span className='flex flex-row items-center gap-1 sm:text-lg text-sm font-medium text-gray-600 border-b-2 border-gray-400 w-max cursor-pointer'>Shop Now <VscArrowRight/>
          </span>
        </div>
      </div>
      <div className='mx-auto xl:max-w-[1120px] mt-14 lg:w-[900px] md:w-[700px] sm:w-[580px] px-3 sm:px-0 '>
        <div className='flex flex-row items-end justify-between'>
          <span className='font-medium sm:text-[40px] text-[28px] text-gray-800 leading-[1.1]'>Articles</span>
          <span className='flex flex-row items-center text-sm sm:text-base gap-1 font-medium text-gray-600 border-b-2 border-gray-400 cursor-pointer'>More Articles<VscArrowRight/></span>
        </div>
        <div className='flex sm:flex-row flex-col sm:gap-6'>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
        </div>
      </div>
    </>
  )
}
