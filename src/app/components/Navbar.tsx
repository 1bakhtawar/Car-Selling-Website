import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-black text-white px-10'>

          <div className='flex w-full text-sm py-2 border-b-[1px] border-gray-600'>

            <h1>Download App Via Sms</h1>

         <div className='space-x-20'>  
            <button className='ml-96 pl-96'>اردو</button>
            <button>Sign Up</button>
            <button>Sign In</button>
         </div>
            
          </div>
          <div className='flex space-x-4'>
          <h1 className='text-2xl'> <Link href="/">PAKWHEELSCOM</Link> </h1>
         
       <ul className='flex space-x-4 w-full py-2 justify-end'>
              
              <li>Used Cars</li>
              <li>New Cars</li>
              <li>Bikes</li>
              <li>Auto Stores</li>
              <li>Videos</li>
              <li>Forums</li>
              <li>Blog</li>
              <li>More</li>
              <button className="bg-red-500 text-white font-semibold py-1 px-4 rounded hover:bg-orange-600">
      Post an Add
    </button>
    </ul>
    </div>
           </nav>
      
    </div>
 
  )
}
export default Navbar
