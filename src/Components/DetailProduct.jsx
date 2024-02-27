import React, { useState } from 'react'
import Notification from './Notification'
import { VscChevronRight } from 'react-icons/vsc'
import { PiStarFill } from 'react-icons/pi'
import product_img1 from './Assets/Images/product-item1.png'
import product_img2 from './Assets/Images/product-item2.png'
import product_img3 from './Assets/Images/product-item3.png'
import product_img4 from './Assets/Images/product-item4.png'
import { VscChromeMinimize } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import { PiHeartLight } from "react-icons/pi";
import SlickProduct from './SlickProduct'
import { PiCaretDownFill } from "react-icons/pi";
import Review from './Review'
import { SlCursor } from "react-icons/sl";

export default function DetailProduct({notifi, setNotifi}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {notifi && <Notification setNotifi={setNotifi}/>}
      <div className='mt-[60px] mx-auto xl:w-[1120px] lg:w-[900px] md:w-[700px] sm:w-[580px] px-3 sm:px-0 pt-8'>
        <div className='flex flex-row items-center gap-2'>
          <span className='text-sm font-medium text-gray-500'>Home</span> 
          <VscChevronRight className='text-xs'/>
          <span className='text-sm font-medium text-gray-500'>Shop</span> 
          <VscChevronRight className='text-xs'/> 
          <span className='text-sm font-medium text-gray-500'>Living Room</span> 
          <VscChevronRight className='text-xs'/> 
          <span className='text-sm font-semibold text-gray-800'>Product</span>
        </div>

        <div className='flex sm:flex-row flex-col mt-8 sm:gap-[32px] md:gap-[62px]'>
          <div className='relative sm:w-1/2 w-auto'>
            <SlickProduct/>
            <div className='flex flex-col gap-2 justify-center absolute top-6 left-6'>
                <span className='block w-max px-3 bg-white rounded font-semibold'>NEW</span>
                <span className='block w-max px-3 bg-[#38CB89] rounded font-medium text-white'>-50%</span>
            </div>
          </div>

          <div className='sm:w-1/2 w-full flex gap-6 flex-col sm:mt-0 mt-8'>

            <div className='flex flex-col gap-4 border-b-[1px] pb-3'>
              <div className='flex flex-row items-center gap-1 text-sm'>
                
                  <PiStarFill/>
                  <PiStarFill/>
                  <PiStarFill/>
                  <PiStarFill/>
                  <PiStarFill/>
                
                <span className='ml-2 text-xs'>11 Reviews</span>
              </div>
              <span className='sm:text-[40px] text-[28px] font-medium text-gray-800'>Tray Table</span>
              <span className='text-gray-500'>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
              </span>
              <div className='flex gap-2 flex-row items-center'>
                <span className='font-medium text-[28px] text-gray-800'>$199.00</span> 
                <span className='text-xl text-gray-500 text-line-through'>$400.00</span>
              </div>
            </div>

            <div className='flex flex-col gap-2  border-b-[1px] pb-4'>
              <span className='text-gray-600'>Offer expires in:</span>
              <div className='flex flex-row items-center gap-4'>
                <div className='flex flex-col items-center gap-1 '>
                  <span className='text-[34px] font-medium text-gray-800 bg-slate-100 px-2 w-[60px] h-[60px] flex justify-center items-center'>02</span>
                  <span className='text-xs text-gray-500'>Days</span>
                </div>
                <div className='flex flex-col items-center gap-1 '>
                  <span className='text-[34px] font-medium text-gray-800 bg-slate-100 px-2 w-[60px] h-[60px] flex justify-center items-center'>12</span>
                  <span className='text-xs text-gray-500'>Hours</span>
                </div>
                <div className='flex flex-col items-center gap-1 '>
                  <span className='text-[34px] font-medium text-gray-800 bg-slate-100 px-2 w-[60px] h-[60px] flex justify-center items-center'>45</span>
                  <span className='text-xs text-gray-500'>Minutes</span>
                </div>
                <div className='flex flex-col items-center gap-1 '>
                  <span className='text-[34px] font-medium text-gray-800 bg-slate-100 px-2 w-[60px] h-[60px] flex justify-center items-center'>05</span>
                  <span className='text-xs text-gray-500'>Seconds</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-6  border-b-[1px] pb-8'>
              <div className='flex flex-col gap-2'>
                <span className='font-semibold text-gray-500'>Measurements</span>
                <span className='text-xl'>17 1/2x20 5/8 "</span>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-2'>
                  <span className='font-semibold text-gray-500'>Close Color</span>
                  <VscChevronRight/>
                </div>
                <span className='text-xl'>Black</span>
              </div>
              <div className='flex flex-row items-center gap-4'>
                <div className='w-[72px] h-[72px] hover:border hover:border-gray-800 cursor-pointer'>
                  <img src={product_img1} alt="pic" className='h-full w-full object-cover'/>
                </div>
                <div className='w-[72px] h-[72px] hover:border hover:border-gray-800 cursor-pointer'>
                  <img src={product_img2} alt="pic" className='h-full w-full object-cover'/>
                </div>
                <div className='w-[72px] h-[72px] hover:border hover:border-gray-800 cursor-pointer'>
                  <img src={product_img3} alt="pic" className='h-full w-full object-cover'/>
                </div>
                <div className='w-[72px] h-[72px] hover:border hover:border-gray-800 cursor-pointer'>
                  <img src={product_img4} alt="pic" className='h-full w-full object-cover'/>
                </div> 
                
              </div>

              <div className='flex flex-row items-center gap-6 mt-8'>
                <div className='md:w-1/4 w-1/2 flex flex-row items-center justify-between h-[52px] bg-gray-100 rounded-lg'>
                  <div className='p-4 cursor-pointer'>
                    <VscChromeMinimize/>
                  </div>
                  
                  <span className='font-semibold'>1</span>
                  <div className='p-4 cursor-pointer'>
                    <VscAdd/> 
                  </div>
                 
                </div>
                <div className='md:w-3/4 w-1/2 flex flex-row items-center justify-center gap-2 border border-gray-800 p-4 h-[52px] rounded-lg cursor-pointer'>
                  <PiHeartLight className='text-lg'/> 
                  <span className='text-lg font-medium block md:hidden lg:block'>Wishlist</span>
                </div>
              </div>

              <div className='h-[52px] rounded-xl flex items-center justify-center cursor-pointer bg-gray-800 hover:bg-gray-700'>
                <span className='block font-medium text-white'>Add to cart</span>
              </div>
              
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-row'>
                <span className='text-xs text-gray-500 w-1/4'>SKU</span>
                <span className='text-xs'>1117</span>
              </div>
              <div className='flex flex-row'>
                <span className='text-xs text-gray-500 w-1/4'>CATEGORY</span>
                <span className='text-xs'>Living Room, Bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-[60px] mx-auto xl:w-[1120px] lg:w-[900px] md:w-[700px] sm:w-[580px] px-3 sm:px-0 pt-8'>
        <div className='flex flex-row sm:gap-16 gap-6 border-b-[1px] border-gray-300'>
          <span className='font-medium text-lg text-gray-500 py-1'>Additional Info</span>
          <span className='font-medium text-lg text-gray-500 py-1'>Questions</span>
          <span className='font-medium text-lg text-gray-800 py-1 border-b-2 border-gray-600'>Reviews</span>
        </div>

        <div className='mt-6 flex flex-col gap-4'>
          <span className='font-medium text-[28px] text-gray-700'>Customer Reviews</span>
          <div className='flex flex-row items-center gap-1 text-sm'>
                
                <PiStarFill/>
                <PiStarFill/>
                <PiStarFill/>
                <PiStarFill/>
                <PiStarFill/>
              
              <span className='ml-2 text-xs'>11 Reviews</span>
          </div>
          <span className='text-gray-600'>Be the first to review <span className='text-gray-800 font-medium'>Tray Table</span></span>
          <div className='flex flex-row items-center relative h-[72px] border-2 border-gray-200 rounded-2xl p-4 sm:mt-0 mt-6'>
            <input type="text" className='flex-1 outline-none px-2'/>
            <div className='sm:w-[176px] w-[100px] h-[40px] bg-gray-800 rounded-full text-white font-medium gap-2 flex items-center justify-center cursor-pointer'>
              <span className='hidden sm:block'>Write Review</span>
              <SlCursor/>
            </div>

            <div className='absolute top-[-34px] right-[12%] shadow-lg shadow-slate-200 p-2 rounded-full bg-white'>
              ❤️ 🙌 👍 😊 🤣 😡
              <div className='absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-white '>
                <PiCaretDownFill/>
              </div>
            </div>
            
          </div>
        </div>

        <div className='flex flex-row justify-between items-center mt-4'>
          <span className='font-medium text-[28px] text-gray-800'>11 Reviews</span>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                Newest
                <svg
                  className={`-mr-1 h-5 w-5 text-gray-400 transform ${isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <Review/>
          <Review/>
          <Review/>
          <Review/>
          <Review/>
        </div>
        <div className='flex flex-row justify-center mt-20'><span className='h-[40px] rounded-full border-[1px] border-gray-800 w-max py-2 px-8 font-medium cursor-pointer text-gray-800'>Load more</span></div>
      </div>
    </>
  )
}
