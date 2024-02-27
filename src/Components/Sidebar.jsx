import React from 'react'
import { Transition } from "@headlessui/react";
import { VscChromeClose } from "react-icons/vsc";

export default function Sidebar({isOpen, toggle}) {
  return (
    <Transition
    show={isOpen}
    enter="transition-opacity duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div
        className="fixed inset-y-0 left-0 max-w-xs w-full bg-white 
      shadow-lg transform ease-in-out transition-all duration-300 z-50"
        style={{ width: "80%" }}
      >
        <div className='flex flex-row justify-end'>
            <div 
                className='p-4'
                onClick={toggle}
            >
                <VscChromeClose/>
            </div>
        </div>
        <div>
            <ul className='flex flex-col text-gray-500 font-medium'>
                <li className='text-gray-900 p-4'>Home</li>
                <li className='p-4'>Shop</li>
                <li className='p-4'>Product</li>
                <li className='p-4'>Contact Us</li>                
            </ul>
        </div>
      </div>
    </div>
  </Transition>
  )
}
