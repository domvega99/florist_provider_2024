import { Star } from 'lucide-react'
import React from 'react'

const Reviews = () => {
  return (
    <div>
        <div className='flex items-center m-1 cursor-pointer'>
            <Star color='#FFD424' fill='#FFD424' size={20} strokeWidth={1.25} absoluteStrokeWidth />
            <Star color='#FFD424' fill='#FFD424' size={20} strokeWidth={1.25} absoluteStrokeWidth />
            <Star color='#FFD424' fill='#FFD424' size={20} strokeWidth={1.25} absoluteStrokeWidth />
            <Star color='#FFD424' fill='#FFD424' size={20} strokeWidth={1.25} absoluteStrokeWidth />
            <Star color='#DCDFE0' fill='#DCDFE0' size={20} strokeWidth={1.25} absoluteStrokeWidth />
            <div className=' text-sm text-gray-500 font-light ml-5'>
                • 450 reviews
            </div>
        </div>
    </div>
  )
}

export default Reviews