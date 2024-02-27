import React from 'react'
import { PiStarFill } from 'react-icons/pi'
import user_img from './Assets/Images/user-img.png'

export default function Review() {
  return (
    
          <div className='flex flex-row gap-4 border-b-[1px] border-gray-300 py-6'>
              <div className='w-[72px] h-[72px] rounded-full overflow-hidden'>
                <img src={user_img} alt="user img" className='w-full h-full object-contain'/>
              </div>
              <div className='flex-1 flex flex-col gap-4'>
                <span className='text-xl font-semibold text-gray-800'>Sofia Harvets</span>
                <div className='flex flex-row'>
                  <PiStarFill/>
                  <PiStarFill/>
                  <PiStarFill/>
                  <PiStarFill/>
                  <PiStarFill/>
                </div>
                <span className='text-gray-500'>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</span>
                <div className='flex flex-row gap-6'>
                  <span className='text-sm text-gray-400'>About 1 hour ago</span>
                  <span className='text-sm font-medium cursor-pointer'>Like</span>
                  <span className='text-sm font-medium cursor-pointer'>Reply</span>
                </div>
              </div>
          </div>

  )
}
