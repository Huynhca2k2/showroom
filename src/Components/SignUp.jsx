import React, { useEffect } from 'react'
import login_banner from './Assets/Images/login-banner.png'
import { SlEye } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function SignUp({setShowLayout}) {
    useEffect(() => {
        setShowLayout(false);
        return () => {
          setShowLayout(true);
        };
      }, []);

  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='w-1/2 hidden h-[100vh] bg-[#f3f5f7] sm:flex flex-row justify-center relative'>
        <img src={login_banner} alt="login banner" className='object-contain h-full'/>
        <span className='absolute top-6 left-0 right-0 font-medium text-2xl text-center'>3legant.</span>
      </div>
      <div className='sm:w-1/2 max-w-[496px] p-10 md:p-16 sm:p-8 flex flex-col gap-6'>
        <span className='font-medium sm:text-[40px] text-[28px]'>Sign up</span>
        <div>
            <span className='text-gray-400'>Already have an account?</span>
            <Link to='/signin'>
                <span className='text-[#38CB89] font-medium cursor-pointer'> Sign in</span>
            </Link>
            
        </div>
        <form action="" className='flex flex-col gap-4'>
            <input type="text" placeholder='Your name' className='w-full py-2 outline-none border-b-[1px] border-gray-300'/>
            <input type="text" placeholder='Username' className='w-full py-2 outline-none border-b-[1px] border-gray-300'/>
            <input type='email' placeholder='Email address'className='w-full py-2 outline-none border-b-[1px] border-gray-300'/>
            <div className='border-b-[1px] border-gray-300 flex flex-row items-center justify-between'>
                <input type="password" placeholder='Password' className='w-full py-2 outline-none '/>
                <SlEye className='text-xl'/>
            </div>
            
        </form>
        <div className='flex flex-row items-center gap-2'>
            <input type="checkbox" />
            <span className='text-gray-500 text-sm'>I agree with <span className='text-gray-800 font-medium'>Privacy Policy</span> and <span className='text-gray-800 font-medium'>Terms of Use</span></span>
        </div>
        <div className='h-[52px] rounded-xl flex items-center justify-center cursor-pointer bg-gray-800 hover:bg-gray-700'>
            <span className='block font-medium text-white'>Sign Up</span>
        </div>
      </div>
    </div>
  )
}
