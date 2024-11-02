import React from 'react'
import Link from 'next/link'

const Paymentform = () => {
  return (
    <div className='bg-gray-100 pt-10 pb-10'>
        <h1 className='text-5xl font-bold text-center'>Enter your Details</h1>
        <div>
        <form className="flex flex-col mt-5 gap-5 items-center justify-center py-3 px-7">
            <input type='text' className='border rounded-md p-2 text-sm' placeholder='Enter your Email' />
            <input type="password" className='border rounded-md p-2 text-sm' placeholder='Enter your Password' />
            <input type="number" className='border rounded-md p-2 text-sm' placeholder='Card Number' />
            <input type="adress" className='border rounded-md p-2 text-sm' placeholder='Address' />
            <button className='bg-blue-700 text-white p-2 border rounded-lg text-sm'>
                <Link href="/thankyou">Place your holder</Link>
            </button>
        </form>
      
        </div>
    </div>
  )
}

export default Paymentform
