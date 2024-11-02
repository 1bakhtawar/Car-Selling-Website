"use client";


import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  return (
    <div className='justify-center items-center bg-blue-100'>
        <h1 className='underline text-4xl font-semibold text-center'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & specs</h1>
        <div className='flex justify-center'>
        <Image src="/car3.jpg" alt='car1' width={600} height={600} className='flex mt-7 justify-items-center py-1 px-3 text-base rounded' />
        </div>
         <div className='flex space-x-4 text-sm justify-center'>
        <button className='bg-blue-600 text-white rounded justify-items-center border py-1 px-3 text-base border-blue-600'>Book a test drive</button>
        <button className='bg-white text-blue-600 rounded justify-items-center border py-1 px-3 text-base border-blue-600'>Request Bank finance</button>
        <button className='bg-white text-blue-600 rounded justify-items-center border py-1 px-3 text-base border-blue-600'>Visit Place</button>
        <button className='bg-white text-blue-600 rounded justify-items-center border py-1 px-3 text-base border-blue-600'>Car inspection</button>
        </div>
        <div className='flex p-6 justify-center items-center'>
          <h1>Vehicle description</h1>
        </div>
        <h1 className='text-green-600 flex justify-center mt-4'>PKR 50,00,000</h1>
        <div className='flex justify-center'>
          <button className='bg-blue-800 text-white text-sm p-1 rounded px-3 mt-7 mb-2'>
                <Link href="/paymentform">Make Payment</Link>
            </button>
            </div>
       

      
    </div>
  )
}

export default page
