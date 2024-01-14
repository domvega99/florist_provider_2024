import React from 'react'
import data from '../../../flowers'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const Product = () => {
  return (
    <div>
        <div className='text-customBlack'>
            <div className='flex items-center justify-between ml-2'>
                <h1 className='text-2xl font-bold text-customBlack'>Best Sellers</h1>
            </div>
            <div className='flex flex-row flex-wrap'>
            {data.map((item) => (
                <div key={item.id} className=' w-1/2 p-1'>
                    <div className='relative pb-14 rounded-xl bg-gradient-to-tr from-pink-500 to-customPinks'>
                        <img src={item.image} alt={item.name} className=' rounded-t-xl'/>
                        <div className=' absolute top-0 right-0 p-2 bg-gradient-to-tr from-pink-500 to-customPink rounded-full text-xs h-10 flex justify-between items-center text-white'>Sale</div>
                        <div className='text-white absolute cursor-pointer rounded-b-xl hover:opacity-50 bottom-0 p-1 w-full bg-gradient-to-tr from-pink-500 to-customPink'>
                            <Link href='/cart/flowers' className='flex flex-col justify-center items-center'>
                                <h1 className='text-sm'>Saturns Flower</h1>
                                <div>
                                    <span className=' text-md font-semibold'>$39.99</span>
                                    <span className=' text-xs ml-1 line-through'>$39.99</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Product