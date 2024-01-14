import { AlignJustify, ShoppingBag } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex w-full justify-between items-center'>
          <div className='flex justify-center w-10 relative'>
            <AlignJustify size={32} strokeWidth={1.25} absoluteStrokeWidth className=' hover:w-7'/>
          </div>
          <div className=' w-1/2'>
            <img src='images/logo.png' alt='logo'></img>
          </div>
          <div className='flex justify-center w-10 relative'>
              <ShoppingBag size={32} strokeWidth={1.25} absoluteStrokeWidth className=' hover:w-7'/>
              <div className='rounded-full w-2 h-2 bg-gradient-to-tr from-pink-500 to-customPink absolute right-1 top-4'></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar