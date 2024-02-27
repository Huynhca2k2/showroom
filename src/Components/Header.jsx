import React, { useState } from 'react'
import searct_icon from './Assets/Images/search-icon.png'
import user_icon from './Assets/Images/user-circle.png'
import cart_icon from './Assets/Images/shopping-bag.png'
import Notification from './Notification'
import { VscMenu } from "react-icons/vsc";
import Sidebar from './Sidebar'

export default function Header({notifi, setNotifi}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (

    <div className='min-h-[60px] fixed top-0 left-0 right-0 flex flex-col z-10 bg-white shadow-sm shadow-slate-200'>
        {notifi && <Notification setNotifi={setNotifi}/>}
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
        <div className='sm:mx-auto px-3 sm:px-0 w-full xl:w-[1120px] lg:w-[900px] md:w-[700px] sm:w-[580px] flex flex-row items-center justify-between h-[60px]'>
            <div className='flex flex-row gap-2 items-center'>
                <div
                    className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none md:hidden"
                    onClick={toggleSidebar}
                >
                    <VscMenu className="h-6 w-6" />
                </div>
                <div className='font-medium text-2xl cursor-pointer'>3legant.</div>
            </div>
            
            <div>
                <ul className='md:flex flex-row items-center gap-10 text-gray-500 font-medium hidden'>
                    <li className='text-gray-900'>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-row items-center gap-4 justify-between cursor-pointer'>
                <img src={searct_icon} alt="search icon" />
                <img src={user_icon} alt="user icon" />
                <div className='flex flex-row items-center'>
                    <img src={cart_icon} alt="cart icon" />
                    <div className='rounded-full bg-black text-white w-[20px] h-[20px] text-center text-sm ml-1'>2</div>
                </div>
            </div>
        </div>
        
    </div>

  )
}
