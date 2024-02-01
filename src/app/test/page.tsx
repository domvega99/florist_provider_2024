import React from 'react'
import {Card, Skeleton} from "@nextui-org/react";

const Test = () => {
  return (
    <div>
        <div>
            <div className='m-2 p-2'>
                <div className='mb-1'>
                    <div className='flex justify-center items-center mb-1'>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-32 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <Skeleton className="w-1/4 rounded-lg">
                            <div className="h-16 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-1/4 rounded-lg">
                            <div className="h-16 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-1/4 rounded-lg">
                            <div className="h-16 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-1/4 rounded-lg">
                            <div className="h-16 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <Skeleton className="w-1/3 rounded-lg">
                            <div className="h-16 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                </div>
                <div className='my-5'>
                    <Skeleton className="w-1/4 rounded-lg">
                        <div className="h-3 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <div className='flex justify-between gap-1 mt-1'>
                        <Skeleton className="w-1/3 rounded-lg">
                            <div className="h-12 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-1/3 rounded-lg">
                            <div className="h-12 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-1/3 rounded-lg">
                            <div className="h-12 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <Skeleton className="w-3/4 rounded-lg">
                        <div className="h-12 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-3/4 rounded-lg">
                        <div className="h-12 rounded-lg bg-default-200"></div>
                    </Skeleton>
                </div>
                <div className='mt-5 flex flex-col gap-3'>
                    <div className='text-sm font-light text-gray-500 flex items-center gap-2'>
                        <Skeleton className="w-1/3 rounded-lg">
                            <div className="h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                    <div className='w-full'>
                        <Skeleton className="w-1/4 rounded-lg">
                            <div className="h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-12 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-1/4 rounded-lg">
                            <div className="h-3 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-16 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                    <div>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-12 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Test