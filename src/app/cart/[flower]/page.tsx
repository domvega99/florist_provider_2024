import { Badge, Button, Input, Textarea } from '@nextui-org/react'
import { ChevronLeft, Clock, Flower2, Heart, Share2, ShoppingBag, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Flower = () => {
  return (
    <div>
        <div className='m-2 p-2'>
            <div className='flex justify-between items-center relative'>
                <ChevronLeft size={32} strokeWidth={1.25} absoluteStrokeWidth />
                <div className='px-5 py-2 rounded-md bg-gradient-to-tr from-pink-500 to-yellow-500'>
                    <h1 className=' text-md text-white'>Hat Box Flowers</h1>
                </div>
                <div className='flex justify-center w-10'>
                    <ShoppingBag size={32} strokeWidth={1.25} absoluteStrokeWidth className=' hover:w-7'/>
                    <div className='rounded-full w-2 h-2 bg-orange-500 absolute right-1 top-4'></div>
                </div>
            </div>
            <div className='m-3'>
                <div className='flex justify-center items-center'>
                    <img 
                        src="https://cdn.floristblooms.com/products/134/58272674-15b4-4252-9996-f2abe59f0e1b.jpg" 
                        alt='My flower' 
                        className=' w-4/5 cursor-pointer'/>
                </div>
                <div className='flex items-center justify-center'>
                    <img 
                        src="https://cdn.floristblooms.com/products/134/58272674-15b4-4252-9996-f2abe59f0e1b.jpg" 
                        alt='My flower' 
                        className='w-1/4 cursor-pointer'/>
                    <img 
                        src="https://cdn.floristblooms.com/products/134/4dea5c88-c777-48a0-9ee8-542bb0b38ca3.jpg" 
                        alt='My flower' 
                        className='w-1/4 cursor-pointer'/>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex justify-center w-10'>
                        <Share2 size={32} color="#000000" strokeWidth={1.50} absoluteStrokeWidth className=' hover:w-7'/>
                    </div>
                    <div className='flex items-center'>
                        <Star color='#FFD424' fill='#FFD424' size={24} strokeWidth={1.25} absoluteStrokeWidth />
                        <Star color='#FFD424' fill='#FFD424' size={24} strokeWidth={1.25} absoluteStrokeWidth />
                        <Star color='#FFD424' fill='#FFD424' size={24} strokeWidth={1.25} absoluteStrokeWidth />
                        <Star color='#FFD424' fill='#FFD424' size={24} strokeWidth={1.25} absoluteStrokeWidth />
                        <Star color='#DCDFE0' fill='#DCDFE0' size={24} strokeWidth={1.25} absoluteStrokeWidth />
                        <div className=' text-sm text-gray-500 font-light ml-5'>
                            • 450 review
                        </div>
                    </div>
                    <div className='flex justify-center w-10'>
                        <Heart size={32} color='#FB923C' fill='#FB923C' strokeWidth={1.50} absoluteStrokeWidth className=' hover:w-7'/>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div>
                    <h1 className=' text-sm mb-1 font-light'>Select Size:</h1>
                </div>
                <div className='flex justify-between gap-1 '>
                    <Button className='px-1 rounded-md w-1/3 text-xs' variant='bordered' color='warning'>
                        Standard
                        <Flower2 size={15} color="#F5A524" strokeWidth={1.0} absoluteStrokeWidth />
                    </Button>
                    <Button className='px-1 rounded-md w-1/3 text-xs' variant='bordered' color='warning'>
                        Large
                        <Flower2 size={20} color="#F5A524" strokeWidth={1.0} absoluteStrokeWidth />
                    </Button>
                    <Button className='px-1 rounded-md w-1/3 text-xs' variant='bordered' color='warning'>
                        Deluxe
                        <Flower2 size={25} color="#F5A524" strokeWidth={1.0} absoluteStrokeWidth />
                    </Button>
                </div>
            </div>
            <div className='flex justify-between items-center gap-3'>
                <div className=" text-orange-400 flex items-start">
                    <span className=' text-5xl'>£39</span>
                    <span className=' text-xl'>.99</span>
                </div>
                <div className=' line-through'>
                    <span className=' text-sm'>£69.99</span>
                </div>
                <div className='w-full'>
                    <Input
                        type="number"
                        variant='bordered'
                        label="Quantity"
                        className="max-w-xs"
                    />
                </div>
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                <div className='text-sm font-light text-gray-500 flex items-center gap-2'>
                    <Clock size={18} color="#C8C8C8" strokeWidth={1.0} absoluteStrokeWidth />
                    Cut Off 2pm Same-Day Delivery
                </div>
                <div className='w-full'>
                    <Input
                        type="date"
                        label="Delivery Date"
                        className="max-w-full"
                    />
                </div>
                <div>
                    <Textarea
                        label="Card Message"
                        placeholder="Your Card Message"
                        className="max-w-full"
                    />
                </div>
                <div>
                    <Button 
                        className='rounded-md bg-gradient-to-tr from-pink-500 to-yellow-500 text-white w-full'>
                            Place Order
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Flower