"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  return (
    <div className='justify-center items-center bg-blue-100'>
        <h1 className='underline text-4xl font-semibold text-center'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & specs</h1>
        <div className='flex justify-center'>
        <Image src="/car1.jpg" alt='car1' width={600} height={600} className='flex mt-7 justify-items-center py-1 px-3 text-base rounded' />
        </div>
        <div>
          <p className='flex justify-center items-center text-center pl-10 pr-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed unde pariatur quo quas provident perspiciatis tempora, quod in, debitis accusamus dicta deserunt ratione quis vitae maxime nemo architecto autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum laudantium doloremque sed id, eos sit hic dolores fugiat ad quod odit voluptate accusamus iusto autem voluptatum suscipit eum minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, unde perspiciatis labore impedit, earum dolores, officiis a laudantium consequatur temporibus numquam voluptatum ipsa nemo similique quis ratione aliquid vel sint.
          </p>
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
