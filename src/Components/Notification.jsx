import React from 'react'
import percent_icon from './Assets/Images/ticket-percent.png';
import arrow_right_icon from './Assets/Images/arrow-right.png';
import close_icon from './Assets/Images/close.png';
import { VscChromeClose } from "react-icons/vsc";

export default function Notification({setNotifi}) {

  const handleClose = () =>{
    setNotifi(false);
  }
  
  return (
    <div className='bg-[#f3f5f7] flex flex-row items-center py-2 sm:py-0'>
        <div className='flex sm:flex-row flex-col items-center justify-center sm:gap-3 flex-1'>
          <div className='flex flex-row items-center gap-3'>
            <img src={percent_icon} alt="percent icon" />
            <span className='font-medium text-sm'>30% off storewide — Limited time! </span>
          </div>
            
            <div className='flex flex-row items-center border-b-2 border-[#377DFF]'>
                <span className='font-medium text-sm text-[#377DFF]'>Shop Now</span>
                <img src={arrow_right_icon} alt="arrow icon" />
            </div>
        </div>
        <div 
          className='p-2 cursor-pointer'
          onClick={handleClose}
        >
            <VscChromeClose/>
        </div>
        
    </div>
  )
}
