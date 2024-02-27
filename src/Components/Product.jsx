import React, { useState } from 'react'
import product_1 from './Assets/Images/product1.png'
import { PiHeartLight } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";

export default function Product() {

    const [isLike, setIsLike] = useState(false);

    const toggleLike = () => {
        setIsLike(!isLike);
    };

  return (
    <div className='h-[432px] w-1/4'>
        <div className='relative'>
            <img src={product_1} alt="product" />
            <div className='flex flex-col gap-2 justify-center absolute top-4 left-4'>
                <span className='block w-max px-3 bg-white rounded font-semibold'>NEW</span>
                <span className='block w-max px-3 bg-[#38CB89] rounded font-medium text-white'>-50%</span>
            </div>
            <div className='w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer shadow-md shadow-slate-300 absolute top-4 right-4'
                onClick={toggleLike}
            >
                {isLike ? <PiHeartFill className='text-xl'/> : <PiHeartLight className='text-xl'/>}
            </div>
            <div className='absolute bottom-4 left-4 right-4 h-[46px] rounded-xl flex items-center justify-center cursor-pointer bg-gray-800 hover:bg-gray-700'>
                <span className='block font-medium text-white'>Add to cart</span>
            </div>
        </div>
        <div className='flex flex-col gap-1 mt-2'>
            <div className='flex flex-row'>
                <PiStarFill/>
                <PiStarFill/>
                <PiStarFill/>
                <PiStarFill/>
                <PiStarFill/>
            </div>
            <div className='font-semibold text-gray-800'>Loveseat Sofa</div>
            <div className='flex gap-2'>
                <span className='font-semibold text-sm text-gray-800'>$199.00</span> <span className='text-sm text-gray-500 text-line-through'>$400.00</span>
            </div>
        </div>

    </div>
  )
}
