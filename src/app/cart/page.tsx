import { Button, Card, Input } from '@nextui-org/react'
import { DeleteIcon, XCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
  return (
    <div>
      <div>
        <div className='m-5'>
            <div className='flex items-center justify-center'>
                <div className='px-5 py-2 rounded-md bg-gradient-to-tr from-pink-500 to-customPink'>
                    <h1 className=' text-md text-white'>Cart</h1>
                </div>
            </div>
        </div>
        <div className='m-2'>
          <Card>
            <div className='m-2 p-2'>
              <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-md text-gray-500 font-light'>Delivery Date: </h1>
                    <h1 className='text-md text-customBlack font-bold'>January 03, 2023</h1>
                  </div>
                  <div className=''>
                    <h1 className='text-md text-gray-500 font-light'>Your card message: </h1>
                    <h1 className='text-md text-customBlack font-bold'>I love you so much xx</h1>
                  </div>
              </div>
            </div>
          </Card>
        </div>
        <div className='m-2 flex gap-2 flex-col'>
          <Card>
            <div className='p-4 flex gap-1 w-full'>
              <div className='w-1/2'>
                <div className=''>
                  <h1 className='text-sm text-customBlack font-light'>Product: </h1>
                  <p className=' text-customPink font-semibold'>Hatbox Flowers - Standard</p>
                </div>
                <div>
                  <h1 className='text-sm text-customBlack font-light'>Price: </h1>
                  <p className=' text-customPink font-semibold'>£33.99</p>
                </div>
                <div className='my-1'>
                  <h1 className='text-sm text-customBlack font-light'>Quantity: </h1>
                  <div className='flex items-center justify-center gap-1 mt-2'>
                    <div className='text-customPink text-2xl border-1 rounded-xl px-4 py-1 hover:bg-gray-200 cursor-pointer'>-</div>
                    <Input
                      type="number"
                      labelPlacement="outside"
                      defaultValue='1'
                    />
                    <div className='text-customPink text-2xl border-1 rounded-xl px-3 py-1 hover:bg-gray-200 cursor-pointer'>+</div>
                  </div>
                </div>
                <div>
                  <h1 className='text-sm text-customBlack font-light'>Subtotal: </h1>
                  <p className=' text-customPink font-semibold'>£33.99</p>
                </div>
              </div>
              <div className='w-1/2'>
                <div className='border-1 h-full rounded-xl bg-bgcustomPink flex items-center justify-center'>
                  <h1 className='text-white'>Image</h1>
                </div>
              </div>
            </div>
            <div className='flex pb-4 pr-4 justify-end'>
              <div className='p-2 border-1 rounded-full hover:bg-gray-200'>
                <XCircle strokeWidth={1.5} color='#F6AF9B'/>
              </div>
            </div>
          </Card>
        </div>
        <div className='m-1 mx-2'>
          <Card>
            <div className='m-1 p-2'>
              <div className='flex flex-col'>
                  <div>
                    <h1 className='text-md text-gray-500 font-light'>Add a little extra: </h1>
                  </div>
              </div>
            </div>
          </Card>
        </div>
        <div className='m-1'>
          <div className='flex'>
            <div className='w-1/4 h-32 p-1'>
              <Card className='h-full p-2'>
                <div className=' h-4/5 rounded-xl flex items-center justify-center bg-customPink'>image</div>
                <Button className='mt-1 bg-gradient-to-tr from-pink-500 to-customPink text-white text-xs rounded-md'>Add to Cart</Button>
              </Card>
            </div>
            <div className='w-1/4 h-32 p-1'>
              <Card className='h-full p-2'>
                <div className=' h-4/5 rounded-xl flex items-center justify-center bg-customPink'>image</div>
                <Button className='mt-1 bg-gradient-to-tr from-pink-500 to-customPink text-white text-xs rounded-md'>Add to Cart</Button>
              </Card>
            </div>
            <div className='w-1/4 h-32 p-1'>
              <Card className='h-full p-2'>
                <div className=' h-4/5 rounded-xl flex items-center justify-center bg-customPink'>image</div>
                <Button className='mt-1 bg-gradient-to-tr from-pink-500 to-customPink text-white text-xs rounded-md'>Add to Cart</Button>
              </Card>
            </div>
            <div className='w-1/4 h-32 p-1'>
              <Card className='h-full p-2'>
                <div className=' h-4/5 rounded-xl flex items-center justify-center bg-customPink'>image</div>
                <Button className='mt-1 bg-gradient-to-tr from-pink-500 to-customPink text-white text-xs rounded-md'>Add to Cart</Button>
              </Card>
            </div>
          </div>
        </div>
        <div className='m-1 mx-2'>
          <Card>
            <div className='m-2 p-2'>
              <div className='flex flex-col gap-2'>
                  <div>
                    <h1 className='text-md text-customBlack font-bold'>Cart Totals </h1>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-md text-gray-500 font-light'>Subtotal</h1>
                    <h1 className='text-md text-customBlack font-bold'>£33.99</h1>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-md text-gray-500 font-light'>Delivery</h1>
                    <h1 className='text-md text-customBlack font-bold'>£5.99</h1>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-md text-gray-500 font-light'>Total</h1>
                    <h1 className='text-md text-customBlack font-bold'>£39.98</h1>
                  </div>
                  <div className='flex gap-1 my-2'>
                    <Input
                      type="text"
                      labelPlacement="outside"
                      placeholder='Enter voucher code'
                      className='rounded-md'
                    />
                    <Button className=' bg-customPink text-white font-semibold rounded-md'>APPLY</Button>
                  </div>
                  <Link href='/cart'>
                      <Button 
                          className='rounded-md bg-gradient-to-tr from-pink-500 to-customPink text-white w-full'>
                              Proceed to Checkout
                      </Button>
                  </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Cart